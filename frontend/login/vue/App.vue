
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onMenuSelect">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="login">
            <Icon type="ios-navigate"></Icon>登陆
            </MenuItem>

            <!-- MenuItem如果想有跳转功能，则直接加个a标签就好~ -->
            <MenuItem name="register">
            <Icon type="ios-navigate"></Icon>注册
            </MenuItem>

            <!-- @on-result-change="onResultChange" -->
            <login :getParentLoginVal="parentLoginVal" @on-result-change="onResultChange"></login>
            <register :getParentRegisterVal="parentRegisterVal" @on-register-change="onRegisterChange"></register>

          </div>

        </Menu>
      </Header>

      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '370px'}">

        <!-- <router-view></router-view> -->
      </Content>

      <Footer class="layout-footer-center">2017-2018 &copy 所有解说权由【mgb】提供</Footer>
    </Layout>

  </div>
</template>

<script>

import login from './components/login'
import register from './components/register'

export default {
  name: 'app',
  components: { login, register },
  data() {
    return {
      parentLoginVal: false,  // 1.首先，parentLoginVal为false
      parentRegisterVal: false  // 首先，parentLoginVal为false
    }
  },
  methods: {
    // 第6步：【子元素】那边定义的方法，【父元素】可以通过这个方法来定义1个方法，用来使用【子元素】那边传过来的参数值
    onResultChange(val) {
      this.parentLoginVal = val// 外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
    },
    onRegisterChange(val) {
      this.parentRegisterVal = val//④外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
    },

    onMenuSelect: function (name) {
      if (name === "login") {
        this.parentLoginVal = true
      } else if (name === "register") {
        this.parentRegisterVal = true
      }
    }
  }
}
</script>
<style scoped>
.layout {
  /* border: 1px solid #d7dde4 */
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  /* background: #fff url(./assets/logo.png) no-repeat 0px 0px 100px 30px; */
  background-size: cover;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
/* .ivu-layout-footer {
  padding: 24px 10px;
} */
</style>