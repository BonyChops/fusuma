(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[179],{5292:(e,t,n)=>{"use strict";n.d(t,{X:()=>b});var s=n(5032),a=n(3606),r=n.n(a),o=n(7077),i=n(8870),l=n(1447),p=n(3355),c=n(7257),u=n(9644),d=n(8296),m=n(8850);const h=[o.Z,i.Z,l.Z];(0,m.Q)().has("pagination")?"false"!==(0,m.Q)().get("pagination")&&(h.push(p.Z),n.e(652).then(n.bind(n,4652))):(h.push(p.Z),n.e(652).then(n.bind(n,4652))),c.Z.use(h);const g=({slides:e,onChangeSlideIndex:t})=>s.createElement(u.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,keyboard:{enabled:!0},hashNavigation:{watchState:!0},pagination:{type:"bullets",clickable:!0},onSlideChange:({realIndex:e})=>t(e)},e.map((({slide:e,fusumaProps:{classes:t,sectionTitle:n,background:a}},o)=>s.createElement(d.o,{key:o,className:r()(t,n?"section-title":void 0),"data-hash":`slide-${o+1}`},a&&s.createElement("div",{className:"slide-background",style:a}),s.createElement("div",{className:"slide-internal-box"},s.createElement(e,null))))));var f=n(6552),k=n.n(f);n(5791),n(2101),n(8262);setTimeout(k().highlightAll);const b=(0,s.memo)((({slides:e,onChangeSlideIndex:t,hash:a})=>{const[r]=function(){const[e,t]=(0,s.useState)(null);return[e]}();return(0,s.useEffect)((()=>{e.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){n.e(868).then(n.bind(n,4868));const{createContext:e,runInNewContext:t}=await n.e(104).then(n.t.bind(n,3104,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((n=>{n.addEventListener("click",(n=>{const s=n.target.nextSibling;"none"===s.style.display&&(s.style.display="block");const a=e({console:{log:(...e)=>{const t=document.createElement("p");t.innerText=`- ${e.join(" ")}`,s.appendChild(t)}}});t(n.target.dataset.value,a)}))}))}()}),[]),s.createElement(g,{slides:e,onChangeSlideIndex:t})}),((e,t)=>e.hash===t.hash))},1764:(e,t,n)=>{"use strict";var s=n(5032),a=n(4998);var r=n(5716);function o(){const[e,t]=(0,s.useState)(function(){const e=new URL(window.location.href).hash.match(/^#slide=(.+?)$/);return null!==e?e[1]-1:0}());return(0,s.useEffect)((()=>{t(e)}),[t]),[e,t]}function i(){const[e,t]=(0,s.useState)(location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common");return(0,s.useEffect)((()=>{t(e)}),[t]),[e,t]}const l=({list:e})=>()=>s.createElement("div",{className:"toc"},s.createElement("ol",null,e.map((({index:e,title:t})=>s.createElement("li",{key:t},s.createElement("a",{href:`#slide-${e}`,title:t},s.createElement("span",{className:"chapter"},t)))))));function p({originalSlides:e,hash:t,currentIndex:n}){return(0,s.useMemo)((()=>function(e){const t=[],n=[],s=[],a={};return e.forEach((({slides:e,fusumaProps:a,backgrounds:r})=>{t.push(...e),n.push(...a),s.push(...r)})),n.reduce(((e,{sectionTitle:t},n)=>(t&&e.push({title:t,index:n+1}),e)),a.contentsList=[]),a.slides=t.map(((e,t)=>{const r=n[t],o=0===s[t]?null:s[t].includes("/")?{backgroundImage:`url('${s[t]}')`}:{backgroundColor:s[t]};return r.classes&&(r.classes=Array.isArray(r.classes)?r.classes[0].split(","):r.classes.split(",")),{slide:r.contents?l({list:a.contentsList}):e,fusumaProps:{...r,background:o}}})),a}(e)),[t])}var c=n(5292);var u=n(8850);const d=({slides:e,hash:t})=>{const[a,l]=(0,s.useState)(!1),[d,m]=o(),{slides:h,contentsList:g}=p({originalSlides:e,hash:t,currentIndex:d}),[f,k]=i(),b=function(e){const[t,a]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{if("common"===e)a(c.X);else if("view"===e){const{default:e}=await n.e(103).then(n.bind(n,5103));a(e)}else if("host"===e){const{default:e}=await Promise.all([n.e(426),n.e(399),n.e(490)]).then(n.bind(n,2490));a(e)}else a(null)})()}),[e]),t}(f),v=function(e){const[t,a]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{if("common"===e){if("false"!==(0,u.Q)().get("sidebar")){const{Sidebar:e}=await Promise.all([n.e(426),n.e(860),n.e(925)]).then(n.bind(n,3925));a(e)}}else a(null)})()}),[e]),t}(f),w=e=>{let t=e;const{swiper:n}=document.querySelector(".swiper-container"),{realIndex:s}=n;"+"===e?t=Math.min(s+1,h.length):"-"===e&&(t=Math.max(s-1,0)),n?.slideTo(t),m(t)},N=e=>{l(!1),k("start"===e?"host":"common")};return(0,s.useEffect)((()=>{window.innerWidth<=768&&function(e){let t=null,n=null;document.addEventListener("touchstart",(e=>{const{clientX:s,clientY:a}=e.touches[0];t=s,n=a}),!1),document.addEventListener("touchmove",(s=>{if(!t||!n)return;const a=s.touches[0];let r=t-a.clientX,o=n-a.clientY;Math.abs(r)>Math.abs(o)&&e(r>0?"+":"-"),t=null,n=null}),!1)}(w)}),[]),s.createElement(s.Fragment,null,v&&s.createElement(s.Fragment,null,s.createElement(v,{goTo:w,isOpen:a,totalSlides:h.length,terminate:()=>N("terminate"),contents:g,onStateChange:({isOpen:e})=>l(e),currentIndex:d,runPresentationMode:()=>N("start")}),s.createElement(r.xXU,{className:"btn-sidebar",onClick:()=>l(!0)})),b&&s.createElement(b,{hash:t,slides:h,isJumpPage:0!==d,terminate:()=>N("terminate"),currentIndex:d,onChangeSlideIndex:m}))};var m,h;!function(e=[],t=0){(0,a.hydrate)(s.createElement(d,{slides:e,hash:t}),document.getElementById("root"))}((m=n(3447),{id:(h=m).id,slides:h.keys().sort().map((e=>h(e)))}).slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},3179:(e,t,n)=>{if("/Users/hiroppy/Programming/fusuma/samples/themes/style.css".match(/\+*.css$/i))try{n(5031)}catch(e){console.error(e)}},8850:(e,t,n)=>{"use strict";function s(){return new URL(window.location.href).searchParams}n.d(t,{Q:()=>s})},6964:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>o,backgrounds:()=>i,fusumaProps:()=>l,default:()=>c});var s=n(5032),a=n(3077);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const o=[e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h1",null,"Themes 🧏‍♀️")),e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h2",null,"default"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma"},"https://hiroppy.github.io/fusuma"))),e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h2",null,"pop"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    plugins: []\n    theme: default\n"))),(0,a.kt)("div",{className:"column left"},(0,a.kt)("p",null,"Fusuma is an open-source, created by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/about_hiroppy"},"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/"},"Fusuma"))))),e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h2",null,"webpack"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n"))),(0,a.kt)("div",{className:"column left"},(0,a.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webpack"},"wikipedia/webpack"))))),e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h2",null,"babel"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"https://babeljs.io/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"))),(0,a.kt)("div",{className:"column left"},(0,a.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"},"wikipedia/Babel (transcompiler)"))))),e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("h2",null,"node"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"column"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n"))),(0,a.kt)("div",{className:"column left"},(0,a.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"wikipedia/Node.js")))))],i=[0,0,0,0,0,0],l=[{},{},{classes:"pop"},{classes:"webpack"},{classes:"babel"},{classes:"node"}],p={};function c({components:e,...t}){return(0,a.kt)("wrapper",r({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Themes 🧏‍♀️"),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"default"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma"},"https://hiroppy.github.io/fusuma")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"pop"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    plugins: []\n    theme: default\n")),(0,a.kt)("p",null,"Fusuma is an open-source, created by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/about_hiroppy"},"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/"},"Fusuma")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"webpack"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n")),(0,a.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webpack"},"wikipedia/webpack")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"babel"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"https://babeljs.io/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,a.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"},"wikipedia/Babel (transcompiler)")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"node"),(0,a.kt)("p",null,"site: ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),(0,a.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"wikipedia/Node.js")))}c.isMDXComponent=!0},5031:(e,t,n)=>{"use strict";n.r(t)},3447:(e,t,n)=>{var s={"./slides.mdx":6964};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=3447}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[426,860,925].map(e.E),n}},[[757,666,736],[1764,666,736],[3179,666,736]]]);