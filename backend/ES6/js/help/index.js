const express = require("express")
const crypto = require("crypto")
let help = {
  validator: function (req_pararm, returnStr, req_pararm_str) {
    return returnStr = {
      data: {
        code: 90000,
        msg: req_pararm_str,
        data: {}
      }
    }
  },
  md5: function (passwordStr) {
    let md5 = crypto.createHash('md5')
    let password = md5.update(passwordStr).digest('base64')
    return password
  }
}

module.exports = help