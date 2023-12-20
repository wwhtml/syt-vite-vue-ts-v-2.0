//用户登录接口需要携带参数类型
interface LoginData {
  phone: string;
  code: string;
}

//用户信息
interface Param {}

interface UserInfoData {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param;
  openid?: any;
  nickName?: any;
  phone: string;
  name: string;
  certificatesType?: any;
  certificatesNo?: any;
  certificatesUrl?: any;
  authStatus: number;
  status: number;
}

//证件类型
interface CertificateData {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param;
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}
//提交的数据
interface RuleForm {
  certificatesNo: string;
  certificatesType: string;
  certificatesUrl: string;
  name: string;
}

//新增与修改已有的就诊人参数的数据ts类型
interface PatientFormInfo {
  id?: string;
  name: string;
  certificatesType: string;
  certificatesNo: string;
  sex: number;
  birthdate: string;
  phone: string;
  isMarry: number;
  isInsure: number;
  addressSelected: string[];
  address: string;
  contactsName: string;
  contactsCertificatesType: string;
  contactsCertificatesNo: string;
  contactsPhone: string;
}

//patientInfo

interface PatientInfo {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    certificatesTypeString?: any;
    contactsCertificatesTypeString?: any;
    cityString?: any;
    fullAddress: string;
    districtString?: any;
    provinceString?: any;
  };
  userId: number;
  name: string;
  certificatesType: string;
  certificatesNo: string;
  sex: number;
  birthdate?: any;
  phone: string;
  isMarry: number;
  provinceCode?: any;
  cityCode?: any;
  districtCode?: any;
  address: string;
  contactsName: string;
  contactsCertificatesType: string;
  contactsCertificatesNo: string;
  contactsPhone: string;
  isInsure: number;
  cardNo?: any;
  status: string;
}
