<template>
  <div class="search100">

    <p class="">这个是用bootstrap写的</p>
    <div class="input-group mb10">
      <span class="input-group-btn">
        <button class="btn btn-success" type="button">搜!</button>
      </span>
      <input type="text" class="form-control" placeholder="南京/nanjing/nj">
    </div>

    <div class="input-group mb10">
      <input type="text" class="form-control" placeholder="南京/nanjing/nj">
      <span class="input-group-btn">
        <button class="btn btn-success" type="button">搜!</button>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'search100',
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
