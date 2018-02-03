const express = require("express")
const User = require("./link/user_db")
const help = require("../../../help")


let router = express.Router()


router.post('/', async (req, res, next) => {
  let username = req.body.params.username

  let returnStr = {
    data: {}
  }

  // 判断非空
  if (!username)
    return res.json(help.validator(username, returnStr, 'username不能为空'))

  try {
    // 用户名已使用判断
    let whereStr = {
      'username': username
    };

    User.find(whereStr, function (err, data) {
      if (err) {
        console.log("Error:" + err)
      } else {
        if (data.length > 0) {
          console.log(data)
          console.log('用户名已经使用了，所以无法添加~')
          res.status(404).json({
            status: '-1'
          })
        } else {
          res.json({
            status: '1'
          })
        }
      }
    })

  } catch (err) {
    return res.json(err)
  }


})

module.exports = router