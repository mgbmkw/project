const express = require("express")
const User = require("../Mongoose/user")
const app = express()


let router = express.Router()


router.post('/Mongoose', async(req, res, next) => {
  let username = req.body.params.username
  let password = req.body.params.password
  let passwordConfirm = req.body.params.passwordConfirm
  let phone = req.body.params.phone
  let code = req.body.params.code
  let phoneCode = req.body.params.phoneCode
  console.log(req.body.params.username)
  console.log(req.body.params)

  // 第1种方式：实例化了一个学生类，并，保存这个学生类
  await new User(req.body.params).save(function () {
    console.log("存储成功")
    res.status(200).json({
      status: '成功！OK'
    })
  })
  // 第2种方式：工厂方式，静态方法。
  // User.create(req.query, function (error) {
  //   console.log("保存成功！共6条！")
  //   res.status(200).json({
  //     status: '成功！OK'
  //   })
  // })

})


router.post('/login', async(req, res, next) => {
  let username = req.body.params.username
  let password = req.body.params.password
  // console.log(req.body.params.username)
  // console.log(req.body.params)
  // res.redirect('/content')
  // res.location('../content')

  let whereStr = {
    'username': username
  };
  var req_ = req
  User.find(whereStr, function (err, data) {
    if (err) {
      console.log("Error:" + err)
    } else {
      console.log(data.length)
      console.log(data)
      if (data.length == 0) {
        console.log('没有数据')
        res.status(404).json({
          status: '-1'
        })
      } else {
        console.log('有数据')
        req.session.username = req.body.params.username
        console.log('req.session.username： '+req.session.username)
        // return res.render('content')
        res.status(200).json(data)
        // res.redirect('./login')
        // res.render('login')
        // res.redirect('http://127.0.0.1:3000')
      }
    }
  })
})




router.get('/content', async(req, res, next) => {
  res.render('content')
})
module.exports = router