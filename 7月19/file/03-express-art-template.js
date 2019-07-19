var express=require("express")
var art=require("express-art-template")
var app=express()
app.engine("art",art)
app.get("/",(req,res)=>{
	//.art 必须写上，不然new文件 识别不到express-art-tempalte模板引擎
	res.render('new.art',{
		list:["1,","2","3"]
	})
})
app.listen(3000,()=>{
	console.log("running...")
})
