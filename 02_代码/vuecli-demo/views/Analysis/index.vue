<template>
  <div class="analysis-banner">
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <!--        <div class="wave waveTop" style="background-image: url('img/wave-top.png')"></div>-->
        <img src="../../img/wave-top.png" alt="" class="wave waveTop"
             style="position: absolute;z-index: 89;display: block;top:870px">
      </div>
      <div class="waveWrapperInner bgMiddle">
        <!--        <div class="wave waveMiddle" style="background-image: url('../../img/wave-mid.png');position: absolute;z-index: 999"></div>-->
        <img src="../../img/wave-mid.png" alt="" class="wave waveMiddle"
             style="position: absolute;z-index: 99;display: block;top:870px">
      </div>
      <div class="waveWrapperInner bgBottom">
        <!--        <div class="wave waveBottom" style="background-image: url('img/wave-bot.png')"></div>-->
        <img src="../../img/wave-bot.png" alt="" class="wave waveBottom"
             style="position: absolute;z-index: 199;display: block;top:870px">
      </div>
    </div>
    <div class="platform-title">舆情分析平台</div>
    <div class="title-analysis">
      <span style="padding-left: 20px;font-size:30px">舆情分析</span>
      <span class="iconfont icon-sousuo"></span>
      <input type="text" v-model="message" @keyup.enter="submit">
      <button class="export-excel">导出Excel</button>
      <button class="export-pdf">导出Pdf</button>
      <span class="iconfont icon-jurassic_export-form export"></span>
      <span class="iconfont icon-jurassic_export-form export" style="left:34%;"></span>
    </div>
    <div class="info">{{this.infoname}}</div>
    <div class="info-outcome">
      <span><i class="iconfont icon-chongzhi"></i>{{ this.infoname }}</span>
      <span>简介</span>
      <span>{{this.introduction}}</span>
    </div>
    <div class="company-dynamic-info dynamic">
      <img src="../../img/blue.png" alt="" class="first-img">
      <span class="first-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>
      <img src="../../img/blue-hot.png" alt="" class="second-img">
      <span class="second-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>
      <img src="../../img/blue-hot.png" alt="" class="third-img">
      <span class="third-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>
      <img src="../../img/blue.png" alt="" class="forth-img">
      <span class="forth-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>
      <img src="../../img/blue-hot.png" alt="" class="fifth-img">
      <span class="fifth-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>
      <img src="../../img/blue-hot.png" alt="" class="sixth-img">
      <span class="sixth-span">这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？这是个信息？
      </span>

    </div>
    <div class="company-dynamic-info">
      <div class="common-border" style="margin-left: 10%;">
        <div id="com_info_pie" style="height: 100%;width: 100%"></div>
      </div>
      <div class="common-border">
        <div id="com_info_sec_pie" style="height: 100%;width: 100%"></div>
      </div>
    </div>
    <div class="company-dynamic-info">
      <div class="common-border" style="margin-left: 10%;">
        <IEcharts
            id="cloud"
            :option='wordcloud'
        />
      </div>
      <div class="common-border">
        <div id="companyline" style="height: 100%;width: 100%"></div>
      </div>
    </div>
    <div class="company-dynamic-info">
<!--      <div class="company-badnews">-->
<!--        <table style="color:white">-->
<!--          &lt;!&ndash; 表格的头部 &ndash;&gt;-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>来源</th>-->
<!--            <th>文本</th>-->
<!--            <th>日期</th>-->
<!--            <th>是否为负面舆情</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->
      <div  class="company-badnews common-border">
        <div class="table-head">
          <table>
            <thead>
            <tr>
              <th>来源</th>
              <th>文本</th>
              <th>涉及企业</th>
              <th>是否为负面舆情</th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/lite.js'
import 'echarts-wordcloud'

