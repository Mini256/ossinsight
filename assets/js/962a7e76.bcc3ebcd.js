"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7046],{77249:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(54364),o=n(26613),l=n(61953);const i=e=>e.toFixed(1).replace(/[.,]0$/,""),c=a.createElement(r.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),s=a.createElement(o.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),m="#E30C34",d="#52FF52",h=e=>{let{val:t,suffix:n,reverse:r=!1}=e;return t>0?a.createElement("span",{className:"diff",style:{color:r?m:d}},r?s:c,a.createElement(l.Z,{component:"span",fontSize:14},i(t),n)):t<0?a.createElement("span",{className:"diff",style:{color:r?d:m}},r?c:s,a.createElement(l.Z,{component:"span",fontSize:14},i(-t),n)):a.createElement("span",{className:"diff",style:{color:"gray"}})}},69050:(e,t,n)=>{n.d(t,{V:()=>u,Z:()=>p});var a=n(77249),r=n(39960),o=n(9566),l=n(67294),i=n(16550),c=n(61953),s=n(29630),m=n(9144),d=n(44731),h=n(91655);function p(e){let{variant:t="clickable",name:n,repos:h,collectionRepos:p}=e;const u=(0,i.k6)(),g=(0,l.useCallback)((()=>{u.push(`/collections/${(0,o.o)(n)}`)}),[n]);return l.createElement(f,{onClick:g,className:t},l.createElement(s.Z,{variant:"body1",fontSize:16},n),l.createElement(s.Z,{variant:"body2",color:"#7C7C7C",mt:2,mb:2},h," repositories"),p.map((e=>l.createElement(m.Z,{key:e.repo_id,direction:"row",mt:1,alignItems:"center"},l.createElement(c.Z,{maxWidth:48,minWidth:48},e.rank,l.createElement(a.Z,{val:e.rank_changes})),l.createElement(c.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},l.createElement(r.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},l.createElement(m.Z,{direction:"row",alignItems:"center"},l.createElement(c.Z,{component:"span",display:"inline-flex",bgcolor:"lightgrey",borderRadius:"24px",padding:"0px",alignItems:"center",justifyContent:"center",sx:{verticalAlign:"text-bottom"},mr:1},l.createElement(d.Z,{src:`https://github.com/${e.repo_name.split("/")[0]}.png`})),l.createElement(c.Z,{component:"span",whiteSpace:"nowrap",ml:1},e.repo_name))))))),"link"===t?l.createElement(c.Z,{mt:2,fontSize:14},l.createElement(r.Z,{href:`/collections/${(0,o.o)(n)}`,target:"_blank"},"> See All")):l.createElement(r.Z,{href:`/collections/${(0,o.o)(n)}`,target:"_blank",hidden:!0},"> See All"))}function u(){return l.createElement(c.Z,{border:"2px dashed #3c3c3c",p:2,borderRadius:1,sx:{"&:not(:first-of-type)":{ml:2}}},l.createElement(h.Z,{width:150}),l.createElement(h.Z,{width:160,sx:{mt:2}}),l.createElement(h.Z,{width:120,sx:{my:2}}),[0,1,2].map((e=>l.createElement(m.Z,{key:e,direction:"row"},l.createElement(h.Z,{width:48}),l.createElement(h.Z,{width:36,height:36,variant:"circular",sx:{mx:1}}),l.createElement(h.Z,{width:120})))))}const f=(0,n(81719).ZP)(c.Z)((e=>{let{theme:t}=e;return{border:"2px dashed #3c3c3c",padding:t.spacing(2),borderRadius:t.spacing(1),"&:not(:first-of-type)":{marginLeft:t.spacing(2)},"&.clickable":{cursor:"pointer",transition:"box-shadow .2s ease, transform .2s ease","&:hover":{boxShadow:t.shadows[16],transform:"translateY(-1px) scale(1.02)"}}}}))},71772:(e,t,n)=>{n.d(t,{Kx:()=>d,St:()=>h,bX:()=>m});var a=n(28084),r=n(9566),o=n(67294),l=n(8100),i=n(31389),c=n(64063),s=n.n(c);function m(){const{collections:e}=(0,a.eZ)("plugin-prefetch"),{data:t}=(0,l.ZP)("static/collections",{fetcher:i.vE.getCollections,fallbackData:e,compare:s()});return(0,o.useMemo)((()=>(null==t?void 0:t.data.map((e=>({...e,slug:(0,r.o)(e.name)}))))??[]),[t])}function d(e){const t=m();return(0,o.useMemo)((()=>t.find((t=>t.slug===e))),[t,e])}function h(){const e=m();return(0,o.useCallback)((t=>e.find((e=>e.id===t))),[e])}},8899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(67294),r=n(88242),o=n(71772),l=n(16550),i=n(88176),c=n(91262),s=n(50119);const m="wordCloudContainer_jrWB";var d=n(61802),h=n(81719);function p(){const e=(0,o.bX)(),t=(0,a.useMemo)((()=>e.map((e=>({text:e.name,value:16,slug:e.slug})))),[e]),n=(0,l.k6)(),r=(0,a.useRef)(null),h=(0,i.Z)(r),p=function(e){void 0===e&&(e=0);return function(){const t=1e4*Math.sin(e++);return t-Math.floor(t)}}();return a.createElement(u,{className:m,ref:r},a.createElement(c.Z,null,(()=>a.createElement(a.Fragment,null,(0,d.nf)(h)&&a.createElement(s.Z,{width:h.width,height:h.height,data:t,font:"system-ui",fontStyle:"italic",fontWeight:"bold",fontSize:()=>16,random:p,rotate:()=>90*(~~(2*p())-1),onWordClick:(e,t)=>{n.push(`/collections/${t.slug}`)}})))))}const u=(0,h.ZP)("div")({height:400});var f=n(87462),g=n(14454),E=n(69050),Z=n(85529),v=n(26432),b=n(85390),k=n(87054),_=n(44373),x=n(9041),w=n(77169);let y;!function(e){e.alphabetical="alphabetical",e.recent="recent"}(y||(y={}));const C=(0,h.ZP)(b.Z)((e=>{let{theme:t}=e;return{"& .MuiToggleButtonGroup-grouped":{margin:t.spacing(.5),border:0,"&.Mui-disabled":{border:0},"&:not(:first-of-type)":{margin:t.spacing(.5),borderRadius:t.shape.borderRadius},"&:first-of-type":{borderRadius:t.shape.borderRadius}}}}));var S=n(79072);function R(e){let{sorter:t,search:n}=e;const{data:r,loading:o}=(0,g.I)(),l=(0,a.useMemo)((()=>{let e,a;switch(t){case y.alphabetical:e=(e,t)=>e.name>t.name?1:e.name===t.name?0:-1;break;case y.recent:e=(e,t)=>e.id<t.id?1:e.id===t.id?0:-1}return a=n?e=>e.name.toLowerCase().includes(n.toLowerCase()):()=>!0,(null==r?void 0:r.data.filter(a).sort(e))??[]}),[r,t,n]);return o?a.createElement(S.ZP,{container:!0,spacing:2},[0,1,2,3,4].map((e=>a.createElement(S.ZP,(0,f.Z)({key:e,item:!0},z),a.createElement(E.V,null))))):a.createElement(S.ZP,{container:!0,spacing:2},l.map((e=>{let{id:t,name:n,repos:r,collectionRepos:o}=e;return a.createElement(S.ZP,(0,f.Z)({key:t,item:!0},z),a.createElement(E.Z,{name:n,repos:r,collectionRepos:o}))})))}const z={sm:12,md:6,lg:4,xl:3};var I=n(96540),W=n(39960),M=n(36336),P=n(9144),A=n(29630),N=n(54225);const $="Explore Collections",F="Find insights about the monthly or historical rankings and trends in technical fields with curated repository lists.",L=()=>{const[e,t]=function(){const[e,t]=(0,a.useState)(y.alphabetical);return[e,a.createElement(C,{size:"small",value:e,onChange:(e,n)=>{n&&t(n)},unselectable:"off",exclusive:!0},a.createElement(k.Z,{value:y.alphabetical},"A - Z"),a.createElement(_.Z,{flexItem:!0,orientation:"vertical",sx:{width:"1px"},color:"#3c3c3c"}),a.createElement(k.Z,{value:y.recent},"NEW ",a.createElement(Z.veu,null)))]}(),[n,o]=function(){const[e,t]=(0,a.useState)(""),n=(0,v.Z)((e=>{t(e.target.value)}));return[e,a.createElement(w.Z,{variant:"outlined",size:"small",placeholder:"Search...",value:e,onChange:n,InputProps:{startAdornment:a.createElement(x.Z,{position:"start"},a.createElement(Z.W1M,null))}})]}();return a.createElement(r.Z,{title:$,description:F},a.createElement(M.Z,{maxWidth:"lg",sx:{py:8}},a.createElement(A.Z,{variant:"h1",fontSize:28,mb:2,align:"center"},$),a.createElement(A.Z,{variant:"body1",fontSize:16,mb:2,align:"center"},F),a.createElement(p,null),a.createElement(P.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",my:2},t,o),a.createElement(R,{sorter:e,search:n}),a.createElement(A.Z,{variant:"body1",align:"center",mt:2},"Not interested in a collection?",a.createElement(N.Z,{component:W.Z,rel:"noopener",href:"https://github.com/pingcap/ossinsight#how-to-add-collections",sx:{ml:1},variant:"contained",color:"primary",startIcon:a.createElement(I.Z,null)},"Add a Collection"))))}},14454:(e,t,n)=>{n.d(t,{I:()=>l});var a=n(6971),r=n(67294),o=n(61802);function l(){const{data:e,loading:t,error:n}=(0,a.WV)("recent-hot-collections",{},!1);return{data:(0,r.useMemo)((()=>{if((0,o.Rw)(e))return;const t=[];for(const a of e.data){var n;a.id===(null==(n=t[t.length-1])?void 0:n.id)?t[t.length-1].collectionRepos.push({repo_id:a.repo_id,repo_name:a.repo_name,last_2nd_month_rank:a.last_2nd_month_rank,last_month_rank:a.last_month_rank,rank:a.rank,rank_changes:a.rank_changes}):t.push({id:a.id,name:a.name,repos:a.repos,visits:a.visits,collectionRepos:[{repo_id:a.repo_id,repo_name:a.repo_name,last_2nd_month_rank:a.last_2nd_month_rank,last_month_rank:a.last_month_rank,rank:a.rank,rank_changes:a.rank_changes}]})}return{...e,fields:e.fields,data:t}}),[e]),loading:t,error:n}}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(37187),o=n(67294),l=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:m,footer:d=!0,...h}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(r.Z,(0,a.Z)({},h,{customFooter:d,header:n,sideWidth:s,side:s&&(0,l.nf)(m)?o.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(m,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:s,paddingRight:s}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}}}]);