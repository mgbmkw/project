<template>
  <div class="merchantBasicInfo">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="12">

        <FormItem label="商家名称">
          <!-- <Input size="small" v-model="formVal.input1"></Input> -->
          <!-- <Alert type="warning">汕头市娱乐有限公司</Alert> -->
          <span style="line-height:34px;">汕头市天天乐超市有限公司</span>
        </FormItem>

        <FormItem label="商家编号">
          <!-- <Input size="small" v-model="formVal.input2"></Input> -->
          <span style="line-height:34px;">X10086</span>
        </FormItem>

        <FormItem label="商家地址">
          <Input size="small" placeholder="广东省汕头市龙湖区中山东路XX号XX铺面" v-model="formVal.input3"></Input>
        </FormItem>

        <FormItem label="手机/电话">
          <Input size="small" placeholder="13670317836" v-model="formVal.input13"></Input>
        </FormItem>
        </Col>

        <Col span="12">
        <FormItem label="综合评分">
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
        </FormItem>

        <FormItem label="商品评分">
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
        </FormItem>

        <FormItem label="服务评分">
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
        </FormItem>

        <FormItem label="口碑评分">
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
        </FormItem>
        </Col>

      </Row>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'merchantBasicInfo',
  data() {
    return {
      formVal: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: ''
      },
      valueText: 3,
      valueCustomText: 3.6
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
