var http=require("http")
var fs=require("fs")
// a=>append 追加   r=read 读   w=write 写
http.createServer((req,res)=>{
// 	fs.readFile("./02.text",(err,data)=>{
// 		fs.writeFile("./020.text",data,(err)=>{
// 			res.end("success")
// 		})
// 	})
	//copyFile复制
// 	fs.copyFile("./02.text","./020.text",(err)=>{
// 		res.end("复制成功")
// 	})
// 	//rename 改名
// 	fs.copyFile("./020.text","./0200.text",(err)=>{
// 		res.end("改名成功")
// 	})
	//unlink 改名
// 	fs.unlick("./0200.text",(err)=>{
// 		res.end("删除成功")
// 	})
//	mkdir 创建目录
// 	fs.mkdir("./aa",(err)=>{
// 		res.end("success")
// 	})
	//rmdir 删除目录
// 	fs.rmdir("./aa",(err)=>{
// 		res.end("success")
// 	})
//readdir 读取目录
// 	fs.readdir("./node_modules",(err,data)=>{
// 		console.log(data)
// 		res.end("success")
// 	})
   // stat  查看目录信息
//    fs.stat("./aa",(err,stats)=>{
// 	   console.log(stats.isFile())
// 	   console.log(stats.isDirectory())
// 	   res.end()
//    })
	//流  文件流   stream         createReadStream创建一个读取文件流
	var stream=fs.createReadStream("./02.text")
	var content=""
	stream.on("data",(err,chunk)=>{
		console.log(chunk)
		content+=chunk
	})
	stream.on("end",(err)=>{
		console.log("数据接收完毕")
	})
	res.end()
}).listen(3000,()=>{
	console.log("running...")
})