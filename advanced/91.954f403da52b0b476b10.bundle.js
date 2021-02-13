(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[91],{91:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>M});var a=n(5032),s=n(4427),r=n.n(s),i=n(2511),o=n(5716),l=n(1970);const c={currentIndex:0},d=(0,a.createContext)(c),m=(e,t)=>(t.type,e),u=({children:e})=>{const[t,n]=(0,a.useReducer)(m,c);return a.createElement(d.Provider,{value:{state:t,dispatch:n}},e)};class h{constructor(){this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}openView(){return new Promise(((e,t)=>{"presentation"===this.apiType?(this.presentationRequest=new PresentationRequest([this.receiverQuery]),navigator.presentation.defaultRequest=this.presentationRequest,this.presentationRequest.addEventListener("connectionavailable",(t=>{this.presentationConnection=t.connection,e(t.connection.id)})),this.presentationRequest.start().catch((e=>t(e)))):(this.windowId=window.open(this.receiverQuery,"_blank","width=800,height=600"),e())}))}changePage(e){const t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}async reconnect(e){return"presentation"===this.apiType?this.presentationRequest.reconnect(e):Promise.resolve()}terminate(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}var p=n(9547);let v=["#444","#3498db","#ff874d","#67a2a0"],E=null,f=null;const g=(0,a.memo)((({toolbar:e,disabled:t,hideGrid:n})=>{const s=(0,a.useRef)(),[r,l]=(0,a.useState)(v[0]),c=()=>{window.localStorage.setItem("fusumaCanvasCoordinate",s.current.getSaveData())},d=()=>{const e=window.localStorage.getItem("fusumaCanvasCoordinate");E!==e&&(s.current.loadSaveData(e,!0),E=e)};return(0,a.useEffect)((()=>(f=e?setInterval(c,1e3):setInterval(d,1e3),()=>{f&&clearInterval(f)})),[]),a.createElement(a.Fragment,null,e&&a.createElement("div",{className:"fusuma-canvas-toolbar"},a.createElement(o.ZkW,{onClick:()=>{s.current.clear()},size:"32"}),a.createElement(i.wXW,{onClick:()=>{s.current.undo()}}),a.createElement("div",{style:{background:r},onClick:()=>{v=v.concat(v.splice(0,1)),l(v[0])},className:"fusuma-canvas-toolbar-color"})),a.createElement(p.Z,{ref:s,className:"fusuma-canvas",canvasWidth:"100%",canvasHeight:"100%",loadTimeOffset:0,brushColor:r,disabled:t,hideGrid:n,lazyRadius:0,brushRadius:8}))}));function w(e){window.localStorage.setItem("fusumaCanvasEvent",JSON.stringify(e))}function b(e){const t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0");return`${Math.floor(e/36e5%24).toString().padStart(2,"0")}:${n}:${t}`}let R=0,S=null;const y=(0,a.memo)((({start:e,stop:t,reset:n,disabledStart:s,disabledStop:r,disabledReset:o})=>{const[l,c]=(0,a.useState)(!0),[d,m]=(0,a.useState)("00:00:00");return(0,a.useEffect)((()=>()=>{S&&clearInterval(S)}),[]),a.createElement("div",{className:"host-timer"},a.createElement(i.xrw,{onClick:()=>{S&&t(),R=0,m("00:00:00"),n()},className:o?"disabled":void 0}),l?a.createElement(i.gmG,{onClick:()=>{S=setInterval((()=>(R+=1e3,void m(b(R)))),1e3),c(!1),e()},className:s?"disabled":void 0}):a.createElement(i.JuG,{onClick:()=>{clearInterval(S),c(!0),S=null,t()},className:r?"disabled":void 0}),a.createElement("span",null,d))}));var C=n(3749);const N=({items:e,url:t})=>{const n=(0,a.useRef)();return(0,a.useEffect)((()=>{if(n.current){const t=n.current,a=async()=>new Promise((e=>{t.addEventListener("loadedmetadata",(()=>{if(t.duration===1/0){t.currentTime=Number.MAX_SAFE_INTEGER;const n=()=>{t.currentTime=0,t.removeEventListener("timeupdate",n),e()};t.addEventListener("timeupdate",n)}}))})),s=document.querySelectorAll(".ReactModalPortal section > div");a();{let e=!1;t.addEventListener("playing",(()=>{e||(t.currentTime=0,e=!0)}))}t.addEventListener("timeupdate",(()=>{const n=(t=>{let n=0;for(let a=0;a<e.length;a++){const{time:s}=e[a];if(t<=s){n=a;break}}return n})(1e3*t.currentTime);s[n].scrollIntoView()}))}}),[]),a.createElement("div",{className:"host-timeline-container"},t&&a.createElement("div",{className:"host-timeline-audio"},a.createElement("audio",{src:t,controls:!0,ref:n})),a.createElement("div",{className:"host-timeline-body"},a.createElement(C.TY,null,e.map((({title:e,time:t,timeStr:n,Slide:s,color:r,Icon:i})=>a.createElement(C.BJ,{key:t,title:e,createdAt:n,iconColor:r,icon:i},s&&a.createElement(s,null)))))))};var I=n(9134);r().setAppElement("#root");const k=({slideUrl:e,slideIndex:t})=>a.createElement("iframe",{src:`${e.replace(/slide-(\d?)/,`slide-${t}`)}`,width:"100%",height:"100%"});let T=null,P=null,L=null,$=[],x=0,q=null;const D=()=>{const{state:{slides:e,currentIndex:t},dispatch:n}=(0,l.re)(),{dispatch:s}=(0,a.useContext)(d),c=(0,a.useRef)(t);if(!L){const{origin:e,pathname:t}=new URL(window.location);P=`${e}${t}?sidebar=false&reference=false#slide-`,L=new h}const[m,u]=(0,a.useState)("prepare"),[p,v]=(0,a.useState)(!1),[E,f]=(0,a.useState)(!1),[R,S]=(0,a.useState)(!0),[C,D]=(0,a.useState)(!1),M=()=>{try{L&&(L.terminate(),L=null)}catch(e){console.error(e)}finally{n((0,l.PM)("common"))}},O=()=>{0===$.length&&(x=(new Date).getTime());const n=0===$.length?0:(new Date).getTime()-x;$.push({slideNum:t+1,time:n,timeStr:b(n),event:"started",title:`Started from the ${t+1} slide.`,Slide:e[t].slide,color:"#6fba1c",Icon:a.createElement(i.qL$,null)}),p&&(T.startRecording(),q=null),S(!1),u("start")},U=()=>{T&&(T.disposeRecording(),T=null),v(!1)};return(0,a.useEffect)((()=>{n((0,l.oA)()),(async()=>{try{if(!L)throw new Error("Not found PresenterController.");await L.openView()}catch(e){console.error(e)}})();const e=({key:e})=>{"ArrowLeft"===e?(n((0,l.$L)("-")),L.changePage("-")):"ArrowRight"===e&&(n((0,l.$L)("+")),L.changePage("+"))};return document.addEventListener("keydown",e,!1),()=>{L&&M(),U(),document.removeEventListener("keydown",e)}}),[]),(0,a.useEffect)((()=>{c.current=t,L.changePage(t)}),[t]),a.createElement("div",{className:"host-container"},a.createElement(r(),{isOpen:E,onRequestClose:()=>f(!1)},a.createElement(N,{items:$,url:q})),a.createElement("div",{className:"host-left-box"},a.createElement("div",{className:"host-note"},e&&a.createElement("pre",{dangerouslySetInnerHTML:{__html:e[t].fusumaProps.note}}))),a.createElement("div",{className:"host-right-box"},a.createElement("div",{className:"host-slide-layer"},a.createElement("h2",null,"Current"),a.createElement(o.e$R,{size:28,onClick:()=>{D(!0),w({status:"start"})}}),a.createElement(k,{slideUrl:P,slideIndex:t+1})),a.createElement(r(),{isOpen:C,onRequestClose:()=>{D(!1),w({status:"stop"})}},C&&a.createElement("div",{className:"host-slide-canvas"},a.createElement(g,{toolbar:!0,hideGrid:!0}),a.createElement(k,{slideUrl:P,slideIndex:t+1}))),a.createElement("div",{className:"host-slide-layer"},a.createElement("h2",null,"Next"),a.createElement(k,{slideUrl:P,slideIndex:t+2}))),a.createElement("div",{className:"host-bottom-box"},a.createElement(i.aHS,{onClick:M,className:"terminate-button"}),a.createElement("div",{className:"host-bottom-box-info"},a.createElement(y,{start:O,stop:async()=>{const e=(new Date).getTime()-x;$.push({slideNum:t+1,time:e,timeStr:b(e),event:"stopped",title:`Stopped at the ${t+1} slide.`,color:"#e9546b",Icon:a.createElement(i.IkZ,null)}),p&&(q=await T.stopRecording()),u("stop")},reset:()=>{q=null,$=[],x=0,u("prepare"),S(!0)},disabledStart:"stop"===m&&p&&!O.isEmptyRecordedTimeline,disabledStop:"stop"===m&&p&&!O.isEmptyRecordedTimeline,disabledReset:"start"===m&&p}),a.createElement("span",{className:"current-slide-num"},`${t+1}`.padStart(2,"0")," / ",`${e.length}`.padStart(2,"0")),a.createElement(i.ceS,{onClick:()=>f(!0),size:18,className:"start"===m&&p||R?"disabled":void 0}),p?a.createElement(i.kOf,{onClick:U,className:"start"!==m&&R?void 0:"disabled",size:20,color:"#6fba1c"}):a.createElement(i.WzD,{onClick:()=>{if(!T)try{T=new I.u,T.setupRecording(),v(!0)}catch(e){alert(e)}},className:"start"!==m&&R?void 0:"disabled",size:20}))))},M=(0,a.memo)((()=>a.createElement(u,null,a.createElement(D,null))))},9134:(e,t,n)=>{"use strict";n.d(t,{u:()=>a});class a{constructor(){if(!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}setupRecording(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handlerRecording)}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}async startCapturing(e){let t=null;try{t=await navigator.mediaDevices.getDisplayMedia(e)}catch(e){console.error(e)}return t}stopCapturing(e){e.srcObject.getTracks().forEach((e=>e.stop())),e.srcObject=null}}}}]);