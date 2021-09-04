<template>
  <div></div>
</template>

<script>
const token = window.localStorage.getItem('token') || '';
const isLogin = window.localStorage.getItem('isLogin') || false;
const username = window.localStorage.getItem('username') || '';
const userid = window.localStorage.getItem('userid') || '';
const score = window.localStorage.getItem('score') || '';
// let goods_select = JSON.parse(window.localStorage.getItem('goods_id'));
// window.localStorage.setItem('goods_id', JSON.stringify(goods_select));
let goods_id;
if (window.localStorage.getItem('goods_id') === '') {
  goods_id = [];
} else {
  goods_id = JSON.parse(window.localStorage.getItem('goods_id'))
}
export default {
  token,
  isLogin,
  username,
  userid,
  score,
  goods_id
}
</script>

<style scoped>

</style>
