import{m as h,a7 as f,r as v,q as c,t as i,K as g,L as m,g as d,v as s,aq as y,C as I,y as _,M as e,Y as k,Z as C,$ as x}from"./index-265deecf.js";import{E as $}from"./el-card-d8c4e13b.js";const o=a=>(k("data-v-518d41f4"),a=a(),C(),a),w={class:"patient"},N=o(()=>s("h1",{class:"title"},"就诊人管理",-1)),S=o(()=>s("ul",null,[s("li",null,"注册账号最多可以同时绑定四个就诊人"),s("li",null,"注册账号每自然年内，最多可以绑定八位就诊人"),s("li",null,"同一手机号，最多同时可以被八位就诊人作为联系电话")],-1)),b=["onClick"],A={class:"card-header"},B={class:"left"},E={class:"name"},P={class:"info"},q=o(()=>s("div",{class:"right",style:{cursor:"pointer"}},[s("span",{class:"mr-5"},"查看详情"),s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-arrow-right"})])],-1)),L={class:"content"},V={class:"card-blue"},D={class:"btn"},F=o(()=>s("span",null," + 添加就诊人",-1)),K=[F],M=h({__name:"patient",setup(a){const p=f(),l=v();return(async()=>{const n=await y();n.code==200&&(l.value=n.data)})(),(n,r)=>{const u=$;return c(),i("div",w,[N,S,(c(!0),i(g,null,m(d(l),t=>(c(),i("div",{class:"patient-card",key:t.id,onClick:T=>d(p).push(`/user/patient/detail/${t.id}`)},[I(u,{class:"mt-40"},{header:_(()=>[s("div",A,[s("div",B,[s("span",E,e(t.name),1),s("span",P,e(t.certificatesNo),1)]),q])]),default:_(()=>[s("div",L,[s("div",V,[s("p",D,[s("span",null,e(t.isInsure==0?"自费":"医保"),1)]),s("p",null,e(t.certificatesType=="0"?"身份证":"居住证"),1),s("p",null,e(t.certificatesNo),1)])])]),_:2},1024)],8,b))),128)),s("div",{class:"add-btn",onClick:r[0]||(r[0]=t=>n.$router.push("/user/patient/add"))},K)])}}});const j=x(M,[["__scopeId","data-v-518d41f4"]]);export{j as default};
