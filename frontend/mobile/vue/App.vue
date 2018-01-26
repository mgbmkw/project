
<template>
  <div class="layout wh100flau">

    <!-- <transition enter-active-class="animated bounceInLeft"> -->
    <div class="wh100">
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <!-- <router-link to="/CarouselEdit">CarouselEdit</router-link> -->
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="首页" name="显示名称............">
        <router-link to="/mobile/first">
          <img class="imgc" :src="'/static/images/140×140图片01.jpg'">首页
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="热点" name="显示名称............">
        <router-link to="/mobile/hot">
          <img class="imgc" :src="'/static/images/140×140图片01.jpg'">热点
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="招聘" name="显示名称............">
        <router-link to="/mobile/hire">
          <img class="imgc" :src="'/static/images/140×140图片03.jpg'">招聘
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="商城" name="显示名称............">
        <router-link to="/mobile/mall">
          <img class="imgc" :src="'/static/images/140×140图片03.jpg'">商城
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="我的" name="显示名称............">
        <router-link to="/mobile/mine">
          <img class="imgc" :src="'/static/images/666.jpg'">我的
        </router-link>
      </mt-tab-item>

    </mt-tabbar>

  </div>
</template>

<script>
// import first from './components/first'
// import concat from './components/concat'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      selected: '首页'
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
  /* padding-top: 60px; */
  /* padding-bottom: 60px; */
  /* max-height: 100%; */
  /* overflow: auto; */
  /* background-color: #999; */
  /* height: 100%; */
  /* overflow: hidden; */
}
</style>