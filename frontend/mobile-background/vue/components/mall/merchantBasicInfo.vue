<template>
  <div class="merchantBasicInfo">

    <Form :model="formRight" label-position="right" :label-width="100">
      <Row>
        <Col span="8">

        <FormItem label="商家名称">
          <Input size="small" v-model="formRight.input1"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="商家编号">
          <Input size="small" v-model="formRight.input2"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="商家地址">
          <Input size="small" v-model="formRight.input3"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="配送时间">
          <Input size="small" v-model="formRight.input4"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="商家环境">
          <Input size="small" v-model="formRight.input5"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="菜品">
          <Input size="small" v-model="formRight.input6"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="星级">
          <Input size="small" v-model="formRight.input7"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="活动">
          <Input size="small" v-model="formRight.input8"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="评分">
          <Input size="small" v-model="formRight.input9"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="所属类型">
          <Input size="small" v-model="formRight.input10"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="菜品介绍">
          <Input size="small" v-model="formRight.input11"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="价格">
          <Input size="small" v-model="formRight.input12"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="图片">
          <Input size="small" v-model="formRight.input13"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="手机/电话">
          <Input size="small" v-model="formRight.input13"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="食品安全">
          <Input size="small" v-model="formRight.input13"></Input>
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
      formRight: {
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
      }
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
