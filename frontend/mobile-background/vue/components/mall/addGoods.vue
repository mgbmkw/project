<template>
  <div class="kong">

    <Form :model="formVal" ref="formVal" label-position="right" :rules="rules" :label-width="100">
      <Row>
        <Col span="8">
        <FormItem label="商品名称" prop="productName">
          <Input size="small" v-model="formVal.productName"></Input>
        </FormItem>
        <FormItem label="所属类型" prop="productType">
          <!-- <Select size="small" v-model="formVal.productType" :transfer="true" placeholder="选择商品的所属类型" @on-change> -->
          <Select size="small" v-model="formVal.productType" :transfer="true" placeholder="选择商品的所属类型" @on-change>
            <Option v-for="(item, key) in arr" :value="item.value" :key="key">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="商品价格" prop="productPrice">
          <Input v-model="formVal.productPrice" size="small"></Input>
          <!-- <InputNumber v-model="value3" size="small" :precision="2"></InputNumber> -->
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
        <FormItem label="商品介绍" prop="intro">
          <Input v-model="formVal.intro" type="textarea" :autosize="false" placeholder="请简单介绍一下商品信息"></Input>
        </FormItem>
        </Col>

        <Col span="8">

        </Col>
      </Row>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formVal')">Submit</Button>
        <Button type="ghost" @click="" style="margin-left: 8px">试验</Button>
      </FormItem>

    </Form>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      rules: {
        productName: [
          { required: true, message: '产品名称不能为空', trigger: 'blur' },
          // { type: 'string', min: 2, max: 5, message: '长度在 2 到 5 个字符' },
          // { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文' }, 
          // { pattern:/^[a-zA-Z]w{1,4}$/, message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}
        ],
        productType: [
          { required: true, message: '必须选择1种类型', trigger: 'change' }
        ],
        productPrice: [
          { required: true, message: '价格不能为空', trigger: 'blur' },
          { validator: this.re_productPrice, message: '只能为数字' }
        ],
        intro: [
          { required: true, message: '介绍内容不能为空', trigger: 'blur' },
          { type: 'string', min: 10, max: 50, message: '长度在 10 到 50 个字符' }
        ]
      },
      formVal: {
        productType: '',
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
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    re_productPrice(rule, value, callback) {
      if (!Number.isInteger(+value)) {
        callback(new Error('产品价格必须是数字'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style scoped>

</style>
