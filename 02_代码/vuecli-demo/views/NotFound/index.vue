<template>
  <div class="login-bgc">
    <div class="container">
      <div class="login-main">
        <div class="left">
          <img src="http://10.16.69.5/assets/img/app/a-4.png" alt="" style="width:70%;height:70%">
        </div>
        <div class="right">
          <div class="title">404</div>
          <div class="info">Ooops... looks like an error occurred!</div>
          <button @click="returnback($event)">Go Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {};
  },
  methods: {
    returnback(e){
      e.preventDefault();
      window.location.href='/login'
    }
  },
  created() {
    // this.$(function(){
    //   alert("a")
    // })
  }
};
</script>

<style scoped lang="less">
.login-bgc {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(http://10.16.69.5/assets/img/bg/app-bg.jpg) center center/cover no-repeat;

  .container {
    height: 423px;
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .login-main {
      width: 100%;
      height: 327px;
      margin-top: 48px;
      border: 1px solid rgba(42, 242, 112, 0.2);

      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 444px;
        padding-right: 15px;
        padding-left: 15px;
        background: linear-gradient(to right, #59f1d8, #2af270) center;
        span{
          display: block;
          color: rgba(1, 0, 31, 0.9)
        }
        .top{
          font-size:20px;
        }
        .middle{
          width:360px;
          font-size: 72px;
          font-weight: 300;
          line-height: 1.5;
        }
        .bottom{
          margin-top:20px;
          font-size: 20px;
        }
      }

      .right {
        position: relative;
        float: right;
        display: inline-block;
        width:634px;
        height:100%;
        top:-327px;
        .title{
          font-weight: 600;
          color:#2af270;
          font-size:100px;
          margin-top:30px;
        }
        .info{
          font-weight: 500;
          line-height: 1.5;
          color: #ceddf1;
          font-size:25px;
        }
        button{
          margin-top:30px;
          background: linear-gradient(to right, #59f1d8, #2af270) center;
          color: #212529;
          width:170px;
          height:50px;
          border-radius: 25px;
          font-size:20px;
        }
      }
    }
  }
}
</style>
