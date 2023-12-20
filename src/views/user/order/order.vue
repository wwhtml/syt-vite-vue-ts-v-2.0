<script lang="ts" setup>
import { ref } from "vue";
import { getUserOrderInfo, getOrderState, getAllPatient } from "@/api/user/index";

const router = useRouter();
const route = useRoute();

/*****************************************************************
开始：
*/

//订单列表
const orderList = ref();

const params = reactive({
  page: 1,
  limit: 10,
  patientId: "",
  orderStatus: ""
});

//订单状态列表
const orderStatusList = ref();
//就诊人列表
const patientList = ref([]);

const getOrderListData = async () => {
  const res = await getUserOrderInfo(
    params.page,
    params.limit,
    params.patientId,
    params.orderStatus
  );
  if (res.code == 200) {
    orderList.value = res.data.records;
  }
};

getOrderListData();

const getOrderStatsLsit = async () => {
  const res = await getOrderState();
  if (res.code == 200) {
    orderStatusList.value = res.data;
  }
};
getOrderStatsLsit();

//获取就诊人列表
const getPatientList = async () => {
  const res = await getAllPatient();
  if (res.code == 200) {
    patientList.value = res.data;
  }
};
getPatientList();

//search-form

//详情按钮的回调
const goDetail = (row: any) => {
  router.push({ path: "/user/order/detail/" + row.id });
};
</script>

<template>
  <div class="order">
    <h1 class="title">挂号订单</h1>

    <el-form :inline="true" size="large" class="v-form" stripe>
      <el-form-item label="就诊人：" style="width: 320px">
        <el-select v-model="params.patientId" class="m-2" placeholder="全部">
          <el-option
            v-for="item in patientList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态：">
        <el-select v-model="params.orderStatus" class="m-2" placeholder="全部">
          <el-option
            v-for="item in orderStatusList"
            :key="item.status"
            :label="item.comment"
            :value="item.status"
          />
        </el-select>
      </el-form-item>

      <el-form-item><span class="v-link fw-700 fs-16 active hover">查询</span></el-form-item>
    </el-form>

    <el-table
      :data="orderList"
      stripe
      style="width: 100%"
      :header-cell-class-name="() => 't-header'"
      class="v-table"
    >
      <!-- <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" /> -->
      <el-table-column label="就诊时间" prop="reserveDate"></el-table-column>
      <el-table-column label="医院" prop="hosname"></el-table-column>
      <el-table-column label="科室" prop="depname"></el-table-column>
      <el-table-column label="医生" prop="title"></el-table-column>
      <el-table-column label="服务费" prop="amount"></el-table-column>
      <el-table-column label="就诊人" prop="patientName"></el-table-column>
      <el-table-column label="订单状态" prop="param.orderStatusString"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-link type="primary" @click="goDetail(scope.row)">详情</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
.order {
  padding: 30px 0;
  .title {
    margin-bottom: 40px;
  }
  :deep(.v-table) {
    margin-top: 20px;
    font-size: 12px;
    .t-header {
      background-color: #e8f2ff;
    }
  }
}
</style>
