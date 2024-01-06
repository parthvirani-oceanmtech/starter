import{d as Y,u as V,r as $,o as j,_ as ee,a as te,b,c as L,n as ne,F as oe,e as w,f as E,g as O,w as J,T as D,t as ie,h as B,p as se,i as ae,j as W,k as re,l as de,m as z,q as M,s as U,v as Z,x as ce,y as F,z as le}from"./entry.MugomZ9O.js";import{q as ue,u as pe}from"./query.cq6o6Ipe.js";import"./preview.9aHDUwXW.js";const R=o=>(se("data-v-04d14510"),o=o(),ae(),o),fe=R(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),ve=R(()=>w("span",null,"Preview mode enabled",-1)),we={key:0},he=R(()=>w("div",{id:"__preview_background"},null,-1)),ye=R(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),me=R(()=>w("p",null,"Initializing the preview...",-1)),_e={key:0},ge=R(()=>w("div",{id:"__preview_background"},null,-1)),ke={id:"__preview_loader"},Ce=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const s=o,a=["__nuxt_preview","__preview_enabled"],u=W(),m=V(),d=$(!0),k=$(!1),i=$(!1),l=$("");let r;const y=async()=>{B("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await m.replace({query:{preview:void 0}}),window.location.reload()},q=async T=>{const h=await s.syncPreview(T);if(i.value!==!0){if(!h){setTimeout(()=>q(T),1e3);return}B("previewToken").value&&(i.value=!0,await m.replace({query:{}}),u.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&r.disconnect())}};return j(async()=>{r=(await ee(()=>import("./index.5Jz4PfUi.js"),__vite__mapDeps([]),import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let h;r.on("connect",()=>{h=setTimeout(()=>{i.value||(h=setTimeout(()=>{l.value="Preview sync timed out",i.value=!1},3e4),r.emit("draft:requestSync"))},3e4)});const I=()=>{h&&(clearTimeout(h),h=null)};r.on("draft:sync",async P=>{if(I(),!P){try{r.once("draft:ready",()=>{r.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(x){switch(I(),x.response.status){case 404:l.value="Preview draft not found",i.value=!1;break;default:l.value="An error occurred while syncing preview",i.value=!1}}return}q(P)}),r.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",i.value=!1}),r.on("disconnect",()=>{I()}),document.body.classList.add(...a),r.on("draft:update",P=>{k.value=!0,s.syncPreview(P),k.value=!1})}),te(()=>{document.body.classList.remove(...a)}),(T,h)=>(b(),L("div",null,[d.value?(b(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:i.value,__preview_refreshing:k.value})},[i.value?(b(),L(oe,{key:0},[fe,ve,w("button",{onClick:y}," Close ")],64)):E("",!0)],2)):E("",!0),O(D,{name:"preview-loading"},{default:J(()=>[d.value&&!i.value&&!l.value?(b(),L("div",we,[he,w("div",{id:"__preview_loader"},[ye,me,w("button",{onClick:y}," Cancel ")])])):E("",!0)]),_:1}),O(D,{name:"preview-loading"},{default:J(()=>[l.value?(b(),L("div",_e,[ge,w("div",ke,[w("p",null,ie(l.value),1),w("button",{onClick:y}," Exit preview ")])])):E("",!0)]),_:1})]))}}),Ie=re(Ce,[["__scopeId","data-v-04d14510"]]),Pe=(o=[],s,a)=>{const u=[...s||[]],m=[...a||[]],d=JSON.parse(JSON.stringify(o));for(const i of u)if(i.oldPath)if(m.splice(m.findIndex(r=>r.path===i.oldPath),1),u.find(r=>r.path===i.oldPath))d.push({path:i.path,parsed:i.parsed});else{const r=d.find(y=>y.path===i.oldPath);r&&(r.path=i.path,i.parsed?r.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(y=>{r.parsed[y]=i.pathMeta[y]}))}else if(i.new)d.push({path:i.path,parsed:i.parsed});else{const l=d.find(r=>r.path===i.path);l&&Object.assign(l,{path:i.path,parsed:i.parsed})}for(const i of m)d.splice(d.findIndex(l=>l.path===i.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return d.sort((i,l)=>k.compare(i.path,l.path)),d},g={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},Se=o=>{let s;return(...a)=>(s||(s=o()),s)};function G(o,s){for(const a in o){const u=s[a];a in s||delete o[a],u!==null&&typeof u=="object"&&G(o[a],s[a])}}function Q(o,s){for(const a in s){const u=s[a];u!==null&&typeof u=="object"?Array.isArray(u)&&Array.isArray(o[a])?o[a]=u:(o[a]=o[a]||{},Q(o[a],u)):o[a]=u}}const Te=Se(()=>JSON.parse(JSON.stringify(Z()))),H=le((o,s,a)=>{if(Array.isArray(o[s])&&Array.isArray(a))return o[s]=a,!0}),Le=()=>{const o=W(),{studio:s,content:a}=de().public,u=Te();let m;const d=z("studio-client-db",()=>null),k=z("studio-preview-db-files",()=>[]);d.value||(o.hook("content:storage",e=>{d.value=e}),ue("/non-existing-path").findOne());const i=async(e,t,c=!0)=>{const f=window.sessionStorage.getItem("previewToken"),v=await e.getKeys(`${f}:`);await Promise.all(v.map(p=>e.removeItem(p)));const n=new Set(t.map(p=>p.parsed._id.split(":").shift()));await e.setItem(`${f}$`,JSON.stringify({ignoreSources:Array.from(n)})),await Promise.all(t.map(p=>e.setItem(`${f}:${p.parsed._id}`,JSON.stringify(p.parsed))))},l=e=>{const t=U(o,Z);t!=null&&t.ui&&(t.ui.icons={...t.ui.icons,dynamic:!0}),Q(t,H(e,u)),e||G(t,u)},r=e=>{var c,f,v,n;const t=(n=(v=(f=(c=o==null?void 0:o.vueApp)==null?void 0:c._context)==null?void 0:f.config)==null?void 0:v.globalProperties)==null?void 0:n.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(m||(m=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),U(o,t.updateTheme,[H(e,m)]))},y=async e=>{if(k.value=e.files=e.files||k.value||[],!d.value)return!1;const t=Pe(e.files,e.additions,e.deletions),c=t.filter(n=>![g.appConfig,g.nuxtConfig,g.tokensConfig].includes(n.path));await i(d.value,c,(e.files||[]).length!==0);const f=t.find(n=>n.path===g.appConfig);l(f==null?void 0:f.parsed);const v=t.find(n=>n.path===g.tokensConfig);return r(v==null?void 0:v.parsed),x(),!0},q=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:e}})},T=()=>{const e=window.sessionStorage.getItem("previewToken"),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),ce(Ie,{previewToken:e,apiURL:s==null?void 0:s.apiURL,syncPreview:y,requestPreviewSyncAPI:q}).mount(t)},h=async e=>{var f,v,n;const t=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let c=await((f=d.value)==null?void 0:f.getItem(`${t}:${e}`));return c||(c=await((v=d.value)==null?void 0:v.getItem(`cached:${e}`))),c||(c=c=await((n=d.value)==null?void 0:n.getItem(e))),c},I=e=>{var c;const t=window.sessionStorage.getItem("previewToken");d.value&&d.value.setItem(`${t}:${(c=e.parsed)==null?void 0:c._id}`,JSON.stringify(e.parsed))},P=async e=>{var c;const t=window.sessionStorage.getItem("previewToken");await((c=d.value)==null?void 0:c.removeItem(`${t}:${e}`))},x=async()=>{if(a!=null&&a.documentDriven){const{pages:e}=U(o,pe);for(const t in e.value)e.value[t]&&(e.value[t]=await h(e.value[t]._id))}await o.hooks.callHookParallel("app:data:refresh")};return{apiURL:s==null?void 0:s.apiURL,contentStorage:d,syncPreviewFiles:i,syncPreviewAppConfig:l,syncPreviewTokensConfig:r,requestPreviewSynchronization:q,findContentWithId:h,updateContent:I,removeContentWithId:P,requestRerender:x,mountPreviewUI:T,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=V(),t=M(),c=$(""),f=n=>({path:n.path,query:F(n.query),params:F(n.params),fullPath:n.fullPath,meta:F(n.meta)});window.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey||n.altKey||n.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:n.key,metaKey:n.metaKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,altKey:n.altKey}},"*")}),window.addEventListener("message",async n=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(n.origin))return;const{type:p,payload:A={}}=n.data||{};switch(p){case"nuxt-studio:editor:file-selected":{const _=await h(A.path);_&&(_._partial||_._path!==M().path&&(c.value=_._path,e.push(_._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:_=[],deletions:N=[]}=A;for(const C of _)await I(C);for(const C of N)await P(C.path);x();break}case"nuxt-studio:preview:sync":{y(A);break}case"nuxt-studio:config:file-changed":{const{additions:_=[],deletions:N=[]}=A,C=_.find(S=>S.path===g.appConfig);C&&l(C==null?void 0:C.parsed),N.find(S=>S.path===g.appConfig)&&l(void 0);const K=_.find(S=>S.path===g.tokensConfig);K&&r(K==null?void 0:K.parsed),N.find(S=>S.path===g.tokensConfig)&&r(void 0);break}}}),o.hook("page:finish",()=>{v(),o.payload.prerenderedAt&&x()}),o.hook("content:document-driven:finish",({route:n,page:p})=>{n.meta.studio_page_contentId=p==null?void 0:p._id}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:f(M())},"*"),setTimeout(()=>{v()},100)});function v(){const n=Array.from(window.document.querySelectorAll("[data-content-id]")).map(A=>A.getAttribute("data-content-id")),p=Array.from(new Set([t.meta.studio_page_contentId,...n])).filter(Boolean);if(c.value===p[0]){c.value="";return}window.openContentInStudioEditor(p,{navigate:!0,pageContentId:t.meta.studio_page_contentId})}window.openContentInStudioEditor=(n,p={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...f(t),contentIds:n,...p}},"*")}}};export{Le as useStudio};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
