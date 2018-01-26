<template>
  <div class="cell102">

    <p>这些也是使用Mint-UI写的，注：【可以滑动查看的！】</p>
    <mt-cell-swipe title="不链接" value="去百度看看" icon="success" :right="[
        {
          content: '删除',
          style: { background: '#ED230F', color: '#fff', borderRadius: '3px', height: '24px', lineHeight: '24px', marginTop: '12px' },
          handler: () => this.$messagebox('不链接')
        }
      ]">
      <span class="blue">←向左滑</span>
    </mt-cell-swipe>

    <mt-cell-swipe title="链接" to="//www.baidu.com/" :left="[
        {
          content: 'Delete',
          style: { background: '#5CC2FC', color: '#fff', borderRadius: '3px', height: '24px', lineHeight: '24px', marginTop: '12px' },
          handler: () => this.$messagebox('链接')
        }
      ]">
      <span class="blue">向右滑→</span>
    </mt-cell-swipe>

  </div>
</template>

<script>
export default {
  name: 'cell102',
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
