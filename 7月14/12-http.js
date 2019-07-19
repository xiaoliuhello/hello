//1.结合fs发送文件中的数据
//2.Content-Type
// http://tool.oschina.net/commons
//	图片不需要指定编码
//	一般只为字符数据才指定编码
//

var http=require("http")
var fs=require("fs")
var server=http.createServer()
server.on("request",function(request,response){
	var url=request.url
	if(url==="/"){
		fs.readFile("./resource/index.html",function(error,data){
			if(error){
				response.setHeader("Content-Type","text/plain;charset=utf-8")
				response.end("文件读取失败，请稍后重试")
			}else{
				//data 默认是二进制数据，可以通过.toString转为能识别的字符串
				response.setHeader("Content-Type","text/html;charset=utf-8")
				response.end(data)
			}
		})
	}else if(url === "/a"){
		fs.readFile("./resource/ab2.png",function(error,data){
			if(error){
				response.setHeader("Content-Type","text/plain;charset=utf-8")
				response.end("文件读取失败，请稍后重试")
			}else{
				//data 默认是二进制数据，可以通过.toString转为能识别的字符串
				response.setHeader("Content-Type","image/png;")
				response.end(data)
			}
		})
	}
	
})
server.listen(3000,function(){
	console.log("Server is runing")
})