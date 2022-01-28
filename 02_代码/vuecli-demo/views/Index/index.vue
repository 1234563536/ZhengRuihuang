<template>
  <div class="analysis-index">
  <div class="platform-title">舆情监控平台</div>
    <div class="sumup-info common-border">
      <span class="sumup-title">
        <img src="../../img/信息.png" alt="">
        总体信息</span>
<!--      <div class="num">-->
<!--        <span style="top:20%;">2</span>-->
<!--        <span>3</span>-->
<!--        <span>4</span>-->
<!--      </div>-->
      <ul>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <div id="layer02_01" style="height: 30%;">
        <canvas width="200" height="120"></canvas>
      </div>
      <div id="layer02_02" style="height: 30%;">
        <canvas width="200" height="150"></canvas>
      </div>
      <div id="layer02_03" style="height: 30%;">
        <canvas width="200" height="120"></canvas>
      </div>
    </div>
    <div class="hot common-border">
      <!--      <img src="http://10.16.69.5/img/wordcloud.png" alt="">-->
      <span class="hot-title">
        <img src="../../img/热门.png" alt="">
        热点消息</span>
            <div class="col-lg-4" id="tagsList">
              <a href="#" v-for="obj in arr">
                {{obj}}
              </a>
<!--              <a href="#" >最新</a>-->
<!--              <a href="#" >编程</a>-->
<!--              <a href="#" >鲁迅</a>-->
<!--              <a href="#" >散文</a>-->
<!--              <a href="#" >名著</a>-->
<!--              <a href="#" >小王子</a>-->
<!--              <a href="#" >三毛</a>-->
<!--              <a href="#" >web</a>-->
<!--              <a href="#" >林">挪威的森林</a>-->
<!--              <a href="#" >三体</a>-->
<!--              <a href="#" >余华</a>-->
<!--              <a href="#" >悬疑</a>-->
<!--              <a href="#" >">东野圭吾</a>-->
<!--              <a href="#" >曹雪芹</a>-->
<!--              <a href="#" >经济</a>-->
<!--              <a href="#" >言情</a>-->
<!--              <a href="#" >诛仙</a>-->
<!--              <a href="#" >校园</a>-->
<!--              <a href="#" >漫画</a>-->
<!--              <a href="#" >">Java</a>-->
            </div>
    </div>
  <div class="tendency-chart common-border">
          <span class="chart-title">
        <img src="../../img/趋势.png" alt="">
        信息量趋势图</span>
  <div id="chart30"></div>
  </div>
    <div class="origin-analysis common-border">
                <span class="analisis-title">
        <img src="../../img/来源概览.png" alt="">
        来源分析</span>
      <div id="chart_pie"></div>
    </div>
    <div class="range common-border">
<!--      <img src="http://10.16.69.5/img/wordcloud.png" alt="">-->
      <span class="hot-title">
        <img src="../../img/热门.png" alt="">
        企业排名</span>
      <table style="color:white" border="1" >
        <!-- 表格的头部 -->
        <thead>
        <tr>
          <th>排名</th>
          <th>企业名称</th>
          <th>负面舆情排名数量</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
