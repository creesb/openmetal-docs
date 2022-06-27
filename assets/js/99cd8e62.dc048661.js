"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[1084],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={},p="How to Install and Use OpenStack's CLI",s={unversionedId:"operators-manual/day-1/command-line/openstackclient",id:"operators-manual/day-1/command-line/openstackclient",title:"How to Install and Use OpenStack's CLI",description:"Introduction",source:"@site/docs/operators-manual/day-1/command-line/openstackclient.md",sourceDirName:"operators-manual/day-1/command-line",slug:"/operators-manual/day-1/command-line/openstackclient",permalink:"/openmetal-docs/docs/operators-manual/day-1/command-line/openstackclient",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-1/command-line/openstackclient.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create SSH Key Pair for an OpenStack Control Plane Node",permalink:"/openmetal-docs/docs/operators-manual/day-1/command-line/create-ssh-key"},next:{title:"How to Create an Instance in OpenStack Horizon",permalink:"/openmetal-docs/docs/operators-manual/day-1/horizon/create-first-instance"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"How to Install OpenStackClient",id:"how-to-install-openstackclient",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Install OpenStackClient",id:"install-openstackclient",children:[{value:"Initial Preparation",id:"initial-preparation",children:[],level:4},{value:"Prepare and Install OpenStackClient",id:"prepare-and-install-openstackclient",children:[],level:4}],level:3}],level:2},{value:"Command Structure",id:"command-structure",children:[{value:"List all Available Subcommands",id:"list-all-available-subcommands",children:[],level:3},{value:"Learn more about a Subcommand",id:"learn-more-about-a-subcommand",children:[],level:3},{value:"List Items and Show Details",id:"list-items-and-show-details",children:[],level:3}],level:2},{value:"Enable Bash Autocompletion",id:"enable-bash-autocompletion",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-install-and-use-openstacks-cli"},"How to Install and Use OpenStack's CLI"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Your OpenMetal Private Cloud can not only be managed through a web\nbrowser, but also through the command line using OpenStack's CLI called\nOpenStackClient. Using the command line to manage your cloud introduces\nmore flexibility in automation tasks and can generally make an\nadministrator's life simpler. In this guide, we introduce you to the\ncommand line method of managing your cloud by explaining how to install\nand use OpenStackClient."),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#how-to-install-openstackclient"},"How to Install\nOpenStackClient")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#prerequisites"},"Prerequisites"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#install-openstackclient"},"Install\nOpenStackClient")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"openstackclient#initial-preparation"},"Initial\nPreparation")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"openstackclient#prepare-and-install-openstackclient"},"Prepare and Install\nOpenStackClient")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#command-structure"},"Command\nStructure")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"openstackclient#list-all-available-subcommands"},"List all Available\nSubcommands")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"openstackclient#learn-more-about-a-subcommand"},"Learn more about a\nSubcommand")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"openstackclient#list-items-and-show-details"},"List Items and Show\nDetails")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#enable-bash-autocompletion"},"Enable Bash\nAutocompletion"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"openstackclient#reference"},"Reference")))),(0,l.kt)("h2",{id:"how-to-install-openstackclient"},"How to Install OpenStackClient"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Linux machine in which you can install OpenStackClient. This can\nbe your own machine, the cloud's hardware nodes, or an instance\nrunning in the cloud."),(0,l.kt)("li",{parentName:"ul"},"Python 3.6 or greater"),(0,l.kt)("li",{parentName:"ul"},"OpenStack RC file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clouds.yaml")," file")),(0,l.kt)("h3",{id:"install-openstackclient"},"Install OpenStackClient"),(0,l.kt)("p",null,"In this section, we demonstrate the initial preparation and installation\nof OpenStackClient to the previously created ",(0,l.kt)("strong",{parentName:"p"},"Jumpstation")," CentOS 8\nStream instance."),(0,l.kt)("h4",{id:"initial-preparation"},"Initial Preparation"),(0,l.kt)("p",null,"Before installing OpenStackClient, you must obtain two files from\nHorizon, which are required to prepare your shell environment. Those two\nfiles are ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," and the OpenStack RC file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clouds.yaml"),": Used as a source of configuration for how to connect\nto a cloud"),(0,l.kt)("li",{parentName:"ul"},"OpenStack RC file: Used as a source of authentication for your user\nand project")),(0,l.kt)("p",null,"To collect these files, log in to Horizon as your user. Navigate to\n",(0,l.kt)("strong",{parentName:"p"},"Project -",">"," API Access")," to download the OpenStack ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," and\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenStack RC")," files to your machine. When you navigate to ",(0,l.kt)("strong",{parentName:"p"},"Project\n-",">"," API Access")," and collect these files, they are associated with the\ncurrent user and project that user is in."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(2259).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Figure 1:")," API Access"),(0,l.kt)("p",null,"This example acquires the ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," and OpenStack RC file for the\nuser ",(0,l.kt)("strong",{parentName:"p"},"nick")," and that user's primary project, ",(0,l.kt)("strong",{parentName:"p"},"Development"),"."),(0,l.kt)("h4",{id:"prepare-and-install-openstackclient"},"Prepare and Install OpenStackClient"),(0,l.kt)("p",null,"Next, use SSH to log in to the instance created previously. If you\ncreated your instance by following the guide, ",(0,l.kt)("a",{parentName:"p",href:"../horizon/create-first-instance"},"How to Create an Instance\nin OpenStack\nHorizon"),", then\nthis instance can only be accessed from one of your control plane nodes."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 1"),": Prepare ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," and OpenStack RC files"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," file obtained previously must be prepared in this\ninstance. For this demonstration, ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," is located as\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/openstack/clouds.yaml")," in this instance. Copy the contents of\n",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," obtained from Horizon and store it as\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/openstack/clouds.yaml"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Create the following directory\n$ mkdir -p ~/.config/openstack\n\n# Copy clouds.yaml into this file\n$ vi ~/.config/openstack/clouds.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")," -- The ",(0,l.kt)("inlineCode",{parentName:"p"},"clouds.yaml")," file can be placed in several locations.\nFor more see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.openstack.org/python-openstackclient/victoria/configuration/index.html#configuration-files"},"Configuration\nFiles"),"\nheading of OpenStack Victoria's documentation."),(0,l.kt)("p",null,"Next, copy the contents of your OpenStack RC file, in our case called\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/Development-openrc.sh"),", into the instance. This file can be placed\nanywhere and in this example, the file is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"centos")," user's\nhome directory."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vi ~/Development-openrc.sh\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 2"),": Create a Python virtual environment"),(0,l.kt)("p",null,"This environment is created so as to not interfere with the system's\nPython version."),(0,l.kt)("p",null,"In a default CentOS 8 Stream installation, the system's Python\nexecutable is ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/libexec/platform-python")," and is what will be used to\ncreate the virtual environment."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/libexec/platform-python -m venv ~/venv")," to create a virtual\nenvironment in path ",(0,l.kt)("inlineCode",{parentName:"p"},"~/venv"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/usr/libexec/platform-python -m venv ~/venv\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 3"),": Activate the Python virtual environment"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"source ~/venv/bin/activate")," to activate the virtual environment."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source ~/venv/bin/activate\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 4"),": Upgrade ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")),(0,l.kt)("p",null,"Before installing OpenStackClient and to aid in a smooth installation,\nupgrade ",(0,l.kt)("inlineCode",{parentName:"p"},"pip"),". Upgrade ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," by using ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install --upgrade pip"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install --upgrade pip\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 5"),": Install OpenStackClient"),(0,l.kt)("p",null,"With everything prepared, OpenStackClient can be installed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note","!")," - There exist two OpenStackClient packages:\n",(0,l.kt)("inlineCode",{parentName:"p"},"python-openstackclient")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"openstackclient"),". We recommend using\n",(0,l.kt)("inlineCode",{parentName:"p"},"python-openstackclient")," because it is maintained much more frequently\nthan the prior package."),(0,l.kt)("p",null,"Install OpenStackClient using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install python-openstackclient\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Step 6"),": List servers associated with your project"),(0,l.kt)("p",null,"For an initial command, list the servers associated with your project by\nrunning ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack server list"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ openstack server list\n+--------------------------------------+-------------+--------+----------------------------------------+--------------------------+----------+\n| ID                                   | Name        | Status | Networks                               | Image                    | Flavor   |\n+--------------------------------------+-------------+--------+----------------------------------------+--------------------------+----------+\n| 3bb6f079-90d3-4233-9400-94ef49c34a34 | Jumpstation | ACTIVE | Private=173.231.217.202, 192.168.0.200 | N/A (booted from volume) | m1.small |\n+--------------------------------------+-------------+--------+----------------------------------------+--------------------------+----------+\n")),(0,l.kt)("p",null,"Here, we can see the server created in the previous guide."),(0,l.kt)("h2",{id:"command-structure"},"Command Structure"),(0,l.kt)("p",null,"When using OpenStackClient, there is typically a common command pattern\nfor what you want to accomplish. All ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack")," commands begin with\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack"),". You can execute ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack")," by itself to enter into a\nshell, where commands no longer need to be prefixed by ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(venv) [root@lovely-ladybug ~]# openstack\n(openstack)\n")),(0,l.kt)("h3",{id:"list-all-available-subcommands"},"List all Available Subcommands"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack --help")," to list all available subcommands. You initially\nsee all the flags you can pass, but after scrolling a bit, the\nsubcommand list starts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Commands:\n  access rule delete  Delete access rule(s)\n  access rule list  List access rules\n  access rule show  Display access rule details\n  access token create  Create an access token\n  acl delete  Delete ACLs for a secret or container as identified by its href. (py\nthon-barbicanclient)\n[...output truncated...]\n")),(0,l.kt)("h3",{id:"learn-more-about-a-subcommand"},"Learn more about a Subcommand"),(0,l.kt)("p",null,"After seeing available commands, learn more about a command by using\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack help <command>"),"."),(0,l.kt)("p",null,"For example, to learn more about the ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack server")," command, use\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack help server"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'$ openstack help server\nCommand "server" matches:\n  server add fixed ip\n  server add floating ip\n  server add network\n  server add port\n  server add security group\n[...output truncated...]\n')),(0,l.kt)("h3",{id:"list-items-and-show-details"},"List Items and Show Details"),(0,l.kt)("p",null,"It is very common when using OpenStackClient to list items and the\ncommand form is typically ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack <subcommand> list"),". For example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"openstack server list"),", lists all servers for the currently configured\nproject."),(0,l.kt)("p",null,"Furthermore, more information about an item can be found by typically\nrunning ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack <subcommand> show <item>"),". For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack\nserver show Jumpstation")," shows the details about the instance named\n",(0,l.kt)("strong",{parentName:"p"},"Jumpstation"),"."),(0,l.kt)("h2",{id:"enable-bash-autocompletion"},"Enable Bash Autocompletion"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")," The required bash-completion package is not included in the\nCentOS 8 Stream image resulting in an errors like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-bash: _get_comp_words_by_ref: command not found\n")),(0,l.kt)("p",null,"We can install the missing package from the default repositories.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo dnf install bash-completion\n")),(0,l.kt)("p",null,"By default, shell autocompletion is not enabled for the\n",(0,l.kt)("inlineCode",{parentName:"p"},"python-openstackclient")," package. To view the autocompletion Bash\nscript, use ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack complete"),". To make the autocompletion persist,\nstore the output of ",(0,l.kt)("inlineCode",{parentName:"p"},"openstack complete")," into\n",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/bash_completion.d/osc.bash_completion")," and reload your shell."),(0,l.kt)("p",null,"For example, we print the autocomplete configuration and redirect its\noutput to ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/bash_completion.d/osc.bash_completion")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"tee"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"openstack complete | sudo tee /etc/bash_completion.d/osc.bash_completion > /dev/null\n")),(0,l.kt)("p",null,"Next, either log out and back in to your shell or use ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," to load\nthe autocompletion script for your current shell."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source /etc/bash_completion.d/osc.bash_completion\n")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.openstack.org/python-openstackclient/victoria/"},"OpenStack Victoria OpenStackClient\nDocumentation")))}u.isMDXComponent=!0},2259:function(e,t,n){t.Z=n.p+"assets/images/api-access-4f14d5f4bc673a728a4c65cee35c31cc.png"}}]);