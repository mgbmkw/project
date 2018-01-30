<template>
  <div class="mall wh100flau" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane icon="paper-airplane" label="商家基本信息">
        <merchantBasicInfo></merchantBasicInfo>
      </TabPane>

      <!--  -->
      <TabPane icon="clipboard" label="其他信息">
        <otherInfo></otherInfo>
      </TabPane>

      <!--  -->
      <TabPane icon="ios-list-outline" label="商品列表">
        <goodsList></goodsList>
      </TabPane>

      <!--  -->
      <TabPane icon="android-add" label="添加商品">
        <addGoods></addGoods>
      </TabPane>

      <!--  -->
      <TabPane icon="at" label="商家活动">
        <merchantActivities></merchantActivities>
      </TabPane>

      <!--  -->
      <TabPane icon="happy-outline" label="经营情况">
        经营情况
      </TabPane>

      <!--  -->
      <TabPane icon="stats-bars" label="图表分析">
        <chart></chart>
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
import merchantBasicInfo from './mall/merchantBasicInfo'
import otherInfo from './mall/otherInfo'
import goodsList from './mall/goodsList'
import addGoods from './mall/addGoods'
import merchantActivities from './mall/merchantActivities'
import chart from './mall/chart'

export default {
  name: 'mall',
  components: {
    merchantBasicInfo, otherInfo, goodsList, addGoods, merchantActivities, chart
  },
  data() {
    return {

    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
