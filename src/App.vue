<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/index";

let userStore = useUserStore();
let { visiable } = storeToRefs(userStore);
visiable.value = false;
</script>

<template>
  <el-container style="height: 100%">
    <el-header height="70px"><app-header></app-header></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="50px">
      <app-footer></app-footer>
    </el-footer>
  </el-container>
  <app-login v-model="visiable"></app-login>
</template>
<style lang="scss" scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-header {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.el-footer {
  background-color: $app-footer-color;
  z-index: 999;
}
</style>
