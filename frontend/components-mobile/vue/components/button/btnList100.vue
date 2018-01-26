<template>
  <div class="btnList100">

    <p>这是使用Element-UI写的，在btnList100中</p>
    <h4>首字母搜索城市：</h4>
    <el-row :gutter="10">
      <el-col :span="3" v-for="(item, index) in cityList" :key="index" class="mb10">
        <mt-button type="default" size="small" class="w-100">{{ item }}</mt-button>
      </el-col>
    </el-row>

    <p class="h4">热门城市：</p>
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in cityList0" :key="index" class="mb10">
        <mt-button type="default" class="w-100">{{ item }}</mt-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'btnList100',
  data() {
    return {
      cityList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
      cityList0: ['北京', '上海', '广州', '深圳', '杭州', '南京', '武汉', '湖南', '汕头', '潮州', '揭阳', '梅州']
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
