const express = require("express")
const User = require("./link/user_db")
const help = require("../../../help")


let router = express.Router()


router.post('/', async (req, res, next) => {
  let username = req.body.params.username
  let password = req.body.params.password
  // console.log(req.body.params)
  // res.redirect('/content')
  // res.location('../content')

  let whereStr = {
    'username': username
  };

  User.find(whereStr, function (err, data) {
    if (err) {
      console.log("Error:" + err)
    } else {
      // console.log(data.length)
      // console.log(data)
      if (data.length == 0) {
        console.log('没有数据')
        res.status(404).json({
          status: '-1'
        })
      } else {
        console.log('有数据')
        req.session.username = req.body.params.username
        console.log('req.session.username： ' + req.session.username)
        // return res.render('content')
        res.status(200).json(data)
        // res.redirect('./login')
        // res.render('login')
        // res.redirect('http://127.0.0.1:3000')
      }
    }
  })
})

module.exports = router