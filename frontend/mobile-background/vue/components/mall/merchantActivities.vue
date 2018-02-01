<template>
  <div class="merchantActivities">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="8">
        <!-- <FormItem label="活动">
          <Input size="small" v-model="formVal.input8"></Input>
        </FormItem> -->
        </Col>
      </Row>
      <Button type="ghost" @click="add" style="margin-left: 8px">试验</Button>
    </Form>
    <p class="">现在的数字是： 0</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  },
  methods: {

  }
  // methods: mapActions(['add'])
}
</script>

<style scoped>

</style>
