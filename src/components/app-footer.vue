<script lang="ts" setup></script>

<template>
  <div class="app-footer container">
    <ul class="left">
      <li><span class="v-link"> 京ICP备05021558号-24 </span></li>
      <li><span class="v-link">电话挂号010-114</span></li>
    </ul>

    <ul class="right">
      <li><span class="v-link" @click="$router.push(`/information/contact`)">联系我们</span></li>
      <li><span class="v-link" @click="$router.push(`/information/cooperate`)">合作伙伴</span></li>
      <li>
        <span class="v-link" @click="$router.push(`/information/user-agreement`)">用户协议</span>
      </li>
      <li>
        <span class="v-link" @click="$router.push(`/information/privacy-agreement`)">隐私协议</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.app-footer {
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  ul {
    display: flex;
    align-items: center;
    &.left {
      li {
        margin-right: 42px;
      }
    }

    &.right {
      li {
        margin-left: 26px;
      }
    }
  }
}
</style>
