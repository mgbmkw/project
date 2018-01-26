<template>
  <div class="mine wh100flau">

    <div style="height:100%;overflow:hidden;display:-webkit-flex;border:1px solid blue;">
      <div style="flex:1; height:100%;overflow:auto;border:1px solid red;" id="leftWrap">
        <ul>
          <li class="item-hook" v-for="(item, key) in arr" :key="key" @click="selecting($event, key)">{{item.type}}</li>
        </ul>
      </div>

      <div style="flex:3; height:100%;overflow:auto;border:1px solid red;">
        <ul style="width:100%;height:100%;overflow:auto;" ref="rightWrap" id="rightWrap">
          <li v-for="(item, key) in arr" :key="key" class="item-hook" :id="'id'+key" style="margin-bottom:200px;">
            <h4>{{item.type}}</h4>
            <ul>
              <!-- <li v-for="(ch, chk) in item.list" :key="chk">{{ch.title}}</li> -->
              
            </ul>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'mine',
  data() {
    return {
      // listHeight: [],
      // scrollY: 0,
      // liWrapScroll: {}
      listHeight: [],
      scrollY: 0,
      foodMenuScroll: null,
      foodListScroll: null,
      arr: [{
        type: '煮1',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      }, {
        type: '煮2',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      }, {
        type: '煮3',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      }, {
        type: '煮4',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      }, {
        type: '煮5',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      }, {
        type: '煮6',
        title: '鸡蛋炒米粉鸡蛋炒米粉',
      },]
    }
  },
  methods: {
    selecting(ev, i) {
      console.log(i)
      let rightList = document.getElementById("rightWrap").getElementsByClassName('item-hook')
      let el = rightList[i]
      // let scroll = new BScroll(document.getElementById("rightWrap"), {
      let scroll = new BScroll(this.$refs.rightWrap, {
        probeType: 3,
        eventPassthrough: 'vertical',
        scrollY: true
      })
      this.scrollR.scrollToElement(el, 300)
      // scroll.scrollTo({ x: 0, y: 600 })
    },

    init() {
      this.scrollL = new BScroll(document.getElementById('leftWrap'), {
        probeType: 3, click: true
      })

      this.scrollR = new BScroll(document.getElementById('rightWrap'), {
        probeType: 3,
        eventPassthrough: 'vertical',
        scrollY: true
      })

      this.scrollR.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },

    calcHeight() {
      let rightList = document.getElementById("rightWrap").getElementsByClassName('item-hook')
      let h = 0
      this.listHeight.push(h)
      for (var i = 0;i < rightList.length;i++) {
        let item = rightList[i]
        h += item.clientHeight
        this.listHeight.push(h)
      }
    }
  },
  mounted() {

    this.$nextTick(() => {
      this.init()
      this.calcHeight()
    })

  }

}
</script>

<style scoped>

</style>
