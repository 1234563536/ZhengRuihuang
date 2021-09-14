<template>
  <div class="bar">
    <a href="#进口酒饮粮油">进口酒饮></a>
    <a href="#酒水饮料">酒水饮料></a>
    <a href="#米面杂粮">米面杂粮></a>
    <a href="#油品调味">油品调味></a>
    <a href="#美容护肤">美容护肤></a>
    <a href="javascript:" class="scan">
      <img src="https://img.alicdn.com/tps/i1/T1dC1wFIVcXXcI6BY_-280-280.png" alt="">
    </a>
    <a href="javascript:" style="background-color: #fff!important">在线咨询</a>
  </div>
</template>

<script>
export default {
  name: "Aside",
  created() {
    if (window.location.pathname === '/home') {
      window.onscroll = function () {
        if (window.scrollY > 760) {
          document.querySelector(".bar").style.visibility = 'visible'
          let bar = document.querySelector(".bar");
          let a = bar.querySelectorAll("a");
          if (window.scrollY > 900 && window.scrollY < 1500) {
            for (let i = 0; i < a.length - 2; i++) {
              a[i].style.backgroundColor = '#fff';
              a[i].style.color = '#666';
            }
            a[0].style.backgroundColor = '#e5374d';
            a[0].style.color = '#fff';
            a[0].onmouseleave = function () {
              a[0].style.backgroundColor = '#e5374d';
              a[0].style.color = '#fff';
            }
            a[0].onmouseover = function () {
              a[0].style.backgroundColor = '#e5374d';
              a[0].style.color = '#fff';
            }
            for (let i = 1; i < a.length - 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
          } else if (window.scrollY > 1500 && window.scrollY < 2100) {
            for (let i = 0; i < a.length - 2; i++) {
              a[i].style.backgroundColor = '#fff';
              a[i].style.color = '#666';
            }
            a[1].style.backgroundColor = '#e5374d';
            a[1].style.color = '#fff';
            a[1].onmouseleave = function () {
              a[1].style.backgroundColor = '#e5374d';
              a[1].style.color = '#fff';
            }
            a[1].onmouseover = function () {
              a[1].style.backgroundColor = '#e5374d';
              a[1].style.color = '#fff';
            }
            for (let i = 0; i < 1; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
            for (let i = 2; i < a.length - 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
          } else if (window.scrollY > 2100 && window.scrollY < 2700) {
            for (let i = 0; i < a.length - 2; i++) {
              a[i].style.backgroundColor = '#fff';
              a[i].style.color = '#666';
            }
            a[2].style.backgroundColor = '#e5374d';
            a[2].style.color = '#fff';
            a[2].onmouseleave = function () {
              a[2].style.backgroundColor = '#e5374d';
              a[2].style.color = '#fff';
            }
            a[2].onmouseover = function () {
              a[2].style.backgroundColor = '#e5374d';
              a[2].style.color = '#fff';
            }
            for (let i = 0; i < 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
            for (let i = 3; i < a.length - 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
          } else if (window.scrollY > 2700 && window.scrollY < 3300) {
            for (let i = 0; i < a.length - 2; i++) {
              a[i].style.backgroundColor = '#fff';
              a[i].style.color = '#666';
            }
            a[3].style.backgroundColor = '#e5374d';
            a[3].style.color = '#fff';
            a[3].onmouseleave = function () {
              a[3].style.backgroundColor = '#e5374d';
              a[3].style.color = '#fff';
            }
            a[3].onmouseover = function () {
              a[3].style.backgroundColor = '#e5374d';
              a[3].style.color = '#fff';
            }
            for (let i = 0; i < 3; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
            for (let i = 4; i < a.length - 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
          } else if (window.scrollY > 3300 && window.scrollY < 3900) {
            for (let i = 0; i < a.length - 2; i++) {
              a[i].style.backgroundColor = '#fff';
              a[i].style.color = '#666';
            }
            a[4].style.backgroundColor = '#e5374d';
            a[4].style.color = '#fff';
            a[4].onmouseleave = function () {
              a[4].style.backgroundColor = '#e5374d';
              a[4].style.color = '#fff';
            }
            a[4].onmouseover = function () {
              a[4].style.backgroundColor = '#e5374d';
              a[4].style.color = '#fff';
            }
            for (let i = 0; i < 4; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
            for (let i = 5; i < a.length - 2; i++) {
              a[i].onmouseover = function () {
                a[i].style.backgroundColor = '#e5374d';
                a[i].style.color = '#fff';
              }
              a[i].onmouseleave = function () {
                a[i].style.backgroundColor = '#fff';
                a[i].style.color = '#666';
              }
            }
          }
          //跟随页面滚动而变色，滚到某个位置，某个位置对应的a和文字就变色
          //鼠标经过而变色，鼠标经过某个位置，某个位置对应的a和文字就变色
          //鼠标离开而恢复原色，需要注意的是每次必须保证至少有一个a变色，最多只会出现两个a变色。
          //鼠标点击变色，鼠标点击某个位置，其余位置对应的a和文字变回原样，对应位置的a和文字就变色
          //第一个位置900 第二个位置1500 2100 2700 3300
        } else {
          document.querySelector(".bar").style.visibility = 'hidden'
        }
      }
    }
  }
}


</script>

<style scoped lang="less">
.bar {
  width: 79px;
  height: 223px;
  background-color: #fff;
  float: left;
  top: 80px;
  left: 270px;
  position: fixed;
  visibility: hidden;

  .scan {
    cursor: default;
    height: 67px;
    background-color: #fff !important;

    img {
      height: 67px;
      width: 67px
    }
  }
}

div a {
  display: block;
  width: 100%;
  height: 24px;
  float: left;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  border: 1px solid #e7e7e7;
  border-bottom: none;
  color: #666;
}

a:hover {
  background-color: #e5374d;
  color: #fff;
}
</style>
