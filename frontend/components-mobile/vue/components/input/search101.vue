<template>
  <div class="search101">

    <p class="">这个是用【Mint-UI】写的</p>
    <h5>选择城市：</h5>
    <mt-search :autofocus="true" v-model="searchVal" cancel-text="×" placeholder="南京/nanjing/nj">
    </mt-search>

  </div>
</template>

<script>
export default {
  name: 'search101',
  data() {
    return {
      searchVal: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
