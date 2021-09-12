"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,f=p["".concat(u,".").concat(d)]||p[d]||l[d]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),a=["components"],i={id:"submission-status",title:"SubmissionStatus"},u=void 0,c={unversionedId:"schema/enums/submission-status",id:"schema/enums/submission-status",isDocsHomePage:!1,title:"SubmissionStatus",description:"Submission status",source:"@site/docs/schema/enums/submission-status.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/submission-status",permalink:"/graphql-markdown/schema/enums/submission-status",tags:[],version:"current",frontMatter:{id:"submission-status",title:"SubmissionStatus"},sidebar:"schemaSidebar",previous:{title:"SubmissionSort",permalink:"/graphql-markdown/schema/enums/submission-sort"},next:{title:"ThreadCommentSort",permalink:"/graphql-markdown/schema/enums/thread-comment-sort"}},m=[{value:"Values",id:"values",children:[]}],l={toc:m};function p(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Submission status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SubmissionStatus {\n  PENDING\n  REJECTED\n  PARTIALLY_ACCEPTED\n  ACCEPTED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"pending"},(0,o.kt)("inlineCode",{parentName:"h4"},"PENDING")),(0,o.kt)("h4",{id:"rejected"},(0,o.kt)("inlineCode",{parentName:"h4"},"REJECTED")),(0,o.kt)("h4",{id:"partially_accepted"},(0,o.kt)("inlineCode",{parentName:"h4"},"PARTIALLY_ACCEPTED")),(0,o.kt)("h4",{id:"accepted"},(0,o.kt)("inlineCode",{parentName:"h4"},"ACCEPTED")))}p.isMDXComponent=!0}}]);