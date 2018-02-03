<template>
  <div class="merchantActivities">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="8">
        <!-- <FormItem label="活动">
          <Input size="small" v-model="formVal.input8"></Input>
        </FormItem> -->
        <p class="">使用的是Vuex，现在的globalNum是： {{$store.state.globalNum}}</p>
        </Col>
      </Row>
      <Button type="ghost" @click="$store.commit('add', $store.state.globalNum)">加1</Button>
      <Button type="primary" @click="$store.commit('minus', $store.state.globalNum)">减1</Button>
    </Form>
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
  // methods: {
  //   abc() {
  //     let arr = [1, 2.3]
  //     let arr1 = [...arr, 666]
  //     console.log(arr1)
  //   }
  // }
  // methods: mapActions(['add'])
}
</script>

<style scoped>

</style>
