(this.$WP=this.$WP||[]).push(["pLbCP4",(e,t)=>{"use strict";var r,n,a,l,u,o,s,d,i=e=>{var t=e(),r=l.get(t);if(r)return r;var n=new Promise((e,r)=>{function n(){this.readyState&&"complete"!==this.readyState||e(!0)}t.onload=n,t.onreadystatechange=n,t.onerror=r,t.onabort=r});return l.set(t,n),n},c=(e,t)=>i(()=>((e,t)=>{var r=document.createElement("link");return r.rel="stylesheet",r.href=e,r.type="text/css",t&&r.setAttribute("data-owner",t),document.head&&document.head.appendChild(r),r})(e,t)),p=(e,t)=>i(()=>{var r=a.get(e);if(r)return r;var n=((e,t)=>{var r=document.createElement("script");return r.type="text/javascript",r.src=e,r.async=!0,t&&r.setAttribute("data-owner",t),document.head&&document.head.appendChild(r),r})(e,t);return a.set(e,n),n}),h=e=>"undefined"==typeof $WP?null:$WP.yieldImport(e),f=e=>$WP.require(e),m=(e,t,a,l=null,u)=>{var o=null,i=!1,c=r=>{if(!i&&e){i=!0;var n=h(t),l=null!==n&&r.has(n);o=null!==n&&l?f(n):null}return o&&o[a]?o[a]:null},p=r.forwardRef((e,u)=>{var{children:o}=e,s=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children"]),i=r.useContext(d),[h,f]=r.useState(()=>c(i));return r.useEffect(()=>{var e=!0;return null===h&&t().then(t=>{e&&(t[a],p.stage=t[a].stage,p.load=t[a].load,"function"==typeof t[a].load&&t[a].load(),f(()=>t[a]))}),()=>{e=!1}},[h]),null===h?l&&!n(l)&&"string"!=typeof l?r.createElement(l,s,o):l:r.createElement(h,Object.assign({},s,{ref:u}),o)});return p.stage=(e,t,r)=>{var n=c(s);n&&n.stage&&n.stage(e,t,r)},p.load=e=>{var t=c(s);t&&t.load&&t.load(e)},p},v=(e,t,r)=>m(!0,e,t,r),g=e=>{var t=h(e);return null!==t&&s.has(t)?f(t):null};return[()=>{a=new Map,l=new WeakMap,s=new Set((null==(u=globalThis.__WEB_CONTEXT__)||null==(o=u.pageManifest)?void 0:o.lazyLoadedModules)||[]),d=r.createContext(new Set(s)),v.onUsage=(e,t,r)=>m(!0,e,t,r),v.onTrigger=(e,t,r)=>{var n=null,a=new Promise(e=>{n=e});return[()=>{e().then(e=>n(e))},m(!1,()=>a,t,r)]},e({Preloads:d,component:v,importCss:c,importScript:p,preloaded:s,weak:g})},[e=>r=e,e=>n=e.isElement]]},["cDcdfi","UWCmG6"]]);
