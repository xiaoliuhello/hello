var http=require("http")
var url=require("url")
var router=require("./03")
http.createServer((req,res)=>{
	if(req.url=="/"){
		router.showIndex(req,res)
	}else if(req.url=="/1"){
		router.showAbout(req,res)
	}else if(req.url=="/2"){
		router.showNew(req,res)		
	}else if(req.url=="/3"){
		router.show404(req,res)
	}
		
	
}).listen(3000)