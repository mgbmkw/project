<template>
  <div class="switch101">

    <p>这些是使用Mint-UI写的</p>
    <mt-switch v-model="switchVal"></mt-switch>
    <mt-switch v-model="switchVal">开关</mt-switch>
    <mt-cell title="标题文字">
      <mt-switch v-model="switchVal" @change="changeSwitchVal">开关</mt-switch>
    </mt-cell>

  </div>
</template>

<script>
export default {
  name: 'switch101',
  data() {
    return {
      switchVal: true
    }
  },
  methods: {
    changeSwitchVal() {
      console.log(this.switchVal)
    }
  }
}
</script>

<style scoped>

</style>
