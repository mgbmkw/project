<template>
  <div class="login">
    <!-- 1.确定childLogin是控制【子元素】的数值，那么，就要想办法接收到外部的值。 -->
    <Modal title="登陆" v-model="childLogin" @on-ok="ok" @on-cancel="cancel">

      <!-- <Form :model="loginMsg" label-position="top" :label-width="100"> -->
      <Form :model="loginMsg" :label-width="40">
        <FormItem label="账号">
          <Input v-model="loginMsg.username"></Input>
        </FormItem>

        <FormItem label="密码">
          <Input v-model="loginMsg.password" type="password"></Input>
        </FormItem>
      </Form>
      <!-- <Loading></Loading> -->
      <div slot="footer">
        <Button type="primary" size="large" long :loading="loading" @click="loginTo">立即登陆</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      loginMsg: {
        username: '',
        password: ''
      },
      // 第3步：将 childLogin = 第2步传入的值【getParentLoginVal】，这是初始化值
      childLogin: this.getParentLoginVal,
      loading: false
    }
  },
  // 第2步：将此属性暴露给【父元素】，这样，【父元素】里则可以: getParentLoginVal="parentLoginVal"
  props: ['getParentLoginVal'],

  watch: {
    // 第4步：监听外部【getParentLoginVal】的变化。如果，有改变，则内部childLogin也跟着改变
    // 这里的val是getParentLoginVal现在的值，这是Vue.js2.0中原生基础。 .................... 重点在此！
    getParentLoginVal(val) {
      this.childLogin = val
    },
    // 第5步： 既然，【子元素】的值被【父元素】的值所改变了，则【子元素】也必须把改变后的值通知给【父元素】知道。则需要通过方法，this.$emit("on-result-change", val)
    // 这里的val，就是childLogin现在的值，这是Vue.js2.0中原生基础。 .................... 重点在此！
    // 这样，在【父元素】那边，就可以有接收【子元素】childLogin值的方法了，因为是通过【函数的参数】的形式接收的！【父元素】那边这样写： @on-result-change="onResultChange"，那么，onResultChange(val)里，就有val值可以使用了！
    childLogin(val) {
      this.$emit("on-result-change", val) // 将内部childLogin的改变发送到外部知道
    }
  },
  methods: {
    ok() {

    },
    cancel() {
      this.$Message.info('Clicked cancel')
    },
    loginTo() {

      Axios.post('/api/login', {
        params: {
          username: this.loginMsg.username,
          password: this.loginMsg.password,
        }
      }).then((data) => {
        console.log(data.data[0])
        window.location.href = "/content"
        // Axios.get('/content')
        this.loginMsg = {
          username: '',
          password: ''
        }
      })


      // this.loading = true
      // setTimeout(() => {
      //   this.loading = false
      //   this.childLogin = false
      //   this.$Message.success('登陆成功！')
      // }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
