"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[5152],{21596:function(e,t,n){var r=n(95318);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)((0,i.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight");t.Z=o},86886:function(e,t,n){n.d(t,{ZP:function(){return S}});var r=n(63366),a=n(87462),i=n(67294),o=n(86010),l=n(95408),c=n(39707),s=n(94780),m=n(90948),d=n(71657);var u=i.createContext(),g=n(34867);function p(e){return(0,g.Z)("MuiGrid",e)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...h.map((e=>`grid-xs-${e}`)),...h.map((e=>`grid-sm-${e}`)),...h.map((e=>`grid-md-${e}`)),...h.map((e=>`grid-lg-${e}`)),...h.map((e=>`grid-xl-${e}`))]),A=n(85893);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function y(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function v(e,t,n={}){if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:r,sm:a,md:i,lg:o,xl:l}=e;return[Number(r)>0&&(n[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(a)>0&&(n[`spacing-sm-${String(a)}`]||`spacing-sm-${String(a)}`),Number(i)>0&&(n[`spacing-md-${String(i)}`]||`spacing-md-${String(i)}`),Number(o)>0&&(n[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(l)>0&&(n[`spacing-xl-${String(l)}`]||`spacing-xl-${String(l)}`)]}const b=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:a,lg:i,md:o,sm:l,spacing:c,wrap:s,xl:m,xs:d,zeroMinWidth:u}=e.ownerState;return[t.root,n&&t.container,a&&t.item,u&&t.zeroMinWidth,...v(c,n,t),"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==l&&t[`grid-sm-${String(l)}`],!1!==o&&t[`grid-md-${String(o)}`],!1!==i&&t[`grid-lg-${String(i)}`],!1!==m&&t[`grid-xl-${String(m)}`]]}})((({ownerState:e})=>(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${f.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});a=(0,l.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${y(n)}`,[`& > .${f.item}`]:{paddingTop:y(n)}}:{}}))}return a}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,l.P$)({values:r,breakpoints:e.breakpoints.values});a=(0,l.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${y(n)})`,marginLeft:`-${y(n)}`,[`& > .${f.item}`]:{paddingLeft:y(n)}}:{}}))}return a}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,i)=>{let o={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof c?c[i]:c;if(null==s)return r;const m=Math.round(n/s*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${m} + ${y(n)})`;d={flexBasis:e,maxWidth:e}}}o=(0,a.Z)({flexBasis:m,flexGrow:0,maxWidth:m},d)}return 0===e.breakpoints.values[i]?Object.assign(r,o):r[e.breakpoints.up(i)]=o,r}),{})}));var S=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiGrid"}),l=(0,c.Z)(n),{className:m,columns:g,columnSpacing:h,component:f="div",container:y=!1,direction:S="row",item:w=!1,lg:E=!1,md:Z=!1,rowSpacing:k,sm:C=!1,spacing:B=0,wrap:M="wrap",xl:W=!1,xs:D=!1,zeroMinWidth:V=!1}=l,Y=(0,r.Z)(l,x),j=k||B,N=h||B,R=i.useContext(u),P=y?g||12:R,O=(0,a.Z)({},l,{columns:P,container:y,direction:S,item:w,lg:E,md:Z,sm:C,rowSpacing:j,columnSpacing:N,wrap:M,xl:W,xs:D,zeroMinWidth:V}),G=(e=>{const{classes:t,container:n,direction:r,item:a,lg:i,md:o,sm:l,spacing:c,wrap:m,xl:d,xs:u,zeroMinWidth:g}=e,h={root:["root",n&&"container",a&&"item",g&&"zeroMinWidth",...v(c,n),"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==m&&`wrap-xs-${String(m)}`,!1!==u&&`grid-xs-${String(u)}`,!1!==l&&`grid-sm-${String(l)}`,!1!==o&&`grid-md-${String(o)}`,!1!==i&&`grid-lg-${String(i)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,s.Z)(h,p,t)})(O);return(0,A.jsx)(u.Provider,{value:P,children:(0,A.jsx)(b,(0,a.Z)({ownerState:O,className:(0,o.Z)(G.root,m),as:f,ref:t},Y))})}))},82680:function(e,t,n){n.d(t,{oy:function(){return s},aX:function(){return y}});var r=n(87462),a=n(63366),i=n(67294),o=n(86886),l=["xs","sm","md","lg","xl","children"];function c(e,t,n){return 0===Object.keys(t).length?e:e instanceof Array?e.map((function(e,n){return c(e,t,n)})):i.isValidElement(e)?(0,i.cloneElement)(e,Object.assign({},e.props,t,{key:null!=(r=e.key)?r:n})):e;var r}function s(e){var t=e.xs,n=e.sm,s=e.md,m=e.lg,d=e.xl,u=e.children,g=(0,a.Z)(e,l),p=(0,i.useMemo)((function(){var e={};return t&&(e.xs=t),n&&(e.sm=n),s&&(e.md=s),m&&(e.lg=m),d&&(e.xl=d),e}),[t,n,s,m,d]);return i.createElement(o.ZP,(0,r.Z)({container:!0,spacing:[2,4,8]},g),c(u,p))}var m=n(66242),d=n(46483),u=n(40172),g=n(83321),p=n(87918),h=n(87357),f=n(49990),A=n(39960),x=["title","aspectRatio","image","description","readMore","buttonText","buttonVariant","codeStyleDescription","elevation","cardSx","tags","link","top","size"];function y(e){var t=e.title,n=e.aspectRatio,l=void 0===n?16/9:n,c=e.image,s=e.description,y=e.readMore,v=e.buttonText,b=void 0===v?"read more":v,S=e.buttonVariant,w=(e.codeStyleDescription,e.elevation),E=e.cardSx,Z=e.tags,k=e.link,C=e.top,B=e.size,M=(0,a.Z)(e,x),W=i.createElement(i.Fragment,null,i.createElement(d.Z,{variant:"h3",sx:{mb:1,fontWeight:"bold",minHeight:50,fontSize:"small"===B?18:void 0}},t),c?i.createElement(u.ZP,{ratio:l},c):void 0,Z?i.createElement(h.Z,{sx:{my:2}},Z.map((function(e,t){return i.createElement(p.Z,{size:"small",label:e,key:t,sx:{mr:2}})}))):void 0,s?i.createElement(d.Z,{variant:"body1",sx:{mt:1,color:"text.secondary",minHeight:72,fontSize:"small"===B?14:void 0}},s):void 0,y?i.createElement(g.Z,{component:A.Z,to:y,size:"small",variant:null!=S?S:"text",mt:2},b):void 0);return i.createElement(o.ZP,(0,r.Z)({item:!0},M),C,function(e,t){var n=t.link,r=t.cardSx,a=t.elevation,o=t.size,l=(0,i.useState)(null!=a?a:3),c=l[0],s=l[1],d=(0,i.useCallback)((function(){s(2*(null!=a?a:3))}),[]),u=(0,i.useCallback)((function(){s(null!=a?a:3)}),[]);return n?i.createElement(m.Z,{sx:Object.assign({userSelect:"none"},r),elevation:c,onMouseEnter:d,onMouseLeave:u,onMouseDown:u},i.createElement(f.Z,{component:A.Z,to:n,sx:{textAlign:"left",p:"small"===o?2:4,display:"block","&:hover":{textDecoration:"none",color:"unset",elevation:4}}},e)):i.createElement(m.Z,{sx:Object.assign({userSelect:"none",p:"small"===o?2:4},r),elevation:null!=c?c:3},e)}(W,{link:k,elevation:w,cardSx:E,size:B}))}},21482:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(63366),i=n(67294),o=n(86010),l="image_VRxc",c=["src","className","style"];function s(e){var t=e.src,n=e.className,s=e.style,m=(0,a.Z)(e,c),d=(0,i.useMemo)((function(){return Object.assign({},s,{"--image-url":'url("'+t+'")'})}),[s]);return i.createElement("div",(0,r.Z)({className:(0,o.Z)(l,n),style:d},m))}},33457:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(87357),i=n(53156),o=n(41556),l="#242526",c="#1C1E21";function s(e){var t=e.darker,n=void 0!==t&&t,s=e.pt,m=e.children;return r.createElement(a.Z,{component:"section",sx:[(0,o.j)("py",2,4,8),{backgroundColor:n?c:l,pt:s}]},r.createElement(i.Z,{maxWidth:"xl",sx:{padding:1}},m))}},41556:function(e,t,n){function r(e,t,n,r){return function(a){var i,o,l;return(l={})[e]=r,l[a.breakpoints.down("md")]=((i={})[e]=t,i),l[a.breakpoints.down("lg")]=((o={})[e]=n,o),l}}function a(e,t){return"function"==typeof t?t(e):t}function i(e,t,n){return function(t){var r;return Object.assign({},a(t,n),((r={})[t.breakpoints.down("md")]=a(t,e),r[t.breakpoints.down("lg")]=a(t,e),r))}}n.d(t,{j:function(){return r},m:function(){return i}})},62134:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(86886),a=n(67294),i=n(84451),o=n(46483),l=n(53156),c="section_A6NF",s="sectionTitle_d+yR",m="sectionSubtitle_iBnc",d=n(21596);function u(e){var t=e.title,n=e.subtitle,r=e.buttonLink,i=e.buttonText,o=e.backgroundImage,u=e.children;return a.createElement("section",{className:c,style:o&&{backgroundImage:'url("'+o+'")'}},a.createElement(l.Z,{maxWidth:"xl"},t?a.createElement("h2",{className:s},t):void 0,n?a.createElement("p",{className:m},n,i?a.createElement("a",{href:r},a.createElement(d.Z,{sx:{verticalAlign:"text-bottom"}}),"\xa0",i):void 0):void 0,a.createElement("div",null,u)))}var g,p=n(66242),h=n(82680),f=n(83321),A=n(39960),x=n(21482),y=["title","titleId"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=function(e){var t=e.title,n=e.titleId,r=b(e,y);return a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:169.742,height:30.569,viewBox:"0 0 169.742 30.569","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,g||(g=a.createElement("g",{opacity:.498},a.createElement("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},a.createElement("path",{d:"M19.958 10.402c0 1.7-4.132 3.076-9.229 3.076S1.5 12.101 1.5 10.402s4.132-3.076 9.229-3.076 9.229 1.377 9.229 3.076ZM19.958 17.58c0 1.7-4.1 3.076-9.229 3.076S1.5 19.28 1.5 17.58"}),a.createElement("path",{d:"M1.5 10.402v14.356c0 1.7 4.1 3.076 9.229 3.076s9.229-1.374 9.229-3.076V10.402"})),a.createElement("path",{d:"M88.135 13.98a9.722 9.722 0 0 0-18.167-2.6 7.782 7.782 0 0 0 .843 15.519h16.87a6.469 6.469 0 0 0 .454-12.924Zm-.454 10.329H70.812a5.19 5.19 0 1 1 0-10.381h.921a7.136 7.136 0 0 1 14 1.946v.649h1.946a3.893 3.893 0 1 1 0 7.786Z",fill:"#fff"}),a.createElement("g",{fill:"#fff"},a.createElement("path",{d:"m165.332 18.053-3.819 5.842a2.08 2.08 0 0 1 .473 1.327 2.1 2.1 0 1 1-4.2 0 2.3 2.3 0 0 1 .035-.39l-2.526-1.467a2.089 2.089 0 0 1-1.458.587 2.114 2.114 0 0 1-1.034-.272l-2.685 2.515V28.7a1.875 1.875 0 0 0 1.87 1.87h15.88a1.875 1.875 0 0 0 1.87-1.87v-9.311l-2.566-1.7a2.1 2.1 0 0 1-1.844.368Z"}),a.createElement("path",{d:"M153.841 19.747a2.1 2.1 0 0 1 2.1 2.1c0 .092-.009.184-.018.272l2.632 1.472a2.084 2.084 0 0 1 1.331-.473 2.2 2.2 0 0 1 .455.048l3.827-5.928a2.08 2.08 0 0 1-.39-1.218 2.1 2.1 0 1 1 4.2 0 2.285 2.285 0 0 1-.057.495l1.817 1.209v-3.508a1.875 1.875 0 0 0-1.87-1.87h-15.88a1.875 1.875 0 0 0-1.87 1.87v10.042l1.75-1.677a2.1 2.1 0 0 1 1.971-2.834Z"})),a.createElement("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},a.createElement("path",{d:"M41.042 12.599v9.341M36.372 17.269h9.341"})),a.createElement("g",{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3},a.createElement("path",{d:"M115.253 12.91v9.341M110.583 17.58h9.341"})),a.createElement("path",{d:"M146.746 17.802a3.7 3.7 0 0 0 .03-.592c0-.207-.03-.384-.03-.592l1.27-.976a.272.272 0 0 0 .061-.384l-1.214-2.038a.3.3 0 0 0-.363-.118l-1.513.592a4.4 4.4 0 0 0-1.024-.595l-.212-1.568a.324.324 0 0 0-.3-.237h-2.423a.324.324 0 0 0-.3.237l-.244 1.568a5.123 5.123 0 0 0-1.029.592l-1.513-.592a.283.283 0 0 0-.363.118l-1.21 2.042a.357.357 0 0 0 .061.384l1.3.976c0 .207-.03.384-.03.592s.03.384.03.592l-1.27.976a.272.272 0 0 0-.061.384l1.21 2.041a.3.3 0 0 0 .363.118l1.513-.592a4.4 4.4 0 0 0 1.028.592l.242 1.568a.293.293 0 0 0 .3.237h2.42a.324.324 0 0 0 .3-.237l.248-1.57a5.12 5.12 0 0 0 1.028-.592l1.512.592a.283.283 0 0 0 .363-.118l1.21-2.041a.357.357 0 0 0-.061-.384Zm-4.508 1.479a2.071 2.071 0 1 1 2.118-2.07 2.081 2.081 0 0 1-2.118 2.07ZM153.295 9.397l-1.124-.324a.221.221 0 0 1-.148-.276l2.509-8.638a.221.221 0 0 1 .274-.151l1.121.325a.221.221 0 0 1 .15.274l-2.506 8.641a.22.22 0 0 1-.276.149Zm-2.095-2.06.8-.853a.221.221 0 0 0-.015-.316l-1.665-1.465 1.665-1.464a.219.219 0 0 0 .015-.316l-.8-.853a.221.221 0 0 0-.312-.009l-2.648 2.481a.219.219 0 0 0 0 .322l2.648 2.482a.219.219 0 0 0 .312-.009Zm6.013.011 2.648-2.483a.219.219 0 0 0 0-.322l-2.648-2.484a.223.223 0 0 0-.312.009l-.8.853a.221.221 0 0 0 .015.316l1.665 1.466-1.665 1.465a.219.219 0 0 0-.015.316l.8.853a.221.221 0 0 0 .312.011Z",fill:"#fff"}))))},w="\ud83d\udd25 Try Your Own Dataset ! ";function E(){return a.createElement(i.Z,{title:w},a.createElement(l.Z,{maxWidth:"xl"},a.createElement(o.Z,{variant:"h1",sx:{mb:2,mt:8},align:"center"},w)),a.createElement(o.Z,{variant:"h2",sx:{mb:2,mt:8,mx:2},align:"center"},"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes"),a.createElement(u,null,a.createElement(r.ZP,{container:!0,spacing:4},a.createElement(r.ZP,{item:!0,xs:12,lg:8},a.createElement(p.Z,{sx:function(e){var t;return(t={px:8,py:4})[e.breakpoints.down("md")]={p:2},t}},a.createElement(h.oy,{xs:12,md:6,spacing:4},a.createElement(h.aX,{title:"Step 1: Sign up TiDB Cloud (Free) ",description:"Sign up a TiDB Cloud account for free, no need to add credit card",codeStyleDescription:!1,elevation:0,cardSx:{backgroundColor:"action.hover"},link:"/blog/try-it-yourself/#sign-up-for-a-tidb-cloud-account-free",size:"small"}),a.createElement(h.aX,{title:"Step 2: Create cluster (Free)",description:"Create cluster with TiDB Cloud Dev Tier, it is free for one year \u23f0 !",codeStyleDescription:!1,elevation:0,cardSx:{backgroundColor:"action.hover"},link:"/blog/try-it-yourself/#create-a-tidb-developer-tier-cluster-free",size:"small"}),a.createElement(h.aX,{title:"Step 3: Import data",description:"Import the sample data to your TiDB Cloud cluster, this dataset records what happend in the first hour of 2022",codeStyleDescription:!1,elevation:0,cardSx:{backgroundColor:"action.hover"},link:"/blog/try-it-yourself/#import-data-to-your-tidb-cloud-cluster",size:"small"}),a.createElement(h.aX,{title:"Step 4: Analyze with SQL !",description:"Use the sample SQL to see what happened in the first hour of 2022",codeStyleDescription:!1,elevation:0,cardSx:{backgroundColor:"action.hover"},link:"/blog/try-it-yourself/#analysis",size:"small"})),a.createElement(f.Z,{component:"a",startIcon:a.createElement(d.Z,null),variant:"contained",sx:{mt:4,":hover":{color:"#ffffff"}},href:"/blog/try-it-yourself/"},"Tutorial"))),a.createElement(r.ZP,{item:!0,xs:12,lg:4},a.createElement(p.Z,{sx:[{px:4,py:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},function(e){var t;return(t={})[e.breakpoints.up("lg")]={height:"100%"},t}]},a.createElement(S,null),a.createElement(o.Z,{variant:"h3",sx:{fontWeight:"bold",my:4}},"How we build this powerful insight tool?"),a.createElement(f.Z,{variant:"outlined",component:A.Z,to:"/blog/why-we-choose-tidb-to-support-oss-insight/"},"Get for answers"))))),a.createElement(o.Z,{variant:"h2",sx:{mb:2,mt:8},align:"center"},"See more of XYZ insight \ud83e\udd14"),a.createElement(o.Z,{variant:"subtitle1",align:"center"},"For real-time analytical, highly concurrent, and low-latency scenarios with massive data."),a.createElement(u,null,a.createElement(h.oy,{xs:12,md:6,sx:{mb:4}},a.createElement(h.aX,{title:"Logistics Insight for Building a Real-time Parcel Tracking System",description:"It is very important for logistics companies in getting insights to build a real-time parcel tracking system. Here you can find how these valuable insights were obtained.",codeStyleDescription:!1,image:a.createElement(x.Z,{src:n(71096).Z}),buttonText:"get insights",link:"https://en.pingcap.com/blog/build-a-real-time-analytics-application-with-tidb-cloud/?utm_source=ossinsight&utm_medium=referral",readMore:"https://en.pingcap.com/blog/build-a-real-time-analytics-application-with-tidb-cloud/?utm_source=ossinsight&utm_medium=referral",buttonVariant:"contained",tags:["Logistic delivery","Multi-dimensional analytics"],elevation:0,cardSx:{backgroundColor:"action.hover"}}),a.createElement(h.aX,{title:"SaaS Insight for Building a Real-time CRM Application",description:"SaaS systems are naturally hybrid-workload systems. Here is a useful case illustrate how to choose database solution for SaaS application( e.g. CRM ) through insights.",codeStyleDescription:!1,image:a.createElement(x.Z,{src:n(95109).Z}),buttonText:"get insights",link:"/blog/saas-insight-for-building-a-real-time-crm-application",readMore:"/blog/saas-insight-for-building-a-real-time-crm-application",buttonVariant:"contained",tags:["High availability","No sharding","Real-time analytics","Scalability"],elevation:0,cardSx:{backgroundColor:"action.hover"}})),a.createElement("div",{style:{textAlign:"center"}},a.createElement(f.Z,{component:"a",startIcon:a.createElement(d.Z,null),variant:"contained",sx:{":hover":{color:"#ffffff"}},href:"https://en.pingcap.com/customers/?utm_source=ossinsight&utm_medium=referral",target:"_blank"},"More Cases"))))}},84451:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),i=n(87357),o=n(67170),l=n(67294),c=n(46483),s=n(82680),m=n(33457),d=n(83321),u=n(39960),g=function(e){return l.createElement(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:4}},l.createElement("img",{src:e,alt:"logo",width:"54",height:"54"}))};function p(){return l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement(c.Z,{variant:"h2",sx:{fontSize:40},align:"center"},"Wonder how OSS Insight works ?"),l.createElement(s.oy,{sx:{mt:2},xs:12,sm:6,md:4},l.createElement(s.aX,{title:"Data Preparation for Analytics",description:"Blog \xb7 5 min read",codeStyleDescription:!1,readMore:"/blog/how-it-works",buttonVariant:"outlined",top:g(n(2107).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(s.aX,{title:"Why We Choose TiDB to Support OSS Insight",description:"Blog \xb7 5 min read",codeStyleDescription:!1,readMore:"/blog/why-we-choose-tidb-to-support-oss-insight",buttonVariant:"outlined",top:g(n(39784).Z),cardSx:{backgroundColor:"#2c2c2c"}}),l.createElement(s.aX,{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",description:"Tutorial \xb7 10 min read",codeStyleDescription:!1,readMore:"/blog/try-it-yourself",buttonVariant:"outlined",top:g(n(82674).Z),cardSx:{backgroundColor:"#2c2c2c"}})),l.createElement(i.Z,{textAlign:"center",sx:{fontSize:24,mt:6}},"Now,\xa0",l.createElement(d.Z,{sx:{fontSize:24,fontWeight:"bold",verticalAlign:"baseline"},component:u.Z,href:"/try-your-own-dataset?utm_content=wonder_cta"},"Try your own dataset !"))),l.createElement(m.Z,{darker:!0},l.createElement("div",{className:"text--center"},l.createElement("h3",null,"Follow us\xa0",l.createElement("a",{href:"https://twitter.com/OSSInsight"},"@OSSInsight"),"\xa0and join the conversation using the hashtags",l.createElement("br",null),l.createElement("a",{href:"https://twitter.com/hashtag/OSSInsight",target:"_blank"},"#OSSInsight"),"\xa0",l.createElement("a",{href:"https://twitter.com/hashtag/TiDBCloud",target:"_blank"},"#TiDBCloud")))))}var h=["children","header","footer","dark","sideWidth","Side"];function f(e){var t=e.children,n=e.header,c=e.footer,s=void 0===c||c,m=(e.dark,e.sideWidth),d=e.Side,u=(0,a.Z)(e,h);return(0,l.useLayoutEffect)((function(){var e,t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView({block:"center"})}),[]),l.createElement(o.Z,(0,r.Z)({},u,{header:n,sideWidth:m,side:m&&d?l.createElement(i.Z,{component:"aside",width:m,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(d,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:m,paddingRight:m}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t,s?l.createElement(p,null):void 0)))}},2107:function(e,t){t.Z="data:image/png;base64,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"},39784:function(e,t){t.Z="data:image/png;base64,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"},82674:function(e,t){t.Z="data:image/png;base64,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"},71096:function(e,t,n){t.Z=n.p+"assets/images/image-1-0fbe11e59fcfde5f0e64c9ec46dfe7cd.png"},95109:function(e,t,n){t.Z=n.p+"assets/images/image-2-f54dddf1e97ad89f933204d4d30b86de.png"}}]);