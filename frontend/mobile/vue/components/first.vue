<template>
  <div class="first wh100flau">

    <!-- first页面：包含：1.微信消息、2.通讯录 -->
    <div>
      <mt-navbar v-model="selected100" class="px1" :fixed="true">
        <mt-tab-item id="1">我的消息</mt-tab-item>
        <mt-tab-item id="2">通讯录</mt-tab-item>
        <mt-tab-item id="3">发现</mt-tab-item>
        <mt-tab-item id="4">我的</mt-tab-item>
      </mt-navbar>
    </div>

    <!-- tab-container -->
    <!-- 因为:swipeable=true时，可以拖动，有点难看 -->
    <div class="wh100">
      <mt-tab-container v-model="selected100" :swipeable="false">
        <mt-tab-container-item id="1" style="padding-top:50px;">
          <message></message>
        </mt-tab-container-item>

        <mt-tab-container-item id="2" style="padding-top:50px;">
          <friends></friends>
        </mt-tab-container-item>

        <mt-tab-container-item id="3" style="padding-top:50px;">
          <found></found>
        </mt-tab-container-item>

        <mt-tab-container-item id="4" style="padding-top:50px;">
          <mine></mine>
        </mt-tab-container-item>

      </mt-tab-container>
    </div>

    <!-- <div class="testdiv0" :style="'background-color:rgba(62,130,247,'+scroll/300+ ');'"></div>

    <div class="testdiv1" :style="'background-color:rgba(19,82,158,'+(1-scroll/300)+ ');'"></div>

    <div class="testdiv2" :style="'-webkit-transform:rotate('+scroll*1.5+'deg);width:'+scroll/5+'px;height:'+scroll/5+'px;'"></div>

    <div class="testdiv3" :style="'-webkit-transform:rotate('+(whenMove*10)+'deg);'"></div> -->

    <!-- <CSS3></CSS3> -->
    <!-- //左划      默认渲染为div   data为参数 -->
    <!-- <v-touch @tap="tap" @panmove="Panmove" @panend="Panend" v-bind:enabled="{ pinch: true, pan: false }" style="width:100%;height:200px;background-color:#999;">Panmove me!
      <p :style="'border:1px solid #e5e5e5;width:100px;height:'+height+'px;'">这是个p</p>
    </v-touch> -->
    <!-- //点击   渲染为一个a标签 -->
    <!-- <v-touch  tag="a" v-on:tap="onTap">Tap me!</v-touch > -->
    <!-- //点击   渲染为p标签 -->
    <!-- <v-touch  tag="p" v-on:tap="onTap">Tap me!</v-touch > -->

  </div>
</template>

<script>
// 要使用，就得引入
import { TabContainer, TabContainerItem } from 'mint-ui';

import message from './first/message'
import friends from './first/friends'
import found from './first/found'
import mine from './first/mine'

import CSS3 from './CSS3'
export default {
  name: 'first',
  components: {
    CSS3, message, friends, found, mine
  },
  data() {
    return {
      selected100: '1',

      height: 0,
      scroll: '',
      startY: '',
      moveY: '',
      endY: '',
      whenMove: '',
      whenEnd: '',

    }
  },
  methods: {
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 299) {
        this.scroll = 299
      }
      // console.log(this.scroll)
    },
    Panmove(ev) {
      console.log('Panmove')
      console.log(ev.deltaY)
      this.height = ev.deltaY
    },
    Panend(ev) {
      console.log('Panend')
      // console.log(ev.deltaY)
      this.height = 0
    },
    tap(ev) {
      // console.log(ev)
    }
  },
  mounted() {






    document.getElementsByTagName("body")[0].addEventListener("touchstart", function (e) {
      var _x = e.touches[0].pageX;
      var _y = e.touches[0].pageY;
      // console.log("start：Y", _y);
      this.startY = _y
      // console.log("start：Y" + this.startY)
    });
    document.getElementsByTagName("body")[0].addEventListener("touchmove", function (e) {
      var _x = e.touches[0].pageX;
      var _y = e.touches[0].pageY;
      // console.log("move：Y", _y);
      // this.moveY = _y
      // this.whenMove = Math.abs(this.moveY - this.startY)
      // console.log("move：Y" + this.moveY)
      // console.log("相减得：" + (this.moveY - this.startY))
      // console.log("whenMove得：" + this.whenMove)

    });
    document.getElementsByTagName("body")[0].addEventListener("touchend", function (e) {
      var _x = e.changedTouches[0].pageX;
      var _y = e.changedTouches[0].pageY;
      // console.log("end：Y", _y);
    });


    // 这个是屏幕滚动的代码
    window.addEventListener('scroll', this.menu)
  }
}
</script>

<style scoped>
/*  */
.testdiv0 {
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  position: fixed;
  z-index: 1000000;
}
.testdiv1 {
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  position: fixed;
  z-index: 1000000;
  top: 50px;
}

.testdiv2 {
  /* width: 50px;
  height: 50px; */
  border-left: 1px solid #e5e5e5;
  position: fixed;
  background-color: #13529e;

  z-index: 1000000;
  top: 100px;
  left: 35%;
}

.testdiv3 {
  width: 50px;
  height: 50px;
  border-right: 1px solid #e5e5e5;
  position: fixed;
  background-color: #529e13;
  z-index: 1000000;
  top: 150px;
  left: 55%;
}
</style>
