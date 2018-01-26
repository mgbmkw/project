<template>
  <div class="privacySettings">

    <div @click="getPrivacySettings=true">
      <mt-cell title="隐私设置">
        <span style="font-size:12px;">设置隐私保护</span>
        <span class="glyphicon glyphicon-chevron-right  modify"></span>
        <img slot="icon" :src="'/static/images/666.jpg'" class="img24 bkra50">
      </mt-cell>
    </div>

    <!--  -->
    <div class="modal-full" :class="{ active: getPrivacySettings }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getPrivacySettings=false">返回</mt-button>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'privacySettings',
  data() {
    return {
      getPrivacySettings: false
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
