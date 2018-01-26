<template>
  <div class="textarea100">

    <div class="input-group mb30">
      <span class="input-group-addon between10 clear">描&nbsp;&nbsp;述：</span>
      <textarea id="" placeholder="标题长度为6-300字" class="form-control clear" rows="3" cols="" maxlength="6" v-model="textareaMsg" @blur="isMaxMinLen"></textarea>
    </div>

  </div>
</template>

<script>
// 注：使用Mint-UI的JS组件，则要引入相应的东东
import { Toast } from 'mint-ui'
export default {
  name: 'textarea100',
  data() {
    return {
      textareaMsg: ''
    }
  }, methods: {
    isMaxMinLen() {
      let len = this.textareaMsg.length
      if (len < 6) {
        Toast({ message: '必须大于6个字符', position: 'middle', duration: 5000 })
      }
    }
  }
}
</script>

<style scoped>

</style>
