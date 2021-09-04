<template>
  <div style="width: 100%;height:621px;margin-bottom: 50px;margin-top:0;">
    <div
        style="width:450px;height:240px;background-color: #fff;z-index:999;float: right;position: relative;top:-30px;left:160px;"
        class="search_out" v-show="isSearch" @click="isSearch=false">
      <ul></ul>
    </div>
    <div style="width: 1190px; margin: 0 auto" class="banner">
      <div style="
          height: 37px;
          width: 1190px;
          border-bottom: 1px solid black;
          visibility: visible;
          position: fixed;
          z-index: 997;
          top: 223px;
          background-color:white
        "
           class="contain slider-bar"
      >
        <div class="goBack" style="height: 100%">
          <div class="left" style="height: 100%; width: 20.16%">
            <span style="font-weight:700">所有产品分类</span>
          </div>
          <span
              style="
              color: #333333;
              font-size: 16px;
              line-height: 37px;
              padding-left: 30px;
              font-weight: 700;
            "
          ><a href="javascript:">首页</a></span
          >
          <span
              style="
              color: #333333;
              font-size: 16px;
              line-height: 37px;
              padding-left: 50px;
              font-weight: 700;
            "
          ><a href="javascript:">企业采购</a></span
          >

          <div class="right" style="height: 90%; width: 20.16%" @mouseover="isTop=false" @mouseleave="isTop=true">
            <div class="imgloc">
              <img src="../assets/shopping.png" alt=""/>
            </div>
            <span style="font-weight: 700"><strong>¥{{ allPrice }}</strong>元</span>
            <span style="color:#ffffff;font-size: 12px"> {{ allWeight }}kg</span>
            <img src="../assets/箭头实心下.png" alt=""
                 style="float:right;position: relative;width:15px;height:15px;top:10px;left:-5px;" v-if="isTop">
            <img src="../assets/箭头实心上.png" alt=""
                 style="float:right;position: relative;width:15px;height:15px;top:10px;left:-5px;" v-else>
            <div v-show="!isTop" style="width:240px;height:364px;cursor:default;z-index:999" class="good_purchase">
              <div class="good_header" style="width:232px;height:30px;cursor:auto;">
                <span style="width:46px;height:30px;">商品</span>
                <span style="width:68px;height:30px;">数量</span>
                <span style="width:60px;height:30px;">价格</span>
                <span style="width:40px;height:30px;">删除</span>
              </div>
              <div class="good_main" style="width:232px;height:214px;cursor: default"
                   v-if="this.GLOBAL.isLogin==='true'">
                <div
                    style="width:232px;height:23px;background: #fff8e2;line-height: 23px;white-space: nowrap;overflow: hidden;">
                  <span style="color:#333333;font-size: 12px;padding-left:6px;">天猫超市</span>
                </div>
                <div class="purchase" v-for="(obj,id) in newarr" :key="id">
                  <img :src="obj.url"
                       alt="" style="width:40px;height:40px;margin-left:10px;">
                  <div class="count">
                    <button type="button" :disabled="obj.purchase_count === 1"
                            @click="obj.purchase_count--&&obj.count++&&obj.purchase_count>0">-
                    </button>
                    <input type="number" v-model.number="obj.purchase_count">
                    <button type="button" @click="obj.count>0&&obj.purchase_count++&&obj.count--">+
                    </button>
                  </div>
                  <span>¥{{ obj.price }}</span>
                  <img src="../assets/叉.png" alt="" style="width:16px;height:16px;line-height: 16px;margin-left:10px;"
                       @click="deletegood(obj.id)">
                </div>
              </div>
              <div class="good_bottom" style="width:232px;height:81px;border-top:2px solid #bf0000"
                   v-if="this.GLOBAL.isLogin==='true'">
                <div class="sum"
                     style="width:216px;height:31px;padding-left:5px;line-height: 31px">
                  <span style="color:#000000;font-size: 12px;margin-left:15px;">合计：</span>
                  <span style="font-weight: 700;color: #c00;font-size: 14px;margin-right: 2px;">¥{{ allPrice }}</span>
                  <span style="color: grey;margin-left: 10px;">(含优惠)</span></div>

                <button style="display: inline-block;
                margin-left:70px;
                margin-top:20px;
                background-color:#bf0000;
    width: 74px;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    color: #fff;
