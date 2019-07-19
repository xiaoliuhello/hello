var http=require("http")
var fs=require("fs")
var template=require("art-template")
http.createServer((req,res)=>{
	fs.readFile("01.html",(err,data)=>{
		var listDate={
			list:['1','2','3']
		}
		var str=data.toString()
		var html=template.render(str,listDate)
		res.end(html)
	})
}).listen(3000,()=>{
	console.log("running...")
})