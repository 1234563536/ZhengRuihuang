<template>
  <div style="height:100%;width:239px;z-index:999">
    <div class="container">

      <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" @click="clickbtn">
          互联网金融舆情防控系统
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="index">主页</a>
          <a class="dropdown-item" href="analysis">舆情分析</a>
          <a class="dropdown-item" href="sumup">信息汇总</a>
          <a class="dropdown-item" href="warn">预警中心</a>
        </div>
    </div>
  </div>
  <div class="showpage">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: "Aside",
  data() {
    return {
      isShow: false,
      isFull: null
    }
  },
  created() {
    var self = this;
    window.addEventListener("load",function(){
      self.changewidth(document.body.offsetWidth)
    })
    window.addEventListener("resize", function () {
      self.changewidth(document.body.offsetWidth)
    });
    window.addEventListener("click", function () {
      if (self.isShow === true) {
        self.isShow = false
        var btn = document.querySelector(".btn");
        btn.style.boxShadow = 'none';
        btn.style.background = 'transparent';
      }
    });
    setTimeout(function () {
      self.full();
    }, 1000)
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener('resize', () => {
         setTimeout(function(){
           // var sumup_title = document.querySelector(".sumup-title");
           // sumup_title.style.top = '213px';
         },3000)
      })
    })
  },
  methods: {
    changewidth(width) {
      var showpage = document.querySelector(".showpage")
      var container=document.querySelector(".container")
     if(location.pathname==='/home/index'){
       var analysisindex=document.querySelector(".analysis-index");
       showpage.style.width = width - 239 + 'px'
       container.style.height=analysisindex.offsetHeight+'px'
     }else if(location.pathname==='/home/analysis'){
       var analysisbanner=document.querySelector(".analysis-banner");
       showpage.style.width = width - 239 + 'px'
       container.style.height=analysisbanner.offsetHeight+'px'
     }else if(location.pathname==='/home/sumup'){
       showpage.style.width = width - 239 + 'px'
       container.style.height= showpage.offsetHeight+'px'
     }

    },
    clickbtn() {
      this.isShow = true;
      var btn = document.querySelector(".btn");
      if (btn.getAttribute("aria-expanded") == 'true') {//此时true表示打开了，再点击就是关闭的意思，我要关闭这个东西
        btn.style.boxShadow = 'none';
        btn.style.background = 'transparent'
      }
//表示下拉菜单被打开，此时需要改变样式
      else if (btn.getAttribute("aria-expanded") == 'false' || 'null') {//此时false表示关闭了，再点击就是打开的意思
        btn.style.boxShadow = 'none';
        btn.style.background = 'linear-gradient(36deg, #24C9F6, #2af270) center';
      }
    },
    full() {
      var showall = document.getElementById('showall');//按钮 点击后可以全屏
      var showpage = document.querySelector('.showpage');//你要显示的全屏范围

      showall.onclick = function () {
        setTimeout(function(){
          // var sumup_title = document.querySelector(".sumup-title");
          // sumup_title.style.top = '153px';
        },1000)
        fullScreen(showpage);
      }
      if(location.pathname==='/home/index'){
        var quite = document.querySelector('.platform-title');
        quite.onclick = function() {

          exitFullScreen();
        }
      }


      function fullScreen(el) {
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
            wscript;
        if (typeof rfs != "undefined" && rfs) {
          rfs.call(el);
          return;
        }

        if (typeof window.ActiveXObject != "undefined") {
          wscript = new ActiveXObject("WScript.Shell");
          if (wscript) {
            wscript.SendKeys("{F11}");
          }
        }
      }

      function exitFullScreen(el) {
        var el = document,
            cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
            wscript;
        if (typeof cfs != "undefined" && cfs) {
          cfs.call(el);
          setTimeout(function(){
            // var sumup_title = document.querySelector(".sumup-title");
            // sumup_title.style.top = '213px';
          },1000)
          return;
        }

        if (typeof window.ActiveXObject != "undefined") {
          wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      }
    },
  },

}


</script>

<style scoped lang="less">
.showpage{
//height: 100%;
  height: 1500px;
  width:2600px;
  margin-left:239px;
  background: linear-gradient(to top, #1A0F2F 20%, #0c1a2c 80%) no-repeat;
  background-size: 100% 100%;

}
.container{
  height:100%;
  width:239px;
  float: left;
border-right: 1px solid rgba(42, 242, 112, 0.2);
  padding: 0;
  margin:0;
  background: #020022 url(http://10.16.69.5/assets/img/bg/sidebar.png) no-repeat center center/cover;
  button{
  width:239px;
  height: 42px;
  font-size: 15px;
    padding:0px;
    margin:0px;
    border-radius: 0;
    border:0;
    background-color:transparent;
}
  .dropdown-menu{
    border-radius: 0;
    width:239px;
    height:166px;
    margin:0;
    padding: 0;
    min-width: 238px;
    left:-5px!important;
    background-color: rgba(255, 255, 255, 0.05);
    a{
      width:239px;
      height:25%;
      display:block;
      margin:0;
      padding: 10px 0 0 30px;
      font-size: 15px;
      color:#f8f9fa;
    }
  }
}
.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
