import{b as f,ad as y,m as i,n as u,q as r,t,A as o,g as a,I as l,ao as d,M as n,G as p,v as c,J as m,_ as h,R as v}from"./index-b0e2f3a3.js";const S=f({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=i({name:"ElCard"}),C=i({...b,props:S,setup(w){const s=u("card");return(e,k)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[l(e.$slots,"header",{},()=>[d(n(e.header),1)])],2)):p("v-if",!0),c("div",{class:o([a(s).e("body"),e.bodyClass]),style:m(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[l(e.$slots,"footer",{},()=>[d(n(e.footer),1)])],2)):p("v-if",!0)],2))}});var g=h(C,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(g);export{E};
