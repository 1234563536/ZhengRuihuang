<template>
  <div>
    <div class="footer">
      <div class="info">
        <img
            src="../picture/cat_logo.png"
            alt=""
            style="width: 112px; height: 40px"
            class="logo"
        />
        <dl id="beginner">
          <dt>
            <span><a href="javascript:;">购物指南</a></span>
          </dt>
          <dd>
            <a href="javascript:;">购物流程</a>
            <a href="javascript:;">配送时效说明</a>
            <a href="javascript:;">配送区域及费用</a>
            <a href="javascript:;">购买生鲜须知</a>
            <a href="javascript:;">发票流程</a>
            <a href="javascript:;">商品限购说明</a>
          </dd>
        </dl>
        <dl id="saleservice">
          <dt>
            <span><a href="javascript:;">售后服务</a></span>
          </dt>
          <dd>
            <a href="javascript:;">退货规则</a>
            <a href="javascript:;">退货指南</a>
            <a href="javascript:;">保质期说明</a>
            <a href="javascript:;">联系客服</a>
          </dd>
        </dl>
        <dl id="payment">
          <dt>
            <span><a href="javascript:;">自动服务</a></span>
          </dt>
          <dd>
            <a href="javascript:;">订单物流查询</a>
            <a href="javascript:;">我的购物车</a>
            <a href="javascript:;">我的现金券</a>
            <a href="javascript:;">购物常见问题</a>
            <a href="javascript:;">建议反馈</a>
          </dd>
        </dl>
        <dl id="about">
          <dt>
            <span><a href="javascript:;">商家服务</a></span>
          </dt>
          <dd>
            <a href="javascript:;">关于天猫超市</a>
            <a href="javascript:;">入驻天猫超市</a>
            <a href="javascript:;">商家常见问题</a>
            <a href="javascript:;">淘鲜达招商</a>
          </dd>
        </dl>
        <dl class="tmall-mobile" id="mobile">
          <dt>
            <span><a href="javascript:;">随时随地逛</a></span>
          </dt>
          <dd style="width: 105px; height: 105px">
            <a href="javascript:;" style="width: 105px; height: 105px"
            ><img
                src="../picture/ma.png"
                alt=""
                style="width: 105px; height: 105px"
            /></a>
          </dd>
        </dl>
      </div>
      <div class="bottom">
        <div class="about">
          <div style="height:100%;width:100%;position:relative;float:left">
            <span><a href="javascript:;">关于天猫</a></span>
            <span><a href="javascript:;">商家服务大厅</a></span>
            <span><a href="javascript:;">开放平台</a></span>
            <span><a href="javascript:;">诚聘英才</a></span>
            <span><a href="javascript:;">联系我们</a></span>
            <span><a href="javascript:;">网站合作</a></span>
            <span><a href="javascript:;">法律声明</a></span>
            <span><a href="javascript:;">隐私权政策</a></span>
            <span><a href="javascript:;">知识产权</a></span>
            <span><a href="javascript:;">廉政举报</a></span>
            <span><a href="javascript:;">不当竞争举报</a></span></div>
        </div>

        <div class="inf">
          <div style="height:100%;width:100%;position:relative;float:left">
            <a href="javascript:;">阿里巴巴集团 </a>|
            <a href="javascript:;"> 淘宝网 </a>|<a href="javascript:;"> 天猫 </a>|
            <a href="javascript:;"> 聚划算 </a>|<a href="javascript:;">
            全球速卖通 </a
          >| <a href="javascript:;"> 阿里巴巴国际市场交易 </a
          ><a href="javascript:;"> 1688 </a>|
            <a href="javascript:;"> 飞猪 </a>
            |<a href="javascript:;"> 阿里云计算 </a> |<a href="javascript:;">
            Alios
          </a>
            |<a href="javascript:;"> 阿里通信 </a> |<a href="javascript:;">
            万网
          </a>
            |<a href="javascript:;"> 高德 </a> |<a href="javascript:;"> UC </a>
            |<a href="javascript:;"> 友盟 </a> |<a href="javascript:;"> 虾米 </a>
            |<a href="javascript:;"> 钉钉 </a> |<a href="javascript:;">
            支付宝
          </a>
            |<a href="javascript:;"> 阿里安全 </a>
          </div>
        </div>
        <div class="tel">

          <span><a href="javascript:;">增值电信业务经营许可证：浙B2-20110446</a></span>
          <span style="padding-right:65px;">市场名称登记证：工商网市字3301004119号</span>
          <span>出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</span>
          <br>
          <span style="padding-right:65px;">互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com</span>
          <span>互联网药品信息服务资质证书编号：<a href="javascript:;">
              浙-（经营性）-2017-0005</a></span>
          <span>              <img src="../picture/police.png" alt=""> <a href="javascript:;">浙公网安备 33010002000120号</a></span>
          <br>
          <span style="padding-right:500px;">医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span>

          <span style="padding-right:100px;">浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>

          <span><a href="javascript:;">12318举报</a></span>
          <span style="padding-right:300px;"><a href="javascript:;">浙B2-20110446-1</a></span>
          <span style="color:#686868">© 2003-现在 TMALL.COM 版权所有</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom"
};
</script>

