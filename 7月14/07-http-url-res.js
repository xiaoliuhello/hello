var http=require("http")
//1.创建server
var server=http.createServer()
//2.监听request请求,设置请求处理函数
server.on('request',function(request,response){
	console.log("收到请求，请求路径是："+request.url)
	console.log("请求我的客户端的地址是：",request.socket.remoteAddress,request.socket.remotePort)
// 	response.write("hello")
// 	response.write("world")
// 	response.end()
	// response.end("liuqiang nihao ")
	//根据不同的请求路径发送不同的响应结果
	//1.获取请求路径
	//2.判断路径处理响应
	var url=request.url
// 	if(url=="/"){
// 		response.end("index page")
// 	}else if(url=="/login"){
// 		response.end("login page")
// 	}else{
// 		response.end("404 Not Found.")
// 	}
	
	if(url=="/products"){
		var products=[
			{
				name:"苹果x",
				price:8888
			},
			{
				name:"vivo",
				price:888
			},
			{
				name:"oppo",
				price:2000
			}
		]
		response.end(JSON.stringify(products))
		
	}
	
})
//3.绑定端口号,启动服务
server.listen(3000,function(){
	console.log("服务器启动成功")
})