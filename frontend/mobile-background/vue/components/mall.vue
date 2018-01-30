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
        <Row>
          <Col span="3">
          <div id="qrcode"></div>
          </Col>
          <Col span="21">
          <Input type="textarea" :autosize="false" placeholder="输入生成二维码" v-model="str" @on-keyup="reset(qrcode, str)"></Input>
          <Input v-model="str" placeholder="输入生成二维码" @on-keyup="reset(qrcode, str)"></Input>
          </Col>

        </Row>
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

import QRCode from 'qrcodejs2'
export default {
  name: 'mall',
  components: {
    merchantBasicInfo, otherInfo, goodsList, addGoods, merchantActivities, chart
  },
  data() {
    return {
      str: '',
      qrcode: null
    }
  }, methods: {
    createQrcode(str) {
      var qrcode = new QRCode('qrcode', {
        text: str,
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      return qrcode
    },
    reset(qrcode, str) {
      qrcode.clear()
      qrcode.makeCode(str)
    }
  },

  mounted() {
    // new QRCode(document.getElementById('qrcode'), 'your content');
    var qrcode = this.createQrcode('input')
    this.qrcode = qrcode
  }
}
</script>

<style scoped>

</style>
