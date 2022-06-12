"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8610],{78665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(63366),l=a(67294),n=a(86010),s=a(67170),i=a(39960),m="sidebar_q+wC",c="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",h=a(95999);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,r.Z)(e,E),c=t&&t.items.length>0;return l.createElement(s.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(67294),l=a(39960),n=a(78665),s=a(15404),i=a(95999),m=a(53810);function c(e){var t,a=e.metadata,c=e.items,o=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(n.Z,{title:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:o},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,p),r.createElement(l.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),l=a(86010),n=a(39960),s="tag_WK-t",i="tagRegular_LXbV",m="tagWithCount_S5Zl";var c=function(e){var t,a=e.permalink,c=e.name,o=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[i]=!o,t[m]=o,t))},c,o&&r.createElement("span",null,o))}},82593:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(67294),l=a(46616),n=a(87385),s=a(53597),i=a(37332),m=a(38168),c=a(44276),o=a(75341),u=a(70431),d="shareButtons_1MQy",g=function(e){var t=e.shareUrl,a=(e.disabled,e.title),g=e.hashtags,h=e.style,p=null!=t?t:window.location.href;return r.createElement("div",{className:d,style:h},r.createElement(l.Z,{url:p,title:a,hashtags:g},r.createElement(n.Z,{round:!0,size:32})),r.createElement(s.Z,{url:p,title:a},r.createElement(i.Z,{round:!0,size:32})),r.createElement(m.Z,{url:p,title:a},r.createElement(c.Z,{round:!0,size:32})),r.createElement(o.Z,{url:p,title:a},r.createElement(u.Z,{round:!0,size:32})))}},15404:function(e,t,a){a.d(t,{Z:function(){return M}});var r=a(67294),l=a(86010),n=a(3905),s=a(95999),i=a(39960),m=a(44996),c=a(53810),o=a(42729),u=a(87462),d=a(63366),g="iconEdit_mS5F",h=["className"];var p=function(e){var t=e.className,a=(0,d.Z)(e,h);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(g,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function E(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},r.createElement(p,null),r.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var v="blogPostTitle_RC3s",b="blogPostData_A2Le",f="blogPostDetailsFull_2lop",Z=a(7774),N="tags_NBRY",_="tag_F03v";function k(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:_},r.createElement(Z.Z,{name:t,permalink:a}))}))))}var P="image_9q7L";var w=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:P,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},T="authorCol_8c0z";function y(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",T),key:t},r.createElement(w,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var L=a(91262),I=a(82593);var M=function(e){var t,a,u,d,g=(u=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,m.C)().withBaseUrl,p=e.children,Z=e.frontMatter,N=e.assets,_=e.metadata,P=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,M=_.date,C=_.formattedDate,U=_.permalink,z=_.tags,B=_.readingTime,R=_.title,S=_.editUrl,x=_.authors,F=null!=(t=N.image)?t:Z.image,A=!T&&P,O=z.length>0;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(d=T?"h1":"h2",r.createElement("header",null,r.createElement(L.Z,null,(function(){return T?r.createElement(I.Z,{title:R+" | OSSInsight",hashtags:Z.keywords}):void 0})),r.createElement(d,{className:v,itemProp:"headline"},T?R:r.createElement(i.Z,{itemProp:"url",to:U},R)),r.createElement("div",{className:(0,l.Z)(b,"margin-vert--md")},r.createElement("time",{dateTime:M,itemProp:"datePublished"},C),void 0!==B&&r.createElement(r.Fragment,null," \xb7 ",g(B))),r.createElement(y,{authors:x,assets:N}))),F&&r.createElement("meta",{itemProp:"image",content:h(F,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:o.Z},p)),r.createElement(L.Z,null,(function(){return T?r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(I.Z,{title:R+" | OSSInsight",hashtags:Z.keywords})):void 0})),(O||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[f]=T,a))},O&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":A})},r.createElement(k,{tags:z})),T&&S&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(E,{editUrl:S})),A&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},r.createElement(i.Z,{to:_.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);