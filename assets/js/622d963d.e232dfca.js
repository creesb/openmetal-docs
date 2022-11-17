"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[3240],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2120:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:6},p="Create a Site-to-Site VPN Connection with Endpoint Groups",c={unversionedId:"tutorials/create-site-to-site-vpn",id:"tutorials/create-site-to-site-vpn",title:"Create a Site-to-Site VPN Connection with Endpoint Groups",description:"Neutron provides Site-to-Site IPsec VPN through VPN as a Service (VPNaaS).",source:"@site/docs/tutorials/create-site-to-site-vpn.md",sourceDirName:"tutorials",slug:"/tutorials/create-site-to-site-vpn",permalink:"/docs/manuals/tutorials/create-site-to-site-vpn",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/tutorials/create-site-to-site-vpn.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"VPNaaS Configuration and Deployment",permalink:"/docs/manuals/tutorials/vpnaas-configure-deploy"},next:{title:"Backing Up Important Data",permalink:"/docs/manuals/tutorials/backing-up-important-data"}},l=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Overview",id:"overview",children:[{value:"Step One: West Network Setup",id:"step-one-west-network-setup",children:[],level:3},{value:"Step Two: East Network Setup",id:"step-two-east-network-setup",children:[],level:3},{value:"Step Three: Create an IKE and IPSec Policy",id:"step-three-create-an-ike-and-ipsec-policy",children:[],level:3},{value:"Step Four: Create VPN Service for Both Sites",id:"step-four-create-vpn-service-for-both-sites",children:[],level:3},{value:"Step Five: Create Endpoint Groups",id:"step-five-create-endpoint-groups",children:[],level:3},{value:"Step Six: Create VPN Site Connections",id:"step-six-create-vpn-site-connections",children:[],level:3},{value:"Step Seven: Test Site-to-Site Connection",id:"step-seven-test-site-to-site-connection",children:[],level:3}],level:2}],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-site-to-site-vpn-connection-with-endpoint-groups"},"Create a Site-to-Site VPN Connection with Endpoint Groups"),(0,i.kt)("p",null,"Neutron provides Site-to-Site IPsec VPN through VPN as a Service (VPNaaS).\nIPsec policies and connections are configured within OpenStack meaning\nno dedicated virtual machines are required to use this service."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud configured for ",(0,i.kt)("a",{parentName:"li",href:"/docs/manuals/tutorials/vpnaas-configure-deploy"},"VPNaaS")),(0,i.kt)("li",{parentName:"ul"},"Familiarity with OpenStackClient")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this guide you will create a site-to-site IPSec VPN connection. This allows\nyou to configure communication between private networks across regions."),(0,i.kt)("h3",{id:"step-one-west-network-setup"},"Step One: West Network Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Network"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$  openstack network create net-west\n+---------------------------+--------------------------------------+\n| Field                     | Value                                |\n+---------------------------+--------------------------------------+\n| admin_state_up            | UP                                   |\n| availability_zone_hints   |                                      |\n| availability_zones        |                                      |\n| created_at                | 2022-07-11T17:23:38Z                 |\n| description               |                                      |\n| dns_domain                | None                                 |\n| id                        | ffbb6dc6-4dec-4f96-92c9-2af5098ecca1 |\n| ipv4_address_scope        | None                                 |\n| ipv6_address_scope        | None                                 |\n| is_default                | False                                |\n| is_vlan_transparent       | None                                 |\n| mtu                       | 1500                                 |\n| name                      | net-west                             |\n| port_security_enabled     | True                                 |\n| project_id                | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| provider:network_type     | vxlan                                |\n| provider:physical_network | None                                 |\n| provider:segmentation_id  | 4                                    |\n| qos_policy_id             | None                                 |\n| revision_number           | 1                                    |\n| router:external           | Internal                             |\n| segments                  | None                                 |\n| shared                    | False                                |\n| status                    | ACTIVE                               |\n| subnets                   |                                      |\n| tags                      |                                      |\n| updated_at                | 2022-07-11T17:23:38Z                 |\n+---------------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Subnet"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack subnet create subnet-west \\\n --network net-west \\\n --subnet-range 10.1.0.0/24\n+----------------------+--------------------------------------+\n| Field                | Value                                |\n+----------------------+--------------------------------------+\n| allocation_pools     | 10.1.0.2-10.1.0.254                  |\n| cidr                 | 10.1.0.0/24                          |\n| created_at           | 2022-07-11T17:25:54Z                 |\n| description          |                                      |\n| dns_nameservers      |                                      |\n| dns_publish_fixed_ip | None                                 |\n| enable_dhcp          | True                                 |\n| gateway_ip           | 10.1.0.1                             |\n| host_routes          |                                      |\n| id                   | e4ee7de8-ddfc-43aa-b74b-31e029225603 |\n| ip_version           | 4                                    |\n| ipv6_address_mode    | None                                 |\n| ipv6_ra_mode         | None                                 |\n| name                 | subnet-west                          |\n| network_id           | ffbb6dc6-4dec-4f96-92c9-2af5098ecca1 |\n| project_id           | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| revision_number      | 0                                    |\n| segment_id           | None                                 |\n| service_types        |                                      |\n| subnetpool_id        | None                                 |\n| tags                 |                                      |\n| tenant_id            | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| updated_at           | 2022-07-11T17:25:54Z                 |\n+----------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create router"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack router create router-west\n+-------------------------+--------------------------------------+\n| Field                   | Value                                |\n+-------------------------+--------------------------------------+\n| admin_state_up          | UP                                   |\n| availability_zone_hints |                                      |\n| availability_zones      |                                      |\n| created_at              | 2022-07-11T17:29:04Z                 |\n| description             |                                      |\n| distributed             | False                                |\n| external_gateway_info   | null                                 |\n| flavor_id               | None                                 |\n| ha                      | True                                 |\n| id                      | e5d611fd-22b6-4da9-bdf4-84eb84d4e6e9 |\n| name                    | router-west                          |\n| project_id              | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| revision_number         | 2                                    |\n| routes                  |                                      |\n| status                  | ACTIVE                               |\n| tags                    |                                      |\n| tenant_id               | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| updated_at              | 2022-07-11T17:29:04Z                 |\n+-------------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Associate subnet (This command returns no output)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openstack router add subnet router-west subnet-west\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set external gateway (This command returns no output)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," openstack router set --external-gateway \\\n $(openstack network list --external -f value -c ID) \\\n router-west\n")))),(0,i.kt)("h3",{id:"step-two-east-network-setup"},"Step Two: East Network Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Network"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack network create net-east\n+---------------------------+--------------------------------------+\n| Field                     | Value                                |\n+---------------------------+--------------------------------------+\n| admin_state_up            | UP                                   |\n| availability_zone_hints   |                                      |\n| availability_zones        |                                      |\n| created_at                | 2022-07-11T18:20:44Z                 |\n| description               |                                      |\n| dns_domain                | None                                 |\n| id                        | 535f5839-ea6e-402f-8235-fdc3b99c9696 |\n| ipv4_address_scope        | None                                 |\n| ipv6_address_scope        | None                                 |\n| is_default                | False                                |\n| is_vlan_transparent       | None                                 |\n| mtu                       | 1500                                 |\n| name                      | net-east                             |\n| port_security_enabled     | True                                 |\n| project_id                | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| provider:network_type     | vxlan                                |\n| provider:physical_network | None                                 |\n| provider:segmentation_id  | 5                                    |\n| qos_policy_id             | None                                 |\n| revision_number           | 1                                    |\n| router:external           | Internal                             |\n| segments                  | None                                 |\n| shared                    | False                                |\n| status                    | ACTIVE                               |\n| subnets                   |                                      |\n| tags                      |                                      |\n| updated_at                | 2022-07-11T18:20:44Z                 |\n+---------------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Subnet"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack subnet create subnet-east --network net-east --subnet-range 10.2.0.0/24\n+----------------------+--------------------------------------+\n| Field                | Value                                |\n+----------------------+--------------------------------------+\n| allocation_pools     | 10.2.0.2-10.2.0.254                  |\n| cidr                 | 10.2.0.0/24                          |\n| created_at           | 2022-07-11T18:25:01Z                 |\n| description          |                                      |\n| dns_nameservers      |                                      |\n| dns_publish_fixed_ip | None                                 |\n| enable_dhcp          | True                                 |\n| gateway_ip           | 10.2.0.1                             |\n| host_routes          |                                      |\n| id                   | 1f78171d-e1f4-4920-abf2-45e5f9bf9570 |\n| ip_version           | 4                                    |\n| ipv6_address_mode    | None                                 |\n| ipv6_ra_mode         | None                                 |\n| name                 | subnet-east                          |\n| network_id           | 535f5839-ea6e-402f-8235-fdc3b99c9696 |\n| project_id           | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| revision_number      | 0                                    |\n| segment_id           | None                                 |\n| service_types        |                                      |\n| subnetpool_id        | None                                 |\n| tags                 |                                      |\n| tenant_id            | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| updated_at           | 2022-07-11T18:25:01Z                 |\n+----------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create router"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack router create router-east\n+-------------------------+--------------------------------------+\n| Field                   | Value                                |\n+-------------------------+--------------------------------------+\n| admin_state_up          | UP                                   |\n| availability_zone_hints |                                      |\n| availability_zones      |                                      |\n| created_at              | 2022-07-11T18:27:25Z                 |\n| description             |                                      |\n| distributed             | False                                |\n| external_gateway_info   | null                                 |\n| flavor_id               | None                                 |\n| ha                      | True                                 |\n| id                      | 075dc3d1-4587-43b0-9f90-19632f012820 |\n| name                    | router-east                          |\n| project_id              | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| revision_number         | 2                                    |\n| routes                  |                                      |\n| status                  | ACTIVE                               |\n| tags                    |                                      |\n| tenant_id               | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| updated_at              | 2022-07-11T18:27:25Z                 |\n+-------------------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Associate subnet"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openstack router add subnet router-east subnet-east\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set external gateway"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openstack router set --external-gateway \\\n$(openstack network list --external -f value -c ID) \\\nrouter-east\n")))),(0,i.kt)("h3",{id:"step-three-create-an-ike-and-ipsec-policy"},"Step Three: Create an IKE and IPSec Policy"),(0,i.kt)("p",null,"An IKE and IPSec policy will need to be created. It is recommended that you set\nexplicit parameters to provide higher security than the defaults."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openstack vpn ike policy create ikepolicy1 \\\n --ike-version v2 \\\n --auth-algorithm sha256 \\\n --encryption-algorithm aes-256 \\\n --pfs group14\n+-------------------------------+--------------------------------------+\n| Field                         | Value                                |\n+-------------------------------+--------------------------------------+\n| Authentication Algorithm      | sha256                               |\n| Description                   |                                      |\n| Encryption Algorithm          | aes-256                              |\n| ID                            | 2274a56d-c42f-4e60-bdab-a30e572a4baf |\n| IKE Version                   | v2                                   |\n| Lifetime                      | {'units': 'seconds', 'value': 3600}  |\n| Name                          | ikepolicy1                           |\n| Perfect Forward Secrecy (PFS) | group14                              |\n| Phase1 Negotiation Mode       | main                                 |\n| Project                       | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| project_id                    | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+-------------------------------+--------------------------------------+\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn ipsec policy create ipsecpolicy1 \\\n --auth-algorithm sha256 \\\n --encryption-algorithm aes-256 \\\n --pfs group14 \n+-------------------------------+--------------------------------------+\n| Field                         | Value                                |\n+-------------------------------+--------------------------------------+\n| Authentication Algorithm      | sha256                               |\n| Description                   |                                      |\n| Encapsulation Mode            | tunnel                               |\n| Encryption Algorithm          | aes-256                              |\n| ID                            | 64eebf8d-7f79-4118-8b9f-0254a9e487d5 |\n| Lifetime                      | {'units': 'seconds', 'value': 3600}  |\n| Name                          | ipsecpolicy1                         |\n| Perfect Forward Secrecy (PFS) | group14                              |\n| Project                       | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| Transform Protocol            | esp                                  |\n| project_id                    | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+-------------------------------+--------------------------------------+\n")),(0,i.kt)("h3",{id:"step-four-create-vpn-service-for-both-sites"},"Step Four: Create VPN Service for Both Sites"),(0,i.kt)("p",null,"Now create a VPN service for both sites. You will want to take note of the\nexternal IP addresses assigned to each."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The VPN services are configured without a subnet defined. This allows\nyou flexibility to configure multiple local subnets in a local endpoint group\nper IPSec site connection or multiple site connections with different local\nsubnets.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create VPN west"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn service create vpn-west \\\n --router router-west\n+----------------+--------------------------------------+\n| Field          | Value                                |\n+----------------+--------------------------------------+\n| Description    |                                      |\n| Flavor         | None                                 |\n| ID             | 5fa1384d-8594-468c-a689-e716ae71f9be |\n| Name           | vpn-west                             |\n| Project        | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| Router         | e5d611fd-22b6-4da9-bdf4-84eb84d4e6e9 |\n| State          | True                                 |\n| Status         | PENDING_CREATE                       |\n| Subnet         | None                                 |\n| external_v4_ip | 200.225.46.189                       |\n| external_v6_ip | None                                 |\n| project_id     | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+----------------+--------------------------------------+\n")),(0,i.kt)("p",{parentName:"li"},"Take note as the external IP may be different from the router.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create VPN east"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn service create vpn-east \\\n --router router-east\n+----------------+--------------------------------------+\n| Field          | Value                                |\n+----------------+--------------------------------------+\n| Description    |                                      |\n| Flavor         | None                                 |\n| ID             | 7df8bf8c-03e3-4885-89f3-e6cb3f5d16e4 |\n| Name           | vpn-east                             |\n| Project        | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| Router         | 075dc3d1-4587-43b0-9f90-19632f012820 |\n| State          | True                                 |\n| Status         | PENDING_CREATE                       |\n| Subnet         | None                                 |\n| external_v4_ip | 200.225.46.184                       |\n| external_v6_ip | None                                 |\n| project_id     | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+----------------+--------------------------------------+\n")))),(0,i.kt)("h3",{id:"step-five-create-endpoint-groups"},"Step Five: Create Endpoint Groups"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create west local endpoint group"),(0,i.kt)("p",{parentName:"li"},"Local endpoint groups define subnets given by name or UUID. The site west\nlocal endpoint contains ",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-west"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn endpoint group create subnet-ep-west \\\n --type subnet \\\n --value subnet-west\n+-------------+------------------------------------------+\n| Field       | Value                                    |\n+-------------+------------------------------------------+\n| Description |                                          |\n| Endpoints   | ['e4ee7de8-ddfc-43aa-b74b-31e029225603'] |\n| ID          | d566c941-e103-492c-8725-d0886133b520     |\n| Name        | subnet-ep-west                           |\n| Project     | e6fa12aa82f942f199a8cd6f3ee183d1         |\n| Type        | subnet                                   |\n| project_id  | e6fa12aa82f942f199a8cd6f3ee183d1         |\n+-------------+------------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create west peer endpoint group"),(0,i.kt)("p",{parentName:"li"},"Peer endpoint groups are CIDRs. The site west peer endpoint group will\ncontain the peer subnet CIDR. In this case that's the site east subnet."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn endpoint group create peer-ep-west \\\n --type cidr \\\n --value 10.2.0.0/24 \n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| Description |                                      |\n| Endpoints   | ['10.2.0.0/24']                      |\n| ID          | 869a2e64-d41d-4996-bd19-0ae4bccdcaee |\n| Name        | peer-ep-west                         |\n| Project     | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| Type        | cidr                                 |\n| project_id  | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+-------------+--------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create east local endpoint group"),(0,i.kt)("p",{parentName:"li"},"Local endpoint groups define subnets given by name or UUID. The site east\nlocal endpoint contains ",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-east"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn endpoint group create subnet-ep-east \\\n --type subnet \\\n --value subnet-east \n+-------------+------------------------------------------+\n| Field       | Value                                    |\n+-------------+------------------------------------------+\n| Description |                                          |\n| Endpoints   | ['1f78171d-e1f4-4920-abf2-45e5f9bf9570'] |\n| ID          | 1b0a3828-1086-411c-bbfc-96195e76b6ba     |\n| Name        | subnet-ep-east                           |\n| Project     | e6fa12aa82f942f199a8cd6f3ee183d1         |\n| Type        | subnet                                   |\n| project_id  | e6fa12aa82f942f199a8cd6f3ee183d1         |\n+-------------+------------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create east peer endpoint group"),(0,i.kt)("p",{parentName:"li"},"Peer endpoint groups are CIDRs. The site east peer endpoint group will\ncontain the peer subnet CIDR. In this case that's the site west subnet."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn endpoint group create peer-ep-east \\\n --type cidr \\\n --value 10.1.0.0/24 2>/dev/null\n+-------------+--------------------------------------+\n| Field       | Value                                |\n+-------------+--------------------------------------+\n| Description |                                      |\n| Endpoints   | ['10.1.0.0/24']                      |\n| ID          | a9f46708-ed80-4a83-b4d4-f7d98bc897e7 |\n| Name        | peer-ep-east                         |\n| Project     | e6fa12aa82f942f199a8cd6f3ee183d1     |\n| Type        | cidr                                 |\n| project_id  | e6fa12aa82f942f199a8cd6f3ee183d1     |\n+-------------+--------------------------------------+\n")))),(0,i.kt)("h3",{id:"step-six-create-vpn-site-connections"},"Step Six: Create VPN Site Connections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create west site connection"),(0,i.kt)("p",{parentName:"li"},"Create a site connection (",(0,i.kt)("inlineCode",{parentName:"p"},"conn-west"),") from site west (VPN service\n",(0,i.kt)("inlineCode",{parentName:"p"},"vpn-west"),") to site east (peer IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"200.225.46.184"),") defining the\nlocal (",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-ep-west"),") and peer (",(0,i.kt)("inlineCode",{parentName:"p"},"peer-ep-west"),") endpoint groups."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn ipsec site connection create conn-west \\\n --vpnservice vpn-west \\\n --ikepolicy ikepolicy1 \\\n --ipsecpolicy ipsecpolicy1 \\\n --peer-address 200.225.46.184 \\\n --peer-id 200.225.46.184 \\\n --local-endpoint-group subnet-ep-west \\\n --peer-endpoint-group peer-ep-west \\\n --psk secret\n+--------------------------+----------------------------------------------------+\n| Field                    | Value                                              |\n+--------------------------+----------------------------------------------------+\n| Authentication Algorithm | psk                                                |\n| Description              |                                                    |\n| ID                       | 31a38f73-2c29-452d-a7a8-8990fcde89cf               |\n| IKE Policy               | 2274a56d-c42f-4e60-bdab-a30e572a4baf               |\n| IPSec Policy             | 64eebf8d-7f79-4118-8b9f-0254a9e487d5               |\n| Initiator                | bi-directional                                     |\n| Local Endpoint Group ID  | d566c941-e103-492c-8725-d0886133b520               |\n| Local ID                 |                                                    |\n| MTU                      | 1500                                               |\n| Name                     | conn-west                                          |\n| Peer Address             | 200.225.46.184                                     |\n| Peer CIDRs               |                                                    |\n| Peer Endpoint Group ID   | 869a2e64-d41d-4996-bd19-0ae4bccdcaee               |\n| Peer ID                  | 200.225.46.184                                     |\n| Pre-shared Key           | secret                                             |\n| Project                  | e6fa12aa82f942f199a8cd6f3ee183d1                   |\n| Route Mode               | static                                             |\n| State                    | True                                               |\n| Status                   | PENDING_CREATE                                     |\n| VPN Service              | 5fa1384d-8594-468c-a689-e716ae71f9be               |\n| dpd                      | {'action': 'hold', 'interval': 30, 'timeout': 120} |\n| project_id               | e6fa12aa82f942f199a8cd6f3ee183d1                   |\n+--------------------------+----------------------------------------------------+\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create east site connection"),(0,i.kt)("p",{parentName:"li"},"Create a site connection (",(0,i.kt)("inlineCode",{parentName:"p"},"conn-east"),") from site east (VPN service\n",(0,i.kt)("inlineCode",{parentName:"p"},"vpn-east"),") to site west (peer IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"200.225.46.189"),") defining the\nlocal (",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-ep-east"),") and peer (",(0,i.kt)("inlineCode",{parentName:"p"},"peer-ep-east"),") endpoint groups."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ openstack vpn ipsec site connection create conn-east \\\n --vpnservice vpn-east \\\n --ikepolicy ikepolicy1 \\\n --ipsecpolicy ipsecpolicy1 \\\n --peer-address 200.225.46.189 \\\n --peer-id 200.225.46.189 \\\n --local-endpoint-group subnet-ep-east \\\n --peer-endpoint-group peer-ep-east \\\n --psk secret 2>/dev/null\n+--------------------------+----------------------------------------------------+\n| Field                    | Value                                              |\n+--------------------------+----------------------------------------------------+\n| Authentication Algorithm | psk                                                |\n| Description              |                                                    |\n| ID                       | 324290df-f959-4a52-945f-a3c77466fb01               |\n| IKE Policy               | 2274a56d-c42f-4e60-bdab-a30e572a4baf               |\n| IPSec Policy             | 64eebf8d-7f79-4118-8b9f-0254a9e487d5               |\n| Initiator                | bi-directional                                     |\n| Local Endpoint Group ID  | 1b0a3828-1086-411c-bbfc-96195e76b6ba               |\n| Local ID                 |                                                    |\n| MTU                      | 1500                                               |\n| Name                     | conn-east                                          |\n| Peer Address             | 200.225.46.189                                     |\n| Peer CIDRs               |                                                    |\n| Peer Endpoint Group ID   | a9f46708-ed80-4a83-b4d4-f7d98bc897e7               |\n| Peer ID                  | 200.225.46.189                                     |\n| Pre-shared Key           | secret                                             |\n| Project                  | e6fa12aa82f942f199a8cd6f3ee183d1                   |\n| Route Mode               | static                                             |\n| State                    | True                                               |\n| Status                   | PENDING_CREATE                                     |\n| VPN Service              | 7df8bf8c-03e3-4885-89f3-e6cb3f5d16e4               |\n| dpd                      | {'action': 'hold', 'interval': 30, 'timeout': 120} |\n| project_id               | e6fa12aa82f942f199a8cd6f3ee183d1                   |\n+--------------------------+----------------------------------------------------+\n")))),(0,i.kt)("h3",{id:"step-seven-test-site-to-site-connection"},"Step Seven: Test Site-to-Site Connection"),(0,i.kt)("p",null,"Create instances connected to ",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-west")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"subnet-east")," and confirm they\ncan communicate via ICMP echo requests to local IPs."))}u.isMDXComponent=!0}}]);