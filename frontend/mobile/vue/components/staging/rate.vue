<template>

  <div class="">

    <p class="all">

      <input type="radio" name="b" value="0" v-model="inputdata" />
      <span>★</span>

      <input type="radio" name="b" value="1" v-model="inputdata" />
      <span>★</span>

      <input type="radio" name="b" value="2" v-model="inputdata" />
      <span>★</span>

      <input type="radio" name="b" value="3" v-model="inputdata" />
      <span>★</span>

      <input type="radio" name="b" value="4" v-model="inputdata" />
      <span>★</span>

      <input type="radio" name="b" value="5" v-model="inputdata" />
      <span>★</span>

    </p>

  </div>

</template>

<script>
// https://segmentfault.com/q/1010000012038946
// var rate = 3;  //评分
// "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);

// http://blog.csdn.net/zhalcie2011/article/details/72403794
export default {
  name: 'shoplist',
  data() {
    return {
      inputdata: '5'
    }
  },
  methods: {

  },
  watch: {
    inputdata(value) {
      console.log(value)
    }
  }
}

</script>

<style>
.all > input {
  opacity: 0;
  position: absolute;
  width: 2em;
  height: 2em;
  margin: 0;
}

.all > input:nth-of-type(1),
.all > span:nth-of-type(1) {
  display: none;
}

.all > span {
  font-size: 2em;
  color: gold;

  -webkit-transition: color 0.2s;

  transition: color 0.2s;
}

.all > input:checked ~ span {
  color: #666;
}

.all > input:checked + span {
  color: gold;
}
</style>