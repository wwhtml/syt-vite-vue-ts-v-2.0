//hospital/hoscode/register页面
interface BookingRule {
  cycle: number;
  releaseTime: string;
  stopTime: string;
  quitDay: number;
  quitTime: string;
  rule: string[];
}

interface Param {
  hostypeString: string;
  fullAddress: string;
}

interface Hospital {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param;
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  route: string;
  status: number;
  bookingRule?: any;
}

interface HosDetail {
  bookingRule: BookingRule;
  hospital: Hospital;
}

//department
interface DepChildren {
  depcode: string;
  depname: string;
  children?: any;
}

interface Department {
  depcode: string;
  depname: string;
  children: DepChildren[];
}

//医生个人信息
interface Param1 {
  dayOfWeek: string;
  depname: string;
  hosname: string;
}

interface HosDoctorInfo {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param1;
  hoscode: string;
  depcode: string;
  title: string;
  docname: string;
  skill: string;
  workDate: string;
  workTime: number;
  reservedNumber: number;
  availableNumber: number;
  amount: number;
  status: number;
  hosScheduleId: string;
}
