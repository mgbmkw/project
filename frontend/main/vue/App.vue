
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex: 999999}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onMenuSelect">
          <div class="layout-logo"></div>
          <div class="layout-nav">

            <MenuItem name="login">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/CarouselEdit">CarouselEdit</router-link>
            </MenuItem>

            <!-- MenuItem如果想有跳转功能，则直接加个a标签就好~ -->
            <MenuItem name="register">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/">Carousel</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">upload</router-link>
            </MenuItem>

          </div>
        </Menu>
      </Header>

      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '470px'}">

        <router-view></router-view>

      </Content>

      <Footer class="layout-footer-center">2017-2018 &copy 所有解说权由【mgb】提供</Footer>
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