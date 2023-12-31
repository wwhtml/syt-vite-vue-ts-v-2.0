<script lang="ts" setup>
//api
import { postAddOrUpdateUser, getPatientDetail, removePatient } from "@/api/user/index";

import type { FormInstance } from "element-plus";

const route = useRoute();

//首先判断当前是要修改还是添加

//获取当前路由的查询字符串
const operation = computed(() => {
  return route.params.operation;
});

const pid = computed(() => {
  return route.params.pid;
});

//获取数据
const patientDetail = ref<PatientInfo>();
const getData = async () => {
  if (operation.value == "add") {
    return;
  }
  const res: ResData<PatientInfo> = await getPatientDetail(pid.value as string);
  if (res.code == 200) {
    patientDetail.value = res.data;

    // const initData = () => {
    patientInfo.name = res.data.name;
    patientInfo.certificatesType = res.data.certificatesType;
    patientInfo.certificatesNo = res.data.certificatesNo;
    patientInfo.sex = res.data.sex;
    patientInfo.birthdate = res.data.birthdate;
    patientInfo.phone = res.data.phone;

    archiveInfo.isMarry = res.data.isMarry;
    archiveInfo.isInsure = res.data.isInsure;
    archiveInfo.addressSelected = res.data.addressSelected || [];
    archiveInfo.address = res.data.address;
    contactsInfo.contactsName = res.data.contactsName;
    contactsInfo.contactsCertificatesType = res.data.contactsCertificatesType;
    contactsInfo.contactsCertificatesNo = res.data.contactsCertificatesNo;
    contactsInfo.contactsPhone = res.data.contactsPhone;
    // };

    // initData(patientInfo);
  } else {
    // console.log(`output->error`, "error");
  }
};
getData();

const router = useRouter();

//获取三个form
const patientFormRef = ref();
const archiveFormRef = ref();
const contactsFormRef = ref();

/*****************************************************************************
新增就诊人的数据：包含（就诊人信息、建档信息、联系人信息）
当前页面是三个form表单，所以将三个表单的数据分开，最后进行合并在提交
*/

//就诊人信息
const patientInfo = reactive({
  name: "",
  certificatesType: "",
  certificatesNo: "",
  sex: 0,
  birthdate: "",
  phone: ""
});

const patientRules = reactive({
  name: [{ required: true, message: "请输入真实姓名", trigger: "change" }],
  certificatesType: [{ required: true, message: "请选择证件类型", trigger: "change" }],
  certificatesNo: [{ required: true, message: "请输入证件号码", trigger: "change" }],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  birthdate: [{ required: true, message: "请填写出生日期", trigger: "change" }],
  phone: [{ required: true, message: "请填写手机号码", trigger: "change" }]
});

//建档信息
const archiveInfo = reactive({
  isMarry: 0,
  isInsure: 0,
  addressSelected: [],
  address: ""
});

const archiveRules = reactive({
  isMarry: [{ required: true, message: "是否婚配", trigger: "change" }],
  isInsure: [{ required: true, message: "是否使用医保", trigger: "change" }],
  addressSelected: [{ required: false, message: "请选择当前地址", trigger: "change" }],
  address: [{ required: true, message: "请填写详细地址", trigger: "change" }]
});

//联系人信息
const contactsInfo = reactive({
  contactsName: "",
  contactsCertificatesType: "",
  contactsCertificatesNo: "",
  contactsPhone: ""
});

const contactsRules = reactive({
  contactsName: [{ required: true, message: "请输入真实姓名", trigger: "change" }],
  contactsCertificatesType: [{ required: false, message: "请选择证件类型", trigger: "change" }],
  contactsCertificatesNo: [{ required: false, message: "请输入证件号码", trigger: "change" }],
  contactsPhone: [{ required: false, message: "请输入手机号码", trigger: "change" }]
});

//当前页面需要提交的信息
const formInfo = computed<PatientFormInfo>(() => {
  return Object.assign(patientInfo, archiveInfo, contactsInfo, { id: pid.value });
});

/******************************************************************************
重置表单
*/
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const resetFormInfo = () => {
  resetForm(patientFormRef.value);
  resetForm(archiveFormRef.value);
  resetForm(contactsFormRef.value);
};

/********************************************************************************
提交表单信息
*/

const postFormData = async () => {
  try {
    const res: ResData = await postAddOrUpdateUser(formInfo.value);
    if (res.code == 200) {
      //提示文字
      ElMessage({
        type: "success",
        message: pid.value ? "更新成功" : "新增成功"
      });
      // router.push(`/user/patient`);
      router.back();
    } else {
      ElMessage({
        type: "error",
        message: pid.value ? "更新失败" : "添加失败"
      });
    }
  } catch (error) {
    // console.log(`output->error`, error);
  }
};

