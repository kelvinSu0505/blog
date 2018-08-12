const Router = require('koa-router')

let router = new Router()

router.get('/',async(ctx)=>{
    ctx.body = "这是用户操作首页"
})

router.post('/login',async(ctx)=>{
    ctx.body = "这是用户登录"
})

module.exports = router