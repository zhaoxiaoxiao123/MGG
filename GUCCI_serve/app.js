// 服务器程序
// 1.引入四个模块
const express = require("express");  //web服务器模块
const mysql = require("mysql");  //mysql模块
const session = require("express-session");  //session模块
const cors = require("cors");  //跨域
var app = express();
var server = require("http").createServer(app);
server.listen(5500);
//2.创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"gucci",
  port:3306,
  connectionLimit:15
})
// 3.创建web服务
// var server = express();

// 4.配置跨域模块
// 4.1允许程序列表  脚手架
// 4.2每次请求验证
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))
// // 5.指定静态资源目录
app.use(express.static("public"));
// // 6.配置session对象
// // 7.为服务器绑定监听端口

// server.listen(5000);
console.log("服务器启动成功...");
// 8.为io对象绑定默认事件connection
// var io = require("socket.io")(server);   //io对象
// io.on("connection",(socket)=>{
//   console.log("客户端连接成功"+socket.id);
// })


// 功能一：用户登录验证
app.get("/login",(req,res)=>{
  // 1.获取脚手架传递手机号和验证码
  var p = req.query.phone;
  var c = req.query.captcha;
  // 2.创建sql语法并且将用户名和密码加入
  var sql="SELECT id FROM gucci_login WHERE phone=? AND captcha=?"
  // 3.执行sql语法并且获取返回结果
  pool.query(sql,[p,c],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
      res.send({code:1,msg:"登录成功"})
    }
  })
})

//测试:
//启动服务器  node app.js
//打开浏览器在地址栏输入
//      http://127.0.0.1:5000/login?phone=15053163566&captcha=123456