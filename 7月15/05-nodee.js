// art -template 
// 不仅可以在浏览器使用,也可以在node 中使用
//安装:
// npm install art-template
// 不能改,也不支持改路径
//模板引擎醉倒诞生于服务器领域,后来才发展到前端

//1.安装
//2.在需要使用的文件模块中加载art-template
//3.查文档.舒勇模板引擎的api

var template=require("art-template")
var ret=template.render("hello {{name}}",{
	name:"jack"
})
console.log(ret)