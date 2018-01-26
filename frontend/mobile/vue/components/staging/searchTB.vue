<template>
  <div class="searchTB">

    <!-- 淘宝输入框 -->
    <div class="flex">
      <div class="flex-item"></div>
      <div class="clearfix search-wrap" style="flex:1; " :class="{ focus: focus }">
        <img class="searchImg img24" :src="'/static/images/700×350图片03.jpg'" alt="图片名" />
        <input class="search" type="text" placeholder="请输入关键字" name="" id="" @focus="focus=true" @blur="focus=false">
        <input class="searchBtn" type="button">
      </div>
      <div class="flex-item"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'searchTB',
  data() {
    return {
      focus: false
    }
  }, methods: {

  }
}
</script>

<style scoped>
.flex-item {
  width: 100px;
  height: 36px;
}
.search-wrap {
  width: 100%;
  padding: 0;
  margin-top: 12px;
  border-bottom: 1px solid #333;
  display: -webkit-flex;
}
.search-wrap.focus {
  border-bottom: 1px solid #554fec;
}

.searchImg {
  width: 24px;
  height: 24px;
  float: left;
}

.search {
  flex: 1;
  background: none;
  outline: none;
  border: 0px;
  float: left;
  line-height: 24px;
  padding: 0 10px;
}
.searchBtn {
  border: none;
  width: 24px;
  height: 24px;
  line-height: 34px;
  float: right;
  cursor: pointer;
  background-image: url("/static/images/700×350图片03.jpg");
  background-repeat: no-repeat;
}
</style>
