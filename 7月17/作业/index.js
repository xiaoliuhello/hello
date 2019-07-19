var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	var query=url.parse(req.url,true).query
	
})