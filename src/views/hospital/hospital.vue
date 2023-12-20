<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const menu = reactive([
  { path: "home", title: "预约挂号" },
  { path: "detail", title: "医院详情" },
  { path: "notice", title: "预约须知" }
]);

// const currentPath = ref("home");
const currentPath = computed(() => {
  return route.meta.key as string;
});

//调整scrollTop
const pageRef = ref();

const pageScrollTo = (val: number) => {
  pageRef.value.pageScrollRef.setScrollTop(val);
};

const pageScrollTop = ref<number>(0);

const handleScroll = ({ scrollTop }: { scrollLeft: number; scrollTop: number }) => {
  pageScrollTop.value = scrollTop;
};

const hospitalAttr = reactive({
  pageScrollTo: pageScrollTo,
  pageScrollTop: pageScrollTop
});

provide("hospitalAttr", hospitalAttr);

//因为这是二级路由，所以  scrollBehavior  设置无效，监听  路由调整scroll

watch(
  () => route.fullPath,
  () => {
    pageScrollTo(0);
  }
);
</script>

<template>
  <!-- {{ pageScrollTop }} -->
  <app-page ref="pageRef" @scroll="handleScroll">
    <div class="hospital container">
      <div class="left">
        <el-affix :offset="70">
          <app-menu :default-active="currentPath">
            <app-menu-item
              v-for="(item, index) in menu"
              :key="index"
              :index="`${item.path}`"
              @click="router.push(`/hospital/${route.params.hoscode}/${item.path}`)"
            >
              <span>{{ item.title }} </span>
            </app-menu-item>
          </app-menu>
        </el-affix>
      </div>
      <div class="right">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </div>
    </div>
  </app-page>
</template>

<style scoped lang="scss">
.hospital {
  // min-height: 2000px;
  display: flex;

  .left {
    flex: 0 0 200px;
  }
  .right {
    flex: 1;
    padding: 28px 0;
    // background-color: antiquewhite;
  }
}
</style>
