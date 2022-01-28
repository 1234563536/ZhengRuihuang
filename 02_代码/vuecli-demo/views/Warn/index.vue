<template>
<div class="main-start">
  <div class="stars">
    <div class="star" style="top: 200px;left: 1000px;"></div>
    <div class="col-xs-12 panel panel-default">
      <div class="panel-body">
        <div class="col-sm-6">
          <donut-chart id="donut" :data="donutData" colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]' resize="true" ></donut-chart>
        </div>
        <div class="col-sm-6">
              <pre style="border:none;color:white;font-size:20px;">
                <code class="xml">
  &lt;donut-chart
    id="donut"
    :data="donutData"
    colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
    resize="true"&gt;
  &lt;/donut-chart&gt;

  &lt;script&gt;
  new Vue({
    data: {
      donutData: [
        { label: 'Red', value: 300 },
        { label: 'Blue', value: 50 },
        { label: 'Yellow', value: 100 }
      ]
    },
    components: { DonutChart }
  })
  &lt;/script&gt;
                </code>
              </pre>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import { DonutChart, BarChart, LineChart, AreaChart } from 'vue-morris'
export default {
  name: "index",
  data () {
    return {
      donutData: [
        { label: 'Red', value: 300 },
        { label: 'Blue', value: 50 },
        { label: 'Yellow', value: 100 }
      ],

      barData: [
        { year: '2013', and: 10, ios: 5, win: 2 },
        { year: '2014', and: 10, ios: 15, win: 3 },
        { year: '2015', and: 20, ios: 25, win: 2 },
        { year: '2016', and: 30, ios: 20, win: 1 },
      ],

      lineData: [],/*[
        { year: '2013', a: 10, b: 5 },
        { year: '2014', a: 40, b: 15 },
        { year: '2015', a: 20, b: 25 },
        { year: '2016', a: 30, b: 20 },
      ],*/

      areaData: [
        { year: '2013', a: 30, b: 5 },
        { year: '2014', a: 25, b: 15 },
        { year: '2015', a: 29, b: 25 },
        { year: '2016', a: 50, b: 20 },
      ],

      issue24Data: [{
        "id": 8853,
        "company_id": 58,
        "location_id": null,
        "followers": 203,
        "date": "2019-08-04",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
      },
        {
          "id": 8829,
          "company_id": 58,
          "location_id": null,
          "followers": 203,
          "date": "2019-08-03",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
        },
        {
          "id": 8805,
          "company_id": 58,
          "location_id": null,
          "followers": 202,
          "date": "2019-08-02",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
        },
        {
          "id": 8777,
          "company_id": 58,
          "location_id": null,
          "followers": 200,
          "date": "2019-08-01",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null
        }]
    }
  },
  components: {
    DonutChart, BarChart, LineChart, AreaChart
  },

  created() {
    setTimeout(() => {
      var stars = document.querySelector(".stars");
      // js随机生成流星
      for (var j = 0; j < 30; j++) {
        var newStar = document.createElement("div")
        newStar.classList.add("star")
        newStar.style.top = randomDistance(-200, -1000) + 'px'
        newStar.style.left = randomDistance(2000, 500) + 'px'
        stars.appendChild(newStar)
      }

      // 封装随机数方法
      function randomDistance(max, min) {
        var distance = Math.floor(Math.random() * (max - min + 1) + min)
        return distance
      }
      var star = document.getElementsByClassName('star')
      // 给流星添加动画延时
      for (var i = 0, len = star.length; i < len; i++) {
        star[i].style.animationDelay = i % 6 == 0 ? '0s' : i * 0.8 + 's'
      }
    }, 1000)
  },
  mounted () {
    setInterval(() => {
      this.lineData = [
        { year: '2013', a: this.rand(100), b: this.rand(100) },
        { year: '2014', a: this.rand(100), b: this.rand(100) },
        { year: '2015', a: this.rand(100), b: this.rand(100) },
        { year: '2016', a: this.rand(100), b: this.rand(100) },
      ]
    }, 5000)
  },

  methods: {
    rand (limit) {
      return Math.round(Math.random() * limit)
    },

    osColors () {
      console.log('osColors')
      return []
    },

    minMax(objects, field) {
      var result = {};
      return objects.reduce(function(valorAnterior, valorActual, indice, vector) {
        if (indice == 1) {
          result['min'] = valorAnterior;
          result['max'] = valorAnterior;
        }

        valorActual[field] < result['min'][field] ? result['min'] = valorActual : '';
        valorActual[field] > result['max'][field] ? result['max'] = valorActual : '';

        return result;
      });
    },

    prettyFloor(number) {
      var l = Math.floor(Math.log10(Math.abs(number), 10)) - 1;

      if (l <= 0) {
        l++;
      }

      number = number / (Math.pow(10, l));
      number = Math.floor(number);

      if (l > 0) {
        number = number * (Math.pow(10, l));
      }

      return number;
    },

    prettyCeil(number) {
      var l = Math.floor(Math.log10(Math.abs(number), 10)) - 1;

      if (l <= 0) {
        l++;
      }

      number = number / (Math.pow(10, l));
      number = Math.ceil(number);

      if (l > 0) {
        number = number * (Math.pow(10, l));
      }

      return number;
    }
  }
}
</script>

<style>
.main-start{
  background-image: url(https://cdn-a-files-w.yqt365.com/assets/images/index/banner-bg.png);
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #055888;
}
.stars {
  margin: 0 auto;
  width:100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.star {
  display: block;
  width: 1px;
  background: transparent;
  position: relative;
  opacity: 0;
  /*过渡动画*/
  animation: star-fall 3s linear infinite;
  -webkit-animation: star-fall 3s linear infinite;
  -moz-animation: star-fall 3s linear infinite;
}

.star:after {
  content: '';
  display: block;
  border: 0px solid #fff;
  border-width: 0px 90px 2px 90px;
  border-color: transparent transparent transparent rgba(255, 255, 255, .5);
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
  /*变形*/
  transform: rotate(-45deg) translate3d(1px, 3px, 0);
  -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
  -moz-transform: rotate(-45deg) translate3d(1px, 3px, 0);
  transform-origin: 0% 100%;
  -webkit-transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
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
</style>
