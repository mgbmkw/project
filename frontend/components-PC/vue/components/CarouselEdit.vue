<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="图片名称" prop="name">
        <Input v-model="formValidate.name" placeholder="图片名称"></Input>
      </FormItem>
      <FormItem label="图片地址" prop="url">
        <Input v-model="formValidate.url" placeholder="图片地址"></Input>
      </FormItem>
      <FormItem label="图片标题" prop="title">
        <Input v-model="formValidate.title" placeholder="图片标题"></Input>
      </FormItem>
      <FormItem label="内容介绍" prop="introinfo">
        <Input v-model="formValidate.introinfo" placeholder="内容介绍"></Input>
      </FormItem>


      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        url: '',
        title: '',
        introinfo: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        introinfo: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
