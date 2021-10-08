<template>
  <div>hello world</div>
  <van-button @click="click">点击</van-button>
  <div>{{ res.data }}</div>
  <van-button to="/edit">edit</van-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRequest } from "vue-request";
import { useStore } from "/@/store";

const res = reactive(useRequest("/api/user/test", { manual: true }));
const { commit, state } = useStore();

const click = () => {
  commit("GET_CART_LIST");
  console.log(state.shoppingCart);
  res.run();
};
</script>
<style scoped>
</style>
