const express = require("express")
const User = require("./link/user_db")
const help = require("../../../help")


let router = express.Router()


router.post('/', async (req, res, next) => {
  let username = req.body.params.username
  let password = help.md5(req.body.params.password)
  let passwordConfirm = help.md5(req.body.params.passwordConfirm)
  let phone = req.body.params.phone
  let code = req.body.params.code
  let phoneCode = req.body.params.phoneCode

  let saveJson = {
    username: username,
    password: password,
    passwordConfirm: passwordConfirm,
    phone: phone,
    code: code,
    phoneCode: phoneCode
  }
  console.log(password)
  console.log(passwordConfirm)
  let returnStr = {
    data: {}
  }

  // 判断非空
  if (!username)
    return res.json(help.validator(username, returnStr, 'username不能为空'))

  if (!password)
    return res.json(help.validator(password, returnStr, 'password不能为空'))

  if (!passwordConfirm)
    return res.json(help.validator(passwordConfirm, returnStr, 'passwordConfirm不能为空'))

  if (password !== passwordConfirm)
    return res.json(help.validator(passwordConfirm, returnStr, '密码不一致，请重新填写！'))

  if (!phone)
    return res.json(help.validator(phone, returnStr, 'phone不能为空'))

  if (!code)
    return res.json(help.validator(code, returnStr, 'code不能为空'))

  if (!phoneCode)
    return res.json(help.validator(phoneCode, returnStr, 'phoneCode不能为空'))

  if (!username)
    return res.json(help.validator(username, returnStr, 'username不能为空'))


  // console.log(req.body.params)

  // 第1种方式：实例化了一个学生类，并，保存这个学生类
  try {
    new User(saveJson).save(function () {
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
  //   User.create(saveJson, function (error) {
  //     console.log("存储成功")
  //     res.status(200).json({
  //       status: '成功！OK'
  //     })
  //   })
  // } catch (err) {
  //   return res.json(err)
  // }


})

module.exports = router