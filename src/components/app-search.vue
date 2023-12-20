<script lang="ts" setup>
//api

import { getHosListByKeyWords } from "@/api/home/index";

const router = useRouter();
const route = useRoute();

const searchStore = useSearchStore();
const { visible, hosname } = storeToRefs(searchStore);

//是否聚焦
const isFocus = ref<boolean>(false);
const handleFocus = () => {
  isFocus.value = true;
};
const handleBlur = () => {
  isFocus.value = false;
};

//监听hosname，根据不同的值，获取不同的数据
//顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
  //当用户输入完关键字次函数会执行一次，发请求获取需要展示的数据即可
  let result = await getHosListByKeyWords(keyword);
  //整理数据，变成人家组件需要数据格式
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode //存储医院的编码
    };
  });
  console.log(result.data);
  //给组件提供展示的户数
  cb(showData);
};

//点击某一个推荐项
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  router.push(`/hospital/${item.hoscode}/home`);
  hosname.value = "";
};

watch(
  () => route.fullPath,
  () => {
    hosname.value = "";
  }
);
</script>

<template>
  <!-- :fetch-suggestions="getData"      
-->
  <el-autocomplete
    class="v-search"
    :class="{ 'is-focus': isFocus }"
    placeholder="点击输入医院名称"
    :trigger-on-focus="false"
    @focus="handleFocus"
    @blur="handleBlur"
    v-model="hosname"
    :fetch-suggestions="fetchData"
    @select="goDetail"
  >
    <template #prepend>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </template>
    <template #append>
      <span class="v-link active hover fw-700">搜索</span>
    </template>
  </el-autocomplete>
</template>

<style scoped lang="scss"></style>
