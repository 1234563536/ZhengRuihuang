<template>
  <div class="login-bgc">
    <div class="container">
      <div class="login-main">
        <div class="left">
          <span class="top">欢迎来到</span>
          <span class="middle">互联网金融</span>
          <span class="bottom">舆情管理系统</span>
        </div>
        <div class="right">
          <div class="title">登录系统</div>
          <form method="post">
            <div>
              <label for="exampleInputUsername">
                <i class="tmall tmall-yonghu" style="color:#2af270;font-size: 20px;"></i>
              </label>
              <input type="username" class="username" id="exampleInputUsername" placeholder="用户名">
            </div>
            <div>
              <label for="exampleInputPassword">
                <i class="tmall tmall-mima" style="color:#2af270;font-size: 20px;"></i>
              </label>
              <input type="password" class="password" id="exampleInputPassword" placeholder="密码">
            </div>
            <div>
              <input type="checkbox" class="" id="exampleCheck">
              <label class="remember" for="exampleCheck">记住我</label>
              <span class="forget"><a href="/register">立即注册</a></span>
              <span class="forget"><a href="javascript:">忘记密码？</a></span>
            </div>
            <button type="submit" class="" @click="submit($event)">登录</button>
          </form>
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
    submit(e){
      e.preventDefault();
      alert('你点击了登录按钮')
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
          font-weight: 500;
          line-height: 1.5;
          color:#f8f9fa;
          font-size: 25px;
          margin-top:25px;
        }
        form div{
          height: 60px;
        }
        input{
          outline: none;
          margin-top:25px;
        }
        button{
          margin-top:25px;
          height: 38px;
          width:80px;
          border: none;
          background-color: #2af270;
          color:#212529;
        }
        .username,.password{
          width:550px;
          height:42px;
          padding:6px 12px 6px 12px;
          background-color: #091121;
          border: none;
          margin-left:10px;
          color:rgba(255, 255, 255, 0.6);
          font-size:15px;
        }
        input[type="checkbox"] + label::before {
          content: "\a0";  /*不换行空格*/
          display: inline-block;
          width: 1.5em;
          height: 1.5em;
          margin-right: 1em;
          border-radius: .2em;
          border:2px solid #2af270;
          text-indent: .2em;
          margin-left: -10px;
          line-height: 0.5;  /*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
        }
        input[type="checkbox"]:checked + label::before {
          content: "\2713";
          color:#2af270;
        }
        input[type="checkbox"]{
          visibility: hidden;
          clip: rect(0, 0, 0, 0);
        }
        .remember{
          color:#66cfec;
        }
        .forget{
          float: right;
          left:-50px;top:25px;
          position: relative;
          a{
            text-decoration: none;
            color:#c0cad8;
          }
        }
      }
    }
  }
}
</style>
