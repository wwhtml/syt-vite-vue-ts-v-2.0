import{au as e}from"./index-2ba8a0e3.js";const h=t=>e.get("/hosp/hospital/"+t),r=t=>e.get("/hosp/hospital/department/"+t),g=(t,o,s,a)=>e.get(`/hosp/hospital/auth/getBookingScheduleRule/${t}/${o}/${s}/${a}`),i=(t,o,s)=>e.get(`/hosp/hospital/auth/findScheduleList/${t}/${o}/${s}`),l=t=>e.get(`/hosp/hospital/getSchedule/${t}`);export{r as a,g as b,i as c,l as d,h as g};