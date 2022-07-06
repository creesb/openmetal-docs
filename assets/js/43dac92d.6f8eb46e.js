"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3443],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return t?n.createElement(h,d(d({ref:a},u),{},{components:t})):n.createElement(h,d({ref:a},u))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<r;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1115:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),d=["components"],i={},l="How to Add or Remove OpenStack Hardware Nodes",s={unversionedId:"operators-manual/day-3/add-remove-hardware-nodes",id:"operators-manual/day-3/add-remove-hardware-nodes",title:"How to Add or Remove OpenStack Hardware Nodes",description:"Introduction",source:"@site/docs/operators-manual/day-3/add-remove-hardware-nodes.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/add-remove-hardware-nodes",permalink:"/docs/manuals/docs/operators-manual/day-3/add-remove-hardware-nodes",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-3/add-remove-hardware-nodes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Add Additional Provider IP Blocks",permalink:"/docs/manuals/docs/operators-manual/day-3/add-provider-ips"},next:{title:"How to Copy and Restore OpenStack Service Databases and Configuration",permalink:"/docs/manuals/docs/operators-manual/day-3/create-openstack-service-backups"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Cloud Hardware Selection",id:"cloud-hardware-selection",children:[{value:"Types of Private Clouds",id:"types-of-private-clouds",children:[],level:3},{value:"Types of Nodes",id:"types-of-nodes",children:[],level:3},{value:"The Benefit of Homogeneous Clouds",id:"the-benefit-of-homogeneous-clouds",children:[],level:3}],level:2},{value:"Adding Hardware Nodes to a Cloud",id:"adding-hardware-nodes-to-a-cloud",children:[{value:"How to add a Hardware Node",id:"how-to-add-a-hardware-node",children:[{value:"Navigate in OpenMetal Central to Cloud Assets Page",id:"navigate-in-openmetal-central-to-cloud-assets-page",children:[],level:4},{value:"View Hardware Node Types",id:"view-hardware-node-types",children:[],level:4},{value:"Confirm Hardware Node Addition",id:"confirm-hardware-node-addition",children:[],level:4},{value:"Verify Hardware Addition Success",id:"verify-hardware-addition-success",children:[],level:4}],level:3}],level:2},{value:"Removing Hardware Nodes from a Cloud",id:"removing-hardware-nodes-from-a-cloud",children:[{value:"Consider Before Removing",id:"consider-before-removing",children:[],level:3},{value:"Initial Preparation",id:"initial-preparation",children:[],level:3},{value:"How to Remove a Hardware Node from a Cloud",id:"how-to-remove-a-hardware-node-from-a-cloud",children:[],level:3}],level:2}],p={toc:u};function c(e){var a=e.components,i=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-add-or-remove-openstack-hardware-nodes"},"How to Add or Remove OpenStack Hardware Nodes"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"OpenMetal Private Clouds can have hardware nodes added to them,\nincreasing the available compute and storage resources to your cloud.\nSimilarly, hardware nodes can be removed should resources no longer be\nrequired. In this guide we explain best practices when selecting new\nhardware nodes for your cloud. Next we cover how to add nodes, which\ntypes of nodes you can add, and the process for removing nodes from your\ncloud."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"add-remove-hardware-nodes#cloud-hardware-selection"},"Cloud Hardware\nSelection")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#types-of-private-clouds"},"Types of Private\nClouds")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#types-of-nodes"},"Types of\nNodes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#the-benefit-of-homogeneous-clouds"},"The Benefit of Homogeneous\nClouds")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"add-remove-hardware-nodes#adding-hardware-nodes-to-a-cloud"},"Adding Hardware Nodes to a\nCloud")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"add-remove-hardware-nodes#how-to-add-a-hardware-node"},"How to add a Hardware\nNode")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#navigate-in-openmetal-central-to-cloud-assets-page"},"Navigate in OpenMetal Central to Cloud Assets\nPage")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#view-hardware-node-types"},"View Hardware Node\nTypes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#confirm-hardware-node-addition"},"Confirm Hardware Node\nAddition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#verify-hardware-addition-success"},"Verify Hardware Addition\nSuccess")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"add-remove-hardware-nodes#removing-hardware-nodes-from-a-cloud"},"Removing Hardware Nodes from a\nCloud")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#consider-before-removing"},"Consider Before\nRemoving")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#initial-preparation"},"Initial\nPreparation")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"add-remove-hardware-nodes#how-to-remove-a-hardware-node-from-a-cloud"},"How to Remove a Hardware Node from a\nCloud"))))),(0,r.kt)("h2",{id:"cloud-hardware-selection"},"Cloud Hardware Selection"),(0,r.kt)("p",null,"In this section we outline the types of clouds offered, the types of\nnodes you can add to your cloud, and best practices when choosing\nhardware for your Private Cloud. Additionally we explain conditions\nunder which your cloud's Ceph cluster is affected when adding hardware."),(0,r.kt)("h3",{id:"types-of-private-clouds"},"Types of Private Clouds"),(0,r.kt)("p",null,"We currently offer three server sizes for our Private Clouds as seen in\nthe following image:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(126).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 1:")," Private Cloud Core Selections"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Core - Small"),": This cluster type should be considered for\ntesting environments. Each node has a 1Gbit Network Interface Card\n(NIC). The network throughput across cluster members could be a\nbottleneck."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Core - Standard"),": This cluster type is considered ready for\nproduction. Each node has a 10Gbit Network Interface Card. The\nnetwork throughput across cluster members should not be a\nbottleneck."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Core - Large"),": Production-ready and provides the most\nresources. Each node also has a 10Gbit Network Interface Card.")),(0,r.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,r.kt)("p",null,"The following are the types of nodes that can be added to a cloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage and Compute - Small")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage and Compute - Standard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage and Compute - Large")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compute - Large")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GPU - A100"))),(0,r.kt)("h3",{id:"the-benefit-of-homogeneous-clouds"},"The Benefit of Homogeneous Clouds"),(0,r.kt)("p",null,"By default, Private Clouds are hyper-converged and include a Ceph\ndeployment. Generally speaking, Ceph is only as fast as your slowest\nnode allows, though there are caveats to this. Ceph could be impacted by\nthe type of nodes added to a cluster due to potential differences in\nhardware, such as performance disparity between storage provided by\nHDDs, SSDs or NVMes. Having a homogeneous cluster of similarly equipped\nnodes will have the best results in terms of performance and data\ndensity. Additionally, while you can add any hardware node to your\ncloud, the Network Interface Cards (NICs) for each designation of node\nmay have a different maximum throughput. If a node with a 1Gbit NIC is\nadded to a cluster with nodes having 10Gbit NICs, the internal network\ntraffic is limited by the additional node."),(0,r.kt)("h2",{id:"adding-hardware-nodes-to-a-cloud"},"Adding Hardware Nodes to a Cloud"),(0,r.kt)("p",null,"In this section, we explain the steps needed to add hardware nodes to\nyour cloud."),(0,r.kt)("p",null,"The following demonstrates adding a ",(0,r.kt)("strong",{parentName:"p"},"Storage and Compute - Standard"),"\nnode to a ",(0,r.kt)("strong",{parentName:"p"},"Cloud Core - Standard")," cloud."),(0,r.kt)("h3",{id:"how-to-add-a-hardware-node"},"How to add a Hardware Node"),(0,r.kt)("h4",{id:"navigate-in-openmetal-central-to-cloud-assets-page"},"Navigate in OpenMetal Central to Cloud Assets Page"),(0,r.kt)("p",null,"First navigate in OpenMetal Central to your cloud's details page. Next\nfollow the ",(0,r.kt)("strong",{parentName:"p"},"Assets")," link on the left. This page shows you details\nabout your cloud's current assets and also allows you to add a new\nhardware node. To add a new hardware node, select the ",(0,r.kt)("strong",{parentName:"p"},"Add Hardware"),"\nbutton located at the top right."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(6).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 2:")," Add Hardware"),(0,r.kt)("h4",{id:"view-hardware-node-types"},"View Hardware Node Types"),(0,r.kt)("p",null,"The next screen presents you with a list of available hardware nodes as\ncan be seen in the following screenshot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(8654).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 3:")," Available Hardware List"),(0,r.kt)("p",null,"Hardware specifications and the cost per day are listed with each\navailable offering."),(0,r.kt)("p",null,"Select the appropriate hardware node for your cloud. To add a new\nhardware node, select the ",(0,r.kt)("strong",{parentName:"p"},"Add")," button associated with the node type\nyou would like. Next, specify the amount of nodes to add from the drop\ndown."),(0,r.kt)("h4",{id:"confirm-hardware-node-addition"},"Confirm Hardware Node Addition"),(0,r.kt)("p",null,"After choosing the number of nodes to add, confirm the additional\nhardware."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(3831).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 4:")," Confirm Addition of new Hardware"),(0,r.kt)("p",null,"After the system processes the request a success message is returned as\ncan be seen below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(2713).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," -- Adding a hardware node can take around an hour to complete.\nAn email is sent to the primary account's address when complete."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 5:")," Hardware Addition Success"),(0,r.kt)("p",null,"Should you navigate back to your cloud's assets page, you can visually\nconfirm the additional node by inspecting the hardware associate with\nyour cloud. In this example, there is a red dot next to the newly added\nnode, indicating it is still being added to the cloud."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(890).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 6:")," Cloud Assets List, Newly Added Node but not Available"),(0,r.kt)("h4",{id:"verify-hardware-addition-success"},"Verify Hardware Addition Success"),(0,r.kt)("p",null,"An email is sent to your account upon successfully adding this node.\nNavigate to your cloud's assets page to confirm the newly added node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(702).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 7:")," Successful Hardware Node Addition"),(0,r.kt)("h2",{id:"removing-hardware-nodes-from-a-cloud"},"Removing Hardware Nodes from a Cloud"),(0,r.kt)("p",null,"In this section, we outline the steps required to remove a hardware node\nfrom your cloud."),(0,r.kt)("p",null,"There is not a native feature in OpenMetal Central allowing you to\nremove hardware nodes from your cloud. Should you need to remove a\nhardware node from your cloud, consult with your Account Manager first\nor submit a ticket through OpenMetal Central. It is very important all\ndata required from this node is copied elsewhere prior to making a\nrequest to remove a hardware node. You can help facilitate the process\nof removing the node by ",(0,r.kt)("a",{parentName:"p",href:"../day-2/live-migrate-instances"},"migrating any running\ninstances")," from it to\nanother node."),(0,r.kt)("h3",{id:"consider-before-removing"},"Consider Before Removing"),(0,r.kt)("p",null,"At all times, your cloud must have three hyperconverged control plane\nnodes running to have a fully functioning OpenStack cloud. As such, the\nnode being removed cannot be a control plane node."),(0,r.kt)("p",null,"Control plane nodes in OpenMetal Central are prefixed with ",(0,r.kt)("strong",{parentName:"p"},"Cloud\nCore")," and can be distinguished from other nodes by inspecting the\n",(0,r.kt)("strong",{parentName:"p"},"Class")," column in your cloud's assets page in OpenMetal Central."),(0,r.kt)("p",null,"For example, in the following screenshot, the first three nodes are\ncontrol plane nodes:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(8777).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Figure 8:")," Control Plane nodes"),(0,r.kt)("p",null,"The last node, classified by ",(0,r.kt)("strong",{parentName:"p"},"Storage and Compute - Standard")," is not a\ncontrol plane node, meaning it does not run all the core OpenStack\nservices."),(0,r.kt)("p",null,"Our support will review your request to ensure requirements are met\nprior to removal."),(0,r.kt)("h3",{id:"initial-preparation"},"Initial Preparation"),(0,r.kt)("p",null,"To prepare for removal of a hardware node, migrate any instances to\nanother node that has compute services running. All hyperconverged nodes\nrun OpenStack's compute service. For instruction regarding migrating\ninstances to another node, see the ",(0,r.kt)("a",{parentName:"p",href:"../day-2/live-migrate-instances"},"How to Live Migrate\nInstances")," guide."),(0,r.kt)("h3",{id:"how-to-remove-a-hardware-node-from-a-cloud"},"How to Remove a Hardware Node from a Cloud"),(0,r.kt)("p",null,"To remove a hardware node from a cloud a ticket must be submitted with\nthe request through OpenMetal Central. Specify the hostname or IP\naddress of the node you wish to be removed and an agent will review the\nrequest."))}c.isMDXComponent=!0},8654:function(e,a,t){a.Z=t.p+"assets/images/add-hardware-offerings-1f9d5353cb5ee43ed6dfded8043daea8.png"},6:function(e,a,t){a.Z=t.p+"assets/images/cloud-assets-page-7d1851ce760bc4bd5273c3181c119e88.png"},3831:function(e,a,t){a.Z=t.p+"assets/images/confirm-node-addition-7e039c8cc27e97be3cd40614f66f804d.png"},8777:function(e,a,t){a.Z=t.p+"assets/images/control-plane-nodes-listed-6f195bcd8b62c94d3e462abb3521516d.png"},2713:function(e,a,t){a.Z=t.p+"assets/images/hardware-addition-success-0b14f24a2ffb39032225d262883dbe34.png"},890:function(e,a,t){a.Z=t.p+"assets/images/post-addition-node-not-yet-ready-18b0ec2a17cfda851be50e84e382b577.png"},702:function(e,a,t){a.Z=t.p+"assets/images/post-addition-success-0bd52f56f1cbbe51eaab1df648e5004a.png"},126:function(e,a,t){a.Z=t.p+"assets/images/private-cloud-core-types-5442aabdea0476d884f2ebbf69043059.png"}}]);