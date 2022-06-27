"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[7537],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},620:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={},l="OpenStack Disaster Planning, Testing, and Recovery",c={unversionedId:"operators-manual/day-3/disaster-recovery",id:"operators-manual/day-3/disaster-recovery",title:"OpenStack Disaster Planning, Testing, and Recovery",description:"Introduction",source:"@site/docs/operators-manual/day-3/disaster-recovery.md",sourceDirName:"operators-manual/day-3",slug:"/operators-manual/day-3/disaster-recovery",permalink:"/openmetal-docs/docs/operators-manual/day-3/disaster-recovery",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-3/disaster-recovery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create and Restore Volume Backups",permalink:"/openmetal-docs/docs/operators-manual/day-3/create-volume-backups"},next:{title:"Container Orchestration with OpenStack Heat",permalink:"/openmetal-docs/docs/operators-manual/day-4/automation/heat"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Disaster Recovery Strategies",id:"disaster-recovery-strategies",children:[{value:"Recovery Objectives",id:"recovery-objectives",children:[],level:3},{value:"Off-site Backups",id:"off-site-backups",children:[],level:3},{value:"RBD Mirroring with Ceph",id:"rbd-mirroring-with-ceph",children:[],level:3}],level:2},{value:"Handling a Hardware Failure",id:"handling-a-hardware-failure",children:[{value:"Determine Hardware Node Failure",id:"determine-hardware-node-failure",children:[],level:3},{value:"Cluster Failure",id:"cluster-failure",children:[],level:3}],level:2},{value:"Cloud Monitoring with Datadog",id:"cloud-monitoring-with-datadog",children:[],level:2},{value:"Contact Support",id:"contact-support",children:[],level:2},{value:"Additional Reading",id:"additional-reading",children:[],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openstack-disaster-planning-testing-and-recovery"},"OpenStack Disaster Planning, Testing, and Recovery"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"While OpenStack is a resilient platform in High Availability (HA)\ndeployments, disasters that cause a hardware node or an entire cloud to\nfail may still occur. Due to the potential for unexpected events to\ncause your business or operations to fail, we suggest planning for\ndisaster events. In this guide, we emphasize the importance of planning\nfor disasters and outline strategies to consider when creating your\ndisaster recovery plan."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"disaster-recovery#disaster-recovery-strategies"},"Disaster Recovery\nStrategies")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"disaster-recovery#recovery-objectives"},"Recovery\nObjectives")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"disaster-recovery#off-site-backups"},"Off-site\nBackups")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"disaster-recovery#rbd-mirroring-with-ceph"},"RBD Mirroring with\nCeph")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"disaster-recovery#handling-a-hardware-failure"},"Handling a Hardware\nFailure")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"disaster-recovery#determine-hardware-node-failure"},"Determine Hardware Node\nFailure")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"disaster-recovery#cluster-failure"},"Cluster\nFailure")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"disaster-recovery#cloud-monitoring-with-datadog"},"Cloud Monitoring with\nDatadog"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"disaster-recovery#contact-support"},"Contact\nSupport"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"disaster-recovery#additional-reading"},"Additional\nReading")))),(0,i.kt)("h2",{id:"disaster-recovery-strategies"},"Disaster Recovery Strategies"),(0,i.kt)("p",null,"Disaster recovery varies greatly depending on the needs of your\norganization. Your disaster recovery plan should involve analyzing your\ncompany's most valuable data. This audit should include an inventory of\ndocuments, databases, and systems that are deeply involved in the\nrevenue-generating aspects of your business. As an infrastructure\nprovider, we also have the responsibility to maintain the integrity of\nour facilities to the best standards and practices to safeguard your\ndata. In addition to our responsibilities, you should take the\nadditional steps necessary to protect the integrity of your data against\npotential impacts on your private cloud."),(0,i.kt)("h3",{id:"recovery-objectives"},"Recovery Objectives"),(0,i.kt)("p",null,"The objectives behind a disaster recovery plan fall into two categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recovery Point Objectives")," - This is a specific point in time\nthat data must be backed up to resume business."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recovery Time Objectives")," - Length of time that a system can be\noffline before the business is negatively impacted.")),(0,i.kt)("p",null,"Consider the above objectives when determining the needs of your\ndisaster recovery strategies. In recovery point objectives, determining\nthe frequency of your backups is critical to your disaster strategy.\nRecovery time objectives are based on the amount of lost revenue per\nunit of lost time. This means that every hour or minute that certain\nsystems are offline can greatly impact a business."),(0,i.kt)("h3",{id:"off-site-backups"},"Off-site Backups"),(0,i.kt)("p",null,"To have an effective disaster recovery plan, we stress the use of an\noff-site backup solution. Off-site backups are a critical component to\npreventing catastrophic loss of data and limiting the blast radius of an\noutage. Although some services in OpenMetal are highly available, high\navailability does not protect against unforeseen natural disasters. In\nthe event of a hurricane, flood, or other unforeseen circumstance, it\ncould be possible that you must recover data from a different\ngeographical location. It is highly recommended that off-site backups\nare used for the most mission-critical data."),(0,i.kt)("h3",{id:"rbd-mirroring-with-ceph"},"RBD Mirroring with Ceph"),(0,i.kt)("p",null,"Private Clouds by default use Ceph as a shared storage backend. As part\nof your disaster recovery plan, consider using Ceph's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ceph.com/en/latest/rbd/rbd-mirroring/"},"RBD\nmirroring")," feature\nto mirror important data to another Ceph cluster, in a geographically\ndifferent data center location. ",(0,i.kt)("strong",{parentName:"p"},"Note")," that we currently only provide\none data center in which to host your Private Cloud."),(0,i.kt)("h2",{id:"handling-a-hardware-failure"},"Handling a Hardware Failure"),(0,i.kt)("p",null,"Great care is taken to monitor and maintain our infrastructure. However,\nin the event of hardware failure, it might be necessary to diagnose\nthese issues. If you believe you are experiencing hardware failure,\ncontact our support. Two possible hardware-related issues are failure of\na hardware node and failure of an entire cloud. The following sections\noutline how to diagnose hardware failure."),(0,i.kt)("h3",{id:"determine-hardware-node-failure"},"Determine Hardware Node Failure"),(0,i.kt)("p",null,"To quickly get the status of your cloud's control plane nodes, check the\nrunning system services in Horizon. To do so, log in as an administrator\nto Horizon and navigate to ",(0,i.kt)("strong",{parentName:"p"},"Admin -",">"," System -",">"," System Information"),".\nOn this page are tabs separating all OpenStack services, including the\nAPIs, Compute, Block Storage, and Network Agents. A service's state is\nindicated by the ",(0,i.kt)("strong",{parentName:"p"},"State"),' column. If a service is up, the value is\nreflected as "Up". If a service is down, the value is reported as\n"Down". Click through each tab to see each service\'s status. A good\nindicator that a control plane node is down is if you see "Down" under\nthe ',(0,i.kt)("strong",{parentName:"p"},"State")," column for all services of a particular node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(6380).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 1:")," OpenStack System Information"),(0,i.kt)("h3",{id:"cluster-failure"},"Cluster Failure"),(0,i.kt)("p",null,"If your entire Private Cloud has failed, the signs will be readily\napparent. If you are using monitoring software such as Datadog or\nNagios, you will be alerted to your nodes being offline. In addition to\nbeing alerted, you will be unable to access your assets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In some instances, it is also possible to see a failure of\nyour nodes within OpenMetal central. To view the status of these nodes,\ngo to the assets page of OpenMetal central, and under the hardware\nsection, there is a green indicator icon reflecting the current status\nof your nodes. If the icon is yellow or red, then the issue is likely\nhardware-related."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(2206).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Figure 2:")," Assets Page of OpenMetal Central"),(0,i.kt)("h2",{id:"cloud-monitoring-with-datadog"},"Cloud Monitoring with Datadog"),(0,i.kt)("p",null,"Datadog is an optional cloud monitoring service we provide for OpenMetal\nPrivate Clouds. Should you want to add this feature to your cloud,\ncontact your Account Manager or submit a support ticket in OpenMetal\nCentral."),(0,i.kt)("h2",{id:"contact-support"},"Contact Support"),(0,i.kt)("p",null,"If you are experiencing hardware failure or any other issues with your\nOpen Metal Private Cloud, ",(0,i.kt)("a",{parentName:"p",href:"https://central.openmetal.io/"},"Contact\nSupport"),"."),(0,i.kt)("h2",{id:"additional-reading"},"Additional Reading"),(0,i.kt)("p",null,"For more regarding OpenStack Disaster Recovery, see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RedHat's ",(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/blog/disaster-recovery-enablement-openstack"},"Disaster Recovery Enablement in\nOpenStack")),(0,i.kt)("li",{parentName:"ul"},"InMotion Hosting's ",(0,i.kt)("a",{parentName:"li",href:"https://www.inmotionhosting.com/support/product-guides/private-cloud/what-is-disaster-recovery-as-a-service-draas/"},"What is Disaster Recovery as a Service\n(DRaaS)?")),(0,i.kt)("li",{parentName:"ul"},"OpenStack's ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.openstack.org/wiki/DisasterRecovery"},"Disaster Recovery Wiki\nPage"))))}p.isMDXComponent=!0},2206:function(e,t,r){t.Z=r.p+"assets/images/assetspage_disasterrecovery-f8ebe756e9587b64a22258ec478750ed.png"},6380:function(e,t,r){t.Z=r.p+"assets/images/disaster_recovery_system_info-6d529e345b2de8de8e473798a6b35247.png"}}]);