//如何解决精度丢失问题
//解决js中的精度丢失问题
//为什么会有这个问题呢：这是由于计算机中二进制实现和位数限制，是一直存在的一个问题

//浮点数转换为整数
function toInt(num){
    var rel = {};
    var str,pos,len,times;
    str = (num < 0) ? -num + '' : num + ''; 
    pos = str.indexOf('.');
    len = str.substr(pos+1).length;
    times = Math.pow(10, len+1); //补充：当小数位数较多时，避免出错，所以多扩大一倍，提高精度
    rel.times = times;
    rel.num =  num;
    return rel;
}

//计算过程
function operate(a,b,op){
    var d1 = toInt(a);
    var d2 = toInt(b);
    var max = d1.times > d2.times ? d1.times : d2.times;
    var rel;
    switch(op){
        case "+" :
            rel = (d1.num * max + d2.num * max) / max;
            break;
        case "-" :
            rel = (d1.num * max - d2.num * max) / max;
            break;
        case "*" :
            rel = ((d1.num * max) * (d2.num * max)) / (max * max);
            break;
        case "/" :
            rel = (d1.num * max) / (d2.num * max);
            break;
    }
    return rel;
}

var rel = operate(0.3,0.1,"+");   //0.4

console.log(rel);