export default {
  components: {
    IEcharts
  },
  data() {
    return {
      ins: null,
      echarts: null,
      wordcloud: {},
      message: null,
      arr: [],
      arrnum: [],
      infoname: "人人贷",
      introduction: null,
    }
  },
  created() {
    setTimeout(() => {
      this.getMNData();
      this.companyChangeline();
      this.comInfopie();
      this.moveOver();
      this.comInfosec();
      this.exportExcel();
      this.exportPdf();
      this.getKeywords();
    }, 1000)
  },
  methods: {
    getMNData() {
      var badnews = document.querySelector(".table-body");
      var table = badnews.querySelector("table");
      var tbody = table.querySelector("tbody");
      var self = this;
      this.$axios({
        url: "/data/getMNRegData",
        method: "post",
        data: {
          n: 20,
          skip: 0
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
      }).then(function (res) {
        self.textdatas = res.data.data.data;
        for (var i = 0; i < self.textdatas.length; i++) { // 外面的for循环管行 tr

          // 1. 创建 tr行
          var tr = document.createElement('tr');
          tr.style.height = '80px'
          if (i % 2 == 0) {
            tr.style.boxShadow = '-10px 0px 15px #2C58A6 inset,10px 0px 15px #2C58A6 inset';
            tr.style.backgroundColor = '#072951';
          }
          tbody.appendChild(tr);
          for (var j = 0; j < 4; j++) {
            var td = document.createElement('td');
            td.style.fontSize = '25px'
            if (j == 0) {
              td.style.width = '10%'
              td.style.textAlign='center'
              td.innerHTML = '<a href="' + self.textdatas[i].scheme + '">' + self.textdatas[i].source + '</a>';
              td.querySelector("a").style.color = 'white';
              td.querySelector("a").style.textDecoration = 'none';
              tr.appendChild(td);
            } else if (j == 1) {
              td.style.width = '50%'
              td.innerHTML = self.textdatas[i].rawText.substring(0, 30) + '...';
              tr.appendChild(td);
            } else if (j == 2) {
              td.style.width = '20%'
              td.style.textAlign='center'
              td.innerHTML = self.textdatas[i].entity.substring(0, 8);
              tr.appendChild(td);
            } else if (j == 3) {
              td.style.width = '20%'
              td.style.textAlign='center'
              if (self.textdatas[i].reg == true) {
                td.innerHTML = '是'
                td.style.color = 'red';
                td.style.fontWeight = '700';
              } else {
                td.innerHTML = '否'
              }
              tr.appendChild(td);
            }
          }
        }
      })
    },
    companyChangeline() {
      var chartDom = document.getElementById('companyline');
      var myChart = this.$echarts.init(chartDom, 'dark');
      var option;
      // Generate data
      let category = [];
      let dottedBase = +new Date();
      let lineData = [];
      let barData = [];
      for (let i = 0; i < 20; i++) {
        let date = new Date((dottedBase += 3600 * 24 * 1000));
        category.push(
            [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        );
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b);
        lineData.push(d + b);
      }
      setTimeout(() => {
        // option
        option = {
          // backgroundColor: '#0f375f',
          backgroundColor: 'transparent',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['line', 'bar'],
            textStyle: {
              color: '#ccc'
            }
          },
          xAxis: {
            data: category,
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          yAxis: {
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          series: [
            {
              name: 'line',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 15,
              data: lineData
            },
            {
              name: 'bar',
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                borderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: '#14c8d4'},
                  {offset: 1, color: '#43eec6'}
                ])
              },
              data: barData
            },
            {
              name: 'line',
              type: 'bar',
              barGap: '-100%',
              barWidth: 10,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: 'rgba(20,200,212,0.5)'},
                  {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                  {offset: 1, color: 'rgba(20,200,212,0)'}
                ])
              },
              z: -12,
              data: lineData
            },
            {
              name: 'dotted',
              type: 'pictorialBar',
              symbol: 'rect',
              itemStyle: {
                color: '#0f375f'
              },
              symbolRepeat: true,
              symbolSize: [12, 4],
              symbolMargin: 1,
              z: -10,
              data: lineData
            }
          ]
        };
        option && myChart.setOption(option);

      }, 500)
      window.addEventListener("resize", function () {
        setTimeout(function () {
          myChart.resize();
        }, 500)
      });
    },
    comInfopie() {
      var chartDom = document.getElementById('com_info_pie');
      var myChart = this.$echarts.init(chartDom, 'dark');
      var option;
      setTimeout(() => {
        option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          backgroundColor: "transparent",
          legend: {
            data: [
              'Direct',
              'Marketing',
              'Search Engine',
              'Email',
              'Union Ads',
              'Video Ads',
              'Baidu',
              // "舆情信息占比"
            ]
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              label: {
                position: 'center',
                fontSize: 24
              },
              color: "rgb(42,88,165)",
              labelLine: {
                show: true
              },
              data: [
                {value: 96, name: '舆情信息总量'}
                // { value: 775, name: 'Direct' },
                // { value: 679, name: 'Marketing', selected: true }
              ]
            },
            {
              name: 'Access From',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                length: 30
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 24,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              data: [
                {value: 1048, name: 'Baidu'},
                {value: 335, name: 'Direct'},
                {value: 310, name: 'Email'},
                {value: 234, name: 'Union Ads'},
                {value: 135, name: 'Video Ads'},
              ]
            }
          ]
        };
        option && myChart.setOption(option);
      }, 1000)
      window.addEventListener("resize", function () {
        setTimeout(function () {
          myChart.resize();
        }, 500)
      });
    },
    moveOver() {
      var dynamic = document.querySelector(".dynamic");
      var spans = dynamic.querySelectorAll("span");
      for (var i = 0; i < spans.length; i++) {
        spans[i].addEventListener("mouseover", function () {
          this.style.height = 100 + 'px'
          this.style.whiteSpace = 'normal'
        })
        spans[i].addEventListener("mouseleave", function () {
          this.style.height = 46 + 'px'
          this.style.whiteSpace = 'nowrap'
        })
      }
    },
    comInfosec() {
      var chartDom = document.getElementById('com_info_sec_pie');
      var myChart = this.$echarts.init(chartDom);
      var option;
      setTimeout(() => {
        option = {
          title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                {value: 1048, name: 'Search Engine'},
                {value: 735, name: 'Direct'},
                {value: 580, name: 'Email'},
                {value: 484, name: 'Union Ads'},
                {value: 300, name: 'Video Ads'}
              ],
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

        option && myChart.setOption(option);
      }, 1000)
      window.addEventListener("resize", function () {
        setTimeout(function () {
          myChart.resize();
        }, 500)
      });
    },
    onReady(instance, echarts) {
      var chartDom = document.getElementById('cloud');
      var myChart = this.$echarts.init(chartDom);
      window.addEventListener("resize", function () {
        setTimeout(function () {
          myChart.resize();
        }, 500)
      })
      const that = this
      that.ins = instance
      that.echarts = echarts
      that.wordcloud = {
        tooltip: {},
        series: [
          {
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [50, 80],
            rotationRange: [-90, 90],
            shape: 'pentagon',
            width: 600,
            height: 400,
            drawOutOfBound: true,
            textStyle: {
              normal: {
                color: function () {
                  return (
                      'rgb(' +
                      [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                      ].join(',') +
                      ')'
                  )
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: [
              {
                name: this.arr[0],
                value: this.arrnum[0],
                textStyle: {
                  normal: {
                    color: 'black'
                  },
                  emphasis: {
                    color: 'red'
                  }
                }
              },
              {
                name: this.arr[1],
                value: this.arrnum[1]
              },
              {
                name: this.arr[2],
                value: this.arrnum[2]
              },
              {
                name: this.arr[3],
                value: this.arrnum[3]
              },
              {
                name: this.arr[4],
                value: this.arrnum[4]
              },
              {
                name: this.arr[5],
                value: this.arrnum[5]
              },
              {
                name: this.arr[6],
                value: this.arrnum[6]
              },
              {
                name: this.arr[7],
                value: this.arrnum[7]
              },
              {
                name: this.arr[8],
                value: this.arrnum[8]
              },
              {
                name: this.arr[9],
                value: this.arrnum[9]
              },
              {
                name: this.arr[10],
                value: this.arrnum[10]
              },
              {
                name: this.arr[11],
                value: this.arrnum[11]
              },
              {
                name: this.arr[12],
                value: this.arrnum[12]
              },
              {
                name: this.arr[13],
                value: this.arrnum[13]
              },
              {
                name: this.arr[14],
                value: this.arrnum[14]
              },
              {
                name: this.arr[15],
                value: this.arrnum[15]
              },
              {
                name: this.arr[16],
                value: this.arrnum[16]
              },
              {
                name: this.arr[17],
                value: this.arrnum[17]
              },
              {
                name: this.arr[18],
                value: this.arrnum[18]
              },
              {
                name: this.arr[19],
                value: this.arrnum[19]
              }
            ]
          }
        ]
      }
    },
    exportExcel() {
      var button = document.querySelector(".export-excel");
      button.addEventListener('click', () => {
        // window.layer.msg()
        if (this.message !== null && this.message.trim() !== '') {
          this.$axios({
            url: "/file/downloadExcel",
            method: "post",
            data: {
              "entity": this.infoname,
              "num": 10
            },
            headers: {
              'Content-Type': 'application/json'
            },
            responseType: 'blob',//设置返回类型
          }).then(res => {
            console.log(res)
            let result = res.data;
            let blob = new Blob([result], {type: "application/vnd.ms-excel"});
            let url = window.URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.download = this.infoname + "舆情分析导出表" + ".xlsx";
            link.href = url;
            link.click();
          })
        }
      })
    },
    exportPdf() {
      var button = document.querySelector(".export-pdf");
      button.addEventListener('click', () => {
        // window.layer.msg()
        if (this.message !== null && this.message.trim() !== '') {
          this.$axios({
            url: "/file/downloadPdf",
            method: "post",
            data: {
              "entity": this.infoname,
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
            responseType: 'blob',//设置返回类型
          }).then(res => {
            console.log(res)
            let result = res.data;
            let blob = new Blob([result], {type: "application/json"});
            let url = window.URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.download = this.infoname + "舆情分析导出表" + ".pdf";
            // link.download =  "analysis.pdf";
            link.href = url;
            link.click();

          })
        }
      })
    },
    getKeywords() {
      this.$axios({
        url: "/articleKw/getNKwByEntity",
        method: "post",
        data: {
          n: 20,
          entity: this.infoname
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
      }).then(res => {
        for (var i = 0; i < res.data.data.data.length; i++) {
          this.arr.push(res.data.data.data[i].kw)
          this.arrnum.push(res.data.data.data[i].count)
          if (i == res.data.data.data.length - 1) {
            this.onReady();
          }
        }
      })
    },
    submit() {
      this.$axios({
        url: "/company/like",
        method: "post",
        data: {
          entity: this.message
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
      }).then(res => {
        this.infoname = res.data.data.data[0]
      })
      setTimeout(()=>{

        this.$axios({
          url: "/company/getCompanyInfoByName",
          method: "post",
          data: {
            name: this.message
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
        }).then(res => {
         this.introduction=res.data.data.data
        })
      },1000)
    },
  }
}
</script>
<style scoped lang="less">
//table {
//  position: absolute;
//  width: 60%;
//  height: 700px;
//  font-size: 35px;
//  text-align: center;
//  overflow: hidden;
//  margin-left:20%;
//  border: 3px solid #2C58A6;
//  border-radius: 10px;
//  box-shadow: 0px 0px 15px 5px #2C58A6 inset;
//  background: linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat,
//  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat,
//  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat,
//  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat,
//  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat,
//  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat,
//  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat,
//  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat!important;
//  background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px !important;
//  thead, tfoot {
//    color: #61d2f7;
//    width: 100%;
//    height: 8%;
//    font-weight: 700;
//  }
//
//  tbody {
//    width: 100%;
//    height: 90%;
//
//    tr:nth-child(2n+1) {
//      box-shadow: -10px 0px 15px #2C58A6 inset, /*左边阴影*/ 10px 0px 15px #2C58A6 inset;
//      background-color: #072951;
//    }
//  }
//}
.company-badnews{
  position: relative;
  transform: translateX(-50%);
  left:50%;
  width:60%!important;
}
.table-head {
  padding-right: 17px;
  background-color: transparent;
  color: #61d2f7;
  height: 10%;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  table{
    height: 100%;
  }

}

.table-body {
  width: 100%;
  overflow-y: scroll;
  height: 90%;
}

.table-body tr {
  height: 100px;
  font-size: 20px;
  text-align: center;
}
.table-body table tr td:nth-child(1),.table-head table tr th:nth-child(1){
  width:10%;
}
.table-body table tr td:nth-child(2),.table-head table tr th:nth-child(2){
  width:50%;
}
.table-body table tr td:nth-child(3),.table-head table tr th:nth-child(3){
  width:20%;
}
.table-body table tr td:nth-child(4),.table-head table tr th:nth-child(4){
  width:20%;
}
.table-head table,
.table-body table {
  width: 100%;
}

.table-body table tr:nth-child(2n+1) {
  box-shadow: -10px 0px 15px #2C58A6 inset, /*左边阴影*/ 10px 0px 15px #2C58A6 inset;
      background-color: #072951;
}

::-webkit-scrollbar {
  background-color: #e4e4e4;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 6px;
}

@keyframes star-fall {
  0% {
    opacity: 0;
    transform: scale(0.5) translate3d(0, 0, 0);
    -webkit-transform: scale(0.5) translate3d(0, 0, 0);
    -moz-transform: scale(0.5) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-200px, 200px, 0);
    -webkit-transform: translate3d(-200px, 200px, 0);
    -moz-transform: translate3d(-200px, 200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1.2) translate3d(-300px, 300px, 0);
    -webkit-transform: scale(1.2) translate3d(-300px, 300px, 0);
    -moz-transform: scale(1.2) translate3d(-300px, 300px, 0);
  }
}

.analysis-banner {
  //height: 2000px;
  width: 100%;
  position: relative;
  background-image: linear-gradient(to top, #1A0F2F 20%, rgb(12, 26, 44) 80%);
  color: white;
}

.platform-title {
  background: url('http://10.16.69.5/img/title.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 80px;
  color: white;
  font-size: 35px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 40px;
}

.common-border {
  margin-right: 100px;
  float: left;
  width: 40%;
  height: 600px;
  border: 3px solid #2C58A6;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 5px #2C58A6 inset;
  background: linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat,
  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left top no-repeat,
  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat,
  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) right top no-repeat,
  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat,
  linear-gradient(to bottom, rgb(60, 255, 253), rgb(60, 255, 253)) left bottom no-repeat,
  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat,
  linear-gradient(to left, rgb(60, 255, 253), rgb(60, 255, 253)) right bottom no-repeat!important;
  background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px !important;
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1)
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55)
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1)
  }
}

@keyframes mymove1 {
  from {
    top: 60%;
  }
  to {
    top: 50%;
  }
}

@keyframes mymove2 {
  from {
    top: 40%;
  }
  to {
    top: 30%;
  }
}

@keyframes mymove3 {
  from {
    top: 30%;
  }
  to {
    top: 20%;
  }
}

.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: 0;
}

