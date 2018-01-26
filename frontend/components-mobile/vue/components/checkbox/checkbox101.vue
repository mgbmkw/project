<template>
  <div class="kong">

    <p>这2个是用bootstrap写的，在checkbox101中</p>
    <div class="checkbox">
      <label v-for="(item, index) in checkSuccessVal" class="col-md-6 col-xs-6">
        <input type="checkbox" :value="item.value" :key="index" v-model="checkSuccessValkong">{{index}}：{{item.label}}
      </label>
    </div>
    <p class="hr">{{checkSuccessValkong.join(" ").split(" ").sort().join("、")}}</p>

    <!-- 这种是在外面包了层has-success的样式！ -->
    <div class="has-success" v-for="(item, index) in checkSuccessVal">
      <div class="checkbox">
        <label>
          <input type="checkbox" :value="item.value" :key="index" v-model="checkSuccessValkong"> 第{{index}}个：{{item.label}}
        </label>
      </div>
    </div>
    <p class="hr">{{checkSuccessValkong.join(" ").split(" ").sort().join("、")}}</p>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      checkSuccessValkong: [],
      checkSuccessVal: [
        {
          label: '汕头',
          value: '汕头',
          disabled: true
        },
        {
          label: '潮阳',
          value: '潮阳',
          disabled: true
        },
        {
          label: '揭阳',
          value: '揭阳'
        },
        {
          label: '深圳',
          value: '深圳'
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
