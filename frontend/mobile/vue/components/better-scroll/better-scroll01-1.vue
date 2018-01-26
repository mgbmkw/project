<template>
  <div class="mine wh100flau">

    <div style="position:fixed;width:100%;background-color:#999;z-index:1999999999999;">
      <a href="javascript://" v-for="(item, key) in arr" :key="key" style="width:16%;text-align:center;display:inline-block;" @click="selecting(key, $event)">{{item.btn}}</a>
    </div>

    <div ref="wrapper" id="wrapper" style="height:300px;border:1px solid #000;overflow:auto;">
      <ul style="padding-top:30px;">
        <li style="margin-bottom:100px;" class="items" v-for="(item, key) in arr" :key="key">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'mine',
  data() {
    return {
      listHeight: [],
      scrollY: 0, 
      arr: [{
        text: '内容1',
        btn: '按钮1'
      }, {
        text: '内容2',
        btn: '按钮2'
      }, {
        text: '内容3',
        btn: '按钮3'
      }, {
        text: '内容4',
        btn: '按钮4'
      }, {
        text: '内容5',
        btn: '按钮5'
      }, {
        text: '内容6',
        btn: '按钮6'
      }]
    }
  },
  methods: {
    selecting(i, ev) {
      let list = document.getElementById('wrapper').getElementsByClassName('items')
      this.scroll.scrollToElement(list[i], 300)
    }
  },
  mounted() {
    this.scroll = new BScroll(document.getElementById('wrapper'), {
      probeType: 3
    })

    this.scroll.on('scroll', (pos) => {
      // console.log(pos.x + '~' + pos.y)
    })
    // scroll.scrollTo(0, 300, 300)
    // this.scroll.scrollToElement('#item2', 300)
  }

}
</script>

<style scoped>

</style>
