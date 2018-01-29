<template>
  <div class="goodsList">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="8">
        <FormItem label="菜品名称">
          <Input size="small" v-model="formVal.input6"></Input>
        </FormItem>
        </Col>

        <Col span="8">
        <FormItem label="所属类型">
          <Input size="small" v-model="formVal.input10"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="菜品介绍">
          <Input size="small" v-model="formVal.input11"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="价格">
          <Input size="small" v-model="formVal.input12"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="菜品图片">
          <Input size="small" v-model="formVal.input13"></Input>
        </FormItem>
        </Col>
      </Row>
    </Form>

  </div>
</template>

<script>
export default {
  name: 'goodsList',
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
      }
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
