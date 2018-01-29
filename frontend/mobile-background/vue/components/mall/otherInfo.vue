<template>
  <div class="kong">

    <Form :model="formVal" label-position="right" :label-width="100">
      <Row>
        <Col span="24">
        <FormItem label="配送时间">
          <TimePicker :value="timePicker1" format="HH ：mm" type="timerange" placement="bottom-start" placeholder="请选择时间" style="width: 25%"></TimePicker>
          <TimePicker :value="timePicker2" format="HH ：mm" type="timerange" placement="bottom-start" placeholder="请选择时间" style="width: 25%"></TimePicker>
          <TimePicker :value="timePicker3" format="HH ：mm" type="timerange" placement="bottom-start" placeholder="请选择时间" style="width: 25%"></TimePicker>
        </FormItem>
        </Col>

        <Col span="24">
        <FormItem label="食品安全">
          <!-- <Input size="small" v-model="formVal.input13"></Input> -->
        </FormItem>
        </Col>

        <Col span="24">
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
          </div>
        </Card>
        </Col>

        <Col span="24">
        <FormItem label="商家环境">
          <!-- <Input size="small" v-model="formVal.input5"></Input> -->
        </FormItem>
        </Col>

        <Col span="24">
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
            <div style="width:25%; ">
              <img style="width:50%;" :src="'/static/images/700×350图片04.jpg'">
              <h5 style="margin-top:15px;">食品合格许可证</h5>
            </div>
            <div style="width:25%; ">
              <img style="width:50%;" :src="'/static/images/700×350图片05.jpg'">
              <h5 style="margin-top:15px;">食品合格许可证</h5>
            </div>
            <div style="width:25%; ">
              <img style="width:50%;" :src="'/static/images/700×350图片06.jpg'">
              <h5 style="margin-top:15px;">食品合格许可证</h5>
            </div>
            <div style="width:25%; ">
              <img style="width:50%;" :src="'/static/images/700×350图片07.jpg'">
              <h5 style="margin-top:15px;">食品合格许可证</h5>
            </div>
            <div style="width:25%; ">
              <img style="width:50%;" :src="'/static/images/700×350图片08.jpg'">
              <h5 style="margin-top:15px;">食品合格许可证</h5>
            </div>
          </div>
        </Card>
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
      timePicker1: [],
      timePicker2: [],
      timePicker3: [],
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
