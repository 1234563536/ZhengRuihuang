// 路由-相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Analysis from '../views/Analysis'
import Home from '../views/Home'
import Index from '../views/Index'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Register from '../views/Register'
import Sumup from '../views/Sumup'
import Warn from '../views/Warn'
//下载vue-router,引入，vue.use注册，准备规则数组，数组内部配置对象，一个路径对应一个组件，用这个数组生成路由对象router,把router注入到vue实例中，准备一个router vue的挂载显示的点
Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/home',
    component: Home
},
    {
        path: '/login',
        component: Login
    },  {
        path: '/register',
        component: Register
    }, {
        path: '/home',
        component: Home,
        redirect: '/home/index',
        children: [{
            path: 'index',
            component: Index,
        },
            {
                path: 'analysis',
                component: Analysis,
            },
            {
                path: 'sumup',
                component: Sumup,
            },   {
                path: 'warn',
                component: Warn,
            }

        ]
    },
    // 404在最后(规则是从前往后逐个比较path)
    {
        path: "*",
        component: NotFound
    }

]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router
