<template>
  <div style="width:100%;background-color:#ffffff">
    <div
        style="
    background-color:#ffffff;
      width: 1190px;
      height: 87px;
     margin:0 auto;
    "
    >
      <a href="javascript:" style="line-height: 87px;display:inline-block;margin-left:40px">
        <img
            src="https://gw.alicdn.com/tfs/TB1OpaTmUz1gK0jSZLeXXb9kVXa-666-243.png" alt=""
            style="width: 130px; height: 48px; max-width: 100%"
        />
      </a>
      <div class="dropdown" style="z-index:998">
        <button class="dropbtn" @mouseover="isShow=false" @mouseleave="isShow=true">
          <h3>{{ this.area }}
            <img src="http://127.0.0.1:8002/assets/箭头.png" alt=""
                 style="float: right;position:relative;left:20px;top:-20px;"
                 v-if="isShow">
            <img src="http://127.0.0.1:8002/assets/箭头上.png" alt=""
                 style="float: right;position:relative;left:20px;top:-20px;" v-else>
          </h3>
        </button>
        <div class="dropdown-content">
          <div class="hot_city">
            <span>热门城市：</span>
            <ul>
              <li><a href="javascript:">北京</a></li>
              <li><a href="javascript:">上海</a></li>
              <li><a href="javascript:">杭州</a></li>
              <li><a href="javascript:">广州</a></li>
              <li><a href="javascript:">天津</a></li>
              <li><a href="javascript:">苏州</a></li>
              <li><a href="javascript:">成都</a></li>
              <li><a href="javascript:">深圳</a></li>
              <li><a href="javascript:">南京</a></li>
              <li><a href="javascript:">重庆</a></li>
              <li><a href="javascript:">南昌</a></li>
              <li><a href="javascript:">武汉</a></li>
            </ul>
          </div>
          <div class="layui-tab">
            <ul class="layui-tab-title title">
              <li class="layui-this">ABCDE</li>
              <li>FGHJ</li>
              <li>KLMNP</li>
              <li>QRSTW</li>
              <li>XYZ</li>
            </ul>
            <div class="layui-tab-content" style="width:100%;height:562px">
              <div class="layui-tab-item layui-show"
                   style="width:100%;height:100%;padding-left:20px;padding-top: 20px">
                <div style="height: 66px;margin-bottom: 10px" class="A">
                  <span>A</span>
                  <ul>
                    <li>阿坝</li>
                    <li>安顺</li>
                    <li>安庆</li>
                    <li>阿拉尔</li>
                    <li>鞍山</li>
                    <li>阿克苏</li>
                    <li style="margin-left:21px;">阿拉善</li>
                    <li>阿拉泰</li>
                    <li>安康</li>
                    <li>阿里</li>
                    <li>安阳</li>
                  </ul>
                </div>
                <div style="height: 132px;margin-bottom: 10px" class="B">
                  <span>B</span>
                  <ul>
                    <li>百色</li>
                    <li>巴音郭楞</li>
                    <li>滨州</li>
                    <li>保定</li>
                    <li>北屯</li>
                    <li>蚌埠</li>
                    <li style="margin-left:21px;">白银</li>
                    <li>巴中</li>
                    <li>白沙</li>
                    <li>保亭</li>
                    <li>包头</li>
                    <li>毕节</li>
                    <li style="margin-left:21px;">白山</li>
                    <li>宝鸡</li>
                    <li>亳州</li>
                    <li>宝山</li>
                    <li>本溪</li>
                    <li>巴彦淖尔</li>
                    <li style="margin-left:21px;">北京</li>
                    <li>巴尔塔拉</li>
                    <li>白城</li>
                    <li>北海</li>
                  </ul>
                </div>
                <div style="height:132px;margin-bottom: 10px" class="C">
                  <span>C</span>
                  <ul>
                    <li>常德</li>
                    <li>楚雄</li>
                    <li>常州</li>
                    <li>昌吉</li>
                    <li>长沙</li>
                    <li>长治</li>
                    <li style="margin-left:21px;">昌江</li>
                    <li>澄迈</li>
                    <li>重庆</li>
                    <li>朝阳</li>
                    <li>崇左</li>
                    <li>长春</li>
                    <li style="margin-left:21px;">承德</li>
                    <li>滁州</li>
                    <li>沧州</li>
                    <li>赤峰</li>
                    <li>池州</li>
                    <li>昌都</li>
                    <li style="margin-left:21px;">彬州</li>
                    <li>成都</li>
                    <li>潮州</li>
                  </ul>
                </div>
                <div style="height: 99px;margin-bottom: 10px" class="D">
                  <span>D</span>
                  <ul>
                    <li>大连</li>
                    <li>东营</li>
                    <li>德宏</li>
                    <li>安定</li>
                    <li>东方</li>
                    <li>儋州</li>
                    <li style="margin-left:21px;">东莞</li>
                    <li>大兴安岭</li>
                    <li>迪庆</li>
                    <li>德州</li>
                    <li>大理</li>
                    <li>丹东</li>
                    <li style="margin-left:21px;">大庆</li>
                    <li>德阳</li>
                    <li>达州</li>
                    <li>定西</li>
                    <li>大同</li>
                  </ul>
                </div>
                <div style="height: 33px;" class="E">
                  <span>E</span>
                  <ul>
                    <li>恩施</li>
                    <li>鄂尔多斯</li>
                    <li>鄂州</li>
                  </ul>
                </div>
              </div>
              <div class="layui-tab-item" style="width:100%;height:100%;padding-left:20px;padding-top: 20px">
                <div style="height: 66px;margin-bottom: 10px" class="F">
                  <span>F</span>
                  <ul>
                    <li>福州</li>
                    <li>抚顺</li>
                    <li>阜新</li>
                    <li>抚州</li>
                    <li>防城港</li>
                    <li>佛山</li>
                    <li style="margin-left:21px;">阜阳</li>
                  </ul>
                </div>
                <div style="height: 66px;margin-bottom: 10px" class="G">
                  <span>G</span>
                  <ul>
                    <li>广元</li>
                    <li>甘南</li>
                    <li>果洛</li>
                    <li>桂林</li>
                    <li>固原</li>
                    <li>贵阳</li>
                    <li style="margin-left:21px;">广州</li>
                    <li>贵港</li>
                    <li>广安</li>
                    <li>甘孜</li>
                    <li>赣州</li>
                  </ul>
                </div>
                <div style="height:198px;margin-bottom: 10px" class="H">
                  <span>H</span>
                  <ul>
                    <li>海北</li>
                    <li>葫芦岛</li>
                    <li>衡水</li>
                    <li>海西</li>
                    <li>呼和浩特</li>
                    <li>菏泽</li>
                    <li style="margin-left:21px;">怀化</li>
                    <li>黄南</li>
                    <li>黄冈</li>
                    <li>淮南</li>
                    <li>汉中</li>
                    <li>海东</li>
                    <li style="margin-left:21px;">呼伦贝尔</li>
                    <li>红河</li>
                    <li>淮安</li>
                    <li>海南藏族</li>
                    <li>河池</li>
                    <li>衡阳</li>
                    <li style="margin-left:21px;">鹤壁</li>
                    <li>黄石</li>
                    <li>邯郸</li>
                    <li>海口</li>
                    <li>淮北</li>
                    <li>惠州</li>
                    <li style="margin-left:21px;">鹤岗</li>
                    <li>黄山</li>
                    <li>和田</li>
                    <li>贺州</li>
                    <li>杭州</li>
                    <li>合肥</li>
                    <li style="margin-left:21px;">河源</li>
                    <li>哈尔滨</li>
                    <li>黑河</li>
                    <li>哈密</li>
                    <li>湖州</li>
                  </ul>
                </div>
                <div style="height: 132px;margin-bottom: 10px" class="J">
                  <span>J</span>
                  <ul>
                    <li>全昌</li>
                    <li>焦作</li>
                    <li>锦州</li>
                    <li>吉安</li>
                    <li>嘉兴</li>
                    <li>景德镇</li>
                    <li style="margin-left:21px;">揭阳</li>
                    <li>九江</li>
                    <li>鸡西</li>
                    <li>酒泉</li>
                    <li>晋城</li>
                    <li>佳木斯</li>
                    <li style="margin-left:21px;">荆州</li>
                    <li>济南</li>
                    <li>金华</li>
                    <li>吉林</li>
                    <li>晋中</li>
                    <li>嘉峪关</li>
                    <li style="margin-left:21px;">济源</li>
                    <li>荆门</li>
                    <li>江门</li>
                    <li>济宁</li>
                  </ul>
                </div>
              </div>
              <div class="layui-tab-item" style="width:100%;height:100%;padding-left:20px;padding-top: 20px">
                <div style="height: 66px;margin-bottom: 10px" class="K">
                  <span>K</span>
                  <ul>
                    <li>昆玉</li>
                    <li>克拉玛依</li>
                    <li>可克达拉</li>
                    <li>开封</li>
                    <li>克孜勒苏柯尔克孜</li>
                    <li>喀什</li>
                    <li style="margin-left:21px;">昆明</li>
                  </ul>
                </div>
                <div style="height: 198px;margin-bottom: 10px" class="L">
                  <span>L</span>
                  <ul>
                    <li>丽江</li>
                    <li>洛阳</li>
                    <li>临高</li>
                    <li>陵水</li>
                    <li>乐东</li>
                    <li>六盘水</li>
                    <li style="margin-left:21px;">聊城</li>
                    <li>六安</li>
                    <li>柳州</li>
                    <li>临夏</li>
                    <li>临汾</li>
                    <li>娄底</li>
                    <li style="margin-left:21px;">拉萨</li>
                    <li>临沧</li>
                    <li>龙岩</li>
                    <li>吕梁</li>
                    <li>陇南</li>
                    <li>兰州</li>
                    <li style="margin-left:21px;">乐山</li>
                    <li>来宾</li>
                    <li>瀍河</li>
                    <li>泸州</li>
                    <li>连云港</li>
                    <li>廊坊</li>
                    <li style="margin-left:21px;">莱芜</li>
                    <li>辽源</li>
                    <li>丽水</li>
                    <li>临沂</li>
                    <li>林芝</li>
                    <li>辽阳</li>
                    <li style="margin-left:21px;">凉山</li>

                  </ul>
                </div>
                <div style="height:33px;margin-bottom: 10px" class="M">
                  <span>M</span>
                  <ul>
                    <li>眉山</li>
                    <li>梅州</li>
                    <li>茂名</li>
                    <li>马鞍山</li>
                    <li>牡丹江</li>
                    <li>绵阳</li>
                  </ul>
                </div>
                <div style="height: 66px;margin-bottom: 10px" class="N">
                  <span>N</span>
                  <ul>
                    <li>南宁</li>
                    <li>南阳</li>
                    <li>南充</li>
                    <li>南平</li>
                    <li>那曲</li>
                    <li>宁波</li>
                    <li style="margin-left:21px;">内江</li>
                    <li>南通</li>
                    <li>怒江</li>
                    <li>南京</li>
                    <li>南昌</li>
                    <li>宁德</li>
                  </ul>
                </div>
                <div style="height: 66px;margin-bottom: 10px" class="P">
                  <span>P</span>
                  <ul>
                    <li>萍乡</li>
                    <li>普洱</li>
                    <li>攀枝花</li>
                    <li>平凉</li>
                    <li>南田</li>
                    <li>盘锦</li>
                    <li style="margin-left:21px;">濮阳</li>
                    <li>平顶山</li>
                  </ul>
                </div>
              </div>
              <div class="layui-tab-item" style="width:100%;height:100%;padding-left:20px;padding-top: 20px">
                <div style="height: 99px;margin-bottom: 10px" class="Q">
                  <span>Q</span>
                  <ul>
                    <li>潜江</li>
                    <li>齐齐哈尔</li>
                    <li>黔西南</li>
                    <li>庆阳</li>
                    <li>泉州</li>
                    <li>琼中</li>
                    <li style="margin-left:21px;">七台河</li>
                    <li>曲靖</li>
                    <li>琼海</li>
                    <li>衡州</li>
                    <li>秦皇岛</li>
                    <li>清远</li>
                    <li style="margin-left:21px;">钦州</li>
                    <li>青岛</li>
                    <li>黔东南</li>
                    <li>黔南</li>
                  </ul>
                </div>
                <div style="height: 33px;margin-bottom: 10px" class="R">
                  <span>R</span>
                  <ul>
                    <li>日照</li>
                    <li>日喀则</li>
                  </ul>
                </div>
                <div style="height:198px;margin-bottom: 10px" class="S">
                  <span>S</span>
                  <ul>
                    <li>石家庄</li>
                    <li>三沙</li>
                    <li>神龙架</li>
                    <li>汕头</li>
                    <li>汕尾</li>
                    <li>苏州</li>
                    <li style="margin-left:21px;">宿州</li>
                    <li>绥化</li>
                    <li>双河</li>
                    <li>石河子</li>
                    <li>三门峡</li>
                    <li>宿迁</li>
                    <li style="margin-left:21px;">遂宁</li>
                    <li>朔州</li>
                    <li>双鸭山</li>
                    <li>松原</li>
                    <li>三亚</li>
                    <li>深圳</li>
                    <li style="margin-left:21px;">商丘</li>
                    <li>石嘴山</li>
                    <li>绍兴</li>
                    <li>山南</li>
                    <li>沈阳</li>
                    <li>商洛</li>
                    <li style="margin-left:21px;">三明</li>
                    <li>四平</li>
                    <li>随州</li>
                    <li>上海</li>
                    <li>十堰</li>
                    <li>韶关</li>
                    <li style="margin-left:21px;">昭阳</li>
                    <li>上饶</li>
                  </ul>
                </div>
                <div style="height: 132px;margin-bottom: 10px" class="T">
                  <span>T</span>
                  <ul>
                    <li>天门</li>
                    <li>通化</li>
                    <li>铁门关</li>
                    <li>图木舒克</li>
                    <li>台州</li>
                    <li>屯昌</li>
                    <li style="margin-left:21px;">唐山</li>
                    <li>铁岭</li>
                    <li>天水</li>
                    <li>吐鲁番</li>
                    <li>太原</li>
                    <li>铜仁</li>
                    <li style="margin-left:21px;">泰安</li>
                    <li>泰州</li>
                    <li>铜川</li>
                    <li>塔城</li>
                    <li>天津</li>
                    <li>铜陵</li>
                    <li style="margin-left:21px;">通辽</li>
                  </ul>
                </div>
                <div style="height: 99px;margin-bottom: 10px" class="W">
                  <span>W</span>
                  <ul>
                    <li>吴忠</li>
                    <li>五家渠</li>
                    <li>乌鲁木齐</li>
                    <li>威海</li>
                    <li>交昌</li>
                    <li>万宁</li>
                    <li style="margin-left:21px;">五指山</li>
                    <li>文山</li>
                    <li>温州</li>
                    <li>乌海</li>
                    <li>乌兰察布</li>
                    <li>武汉</li>
                    <li style="margin-left:21px;">梧州</li>
                    <li>无锡</li>
                    <li>海防</li>
                    <li>芜湖</li>
                    <li>武威</li>
                    <li>渭南</li>
                  </ul>
                </div>
              </div>
              <div class="layui-tab-item" style="width:100%;height:100%;padding-left:20px;padding-top: 20px">
                <div style="height:132px;margin-bottom: 10px" class="X">
                  <span>X</span>
                  <ul>
                    <li>仙桃</li>
                    <li>锡林郭勒</li>
                    <li>孝感</li>
                    <li>宣城</li>
                    <li>祁州</li>
                    <li>厦门</li>
                    <li style="margin-left:21px;">徐州</li>
                    <li>湘潭</li>
                    <li>新乡</li>
                    <li>襄阳</li>
                    <li>兴安</li>
                    <li>湘西</li>
                    <li style="margin-left:21px;">西宁</li>
                    <li>咸宁</li>
                    <li>咸阳</li>
                    <li>新余</li>
                    <li>西双版纳</li>
                    <li>西安</li>
                    <li style="margin-left:21px;">许昌</li>
                    <li>信阳</li>
                    <li>邢台</li>
                  </ul>
                </div>
                <div style="height: 165px;margin-bottom: 10px" class="Y">
                  <span>Y</span>
                  <ul>
                    <li>延安</li>
                    <li>运城</li>
                    <li>阳泉</li>
                    <li>雅安</li>
                    <li>扬州</li>
                    <li>玉溪</li>
                    <li style="margin-left:21px;">云浮</li>
                    <li>伊春</li>
                    <li>营口</li>
                    <li>盐城</li>
                    <li>岳阳</li>
                    <li>延边朝鲜族</li>
                    <li style="margin-left:21px;">伊犁</li>
                    <li>宣春</li>
                    <li>宜昌</li>
                    <li>烟台</li>
                    <li>翰林</li>
                    <li>玉树</li>
                    <li style="margin-left:21px;">玉林</li>
                    <li>宜宾</li>
                    <li>银川</li>
                    <li>益阳</li>
                    <li>永州</li>
                    <li>阳江</li>
                    <li style="margin-left:21px;">鹰潭</li>
                  </ul>
                </div>
                <div style="height: 132px;margin-bottom: 10px" class="Z">
                  <span>Z</span>
                  <ul>
                    <li>舟山</li>
                    <li>自贡</li>
                    <li>株洲</li>
                    <li>驻马店</li>
                    <li>中山</li>
                    <li>张家口</li>
                    <li style="margin-left:21px;">中卫</li>
                    <li>张家界</li>
                    <li>珠海</li>
                    <li>益阳</li>
                    <li>遵义</li>
                    <li>漳州</li>
                    <li style="margin-left:21px;">淄博</li>
                    <li>郑州</li>
                    <li>周口</li>
                    <li>潜江</li>
                    <li>张掖</li>
                    <li>昭通</li>
                    <li style="margin-left:21px;">枣庄</li>
                    <li>镇江</li>
                    <li>肇庆</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="input_form">
        <form class="layui-form" method="get">
          <input type="text" name="title" required lay-verify="required" placeholder="搜索天猫超市商品" autocomplete="off"
                 class="layui-input" v-focus style="font-size:12px;color:#666666;font-weight: 700"
                 v-model="content">
          <button @click="search_outcome($event)"
                  class="layui-btn layui-btn-fluid layui-btn-normal"
                  lay-submit>搜 索
          </button>
        </form>
      </div>
      <div class="picture">
        <ul>

          <li><a href="javascript:"><img src="http://127.0.0.1:8002/assets/serviceone.png" alt=""><span
              style="color:#666666;font-size:12px">一站式购齐</span></a></li>
          <li><a href="javascript:"><img src="http://127.0.0.1:8002/assets/servicefull.png" alt=""><span
              style="color:#666666;font-size:12px">满88包邮</span></a></li>
          <li><img src="http://127.0.0.1:8002/assets/police.png" alt=""></li>
          <li><img src="http://127.0.0.1:8002/assets/change.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/EventBus";

