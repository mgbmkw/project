<template>
  <div class="mine">

    <!-- 顶部编辑 -->
    <mineMsg></mineMsg>

    <!-- 按钮列： 4个 -->
    <mineBtnList></mineBtnList>

    <!-- 求职意向 objective -->
    <objective></objective>

    <!-- 收藏 collection -->
    <collection></collection>

    <!-- 反馈与帮助 help -->
    <help></help>

    <!-- 设置 settings -->
    <settings></settings>

    <!-- 隐私设置 privacySettings -->
    <privacySettings></privacySettings>

  </div>
</template>

<script>
import { Cell } from 'mint-ui';

import mineMsg from './mine/mineMsg';
import mineBtnList from './mine/mineBtnList';
import objective from './mine/objective';
import collection from './mine/collection';
import help from './mine/help';
import settings from './mine/settings';
import privacySettings from './mine/privacySettings';

export default {
  name: 'mine',
  components: {
    mineMsg, mineBtnList, objective, collection, help, settings, privacySettings
  },
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.mine {
  padding-top: 50px;
}
</style>
