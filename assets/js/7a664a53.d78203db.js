"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4687],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=t.createContext({}),s=function(e){var a=t.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(r.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(r,".").concat(m)]||d[m]||p[m]||l;return n?t.createElement(k,c(c({ref:a},u),{},{components:n})):t.createElement(k,c({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var r in a)hasOwnProperty.call(a,r)&&(i[r]=a[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4421:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=n(7462),o=n(3366),l=(n(7294),n(3905)),c=["components"],i={sidebar_position:10},r="Managing Backups in OpenStack",s={unversionedId:"users-manual/backups_cli",id:"users-manual/backups_cli",title:"Managing Backups in OpenStack",description:"Having a solid backup strategy is important in the event where data is",source:"@site/docs/users-manual/backups_cli.md",sourceDirName:"users-manual",slug:"/users-manual/backups_cli",permalink:"/manuals/users-manual/backups_cli",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/users-manual/backups_cli.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Create an Instance",permalink:"/manuals/users-manual/create_an_instance_cli"},next:{title:"OpenStack CLI for Common Operational Tasks",permalink:"/manuals/users-manual/use_openstack_cli"}},u=[{value:"Testing Considerations",id:"testing-considerations",children:[],level:2},{value:"How to Create an Instance Backup",id:"how-to-create-an-instance-backup",children:[{value:"Volume-backed",id:"volume-backed",children:[{value:"Create Backup",id:"create-backup",children:[],level:4},{value:"Confirm Backup Completion",id:"confirm-backup-completion",children:[],level:4}],level:3},{value:"Image-backed",id:"image-backed",children:[{value:"Create Instance Backup",id:"create-instance-backup",children:[],level:4},{value:"Confirm Instance Backup Completion",id:"confirm-instance-backup-completion",children:[],level:4}],level:3}],level:2},{value:"How to Recover an Instance Backup",id:"how-to-recover-an-instance-backup",children:[{value:"Volume-backed Instance",id:"volume-backed-instance",children:[{value:"Create new volume",id:"create-new-volume",children:[],level:4},{value:"Restore volume backup",id:"restore-volume-backup",children:[],level:4},{value:"Confirm volume",id:"confirm-volume",children:[],level:4},{value:"Image-backed Instance",id:"image-backed-instance",children:[],level:4}],level:3}],level:2},{value:"Volume Backups",id:"volume-backups",children:[{value:"How to Create a Volume Backup",id:"how-to-create-a-volume-backup",children:[],level:3},{value:"How to Recover a Volume Backup",id:"how-to-recover-a-volume-backup",children:[],level:3}],level:2}],p={toc:u};function d(e){var a=e.components,n=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"managing-backups-in-openstack"},"Managing Backups in OpenStack"),(0,l.kt)("p",null,"Having a solid backup strategy is important in the event where data is\nlost and you need to recover it. In this guide, you will learn how to\nmake backups of instance data, volumes, and how to store backups outside\nof the OpenStack cloud."),(0,l.kt)("h2",{id:"testing-considerations"},"Testing Considerations"),(0,l.kt)("p",null,"Backups should not only be created, but should be confirmed they contain\nall data as well as be restored and tested as part of a polished backup\nstrategy. Consider a disaster recovery scenario where you have known\nbackups, however they were never tested, and are not usable due to some\ncircumstance."),(0,l.kt)("h2",{id:"how-to-create-an-instance-backup"},"How to Create an Instance Backup"),(0,l.kt)("p",null,"This section demonstrates how to create an instance backup using\nOpenStackClient."),(0,l.kt)("p",null,"To begin, ensure you have prepared your OpenStackClient environment\nbefore issuing commands."),(0,l.kt)("p",null,"Depending on how the instance was spawned will determine how to create a\nbackup. If the instance is volume-backed, you will have to back up the\nvolume. If the instance is image-backed, you can back up the instance\nitself, which creates an image backup. Each method is described below."),(0,l.kt)("h3",{id:"volume-backed"},"Volume-backed"),(0,l.kt)("p",null,"To create a backup of a volume-backed instance using OpenStackClient,\nyou will need to create a backup of the volume, by first obtaining the\nvolume's UUID, then use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume backup create VOLUME_UUID"),"."),(0,l.kt)("p",null,"In addition, if the volume is in use by an instance, the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," flag\nis required to create the volume backup."),(0,l.kt)("h4",{id:"create-backup"},"Create Backup"),(0,l.kt)("p",null,"Create a backup of a volume-backed instance by first listing volumes\nthen issuing the command to back up that volume:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume list\n+--------------------------------------+-------------------+-----------+------+--------------------------------------------+\n| ID                                   | Name              | Status    | Size | Attached to                                |\n+--------------------------------------+-------------------+-----------+------+--------------------------------------------+\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                   | in-use    |   17 | Attached to instance-2-volume on /dev/vda  |\n| 9a1dfde3-9113-400c-b06e-80d67c636ef9 |                   | in-use    |   25 | Attached to wordpress-1 on /dev/vda\n")),(0,l.kt)("p",null,"This example demonstrates creating a backup of ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-2-volume")," by\nbacking up its associated volume, referenced by\n",(0,l.kt)("inlineCode",{parentName:"p"},"9887730c-e804-4353-af2d-a92b750ed6b5"),"."),(0,l.kt)("p",null,"Create backup of ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-2-volume"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume backup create 9887730c-e804-4353-af2d-a92b750ed6b5 \\\n--force\n+-------+--------------------------------------+\n| Field | Value                                |\n+-------+--------------------------------------+\n| id    | bc8d29c4-be51-4675-b290-bd0bdc8c9be7 |\n| name  | None                                 |\n+-------+--------------------------------------+\n")),(0,l.kt)("p",null,"Take note of the ",(0,l.kt)("strong",{parentName:"p"},"id")," of the backup as this will be used next to\ndetermine the backup status."),(0,l.kt)("h4",{id:"confirm-backup-completion"},"Confirm Backup Completion"),(0,l.kt)("p",null,"The backup will take some time to complete. After a period of time,\ncheck the status by using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume backup show\nVOLUME_BACKUP_UUID"),", replacing ",(0,l.kt)("strong",{parentName:"p"},"VOLUME","_","BACKUP","_","UUID")," with the actual\nUUID of the volume backup:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume backup show bc8d29c4-be51-4675-b290-bd0bdc8c9be7\n+-----------------------+--------------------------------------+\n| Field                 | Value                                |\n+-----------------------+--------------------------------------+\n| availability_zone     | None                                 |\n| container             | backups                              |\n| created_at            | 2021-05-24T16:04:49.000000           |\n| data_timestamp        | 2021-05-24T16:04:49.000000           |\n| description           | None                                 |\n| fail_reason           | None                                 |\n| has_dependent_backups | False                                |\n| id                    | bc8d29c4-be51-4675-b290-bd0bdc8c9be7 |\n| is_incremental        | False                                |\n| name                  | None                                 |\n| object_count          | 0                                    |\n| size                  | 17                                   |\n| snapshot_id           | None                                 |\n| status                | available                            |\n| updated_at            | 2021-05-24T16:05:35.000000           |\n| volume_id             | 9887730c-e804-4353-af2d-a92b750ed6b5 |\n+-----------------------+--------------------------------------+\n")),(0,l.kt)("h3",{id:"image-backed"},"Image-backed"),(0,l.kt)("p",null,"To create a backup of an image-backed instance, use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack server\nbackup create INSTANCE_UUID"),"."),(0,l.kt)("h4",{id:"create-instance-backup"},"Create Instance Backup"),(0,l.kt)("p",null,"First list instances to obtain the UUID, or you can specify the instance\nname to the backup command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack server list\n+--------------------------------------+-------------------+--------+-----------------------------------------+------------------------------+----------+\n| ID                                   | Name              | Status | Networks                                | Image                        | Flavor   |\n+--------------------------------------+-------------------+--------+-----------------------------------------+------------------------------+----------+\n| 226ebf42-f58d-4149-8393-dd4f241c33aa | image-backed      | ACTIVE | network-1=192.168.0.199                 | CentOS 8 Stream (el8-x86_64) | c1.micro |\n")),(0,l.kt)("p",null,"Next, create a backup of the instance called ",(0,l.kt)("strong",{parentName:"p"},"image-backed")," using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack server backup create image-backed\n+------------------+------------------------------------------------------------------------+\n| Field            | Value                                                                  |\n+------------------+------------------------------------------------------------------------+\n| container_format | bare                                                                   |\n| created_at       | 2021-05-24T16:45:17Z                                                   |\n| disk_format      | qcow2                                                                  |\n| file             | /v2/images/um_f3f2bf61-c699-43ce-9db5-4bb3343cbfad/file                   |\n| id               | f3f2bf61-c699-43ce-9db5-4bb3343cbfad                                   |\n| min_disk         | 25                                                                     |\n| min_ram          | 0                                                                      |\n| name             | image-backed                                                           |\n")),(0,l.kt)("p",null,"Note the ",(0,l.kt)("strong",{parentName:"p"},"id")," column from the output. This is the UUID of the backup\nand will be used to verify backup completion."),(0,l.kt)("h4",{id:"confirm-instance-backup-completion"},"Confirm Instance Backup Completion"),(0,l.kt)("p",null,"When a backup of an image-backed instance is created, it is created as\nan image."),(0,l.kt)("p",null,"To confirm the status of the backup, use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack image show UUID"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack image show f3f2bf61-c699-43ce-9db5-4bb3343cbfad --fit-width\n+------------------+------------------------------------------------------------------------+\n| Field            | Value                                                                  |\n+------------------+------------------------------------------------------------------------+\n| container_format | bare                                                                   |\n| created_at       | 2021-05-24T16:45:17Z                                                   |\n| disk_format      | raw                                                                    |\n| file             | /v2/images/um_f3f2bf61-c699-43ce-9db5-4bb3343cbfad/file                   |\n| id               | f3f2bf61-c699-43ce-9db5-4bb3343cbfad                                   |\n| min_disk         | 25                                                                     |\n| min_ram          | 0                                                                      |\n| name             | image-backed                                                           |\n| owner            | b93259ca0a5b4541b30e4e16ae1d699d                                       |\n| properties       | [truncated]                                                            |\n| protected        | False                                                                  |\n| schema           | /v2/schemas/image                                                      |\n| size             | 26843545600                                                            |\n| status           | active                                                                 |\n| tags             |                                                                        |\n| updated_at       | 2021-05-24T16:45:50Z                                                   |\n| visibility       | private                                                                |\n+------------------+------------------------------------------------------------------------+\n")),(0,l.kt)("p",null,"Look for the ",(0,l.kt)("strong",{parentName:"p"},"status")," column to indicate the status of the backup. If\nthe backup is complete, the status will show as ",(0,l.kt)("inlineCode",{parentName:"p"},"active"),"."),(0,l.kt)("h2",{id:"how-to-recover-an-instance-backup"},"How to Recover an Instance Backup"),(0,l.kt)("p",null,"This section explains how to recover an instance backup using\nOpenStackClient."),(0,l.kt)("p",null,"To recover an instance backup, the process involves creating a new\ninstance based on the image or volume backup."),(0,l.kt)("h3",{id:"volume-backed-instance"},"Volume-backed Instance"),(0,l.kt)("p",null,"This section demonstrates how to recover an instance using a volume\nbackup."),(0,l.kt)("p",null,"To restore an instance from a volume backup, the volume backup needs to\nfirst be restored into a new volume, then an instance can be booted\nusing that new volume."),(0,l.kt)("h4",{id:"create-new-volume"},"Create new volume"),(0,l.kt)("p",null,"First create a volume of appropriate size to restore the volume backup\ninto, using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume create --size SIZE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume create wordpress-1-backup-1 --size 25\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n+---------------------+--------------------------------------+\n| attachments         | []                                   |\n| availability_zone   | nova                                 |\n| bootable            | false                                |\n| consistencygroup_id | None                                 |\n| created_at          | 2021-05-24T17:57:29.000000           |\n| description         | None                                 |\n| encrypted           | False                                |\n| id                  | 1810a215-67e4-48b5-ba51-feef9d263660 |\n| multiattach         | False                                |\n| name                | wordpress-1-backup-1                 |\n")),(0,l.kt)("p",null,"Take note of the ",(0,l.kt)("strong",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"1810a215-67e4-48b5-ba51-feef9d263660"),", as this\nwill be used in the next section to recover."),(0,l.kt)("h4",{id:"restore-volume-backup"},"Restore volume backup"),(0,l.kt)("p",null,"The volume backup can be restored now, but first you will need the UUID\nof the backup created previously. This can be listed by using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack\nvolume backup list"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," $ openstack volume backup list\n +--------------------------------------+--------------------------+-------------+-----------+------+\n | ID                                   | Name                     | Description | Status    | Size |\n +--------------------------------------+--------------------------+-------------+-----------+------+\n | f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n | bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n | 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n +--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,l.kt)("p",null,"This example will recover the volume backup under UUID\n",(0,l.kt)("inlineCode",{parentName:"p"},"f8440441-92b8-4522-9dfe-18868e089d6e"),"."),(0,l.kt)("p",null,"Restore the volume backup into the new volume using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume\nbackup restore BACKUP_UUID VOLUME_UUID"),", replacing ",(0,l.kt)("strong",{parentName:"p"},"BACKUP","_","UUID")," and\n",(0,l.kt)("strong",{parentName:"p"},"VOLUME","_","UUID")," with the UUIDs of the backup and the new volume:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume backup restore f8440441-92b8-4522-9dfe-18868e089d6e 1810a215-67e4-48b5-ba51-feef9d263660\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| backup_id   | f8440441-92b8-4522-9dfe-18868e089d6e |\n| volume_id   | 1810a215-67e4-48b5-ba51-feef9d263660 |\n| volume_name | wordpress-1-backup-1                 |\n+-------------+--------------------------------------+\n")),(0,l.kt)("h4",{id:"confirm-volume"},"Confirm volume"),(0,l.kt)("p",null,"Confirm the volume backup restored into the new volume by listing\nvolumes and note the ",(0,l.kt)("strong",{parentName:"p"},"Status")," column:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ openstack volume list\n+--------------------------------------+----------------------+-----------+------+--------------------------------------------+\n| ID                                   | Name                 | Status    | Size | Attached to                                |\n+--------------------------------------+----------------------+-----------+------+--------------------------------------------+\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1 | available |   25 |                                            |\n")),(0,l.kt)("p",null,"If the backup is ready to use, the ",(0,l.kt)("strong",{parentName:"p"},"Status")," column will show as\n",(0,l.kt)("inlineCode",{parentName:"p"},"available"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 4")," -- Create new instance"),(0,l.kt)("p",null,"A new instance can now be created using this volume. For help with how\nto create an instance see the ",(0,l.kt)("a",{parentName:"p",href:"create_an_instance_cli"},"Create an\nInstance")," guide."),(0,l.kt)("p",null,"The following builds an instance booted from the previously restored\nvolume backup:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack server create --volume 1810a215-67e4-48b5-ba51-feef9d263660 \\\\\n    --flavor c1.micro \\\\\n    --network 29aa8aec-36ec-416d-9828-4a3b6bb10f4b \\\\\n    --key-name key-1 \\\\\n    --security-group 44668612-1a18-4289-b5fb-f24de8e20c09 \\\\\n    wordpress-2-volume-restored\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 5")," -- Confirm instance restoration"),(0,l.kt)("p",null,"Show the details of the instance to confirm it is active:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack server show wordpress-2-volume-restored | grep status\n| status                      | ACTIVE                                                   |\n")),(0,l.kt)("h4",{id:"image-backed-instance"},"Image-backed Instance"),(0,l.kt)("p",null,"This section explains how to recover an instance using an image backup."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1")," -- List images"),(0,l.kt)("p",null,"First, acquire the UUID of the image you wish to restore using\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack image list"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack image list\n+--------------------------------------+------------------------------------------------------+--------+\n| ID                                   | Name                                                 | Status |\n+--------------------------------------+------------------------------------------------------+--------+\n| d5a101ff-0870-435f-bf76-c3309e542a53 | CentOS 8 Stream (el8-x86_64)                         | active |\n| 8c8e0a35-61dd-4540-b9fd-ca36ca0ef181 | Debian 10 (buster-amd64)                             | active |\n| be44af12-aa34-4b25-b4af-60a66599f442 | Fedora CoreOS (fedora-coreos-33.20210412.3.0-stable) | active |\n| c005b6f3-9d34-4f91-94b6-1ff50c174750 | Ubuntu 20.04 (focal-amd64)                           | active |\n| f3f2bf61-c699-43ce-9db5-4bb3343cbfad | image-backed                                         | active |\n| d589995e-7425-42fd-8a6a-3bf98783e0cc | wordpress-1-snap                                     | active |\n| ec4c8f61-6f44-4360-99b3-47b3022d177d | wordpress-2-snap                                     | active |\n+--------------------------------------+------------------------------------------------------+--------+\n")),(0,l.kt)("p",null,"This example will use the image called ",(0,l.kt)("strong",{parentName:"p"},"image-backed"),", which is\nassociated with UUID ",(0,l.kt)("inlineCode",{parentName:"p"},"f3f2bf61-c699-43ce-9db5-4bb3343cbfad"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2")," -- Spawn instance"),(0,l.kt)("p",null,"With the image UUID, spawn a new instance called\n",(0,l.kt)("strong",{parentName:"p"},"instance-3-image-backed"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack server create \\\n--image f3f2bf61-c699-43ce-9db5-4bb3343cbfad \\\n--flavor c1.micro \\\n--network 29aa8aec-36ec-416d-9828-4a3b6bb10f4b \\\n--key-name key-1 \\\n--security-group 44668612-1a18-4289-b5fb-f24de8e20c09 \\\ninstance-3-image-backed\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm instance creation"),(0,l.kt)("p",null,"Confirm the instance created successfully by listing instances or\nshowing the specific details of the instance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"List Instances"),":"),(0,l.kt)("p",null,"List instances using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack server list"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack server list\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n| ID                                   | Name                        | Status | Networks                | Image                        | Flavor   |\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n| 98174d7f-53c1-4861-84a5-2517b90ba92e | instance-3-image-backed     | ACTIVE | network-1=192.168.0.176 | image-backed                 | c1.micro |\n| ff205cad-965c-4ae1-9e47-65fa4d1df82b | wordpress-2-volume-restored | ACTIVE | network-1=192.168.0.226 | N/A (booted from volume)     | c1.micro |\n| 226ebf42-f58d-4149-8393-dd4f241c33aa | image-backed                | ACTIVE | network-1=192.168.0.199 | CentOS 8 Stream (el8-x86_64) | c1.micro |\n| da6591d9-7cbd-47aa-9a46-ff3cb6d52c24 | instance-2-volume           | ACTIVE | network-1=192.168.0.178 | N/A (booted from volume)     | c1.micro |\n| 72e1e2db-0276-4ddd-85b4-452aa7c449c0 | instance-1                  | ACTIVE | network-1=192.168.0.50  | CentOS 8 Stream (el8-x86_64) | c1.micro |\n+--------------------------------------+-----------------------------+--------+-------------------------+------------------------------+----------+\n")),(0,l.kt)("p",null,"The first item in the above list is the instance previously created. The\n",(0,l.kt)("strong",{parentName:"p"},"Status")," column shows ",(0,l.kt)("inlineCode",{parentName:"p"},"ACTIVE")," indicating the instance is ready to\nuse."),(0,l.kt)("h2",{id:"volume-backups"},"Volume Backups"),(0,l.kt)("h3",{id:"how-to-create-a-volume-backup"},"How to Create a Volume Backup"),(0,l.kt)("p",null,"In addition to creating instance snapshots, you can also create backups\nof volumes using OpenStackClient. This is important when a persistent\nvolume is used and you want to create backup copies of it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1")," -- List existing volumes"),(0,l.kt)("p",null,"To create a volume backup, you first need to know the name or UUID of\nthe volume being backed up."),(0,l.kt)("p",null,"Determine this by listing volumes, using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume list"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume list\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n| ID                                   | Name                 | Status    | Size | Attached to                                          |\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1 | available |   25 |                                                      |\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                      | in-use    |   17 | Attached to instance-2-volume on /dev/vda            |\n| 2a8eb736-9e7b-4ede-9a4e-9a50fc571da2 |                      | in-use    |   25 | Attached to wordpress-2-volume-restored on /dev/vda  |\n| 664e09b7-e1f9-46e1-9504-794ff75e7295 |                      | available |   25 |                                                      |\n| 0860845e-ba18-4f1f-84ed-22600ad7bbca | wordpress-media-1    | available |    5 |                                                      |\n+--------------------------------------+----------------------+-----------+------+------------------------------------------------------+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2")," -- Create volume backup"),(0,l.kt)("p",null,"This example will demonstrate backing up the volume from the above\ncalled ",(0,l.kt)("inlineCode",{parentName:"p"},"wordpress-media-1"),"."),(0,l.kt)("p",null,"To create a volume backup of this volume, use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume backup\ncreate wordpress-media-1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume backup create wordpress-media-1\n+-------+--------------------------------------+\n| Field | Value                                |\n+-------+--------------------------------------+\n| id    | 3db892b4-809e-400b-9d85-1f3340de49a5 |\n| name  | None                                 |\n+-------+--------------------------------------+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3")," -- Confirm volume backup completion"),(0,l.kt)("p",null,"You can either list the volume backups and look at the ",(0,l.kt)("strong",{parentName:"p"},"Status")," column\nor show the details of the specific volume backup."),(0,l.kt)("p",null,"List volume backups using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume backup list"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume backup list\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| ID                                   | Name                     | Description | Status    | Size |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| 3db892b4-809e-400b-9d85-1f3340de49a5 | None                     | None        | available |    5 |\n| f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n| bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n| 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Status")," column indicates if the volume backup is ready to use or\nnot and should report ",(0,l.kt)("inlineCode",{parentName:"p"},"available")," when the backup is ready."),(0,l.kt)("h3",{id:"how-to-recover-a-volume-backup"},"How to Recover a Volume Backup"),(0,l.kt)("p",null,"This section explains the steps needed to recover a volume backup using\nOpenStackClient. The flow for recovering a volume backup is to find the\nvolume backup UUID, create an empty volume, then recover the backup into\nthe new volume."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1")," -- Find the volume backup"),(0,l.kt)("p",null,"First, list the available volume backups using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume backup\nlist"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume backup list\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| ID                                   | Name                     | Description | Status    | Size |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n| 3db892b4-809e-400b-9d85-1f3340de49a5 | None                     | None        | available |    5 |\n| f8440441-92b8-4522-9dfe-18868e089d6e | None                     | None        | available |   25 |\n| bc8d29c4-be51-4675-b290-bd0bdc8c9be7 | None                     | None        | available |   17 |\n| 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 | wordpress-media-1-backup |             | available |    5 |\n+--------------------------------------+--------------------------+-------------+-----------+------+\n")),(0,l.kt)("p",null,"This example will recover the volume backup called\n",(0,l.kt)("strong",{parentName:"p"},"wordpress-media-1-backup"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2")," -- Create new volume"),(0,l.kt)("p",null,"Next, create a new volume at least the size of the volume backup using\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume create --size SIZE VOLUME_NAME"),", where ",(0,l.kt)("strong",{parentName:"p"},"SIZE")," is in\ngigabytes and the ",(0,l.kt)("strong",{parentName:"p"},"VOLUME","_","NAME")," is the name of the volume:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume create --size 5 wordpress-media-1-backup-2\n+---------------------+--------------------------------------+\n| Field               | Value                                |\n+---------------------+--------------------------------------+\n| attachments         | []                                   |\n| availability_zone   | nova                                 |\n| bootable            | false                                |\n| consistencygroup_id | None                                 |\n| created_at          | 2021-05-24T22:04:02.000000           |\n| description         | None                                 |\n| encrypted           | False                                |\n| id                  | 05b1310b-35d0-497f-a150-3ca436b6a969 |\n")),(0,l.kt)("p",null,"The UUID of this volume is ",(0,l.kt)("inlineCode",{parentName:"p"},"05b1310b-35d0-497f-a150-3ca436b6a969")," and\nwill be used in the next section."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3")," -- Recover volume backup"),(0,l.kt)("p",null,"Restore the volume backup into the new volume using ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack volume\nbackup restore BACKUP_UUID VOLUME_UUID"),", replacing ",(0,l.kt)("strong",{parentName:"p"},"BACKUP","_","UUID")," and\n",(0,l.kt)("strong",{parentName:"p"},"VOLUME","_","UUID")," with the UUIDs of the backup and the new volume:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume backup restore wordpress-media-1-backup 05b1310b-35d0-497f-a150-3ca436b6a969\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| backup_id   | 1ae23283-e43f-4a67-97a1-0b7f7afaaff2 |\n| volume_id   | 05b1310b-35d0-497f-a150-3ca436b6a969 |\n| volume_name | wordpress-media-1-backup-2           |\n+-------------+--------------------------------------+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 4")," -- Confirm backup recovery"),(0,l.kt)("p",null,"Finally, confirm the backup restored by listing volumes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack volume list\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n| ID                                   | Name                       | Status    | Size | Attached to                                          |\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n| 05b1310b-35d0-497f-a150-3ca436b6a969 | wordpress-media-1-backup-2 | available |    5 |                                                      |\n| 1810a215-67e4-48b5-ba51-feef9d263660 | wordpress-1-backup-1       | available |   25 |                                                      |\n| 9887730c-e804-4353-af2d-a92b750ed6b5 |                            | in-use    |   17 | Attached to instance-2-volume on /dev/vda            |\n| 2a8eb736-9e7b-4ede-9a4e-9a50fc571da2 |                            | in-use    |   25 | Attached to wordpress-2-volume-restored on /dev/vda  |\n| 664e09b7-e1f9-46e1-9504-794ff75e7295 |                            | available |   25 |                                                      |\n| 0860845e-ba18-4f1f-84ed-22600ad7bbca | wordpress-media-1          | available |    5 |                                                      |\n+--------------------------------------+----------------------------+-----------+------+------------------------------------------------------+\n")),(0,l.kt)("p",null,"The first item in the above list is the restored backup,\n",(0,l.kt)("strong",{parentName:"p"},"wordpress-media-1-backup-2"),". Note the ",(0,l.kt)("strong",{parentName:"p"},"Status")," column reports\n",(0,l.kt)("inlineCode",{parentName:"p"},"available")," indicating the backup restoration succeeded."))}d.isMDXComponent=!0}}]);