var http=require("http")
var fs=require("fs")
var ejs=require("ejs")
http.createServer((req,res)=>{
	var datas={
		"list":[
			{
				name:"toy",
				age:12
			},
			{
				name:"tom",
				age:25
			}
		]
	}
	fs.readFile("./index.ejs",(err,data)=>{
		var template=data.toString()
		var result=ejs.render(template,datas)
		res.end(result)
	})
}).listen(3000)