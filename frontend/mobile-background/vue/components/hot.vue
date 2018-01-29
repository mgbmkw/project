<template>
  <div class="hot" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane label="推荐文章">
        推荐文章
      </TabPane>

      <!--  -->
      <TabPane label="新闻热点">
        新闻热点
      </TabPane>

      <!--  -->
      <TabPane label="在线视频">
        在线视频
      </TabPane>

      <!--  -->
      <TabPane label="在线歌曲">
        在线歌曲
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'hot',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
