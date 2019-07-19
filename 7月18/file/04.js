//send和end的区别
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
	res.send("success")
}).get("/about/:id",(req,res)=>{
	res.send("路由参数为:"+req.params.id)
})

app.listen(3000,()=>{
	console.log("running....")
})