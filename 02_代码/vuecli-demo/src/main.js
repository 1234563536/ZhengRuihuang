// 项目入口-webpack打包从这开始

import Vue from 'vue' // 引入vue源码
import App from './App.vue' // 引入App.vue文件模块
import "../mobile/flexible" // 适配
import "../styles/reset.css" // 初始化样式
import "../styles/icon.css"
import "../assets/tags.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../iconfont/iconfont.css'
import router from '../router' // 路由对象
// 引入echarts
import echarts from 'echarts'
import axios from 'axios'
import jq from 'jquery';
// 2. 基础地址
axios.defaults.baseURL = "http://114.55.253.244:8001"
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$=jq

Vue.config.productionTip = false // 一个控制台打印的提示

new Vue({ // 实例化Vue(传入配置对象)
        router,
        render: h => h(App), // 告诉vue渲染什么
    }).$mount('#app') // '渲染到哪里
