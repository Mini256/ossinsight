"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1670],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),h=l(n),m=i,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,s(s({ref:e},u),{},{components:n})):r.createElement(d,s({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99034:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={sidebar_position:1,title:"Workshop: mini OSS Insight",sidebar_label:"Introduction"},p=void 0,l={unversionedId:"mini-ossinsight/introduction",id:"mini-ossinsight/introduction",title:"Workshop: mini OSS Insight",description:"By join this workshop, you can setup a mini OSS Insight with:",source:"@site/workshop/mini-ossinsight/introduction.md",sourceDirName:"mini-ossinsight",slug:"/mini-ossinsight/introduction",permalink:"/workshop/mini-ossinsight/introduction",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/mini-ossinsight/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Workshop: mini OSS Insight",sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/workshop/overview"},next:{title:"Step 1: Find Data Source",permalink:"/workshop/mini-ossinsight/step-by-step/find-data-source"}},u=[{value:"Step by Step",id:"step-by-step",children:[],level:2},{value:"Other Methods",id:"other-methods",children:[],level:2}],c={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By join this workshop, you can setup a mini OSS Insight with:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Tens of millions of GitHub events that is randomly picked from the 4.7 billion events;"),(0,o.kt)("li",{parentName:"ol"},"Realtime Github event inserted;"),(0,o.kt)("li",{parentName:"ol"},"The same interface as ",(0,o.kt)("a",{parentName:"li",href:"https://ossinsight.io/"},"OSS Insight"))),(0,o.kt)("p",null,"There are several methods to start this workshop:"),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("p",null,"It will cost about 1 hour on reading docs & loading data, you can also ",(0,o.kt)("a",{parentName:"p",href:"/workshop/overview#join-workshop"},"join offline workshop")," when meet with problems."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/step-by-step/find-data-source"},"Step 1: Find Data Source (5 min)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/step-by-step/load-data-to-tidb"},"Step 2: Load Data to TiDB (30 min)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/step-by-step/get-insights-with-sql"},"Step 3: Get Insights with SQL (25 min)"))),(0,o.kt)("h2",{id:"other-methods"},"Other Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/docker-compose"},"Docker Compose")),(0,o.kt)("li",{parentName:"ul"},"Gitpod - Not ready")))}h.isMDXComponent=!0}}]);