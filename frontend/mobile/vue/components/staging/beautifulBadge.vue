<template>
  <div class="beautifulBadge">

    <a href="#" class="beautiful-badge">
      <!-- <img :src="'/static/images/300×300图片05.jpg'" alt="图片名" class="img16" /> -->
      <span class="glyphicon glyphicon-tint"></span>
      <span class="beautiful-badge-item">166</span>
      <!-- 注意：bootstrap的glyphicon的top:2px; -->
    </a>

  </div>
</template>

<script>
export default {
  name: 'beautifulBadge',
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