//提交数据之前进行数据验证(注意需要验证三个表单)
//第一个表单验证
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  return new Promise((resolve) => {
    formEl.validate((valid, fields) => {
      if (valid) {
        //没有报错信息
        resolve(valid);
      } else {
        //存在报错信息
        resolve(fields);
      }
    });
  });
};

const submit = async () => {
  Promise.all([
    submitForm(patientFormRef.value),
    submitForm(archiveFormRef.value),
    submitForm(contactsFormRef.value)
  ]).then((res) => {
    // 如果每一个表单都通过验证flag 为true
    const flag = res.every((item) => {
      return item === true;
    });
    // console.log(flag);
    if (flag) {
      postFormData();
    }
  });
};
</script>

<template>
  <div class="patient-add">
    <h1 class="title">添加就诊人</h1>
    <p class="sub-title">
      <span>就诊人信息</span>
    </p>
    <div class="patient-info">
      <el-form
        :model="formInfo"
        :rules="patientRules"
        ref="patientFormRef"
        label-width="100px"
        label-position="left"
        size="large"
        style="max-width: 380px"
        class="v-form"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="formInfo.name" class="v-input" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="证件类型：" prop="certificatesType">
          <el-select
            v-model="formInfo.certificatesType"
            class="v-select"
            placeholder="请选择证件类型"
            style="width: 100%"
          >
            <el-option label="身份证" :value="0" />
            <el-option label="居住证" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码：" prop="certificatesNo">
          <el-input
            v-model="formInfo.certificatesNo"
            class="v-input"
            placeholder="请输入证件号码"
          />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="formInfo.sex" class="ml-4">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthdate">
          <el-date-picker
            class="v-data-picker"
            v-model="formInfo.birthdate"
            type="date"
            placeholder="Pick a day"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="formInfo.phone" class="v-input" placeholder="请输入证件号码" />
        </el-form-item>
      </el-form>
    </div>

    <p class="sub-title">
      <span>建档信息（完善后部分医院首次就诊不排队建档）</span>
    </p>
    <div class="patient-info">
      <el-form
        :model="formInfo"
        :rules="archiveRules"
        ref="archiveFormRef"
        label-width="100px"
        label-position="left"
        size="large"
        style="max-width: 380px"
        class="v-form"
      >
        <el-form-item label="婚姻问题" prop="isMarry">
          <el-radio-group v-model="formInfo.isMarry" class="ml-4">
            <el-radio :label="1" size="large">已婚</el-radio>
            <el-radio :label="0" size="large">未婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自费/医保" prop="isInsure">
          <el-radio-group v-model="formInfo.isInsure" class="ml-4">
            <el-radio :label="1" size="large">医保</el-radio>
            <el-radio :label="0" size="large">自费</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="当前住址" prop="addressSelected">
          <el-cascader v-model="formInfo.addressSelected" style="width: 100%" />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formInfo.address" class="v-input" placeholder="请输入证件号码" />
        </el-form-item>
      </el-form>
    </div>

    <p class="sub-title">
      <span>联系人信息（选填）</span>
    </p>
    <div class="patient-info">
      <el-form
        :model="formInfo"
        :rules="contactsRules"
        ref="contactsFormRef"
        label-width="100px"
        label-position="left"
        size="large"
        style="max-width: 380px"
        class="v-form"
      >
        <el-form-item label="姓名" prop="contactsName">
          <el-input
            v-model="formInfo.contactsName"
            class="v-input"
            placeholder="请输入证件号码"
            clearable
          />
        </el-form-item>
        <el-form-item label="证件类型" prop="contactsCertificatesType">
          <el-select
            v-model="formInfo.contactsCertificatesType"
            class="v-select"
            placeholder="请选择证件类型"
            style="width: 100%"
          >
            <el-option label="身份证" :value="0" />
            <el-option label="居住证" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码" prop="contactsCertificatesNo">
          <el-input
            v-model="formInfo.contactsCertificatesNo"
            class="v-input"
            placeholder="请输入证件号码"
          />
        </el-form-item>
        <el-form-item label="手机号码" prop="contactsPhone">
          <el-input v-model="formInfo.contactsPhone" class="v-input" placeholder="请输入证件号码" />
        </el-form-item>
      </el-form>
    </div>

    <div class="button-group">
      <el-button @click="submit" type="primary">保存</el-button>
      <el-button @click="resetFormInfo">重置</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.patient-add {
  padding: 30px 0;

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

  .patient-info {
    // width: 500px;
    margin-left: 120px;
    :deep(.el-form) {
      .el-form-item {
        .el-form-item__label {
          color: $light-color;
        }
      }
    }
  }
  .button-group {
    margin-top: 60px;
    padding-left: 120px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-button {
      width: 100px;
      height: 38px;
      margin-right: 40px;
    }
  }
}
</style>