<!--      <div class="col-lg-4" id="tagsList">-->
<!--        <a href="#" data="2020">最新</a>-->
<!--        <a href="#" data="编程">编程</a>-->
<!--        <a href="#" data="鲁迅">鲁迅</a>-->
<!--        <a href="#" data="散文">散文</a>-->
<!--        <a href="#" data="名著">名著</a>-->
<!--        <a href="#" data="小王子">小王子</a>-->
<!--        <a href="#" data="三毛">三毛</a>-->
<!--        <a href="#" data="web">web</a>-->
<!--        <a href="#" data="挪威的森林">挪威的森林</a>-->
<!--        <a href="#" data="三体">三体</a>-->
<!--        <a href="#" data="余华">余华</a>-->
<!--        <a href="#" data="悬疑">悬疑</a>-->
<!--        <a href="#" data="东野圭吾">东野圭吾</a>-->
<!--        <a href="#" data="曹雪芹">曹雪芹</a>-->
<!--        <a href="#" data="经济">经济</a>-->
<!--        <a href="#" data="言情">言情</a>-->
<!--        <a href="#" data="诛仙">诛仙</a>-->
<!--        <a href="#" data="校园">校园</a>-->
<!--        <a href="#" data="漫画">漫画</a>-->
<!--        <a href="#" data="Java">Java</a>-->
<!--      </div>-->
    </div>
    <div class="badnews common-border">
                <span class="badnews-title" id="">
        <img src="../../img/展示.png" alt="">
        负面文本展示</span>
      <table style="color:white" border="1" >
        <!-- 表格的头部 -->
        <thead>
        <tr>
          <th>来源</th>
          <th>文本</th>
          <th>涉及企业</th>
          <th>是否为负面舆情</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textdatas:[],
      str:[],
      str1:[],
      dataPie:[],
      sortdatas:[],
      arr:[],
    };
  },
  watch:{
    arr:{
      immediate: true,
      handler(newVal){
        console.log(newVal)
      }
    }
  },
  created() {
    setTimeout(()=>{
      this.changeLine('2020-10-01','2021-10-01');
      this.chartpie();
      this.getTotalInfo();
      this.showText();
      this.showRank();
      this.drawLayer02Label(this.$("#layer02_01 canvas").get(0),"涉及企业数量",80,200);
      this.drawLayer02Label(this.$("#layer02_02 canvas").get(0),"整体信息量",80,200);
      this.drawLayer02Label(this.$("#layer02_03 canvas").get(0),"负面信息量",80,200);
      this.showhotnews();
    }, 1000)
  },
  methods:{
    showhotnews(){
      var self=this;
      this.$axios({
        url:"/articleKw/getNKw",
        method:"post",
        data:{
          n:20,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(function(res){
        console.log(res.data.data.data.length)
        for(var i=0;i<res.data.data.data.length;i++){
          self.arr.push(res.data.data.data[i])
        }
      })
    },
    changeLine(start,end) {
      var chartDom = document.getElementById('chart30');
      var myChart = this.$echarts.init(chartDom);
      var datalineZ = [];
      var datalineF = [];
      this.$.ajax({
        url:"http://114.55.253.244:8001/data/getDataByDate",
        type:"post",
        data:{
          "begin":start,
          "end":end
        },
        dataType:"json",
        success: function(data){
          var str=data.data.dataPoi;
          var str1=data.data.dataReg
          for(var i = 0;i<str.length;i++){
            var tip = [str[i].date,str[i].sum];
            datalineZ.push(tip);
          }
          for(var j = 0;j<str1.length;j++){
            var tips = [str1[j].date,str1[j].sum];
            datalineF.push(tips);
          }
        } ,error:function (res){
          console.log(res)
        }
      });
      setTimeout(()=>{
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['负面信息数量', '正面信息数量'],
            right: '60px',
            textStyle: {
              color: 'fff'
            }
          },
          grid: {
            x: 50,
            y: 25,
            x2: 50,
            y2: 30,
            // borderWidth:1
          },
          dataZoom : [
            {
              type: 'slider',//图表下方的伸缩条
              show : false,  //是否显示
              realtime : true,  //
              start : 0,  //伸缩条开始位置（1-100），可以随时更改
              end : 100,  //伸缩条结束位置（1-100），可以随时更改
              xAxisIndex:[0],
              filterMode:'none'
            }],
          xAxis: [
            {
              type: 'time',
              boundaryGap: false,
              // data: [/*'周一','周二','周三','周四','周五','周六','周日'*/],
              splitLine: {
                show: false
              },
              splitNumber:12,
              axisLine: {
                lineStyle: {
                  color: '#FFF'
                }
              },
              axisLabel: { // 坐标轴标签样式设置
                formatter: function(value, index) { // 坐标轴文字展示样式处理
                  const date = new Date(value)
                  const texts = [date.getFullYear(), (date.getMonth() + 1), date.getDate()]
                  return texts.join('-')
                  // echarts自带的日期格式化方法
                  // return echarts.format.formatTime('yyyy-MM-dd', value)
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '个',
              nameGap: 6,
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#FFF'
                }
              },

            },
            {
              type: 'value',
              name: '个',
              nameGap: 6,
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#FFF'
                }
              },
            }
          ],
          series: [
            {
              name: '正面信息数量',
              type: 'line',
              color: '#0EDF99',

              smooth: true,
              showSymbol: false,
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgb(66,255,251,1)' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgb(66,255,251,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
              data: datalineZ
            },
            {
              name: '负面信息数量',
              type: 'line',
              color: '#42FFFB',
              smooth: true,
              showSymbol: false,
              yAxisIndex: 1,
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: 'rgb(10,195,248,1)' // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgb(10,195,248,0)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              },
              data:datalineF
            }
          ]
        };
        let startNum  = 0;
        let endNum   = 40;

        setInterval(function(){
          startNum = startNum + 0.1;
          endNum = endNum + 0.1;
          if(endNum >=100){
            startNum = 0;
            endNum  = 40;
          }
          myChart.dispatchAction({
            type: 'dataZoom',
            // 开始位置的百分比，0 - 100
            start: startNum,
            // 结束位置的百分比，0 - 100
            end: endNum
          });
        }, 100);
        myChart.setOption(option);
        window.addEventListener("resize",function(){
          setTimeout(function(){
            myChart.resize();
          },500)
        });
      },1000)

    },
    chartpie(){
      var chartPie = document.getElementById('chart_pie');
      chartPie = this.$echarts.init(chartPie);
      var dataPie;
      this.$.ajax({
        url:"http://114.55.253.244:8001/data/getDataOfPie",
        type:"post",
        cache:true,
        // dataType:"json",
        success: function(data){
           dataPie = [{value : data.data['微博'],name :'微博'},
            {value : data.data['新浪'],name :'新浪'},
            {value : data.data['网贷天眼'],name :'网贷天眼'}
          ]
          console.log(dataPie)
        } ,error:function (res){
          console.log(res)
        }
      });
      setTimeout(()=>{
        console.log(dataPie)
  var optionPie = {
    title: {
      text: '',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: dataPie,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chartPie.setOption(optionPie);
  window.addEventListener("resize",function(){
    setTimeout(function(){
      chartPie.resize();
    },500)
  });
},5000)
    },
    drawLayer02Label(canvasObj,text,textBeginX,lineEndX){
  var colorValue = '#04918B';

  var ctx = canvasObj.getContext("2d");

  ctx.beginPath();
  ctx.arc(35,55,2,0,2*Math.PI);
  ctx.closePath();
  ctx.fillStyle = colorValue;
  ctx.fill();

  ctx.moveTo(35,55);
  ctx.lineTo(60,80);
  ctx.lineTo(lineEndX,80);
  ctx.lineWidth = 1;
  ctx.strokeStyle = colorValue;
  ctx.stroke();

  ctx.font='24px Georgia';
  ctx.fillStyle = colorValue;
  ctx.fillText(text,textBeginX,110);
},
    getTotalInfo(){
      var sum_info=document.querySelector('.sumup-info');
      var lis=sum_info.querySelectorAll('li');
this.$axios({
  url:"/data/getTotalInfo",
  method:"post",
}).then(function(res){
  if(res.data.code===0){
    window.layer.msg("获取数据成功")
    lis[0].innerHTML=res.data.data.total
    lis[1].innerHTML=res.data.data.totalCompany
    lis[2].innerHTML=res.data.data.totalReg
  }
})
    },
    showText(){
      var badnews=document.querySelector(".badnews");
var table=badnews.querySelector("table");
var tbody=table.querySelector("tbody");
var self=this;
var skip=1;
this.getMNData(skip)
setInterval(()=>{
  var trs=tbody.querySelectorAll("tr");
  skip=skip+5;
  for(var j=0;j<trs.length;j++){
    tbody.removeChild(trs[j])
  }
  self.getMNData(skip)
},10000)
    },
    getMNData(skip){
      var badnews=document.querySelector(".badnews");
      var table=badnews.querySelector("table");
      var tbody=table.querySelector("tbody");
      var self=this;
      this.$axios({
        url:"/data/getMNRegData",
        method:"post",
        data:{
          n:5,
          skip:skip
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(function(res){
        self.textdatas=res.data.data.data;
        for (var i = 0; i < 5; i++) { // 外面的for循环管行 tr

          // 1. 创建 tr行
          var tr = document.createElement('tr');
          tr.style.height='80px'
          if(i%2==0){
            tr.style.boxShadow='-10px 0px 15px #2C58A6 inset,10px 0px 15px #2C58A6 inset';
            tr.style.backgroundColor='#072951';
          }
          tbody.appendChild(tr);
          for(var j=0;j<4;j++){
            var td = document.createElement('td');
            td.style.fontSize='20px'
            if(j==0){
              td.style.width='10%'
              td.innerHTML= '<a href="'+self.textdatas[i].scheme+'">'+self.textdatas[i].source+'</a>';
              td.querySelector("a").style.color='white';
              td.querySelector("a").style.textDecoration='none';
              tr.appendChild(td);
            }else if(j==1){
              td.style.width='70%'
              td.innerHTML=self.textdatas[i].rawText.substring(0,40)+'...';
              tr.appendChild(td);
            }else if(j==2){
              td.style.width='10%'
              td.innerHTML=self.textdatas[i].entity.substring(0,8);
              tr.appendChild(td);
            }else if(j==3){
              td.style.width='10%'
              if(self.textdatas[i].reg==true){
                td.innerHTML='是'
                td.style.color='red';
              }else{
                td.innerHTML='否'
              }
              tr.appendChild(td);
            }
          }
        }
      })
    },
    showRank(){
      var range=document.querySelector(".range");
      var table=range.querySelector("table");
      var tbody=table.querySelector("tbody");
      var self=this;
      this.$axios({
        url:"/data/getSortData",
        method:"post",
        data:{
          n:6
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(function(res){
        self.sortdatas=res.data.data.data;
        console.log(res.data.data.data)
        for (var i = 0; i < self.sortdatas.length; i++) { // 外面的for循环管行 tr
          // 1. 创建 tr行
          var tr = document.createElement('tr');
          tbody.appendChild(tr);
          if(i%2==0){
            tr.style.boxShadow='-10px 0px 15px #2C58A6 inset,10px 0px 15px #2C58A6 inset';
            tr.style.backgroundColor='#072951';
          }
          for(var j=0;j<3;j++){
            var td = document.createElement('td');
            td.style.height='15%'
            td.style.fontSize='20px'
            if(j==0){
              td.style.width='20%'
              td.innerHTML= i+1+'';
              tr.appendChild(td);
            }else if(j==1){
              td.style.width='40%'
              td.innerHTML=self.sortdatas[i].name;
              tr.appendChild(td);
            }else if(j==2){
              td.style.width='40%'
              td.innerHTML=self.sortdatas[i].regNum+'';
              tr.appendChild(td);
            }
          }
        }
      })
    },
  }
};
</script>
<style scoped lang="less">
.analysis-index{
height:100%;width:100%;padding:40px 0 0 40px;position: relative;
}
.platform-title{
background: url('http://10.16.69.5/img/title.png') no-repeat;
background-size: 100% 100%;
width:100%;
height: 80px;
color:white;
font-size:35px;
text-align: center;
line-height: 40px;
margin-bottom: 40px;
}
.tendency-chart{
//width:1536px;
//height:327px;
width:50%;
height:40%;
display: inline-block;
position: relative;
float: left;
margin-bottom: 60px;
.chart-title{
  width: 180px;
  height: 35px;
  line-height: 33px;
  background-color: #2C58A6;
  border-radius: 18px;
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  z-index:2;
  text-align: center;
  top: -15px;
  left:45%;
}
#chart30{
  width:100%;
  height:100%;
}
}
.common-border{
border: 3px solid #2C58A6;
box-shadow: 0px 0px 15px 5px #2C58A6 inset;
background: linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat, linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat, linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat, linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat, linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat, linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat, linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat, linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat;
background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px;
}
.sumup-info,.origin-analysis,.hot,.badnews,.range{
display: inline-block;
}
.sumup-info{
height: 40%;
width:20%;
margin-right:60px;
margin-bottom: 60px;
float: left;
display: flex;
flex-direction: column;
justify-content:center;
background-color: transparent;
align-items: center;
position: relative;
ul{
  float: left;
  //display: flex;
  //flex-direction: column;
  //justify-content:center;
  position: absolute;
  height: 100%;
  padding:0;
  width:0;
  margin-bottom: 0;
  li{
    float: left;
    //display: block;
    //position: absolute;
    color: white;
    font-size: 30px;
    height: 30%;
    width:100px;
    margin-top:20px;
  }
}
.sumup-title{
  width: 180px;
  height: 35px;
  line-height: 33px;
  background-color: #2C58A6;
  border-radius: 18px;
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  z-index:2;
  text-align: center;
  top: -15px;
}
span{
  color: white;
  font-size: 30px;
  display: block;
  height:100px;
  width:100px;
}
}
.origin-analysis{
height: 40%;
width: 20%;
float: left;
background-color: transparent;
margin-right:60px;
position: relative;
.analisis-title{
  width: 180px;
  height: 35px;
  line-height: 33px;
  background-color: #2C58A6;
  border-radius: 18px;
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  z-index:2;
  text-align: center;
  top: -15px;
  left:35%;
}
#chart_pie{
  width:100%;
  height:100%;
}
}
.hot,.range{
padding-top: 10px;
height: 40%;
width: 20%;
float: left;
background-color: transparent;
//padding:70px 0 0 200px;
margin-right:60px;
position: relative;
table{
  position: absolute;
  width:100%;
  height: 100%;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  thead,tfoot{
    color: #61d2f7;
    width:100%;
    height:8%;
    font-weight: 700;
  }
  tbody{
    width:100%;
    height:90%;
    tr:nth-child(2n+1){
      box-shadow: -10px 0px 15px #2C58A6 inset,   /*左边阴影*/
      10px 0px 15px #2C58A6 inset;
      background-color: #072951;
    }
  }
}
.hot-title{
  width: 180px;
  height: 35px;
  line-height: 33px;
  background-color: #2C58A6;
  border-radius: 18px;
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  z-index:2;
  text-align: center;
  top: -15px;
  left:35%;
}
}
.badnews{
position: relative;
height: 40%;
width: 48%;
float: left;
background-color: transparent;
position: relative;
padding-top:10px;
.badnews-title{
  width: 180px;
  height: 35px;
  line-height: 33px;
  background-color: #2C58A6;
  border-radius: 18px;
  position: absolute;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  z-index:2;
  text-align: center;
  top: -15px;
  left:35%;
}
table{
  position: absolute;
  width:100%;
  height: 100%;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  thead,tfoot{
    color: #61d2f7;
    width:100%;
    height:8%;
    font-weight: 700;
  }
  tbody{
    width:100%;
    height:90%;
    tr:nth-child(2n+1){
box-shadow: -10px 0px 15px #2C58A6 inset,   /*左边阴影*/
10px 0px 15px #2C58A6 inset;
      background-color: #072951;
    }
  }
}
}


#tagsList {

position: relative;
width: 250px;
height: 250px;
top:50%;

left:50%;

transform:translate(-50%,-50%);
}

#tagsList a {
position: absolute;
top: 0px;
left: 0px;
font-family: Microsoft YaHei;
//color: gray;
color:white;
font-weight: bold;
text-decoration: none;
font-size:15px;
padding: 3px 6px;
}

#tagsList a:hover {
color: #249e92;
letter-spacing: 2px;
}
</style>
