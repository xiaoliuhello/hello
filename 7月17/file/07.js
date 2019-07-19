var http=require("http")
var fd=require("formidable")
var sd=require("silly-datetime")
var path=require("path")
var fs=require("fs")

http.createServer((req,res)=>{
	var url=req.url
	if(url=="/favicon.ico"){
		return
	}
	if(url=="/dopost"){
		var form=new fd.IncomingForm()
		console.log(form)
		form.uploadDir="./upload"
		form.parse(req,function(err,fields,files){
			
			//fields文本域    files文件域
			var oldpath=files.pic.path
			console.log(oldpath)
			var extname=path.extname(files.pic.name)
			console.log(extname)
			var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
			var newpath="upload/"+tt+extname
			console.log(newpath)
			fs.rename(oldpath,newpath,(err)=>{
				res.end("success")
			})
			
		})
	}
}).listen(3000,()=>{
	console.log("running...")
})