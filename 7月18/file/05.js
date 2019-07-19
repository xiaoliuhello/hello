var express=require("express")
var app=express()
app.post("/new",(req,res)=>{
	console.log(req.query)
	res.send("接收到了")
})
app.listen(3000,()=>{
	console.log("running...")
})