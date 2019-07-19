var express=require('express')
//2.创建你的服务器应用程序
// 也就是原来的htto.creatrServer()
var app=express()
//公开指定目录
app.use("/public",express.static("./public"))
//当服务器收到get请求时，执行回调处理函数
app.get("/",function(req,res){
	console.log(req.query)
	res.send("hello express")
})
app.get("/about",function(req,res){
	res.send("nihao ")
})
app.listen(3000,()=>{
	console.log("app in running at port 3000.")
})