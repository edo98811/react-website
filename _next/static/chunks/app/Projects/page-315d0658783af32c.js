(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{358:(e,r,s)=>{Promise.resolve().then(s.bind(s,7915))},7915:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});var t=s(5155),c=s(2115),n=s(9435),o=s.n(n);function i(){let[e,r]=(0,c.useState)([]),[s,n]=(0,c.useState)(!0),[i,a]=(0,c.useState)(null);return((0,c.useEffect)(()=>{fetch("/projects.json").then(e=>e.json()).then(e=>{r(e),n(!1)}).catch(e=>{console.error("Error loading projects:",e),a("Failed to load projects."),n(!1)})},[]),s)?(0,t.jsx)("p",{children:"Loading projects..."}):i?(0,t.jsx)("p",{children:i}):(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)("h1",{children:"My GitHub Projects"}),(0,t.jsx)("div",{className:o().projectsGrid,children:e.map((e,r)=>(0,t.jsxs)("div",{className:o().projectCard,children:[(0,t.jsx)("h2",{children:e.name}),(0,t.jsx)("p",{children:e.description}),(0,t.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]},r))})]})}},9435:e=>{e.exports={container:"projects_container__qfu_P",projectsGrid:"projects_projectsGrid__uq_QU",projectCard:"projects_projectCard__LrAe5"}}},e=>{var r=r=>e(e.s=r);e.O(0,[916,441,517,358],()=>r(358)),_N_E=e.O()}]);