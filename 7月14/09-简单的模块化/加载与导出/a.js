//require方法有两个作用：
//1.加载文件模块并执行里面的代码
//2.拿到被加载文件模块导出的接口对象

//每个文件模块中都提供一个对象: exports
// expots默认是一个空对象
var ret=require("./b")
console.log(ret.foo)
console.log(ret.add(4,5))
