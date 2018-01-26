<template>
  <div class="mine wh100flau">

    <div style="border:1px solid blue;display:-webkit-flex;height:40%;">
      <div ref="wrapperL" id="wrapperL" style="border:1px solid #000;flex:1; height:100%;overflow:auto;">
        <a href="javascript://" class="btnR" v-for="(item, key) in arr" :key="key" style="text-align:center;display:block;" @click="selecting(key, $event)" :class="{ 'current': currentIndex == key }">{{item.btn}}</a>
      </div>

      <div ref="wrapperR" id="wrapperR" style="border:1px solid #000;flex:3; height:100%;overflow:auto;">
        <ul>
          <li class="itemR" v-for="(item, key) in arr" :key="key">
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
      arr: [
        {
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
        }, {
          text: '内容7',
          btn: '按钮7'
        }, {
          text: '内容8',
          btn: '按钮8'
        }, {
          text: '内容9',
          btn: '按钮9'
        }, {
          text: '内容10',
          btn: '按钮10'
        }, {
          text: '内容11',
          btn: '按钮11'
        }, {
          text: '内容12',
          btn: '按钮12'
        }, {
          text: '内容13',
          btn: '按钮13'
        }, {
          text: '内容14',
          btn: '按钮14'
        }, {
          text: '内容15',
          btn: '按钮15'
        }, {
          text: '内容16',
          btn: '按钮16'
        },
        {
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
        }, {
          text: '内容7',
          btn: '按钮7'
        }, {
          text: '内容8',
          btn: '按钮8'
        }, {
          text: '内容9',
          btn: '按钮9'
        }, {
          text: '内容10',
          btn: '按钮10'
        }, {
          text: '内容11',
          btn: '按钮11'
        }, {
          text: '内容12',
          btn: '按钮12'
        }, {
          text: '内容13',
          btn: '按钮13'
        }, {
          text: '内容14',
          btn: '按钮14'
        }, {
          text: '内容15',
          btn: '按钮15'
        }, {
          text: '内容16',
          btn: '按钮16'
        }
      ]
    }
  },
  computed: {
    currentIndex() {
      for (var i = 0;i < this.listHeight.length;i++) {
        let h1 = this.listHeight[i]
        let h2 = this.listHeight[i + 1]
        if (!h2 || (this.scrollY >= h1 && this.scrollY < h2)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    selecting(i, ev) {
      let list = document.getElementById('wrapperR').getElementsByClassName('itemR')
      this.scrollR.scrollToElement(list[i], 300)
    },

    init() {
      this.scrollR = new BScroll(document.getElementById('wrapperR'), {
        probeType: 3, click: true
      })


      this.scrollR.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
      console.log('执行init()')
    },

    calcHeight() {
      let itemRs = document.getElementById("wrapperR").getElementsByClassName('itemR')
      let h = 0
      this.listHeight.push(h)
      for (var i = 0;i < itemRs.length;i++) {
        let item = itemRs[i]
        h += item.clientHeight
        this.listHeight.push(h)
      }
      console.log(this.listHeight)
    }

  },
  mounted() {
    // this.$nextTick(() => {
    this.init()
    this.calcHeight()
    // })
  }

}
</script>

<style scoped>
.btnR.current {
  background-color: rgb(94, 131, 245);
  color: #fff;
}
</style>
