var http = require("http")
var fs = require("fs")
var server = http.createServer()
var wwwDir= 'C:/OS/app/www'
server.on("request", (request, response) => {
	var url = request.url
	if (url === "/") {
		fs.readFile(wwwDir+"/index.html", (error, data) => {
			// 			if(error){
			// 				response.end('404 Not Found')
			// 			}else{
			// 				
			// 			}

			if (error) {
				//return 有两个作用：
				//1.方法返回值
				//2.阻止代码继续往后执行
				return response.end('404 Not Found')
			}
			response.end(data)
		})
	} else if (url === "/a.text") {
		fs.readFile(wwwDir+"/a.text", (error, data) => {
			if (error) {
				return response.end('404 Not Found')
			}
			response.end(data)
		})
	} else if (url === "/index.html") {
		fs.readFile(wwwDir+"/index.html", (error, data) => {
			if (error) {
				return response.end('404 Not Found')
			}
			response.end(data)
		})
	} else if (url === "/login.html"){
		fs.readFile(wwwDir+"/apple/login.html", (error, data) => {
			if (error) {
				return response.end('404 Not Found')
			}
			response.end(data)
		})
	}
})
server.listen(3000, () => {
	console.log("server is ruing")
})
