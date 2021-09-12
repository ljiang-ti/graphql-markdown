"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7010],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,y=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return n?i.createElement(y,a(a({ref:t},l),{},{components:n})):i.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"notification",title:"Notification"},u=void 0,p={unversionedId:"schema/queries/notification",id:"schema/queries/notification",isDocsHomePage:!1,title:"Notification",description:"Notification query",source:"@site/docs/schema/queries/notification.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/notification",permalink:"/graphql-markdown/schema/queries/notification",tags:[],version:"current",frontMatter:{id:"notification",title:"Notification"},sidebar:"schemaSidebar",previous:{title:"Media",permalink:"/graphql-markdown/schema/queries/media"},next:{title:"Page",permalink:"/graphql-markdown/schema/queries/page"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],f={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notification query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"Notification(\n  type: NotificationType\n  resetNotificationCount: Boolean\n  type_in: [NotificationType]\n): NotificationUnion\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"type-notificationtype"},(0,o.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,o.kt)("p",null,"Filter by the type of notifications"),(0,o.kt)("h4",{id:"resetnotificationcount-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"resetNotificationCount")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Reset the unread notification count to 0 on load"),(0,o.kt)("h4",{id:"type_in-notificationtype"},(0,o.kt)("inlineCode",{parentName:"h4"},"type_in")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[NotificationType]")),")"),(0,o.kt)("p",null,"Filter by the type of notifications"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"notificationunion"},(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/notification-union"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationUnion"))),(0,o.kt)("p",null,"Notification union type"))}s.isMDXComponent=!0}}]);