"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[630],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="How to Check Ceph's Status and Disk Usage",u={unversionedId:"operators-manual/day-2/check-ceph-status-disk-usage",id:"operators-manual/day-2/check-ceph-status-disk-usage",title:"How to Check Ceph's Status and Disk Usage",description:"Introduction",source:"@site/docs/operators-manual/day-2/check-ceph-status-disk-usage.md",sourceDirName:"operators-manual/day-2",slug:"/operators-manual/day-2/check-ceph-status-disk-usage",permalink:"/docs/manuals/operators-manual/day-2/check-ceph-status-disk-usage",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-2/check-ceph-status-disk-usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction to Ceph",permalink:"/docs/manuals/operators-manual/day-2/introduction-to-ceph"},next:{title:"Maintaining OpenStack Software Updates",permalink:"/docs/manuals/operators-manual/day-2/maintenance"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Check Ceph Status",id:"check-ceph-status",children:[],level:2},{value:"Check Ceph Disk Usage",id:"check-ceph-disk-usage",children:[],level:2}],d={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-check-cephs-status-and-disk-usage"},"How to Check Ceph's Status and Disk Usage"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Ceph was selected as the storage solution for Private Cloud Core\nOpenStack clouds due to its ability store data in a replicated fashion.\nThe data stored in the Ceph cluster is accessible from any of your\ncloud's control plane nodes. The storage is considered shared across all\nnodes, which can make recovering an instance and its data trivial. As an\nadministrator of this cloud, we aim to provide you information about how\nyou can check the status of your Ceph cluster and see available disk\nusage using the command line."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Root access to your cloud's control plane nodes")),(0,o.kt)("h2",{id:"check-ceph-status"},"Check Ceph Status"),(0,o.kt)("p",null,"To check the status of your Ceph cluster, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph status"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# ceph status\n  cluster:\n    id:     34fa49b3-fff8-4702-8b17-4e8d873c845f\n    health: HEALTH_OK\n\n  services:\n    mon: 3 daemons, quorum relaxed-flamingo,focused-capybara,lovely-ladybug (age 2w)\n    mgr: relaxed-flamingo(active, since 2w), standbys: focused-capybara, lovely-ladybug\n    osd: 4 osds: 4 up (since 3d), 4 in (since 3d)\n    rgw: 3 daemons active (focused-capybara.rgw0, lovely-ladybug.rgw0, relaxed-flamingo.rgw0)\n\n  task status:\n\n  data:\n    pools:   13 pools, 337 pgs\n    objects: 69.28k objects, 250 GiB\n    usage:   724 GiB used, 11 TiB / 12 TiB avail\n    pgs:     337 active+clean\n\n  io:\n    client:   121 KiB/s rd, 1.2 MiB/s wr, 137 op/s rd, 232 op/s wr\n")),(0,o.kt)("h2",{id:"check-ceph-disk-usage"},"Check Ceph Disk Usage"),(0,o.kt)("p",null,"To check the available disk space in your Ceph cluster, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph df"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# ceph df\n--- RAW STORAGE ---\nCLASS  SIZE    AVAIL   USED     RAW USED  %RAW USED\nssd    12 TiB  11 TiB  720 GiB   724 GiB       6.08\nTOTAL  12 TiB  11 TiB  720 GiB   724 GiB       6.08\n\n--- POOLS ---\nPOOL                       ID  PGS  STORED   OBJECTS  USED     %USED  MAX AVAIL\ndevice_health_metrics       1    1  286 KiB        4  858 KiB      0    3.4 TiB\nimages                      2   32  7.6 GiB    1.02k   23 GiB   0.22    3.4 TiB\nvolumes                     3   32   88 GiB   23.61k  264 GiB   2.45    3.4 TiB\nvms                         4   32  144 GiB   39.92k  433 GiB   3.96    3.4 TiB\nbackups                     5   32      0 B        0      0 B      0    3.4 TiB\nmetrics                     6   32   25 MiB    4.49k  127 MiB      0    3.4 TiB\nmanila_data                 7   32      0 B        0      0 B      0    3.4 TiB\nmanila_metadata             8   32      0 B        0      0 B      0    3.4 TiB\n.rgw.root                   9   32  3.6 KiB        8   96 KiB      0    3.4 TiB\ndefault.rgw.log            10   32  3.4 KiB      207  384 KiB      0    3.4 TiB\ndefault.rgw.control        11   32      0 B        8      0 B      0    3.4 TiB\ndefault.rgw.meta           12    8    954 B        4   36 KiB      0    3.4 TiB\ndefault.rgw.buckets.index  13    8  2.2 MiB       11  6.6 MiB      0    3.4 TiB\n")))}p.isMDXComponent=!0}}]);