const express = require("express")
const User = require("./link/user_db")
const help = require("../../../help")


let router = express.Router()


router.post('/', async (req, res, next) => {
  let registerJson = {
    username: req.body.params.username,
    password: help.md5(req.body.params.password),
    passwordConfirm: help.md5(req.body.params.passwordConfirm),
    phone: req.body.params.phone,
    code: req.body.params.code,
    phoneCode: req.body.params.phoneCode
  }
  console.log(registerJson.password)
  console.log(registerJson.passwordConfirm)
  let returnStr = {
    data: {}
  }



  // 判断非空
  if (!registerJson.username)
    return res.json(help.validator(username, returnStr, 'username不能为空'))

  if (!registerJson.password)
    return res.json(help.validator(password, returnStr, 'password不能为空'))

  if (!registerJson.passwordConfirm)
    return res.json(help.validator(passwordConfirm, returnStr, 'passwordConfirm不能为空'))

  // 密码不一致判断
  if (registerJson.password !== registerJson.passwordConfirm)
    return res.json(help.validator(passwordConfirm, returnStr, '密码不一致，请重新填写！'))

  if (!registerJson.phone)
    return res.json(help.validator(phone, returnStr, 'phone不能为空'))

  if (!registerJson.code)
    return res.json(help.validator(code, returnStr, 'code不能为空'))

  if (!registerJson.phoneCode)
    return res.json(help.validator(phoneCode, returnStr, 'phoneCode不能为空'))

  if (!registerJson.username)
    return res.json(help.validator(username, returnStr, 'username不能为空'))



  // console.log(req.body.params)

  // 第1种方式：实例化了一个学生类，并，保存这个学生类
  try {
    // 用户名已使用判断
    let whereStr = {
      'username': registerJson.username
    };

    User.find(whereStr, function (err, data) {
      if (err) {
        console.log("Error:" + err)
      } else {
        if (data.length > 0) {
          console.log(data)
          console.log('用户名已经使用了，所以无法添加~')
          res.status(404).json({
            status: -1,
            msg: '用户名已经使用~'
          })
        } else {
          console.log(data)
          new User(registerJson).save(function () {
            console.log("存储成功")
            res.status(200).json({
              status: 1,
              msg: '注册成功！OK'
            })
          })
        }
      }
    })


  } catch (err) {
    return res.json(err)
  }

  // 第2种方式：工厂方式，静态方法。
  // try {
  //   User.create(registerJson, function (error) {
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