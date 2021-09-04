<template>
  <div style="background-color: #FFC854; width: 100%">
    <div style="width: 1190px; margin: 0 auto">
      <a
          href="javascript:"
          style="display: block; font-size: 0"
          target="blank"
      >
        <img src="https://img.alicdn.com/imgextra/i2/O1CN01P9rIBf1PiKvkojOnB_!!6000000001874-0-tps-1190-110.jpg"
             width="1190" height="110" alt=""/>
      </a>
    </div>
    <van-row class="header">
      <van-col span="24" style="height: 100%">
        <div class="main">
          <div class="left">
            <ul v-if="this.GLOBAL.isLogin==='false'">
              <li>
                <i class="tmall tmall-baseline-home-px" style="color: #FF0036;padding-right: 5px"></i>
                <a href="javascript:">天猫首页</a>
              </li>
              <li>喵，欢迎来天猫</li>
              <li><a href="/login">请登录</a></li>
              <li><a href="/register">免费注册</a></li>
            </ul>
            <ul v-else>
              <li>
                <img
                    src="../assets/home.png"
                    alt=""
                    style="padding-right: 5px"
                /><a href="javascript:">天猫首页</a>
              </li>
              <li>hi,<a href="javascript:">{{ this.username }}</a></li>
              <li><a href="javascript:" style="color: #666666;font-weight:700">积分 {{ this.count }} </a></li>
              <li @click="removebtn"><a href="/login">退出</a></li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li
                  @mouseover="overMy"
                  @mouseleave="leaveMy"
                  :style="{ background: colorMy }"
              >
                <a href="javascript:">
                  <div class="dropdown">
                    <span class="dropbtn">我的淘宝</span>
                    <div class="dropdown-content" style="z-index:999">
                      <a href="javascript:">已买到的宝贝</a>
                      <a href="javascript:">已卖出的宝贝</a>
                    </div>
                  </div>
                </a>
                <van-icon name="arrow-down" v-if="My"/>
                <van-icon name="arrow-up" v-else/>
              </li>
              <li>
                <i class="tmall-tianchongxing- tmall" style="color:#FF0036;padding-right:5px;"></i>
                <a href="javascript:">购物车</a>
              </li>
              <li
                  @mouseover="overRcm"
                  @mouseleave="leaveRcm"
                  :style="{ background: colorRcm }"
              >
                <a href="javascript:">
                  <div class="dropdown">
                    <span class="dropbtn">收藏夹</span>
                    <div class="dropdown-content" style="z-index:999">
                      <a href="javascript:">收藏的宝贝</a>
                      <a href="javascript:">收藏的店铺</a>
                    </div>
                  </div>
                </a
                >

                <van-icon name="arrow-down" v-if="Rcm"/>
                <van-icon name="arrow-up" v-else/>
              </li>
              <li>
                <i class="tmall-shouji tmall" style="color:#FF0036"></i>
                <a href="javascript:"
                >
                  <div class="dropdown">
                    <span>手机版</span>
                    <div class="dropdown-content" style="z-index:999">
                      <img
                          src="../assets/load.png"
                          alt="Trolltunga Norway"
                          width="152"
                          height="154"
                      />
                      <div
                          class="desc"
                          style="color: #999999; padding-left: 40px"
                      >
                        到天猫APP
                      </div>
                      <div style="padding-left: 20px">新人享4.9元包邮好货</div>
                    </div>
                  </div>
                </a
                >
              </li>
              <li>
                <a href="javascript:">淘宝网</a>
              </li>
              <li
                  @mouseover="overSup"
                  @mouseleave="leaveSup"
                  :style="{ background: colorSup }"
              >
                <a href="javascript:">
                  <div class="dropdown">
                    <span class="dropbtn">商家支持</span>
                    <div class="dropdown-content"
                         style="z-index:999;width:152px;height:260px;float: left;left:-80px;">
                      <div class="merchant"
                           style="width:132px;height:140px;margin-left:10px;margin-top:10px;border-bottom:1px dashed #999999">
                        <div style="font-weight: 700;color:black">商家:</div>
                        <span>商品中心</span>
                        <span>天猫规则</span>
                        <span>商家入驻</span>
                        <span>运营服务</span>
                        <span>商家品控</span>
                        <span>商家工具</span>
                        <span>天猫智库</span>
                        <span>猫言猫语</span>
                      </div>
                      <div class="tips"
                           style="width:102px;height:90px;margin-left:10px;margin-top:10px;border-bottom:1px dashed #999999">
                        <span style="font-weight: 700;color:black">帮助:</span>
                        <span>商家服务大厅</span>
                        <span>问商友</span>
                      </div>
                    </div>
                  </div>
                </a>
                <van-icon name="arrow-down" v-if="Sup"/>
                <van-icon
                    name="arrow-up"
                    v-else
                />
              </li>
              <li
                  @mouseover="overNav"
                  @mouseleave="leaveNav"
                  :style="{ background: colorNav }"
              >
                <i class="tmall-daohang tmall" style="color:#FF0036"></i>
                <div class="dropdown">
                  <span class="dropbtn">网站导航</span>
                  <div class="dropdown-content"
                       style="z-index:999;width:1190px;height:145px;background-color: white;float: left;left:-1120px;">
                    <div
                        style="height: 100px;width:476px;border-right:1px solid #e5e5e5;float: left;margin-top:20px;margin-left:20px"
                        class="hot_rec">
                      <div style="color:#f56a00;font-size:16px;">热点推荐 HOT</div>
                      <span>天猫超市</span>
                      <span>喵鲜生</span>
                      <span>科技新品</span>
                      <span>女装新品</span>
                      <span>酷玩街</span>
                      <span>内衣新品</span>
                      <span>试美妆</span>
                      <span>运动新品</span>
                      <span>时尚先生</span>
                      <span>精明妈咪</span>
                      <span>吃乐会</span>
                      <span>企业采购</span>
                      <span>会员积分</span>
                      <span>天猫国际</span>
                      <span>品质频道</span>
                    </div>
                    <div
                        style="height: 100px;width:476px;border-right:1px solid #e5e5e5;float: left;margin-top:20px;margin-left:10px;"
                        class="market"
                    >
                      <div style="color:#2263d4;font-size:16px;">行业市场 MARKET</div>
                      <span>美妆</span>
                      <span>电器</span>
                      <span>女装</span>
                      <span>男装</span>
                      <span>女鞋</span>
                      <span>男鞋</span>
                      <span>内衣</span>
                      <span>箱包</span>
                      <span>运动</span>
                      <span>母婴</span>
                      <span>家装</span>
                      <span>医药</span>
                      <span>食品</span>
                      <span>配饰</span>
                      <span>汽车</span>
                    </div>
                    <div
                        style="height: 100px;width:178px;float: left;margin-top:20px;margin-left:10px;"
                        class="service">
                      <div style="color:#666;font-size:16px;">服务指南 HELP</div>
                      <span>帮助中心</span>
                      <span>品质保障</span>
                      <span>特色服务</span>
                      <span>7天退换服</span>
                    </div>
                  </div>
                  <van-icon name="arrow-down" v-if="Nav"/>
                  <van-icon name="arrow-up" v-else/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </van-col>
    </van-row>
    <Search></Search>
  </div>
