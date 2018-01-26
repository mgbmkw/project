<template>
  <div class="radio102">

    <mt-checklist v-model="checklistVal0" :options="['记住密码']"></mt-checklist>

    <mt-checklist v-model="checklistVal1" :options="options1" title="有个标题~~"></mt-checklist>
    <p class="">{{this.checklistVal1}}</p>
  </div>
</template>

<script>
export default {
  name: 'radio102',
  data() {
    return {
      checklistVal0: [],
      checklistVal1: [],
      options1: [
        {
          label: '记住密码01',
          value: true,
          disabled: false
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
