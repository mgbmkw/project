<template>
  <div class="merchantBasicInfo">

    <Form :model="formVal" label-position="right" :rules="rules" :label-width="100">
      <Row>
        <Col span="12">

        <FormItem label="商家名称">
          <span style="line-height:34px;">汕头市天天乐超市有限公司</span>
        </FormItem>

        <FormItem label="商家编号">
          <span style="line-height:34px;">X10086</span>
        </FormItem>

        <FormItem label="商家地址" prop="address">
          <Input size="small" placeholder="广东省汕头市龙湖区中山东路XX号XX铺面" v-model="formVal.address"></Input>
        </FormItem>

        <FormItem label="手机/电话" prop="phone">
          <Input size="small" placeholder="13670317836" type="text" v-model="formVal.phone"></Input>
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
      rules: {
        address: [
          { required: true, message: '地址不能为空', trigger: 'blur' },
          { type: 'string', min: 2, max: 5, message: '长度在 2 到 5 个字符' },
          // { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文' }, 
          // { pattern:/^[a-zA-Z]w{1,4}$/, message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}
        ],

        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          // { validator: this.re_phone, message: '请输入正确格式的手机号码', trigger: 'change' }
          { validator: this.re_phone, message: '请输入正确格式的手机号码' }
        ]
      },
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
    re_phone(rule, value, callback) {
      if (!/^1[3-8]{1}[0-9]{9}$/.test(+value)) {
        callback(new Error('请输入11位手机号'))
      } else {
        callback()
      }
    }

  }
}
</script>

<style scoped>

</style>
