import{_ as R}from"./app-page-def7f3a6.js";import{m as T,a6 as $,a7 as B,O as u,e as A,r as d,p as E,w as P,a8 as D,q as n,x as _,y as e,v as c,C as l,g as o,t as L,L as N,M as V,K as q,T as F,a9 as I,$ as K}from"./index-b0e2f3a3.js";import{E as M}from"./el-affix-ecba70af.js";import{_ as O,a as b}from"./app-menu-item-0a64a15c.js";const j={class:"hospital container"},z={class:"left"},G={class:"right"},H=T({__name:"hospital",setup(J){const a=$(),f=B(),m=u([{path:"home",title:"预约挂号"},{path:"detail",title:"医院详情"},{path:"notice",title:"预约须知"}]),h=A(()=>a.meta.key),p=d(),r=s=>{p.value.pageScrollRef.setScrollTop(s)},i=d(0),v=({scrollTop:s})=>{i.value=s},g=u({pageScrollTo:r,pageScrollTop:i});return E("hospitalAttr",g),P(()=>a.fullPath,()=>{r(0)}),(s,Q)=>{const x=O,k=b,y=M,C=D("router-view"),S=R;return n(),_(S,{ref_key:"pageRef",ref:p,onScroll:v},{default:e(()=>[c("div",j,[c("div",z,[l(y,{offset:70},{default:e(()=>[l(k,{"default-active":o(h)},{default:e(()=>[(n(!0),L(q,null,N(o(m),(t,w)=>(n(),_(x,{key:w,index:`${t.path}`,onClick:U=>o(f).push(`/hospital/${o(a).params.hoscode}/${t.path}`)},{default:e(()=>[c("span",null,V(t.title),1)]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"])]),_:1})]),c("div",G,[l(C,null,{default:e(({Component:t})=>[l(F,{name:"fade",mode:"out-in"},{default:e(()=>[(n(),_(I(t),{key:o(a).fullPath}))]),_:2},1024)]),_:1})])])]),_:1},512)}}});const ee=K(H,[["__scopeId","data-v-0ccd6175"]]);export{ee as default};
