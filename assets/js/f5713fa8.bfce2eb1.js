"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4848],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,b=p["".concat(l,".").concat(u)]||p[u]||f[u]||c;return a?n.createElement(b,s(s({ref:t},d),{},{components:a})):n.createElement(b,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<c;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1322:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return p}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),s=["components"],i={slug:"/openstack-admin/access-swift-s3-api",description:"Learn how to generate EC2 credentials in OpenStack for Swift S3 API access."},l="Create EC2 Credentials for Swift S3 API Access",o={unversionedId:"tutorials/swift-api-s3",id:"tutorials/swift-api-s3",title:"Create EC2 Credentials for Swift S3 API Access",description:"Learn how to generate EC2 credentials in OpenStack for Swift S3 API access.",source:"@site/docs/tutorials/swift-api-s3.md",sourceDirName:"tutorials",slug:"/openstack-admin/access-swift-s3-api",permalink:"/docs/manuals/openstack-admin/access-swift-s3-api",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/swift-api-s3.md",tags:[],version:"current",frontMatter:{slug:"/openstack-admin/access-swift-s3-api",description:"Learn how to generate EC2 credentials in OpenStack for Swift S3 API access."},sidebar:"tutorialSidebar",previous:{title:"How to install and configure Barbican on your OpenMetal Cloud",permalink:"/docs/manuals/tutorials/install-configure-barbican-openmetal"},next:{title:"How to Configure and Use AWS Client for Swift S3 API Access on OpenMetal",permalink:"/docs/manuals/openstack-admin/use-aws-client-to-access-swift-s3-api"}},d=[{value:"Objective",id:"objective",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"EC2 credentials",id:"ec2-credentials",children:[{value:"Create credentials",id:"create-credentials",children:[],level:3},{value:"List existing credentials",id:"list-existing-credentials",children:[],level:3},{value:"Delete credentials",id:"delete-credentials",children:[],level:3}],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],f={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"create-ec2-credentials-for-swift-s3-api-access"},"Create EC2 Credentials for Swift S3 API Access"),(0,c.kt)("h2",{id:"objective"},"Objective"),(0,c.kt)("p",null,"Generate EC2 credentials to access and manage Ceph backed object storage\ncontainers through Swift's middleware emulation of the S3 REST API on your\nOpenMetal private cloud."),(0,c.kt)("p",null,"See the OpenStack ",(0,c.kt)("a",{parentName:"p",href:"https://docs.openstack.org/swift/latest/s3_compat.html"},"S3/Swift REST API Comparison Matrix"),"\nfor compatibility information."),(0,c.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/manuals/operators-manual/day-1/command-line/openstackclient"},"OpenStack CLI client"))),(0,c.kt)("h2",{id:"ec2-credentials"},"EC2 credentials"),(0,c.kt)("p",null,"To generate an S3 token, you need 2 parameters (",(0,c.kt)("strong",{parentName:"p"},"access")," and ",(0,c.kt)("strong",{parentName:"p"},"secret"),").\nThese credentials are stored securely in Keystone and can be managed with the\nOpenStack CLI client."),(0,c.kt)("h3",{id:"create-credentials"},"Create credentials"),(0,c.kt)("p",null,"The command below generates access keys. It defaults to the currently authorized\nuser and project as determined by ",(0,c.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"<user>-openrc.sh"),", etc:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ openstack ec2 credentials create\n+------------+---------------------------------------------------------------------------------------------------------+\n| Field      | Value                                                                                                   |\n+------------+---------------------------------------------------------------------------------------------------------+\n| access     | 9a5fc02e2ed64a7cad249a8477d79203                                                                        |\n| links      | {'self': 'http://173.231.217.68:5000/v3/users/0aa830b5853d4d419cdcab81b9652bc5/credentials/OS-          |\n|            | EC2/9a5fc02e2ed64a7cad249a8477d79203'}                                                                  |\n| project_id | fd14980cc0f24e829d51c68ef78ee530                                                                        |\n| secret     | 3806359744e54aa3828285c3b56f8f83                                                                        |\n| trust_id   | None                                                                                                    |\n| user_id    | 0aa830b5853d4d419cdcab81b9652bc5                                                                        |\n+------------+---------------------------------------------------------------------------------------------------------+\n")),(0,c.kt)("p",null,"Admin users can specify an optional ",(0,c.kt)("inlineCode",{parentName:"p"},"--user")," and/or ",(0,c.kt)("inlineCode",{parentName:"p"},"--project")," as required:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ openstack ec2 credentials create --user s3demo --project s3-demo --fit-width \n+------------+-------------------------------------------------------------------------------------------------------+\n| Field      | Value                                                                                                 |\n+------------+-------------------------------------------------------------------------------------------------------+\n| access     | 18b744a314fa4165960e55af2e0539b3                                                                      |\n| links      | {'self': 'http://192.168.2.254:5000/v3/users/a19f86a6f1044c5bb28a508f8054257c/credentials/OS-         |\n|            | EC2/18b744a314fa4165960e55af2e0539b3'}                                                                |\n| project_id | 6016837b33f64cf38b5214a8aeb7fb8f                                                                      |\n| secret     | f98dfdda3e694360ab052592c9f44d43                                                                      |\n| trust_id   | None                                                                                                  |\n| user_id    | a19f86a6f1044c5bb28a508f8054257c                                                                      |\n+------------+-------------------------------------------------------------------------------------------------------+\n")),(0,c.kt)("h3",{id:"list-existing-credentials"},"List existing credentials"),(0,c.kt)("p",null,"List all credentials for the current project:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ openstack ec2 credentials list \n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n| Access                           | Secret                           | Project ID                       | User ID                          |\n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n| 981ff83b99024abfaefcbda63b5d48d1 | a12c509175d04962b81183755d1698e3 | fd14980cc0f24e829d51c68ef78ee530 | 0aa830b5853d4d419cdcab81b9652bc5 |\n| 6764bd24e4754b89b30c51c46b5b2311 | 76f09960a6b148acb906604dc269616b | fd14980cc0f24e829d51c68ef78ee530 | 0aa830b5853d4d419cdcab81b9652bc5 |\n| 9a5fc02e2ed64a7cad249a8477d79203 | 3806359744e54aa3828285c3b56f8f83 | fd14980cc0f24e829d51c68ef78ee530 | 0aa830b5853d4d419cdcab81b9652bc5 |\n| cf5ed0e704004991885358fc9f4b118e | cd898b7c8a0c4bad8dac1c3853075612 | fd14980cc0f24e829d51c68ef78ee530 | 0aa830b5853d4d419cdcab81b9652bc5 |\n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n")),(0,c.kt)("p",null,"List credentials for a specific user:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"$ openstack ec2 credentials list --user s3demo\n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n| Access                           | Secret                           | Project ID                       | User ID                          |\n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n| 18b744a314fa4165960e55af2e0539b3 | f98dfdda3e694360ab052592c9f44d43 | 6016837b33f64cf38b5214a8aeb7fb8f | a19f86a6f1044c5bb28a508f8054257c |\n| e2053effd013413fac4a4e320007e827 | 61a632d402884e32b9371b8fb46a91a4 | 6016837b33f64cf38b5214a8aeb7fb8f | a19f86a6f1044c5bb28a508f8054257c |\n+----------------------------------+----------------------------------+----------------------------------+----------------------------------+\n")),(0,c.kt)("h3",{id:"delete-credentials"},"Delete credentials"),(0,c.kt)("p",null,"Credentials are deleted by calling the ",(0,c.kt)("inlineCode",{parentName:"p"},"access")," ID. Success returns no output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"openstack ec2 credentials delete e2053effd013413fac4a4e320007e827\n")),(0,c.kt)("h2",{id:"whats-next"},"What's Next?"),(0,c.kt)("p",null,"Look forward to future use case articles as we expand our documentation."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/manuals/openstack-admin/use-aws-client-to-access-swift-s3-api"},"How to Configure and Use AWS Client for Swift S3 API Access on OpenMetal")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/manuals/openstack-admin/swift-s3-api-access-with-s3cmd"},"How to Configure and Use s3cmd for Swift S3 API Access on OpenMetal"))),(0,c.kt)("h2",{id:"resources"},"Resources"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.openstack.org/swift/latest/middleware.html#module-swift.common.middleware.s3api.s3api"},"Swift AWS S3 Api middleware"))))}p.isMDXComponent=!0}}]);