const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
const bcrypt = require('bcrypt')        // 密码加密处理  1993年发明
let ObjectId = Schema.Types.ObjectId    //声明Object类型

const SALT_WORK_FACTOR = 10             // 从1到99 加密强度

//创建我们的用户Schema
const userSchema = new Schema({
    UserId: {type:ObjectId},
    userName: {unique:true,type:String},
    password: String,
    createAt: {type:Date,default:Date.now()},
    lastLoginAt: {type:Date,default:Date.now()}
    
},{ 
    collection:'user'   // 可以增加配置项，改成user 默认会是users    ,{collection:'user'}
})  

userSchema.pre('save',function(next){           // pre的意思是，每一次都触发，第一个参数是触发条件这里是保存的时候触发，第二个是函数，处理触发业务
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{    // 加盐处理
        if(err) return next(err)
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        })
    })        
})

userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,redirect)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}

// ? 发布模型到表

mongoose.model('User',userSchema)    // hint 2个参数第一参数是表的名字，第二个参数是上面Schema模型的名字，这样就与数据库里的表映射上了