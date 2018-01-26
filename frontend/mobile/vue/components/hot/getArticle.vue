<template>
  <div class="getArticle wh100flau" style="padding:6px 10px;">

    <div>
      <a :href="item.href" v-for="(item, key) in arr" :key="key" style="display:block;margin-bottom:22px;">
        <h4 style="margin-bottom:10px;">{{item.title}}</h4>
        <div :class="'flex'+item['src'].length+'-news-img-wrap'">
          <p class="item" v-for="(childItem, childKey) in item['src']" :key="childKey">
            <img style="width:100%;height:100%;" :src="childItem" alt="图片名" />
          </p>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'getArticle',
  data() {
    return {
      arr: [
        {
          href: 'javascript://',
          title: '上过《我是歌手》的那个演员',
          src: ['/static/images/700×350图片01.jpg', '/static/images/700×350图片02.jpg']
        },
        {
          href: 'javascript://',
          title: '上过《我是歌手》的那个演员',
          src: ['/static/images/300×300图片01.jpg', '/static/images/300×300图片02.jpg', '/static/images/300×300图片03.jpg']
        },
        {
          href: 'javascript://',
          title: '上过《我是歌手》的那个演员',
          src: ['/static/images/700×350图片01.jpg']
        }

      ]
    }
  }, methods: {

  },
  mounted() {
    console.log(this.arr)
  }
}
</script>

<style scoped>
.flex1-news-img-wrap {
  display: -webkit-flex;
  margin-bottom: 16px;
}
.flex1-news-img-wrap .item {
  width: 100%;
}
.flex2-news-img-wrap {
  display: -webkit-flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.flex2-news-img-wrap .item {
  width: 49%;
}
.flex3-news-img-wrap {
  display: -webkit-flex;
  justify-content: space-between;
}
.flex3-news-img-wrap .item {
  width: 33%;
}
</style>
