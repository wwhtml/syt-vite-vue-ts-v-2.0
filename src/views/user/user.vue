<script lang="ts" setup>
const menu = ref([
  { path: "authentication", title: "实名认证" },
  { path: "order", title: "挂号订单" },
  { path: "patient", title: "就诊人管理" }
]);

const router = useRouter();
const route = useRoute();

console.log(router);
console.log(router.currentRoute);
console.log(route);

const currentPath = computed(() => {
  return route.meta.key;
});
</script>

<template>
  <app-page>
    <div class="user container">
      <div class="left aaaa">
        <div class="sticky">
          <app-menu :default-active="currentPath">
            <app-menu-item
              v-for="(item, index) in menu"
              :key="index"
              :index="`${item.path}`"
              @click="$router.push(`/user/${item.path}`)"
            >
              <span>{{ item.title }} </span>
            </app-menu-item>
          </app-menu>
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </app-page>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  min-height: 100%;

  .left {
    flex: 0 0 200px;
    background-color: #fff;

    .sticky {
      position: sticky;
      top: 1px;
    }
  }
  .right {
    flex: 1;
    // padding-top: 30px;
  }
}
</style>
