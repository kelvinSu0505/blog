const fs = require('fs');                                         // 主要用于文件解析
const mongoose = require("mongoose");      
const bodyParser = require('body-parser');                          // body-parser 中间件就可以了 处理Post请求
const urlLib = require('url');                                    // 主要用于get 请求解析数据
const express = require('express');

const db = mongoose.connect('mongodb://127.0.0.1:27017/blog',function(err){ // 连接数据库
    if(err){
        console.log('连接数据库失败')
    }else{
        console.log('连接数据库成功')
    }
});         

// 创建模型  主要用于定义MongoDB中集合Collection里文档document的结构　
// 定义Schema非常简单，指定字段名和类型即可，支持的类型包括以下8种
// 1、String => 字符串,2、Number => 数字,3、Date => 日期,4、Buffer => 二进制,5、Boolean => 布尔值,6、Mixed => 混合类型,7、ObjectId => 对象ID,8、Array => 数组

var Schema = mongoose.Schema;


// 通过mongoose.Schema来调用Schema，然后使用new方法来创建schema对象

var userScheMa = new Schema({
	user_name: String,
	user_pw: String
});

// 定义了一个新的模型，但是此模式还未和users集合有关联
// exports.user = db.model('user', userScheMa); //  与users集合关联
// [注意]创建Schema对象时，声明字段类型有两种方法，一种是首字母大写的字段类型，另一种是引号包含的小写字段类型

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit:'1mb'}));

// // 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });

var isOK={
    data:{
        code:200,
        msg:'登陆成功'
    }
}
app.post('/blog/login',function(req,res){
    console.log('进入post请求')
    let userName = req.body.user_name;
    let userPw = req.body.user_pw;
    console.log(req.body,"body")
    res.status(200)
    res.json(isOK)
});

app.listen(8080);