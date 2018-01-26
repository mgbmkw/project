<template>
  <div class="checkbox100">

    <!-- 注：不加align="right"的话，又是一种样式，很方便！ -->
    <p>这个是用Mint-UI写的</p>
    <mt-checklist title="复选框列表2" v-model="checklistVal" :options="['选项A', '选项B', '选项C']" align="right">
    </mt-checklist>
    <mt-cell title="您选择了：">{{checklistVal.join(" ").split(" ").sort().join("、")}}</mt-cell>

    <!-- options是个数组，[{}, {}, {} ……] -->
    <!-- max是最大可选个数 -->
    <mt-checklist :max="2" title="复选框列表2" v-model="checklistVal" :options="options" align="right">
    </mt-checklist>
    <mt-cell title="您选择了：">{{checklistVal.join(" ").split(" ").sort().join("、")}}</mt-cell>

  </div>
</template>

<script>
export default {
  name: 'checkbox100',
  data() {
    return {
      checklistVal: [],
      options: [
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
          label: '选项A',
          value: '选项A'
        },
        {
          label: '选项B',
          value: '选项B'
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
