var http=require("http")
var fs=require("fs")
var server=http.createServer()
var wwwDir="C:/OS/app/www"
server.on("request",(request,response)=>{
	var url=request.url
	fs.readFile("template.html",(error,data)=>{
		if (error){
			return response.end("404 Not Found")
		}
		//1. 如何得到wwwDir目录列表中的文件名和目录名
		//2.1 在template.html 中要替换的位置预留一个标志
		//2.2根据files生成需要的html内容
		// fs.readdir
		fs.readdir(wwwDir,(err,files)=>{
			if(err){
				return response.end("Can not find www dir")
			}
			var content=''
			files.forEach(function(item){
					content+=`
					 <tr class="header" id="theader">
					  <th onclick="javascript:sortTable(0);">${item}</th>
					  <th class="detailsColumn" onclick="javascript:sortTable(1);">
						大小
					  </th>
					  <th class="detailsColumn" onclick="javascript:sortTable(2);">
						修改日期
					  </th>
					</tr>
				`
				
			})
			data = data.toString()
			data = data.replace("名称",content)
			console.log(data)
			
			//3.发送解析替换的响应
			response.end(data)
		})
		
	})
})
server.listen(3000,()=>{
	console.log("running...")
})