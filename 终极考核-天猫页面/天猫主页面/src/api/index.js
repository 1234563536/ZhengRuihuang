// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出
import {registerUser, loginUser} from './Home'
export const registerUserAPI = registerUser
export const loginUserAPI = loginUser