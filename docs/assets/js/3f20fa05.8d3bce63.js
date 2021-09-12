"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7162],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=o(a),p=i,c=h["".concat(d,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(c,s(s({ref:t},m),{},{components:a})):n.createElement(c,s({ref:t},m))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2298:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return h}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={id:"media-list",title:"MediaList"},d=void 0,o={unversionedId:"schema/queries/media-list",id:"schema/queries/media-list",isDocsHomePage:!1,title:"MediaList",description:"Media list query",source:"@site/docs/schema/queries/media-list.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/media-list",permalink:"/graphql-markdown/schema/queries/media-list",tags:[],version:"current",frontMatter:{id:"media-list",title:"MediaList"},sidebar:"schemaSidebar",previous:{title:"MediaListCollection",permalink:"/graphql-markdown/schema/queries/media-list-collection"},next:{title:"MediaTagCollection",permalink:"/graphql-markdown/schema/queries/media-tag-collection"}},m=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:m};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Media list query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"MediaList(\n  id: Int\n  userId: Int\n  userName: String\n  type: MediaType\n  status: MediaListStatus\n  mediaId: Int\n  isFollowing: Boolean\n  notes: String\n  startedAt: FuzzyDateInt\n  completedAt: FuzzyDateInt\n  compareWithAuthList: Boolean\n  userId_in: [Int]\n  status_in: [MediaListStatus]\n  status_not_in: [MediaListStatus]\n  status_not: MediaListStatus\n  mediaId_in: [Int]\n  mediaId_not_in: [Int]\n  notes_like: String\n  startedAt_greater: FuzzyDateInt\n  startedAt_lesser: FuzzyDateInt\n  startedAt_like: String\n  completedAt_greater: FuzzyDateInt\n  completedAt_lesser: FuzzyDateInt\n  completedAt_like: String\n  sort: [MediaListSort]\n): MediaList\n\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by a list entry's id"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by a user's id"),(0,r.kt)("h4",{id:"username-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"userName")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by a user's name"),(0,r.kt)("h4",{id:"type-mediatype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType")),")"),(0,r.kt)("p",null,"Filter by the list entries media type"),(0,r.kt)("h4",{id:"status-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"mediaid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Filter by the media id of the list entry"),(0,r.kt)("h4",{id:"isfollowing-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFollowing")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Filter list entries to users who are being followed by the authenticated user"),(0,r.kt)("h4",{id:"notes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"notes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by note words and #tags"),(0,r.kt)("h4",{id:"startedat-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"completedat-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"comparewithauthlist-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"compareWithAuthList")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Limit to only entries also on the auth user's list. Requires user id or name arguments."),(0,r.kt)("h4",{id:"userid_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]")),")"),(0,r.kt)("p",null,"Filter by a user's id"),(0,r.kt)("h4",{id:"status_in-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"status_not_in-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaListStatus]")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"status_not-medialiststatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status_not")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"),(0,r.kt)("p",null,"Filter by the watching/reading status"),(0,r.kt)("h4",{id:"mediaid_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]")),")"),(0,r.kt)("p",null,"Filter by the media id of the list entry"),(0,r.kt)("h4",{id:"mediaid_not_in-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaId_not_in")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"[Int]")),")"),(0,r.kt)("p",null,"Filter by the media id of the list entry"),(0,r.kt)("h4",{id:"notes_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"notes_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by note words and #tags"),(0,r.kt)("h4",{id:"startedat_greater-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"startedat_lesser-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"startedat_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"startedAt_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the date the user started the media"),(0,r.kt)("h4",{id:"completedat_greater-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_greater")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"completedat_lesser-fuzzydateint"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_lesser")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/fuzzy-date-int"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDateInt")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"completedat_like-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"completedAt_like")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Filter by the date the user completed the media"),(0,r.kt)("h4",{id:"sort-medialistsort"},(0,r.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"[MediaListSort]")),")"),(0,r.kt)("p",null,"The order the results will be returned in"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"medialist"},(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaList"))),(0,r.kt)("p",null,"List of anime or manga"))}h.isMDXComponent=!0}}]);