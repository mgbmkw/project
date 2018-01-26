<template>
  <div class="mine wh100flau">

    <div style="position:fixed;width:100%;background-color:#999;z-index:1999999999999;">
      <a href="javascript://" style="width:30%;text-align:center;display:inline-block;" @click="selecting(0, $event)">1</a>
      <a href="javascript://" style="width:30%;text-align:center;display:inline-block;" @click="selecting(1, $event)">2</a>
      <a href="javascript://" style="width:30%;text-align:center;display:inline-block;" @click="selecting(2, $event)">3</a>
    </div>

    <div ref="wrapper" id="wrapper" style="height:300px;border:1px solid #000;overflow:auto;">
      <ul ref="liWrap">
        <li class="items">
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
          <p>1111111</p>
        </li>

        <li class="items" id="item2">
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
          <p>22222222222222222</p>
        </li>

        <li class="items">
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
          <p>3333333333333333333333333</p>
        </li>
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
      liWrapScroll: {}
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
      console.log(pos.x + '~' + pos.y)
    })
    // scroll.scrollTo(0, 300, 300)
    this.scroll.scrollToElement('#item2', 300)
  }

}
</script>

<style scoped>

</style>
