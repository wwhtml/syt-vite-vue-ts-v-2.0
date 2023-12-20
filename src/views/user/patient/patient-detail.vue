<script lang="ts" setup>
import { getPatientDetail, removePatient } from "@/api/user/index";

const route = useRoute();
const router = useRouter();

const pid = computed(() => route.params.id);

const patientDetail = ref<PatientInfo>();
const getData = async () => {
  const res: ResData<PatientInfo> = await getPatientDetail(pid.value as string);
  // console.log(`output->res`, res);
  if (res.code == 200) {
    patientDetail.value = res.data;
  } else {
    console.log(`output->error`, "error");
  }
};
getData();

const remove = async () => {
  const res: any = await removePatient(pid.value as string);

  // console.log(res);

  if (res.code == 200) {
    if (res.data == true) {
      //提示文字
      ElMessage({
        type: "success",
        message: "删除成功"
        // onClose: () => {
        //   router.push(`/user/patient`);
        // }
      });
      router.push(`/user/patient`);
    }
  }
};
</script>

<template>
  <div class="patient-detail">
    <div class="title">就诊人详情</div>
    <p class="sub-title">
      <span>就诊人信息</span>
    </p>

    <div class="form-container">
      <el-form>
        <el-form-item label="姓名">
          <span>{{ patientDetail?.name }}</span>
        </el-form-item>
        <el-form-item label="证件类型">
          <span>{{ patientDetail?.certificatesType }}</span>
        </el-form-item>
        <el-form-item label="证件号码">
          <span>{{ patientDetail?.certificatesNo }}</span>
        </el-form-item>
        <el-form-item label="性别">
          <span>{{ patientDetail?.sex }}</span>
        </el-form-item>
        <el-form-item label="出生日期">
          <span>{{ patientDetail?.birthdate }}</span>
        </el-form-item>
        <el-form-item label="手机号码">
          <span>{{ patientDetail?.phone }}</span>
        </el-form-item>
        <el-form-item label="婚姻状况">
          <span>{{ patientDetail?.isMarry }}</span>
        </el-form-item>
        <el-form-item label="当前住址">
          <span>{{ patientDetail?.provinceCode }}</span>
        </el-form-item>
        <el-form-item label="详细地址">
          <span>{{ patientDetail?.address }}</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="remove">删除就诊人</el-button>
          <el-button @click="$router.push(`/user/patient/edit/${pid}`)">修改就诊人</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.patient-detail {
  padding: 30px 0;
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
}
</style>
