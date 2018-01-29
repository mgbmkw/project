<template>
  <div class="hire" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane label="消息">
        消息
      </TabPane>

      <!--  -->
      <TabPane label="言职">
        言职
      </TabPane>

      <!--  -->
      <TabPane label="VIP专场">
        VIP专场
      </TabPane>

      <!--  -->
      <TabPane label="我">
        我
      </TabPane>

      <!--  -->
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'hire',
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
