"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4918],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91435:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(83321),l=["components"],s={sidebar_position:0,title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter, Stackoverflow or Cryptocurrency, which has big data with realtime insert/update.",image:"img/workshop-thumbnail.png",sidebar_label:"Overview"},p=void 0,h={unversionedId:"overview",id:"overview",title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter, Stackoverflow or Cryptocurrency, which has big data with realtime insert/update.",source:"@site/workshop/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/workshop/overview",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Workshop Overview",description:"This workshop tells you how to get insights from NFT, Twitter, Stackoverflow or Cryptocurrency, which has big data with realtime insert/update.",image:"img/workshop-thumbnail.png",sidebar_label:"Overview"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/workshop/mini-ossinsight/introduction"}},u=[{value:"What you will learn",id:"what-you-will-learn",children:[{value:"1. Methodology to setup an insight system",id:"1-methodology-to-setup-an-insight-system",children:[],level:3},{value:"2. Knowledge about HTAP database",id:"2-knowledge-about-htap-database",children:[],level:3}],level:2},{value:"Join Workshop!",id:"join-workshop",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to build ",(0,i.kt)("strong",{parentName:"p"},"Another Insight")," tool with another data source rather than GitHub, then you're in the right place. This workshop will tell you it's not too hard to get insights from big data, expecially ",(0,i.kt)("strong",{parentName:"p"},"big data with realtime insert/update"),"."),(0,i.kt)("h2",{id:"what-you-will-learn"},"What you will learn"),(0,i.kt)("h3",{id:"1-methodology-to-setup-an-insight-system"},"1. Methodology to setup an insight system"),(0,i.kt)("p",null,"Usually, with enough abstration, there will be 3 steps to setup an insight system like OSS Insight:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find its Data Source (both historical data and new realtime data)"),(0,i.kt)("li",{parentName:"ol"},"Load Data to TiDB (or any other HTAP database)"),(0,i.kt)("li",{parentName:"ol"},"Get Insights with SQL")),(0,i.kt)("h3",{id:"2-knowledge-about-htap-database"},"2. Knowledge about HTAP database"),(0,i.kt)("p",null,"Use HTAP database here is suitable. HTAP stands for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/dev/explore-htap"},"Hybrid Transactional and Analytical Processing"),", it is ",(0,i.kt)("strong",{parentName:"p"},"SUPER EASY")," to handle both:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"acting as a ",(0,i.kt)("strong",{parentName:"li"},"primary")," rdbms to ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("u",null,"serve requests in high concurrency"))," and ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("u",null,"insert/update in realtime"))),(0,i.kt)("li",{parentName:"ul"},"providing ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("u",null,"analytical ability to get insights")))),(0,i.kt)("p",null,"There is a 10-minute post to explain ",(0,i.kt)("a",{parentName:"p",href:"/blog/why-we-choose-tidb-to-support-ossinsight"},"why we choose tidb to support ossinsight"),'. but for saving time we put a picture below which shows the architecture difference between "before" and "after" we use TiDB:'),(0,i.kt)("center",null,(0,i.kt)("img",{width:"70%",src:n(48043).Z,alt:"Simplified architecture after we use TiDB"})),(0,i.kt)("center",null,(0,i.kt)("i",null,"before and after we use TiDB")),(0,i.kt)("p",null,"That means, we would never need to learn  traditional ",(0,i.kt)("inlineCode",{parentName:"p"},"big data")," skills such as: MySQL+sharding technologies -> industrail etl tools -> olap databases->MySQL(write back), and then setup/manage these infrastructures, but just get a ",(0,i.kt)("inlineCode",{parentName:"p"},"T+1")," analysis result finally, "),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can load data to MySQL instead of TiDB, but you should will meet with performance issues soon..."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Well, for saving time, join the bellow workshops asap, each one will follow the above 3 steps!  \ud83c\udfc3\ud83c\udfc3\ud83c\udfc3"),(0,i.kt)("h2",{id:"join-workshop"},"Join Workshop!"),(0,i.kt)("p",null,"We have implemented the ",(0,i.kt)("inlineCode",{parentName:"p"},"mini OSS Insights")," workshop, and found the posibility of the other 3 workshops, you can try them by yourself with their historical and realtime api (a bit of a challenge, but not too hard :-)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/introduction"},"mini OSS Insight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workshop/nft-insight"},"NFT Insight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workshop/twitter-insight"},"Twitter Insight")," ",(0,i.kt)("em",{parentName:"li"},"Not ready")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workshop/stackoverflow-insight"},"Stack Overflow Insight")," ",(0,i.kt)("em",{parentName:"li"},"Not ready")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/workshop/cryptocurrency-insight"},"Cryptocurrency Insight")," ",(0,i.kt)("em",{parentName:"li"},"Not ready"))),(0,i.kt)("p",null,"If you want a further talk about OSS Insight, please join our offline workshop, you may get help there:"),(0,i.kt)(o.Z,{component:"a",variant:"contained",sx:{":hover":{color:"#ffffff"}},href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm",target:"_blank",mdxType:"Button"},"Apply !"))}d.isMDXComponent=!0},48043:function(e,t,n){t.Z=n.p+"assets/images/how-different-db-handle-github-data-097746b55085a93fa36a6bfb7af4cb0b.png"}}]);