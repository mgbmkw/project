<template>
  <div class="wx" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane icon="paper-airplane" label="点菜">

        <Form :model="formRight" label-position="right" :label-width="100">
          <Row>
            <Col span="8">
            <FormItem label="商家名称">
              <Input size="small" v-model="formRight.input1"></Input>
            </FormItem>

            <FormItem label="商家编号">
              <Input size="small" v-model="formRight.input1"></Input>
            </FormItem>

            <FormItem label="菜品">
              <Input size="small" v-model="formRight.input1"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="所属类型">
              <Input size="small" v-model="formRight.input2"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="菜品介绍">
              <Input size="small" v-model="formRight.input3"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="价格">
              <Input size="small" v-model="formRight.input4"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="图片">
              <Input size="small" v-model="formRight.input5"></Input>
            </FormItem>
            </Col>
          </Row>
        </Form>

      </TabPane>

      <!--  -->
      <TabPane icon="person-stalker" label="评价">
        评价
      </TabPane>

      <!--  -->
      <TabPane icon="social-chrome" label="商家">
        商家
      </TabPane>

      <!--  -->
      <TabPane icon="happy-outline" label="商城页">
        商城页
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'wx',
  data() {
    return {
      formRight: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
      }
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
