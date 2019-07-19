var http=require("http")
var server=http.createServer()
//request请求时间处理函数，需要接受两个参数
//request请求对象
//请求对象可以用来获取客户端的一些请求信息，例如请求路径
//response相应请求
//相应对象可以用来给客户端发送相应消息
server.on('request',function(request,response){
	console.log("收到客户端的请求了,请求路径是:"+request.url)
	response.write("hello")
	response.end()
	
	//response对象有一个方法:write可以用来给客户端发送相应数据
	//write 可以使用多次，但是最后一定要使用end来结束相应，否则客户端一直等待
})
server.listen(3000,function(){
	console.log("服务器启动成功了，可以通过")
})