<style scoped lang="less">
a:hover {
  text-decoration: underline;
}

.footer {
  width: 100%;
  height: 393px;
  margin-bottom: 0;
  padding-bottom: 0;
  border-top: 3px solid #ededed;

  .info {
    width: 1190px;
    padding-top: 22px;
    height: 213px;
    margin: auto;
    background: url(../picture/cat.png) 0px bottom/68px 25px no-repeat;
    background-color: white;

    .logo {
      position: relative;
      top: 0px;
      left: -800px;
    }

    dl dt {
      color: #646464;
      font-size: 16px;
      font-weight: 700;
      height: 30px;
      line-height: 30px;
      text-align: left;
    }
  }

  .bottom {
    border-top: 2px solid #ff0036;
    background: #c40000;
    text-align: left;
    min-height: 200px;

    .tel {
      width: 1190px;
      margin: 0 auto;
      height: 105px;

      span {
        float: left;
        position: relative;
        top: -130px;
        color: #a4a4a4;
        padding-bottom: 5px;

        a {
          color: #a4a4a4;
          margin-right: 65px;
          line-height: 16px;
        }
      }
    }

    .inf {
      width: 1190px;
      margin: 0 auto;
      height: 35px;

      div {
        top: -130px;
        left: 0px;
        color: #FFFFFF;


        a {
          color: #FFFFFF;
          padding-right: 3px;
          line-height: 35px;
        }
      }
    }

    .about {
      width: 1190px;
      margin: 0 auto;
      height: 35px;

      div {
        top: -130px;
        left: 0px;

        span {
          padding-right: 10px;

          a {
            color: #FFFFFF;
            line-height: 35px;

          }
        }
      }
    }
  }
}

#beginner {
  float: left;
  width: 150px;
  padding-left: 52px;
  left: 170px;
  top: -165px;
  position: relative;

  dt {
    color: #646464;
    font-size: 16px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    text-align: left;

    a {
      color: #646464;
    }
  }

  dd {
    text-align: left;

    a {
      display: inline-block;
      width: 100px;
      overflow: hidden;
      text-align: left;
      height: 20px;
      line-height: 20px;
      color: #8b8b8b;
      font-size: 12px;
    }
  }
}

#saleservice,
#payment,
#about,
#mobile {
  float: left;
  width: 150px;
  padding-left: 52px;
  left: 210px;
  top: -165px;
  position: relative;

  dt {
    a {
      color: #646464;
    }
  }

  dd {
    text-align: left;

    a {
      display: inline-block;
      width: 100px;
      overflow: hidden;
      text-align: left;
      height: 20px;
      line-height: 20px;
      color: #8b8b8b;
      font-size: 12px;
    }
  }
}

#payment {
  left: 260px;
}

#about {
  left: 300px;
}

#mobile {
  left: 350px;
}
</style>
