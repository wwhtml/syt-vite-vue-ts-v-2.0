<script lang="ts" setup>
import { getSupportNavList, getSupport } from "@/api/support/index";

import { marked } from "marked"; // 引入marked

const pageScrollRef = ref();

/***************************************************************** 
注释:menu处理
*/
const navList = ref<NavList[]>();

const getNavListData = async () => {
  const res: ResData<NavList[]> = await getSupportNavList();
  console.log(res);
  if (res.code == 200) {
    navList.value = res.data;
  }
};
getNavListData();

//获取路由参数
const router = useRouter();
const route = useRoute();
console.log(route);

const currentPath = computed(() => {
  return route.params.path as string;
});

/***************************************************************** 
注释:文章
*/
const article = ref<string>("");
const loading = ref(false);

const getSupportData = async () => {
  loading.value = true;
  setTimeout(async () => {
    const res: ResData<string> = await getSupport(currentPath.value);
    console.log(res);
    if (res.code == 200) {
      article.value = res.data;
      loading.value = false;
    }
  }, 200);
};
getSupportData();

// 监听路由，路由切换，获取数据

watch(
  () => route.params.path,
  () => {
    getSupportData();
    pageScrollRef.value.pageScrollRef.scrollTo(0, 0);
    console.log(pageScrollRef);
  }
);

const html = computed(() => marked(article.value));
</script>

<template>
  <app-page ref="pageScrollRef">
    <div class="support container">
      <div class="left">
        <ul class="menu-wrap">
          <li class="sub-menu" v-for="item in navList" :key="item.id">
            <span class="sub-menu-title">{{ item.name }}</span>
            <ul class="menu-item-group">
              <li
                class="menu-item"
                :class="{ active: currentPath == t.path }"
                v-for="t in item.children"
                :key="t.path"
              >
                <span class="clickable" @click="$router.push(t.path)">{{ t.name }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="main">
        <div class="loading" v-loading="loading" v-if="loading" style="height: 100vh"></div>
        <div class="markdown-body" v-html="html" v-else></div>
      </div>
    </div>
  </app-page>
</template>

<style scoped lang="scss">
.support {
  // min-height: 2000px;
  display: flex;

  .left {
    flex: 0 0 200px;
    position: relative;
    padding-top: 20px;
    .menu-wrap {
      position: sticky;
      top: 20px;
      padding: 20px 0;
      width: 200px;
      .sub-menu {
        .sub-menu-title {
          font-weight: 700;
          letter-spacing: 1px;
          color: $dark-color;
        }
        .menu-item-group {
          padding: 10px 0;
          .menu-item {
            position: relative;
            padding: 10px;
            &:before {
              content: "";
              width: 0px;
              height: 0px;
              background-color: $active-color;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              transition: all 0.3s ease;
            }
            span:hover {
              color: $active-color;
            }
            &.active {
              &:before {
                width: 5px;
                height: 5px;
              }
              span {
                color: $active-color;
              }
            }
          }
        }
      }
    }
  }

  .main {
    flex: 1;
    .markdown-body {
      padding: 40px 0;
      font-size: 14px;
    }
  }
}
</style>
