"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_copy_ts-app_assets_modules_react-shared_hooks_use-v-328d8a"],{98950:(e,t,r)=>{function n(e){let t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}function o(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent||"");let t=getSelection();if(null==t)return Promise.reject(Error());t.removeAllRanges();let r=document.createRange();return r.selectNodeContents(e),t.addRange(r),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function i(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);let t=document.body;if(!t)return Promise.reject(Error());let r=n(e);return t.appendChild(r),o(r),t.removeChild(r),Promise.resolve()}r.d(t,{z:()=>i})},22125:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(67294),o=r(78720);let i=e=>e;function a(e){let t=n.useRef({}),r=n.useRef({}),a=(e,r)=>{t.current[e](r)},s=n.useRef(a);s.current=a;let l=n.useRef(new ResizeObserver(e=>{for(let t of e){let e=t.target,r="data-key",n=e.getAttribute(r);if(null===n)throw Error(`Value not found, for '${r}' attribute`);s.current(n,e)}}));n.useEffect(()=>{let e=l.current;return()=>{e.disconnect()}},[]);let{size:c,keyExtractor:u=i}=e,d=n.useMemo(()=>{let e=e=>t=>{r.current[e]&&l.current.unobserve(r.current[e]),t&&(s.current(e,t),l.current.observe(t)),r.current[e]=t},t={};for(let r=0;r<c;r++){let n=u(r);t[n]=e(n)}return t},[c,u]),f=(0,o.o)(e),h=f.virtualItems.map(e=>(t.current[e.key]=e.measureRef,{...e,measureRef:d[e.key]}));return{...f,virtualItems:h}}},15387:(e,t,r)=>{r.d(t,{F:()=>i});var n=r(67294),o=r(78720);function i({scrollToFn:e,horizontal:t,parentRef:r,useVirtualImpl:i=o.o,...s}){let l=(0,n.useRef)(window),c=(0,n.useCallback)(()=>{let e=r.current?.getBoundingClientRect(),n=e?.top??0,o=e?.left??0;return t?-1*o:-1*n},[t,r]),u=(0,n.useCallback)(e=>{let n=(r.current?.getBoundingClientRect().top??0)+window.scrollY,o=e+n;l.current?.scroll({top:t?0:o,left:t?o:0})},[t,r]);return i({...s,horizontal:t,parentRef:r,scrollToFn:e||u,onScrollElement:l,scrollOffsetFn:c,useObserver:()=>a(l)})}function a(e){let[t,r]=(0,n.useState)({height:0,width:0}),o=e.current;return(0,n.useLayoutEffect)(()=>{if(!o)return;let e=()=>{let e={height:o.innerHeight,width:o.innerWidth};r(t=>t.height!==e.height||t.width!==e.width?e:t)};return e(),o.addEventListener("resize",e),()=>{o.removeEventListener("resize",e)}},[o]),t}},89359:(e,t,r)=>{function n(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=n("meta[name=analytics-location]");return e?e.content:window.location.pathname}function i(){let e=n("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=n("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}function a(){return`${window.location.protocol}//${window.location.host}${o()+i()}`}r.d(t,{S:()=>a})},4751:(e,t,r)=>{r.d(t,{AF:()=>T,vC:()=>N,fQ:()=>I});var n,o,i,a,s,l=r(85893),c=r(85529),u=r(98833),d=r(42483),f=r(50919),h=r(67294),p=r(50901),m=r(74121),x=r(66280),y=r(57294),g=r(38490),b=r(73290),w=r(97011);function v({checkRun:e}){let{icon:t,iconColor:r}=S(e.icon),n="in_progress"===e.state;return(0,l.jsxs)(d.Z,{"data-testid":"check-run-item",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",height:"38px",py:2,pr:3,pl:"12px",alignItems:"baseline"},children:[n?C():(0,l.jsx)(u.Z,{icon:t,sx:{color:r,margin:"0px 7px",alignSelf:"center"}}),(0,l.jsx)(g.Z,{"aria-label":e.avatarDescription,direction:"e",children:(0,l.jsx)(b.Z,{href:e.avatarUrl,sx:{mr:2},children:(0,l.jsx)(y.O,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})}),(0,l.jsxs)(w.Z,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"13px",color:"fg.muted"},children:[(0,l.jsxs)(w.Z,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,l.jsx)(w.Z,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,l.jsxs)(w.Z,{children:[" ","- ",e.pending?(0,l.jsx)(w.Z,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,l.jsx)(b.Z,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}function S(e){switch(e){case"check":return{icon:c.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:c.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:c.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:c.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:c.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:c.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:c.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:c.AlertIcon,iconColor:"danger.fg"};default:return{icon:c.XIcon,iconColor:"danger.fg"}}}function C(){return(0,l.jsx)(d.Z,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,l.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,l.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,l.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,l.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})})}try{(n=v).displayName||(n.displayName="CheckRunItem")}catch{}function k({checkRuns:e}){return(0,l.jsx)(d.Z,{sx:{display:"flex",flexDirection:"column",maxHeight:"230px",overflow:"auto"},children:e.map((e,t)=>(0,l.jsx)(v,{checkRun:e},t))})}try{(o=k).displayName||(o.displayName="ChecksStatusBadgeFooter")}catch{}function j({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,l.jsx)(w.Z,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,l.jsx)(w.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,l.jsx)(w.Z,{sx:{color:"checks.donutPending",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,l.jsx)(w.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{(i=j).displayName||(i.displayName="HeaderState")}catch{}function T(e){let{combinedStatus:t,isOpen:r,onDismiss:n}=e,o=t?(0,l.jsx)(j,{checksHeaderState:t.checksHeaderState}):"Loading...";return r?(0,l.jsx)(x.V,{onClose:n,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",borderRadius:0},title:o,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,l.jsx)(x.V.Body,{sx:{padding:0},children:(0,l.jsx)(p.S,{sx:{padding:0},children:t?(0,l.jsx)(k,{checkRuns:t.checkRuns}):(0,l.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,l.jsx)(m.Z,{size:"medium"})})})})}):null}try{(a=T).displayName||(a.displayName="CheckStatusDialog")}catch{}let E={success:{circled:c.CheckCircleIcon,filled:c.CheckCircleFillIcon,default:c.CheckIcon,color:"checks.donutSuccess"},pending:{circled:c.CircleIcon,filled:c.DotFillIcon,default:c.DotFillIcon,color:"checks.donutPending"},error:{circled:c.XCircleIcon,filled:c.XCircleFillIcon,default:c.XIcon,color:"checks.donutError"}};function N(e){let{statusRollup:t,combinedStatus:r,variant:n="default",disablePopover:o,size:i="medium"}=e,[a,s]=(0,h.useState)(!1),c=(0,h.useRef)(null),p=E[t],{icon:m,iconColor:x}={icon:p?.[n]||E.error[n],iconColor:p?.color||E.error.color};return o?(0,l.jsx)("span",{"data-testid":"checks-status-badge-icon-only",children:(0,l.jsx)(u.Z,{icon:m,"aria-label":"See all checks",sx:{color:x}})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{onClick:()=>{s(!0),e.onWillOpenPopup},onMouseEnter:e.onWillOpenPopup,children:(0,l.jsx)(f.h,{"data-testid":"checks-status-badge-icon",icon:m,variant:"invisible",size:i,"aria-label":r?.checksStatusSummary??t,sx:{py:0,px:0,mr:2,svg:{color:x},":hover:not([disabled])":{bg:"pageHeaderBg"}},ref:c})}),a&&(0,l.jsx)(T,{combinedStatus:r,isOpen:a,onDismiss:()=>{s(!1),c.current?.focus()}})]})}try{(s=N).displayName||(s.displayName="ChecksStatusBadge")}catch{}var R=r(78212),P=r(89445);function I(e,t){let[r,n]=(0,h.useState)(),[o,i]=(0,h.useState)(),a=(0,h.useCallback)(async()=>{if(o!==e&&(i(e),n(void 0),e)){let r=(0,R.S$)(t,e),o=await (0,P.v)(r);n(await o.json())}},[e,o,t]);return[r,a]}},24601:(e,t,r)=>{r.d(t,{aJ:()=>j,cI:()=>S,eK:()=>g});var n=r(82918),o=r(49237),i=r(28382),a=r(89359),s=r(68202),l=r(53729),c=r(86283),u=r(46426);let d=!1,f=0,h=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function x(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function g(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(e)){if(R(e))return;let r=Error(),n=x(e),o={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${n}`,stacktrace:S(r)};b(v(o,t));return}y(e)||b(v(w(e),t))}else y(e)||b(v(w(e),t))}async function b(e){if(!E())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(k(e.error.stacktrace)){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:S(e)}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,s.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:j()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function S(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let C=/(chrome|moz|safari)-extension:\/\//;function k(e){return e.some(e=>C.test(e.filename)||C.test(e.function))}function j(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,n.b)();return`anonymous-${t}`}let T=!1;function E(){return!T&&!d&&f<10&&(0,o.Gb)()}if(c.iG?.addEventListener("pageshow",()=>T=!1),c.iG?.addEventListener("pagehide",()=>T=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{g(e.data.error)})}let N=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function R(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(N.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}},75809:(e,t,r)=>{r.d(t,{f:()=>n});let n=e=>({"data-testid":e})},7180:(e,t,r)=>{r.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var n=r(46426),o=r(71643),i=r(24601),a=r(27856),s=r.n(a),l=r(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function c({policy:e,policyName:t,fallback:r,fallbackOnError:a=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return c&&new Promise(e=>{let r=window.performance.now(),n=s().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==n.length){let a=Error("Trusted Types policy output sanitized"),s=a.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.q)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:s,outputLength:i.length,sanitizedLength:n.length,executionTime:o-r}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return r}let u={apply:c}},22490:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let i={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},a={createPolicy:(e,t)=>({name:e,...i,...t})},s=globalThis.trustedTypes??a,l=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})},20684:(e,t,r)=>{r.d(t,{o:()=>x});var n,o,i=r(67294),a=r(37169),s=r(69202),l=r(83991),c=r(85893);let u=(0,i.createContext)(null),d=null;function f({children:e,initialMessages:t}){return(0,i.useEffect)(()=>{if(t)for(let[e,r]of t)setTimeout(()=>{h(e,r)},0);return()=>{d=null}}),(0,c.jsx)(u.Provider,{value:m,children:e})}function h(e,t){if(null===d)throw Error('Test helper `dispatchAliveTestMessage` called outside `AliveTestProvider`. Please wrap your component under test in `AliveTestProvider` from "@github-ui/use-alive/test-utils".');let r=Array.from(d.subscribers(e));for(let e of r)e(t)}function p(){return(0,i.useContext)(u)}async function m(e,t){let{SubscriptionSet:n,Topic:o}=await Promise.resolve().then(r.bind(r,21461)),i=o.parse(e);if(!i)throw Error('Invalid channel name. Did you forget to sign it with `signChannel("channel-name")`?');return d||(d=new n),d.add({topic:i,subscriber:t}),{unsubscribe:()=>{d?.delete({topic:i,subscriber:t})}}}try{(n=u).displayName||(n.displayName="AliveTestContext")}catch{}try{(o=f).displayName||(o.displayName="AliveTestProvider")}catch{}function x(e,t){let r=(0,a.Z)(),n=p();(0,i.useEffect)(()=>{let o=()=>{},i=!1;return async function(){if("function"==typeof n){let r=await n(e,t);r&&(o=r.unsubscribe);return}try{let n=await (0,s.G)();if(i)return;let a=(0,l.s)(n,e,t);a?.unsubscribe&&(r()?o=a.unsubscribe:a.unsubscribe())}catch(e){console.error(e)}}(),()=>{i=!0,o()}},[e,t,r,n])}},53664:(e,t,r)=>{r.d(t,{w:()=>s,z:()=>a});var n=r(67294),o=r(95253),i=r(87487);function a(){let e=(0,n.useContext)(i.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:r,metadata:a}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,i={})=>{let s={react:!0,app_name:t,category:r,...a};(0,o.q)(e,{...s,...i,target:n})},[t,r,a])}}function s(){let{sendAnalyticsEvent:e}=a();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},98234:(e,t,r)=>{r.d(t,{Z:()=>s});var n,o=r(85893),i=r(42483);function a(){return(0,o.jsx)(i.Z,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,o.jsxs)("defs",{children:[(0,o.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,o.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,o.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,o.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,o.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}let s=a;try{(n=a).displayName||(n.displayName="DiffPlaceholder")}catch{}},93062:(e,t,r)=>{r.d(t,{WZ:()=>f,sF:()=>p,wB:()=>d});var n,o=r(85893),i=r(42483),a=r(97011),s=r(27856),l=r.n(s),c=r(67294);function u(e){if("html"in e&&void 0!==e.html){let{html:t,...r}=e;return{safeHTML:t,props:r}}let{unverifiedHTML:t,...r}=e;return{safeHTML:l().sanitize(t),props:r}}let d=h(i.Z);d.displayName="SafeHTMLBox";let f=h(a.Z);function h(e){let t=(0,c.forwardRef)((t,r)=>{let{safeHTML:n,props:i}=u(t);return(0,o.jsx)(e,{ref:r,...i,dangerouslySetInnerHTML:n?{__html:n}:void 0})});return t}f.displayName="SafeHTMLText";let p=(0,c.forwardRef)((e,t)=>{let{safeHTML:r,props:n}=u(e);return(0,o.jsx)("div",{ref:t,...n,dangerouslySetInnerHTML:r?{__html:r}:void 0})});p.displayName="SafeHTMLDiv";try{(n=SafeHTMLComponent).displayName||(n.displayName="SafeHTMLComponent")}catch{}},69942:(e,t,r)=>{r.d(t,{ZV:()=>h,_G:()=>i,eI:()=>d,xp:()=>f});var n,o,i,a=r(85893),s=r(46263),l=r(67294);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(i||(i={}));let c=[1440,1350,1280,1012,768,544,1],u=l.createContext({screenSize:1});function d(){return l.useContext(u)}function f({children:e,initialValue:t}){let r=t??h(window.innerWidth),n=(0,l.useRef)(r),[o,i]=(0,l.useState)(r),c=(0,l.useCallback)(()=>{let e=h(window.innerWidth);n.current!==e&&(n.current=e,i(e))},[]);(0,l.useEffect)(()=>{let e=new ResizeObserver((0,s.D)(c));return e.observe(document.documentElement),()=>e.disconnect()},[c]);let d=(0,l.useMemo)(()=>({screenSize:o}),[o]);return(0,a.jsx)(u.Provider,{value:d,children:e})}function h(e){for(let t of c)if(e>=t)return t;return 1}try{(n=u).displayName||(n.displayName="ScreenContext")}catch{}try{(o=f).displayName||(o.displayName="ScreenSizeProvider")}catch{}}}]);
//# sourceMappingURL=app_assets_modules_github_command-palette_copy_ts-app_assets_modules_react-shared_hooks_use-v-328d8a-f6036b9fc307.js.map