<template>
  <div class="kong">

    <p>这些是用Element-UI写的</p>
    <el-rate v-model="rateVal1"></el-rate>

    <el-rate v-model="rateVal2" show-text :max="5" :low-threshold="1" :high-threshold="3" :allow-half="true" :texts="['一般', '满意', '惊喜', 'Good！', '好好好！！']" text-color="#03A0D6" :colors="['#5F7789', '#FB4F0F', '#05D600', '#0D95CD', '#EEDC0D']" @change="rateChange">
    </el-rate>

    <el-rate v-model="rateVal3" :icon-classes="['el-icon-arrow-right', 'el-icon-d-arrow-right', 'el-icon-check']" void-icon-class="el-icon-star-off" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

    <el-rate v-model="rateVal4" disabled show-text text-color="#ff9900" score-template="{value}">
    </el-rate>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      rateVal1: null,
      rateVal2: null,
      rateVal3: null,
      rateVal4: 3.6
    }
  },
  methods: {
    rateChange() {
      // alert('1')
    }
  }
}
</script>

<style scoped>

</style>
