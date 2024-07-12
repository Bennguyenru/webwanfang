(()=>{var e={};e.id=363,e.ids=[363],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6648:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>h,tree:()=>d});var a=t(482),r=t(9108),l=t(2563),i=t.n(l),n=t(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let d=["",{children:["reset-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9572)),"/workspaces/webwanfang/app/reset-password/page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,3472)),"/workspaces/webwanfang/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,8211)),"/workspaces/webwanfang/app/not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/workspaces/webwanfang/app/reset-password/page.jsx"],x="/reset-password/page",p={require:t,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/reset-password/page",pathname:"/reset-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4257:(e,s,t)=>{Promise.resolve().then(t.bind(t,5181)),Promise.resolve().then(t.t.bind(t,1900,23)),Promise.resolve().then(t.t.bind(t,1476,23))},5181:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(5344),r=t(3729),l=t(6506),i=t(240),n=t(1704);let o=()=>{let[e,s]=(0,r.useState)(!1);return a.jsx("header",{className:"site-header site-header--absolute is--white py-3",id:"sticky-menu",children:a.jsx("div",{className:"global-container",children:(0,a.jsxs)("div",{className:"flex items-center justify-between gap-x-8",children:[a.jsx(n.Z,{}),a.jsx(i.Z,{mobileMenu:e,setMobileMenu:s}),(0,a.jsxs)("div",{className:"flex items-center gap-6",children:[a.jsx(l.default,{href:"/login",className:"button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block",children:"Login"}),a.jsx(l.default,{href:"/signup",className:"button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block",children:"Sign up free"}),a.jsx("div",{className:"block lg:hidden",children:a.jsx("button",{onClick:()=>s(!0),className:"mobile-menu-trigger is-black",children:a.jsx("span",{})})})]})]})})})}},1704:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(5344),r=t(9410),l=t(6506);let i={src:"/_next/static/media/logo-dark.a2160bbd.png",height:23,width:111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mNgqGOwYyhgiGdwZghhKGGIZmCoYPBlyGNoYChlqGBoZJgBAGXTBqvFHH1YAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},n=()=>a.jsx(l.default,{href:"/",children:a.jsx(r.default,{src:i,alt:"AIMass",width:"96",height:"24"})})},9572:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var a=t(5036),r=t(2669),l=t(6720);let i=function(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(l.ZP,{}),a.jsx("main",{className:"main-wrapper relative overflow-hidden",children:a.jsx("section",{id:"password-reset-section",children:a.jsx("div",{className:"py-40 pt-36 xl:pb-[200px] xl:pt-[180px]",children:a.jsx("div",{className:"global-container",children:(0,a.jsxs)("div",{className:"mx-auto max-w-[910px] text-center",children:[a.jsx("h1",{className:"mb-[50px]",children:"Reset Password"}),(0,a.jsxs)("div",{className:"block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10",children:[(0,a.jsxs)("form",{action:"#",method:"post",className:"flex flex-col gap-y-5",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-y-[10px]",children:[a.jsx("label",{htmlFor:"password-reset-email",className:"text-lg font-bold leading-[1.6]",children:"Email address"}),a.jsx("input",{type:"email",name:"password-reset-email",id:"password-reset-email",placeholder:"example@gmail.com",className:"rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed",required:""})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-[10px]",children:[a.jsx("label",{htmlFor:"password-reset-password",className:"text-lg font-bold leading-[1.6]",children:"Enter Password"}),a.jsx("input",{type:"password",name:"password-reset-password",id:"password-reset-password",placeholder:"............",className:"rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed",required:""})]})]}),a.jsx("button",{type:"submit",className:"button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white",children:"Change password"})]}),a.jsx("p",{className:"mt-6 text-center text-base",children:"If you didn’t request a password recovery link, please ignore this."})]})]})})})})}),a.jsx(r.Z,{})]})}},2669:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});var a=t(5036),r=t(2813),l=t(6274);let i=()=>(0,a.jsxs)("footer",{className:"relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]",children:[a.jsx("div",{className:"py-[60px] xl:pb-[100px] xl:pt-[130px]",children:a.jsx("div",{className:"overflow-hidden",children:(0,a.jsxs)("div",{className:"footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap",children:[a.jsx(r.default,{src:"/assets/img_placeholder/th-1/footer-text-slider-icon.svg",alt:"footer-text-slider-icon",width:60,height:60,className:"h-10 w-10 lg:h-[60px] lg:w-[60px]"}),a.jsx("div",{className:"block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]",children:"Start building software"}),a.jsx(r.default,{src:"/assets/img_placeholder/th-1/footer-text-slider-icon.svg",alt:"footer-text-slider-icon",width:60,height:60,className:"h-10 w-10 lg:h-[60px] lg:w-[60px]"}),a.jsx("div",{className:"block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]",children:"Start building software"}),a.jsx(r.default,{src:"/assets/img_placeholder/th-1/footer-text-slider-icon.svg",alt:"footer-text-slider-icon",width:60,height:60,className:"h-10 w-10 lg:h-[60px] lg:w-[60px]"}),a.jsx("div",{className:"block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]",children:"Start building software"})]})})}),(0,a.jsxs)("div",{className:"global-container",children:[a.jsx("div",{className:"h-[1px] w-full bg-[#DBD6CF]"}),(0,a.jsxs)("div",{className:"lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-y-6",children:[a.jsx(l.default,{href:"/",className:"inline-block",children:a.jsx(r.default,{src:"/assets/img_placeholder/th-1/logo.png",alt:"logo",width:96,height:24})}),a.jsx("p",{children:"Our mission is to harness the power of AI to solve complex business challenges & decision-makers with data-driven insights, and enhance user experiences across digital platforms."}),(0,a.jsxs)("p",{children:["Website:"," ",a.jsx(l.default,{href:"https://www.example.com",children:"www.example.com"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-6",children:[a.jsx("h4",{className:"text-[21px] font-semibold capitalize text-black",children:"Primary Pages"}),(0,a.jsxs)("ul",{className:"flex flex-col gap-y-[10px] capitalize",children:[a.jsx("li",{children:a.jsx(l.default,{href:"/",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Home"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/about",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"About Us"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/services",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Services"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/pricing",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"pricing"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/contact",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Contact"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-6",children:[a.jsx("h4",{className:"text-[21px] font-semibold capitalize text-black",children:"Utility pages"}),(0,a.jsxs)("ul",{className:"flex flex-col gap-y-[10px] capitalize",children:[a.jsx("li",{children:a.jsx(l.default,{href:"/signup",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Signup"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/login",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Login"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/not-found",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"404 Not found"})}),a.jsx("li",{children:a.jsx(l.default,{href:"/reset-password",className:"transition-all duration-300 ease-linear hover:text-colorOrangyRed",children:"Password Reset"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-6",children:[a.jsx("h4",{className:"text-[21px] font-semibold capitalize text-black",children:"Subscribe to our newsletter"}),a.jsx("form",{action:"#",method:"post",className:"",children:(0,a.jsxs)("div",{className:"relative h-[50px] max-w-[300px]",children:[a.jsx("input",{type:"email",name:"newsletter-email",id:"newsletter-email",placeholder:"Enter your email",className:"p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none",required:""}),a.jsx("button",{type:"submit",className:"absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-orange-500",children:a.jsx(r.default,{src:"/assets/img_placeholder/th-1/arrow-right-large.svg",height:24,width:24,alt:"newsletter"})})]})})]})]}),a.jsx("div",{className:"h-[1px] w-full bg-[#DBD6CF]"}),a.jsx("div",{className:"py-9 text-center",children:(0,a.jsxs)("p",{children:["\xa9 Copyright ",new Date().getFullYear(),", All Rights Reserved by Favdevs"]})})]}),a.jsx("div",{className:"orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"}),a.jsx("div",{className:"orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"})]})},6720:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});let a=(0,t(6843).createProxy)(String.raw`/workspaces/webwanfang/components/header/Header_01.jsx`),{__esModule:r,$$typeof:l}=a,i=a.default}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[638,867,397,813,343],()=>t(6648));module.exports=a})();