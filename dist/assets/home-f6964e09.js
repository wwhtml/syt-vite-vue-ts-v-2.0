import{m as L,N as z,a6 as F,a7 as K,e as O,r as d,aa as U,w as V,q as l,t as n,v as s,M as a,g as t,K as g,L as k,C,y as S,A as B,Y,Z,ab as J,$ as P}from"./index-265deecf.js";import{E as Q}from"./el-affix-de1f5161.js";import{_ as W}from"./hos_logo-b5fda4d2.js";import{g as X,a as ss}from"./index-8b11da23.js";const c=f=>(Y("data-v-f818facf"),f=f(),Z(),f),es={class:"home"},ts={class:"header"},os={class:"title"},as=c(()=>s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-dengji"})],-1)),ls={class:"section"},ns=c(()=>s("div",{class:"hos-logo"},[s("img",{src:W,alt:""})],-1)),cs={class:"rules"},is={class:"rule"},us=c(()=>s("p",null,"挂号规则",-1)),rs=c(()=>s("span",{class:"light"},"预约周期",-1)),_s=c(()=>s("span",{class:"light"},"放号时间",-1)),ds=c(()=>s("span",{class:"light"},"停挂时间",-1)),ps=c(()=>s("span",{class:"light"},"退号时间",-1)),hs={class:"rule"},fs=c(()=>s("p",null,"医院预约规则",-1)),vs={class:"light"},ms={class:"main"},gs=c(()=>s("div",{class:"title"},"选择科室",-1)),ks={class:"dep"},ys={class:"left"},xs={class:"menu"},Cs=["onClick"],Ss={class:"right"},Ts={class:"dep-title"},Ds=["onClick"],Hs={class:"v-link"},Rs=L({__name:"home",setup(f){const v=z("hospitalAttr"),T=F(),M=K(),D=O(()=>T.params.hoscode),u=d(null),y=d(null);(async()=>{const e=await X(D.value);e.code==200&&e.data&&(u.value=e.data.bookingRule,y.value=e.data.hospital)})();const p=d([]),r=d();(async()=>{const e=await ss(D.value);if(e.code==200){console.log("output->res",e);const i=e.data;i.pop(),p.value=i,r.value=i[0]}})();const h=d([]),H=d([]),N=()=>{h.value=[],H.value.map(e=>{h.value.push(e.offsetTop-80)})};U(()=>{N()});const j=(e,i)=>{r.value=e,v==null||v.pageScrollTo(h.value[i])};return V(()=>v.pageScrollTop,e=>{e>h.value[0]&&(r.value=p.value[0]),h.value.map((i,m)=>{e>i-120&&(r.value=p.value[m])})}),(e,i)=>{var R,$,b,w,A,E,I;const m=Q,q=J;return l(),n("div",es,[s("div",ts,[s("div",os,[s("h2",null,a((R=t(y))==null?void 0:R.hosname),1),s("p",null,[as,s("span",null,a(($=t(y))==null?void 0:$.param.hostypeString),1)])]),s("div",ls,[ns,s("div",cs,[s("div",is,[us,s("ul",null,[s("li",null,[rs,s("span",null,a((b=t(u))==null?void 0:b.cycle)+" 天",1)]),s("li",null,[_s,s("span",null,a((w=t(u))==null?void 0:w.releaseTime),1)]),s("li",null,[ds,s("span",null,a((A=t(u))==null?void 0:A.stopTime),1)]),s("li",null,[ps,s("span",null,"就诊前一工作日 "+a((E=t(u))==null?void 0:E.quitTime)+" 前取消",1)])])]),s("div",hs,[fs,s("ul",null,[(l(!0),n(g,null,k((I=t(u))==null?void 0:I.rule,(o,_)=>(l(),n("li",{key:_},[s("span",vs,a(o),1)]))),128))])])])])]),s("div",ms,[C(m,{offset:70},{default:S(()=>[gs]),_:1}),s("div",ks,[s("div",ys,[C(m,{offset:150},{default:S(()=>[C(q,{height:"460px"},{default:S(()=>[s("ul",xs,[(l(!0),n(g,null,k(t(p),(o,_)=>(l(),n("li",{class:B(["menu-item",{active:t(r)===o}]),key:_,onClick:x=>j(o,_)},[s("span",null,a(o.depname),1)],10,Cs))),128))])]),_:1})]),_:1})]),s("div",Ss,[(l(!0),n(g,null,k(t(p),(o,_)=>(l(),n("div",{ref_for:!0,ref_key:"depGroupRef",ref:H,class:B(["dep-group",{active:t(r)==o}]),key:_},[s("div",Ts,[s("span",null,a(o.depname),1)]),s("ul",null,[(l(!0),n(g,null,k(o.children,(x,G)=>(l(),n("li",{key:G,onClick:ws=>t(M).push({path:`/hospital/${t(T).params.hoscode}/${o.depcode}/${x.depcode}/source`})},[s("span",Hs,a(x.depname),1)],8,Ds))),128))])],2))),128))])])])])}}});const Ms=P(Rs,[["__scopeId","data-v-f818facf"]]);export{Ms as default};
