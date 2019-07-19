var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	var oldquery=url.parse(req.url).query
	var query=url.parse(req.url,true).query
	console.log(oldquery)
	// var query=url.resolve("https://www.baidu.com",req.url)
	console.log(query)
	res.end()
}).listen(3000)