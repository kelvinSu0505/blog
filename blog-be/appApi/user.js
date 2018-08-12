const Router = require('koa-router')

const mongoose = require('mongoose')

let router = new Router()



// 注册接口
router.post('/register',async(ctx)=>{
    const User = mongoose.model('User')
    let newUser = new User(ctx.request.body)
    await newUser.save().then(()=>{
        ctx.body = {
            code:200,
            msg:'注册成功'
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            msg: err
        }
    })
})


// 登录接口
router.post('/login',async(ctx)=>{
    let loginUser = ctx.request.body
    console.log(loginUser,'loginUser')
    let userName = loginUser.userName
    let password = loginUser.password

    // 数据库查找
    const User = mongoose.model('User')

    await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result,"result");
        if(result){
            let newUser = new User()
            await newUser.comparePassword(password,result.password)
            .then(isMatch=>{
                ctx.body = {code:200,msg:isMatch}
            })
            .catch(error=>{
                console.log(error);
                ctx.body = {code:200,msg:error}
            })
        }else{
            ctx.body = {code:200,msg:'用户名不存在'}
        }
    }).catch(error=>{
        console.log(error,"error");
        ctx.body = {code:500,msg:error}
    })

})

module.exports = router