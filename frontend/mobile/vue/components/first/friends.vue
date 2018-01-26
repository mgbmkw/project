<template>
  <div class="friends" style="width:100%;height:100%;overflow:auto;">
    <mt-index-list style="height:100%;">
      <mt-index-section :index="Object.keys(item)[0]" v-for="(item, key) in friends" :key="key">
        <mt-cell :title="childItem" v-for="(childItem,childKey) in Object.values(item)[0]" :key="childKey"></mt-cell>
      </mt-index-section>
    </mt-index-list>

  </div>
</template>

<script>
export default {
  name: 'friends',
  data() {
    return {
      friends: [], // 这个是用来使用到v-for循环中的
      data: [ // 这个是axios获取的数据！
        { '啊': 'A' },
        { '帮你忙': 'B' },
        { '曹操': 'C' },
        { '大鹏': 'D' },
        { '恶通天': 'E' },
        { '范伟': 'F' },
        { 'G-Person': 'G' },
        { 'H-Person': 'H' },
        { '和气': 'H' },
        { '汉字': 'H' },
        { 'I-Person': 'I' },
        { '嘉诚': 'J' },
        { 'K-Person': 'K' },
        { '刘德华': 'L' },
        { '曼谷': 'M' },
        { 'N-Person': 'N' },
        { 'O-Person': 'O' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'R-Person': 'R' },
        { 'S-Person': 'S' },
        { '汤姆.克鲁斯': 'T' },
        { 'P-Person': 'P' },
        { 'Q-Person': 'Q' },
        { 'R-Person': 'R' },
        { '史蒂文.西格尔': 'S' },
        { '汤姆.克鲁斯': 'T' },
        { 'U-Person': 'U' },
        { 'V-Person': 'V' },
        { 'W-Person': 'W' },
        { 'X-Person': 'X' },
        { 'Y-Person': 'Y' },
        { 'Z-Person': 'Z' }
      ]
    }
  },
  methods: {

  },
  mounted() {
    // 通讯录列表
    var data = this.data
    var friends = [{ 'A': [] }, { 'B': [] }, { 'C': [] }, { 'D': [] }, { 'E': [] }, { 'F': [] }, { 'G': [] }, { 'H': [] }, { 'I': [] }, { 'J': [] }, { 'K': [] }, { 'L': [] }, { 'M': [] }, { 'N': [] }, { 'O': [] }, { 'P': [] }, { 'Q': [] }, { 'R': [] }, { 'S': [] }, { 'T': [] }, { 'U': [] }, { 'V': [] }, { 'W': [] }, { 'X': [] }, { 'Y': [] }, { 'Z': [] }]

    for (var i = 0;i < data.length;i++) {
      for (var j = 0;j < friends.length;j++) {
        if (Object.values(data[i])[0] == Object.keys(friends[j])[0]) {
          Object.values(friends[j])[0].push(Object.keys(data[i])[0])
        } else {
          // console.log('没有这个项~')
        }
      }
    }
    this.friends = friends
  }
}
</script>

<style scoped>

</style>
