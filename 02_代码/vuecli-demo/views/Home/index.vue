<template>
  <div style="height: 100%">
    <Header></Header>
    <Aside></Aside>
  </div>

</template>

<script>
import Aside from '../../components/Aside'
import Header from "../../components/Header";
export default {
  data() {
    return {
    };
  },
  components: {
   Header,
    Aside,
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.main{
  width:20px;
  height: 20px;
}
</style>
