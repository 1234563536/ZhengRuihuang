<template>
  <div class="goods_list">
    <div class="header"><h2><a :name="title">{{ title }}</a></h2></div>
    <div class="content">
      <div class="left_info" :style="{backgroundColor:background}">
        <div style="padding-left:20px;padding-top:30px;float: left;height: 100%;width:100%">
          <a href="javascript:" v-for="(Obj,id) in arr_intro" :key="id" @mouseover="pass(Obj,id)" @mouseleave="leave"
             :style="{backgroundColor:(id===setId?background:'')}">
            <span>{{ Obj.message }}</span>
          </a>
        </div>
      </div>
      <div class="goods">
        <a href="javascript:" v-for="(obj,id) in arr" :key="id">
          <div>
            <img :src="obj.url" alt=""/>
            <h3>{{ obj.h3 }}</h3>
            <p class="intro">{{ obj.p }}</p>
            <span class="price">
              <i>¥</i>
              <p>{{ obj.price }}</p></span>
            <button @click="obj.count>0&&obj.state==true?addgood(obj):none()">
              <img alt="" src="http://127.0.0.1:8002/assets/购物车.png" v-if="obj.count>0">
              <img src="http://127.0.0.1:8002/assets/购物车无.png" alt="" v-else>
            </button>
            <i class="product-mask" :style="{display:(obj.count>0?'none':'' )}"></i>
          </div>
        </a>
      </div>
      <div class="right_logo">
        <img src="http://127.0.0.1:8002/assets/youhui.png" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../EventBus'

export default {
  props: {
    arr: {
      type: Array,
      required: true,
      // validator(value) {
      //   if (value.length >= 2) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
    },
    arr_intro: {
      type: Array,
      required: true
    },
    background: String,
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      setId: -1,
    };
  },
  created() {
    eventBus.$on("deletegood", (id) => {
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].id === id) {
          this.arr[i].state = true;
          break;
        }
      }
    });
  },
  methods: {
    pass(Obj, id) {
      this.setId = id;
    },
    leave() {
      this.setId = -1;
    },
    addgood(obj) {
      if (this.GLOBAL.isLogin === 'true') {
        obj.state = false;
        eventBus.$emit('purchase', obj.id)//跨组件
      }
    },
    none() {
      return
    },
  }
}
;
</script>

<style scoped lang="less">
.goods_list {
  width: 1190px;
  margin: 0 auto;
  height: 600px;

  .header {
    width: 100%;
    height: 40px;
    padding: 5px 0 5px 5px;

    h2 {
      float: left;
      position: absolute;
      color: #2f2f2f;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .content {
    border-top: 2px solid #000;
    width: 100%;
    height: 560px;
    position: relative;

    .left_info {
      width: 240px;
      height: 260px;
      float: left;
      position: relative;
      left: -940px;
      top: -162px;
      font-size: 12px;
    }

    .goods {
      width: 800px;
      height: 556px;
      float: left;
      position: relative;
      left: 240px;
      top: -504px;

      .product-mask {
        display: block;
        position: relative;
        z-index: 990;
        width: 95px;
        height: 95px;
        background: url("http://127.0.0.1:8002/assets/soldout.png") no-repeat;
        left: 50px;
        top: -170px;
      }

      div {
        height: 278px;
        width: 200px;
        float: left;
        border-left: 1px solid #e7e7e7;
      }

      img {
        margin: 20px;
      }

      h3 {
        padding-left: 15px;
        margin-top: -10px;
        font-weight: 700;
        font-size: 12px;
      }

      .intro {
        font-size: 12px;
        padding-left: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 3px;
      }

      .price {
        margin-left: 15px;

        p {
          display: inline-block;
          margin-top: 10px;
          color: #2F2F2F;
          font-size: 18px;
          font-weight: 700;
        }

      }
    }

    .right_logo {
      width: 150px;
      height: 30px;
      background-color: purple;
      float: left;
      position: relative;
      left: 240px;
      top: -505px;
    }

    button {
      width: 40px;
      height: 40px;
      float: right;
      position: relative;
      top: 5px;
      left: -20px;
      background-color: white;
      border: none;
      cursor: pointer;

      img {
        margin: 0 !important
      }
    }
  }
}

.left_info a {
  width: 60px;
  height: 60px;
  display: block;
  float: left;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;

  :hover {
    text-decoration: underline;
    color: #fff;
    border: 1px solid #555555;
    border-radius: 50%;
  }

  span {
    width: 100%;
    height: 100%;
    line-height: 60px;
    display: block;
  }
}

</style>
