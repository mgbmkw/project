let express = require("express")
// let api = require("../controllers/api")
let content = require("../controllers/content")
let login = require("../controllers/login")
let main = require("../controllers/main")
let upload = require("../controllers/upload")
let mobile = require("../controllers/mobile")
let componentsMobile = require("../controllers/components-mobile")



module.exports = function set(app) {
  // app.use('/api', api)
  app.use('/content', content)
  // app.use('/login', login)
  app.use('/components-mobile', componentsMobile)
  app.use('/mobile', mobile)
  app.use('/upload', upload)
  app.use('/', componentsMobile)
  app.use('/', main)
}