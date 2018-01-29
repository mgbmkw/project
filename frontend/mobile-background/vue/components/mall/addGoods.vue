<template>
  <div class="kong">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="8">
        <FormItem label="商品名称">
          <Input size="small" v-model="formVal.input6"></Input>
        </FormItem>
        <FormItem label="所属类型">
          <Select v-model="type" size="small" :transfer="true" placeholder="选择商品的所属类型" @on-change>
            <Option v-for="(item, key) in arr" :value="item.value" :key="key">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="商品价格">
          <!-- <Input size="small" v-model="formVal.input12"></Input> -->
          <InputNumber v-model="value3" size="small" :precision="2"></InputNumber>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="16">
        <FormItem label="商品图片">
          <!-- <Input size="small" v-model="formVal.input13"></Input> -->
          <Card>
            <div style="display:-webkit-flex;text-align:center;">
              <div style="width:25%; ">
                <img style="width:50%;" :src="'/static/images/700×350图片01.jpg'">
                <h5 style="margin-top:15px;">营业执照</h5>
              </div>
              <div style="width:25%; ">
                <img style="width:50%;" :src="'/static/images/700×350图片02.jpg'">
                <h5 style="margin-top:15px;">食品安全许可证</h5>
              </div>
              <div style="width:25%; ">
                <img style="width:50%;" :src="'/static/images/700×350图片03.jpg'">
                <h5 style="margin-top:15px;">食品合格许可证</h5>
              </div>
              <Upload style="width:25%; " multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
                <div>
                  <Icon type="ios-cloud-upload" size="36" style="color: #3399ff"></Icon>
                  <p>点击/拖拽，上传图片！</p>
                </div>
              </Upload>
            </div>
          </Card>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="16">
        <FormItem label="商品介绍">
          <Input v-model="type" type="textarea" :autosize="false" placeholder="Enter something..."></Input>
        </FormItem>
        </Col>

        <Col span="8">

        </Col>
      </Row>
    </Form>

  </div>
</template>

<script>
export default {
  name: 'kong',
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
      type: '',
      value3: 100,
      arr: [
        {
          value: '煮',
          label: '煮'
        },
        {
          value: '炒',
          label: '炒'
        },
        {
          value: '饮料',
          label: '饮料'
        },
        {
          value: '水果',
          label: '水果'
        },
        {
          value: '凉拌',
          label: '凉拌'
        }
      ],
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
