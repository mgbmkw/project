<template>
  <div class="CSS3">

    <div class="circleProgress_wrapper">
      <div class="wrapper100 right">
        <div class="circleProgress rightcircle"></div>
      </div>
      <div class="wrapper100 left">
        <div class="circleProgress leftcircle"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CSS3',
  data() {
    return {
      msg: ''
    }
  }, methods: {

  }
}
</script>

<style scoped>
.circleProgress_wrapper {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  position: relative;
  border: 1px solid #ddd;
}

.wrapper100 {
  width: 100px;
  height: 200px;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.circleProgress {
  width: 200px;
  height: 200px;
  border: 3px solid rgb(232, 232, 12);
  border-radius: 50%;
  position: absolute;
  top: 0;
  -webkit-transform: rotate(45deg);
}
.rightcircle {
  border-top: 3px solid green;
  border-right: 3px solid green;
  right: 0;
  -webkit-animation: circleProgressLoad_right 5s linear infinite;
}
.leftcircle {
  border-bottom: 3px solid green;
  border-left: 3px solid green;
  left: 0;
  -webkit-animation: circleProgressLoad_left 5s linear infinite;
}
@-webkit-keyframes circleProgressLoad_right {
  0% {
    border-top: 3px solid #ed1a1a;
    border-right: 3px solid #ed1a1a;
    -webkit-transform: rotate(45deg);
  }
  50% {
    border-top: 3px solid rgb(232, 232, 12);
    border-right: 3px solid rgb(232, 232, 12);
    border-left: 3px solid rgb(81, 197, 81);
    border-bottom: 3px solid rgb(81, 197, 81);
    -webkit-transform: rotate(225deg);
  }
  100% {
    border-left: 3px solid green;
    border-bottom: 3px solid green;
    -webkit-transform: rotate(225deg);
  }
}
@-webkit-keyframes circleProgressLoad_left {
  0% {
    border-bottom: 3px solid #ed1a1a;
    border-left: 3px solid #ed1a1a;
    -webkit-transform: rotate(45deg);
  }
  50% {
    border-bottom: 3px solid rgb(232, 232, 12);
    border-left: 3px solid rgb(232, 232, 12);
    border-top: 3px solid rgb(81, 197, 81);
    border-right: 3px solid rgb(81, 197, 81);
    -webkit-transform: rotate(45deg);
  }
  100% {
    border-top: 3px solid green;
    border-right: 3px solid green;
    border-bottom: 3px solid green;
    border-left: 3px solid green;
    -webkit-transform: rotate(225deg);
  }
}
</style>
