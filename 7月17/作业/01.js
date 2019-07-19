var http=require("http")
var path=require("path")
http.createServer((req,res)=>{
	//path.resolve会将最后一个参数转换为绝对路径
	// var oldpath=path.resolve("./7月17")
	//
	//path.normalize()路径的格式化
	// var oldpath=path.normalize("/a/d/b/d")
	
	//path.extname()获取文件的扩展名
	// var oldpath=path.extname("index.html")
	
	//path.format()将对象转还为路径
	var oldpath=path.format({
		root:"",
		dir:"c:\a\b",
		base:"\a"
	})
	console.log(oldpath)
	//path.isAbsolute() 返回绝对路径
	//path.join()
	res.end()
}).listen(3000)