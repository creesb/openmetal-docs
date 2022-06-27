"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[1007],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},566:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Security and Your OpenMetal Private Cloud",c={unversionedId:"operators-manual/day-4/security/security-best-practices",id:"operators-manual/day-4/security/security-best-practices",title:"Security and Your OpenMetal Private Cloud",description:"Introduction",source:"@site/docs/operators-manual/day-4/security/security-best-practices.md",sourceDirName:"operators-manual/day-4/security",slug:"/operators-manual/day-4/security/security-best-practices",permalink:"/docs/manual/docs/operators-manual/day-4/security/security-best-practices",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-4/security/security-best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Redeploy OpenStack's RabbitMQ Cluster using Kolla Ansible",permalink:"/docs/manual/docs/operators-manual/day-4/kolla-ansible/redeploy-rabbitmq"},next:{title:"Troubleshooting a Private Cloud's Ceph Cluster",permalink:"/docs/manual/docs/operators-manual/day-4/troubleshooting/ceph"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Principle of Least Privilege",id:"principle-of-least-privilege",children:[{value:"Users, Groups, Projects, and Roles",id:"users-groups-projects-and-roles",children:[{value:"Users",id:"users",children:[],level:4},{value:"Groups",id:"groups",children:[],level:4},{value:"Projects",id:"projects",children:[],level:4},{value:"Roles",id:"roles",children:[],level:4}],level:3}],level:2},{value:"Updating Software",id:"updating-software",children:[{value:"Update Individual Instances",id:"update-individual-instances",children:[],level:3},{value:"Update Glance Images",id:"update-glance-images",children:[],level:3},{value:"Update Kolla Ansible Images",id:"update-kolla-ansible-images",children:[],level:3},{value:"Update Control-Plane Nodes",id:"update-control-plane-nodes",children:[],level:3}],level:2},{value:"Enabling TLS",id:"enabling-tls",children:[],level:2},{value:"Security Groups",id:"security-groups",children:[],level:2},{value:"SSH Authentication",id:"ssh-authentication",children:[],level:2},{value:"OpenStack Security Advisor and Further Resources",id:"openstack-security-advisor-and-further-resources",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-and-your-openmetal-private-cloud"},"Security and Your OpenMetal Private Cloud"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This article provides further information for the security best\npractices for your OpenMetal Cloud. Although OpenStack is a\nsecurity-focused architecture, it is important to follow the concepts of\nleast privilege as well as perform regular maintenance updates to\nprevent security vulnerabilities from emerging. This article details how\nusers and groups can be leveraged to segment your network and improve\nsecurity through reduced privileges. Finally, additional documentation\nis provided for the OpenStack Security Center for analysis on current\nthreats."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#principle-of-least-privilege"},"Principle of Least\nPrivilege")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#roles"},"Roles"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#users-groups-and-projects"},"Users, Groups, and\nProjects")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#users"},"Users")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#groups"},"Groups")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#projects"},"Projects")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#updating-software"},"Updating\nSoftware")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#update-individual-instances"},"Update Individual\nInstances")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#update-operating-system-images"},"Update Operating System\nImages")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#update-kolla-ansible-images"},"Update Kolla Ansible\nImages")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"security-best-practices#update-control-plane-nodes"},"Update Control Plane\nNodes")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#enabling-tls"},"Enabling\nTLS"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#security-groups"},"Security\nGroups"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#ssh-authentication"},"SSH\nAuthentication"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"security-best-practices#additional-documentation"},"Additional\nDocumentation")))),(0,i.kt)("h2",{id:"principle-of-least-privilege"},"Principle of Least Privilege"),(0,i.kt)("p",null,"The philosophy around the principle of least privilege is a user account\nshould only have privileges necessary to perform its intended function.\nFor example, a financial analyst does not require admin rights or a\nsoftware engineer should not need to access financial records."),(0,i.kt)("p",null,"The benefits of operating a system using the principle of least\nprivilege are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System stability")," - Limiting the scope of changes reduces adverse\neffects of applications running on your system. This means that\nprograms are less likely to perform actions that could crash your\nmachine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System security")," - Limiting the system-wide changes can reduce\nblast radius. The blast radius is the maximum amount of damage an\nintruder can inflict after gaining access to your system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ease of deployment")," - As a general rule, the fewer privileges an\napplication needs to run, the easier it is to deploy to a larger\nenvironment.")),(0,i.kt)("p",null,"When implementing the principles of least privilege, routine audits are\nimportant to maintain the security of your system and avoid privilege\ncreep. Privilege creep is when a user or program is given more access or\nrights beyond what is necessary to their job. In addition to conducting\nregular audits, consider starting all user and system accounts with the\nleast privilege and enforcing the separation of privileges."),(0,i.kt)("h3",{id:"users-groups-projects-and-roles"},"Users, Groups, Projects, and Roles"),(0,i.kt)("p",null,"Within OpenStack, there is the ability to set individual access\ncontrols. These controls have different levels of granularity from\nsetting a project and allocating resources to managing groups of\nindividuals. There is even the ability to manage down to an individual\nuser."),(0,i.kt)("p",null,"For information about how to create a user and project, see ",(0,i.kt)("a",{parentName:"p",href:"../../day-1/horizon/create-user-project"},"Create an\nOpenStack User and Project in\nHorizon"),"."),(0,i.kt)("h4",{id:"users"},"Users"),(0,i.kt)("p",null,"When working in Openstack, there is only one administrative user. Using\nthe principle of least privilege, you should create additional users\nwhen handling various tasks within your private cloud environment."),(0,i.kt)("h4",{id:"groups"},"Groups"),(0,i.kt)("p",null,"Groups are a collection of Users within OpenStack. Groups allow an\nadministrator to manage permissions for several individual users at the\nsame time. This method for managing access helps to avoid privilege\ncreep as individuals can be removed from groups as their roles change\nwithin an organization."),(0,i.kt)("h4",{id:"projects"},"Projects"),(0,i.kt)("p",null,"Projects allow you to allocate resources within your private cloud. You\ncan isolate users and individual projects to further control access to\ncloud resources."),(0,i.kt)("h4",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Keystone roles are rights and privileges given to a user to perform\ntasks. Each service can require different types of roles to perform\ndifferent actions. In addition, existing roles can be modified through\nthe services policy.json file. Due to the containerization of OpenStack\nservices these policy files will be found within the docker container of\nthe service in /etc/service","_","name/policy.json. To find out more\ninformation about creating and managing roles visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/horizon/latest/admin/admin-manage-roles.html"},"Create and manage\nroles"),"."),(0,i.kt)("h2",{id:"updating-software"},"Updating Software"),(0,i.kt)("p",null,"All software running your Private Cloud is open source. Maintaining\nup-to-date software is important for the security of your private cloud.\nAmong the major areas that require updating are individual instances,\nimages, and the control plane nodes. Both operating system packages and\napplications require software updates over time as changes are made."),(0,i.kt)("h3",{id:"update-individual-instances"},"Update Individual Instances"),(0,i.kt)("p",null,"For any instances your cloud contains, ensure the software within is\nkept up to date. This includes the operating system's software and the\napplications running within the instance. This software is typically\nmanaged through a package manager like ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dnf"),"."),(0,i.kt)("p",null,"Updating the software in individual instances can be accomplished by\nconnecting to the instance through SSH. Once inside the instance,\nupdates can be run using the package manager of the Linux distribution\nand rebooting."),(0,i.kt)("h3",{id:"update-glance-images"},"Update Glance Images"),(0,i.kt)("p",null,"Glance is the service in OpenStack responsible for managing operating\nsystem images. Once your private cloud is deployed, these images are not\nupdated. Over time, these images can become vulnerable as it becomes\nnecessary to maintain security updates and patches. We recommend\nroutinely updating and managing these images within your existing\nOpenStack cluster. For further information on how to upload images visit\n",(0,i.kt)("a",{parentName:"p",href:"../../day-1/horizon/images"},"Manage and Upload Images in\nHorizon")),(0,i.kt)("h3",{id:"update-kolla-ansible-images"},"Update Kolla Ansible Images"),(0,i.kt)("p",null,"Kolla Ansible relies on Docker images to deploy the various OpenStack\ncontainers. Over time, updates occur, causing existing images to be out\nof date. As part of regular cloud maintenance, these images can be\nupdated, using Kolla Ansible. To learn more, see ",(0,i.kt)("a",{parentName:"p",href:"../../day-2/maintenance#how-to-obtain-latest-openstack-images-using-kolla-ansible"},"How to Obtain Latest\nOpenStack Images using Kolla\nAnsible"),"."),(0,i.kt)("h3",{id:"update-control-plane-nodes"},"Update Control-Plane Nodes"),(0,i.kt)("p",null,"For each hardware node, your cloud has, operating system updates should\nbe performed as part of routine maintenance. These updates are best\nhandled by the operating system's package manager, which for Private\nClouds running CentOS 8, is ",(0,i.kt)("inlineCode",{parentName:"p"},"dnf"),". For more information on how to update\ncontrol plane nodes visit ",(0,i.kt)("a",{parentName:"p",href:"../../day-2/maintenance"},"OpenStack Hardware Node\nMaintenance"),"."),(0,i.kt)("h2",{id:"enabling-tls"},"Enabling TLS"),(0,i.kt)("p",null,"TLS stands for Transport Layer Security protocol and is the successor to\nthe SSL. Both TLS and SSL work in much the same way, using encryption to\nprotect the transfer of information and data between two systems. Within\nOpenMetal, enabling TLS is very important for protecting login\ncredentials for your Horizon Dashboard."),(0,i.kt)("p",null,"For more information on how to enable TLS within Horizon, visit ",(0,i.kt)("a",{parentName:"p",href:"../kolla-ansible/enable-tls"},"How to\nEnable TLS for OpenStack using Kolla\nAnsible"),"."),(0,i.kt)("h2",{id:"security-groups"},"Security Groups"),(0,i.kt)("p",null,"In your private cloud, security groups act as a firewall to control\ninbound and outbound traffic to your instances. OpenStack has many\ndifferent configurations for security groups that allow you to control\nthe type of traffic to your instance as well as the port. The\nconfiguration options are known as rules. Rules define the types of\nports that are available on your instance as well as the IP addresses\nthat can connect to these specific ports."),(0,i.kt)("p",null,"For more information on how to create and manage security groups, see\nthe title heading ",(0,i.kt)("a",{parentName:"p",href:"/docs/manual/docs/operators-manual/day-1/horizon/create-first-instance#security-groups"},"Security Groups"),"\nin the ",(0,i.kt)("a",{parentName:"p",href:"../../day-1/horizon/create-first-instance"},"How to Create an Instance in OpenStack Horizon"),"\nguide."),(0,i.kt)("h2",{id:"ssh-authentication"},"SSH Authentication"),(0,i.kt)("p",null,"Authentication in your private cloud is handled by SSH keys. These keys\nare injected into your control plane nodes from the moment of deployment\nof your cloud. Authentication keys can also be added to instances before\nbeing deployed. For additional security, consider restricting access to\nport 22 and limiting SSH access to control plane nodes."),(0,i.kt)("h2",{id:"openstack-security-advisor-and-further-resources"},"OpenStack Security Advisor and Further Resources"),(0,i.kt)("p",null,"OpenStack uses two different means for communicating security-related\ninformation: Advisories and Notes. OpenStack Security Advisories (OSSA)\nhelp to communicate fixes to severe security issues. OpenStack Security\nNotes (OSSN) provide general notices for potential vulnerabilities in\ndesign, deployment, and configuration. OpenStack does have a\nVulnerability Management Team (VMT) for further information on how to\ncontact visit ",(0,i.kt)("a",{parentName:"p",href:"https://security.openstack.org/"},"OpenStack Security"),"."),(0,i.kt)("p",null,"A list of current Security Advisories for OpenStack can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://security.openstack.org/ossalist.html"},"Here"),"."),(0,i.kt)("p",null,"For a more in-depth look into current best practices with OpenStack see\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/security-guide/"},"OpenStack Security Guide"),"."))}d.isMDXComponent=!0}}]);