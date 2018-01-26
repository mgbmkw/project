<template>
  <div class="cell100">

    <!-- clearfix是bootstrap的class -->
    <p class="">这个在cell100里</p>
    <p class="help-block mt10 clearfix">
      <a href="javascript://" class="fl">忘记密码？</a>
      <a href="javascript://" class="fr">如有疑问？</a>
    </p>

    <div class="flex2">
      <div class="checkbox item1">
        <label><input type="checkbox"> 记住密码001 </label>
      </div>
      <a href="javascript://" class="item2">忘记密码？001</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'cell100',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.flex2 {
  display: -webkit-flex;
}
.flex2 .item1,
.flex2 .item2 {
  flex: 1;
}
.flex2 .item2 {
  line-height: 40px;
  text-align: right;
}
</style>
