var fs=require("fs")
fs.readFile("te.text",function(error,data){
	// console.log(error)
	// console.log(data)
	if(error){
		console.log("读取文件失败")
	}else{
		console.log(data.toLocaleString())
	}
	// console.log(data.toLocaleString())
})

// fs.writeFile("te.text","大家好我是nodejs",function(error){
// 	console.log("文件写入成功")
// })