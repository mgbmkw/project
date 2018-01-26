<template>
  <div class="hire wh100flau">

    <searchTB></searchTB>

    <swiperCommon></swiperCommon>

    <hr/>

    <hireBtnList></hireBtnList>

    <hr/>

    <jobList></jobList>

  </div>
</template>

<script>
import searchTB from './hire/searchTB'
import swiperCommon from './hire/swiperCommon'
import hireBtnList from './hire/hireBtnList'
import jobList from './hire/jobList'
export default {
  name: 'hire',
  components: { searchTB, swiperCommon, jobList, hireBtnList },
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
