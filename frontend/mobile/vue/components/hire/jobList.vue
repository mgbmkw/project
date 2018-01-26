<template>
  <div class="jobList">

    <!-- <mt-loadmore :top-method="loadTop" ref="loadmore" top-status-change="change" topPullText="按下了未到达" topDropText="放开了就加载" topLoadingText="这是正在加载的状态~"> -->
    <!-- <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div> -->
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <div class="alert effect" style="background-color:#fff;" v-for="(item, key) in arr" :key="key">
        <div class="flex2">
          <div class="flex2-item-text">
            <h5> {{item.jobName}}
              <img v-if="item.canTalk" :src="'/static/images/140×140图片01.jpg'" alt="图片名" class="img24" />
            </h5>
          </div>
          <span class="flex2-item-text-half">{{item.minPay}}K-{{item.maxPay}}K</span>
        </div>

        <div class="flex2 small">
          <div class="flex2-item-text">
            <span v-for="(tagsItem, tagsKey) in item.tags" :key="tagsKey" :class="[{'item0':tagsKey == 0}, { 'px px-l':tagsKey != 0}]">{{tagsItem}}</span>
          </div>
          <span class="flex2-item-text-half">{{item.date}}</span>
        </div>

        <div>
          <span class="beautiful-span" v-for="(markItem, markKey) in item.jobMarks" :key="markKey">{{markItem}}</span>
        </div>

        <div class="flex3">
          <img class="flex3-item-img radius50" :src="item.companyLogo" alt="公司logo" />
          <div class="flex2-vertical">
            <h4 class="flex2-vertical-item-text-title">{{item.company}}</h4>
            <p class="flex2-vertical-item-text-subtitle">
              <span v-for="(companyMarkItem, companyMarkKey) in item.companyMark" :key="companyMarkKey" :class="[{'item0':companyMarkKey == 0}, { 'px px-l':companyMarkKey != 0}]">{{companyMarkItem}}</span>
            </p>
          </div>
        </div>

      </div>
      <p class="c" v-if="loading">没有数据咯~！</p>
    </div>
    <!-- </mt-loadmore> -->

  </div>
</template>

<script>
import { Loadmore } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';
export default {
  name: 'jobList',
  data() {
    return {
      loading: false,
      count: 0,
      arr: [
        {
          jobName: 'WEB前端开发工程师',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '南头', '3-5年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        },
        {
          jobName: '人才',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '龙华', '10年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        },
        {
          jobName: 'NodeJS开发工程师',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '龙岗', '3-5年', '大专'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        },
        {
          jobName: '全栈工程师',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '南头', '3-5年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        }
      ],
      arrAdd: [
        {
          jobName: '加的',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '南头', '3-5年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        },
        {
          jobName: '加的',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '南头', '3-5年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        },
        {
          jobName: '加的',
          canTalk: true,
          minPay: '10',
          maxPay: '16',
          tags: ['深圳', '南头', '3-5年', '本科'],
          date: '2018-1-22',
          jobMarks: ['javascript', 'html', 'CSS3', 'NodeJS'],
          company: '深圳市腾讯计算机',
          companyLogo: '/static/images/140×140图片03.jpg',
          companyMark: ['不需要融资', '50-1000人', '金融']
        }
      ]
    }
  },
  methods: {
    loadTop() {
      this.arr = this.arr.concat(this.arrAdd)
      this.$refs.loadmore.onTopLoaded()
    },
    loadMore() {
      this.loading = true
      this.count++
      console.log('触发无限滚动！' + this.count)
      this.arr = this.arr.concat(this.arrAdd)
      // this.loading = false
    }
  }
}
</script>

<style scoped>
.effect:before,
.effect:after {
  content: "";
  background: #f00;
  position: absolute;
  z-index: -2;
  top: 9px;
  bottom: 0;
  left: 0px;
  right: 0px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  border-radius: 100px/10px;
}
.px {
  padding: 0 6px;
}
.px:after {
  z-index: 1;
}
.item0 {
  margin-right: 6px;
}

.flex2,
.flex3 {
  padding: 0;
}
</style>
