let express = require("express")

let router = express.Router()

// login页面
module.exports = router.use('/', (req, res) => {
  let d = new Date()
  let data = {
    appname: '登陆',
    unix: '?' + Math.round(d.getTime() / 1000).toString()
  }
  res.render('login', data)
})