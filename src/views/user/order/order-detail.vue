<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";

import { getOrderDetailInfo, getCancelOrder } from "@/api/user/index";

const router = useRouter();
const route = useRoute();

const oid = computed(() => {
  return route.params.orderId;
});

const orderInfo = ref();
const getOrderDetail = async () => {
  const res = await getOrderDetailInfo(oid.value);
  if (res.code == 200) {
    orderInfo.value = res.data;
  }
};
getOrderDetail();

//取消预约
const cancleOrder = async () => {
  const res = await getCancelOrder(oid.value);
  if (res.code == 200) {
    ElMessage({
      type: "success",
      message: "取消成功"
    });
  } else {
    ElMessage({
      type: "error",
      message: "不能取消"
    });
  }
};

const open = () => {
  ElMessageBox.confirm("确认取消预约?", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    cancleOrder();
  });
};
</script>

<template>
  <div class="order-detail">
    <div class="title">挂号详情</div>
    <div class="status-bar mt-20">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jinggao1"></use>
      </svg>
      <template v-if="orderInfo">
        <span>{{ orderInfo?.param.orderStatusString }}</span>
      </template>
    </div>
    <p class="sub-title">
      <span>就诊人信息</span>
    </p>

    <div class="form-container">
      <el-form v-if="orderInfo">
        <el-form-item label="就诊人姓名：">
          <span>{{ orderInfo?.patientName }}</span>
        </el-form-item>
        <el-form-item label="就诊日期：">
          <span>{{ orderInfo?.fetchTime }}</span>
        </el-form-item>
        <el-form-item label="就诊医院：">
          <span>{{ orderInfo?.hosname }}</span>
        </el-form-item>
        <el-form-item label="就诊科室：">
          <span>{{ orderInfo?.depname }}</span>
        </el-form-item>
        <el-form-item label="医生职称：">
          <span>{{ orderInfo?.title }}</span>
        </el-form-item>
        <el-form-item label="医事服务费：">
          <span class="active">{{ orderInfo?.amount }} 元</span>
        </el-form-item>
        <el-form-item label="挂号单号：">
          <span>{{ orderInfo?.outTradeNo }}</span>
        </el-form-item>
        <el-form-item label="挂号时间：">
          <span>{{ orderInfo?.reserveDate }}</span>
        </el-form-item>

        <el-form-item>
          <template v-if="orderInfo.orderStatus == 0">
            <el-button plain size="large" @click="open">取消预约</el-button>
            <el-button type="primary" size="large">支付</el-button>
          </template>
          <template v-if="orderInfo.orderStatus == 1">
            <el-button type="primary" size="large">已支付</el-button>
          </template>
          <template v-if="orderInfo.orderStatus == 2">
            <el-button type="primary" size="large">已经取号</el-button>
          </template>
          <template v-if="orderInfo.orderStatus == -1">
            <el-button plain size="large">已取消</el-button>
          </template>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-detail {
  // background-color: red;
  padding: 30px 0;
  .status-bar {
    height: 80px;
    background-color: #f4f9ff;
    font-size: 16px;
    color: #4490f1;
    letter-spacing: 1px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .icon {
      margin-right: 12px;
      font-weight: 700;
      font-size: 30px;
    }
  }

  .sub-title {
    margin-top: 60px;
    display: flex;
    margin-bottom: 30px;
    letter-spacing: 1px;

    &:before {
      content: "";
      width: 5px;
      background-color: $active-color;
      margin-right: 10px;
      border-radius: 5px;
    }
  }
  .form-container {
    padding-left: 120px;
    color: $light-color;

    :deep(.el-form-item__label) {
      color: $light-color;
    }
    // :deep(.el-form-item__content) {
    //   span {
    //     color: $base-color;
    //   }
    // }
  }
  .active {
    color: $active-color !important ;
    font-weight: 700;
  }
}
</style>
