<script lang="ts" setup>
import { getUserInfo, postUserCertation } from "@/api/user/index";

import type { FormInstance } from "element-plus";

//用户信息，如果已经认证过了，显示认证信息
const userInfo = ref<UserInfoData>();

const getUserInfoData = async () => {
  try {
    const res: ResData<UserInfoData> = await getUserInfo();
    userInfo.value = res.data;
  } catch (error) {
    console.log(`output->error`, error);
  }
};
getUserInfoData();

//formRef
const formRef = ref();

//表单数据
const formData = reactive({
  certificatesNo: "",
  certificatesType: "",
  certificatesUrl: "",
  name: ""
});
//表单数据规则
const rules = reactive({
  name: [{ required: true, message: "请输入真实姓名", trigger: "change" }],
  certificatesType: [{ required: true, message: "请选择证件类型", trigger: "change" }],
  certificatesNo: [{ required: true, message: "请输入证件号码", trigger: "change" }]
});

//聚焦的时候清除当前item的错误信息
const nameFormItem = ref();
const typeFormItem = ref();
const numberFormItem = ref();
const focusResetField = (itemForm: any) => {
  if (!itemForm) return;
  itemForm.resetField();
};

//重置数据
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

//调用后台接口提交数据
const postData = async () => {
  try {
    const res: ResData<CertificateData> = await postUserCertation(formData);
    console.log(`output->res`, res);
    if (res.code == 200) {
      ElMessage({
        message: "认证成功",
        type: "success"
      });
      // getUserInfoData();
    }
  } catch (error) {
    console.log(`output->error`, error);
  }
};

//验证并提交数据
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    //valid: 是否通过验证 true / false
    //fields: 未通过验证饿rules
    if (valid) {
      // alert("通过验证");
      postData();
    } else {
      //存在报错信息
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="authentication">
    <div class="title">实名认证</div>
    <div class="status-bar mt-20">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jinggao1"></use>
      </svg>
      <template v-if="userInfo">
        <span>{{ userInfo?.authStatus == 1 ? "已认证" : "未认证" }}</span>
      </template>
    </div>
    <div class="tips">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-time"></use>
      </svg>
      <span>
        完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。
      </span>
    </div>
    <div class="form-wrapper">
      <el-form v-if="userInfo?.authStatus == 1">
        <el-form-item label="姓名：">
          <div>{{ userInfo?.name }}</div>
        </el-form-item>
        <el-form-item label="证件类型">
          <div>{{ userInfo?.certificatesType }}</div>
        </el-form-item>
        <el-form-item label="证件号码">
          <div>{{ userInfo?.certificatesNo }}</div>
        </el-form-item>
      </el-form>

      <el-form
        v-if="userInfo?.authStatus == 0"
        ref="formRef"
        style="max-width: 440px"
        size="large"
        label-position="left"
        label-width="100px"
        hide-required-asterisk
        :model="formData"
        :rules="rules"
        class="v-form"
      >
        <el-form-item label="姓名" prop="name" class="v-form-item" ref="nameFormItem">
          <el-input
            class="v-input"
            placeholder="请输入用户名"
            v-model="formData.name"
            clearable
            @focus="focusResetField(nameFormItem)"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="证件类型："
          prop="certificatesType"
          class="v-form-item"
          ref="typeFormItem"
        >
          <el-select
            class="v-select"
            v-model="formData.certificatesType"
            style="width: 100%"
            placeholder="请选择证件类型"
            clearable
            @focus="focusResetField(typeFormItem)"
          >
            <el-option label="身份证" :value="0" />
            <el-option label="居住证" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item
          prop="certificatesNo"
          label="证件号码： "
          class="v-form-item"
          ref="numberFormItem"
        >
          <el-input
            class="v-input"
            v-model="formData.certificatesNo"
            placeholder="请输入证件号码"
            clearable
            @focus="focusResetField(numberFormItem)"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"> 提交 </el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.authentication {
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
  .tips {
    margin: 40px 0;
    display: flex;
    align-items: center;
    padding-left: 160px;
    font-size: 12px;
    color: $light-color;
    .icon {
      margin-right: 5px;
    }
  }
  .form-wrapper {
    padding-left: 160px;
  }
}
</style>
