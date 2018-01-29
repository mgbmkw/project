<template>
  <div class="merchantActivities">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="8">
        <FormItem label="活动">
          <Input size="small" v-model="formVal.input8"></Input>
        </FormItem>
        </Col>
      </Row>
    </Form>

  </div>
</template>

<script>
export default {
  name: 'merchantActivities',
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
