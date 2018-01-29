<template>
  <div class="wx" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane label="消息">
        消息
      </TabPane>

      <!--  -->
      <TabPane label="联系人">
        联系人
      </TabPane>

      <!--  -->
      <TabPane label="发现">
        发现
      </TabPane>

      <!--  -->
      <TabPane label="我的">
        我的
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'wx',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
