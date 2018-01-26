<template>
  <div class="btnSend100">

    <p>这里可以看看如何【自定义封装】1个随处可调用的组件！</p>
    <p>写在btnSend100中</p>
    <div class="input-group" style="padding:6px 10px;background-color:#f9f9f9;">
      <input type="text" class="form-control clear" placeholder="输入短信验证码" style="border:0 none;" @blur="verifCode" v-model="code">
      <span class="input-group-btn">
        <button class="btn btn-primary clear" type="button" @click.prevent.stop="send" :disabled="time > 0" style="border-radius:16px;">{{ btnText }}</button>
      </span>
    </div>

  </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
  name: 'btnSend100',
  data() {
    return {
      time: 0,
      code: ''
    }
  },
  props: {
    second: {
      type: [String, Number],
      default: 60
    },
    textChanged: {
      type: String,
      default: '获取'
    },
    text: {
      type: String,
      default: '获取验证码'
    }
  },
  computed: {
    btnText: function () {
      return this.time > 0 ? this.time + '秒后重新' + this.textChanged : this.text
    }
  },
  methods: {
    verifCode() {
      var re = /^\d{6}$/
      if (re.test(this.code)) {
        //
      } else {
        Toast({ message: '输入有误', duration: 3000 })
      }
    },
    send() {
      this.time = this.second
      this.timer()
      // this.$emit('send')
    },
    timer() {
      if (this.time > 0) {
        // this.time = this.time - 1
        this.time--
        setTimeout(this.timer, 1000)
      }
    }
  }
}
</script>

<style scoped>

</style>
