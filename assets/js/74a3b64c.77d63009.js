"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[6048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/kubernetes-guides/deploying-a-kubespray-cluster-to-openstack-using-terraform",description:"This guide will walk you through deploying a Kubespray cluster to OpenStack using Terraform.",sidebar_position:3},o="Deploying a Kubespray cluster to OpenStack using Terraform",s={unversionedId:"kubernetes-guides/deployment/kubespray",id:"kubernetes-guides/deployment/kubespray",title:"Deploying a Kubespray cluster to OpenStack using Terraform",description:"This guide will walk you through deploying a Kubespray cluster to OpenStack using Terraform.",source:"@site/docs/kubernetes-guides/deployment/kubespray.md",sourceDirName:"kubernetes-guides/deployment",slug:"/kubernetes-guides/deploying-a-kubespray-cluster-to-openstack-using-terraform",permalink:"/docs/manuals/kubernetes-guides/deploying-a-kubespray-cluster-to-openstack-using-terraform",draft:!1,editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/kubernetes-guides/deployment/kubespray.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/kubernetes-guides/deploying-a-kubespray-cluster-to-openstack-using-terraform",description:"This guide will walk you through deploying a Kubespray cluster to OpenStack using Terraform.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing a Rancher managed cluster on OpenStack",permalink:"/docs/manuals/kubernetes-guides/installing-a-rancher-cluster-on-openstack"},next:{title:"Installing a kOps cluster on OpenStack",permalink:"/docs/manuals/kubernetes-guides/installing-a-kops-cluster-on-openstack"}},i={},u=[{value:"Kubespray Features",id:"kubespray-features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare deployment environment",id:"prepare-deployment-environment",level:2},{value:"Install Terraform",id:"install-terraform",level:3},{value:"Create and Activate Virtual Environment",id:"create-and-activate-virtual-environment",level:3},{value:"Setup the OpenStack CLI",id:"setup-the-openstack-cli",level:3},{value:"Create an OpenStack project",id:"create-an-openstack-project",level:3},{value:"Deploy the infrastructure with Terraform",id:"deploy-the-infrastructure-with-terraform",level:2},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Generate SSH key and add to SSH agent",id:"generate-ssh-key-and-add-to-ssh-agent",level:3},{value:"Clone Kubespray",id:"clone-kubespray",level:3},{value:"Prepare your cluster configuration",id:"prepare-your-cluster-configuration",level:3},{value:"Configure Terraform variables",id:"configure-terraform-variables",level:3},{value:"Initialize Terraform",id:"initialize-terraform",level:3},{value:"Apply the Terraform plan",id:"apply-the-terraform-plan",level:3},{value:"Deploy Kubernetes with Ansible",id:"deploy-kubernetes-with-ansible",level:2},{value:"Update <code>group_vars/all/all.yml</code>",id:"update-group_varsallallyml",level:3},{value:"Update <code>group_vars/all/openstack.yml</code>",id:"update-group_varsallopenstackyml",level:3},{value:"Deploy Kubernetes",id:"deploy-kubernetes",level:3},{value:"Verify Kubernetes Installation",id:"verify-kubernetes-installation",level:2},{value:"Access your bastion node (Optional)",id:"access-your-bastion-node-optional",level:3},{value:"List your nodes",id:"list-your-nodes",level:4},{value:"SSH into your bastion node with Agent forwarding",id:"ssh-into-your-bastion-node-with-agent-forwarding",level:4},{value:"Install Kubectl",id:"install-kubectl",level:3},{value:"Create configuration file",id:"create-configuration-file",level:3},{value:"Test Connection",id:"test-connection",level:3},{value:"Save your configuration",id:"save-your-configuration",level:3},{value:"Verify OpenStack Cloud Provider",id:"verify-openstack-cloud-provider",level:2},{value:"Verify Load balancer",id:"verify-load-balancer",level:3},{value:"Verify Cinder",id:"verify-cinder",level:3},{value:"Deploy a pod that uses the volume",id:"deploy-a-pod-that-uses-the-volume",level:2},{value:"Verify the volume is bound",id:"verify-the-volume-is-bound",level:2},{value:"Verify the volume exists in OpenStack",id:"verify-the-volume-exists-in-openstack",level:3},{value:"All Done",id:"all-done",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-kubespray-cluster-to-openstack-using-terraform"},"Deploying a Kubespray cluster to OpenStack using Terraform"),(0,r.kt)("p",null,"Kubespray is a community-driven project that provides a set of Ansible playbooks\nto deploy a production-ready Kubernetes cluster. It is a great tool to deploy a\nKubernetes cluster on OpenStack! This guide will detail using Terraform to\nautomate creation of your OpenStack infrastructure and Ansible to deploy\na Kubespray cluster on it."),(0,r.kt)("p",null,"We'll be using the following official Kubespray documentation as a reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kubespray/blob/v2.20.0/contrib/terraform/openstack/README.md"},"Kubespray - Terraform for OpenStack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubespray.io/#/docs/openstack"},"Kubespray - Configuring OpenStack"))),(0,r.kt)("h2",{id:"kubespray-features"},"Kubespray Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for most popular network plugins (Calico, Cilium, Contiv, Flannel,\nMultus, Weave, Kube-router, Romana, Amazon VPC CNI, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Support for most popular Linux distributions"),(0,r.kt)("li",{parentName:"ul"},"Upgrade support from a previous Kubernetes version"),(0,r.kt)("li",{parentName:"ul"},"Composable attributes"),(0,r.kt)("li",{parentName:"ul"},"Declarative way to customize cluster configuration through a\nconfiguration file"),(0,r.kt)("li",{parentName:"ul"},"Network load balancer (MetalLB) for services of type LoadBalancer"),(0,r.kt)("li",{parentName:"ul"},"Configurable bootstrap tools for the Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"Multi-purpose bootstrap node used as a bastion (optional)"),(0,r.kt)("li",{parentName:"ul"},"GPU node support")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An OpenStack instance. If you don't have OpenStack, you can sign up for a free\ntrial today with OpenMetal ",(0,r.kt)("a",{parentName:"li",href:"https://central.openmetal.io/sign-up"},"OpenMetal Central"),".")),(0,r.kt)("h2",{id:"prepare-deployment-environment"},"Prepare deployment environment"),(0,r.kt)("p",null,"We'll be performing this deployment from a VM running Ubuntu 20.04. You\ncan also use one of your OpenMetal cloud core nodes or your work station. Our\nguide will have you install Terraform and Ansible in your installation environment."),(0,r.kt)("h3",{id:"install-terraform"},"Install Terraform"),(0,r.kt)("p",null,"Terraform is a tool for building, changing, and versioning infrastructure safely\nand efficiently. Terraform supports existing, popular service providers as well\nas custom in-house solutions. Configuration files describe to Terraform the\ncomponents needed to run a single application or your entire data center."),(0,r.kt)("p",null,"Terraform generates an execution plan describing what is needed to reach the\ndesired state, then executes it to build the described infrastructure. As the\nconfiguration changes, Terraform is able to determine what changed and\ncreate incremental execution plans which can be applied. This allows for high\nfidelity plans and helps reduce out-of-band changes, which can lead to drift and\nconflicts."),(0,r.kt)("p",null,"For non Debian based systems, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/downloads"},"Terraform Installation Instructions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wget -O- https://apt.releases.hashicorp.com/gpg | \\\ngpg --dearmor | \\\nsudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg\n\necho "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \\\nhttps://apt.releases.hashicorp.com $(lsb_release -cs) main" | \\\nsudo tee /etc/apt/sources.list.d/hashicorp.list\n\nsudo apt update && sudo apt install terraform\n')),(0,r.kt)("h3",{id:"create-and-activate-virtual-environment"},"Create and Activate Virtual Environment"),(0,r.kt)("p",null,"Ensure the required Python modules are installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-virtualenv\n")),(0,r.kt)("p",null,"Create your virtual environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virtualenv .kubespray\n")),(0,r.kt)("p",null,"Activate the environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source .kubespray/bin/activate\n")),(0,r.kt)("p",null,"Update pip"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -U pip\n")),(0,r.kt)("h3",{id:"setup-the-openstack-cli"},"Setup the OpenStack CLI"),(0,r.kt)("p",null,"We'll be using the CLI to help populate our Terraform variables. If you don't have\naccess to the OpenStack CLI, please follow the steps in this guide:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/manuals/operators-manual/day-1/command-line/openstackclient#how-to-install-and-use-openstacks-cli"},"How to Install and Use OpenStack's CLI")),(0,r.kt)("h3",{id:"create-an-openstack-project"},"Create an OpenStack project"),(0,r.kt)("p",null,"We'll be creating a project to deploy our infrastructure into. You can use an\nexisting project if you have one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openstack project create --domain default \\\n--description "Kubespray Cluster" \\\nkubespray-demo\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack role add --project kubespray-demo --user admin admin\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You can substitute the admin user if you already have your own user.")),(0,r.kt)("h2",{id:"deploy-the-infrastructure-with-terraform"},"Deploy the infrastructure with Terraform"),(0,r.kt)("h3",{id:"set-environment-variables"},"Set environment variables"),(0,r.kt)("p",null,"If you have not already done so, download your ",(0,r.kt)("inlineCode",{parentName:"p"},"openrc.sh"),' file from your\nprojects "API Access" menu. Save the OpenStack RC file to your workspace and\nsource it.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"This is an important step")," as it sets the environment variables Terraform\nuses to authenticate with OpenStack. Double check that these values are correct.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"openrc.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export OS_AUTH_URL=https://openstack:5000\nexport OS_PROJECT_ID=projectid\nexport OS_PROJECT_NAME="kubespray-demo"\nexport OS_PROJECT_DOMAIN_ID=default\nexport OS_USERNAME=username\nexport OS_PASSWORD=password\nexport OS_REGION_NAME=RegionOne\nexport OS_INTERFACE=public\nexport OS_IDENTITY_API_VERSION=3\nexport OS_USER_DOMAIN_ID=default\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source openrc.sh\n")),(0,r.kt)("h3",{id:"generate-ssh-key-and-add-to-ssh-agent"},"Generate SSH key and add to SSH agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -N '' -f ~/.ssh/id_rsa.kubespray\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Start an SSH Agent for the current shell\neval $(ssh-agent -s)\n\n# Add the generated key\nssh-add ~/.ssh/id_rsa.kubespray\n")),(0,r.kt)("h3",{id:"clone-kubespray"},"Clone Kubespray"),(0,r.kt)("p",null,"The Kubespray repository contains the Ansible playbooks and Terraform templates\nwe'll be using. Pull them down now with ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 --branch v2.20.0  https://github.com/kubernetes-sigs/kubespray\n")),(0,r.kt)("p",null,"Install Ansible and other requirements with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd kubespray\npip install -r requirements.txt\n")),(0,r.kt)("h3",{id:"prepare-your-cluster-configuration"},"Prepare your cluster configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp -LRp contrib/terraform/openstack/sample-inventory inventory/test-cluster\ncd inventory/test-cluster\nln -s ../../contrib/terraform/openstack/hosts\nln -s ../../contrib\n")),(0,r.kt)("h3",{id:"configure-terraform-variables"},"Configure Terraform variables"),(0,r.kt)("p",null,"The previous commands generated a few files including one named ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.tfvars"),".\nThis file will be used to configure the nodes and networks for your cluster.\nRefer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubespray/blob/v2.20.0/contrib/terraform/openstack/README.md#cluster-variables"},"Cluster Variables"),"\ndocumentation for a full list of variables."),(0,r.kt)("p",null,"For this example, we'll be using the following variables:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: We've added comments to help you fetch the values you want to replace from\nOpenStack.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cluster_name = "test-cluster"\n\npublic_key_path = "~/.ssh/id_rsa.kubespray.pub"\n\nimage = "Ubuntu 20.04 (focal-amd64)"\n\nssh_user = "ubuntu"\n\n## Path to your cluster group vars directory\ngroup_vars_path="<group_vars_path>/kubespray/inventory/test-cluster/group_vars"\n\nnumber_of_bastions = 1\n\n# List available flavors command: openstack flavor list\nflavor_bastion = "gp1.small"\n\nnumber_of_etcd = 0\nnumber_of_k8s_masters = 0\nnumber_of_k8s_masters_no_etcd = 0\nnumber_of_k8s_masters_no_floating_ip = 1\nnumber_of_k8s_masters_no_floating_ip_no_etcd = 0\n\n# List available flavors command: openstack flavor list\nflavor_k8s_master = "gp1.large"\n\nnumber_of_k8s_nodes = 0\nnumber_of_k8s_nodes_no_floating_ip = 2\n\n# List available flavors command: openstack flavor list\nflavor_k8s_node = "gp1.large"\n\nnetwork_name = "test-cluster-network"\n\n# Fetch this value with this command: openstack network list --external\nexternal_net = "<external_network_id>"\n\nsubnet_cidr = "172.29.0.0/25"\n\nfloatingip_pool = "External"\n\nbastion_allowed_remote_ips = ["0.0.0.0/0"]\n')),(0,r.kt)("h3",{id:"initialize-terraform"},"Initialize Terraform"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'terraform -chdir="contrib/terraform/openstack" init\n')),(0,r.kt)("h3",{id:"apply-the-terraform-plan"},"Apply the Terraform plan"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Run these commands from the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubespray/inventory/test-cluster")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' terraform -chdir="contrib/terraform/openstack" apply -var-file=$PWD/cluster.tfvars\n')),(0,r.kt)("p",null,"You'll be prompted to confirm your changes to OpenStack, type ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to continue.\nOnce the process completes, the infrastructure required to deploy Kubernetes will\nbe available in your OpenStack project."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you want to destroy your resources, you can run the following command:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'terraform -chdir="contrib/terraform/openstack" destroy -var-file=$PWD/cluster.tfvars\n'))),(0,r.kt)("h2",{id:"deploy-kubernetes-with-ansible"},"Deploy Kubernetes with Ansible"),(0,r.kt)("p",null,"The Terraform run created your nodes and an Ansible inventory file. Next prepare\nthe Ansible variables."),(0,r.kt)("p",null,"We provide here a simplified example configuration, it is likely you will want\nto configure more options than we've provided when setting up your cluster. For\na full list of options, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubespray.io/#/"},"Kubespray Documentation"),"."),(0,r.kt)("p",null,"These are the options we updated to deploy the cluster with the OpenStack Cloud\nProvider, Cinder CSI, and support for Octavia load balancers."),(0,r.kt)("h3",{id:"update-group_varsallallyml"},"Update ",(0,r.kt)("inlineCode",{parentName:"h3"},"group_vars/all/all.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider: external\nexternal_cloud_provider: openstack\n")),(0,r.kt)("h3",{id:"update-group_varsallopenstackyml"},"Update ",(0,r.kt)("inlineCode",{parentName:"h3"},"group_vars/all/openstack.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cinder_csi_enabled: true\ncinder_csi_ignore_volume_az: true\n")),(0,r.kt)("h3",{id:"deploy-kubernetes"},"Deploy Kubernetes"),(0,r.kt)("p",null,"You are ready to deploy Kubernetes. The following command needs to be run from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubespray")," directory. The process will take some time to complete and depends\non the number of resources you wish to deploy. In our example, it took about 12\nminutes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../..\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook --become -i inventory/test-cluster/hosts cluster.yml\n")),(0,r.kt)("h2",{id:"verify-kubernetes-installation"},"Verify Kubernetes Installation"),(0,r.kt)("h3",{id:"access-your-bastion-node-optional"},"Access your bastion node (Optional)"),(0,r.kt)("p",null,"If you followed along with the guide, you have a bastion node you can use to\naccess your cluster. If you don't have a bastion node, you can skip this\nstep."),(0,r.kt)("h4",{id:"list-your-nodes"},"List your nodes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack server list\n")),(0,r.kt)("h4",{id:"ssh-into-your-bastion-node-with-agent-forwarding"},"SSH into your bastion node with Agent forwarding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -A ubuntu@<bastion_ip>\n")),(0,r.kt)("h3",{id:"install-kubectl"},"Install Kubectl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n")),(0,r.kt)("h3",{id:"create-configuration-file"},"Create configuration file"),(0,r.kt)("p",null,"To create the configuration file used to authenticate with the cluster, several\ncertificates must be copied from the master node. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<master_ip>")," with\nthe IP address of your master node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh ubuntu@[master-ip] sudo cat /etc/kubernetes/ssl/apiserver-kubelet-client.key > client.key\nssh ubuntu@[master-ip] sudo cat /etc/kubernetes/ssl/apiserver-kubelet-client.crt > client.crt\nssh ubuntu@[master-ip] sudo cat /etc/kubernetes/ssl/ca.crt > ca.crt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Set cluster\nkubectl config set-cluster default-cluster \\\n  --server=https://[master-ip]:6443 \\\n  --certificate-authority=ca.crt \\\n  --embed-certs=true\n\n# Set credentials\nkubectl config set-credentials default-admin \\\n  --certificate-authority=ca.crt \\\n  --client-key=client.key \\\n  --client-certificate=client.crt \\\n  --embed-certs=true\n\n# Create context\nkubectl config set-context default-context \\\n --cluster=default-cluster \\\n --user=default-admin\n\n# Set active context\nkubectl config use-context default-context\n")),(0,r.kt)("h3",{id:"test-connection"},"Test Connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl get pods -A\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE     NAME                                                   READY   STATUS    RESTARTS   AGE\nkube-system   coredns-74d6c5659f-b9lrn                               1/1     Running   0          13h\nkube-system   coredns-74d6c5659f-t9q6q                               1/1     Running   0          13h\nkube-system   csi-cinder-controllerplugin-9b75f6cc7-hpwn5            6/6     Running   0          11h\nkube-system   csi-cinder-nodeplugin-75vt5                            3/3     Running   0          11h\nkube-system   csi-cinder-nodeplugin-jhdng                            3/3     Running   0          11h\nkube-system   dns-autoscaler-59b8867c86-cv5nm                        1/1     Running   0          13h\nkube-system   kube-apiserver-test-cluster-k8s-master-nf-1            1/1     Running   1          13h\nkube-system   kube-flannel-dstxm                                     1/1     Running   0          13h\n...\n")),(0,r.kt)("h3",{id:"save-your-configuration"},"Save your configuration"),(0,r.kt)("p",null,"You should now have a working configuration file. Save this in a safe place to\naccess your cluster from a machine that can reach your master node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.kube/config\n")),(0,r.kt)("h2",{id:"verify-openstack-cloud-provider"},"Verify OpenStack Cloud Provider"),(0,r.kt)("p",null,"By enabling the OpenStack Cloud Provider, Kubespray configured a few pods that\nshould now be in the running state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -A | grep 'csi\\|openstack'\n\nkube-system   csi-cinder-controllerplugin-9b75f6cc7-hpwn5            6/6     Running   0          11h\nkube-system   csi-cinder-nodeplugin-75vt5                            3/3     Running   0          11h\nkube-system   csi-cinder-nodeplugin-jhdng                            3/3     Running   0          11h\nkube-system   openstack-cloud-controller-manager-d7wbb               1/1     Running   0          11h\n")),(0,r.kt)("h3",{id:"verify-load-balancer"},"Verify Load balancer"),(0,r.kt)("p",null,"The OpenStack Cloud Provider supports Octavia load balancers. Verify the load\nbalancer is working by creating a service of type ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". Once you\ncreate the service, you should see a new load balancer created in the OpenStack\ndashboard."),(0,r.kt)("p",null,"Create a service with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Service\nmetadata:\n  name: fake-service\nspec:\n  type: LoadBalancer\n  ports:\n  - port: 80\n    targetPort: 80\n  selector:\n    app: fake-service\nEOF\n")),(0,r.kt)("p",null,"You can verify that the load balancer was created by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack loadbalancer list\n")),(0,r.kt)("p",null,"You should also see a floating IP associated with the load balancer service in Kubernetes.\nThis may take a couple of minutes to complete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -A -w\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE     NAME              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                  AGE\ndefault       hostname-server   LoadBalancer   10.233.32.201   127.0.0.1        80:32709/TCP             12h\n")),(0,r.kt)("h3",{id:"verify-cinder"},"Verify Cinder"),(0,r.kt)("p",null,"Next we'll verify that Cinder volumes are working. First, create a storage class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: cinder-csi\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: cinder.csi.openstack.org\nparameters:\n  availability: nova\nallowVolumeExpansion: true\nvolumeBindingMode: Immediate\nEOF\n')),(0,r.kt)("p",null,"Now create a PersistentVolumeClaim by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: test-volume\n  namespace: default\nspec:\n  accessModes:\n  - ReadWriteOnce\n  storageClassName: cinder-csi\n  resources:\n    requests:\n      storage: 1Gi\nEOF\n")),(0,r.kt)("h2",{id:"deploy-a-pod-that-uses-the-volume"},"Deploy a pod that uses the volume"),(0,r.kt)("p",null,"We'll deploy a Redis instance configured to use the volume we created in the\nprevious step."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Warning"),": This is just an example. ",(0,r.kt)("strong",{parentName:"p"},"Do not")," use this in production.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: redis\n  template:\n    metadata:\n      labels:\n        app: redis\n    spec:\n      containers:\n      - image: redis\n        name: redis\n        volumeMounts:\n        - mountPath: /var/lib/redis\n          name: redis-data\n      volumes:\n      - name: redis-data\n        persistentVolumeClaim:\n          claimName: test-volume\nEOF\n")),(0,r.kt)("h2",{id:"verify-the-volume-is-bound"},"Verify the volume is bound"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pvc -A\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAMESPACE   NAME            STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS    AGE\ndefault     test-volume     Bound     pvc-f7ceeaae-86aa-4ab3-9512-bb65f7d6c5f0   1Gi        RWO            cinder-csi      12h\n")),(0,r.kt)("h3",{id:"verify-the-volume-exists-in-openstack"},"Verify the volume exists in OpenStack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack volume list\n")),(0,r.kt)("h2",{id:"all-done"},"All Done"),(0,r.kt)("p",null,"You should now have a working Kubernetes cluster with the OpenStack Cloud Provider\nenabled. You can now deploy your applications to the cluster."))}c.isMDXComponent=!0}}]);