var http=require("http")
var server=http.createServer()
server.on("request",function(request,response){
	//在服务端默认发送的数据，其实是utf-8编码内容
	//但是浏览器不知道你是utf-8编码内容
	//浏览器在不知道服务器相应内容的编码的情况下会按照当前操作系统的默认编码去解析
	//中文操作系统默认是gbk
	//解决方法就是正确的告诉浏览器我给你发送的内容是什么编码t
	//在http协议中，Content-Type就是用来告诉对方我给你发送的数据内容是什么类型
	var url=request.url
	if(url==="/plain"){
		response.setHeader("Content-Type","text/plain; charset=utf-8")
		response.end("hello 世界")
	}else if(url==='/html'){
		response.setHeader("Content-Type","text/html; charset=utf-8")
		response.end("<p>hello html 我的世界</p>")
	}
	
})
server.listen(3000,function(){
	console.log("Server is runing")
})