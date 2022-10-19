"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[404],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),p=n,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||r;return o?i.createElement(g,a(a({ref:t},d),{},{components:o})):i.createElement(g,a({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<r;s++)a[s]=o[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>k});var i=o(7462),n=o(7294),r=o(3905),a=o(4996),l=o(6010),c=o(9960),s=o(941);function d(e){let{title:t,light:o,dark:i,url:r,description:a,imagePosition:d="bottom",alt:m}=e;const u={top:"column-reverse",bottom:"column",left:"row-reverse",right:"row"}[d],p=()=>n.createElement("div",{className:"card__body text",style:{padding:"0 28px 16px 28px"}},n.createElement(c.Z,{to:r},"string"==typeof t?n.createElement("em",null,t):t),"string"==typeof a?n.createElement("p",{style:{color:"#666666",fontSize:"13px"}},a):a),g=()=>n.createElement("div",{className:"card__body image",style:{display:"flex",alignItems:"flex-end"}},n.createElement(c.Z,{to:r},n.createElement(s.Z,{alt:m||t,sources:{light:o,dark:i}})));return n.createElement("div",{className:(0,l.Z)("card"),style:{flexDirection:u,height:"100%"}},n.createElement(p,null),n.createElement(g,null))}const m={slug:"/",title:"About Axon",sidebar_position:1,hide_title:!0,pagination_next:null,hide_table_of_contents:!0},u=void 0,p={unversionedId:"about-axon/index",id:"about-axon/index",title:"About Axon",description:"Axon Documentation",source:"@site/docs/about-axon/index.mdx",sourceDirName:"about-axon",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",title:"About Axon",sidebar_position:1,hide_title:!0,pagination_next:null,hide_table_of_contents:!0},sidebar:"tutorialSidebar"},g={},k=[{value:"Axon Documentation",id:"axon-documentation",level:3},{value:"Getting Started",id:"getting-started",level:4},{value:"Explore Axon",id:"explore-axon",level:4},{value:"Explore the stack",id:"explore-the-stack",level:4},{value:"Feedback &amp; Contribute",id:"feedback--contribute",level:4}],v={toc:k};function b(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"axon-documentation"},"Axon Documentation"),(0,r.kt)("p",null,"Axon is a scalable and interoperable Ethereum blockchain, built on Proof-of-Stake with fast-finality."),(0,r.kt)("h4",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Read all about Axon or dive straight into the code with guides."),(0,r.kt)("div",{className:"row developers-contributers"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)(d,{title:(0,r.kt)("strong",null,"Developers"),alt:"Developers",light:(0,a.Z)("/img/developers_light.svg"),dark:(0,a.Z)("/img/developers_dark.svg"),url:"#",description:(0,r.kt)("p",null,"Find key information about developing on Axon."),mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)(d,{title:(0,r.kt)("strong",null,"Contributers"),alt:"Contributers",light:(0,a.Z)("/img/contributers_light.svg"),dark:(0,a.Z)("/img/contributers_dark.svg"),url:"#",description:(0,r.kt)("p",null,"Everything you need to know as an Axon contributer."),mdxType:"ImageCard"}))),(0,r.kt)("h4",{id:"explore-axon"},"Explore Axon"),(0,r.kt)("p",null,"Get familiar with Axon and explore its main concepts."),(0,r.kt)("div",{className:"row explore-axon"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)(d,{title:"Introduction",light:(0,a.Z)("/img/introduction_light.svg"),dark:(0,a.Z)("/img/introduction_dark.svg"),url:"#",description:"Read a high-level over of Axon and its architecture",imagePosition:"right",mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)(d,{title:"Basics",light:(0,a.Z)("/img/basics_light.svg"),dark:(0,a.Z)("/img/basics_dark.svg"),url:"#",description:"Start with the basic concepts of Axon\uff0clike accounts and transactions",imagePosition:"right",mdxType:"ImageCard"}))),(0,r.kt)("h4",{id:"explore-the-stack"},"Explore the stack"),(0,r.kt)("p",null,"Check out the docs for the various parts of the Axon stack"),(0,r.kt)("div",{className:"row explore-the-stack"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Cosmos SDK",light:(0,a.Z)("/img/cosmos_light.svg"),dark:(0,a.Z)("/img/cosmos_dark.svg"),url:"#",description:"The SDK is the world\u2019s most popular framework for building application-specific blockchains.",imagePosition:"top",mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Ethereum",light:(0,a.Z)("/img/ethereum_light.svg"),dark:(0,a.Z)("/img/ethereum_dark.svg"),url:"#",description:"Ethereum is a global, open-source platform for decentralized applications.",imagePosition:"top",mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Tendermint Core",light:(0,a.Z)("/img/tendermint_light.svg"),dark:(0,a.Z)("/img/tendermint_dark.svg"),url:"#",description:"The leading BFT engine for building blockchains, powering Axon.",imagePosition:"top",mdxType:"ImageCard"}))),(0,r.kt)("h4",{id:"feedback--contribute"},"Feedback & Contribute"),(0,r.kt)("div",{className:"row feedback-contribute"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Community",light:(0,a.Z)("/img/community_light.svg"),dark:(0,a.Z)("/img/community_dark.svg"),url:"",description:"Under construction, please wait",imagePosition:"right",mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Feedback",light:(0,a.Z)("/img/feedback_light.svg"),dark:(0,a.Z)("/img/feedback_dark.svg"),url:"#",description:"Submit and view feedback for",imagePosition:"right",mdxType:"ImageCard"})),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)(d,{title:"Contribute",light:(0,a.Z)("/img/contribute_light.svg"),dark:(0,a.Z)("/img/contribute_dark.svg"),url:"#",description:"Submit request",imagePosition:"right",mdxType:"ImageCard"}))),(0,r.kt)("div",{className:"row text-link"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("span",null,"ECOSYSTEM DOCUMENTATION"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Cosmos SDK Docs"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Ethereum Docs"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Tendermint Core Docs")),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("span",null,"COMMUNITY"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Axon Discord Community"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Axon Commonwealth Forum")),(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("span",null,"Axon"),(0,r.kt)(c.Z,{to:"#",mdxType:"Link"},"Jobs at Axon"))))}b.isMDXComponent=!0}}]);