import{m as R,r as u,O as S,q as m,t as U,v as l,g as e,M as p,G as v,x as C,y as r,aP as M,aQ as O,C as o,ao as E,Y as j,Z as z,aR as G,ag as P,at as Q,aS as Y,as as Z,$ as A}from"./index-d88e6d07.js";import{E as H,a as J}from"./el-select-932b9f91.js";/* empty css                   */import"./validator-103358e2.js";const g=d=>(j("data-v-9d09b3bb"),d=d(),z(),d),K={class:"authentication"},L=g(()=>l("div",{class:"title"},"实名认证",-1)),W={class:"status-bar mt-20"},X=g(()=>l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-jinggao1"})],-1)),ee={key:0},te=g(()=>l("div",{class:"tips"},[l("svg",{class:"icon","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-time"})]),l("span",null," 完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。 ")],-1)),se={class:"form-wrapper"},ae=R({__name:"authentication",setup(d){const i=u();(async()=>{try{const s=await M();i.value=s.data}catch(s){console.log("output->error",s)}})();const f=u(),c=S({certificatesNo:"",certificatesType:"",certificatesUrl:"",name:""}),T=S({name:[{required:!0,message:"请输入真实姓名",trigger:"change"}],certificatesType:[{required:!0,message:"请选择证件类型",trigger:"change"}],certificatesNo:[{required:!0,message:"请输入证件号码",trigger:"change"}]}),y=u(),b=u(),h=u(),_=s=>{s&&s.resetField()},$=s=>{s&&s.resetFields()},q=async()=>{try{const s=await Y(c);console.log("output->res",s),s.code==200&&Z({message:"认证成功",type:"success"})}catch(s){console.log("output->error",s)}},B=async s=>{s&&await s.validate((a,n)=>{a?q():console.log("error submit!",n)})};return(s,a)=>{var x,N,w;const n=G,I=O,k=P,F=H,D=J,V=Q;return m(),U("div",K,[L,l("div",W,[X,e(i)?(m(),U("span",ee,p(((x=e(i))==null?void 0:x.authStatus)==1?"已认证":"未认证"),1)):v("",!0)]),te,l("div",se,[((N=e(i))==null?void 0:N.authStatus)==1?(m(),C(I,{key:0},{default:r(()=>[o(n,{label:"姓名："},{default:r(()=>{var t;return[l("div",null,p((t=e(i))==null?void 0:t.name),1)]}),_:1}),o(n,{label:"证件类型"},{default:r(()=>{var t;return[l("div",null,p((t=e(i))==null?void 0:t.certificatesType),1)]}),_:1}),o(n,{label:"证件号码"},{default:r(()=>{var t;return[l("div",null,p((t=e(i))==null?void 0:t.certificatesNo),1)]}),_:1})]),_:1})):v("",!0),((w=e(i))==null?void 0:w.authStatus)==0?(m(),C(I,{key:1,ref_key:"formRef",ref:f,style:{"max-width":"440px"},size:"large","label-position":"left","label-width":"100px","hide-required-asterisk":"",model:e(c),rules:e(T),class:"v-form"},{default:r(()=>[o(n,{label:"姓名",prop:"name",class:"v-form-item",ref_key:"nameFormItem",ref:y},{default:r(()=>[o(k,{class:"v-input",placeholder:"请输入用户名",modelValue:e(c).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(c).name=t),clearable:"",onFocus:a[1]||(a[1]=t=>_(e(y)))},null,8,["modelValue"])]),_:1},512),o(n,{label:"证件类型：",prop:"certificatesType",class:"v-form-item",ref_key:"typeFormItem",ref:b},{default:r(()=>[o(D,{class:"v-select",modelValue:e(c).certificatesType,"onUpdate:modelValue":a[2]||(a[2]=t=>e(c).certificatesType=t),style:{width:"100%"},placeholder:"请选择证件类型",clearable:"",onFocus:a[3]||(a[3]=t=>_(e(b)))},{default:r(()=>[o(F,{label:"身份证",value:0}),o(F,{label:"居住证",value:1})]),_:1},8,["modelValue"])]),_:1},512),o(n,{prop:"certificatesNo",label:"证件号码： ",class:"v-form-item",ref_key:"numberFormItem",ref:h},{default:r(()=>[o(k,{class:"v-input",modelValue:e(c).certificatesNo,"onUpdate:modelValue":a[4]||(a[4]=t=>e(c).certificatesNo=t),placeholder:"请输入证件号码",clearable:"",onFocus:a[5]||(a[5]=t=>_(e(h)))},null,8,["modelValue"])]),_:1},512),o(n,null,{default:r(()=>[o(V,{type:"primary",onClick:a[6]||(a[6]=t=>B(e(f)))},{default:r(()=>[E(" 提交 ")]),_:1}),o(V,{onClick:a[7]||(a[7]=t=>$(e(f)))},{default:r(()=>[E("重置")]),_:1})]),_:1})]),_:1},8,["model","rules"])):v("",!0)])])}}});const ce=A(ae,[["__scopeId","data-v-9d09b3bb"]]);export{ce as default};
