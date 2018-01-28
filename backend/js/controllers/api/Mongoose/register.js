const express = require("express")
const User = require("./link/user")


let router = express.Router()


router.post('/', async (req, res, next) => {
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

module.exports = router