border: none">去结算
                </button>
              </div>
              <div v-else style="width: 232px;height: 295px;" class="unlogin">
                <div style="padding-left:10px;padding-top:30px;text-align: center">
                  如果您还未登录，可能导致购物车为空，请 <span><a href="/login" style="color:#0000ff;font-size: 12px">马上登录</a></span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="left_goods">
        <div class="layui-panel" style="height: 584px;">
          <ul class="layui-menu" id="docDemoMenu1">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/回流区进口食品.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu2">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/食品饮料.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu3">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/粮油副食.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu4">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/美容洗护.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu5">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/剪刀.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
                    href="javascript:;" style="color:#515151;font-weight:700">家居家电</a></span></h3>
                <p>
                  <a href="javascript:;">毛巾</a>
                  <a href="javascript:;">家电</a>
                  <a href="javascript:;">玻璃杯</a>
                  <a href="javascript:;">衣架</a>
                  <a href="javascript:;">锅</a>
                </p>
                <i class="layui-icon layui-icon-right"></i>
              </div>
              <div class="layui-panel layui-menu-body-panel content">
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu6">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/家庭清洁.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu7">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/母婴用品.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>

                    <dt>进口零食</dt>
                    <dd>进口蜜饯果干</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口薯片/膨化</dd>
                    <br>
                    <dd>进口坚果</dd>
                    <dd>|</dd>
                    <dd>进口糖果</dd>
                    <dd>|</dd>
                    <dd>进口果冻布丁</dd>
                    <dd>进口海产品</dd>
                    <dd>|</dd>
                    <dd>进口肉干</dd>
                    <dd>|</dd>
                    <dd>进口巧克力</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>进口牛奶</dt>
                    <dd>进口纯牛奶</dd>
                    <dd style="color:#999999;">|</dd>
                    <dd>进口酸奶</dd>
                    <br>
                    <dd>进口成人奶粉</dd>
                    <dd>|</dd>
                    <dd>进口含乳饮料</dd>
                    <dd>进口有机牛奶</dd>
                    <dd>|</dd>
                    <dd>进口酸奶粉</dd>
                  </dl>
                </div>
                <div style="background-color:#f7f8f8">
                  <img src="../picture/p.jpg" alt=""
                       style="float: left;position: relative;padding-top:20px;padding-left:20px;">
                </div>
              </div>
            </li>
          </ul>
          <ul class="layui-menu" id="docDemoMenu8">
            <li class="layui-menu-item-parent" lay-options="{type: 'parent'}">
              <div class="layui-menu-body-title">
                <h3><img src="../assets/充值.png" alt=""><span style="display:inline-block;padding-left:10px;"><a
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
        <div
            class="layui-carousel"
            id="test1"
            style="width: 100%; height: 100%;z-index:100;"

        >
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
             style="width:250px;height: 120px;display: inline-block;" class="first"><img
              src="../assets/a.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 120px;display: inline-block" class="first"><img
              src="../assets/b.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 120px;display: inline-block" class="first"><img
              src="../assets/c.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
        </div>
        <div class="row-bot">
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="../assets/a_bot.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="../assets/b_bot.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
          <a href="javascript:"
             style="width:250px;height: 172px;display: inline-block" class="first"><img
              src="../assets/c_bot.jpg" alt="" style="width:100%;height:100%;transition: all 0.5s ease;"/></a>
        </div>
      </div>
      <div class="chaoshi-sidebar">
        <div style="width:100%;height:170px"><a href="javascript:"><img src="../assets/d_top.jpg" alt=""/></a></div>
        <div style="width:100%;height:170px"><a href="javascript:"><img src="../assets/d_bot.jpg" alt=""/></a></div>
      </div>

    </div>
  </div>
</template>
<script>
import eventBus from "../EventBus";

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
          return;
        }
      }
    }
  },
  created() {
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
    for (var j = 0; j < this.selected.length; j++) {
      for (var i = 0; i < this.arr.length; i++) {
        if (this.selected[j] === this.arr[i].id) {
          this.arr[i].state = false;
          this.newarr.push(this.arr[i])
        }
      }
    }
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
    },
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
    },
  },
  data() {
    return {
      isTop: true,
      isSearch: false,
      selected: this.GLOBAL.goods_id,
      newarr: [],
    }
  },
  methods: {
    addActive($event) {
      $event.currentTarget.className = "layui-menu active";
    },
    removeActive($event) {
      $event.currentTarget.className = "layui-menu ";
    },
    toDecimal(x) {
      let f = parseFloat(x);
      if (isNaN(f)) {
        return;
      }
      f = Math.round(x * 100) / 100;
      return f;
    },
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
    },

  }
}
;
</script>

<style scoped lang="less">
.active {
  width: 253px;
  z-index: 998;
  left: -5px;
}

.left {
  background-color: #2f2f2f;
  float: left;
}

.left span {
  color: #ffffff;
  font-size: 16px;
  line-height: 37px;
  margin-left: 70px;
}

.right {
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
}

.right:hover {
  width: 240px !important;
}

.imgloc {
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
  position: relative;
  float: left;
  margin-left: -20px;
}

.left_goods {
  width: 240px;
  height: 583px;
  padding-top: 36px;
}

.layui-menu {
  height: 12.3%;
  border-bottom: 1px solid #e7e7e7;

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

.contain span a:hover {
  color: #e22a40;
}

.layui-menu-body-title {
  height: 100px;
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

.layui-carousel-ind .layui-this {
  background-color: #c40000 !important;
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
  border-top: 1px solid #e5e5e5
}

.layui-menu li {
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

}

.layui-menu-body-title p a {
  display: inline;
  color: #999999;
  font-size: 12px;
  margin-right: -6px;
}

.layui-menu {
  margin: 0 0;
}

.layui-menu-body-title p a:hover {
  text-decoration: underline;
}

.good_purchase {
  border: 4px solid #e22b40;
  color: #666;
  background-color: #fff;
  transition: all .2s ease-in;
  border-top: 0;

  .good_header span {
    display: inline-block;
    text-align: center;
    line-height: 30px;
    color: #666666;
    font-size: 12px;
  }

  .good_main {
    overflow-y: auto;
    overflow-x: hidden;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

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

.unlogin span a:hover {
  text-decoration: underline;
}
</style>
