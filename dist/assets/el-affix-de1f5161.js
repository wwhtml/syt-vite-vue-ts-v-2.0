import{b as k,ad as H,c as P,aF as y,aG as R,m as $,n as W,s as d,aH as M,aI as S,r as m,e as N,W as q,w as G,o as J,aJ as L,aK as O,aL as V,ah as F,q as K,t as U,v as Y,I as j,A as T,g as i,J as A,_ as D,R as Q}from"./index-265deecf.js";const X=k({zIndex:{type:H([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),Z={scroll:({scrollTop:a,fixed:c})=>P(a)&&y(c),[R]:a=>y(a)},z="ElAffix",ee=$({name:z}),te=$({...ee,props:X,emits:Z,setup(a,{expose:c,emit:h}){const e=a,x=W("affix"),l=d(),v=d(),s=d(),{height:n}=M(),{height:r,width:g,top:w,bottom:E,update:p}=S(v,{windowScroll:!1}),u=S(l),o=m(!1),_=m(0),f=m(0),B=N(()=>({height:o.value?`${r.value}px`:"",width:o.value?`${g.value}px`:""})),C=N(()=>{if(!o.value)return{};const t=e.offset?q(e.offset):0;return{height:`${r.value}px`,width:`${g.value}px`,top:e.position==="top"?t:"",bottom:e.position==="bottom"?t:"",transform:f.value?`translateY(${f.value}px)`:"",zIndex:e.zIndex}}),b=()=>{if(s.value)if(_.value=s.value instanceof Window?document.documentElement.scrollTop:s.value.scrollTop||0,e.position==="top")if(e.target){const t=u.bottom.value-e.offset-r.value;o.value=e.offset>w.value&&u.bottom.value>0,f.value=t<0?t:0}else o.value=e.offset>w.value;else if(e.target){const t=n.value-u.top.value-e.offset-r.value;o.value=n.value-e.offset<E.value&&n.value>u.top.value,f.value=t<0?-t:0}else o.value=n.value-e.offset<E.value},I=()=>{p(),h("scroll",{scrollTop:_.value,fixed:o.value})};return G(o,t=>h("change",t)),J(()=>{var t;e.target?(l.value=(t=document.querySelector(e.target))!=null?t:void 0,l.value||L(z,`Target is not existed: ${e.target}`)):l.value=document.documentElement,s.value=O(v.value,!0),p()}),V(s,"scroll",I),F(b),c({update:b,updateRoot:p}),(t,ae)=>(K(),U("div",{ref_key:"root",ref:v,class:T(i(x).b()),style:A(i(B))},[Y("div",{class:T({[i(x).m("fixed")]:o.value}),style:A(i(C))},[j(t.$slots,"default")],6)],6))}});var oe=D(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]]);const le=Q(oe);export{le as E};
