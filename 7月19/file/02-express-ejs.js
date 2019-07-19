var express=require("express")
var fs=require("fs")
var app=express()

//设置模板引擎
// engine 引擎

//设置模板引擎为ejs
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
// app.engine("view engine","ejs")

app.get("/",(req,res)=>{
	var list=["1","2","3"]
	res.render("index",{list:list})
})
app.listen(3000,()=>{
	console.log("running...")
})