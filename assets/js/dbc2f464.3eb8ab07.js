(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9162],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9077:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l="Circuit Breakers and Guaranteed Delivery",u={unversionedId:"Operations/gdcb",id:"Operations/gdcb",isDocsHomePage:!1,title:"Circuit Breakers and Guaranteed Delivery",description:"With tremor 0.9 we introduced logic for Guaranteed Delivery (GD) and Circuit Breakers (CB) so it is",source:"@site/docs/Operations/gdcb.md",sourceDirName:"Operations",slug:"/Operations/gdcb",permalink:"/tremor-new-website/docs/Operations/gdcb",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/docs/Operations/gdcb.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuring Tremor",permalink:"/tremor-new-website/docs/Operations/configuration"},next:{title:"Linked Transports",permalink:"/tremor-new-website/docs/Operations/linked-transports"}},c=[{value:"pre 0.9",id:"pre-09",children:[]},{value:"0.9 CB",id:"09-cb",children:[]},{value:"0.9 GD",id:"09-gd",children:[]},{value:"Example",id:"example",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuit-breakers-and-guaranteed-delivery"},"Circuit Breakers and Guaranteed Delivery"),(0,i.kt)("p",null,"With tremor 0.9 we introduced logic for Guaranteed Delivery (GD) and Circuit Breakers (CB) so it is\nworth discussing this addition and what to expect from them. The features are complementary but have\ndifferent tradeoffs."),(0,i.kt)("p",null,"We start with looking at a short comparison."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"support"),(0,i.kt)("th",{parentName:"tr",align:null},"perf impact"),(0,i.kt)("th",{parentName:"tr",align:null},"guarantee"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pre 0.9"),(0,i.kt)("td",{parentName:"tr",align:null},"all sources & sinks"),(0,i.kt)("td",{parentName:"tr",align:null},"baseline"),(0,i.kt)("td",{parentName:"tr",align:null},"if we can")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.9 CB"),(0,i.kt)("td",{parentName:"tr",align:null},"most sources & sinks"),(0,i.kt)("td",{parentName:"tr",align:null},"virtually none"),(0,i.kt)("td",{parentName:"tr",align:null},"stop on known disconnect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.9 GD"),(0,i.kt)("td",{parentName:"tr",align:null},"select sources & sinks"),(0,i.kt)("td",{parentName:"tr",align:null},"significant"),(0,i.kt)("td",{parentName:"tr",align:null},"guaranteed where possible")))),(0,i.kt)("p",null,"Let's add some clarification to this:"),(0,i.kt)("h2",{id:"pre-09"},"pre 0.9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"guarantee: we send the data with a best effort to deliver it but have no control over\nmalfunctioning downstream systems.")),(0,i.kt)("h2",{id:"09-cb"},"0.9 CB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support: Where the underlying transport supports it we support stopping consumption, as\nan example UDP has no support of stopping ingestion."),(0,i.kt)("li",{parentName:"ul"},"perf impact: virtually none - there is a theoretical impact on this but it was small enough to be\nnot measurable in our test."),(0,i.kt)("li",{parentName:"ul"},"guarantee: If a sink sends a CB event the source will stop producing data, however\nany events send until them might be lost.")),(0,i.kt)("h2",{id:"09-gd"},"0.9 GD"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"support: Unless explicitly noted by sources / sinks notes differently there are no guarantees."),(0,i.kt)("li",{parentName:"ul"},"perf: As GD requires acknowledgments for delivered messages the impact of this is significant\ncompared to other methods."),(0,i.kt)("li",{parentName:"ul"},"guarantee: using GD will provide the minimum guarantee that the used sink and source offers.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To emphasize on those differences we'll go through an example of how those methods work together.\nWith the release we updated our integration tests, including the web-socket test. The test works\nby creating two tremor instances. One working as a producer, having a file source and a web-socket\nsink. The other being a consumer having a web-socket source and a file sink."),(0,i.kt)("p",null,"The test is supposed to validate that all the data that the producer sends arrives at the consumer.\nThere is an issue with that, since they are two different processes there is no guarantee the\nconsumer is ready by the time the producer starts sending data."),(0,i.kt)("p",null,"Web-sockets do support circuit breakers so the web-socket sink will report that its counterpart is\ndown and stop reading the file. However for the CB logic to trigger and propagate some time passes\nso we observed the first 3 messages being 'lost' before the circuit breakers could kick in."),(0,i.kt)("p",null,"This demonstrates the limitations of circuit breakers nicely, they do react to a bad sink but\nthe reaction isn't instantaneous so we risk loosing a few messages. To get around this we can use\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"qos::wal")," operator that provides a higher delivery guarantee then the web-socket offramp."),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"qos::wal")," operator we do get all the messages since the web-socket sink never acknowledges\nsending the message and it is considered failed. There is a caveat in this however, since\nweb-sockets are not fully GD aware we only get a GD error when the web-socket can not send the\nmessage. If we had an intermittent failure that drops a few messages the ",(0,i.kt)("inlineCode",{parentName:"p"},"qos::wal")," won't help as GD\ndoes only offer the weakest guarantee of the components involved - in this case the web-socket\nsink."))}d.isMDXComponent=!0}}]);