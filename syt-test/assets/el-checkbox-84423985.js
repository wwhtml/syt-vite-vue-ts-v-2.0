import{c9 as A,ca as U,b1 as fe,b7 as ke,cb as pe,cc as he,cd as ge,ce as xe,br as X,bT as V,k as K,c as q,aF as z,N as E,e as h,Q as G,bU as Ce,bP as P,w as Y,am as Z,aA as _,l as ee,r as T,bg as w,aD as ye,cf as H,bq as W,cg as Se,bW as ne,m as L,u as le,n as O,q as C,x as ae,y as te,v as J,A as x,g as u,z as I,t as y,ap as $,B as F,ch as N,I as M,K as Le,ao as oe,M as se,G as D,a9 as ie,_ as R,J as Be,b as we,ad as Ee,p as Ie,aw as $e,R as Fe,S as ue}from"./index-cb29aa87.js";import{b as Ne,h as Ve,i as ze}from"./el-select-2432553c.js";function Ge(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var Te=800,De=16,Pe=Date.now;function Oe(e){var n=0,a=0;return function(){var l=Pe(),s=De-(l-a);if(a=l,s>0){if(++n>=Te)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Me(e){return function(){return e}}var Re=A?function(e,n){return A(e,"toString",{configurable:!0,enumerable:!1,value:Me(n),writable:!0})}:Ne;const Ae=Re;var Ue=Oe(Ae);const Ke=Ue;var Q=Math.max;function qe(e,n,a){return n=Q(n===void 0?e.length-1:n,0),function(){for(var l=arguments,s=-1,d=Q(l.length-n,0),b=Array(d);++s<d;)b[s]=l[n+s];s=-1;for(var t=Array(n+1);++s<n;)t[s]=l[s];return t[n]=a(b),Ge(e,this,t)}}var j=U?U.isConcatSpreadable:void 0;function He(e){return fe(e)||ke(e)||!!(j&&e&&e[j])}function re(e,n,a,l,s){var d=-1,b=e.length;for(a||(a=He),s||(s=[]);++d<b;){var t=e[d];n>0&&a(t)?n>1?re(t,n-1,a,l,s):pe(s,t):l||(s[s.length]=t)}return s}function We(e){var n=e==null?0:e.length;return n?re(e,1):[]}function Je(e){return Ke(qe(e,void 0,We),e+"")}function Qe(e,n,a){for(var l=-1,s=n.length,d={};++l<s;){var b=n[l],t=he(e,b);a(t,b)&&ge(d,xe(b,e),t)}return d}function je(e,n){return Qe(e,n,function(a,l){return Ve(e,l)})}var Xe=Je(function(e,n){return e==null?{}:je(e,n)});const Ye=Xe,de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:X,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},be={[V]:e=>K(e)||q(e)||z(e),change:e=>K(e)||q(e)||z(e)},B=Symbol("checkboxGroupContextKey"),Ze=({model:e,isChecked:n})=>{const a=E(B,void 0),l=h(()=>{var d,b;const t=(d=a==null?void 0:a.max)==null?void 0:d.value,m=(b=a==null?void 0:a.min)==null?void 0:b.value;return!G(t)&&e.value.length>=t&&!n.value||!G(m)&&e.value.length<=m&&n.value});return{isDisabled:Ce(h(()=>(a==null?void 0:a.disabled.value)||l.value)),isLimitDisabled:l}},_e=(e,{model:n,isLimitExceeded:a,hasOwnLabel:l,isDisabled:s,isLabeledByFormItem:d})=>{const b=E(B,void 0),{formItem:t}=P(),{emit:m}=ee();function o(i){var v,k;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(k=e.falseLabel)!=null?k:!1}function f(i,v){m("change",o(i),v)}function p(i){if(a.value)return;const v=i.target;m("change",o(v.checked),i)}async function S(i){a.value||!l.value&&!s.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=o([!1,e.falseLabel].includes(n.value)),await _(),f(n.value,i)))}const r=h(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return Y(()=>e.modelValue,()=>{r.value&&(t==null||t.validate("change").catch(i=>Z()))}),{handleChange:p,onClickRoot:S}},en=e=>{const n=T(!1),{emit:a}=ee(),l=E(B,void 0),s=h(()=>G(l)===!1),d=T(!1);return{model:h({get(){var t,m;return s.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:n.value},set(t){var m,o;s.value&&w(t)?(d.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&t.length>(l==null?void 0:l.max.value),d.value===!1&&((o=l==null?void 0:l.changeEvent)==null||o.call(l,t))):(a(V,t),n.value=t)}}),isGroup:s,isLimitExceeded:d}},nn=(e,n,{model:a})=>{const l=E(B,void 0),s=T(!1),d=h(()=>{const o=a.value;return z(o)?o:w(o)?ye(e.label)?o.map(H).some(f=>ze(f,e.label)):o.map(H).includes(e.label):o!=null?o===e.trueLabel:!!o}),b=W(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),t=W(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),m=h(()=>!!n.default||!Se(e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},ln=(e,{model:n})=>{function a(){w(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&a()},ce=(e,n)=>{const{formItem:a}=P(),{model:l,isGroup:s,isLimitExceeded:d}=en(e),{isFocused:b,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=nn(e,n,{model:l}),{isDisabled:p}=Ze({model:l,isChecked:t}),{inputId:S,isLabeledByFormItem:r}=ne(e,{formItemContext:a,disableIdGeneration:f,disableIdManagement:s}),{handleChange:i,onClickRoot:v}=_e(e,{model:l,isLimitExceeded:d,hasOwnLabel:f,isDisabled:p,isLabeledByFormItem:r});return ln(e,{model:l}),{inputId:S,isLabeledByFormItem:r,isChecked:t,isDisabled:p,isFocused:b,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:l,handleChange:i,onClickRoot:v}},an=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],tn=["id","indeterminate","disabled","value","name","tabindex"],on=L({name:"ElCheckbox"}),sn=L({...on,props:de,emits:be,setup(e){const n=e,a=le(),{inputId:l,isLabeledByFormItem:s,isChecked:d,isDisabled:b,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:p,onClickRoot:S}=ce(n,a),r=O("checkbox"),i=h(()=>[r.b(),r.m(m.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=h(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",t.value)]);return(k,c)=>(C(),ae(ie(!u(o)&&u(s)?"span":"label"),{class:x(u(i)),"aria-controls":k.indeterminate?k.controls:null,onClick:u(S)},{default:te(()=>[J("span",{class:x(u(v))},[k.trueLabel||k.falseLabel?I((C(),y("input",{key:0,id:u(l),"onUpdate:modelValue":c[0]||(c[0]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,name:k.name,tabindex:k.tabindex,disabled:u(b),"true-value":k.trueLabel,"false-value":k.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(p)&&u(p)(...g)),onFocus:c[2]||(c[2]=g=>t.value=!0),onBlur:c[3]||(c[3]=g=>t.value=!1),onClick:c[4]||(c[4]=F(()=>{},["stop"]))},null,42,an)),[[N,u(f)]]):I((C(),y("input",{key:1,id:u(l),"onUpdate:modelValue":c[5]||(c[5]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,disabled:u(b),value:k.label,name:k.name,tabindex:k.tabindex,onChange:c[6]||(c[6]=(...g)=>u(p)&&u(p)(...g)),onFocus:c[7]||(c[7]=g=>t.value=!0),onBlur:c[8]||(c[8]=g=>t.value=!1),onClick:c[9]||(c[9]=F(()=>{},["stop"]))},null,42,tn)),[[N,u(f)]]),J("span",{class:x(u(r).e("inner"))},null,2)],2),u(o)?(C(),y("span",{key:0,class:x(u(r).e("label"))},[M(k.$slots,"default"),k.$slots.default?D("v-if",!0):(C(),y(Le,{key:0},[oe(se(k.label),1)],64))],2)):D("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var un=R(sn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const rn=["name","tabindex","disabled","true-value","false-value"],dn=["name","tabindex","disabled","value"],bn=L({name:"ElCheckboxButton"}),cn=L({...bn,props:de,emits:be,setup(e){const n=e,a=le(),{isFocused:l,isChecked:s,isDisabled:d,checkboxButtonSize:b,model:t,handleChange:m}=ce(n,a),o=E(B,void 0),f=O("checkbox"),p=h(()=>{var r,i,v,k;const c=(i=(r=o==null?void 0:o.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(k=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?k:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=h(()=>[f.b("button"),f.bm("button",b.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",l.value)]);return(r,i)=>(C(),y("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?I((C(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>$(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[2]||(i[2]=v=>l.value=!0),onBlur:i[3]||(i[3]=v=>l.value=!1),onClick:i[4]||(i[4]=F(()=>{},["stop"]))},null,42,rn)),[[N,u(t)]]):I((C(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>$(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[7]||(i[7]=v=>l.value=!0),onBlur:i[8]||(i[8]=v=>l.value=!1),onClick:i[9]||(i[9]=F(()=>{},["stop"]))},null,42,dn)),[[N,u(t)]]),r.$slots.default||r.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:Be(u(s)?u(p):void 0)},[M(r.$slots,"default",{},()=>[oe(se(r.label),1)])],6)):D("v-if",!0)],2))}});var ve=R(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const vn=we({modelValue:{type:Ee(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:X,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),mn={[V]:e=>w(e),change:e=>w(e)},fn=L({name:"ElCheckboxGroup"}),kn=L({...fn,props:vn,emits:mn,setup(e,{emit:n}){const a=e,l=O("checkbox"),{formItem:s}=P(),{inputId:d,isLabeledByFormItem:b}=ne(a,{formItemContext:s}),t=async o=>{n(V,o),await _(),n("change",o)},m=h({get(){return a.modelValue},set(o){t(o)}});return Ie(B,{...Ye($e(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),Y(()=>a.modelValue,()=>{a.validateEvent&&(s==null||s.validate("change").catch(o=>Z()))}),(o,f)=>{var p;return C(),ae(ie(o.tag),{id:u(d),class:x(u(l).b("group")),role:"group","aria-label":u(b)?void 0:o.label||"checkbox-group","aria-labelledby":u(b)?(p=u(s))==null?void 0:p.labelId:void 0},{default:te(()=>[M(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var me=R(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const gn=Fe(un,{CheckboxButton:ve,CheckboxGroup:me});ue(ve);ue(me);export{gn as E,re as b,We as f,qe as o,Ke as s};
