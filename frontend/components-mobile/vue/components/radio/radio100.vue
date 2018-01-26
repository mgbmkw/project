<template>
  <div class="kong">

    <!-- 这是排成1行的形式 -->
    <label class="radio-inline">
      <input type="radio" name="radioInline0" id="inlineRadio1" value="option1"> 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="radioInline0" id="inlineRadio2" value="option2"> 2
    </label>
    <label class="radio-inline">
      <input type="radio" name="radioInline0" id="inlineRadio3" value="option3"> 3
    </label>

    <!-- 这是N列的形式，radio是bootstrap的class -->
    <div class="radio">
      <label>
        <input type="radio" name="radioBlock0" id="optionsRadios1" value="option1" checked> 这是一个很长很长很长很长很长很长很长很长的选项
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" name="radioBlock0" id="optionsRadios2" value="option2"> 说中文
      </label>
    </div>
    <div class="radio disabled">
      <label>
        <input type="radio" name="radioBlock0" id="optionsRadios3" value="option3" disabled> XXXXX
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'kong',
  data() {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
