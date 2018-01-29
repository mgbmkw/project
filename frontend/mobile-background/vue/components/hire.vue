<template>
  <div class="hire" style="padding:6px 10px;">

    <Tabs :animated="false">
      <!--  -->
      <TabPane icon="paper-airplane" label="消息">
        消息
      </TabPane>

      <!--  -->
      <TabPane icon="person-stalker" label="言职">
        言职
      </TabPane>

      <!--  -->
      <TabPane icon="social-chrome" label="VIP专场">
        VIP专场
      </TabPane>

      <!--  -->
      <TabPane icon="happy-outline" label="我">
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
