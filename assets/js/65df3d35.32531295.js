"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4643],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58814:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={sidebar_position:0,title:"API Overview",description:"OSS Insight API Overview",sidebar_label:"API Overview",slug:"/api"},p=void 0,c={unversionedId:"api/overview",id:"api/overview",title:"API Overview",description:"OSS Insight API Overview",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/pingcap/ossinsight/tree/main/docs/api/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"API Overview",description:"OSS Insight API Overview",sidebar_label:"API Overview",slug:"/api"},sidebar:"tutorialSidebar",previous:{title:"About OSS Insight",permalink:"/docs/about"},next:{title:"Trending Repos",permalink:"/docs/api/endpoints/trending-repos"}},s=[{value:"API Host",id:"api-host",children:[],level:2},{value:"API CORS",id:"api-cors",children:[],level:2},{value:"API Rate Limit",id:"api-rate-limit",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to use OSS Insight API in your application, feel free to contact us via:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"email: ",(0,o.kt)("a",{parentName:"li",href:"mailto:ossinsight@pingcap.com"},"ossinsight@pingcap.com")),(0,o.kt)("li",{parentName:"ul"},"or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pingcap/ossinsight/edit/main/docs/overview.md"},"open a pull request")," directly")),(0,o.kt)("h2",{id:"api-host"},"API Host"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://api.ossinsight.io")),(0,o.kt)("h2",{id:"api-cors"},"API CORS"),(0,o.kt)("p",null,"Currently we only enable CORS for these domains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"*.ossinsight.io"),(0,o.kt)("li",{parentName:"ul"},"localhost"),(0,o.kt)("li",{parentName:"ul"},"*.github1s.com")),(0,o.kt)("h2",{id:"api-rate-limit"},"API Rate Limit"),(0,o.kt)("p",null,"For each IP address, the rate limit allows for up to 60 requests per minute."))}d.isMDXComponent=!0}}]);