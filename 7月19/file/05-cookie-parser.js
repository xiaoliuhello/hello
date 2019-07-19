var express=require("express")
var cookieParser=require("cookie-parser")
var app=express()
app.use(cookieParser())
app.get("/",(req,res)=>{
	//如何设置cookie
	//cookie 字段名  httpOnly:true false  domain域名  MaxAge有效期  size大小  Expries过期时间
	res.cookie("username","tom",{MaxAge:20000,httpOnly:true})
	res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
	var name=req.cookies.username
	console.log(name)
	res.send("获取cookie成功"+name)
})
app.listen(3000,()=>{
	console.log("running...")
})