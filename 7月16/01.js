var http=require("http")
var fs=require("fs")
http.createServer((request,response)=>{
	var url=request.url
	if(url == "/"){
		fs.readFile("1.html",(error,data)=>{
			if(error){
				response.end("文件读取失败")
			}else{
				response.end(data)
			}
		})
	}else if(url == "/2"){
		fs.readFile("2.html",(error,data)=>{
			if(error){
				response.end("文件读取失败")
			}else{
				response.end(data)
			}
		})
	}
}).listen(3000)