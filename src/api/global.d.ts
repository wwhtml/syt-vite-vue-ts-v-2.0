interface ResData<T = any> {
  code?: number;
  message?: string;
  ok?: boolean;
  data: T;
  // 这一行是为了防止后台接口还有别的属性,如果后端人员不够严谨，就加入下面一行
  // [propname: string]: any;
}
