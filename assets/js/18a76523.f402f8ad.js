"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[2686],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8982:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},s="Create SSH Key Pair for an OpenStack Control Plane Node",c={unversionedId:"operators-manual/day-1/command-line/create-ssh-key",id:"operators-manual/day-1/command-line/create-ssh-key",title:"Create SSH Key Pair for an OpenStack Control Plane Node",description:"Introduction",source:"@site/docs/operators-manual/day-1/command-line/create-ssh-key.md",sourceDirName:"operators-manual/day-1/command-line",slug:"/operators-manual/day-1/command-line/create-ssh-key",permalink:"/docs/manual/docs/operators-manual/day-1/command-line/create-ssh-key",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-1/command-line/create-ssh-key.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenStack Operator's Manual - Private Cloud Core",permalink:"/docs/manual/docs/operators-manual/"},next:{title:"How to Install and Use OpenStack's CLI",permalink:"/docs/manual/docs/operators-manual/day-1/command-line/openstackclient"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to Create an SSH Key Pair",id:"how-to-create-an-ssh-key-pair",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Create the Key Pair",id:"create-the-key-pair",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-ssh-key-pair-for-an-openstack-control-plane-node"},"Create SSH Key Pair for an OpenStack Control Plane Node"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this guide, we explain how to create an SSH key pair within one of\nyour cloud's control plane nodes."),(0,a.kt)("h2",{id:"how-to-create-an-ssh-key-pair"},"How to Create an SSH Key Pair"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before beginning, ensure you have SSH access as ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," to your cloud's\ncontrol plane nodes."),(0,a.kt)("h3",{id:"create-the-key-pair"},"Create the Key Pair"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1")," -- ",(0,a.kt)("strong",{parentName:"p"},"Log in to a control plane node")),(0,a.kt)("p",null,"To begin, connect to one of your cloud's control planes nodes with SSH\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),". This example connects to the control plane node identified by\n",(0,a.kt)("inlineCode",{parentName:"p"},"173.231.254.165"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ssh root@173.231.254.165\nActivate the web console with: systemctl enable --now cockpit.socket\n\nLast login: Mon Nov  8 16:53:30 2021 from 173.231.218.25\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2")," -- ",(0,a.kt)("strong",{parentName:"p"},"Create the key pair")),(0,a.kt)("p",null,"Next, use ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," to generate an SSH key pair. This example\ndemonstrates creating a key pair of size 4096 bits, specified by\n",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-keygen -b 4096"),". The private key is saved in the default location\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"/root/.ssh/id_rsa")," and for additional security, a passphrase is set."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@relaxed-flamingo ~]# ssh-keygen -b 4096\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:iSR1QtRn5VVsRIklmfiWrVJPWtn0oV8HtxLLs6wA7iQ root@relaxed-flamingo.local\nThe key's randomart image is:\n+---[RSA 4096]----+\n|     o=..  .o.**=|\n|     . o. oo *oo=|\n|    . .  o  + *=*|\n|     o o .   @ *=|\n|      o S   + @ o|\n|     E o . . = o |\n|      +   . o    |\n|       .   .     |\n|                 |\n+----[SHA256]-----+\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3")," -- ",(0,a.kt)("strong",{parentName:"p"},"View contents of public key")),(0,a.kt)("p",null,"To view the contents of the public key, use ",(0,a.kt)("inlineCode",{parentName:"p"},"cat /root/.ssh/id_rsa.pub"),".\nIf the key was saved in another location, be sure to use the appropriate\nfile."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@relaxed-flamingo ~]# cat /root/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDjxSWaO+Md8yjDjHguhjuNokgA8R/GcRBj1dxUDJAdjwktC7ZlPxOLQLshoz76SNTt9TRk3TX/txyoWvMzuvn5n2GbYvsysVioX5mzzkzAJGSKYQM46qLKBvvtaQygJkYQFmjrCyCdeOGovKWHKgJY0V4NU0OJUMWvC67BIvDXQ2Jbyfe45ZoCk8xIG1lsMA+AzvJ+6BS5Ce+vtj5FWe8teDOH4HqiKWZiDUEUj4IGahYatuq1344VL+R/NEDYm7Wj+PzqRk2OeLdh4cvodSIPV61597ZqlVqj3pZCCJ+3QfcdqMMwNTOPiAZCASOwZ2XfKQnt4QIL6WqCdKoNgDo/7wnygLWfIBdOTejhov6z6xmvcUvuajDBwIZUtyemQD2NKR+mPuZTXwnOilFNUI3w8fkDUxWjxhSmcaui07zpNabxyEemE9sqAfAUtDY/KYOb72/JIjI41qHDSvvV08LNIYWbq3n/tHT2TVX/u4HDjrBNXHHF3/H8W4ikr7xT1drBriQWB6WlCPjYU07gw2IAww8CjWj30pXcfQtwnlgm+qa/Gkl+1TtLPrRO++4SmQ5J6LNBllrY+AFlC4v7siAuNU0w5rzJ6dTeXtDRnVNom7oNCzQHVLAmX2WxCKzlUd6b5beHl0vaywAgINZl+6tPApYhipG9C1b/v4X650elVw== root@relaxed-flamingo.local\n")),(0,a.kt)("p",null,"To have access to another machine, this public key needs to exist within\nthe file ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),". For the sake of this series of\nguides, this public key is injected into the instance created within\n",(0,a.kt)("a",{parentName:"p",href:"../horizon/create-first-instance"},"How to Create an Instance in OpenStack\nHorizon")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This concludes the steps needed to create an SSH key pair for one of\nyour cloud's control plane nodes."))}d.isMDXComponent=!0}}]);