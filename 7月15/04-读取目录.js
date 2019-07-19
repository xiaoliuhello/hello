var fs=require("fs")
fs.readdir("C:/OS/app/www",(err,files)=>{
	if(err){
		return console.log("目录不存在")
	}
	console.log(files)
})