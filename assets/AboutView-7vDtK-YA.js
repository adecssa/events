import{l as c,c as d}from"./database-9ePH_hPh.js";import{r as m,o as b,a as n,c as s,b as e,F as i,d as p,e as _,w as f,u as h,t as y,f as g,R}from"./index-YKfd525a.js";const k=e("div",{class:"about"},[e("h1",null,"This is an about page")],-1),v=e("br",null,null,-1),w=e("br",null,null,-1),A={__name:"AboutView",setup(C){const t=m([]);async function l(){t.value=await c()}async function u(){const o={name:"Dyuelber Rodrigues Miranda",church:"Assembléia de Deus",childrenMinistry:!1,phone:"33999999999",address:{zip:"35334000",street:"Rua Equador",number:"124",zone:"Caladinho",city:"Coronel Fabriciano",complement:"AP 102"}};t.value=await d(o)}return b(()=>{l()}),(o,r)=>(n(),s(i,null,[k,e("ul",null,[(n(!0),s(i,null,p(t.value,a=>(n(),s("li",{key:a.id},y(a.name),1))),128))]),v,e("button",{type:"button",class:"btn btn-sm btn-primary",onClick:r[0]||(r[0]=a=>u())}," Criar Inscrição "),w,_(h(R),{to:"/"},{default:f(()=>[g("home")]),_:1})],64))}};export{A as default};
