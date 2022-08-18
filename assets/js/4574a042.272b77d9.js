"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9060],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11011:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return _},default:function(){return y},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return k}});var a=n(87462),o=n(63366),r=n(67294),i=n(3905),l=n(72389),s=n(79443);var c=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(53810),p=n(86010),h="tabItem_vU9c";function d(e){var t,n,o,i=e.lazy,l=e.block,s=e.defaultValue,d=e.values,m=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),_=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=c(),E=k.tabGroupChoices,y=k.setTabGroupChoices,w=(0,r.useState)(f),C=w[0],T=w[1],S=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=E[m];null!=R&&R!==C&&b.some((function(e){return e.value===R}))&&T(R)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==C&&(N(t),T(a),null!=m&&y(m,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},g)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,p.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}var g=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},v=["components"],b={title:"Step 3: Get Insights with SQL",sidebar_position:3},_=void 0,f={unversionedId:"mini-ossinsight/step-by-step/get-insights-with-sql",id:"mini-ossinsight/step-by-step/get-insights-with-sql",title:"Step 3: Get Insights with SQL",description:"Now, the data is ready, let's try to analyze these data with SQL!",source:"@site/workshop/mini-ossinsight/step-by-step/get-insights-with-sql.mdx",sourceDirName:"mini-ossinsight/step-by-step",slug:"/mini-ossinsight/step-by-step/get-insights-with-sql",permalink:"/workshop/mini-ossinsight/step-by-step/get-insights-with-sql",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/mini-ossinsight/step-by-step/get-insights-with-sql.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Step 3: Get Insights with SQL",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Step 2: Load Data  to TiDB",permalink:"/workshop/mini-ossinsight/step-by-step/load-data-to-tidb"},next:{title:"Docker Compose",permalink:"/workshop/mini-ossinsight/docker-compose"}},k=[{value:"1. Get Insights With Raw SQL!",id:"1-get-insights-with-raw-sql",children:[{value:"a. Can&#39;t Wait!",id:"a-cant-wait",children:[{value:"i. Example 1",id:"i-example-1",children:[],level:4},{value:"ii. Example 2",id:"ii-example-2",children:[],level:4}],level:3},{value:"b. !!! Set Column-Oriented Storage Replica",id:"b--set-column-oriented-storage-replica",children:[],level:3}],level:2},{value:"2. Make Data More Beautiful",id:"2-make-data-more-beautiful",children:[{value:"a. Config",id:"a-config",children:[],level:3},{value:"b. Start API Server",id:"b-start-api-server",children:[],level:3},{value:"c. Start Web UI",id:"c-start-web-ui",children:[],level:3},{value:"d. Well done!",id:"d-well-done",children:[],level:3}],level:2}],E={toc:k};function y(e){var t=e.components,n=(0,o.Z)(e,v);return(0,i.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now, the data is ready, let's try to analyze these data with SQL!"),(0,i.kt)("h2",{id:"1-get-insights-with-raw-sql"},"1. Get Insights With Raw SQL!"),(0,i.kt)("h3",{id:"a-cant-wait"},"a. Can't Wait!"),(0,i.kt)("h4",{id:"i-example-1"},"i. Example 1"),(0,i.kt)("p",null,"Look at ",(0,i.kt)("inlineCode",{parentName:"p"},"ti-chi-bot"),"'s details, it is a robot:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(g,{value:"sql",label:"SQL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    type, count(*)\nFROM github_events\nWHERE\n    actor_login = 'ti-chi-bot'\nGROUP BY type;\n"))),(0,i.kt)(g,{value:"explain",label:"Explain",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+------------------------------------+---------+-----------+----------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| id                                 | estRows | task      | access object                                                              | operator info                                                                                                                                                    |\n+------------------------------------+---------+-----------+----------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Projection_5                       | 1.00    | root      |                                                                            | gharchive_dev.github_events.type, Column#33                                                                                                                      |\n| \u2514\u2500HashAgg_17                       | 1.00    | root      |                                                                            | group by:gharchive_dev.github_events.type, funcs:count(Column#37)->Column#33, funcs:firstrow(gharchive_dev.github_events.type)->gharchive_dev.github_events.type |\n|   \u2514\u2500IndexLookUp_18                 | 1.00    | root      |                                                                            |                                                                                                                                                                  |\n|     \u251c\u2500IndexRangeScan_15(Build)     | 8938.94 | cop[tikv] | table:github_events, index:index_github_events_on_actor_login(actor_login) | range:["ti-chi-bot","ti-chi-bot"], keep order:false                                                                                                              |\n|     \u2514\u2500HashAgg_7(Probe)             | 1.00    | cop[tikv] |                                                                            | group by:gharchive_dev.github_events.type, funcs:count(1)->Column#37                                                                                             |\n|       \u2514\u2500TableRowIDScan_16          | 8938.94 | cop[tikv] | table:github_events                                                        | keep order:false                                                                                                                                                 |\n+------------------------------------+---------+-----------+----------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Test")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ti-chi-bot"},"ti-chi-bot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/azure-sdk"},"azure-sdk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/direwolf-github"},"direwolf-github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mhutchinson-witness"},"mhutchinson-witness"))))),(0,i.kt)("h4",{id:"ii-example-2"},"ii. Example 2"),(0,i.kt)("p",null,"The below SQL is picked from ",(0,i.kt)("a",{parentName:"p",href:"/blog/say-thanks-to-github-robots#history-trends"},"blog - Love, Code, and Robot"),", it explains how robots grow on GitHub:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(g,{value:"sql",label:"SQL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> WITH bots_with_first_seen AS (\n    SELECT\n        actor_login, MIN(event_year) AS first_seen_at\n    FROM github_events ge\n    WHERE\n        actor_login REGEXP '^(bot-.+|.+bot|.+\\\\[bot\\\\]|.+-bot-.+|robot-.+|.+-ci-.+|.+-ci|.+-testing|.+clabot.+|.+-gerrit|k8s-.+|.+-machine|.+-automation|github-.+|.+-github|.+-service|.+-builds|codecov-.+|.+teamcity.+|jenkins-.+|.+-jira-.+)$'\n    GROUP BY actor_login\n    ORDER BY first_seen_at\n),  acc AS (\n    SELECT\n        COUNT(actor_login) OVER (ORDER BY first_seen_at) AS cnt,\n        first_seen_at AS event_year\n    FROM\n        bots_with_first_seen AS bwfs\n    ORDER BY event_year\n)\nSELECT ANY_VALUE(cnt) AS bots_total, event_year\nFROM acc\nGROUP BY event_year\nORDER BY event_year;\n\n...\n\n+------------+------------+\n| bots_total | event_year |\n+------------+------------+\n|          4 |       2011 |\n|          8 |       2012 |\n|         22 |       2013 |\n|         50 |       2014 |\n|         71 |       2015 |\n|        132 |       2016 |\n|        172 |       2017 |\n|        243 |       2018 |\n|        342 |       2019 |\n|        450 |       2020 |\n|        561 |       2021 |\n|        622 |       2022 |\n+------------+------------+\n12 rows in set (28.39 sec)\n\nmysql>\n"))),(0,i.kt)(g,{value:"explain",label:"Explain",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'+----------------------------------+------------+-----------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| id                               | estRows    | task      | access object | operator info                                                                                                                                                                                                                                                          |\n+----------------------------------+------------+-----------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Sort_48                          | 56047.89   | root      |               | Column#41                                                                                                                                                                                                                                                              |\n| \u2514\u2500Projection_50                  | 56047.89   | root      |               | any_value(Column#40)->Column#42, Column#41                                                                                                                                                                                                                             |\n|   \u2514\u2500HashAgg_51                   | 56047.89   | root      |               | group by:Column#41, funcs:firstrow(Column#40)->Column#40, funcs:firstrow(Column#41)->Column#41                                                                                                                                                                         |\n|     \u2514\u2500CTEFullScan_52             | 56047.89   | root      | CTE:acc       | data:CTE_1                                                                                                                                                                                                                                                             |\n| CTE_1                            | 56047.89   | root      |               | Non-Recursive CTE                                                                                                                                                                                                                                                      |\n| \u2514\u2500Selection_38(Seed Part)        | 56047.89   | root      |               | 1                                                                                                                                                                                                                                                                      |\n|   \u2514\u2500Projection_39                | 70059.86   | root      |               | Column#37, Column#35                                                                                                                                                                                                                                                   |\n|     \u2514\u2500Window_45                  | 70059.86   | root      |               | count(gharchive_dev.github_events.actor_login)->Column#37 over(order by Column#35 range between unbounded preceding and current row)                                                                                                                                   |\n|       \u2514\u2500Sort_47                  | 70059.86   | root      |               | Column#35                                                                                                                                                                                                                                                              |\n|         \u2514\u2500CTEFullScan_46         | 70059.86   | root      | CTE:bwfs      | data:CTE_0                                                                                                                                                                                                                                                             |\n| CTE_0                            | 70059.86   | root      |               | Non-Recursive CTE                                                                                                                                                                                                                                                      |\n| \u2514\u2500Sort_18(Seed Part)             | 70059.86   | root      |               | Column#33                                                                                                                                                                                                                                                              |\n|   \u2514\u2500Projection_20                | 70059.86   | root      |               | gharchive_dev.github_events.actor_login, Column#33                                                                                                                                                                                                                     |\n|     \u2514\u2500HashAgg_21                 | 70059.86   | root      |               | group by:gharchive_dev.github_events.actor_login, funcs:min(gharchive_dev.github_events.event_year)->Column#33, funcs:firstrow(gharchive_dev.github_events.actor_login)->gharchive_dev.github_events.actor_login                                                       |\n|       \u2514\u2500Selection_28             | 824598.40  | root      |               | regexp(gharchive_dev.github_events.actor_login, "^(bot-.+|.+bot|.+\\[bot\\]|.+-bot-.+|robot-.+|.+-ci-.+|.+-ci|.+-testing|.+clabot.+|.+-gerrit|k8s-.+|.+-machine|.+-automation|github-.+|.+-github|.+-service|.+-builds|codecov-.+|.+teamcity.+|jenkins-.+|.+-jira-.+)$") |\n|         \u2514\u2500TableReader_27         | 1030748.00 | root      |               | data:TableFullScan_26                                                                                                                                                                                                                                                  |\n|           \u2514\u2500TableFullScan_26     | 1030748.00 | cop[tikv] | table:ge      | keep order:false                                                                                                                                                                                                                                                       |\n+----------------------------------+------------+-----------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("center",null,(0,i.kt)("h3",null,'"It works, but could it be faster?", "Of course!"')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"b--set-column-oriented-storage-replica"},"b. !!! Set Column-Oriented Storage Replica"),(0,i.kt)("p",null,"This step is important enough that it adds column-oriented-storage ability to TiDB - We call it ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/dev/tiflash-overview"},"TiFlash"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"tiup playground")," installed 1 TiFlash node by default, what we need to do is just make data ",(0,i.kt)("inlineCode",{parentName:"p"},"STORED")," in these replica node too."),(0,i.kt)("p",null,"i. It's easy to set TiFlash replica, different from other software, TiDB uses SQL to take such changes into effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"use gharchive_dev;\nALTER TABLE github_events SET TIFLASH REPLICA 1;\n")),(0,i.kt)("p",null,"ii. Setting a TiFlash replica will take you some time, so you can use the following SQL statements to check if the procedure is done or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM information_schema.tiflash_replica WHERE TABLE_SCHEMA = 'gharchive_dev' and TABLE_NAME = 'github_events';\n")),(0,i.kt)("p",null,"If the result you get is same as follow, that means the procedure is done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM information_schema.tiflash_replica WHERE TABLE_SCHEMA = 'gharchive_dev' and TABLE_NAME = 'github_events';\n+---------------+---------------+----------+---------------+-----------------+-----------+----------+\n| TABLE_SCHEMA  | TABLE_NAME    | TABLE_ID | REPLICA_COUNT | LOCATION_LABELS | AVAILABLE | PROGRESS |\n+---------------+---------------+----------+---------------+-----------------+-----------+----------+\n| gharchive_dev | github_events |       68 |             1 |                 |         1 |        1 |\n+---------------+---------------+----------+---------------+-----------------+-----------+----------+\n1 row in set (0.27 sec)\n\nmysql>\n")),(0,i.kt)("p",null,"Now try to execute the former robot sql(start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH bots_with_first_seen"),") again, result:"),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(g,{value:"sql",label:"SQL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> WITH bots_with_first_seen AS (\n    SELECT\n        actor_login, MIN(event_year) AS first_seen_at\n    FROM github_events ge\n    WHERE\n        actor_login REGEXP '^(bot-.+|.+bot|.+\\\\[bot\\\\]|.+-bot-.+|robot-.+|.+-ci-.+|.+-ci|.+-testing|.+clabot.+|.+-gerrit|k8s-.+|.+-machine|.+-automation|github-.+|.+-github|.+-service|.+-builds|codecov-.+|.+teamcity.+|jenkins-.+|.+-jira-.+)$'\n    GROUP BY actor_login\n    ORDER BY first_seen_at\n),  acc AS (\n    SELECT\n        COUNT(actor_login) OVER (ORDER BY first_seen_at) AS cnt,\n        first_seen_at AS event_year\n    FROM\n        bots_with_first_seen AS bwfs\n    ORDER BY event_year\n)\nSELECT ANY_VALUE(cnt) AS bots_total, event_year\nFROM acc\nGROUP BY event_year\nORDER BY event_year;\n\n...\n\n+------------+------------+\n| bots_total | event_year |\n+------------+------------+\n|          4 |       2011 |\n|          8 |       2012 |\n|         22 |       2013 |\n|         50 |       2014 |\n|         71 |       2015 |\n|        132 |       2016 |\n|        172 |       2017 |\n|        243 |       2018 |\n|        342 |       2019 |\n|        450 |       2020 |\n|        561 |       2021 |\n|        622 |       2022 |\n+------------+------------+\n12 rows in set (0.26 sec)\n\nmysql>\n"))),(0,i.kt)(g,{value:"explain",label:"Explain",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--------------------------------------------+------------+--------------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| id                                         | estRows    | task         | access object | operator info                                                                                                                                                                                                                                                          |\n+--------------------------------------------+------------+--------------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Sort_74                                    | 56949.11   | root         |               | Column#41                                                                                                                                                                                                                                                              |\n| \u2514\u2500Projection_76                            | 56949.11   | root         |               | any_value(Column#40)->Column#42, Column#41                                                                                                                                                                                                                             |\n|   \u2514\u2500HashAgg_77                             | 56949.11   | root         |               | group by:Column#41, funcs:firstrow(Column#40)->Column#40, funcs:firstrow(Column#41)->Column#41                                                                                                                                                                         |\n|     \u2514\u2500CTEFullScan_78                       | 56949.11   | root         | CTE:acc       | data:CTE_1                                                                                                                                                                                                                                                             |\n| CTE_1                                      | 56949.11   | root         |               | Non-Recursive CTE                                                                                                                                                                                                                                                      |\n| \u2514\u2500Selection_64(Seed Part)                  | 56949.11   | root         |               | 1                                                                                                                                                                                                                                                                      |\n|   \u2514\u2500Projection_65                          | 71186.39   | root         |               | Column#37, Column#35                                                                                                                                                                                                                                                   |\n|     \u2514\u2500Window_71                            | 71186.39   | root         |               | count(gharchive_dev.github_events.actor_login)->Column#37 over(order by Column#35 range between unbounded preceding and current row)                                                                                                                                   |\n|       \u2514\u2500Sort_73                            | 71186.39   | root         |               | Column#35                                                                                                                                                                                                                                                              |\n|         \u2514\u2500CTEFullScan_72                   | 71186.39   | root         | CTE:bwfs      | data:CTE_0                                                                                                                                                                                                                                                             |\n| CTE_0                                      | 71186.39   | root         |               | Non-Recursive CTE                                                                                                                                                                                                                                                      |\n| \u2514\u2500Sort_18(Seed Part)                       | 71186.39   | root         |               | Column#33                                                                                                                                                                                                                                                              |\n|   \u2514\u2500Projection_20                          | 71186.39   | root         |               | gharchive_dev.github_events.actor_login, Column#33                                                                                                                                                                                                                     |\n|     \u2514\u2500TableReader_54                       | 71186.39   | root         |               | data:ExchangeSender_53                                                                                                                                                                                                                                                 |\n|       \u2514\u2500ExchangeSender_53                  | 71186.39   | mpp[tiflash] |               | ExchangeType: PassThrough                                                                                                                                                                                                                                              |\n|         \u2514\u2500Projection_49                    | 71186.39   | mpp[tiflash] |               | Column#33, gharchive_dev.github_events.actor_login                                                                                                                                                                                                                     |\n|           \u2514\u2500HashAgg_50                     | 71186.39   | mpp[tiflash] |               | group by:gharchive_dev.github_events.actor_login, funcs:min(Column#46)->Column#33, funcs:firstrow(gharchive_dev.github_events.actor_login)->gharchive_dev.github_events.actor_login                                                                                    |\n|             \u2514\u2500ExchangeReceiver_52          | 71186.39   | mpp[tiflash] |               |                                                                                                                                                                                                                                                                        |\n|               \u2514\u2500ExchangeSender_51          | 71186.39   | mpp[tiflash] |               | ExchangeType: HashPartition, Hash Cols: [name: gharchive_dev.github_events.actor_login, collate: utf8mb4_unicode_ci]                                                                                                                                                   |\n|                 \u2514\u2500HashAgg_25               | 71186.39   | mpp[tiflash] |               | group by:gharchive_dev.github_events.actor_login, funcs:min(gharchive_dev.github_events.event_year)->Column#46                                                                                                                                                         |\n|                   \u2514\u2500Selection_48           | 837857.60  | mpp[tiflash] |               | regexp(gharchive_dev.github_events.actor_login, "^(bot-.+|.+bot|.+\\[bot\\]|.+-bot-.+|robot-.+|.+-ci-.+|.+-ci|.+-testing|.+clabot.+|.+-gerrit|k8s-.+|.+-machine|.+-automation|github-.+|.+-github|.+-service|.+-builds|codecov-.+|.+teamcity.+|jenkins-.+|.+-jira-.+)$") |\n|                     \u2514\u2500TableFullScan_47     | 1047322.00 | mpp[tiflash] | table:ge      | keep order:false                                                                                                                                                                                                                                                       |\n+--------------------------------------------+------------+--------------+---------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')))),(0,i.kt)("br",null),(0,i.kt)("center",null,(0,i.kt)("h3",null,"`28.39 sec` VS `0.26 sec`, IT IS SUPER FASTER !")),(0,i.kt)("br",null),(0,i.kt)("p",null,"We provide a all-in-one script to run ",(0,i.kt)("inlineCode",{parentName:"p"},"SET TIFLASH REPLICA")," on all tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ossinsight/backend/;\nbundle exec rake gh:set_tiflash_replica\n")),(0,i.kt)("p",null,"We won't talk too much about how to get USEFUL insights from such a big data as we are also students in open source software field. All SQLs in this project can be found on page, just click the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW SQL")," button on top-right of each chart to get the corresponding SQL."),(0,i.kt)("h2",{id:"2-make-data-more-beautiful"},"2. Make Data More Beautiful"),(0,i.kt)("h3",{id:"a-config"},"a. Config"),(0,i.kt)("p",null,"Create config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ossinsight/api/;\ncp .env.template .env;\n")),(0,i.kt)("p",null,"then edit ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# For database connection\nDATABASE_URL=mysql://root:@127.0.0.1:4000/gharchive_dev\nCONNECTION_LIMIT=10\nQUEUE_LIMIT=20\nSERVER_PORT=3450\nENABLE_CACHE=0\n# comma separated tokens\nGH_TOKENS='(your github personal access token)'\nPREFETCH_CONCURRENT=3\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"ENABLE_CACHE")," is set to 0, we won't enable cache in dev mode."))),(0,i.kt)("h3",{id:"b-start-api-server"},"b. Start API Server"),(0,i.kt)("p",null,"Open another terminal tab, then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Learn how to install npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm\ncd ossinsight/api/;\nnpm install -g pnpm;\npnpm install;\npnpm run dev;\n")),(0,i.kt)("h3",{id:"c-start-web-ui"},"c. Start Web UI"),(0,i.kt)("p",null,"Open another terminal tab, then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ossinsight/;\nnpm ci;\nAPP_HOST=http://localhost:3450 APP_API_BASE=http://localhost:3450 npm run start -- --port 30000;\n")),(0,i.kt)("h3",{id:"d-well-done"},"d. Well done!"),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:30000"},"http://localhost:30000"),";"))}y.isMDXComponent=!0}}]);