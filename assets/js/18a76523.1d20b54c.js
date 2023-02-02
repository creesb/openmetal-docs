"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[2686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Create SSH Key Pair for an OpenStack Control Plane Node",s={unversionedId:"operators-manual/day-1/command-line/create-ssh-key",id:"operators-manual/day-1/command-line/create-ssh-key",title:"Create SSH Key Pair for an OpenStack Control Plane Node",description:"Introduction",source:"@site/docs/operators-manual/day-1/command-line/create-ssh-key.md",sourceDirName:"operators-manual/day-1/command-line",slug:"/operators-manual/day-1/command-line/create-ssh-key",permalink:"/docs/manuals/operators-manual/day-1/command-line/create-ssh-key",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-1/command-line/create-ssh-key.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Install and Use OpenStack's CLI",permalink:"/docs/manuals/operators-manual/day-1/command-line/openstackclient"},next:{title:"How Private Clouds are Deployed",permalink:"/docs/manuals/operators-manual/day-2/private-cloud-deployment-overview"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How to Create an SSH Key Pair",id:"how-to-create-an-ssh-key-pair",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create the Key Pair",id:"create-the-key-pair",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-ssh-key-pair-for-an-openstack-control-plane-node"},"Create SSH Key Pair for an OpenStack Control Plane Node"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this guide, we explain how to create an SSH key pair within one of\nyour cloud's control plane nodes."),(0,r.kt)("h2",{id:"how-to-create-an-ssh-key-pair"},"How to Create an SSH Key Pair"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before beginning, ensure you have SSH access as ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," to your cloud's\ncontrol plane nodes."),(0,r.kt)("h3",{id:"create-the-key-pair"},"Create the Key Pair"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," -- ",(0,r.kt)("strong",{parentName:"p"},"Log in to a control plane node")),(0,r.kt)("p",null,"To begin, connect to one of your cloud's control planes nodes with SSH\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),". This example connects to the control plane node identified by\n",(0,r.kt)("inlineCode",{parentName:"p"},"173.231.254.165"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ssh root@173.231.254.165\nActivate the web console with: systemctl enable --now cockpit.socket\n\nLast login: Mon Nov  8 16:53:30 2021 from 173.231.218.25\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," -- ",(0,r.kt)("strong",{parentName:"p"},"Create the key pair")),(0,r.kt)("p",null,"Next, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," to generate an SSH key pair. This example\ndemonstrates creating a key pair of size 4096 bits, specified by\n",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen -b 4096"),". The private key is saved in the default location\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.ssh/id_rsa")," and for additional security, a passphrase is set."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@relaxed-flamingo ~]# ssh-keygen -b 4096\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:iSR1QtRn5VVsRIklmfiWrVJPWtn0oV8HtxLLs6wA7iQ root@relaxed-flamingo.local\nThe key's randomart image is:\n+---[RSA 4096]----+\n|     o=..  .o.**=|\n|     . o. oo *oo=|\n|    . .  o  + *=*|\n|     o o .   @ *=|\n|      o S   + @ o|\n|     E o . . = o |\n|      +   . o    |\n|       .   .     |\n|                 |\n+----[SHA256]-----+\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3")," -- ",(0,r.kt)("strong",{parentName:"p"},"View contents of public key")),(0,r.kt)("p",null,"To view the contents of the public key, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cat /root/.ssh/id_rsa.pub"),".\nIf the key was saved in another location, be sure to use the appropriate\nfile."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@relaxed-flamingo ~]# cat /root/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDjxSWaO+Md8yjDjHguhjuNokgA8R/GcRBj1dxUDJAdjwktC7ZlPxOLQLshoz76SNTt9TRk3TX/txyoWvMzuvn5n2GbYvsysVioX5mzzkzAJGSKYQM46qLKBvvtaQygJkYQFmjrCyCdeOGovKWHKgJY0V4NU0OJUMWvC67BIvDXQ2Jbyfe45ZoCk8xIG1lsMA+AzvJ+6BS5Ce+vtj5FWe8teDOH4HqiKWZiDUEUj4IGahYatuq1344VL+R/NEDYm7Wj+PzqRk2OeLdh4cvodSIPV61597ZqlVqj3pZCCJ+3QfcdqMMwNTOPiAZCASOwZ2XfKQnt4QIL6WqCdKoNgDo/7wnygLWfIBdOTejhov6z6xmvcUvuajDBwIZUtyemQD2NKR+mPuZTXwnOilFNUI3w8fkDUxWjxhSmcaui07zpNabxyEemE9sqAfAUtDY/KYOb72/JIjI41qHDSvvV08LNIYWbq3n/tHT2TVX/u4HDjrBNXHHF3/H8W4ikr7xT1drBriQWB6WlCPjYU07gw2IAww8CjWj30pXcfQtwnlgm+qa/Gkl+1TtLPrRO++4SmQ5J6LNBllrY+AFlC4v7siAuNU0w5rzJ6dTeXtDRnVNom7oNCzQHVLAmX2WxCKzlUd6b5beHl0vaywAgINZl+6tPApYhipG9C1b/v4X650elVw== root@relaxed-flamingo.local\n")),(0,r.kt)("p",null,"To have access to another machine, this public key needs to exist within\nthe file ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),". For the sake of this series of\nguides, this public key is injected into the instance created within\n",(0,r.kt)("a",{parentName:"p",href:"/docs/manuals/operators-manual/day-1/horizon/create-first-instance"},"How to Create an Instance in OpenStack Horizon")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This concludes the steps needed to create an SSH key pair for one of\nyour cloud's control plane nodes."))}d.isMDXComponent=!0}}]);