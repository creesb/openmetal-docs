"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[1832],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(f,r(r({ref:t},s),{},{components:a})):n.createElement(f,r({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},741:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={},c="OpenStack Watcher Demonstration",d={unversionedId:"operators-manual/day-4/watcher/watcher-demo",id:"operators-manual/day-4/watcher/watcher-demo",title:"OpenStack Watcher Demonstration",description:"Introduction",source:"@site/docs/operators-manual/day-4/watcher/watcher-demo.md",sourceDirName:"operators-manual/day-4/watcher",slug:"/operators-manual/day-4/watcher/watcher-demo",permalink:"/docs/manuals/docs/operators-manual/day-4/watcher/watcher-demo",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-4/watcher/watcher-demo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting RabbitMQ",permalink:"/docs/manuals/docs/operators-manual/day-4/troubleshooting/rabbitmq"},next:{title:"OpenStack Operator's Manual -- Extended",permalink:"/docs/manuals/docs/operators-manual-extras/"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Use Watcher to Consolidate your Cloud&#39;s Workload",id:"use-watcher-to-consolidate-your-clouds-workload",children:[{value:"Cloud State Before Watcher is Applied",id:"cloud-state-before-watcher-is-applied",children:[],level:3},{value:"How to use Watcher&#39;s VM Workload Consolidation Strategy",id:"how-to-use-watchers-vm-workload-consolidation-strategy",children:[{value:"Step 1: Obtain List of Goals",id:"step-1-obtain-list-of-goals",children:[],level:4},{value:"Step 2: List Strategies Available for a Goal",id:"step-2-list-strategies-available-for-a-goal",children:[],level:4},{value:"Step 3: Create Audit Template",id:"step-3-create-audit-template",children:[],level:4},{value:"Step 4: Execute Audit",id:"step-4-execute-audit",children:[],level:4},{value:"Step 5: Retrieve Action Plan",id:"step-5-retrieve-action-plan",children:[],level:4},{value:"Step 6: Review Action Plan",id:"step-6-review-action-plan",children:[],level:4},{value:"Step 7: Execute Action Plan",id:"step-7-execute-action-plan",children:[],level:4}],level:3},{value:"Cloud State After Watcher is Applied",id:"cloud-state-after-watcher-is-applied",children:[],level:3}],level:2}],p={toc:s};function u(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openstack-watcher-demonstration"},"OpenStack Watcher Demonstration"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Watcher is an OpenStack project that monitors infrastructure and\nperforms optimizations on demand. With Watcher, an administrator can\ncreate objectives for resource optimizations within their cloud, and\nWatcher either performs the actions necessary to meet these goals or\nprovides an action plan. Watcher does this by leveraging existing\nOpenStack services such as Keystone, Nova, Ironic, and Ceilometer to\nfind ways to reduce the total operating cost of your cloud. There are a\nnumber of pre-defined goals Watcher can help accomplish. In this guide,\nwe use demonstrate using a pre-defined Watcher goal to consolidate a\ncloud's workload."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"watcher-demo#use-watcher-to-consolidate-your-cloud's-workload"},"Use Watcher to Consolidate your Cloud's\nWorkload")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"watcher-demo#cloud-state-before-watcher-is-applied"},"Cloud State Before Watcher is\nApplied"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"watcher-demo#how-to-use-watcher-s-vm-workload-consolidation-strategy"},"How to use Watcher's VM Workload Consolidation\nStrategy")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-1-obtain-list-of-goals"},"Obtain List of\nGoals")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-2-list-strategies-available-for-a-goal"},"List Strategies Available for a\nGoal")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-3-create-audit-template"},"Create Audit\nTemplate")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-4-execute-audit"},"Execute\nAudit")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-5-retrieve-action-plan"},"Retrieve Action\nPlan")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-6-review-action-plan"},"Review Action\nPlan")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"watcher-demo#step-7-execute-action-plan"},"Execute Action\nPlan")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"watcher-demo#cloud-state-after-watcher-is-applied"},"Cloud State After Watcher is\nApplied")))))),(0,i.kt)("h2",{id:"use-watcher-to-consolidate-your-clouds-workload"},"Use Watcher to Consolidate your Cloud's Workload"),(0,i.kt)("p",null,"This section demonstrates use of Watcher's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/watcher/latest/strategies/vm_workload_consolidation.html"},"VM Workload Consolidation\nStrategy"),".\nThe commands and their output are recorded to provide an example Watcher\ndemonstration. We provide the state of the cloud prior to and after\napplying Watcher."),(0,i.kt)("h3",{id:"cloud-state-before-watcher-is-applied"},"Cloud State Before Watcher is Applied"),(0,i.kt)("p",null,"The following screenshot shows the state of the hypervisors and the\ncount of instances associated with each compute node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(3645).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1:")," Hypervisor list and instance count prior to applying\nWatcher"),(0,i.kt)("p",null,"This is a cloud with four compute nodes and a relatively even\ndistribution of instances spread across them."),(0,i.kt)("h3",{id:"how-to-use-watchers-vm-workload-consolidation-strategy"},"How to use Watcher's VM Workload Consolidation Strategy"),(0,i.kt)("h4",{id:"step-1-obtain-list-of-goals"},"Step 1: Obtain List of Goals"),(0,i.kt)("p",null,"First, obtain a list of available goals with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize goal list\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize goal list\n+--------------------------------------+----------------------+----------------------+\n| UUID                                 | Name                 | Display name         |\n+--------------------------------------+----------------------+----------------------+\n| 05260080-9aca-40e3-9ff5-f6d8f398d671 | airflow_optimization | Airflow Optimization |\n| d3618295-7dd2-4174-83ee-8cd466b3381a | cluster_maintaining  | Cluster Maintaining  |\n| 4488913d-b0d6-44eb-b6c6-8f1b4c6c7578 | dummy                | Dummy goal           |\n| cb10ae8f-a1f5-41e4-ac6a-2e2dfbe63648 | hardware_maintenance | Hardware Maintenance |\n| 6f676623-71b8-4eaa-a36b-fb133120db42 | noisy_neighbor       | Noisy Neighbor       |\n| 6c0ae27a-d978-46e9-9562-67ef7ee00e65 | saving_energy        | Saving Energy        |\n| 916bb6dc-84df-495e-8b40-1bfa868d93e1 | server_consolidation | Server Consolidation |\n| 5aed3f2b-7d5d-48af-b69c-35afc886bc10 | thermal_optimization | Thermal Optimization |\n| debf193e-50a8-4c90-a0b6-d82fb78b6d98 | unclassified         | Unclassified         |\n| fb940ef6-47bd-4c82-8e3a-caf9de813b03 | workload_balancing   | Workload Balancing   |\n+--------------------------------------+----------------------+----------------------+\n")),(0,i.kt)("p",null,"This example makes use of the ",(0,i.kt)("strong",{parentName:"p"},"Server Consolidation")," goal available\nfrom the above list. ",(0,i.kt)("strong",{parentName:"p"},"Note")," that the following command line examples\nreference this goal as ",(0,i.kt)("inlineCode",{parentName:"p"},"server_consolidation"),"."),(0,i.kt)("h4",{id:"step-2-list-strategies-available-for-a-goal"},"Step 2: List Strategies Available for a Goal"),(0,i.kt)("p",null,"Next, obtain a list of available strategies for the ",(0,i.kt)("strong",{parentName:"p"},"Server\nConsolidation")," goal, using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize strategy list --goal <goal-uuid-or-name>\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<goal-uuid-or-name>")," with the appropriate goal."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize strategy list --goal server_consolidation\n+--------------------------------------+-----------------------------+--------------------------------------+----------------------+\n| UUID                                 | Name                        | Display name                         | Goal                 |\n+--------------------------------------+-----------------------------+--------------------------------------+----------------------+\n| eae7ae0f-1498-45ac-a226-248739a79785 | basic                       | Basic offline consolidation          | server_consolidation |\n| b0f2838e-0eb2-4baf-8976-62744897827b | node_resource_consolidation | Node Resource Consolidation strategy | server_consolidation |\n| 4ad7dbdb-9c90-4208-8dc0-e476c803519c | vm_workload_consolidation   | VM Workload Consolidation Strategy   | server_consolidation |\n+--------------------------------------+-----------------------------+--------------------------------------+----------------------+\n")),(0,i.kt)("p",null,"Here, we can see the ",(0,i.kt)("strong",{parentName:"p"},"Server Consolidation")," has three strategies that\ncan be used to accomplish the goal. For this case, we are using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"vm_workload_consolidation")," strategy."),(0,i.kt)("h4",{id:"step-3-create-audit-template"},"Step 3: Create Audit Template"),(0,i.kt)("p",null,"Next, create an audit template based on the previously selected goal and\nstrategy using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize audittemplate create <template-name> <goal> \\\n    --strategy <strategy>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<template-name>"),": Specify a name for the audit template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<goal>"),": Specify a goal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<strategy>"),": Specify a strategy")),(0,i.kt)("p",null,"For example, the following creates an audit template called\n",(0,i.kt)("strong",{parentName:"p"},"server","_","consolidation-template")," based on the goal\n",(0,i.kt)("inlineCode",{parentName:"p"},"server_consolidation")," and strategy ",(0,i.kt)("inlineCode",{parentName:"p"},"vm_workload_consolidation"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize audittemplate create server_consolidation-template server_consolidation --strategy vm_workload_consolidation\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| UUID        | 234069e4-d03a-4a63-af54-02763056ac55 |\n| Created At  | 2022-01-21T18:22:09.385581+00:00     |\n| Updated At  | None                                 |\n| Deleted At  | None                                 |\n| Description | None                                 |\n| Name        | server_consolidation-template        |\n| Goal        | server_consolidation                 |\n| Strategy    | vm_workload_consolidation            |\n| Audit Scope | []                                   |\n+-------------+--------------------------------------+\n")),(0,i.kt)("h4",{id:"step-4-execute-audit"},"Step 4: Execute Audit"),(0,i.kt)("p",null,"Run an audit based on the audit template to generate an action plan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize audit create -a server_consolidation-template\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize audit create -a server_consolidation-template\n+---------------+------------------------------------------------------+\n| Field         | Value                                                |\n+---------------+------------------------------------------------------+\n| UUID          | 50b571c6-faff-4b0e-803d-558708bc5ec5                 |\n| Name          | vm_workload_consolidation-2022-01-21T18:23:37.360815 |\n| Created At    | 2022-01-21T18:23:37.387673+00:00                     |\n| Updated At    | None                                                 |\n| Deleted At    | None                                                 |\n| State         | PENDING                                              |\n| Audit Type    | ONESHOT                                              |\n| Parameters    | {'period': 3600, 'granularity': 300}                 |\n| Interval      | None                                                 |\n| Goal          | server_consolidation                                 |\n| Strategy      | vm_workload_consolidation                            |\n| Audit Scope   | []                                                   |\n| Auto Trigger  | False                                                |\n| Next Run Time | None                                                 |\n| Hostname      | None                                                 |\n| Start Time    | None                                                 |\n| End Time      | None                                                 |\n| Force         | False                                                |\n+---------------+------------------------------------------------------+\n")),(0,i.kt)("p",null,"This step may take some time to complete. You can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"openstack optimize audit show <audit-uuid>")," to get the status of the audit.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize audit show 50b571c6-faff-4b0e-803d-558708bc5ec5\n+---------------+------------------------------------------------------+\n| Field         | Value                                                |\n+---------------+------------------------------------------------------+\n| UUID          | 50b571c6-faff-4b0e-803d-558708bc5ec5                 |\n| Name          | vm_workload_consolidation-2022-01-21T18:23:37.360815 |\n| Created At    | 2022-01-21T18:23:37+00:00                            |\n| Updated At    | 2022-01-21T18:55:15+00:00                            |\n| Deleted At    | None                                                 |\n| State         | SUCCEEDED                                            |\n| Audit Type    | ONESHOT                                              |\n| Parameters    | {'period': 3600, 'granularity': 300}                 |\n| Interval      | None                                                 |\n| Goal          | server_consolidation                                 |\n| Strategy      | vm_workload_consolidation                            |\n| Audit Scope   | []                                                   |\n| Auto Trigger  | False                                                |\n| Next Run Time | None                                                 |\n| Hostname      | focused-capybara.local                               |\n| Start Time    | None                                                 |\n| End Time      | None                                                 |\n| Force         | False                                                |\n+---------------+------------------------------------------------------+\n")),(0,i.kt)("p",null,"The audit is complete when the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," field reflects ",(0,i.kt)("inlineCode",{parentName:"p"},"SUCCEEDED"),"."),(0,i.kt)("h4",{id:"step-5-retrieve-action-plan"},"Step 5: Retrieve Action Plan"),(0,i.kt)("p",null,"Retrieve the action plan generated by the audit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize actionplan list --audit <audit-uuid>\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<audit-uuid>")," with the UUID of the of audit."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize actionplan list --audit 50b571c6-faff-4b0e-803d-558708bc5ec5\n+--------------------------------------+--------------------------------------+-------------+------------+-------------------------------+\n| UUID                                 | Audit                                | State       | Updated At | Global efficacy               |\n+--------------------------------------+--------------------------------------+-------------+------------+-------------------------------+\n| 2abb3cae-99e2-4339-b952-0f52db59155d | 50b571c6-faff-4b0e-803d-558708bc5ec5 | RECOMMENDED | None       | Released_nodes_ratio: 25.00 % |\n|                                      |                                      |             |            |                               |\n+--------------------------------------+--------------------------------------+-------------+------------+-------------------------------+\n")),(0,i.kt)("h4",{id:"step-6-review-action-plan"},"Step 6: Review Action Plan"),(0,i.kt)("p",null,"Review the actions recommended by the audit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize action list --action-plan <action-plan-uuid>\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<action-plan-uuid>")," with the UUID of the action plan."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize action list --action-plan 2abb3cae-99e2-4339-b952-0f52db59155d\n+--------------------------------------+----------------------------------------------------------------------------------+---------+--------------------------------------+---------------------------+\n| UUID                                 | Parents                                                                          | State   | Action Plan                          | Action                    |\n+--------------------------------------+----------------------------------------------------------------------------------+---------+--------------------------------------+---------------------------+\n| 7caa5e76-0815-467d-8073-c1b1213e5e70 | []                                                                               | PENDING | 2abb3cae-99e2-4339-b952-0f52db59155d | change_nova_service_state |\n| 29c3a118-3aa7-4445-a5c0-ddc74d58a609 | ['7caa5e76-0815-467d-8073-c1b1213e5e70']                                         | PENDING | 2abb3cae-99e2-4339-b952-0f52db59155d | migrate                   |\n| 75cfa548-7679-4271-8d10-d8583beb7f54 | ['7caa5e76-0815-467d-8073-c1b1213e5e70']                                         | PENDING | 2abb3cae-99e2-4339-b952-0f52db59155d | migrate                   |\n| 47ae3e44-8bcb-4272-8582-1a24640c5f97 | ['29c3a118-3aa7-4445-a5c0-ddc74d58a609', '75cfa548-7679-4271-8d10-d8583beb7f54'] | PENDING | 2abb3cae-99e2-4339-b952-0f52db59155d | migrate                   |\n| 29a12a53-cd2d-4d39-8284-4273d07a92ee | ['29c3a118-3aa7-4445-a5c0-ddc74d58a609', '75cfa548-7679-4271-8d10-d8583beb7f54'] | PENDING | 2abb3cae-99e2-4339-b952-0f52db59155d | migrate                   |\n+--------------------------------------+----------------------------------------------------------------------------------+---------+--------------------------------------+---------------------------+\n")),(0,i.kt)("p",null,"This action plan indicates the Nova service's state will be adjusted and\nthat a number of instances are to be migrated. Note that some of the\nactions listed in the above output have been truncated for brevity."),(0,i.kt)("h4",{id:"step-7-execute-action-plan"},"Step 7: Execute Action Plan"),(0,i.kt)("p",null,"If all actions presented in the action plan are reasonable, you can have\nWatcher execute the action plan for you."),(0,i.kt)("p",null,"To execute the actions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack optimize actionplan start <action-plan-uuid>\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<action-plan-uuid>")," with the UUID of the action plan."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize actionplan start 2abb3cae-99e2-4339-b952-0f52db59155d\n+---------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Field               | Value                                                                                                                                                                                                                                                                                                                                                                                             |\n+---------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| UUID                | 2abb3cae-99e2-4339-b952-0f52db59155d                                                                                                                                                                                                                                                                                                                                                              |\n| Created At          | 2022-01-21T18:55:15+00:00                                                                                                                                                                                                                                                                                                                                                                         |\n| Updated At          | 2022-01-21T19:46:00+00:00                                                                                                                                                                                                                                                                                                                                                                         |\n| Deleted At          | None                                                                                                                                                                                                                                                                                                                                                                                              |\n| Audit               | 50b571c6-faff-4b0e-803d-558708bc5ec5                                                                                                                                                                                                                                                                                                                                                              |\n| Strategy            | vm_workload_consolidation                                                                                                                                                                                                                                                                                                                                                                         |\n| State               | PENDING                                                                                                                                                                                                                                                                                                                                                                                           |\n| Efficacy indicators | [{'name': 'compute_nodes_count', 'description': 'The total number of enabled compute nodes.', 'unit': None, 'value': 4.0}, {'name': 'released_compute_nodes_count', 'description': 'The number of compute nodes to be released.', 'unit': None, 'value': 1.0}, {'name': 'instance_migrations_count', 'description': 'The number of VM migrations to be performed.', 'unit': None, 'value': 35.0}] |\n| Global efficacy     | [{'name': 'released_nodes_ratio', 'description': 'Ratio of released compute nodes divided by the total number of enabled compute nodes.', 'unit': '%', 'value': 25.0}]                                                                                                                                                                                                                            |\n| Hostname            | None                                                                                                                                                                                                                                                                                                                                                                                              |\n+---------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n")),(0,i.kt)("p",null,"Get status of the action plan using\n",(0,i.kt)("inlineCode",{parentName:"p"},"openstack optimize actionplan show <action-plan-uuid>"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize actionplan show 2abb3cae-99e2-4339-b952-0f52db59155d\n+---------------------+-------------------------------------------------------------+\n| Field               | Value                                                       |\n+---------------------+-------------------------------------------------------------+\n| UUID                | 2abb3cae-99e2-4339-b952-0f52db59155d                        |\n| Created At          | 2022-01-21T18:55:15+00:00                                   |\n| Updated At          | 2022-01-21T19:46:00+00:00                                   |\n| Deleted At          | None                                                        |\n| Audit               | 50b571c6-faff-4b0e-803d-558708bc5ec5                        |\n| Strategy            | vm_workload_consolidation                                   |\n| State               | ONGOING                                                     |\n| Efficacy indicators | - Description: The total number of enabled compute nodes.   |\n|                     |   Name: compute_nodes_count                                 |\n|                     |   Unit: null                                                |\n|                     |   Value: 4.0                                                |\n|                     | - Description: The number of compute nodes to be released.  |\n|                     |   Name: released_compute_nodes_count                        |\n|                     |   Unit: null                                                |\n|                     |   Value: 1.0                                                |\n|                     | - Description: The number of VM migrations to be performed. |\n|                     |   Name: instance_migrations_count                           |\n|                     |   Unit: null                                                |\n|                     |   Value: 35.0                                               |\n|                     |                                                             |\n| Global efficacy     | Released_nodes_ratio: 25.00 %                               |\n|                     |                                                             |\n| Hostname            | lovely-ladybug.local                                        |\n+---------------------+-------------------------------------------------------------+\n")),(0,i.kt)("p",null,"Here is the output of the action plan after it has finished executing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# openstack optimize actionplan show 2abb3cae-99e2-4339-b952-0f52db59155d\n+---------------------+-------------------------------------------------------------+\n| Field               | Value                                                       |\n+---------------------+-------------------------------------------------------------+\n| UUID                | 2abb3cae-99e2-4339-b952-0f52db59155d                        |\n| Created At          | 2022-01-21T18:55:15+00:00                                   |\n| Updated At          | 2022-01-21T22:09:49+00:00                                   |\n| Deleted At          | None                                                        |\n| Audit               | 50b571c6-faff-4b0e-803d-558708bc5ec5                        |\n| Strategy            | vm_workload_consolidation                                   |\n| State               | SUCCEEDED                                                   |\n| Efficacy indicators | - Description: The total number of enabled compute nodes.   |\n|                     |   Name: compute_nodes_count                                 |\n|                     |   Unit: null                                                |\n|                     |   Value: 4.0                                                |\n|                     | - Description: The number of compute nodes to be released.  |\n|                     |   Name: released_compute_nodes_count                        |\n|                     |   Unit: null                                                |\n|                     |   Value: 1.0                                                |\n|                     | - Description: The number of VM migrations to be performed. |\n|                     |   Name: instance_migrations_count                           |\n|                     |   Unit: null                                                |\n|                     |   Value: 35.0                                               |\n|                     |                                                             |\n| Global efficacy     | Released_nodes_ratio: 25.00 %                               |\n|                     |                                                             |\n| Hostname            | lovely-ladybug.local                                        |\n+---------------------+-------------------------------------------------------------+\n")),(0,i.kt)("h3",{id:"cloud-state-after-watcher-is-applied"},"Cloud State After Watcher is Applied"),(0,i.kt)("p",null,"The following screenshot shows the spread of this cloud's instances\nafter Watcher's VM Workload Consolidation Strategy has been applied."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(6719).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2:")," Hypervisor list and instance count after Watcher has been\napplied"),(0,i.kt)("p",null,"For this case, Watcher determined it could run the same compute workload\nwith three hypervisors instead of four. Instances were live migrated to\nfree up a single compute host. Then, Watcher disabled the compute\nservice for the freed node."))}u.isMDXComponent=!0},6719:function(e,t,a){t.Z=a.p+"assets/images/hypervisors-after-audit-87f33ebfa23100f5c9c6456a85ae01da.png"},3645:function(e,t,a){t.Z=a.p+"assets/images/hypervisors-before-audit-3c58e8bf8b6d87de4071c29616506a86.png"}}]);