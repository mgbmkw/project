const express = require("express")

let help = {
  validator: function (req_pararm, returnStr, req_pararm_str) {
    return returnStr = {
      data: {
        code: 90000,
        msg: req_pararm_str + '不能为空',
        data: {}
      }
    }
  }
}

module.exports = help