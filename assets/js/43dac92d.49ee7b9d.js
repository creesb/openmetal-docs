"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?o.createElement(m,d(d({ref:t},u),{},{components:a})):o.createElement(m,d({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,d=new Array(r);d[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,d[1]=i;for(var l=2;l<r;l++)d[l]=a[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},d="How to Add or Remove OpenStack Hardware Nodes",i={unversionedId:"operators-manual/day-3/add-remove-hardware-nodes",id:"operators-manual/day-3/add-remove-hardware-nodes",title:"How to Add or Remove OpenStack Hardware Nodes",description:"Introduction",source:"@site/docs/operators-manual/day-3/add-remove-hardware-nodes.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/add-remove-hardware-nodes",permalink:"/docs/manuals/operators-manual/day-3/add-remove-hardware-nodes",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-3/add-remove-hardware-nodes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manage Node Firewall Using iptables",permalink:"/docs/manuals/operators-manual/day-2/manage-node-firewall-with-iptables"},next:{title:"How to Add Additional Provider IP Blocks",permalink:"/docs/manuals/operators-manual/day-3/add-provider-ips"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Cloud Hardware Selection",id:"cloud-hardware-selection",level:2},{value:"Types of Private Clouds",id:"types-of-private-clouds",level:3},{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"The Benefit of Homogeneous Clouds",id:"the-benefit-of-homogeneous-clouds",level:3},{value:"Adding Hardware Nodes to a Cloud",id:"adding-hardware-nodes-to-a-cloud",level:2},{value:"How to add a Hardware Node",id:"how-to-add-a-hardware-node",level:3},{value:"Navigate in OpenMetal Central to Cloud Assets Page",id:"navigate-in-openmetal-central-to-cloud-assets-page",level:4},{value:"View Hardware Node Types",id:"view-hardware-node-types",level:4},{value:"Confirm Hardware Node Addition",id:"confirm-hardware-node-addition",level:4},{value:"Verify Hardware Addition Success",id:"verify-hardware-addition-success",level:4},{value:"Removing Hardware Nodes from a Cloud",id:"removing-hardware-nodes-from-a-cloud",level:2},{value:"Consider Before Removing",id:"consider-before-removing",level:3},{value:"Initial Preparation",id:"initial-preparation",level:3},{value:"How to Remove a Hardware Node from a Cloud",id:"how-to-remove-a-hardware-node-from-a-cloud",level:3}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-add-or-remove-openstack-hardware-nodes"},"How to Add or Remove OpenStack Hardware Nodes"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"OpenMetal Private Clouds can have hardware nodes added to them,\nincreasing the available compute and storage resources to your cloud.\nSimilarly, hardware nodes can be removed should resources no longer be\nrequired. In this guide we explain best practices when selecting new\nhardware nodes for your cloud. Next we cover how to add nodes, which\ntypes of nodes you can add, and the process for removing nodes from your\ncloud."),(0,n.kt)("h2",{id:"cloud-hardware-selection"},"Cloud Hardware Selection"),(0,n.kt)("p",null,"In this section we outline the types of clouds offered, the types of\nnodes you can add to your cloud, and best practices when choosing\nhardware for your Private Cloud. Additionally we explain conditions\nunder which your cloud's Ceph cluster is affected when adding hardware."),(0,n.kt)("h3",{id:"types-of-private-clouds"},"Types of Private Clouds"),(0,n.kt)("p",null,"We currently offer three server sizes for our Private Clouds as seen in\nthe following image:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(8875).Z,width:"1320",height:"790"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 1:")," Private Cloud Core Selections"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Core - Small"),": This cluster type should be considered for\ntesting environments. Each node has a 1Gbit Network Interface Card\n(NIC). The network throughput across cluster members could be a\nbottleneck."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Core - Standard"),": This cluster type is considered ready for\nproduction. Each node has a 10Gbit Network Interface Card. The\nnetwork throughput across cluster members should not be a\nbottleneck."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Core - Large"),": Production-ready and provides the most\nresources. Each node also has a 10Gbit Network Interface Card.")),(0,n.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,n.kt)("p",null,"The following are the types of nodes that can be added to a cloud."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage and Compute - Small")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage and Compute - Standard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage and Compute - Large")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Compute - Large")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GPU - A100"))),(0,n.kt)("h3",{id:"the-benefit-of-homogeneous-clouds"},"The Benefit of Homogeneous Clouds"),(0,n.kt)("p",null,"By default, Private Clouds are hyper-converged and include a Ceph\ndeployment. Generally speaking, Ceph is only as fast as your slowest\nnode allows, though there are caveats to this. Ceph could be impacted by\nthe type of nodes added to a cluster due to potential differences in\nhardware, such as performance disparity between storage provided by\nHDDs, SSDs or NVMes. Having a homogeneous cluster of similarly equipped\nnodes will have the best results in terms of performance and data\ndensity. Additionally, while you can add any hardware node to your\ncloud, the Network Interface Cards (NICs) for each designation of node\nmay have a different maximum throughput. If a node with a 1Gbit NIC is\nadded to a cluster with nodes having 10Gbit NICs, the internal network\ntraffic is limited by the additional node."),(0,n.kt)("h2",{id:"adding-hardware-nodes-to-a-cloud"},"Adding Hardware Nodes to a Cloud"),(0,n.kt)("p",null,"In this section, we explain the steps needed to add hardware nodes to\nyour cloud."),(0,n.kt)("p",null,"The following demonstrates adding a ",(0,n.kt)("strong",{parentName:"p"},"Storage and Compute - Standard"),"\nnode to a ",(0,n.kt)("strong",{parentName:"p"},"Cloud Core - Standard")," cloud."),(0,n.kt)("h3",{id:"how-to-add-a-hardware-node"},"How to add a Hardware Node"),(0,n.kt)("h4",{id:"navigate-in-openmetal-central-to-cloud-assets-page"},"Navigate in OpenMetal Central to Cloud Assets Page"),(0,n.kt)("p",null,"First navigate in OpenMetal Central to your cloud's details page. Next\nfollow the ",(0,n.kt)("strong",{parentName:"p"},"Assets")," link on the left. This page shows you details\nabout your cloud's current assets and also allows you to add a new\nhardware node. To add a new hardware node, select the ",(0,n.kt)("strong",{parentName:"p"},"Add Hardware"),"\nbutton located at the top right."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(3245).Z,width:"1702",height:"354"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 2:")," Add Hardware"),(0,n.kt)("h4",{id:"view-hardware-node-types"},"View Hardware Node Types"),(0,n.kt)("p",null,"The next screen presents you with a list of available hardware nodes as\ncan be seen in the following screenshot."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(2251).Z,width:"1276",height:"471"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 3:")," Available Hardware List"),(0,n.kt)("p",null,"Hardware specifications and the cost per day are listed with each\navailable offering."),(0,n.kt)("p",null,"Select the appropriate hardware node for your cloud. To add a new\nhardware node, select the ",(0,n.kt)("strong",{parentName:"p"},"Add")," button associated with the node type\nyou would like. Next, specify the amount of nodes to add from the drop\ndown."),(0,n.kt)("h4",{id:"confirm-hardware-node-addition"},"Confirm Hardware Node Addition"),(0,n.kt)("p",null,"After choosing the number of nodes to add, confirm the additional\nhardware."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(730).Z,width:"911",height:"596"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 4:")," Confirm Addition of new Hardware"),(0,n.kt)("p",null,"After the system processes the request a success message is returned as\ncan be seen below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(3218).Z,width:"728",height:"482"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," -- Adding a hardware node can take around an hour to complete.\nAn email is sent to the primary account's address when complete."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 5:")," Hardware Addition Success"),(0,n.kt)("p",null,"Should you navigate back to your cloud's assets page, you can visually\nconfirm the additional node by inspecting the hardware associate with\nyour cloud. In this example, there is a red dot next to the newly added\nnode, indicating it is still being added to the cloud."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1998).Z,width:"1406",height:"377"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 6:")," Cloud Assets List, Newly Added Node but not Available"),(0,n.kt)("h4",{id:"verify-hardware-addition-success"},"Verify Hardware Addition Success"),(0,n.kt)("p",null,"An email is sent to your account upon successfully adding this node.\nNavigate to your cloud's assets page to confirm the newly added node."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(6718).Z,width:"1397",height:"372"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 7:")," Successful Hardware Node Addition"),(0,n.kt)("h2",{id:"removing-hardware-nodes-from-a-cloud"},"Removing Hardware Nodes from a Cloud"),(0,n.kt)("p",null,"In this section, we outline the steps required to remove a hardware node\nfrom your cloud."),(0,n.kt)("p",null,"There is not a native feature in OpenMetal Central allowing you to\nremove hardware nodes from your cloud. Should you need to remove a\nhardware node from your cloud, consult with your Account Manager first\nor submit a ticket through OpenMetal Central. It is very important all\ndata required from this node is copied elsewhere prior to making a\nrequest to remove a hardware node. You can help facilitate the process\nof removing the node by ",(0,n.kt)("a",{parentName:"p",href:"../day-2/live-migrate-instances"},"migrating any running instances"),"\nfrom it to another node."),(0,n.kt)("h3",{id:"consider-before-removing"},"Consider Before Removing"),(0,n.kt)("p",null,"At all times, your cloud must have three hyperconverged control plane\nnodes running to have a fully functioning OpenStack cloud. As such, the\nnode being removed cannot be a control plane node."),(0,n.kt)("p",null,"Control plane nodes in OpenMetal Central are prefixed with ",(0,n.kt)("strong",{parentName:"p"},"Cloud\nCore")," and can be distinguished from other nodes by inspecting the\n",(0,n.kt)("strong",{parentName:"p"},"Class")," column in your cloud's assets page in OpenMetal Central."),(0,n.kt)("p",null,"For example, in the following screenshot, the first three nodes are\ncontrol plane nodes:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(8107).Z,width:"1396",height:"286"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Figure 8:")," Control Plane nodes"),(0,n.kt)("p",null,"The last node, classified by ",(0,n.kt)("strong",{parentName:"p"},"Storage and Compute - Standard")," is not a\ncontrol plane node, meaning it does not run all the core OpenStack\nservices."),(0,n.kt)("p",null,"Our support will review your request to ensure requirements are met\nprior to removal."),(0,n.kt)("h3",{id:"initial-preparation"},"Initial Preparation"),(0,n.kt)("p",null,"To prepare for removal of a hardware node, migrate any instances to\nanother node that has compute services running. All hyperconverged nodes\nrun OpenStack's compute service. For instruction regarding migrating\ninstances to another node, see the ",(0,n.kt)("a",{parentName:"p",href:"../day-2/live-migrate-instances"},"How to Live Migrate\nInstances")," guide."),(0,n.kt)("h3",{id:"how-to-remove-a-hardware-node-from-a-cloud"},"How to Remove a Hardware Node from a Cloud"),(0,n.kt)("p",null,"To remove a hardware node from a cloud a ticket must be submitted with\nthe request through OpenMetal Central. Specify the hostname or IP\naddress of the node you wish to be removed and an agent will review the\nrequest."))}c.isMDXComponent=!0},2251:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/add-hardware-offerings-1f9d5353cb5ee43ed6dfded8043daea8.png"},3245:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cloud-assets-page-7d1851ce760bc4bd5273c3181c119e88.png"},730:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/confirm-node-addition-7e039c8cc27e97be3cd40614f66f804d.png"},8107:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/control-plane-nodes-listed-6f195bcd8b62c94d3e462abb3521516d.png"},3218:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hardware-addition-success-0b14f24a2ffb39032225d262883dbe34.png"},1998:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/post-addition-node-not-yet-ready-18b0ec2a17cfda851be50e84e382b577.png"},6718:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/post-addition-success-0bd52f56f1cbbe51eaab1df648e5004a.png"},8875:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/private-cloud-core-types-5442aabdea0476d884f2ebbf69043059.png"}}]);