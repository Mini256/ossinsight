"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4206],{82680:(e,t,n)=>{n.d(t,{o:()=>i,a:()=>E});var r=n(87462),a=n(67294),l=n(61802),o=n(79072);function c(e,t,n){return 0===Object.keys(t).length||"string"==typeof e?e:"function"==typeof e[Symbol.iterator]?Array.from(e).map(((e,n)=>c(e,t,n))):a.isValidElement(e)?(0,a.cloneElement)(e,Object.assign({},e.props,t,{key:e.key??n})):e}function i(e){let{xs:t,sm:n,md:i,lg:s,xl:A,children:m,...u}=e;const d=(0,a.useMemo)((()=>{const e={};return(0,l.nf)(t)&&(e.xs=t),(0,l.nf)(n)&&(e.sm=n),(0,l.nf)(i)&&(e.md=i),(0,l.nf)(s)&&(e.lg=s),(0,l.nf)(A)&&(e.xl=A),e}),[t,n,i,s,A]);return a.createElement(o.ZP,(0,r.Z)({container:!0,spacing:[2,4,8]},u),c(m,d))}var s=n(40172),A=n(39960),m=n(13919),u=n(49837),d=n(29630),P=n(54225),C=n(21448),v=n(61953),f=n(50522);function E(e){let{title:t,aspectRatio:n=16/9,image:c,description:i,readMore:E,buttonText:p="read more",buttonVariant:z,codeStyleDescription:D=!0,elevation:h,cardSx:g,tags:j,link:b,top:w,size:W,...x}=e;const Z=a.createElement(a.Fragment,null,a.createElement(d.Z,{variant:"h3",sx:{mb:1,fontWeight:"bold",minHeight:50,fontSize:"small"===W?18:void 0}},t),(0,l.nf)(c)?a.createElement(s.ZP,{ratio:n},c):void 0,(0,l.nf)(j)?a.createElement(v.Z,{sx:{my:2}},j.map(((e,t)=>a.createElement(C.Z,{size:"small",label:e,key:t,sx:{mr:2}})))):void 0,(0,l.nf)(i)&&a.createElement(d.Z,{variant:"body1",sx:{mt:1,color:"text.secondary",minHeight:72,fontSize:"small"===W?14:void 0}},i),E?a.createElement(P.Z,{component:A.Z,rel:(0,m.Z)(E)?void 0:"noopener",to:E,size:"small",variant:z??"text",sx:{mt:2}},p):void 0);return a.createElement(o.ZP,(0,r.Z)({item:!0},x),w,function(e,t){let{link:n,cardSx:r,elevation:l,size:o}=t;const[c,i]=(0,a.useState)(l??3),s=(0,a.useCallback)((()=>{i(2*(l??3))}),[]),d=(0,a.useCallback)((()=>{i(l??3)}),[]);return n?a.createElement(u.Z,{sx:{userSelect:"none",...r},elevation:c,onMouseEnter:s,onMouseLeave:d,onMouseDown:d},a.createElement(f.Z,{component:A.Z,rel:(0,m.Z)(n)?void 0:"noopener",to:n,sx:{textAlign:"left",p:"small"===o?2:4,display:"block","&:hover":{textDecoration:"none",color:"unset",elevation:4}}},e)):a.createElement(u.Z,{sx:{userSelect:"none",p:"small"===o?2:4,...r},elevation:c??3},e)}(Z,{link:b,elevation:h,cardSx:g,size:W}))}},19401:(e,t,n)=>{n.d(t,{T:()=>P});var r=n(87462),a=n(67294),l=n(89747),o=n(76743),c=n(61802),i=n(85214),s=n(81284),A=n(81719);const m=(0,A.ZP)(i.Z)({position:"relative",padding:0}),u=(0,A.ZP)(s.ZP)({position:"absolute",width:"100%",paddingLeft:0,transition:"all .5s ease",opacity:.4,"&.item-enter":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&.item-enter-active":{opacity:.4,transform:"none"},"&.item-exit":{opacity:.4,transform:"none"},"&.item-exit-active":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&:hover":{opacity:1}});function d(e,t){let{maxLength:n,itemHeight:i,getKey:s,children:A,...d}=e;const[P,C]=(0,a.useState)([]),v=(0,a.useCallback)((e=>{C((t=>t.length===n?[e].concat(t.slice(0,n-1)):[e].concat(t)))}),[n]);return(0,a.useEffect)((()=>{const e={add:v};(0,c.nf)(t)&&("function"==typeof t?t(e):t.current=e)}),[]),a.createElement(l.Z,(0,r.Z)({component:m},d,{sx:{height:i*n}}),P.map(((e,t)=>a.createElement(o.Z,{key:s(e),timeout:500,classNames:"item"},a.createElement(u,{sx:{top:t*i,height:i}},A(e))))))}const P=(0,a.forwardRef)(d)},88579:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(39960),l=n(45344),o=n(90244),c=n(93978),i=n(5605),s=n(39807),A=n(69417);function m(e){let{stats:t,showTable:n=!1}=e;return r.createElement(o.Z,{className:"clearTable"},r.createElement(c.Z,null,r.createElement(A.Z,null,n?r.createElement(i.Z,null,"Table"):void 0,r.createElement(i.Z,null,"Index"),r.createElement(i.Z,null,"Calls"))),r.createElement(s.Z,null,t.map((e=>r.createElement(A.Z,{key:`${e.tableName}.${e.indexName}`},n?r.createElement(i.Z,null,r.createElement(a.Z,{to:`/stats/tables/${e.tableName}`},e.tableName)):void 0,r.createElement(i.Z,null,e.indexName),r.createElement(i.Z,null,r.createElement(l.Z,{value:e.calls??0,hasComma:!0,duration:200,size:14})))))))}},98322:(e,t,n)=>{n.d(t,{Y:()=>l});var r=n(67294),a=n(73766);function l(e,t){(0,r.useEffect)((()=>{const n=(0,a.v)(e,t);return()=>(0,a.r)(n)}),[e,t])}},74426:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(67294),a=n(84451),l=n(88579),o=n(6971),c=n(98322),i=n(19401),s=n(26432),A=n(81719),m=n(31470),u=n(78944),d=n(69243),P=n(61953),C=n(14850),v=n(44008),f=n(61802);const E=e=>e.id;function p(){const e=(0,r.useRef)(null),t=(0,r.useRef)(),n=(0,r.useRef)([[],0]),a=(0,r.useRef)(),l=(0,o.WV)("stats-query-records",void 0,!1,!0,"unique");(0,r.useEffect)((()=>{(0,f.nf)(l.data)&&(n.current=[l.data.data,0],a.current=l.data.data.reduce(((e,t)=>Math.max(e,t.ts+1)),0))}),[l.data]);const A=(0,o.WV)("stats-query-records-latest",{offset:a.current},!1,(0,f.nf)(a.current),"unique");(0,c.Y)(A.reload,5e3);const[p,z]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if((0,f.nf)(A.data)){const[e,t]=n.current??[[],0];n.current=[e.slice(t).concat(A.data.data),0],a.current=A.data.data.reduce(((e,t)=>Math.max(e,t.ts+1)),a.current??0)}}),[A.data]);const h=(0,r.useCallback)((()=>{clearInterval(t.current),t.current=setInterval((()=>{const[t,r]=n.current;var a;r<t.length&&(t[r].id=`${t[r].id}-${Date.now()}`,null==(a=e.current)||a.add(t[r]),n.current[1]++)}),500),z(!1)}),[]),g=(0,r.useCallback)((()=>{clearInterval(t.current),z(!0)}),[]);(0,r.useEffect)((()=>(h(),g)),[]);const[j,b]=(0,r.useState)(),[w,W]=(0,r.useState)(!1),x=(0,s.Z)((e=>{b(e),W(!0)})),Z=(0,s.Z)((()=>{W(!1)}));return r.createElement(r.Fragment,null,r.createElement(i.T,{ref:e,maxLength:20,itemHeight:32,getKey:E,onMouseEnter:g,onMouseLeave:h},(e=>function(e,t){return r.createElement(D,{sql:e.digest_text,onClick:()=>t(e)})}(e,x))),r.createElement(d.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:p&&!w,message:"Move mouse out to resume"}),r.createElement(m.Z,{open:w,onClose:Z,maxWidth:"lg",fullWidth:!0},r.createElement(u.Z,null,r.createElement(P.Z,null,"Query: ",null==j?void 0:j.query_name),r.createElement(P.Z,{sx:{my:2}},"Executed at: ",null==j?void 0:j.executed_at),r.createElement(C.Z,{className:"language-sql"},(0,v.WU)((null==j?void 0:j.digest_text)??"",{language:"mysql"})))))}const z=(0,A.ZP)("span")({whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"rgb(248, 248, 242)",cursor:"pointer"});function D(e){let{sql:t,onClick:a}=e;const[l,o]=(0,r.useState)(t);return(0,r.useEffect)((()=>{try{const{highlight:e}=n(26586);o(e(t,{html:!0}))}catch(e){}}),[t]),r.createElement(z,{dangerouslySetInnerHTML:{__html:l},onClick:a})}var h=n(36336),g=n(29630),j=n(18661),b=n(62348);function w(){const[e,t]=(0,r.useState)("live-sql");return r.createElement(a.Z,{title:"Stats"},r.createElement(h.Z,{maxWidth:"lg",sx:{py:2}},r.createElement(g.Z,{variant:"h1",mb:2},"Database Stats"),r.createElement(b.Z,{onChange:(e,n)=>t(n),value:e,sx:{mb:2}},r.createElement(j.Z,{label:"Process List",value:"live-sql"}),r.createElement(j.Z,{label:"Index Usage",value:"index-usage"})),"live-sql"===e&&r.createElement(W,null),"index-usage"===e&&r.createElement(x,null)))}function W(){return r.createElement(p,null)}function x(){const{data:e,reload:t}=(0,o.WV)("stats-indexes-usage",void 0,!1,!0,!0);return(0,c.Y)(t,1e3),r.createElement(l.Z,{showTable:!0,stats:(null==e?void 0:e.data)??[]})}},33457:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(41556),l=n(61953),o=n(36336);const c="#242526",i="#1C1E21";function s(e){let{id:t,darker:n=!1,pt:s,maxWidth:A="xl",children:m}=e;return r.createElement(l.Z,{component:"section",id:t,sx:[(0,a.j)("py",2,4,6),{backgroundColor:n?i:c,pt:s}]},r.createElement(o.Z,{maxWidth:A,sx:{padding:1}},m))}},41556:(e,t,n)=>{function r(e,t,n,r){return a=>({[e]:r,[a.breakpoints.down("lg")]:{[e]:n},[a.breakpoints.down("md")]:{[e]:t}})}n.d(t,{j:()=>r})},8106:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(86010),l=n(95999);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function c(e){let{code:t,className:n}=e;const[c,i]=(0,r.useState)(!1),s=(0,r.useRef)(void 0),A=(0,r.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),i(!0),s.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),r.createElement("button",{type:"button","aria-label":c?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,o.copyButton,c&&o.copyButtonCopied),onClick:A},r.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},84451:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(54931),l=n(67294),o=n(82680),c=n(33457),i=n(39960),s=n(29630),A=n(61953),m=n(54225);const u=e=>l.createElement(A.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:4}},l.createElement("img",{src:e,alt:"logo",width:"54",height:"54"}));function d(){return l.createElement(l.Fragment,null,l.createElement(c.Z,null,l.createElement(s.Z,{variant:"h2",sx:{fontSize:40},align:"center"},"Wonder how OSS Insight works?"),l.createElement(o.o,{sx:{mt:2},xs:12,sm:6,md:4},l.createElement(o.a,{title:"How do we implement OSS Insight ?",description:"Blog: 10 min read",codeStyleDescription:!1,readMore:"/blog/why-we-choose-tidb-to-support-ossinsight",buttonVariant:"outlined",top:u(n(2107).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(o.a,{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",description:"Tutorial: 10 min read",codeStyleDescription:!1,readMore:"/blog/try-it-yourself",buttonVariant:"outlined",top:u(n(39784).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(o.a,{title:"Join a Workshop to Setup a Mini OSS Insight",description:"Tutorial: 25 min",codeStyleDescription:!1,readMore:"/docs/workshop/mini-ossinsight/introduction",buttonVariant:"outlined",top:u(n(82674).Z),cardSx:{backgroundColor:"#2c2c2c"}})),l.createElement(A.Z,{textAlign:"center",sx:{fontSize:24,mt:6}},"Want to create your own IDEAInsight in a day?\xa0",l.createElement("br",null),l.createElement(m.Z,{sx:{fontSize:24,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline"},component:i.Z,href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm",rel:"noopener"},"Join a workshop!"))),l.createElement(c.Z,{darker:!0},l.createElement("div",{className:"text--center"},l.createElement("h3",null,"Follow us at\xa0",l.createElement("a",{href:"https://twitter.com/OSSInsight"},"@OSSInsight"),"\xa0and join the conversation using the hashtags",l.createElement("br",null),l.createElement("a",{href:"https://twitter.com/hashtag/OSSInsight",target:"_blank",rel:"noreferrer"},"#OSSInsight"),"\xa0",l.createElement("a",{href:"https://twitter.com/hashtag/TiDBCloud",target:"_blank",rel:"noreferrer"},"#TiDBCloud")))))}var P=n(61802);function C(e){let{children:t,header:n,footer:o=!0,dark:c,sideWidth:i,Side:s,...m}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(a.Z,(0,r.Z)({},m,{header:n,sideWidth:i,side:i&&(0,P.nf)(s)?l.createElement(A.Z,{component:"aside",width:i,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(A.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(s,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:i,paddingRight:i}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t,o?l.createElement(d,null):void 0)))}},2107:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},39784:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},82674:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);