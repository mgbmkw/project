let help = {
  validator: {
    re_number(rule, value, callback) {
      if (!Number.isInteger(+value)) {
        callback(new Error('产品价格必须是数字'))
      } else {
        callback()
      }
    }
  }
}

module.exports = help