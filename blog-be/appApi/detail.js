const Router = require('koa-router')

const mongoose = require('mongoose')

let router = new Router()



// 保存文章
router.post('/save_detial',async(ctx)=>{
    const Detail = mongoose.model('Detail')
    let newDetail = new Detail(ctx.request.body)
    await newDetail.save().then(()=>{
        ctx.body = {
            code:200,
            msg:'保存成功'
        }
    }).catch(err=>{
        console.log(err)
        ctx.body = {
            code: 500,
            msg: err
        }
    })
})


// ! 文章分类及文章类型 这个还不会写，有时间问问别人怎么弄的

// router.get('/type_detail',async(ctx)=>{
//     const typeDetail = mongoose.model('Detail');
//     await typeDetail.findOne(typeId).exec().then(async(result)=>{
//         console.log(result,"result");
//     })
// })

// 更改文章状态，接收参数，1是展示给用户 0是不展示给用户 更改字段 essayStatus

// router.get('/status_detail',async(ctx)=>{
//     const typeDetail = mongoose.model('Detail');
//     await typeDetail.findOne(typeId).exec().then(async(result)=>{
//         console.log(result,"result");
//     })
// })

// // 获取文章详情数据
// router.get('/get_detail',async(ctx)=>{
//     let loginUser = ctx.request.body
//     console.log(loginUser,'loginUser')
//     let userName = loginUser.userName
//     let password = loginUser.password

//     // 数据库查找
//     const Detail = mongoose.model('Detail')

//     await User.findOne({userName:userName}).exec().then(async(result)=>{
//         console.log(result,"result");
//         if(result){
//             let newDetail = new Detail()
//             await newDetail.comparePassword(password,result.password)
//             .then(isMatch=>{
//                 ctx.body = {code:200,msg:isMatch}
//             })
//             .catch(error=>{
//                 console.log(error);
//                 ctx.body = {code:200,msg:error}
//             })
//         }else{
//             ctx.body = {code:200,msg:'用户名不存在'}
//         }
//     }).catch(error=>{
//         console.log(error,"error");
//         ctx.body = {code:500,msg:error}
//     })

// })

module.exports = router
