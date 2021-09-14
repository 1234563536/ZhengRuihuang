<template>
  <div class="maindiv">
    <div class="search_out" v-show="isSearch" @click="isSearch=false">
      <ul></ul>
    </div>
    <div class="banner">
      <div class="contain slider-bar">
        <div class="goBack">
          <div class="left">
            <span>所有产品分类</span>
          </div>
          <span class="shouye"><a href="javascript:">首页</a></span>
          <span class="enter_purchase"><a href="javascript:">企业采购</a></span>
          <div class="right" @mouseover="isTop=false" @mouseleave="isTop=true">
            <div class="imgloc">
              <img src="http://127.0.0.1:8002/assets/shopping.png" alt=""/>
            </div>
            <span style="font-weight: 700"><strong>¥{{ allPrice }}</strong>元</span>
            <span style="color:#ffffff;font-size: 12px"> {{ allWeight }}kg</span>
            <img src="http://127.0.0.1:8002/assets/箭头实心下.png" alt="" class="imgbottom" v-if="isTop">
            <img src="http://127.0.0.1:8002/assets/箭头实心上.png" alt="" class="imgtop" v-else>
            <div v-show="!isTop" class="good_purchase">
              <div class="good_header">
                <span style="width:46px;height:30px;">商品</span>
                <span style="width:68px;height:30px;">数量</span>
                <span style="width:60px;height:30px;">价格</span>
                <span style="width:40px;height:30px;">删除</span>
              </div>
              <div class="good_main" v-if="this.GLOBAL.isLogin==='true'">
                <div class="market">
                  <span>天猫超市</span>
                </div>
                <div class="purchase" v-for="(obj,id) in newarr" :key="id">
                  <img :src="obj.url" alt="" style="width:40px;height:40px;margin-left:10px;">
                  <div class="count">
                    <button type="button" :disabled="obj.purchase_count === 1"
                            @click="  obj.purchase_count--&&obj.count++&&obj.purchase_count>0&&buy(obj)">-
                    </button>
                    <input type="number" v-model.number="obj.purchase_count">
                    <button type="button" @click="obj.count>0&&obj.purchase_count++&&obj.count--&&buy(obj)">+
                    </button>
                  </div>
                  <span>¥{{ obj.price }}</span>
                  <img src="http://127.0.0.1:8002/assets/叉.png" alt=""
                       style="width:16px;height:16px;line-height: 16px;margin-left:10px;"
                       @click="deletegood(obj.id)">
                </div>
              </div>
              <div class="good_bottom"
                   v-if="this.GLOBAL.isLogin==='true'">
                <div class="sum">
                  <span class="sumup">合计：</span>
                  <span class="price">¥{{ allPrice }}</span>
                  <span class="coupon">(含优惠)</span>
                </div>

                <button>去结算
                </button>
              </div>
              <div v-else class="unlogin">
                <div>
                  如果您还未登录，可能导致购物车为空，请 <span><a href="/login">马上登录</a></span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left_goods">
        <div class="layui-panel">
          <ul class="layui-menu" id="docDemoMenu1">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/回流区进口食品.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">进口食品</a></span></h3>
                <p>
                  <a href="javascript:">牛奶</a>
                  <a href="javascript:">零食</a>
                  <a href="javascript:">饼干</a>
                  <a href="javascript:">方便面</a>
                  <a href="javascript:">粮油</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口糖果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口肉干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口酒饮</dt>
                    <dd>进口葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口起泡酒</dd>
                    <br>
                    <dd>进口洋酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口果汁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口水</dd>
                    <br>
                    <dd>进口咖啡饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口碳酸饮料</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌</dt>
                    <dd>安佳牛奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>中原G7</dd>
                    <br>
                    <dd>家乐氏</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>巴黎水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>汤姆农场</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>小老板</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口粮油/速食/调料</dt>
                    <dd>进口橄榄油</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口其他油</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口大米</dd>
                    <br>
                    <dd>进口方便面</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口急面</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>其他速食</dd>
                    <br>
                    <dd>进口罐头</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口调味料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口调味酱</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口母婴用品</dt>
                    <dd>进口纸尿裤</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口母婴洗护</dd>
                    <br>
                    <dd>进口婴儿奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口辅食</dd>
                    <br>
                    <dd>进口婴幼儿营养品</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口冲调保健</dt>
                    <dd>进口咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口茶/蜂蜜</dd>
                    <br>
                    <dd>进口谷物冲印</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口茶叶</dd>
                    <br>
                    <dd>进口保健品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口维生素</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.德亚牛奶</dd>
                    <dd>.进口谷物冲印</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口厨房用品</dt>
                    <dd>进口餐具/水杯</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口厨具/锅具</dd>
                    <br>
                    <dd>进口一次性用品</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口饼干/糕点</dt>
                    <dd>进口饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口面包干</dd>
                    <br>
                    <dd>进口威化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口苏打饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口曲奇</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口个人护理</dt>
                    <dd>进口洗发水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口护发</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口沐浴</dd>
                    <br>
                    <dd>进口私处洗液</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口牙膏</dd>
                    <br>
                    <dd>进口牙刷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口漱口水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>进口面部护理</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tfs/TB1lyxzSXXXXXaPapXXXXXXXXXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu2">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/食品饮料.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">食品饮料</a></span></h3>
                <p>
                  <a href="javascript:">牛奶</a>
                  <a href="javascript:">零食</a>
                  <a href="javascript:">饼干</a>
                  <a href="javascript:">方便面</a>
                  <a href="javascript:">粮油</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>糖果/巧克力</dt>
                    <dd>巧克力</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>口香糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>棒棒糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>喜糖</dd>
                    <br>
                    <dd>软糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果冻</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饼干糕点</dt>
                    <dd>饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>曲奇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面包</dd>
                    <br>
                    <dd>薯片/膨化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麻花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋黄派</dd>
                    <br>
                    <dd>月饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>沙琪玛</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤梨酥</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>牛奶饮品</dt>
                    <dd>常温奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>乳饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>儿童奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸奶</dd>
                    <br>
                    <dd>豆奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>低脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>全脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>成人奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.新衣哥</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>.南方大促</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饮料/水</dt>
                    <dd>水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果蔬饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碳酸饮料</dd>
                    <br>
                    <dd>功能饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>即饮咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸梅汤</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu3">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/粮油副食.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">粮油副食</a></span></h3>
                <p>
                  <a href="javascript:">油</a>
                  <a href="javascript:">大米</a>
                  <a href="javascript:">调料</a>
                  <a href="javascript:">方便面</a>
                  <a href="javascript:">火腿肠</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>大米面粉</dt>
                    <dd>大米</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>粗娘</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>菌菇干货</dt>
                    <dd>枣类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>木耳</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>食用菌</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>银耳</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>干菜</dd>
                    <br>
                    <dd>海产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>枸杞</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>桂圆干/龙眼</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>厨房调料</dt>
                    <dd>食用盐</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酱油</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>菌</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>味精/鸡精</dd>
                    <br>
                    <dd>糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>咖喱</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酱菜</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>调味酱</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>调味料</dd>
                    <br>
                    <dd>火锅调料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>料酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>八角茴香</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌</dt>
                    <dd>金沙河</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>统一</dd>
                    <br>
                    <dd>双汇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>福临门</dd>
                    <br>
                    <dd>长寿花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鲁花</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>菌菇干货</dt>
                    <dd>枣类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>木耳</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>食用菌</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>银耳</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>干菜</dd>
                    <br>
                    <dd>海产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>枸杞</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>桂圆干/龙眼</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu4">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/美容洗护.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">美容洗护</a></span></h3>
                <p>
                  <a href="javascript:">洗发</a>
                  <a href="javascript:">沐浴</a>
                  <a href="javascript:">牙膏</a>
                  <a href="javascript:">洁面</a>
                  <a href="javascript:">卫生巾</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>糖果/巧克力</dt>
                    <dd>巧克力</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>口香糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>棒棒糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>喜糖</dd>
                    <br>
                    <dd>软糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果冻</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饼干糕点</dt>
                    <dd>饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>曲奇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面包</dd>
                    <br>
                    <dd>薯片/膨化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麻花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋黄派</dd>
                    <br>
                    <dd>月饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>沙琪玛</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤梨酥</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>牛奶饮品</dt>
                    <dd>常温奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>乳饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>儿童奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸奶</dd>
                    <br>
                    <dd>豆奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>低脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>全脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>成人奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.新衣哥</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>.南方大促</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饮料/水</dt>
                    <dd>水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果蔬饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碳酸饮料</dd>
                    <br>
                    <dd>功能饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>即饮咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸梅汤</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu5">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/剪刀.png" alt=""><span
                    style="display:inline-block;padding-left:10px;">
                  <a href="javascript:" style="color:#515151;font-weight:700">家居家电</a></span></h3>
                <p>
                  <a href="javascript:">毛巾</a>
                  <a href="javascript:">家电</a>
                  <a href="javascript:">玻璃杯</a>
                  <a href="javascript:">衣架</a>
                  <a href="javascript:">锅</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>糖果/巧克力</dt>
                    <dd>巧克力</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>口香糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>棒棒糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>喜糖</dd>
                    <br>
                    <dd>软糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果冻</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饼干糕点</dt>
                    <dd>饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>曲奇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面包</dd>
                    <br>
                    <dd>薯片/膨化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麻花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋黄派</dd>
                    <br>
                    <dd>月饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>沙琪玛</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤梨酥</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>牛奶饮品</dt>
                    <dd>常温奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>乳饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>儿童奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸奶</dd>
                    <br>
                    <dd>豆奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>低脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>全脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>成人奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.新衣哥</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>.南方大促</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饮料/水</dt>
                    <dd>水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果蔬饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碳酸饮料</dd>
                    <br>
                    <dd>功能饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>即饮咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸梅汤</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu6">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/家庭清洁.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">家庭清洁</a></span></h3>
                <p>
                  <a href="javascript:">纸</a>
                  <a href="javascript:">洗衣</a>
                  <a href="javascript:">洗洁精</a>
                  <a href="javascript:">垃圾袋</a>
                  <a href="javascript:">洁厕</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>糖果/巧克力</dt>
                    <dd>巧克力</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>口香糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>棒棒糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>喜糖</dd>
                    <br>
                    <dd>软糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果冻</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饼干糕点</dt>
                    <dd>饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>曲奇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面包</dd>
                    <br>
                    <dd>薯片/膨化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麻花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋黄派</dd>
                    <br>
                    <dd>月饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>沙琪玛</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤梨酥</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>牛奶饮品</dt>
                    <dd>常温奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>乳饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>儿童奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸奶</dd>
                    <br>
                    <dd>豆奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>低脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>全脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>成人奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.新衣哥</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>.南方大促</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饮料/水</dt>
                    <dd>水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果蔬饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碳酸饮料</dd>
                    <br>
                    <dd>功能饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>即饮咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸梅汤</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu7">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/母婴用品.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">母婴用品</a></span></h3>
                <p>
                  <a href="javascript:">纸尿裤</a>
                  <a href="javascript:">奶粉</a>
                  <a href="javascript:">湿巾</a>
                  <a href="javascript:">洗护</a>
                  <a href="javascript:">玩具</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>糖果/巧克力</dt>
                    <dd>巧克力</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>口香糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>棒棒糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>喜糖</dd>
                    <br>
                    <dd>软糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶糖</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果冻</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饼干糕点</dt>
                    <dd>饼干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>曲奇</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>糕点</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>面包</dd>
                    <br>
                    <dd>薯片/膨化</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麻花</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蛋黄派</dd>
                    <br>
                    <dd>月饼</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>沙琪玛</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤梨酥</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>牛奶饮品</dt>
                    <dd>常温奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>乳饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>儿童奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸奶</dd>
                    <br>
                    <dd>豆奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>低脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>全脂奶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>成人奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>品牌活动</dt>
                    <dd>.新衣哥</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>.南方大促</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>饮料/水</dt>
                    <dd>水</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>果蔬饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碳酸饮料</dd>
                    <br>
                    <dd>功能饮料</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>即饮咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>酸梅汤</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>冲调保健</dt>
                    <dd>咖啡</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶茶</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>奶粉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芝麻糊</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>茶叶</dd>
                    <br>
                    <dd>功能保健</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>蜂产品</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>麦片</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>减肥</dd>
                    <br>
                    <dd>保健礼盒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>传统滋补</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>补肾</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>坚果炒货</dt>
                    <dd>核桃</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>夏威夷果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>碧根果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>开心果</dd>
                    <br>
                    <dd>腰果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>瓜子</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>花生</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>杏仁</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆类</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="https://img.alicdn.com/tps/i1/TB1h7hfHFXXXXbHaXXX6TwSIFXX-196-90.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
                <div>
                  <dl>
                    <dt>肉类/豆干制品零食</dt>
                    <dd>牛肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>牛肉筋</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>猪肉</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鸡鸭禽</dd>
                    <br>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>凤爪</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>豆干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>肉松</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>鱼系列</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>海苔</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>酒类</dt>
                    <dd>葡萄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>黄酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>啤酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>白酒</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>洋酒</dd>

                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>蜜饯果干</dt>
                    <dd>红枣</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>梅类</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>葡萄干</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>芒果干</dd>
                    <br>
                    <dd>山楂片/卷</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>无花果</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>陈皮</dd>
                    <dd style="color:#e7e7e7;">|</dd>
                    <dd>榴莲干</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu8">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="http://127.0.0.1:8002/assets/充值.png" alt=""><span
                    style="display:inline-block;padding-left:10px;"><a
                    href="javascript:" style="color:#515151;font-weight:700">生活服务</a></span></h3>
                <p>
                  <a href="javascript:">信用卡还款</a>
                  <a href="javascript:">转账</a>
                  <a href="javascript:">充话费</a>
                  <a href="javascript:">点券</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="scroll">
        <div class="layui-carousel" id="test1" style="width: 100%; height: 100%;z-index:100;">
          <div carousel-item>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i1/O1CN01ZPCeBR26EagSsTHYm_!!6000000007630-0-tps-750-291.jpg_Q90.jpg"
                alt=""/></a></div>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i2/O1CN01YSS6YD1kRwgeWfNyz_!!6000000004681-0-tps-750-291.jpg_Q90.jpg"
                alt=""/></a></div>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i1/O1CN014FmkLw2AJPJWOiCrq_!!6000000008182-0-tps-750-291.jpg_Q90.jpg"
                alt=""/></a></div>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i4/O1CN01aDVjnr1bLEL1KSUpT_!!6000000003448-0-tps-750-291.jpg_Q90.jpg"
                alt=""/></a></div>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i1/O1CN01tolAv727Dxl318PFm_!!6000000007764-2-tps-750-291.png_Q90.jpg"
                alt=""/></a></div>
            <div><a href="javascript:"><img
                src="https://img.alicdn.com/imgextra/i3/O1CN01oxatie1NOyxiKZQB4_!!6000000001561-0-tps-750-291.jpg_Q90.jpg"
                alt=""/></a></div>
          </div>
        </div>
      </div>
      <div class="tm-chaoshi-markets">
        <div class="row-top">
          <a href="javascript:" alt="粮油"
             style="width:250px;height: 120px;display: inline-block;" class="first">
            <img src="http://127.0.0.1:8002/assets/a.jpg" alt=""
                 style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 120px;display: inline-block" class="first"><img
              src="http://127.0.0.1:8002/assets/b.jpg" alt=""
              style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 120px;display: inline-block" class="first"><img
              src="http://127.0.0.1:8002/assets/c.jpg"
              alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
        </div>
        <div class="row-bot">
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="http://127.0.0.1:8002/assets/a_bot.jpg" alt=""
              style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="http://127.0.0.1:8002/assets/b_bot.jpg" alt=""
              style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="http://127.0.0.1:8002/assets/c_bot.jpg" alt=""
              style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
        </div>
      </div>
      <div class="chaoshi-sidebar">
        <div><a href="javascript:"><img src="http://127.0.0.1:8002/assets/d_top.jpg" alt=""/></a></div>
        <div><a href="javascript:"><img src="http://127.0.0.1:8002/assets/d_bot.jpg" alt=""/></a></div>
      </div>
    </div>
  </div>
