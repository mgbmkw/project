<template>
  <div class="mall wh100flau" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane icon="paper-airplane" label="商家基本信息">

      </TabPane>

      <!--  -->
      <TabPane icon="ios-list-outline" label="商品列表">
        商品列表
      </TabPane>

      <!--  -->
      <TabPane icon="android-add" label="添加商品">
        添加商品
      </TabPane>

      <!--  -->
      <TabPane icon="happy-outline" label="经营情况">
        经营情况
      </TabPane>

      <!--  -->
      <TabPane icon="clipboard" label="其他信息">
        其他信息
      </TabPane>

      <!--  -->
      <TabPane icon="stats-bars" label="图表分析">
        图表分析
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'mall',
  data() {
    return {

    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
