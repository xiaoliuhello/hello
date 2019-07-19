var http=require("http")
var fs=require("fs")
var server=http.createServer()
var wwwDir="C:/OS/app/www"
server.on("request",(request,response)=>{
	
	var url=request.url
	var filePath="/index.html"
	if(url !== "/"){
		filePath=url
	}
	// console.log(filePath,wwwDir+filePath)
	fs.readFile(wwwDir+filePath,(error,data)=>{
		if(error){
			return response.end("404 Not Fund")
		}else{
			response.end(data)
		}
	})
})
server.listen(3000,()=>{
	console.log("runing")
})