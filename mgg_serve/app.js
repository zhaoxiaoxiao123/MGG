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
  host: "127.0.0.1",
  // host:"192.168.247.1",
  user:"root",
  password:"",
  database:"mgg",
  port:3306,
  connectionLimit:15
})
// 3.创建web服务
// var server = express();

// 4.配置跨域模块
// 4.1允许程序列表  脚手架
// 4.2每次请求验证
app.use(cors
({
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://127.0.0.1:5500","http://localhost:5500","http://127.0.0.1:8009"],
  credentials:true
})
)
// app.all("*",function(req,res,next){
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin","*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers","content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options')
//         res.send(200);  //让options尝试请求快速结束
//     else
//         next();
// })

// // 5.指定静态资源目录
app.use(express.static("public"));
// 6.配置session对象
app.use(session({
  secret:"128位安全字符串",//加密条件
  resave:true,//每次请求更新数据
  saveUninitialized:true,//保存初始化数据
}));
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
  var sql="SELECT id FROM mgg_login WHERE phone=? AND captcha=?"
  // 3.执行sql语法并且获取返回结果
  pool.query(sql,[p,c],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    } else {
      req.session.uid = result[0].id;
      //将当前登录用户id保存session对象中作业:登录凭证
      res.send({code:1,msg:"登录成功"})
    }
  })
})

// 功能：产品系列
app.get("/family", (req, res) => { 
  var sql = "SELECT fid,fname,fdes,fpic FROM mgg_family";
  pool.query(sql, (err, result) => { 
    if (err) throw err;
    res.send(result);
  })
})

// 功能：产品列表
app.get("/list", (req, res) => { 
  var fname = req.query.fname;
  var sql = "SELECT lid,lname,lpic,lprice FROM mgg_list WHERE fname=?";
  pool.query(sql,[fname] ,(err, result) => { 
    if (err) throw err;
    res.send(result);
  })
})

//功能:将商品添加至购物车
app.get("/addcart", (req, res) => {
  var uid = req.session.uid;
  //如果当前用户没有登录凭证  输出请登录
  if(!uid){
      res.send({code:-2,msg:"请登录"});
      return;
  }
  //3:获取脚手架传递数据 lid,lname,price
  var pid = req.query.lid;
  var pname = req.query.lname;
  var price = req.query.price;
  var pic = req.query.lpic;
  // console.log(pid,pname,price,pic)
  //4:创建sql语句 查询当前用户是否购买过此商品
  // var sql = "SELECT id FROM mgg_cart WHERE uid=? AND pid=?";
  var sql = "SELECT id FROM mgg_cart WHERE uid=? AND pid=?";
  //5:执行sql语句
  pool.query(sql, [uid, pid], (err, result) => {
    //6:在回调函数(钩子函数)
    if (err) throw err;
    //7:获取查询结果[判断是否购买过此商品]
    if (result.length == 0) {
      //8:如果没买过此商品 创建INSERT SQL
      var sql = `INSERT INTO mgg_cart VALUES(null,${pid},'${pname}',${price},1,'${pic}',${uid})`;
    } else {
      //9:如果己购买过此商品 创建UPDATE SQL
      var sql = `UPDATE mgg_cart SET count=count+1 WHERE uid=${uid} AND pid=${pid}`;
    }
    //10:执行sql
    //11:返回结果脚手架
    pool.query(sql, (err, result) => {
      if (err) throw err;
      res.send({ code: 1, msg: "添加成功" })
    })
  })
})

// http://127.0.0.1:5500/addcart?pid=1&price=9&pname=aa
// http://127.0.0.1:5500/login?phone=15053163566&captcha=123456

//功能：购物车列表
app.get('/findcart', (req, res) => { 
  var uid = req.session.uid;
  //如果当前用户没有登录凭证  输出请登录
  if(!uid){
      res.send({code:-2,msg:"请登录"});
      return;
  }

  var sql = 'SELECT id,pid,pname,price,count,pic FROM mgg_cart WHERE uid=?';
  pool.query(sql, [uid],(err,result) => { 
    if (err) throw err;
    res.send({code:1,msg:'ok',data:result})
  })
})

// 删除一条商品
app.get('/del', (req, res) => { 
  var uid = req.session.uid;
  if (!uid) { 
    res.send({ code: -2, msg: "请登录" });
    return;
  }
  
  var id = req.query.id;
  sql = "DELETE FROM mgg_cart WHERE id=? AND uid=?";
  pool.query(sql, [id, uid], (err, result) => { 
    if (err) throw err;
    if (result.affectedRows > 0)
      res.send({ code: 1, msg: "删除成功" });
    else
      res.send({code:-1,mag:"删除失败"})
  })
})

// 删除选中商品
app.get("/delm", (req, res) => { 
  var uid = req.session.uid;
  if (!uid) { 
    res.send({code:-2,msg:'请登录'})
    return;
  }

  id = req.query.id;
  console.log(id)
  sql = `DELETE FROM mgg_cart WHERE id IN (${id})`;
  pool.query(sql, (err, result) => { 
    if (err) throw err;
    if (result.affectedRows > 0) {
      // console.log(result)
      res.send({ code: 1, msg: '删除成功' });
    } else { 
      res.send({ code: -1, msg: '删除失败' });
    }
  })
})

// 穿搭攻略
app.get('/method', (req, res) => { 
  var sql = "SELECT id,pic,title,des FROM mgg_method";
  pool.query(sql, (err, result) => { 
    if (err) throw err;
    res.send({ code: 1, msg: 'ok', data: result });
  })
})