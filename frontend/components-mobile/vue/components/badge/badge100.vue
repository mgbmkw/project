<template>
  <div class="badge100">

    <p>这是用bootstrap写的</p>

    <a href="#">点击查看
      <span class="badge">100</span>
    </a>
    <button class="btn btn-primary" type="button">
      Messages
      <span class="badge">99</span>
    </button>
    <p class="hr"></p>

  </div>
</template>

<script>
export default {
  name: 'badge100',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
