"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[937],{3366:(e,t,a)=>{a.d(t,{A:()=>l});a(9950);var n=a(9254),r=a(121),s=a(4414);const l=(0,n.Ay)((e=>(0,s.jsx)(r.A,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}}))},2937:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(5333),r=a(7870),s=a(6491),l=a(8768),o=a(9950),i=a(8429),c=a(8485),d=(a(3366),a(4414));const p=()=>{const[e,t]=(0,o.useState)(""),[a,p]=(0,o.useState)(""),[u,x]=(0,o.useState)(""),[h,m]=(0,o.useState)(),[b,w]=(0,o.useState)(!1),[g,f]=(0,o.useState)(""),[y,j]=(0,o.useState)(!1);const v=(e,t)=>{"clickaway"!==t&&w(!1)},C=(0,d.jsx)(o.Fragment,{children:(0,d.jsx)(n.A,{size:"small","aria-label":"close",color:"inherit",onClick:v,children:(0,d.jsx)(l.yd,{fontSize:"small"})})});return 200===h?(0,d.jsx)(i.C5,{to:"/home"}):(0,d.jsxs)("div",{className:"w-full h-[80vh] flex justify-center items-center",children:[(0,d.jsx)(r.A,{open:b,autoHideDuration:6e3,onClose:v,message:g,action:C,anchorOrigin:{vertical:"top",horizontal:"center"}}),(0,d.jsxs)("form",{className:"h-max w-max flex flex-col items-center justify-center gap-4 bg-[#09141a] px-8 py-12 border-transparent rounded-2xl",children:[(0,d.jsx)("h1",{className:"w-full text-start text-2xl",children:"Add Smtp Email :"}),(0,d.jsx)(s.A,{className:"flex items-center min-w-[500px] gap-[5%]",children:(0,d.jsx)("input",{type:"text",placeholder:"example",value:e,onChange:e=>{t(e.target.value)},className:"w-[500px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-white text-[#09141a] h-[55px]"})}),(0,d.jsxs)(s.A,{className:"flex items-center min-w-[500px] gap-[5%]",children:[(0,d.jsx)("input",{type:"text",placeholder:"********",value:a,onChange:e=>{p(e.target.value)},className:"w-[60%] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-white text-[#09141a] h-[55px]"}),(0,d.jsx)(c.A,{className:"w-[35%] text-white bg-[#142733] flex justify-center items-center gap-4 border rounded-md border-transparent px-2 h-[54px]",onClick:function(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";for(let a=1;a<=8;a++){let a=Math.floor(Math.random()*t.length+1);e+=t.charAt(a)}p(e)},children:"Generate Password"})]}),(0,d.jsx)(s.A,{className:"flex items-center min-w-[500px] gap-[5%]",children:(0,d.jsx)("input",{type:"text",placeholder:"example.com",value:u,onChange:e=>{x(e.target.value)},className:"w-[500px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-white text-[#09141a] h-[55px]"})}),(0,d.jsx)("button",{disabled:y,onClick:async function(t){t.preventDefault(),j(!0);try{const t=await fetch("http://hwsrv-1226580.hostwindsdns.com:8080/api/addEmail",{method:"POST",body:JSON.stringify({user:e,password:a,domain:u}),headers:{"Content-Type":"application/json"}});if(m(t.status),400===t.status){const e=await t.json();f(e.errors),w(!0)}j(!1)}catch(n){throw j(!1),n}},className:"w-[500px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-slate-500 cursor-pointer text-white",children:"Submit"})]})]})}}}]);