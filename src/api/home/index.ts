import request from "@/utils/request";

//通过关键字查找数据
export const getHosListByKeyWords = (hosname: string) => {
  return request.get("/hosp/hospital/findByHosname/" + hosname);
};

//获取医院的等级和地区
export const getHosLevelAndRegion = (params: string) => {
  return request.get("/cmn/dict/findByDictCode/" + params);
};

//获取医院列表
export const getHosList = (page: number, limit: number, hostype = "", districtCode = "") => {
  return request.get(
    "/hosp/hospital/" + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  );
};
