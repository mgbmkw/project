let help = {
  validator: {
    re_number(rule, value, callback) {
      if (!Number.isInteger(+value)) {
        callback(new Error('产品价格必须是数字'))
      } else {
        callback()
      }
    }
  },
  randomString(length) {
    let str = "abcdefghijklmnopqrstuvwxyz0123456789"
    let returnStr = ""

    while (length-- > 0) {
      returnStr += str[Math.floor(Math.random() * str.length)]
    }
    return returnStr
  }
}




module.exports = help