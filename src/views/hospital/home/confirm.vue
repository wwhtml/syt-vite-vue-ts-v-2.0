<script lang="ts" setup>
//api
import { getDoctorInfo } from "@/api/hospital/index";

import { getAllPatient, postOrder } from "@/api/user/index";

const route = useRoute();
const router = useRouter();

const docInfo = ref<HosDoctorInfo>();
const getDoctorInfoData = async () => {
  const res = await getDoctorInfo(route.params.docId as string);
  console.log(res);
  docInfo.value = res.data;
};
getDoctorInfoData();

//获取所有就诊人的信息
//...
//获取就诊人，如果存在就渲染到页面，不存在就空着
const patientInfo = ref<PatientInfo[]>();
const currentPatient = ref<PatientInfo>();

const getPatientInfoArr = async () => {
  const res: ResData<PatientInfo[]> = await getAllPatient();
  if (res.code == 200) {
    patientInfo.value = res.data;
    currentPatient.value = res.data[0];
  }
  console.log(`output->res`, res);
};

getPatientInfoArr();

const changePatient = (item: PatientInfo) => {
  currentPatient.value = item;
};

//确定挂号按钮的回调
const submitOrder = async () => {
  //医院编号
  let hoscode = docInfo.value?.hoscode;
  //医生的ID
  let scheduleId = docInfo.value?.id;
  //就诊人的ID
  let patientId = currentPatient.value?.id;
  //提交订单
  let result = await postOrder(hoscode, scheduleId, patientId);
  //提交订单成功
  if (result.code == 200) {
    // router.push({ path: "/user/order", query: { orderId: result.data } });

    router.push({ path: "/user/order/detail/" + result.data });
  } else {
    ElMessage({
      type: "error",
      message: result.message
    });
  }
};
</script>

<template>
  <div class="confirm">
    <h1>确认挂号信息</h1>
    <div class="sub-title">选择就诊人</div>

    <div class="patient-wrap">
      <div
        class="card"
        :class="{ active: currentPatient == item }"
        v-for="item in patientInfo"
        :key="item.id"
        @click="changePatient(item)"
      >
        <div class="left">
          <div class="c-title">{{ item.name }}</div>
          <div class="content">
            <div class="type">{{ item.certificatesType == "0" ? "身份证" : "居住证" }}</div>
            <div class="cid">{{ item.certificatesNo }}</div>
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/images/checked.png" alt="" />
        </div>
      </div>
      <div class="card add" @click="router.push(`/user/patient/add`)">
        <span>+ 添加就诊人</span>
      </div>
    </div>

    <div class="sub-title">挂号信息222</div>
    <el-card class="mt-40 cur-patient-card" v-if="currentPatient">
      <template #header>
        <div class="card-header">
          <div class="left">
            <span class="name">{{ currentPatient.name }}</span>
            <span class="info">{{ currentPatient.certificatesNo }}</span>
          </div>
          <div class="right" style="cursor: pointer">
            <span class="mr-5">查看详情</span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </div>
        </div>
      </template>
      <div class="content">
        <div class="card-blue">
          <p class="btn">
            <span>{{ currentPatient.isInsure == 0 ? "自费" : "医保" }}</span>
          </p>
          <p>{{ currentPatient.certificatesType == "0" ? "身份证" : "居住证" }}</p>
          <p>{{ currentPatient.certificatesNo }}</p>
        </div>
      </div>
    </el-card>

    <div class="sub-title">挂号信息</div>
    <ul class="info">
      <li>
        就诊日期： <span>{{ docInfo?.workDate }}</span>
      </li>
      <li>
        就诊医院：<span>{{ docInfo?.param.hosname }}</span>
      </li>
      <li>
        就诊科室：<span>{{ docInfo?.param.depname }}</span>
      </li>
      <li>
        医生姓名：<span>{{ docInfo?.docname }}</span>
      </li>
      <li>
        医生职称：<span>{{ docInfo?.title }}</span>
      </li>
      <li>
        医专专长：<span>{{ docInfo?.skill }}</span>
      </li>
      <li>
        医生服务费：<span>{{ docInfo?.amount }}</span>
      </li>
    </ul>

    <div class="sub-title">用户信息</div>
    <ul class="info">
      <li>就诊人信息 <span></span></li>
    </ul>

    <div class="button">
      <el-button type="primary" @click="submitOrder">确认挂号 </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.confirm {
  color: $light-color;
  & > h1 {
    @include font($dark-color, 16px, 700);
    padding: 30px 0 0 0;
  }

  .patient-wrap {
    display: flex;
    flex-wrap: wrap;
    .card {
      width: 200px;
      height: 90px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 10px 0 0;
      border-radius: 5px;

      cursor: pointer;
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
      }
      .left {
        flex: 1;

        .c-title {
          @include font($dark-color, "14px", 400);
          margin-bottom: 10px;
        }
        .content {
          font-size: 12px;
          .type {
            margin-bottom: 5px;
          }
        }
      }
      .right {
        width: 22px;
        height: 22px;
      }

      &.add {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $active-color;
        font-size: 16px;
      }

      &.active {
        background-color: $active-color;
        @include font(white, "14px", 400);

        .c-title {
          @include font(white, "14px", 700);
        }
      }
    }
  }
  .cur-patient-card {
    padding: 0 30px;
    cursor: pointer;
    :deep(.el-card__header) {
      padding: 16px 0;

      .card-header {
        display: flex;
        justify-content: space-between;
        .left {
          .name {
            margin-right: 30px;
            font-weight: 700;
          }
          .info {
            font-size: 12px;
            color: $light-color;
          }
        }
      }
    }
    :deep(.el-card__body) {
      padding: 30px 0;
      .content {
        display: flex;
        .card-blue {
          color: #fff;
          display: flex;
          padding: 10px;
          background-color: #89c4ed;
          align-items: center;
          border-radius: 8px;
          width: 44%;
          p {
            margin-right: 20px;
            flex-shrink: 0;
            &.btn {
              padding: 3px 5px;
              border-radius: 3px;
              background-color: #fff;
              color: #89c4ed;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .sub-title {
    margin: 80px 0 20px 0;
    display: flex;
    align-items: center;
    height: 20px;

    &:before {
      content: "";
      width: 4px;
      height: 20px;
      background-color: $active-color;
      margin-right: 10px;
      border-radius: 2px;
    }
  }

  .info {
    padding-left: 150px;
    & > li {
      margin-bottom: 30px;
      span {
        color: $dark-color;
        margin-left: 10px;
      }
    }
  }

  .button {
    display: flex;
    padding: 120px 0;
    .el-button {
      width: 140px;
      height: 44px;
      margin: 0 auto;

      // line-height: 44px;
    }
  }
}
</style>
