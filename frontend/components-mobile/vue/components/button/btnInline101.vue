<template>
  <div class="btnInline101">

    <p class="">这些是用Mint-UI写的</p>
    <div class="wrap">
      <mt-button type="default" size="small" icon="success" @click.native="handleClick">default</mt-button>
      <mt-button plain size="small" icon="field-success" @click.native="handleClick">default</mt-button>
    </div>

    <div class="wrap">
      <mt-button type="primary" size="normal" icon="success" @click.native="handleClick">primary</mt-button>
      <mt-button plain size="normal" icon="field-success" @click.native="handleClick">primary</mt-button>
    </div>

    <div class="wrap">
      <mt-button plain size="large" disabled icon="success" @click.native="handleClick">danger</mt-button>
      <mt-button type="danger" size="large" disabled icon="field-success" @click.native="handleClick">danger</mt-button>
    </div>

    <mt-button @click.native="handleClick">
      <img :src="'/static/images/favicon.ico'" height="20" width="20" slot="icon">Vue.js2.0
    </mt-button>
    <p class="hr"></p>

    <div>
      <mt-palette-button content="√" mainButtonStyle="color:#fff;background-color:#26a2ff;">
        <div class="my-icon-button"></div>
        <div class="my-icon-button"></div>
        <div class="my-icon-button"></div>
      </mt-palette-button>

      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')" direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;" style="left:30px;">
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
      </mt-palette-button>
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'btnInline101',
  data() {
    return {
      msg: ''
    }
  }, methods: {
    handleClick(ev) {
      Toast({ message: ev.target.innerText, position: 'middle', duration: 1000 })
    },
    main_log(val) {
      console.log('main_log', val)
    },
    sub_log(val) {
      console.log('sub_log', val)
      this.$refs.target_1.collapse()
    }
  }
}
</script>

<style scoped>

</style>