</template>

<script>
import Search from "@/components/Search"

export default {
  created() {
    var self = this;
    setTimeout(function () {
      if (window.localStorage.getItem('isLogin') == 'true') {
        self.$axios({
          url: "/my/userinfo",
          method: "GET",
          headers:
              {
                'Authorization': window.localStorage.getItem('token')
              }
        }).then(function (res) {
          if (res.data.status === 0) {
            window.layer.msg("登录成功!")
            self.username = res.data.data.username;
          }
        })
      } else {
        window.layer.msg("您还未登录!")
      }
    }, 2000)
  },
  components: {
    Search
  },
  data() {
    return {
      My: true,
      Rcm: true,
      Sup: true,
      Nav: true,
      colorMy: "",
      colorRcm: "",
      colorSup: "",
      colorNav: "",
      username: "users",
      count: 0,
    };
  },
  methods: {
    overMy() {
      this.My = false
      this.colorMy = "#FFF"
    },
    leaveMy() {
      this.My = true
      this.colorMy = ""
    },
    overRcm() {
      this.Rcm = false
      this.colorRcm = "#FFF"
    },
    leaveRcm() {
      this.Rcm = true
      this.colorRcm = ""
    },
    overSup() {
      this.Sup = false
      this.colorSup = "#FFF"
    },
    leaveSup() {
      this.Sup = true
      this.colorSup = ""
    },
    overNav() {
      this.Nav = false
      this.colorNav = "#FFF"
    },
    leaveNav() {
      this.Nav = true
      this.colorNav = ""
    },
    removebtn() {
      this.GLOBAL.isLogin = false
      this.GLOBAL.token = ''
      this.GLOBAL.goods_id = []
      window.localStorage.setItem('token', this.GLOBAL.token)
      window.localStorage.setItem('isLogin', this.GLOBAL.isLogin)
      window.localStorage.setItem('goods_id', JSON.stringify(this.GLOBAL.goods_id))
    },
  },
};
</script>

<style lang="less" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -10px;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
  color: #999999;
  padding: 1px 10px;
  text-decoration: none;
  display: block;
}

.merchant {
  span {
    display: inline-block;
    width: 50px;
    height: 10px;
    line-height: 10px;
    margin-right: 10px;
    color: #999999;

  }

}

.tips {
  span {
    display: inline-block;
    width: 100px;
    height: 10px;
    line-height: 10px;
    margin-right: 10px;
    color: #999999;
  }
}

.hot_rec, .market, .service {
  span {
    margin-right: 15px;
    display: inline-block;
    width: 80px;
    color: #666666;
  }
}

.market span {
  margin-left: 0;
}

.service span {
  width: 60px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

a:hover {
  color: #ff0036;
  text-decoration: underline;
}

a {
  color: #999999;
}

.header {
  background: #f2f2f2;
  height: 26px;
}

.main {
  margin: 0 auto;
  width: 1190px;
  height: 100%;
}

.left {
  float: left;
  height: 100%;
}

.left ul li {
  float: left;
  line-height: 26px;
  color: #999999;
  font-size: 12px;
  padding-right: 20px;
}

.right {
  float: right;
  height: 100%;
}

.right ul li {
  float: left;
  line-height: 26px;
  color: #999999;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
}

//img {
//  vertical-align: -webkit-baseline-center;
//}
</style>
