<template>
  <div class="badge101">

    <p>这是用Element-UI写的，badge101</p>

    <div>
      <el-badge :value="100" :max="99" class="item">
        <el-button size="small">小</el-button>
      </el-badge>

      <el-badge :value="99" :max="99" class="item">
        <el-button>中</el-button>
      </el-badge>

      <el-badge value="hot" class="item" :hidden="false">
        <el-button size="large">大</el-button>
      </el-badge>

      <el-badge is-dot class="item" :hidden="false">数据查询</el-badge>
      <el-badge is-dot class="item" :hidden="true">
        <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
      </el-badge>

      <el-dropdown trigger="click" @click="isIconToggle">
        <span class="el-dropdown-link">
          点击
          <i class="el-icon--right el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="100" :max="99" />
          </el-dropdown-item>

          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="99" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="hr"></p>

  </div>
</template>

<script>
export default {
  name: 'badge101',
  data() {
    return {
      iconToggle: true
    }
  }, methods: {
    isIconToggle() {
      this.iconToggle = !this.iconToggle
    }
  }
}
</script>

<style scoped>
.item {
  margin: 30px 100px 30px 0;
}
</style>
