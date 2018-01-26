<template>
  <div class="register">
    <Modal title="请您填写注册信息：" v-model="childRegister" ok-text="立即注册" @on-ok="ok" @on-cancel="cancel">

      <!-- <Form :model="registerMsg" label-position="top" :label-width="100"> -->
      <Form :model="registerMsg" :label-width="90">
        <FormItem label="用　户　名">
          <Input type="text" v-model="registerMsg.username" name="username"></Input>
        </FormItem>

        <FormItem label="设置密码">
          <Input type="password" v-model="registerMsg.password" name="password"></Input>
        </FormItem>

        <FormItem label="确认密码">
          <Input type="password" v-model="registerMsg.passwordConfirm" name="passwordConfirm"></Input>
        </FormItem>

        <FormItem label="常用手机">
          <Input type="text" v-model="registerMsg.phone" name="phone"></Input>
        </FormItem>

        <FormItem label="验证码">
          <Input type="text" v-model="registerMsg.code" name="code"></Input>
        </FormItem>

        <FormItem label="手机验证码">
          <Input type="text" v-model="registerMsg.phoneCode" name="phoneCode"></Input>
        </FormItem>

      </Form>
    </Modal>

  </div>
</template>

<script>
// http://www.jb51.net/article/98881.htm
import Axios from 'axios'
export default {
  name: 'register',
  data() {
    return {
      registerMsg: {
        username: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        code: '',
        phoneCode: ''
      },
      childRegister: this.getParentRegisterVal
    }
  },
  props: ['getParentRegisterVal'],

  watch: {
    getParentRegisterVal(val) {
      this.childRegister = val // 外部getParentRegisterVal有改变，则内部childRegister也跟着改变
    },
    childRegister(val) {
      this.$emit("on-register-change", val) // 将内部childRegister的改变发送到外部知道
    }
  },
  methods: {
    ok() {
      Axios.post('/api/Mongoose', {
        params: {
          username: this.registerMsg.username,
          password: this.registerMsg.password,
          passwordConfirm: this.registerMsg.passwordConfirm,
          phone: this.registerMsg.phone,
          code: this.registerMsg.code,
          phoneCode: this.registerMsg.phoneCode
        }
      }).then((data) => {
        this.registerMsg = {
          username: '',
          password: '',
          passwordConfirm: '',
          phone: '',
          code: '',
          phoneCode: ''
        }
      })
    },
    cancel() {
      this.registerMsg = {
        username: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        code: '',
        phoneCode: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
