///这里给一个字符串的时间戳，转化成繁体字写的日期
//

function CNDateString( timestring ) {
    // write code here
    let timeNow = parseInt(timestring)
    let dateNow = new Date(timeNow)
    let Year = dateNow.getFullYear()
    let Month = dateNow.getMonth()+1
    let Day = dateNow.getDate()
    let obj = {'1':'壹','2':'贰','3':'叁','4':'肆','5':'伍','6':'陆','7':'柒','8':'捌','9':'玖','10':'拾','0':'零'}
    let arr_Year = (''+Year).split('')
    let res = ''
    arr_Year.map(ele=>res += obj[ele])
    res += '年'
    let arr_Month = (''+Month).split('')
    if(arr_Month.length>1){
        res = res + '拾' +( parseInt(arr_Month[1])>0?obj[arr_Month[1]]:'')
    }else{
        res += obj[arr_Month[0]]
    }
    
    res += '月'
    let arr_Day = (''+Day).split('')
    if(arr_Day.length>1){
        let temp = parseInt(arr_Day[0])>1? obj[arr_Day[0]]:''
        
        
        res = res + temp + '拾' + obj[arr_Day[1]]
    }else{
        res += obj[arr_Day[0]]
    }
    res += '日'
    console.log(Month);
    return res
}

console.log(CNDateString("1597806189379"));