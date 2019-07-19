/**
 *
 cookie的加密：


 1.参数表示加密的随机字符串
 app.use(cookieParser('sign'));

 2.设置
 res.cookie('userinfo','cookie222_info',{maxAge:600000,signed:true});


 3.使用  获取

 req.signedCookies
 *
 */
var express  = require('express');

var cookieParser = require('cookie-parser');

var app = express();

// 设置中间件
// 123456 是设置的加密算法
app.use(cookieParser('123456'));


app.get("/get",function(req,res){

    //获取加密的cookie信息
    console.log(req.signedCookies);
    res.send("获取cookie成功");
});
app.get("/set",function(req,res){


    //参数1：名字
    //参数2:cookie的值
    //参数3：cookie的配置信息
    res.cookie('userinfo','cookie_value',{maxAge:600000,signed:true});
    res.send("设置cookie成功");

});


app.listen(3000,()=>{
	console.log('running...')
});
