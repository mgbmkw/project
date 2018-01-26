<template>
  <div class="mall wh100flau">

    <!--  -->
    <div>
      <mt-navbar v-model="selected100" class="px1" :fixed="true">
        <mt-tab-item id="1">点菜</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
        <mt-tab-item id="4">商城页</mt-tab-item>
      </mt-navbar>
    </div>

    <!-- tab-container -->
    <!-- 因为:swipeable=true时，可以拖动，有点难看 -->
    <div class="wh100">
      <mt-tab-container v-model="selected100" :swipeable="false">

        <mt-tab-container-item id="1" style="padding-top:50px;">
          <mallMT></mallMT>
        </mt-tab-container-item>

        <mt-tab-container-item id="2" style="padding-top:50px;">

          <div class="scroll-outer-container">
            <div class="scroll-inner-container">
              <div class="scroll-content">
                <span style="float:left;">999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999</span>
                <span style="float:left;">11111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                <span style="float:left;">22222222222222222222222222222222222222222</span>
                <span style="float:left;">333333333333333333333333333333333333333333333</span>
              </div>
            </div>
          </div>

        </mt-tab-container-item>

        <mt-tab-container-item id="3" style="padding-top:50px;">
          <rate></rate>
        </mt-tab-container-item>

        <mt-tab-container-item id="4" style="padding-top:50px;">
          <imgTB4></imgTB4>
          <imgTBList></imgTBList>
          <div style="width:100px;height:100px;border:1px solid red;"></div>
        </mt-tab-container-item>

      </mt-tab-container>
    </div>

  </div>
</template>

<script>

import mallMT from './mall/mallMT'
import imgTB4 from './mall/imgTB4'
import imgTBList from './mall/imgTBList'
import rate from './mall/rate'


import BScroll from 'better-scroll'
export default {
  name: 'mall',
  components: {
    mallMT, imgTB4, imgTBList, rate
  },
  data() {
    return {
      selected100: '1',
    }
  },
  mounted() {

    this.scrollR = new BScroll(document.getElementById('wrapperR'), {
      eventPassthrough: true,
      scrollX: true,
      scrollY: false,
      preventDefault: false
    })

  },
  methods: {

  }
}
</script>

<style scoped>
.scroll-outer-container {
  width: 100%;
  height: 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid blue;
  line-height: 30px;
}

.scroll-inner-container {
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0;
  overflow-x: scroll;
  overflow-y: hidden;
}

.scroll-content {
  /* 由JS计算总长 */
  height: 30px;
  width: 1000px;
}
</style>