.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
}

.bgTop {
  z-index: 15;
  opacity: 0.5;
}

.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}

.bgBottom {
  z-index: 5;
}

.wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  height: 10%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}

.waveTop {
  background-size: 50% 100px;
}

.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.waveMiddle {
  background-size: 50% 120px;
}

.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}

.waveBottom {
  background-size: 50% 100px;
}

.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}

.title-analysis {
  padding: 10px 0 0 10px;
  width: 100%;
  height: 160px;
  position: relative;

  > span {
    font-size: 20px;
    display: block;
    margin-bottom: 20px;
  }

  input {
    width: 20%;
    height: 60px;
    margin-left: 20px;
    outline: none;
    border: 0;
    background-color: #091121;
    font-size: 25px;
    padding-left: 60px;
    color: white;
  }

  button {
    margin-left: 40px;
    width: 8.5%;
    height: 60px;
    background-color: rgb(42 242 112);
    line-height: 60px;
    text-align: center;
    vertical-align: bottom;
    font-size: 25px;
    color: #212529;
    padding-left: 20px;
  }

  .icon-sousuo {
    position: absolute;
    top: 80px;
    left: 38px;
    float: left;
    color: #17E051;
    font-size: 35px;
  }

  .export {
    position: absolute;
    top: 80px;
    left: 23.5%;
    float: left;
    color: #212529;
    font-size: 35px;
  }
}

