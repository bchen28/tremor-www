(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[957],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3929:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={},l="Security",c={unversionedId:"policies/security",id:"policies/security",isDocsHomePage:!1,title:"Security",description:"The tremor project follows strict coding practices that help to reduce the incidence,",source:"@site/docs/policies/security.md",sourceDirName:"policies",slug:"/policies/security",permalink:"/tremor-new-website/docs/policies/security",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/docs/policies/security.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/tremor-new-website/docs/overview"},next:{title:"Extractors",permalink:"/tremor-new-website/docs/tremor-script/extractors"}},u=[{value:"Public keys for disclosures",id:"public-keys-for-disclosures",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("p",null,"The tremor project follows strict coding practices that help to reduce the incidence,\nsurface and likelihood of direct or indirect security risks to users of the software."),(0,i.kt)("p",null,"Specifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tremor favors safe over unsafe rust code.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Safe code is generally considered the better option"),(0,i.kt)("li",{parentName:"ul"},"Unless, performance critical concerns on the hot path suggest otherwise"),(0,i.kt)("li",{parentName:"ul"},"Over time, unsafe code should be displaced with safe code"))),(0,i.kt)("li",{parentName:"ul"},"Tremor is careful on matters of code health.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Clippy is pedantic mode is mandated for all rust code"),(0,i.kt)("li",{parentName:"ul"},"Property based testing, model-based testing and fuzz-testing are used"),(0,i.kt)("li",{parentName:"ul"},"Additional audits for code quality are in force"))),(0,i.kt)("li",{parentName:"ul"},"Static analysis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tremor analyses external library dependencies for all direct and indirect dependencies"),(0,i.kt)("li",{parentName:"ul"},"Tremor logs and reports all LICENSE, CVE and other violations both in our CI code and using other tools"),(0,i.kt)("li",{parentName:"ul"},"Additional dynamic and static analysis methods can be added to broaden/deepen coverage")))),(0,i.kt)("h1",{id:"non-recommendation"},"Non Recommendation"),(0,i.kt)("p",null,"We do ",(0,i.kt)("em",{parentName:"p"},"not")," recommend running tremor outside of corporate firewalls at this time."),(0,i.kt)("p",null,"Although every care is taken to ensure there are no security flaws within the code-base\ntremor, to date, has been designed with deployment in secure, well-defended environments\nwith active intrusion detection and defenses run by security professionals."),(0,i.kt)("h1",{id:"recommendation"},"Recommendation"),(0,i.kt)("p",null,"We do recommend running tremor in secured environments following the best practices of\nthe organization and deployment platform. For example, the security blueprints for deploying\nsecure services to Amazon's infrastructure should be followed when deploying to AWS. The\nsecurity blueprints for the Google Cloud Platform should be followed when deploying to GCP."),(0,i.kt)("p",null,"Where tremor is deployed into bespoke bare metal data centers, tremor should be treated as\nsoftware that is not secure in and of itself. A secured environment should be provided for\nit to run within."),(0,i.kt)("h1",{id:"future"},"Future"),(0,i.kt)("p",null,"Contributions to tremor security are very welcome, highly encouraged and we would be\ndelighted to accept contributions that move our security roadmap priority."),(0,i.kt)("h1",{id:"disclosing-security-issues"},"Disclosing Security Issues"),(0,i.kt)("p",null,"Safety is a core principle of Tremor, and one of the prime reasons why we adopted the\nRust Programming language to write Tremor. To that end, we would like to ensure that\nTremor has a secure implementation with no inherent security issues."),(0,i.kt)("p",null,"Thank you for taking the time to responsibly disclose any issues you find."),(0,i.kt)("p",null,"All security bugs in the tremor project should be reported by email to ",(0,i.kt)("a",{href:"mailto:opensource@wayfair.com"},(0,i.kt)("a",{parentName:"p",href:"mailto:opensource@wayfair.com"},"opensource@wayfair.com")),". This list is delivered to a small team. Your email will be acknowledged within 24 hours, and you\u2019ll receive a more detailed response to your email within 48 hours indicating the next steps in handling your report."),(0,i.kt)("p",null,"If you would like, you can encrypt your report using a public key. This key can be requested from the security\nteam via direct email, or through contacting us on our slack community and requesting same."),(0,i.kt)("p",null,"Be sure to use a descriptive subject line in email to avoid having your report missed. After the initial reply\nto your report, the security team will endeavor to keep you informed of the progress being made towards a fix\nand full announcement."),(0,i.kt)("h2",{id:"public-keys-for-disclosures"},"Public keys for disclosures"),(0,i.kt)("p",null,"If you have not received a reply to your email within 48 hours, or have not heard from the security team for the past five days, there are a few steps you can take (in order):"),(0,i.kt)("p",null,"Contact the current security coordinator (Darach Ennis) directly ",(0,i.kt)("a",{parentName:"p",href:"https://pgp.mit.edu/pks/lookup?op=get&search=0x962FAC01B6989EBB"},"PGP key"),".\nContact the back-up contact (Heinz Gies) directly ",(0,i.kt)("a",{parentName:"p",href:"https://keys.openpgp.org/vks/v1/by-fingerprint/71C9D7794FCEAC9D77AC4F6FE21BB9BD3F38481E"},"PGP key"),"."),(0,i.kt)("p",null,"Post a friendly reminder on the community slack."),(0,i.kt)("p",null,"Please note that discussion forums are public areas. When escalating in these venues, please do not\ndiscuss your issue. Say that you\u2019re trying to get a hold of someone from the security team."))}p.isMDXComponent=!0}}]);