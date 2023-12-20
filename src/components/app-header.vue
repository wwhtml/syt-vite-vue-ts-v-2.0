<script lang="ts" setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/index";
const router = useRouter();
const route = useRoute();

//pinia
const searchStore = useSearchStore();
const { visible } = storeToRefs(searchStore);

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

const pathArr = ["/", "/home"];
watch(
  () => route.fullPath,
  () => {
    if (pathArr.includes(route.fullPath)) {
      visible.value = false;
    } else {
      visible.value = true;
    }
  }
);

//点击登录.
const showLogin = () => {
  !userStore.visiable && (userStore.visiable = true);
};
//退出登录，清除token就可以了
const Exit = () => {
  userStore.$reset();
  router.push("/");
};
</script>

<template>
  <div class="app-header container">
    <h1 @click="$router.push(`/home`)">
      <img src="../assets/images/logo.png" alt="" />
      <span class="v-link fs-20 active hover">北京市预约挂号统一平台</span>
    </h1>
    <transition name="fade">
      <div class="search" v-show="visible">
        <app-search></app-search>
      </div>
    </transition>
    <ul>
      <!-- <li><span class="v-link" @click="$router.push(`/hospital`)">hospital</span></li> -->
      <li><span class="v-link" @click="$router.push(`/support/common`)">帮助中心</span></li>
      <li>
        <el-dropdown v-if="userInfo.name">
          <span class="el-dropdown-link v-link">
            <span>{{ userInfo.name }}</span>
            <!-- <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrow"></use>
            </svg> -->
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push(`/user/authentication`)">
                实名认证</el-dropdown-item
              >
              <el-dropdown-item @click="router.push(`/user/order`)">挂号订单</el-dropdown-item>
              <el-dropdown-item @click="router.push(`/user/patient`)">就诊人管理</el-dropdown-item>
              <el-dropdown-item @click="router.push(`/user/account`)"
                >修改账户信息</el-dropdown-item
              >
              <el-dropdown-item @click="Exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span v-else class="v-link fw-700" @click="showLogin">登录/注册</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

  .search {
    display: flex;
    justify-content: center;
    :deep(.v-search) {
      width: 500px;
      height: 40px;
      .el-input {
        font-size: 14px;
      }
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-left: 26px;
      :deep(.el-dropdown-link) {
        outline: none;
      }
    }
  }
}
</style>
