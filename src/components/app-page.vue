<script lang="ts" setup>
import { ref } from "vue";

const pageScrollRef = ref();

defineExpose({
  pageScrollRef
});
</script>

<template>
  <el-scrollbar wrap-class="show" ref="pageScrollRef" view-class="app-page" v-bind="$attrs">
    <slot></slot>
  </el-scrollbar>
  <el-backtop :bottom="100" target=".show"> </el-backtop>
</template>

<style scoped lang="scss">
:deep(.app-page) {
  min-height: 100%;
}
</style>
