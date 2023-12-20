<script lang="ts" setup>
import { getHosLevelAndRegion } from "@/api/home/index";

export interface ChangeParams {
  hostype?: string | undefined;
  districtCode?: string | undefined;
}
const emit = defineEmits<{
  (e: "change", params: ChangeParams): void;
}>();

//获取数据列表
const hosLevel = ref<FilterItem[]>([]);
const hosArea = ref<FilterItem[]>([]);

const getHosLevel = async () => {
  const res: ResData<FilterItem[]> = await getHosLevelAndRegion("hostype");
  console.log(res);
  if (res.code === 200) {
    hosLevel.value = res.data;
  }
};
const getHosArea = async () => {
  const res: ResData<FilterItem[]> = await getHosLevelAndRegion("Beijin");
  console.log(res);
  if (res.code === 200) {
    hosArea.value = res.data;
  }
};

getHosLevel();
getHosArea();

//当前选项
const level = ref<string>("");
const area = ref<string>("");
const handleLevelChange = (value: string) => {
  level.value = value;
};

const handleAreaChange = (value: string) => {
  area.value = value;
};

watch(
  () => ({
    hostype: level.value,
    districtCode: area.value
  }),
  (params) => {
    emit("change", params);
  }
);
</script>

<template>
  <div class="home-filter">
    <div class="filter">
      <div class="label">等级：</div>
      <ul>
        <li>
          <span
            class="v-link"
            :class="{ 'active fw-700': level == '' }"
            @click="handleLevelChange('')"
            >全部</span
          >
        </li>
        <li v-for="item in hosLevel" :key="item.id">
          <span
            class="v-link"
            :class="{ 'active fw-700': level == item.value }"
            @click="handleLevelChange(item.value)"
            >{{ item.name }}</span
          >
        </li>
      </ul>
    </div>
    <div class="filter">
      <div class="label">地区：</div>
      <ul>
        <li>
          <span
            class="v-link"
            :class="{ 'active fw-700': area == '' }"
            @click="handleAreaChange('')"
            >全部</span
          >
        </li>
        <li v-for="item in hosArea" :key="item.id">
          <span
            class="v-link"
            :class="{ 'active fw-700': area == item.value }"
            @click="handleAreaChange(item.value)"
            >{{ item.name }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-filter {
  .filter {
    display: flex;
    margin-bottom: 10px;
    .label {
      flex-shrink: 0;
      color: $light-color;
      margin-right: 10px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 26px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
