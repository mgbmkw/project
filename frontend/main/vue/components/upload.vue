<template>
  <div>

    <form action="/upload" method="post" enctype="multipart/form-data">
      <p> 图片： <input type="file" name="tupian" /> </p>
      <p> <input type="submit" /> </p>
    </form>
    <Upload action="/upload" name="abc">
      <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>

    <img style="width:100px;height:100px;" :src="'http://127.0.0.1:3000/static/'" alt="图片名" />
  </div>
</template>
<script>
export default {
  data() {
    return {


    }
  },
  methods: {

  }
}
</script>
