import Vue from 'vue'
import App from './App.vue'
import global from '@/components/Global'
import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import "@/styles/icon.css"
import router from '@/router' // 路由对象

import {Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search, List, Button} from 'vant';

Vue.use(List);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Button);
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
// router.beforeEach((to, from, next) => {
//     if (to.path === "/home" && global.isLogin === false) {
//         window.layui.msg("你还未登录，请重新登录!")
//         // next(false) // 阻止路由跳转
//         next()
//     } else {
//         next() // 正常放行
//     }
// })

import axios from 'axios'
// 2. 基础地址
axios.defaults.baseURL = "http://127.0.0.1:3007"
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
