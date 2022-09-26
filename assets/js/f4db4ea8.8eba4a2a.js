"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6740],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:3},s="Spin up an Instance with Ephemeral Storage",p={unversionedId:"tutorials/ephemeral-storage",id:"tutorials/ephemeral-storage",title:"Spin up an Instance with Ephemeral Storage",description:"Introduction",source:"@site/docs/tutorials/ephemeral-storage.md",sourceDirName:"tutorials",slug:"/tutorials/ephemeral-storage",permalink:"/docs/manuals/tutorials/ephemeral-storage",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/ephemeral-storage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Create a Load Balancer",permalink:"/docs/manuals/tutorials/lb-with-octavia"},next:{title:"Getting Started with Ceilometer and Gnocchi",permalink:"/docs/manuals/tutorials/getting-started-with-ceilometer-and-gnocchi"}},d=[{value:"Introduction",id:"introduction",children:[{value:"What is Ephemeral Storage?",id:"what-is-ephemeral-storage",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Background",id:"background",children:[],level:3}],level:2},{value:"Procedure",id:"procedure",children:[{value:"Instance Boot Considerations",id:"instance-boot-considerations",children:[],level:3},{value:"How can Ephemeral Storage be Used?",id:"how-can-ephemeral-storage-be-used",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],level:2},{value:"Performance",id:"performance",children:[{value:"Convert to ext4",id:"convert-to-ext4",children:[],level:3},{value:"Performance Tests",id:"performance-tests",children:[],level:3},{value:"Results",id:"results",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spin-up-an-instance-with-ephemeral-storage"},"Spin up an Instance with Ephemeral Storage"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"It is now possible to make use of ephemeral storage with the Private\nCloud Core platform. This storage type is available through additional\n",(0,l.kt)("inlineCode",{parentName:"p"},"Compute")," nodes."),(0,l.kt)("p",null,"In this guide, you will learn how to create an instance that makes use\nof ephemeral storage."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"what-is-ephemeral-storage"},"What is Ephemeral Storage?"),(0,l.kt)("p",null,"Ephemeral storage is fast, temporary disk space that does not persist\nafter the instance is terminated. This type of storage is well-suited\nfor CI/CD job runners, distributed worker nodes or database systems, or\nanything that requires fast storage or has inherent data redundancy."),(0,l.kt)("p",null,"For an overview of how data can be stored, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.openstack.org/arch-design/design-storage/design-storage-concepts.html"},"Storage\nConcepts"),"\nin the OpenStack documentation."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To use ephemeral storage, you must have an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"Compute")," node\nadded to the Private Cloud Core."),(0,l.kt)("p",null,"To add this node type, reach out to your account manager who can add\nthis for you. We do not currently support adding this node through\nOpenMetal Central."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note","!")," -- The ",(0,l.kt)("inlineCode",{parentName:"p"},"Storage and Compute")," nodes do not make use of\nephemeral storage","!"," These nodes, when added, join the existing Ceph\ncluster."),(0,l.kt)("h3",{id:"background"},"Background"),(0,l.kt)("p",null,"With our latest update, a new class of flavors have been added, that\nonce set, ensure your instance is spun up on an ephemeral storage\nCompute node. We use LVM to manage the local NVMe drive, providing\nephemeral storage."),(0,l.kt)("p",null,"Flavors that set ephemeral storage:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cc.micro"),(0,l.kt)("li",{parentName:"ul"},"cc.small"),(0,l.kt)("li",{parentName:"ul"},"cc.medium"),(0,l.kt)("li",{parentName:"ul"},"cc.large"),(0,l.kt)("li",{parentName:"ul"},"cc.xlarge"),(0,l.kt)("li",{parentName:"ul"},"cc.2xlarge")),(0,l.kt)("p",null,"To see the new flavors, as an administrative user, navigate in Horizon\nto ",(0,l.kt)("strong",{parentName:"p"},"Admin -",">"," Compute -",">"," Flavors"),". The flavors prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"cc")," are\nwhat allow for ephemeral storage."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(2638).Z})),(0,l.kt)("h2",{id:"procedure"},"Procedure"),(0,l.kt)("p",null,'To have an instance use ephemeral storage, during instance creation, set\nthe flavor to any prefixed with "cc". ',(0,l.kt)("inlineCode",{parentName:"p"},"cc.small")," is an example flavor\nthat allows an instance's storage to be ephemeral."),(0,l.kt)("p",null,"The following demonstrates setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"cc.small")," flavor, providing 25GB\nof ephemeral disk space."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(9963).Z})),(0,l.kt)("p",null,"Listed under the ",(0,l.kt)("strong",{parentName:"p"},"Ephemeral Disk")," column is the amount of ephemeral\nstorage this flavor sets."),(0,l.kt)("h3",{id:"instance-boot-considerations"},"Instance Boot Considerations"),(0,l.kt)("p",null,"When booting an instance with the ephemeral flavors, there are several\nboot source options available."),(0,l.kt)("p",null,"Of those options, these are important to consider:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Boot Sources"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Image"),(0,l.kt)("li",{parentName:"ul"},"Volume"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Boot from Image"),": When booting an instance from an image, the image\nis copied from Glance into the Compute node's local LVM volume and so\nthe operating system is running on ephemeral storage.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Boot from Volume"),": An instance booted from a volume means the\noperating system is loaded from Ceph."))),(0,l.kt)("h3",{id:"how-can-ephemeral-storage-be-used"},"How can Ephemeral Storage be Used?"),(0,l.kt)("p",null,"When an instance is spun up, its ephemeral storage can be accessed using\nthe path ",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt"),"."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"Instance ",(0,l.kt)("inlineCode",{parentName:"p"},"ephemeral-1")," was spun up using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cc.small")," flavor."),(0,l.kt)("p",null,"Using SSH and the ",(0,l.kt)("inlineCode",{parentName:"p"},"df")," command, the varying mount points can be seen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@ephemeral-1 ~]# df -h\nFilesystem      Size  Used Avail Use% Mounted on\ndevtmpfs        877M     0  877M   0% /dev\ntmpfs           909M     0  909M   0% /dev/shm\ntmpfs           909M   17M  892M   2% /run\ntmpfs           909M     0  909M   0% /sys/fs/cgroup\n/dev/vda1        25G  2.5G   23G  10% /\n/dev/vdb         25G  1.1G   24G   5% /mnt\ntmpfs           182M     0  182M   0% /run/user/1000\n")),(0,l.kt)("p",null,"In this list, ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/vdb")," is the block device mapped directly to the NVMe\ndrive through the path ",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note","!")," -- Some operating systems format the ephemeral block device\nwith the ",(0,l.kt)("inlineCode",{parentName:"p"},"VFAT")," file system. You may consider reformatting the device to\nanother file system, like ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4"),"."),(0,l.kt)("p",null,"The following is a CentOS 8 instance showing the file system types where\n",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/vdb")," has file format ",(0,l.kt)("inlineCode",{parentName:"p"},"VFAT"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[centos@ephemeral-vfat ~]$ df -hT\nFilesystem     Type      Size  Used Avail Use% Mounted on\ndevtmpfs       devtmpfs  1.8G     0  1.8G   0% /dev\ntmpfs          tmpfs     1.9G     0  1.9G   0% /dev/shm\ntmpfs          tmpfs     1.9G   17M  1.9G   1% /run\ntmpfs          tmpfs     1.9G     0  1.9G   0% /sys/fs/cgroup\n/dev/vda1      xfs        50G  1.7G   49G   4% /\n/dev/vdb       vfat       50G   32K   50G   1% /mnt\ntmpfs          tmpfs     374M     0  374M   0% /run/user/1000\n")),(0,l.kt)("h2",{id:"performance"},"Performance"),(0,l.kt)("p",null,"This section goes into detail about the performance differences between\nan LVM ephemeral device and one loaded from Ceph."),(0,l.kt)("p",null,"An instance called ",(0,l.kt)("strong",{parentName:"p"},"ephemeral")," running CentOS 8 has been created. This\ninstance is using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cc.medium")," flavor, providing 50GB of ephemeral\nstorage. The operating system is booted from a Ceph volume."),(0,l.kt)("p",null,"The following is a test of the read and write speeds comparing the Ceph\nvolume to the ephemeral drive. Random and sequential read and write\ntests are performed. In addition, the ephemeral device is formatted to\next4."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"convert-to-ext4"},"Convert to ext4"),(0,l.kt)("p",null,"Using SSH and the command ",(0,l.kt)("inlineCode",{parentName:"p"},"df -hT"),", the file systems can be seen:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@ephemeral ~]# df -hT\nFilesystem     Type      Size  Used Avail Use% Mounted on\ndevtmpfs       devtmpfs  1.8G     0  1.8G   0% /dev\ntmpfs          tmpfs     1.9G     0  1.9G   0% /dev/shm\ntmpfs          tmpfs     1.9G  8.5M  1.9G   1% /run\ntmpfs          tmpfs     1.9G     0  1.9G   0% /sys/fs/cgroup\n/dev/vda1      xfs        50G  2.2G   48G   5% /\n/dev/vdb       vfat       50G   32K   50G   1% /mnt\ntmpfs          tmpfs     374M     0  374M   0% /run/user/1000\n")),(0,l.kt)("p",null,"The ephemeral drive in this output is ",(0,l.kt)("inlineCode",{parentName:"p"},"/dev/vdb")," and is mounted to\n",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt"),". The file system is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"VFAT")," and will be changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4"),"."),(0,l.kt)("p",null,"This example uses ",(0,l.kt)("inlineCode",{parentName:"p"},"umount /mnt && mkfs.ext4 /dev/vdb")," to accomplish\nformatting the drive to ext4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@ephemeral ~]# umount /mnt && mkfs.ext4 /dev/vdb\nmke2fs 1.45.6 (20-Mar-2020)\n/dev/vdb contains a vfat file system\nProceed anyway? (y,N) y\nCreating filesystem with 13107200 4k blocks and 3276800 inodes\nFilesystem UUID: 637150f9-a48b-4fd0-9fcc-62fb23d800b5\nSuperblock backups stored on blocks:\n        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,\n        4096000, 7962624, 11239424\n\nAllocating group tables: done\nWriting inode tables: done\nCreating journal (65536 blocks): done\nWriting superblocks and filesystem accounting information: done\n")),(0,l.kt)("p",null,"Once the drive is reformatted, mount it to ",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt")," again and confirm the\nfile system:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@ephemeral ~]# mount -a\n[root@ephemeral ~]# df -hT | grep vdb\n/dev/vdb       ext4       49G   53M   47G   1% /mnt\n")),(0,l.kt)("h3",{id:"performance-tests"},"Performance Tests"),(0,l.kt)("p",null,"Now that the ephemeral drive's file system is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"ext4"),", the\nperformance of disk reads and writes will be compared to the root drive\n( ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," )."),(0,l.kt)("p",null,"The application ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/axboe/fio"},"fio")," is used to test disk\nperformance."),(0,l.kt)("p",null,"The tests performed are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Random disk reads and writes"),(0,l.kt)("li",{parentName:"ul"},"Sequential disk reads and writes")),(0,l.kt)("h3",{id:"results"},"Results"),(0,l.kt)("p",null,"Above each table are the parameters passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"fio"),"."),(0,l.kt)("p",null,"These tests were performed within a ",(0,l.kt)("strong",{parentName:"p"},"Private Cloud Core - Small")," using\nan additional ",(0,l.kt)("strong",{parentName:"p"},"Compute - Large")," node."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rw=randread bs=4k size=2g numjobs=1 iodepth=2 runtime=60 end_fsync=1 ioengine=posixaio")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Random Reads"),(0,l.kt)("th",{parentName:"tr",align:null},"Bandwidth (MiB/s)"),(0,l.kt)("th",{parentName:"tr",align:null},"IOPS (average)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LVM Ephemeral"),(0,l.kt)("td",{parentName:"tr",align:null},"34.4"),(0,l.kt)("td",{parentName:"tr",align:null},"8819")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ceph"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"2125")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rw=randwrite bs=4k size=2g numjobs=1 iodepth=2 runtime=60 end_fsync=1 ioengine=posixaio")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Random Writes"),(0,l.kt)("th",{parentName:"tr",align:null},"Bandwidth (MiB/s)"),(0,l.kt)("th",{parentName:"tr",align:null},"IOPS (average)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LVM Ephemeral"),(0,l.kt)("td",{parentName:"tr",align:null},"285"),(0,l.kt)("td",{parentName:"tr",align:null},"72998")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ceph"),(0,l.kt)("td",{parentName:"tr",align:null},"94.1"),(0,l.kt)("td",{parentName:"tr",align:null},"39305")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rw=read bs=4k size=2g numjobs=1 iodepth=2 runtime=60 end_fsync=1 ioengine=posixaio")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequential Reads"),(0,l.kt)("th",{parentName:"tr",align:null},"Bandwidth (MiB/s)"),(0,l.kt)("th",{parentName:"tr",align:null},"IOPS (average)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LVM Ephemeral"),(0,l.kt)("td",{parentName:"tr",align:null},"302"),(0,l.kt)("td",{parentName:"tr",align:null},"83314")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ceph"),(0,l.kt)("td",{parentName:"tr",align:null},"197"),(0,l.kt)("td",{parentName:"tr",align:null},"50210")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rw=write bs=4k size=2g numjobs=1 iodepth=2 runtime=60 end_fsync=1 ioengine=posixaio")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sequential Writes"),(0,l.kt)("th",{parentName:"tr",align:null},"Bandwidth (MiB/s)"),(0,l.kt)("th",{parentName:"tr",align:null},"IOPS (average)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LVM Ephemeral"),(0,l.kt)("td",{parentName:"tr",align:null},"294"),(0,l.kt)("td",{parentName:"tr",align:null},"76620")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ceph"),(0,l.kt)("td",{parentName:"tr",align:null},"104"),(0,l.kt)("td",{parentName:"tr",align:null},"40244")))))}u.isMDXComponent=!0},9963:function(e,t,n){t.Z=n.p+"assets/images/umx_ephemeral_example-5c20ee05440427abeb3a448b5850667e.png"},2638:function(e,t,n){t.Z=n.p+"assets/images/umx_ephemeral_flavors-7d2af8a1f8b7269e8715d4f6a1f953e0.png"}}]);