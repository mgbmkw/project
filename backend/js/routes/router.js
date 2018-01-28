let express = require("express")

let register = require("../controllers/api/Mongoose/register")


let content = require("../controllers/content")
let login = require("../controllers/login")
let main = require("../controllers/main")
let upload = require("../controllers/upload")
let mobile = require("../controllers/mobile")
let componentsMobile = require("../controllers/components-mobile")



module.exports = function set(app) {

  // 使用【Mongoose】写的api： 注册
  app.use('/api/Mongoose/register', register)


  // 以下是直接render相应的【页面】
  app.use('/content', content)
  app.use('/login', login)
  app.use('/components-mobile', componentsMobile)
  app.use('/mobile', mobile)
  app.use('/upload', upload)
  app.use('/', componentsMobile)
  app.use('/', main)
}