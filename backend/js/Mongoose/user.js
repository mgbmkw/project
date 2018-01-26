let mongoose = require("mongoose")
let db = require("./link")


// 创建了一个schema结构。即：【表】结构。
var userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  passwordConfirm: { type: String },
  phone: { type: String },
  code: { type: String },
  phoneCode: { type: String }
})



// 创建静态方法
userSchema.statics.revalidate = function (name, callback) {
  this.model('User').find({
    name: name
  }, () => {
    console.log('找到了')
  })
}
// // 创建修改的静态方法
// userSchema.statics.xiugai = function (conditions, update, options, callback) {
//   this.model("User").update(conditions, update, options, callback)
// }


// 用上面的【表结构userSchema】和外面文件里的【数据库db】，来创建1个【模型】，
// 即：学生模型，就是学生类。类才是代码操作的对象。
// 类是基于schema创建的。
var userModel = db.model('User', userSchema)
// 向外暴露，则外面可以实例化这个类，以具体操作。
module.exports = userModel