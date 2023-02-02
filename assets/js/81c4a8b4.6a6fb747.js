"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[8121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[u]="string"==typeof e?e:o,i[1]=n;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const s={slug:"/openstack-admin/cloud-resource-usage-dashboard",description:"Start creating and customizing Datadog monitoring dashboards on your OpenMetal cloud"},i="Cloud Physical Resource Usage - Custom Datadog Dashboard",n={unversionedId:"engineers-notes/datadog-resource-dashboard",id:"engineers-notes/datadog-resource-dashboard",title:"Cloud Physical Resource Usage - Custom Datadog Dashboard",description:"Start creating and customizing Datadog monitoring dashboards on your OpenMetal cloud",source:"@site/docs/engineers-notes/datadog-resource-dashboard.md",sourceDirName:"engineers-notes",slug:"/openstack-admin/cloud-resource-usage-dashboard",permalink:"/docs/manuals/openstack-admin/cloud-resource-usage-dashboard",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/engineers-notes/datadog-resource-dashboard.md",tags:[],version:"current",frontMatter:{slug:"/openstack-admin/cloud-resource-usage-dashboard",description:"Start creating and customizing Datadog monitoring dashboards on your OpenMetal cloud"},sidebar:"tutorialSidebar",previous:{title:"Creating Custom Images with Packer on OpenMetal",permalink:"/docs/manuals/engineers-notes/custom-image-packer"},next:{title:"Intro to cloud-init",permalink:"/docs/manuals/cloud-administration/intro-to-cloud-init"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Goal",id:"goal",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access Datadog",id:"access-datadog",level:2},{value:"Create new dashboard",id:"create-new-dashboard",level:2},{value:"Import JSON",id:"import-json",level:2},{value:"Cloud Physical Resource Usage dashboard",id:"cloud-physical-resource-usage-dashboard",level:2},{value:"Dashboard JSON",id:"dashboard-json",level:2},{value:"Code block",id:"code-block",level:3},{value:"Resources",id:"resources",level:2}],c={toc:d};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-physical-resource-usage---custom-datadog-dashboard"},"Cloud Physical Resource Usage - Custom Datadog Dashboard"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Get started with custom dashboards and begin monitoring the physical resource\nusage of your OpenMetal cloud nodes."),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"In this article you will learn how to import a custom Datadog dashboard, from a\nJSON formatted definition, providing a basic overview of your clouds physical\nresource usage and availability."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/manuals/openmetal-central/enable-datadog-monitoring"},"Enable Datadog Monitoring"))),(0,o.kt)("h2",{id:"access-datadog"},"Access Datadog"),(0,o.kt)("p",null,"Access Datadog from OpenMetal Central with ",(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/openmetal-central/enable-datadog-monitoring#access-datadog"},"single sign-on")),(0,o.kt)("h2",{id:"create-new-dashboard"},"Create new dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to Dashboards if not there already."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"New dash navigation",src:a(4517).Z,width:"1320",height:"818"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"[+ New Dashboard]"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the new window, again click ",(0,o.kt)("strong",{parentName:"p"},"New Dashboard")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create dash",src:a(7581).Z,width:"794",height:"480"})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The name field will be overwritten the imported JSON")))),(0,o.kt)("h2",{id:"import-json"},"Import JSON"),(0,o.kt)("p",null,"You now have a blank dashboard and Datadog has provided a handy sidebar for\nquickly searching and adding widgets. This is covering the settings menu we\nneed so our first task is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close the widget quick add sidebar"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Widget sidebar",src:a(7324).Z,width:"1155",height:"399"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the now revealed gear icon to open the settings menu"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Settings",src:a(8800).Z,width:"1168",height:"292"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Import dashboard from JSON...")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Import menu",src:a(5574).Z,width:"260",height:"556"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The next window asks for the dashboard JSON you wish to import. You can\ndrag and drop, browse for a file, or paste from your clipboard."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/openstack-admin/cloud-resource-usage-dashboard#code-block"},"code block"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Input JSON",src:a(6462).Z,width:"546",height:"368"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm overwrite action"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Import confirmation",src:a(2330).Z,width:"550",height:"196"})))),(0,o.kt)("h2",{id:"cloud-physical-resource-usage-dashboard"},"Cloud Physical Resource Usage dashboard"),(0,o.kt)("p",null,"If all went well you should now see your new dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Imported dash",src:a(8429).Z,width:"1320",height:"666"})),(0,o.kt)("p",null,"To find out more about any of the widgets, mouse over its title bar and click\nthe pencil (edit) icon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit icon",src:a(6742).Z,width:"391",height:"168"})),(0,o.kt)("p",null,"This opens the editor for the selected widget."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Traffic monitor edit",src:a(2146).Z,width:"1304",height:"423"})),(0,o.kt)("p",null,"On this page you can view and edit all aspects of the widget."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Editable fields",src:a(4714).Z,width:"1311",height:"973"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Visualization type")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Data sources")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Display preferences")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Graph title"))),(0,o.kt)("p",null,"Here you can also view and/or edit your data source JSON directly."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data source JSON",src:a(6466).Z,width:"1293",height:"573"})),(0,o.kt)("h2",{id:"dashboard-json"},"Dashboard JSON"),(0,o.kt)("p",null,"This JSON code creates a custom Datadog dashboard monitoring and visualizing\nthe following values for each host:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU Idle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Percent Usable Memory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Traffic - Ingress + Egress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Percent Used Disk Space")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Ceph Disk Usage"))),(0,o.kt)("h3",{id:"code-block"},"Code block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"title":"Cloud Physical Resource Usage","description":"## Title\\n\\nDescribe this dashboard. Add links to other dashboards, monitors, wikis,  and docs to help your teammates. Markdown is supported.\\n\\n- [This might link to a dashboard](#)\\n- [This might link to a wiki](#)","widgets":[{"id":8462073962564395,"definition":{"title":"CPU Idle for all Hosts","title_size":"16","title_align":"left","show_legend":false,"time":{"live_span":"4h"},"type":"timeseries","requests":[{"formulas":[{"formula":"query1"}],"response_format":"timeseries","queries":[{"query":"sum:system.cpu.idle{*} by {host}","data_source":"metrics","name":"query1"}],"style":{"palette":"dog_classic","line_type":"solid","line_width":"normal"},"display_type":"line"}],"markers":[{"value":"y = 0","display_type":"error dashed"},{"value":"y = 100","display_type":"ok dashed"}]},"layout":{"x":0,"y":0,"width":4,"height":2}},{"id":8190888575322488,"definition":{"title":"Percent Usable Memory per Host","type":"treemap","requests":[{"formulas":[{"formula":"query1"}],"response_format":"scalar","queries":[{"query":"avg:system.mem.pct_usable{*} by {host}","data_source":"metrics","name":"query1","aggregator":"avg"}]}]},"layout":{"x":4,"y":0,"width":4,"height":2}},{"id":6935696381171286,"definition":{"title":"Ingress + Egress Network Traffic for all Hosts","title_size":"16","title_align":"left","show_legend":false,"legend_layout":"auto","legend_columns":["avg","min","max","value","sum"],"type":"timeseries","requests":[{"formulas":[{"formula":"query1"}],"response_format":"timeseries","queries":[{"query":"sum:system.net.bytes_rcvd{*} by {host}","data_source":"metrics","name":"query1"}],"style":{"palette":"dog_classic","line_type":"solid","line_width":"normal"},"display_type":"line"},{"formulas":[{"formula":"0 - query1"}],"response_format":"timeseries","queries":[{"query":"sum:system.net.bytes_sent{*} by {host}","data_source":"metrics","name":"query1"}],"style":{"palette":"dog_classic","line_type":"solid","line_width":"normal"},"display_type":"line"}]},"layout":{"x":8,"y":0,"width":4,"height":2}},{"id":4847638474091271,"definition":{"title":"Total Ceph Disk Usage","title_size":"16","title_align":"left","type":"query_value","requests":[{"formulas":[{"formula":"query1"}],"conditional_formats":[{"comparator":"<=","palette":"white_on_green","value":70},{"comparator":">","palette":"white_on_yellow","value":70},{"comparator":">","palette":"white_on_red","value":80}],"response_format":"scalar","queries":[{"query":"avg:ceph.aggregate_pct_used{*}","data_source":"metrics","name":"query1","aggregator":"avg"}]}],"autoscale":true,"precision":2},"layout":{"x":0,"y":2,"width":4,"height":2}},{"id":4208572359463889,"definition":{"title":"Percent Used Disk Space for each Host","title_size":"16","title_align":"left","show_legend":false,"legend_layout":"auto","legend_columns":["avg","min","max","value","sum"],"type":"timeseries","requests":[{"formulas":[{"formula":"query1"},{"formula":"query1 * 100"}],"response_format":"timeseries","queries":[{"query":"avg:system.disk.in_use{host:*} by {host}","data_source":"metrics","name":"query1"}],"style":{"palette":"dog_classic","line_type":"solid","line_width":"normal"},"display_type":"line"}],"markers":[{"value":"y = 100","display_type":"error dashed"}]},"layout":{"x":4,"y":2,"width":4,"height":2}}],"template_variables":[],"layout_type":"ordered","is_read_only":false,"notify_list":[],"reflow_type":"fixed","id":"xsb-5ef-g4d"}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datadog provides robust and comprehensive ",(0,o.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com"},"documentation"))))}u.isMDXComponent=!0},7581:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-dash-b4e0284d1e44975277589958d8e4b885.png"},4517:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dash-1-2-9f3c95e79078237e0f4c50920c8a5946.png"},8800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dash-gear-24f53eb9f3178fed57e8b1ad3b74b26f.png"},2330:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/do-want-paste-54ee0da3c4c7fd190b1c1b0267af7051.png"},4714:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/edit-1-4-5155e940a8b1974514dc55b4fe8142cb.png"},6742:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/edit-widget-8adc6cea8eaef67f3b9709a0ce92ea01.png"},8429:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final-result-6fa5d469aa414d95374b2fcec7f67767.png"},6466:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-data-json-99d05db57e99ea8344b5c2d511264c0d.png"},5574:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/import-json-eac82de5ade6acd0730de57cd5356be8.png"},6462:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/json-input-a162fa3d1c5f635cd8bcc9742b31d7fc.png"},2146:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/traf-graph-edit-8f06a6ee4181147b82deff73557026d5.png"},7324:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/widgetx-ba49aa86a5edc1df0f1e8c3218bd54da.png"}}]);