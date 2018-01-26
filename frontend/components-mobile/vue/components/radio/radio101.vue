<template>
  <div class="radio101">

    <mt-radio title="单选框列表" v-model="radioMintVal1" :options="['选项A', '选项B', '选项C']">
    </mt-radio>

    <mt-radio title="右对齐" v-model="radioMintVal2" :options="radioMintValOptions" align="right">
    </mt-radio>

  </div>
</template>

<script>
export default {
  name: 'radio101',
  data() {
    return {
      radioMintVal1: '',
      radioMintVal2: '',
      radioMintValOptions: [
        {
          label: '被禁用',
          value: '被禁用',
          disabled: true
        },
        {
          label: '禁用的值',
          value: '禁用的值',
          disabled: true
        },
        {
          label: '苹果',
          value: '苹果'
        },
        {
          label: '鸭梨',
          value: '鸭梨'
        }
      ]

    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
