import{j as e,r as a}from"./index-B46e2vek.js";import{P as c}from"./PageTitle-BL45nU2D.js";import{N as l}from"./NavButton-HroSnsZy.js";const d=()=>e.jsxs("svg",{className:"link-icon",viewBox:"0 0 24 24",id:"meteor-icon-kit__regular-external-link",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 3.41421L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L20.5858 2H18C17.4477 2 17 1.55228 17 1C17 0.447715 17.4477 0 18 0H23C23.5523 0 24 0.447715 24 1V6C24 6.55228 23.5523 7 23 7C22.4477 7 22 6.55228 22 6V3.41421ZM12.9838 3C13.536 3 13.9838 3.44772 13.9838 4C13.9838 4.55228 13.536 5 12.9838 5H3C2.44772 5 2 5.44772 2 6V21C2 21.5523 2.44772 22 3 22H18.0011C18.5534 22 19.0011 21.5523 19.0011 20.9973L18.9734 11.0028C18.9719 10.4505 19.4184 10.0015 19.9706 10C20.5229 9.99847 20.9719 10.4449 20.9734 10.9972L21.0011 21C21.0011 22.6569 19.658 24 18.0011 24H3C1.34315 24 0 22.6569 0 21V6C0 4.34315 1.34315 3 3 3H12.9838Z",fill:"#ffffff"})})]});function s({projectList:i}){return i.length===0?e.jsx("ul",{children:e.jsx("h2",{children:"Coming Soon.."})}):e.jsx("ul",{children:i.map(o=>e.jsxs("li",{children:[e.jsx("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit"},children:e.jsxs("div",{className:"project-image",children:[e.jsx("img",{src:o.image,srcSet:o.image,alt:o.name,loading:"lazy"}),e.jsx("div",{className:"visit-site-icon",children:e.jsx(d,{})})]})}),e.jsxs("div",{className:"project-details",children:[e.jsx("h5",{children:o.name}),e.jsx("h3",{children:o.category})]})]},o.id))})}const p="/Website-Portfolio/assets/memory-card-Di76a3_S.webp",m="/Website-Portfolio/assets/cv-application-BVueNk8G.webp",j="/Website-Portfolio/assets/pokemon-guessing-game-8fGNx2A0.webp",g="/Website-Portfolio/assets/weather-app-BSJHpjh5.webp";function b(){const[i,o]=a.useState("all-projects"),n=[{id:"all-projects",name:"All Projects"},{id:"odin-projects",name:"Odin Projects"},{id:"mini-projects",name:"Mini Projects"},{id:"personal-projects",name:"Personal Projects"},{id:"collaborations",name:"Collaborations"}],r=[{id:1,name:"Memory Card",image:p,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Memory-Card/"},{id:2,name:"CV Application",image:m,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-CV-Application/"},{id:3,name:"Weather App",image:g,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Weather-App/"},{id:4,name:"Pokemon Guessing Game",image:j,category:"mini-projects",url:"https://ceez-11.github.io/Pokemon-Guessing-Game/"},{id:5,name:"Battleship Game",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Battleship/"},{id:6,name:"Rock Paper Scissors Game",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Rock-Paper-Scissors/"},{id:7,name:"Library App",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Library/"},{id:8,name:"Todo List App",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-TodoList/"},{id:9,name:"Restaurant Page",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Restaurant-Page/"},{id:10,name:"Tic-Tac-Toe Game",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Tic-Tac-Toe/"},{id:11,name:"Admin Dashboard",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Admin-Dashboard/"},{id:12,name:"Sign Up Form",image:null,category:"odin-projects",url:"https://ceez-11.github.io/Odin-Project-Sign-up-Form/"}];return e.jsxs(e.Fragment,{children:[e.jsx(c,{name:"Portfolio"}),e.jsxs("div",{className:"project-container nav-container",children:[e.jsx("nav",{className:"info-nav",children:e.jsx("ul",{children:e.jsx(l,{navButtons:n,activeTab:i,setActiveTab:o})})}),e.jsxs("div",{className:"project-content",children:[i==="all-projects"&&e.jsx(s,{projectList:r}),i==="odin-projects"&&e.jsx(s,{projectList:r.filter(t=>t.category==="odin-projects")}),i==="mini-projects"&&e.jsx(s,{projectList:r.filter(t=>t.category==="mini-projects")}),i==="personal-projects"&&e.jsx(s,{projectList:r.filter(t=>t.category==="personal-projects")}),i==="collaborations"&&e.jsx(s,{projectList:r.filter(t=>t.category==="collaborations")})]})]})]})}export{b as default};
