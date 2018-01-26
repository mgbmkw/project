<template>
  <div class="swiperMsg">

    <div class="flex3 px1">
      <img :src="'/static/images/666.jpg'" alt="图片名" class="flex3-item-img img50" />
      <swiper :options="swiperOption" class="flex3-item" ref="mySwiper">
        <swiper-slide v-for="(item, key) in arr" :key="key">
          <a href="javascript://" class="flex2-vertical">
            <p class="flex2-vertical-item-text">
              <span class="beautiful-span">好玩</span>{{item.msg}}</p>
            <p class="flex2-vertical-item-text">
              <span class="beautiful-span-full">游戏</span>{{item.href}}</p>
            <!-- <span class="beautiful-span-list-wrap">
                <span class="beautiful-span-list-item-l">LV1</span>
                <span class="beautiful-span-list-item-r">游戏</span>
              </span>{{item.href}}</p> -->
          </a>
        </swiper-slide>
      </swiper>

    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: 'swiperMsg',
  data() {
    return {
      swiperOption: {
        initialSlide: 0,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        loop: true,
        speed: 400,
        autoplay: {
          disableOnInteraction: false,
          delay: 30000
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      },
      arr: [{
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '这是什么东东~~',
        src: '/static/images/666.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '有你的快递！有你的快递！有你的快递！有你的快递！有你的快递！',
        src: '/static/images/140×140图片02.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '赶快来喝酒~~~~~~~',
        src: '/static/images/140×140图片03.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '三缺一咯，就等你来~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        src: '/static/images/140×140图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '有你的快递！',
        src: '/static/images/700×350图片01.jpg',
        time: '2018-1-19'
      }, {
        friendname: '日日顺物流',
        href: 'http://www.baidu.com/',
        msg: '有你的快递！',
        src: '/static/images/700×350图片02.jpg',
        time: '2018-1-19'
      }]
    }
  }, methods: {

  }
}
</script>

<style scoped>

</style>
