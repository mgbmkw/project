let mongoose = require("mongoose")



// 创建数据库连接。即：连接本地并创建【库】： user_db
mongoose.Promise = global.Promise
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/user_db')
// 监听：open事件、error事件
db.once('open', function (callback) {
    console.log("数据库成功连接")
})
// 向外暴露这个db对象
module.exports = db