export default {
  data() {
    return {
      content: "",
      isShow: true,
      area: "武汉"
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  created() {
    let self = this;
    setTimeout(function () {
      let hot_city = document.querySelector(".hot_city");
      let hot_ul = hot_city.querySelector("ul");
      let hot_lis = hot_ul.querySelectorAll("li");
      // console.log(hot_lis[0].querySelector("a").innerHTML)
      for (let i = 0; i < hot_lis.length; i++) {
        hot_lis[i].querySelector("a").onclick = function () {
          self.area = hot_lis[i].querySelector("a").innerHTML
        }
      }
    }, 1000)
    window.layui.use("element", function () {
      let element = window.layui.element;
      //一些事件触发
      element.on("tab(demo)", function (data) {
        console.log(data);
      });
    });

    window.layui.use('form', function () {
      let form = window.layui.form;
      //监听提交
      form.on('submit(formDemo)', function (data) {
        window.layer.msg(JSON.stringify(data.field));
        return false;
      });
    });

  },
  methods: {
    search_outcome(e) {
      if (this.content === "") {
        window.layui.msg("请输入内容")
        return
      } else {
        e.preventDefault();
        eventBus.$emit('search_outcome', this.content);
      }
    }
  }
};
</script>

<style scoped lang="less">
/* 下拉按钮样式 */
.dropbtn {
  background-color: #ffffff;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

h3 {
  color: #30B30E;
  margin-top: -5px;
  padding-right: 10px;
}

/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
  position: relative;
  display: inline-block;
  width: 78px;
  height: 39px;
  margin-left: 70px;
  border: 1px solid #e5e5e5;
  z-index: 999;
}

/* 下拉内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 480px;
  height: 780px;
  background-color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 999;
}

/* 下拉菜单的链接 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #ffffff;
}

.input_form {
  float: right;
  position: relative;
  left: -250px;
  top: 20px;
  width: 540px;
  height: 36px;
  border: 3px solid #30B30E;
}

.input_form button {
  width: 90px;
  height: 34px;
  background-color: #30B30E;
  color: #ffffff;
  border: none;
  cursor: pointer;
  position: relative;
  float: right;
  top: -32px;
  font-size: 16px;
}

input {
  width: 447px;
  height: 30px;
}

.picture {
  width: 500px;
  height: 36px;
  float: right;
  position: relative;
  left: 240px;
  top: -67px
}

.picture ul li {
  float: left;
  margin-left: 20px;
  line-height: 36px;
}

.hot_city {
  width: 480px;
  height: 127px;

  margin-top: 30px;
  padding-left: 20px;
  font-size: 14px;
  color: #333333;


  ul li {
    float: left;
    margin-top: 10px;
    margin-right: 10px;
    width: 60px;
    height: 21px;
    line-height: 21px;
    color: #333333;

    a:hover {
      color: #e22a40;
      background-color: #ffffff;
    }
  }
}

.title {
  padding-left: 20px;

  li {
    margin-left: 10px;
  }
}

.A, .B, .C, .D, .E, .F, .G, .H, .I, .J, .K, .L, .M, .N, .O, .P, .Q, .R, .S, .T, .U, .V, .W, .X, .Y, .Z {
  span {
    float: left;
    display: block;
    color: #DD2727;
    font-size: 12px;
    width: 21px;
    height: 21px;
  }

  ul li {
    float: left;
    color: #333333;
    font-size: 14px;
    width: 68px;
    height: 21px;
    margin-bottom: 10px;
  }
}

</style>
