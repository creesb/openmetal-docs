"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[5192],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,h=p["".concat(o,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={slug:"/kubernetes-guides/configuring-openstack-cinder-with-kubernetes",sidebar_position:6},o="Configuring OpenStack Cinder with Kubernetes",c={unversionedId:"kubernetes-guides/openstack-provider/cinder",id:"kubernetes-guides/openstack-provider/cinder",title:"Configuring OpenStack Cinder with Kubernetes",description:"This guide will walk you through configuring OpenStack Cinder with Kubernetes.",source:"@site/docs/kubernetes-guides/openstack-provider/cinder.md",sourceDirName:"kubernetes-guides/openstack-provider",slug:"/kubernetes-guides/configuring-openstack-cinder-with-kubernetes",permalink:"/docs/manuals/kubernetes-guides/configuring-openstack-cinder-with-kubernetes",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/kubernetes-guides/openstack-provider/cinder.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/kubernetes-guides/configuring-openstack-cinder-with-kubernetes",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installing the Kubernetes OpenStack Cloud Controller Manager",permalink:"/docs/manuals/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager"},next:{title:"Building Windows Cloud Images on OpenMetal",permalink:"/docs/manuals/engineers-notes/building-windows-cloud-images-on-openmetal"}},u=[{value:"Objectives",id:"objectives",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Configure OpenStack Cinder",id:"configure-openstack-cinder",children:[{value:"Clone the CSI Cinder repository",id:"clone-the-csi-cinder-repository",children:[],level:3},{value:"Optional - Setup Cloud Config Secret",id:"optional---setup-cloud-config-secret",children:[],level:3},{value:"Install the CSI Cinder controller plugin",id:"install-the-csi-cinder-controller-plugin",children:[{value:"Remove the csi-secret-cinderplugin.yaml manifest",id:"remove-the-csi-secret-cinderpluginyaml-manifest",children:[],level:4},{value:"Deploy the CSI Cinder controller plugin",id:"deploy-the-csi-cinder-controller-plugin",children:[],level:4},{value:"Verify the CSI Cinder pods are running",id:"verify-the-csi-cinder-pods-are-running",children:[],level:4},{value:"View CSI Drivers",id:"view-csi-drivers",children:[],level:4}],level:3},{value:"Create a Cinder storage class",id:"create-a-cinder-storage-class",children:[],level:3}],level:2},{value:"Verify",id:"verify",children:[{value:"Create a persistent volume claim",id:"create-a-persistent-volume-claim",children:[{value:"Verify the PVC is created",id:"verify-the-pvc-is-created",children:[],level:4}],level:3},{value:"Check OpenStack Cinder",id:"check-openstack-cinder",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-openstack-cinder-with-kubernetes"},"Configuring OpenStack Cinder with Kubernetes"),(0,a.kt)("p",null,"This guide will walk you through configuring OpenStack Cinder with Kubernetes.\nOpenStack Cinder is a block storage service that allows you to create persistent\nvolumes for your Kubernetes cluster. After following this guide, you will be able\nto create persistent volumes backed by Cinder block storage."),(0,a.kt)("p",null,"We're using the official OpenStack documentation as a reference for this guide.\nYou can find the official documentation here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/cloud-provider-openstack/blob/v1.24.2/docs/cinder-csi-plugin/using-cinder-csi-plugin.md"},"Using Cinder CSI Plugin")),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect your Kubernetes cluster to OpenStack Cinder."),(0,a.kt)("li",{parentName:"ul"},"Create a storage class for your Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},"Create a persistent volume claim (PVC) and persistent volume (PV) backed by\nCinder.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster on OpenStack"),(0,a.kt)("li",{parentName:"ul"},"Installed and configured ",(0,a.kt)("a",{parentName:"li",href:"/docs/manuals/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager"},"OpenStack Cloud Controller Manager"))),(0,a.kt)("h2",{id:"configure-openstack-cinder"},"Configure OpenStack Cinder"),(0,a.kt)("h3",{id:"clone-the-csi-cinder-repository"},"Clone the CSI Cinder repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/kubernetes/cloud-provider-openstack && cd cloud-provider-openstack\n")),(0,a.kt)("p",null,"Checkout the tag that matches your Kubernetes version. For example, if you're\nrunning Kubernetes 1.24.2, you would checkout the ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.24.2")," tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout tags/v1.24.2\n")),(0,a.kt)("h3",{id:"optional---setup-cloud-config-secret"},"Optional - Setup Cloud Config Secret"),(0,a.kt)("p",null,"If you followed our previous guide on installing the OpenStack Cloud Controller\nManager, you should already a secret named ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system"),"\nnamespace."),(0,a.kt)("p",null,"Verify that the secret exists:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n kube-system cloud-config\n")),(0,a.kt)("p",null,"If you have not already created this secret, please follow the steps here:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/manuals/kubernetes-guides/installing-the-kubernetes-openstack-cloud-controller-manager#generate-application-credentials"},"Creating Application Secret"),"\nto generate application credentials, format the config file, and create the\nsecret."),(0,a.kt)("h3",{id:"install-the-csi-cinder-controller-plugin"},"Install the CSI Cinder controller plugin"),(0,a.kt)("p",null,"The manifests included to deploy the CSI Cinder controller plugin are located in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"manifests/cinder-csi-plugin")," directory."),(0,a.kt)("p",null,"Before deploying the manifests, we're going to delete one of the manifests that\nis not needed for this guide. The ",(0,a.kt)("inlineCode",{parentName:"p"},"csi-secret-cinderplugin.yaml")," manifest is\nused to create a secret that is used to authenticate with the OpenStack API. We\nwill be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," secret that we created in the previous step or\nalready exists in your cluster."),(0,a.kt)("h4",{id:"remove-the-csi-secret-cinderpluginyaml-manifest"},"Remove the csi-secret-cinderplugin.yaml manifest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm manifests/cinder-csi-plugin/csi-secret-cinderplugin.yaml\n")),(0,a.kt)("h4",{id:"deploy-the-csi-cinder-controller-plugin"},"Deploy the CSI Cinder controller plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -f manifests/cinder-csi-plugin/ apply\n")),(0,a.kt)("h4",{id:"verify-the-csi-cinder-pods-are-running"},"Verify the CSI Cinder pods are running"),(0,a.kt)("p",null,"This may take a few minutes to complete. If the pods do not start, please check\nthe logs for any errors. A common error is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-config")," secret is not\nfound or is incorrectly formatted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n kube-system | grep csi-cinder\n")),(0,a.kt)("h4",{id:"view-csi-drivers"},"View CSI Drivers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get csidrivers.storage.k8s.io\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                       ATTACHREQUIRED   PODINFOONMOUNT   STORAGECAPACITY   TOKENREQUESTS   REQUIRESREPUBLISH   MODES                  AGE\ncinder.csi.openstack.org   true             true             false             <unset>         false               Persistent,Ephemeral   19h\n")),(0,a.kt)("h3",{id:"create-a-cinder-storage-class"},"Create a Cinder storage class"),(0,a.kt)("p",null,"A storage class is used to define the parameters that are used to create a\npersistent volume. The storage class is used to create a persistent volume claim\n(PVC) that is then used to create a persistent volume (PV). The PV is then used\nby a pod to store data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: csi-sc-cinder\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: cinder.csi.openstack.org\nparameters:\n  availability: nova\nallowVolumeExpansion: true\nvolumeBindingMode: Immediate\nEOF\n')),(0,a.kt)("h2",{id:"verify"},"Verify"),(0,a.kt)("h3",{id:"create-a-persistent-volume-claim"},"Create a persistent volume claim"),(0,a.kt)("p",null,"Now that we have a storage class, we can create a persistent volume claim (PVC).\nThis will create a persistent volume (PV) that is backed by Cinder block storage."),(0,a.kt)("p",null,"In the previous step, we set the cinder storage class as the default storage\nclass. This means that we do not need to specify the storage class in the PVC. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"storageClassName")," field is optional, but we've included it in the example below\nfor clarity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: test-volume\n  namespace: default\nspec:\n  accessModes:\n  - ReadWriteOnce\n  storageClassName: csi-sc-cinder\n  resources:\n    requests:\n      storage: 1Gi\nEOF\n")),(0,a.kt)("h4",{id:"verify-the-pvc-is-created"},"Verify the PVC is created"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pvc -A\n")),(0,a.kt)("p",null,"OUTPUT:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"NAMESPACE   NAME          STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS    AGE\ndefault     test-volume   Bound    pvc-25cda9ab-6dfd-4aba-b629-f6c78d18cd05   1Gi        RWO            csi-sc-cinder   67m\n")),(0,a.kt)("h3",{id:"check-openstack-cinder"},"Check OpenStack Cinder"),(0,a.kt)("p",null,"Verify that the volume was created in OpenStack Cinder. We can do this by\nlogging into the OpenStack dashboard or by using the OpenStack CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openstack volume list\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"+--------------------------------------+------------------------------------------+-----------+------+-------------+\n| ID                                   | Name                                     | Status    | Size | Attached to |\n+--------------------------------------+------------------------------------------+-----------+------+-------------+\n| f88eb9fc-3919-4918-b94e-c7ec880eae92 | pvc-25cda9ab-6dfd-4aba-b629-f6c78d18cd05 | available |    1 |             |\n+--------------------------------------+------------------------------------------+-----------+------+-------------+\n\n")))}p.isMDXComponent=!0}}]);