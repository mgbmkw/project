
<template>
  <div class="layout wh100flau">
    <Layout class="wh100flau">
      <Header :style="{position: 'fixed', width: '100%', zIndex: 999999}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onMenuSelect">
          <div class="layout-nav">

            <MenuItem name="first">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/mobile-background">首页/微信</router-link>
            </MenuItem>


            <MenuItem name="hot">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/mobile-background/hot">热点</router-link>
            </MenuItem>

            <MenuItem name="hire">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/mobile-background/hire">招聘</router-link>
            </MenuItem>

            <MenuItem name="mall">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/mobile-background/mall">商城</router-link>
            </MenuItem>

            <MenuItem name="mine">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/mobile-background/mine">我的</router-link>
            </MenuItem>

          </div>
        </Menu>
      </Header>

      <div style="margin-top:60px;background-color:#f1f1f1;width:100%;height:100%;">
        <router-view></router-view>
      </div>

      <!-- <Footer class="layout-footer-center" style="padding:16px 10px;">2017-2018 &copy 所有解说权由【mgb】提供</Footer> -->
    </Layout>

  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

    onMenuSelect: function (name) {

    }
  }
}
</script>
<style scoped>
.layout {
  /* border: 1px solid #d7dde4 */
  background: #3c3e3f;
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
  /* width: 420px; */
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.ivu-layout-footer {
  padding: 24px 10px;
  background-color: #697c90;
}

.ivu-layout {
  background-color: #697c90;
}

.ivu-menu-item a {
  color: #a3a6a9;
}
</style>