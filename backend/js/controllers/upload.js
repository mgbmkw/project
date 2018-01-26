var express = require("express")
var formidable = require('formidable')
var fs = require('fs')
var util = require("util")
var router = express.Router()

//主页
module.exports = router.use('/', (req, res, next) => {

  // 创建一个新的传入表单.
  var form = new formidable.IncomingForm()

  // 设置文件上传存放地址
  // form.uploadDir = "./static/uploads"
  form.uploadDir = "./uploads"

  // 执行里面的回调函数的时候，表单已经全部接收完毕了。
  form.parse(req, function (err, fields, files) {
    if (err) {
      throw err
    }
    console.log(fields)
    console.log(files)


    console.log(util.inspect({
      fields: fields,
      files: files
    }))
    // res.writeHead(200, {
    //   'content-type': 'text/plain;charset=utf-8'
    // })
    // res.end('成功了')

    // 所有的文本域、单选框，都在fields存放；
    // 所有的文件域，files
    // https://www.cnblogs.com/idealing/p/3628712.html
    //  fs.renameSync(files.abc.path, "./uploads/" + Math.random() + ".html");

    // res.send('完成~！')
    // res.json({
    //   status: '成功'
    // })
    // return res.json(util.inspect({
    //   fields: fields,
    //   files: files
    // }))
  })


})