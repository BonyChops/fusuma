(()=>{"use strict";var e,t,r,a,n,o,d={},c={};function i(e){if(c[e])return c[e].exports;var t=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=d,i.x=e=>{},i.amdO={},i.F={},i.E=e=>{Object.keys(i.F).map((t=>{i.F[t](e)}))},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"==typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"==typeof r.then)return r}var n=Object.create(null);i.r(n);var o={};e=e||[null,t({}),t([]),t(t)];for(var d=2&a&&r;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,i.d(n,o),n},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"."+{104:"2c37de4c086d1877b0a5",332:"adc5c3de7a7d6b8a910d",399:"c1de6cb60c688ce95415",426:"cb886d130848f246c343",623:"30b39274a3244c4caead",640:"d949b8b3a1cacefef938",708:"f51faa4cd48ff13245fb",833:"b8628c406caf7d3cc88c",860:"9407419a135f4b890c3a",883:"172df6daf2ba28d073f9",909:"3dbf545fb071d72eaafd"}[e]+".bundle.js",i.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"a1945be196aaa1277683",332:"adc5c3de7a7d6b8a910d",623:"30b39274a3244c4caead",640:"d949b8b3a1cacefef938",708:"f51faa4cd48ff13245fb",736:"0e9542ce8e7e846076ae",833:"b8628c406caf7d3cc88c",909:"3dbf545fb071d72eaafd"}[e]+".css"),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="plain:",i.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var d,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var u=l[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+n){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",a+n),d.src=e),r[e]=[t];var s=(t,a)=>{d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),t)return t(a)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),c&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="",n=e=>new Promise(((t,r)=>{var a=i.miniCssF(e),n=i.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var d;if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var d=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=c,n.parentNode.removeChild(n),a(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),o={666:0},i.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{332:1,623:1,640:1,708:1,833:1,909:1}[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0},t=[];i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise(((r,n)=>{a=e[t]=[r,n]}));r.push(a[2]=n);var o=i.p+i.u(t),d=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+t,t)}},i.F.j=t=>{if(!i.o(e,t)||void 0===e[t]){e[t]=null;var r=document.createElement("link");i.nc&&r.setAttribute("nonce",i.nc),r.rel="prefetch",r.as="script",r.href=i.p+i.u(t),document.head.appendChild(r)}};var r=e=>{},a=(a,n)=>{for(var o,d,[c,l,f,u]=n,s=0,p=[];s<c.length;s++)d=c[s],i.o(e,d)&&e[d]&&p.push(e[d][0]),e[d]=0;for(o in l)i.o(l,o)&&(i.m[o]=l[o]);for(f&&f(i),a&&a(n);p.length;)p.shift()();return u&&t.push.apply(t,u),r()},n=self.webpackChunkplain=self.webpackChunkplain||[];function o(){for(var r,a=0;a<t.length;a++){for(var n=t[a],o=!0,d=1;d<n.length;d++){var c=n[d];0!==e[c]&&(o=!1)}o&&(t.splice(a--,1),r=i(i.s=n[0]))}return 0===t.length&&(i.x(),i.x=e=>{}),r}n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n));var d=i.x;i.x=()=>(i.x=d||(e=>{}),(r=o)())})(),i.x()})();