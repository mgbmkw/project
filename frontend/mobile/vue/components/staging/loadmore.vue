<template>
  <div class="loadmore">

    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
    <mt-loadmore :top-method="loadTop" ref="loadmore" top-status-change="change" topPullText="按下了未到达" topDropText="放开了就加载" topLoadingText="这是正在加载的状态~">
      <ul>
        <li v-for="(item, key) in arr" :key="key">
          <h4 class="hg50 omit90">{{item.friendname}}</h4>
        </li>
      </ul>
    </mt-loadmore>

  </div>
</template>

<script>
export default {
  name: 'loadmore',
  data() {
    return {
      msg: ''
    }
  }, methods: {
    loadTop(a, b) {
      this.arr = this.arr100.concat(this.arr_)
      this.$refs.loadmore.onTopLoaded();
    },
    change(a, b) {
      console.log(a)
      console.log(b)
    }
  }
}
</script>

<style scoped>

</style>