.info {
  width: 100%;
  height: 130px;
  font-size: 30px;
  padding: 30px 0 0 30px;
}

.info-outcome {
  width: 100%;
  height: 200px;
  padding: 30px 0 0 30px;

  span {
    margin-bottom: 10px;
    display: block;
    font-size: 25px;
  }
}

.company-dynamic-info {
  width: 100%;
  height: 700px;

  span {
    width: 170px;
    height: 46px;
    display: block;
    position: relative;
    float: left;
    background: url(../../img/text-backgound.png) no-repeat;
    background-size: 100% 100%;
    font-size: 18px;
    text-align: center;
    color: #1A0F2F;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 24px;
    padding-top: 10px;
  }

  img {
    float: left;
    position: relative;
  }

  .first-img {
    animation: mymove1 1s infinite alternate;
    left: 6%;
    top: 60%;
  }

  .first-span {
    left: 7%;
    top: 55%;
  }

  .second-img {
    animation: mymove2 1s infinite alternate;
    left: 12%;
    top: 40%;
  }

  .second-span {
    left: 13%;
    top: 35%;
    color: white;
  }

  .third-img {
    animation: mymove3 1s infinite alternate;
    left: 18%;
    top: 30%;
  }

  .third-span {
    left: 19%;
    top: 25%;
    color: white;
  }

  .forth-img {
    animation: mymove1 1s infinite alternate;
    left: 24%;
    top: 60%;
  }

  .forth-span {
    left: 25%;
    top: 55%;
  }

  .fifth-img {
    animation: mymove2 1s infinite alternate;
    left: 30%;
    top: 40%;
  }

  .fifth-span {
    left: 31%;
    top: 35%;
    color: white;
  }

  .sixth-img {
    animation: mymove3 1s infinite alternate;
    left: 36%;
    top: 30%;
  }

  .sixth-span {
    left: 37%;
    top: 25%;
    color: white;
  }

}

</style>
