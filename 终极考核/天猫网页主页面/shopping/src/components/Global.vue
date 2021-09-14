<template>
  <div></div>
</template>

<script>
const token = window.localStorage.getItem('token') || '';
const isLogin = window.localStorage.getItem('isLogin') || false;
const username = window.localStorage.getItem('username') || '';
const userid = window.localStorage.getItem('userid') || '';
const score = window.localStorage.getItem('score') || '';
const is_exit = 0;
let goods_id, buy_counts;
if (window.localStorage.getItem('goods_id') === '') {
  goods_id = [];
  window.localStorage.setItem('goods_id', JSON.stringify(goods_id));
} else {
  goods_id = JSON.parse(window.localStorage.getItem('goods_id'))
}
if (window.localStorage.getItem('buy_counts') === '') {
  buy_counts = [];
  window.localStorage.setItem('buy_counts', JSON.stringify(buy_counts));
} else {
  buy_counts = JSON.parse(window.localStorage.getItem('buy_counts'))
}
export default {
  token,
  isLogin,
  username,
  userid,
  score,
  goods_id,
  buy_counts,
  is_exit
}
</script>

<style scoped>

</style>
