<template>
  <div class="kong">

    <div class="flex-media">
      <ul class="flex-box">
        <li>
          <a href="javascript://">
            <img :src="'/static/images/666.jpg'" alt="名优家政" class="img50" />
          </a>
        </li>

        <li>
          <h3 class="pay-type">微信支付</h3>
          <p class="mb0 omit mt0">
            <span class="pay-type-msg">推荐己使用微信的用户使用</span>
          </p>
        </li>

        <li class="checkbox-wrap">
          <div class="checkbox">
            <label><input type="checkbox" class="larger"></label>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.pay-type {
  font-size: 22px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 100;
  color: #333;
}
.pay-type-msg {
  color: #666;
  font-weight: 100;
}
.checkbox-wrap {
  align-self: center !important;
  width: 30px !important;
}
.larger {
  width: 22px;
  height: 22px;
}
</style>
