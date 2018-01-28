import * as Sequelize from 'sequelize'
import * as db from './Sequelize'

// 创建了一个schema结构。即：【表】结构。
// var studentSchema = new mongoose.Schema({
//   name: { type: String },
//   age: { type: Number },
//   sex: { type: String }
// })



// 创建 model
var User = db.define('user', {
  name: {
    type: Sequelize.STRING, // 指定值的类型
    field: 'name' // 指定存储在表中的键名称
  },
  age: {
    type: Sequelize.INTEGER(11), // 指定值的类型
    field: 'age' // 指定存储在表中的键名称
  },
  sex: {
    type: Sequelize.STRING, // 指定值的类型
    field: 'sex' // 指定存储在表中的键名称
  }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user 为 false 
    // MySQL 创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: false
  });

var user = User.sync({ force: false });


// var User = db.define('user', {
//   'name': {
//     'type': Sequelize.CHAR(10), // ................ 字段类型
//     'allowNull': false, // ........................ 是否允许为null
//     'unique': true // ............................. 字段是否唯一unique
//   },
//   'age': {
//     'type': Sequelize.CHAR(10),
//     'allowNull': false
//   },
//   'sex': {
//     'type': Sequelize.STRING(64),
//     'allowNull': true
//   }
// })


// exports.addUser = function (userName, email) {
//   // 向 user 表中插入数据
//   return User.create({
//     user_name: userName,
//     email: email
//   });
// };


// 向外暴露，则外面可以实例化这个类，以具体操作。
export = User