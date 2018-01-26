<template>
  <div class="hello" @scroll="abc">

    <div style="width:100px;height:100px;border:1px solid #e5e5e5;position:fixed;" :style="'background-color:rgba(62,130,247,'+scroll/300+ ');'"></div>

    <div class="form-group">
      <label for="username" :class="{isCurrent: isUsername}">手机/邮箱/QQ号。inputText1</label>
      <input type="" class="form-control clear" id="username" placeholder="请输入手机/邮箱/QQ号" @focus="focusUsername" @blur="blurUsername">
    </div>

    <InputNumber v-model="value5" size="large"></InputNumber>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      value5: 0,
      isUsername: false,
      scroll: '',
      type: 'password'
    }
  },
  methods: {
    abc() {
      alert('1')
    },
    focusUsername() {
      this.isUsername = true
    },
    blurUsername() {
      this.isUsername = false
    },
    focusPassword() {
      this.isPassword = true
    },
    blurPassword() {
      this.isPassword = false
    },
    handleClose() {

    },
    menu() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.menu)
  }
}
</script>

<style scoped>
.form-group label {
  color: #999;
  font-size: 12px;
  margin-bottom: 0px;
}
.form-group label.isCurrent {
  color: #26a2ff;
}
</style>
