"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[2715],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:8},s="Manage OpenStack Images",c={unversionedId:"users_manual/using_creating_images_cli",id:"users_manual/using_creating_images_cli",title:"Manage OpenStack Images",description:"Images in OpenStack are what powers instances. In this guide, you will",source:"@site/docs/users_manual/using_creating_images_cli.md",sourceDirName:"users_manual",slug:"/users_manual/using_creating_images_cli",permalink:"/docs/manuals/docs/users_manual/using_creating_images_cli",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/users_manual/using_creating_images_cli.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Create a Network",permalink:"/docs/manuals/docs/users_manual/network_ip_traffic_cli"},next:{title:"Create an Instance",permalink:"/docs/manuals/docs/users_manual/create_an_instance_cli"}},p=[{value:"List and Upload Images",id:"list-and-upload-images",children:[{value:"<strong>List images</strong>",id:"list-images",children:[],level:3},{value:"<strong>Show image details</strong>",id:"show-image-details",children:[],level:3},{value:"<strong>Upload an image</strong>",id:"upload-an-image",children:[],level:3}],level:2},{value:"<strong>Next Steps</strong>",id:"next-steps",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-openstack-images"},"Manage OpenStack Images"),(0,i.kt)("p",null,"Images in OpenStack are what powers instances. In this guide, you will\nlearn how to view images, upload your own, and make snapshots of images."),(0,i.kt)("p",null,"An image is a file that contains a bootable operating system. Many\ndifferent cloud image sources are available for download from major\noperating system providers like CentOS, Ubuntu, and Debian to name a\nfew. You can also make your own images from\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.openstack.org/image-guide/create-images-manually.html"},"scratch"),"\nor create them from volumes or running instances. Snapshots of instances\ncan be created which can serve both as a backup and also a template for\nother instances."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"list-and-upload-images"},"List and Upload Images"),(0,i.kt)("h3",{id:"list-images"},(0,i.kt)("strong",{parentName:"h3"},"List images")),(0,i.kt)("p",null,"To begin, you will learn how to list images using OpenStackClient."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1")," -- List images"),(0,i.kt)("p",null,"To list available images, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openstack image list\n+--------------------------------------+------------------------------------------------------+--------+\n| ID                                   | Name                                                 | Status |\n+--------------------------------------+------------------------------------------------------+--------+\n| 02609270-b2d7-4ee2-9e7b-450163362b57 | Amphora (x64-haproxy-ubuntu-focal)                   | active |\n| 1d6ab32b-a305-403b-9d44-5981890beccf | CentOS 7 (el7-x86_64)                                | active |\n| f2d17cda-b84d-4600-8473-111e180a5452 | CentOS 8 (el8-x86_64)                                | active |\n| d5a101ff-0870-435f-bf76-c3309e542a53 | CentOS 8 Stream (el8-x86_64)                         | active |\n| 8c8e0a35-61dd-4540-b9fd-ca36ca0ef181 | Debian 10 (buster-amd64)                             | active |\n| 00468d54-84fd-4e03-9935-aabb6b0fa60f | Debian 9 (stretch-amd65)                             | active |\n| be44af12-aa34-4b25-b4af-60a66599f442 | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | active |\n| 9a5937ff-9474-4dbe-84b4-ba452024446c | Ubuntu 18.04 (bionic-amd64)                          | active |\n| c005b6f3-9d34-4f91-94b6-1ff50c174750 | Ubuntu 20.04 (focal-amd64)                           | active |\n+--------------------------------------+------------------------------------------------------+--------+\n")),(0,i.kt)("p",null,"To get more information about an image, use ",(0,i.kt)("inlineCode",{parentName:"p"},"openstack image show ID"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack image show ID\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ID")," is the ",(0,i.kt)("strong",{parentName:"p"},"Name")," or the ",(0,i.kt)("strong",{parentName:"p"},"ID")," column in the above output."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"show-image-details"},(0,i.kt)("strong",{parentName:"h3"},"Show image details")),(0,i.kt)("p",null,"Example showing the details of an image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openstack image show fa8eb9bd-9ccc-4d3f-b87b-6edb5450a57a --fit-width\n+------------------+--------------------------------------------------------------------------------------------------+\n| Field            | Value                                                                                            |\n+------------------+--------------------------------------------------------------------------------------------------+\n| checksum         | 1d3062cd89af34e419f7100277f38b2b                                                                 |\n| container_format | bare                                                                                             |\n| created_at       | 2020-09-09T20:50:25Z                                                                             |\n| disk_format      | qcow2                                                                                            |\n| file             | /v2/images/um_fa8eb9bd-9ccc-4d3f-b87b-6edb5450a57a/file                                             |\n| id               | fa8eb9bd-9ccc-4d3f-b87b-6edb5450a57a                                                             |\n| min_disk         | 0                                                                                                |\n| min_ram          | 0                                                                                                |\n| name             | cirros                                                                                           |\n| owner            | 5ad1f9e795604f4390d274d7388c4b9f                                                                 |\n")),(0,i.kt)("h3",{id:"upload-an-image"},(0,i.kt)("strong",{parentName:"h3"},"Upload an image")),(0,i.kt)("p",null,"To upload an image into OpenStack, the image needs to first exist on\nyour machine, and then you can use OpenStackClient to upload it."),(0,i.kt)("p",null,"This section will walk you through uploading the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cirros-dev/cirros"},"CirrOS")," image."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1")," -- Download the CirrOS image"),(0,i.kt)("p",null,"To start, first download the CirrOS image to your machine."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://download.cirros-cloud.net/0.5.2/cirros-0.5.2-x86_64-disk.img"},"latest version of\nCirrOS"),"\nis available from their download page. Ensure the latest version of the\nCirrOS image is downloaded. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," to download the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://download.cirros-cloud.net/0.5.2/cirros-0.5.2-x86_64-disk.img\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2")," -- Upload the image into OpenStack"),(0,i.kt)("p",null,"Use this command to upload the image, replacing variables appropriately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"openstack image create IMAGE_NAME --container-format bare --disk-format \\\nqcow2 --file PATH_TO_CIRROS_IMAGE\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Upload the CirrOS image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openstack image create cirros --container-format bare --disk-format\nqcow2 --file ~/Downloads/cirros-0.5.2-x86_64-disk.img\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("strong",{parentName:"p"},"PATH","_","TO","_","CIRROS","_","IMAGE")," should be the path to the image\nfile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm successful upload"),(0,i.kt)("p",null,"To confirm the image uploaded into the cloud, use ",(0,i.kt)("inlineCode",{parentName:"p"},"openstack image\nlist"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"List the newly uploaded image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openstack image list\n+--------------------------------------+--------------------------------+--------+\n| ID                                   | Name                           | Status |\n+--------------------------------------+--------------------------------+--------+\n| fa8eb9bd-9ccc-4d3f-b87b-6edb5450a57a | cirros                         | active |\n+--------------------------------------+--------------------------------+--------+\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"next-steps"},(0,i.kt)("strong",{parentName:"h2"},"Next Steps")),(0,i.kt)("p",null,"With this guide complete, move on to the next guide, which explains ",(0,i.kt)("a",{parentName:"p",href:"create_an_instance_cli"},"how\nto create an Instance")," using\nthe command line."))}m.isMDXComponent=!0}}]);