import request from "@/utils/request";

// import type { LoginData, RuleForm, PatientFormInfo } from "./types";

//获取验证码接口
export const getCode = (phone: string) => {
  return request.get("/sms/send/" + phone);
};

//用户登录接口
export const getUserLogin = (data: LoginData) => request.post("/user/login", data);

//获取用户信息
export const getUserInfo = () => {
  return request.get("/user/auth/getUserInfo");
};

//获取证件类型信息
export const getCertationTypes = (CertificatesType = "CertificatesType") =>
  request.get("/cmn/dict/findByDictCode/" + CertificatesType);

//用户认证接口
export const postUserCertation = (data: RuleForm) => request.post("/user/auth/userAuah", data);

//获取全部就诊人的信息
export const getAllPatient = () => request.get("/user/patient/auth/findAll");

//新增与修改已有的就诊人接口方法
export const postAddOrUpdateUser = (data: PatientFormInfo) => {
  if (data.id) {
    return request.put("/user/patient/auth/update", data);
  } else {
    return request.post("/user/patient/auth/save", data);
  }
};

//获取就诊人的详细信息
export const getPatientDetail = (id: string) => {
  return request.get(`/user/patient/auth/get/${id}`);
};

//删除某一个就诊人的信息
export const removePatient = (id: string) => request.delete("/user/patient/auth/remove/" + id);

/***************************************************************** 
订单操作
*/

//提交订单
export const postOrder = (hoscode: string, scheduleId: string, patientId: number) =>
  request.post("/order/orderInfo/auth/submitOrder/" + `${hoscode}/${scheduleId}/${patientId}`);

//获取订单列表
export const getUserOrderInfo = (
  page: number,
  limit: number,
  patientId: string,
  orderStatus: string
) =>
  request.get(
    "/order/orderInfo/auth/" + `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`
  );

// //获取订单状态
export const getOrderState = () => request.get("/order/orderInfo/auth/getStatusList");

//获取订单详情的方法
export const getOrderDetailInfo = (id: string) =>
  request.get("/order/orderInfo/auth/getOrderInfo/" + id);

// //取消订单
export const getCancelOrder = (id: string) =>
  request.get("/order/orderInfo/auth/cancelOrder/" + id);
