<template>
  <div class="footer">
    <div class="shortcut">
      <ul>
        <li style="border-left:0">
          <h3>
            <img src="http://127.0.0.1:8002/picture/回流区活动.png" alt=""/><span>活动</span>
          </h3>
          <a href="javascript:">新人活动</a
          ><a href="javascript:">站式购齐</a>
          <a href="javascript:" style="color:#efefef;cursor:default;visibility:hidden">姓名黄峥锐</a>

        </li>
        <li>
          <h3>
            <img src="http://127.0.0.1:8002/picture/回流区价格.png" alt=""/><span>价格</span>
          </h3>
          <a href="javascript:">0-10元</a
          ><a href="javascript:" style="padding-left:5px">10-30元</a>
          <a href="javascript:">30-70元</a>
          <a href="javascript:">70元以上</a>
        </li>
        <li>
          <h3>
            <img src="http://127.0.0.1:8002/picture/回流区日用百货.png" alt=""/><span>日用百货</span>
          </h3>
          <a href="javascript:">纸品争霸</a
          ><a href="javascript:">时尚买手</a>
          <a href="javascript:">美容江湖</a>
          <a href="javascript:">巾彩秀</a>
        </li>
        <li>
          <h3>
            <img src="http://127.0.0.1:8002/picture/回流区食品.png" alt=""/><span>食品</span>
          </h3>
          <a href="javascript:">酒水活动</a
          ><a href="javascript:">疯狂厨房</a>
          <a href="javascript:">零食欢乐购</a>
          <a href="javascript:">淘零食</a>
        </li>
        <li>
          <h3>
            <img src="http://127.0.0.1:8002/picture/回流区进口食品.png" alt=""/><span>进口食品</span>
          </h3>
          <a href="javascript:">进口洋货</a
          ><a href="javascript:">进口饼干</a>
          <a href="javascript:">进口零食</a>
          <a href="javascript:">进口牛奶</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.footer {
  width: 1190px;
  height: 176px;
  margin: 0 auto;
  margin-bottom: 10px !important;

  .shortcut {
    background-color: #efefef;
    border-top: 1px solid #e4e4e4;
    padding: 20px 0;
    font-size: 12px;
    line-height: 1.5;
    height: 100%;

    ul {
      float: left;
      top: -230px;
      position: relative;
    }

    ul li {
      display: inline-block;
      height: 95px;
      width: 197px;
      border-left: 1px solid #e4e4e4;
      margin-left: 10px;
      margin-right: 15px;
      padding-left: 20px;
      list-style: none;
      position: relative;

      a {
        padding-right: 40px;
        color: #444444;
      }

      a:hover {
        color: #E8394E;
      }

      h3 {
        padding-bottom: 10px;
      }

      h3 span {
        font-size: 16px;
        color: #E8394E;
        padding-left: 10px;
      }
    }
  }
}

</style>
