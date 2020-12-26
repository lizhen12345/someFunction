import {getYiQing} from './api/api'


getYiQing({method:'post'}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})