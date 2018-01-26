<template>
  <div class="mine wh100flau">

    <div class="mallMT-wrap">
      <div ref="wrapperL" id="wrapperL" class="wrapperL">
        <ul>
          <li class="btnR" v-for="(item, key) in arr" :key="key" @click="selecting(key, $event)" :class="{ 'current': currentIndex == key }">{{item.type}}</li>
        </ul>
      </div>

      <div ref="wrapperR" id="wrapperR" class="wrapperR">
        <ul>
          <li class="itemR" v-for="(item, key) in arr" :key="key" style="padding:10px;">
            <h4 class="px px-b" style="margin-bottom:10px;">{{item.type}}</h4>
            <ul>
              <li class="flex mb30" v-for="(childItem, childKey) in item.list" :key="childKey">
                <img class="img80" :src="childItem.src" alt="图片名" />
                <div class="flex1 flex-v">
                  <h5 class="flex-v-title">{{childItem.title}}</h5>
                  <p class="flex-v-subtitle">{{childItem.subtitle}}</p>
                  <p class="item">
                    <span class="item-price">￥{{childItem.price}} {{childItem.pricemin ? '起' : ''}}
                    </span>
                    <a class="btn btn-primary btn-xs flex1" href="javascript://">选规格</a>
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'mine',
  data() {
    return {
      listHeight: [],
      scrollY: 0,
      arr: [
        {
          type: '煮',
          list: [
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋炒米粉鸡蛋炒米粉',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '豆浆',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            }
          ]
        },
        {
          type: '炒',
          list: [
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋炒米粉鸡蛋炒米粉鸡蛋炒米粉鸡蛋炒米粉鸡蛋炒米粉鸡蛋炒米粉',
              subtitle: '非常好吃！非常好吃！非常好吃！非常好吃！非常好吃！非常好吃！非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '豆浆',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            }
          ]
        },
        {
          type: '炒',
          list: [
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋炒米粉鸡蛋炒米粉',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '豆浆',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            }
          ]
        },
        {
          type: '炒',
          list: [
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋炒米粉鸡蛋炒米粉',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '鸡蛋',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            },
            {
              src: '/static/images/666.jpg',
              title: '豆浆',
              subtitle: '非常好吃！非常好吃！',
              price: 10,
              pricemin: true
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentIndex() {
      for (var i = 0;i < this.listHeight.length;i++) {
        let h1 = this.listHeight[i]
        let h2 = this.listHeight[i + 1]
        if (!h2 || (this.scrollY >= h1 && this.scrollY < h2)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    selecting(i, ev) {
      let list = document.getElementById('wrapperR').getElementsByClassName('itemR')
      this.scrollR.scrollToElement(list[i], 300)
    },

    init() {
      this.scrollR = new BScroll(document.getElementById('wrapperR'), {
        probeType: 3, click: true
      })


      this.scrollR.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
      console.log('执行init()')
    },

    calcHeight() {
      let itemRs = document.getElementById("wrapperR").getElementsByClassName('itemR')
      let h = 0
      this.listHeight.push(h)
      for (var i = 0;i < itemRs.length;i++) {
        let item = itemRs[i]
        h += item.clientHeight
        this.listHeight.push(h)
      }
      console.log(this.listHeight)
    }

  },
  mounted() {
    this.$nextTick(() => {
      this.init()
      this.calcHeight()
    })
  }

}
</script>

<style scoped>
.mallMT-wrap {
  display: -webkit-flex;
  height: 100%;
}

/*  */
.wrapperL {
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 10px;
}
/*  */
.btnR {
  padding: 0 10px;
  margin-bottom: 22px;
  text-align: center;
  display: block;
}
.btnR.current {
  background-color: rgb(94, 131, 245);
  border-radius: 16px;
  color: #fff;
}

/*  */
.wrapperR {
  flex: 3;
  height: 100%;
  overflow: auto;
}
.wrapperR::-webkit-scrollbar {
  display: none;
}
.img80 {
  width: 80px;
  height: 80px;
  border-radius: 6px;
  margin-right: 10px;
}

.flex-v-title {
  flex: 1;
  align-items: center;
  font-weight: bold;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.flex-v-subtitle {
  flex: 1;
  font-size: 12px;
  align-items: flex-start;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item {
  flex: 2;
  display: -webkit-flex;
  align-items: flex-end;
}
.item-price {
  flex: 2;
}
</style>
