/*
 * @Author: Yorke 
 * @Date: 2018-06-27 14:27:50 
 * @Last Modified by: Yorke
 * @Last Modified time: 2018-06-27 16:31:52
 * 路由配置
 */


 
// 引入单独处理对应逻辑的文件

var Index = require('../controllers/index.js');               // 首页相关逻辑
var User = require('../controllers/user.js');                 // 用户相关逻辑
var Essay = require('../controllers/essay.js');               // 文章相关逻辑
var About = require('../controllers/about.js');               // 关于相关逻辑
var Other = require('../controllers/other.js');               // 其他功能相关逻辑

module.exports = function (app){
    /*
        注释:  
    */


    // Index 
    app.get('/index',Index.index);                      // 博客首页

    // admin user
    app.get('/blog/login',User.login);                  // admin管理页面登录

    // Essay 
    
}