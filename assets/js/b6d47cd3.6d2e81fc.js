"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4052],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={},s="Manage Node Firewall Using iptables",c={unversionedId:"operators-manual/day-2/manage-node-firewall-with-iptables",id:"operators-manual/day-2/manage-node-firewall-with-iptables",title:"Manage Node Firewall Using iptables",description:"- [Manage Node Firewall Using",source:"@site/docs/operators-manual/day-2/manage-node-firewall-with-iptables.md",sourceDirName:"operators-manual/day-2",slug:"/operators-manual/day-2/manage-node-firewall-with-iptables",permalink:"/manuals/operators-manual/day-2/manage-node-firewall-with-iptables",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/operators-manual/day-2/manage-node-firewall-with-iptables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maintaining OpenStack Software Updates",permalink:"/manuals/operators-manual/day-2/maintenance"},next:{title:"How Private Clouds are Deployed",permalink:"/manuals/operators-manual/day-2/private-cloud-deployment-overview"}},p=[{value:"Use Case",id:"use-case",children:[],level:2},{value:"Goal",id:"goal",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[{value:"Identify Active Firewall Driver",id:"identify-active-firewall-driver",children:[],level:3},{value:"Reconfigure Firewall Driver with Kolla Ansible",id:"reconfigure-firewall-driver-with-kolla-ansible",children:[],level:3}],level:2},{value:"Install and Configure Firewall",id:"install-and-configure-firewall",children:[{value:"Install ipset and iptables",id:"install-ipset-and-iptables",children:[],level:3},{value:"Configure Services",id:"configure-services",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-node-firewall-using-iptables"},"Manage Node Firewall Using iptables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#manage-node-firewall-using-iptables"},"Manage Node Firewall Using\niptables"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-case"},"Use Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#goal"},"Goal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#identify-active-firewall-driver"},"Identify Active Firewall\nDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reconfigure-firewall-driver-with-kolla-ansible"},"Reconfigure Firewall Driver with Kolla\nAnsible")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-and-configure-firewall"},"Install and Configure\nFirewall"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-ipset-and-iptables"},"Install ipset and iptables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configure-services"},"Configure Services"))))))),(0,i.kt)("h2",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"In cases where access restriction and attack surface reduction is key,\nyour project landscape may require assets and management be accessible\nonly to select IPs or networks (such as a company VPN). Such a\nrestriction can be handled on the Hardware Node level, allowing access\nto be easily managed separately without interference from or with Docker\nor OpenStack internal communication."),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ipset")," to restrict access to local (eg. ssh) and/or\nCloud services (HAProxy) on an OpenStack node without interfering with\nDocker."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Root SSH access to node"),(0,i.kt)("li",{parentName:"ul"},"Knowledge of OS package management"),(0,i.kt)("li",{parentName:"ul"},"OpenVSwitch Firewall Driver"),(0,i.kt)("li",{parentName:"ul"},"Kolla Ansible (if driver reconfigure required)")),(0,i.kt)("h3",{id:"identify-active-firewall-driver"},"Identify Active Firewall Driver"),(0,i.kt)("p",null,"You will first need to identify the driver actively in use by Neutron\nport security. This is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"openvswitch_agent.ini"),". This can be\nconfirmed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"grep")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# grep firewall_driver /etc/kolla/neutron-openvswitch-agent/openvswitch_agent.ini\nfirewall_driver = neutron.agent.linux.iptables_firewall.OVSHybridIptablesFirewallDriver\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"firewall_driver")," is defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"openvswitch")," proceed to\n",(0,i.kt)("a",{parentName:"p",href:"#setup"},"Setup"),"."),(0,i.kt)("h3",{id:"reconfigure-firewall-driver-with-kolla-ansible"},"Reconfigure Firewall Driver with Kolla Ansible"),(0,i.kt)("p",null,"If the default Hybrid driver is in use you will need to update the\n",(0,i.kt)("a",{parentName:"p",href:"operators_manual/day-4/kolla-ansible/kolla-ansible.rst"},"Kolla Ansible"),"\nconfiguration at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/kolla/config/neutron/openvswitch_agent.ini"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"openvswitch_agent.ini")," file does not exist, create it with the\nfollowing contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"ini",ini:!0},"# Ensures firewall rules are fully-managed in OVS instead of using\n# host iptables\n[securitygroup]\nfirewall_driver = openvswitch\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# cat /etc/kolla/config/neutron/openvswitch_agent.ini\n\n# Ensures firewall rules are fully-managed in OVS instead of using\n# host iptables\n[securitygroup]\nfirewall_driver = openvswitch\n")),(0,i.kt)("p",null,"Once in place, reconfigure the cloud with ",(0,i.kt)("inlineCode",{parentName:"p"},"kolla-ansible reconfigure"),"\nyou can target just the changed services with ",(0,i.kt)("inlineCode",{parentName:"p"},"--tags\nneutron,openvswitch"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"(.kolla-admin) [root@exhilarated-firefly kolla-ansible]# kolla-ansible -i /etc/fm-deploy/kolla-ansible-inventory reconfigure --tags neutron,openvswitch\nReconfigure OpenStack service : ansible-playbook -i /etc/fm-deploy/kolla-ansible-inventory -e @/etc/kolla/globals.yml  -e @/etc/kolla/passwords.yml -e CONFIG_DIR=/etc/kolla  --tags neutron,openvswitch -e kolla_action=reconfigure -e kolla_serial=0 /opt/kolla-ansible/.kolla-admin/share/kolla-ansible/ansible/site.yml \n[WARNING]: Invalid characters were found in group names but not replaced, use -vvvv to see details\n[WARNING]: Could not match supplied host pattern, ignoring: enable_nova_True\n\n--- OUTPUT TRUNCATED ---\n\nPLAY RECAP *********************************************************************************************************************************************************************************************************\nexhilarated-firefly        : ok=33   changed=5    unreachable=0    failed=0    skipped=18   rescued=0    ignored=0   \ngifted-wildcat             : ok=43   changed=6    unreachable=0    failed=0    skipped=19   rescued=0    ignored=0   \nlocalhost                  : ok=4    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \nupbeat-peacock             : ok=33   changed=5    unreachable=0    failed=0    skipped=18   rescued=0    ignored=0\n")),(0,i.kt)("p",null,"Confirm your change is now reflected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly kolla-ansible]# grep firewall_driver /etc/kolla/neutron-openvswitch-agent/openvswitch_agent.ini\nfirewall_driver = openvswitch\n")),(0,i.kt)("p",null,"Proceed to ",(0,i.kt)("a",{parentName:"p",href:"#install-and-configure-firewall"},"installation"),"."),(0,i.kt)("h2",{id:"install-and-configure-firewall"},"Install and Configure Firewall"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CAUTION","!")," This process can potentially result in loss of\naccess to your cloud. Perform these steps on one node at a time to\nlimit the possibility of total loss of access."))),(0,i.kt)("h3",{id:"install-ipset-and-iptables"},"Install ipset and iptables"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Begin by installing the required packages with ",(0,i.kt)("inlineCode",{parentName:"li"},"yum"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"yum install iptables-services ipset ipset-service -y\n-- OUTPUT TRUNCATED ---\nInstalled:\n  ipset-7.1-1.el8.x86_64         ipset-libs-7.1-1.el8.x86_64           ipset-service-7.1-1.el8.noarch           iptables-services-1.8.4-17.el8_4.1.x86_64                     \n\nComplete!\n")),(0,i.kt)("h3",{id:"configure-services"},"Configure Services"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the nodes vlan bond devices with ",(0,i.kt)("inlineCode",{parentName:"li"},"ip"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# ip -br a | awk -F'@bond0' '/bond0\\./{print$1}'\nbond0.393\nbond0.392\nbond0.396\nbond0.394\nbond0.395\nbond0.8\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new iptables configuration at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/iptables"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE","!"),": To ensure all VLAN traffic is accepted, special\nattention must be paid to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCEPT")," rules (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"bond0.304"),"\netc). ",(0,i.kt)("strong",{parentName:"p"},"Be sure to update the Local VLAN rules with the nodes\nidentified interface names"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode"},'*filter\n:INPUT ACCEPT [0:0]\n:FORWARD ACCEPT [0:0]\n:OUTPUT ACCEPT [0:0]\n-A INPUT -i lo -j ACCEPT -m comment --comment "localhost"\n-A OUTPUT -o lo -j ACCEPT -m comment --comment "localhost"\n-A INPUT  -j ACCEPT -m pkttype --pkt-type multicast -m comment --comment "multicast"\n-A OUTPUT -j ACCEPT -m pkttype --pkt-type multicast -m comment --comment "multicast"\n-A INPUT -j ACCEPT -m pkttype --pkt-type broadcast -m comment --comment "broadcast"\n-A OUTPUT -j ACCEPT -m pkttype --pkt-type broadcast -m comment --comment "broadcast"\n-A INPUT  -j DROP -m set --match-set blacklist src -m comment --comment "blacklist"\n-A OUTPUT -j DROP -m set --match-set blacklist dst -m comment --comment "blacklist"\n-A INPUT -p icmp -j ACCEPT -m comment --comment "allow icmp"\n-A INPUT  -m state --state RELATED,ESTABLISHED -j ACCEPT -m comment --comment "connection tracking"\n-A INPUT -i bond0.304 -j ACCEPT -m comment --comment "Local VLAN - compute"\n-A INPUT -i bond0.306 -j ACCEPT -m comment --comment "Local VLAN - control"\n-A INPUT -i bond0.332 -j ACCEPT -m comment --comment "Local VLAN - storage"\n-A INPUT -i bond0.333 -j ACCEPT -m comment --comment "Local VLAN - tunnel"\n-A INPUT -i o-hm0 -j ACCEPT -m comment --comment "Octavia management"\n-A INPUT -p vrrp -j ACCEPT\n-A INPUT -p tcp -s 10.204.0.1 -m comment --comment "OMI Pod VLAN 8 management" -j ACCEPT\n-A INPUT -p udp -s 10.204.0.1 -m comment --comment "OMI Pod VLAN 8 management" -j ACCEPT\n-A INPUT -p tcp -s 173.231.217.0/28 -m comment --comment "OMI Pod Management and Support" -j ACCEPT\n-A INPUT  -j ACCEPT -m set --match-set whitelist src -m comment --comment "whitelist"\n-A INPUT -p tcp -m tcp --dport 22 -m state --state NEW -m comment --comment "ssh" -j ACCEPT\n-A INPUT -p tcp -m tcp --dport 80 -m state --state NEW -m comment --comment "http/haproxy" -j ACCEPT\n-A INPUT -p tcp -m tcp --dport 443 -m state --state NEW -m comment --comment "https/haproxy" -j ACCEPT\n-A INPUT -j DROP\nCOMMIT\n')))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new ipset configuration at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/ipset")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode"},"###\n# ipset IP lists\n#\n# To reload: systemctl restart ipset\n##\n\ncreate whitelist hash:net family inet hashsize 1024 maxelem 65536\ncreate blacklist hash:net family inet hashsize 1024 maxelem 65536\ncreate multicast hash:net family inet hashsize 1024 maxelem 65536\n\n## Multicast/Broadcast IPs required for VRRP, DHCP, other protocols\nadd multicast 224.0.0.0/4\nadd multicast 255.255.255.255\n\n## Whitelisted IPs\n\n# OMI VPN IP (support)\nadd whitelist 173.231.218.25\n\n# Add your additional IPs here...\n#add whitelist W.X.Y.Z\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The services now need to be restarted for the changes to take\neffect. Do ",(0,i.kt)("strong",{parentName:"p"},"NOT")," enable auto-start yet, in case something goes\nwrong."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# systemctl restart ipset\n[root@exhilarated-firefly ~]# systemctl restart iptables\n[root@exhilarated-firefly ~]#\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm that the firewall is working as expected. This can be done\nby attempting to access services (ssh etc) from both a whitelisted\nIP and an undefined network.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once confirmed, enable auto-start for both services."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# systemctl enable ipset\nCreated symlink /etc/systemd/system/basic.target.wants/ipset.service \u2192 /usr/lib/systemd/system/ipset.service.\n[root@exhilarated-firefly ~]# systemctl enable iptables\nCreated symlink /etc/systemd/system/multi-user.target.wants/iptables.service \u2192 /usr/lib/systemd/system/iptables.service.\n[root@exhilarated-firefly ~]#\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the newly created files to the root users home folder accross\nthe rest of the nodes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sourceCode",metastring:"shell",shell:!0},"[root@exhilarated-firefly ~]# for node in $(awk '!/localhost/&&/local/{print$NF}' /etc/hosts| grep -v $(hostname -s)); do echo \"scp -i .ssh/fm-deploy /etc/sysconfig/ipset $node:~/new-ipset && scp -i .ssh/fm-deploy /etc/sysconfig/iptables $node:~/new-iptables\"; done\nscp -i .ssh/fm-deploy /etc/sysconfig/ipset gifted-wildcat:~/new-ipset && scp -i .ssh/fm-deploy /etc/sysconfig/iptables gifted-wildcat:~/new-iptables\nscp -i .ssh/fm-deploy /etc/sysconfig/ipset upbeat-peacock:~/new-ipset && scp -i .ssh/fm-deploy /etc/sysconfig/iptables upbeat-peacock:~/new-iptables\n[root@exhilarated-firefly ~]#\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy to the remaining nodes."))))}d.isMDXComponent=!0}}]);