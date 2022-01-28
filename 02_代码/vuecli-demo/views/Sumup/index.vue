<template>
  <div class="info-sumup">
    <div class="title">
      <span>信息汇总</span>
      <span class="iconfont icon-sousuo"></span>
      <input type="text" placeholder="人人贷">
      <button class="export-excel">导出</button>
      <span class="iconfont icon-jurassic_export-form export export-iconfont"></span>
    </div>
    <div class="checkbox">

        <form>
          <div>情感</div>
          <div>
            <label>
              <input type="radio" name="emotion" checked>正面
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="emotion">负面
            </label>
          </div>
          <div style="margin-top: 30px;border-top: 2px solid rgba(42, 242, 112, 0.2)">来源</div>
          <div>
            <label>
              <input type="checkbox" >微博
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" >新浪
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" >网贷天眼
            </label>
          </div>
          <button type="submit" style="background-color: rgba(42, 242, 112)">提交</button>
          <button type="reset" style="background-color: transparent;color: rgb(106, 208, 237);border: 2px solid rgb(106, 208, 237)">重置</button>
        </form>

    </div>
    <div class="rightinfo">
      <table>
        <tbody>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span>
              负面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
           微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span class="frontage">
              正面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
            微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span>
              负面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
            微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span>
              负面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
            微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span>
              负面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
            微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <span>
              负面
            </span>
          </td>
          <td>
            这是一段很奇怪的测试用例这是一段很奇怪的测试用例这是一段很奇怪的测
          </td>
          <td>
            微博
          </td>
          <td>
            2020-12-02
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    var self = this;
    window.layui.use(['jquery', 'layer'], function () {
      var $ = window.layui.$;
      var form = window.layui.form;
      window.layer.msg("你好呀")
      $('#form_updatepwd').on('submit', function (e) {
        e.preventDefault()
        return false
      });
    })
  }
};
</script>
<style scoped lang="less">
.info-sumup{
  position:relative;
  background: linear-gradient(to bottom, #010015 0%, #01001f 50%, #010015 100%);
}
.title{
  height: 15%;
  border-bottom: 2px solid rgba(42, 242, 112,0.2);
  span{
    display: block;
    font-size: 20px;
    color:white;
    padding:20px 0 0 20px;
  }
  .icon-sousuo {
    position: absolute;
    top: 60px;
    left: 15px;
    float: left;
    color: #17E051;
    font-size: 25px;
  }
  input{
    display: inline-block;
    width:1000px;
    outline: none;
    margin:20px 0 40px 20px;
    height:60px;
    font-size: 20px;
    color:white;
    background-color: rgba(255, 255, 255, 0.05);
    border: 0;
    padding:0 0 0 50px;
    line-height: 40px;
  }
  button {
    display: inline-block;
    margin: 20px 0 40px 20px;
    width: 200px;
    height: 60px;
    background-color: rgb(42 242 112);
    line-height: 60px;
    text-align: center;
    vertical-align: bottom;
    font-size: 25px;
    color: #212529;
    padding-left: 20px;
  }
  .export-iconfont{
    position: absolute;
    top: 60px;
    left: 1070px;
    float: left;
    color: #212529;
    font-size: 35px;
  }
}
.checkbox{
  width:350px;
  height:1327px;
  font-size: 20px;
  color:rgb(106, 208, 237);
  border-right: 2px solid rgba(42, 242, 112, 0.2);
  display: inline-block;
div{
  margin-bottom: 20px;
  height: 30px;
  width: 100%;
}
  input{
    display: inline-block;
  }

  button{
    display: block;
  }
}
 form{
  padding:20px 0 0 20px;
  button{
    width:300px;
    height: 50px;
    margin-top:20px;
  }
}
.rightinfo{
  height:1327px;
  display: inline-block;
  font-size: 20px;
  color: #6ad0ed;
  position:absolute;
  table{
    width:100%;
    height:80%;
    tr{
      border-bottom:1px solid rgba(42, 242, 112,0.2) ;
      td:nth-child(1){
        width:6%;
      }
      td:nth-child(2){
        span{
          display: inline-block;
          width:150px;
          height: 60px;
          background-color: transparent;
          text-align: center;
          line-height: 60px;
          border-radius: 60px;
          border: 2px solid red;
          color:red;
        }
        width:6%;
      }
      td:nth-child(3){
        width:30%;
        padding-right:50px ;
      }
      td:nth-child(4){
        width:6%;
      }
      td:nth-child(5){
        width:6%;
      }
    }
  }
}
.rightinfo .frontage{
  border: 2px solid green!important;
  color:green!important;
}
</style>
