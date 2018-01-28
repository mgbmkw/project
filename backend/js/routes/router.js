let express = require("express")

// let Mongoose_register = require("../controllers/api/Mongoose/register")// 为方便写前端，关闭！不用启动数据库
// let Mongoose_unique_username = require("../controllers/api/Mongoose/unique_username")// 为方便写前端，关闭！不用启动数据库
// let Mongoose_login = require("../controllers/api/Mongoose/login")// 为方便写前端，关闭！不用启动数据库


let content = require("../controllers/content")
// let login = require("../controllers/login")// 为方便写前端，关闭！不用启动数据库
let main = require("../controllers/main")
let upload = require("../controllers/upload")
let mobile = require("../controllers/mobile")
let mobileBackground = require("../controllers/mobile-background")
let componentsMobile = require("../controllers/components-mobile")



module.exports = function set(app) {

  // 使用【Mongoose】写的api： 注册
  // app.use('/api/Mongoose/register', Mongoose_register)// 为方便写前端，关闭！不用启动数据库
  // app.use('/api/Mongoose/unique_username', Mongoose_unique_username)// 为方便写前端，关闭！不用启动数据库
  // app.use('/api/Mongoose/login', Mongoose_login)// 为方便写前端，关闭！不用启动数据库


  // 以下是直接render相应的【页面】
  app.use('/content', content)
  // app.use('/login', login) // 为方便写前端，关闭！不用启动数据库
  app.use('/components-mobile', componentsMobile)
  app.use('/mobile', mobile)
  app.use('/mobile-background', mobileBackground)
  app.use('/upload', upload)
  app.use('/', componentsMobile)
  app.use('/', main)
}