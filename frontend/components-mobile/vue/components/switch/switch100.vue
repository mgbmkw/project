<template>
  <div class="switch100">

    <p>这些是使用【Element-UI】写的</p>
    <el-tooltip :content="'现在的值是: ' + switchVal" placement="top">
      <el-switch @change="changeSwitchVal" v-model="switchVal" active-color="#13ce66" inactive-color="#ff4949" active-value="true" inactive-value="false" active-text="on状态" inactive-text="off状态" active-icon-class="el-icon-star-on" inactive-icon-class="el-icon-star-off" :width="50">
      </el-switch>
    </el-tooltip>

    <el-switch disabled v-model="switchVal" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>

  </div>
</template>

<script>
export default {
  name: 'switch100',
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
