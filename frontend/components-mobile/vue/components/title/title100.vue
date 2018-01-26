<template>
  <div class="title100">

    <p class="line-text-line">
      <span class="line"></span>
      <span class="text">标题：在title100里</span>
      <span class="line"></span>
    </p>

    <p class="help-block mt10 c">
      <a href="javascript://" class="underline">找回密码帮助指南</a>
    </p>

  </div>
</template>

<script>
export default {
  name: 'title100',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.line-text-line {
  display: flex;
  margin-top: 50px;
}
.line-text-line .line {
  flex: 1;
  border-bottom: 1px solid #e5e5e5;
  height: 10px;
}
.line-text-line .text {
  width: 100px;
  /* background-color: #fff; */
  text-align: center;
}
</style>
