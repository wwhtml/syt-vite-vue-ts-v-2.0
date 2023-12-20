<script lang="ts" setup>
import HomeCarousel from "./home-carousel.vue";
import homeFilter from "./home-filter.vue";
import type { ChangeParams } from "./home-filter.vue";
import homeHosList from "./home-hos-list.vue";
import HomeSideBar from "./home-side-bar.vue";

//api
import { getHosList } from "@/api/home/index";

/***************************************************************** 
注释： app-search的显示和隐藏
*/
const searchStore = useSearchStore();
const { visible } = storeToRefs(searchStore);

const handlePageScroll = ({ scrollTop }: any) => {
  if (scrollTop > 435) {
    visible.value = true;
  } else {
    visible.value = false;
  }
};

/***************************************************************** 
注释：医院列表数据
*/
//医院列表
const hosList = ref<HosListContentItem[]>([]);
//获取数据所需参数
interface Params {
  page: number;
  limit: number;
  hostype?: string;
  districtCode?: string;
}

const loading = ref(false);
const params = reactive<Params>({
  page: 1,
  limit: 10,
  hostype: "",
  districtCode: ""
});

const inLoading = ref(false);
const finished = ref(false);

let fetchId = 0;

const getHosListData = async () => {
  const id = fetchId + 1;
  fetchId = id;
  if (hosList && hosList.value.length) {
    inLoading.value = true;
  } else {
    loading.value = true;
  }

  const res: ResData<HosList> = await getHosList(
    params.page,
    params.limit,
    params.hostype,
    params.districtCode
  );
  if (res.code == 200 && fetchId == id) {
    const { content } = res.data;
    hosList.value?.push(...content);
    params.page++;
    loading.value = false;

    if (content.length < 10) {
      finished.value = true;
      inLoading.value = false;
    }
  }
};
getHosListData();

const handleFilterChange = ({ hostype, districtCode }: ChangeParams) => {
  hosList.value = [];
  params.page = 1;
  params.hostype = hostype;
  params.districtCode = districtCode;

  finished.value = false;
  loading.value = true;

  getHosListData();
};
</script>

<template>
  <app-page @scroll="handlePageScroll">
    <div class="home container">
      <home-carousel></home-carousel>
      <!-- search -->
      <div class="home-search">
        <app-search></app-search>
      </div>
      <div class="main mt-50">
        <div class="left pr-80">
          <div class="title mb-30">医院</div>
          <home-filter @change="handleFilterChange"></home-filter>
          <home-hos-list :hosList="hosList" :loading="loading"></home-hos-list>
          <app-infinite
            v-if="hosList && hosList?.length > 0"
            :loading="inLoading"
            :finished="finished"
            @infinite="getHosListData"
          ></app-infinite>
        </div>
        <div class="right">
          <home-side-bar></home-side-bar>
        </div>
      </div>
    </div>
  </app-page>
</template>

<style scoped lang="scss">
.home {
  .home-search {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    :deep(.v-search) {
      width: 800px;
      height: 60px;
      .el-input {
        font-size: 16px;
      }
    }
  }
  .main {
    display: flex;
    min-height: 100vh;

    .left {
      width: 1000px;
      padding-top: 20px;
    }
    .right {
      width: 200px;
      padding: 20px 0 30px 0;
    }
  }
}
</style>
