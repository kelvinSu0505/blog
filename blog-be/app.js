
const Koa = require('koa')

const app = new Koa()

const mongoose = require('mongoose')

const bodyParser = require('koa-bodyparser')    // 用于接收post数据

const Router = require('koa-router')

const cors = require('koa2-cors')

//引入connect
const { connect , initSchemas } = require('./database/init.js')

app.use(bodyParser())
app.use(cors())

let user = require('./appApi/user.js')
let home = require('./appApi/home.js')
// 装载所有子路由

let router = new Router()

router.use('/user',user.routes())
router.use('/home',home.routes())
// 加载路由中间件

app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
})()

app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})