const express = require("express")
const User = require("./link/user_db")
const help = require("../../../help")


let router = express.Router()


router.post('/', async (req, res, next) => {
  let username = req.body.params.username
  let password = req.body.params.password
  let passwordConfirm = req.body.params.passwordConfirm
  let phone = req.body.params.phone
  let code = req.body.params.code
  let phoneCode = req.body.params.phoneCode

  let returnStr = {
    data: {}
  }

  // 判断非空
  if (!username)
    return res.json(help.validator(username, returnStr, 'username'))

  if (!password)
    return res.json(help.validator(password, returnStr, 'password'))

  if (!passwordConfirm)
    return res.json(help.validator(passwordConfirm, returnStr, 'passwordConfirm'))

  if (!phone)
    return res.json(help.validator(phone, returnStr, 'phone'))

  if (!code)
    return res.json(help.validator(code, returnStr, 'code'))

  if (!phoneCode)
    return res.json(help.validator(phoneCode, returnStr, 'phoneCode'))

  if (!username)
    return res.json(help.validator(username, returnStr, 'username'))


  // console.log(req.body.params)

  // 第1种方式：实例化了一个学生类，并，保存这个学生类
  try {
    new User(req.body.params).save(function () {
      console.log("存储成功")
      res.status(200).json({
        status: '成功！OK'
      })
    })
  } catch (err) {
    return res.json(err)
  }

  // 第2种方式：工厂方式，静态方法。
  // try {
  //   User.create(req.query, function (error) {
  //     console.log("保存成功！共6条！")
  //     res.status(200).json({
  //       status: '成功！OK'
  //     })
  //   })
  // } catch (err) {
  //   return res.json(err)
  // }


})

module.exports = router