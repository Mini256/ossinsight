"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4038],{90796:(e,t,o)=>{o.d(t,{e:()=>n});const n=(0,o(23097).P)("series",{type:"line"},"LineSeries")},38705:(e,t,o)=>{o.d(t,{Z:()=>n});const n=(0,o(23097).P)("tooltip",{},"Tooltip")},26367:(e,t,o)=>{o.d(t,{ie:()=>p});var n=o(67294);function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,l(e,t)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var s=function(){},c=function(e){function t(t){var o;return(o=e.call(this)||this).el=t,o}a(t,e);var o=t.prototype;return o.isScrolledToBottom=function(){return this.scrollTop+this.outerHeight>=this.scrollHeight},o.registerScrollEvent=function(e){this.el.addEventListener("scroll",e)},o.unregisterScrollEvent=function(e){this.el.removeEventListener("scroll",e)},t.create=function(e){var o=document.querySelector(e);if(!o)throw new Error("element is not found.");return new t(o)},i(t,[{key:"top",get:function(){return this.el.getBoundingClientRect().top}},{key:"outerHeight",get:function(){return this.el.getBoundingClientRect().height}},{key:"scrollTop",get:function(){return this.el.scrollTop}},{key:"scrollHeight",get:function(){return this.el.scrollHeight}}]),t}(s),u=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var o=t.prototype;return o.isScrolledToBottom=function(){return this.scrollTop+this.outerHeight>=this.scrollHeight},o.registerScrollEvent=function(e){document.addEventListener("scroll",e)},o.unregisterScrollEvent=function(e){document.removeEventListener("scroll",e)},t.create=function(){return new t},i(t,[{key:"outerHeight",get:function(){return window.innerHeight}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop}},{key:"scrollHeight",get:function(){return document.documentElement.scrollHeight}}]),t}(s),d=function(){function e(){}return e.create=function(e){return e?c.create(e):u.create()},e}(),p=function(e){var t=e.children,o=function(e){var t=e.sectionRefs,o=e.rootSelector,r=e.offset,i=void 0===r?0:r,a=(0,n.useRef)(null);(0,n.useEffect)((function(){a.current=d.create(o)}),[o]);var l=(0,n.useCallback)((function(){return!!a.current&&a.current.isScrolledToBottom()}),[a]),s=(0,n.useCallback)((function(e){if(!a.current)return!1;var t=a.current.scrollTop,o=t+a.current.outerHeight,n=e.getBoundingClientRect(),r=a.current instanceof c?t+n.top-a.current.top+i:t+n.top+i;return[r<o,r+n.height>t].every((function(e){return e}))}),[a,i]),u=(0,n.useCallback)((function(){return t.map((function(e){return!!e.current&&s(e.current)}))}),[s,t]),p=(0,n.useState)([]),m=p[0],v=p[1],f=(0,n.useMemo)((function(){return m.findIndex((function(e){return e}))}),[m]),h=(0,n.useCallback)((function(){var e=l()?[].concat(new Array(t.length-1).fill(!1).map((function(e){return e})),[!0]):u();v(e)}),[u,l,t]);return(0,n.useEffect)((function(){return h(),a.current&&a.current.registerScrollEvent(h),function(){a.current&&a.current.unregisterScrollEvent(h)}}),[h]),{elementsStatusInViewport:m,currentElementIndexInViewport:f}}({sectionRefs:e.sectionRefs,rootSelector:e.rootSelector,offset:e.offset});return t({elementsStatusInViewport:o.elementsStatusInViewport,currentElementIndexInViewport:o.currentElementIndexInViewport})}},58904:(e,t,o)=>{var n=o(64836);t.Z=void 0;var r=n(o(64938)),i=o(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"}),"Analytics");t.Z=a},95242:(e,t,o)=>{var n=o(64836);t.Z=void 0;var r=n(o(64938)),i=o(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z"}),"AutoGraph");t.Z=a},2548:(e,t,o)=>{var n=o(64836);t.Z=void 0;var r=n(o(64938)),i=o(85893),a=(0,r.default)((0,i.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=a},35969:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(87462),r=o(63366),i=o(67294),a=(o(76607),o(86010)),l=o(94780),s=o(81719),c=o(78884),u=o(34867);function d(e){return(0,u.Z)("MuiBottomNavigation",e)}(0,o(1588).Z)("MuiBottomNavigation",["root"]);var p=o(85893);const m=["children","className","component","onChange","showLabels","value"],v=(0,s.ZP)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper}))),f=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiBottomNavigation"}),{children:s,className:u,component:f="div",onChange:h,showLabels:g=!1,value:b}=o,y=(0,r.Z)(o,m),Z=(0,n.Z)({},o,{component:f,showLabels:g}),w=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},d,t)})(Z);return(0,p.jsx)(v,(0,n.Z)({as:f,className:(0,a.Z)(w.root,u),ref:t,ownerState:Z},y,{children:i.Children.map(s,((e,t)=>{if(!i.isValidElement(e))return null;const o=void 0===e.props.value?t:e.props.value;return i.cloneElement(e,{selected:o===b,showLabel:void 0!==e.props.showLabel?e.props.showLabel:g,value:o,onChange:h})}))}))}))},241:(e,t,o)=>{o.d(t,{Z:()=>b});var n=o(63366),r=o(87462),i=o(67294),a=o(86010),l=o(94780),s=o(81719),c=o(78884),u=o(50522),d=o(34867);function p(e){return(0,d.Z)("MuiBottomNavigationAction",e)}const m=(0,o(1588).Z)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]);var v=o(85893);const f=["className","icon","label","onChange","onClick","selected","showLabel","value"],h=(0,s.ZP)(u.Z,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.showLabel&&!o.selected&&t.iconOnly]}})((({theme:e,ownerState:t})=>(0,r.Z)({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!t.showLabel&&!t.selected&&{paddingTop:14},!t.showLabel&&!t.selected&&!t.label&&{paddingTop:0},{[`&.${m.selected}`]:{color:(e.vars||e).palette.primary.main}}))),g=(0,s.ZP)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,t)=>t.label})((({theme:e,ownerState:t})=>(0,r.Z)({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!t.showLabel&&!t.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${m.selected}`]:{fontSize:e.typography.pxToRem(14)}}))),b=i.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiBottomNavigationAction"}),{className:i,icon:s,label:u,onChange:d,onClick:m,value:b}=o,y=(0,n.Z)(o,f),Z=o,w=(e=>{const{classes:t,showLabel:o,selected:n}=e,r={root:["root",!o&&!n&&"iconOnly",n&&"selected"],label:["label",!o&&!n&&"iconOnly",n&&"selected"]};return(0,l.Z)(r,p,t)})(Z);return(0,v.jsxs)(h,(0,r.Z)({ref:t,className:(0,a.Z)(w.root,i),focusRipple:!0,onClick:e=>{d&&d(e,b),m&&m(e)},ownerState:Z},y,{children:[s,(0,v.jsx)(g,{className:w.label,ownerState:Z,children:u})]}))}))},75741:(e,t,o)=>{o.d(t,{V:()=>r,Z:()=>i});var n=o(34867);function r(e){return(0,n.Z)("MuiDivider",e)}const i=(0,o(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},31538:(e,t,o)=>{o.d(t,{Z:()=>L});var n=o(63366),r=o(87462),i=o(67294),a=o(86010),l=o(94780),s=o(41796),c=o(81719),u=o(78884),d=o(57742),p=o(50522),m=o(63289),v=o(84771),f=o(75741),h=o(8164),g=o(97484),b=o(34867);function y(e){return(0,b.Z)("MuiMenuItem",e)}const Z=(0,o(1588).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var w=o(85893);const C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],x=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${f.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${f.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${h.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${h.Z.root} svg`]:{fontSize:"1.25rem"}})))),L=i.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:c="li",dense:p=!1,divider:f=!1,disableGutters:h=!1,focusVisibleClassName:g,role:b="menuitem",tabIndex:Z,className:L}=o,S=(0,n.Z)(o,C),k=i.useContext(d.Z),M={dense:p||k.dense||!1,disableGutters:h},$=i.useRef(null);(0,m.Z)((()=>{s&&$.current&&$.current.focus()}),[s]);const O=(0,r.Z)({},o,{dense:M.dense,divider:f,disableGutters:h}),R=(e=>{const{disabled:t,dense:o,divider:n,disableGutters:i,selected:a,classes:s}=e,c={root:["root",o&&"dense",t&&"disabled",!i&&"gutters",n&&"divider",a&&"selected"]},u=(0,l.Z)(c,y,s);return(0,r.Z)({},s,u)})(o),N=(0,v.Z)($,t);let B;return o.disabled||(B=void 0!==Z?Z:-1),(0,w.jsx)(d.Z.Provider,{value:M,children:(0,w.jsx)(x,(0,r.Z)({ref:N,role:b,tabIndex:B,component:c,focusVisibleClassName:(0,a.Z)(R.focusVisible,g),className:(0,a.Z)(R.root,L)},S,{ownerState:O,classes:R}))})}))}}]);