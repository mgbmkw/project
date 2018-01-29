<template>

  <Carousel v-model="value1" loop dots="outside">
    <CarouselItem style="background-color:#f1f1f1;" v-for="(item, key) in result.length" :key="item.key">
      <Row :gutter='16'>

        <Col span="6" v-for="(child, k) in result[key]" :key="child[k]">
        <Card>
          <div style="text-align:center;width:100%;">
            <a href="javascript://">
              <img style="width:100%;height:160px;" :src="child.src">
              <h4>{{child.title}}</h4>
            </a>
            <p>{{child.content}}</p>
          </div>
        </Card>
        </Col>

      </Row>
    </CarouselItem>

  </Carousel>

</template>



<script>

// import login from './components/login'
// import register from './components/register'

export default {
  name: 'hi',
  data() {
    return {
      value1: 0,
      result: [],
      arr: [
        {
          id: 1,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-01-03/e2ecba66afee673024f0e0f4af2a21b2.jpg',
          title: '这是0页面',
          content: '这是0页面内容'
        }, {
          id: 2,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-01-03/e2ecba66afee673024f0e0f4af2a21b2.jpg',
          title: '这是0页面',
          content: '这是0页面内容'
        }, {
          id: 3,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-01-03/e2ecba66afee673024f0e0f4af2a21b2.jpg',
          title: '这是0页面',
          content: '这是0页面内容'
        }, {
          id: 4,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2018-01-03/e2ecba66afee673024f0e0f4af2a21b2.jpg',
          title: '这是0页面',
          content: '这是0页面内容'
        },


        {
          id: 5,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-12-25/ec3661b6020175fd6206742d866253c1.jpg',
          title: '这是1页面',
          content: '这是1页面内容'
        }, {
          id: 6,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-12-25/ec3661b6020175fd6206742d866253c1.jpg',
          title: '这是1页面',
          content: '这是1页面内容'
        }, {
          id: 7,
          src: 'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-12-25/ec3661b6020175fd6206742d866253c1.jpg',
          title: '这是1页面',
          content: '这是1页面内容'
        },
      ]
    }
  }, methods: {
    fn() {
      var data = this.arr
      var result = []
      for (var i = 0, len = data.length;i < len;i += 4) {
        result.push(data.slice(i, i + 4))
      }
      console.log(result)
      this.result = result
    }
  }, mounted() {
    this.fn()
  }
}
</script>
<style scoped>

</style>