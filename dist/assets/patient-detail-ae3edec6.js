import{m as h,a6 as g,a7 as D,e as x,r as C,q as E,t as I,v as s,C as t,y as a,c7 as k,aQ as w,M as c,g as n,ao as d,Y as B,Z as N,cA as S,as as $,aR as M,at as R,$ as V}from"./index-b0e2f3a3.js";/* empty css                   */const f=i=>(B("data-v-611725e8"),i=i(),N(),i),F={class:"patient-detail"},P=f(()=>s("div",{class:"title"},"就诊人详情",-1)),T=f(()=>s("p",{class:"sub-title"},[s("span",null,"就诊人信息")],-1)),q={class:"form-container"},A=h({__name:"patient-detail",setup(i){const m=g(),v=D(),r=x(()=>m.params.id),l=C();(async()=>{const u=await k(r.value);u.code==200?l.value=u.data:console.log("output->error","error")})();const b=async()=>{const u=await S(r.value);u.code==200&&u.data==!0&&($({type:"success",message:"删除成功"}),v.push("/user/patient"))};return(u,p)=>{const o=M,_=R,y=w;return E(),I("div",F,[P,T,s("div",q,[t(y,null,{default:a(()=>[t(o,{label:"姓名"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.name),1)]}),_:1}),t(o,{label:"证件类型"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.certificatesType),1)]}),_:1}),t(o,{label:"证件号码"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.certificatesNo),1)]}),_:1}),t(o,{label:"性别"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.sex),1)]}),_:1}),t(o,{label:"出生日期"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.birthdate),1)]}),_:1}),t(o,{label:"手机号码"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.phone),1)]}),_:1}),t(o,{label:"婚姻状况"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.isMarry),1)]}),_:1}),t(o,{label:"当前住址"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.provinceCode),1)]}),_:1}),t(o,{label:"详细地址"},{default:a(()=>{var e;return[s("span",null,c((e=n(l))==null?void 0:e.address),1)]}),_:1}),t(o,null,{default:a(()=>[t(_,{type:"primary",onClick:b},{default:a(()=>[d("删除就诊人")]),_:1}),t(_,{onClick:p[0]||(p[0]=e=>u.$router.push(`/user/patient/edit/${n(r)}`))},{default:a(()=>[d("修改就诊人")]),_:1})]),_:1})]),_:1})])])}}});const j=V(A,[["__scopeId","data-v-611725e8"]]);export{j as default};
