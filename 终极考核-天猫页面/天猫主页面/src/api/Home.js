// 文件名-尽量和模块页面文件名统一(方便查找)
import request from '../utils/request'
// 登录页面 - 注册接口
export const registerUser = params => request({
    url: '/api/reguser',
    params
    // 将来外面可能传入params的值 {limit: 20}
})

// 登录页面 - 登录接口
export const loginUser = params => request({
    url: "/api/login",
    method:"post",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }],
    params
})