<template>
  <div class="btnGroup100">

    <p class="">这些是用bootstrap写的</p>

    <div class="btn-group btn-group-xs" role="group">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>

    <div class="btn-group btn-group-sm" role="group">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </div>

    <div class="btn-group " role="group">
      <button type="button" class="btn btn-success">Left</button>
      <button type="button" class="btn btn-success">Middle</button>
      <button type="button" class="btn btn-success">Right</button>
    </div>

    <div class="btn-group btn-group-lg" role="group">
      <button type="button" class="btn btn-danger">Left</button>
      <button type="button" class="btn btn-danger">Middle</button>
      <button type="button" class="btn btn-danger">Right</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'btnGroup100',
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
