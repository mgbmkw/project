let express = require("express")

let router = express.Router()

// 主页
module.exports = router.use('/', (req, res, next) => {

  // 到达/home路径首先判断是否已经登录
  if (req.session.username && req.session.password && req.session.loginSign === 1) {
    res.render('content')
  } else {
    req.session.error = "请先登录"
    console.log('没有req.session.username的值！')
    res.redirect("/login") //未登录则重定向到 /login 路径
  }

})