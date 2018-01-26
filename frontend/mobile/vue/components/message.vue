<template>
  <div class="message">

    <mt-navbar v-model="selected" class="px1" style="margin-bottom:10px;">
      <mt-tab-item id="1">沟通</mt-tab-item>
      <mt-tab-item id="2">谁看过我</mt-tab-item>
      <mt-tab-item id="3">最新职位</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="padding:6px 10px;">
      <mt-tab-container-item id="1">
        <div class="alert alert-warning">
          <span class="close">&times;</span>
          <strong>注意!</strong> 看看这是什么东东！~
        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <mt-index-list>
          <mt-index-section :index="Object.keys(item)[0]" v-for="(item, key) in changeArr" :key="key">
            <mt-cell :title="childItem" v-for="(childItem,childKey) in Object.values(item)[0]" :key="childKey"></mt-cell>
            <!-- v-for="(value, key, index) in object" -->
          </mt-index-section>
        </mt-index-list>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <swiper100></swiper100>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import swiper100 from './found/swiper100';
export default {
  name: 'message',
  components: {
    swiper100
  },
  data() {
    return {
      selected: '1',
      changeArr: [],
      arr: [
        { '啊': 'A' },
        { '帮你忙': 'B' },
        { '曹操': 'C' },
        { '大鹏': 'D' },
        { '恶通天': 'E' },
        { '范伟': 'F' },
        { 'G-Person': 'G' },
        { 'H-Person': 'H' },
        { '和气': 'H' },
        { '汉字': 'H' },
        { 'I-Person': 'I' },
        { '嘉诚': 'J' },
        { 'K-Person': 'K' },
        { '刘德华': 'L' },
        { '曼谷': 'M' },
        { 'N-Person': 'N' },
        { 'O-Person': 'O' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'R-Person': 'R' },
        { 'S-Person': 'S' },
        { '汤姆.克鲁斯': 'T' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'R-Person': 'R' },
        { '史蒂文.西格尔': 'S' },
        { '汤姆.克鲁斯': 'T' },
        { 'U-Person': 'U' },
        { 'V-Person': 'V' },
        { 'W-Person': 'W' },
        { 'X-Person': 'X' },
        { 'Y-Person': 'Y' },
        { 'Z-Person': 'Z' }
      ]
    }
  }, methods: {

  },
  mounted() {
    console.log(this.arr)
    var arr_ = this.arr

    var changeArr = [{ 'A': [] }, { 'B': [] }, { 'C': [] }, { 'D': [] }, { 'E': [] }, { 'F': [] }, { 'G': [] }, { 'H': [] }, { 'I': [] }, { 'J': [] }, { 'K': [] }, { 'L': [] }, { 'M': [] }, { 'N': [] }, { 'O': [] }, { 'P': [] }, { 'Q': [] }, { 'R': [] }, { 'S': [] }, { 'T': [] }, { 'U': [] }, { 'V': [] }, { 'W': [] }, { 'X': [] }, { 'Y': [] }, { 'Z': [] }]

    for (var i = 0;i < arr_.length;i++) {
      for (var j = 0;j < changeArr.length;j++) {
        if (Object.values(arr_[i])[0] == Object.keys(changeArr[j])[0]) {
          Object.values(changeArr[j])[0].push(Object.keys(arr_[i])[0])
        } else {
          console.log('没有这个项~~')
        }
      }
    }
    this.changeArr = changeArr

  }
}
</script>

<style scoped>

</style>
