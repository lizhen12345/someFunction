//首先  promise是一个es6中解决异步的方法，他避免了回调地狱，
//他有三个状态，pendding，rejected，refulled三个状态，
//每一个promsie都有自己的resolve，和reject方法，

//promise的缺点
// 1）无法取消Promise，一旦新建它就会立即执行，无法中途取消。
// 2）如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
// 3）当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
// 4）then的写法相比await，明显在程序代码抒写上，更加繁琐。建议promise和async，awiat一起食用，效果更佳

//我们这要写源码的话，我们需要知道了上面这么多，下面开始写

function MyPromise(callback) {
  let self = this; //保存this值
  let state = null; //记录promise的状态，null为pendding true为resolve，false为reject
  let param = null; //记录resolve的参数
  // then方法返回的promise对象的resolve和reject
  var nextResolve = null;
  var nextReject = null;
  // 记录then方法的参数，onFulfilled和onRejected
  var asynconFulfilled = null;
  var asynconRejected = null;
  callback(resolve, reject); //执行传入的callback并改变promise的状态
  function resolve(data) {
    state = true;
    param = data;
    //执行记录的onFulfilled
    if(nextResolve){
        doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject,param)
    }
  }
  function reject(err) {
    state = false;
    param = err;
    if(nextReject){
        doAsynconRejected(asynconRejected, nextResolve, nextReject,param)
    }
  }
  //没有then方法没有灵魂，then方法返回的也是个promise,then的参数是函数
  this.then = function (onFulfilled, onRejected) {
    return new self.constructor(function (resolve, reject) {
      //todo
      //在promise中的变为resolve或者reject时，这里开始执行
      if (state === true) {
        doAsynconFulfilled(onFulfilled, resolve, reject,param)
      } else if (state === false) {
        doAsynconRejected(onRejected, resolve, reject,param)
      } else {
        //如果promise没有执行完怎么办
        nextResolve = resolve;
        nextReject = reject;
        asynconFulfilled = onFulfilled;
        asynconRejected = onRejected;
      }
    });
  };
}

function doAsynconFulfilled(onFulfilled, resolve, reject,param) {
  setTimeout(() => {
    if (typeof onFulfilled === "function") {
      //参数onFulfilled必须是个函数
      // 如果then方法返回的还是一个promise对象，用来记录onFulfilled执行结果
      let promise = onFulfilled(param);
      if (promise === undefined) {
          resolve(param)
        //// 如果parmise为undefined,就不能解析parmise.constructor
      } else if (promise.constructor === self.constructor) {
        // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态执行resolve或reject
        // 注意，这个param是形参，在then方法的promise中执行
        promise.then(
          (param) => resolve(param),
          (param) => reject(param)
        );
      } else {
        // 这个是前边的then返回的不是promise对象的情况
        resolve(promise);
      }
    } else {
      resolve(param); //若不是函数，reject
    }
  }, 0);
}

function doAsynconRejected(onRejected, resolve, reject,param) {
    setTimeout(() => {
      if (typeof onRejected === "function") {
        //参数onFulfilled必须是个函数
        // 如果then方法返回的还是一个promise对象，用来记录onFulfilled执行结果
        let promise = onRejected(param);
        if (promise === undefined) {
            reject(param)
          //// 如果parmise为undefined,就不能解析parmise.constructor
        } else if (promise.constructor === self.constructor) {
          // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态执行resolve或reject
          // 注意，这个param是形参，在then方法的promise中执行
          promise.then(
            (param) => resolve(param),
            (param) => reject(param)
          );
        } else {
          // 这个是前边的then返回的不是promise对象的情况
          reject(promise);
        }
      } else {
        reject(param); //若不是函数，reject
      }
    }, 0);
  }
 // 测试使用
