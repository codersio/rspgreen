import{W as j,j as e,a as p}from"./app-CcCqTZT3.js";import{H as f,N as b,g}from"./Nav-DXO1xuTL.js";import{N}from"./notyf.min-DLu_xjpT.js";import"./index-DXmVpITn.js";const r=new N,F=({employees:y,user_type:i,user:m,notif:c})=>{const{data:s,setData:o,post:u,errors:n}=j({title:"",estimate_time:"",estimate_budget:"",start_date:"",end_date:"",employee_id:"",status:""}),t=a=>{o(a.target.name,a.target.value)},x=a=>{a.preventDefault(),u("/projects-store",{onSuccess:()=>{r.success("Project Created successfully")},onError:d=>{typeof d=="object"&&d!==null?Object.entries(d).forEach(([v,l])=>{Array.isArray(l)?l.forEach(h=>r.error(h)):r.error(l)}):r.error("An unexpected error occurred.")}})};return e.jsxs("div",{className:"w-[85.2%] ml-[11.5rem]",children:[e.jsx(f,{user:m,notif:c}),e.jsx(b,{user_type:i}),e.jsxs("div",{className:"px-[10rem] grid  border-blue-950 rounded-b-md  space-y-3",children:[e.jsx("div",{className:"flex justify-end ",children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"",children:e.jsxs(p,{href:"/projects",className:"flex p-1 px-4 space-x-2 text-white rounded-md bg-slate-600",children:["  ",e.jsx("span",{className:"grid place-items-center",children:e.jsx(g,{})})," ",e.jsx("span",{children:"back"})," "]})})})}),e.jsxs("form",{onSubmit:x,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Project Name"}),e.jsx("input",{id:"name",className:"w-full rounded-lg",name:"title",type:"text",value:s.title,onChange:t,required:!0}),n.name&&e.jsx("div",{children:n.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Estimate Hours"}),e.jsx("input",{className:"w-full rounded-lg",id:"email",name:"estimate_time",type:"number",value:s.estimate_time,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:"Estimate Budget"}),e.jsx("input",{className:"w-full rounded-lg",id:"password",name:"estimate_budget",type:"number",value:s.estimate_budget,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",children:"Start Date"}),e.jsx("input",{className:"w-full rounded-lg",id:"phone",name:"start_date",type:"date",value:s.start_date,onChange:t,required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",children:"End Date"}),e.jsx("input",{className:"w-full rounded-lg",id:"address",name:"end_date",type:"date",value:s.end_date,onChange:t,required:!0})]}),e.jsx("br",{}),e.jsx("button",{type:"submit",className:"bg-[#0A1B3F] p-2 rounded-md text-white w-[20%]",children:"Create"})]})]})]})};export{F as default};