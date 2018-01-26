<template>
  <div class="media100">

    <p class="">这个在media100</p>
    <div class="flex-media" v-for="item in mediaList">
      <ul class="list-inline flex-box">
        <li>
          <a href="javascript://">
            <!-- <p class="mb0 omit c">{{item.src1title}}</p> -->
            <img :src="item.src1" :alt="item.src1title" class="img60" />
            <p class="mb0 omit c">{{item.src1title}}</p>
          </a>
        </li>

        <li>
          <a href="javascript://">
            <p class="mb0 omit150">
              <span class="intro-1">{{item.intro1}}</span>
            </p>
            <p class="mb0 omit150">
              <span class="intro-2">{{item.intro2}}</span>
            </p>
            <p class="mb0 omit150">
              <span class="intro-3">服务地区：</span>
              <span>{{item.intro3}}</span>
            </p>
            <p class="mb0 omit150">
              <span class="intro-4">发布时间：</span>
              <span>{{item.intro4}}</span>
            </p>
          </a>
        </li>

        <li>
          <a href="javascript://">
            <!-- <p class="mb0 omit c">{{item.src2title}}</p> -->
            <img :src="item.src2" :alt="item.src2title" class="img60" />
            <p class="mb0 omit c">{{item.src2title}}</p>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'media100',
  data() {
    return {
      mediaList: [
        {
          'src1': '/static/images/140×140图片01.jpg',
          'src1title': '这个好这个好这个好这个好这个好这个好',
          'intro1': '金平区的人民广场有喷泉~~',
          'intro2': '晚上到那里走走散散心不错！',
          'intro3': '金平区金平区金平区金平区金平区金平区金平区金平区',
          'intro4': '2016-9-30',
          'src2': '/static/images/审核章图片  (1).png',
          'src2title': '已成交！'
        },
        {
          'src1': '/static/images/140×140图片02.jpg',
          'src1title': 'FireFox',
          'intro1': '以优质的服务为你排忧解难',
          'intro2': '提供月嫂，专职保姆，护理员',
          'intro3': '潮阳区',
          'intro4': '2016-06-10',
          'src2': '/static/images/审核章图片  (2).png',
          'src2title': '已成交！'
        }
      ]
    }
  }, methods: {

  }
}
</script>

<style scoped>
.intro-1 {
  color: #0a5290;
  font-weight: 600;
}
.intro-2 {
  color: #ce4a3d;
  font-weight: 100;
}
.intro-3 {
  color: #17a05d;
  font-weight: 100;
}
.intro-4 {
  color: #17a05d;
  font-weight: 100;
}
</style>
