<template>
  <div class="register">
    <div class="header">
      <a href="javascript:"><img src="http://127.0.0.1:8002/loginpic/tmall.png" alt=""/></a>
    </div>
    <div class="main">
      <a href="javascript:"><img src="http://127.0.0.1:8002/loginpic/tmall_main.png" alt=""/></a>
      <div class="login-box">
        <span class="pas"><a href="javascript:">用户注册</a></span>
        <div class="scan">扫码登录更安全</div>
        <div class="down"></div>
        <div class="hold"></div>
        <span class="er_code">
          <a href="javascript:"><img src="http://127.0.0.1:8002/loginpic/二维码.png" alt=""/></a>
        </span>
        <div class="passenter reg-box">
          <form class="layui-form" id="form_register" method="post">
            <div class="layui-form-item username">
              <label class="layui-form-label"><img
                  src="http://127.0.0.1:8002/loginpic/用户.png"
                  alt=""></label>
              <div class="layui-input-block">
                <input
                    v-model="username"
                    type="text"
                    name="username"
                    required
                    lay-verify="required"
                    placeholder="请输入用户名"
                    autocomplete="off"
                    class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item password">
              <label class="layui-form-label"><img
                  src="http://127.0.0.1:8002/loginpic/密码.png" alt=""></label>
              <div class="layui-input-inline">
                <input
                    v-model="password"
                    type="password"
                    name="password"
                    required
                    lay-verify="required|pwd"
                    placeholder="请输入登录密码"
                    autocomplete="off"
                    class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item repassword">
              <label class="layui-form-label"><img
                  src="http://127.0.0.1:8002/loginpic/密码.png" alt=""></label>
              <div class="layui-input-inline">
                <input
                    v-model="repassword"
                    type="password"
                    name="repassword"
                    required
                    lay-verify="required|pwd|repwd"
                    placeholder="请确认登录密码"
                    autocomplete="off"
                    class="layui-input"
                />
              </div>
            </div>
            <div class="layui-form-item btn_register">
              <!-- 注意：表单提交按钮和普通按钮的区别，就是 lay-submit 属性 -->
              <button class="layui-btn layui-btn-fluid layui-btn-normal" lay-submit
                      lay-filter="registerbtn">注册
              </button>
            </div>
            <span class="btn_login"><a href="/login">登录</a></span>
            <span><a href="/updatename">更新用户名</a></span>
            <span><a href="/updatepwd">更新密码</a></span>
          </form>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="about">
        <div style="height: 100%; width: 100%">
          <span style="display:inline-block;float:left"><a href="javascript:">关于天猫</a></span>
          <span><a href="javascript:">商家服务大厅</a></span>
          <span><a href="javascript:">开放平台</a></span>
          <span><a href="javascript:">诚聘英才</a></span>
          <span><a href="javascript:">联系我们</a></span>
          <span><a href="javascript:">网站合作</a></span>
          <span><a href="javascript:">法律声明</a></span>
          <span><a href="javascript:">隐私权政策</a></span>
          <span><a href="javascript:">知识产权</a></span>
          <span><a href="javascript:">廉政举报</a></span>
          <span><a href="javascript:">不当竞争举报</a></span>
        </div>
      </div>

      <div class="inf">
        <div style="height: 100%; width: 100%;">
          <a href="javascript:">阿里巴巴集团 </a>|
          <a href="javascript:"> 淘宝网 </a>|<a href="javascript:"> 天猫 </a>|
          <a href="javascript:"> 聚划算 </a>|<a href="javascript:">
          全球速卖通 </a
        >| <a href="javascript:"> 阿里巴巴国际市场交易 </a
        ><a href="javascript:"> 1688 </a>|
          <a href="javascript:"> 阿里妈妈 </a>|
          <a href="javascript:"> 飞猪 </a>
          |<a href="javascript:"> 阿里云计算 </a> |<a href="javascript:">
          Alios
        </a>
          |<a href="javascript:"> 阿里通信 </a> |<a href="javascript:">
          万网
        </a>
          |<a href="javascript:"> 高德 </a> |<a href="javascript:"> UC </a>
          |<a href="javascript:"> 友盟 </a> |<a href="javascript:"> 虾米 </a>
          |<a href="javascript:"> 钉钉 </a> |<a href="javascript:">
          支付宝
        </a>
          |<a href="javascript:"> 阿里安全 </a>
        </div>
      </div>
      <div class="tel">
        <span
        ><a href="javascript:"
        >增值电信业务经营许可证：浙B2-20110446</a
        ></span
        >
        <span style="padding-right: 65px"
        >市场名称登记证：工商网市字3301004119号</span
        >
        <span>出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</span>
        <br/>
        <span style="padding-right: 65px"
        >互联网违法和不良信息举报电话：0571-81683755
          blxxjb@alibaba-inc.com</span
        >
        <span
        >互联网药品信息服务资质证书编号：<a href="javascript:">
            浙-（经营性）-2017-0005</a
        ></span
        >
        <span>
          <img src="http://127.0.0.1:8002/loginpic/police.png" alt=""/>
          <a href="javascript:">浙公网安备 33010002000120号</a></span
        >
        <br/>
        <span style="padding-right: 500px"
        >医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span
        >

        <span style="padding-right: 100px"
        >浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span
        >

        <span><a href="javascript:">12318举报</a></span>
        <span style="padding-right: 300px"
        ><a href="javascript:">浙B2-20110446-1</a></span
        >
        <span style="color: #686868">© 2003-现在 TMALL.COM 版权所有</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      status: "",//保存相关数据
      message: "",
      username: "",
      password: "",
      repassword: ""
    };
  },
  created() {
    var self = this;
    window.layui.use(['jquery', 'layer'], function () {
      var $ = window.layui.$;
      var form = window.layui.form;
      $('#form_register').on('submit', function (e) {
        e.preventDefault()
        return false
      });
      form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
          // 校验两次密码是否一致的规则
          // 通过形参拿到的是确认密码框中的内容
          // 还需要拿到密码框中的内容
          // 然后进行一次等于的判断
          // 如果判断失败,则return一个提示消息即可
          var pwd = $('.reg-box [name=password]').val()
          if (pwd !== value) {
            return "两次密码不一致"
          }
        }
      })
      form.on('submit(registerbtn)', function () {
            if (self.username.trim() != '' && self.password.length > 5 && self.password.length < 13 && self.password === self.repassword) {
              self.$axios({
                url: "/api/reguser",
                method: "post",
                data: {
                  username: self.username.trim(),
                  password: self.password
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
                    self.status = res.data.status
                    self.message = res.data.message
                    if (res.data.status === 0) {
                      setTimeout(function () {
                        window.layer.msg("恭喜你，注册成功!")
                        location.href = '/login'
                      }, 2000)
                    } else {
                      setTimeout(function () {
                        window.layer.msg("您的用户名已经被占用!请重新输入")
                      }, 2000)
                    }
                  }
              )
            }
          }
      )
    })
  }
};
</script>
<style>
html {
  height: 923px !important;
}
</style>
<style scoped lang="less">
.register {
  width: 100%;
  height: 923px;
  margin: 0 auto;
  overflow: hidden;

  .header {
    width: 1190px;
    height: 88px;
    margin: 0 auto;

    a {
      width: 190px;
      height: 27px;
      display: inline-block;
      line-height: 88px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .main {
    width: 100%;
    height: 600px;
    background-color: rgb(221, 39, 38);
    margin-bottom: 40px;

    img {
      margin: auto;
      display: block;
    }

    .login-box {
      width: 350px;
      min-height: 400px;
      padding: 25px 25px 23px;
      color: #6c6c6c;
      background: #fff;
      float: left;
      left: 1220px;
      top: -510px;
      position: relative;
      margin: 0 auto;

      .pas {
        border-bottom: 2px solid #000;
        line-height: 18px;
        height: 30px;
      }

      //.mes {
      //  line-height: 18px;
      //  height: 30px;
      //}

      .scan {
        height: 30px;
        width: 100px;
        line-height: 30px;
        border: 1px solid #f3d995;
        background: #fefcee;
        color: #ff9000;
        font-size: 12px;
        font-weight: 400;
        padding-left: 10px;
        margin-left: 150px;
        float: right;
        position: relative;
        left: -35px;
        top: -50px;
        z-index: 10;
      }

      .down {
        width: 0;
        height: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-width: 11px;
        border-style: solid dashed dashed solid;
        border-color: transparent transparent transparent #faf3e1;
        float: left;
        position: relative;
        left: 262px;
        top: -45px;
        z-index: 19;
      }

      .hold {
        width: 0;
        height: 0;
        overflow: hidden;
        float: left;
        position: relative;
        font-size: 0; /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
        line-height: 0; /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
        border-width: 0 52px 52px 0;
        border-style: solid;
        border-color: transparent transparent white transparent;
        left: 268px;
        top: -80px;
        z-index: 9;
      }

      .er_code {
        position: relative;
        float: left;
        width: 52px;
        height: 52px;
        left: 216px;
        top: -90px;

        a {
          display: inline-block
        }
      }

      span {
        font-size: 16px;
        height: 18px;
        color: #3c3c3c;
        font-weight: 700;
        margin-top: 10px;
        margin-right: 10px;
        display: inline-block;
      }

      .passenter {
        width: 300px;
        height: 200px;
        margin-top: 20px;
        float: left;
        position: relative;
        top: -90px;

        form {
          width: 100%;
          height: 100%;

          .username {
            float: left;
            height: 40px;

            label {
              height: 40px;
              width: 40px;
              background-color: #CCCCCC;
              float: left;
              top: 0;

              img {
                float: left;
                left: 8px;
                top: 5px;
                position: absolute;
              }
            }

            div {
              width: 250px;
              height: 42px;
              float: left;
              left: -19.5%;
              top: -40px;

              input {
                border-left: 0;
                height: 40px;
                font-size: 16px;
              }
            }
          }

          .password {
            margin-top: -40px;

            label {
              height: 40px;
              width: 40px;
              background-color: #CCCCCC;
              float: left;
              top: 0;

              img {
                float: left;
                left: 8px;
                top: 5px;
                position: absolute
              }
            }

            div {
              width: 250px;
              height: 42px;

              input {
                font-size: 16px;
              }
            }
          }

          .repassword {
            margin-top: 0;

            label {
              height: 40px;
              width: 40px;
              background-color: #CCCCCC;
              float: left;
              top: 0;

              img {
                float: left;
                left: 8px;
                top: 5px;
                position: absolute
              }
            }

            div {
              width: 250px;
              height: 42px;

              input {
                font-size: 16px;
              }
            }
          }

          .btn_register {
            button {
              width: 300px;
              height: 42px;
              background-color: #FF0036
            }
          }

          .btn_login {
            margin-left: 138px;
          }

          .layui-btn {
            height: 42px;
          }

          span a {
            color: #6c6c6c;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.bottom {
  a:hover {
    text-decoration: underline !important;
  }

  text-align: left;
  min-height: 200px;

  .tel {
    width: 1190px;
    margin: 0 auto;
    height: 105px;

    span {
      float: left;
      top: -130px;
      color: #a4a4a4;
      padding-bottom: 5px;

      a {
        color: #a4a4a4;
        margin-right: 65px;
        line-height: 16px;
      }
    }
  }

  .inf {
    width: 1190px;
    margin: 0 auto;
    height: 35px;

    div {
      top: -130px;
      left: 0;
      color: #ffffff;

      a {
        color: #000000;
        padding-right: 3px;
        line-height: 35px;
      }
    }
  }

  .about {
    width: 1190px;
    margin: 0 auto;
    height: 35px;

    div {
      top: -130px;
      left: 0;

      span {
        padding-right: 10px;
        float: left;
        position: relative;

        a {
          color: #000000;
          line-height: 35px;
        }
      }
    }
  }
}

.messageenter span a {
  color: #6c6c6c;
  font-size: 12px;
}
</style>
