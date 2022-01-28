<template>
  <div class="head">
    <div class="fullscreen" id="showall">点击全屏显示</div>
    <div class="info" id="content">
      <span>管理员</span>
      <span>Online</span>
    </div>
    </div>
</template>
<script>

export default {
  created() {

  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.head{
  width:100%;height:62px;background-color:rgba(1, 23, 46, 0.997);
  .fullscreen{
    float: left;
    color:white;
    font-size: 20px;
    padding:13px 0 0 30px;
  }
  .info{
    float: right;
    color:#6DDBF9;
    font-size: 20px;
    padding:13px 30px 0 0;
  }
}

</style>
