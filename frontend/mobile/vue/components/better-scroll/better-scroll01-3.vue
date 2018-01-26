<template>
  <div class="mine wh100flau">

    <div style="border:1px solid blue;display:-webkit-flex;height:100%;">
      <div style="flex:1; ">
        <a href="javascript://" v-for="(item, key) in arr" :key="key" style="text-align:center;display:block;" @click="selecting(key, $event)">{{item.btn}}</a>
      </div>

      <div ref="wrapperR" id="wrapperR" style="border:1px solid #000;flex:3; height:100%;overflow:auto;">
        <ul>
          <li style="margin-bottom:300px;" class="itemR" v-for="(item, key) in arr" :key="key">
            <h4>{{item.text}}</h4>
            <ul>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
              <li>标题来的： {{item.text}}</li>
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
      let list = document.getElementById('wrapperR').getElementsByClassName('itemR')
      this.scrollR.scrollToElement(list[i], 300)
    },

    init() {
      this.scrollR = new BScroll(document.getElementById('wrapperR'), {
        probeType: 3
      })

      this.scrollR.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY)
        // console.log(pos.x + '~' + pos.y)
      })
      console.log('执行init()')
    }
    
  },
  mounted() {
    this.init()
  }

}
</script>

<style scoped>

</style>
