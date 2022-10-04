"use strict";(self.webpackChunkopenmetal_docs=self.webpackChunkopenmetal_docs||[]).push([[4118],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,p=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"/engineers-notes/kubernetes-failed-to-detach-persistent-volume"},c="Kubernetes - Failed to detach Persistent Volume",s={unversionedId:"engineers-notes/kubernetes-csi-error",id:"engineers-notes/kubernetes-csi-error",title:"Kubernetes - Failed to detach Persistent Volume",description:"This is an entry in our Engineering Notes. We record troubleshooting steps",source:"@site/docs/engineers-notes/kubernetes-csi-error.md",sourceDirName:"engineers-notes",slug:"/engineers-notes/kubernetes-failed-to-detach-persistent-volume",permalink:"/docs/manuals/engineers-notes/kubernetes-failed-to-detach-persistent-volume",editUrl:"https://github.com/openmetalio/openmetal-docs/blob/main/docs/engineers-notes/kubernetes-csi-error.md",tags:[],version:"current",frontMatter:{slug:"/engineers-notes/kubernetes-failed-to-detach-persistent-volume"},sidebar:"tutorialSidebar",previous:{title:"How to Configure Terraform to Automate OpenStack\u2019s Resources",permalink:"/docs/manuals/terraform/configure-terraform-to-automate-openstack-resources"},next:{title:"OpenMetal Central",permalink:"/docs/manuals/openmetal-central/"}},d=[{value:"Problem: Failed to detach",id:"problem-failed-to-detach",children:[],level:2},{value:"Solution: Force delete <code>VolumeAttachments</code>",id:"solution-force-delete-volumeattachments",children:[{value:"List all <code>VolumeAttachments</code> and <code>PersistentVolumes</code>",id:"list-all-volumeattachments-and-persistentvolumes",children:[],level:3},{value:"Edit <code>VolumeAttachment</code> with the issue",id:"edit-volumeattachment-with-the-issue",children:[],level:3},{value:"Remove the finalizers and save the file",id:"remove-the-finalizers-and-save-the-file",children:[],level:3},{value:"Delete the <code>VolumeAttachment</code>",id:"delete-the-volumeattachment",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes---failed-to-detach-persistent-volume"},"Kubernetes - Failed to detach Persistent Volume"),(0,o.kt)("p",null,"This is an entry in our Engineering Notes. We record troubleshooting steps\nand advice from our experience using similar tools to your teams."),(0,o.kt)("h2",{id:"problem-failed-to-detach"},"Problem: Failed to detach"),(0,o.kt)("p",null,"Our team recently ran into an issue in our Kubernetes cluster where\n",(0,o.kt)("inlineCode",{parentName:"p"},"volumeattachment"),"'s failed to detach and caused a flood of errors in our\nlogging systems. The errors were thrown repeatedly in the logs of the ",(0,o.kt)("inlineCode",{parentName:"p"},"csi-attacher"),"\ncontainer. The ",(0,o.kt)("inlineCode",{parentName:"p"},"csi-attacher")," is a sidecar container that is responsible\nfor attaching and detaching volumes to and from nodes. In our case,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"csi-attacher")," was part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"csi-cinder-controllerplugin")," pod in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace."),(0,o.kt)("p",null,"The side effect of this error was a dramatic increase in resource utilization\non the node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'request.go:530 Throttling request took 1.385373635s, request: PATCH:https://10.254.0.1:443/apis/storage.k8s.io/v1beta1/volumeattachments/csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\ncsi_handler.go:439 Saved detach error to "csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\ncsi_handler.go:99 Error processing csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3": failed to detach: persistentvolume "pvc-5a4edc0a-20bf-418d-92a9-32dbfc952082" not found\ncontroller.go:175 Started VA processing csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\ncsi_handler.go:89 CSIHandler: processing VA csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\ncsi_handler.go:140 Starting detach operation for "csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3"\ncsi_handler.go:147 Detaching csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\ncsi_handler.go:428 Saving detach error to csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\n')),(0,o.kt)("h2",{id:"solution-force-delete-volumeattachments"},"Solution: Force delete ",(0,o.kt)("inlineCode",{parentName:"h2"},"VolumeAttachments")),(0,o.kt)("p",null,"The problem was that we had volume attachments that were defined in Kubernetes\nbut not in OpenStack. This caused an issue with the ",(0,o.kt)("inlineCode",{parentName:"p"},"csi-attacher")," because it\nwas trying to detach the volume from the node but it was not able to find the\nvolume in OpenStack."),(0,o.kt)("p",null,"To fix this issue, we had to delete the volume attachments from Kubernetes. However,\nwe were not able to delete the volume attachments because it still attempted to\nremove the volume from OpenStack. To get around this, we had to edit the\n",(0,o.kt)("inlineCode",{parentName:"p"},"volumeattachment")," and remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"finalizers"),". This allowed the CSI driver to\ndelete the volume attachment from Kubernetes automatically."),(0,o.kt)("h3",{id:"list-all-volumeattachments-and-persistentvolumes"},"List all ",(0,o.kt)("inlineCode",{parentName:"h3"},"VolumeAttachments")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"PersistentVolumes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get volumeattachment\n")),(0,o.kt)("h3",{id:"edit-volumeattachment-with-the-issue"},"Edit ",(0,o.kt)("inlineCode",{parentName:"h3"},"VolumeAttachment")," with the issue"),(0,o.kt)("p",null,"Verify that the volume attachment doesn't have a volume associated with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit volumeattachment csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\n")),(0,o.kt)("h3",{id:"remove-the-finalizers-and-save-the-file"},"Remove the finalizers and save the file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  finalizers:\n  - external-attacher/.....\n")),(0,o.kt)("h3",{id:"delete-the-volumeattachment"},"Delete the ",(0,o.kt)("inlineCode",{parentName:"h3"},"VolumeAttachment")),(0,o.kt)("p",null,"If the volume attachment has not been automatically deleted, you should be\nable to delete it now"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete volumeattachment csi-5321e82004036bca2c98cd2254de8568283a1e72a36cc21b1df53d2667de54e3\n")))}m.isMDXComponent=!0}}]);