const Router = require('koa-router')

let router = new Router()

router.get('/',async(ctx)=>{
    ctx.body = "这是首页接口"
})

router.post('/login',async(ctx)=>{
    ctx.body = "这是用户登录"
})

module.exports = router