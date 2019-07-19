var http=require("http")
var url=require("url")
var fs=require("fs")
http.createServer((req,res)=>{
	fs.readFile("./index.html",(err,data)=>{
		// console.log(111)
		var query=url.parse(req.url,true).query
		if(query.aname==aaaa.aname&&query.amima==aaaa.amima){
			console.log("成功")
			// return
		}else{
			console.log("失败")
		}
		res.end(data)
	})
}).listen(3000)
var aaaa={
	aname:"liu",
	amima:"123456"
}