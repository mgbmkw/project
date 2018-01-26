<template>
  <div class="badge102">

    <p>这是用Mint-UI写的，badge102</p>
    <mt-badge size="small" type="primary" color="">10</mt-badge>
    <mt-badge size="normal" type="success" color="">10</mt-badge>
    <mt-badge size="large" type="error" color="">10</mt-badge>
    <mt-badge size="large" type="warning" color="#015F9C">自定义</mt-badge>

    <mt-cell title="标题文字">
      <span class="mr10">未读</span>
      <mt-badge size="large" type="warning" color="#015F9C">10条</mt-badge>
    </mt-cell>

  </div>
</template>

<script>
export default {
  name: 'badge102',
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
