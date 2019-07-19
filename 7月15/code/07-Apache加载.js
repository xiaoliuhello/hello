var http=require("http")
var fs=require("fs")
var wwwDir="C:/OS/app/www"
var template=require('art-template')
http.createServer((req,res)=>{
	var url=req.url
	fs.readFile("")
	var htm=template.render(data.toString(),{
		name:'',
	})
}).listen(3000)