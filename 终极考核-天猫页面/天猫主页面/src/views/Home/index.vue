<template>
  <div>
    <Header></Header>
    <Main :arr="all"></Main>
    <Aside></Aside>
    <List :arr="goods" :arr_intro="goods_intro" :background="'#b373fb'" title="进口酒饮粮油"></List>
    <List :arr="drinks" :arr_intro="drinks_intro" :background="'#83cfff'" title="酒水饮料" class="drink"
    ></List>
    <List :arr="rice" :arr_intro="rice_intro" :background="'#ffbb00'" title="米面杂粮" class="noodle"
    ></List>
    <List :arr="oil" :arr_intro="oil_intro" :background="'#f4935f'" title="油品调味" class="seasoned"
    ></List>
    <List :arr="beautify" :arr_intro="beautify_intro" :background="'#ff909f'" title="美容护肤" class="face_clean"
    ></List>
    <Footer></Footer>
    <Bottom></Bottom>
  </div>

</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import List from '@/components/List'
import Footer from '@/components/Footer'
import Bottom from '@/components/Bottom'
import Aside from '@/components/Aside'

export default {
  data() {
    return {
      all: [],
      goods: [],
      goods_intro: [],
      drinks: [],
      drinks_intro: [],
      rice: [],
      rice_intro: [],
      oil: [],
      oil_intro: [],
      beautify: [],
      beautify_intro: [],
    };
  },
  components: {
    Header,
    Main,
    List,
    Footer,
    Bottom,
    Aside
  },
  created() {
    const self = this;
    const baseurl = "http://127.0.0.1:8000/api";
    this.$axios({
          url: baseurl + "/goods",
          method: "GET",
        }
    ).then(function (res) {
      self.goods = res.data;
    })
    this.$axios({
          url: baseurl + "/goods_intro",
          method: "GET",
        }
    ).then(function (res) {
      self.goods_intro = res.data;
    })
    this.$axios({
          url: baseurl + "/drinks",
          method: "GET",
        }
    ).then(function (res) {
      self.drinks = res.data;
    })
    this.$axios({
          url: baseurl + "/drinks_intro",
          method: "GET",
        }
    ).then(function (res) {
      self.drinks_intro = res.data;
    })
    this.$axios({
          url: baseurl + "/rice",
          method: "GET",
        }
    ).then(function (res) {
      self.rice = res.data;
    })
    this.$axios({
          url: baseurl + "/rice_intro",
          method: "GET",
        }
    ).then(function (res) {
      self.rice_intro = res.data;
    })
    this.$axios({
          url: baseurl + "/goods",
          method: "GET",
        }
    ).then(function (res) {
      self.goods = res.data;
    })
    this.$axios({
          url: baseurl + "/oil",
          method: "GET",
        }
    ).then(function (res) {
      self.oil = res.data;
    })
    this.$axios({
          url: baseurl + "/oil_intro",
          method: "GET",
        }
    ).then(function (res) {
      self.oil_intro = res.data;
    })
    this.$axios({
          url: baseurl + "/beautify",
          method: "GET",
        }
    ).then(function (res) {
      self.beautify = res.data;
    })
    this.$axios({
          url: baseurl + "/beautify_intro",
          method: "GET",
        }
    ).then(function (res) {
      self.beautify_intro = res.data;
    })
    this.$axios({
          url: baseurl + "/all_goods",
          method: "GET",
        }
    ).then(function (res) {
      self.all = res.data;
    })


  }
}
</script>

<style lang="less">
.drink, .noodle, .seasoned, .face_clean {
  .left_info {
    left: -800px !important;
    top: 0 !important;
  }

}

.drink {
  .right_logo {
    top: -460px !important;
  }

  .goods {
    top: -460px !important;
  }
}

.noodle {
  .right_logo {
    top: -416px !important;
  }

  .goods {
    top: -420px !important;
  }
}

.seasoned {
  .right_logo {
    top: -372px !important;
  }

  .goods {
    top: -370px !important;
  }
}

.face_clean {
  .right_logo {
    top: -328px !important;
  }

  .goods {
    top: -325px !important;
  }

  margin-bottom: 50px !important;
}
</style>
