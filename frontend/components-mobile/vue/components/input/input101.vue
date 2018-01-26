<template>
  <div class="input101">

    <p class="">这个在input101</p>
    <div class="padding">
      <div class="form-group">
        <label for="username101">用户名：</label>
        <input type="text" class="form-control clear" id="username101" v-model="username101" placeholder="用户名：">
      </div>
    </div>

    <div class="padding">
      <div class="form-group">
        <input type="text" class="form-control clear" id="username102" v-model="username102" placeholder="用户名：">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'input101',
  data() {
    return {
      username101: '',
      username102: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
