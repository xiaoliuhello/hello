var http=require("http")
var fs=require("fs")
var url=require("url")
http.createServer((req,res)=>{
	var query=url.parse(req.url,true).query
	console.log(query)
	if(query.username=="teacher"||query.username=="student"){
		res.setHeader("Content-Type","text/html;charset=utf-8")
		res.end("这个"+query.username+"的工号为"+query.password)
	}
	res.end()
}).listen(3000,()=>{
	console.log("running...")
})