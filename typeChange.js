//隐式类型转换
//坑一，字符串连接符与算术运算符隐式转换规则混淆

//坑二：关系运算符：会把其他数据类型转换成number之后再比较关系
// 坑三：复杂数据类型在隐式转换时会先转成String，然后再转成Number运算
// 坑四：逻辑非隐式转换与关系运算符隐式转换搞混淆

console.log(1+'1');
// +将数字转换为string

console.log([] == 0);//true
[].valueof.toString

console.log(![]==0);//true
//空数组转布尔值得到true 所以转为0


链接:https://blog.csdn.net/itcast_cn/article/details/82887895