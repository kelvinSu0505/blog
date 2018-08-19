const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema

let counter = 1;
let CountedId = {type: Number, default: () => counter++};

const detailSchema = new Schema({
    Id: CountedId,
    authorName: String,
    essayType: Number,                              // ? 文章类型 0是原创 1是转载
    essayLink: {type:String,default:''},
    createAt: {type:Date,default:Date.now()},
    lookNum:{type:Number,default:0},
    typeId:{type:Number},                 // ? 分类id 0：原生 JavaScript，1：CSS，2：Vue，3：NPM，4：Webpack，5：其他
    essayStatus:{type:Number,default:1},            // ? 文章状态： 1是展示给用户 0是不展示给用户
    essayCont:String,   
    essayTitle:String
},{
    collection:'detail'
})

mongoose.model('Detail',detailSchema)    // hint 2个参数第一参数是表的名字，第二个参数是上面Schema模型的名字，这样就与数据库里的表映射上了