</template>
<script>
if (window.location.pathname === '/home') {
  window.onload = function () {
    //1. 获取元素w
    let sliderbar = document.querySelector(".slider-bar");
    let html = document.querySelector("html")
    let body = document.querySelector("body")
    html.style.height = body.scrollHeight + "px";
    // 2. 页面滚动事件 scroll
    document.addEventListener("scroll", function () {
      if (window.pageYOffset < 223) {
        sliderbar.style.top = 223 - window.pageYOffset + "px";
      }
    });
    setTimeout(function () {
      let divmain = document.querySelector(".layui-carousel");
      let icons = document.querySelectorAll(".layui-carousel-arrow");
      divmain.onmouseover = function () {
        for (let i = 0; i < icons.length; i++) {
          icons[i].style.visibility = "visible";
        }
      }
      divmain.onmouseleave = function () {
        for (let i = 0; i < icons.length; i++) {
          icons[i].style.visibility = "hidden";
        }
      }
    }, 5000)
    setTimeout(function () {
      let icons = document.querySelectorAll(".layui-carousel-arrow");
      let div = document.querySelector(".layui-carousel-ind");
      let ul = div.querySelector("ul");

      // var change = ul.querySelector(".layui-this");
      let lis = ul.querySelectorAll("li");
      ul.style.marginLeft = "560px";
      ul.style.backgroundColor = "rgba(0,0,0,0)";
      for (let i = 0; i < icons.length; i++) {
        icons[i].style.borderRadius = "0";
        icons[i].style.width = "40px";
        icons[i].style.height = "50px";
        icons[i].style.fontSize = "25px";
      }
      for (let j = 0; j < lis.length; j++) {
        lis[j].style.width = "20px";
        lis[j].style.height = "20px";
        lis[j].style.backgroundColor = "#000000";
        lis[j].style.color = "#ffffff";
        lis[j].innerHTML = j + 1;
        lis[j].style.lineHeight = "20px";
      }
    }, 3000);
  };
  window.layui.use("carousel", function () {
    let carousel = window.layui.carousel;
    //建造实例
    carousel.render({
      elem: "#test1",
      width: "100%", //设置容器宽度
      arrow: "always", //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });
}
import eventBus from "../EventBus";

export default {
  props: {
    arr: {
      type: Array,
      required: true
    },
  },
  watch: {
    newarr: {
      deep: true,
      handler() { // 拿到商品数量, 判断小于1, 强制修改成1
        if (this._data.newarr.length > 0) {
          if (this._data.newarr[0].purchase_count < 1) {
            this._data.newarr[0].purchase_count = 1
          }
        } else {
          return 0;
        }
      }
    },
    arr() {
      for (let j = 0; j < this.selected.length; j++) {
        for (let i = 0; i < this.arr.length; i++) {
          if (this.selected[j] === this.arr[i].id) {
            this.arr[i].state = false;
            this.newarr.push(this.arr[i])
          }
        }
      }
    },
    selected(newVal) {
      console.log(newVal)
      var self = this;
      setTimeout(function () {
        if (newVal.length === 0) {
          self.goods_count.splice(0, 1)
          self.GLOBAL.buy_counts = self.goods_count
          window.localStorage.setItem('buy_counts', JSON.stringify(self.goods_count))
        } else {
          self.goods_count.splice(0, newVal.length)
          for (let i = 0; i < newVal.length; i++) {
            self.goods_count[i] = self.newarr[i].purchase_count;
          }
          self.GLOBAL.buy_counts = self.goods_count
          window.localStorage.setItem('buy_counts', JSON.stringify(self.goods_count))
        }
      }, 2000)
    }
  },
  created() {
    var self = this
    setTimeout(function () {
      self.goods_count = JSON.parse(window.localStorage.getItem('buy_counts'))
      self.GLOBAL.buy_counts = self.goods_count
      window.localStorage.setItem('buy_counts', JSON.stringify(self.goods_count))
      for (let i = 0; i < self.selected.length; i++) {
        self.newarr[i].purchase_count = self.goods_count[i]
      }
    }, 1000)
    eventBus.$on("search_outcome", (content) => {
      var serach_out = document.querySelector(".search_out")
      var ul = serach_out.querySelector("ul")
      if (ul.querySelectorAll("li").length !== 0) {
        var lis = ul.querySelectorAll("li");
        for (let i = 0; i < lis.length; i++) {
          ul.removeChild(lis[i]);
        }
      }
      this.isSearch = true
      this.$axios({
        url: "http://127.0.0.1:8000/api/get_goods?info=" + content,
        method: "GET",
      }).then(function (res) {
        console.log(res.data.data.length)
        for (let i = 0; i < res.data.data.length; i++) {
          var li = document.createElement("li");
          li.style.height = "25px";
          li.style.lineHeight = "25px";
          li.style.paddingLeft = "10px";
          li.style.fontWeight = "700"
          li.innerHTML = res.data.data[i];
          ul.appendChild(li);
        }
      })
    })
    eventBus.$on("purchase", (id) => {
      this.selected.push(id);
      this.GLOBAL.goods_id = this.selected;
      window.localStorage.setItem('goods_id', JSON.stringify(this.GLOBAL.goods_id));
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          this.arr[i].state = false;
          this.newarr.push(this.arr[i])
        }
      }
    })
  },
  computed: {
    allPrice() {
      if (this.newarr.length > 0) {
        return this.newarr.reduce((sum, obj) => {
          if (!obj.state) {
            sum += obj.purchase_count * obj.price
          }
          return this.toDecimal(sum);
        }, 0)
      } else {
        return 0;
      }
    }
    ,
    allWeight() {
      if (this.newarr.length > 0) {
        return this.newarr.reduce((total, obj) => {
          if (!obj.state) {
            total += obj.purchase_count * obj.weight;
          }
          return this.toDecimal(total);
        }, 0)
      } else {
        return 0;
      }
    }
    ,
  }
  ,
  data() {
    return {
      isTop: true,
      isSearch: false,
      selected: this.GLOBAL.goods_id,
      newarr: [],
      goods_count: this.GLOBAL.buy_counts,
    }
  }
  ,
  methods: {
    removeActive($event) {
      $event.currentTarget.className = "layui-menu ";
    }
    ,
    toDecimal(x) {
      let f = parseFloat(x);
      if (isNaN(f)) {
        return;
      }
      f = Math.round(x * 100) / 100;
      return f;
    }
    ,
    deletegood(id) {
      for (var i = 0; i < this.newarr.length; i++) {
        if (this.newarr[i].id === id) {
          this.newarr.splice(i, 1);
          break;
        }
      }
      for (var j = 0; j < this.selected.length; j++) {
        if (this.selected[j] === id) {
          this.selected.splice(i, 1);
          this.GLOBAL.goods_id = this.selected;
          window.localStorage.setItem('goods_id', JSON.stringify(this.GLOBAL.goods_id));
          break;
        }
      }
      for (var k = 0; k < this.arr.length; k++) {
        if (this.arr[k].id === id) {
          this.arr[k].state = true;
          this.arr[k].count = this.arr[k].count + this.arr[k].purchase_count - 1;
          this.arr[k].purchase_count = 1;
          break;
        }
      }
      eventBus.$emit('deletegood', id);
    }
    ,
    buy(obj) {
      var index;
      for (let j = 0; j < this.selected.length; j++) {
        if (this.selected[j] === obj.id) {
          index = j;
          break;
        }
      }
      var self = this;
      setTimeout(function () {
        self.goods_count[index] = self.newarr[index].purchase_count;
        self.GLOBAL.buy_counts = self.goods_count
        window.localStorage.setItem('buy_counts', JSON.stringify(self.goods_count))
      })
    }
    ,
  },
}
;
</script>

<style scoped lang="less">
.maindiv {
  width: 100%;
  height: 621px;
  margin-bottom: 50px;
  margin-top: 0;

  .search_out {
    width: 450px;
    background-color: #fff;
    z-index: 999;
    float: right;
    position: relative;
    top: -30px;
    left: 160px;
  }

  .banner {
    width: 1190px;
    margin: 0 auto;

    .contain {
      height: 37px;
      width: 1190px;
      border-bottom: 1px solid black;
      visibility: visible;
      position: fixed;
      z-index: 997;
      top: 223px;
      background-color: white;

      span a:hover {
        color: #e22a40;
      }

      .goBack {
        height: 100%;

        .shouye {
          color: #333333;
          font-size: 16px;
          line-height: 37px;
          padding-left: 30px;
          font-weight: 700;
        }

        .enter_purchase {
          color: #333333;
          font-size: 16px;
          line-height: 37px;
          padding-left: 50px;
          font-weight: 700;
        }

        .left {
          background-color: #2f2f2f;
          float: left;
          height: 100%;
          width: 20.16%;

          span {
            color: #ffffff;
            font-size: 16px;
            line-height: 37px;
            margin-left: 70px;
            font-weight: 700
          }
        }

        .right:hover {
          width: 240px !important;
        }

        .right {
          .imgloc {
            width: 36px;
            height: 36px;
            background-color: #ffffff;
            border-radius: 50%;
            position: relative;
            float: left;
            margin-left: -20px;
          }

          height: 31px;
          width: 200px !important;
          float: right;
          background-color: #bf0000;
          position: relative;
          cursor: pointer;
          left: 0;
          transition: width 0.2s ease-in;

          //-webkit-transition: width 0.2 ease-in; /* Safari */
          span {
            color: #fcff00;
            font-size: 12px;
            line-height: 31px;

            strong {
              font-size: 22px;
              padding-left: 10px;
              padding-right: 5px;
            }
          }

          .imgbottom {
            float: right;
            position: relative;
            width: 15px;
            height: 15px;
            top: 10px;
            left: -5px;
          }

          .imgtop {
            float: right;
            position: relative;
            width: 15px;
            height: 15px;
            top: 10px;
            left: -5px;
          }

          .good_purchase {
            border: 4px solid #e22b40;
            color: #666;
            background-color: #fff;
            transition: all .2s ease-in;
            border-top: 0;
            width: 240px;
            height: 364px;
            cursor: default;
            z-index: 999;

            .unlogin {
              width: 232px;
              height: 295px;

              div {
                padding-left: 10px;
                padding-top: 30px;
                text-align: center;

                span a {
                  color: #0000ff;
                  font-size: 12px;

                  :hover {
                    text-decoration: underline;
                  }
                }
              }
            }

            .good_header {
              width: 232px;
              height: 30px;
              cursor: auto;

              span {
                display: inline-block;
                text-align: center;
                line-height: 30px;
                color: #666666;
                font-size: 12px;
              }
            }

            .good_main {
              overflow-y: auto;
              overflow-x: hidden;
              width: 232px;
              height: 214px;
              cursor: default;

              .purchase {
                width: 232px;
                height: 50px;
                line-height: 50px;
                cursor: default;

                span {
                  color: #bf0000;
                  height: 30px;
                  width: 60px;
                  background-color: #ffffff;
                  font-size: 12px;
                  margin-left: 10px;
                  text-align: center;
                  line-height: 30px;
                }

                .count {
                  display: inline-block;
                  margin-left: 10px;

                  button {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    border: 1px solid #dbdbdb;
                    cursor: pointer;
                    background-color: #ffffff;
                  }

                  input {
                    width: 30px;
                    height: 20px;
                    text-align: center;
                    border: 1px solid #dbdbdb;
                    cursor: text;
                    border-width: 1px 0;
                  }
                }
              }

              .market {
                width: 232px;
                height: 23px;
                background: #fff8e2;
                line-height: 23px;
                white-space: nowrap;
                overflow: hidden;

                span {
                  color: #333333;
                  font-size: 12px;
                  padding-left: 6px;
                }
              }
            }

            .good_bottom {
              width: 232px;
              height: 81px;
              border-top: 2px solid #bf0000;

              button {
                display: inline-block;
                margin-left: 70px;
                margin-top: 20px;
                background-color: #bf0000;
                width: 74px;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
                color: #fff;
                border: none;
              }

              .sum {
                width: 216px;
                height: 31px;
                padding-left: 5px;
                line-height: 31px;

                .sumup {
                  color: #000000;
                  font-size: 12px;
                  margin-left: 15px;
                }

                .price {
                  font-weight: 700;
                  color: #c00;
                  font-size: 14px;
                  margin-right: 2px;
                }

                .coupon {
                  color: grey;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }

    .left_goods {
      width: 240px;
      height: 583px;
      padding-top: 36px;

      .layui-panel {
        height: 584px;

        .layui-menu {
          margin: 0 0;
          height: 12.3%;
          border-bottom: 1px solid #e7e7e7;

          li {
            height: 100%;
            cursor: default;

            .layui-menu-body-title h3 span a {
              cursor: default;
            }
          }

          .layui-menu-body-title {
            height: 100%;

            p {
              padding-left: 30px;
            }

            p a {
              display: inline;
              color: #999999;
              font-size: 12px;
              margin-right: -6px;
            }

            p a:hover {
              text-decoration: underline;
            }
          }

          .content {
            width: 950px;
            height: 350px;
            border: 3px solid #e22a40;
            background-color: #fff;
            margin-left: 0;
            //cursor: default !important;

            div {
              width: 25%;
              height: 33%;
              display: block;
              float: left;
              border-right: 1px dotted #d3d3d3;

              dl {
                padding-top: 10px;
                padding-left: 20px;
              }

              dl dt:hover {
                cursor: auto;
              }

              dl dd:hover {
                text-decoration: underline;
                color: #e22a40;
              }

              dl dt {
                color: #515151;
                font-size: 12px;
                font-weight: 700;
              }

              dl dd {
                font-size: 12px;
                color: #666;
                display: block;
                float: left;
                margin-right: 7px;
              }
            }
          }

          li:hover {
            background-color: #e22a40;

            i::before {
              color: #fff;
            }

            p a {
              color: #F1ABB1;
            }

            h3 {

              img {
                filter: drop-shadow(10px 10px #ffffff);
                margin-left: -10px;
                margin-top: -15px;
              }

              span {
                margin-left: 10px;

                a {
                  color: white !important;

                  :hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }

    .scroll {
      height: 291px;
      width: 750px;
      position: relative;
      float: left;
      top: -546px;
      left: 240px;

      .layui-carousel {
        height: 100% !important;
      }
    }

    .tm-chaoshi-markets {
      width: 750px;
      height: 294px;
      position: relative;
      float: left;
      top: -550px;
      left: 240px;

      .row-top {
        width: 100%;
        height: 120px;

        .first:hover img {
          width: 260px;
          height: 130px;
          transform: scale(1.1);
        }
      }

      .row-bot {
        width: 100%;
        height: 172px;

        .first:hover img {
          width: 270px;
          height: 190px;
          transform: scale(1.2);
        }
      }
    }

    .chaoshi-sidebar {
      width: 190px;
      height: 343px;
      position: relative;
      float: left;
      top: -836px;
      left: 250px;
      border-top: 1px solid #e5e5e5;

      div {
        width: 100%;
        height: 170px;
      }
    }
  }
}

.active {
  width: 253px;
  z-index: 998;
  left: -5px;
}


.layui-carousel-ind .layui-this {
  background-color: #c40000 !important;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}


</style>
