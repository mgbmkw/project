<template>
  <div class="mineMsg">

    <div class="flex3">
      <div class="flex2-vertical flex3-item-text">
        <h4 class="flex2-vertical-item-text-title">啊滨</h4>
        <p class="flex2-vertical-item-text-subtitle">微信号：
          <span>mgb166</span>
        </p>
      </div>
      <img :src="'/static/images/140×140图片01.jpg'" alt="图片名" class="flex3-item-img" @click="getMsg = true" />
    </div>

    <p class="mt15">
      <button type="button" class="btn btn-primary btn-xs" @click="getMsg = true">
        <span class="glyphicon glyphicon-edit mr6"></span> 编辑
      </button>
    </p>

    <!--  -->
    <div class="modal-full" :class="{ active: getMsg }">
      <mt-header title="">
        <mt-button icon="back" slot="left" @click="getMsg=false">返回</mt-button>
      </mt-header>
      这是getMsg页面
    </div>

  </div>
</template>

<script>
export default {
  name: 'mineMsg',
  data() {
    return {
      getMsg: false
    }
  }, methods: {

  }
}
</script>

<style scoped>
.mineMsg {
  padding: 0 10px;
  margin-bottom: 30px;
}
</style>
