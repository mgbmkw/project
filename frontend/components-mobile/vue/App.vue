
<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex: 999999}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onMenuSelect">
          <div class="layout-nav">

            <MenuItem name="login">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/">表单</router-link>
            </MenuItem>

            <!-- MenuItem如果想有跳转功能，则直接加个a标签就好~ -->
            <MenuItem name="register">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/swiperCarousel">轮播器</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">上传</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">标题</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">徽章</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">弹窗</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">表格</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">时间日期</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">分页</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">图片</router-link>
            </MenuItem>

            <MenuItem name="upload">
            <Icon type="ios-navigate"></Icon>
            <router-link to="/upload">图片</router-link>
            </MenuItem>

          </div>
        </Menu>
      </Header>

      <Content :style="{margin: '88px 20px 0', background: '#697c90', minHeight: '430px'}">

        <el-breadcrumb separator="/" style="margin-bottom:22px;">
          <el-breadcrumb-item :to="{ path: '/' }">表单</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/swiperCarousel' }">轮播器</el-breadcrumb-item>
          <el-breadcrumb-item>其他</el-breadcrumb-item>
        </el-breadcrumb>

        <router-view style="background-color:#C7C2B9;"></router-view>

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