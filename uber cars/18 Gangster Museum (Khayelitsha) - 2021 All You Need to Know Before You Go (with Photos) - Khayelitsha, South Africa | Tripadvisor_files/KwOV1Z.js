(this.$WP=this.$WP||[]).push(["KwOV1Z",(e,t)=>{"use strict";var r,i,n,a,l,c,o,s,h,u,d,m=({alt:e})=>void 0===e||""===e?null:r.createElement("span",{role:"img","aria-label":e}),g=(e,t,r)=>{var i=Math.floor(e/t)*t,n=Math.ceil(e/t)*t,a=0===i?0:(e-i)/i;return 0===a||a>r?n:i},f=(e,t)=>{var r=t.split("?")[0],i=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==i){for(var n=i.split("&"),a=n.length-1;a>=0;a-=1)n[a].split("=")[0]===e&&n.splice(a,1);if(n.length>0)return`${r}?${n.join("&")}`}return r},v=(e,t,r,i,n)=>{var a=g(e,100,.05),l=g(t,100,.05),c=r.maxWidth/r.maxHeight,o=e/t,s=Math.abs(c-o)/o<.1;if("contain"===n){if(o>c){var h=t,u=Math.ceil(h*c);a=g(u,100,.05)}l=-1}else if(s||"calculated"===n)l=-1;else if(a<=100&&l<=100){if(o<c){var m=t,v=Math.ceil(m*c);a=g(v,100,.05)}l=-1}else{var w=Math.min(c,o),p=a/l;((e,t,r)=>e>=t&&e<=r)(p,w,Math.max(c,o))||(p<w?a+=100:l+=100)}a=Math.min(a,2400),l=Math.min(l,2400);var y="";return(y=r.urlTemplate.indexOf("w={width}")>0&&r.urlTemplate.indexOf("h={height}")>0?r.urlTemplate.replace("w={width}","w="+a).replace("h={height}","h="+l):r.urlTemplate.replace("w=100","w="+a).replace("h=100","h="+l)).indexOf("&pcx=")>0&&y.indexOf("&pcy=")>0&&y.indexOf("&pchk=")>0&&(d("media_preview_focal_point")?(y=f("cx",y),y=f("cy",y),y=(y=f("chk",y)).replace("&pcx=","&cx=").replace("&pcy=","&cy=").replace("&pchk=","&chk=")):(y=f("pcx",y),y=f("pcy",y),y=f("pchk",y))),{url:y,width:a,height:l=l>=0?l:Math.ceil(a*(1/c))}},w=(e,t,r,i)=>{if(!r||0===r.length)return console.error("ResponsiveImage sources was empty"),{url:"",width:0,height:0};var n=(null==i?void 0:i.allowedStretch)||.25,a=(null==i?void 0:i.fitStrategy)||"cover",l=!i||void 0===i.getImageBasedOnClientInfo||i.getImageBasedOnClientInfo,c=(null==i?void 0:i.pixelRatio)||(e=>"undefined"!=typeof window&&window.devicePixelRatio&&e?Math.min(window.devicePixelRatio,1.5):1.5)(l),o=e*c,s=t*c,h=s*o;if(i&&i.dynamicSizingEnabled){var u=i.dynamicSource||(e=>{var t={url:"",width:0,height:0},r=e.find(e=>0===e.width&&0===e.height);return r?(e.forEach(e=>{(!t||e.width*e.height>t.width*t.height)&&(t=e)}),{maxWidth:t.width,maxHeight:t.height,urlTemplate:r.url}):null})(r);if(u)return v(o,s,u,0,a)}var d=r.filter(e=>e.width<=2560);if(0===d.length){var m=r[r.length-1],g=r.length>0&&(!m.width||!m.height);return console.error(`ResponsiveImage: no suitable source found. sources.length ${r.length} missingWidthHeight ${g.toString()}`),{url:"",width:0,height:0}}var f=d.map(e=>{var t=(o-e.width)/e.width,r=(s-e.height)/e.height,i=Math.max(t,r),n=e.width*e.height;return{src:e,stretchRatio:i,wastedRatio:(n-h)/n}});f.sort((e,t)=>e.wastedRatio-t.wastedRatio);var w=f.filter(e=>e.src.width*e.src.height<=4e4).filter(e=>e.stretchRatio<=0);if(w.length>0){var{url:p,width:y,height:S}=w[0].src;return{url:p,width:y,height:S}}var E=f.filter(e=>e.stretchRatio<=n);if(E.length>0){var{url:I,width:b,height:x}=E[0].src;return{url:I,width:b,height:x}}f.sort((e,t)=>e.stretchRatio-t.stretchRatio);var{url:R,width:D,height:O}=f[0].src;return{url:R,width:D,height:O}},p=(e,t,r,i)=>{if(0===i||0===r||0===t||0===e)return"cover";var n=e/t,a=r/i;if(0===n||0===a)return"cover";var l=n<a,c=l?n/a:a/n;if(c>.75)return"cover";var o=c/.75;return l?100*o+"% auto":`auto ${100*o}%`},y=({allowedStretch:e,alt:t,borderRadius:h,children:d,backgroundSizeCalculator:g=p,doNotRemoveImage:f=!1,dynamicSource:v,fitStrategy:y="cover",height:S,containerDimensionsOverride:E,notLazy:I,onPhotoClick:b,opacity:x,padding:R,onLoad:D,onError:O,sources:C,ssrContainerDimensions:k,threshold:N=200,transform:z,width:L})=>{var W,[H,M]=n(!!k),[$,B]=n(!1),P=i(null),T=o(()=>M(!0),N);a(()=>{B(!0)},[]);var _=(({containerDimensionsOverride:e,containerRef:t,getImageBasedOnClientInfo:r,ssrContainerDimensions:i})=>{if(e)return e;if(!i&&!r)return null;if(null===t.current||0===t.current.clientHeight||0===t.current.clientWidth)return i||null;var{clientHeight:n,clientWidth:a}=t.current;return{clientHeight:n,clientWidth:a}})({containerDimensionsOverride:E,containerRef:T,getImageBasedOnClientInfo:$,ssrContainerDimensions:k}),Z=(({allowedStretch:e,containerDimensions:t,getImageBasedOnClientInfo:r,postponeGettingSource:n,sources:a,fitStrategy:l,dynamicSizingEnabled:c,dynamicSource:o})=>{var s=i({containerDimensions:null,result:null,sources:null}),{current:h}=s;if(n||null===t)return null;var u=h.containerDimensions&&h.containerDimensions.clientWidth||-1,d=h.containerDimensions&&h.containerDimensions.clientHeight||-1,m=t&&t.clientWidth||0,g=t&&t.clientHeight||0;return h.sources===a&&t&&u>=m&&d>=g&&h.result?h.result:(s.current={result:null!==t?w(t.clientWidth,t.clientHeight,a,{allowedStretch:e,getImageBasedOnClientInfo:r,fitStrategy:l,dynamicSizingEnabled:c,dynamicSource:o}):null,sources:a,containerDimensions:t},s.current.result)})({allowedStretch:e,containerDimensions:_,getImageBasedOnClientInfo:$,postponeGettingSource:!1===H&&!0!==I,sources:C,fitStrategy:y,dynamicSizingEnabled:!0,dynamicSource:v});f&&!Z||(P.current=Z);var V=P.current?`url("${P.current.url}")`:"none",j=(({containerDimensions:e,backgroundSizeCalculator:t,fitStrategy:r,source:i})=>"contain"===r||"cover"===r?r:"calculated"===r&&t&&i&&e?t(i.width,i.height,e.clientWidth,e.clientHeight):"cover")({containerDimensions:_,backgroundSizeCalculator:g,fitStrategy:y,source:P.current}),q=P.current?P.current.url:"",{browser:A}=l(s),Y="IE"===A.family,U=""!==q&&!Y,F={},G={};U?(F={height:S,width:L,padding:R,position:"relative"},G={borderRadius:h,opacity:x,transform:z,height:"100%",width:"100%",objectFit:"cover"===j||"contain"===j?j:""}):F={backgroundSize:j,borderRadius:h,opacity:x,transform:z,height:S,width:L,padding:R,backgroundImage:V};var K=((e,t,i,n)=>{var[a,l]=r.useState(!1),{loadImage:c,isLoaded:o}=u(),s=r.useRef({timeout:100,onLoad:i,onError:n});return r.useEffect(()=>{s.current={timeout:100,onLoad:i,onError:n}}),r.useEffect(()=>{if(l(!1),""!==e&&null!=e&&!o(e)){var t=setTimeout(()=>l(!0),s.current.timeout),r=!1,i=e=>{r||(l(!1),clearTimeout(t),null==e||e())};return c(e,()=>i(s.current.onLoad),()=>i(s.current.onError)),()=>{clearTimeout(t),r=!0}}return()=>{}},[c,o,e]),a})(null==(W=P.current)?void 0:W.url,0,D,O),J=K&&r.createElement("div",{className:"_1a4WY7aS",style:G},r.createElement("div",{className:"_2f6-QvaF"}));if(!1===H&&!0!==I)return r.createElement("div",{className:"ZVAUHZqh",ref:T,style:F},J,r.createElement(m,{alt:t}),d);var Q={};return b&&(Q={onClick:b,role:"button",tabIndex:"0",onKeyDown:e=>{"Enter"===e.key&&b(e)}}),U?r.createElement("div",Object.assign({className:"ZVAUHZqh",ref:T,style:F},Q),J,r.createElement("img",{className:c("_1a4WY7aS","RcPVTgNb",K&&"_1VtyzZLq"),src:q,alt:null!=t?t:"",style:G}),null!=d&&r.createElement("div",{className:"_1a4WY7aS"},d)):r.createElement("div",Object.assign({className:"ZVAUHZqh",ref:T,style:F},Q),J,r.createElement(m,{alt:t}),d)},S=({className:e,loadingElement:t,onLoad:i,threshold:a=200,sizes:l,src:c,alt:s,srcSet:h})=>{var[u,d]=n(!1),m=o(()=>d(!0),a);return!1===u?t?t(m):r.createElement("img",{className:e,onLoad:i,ref:m,sizes:l,alt:s}):r.createElement("img",{className:e,onLoad:i,sizes:l,src:c,srcSet:h,alt:s})},E=({children:e,className:t,onClick:i,src:a,threshold:l=200})=>{var[c,s]=n(!1),h=o(()=>s(!0),l);return!1===c?r.createElement("div",{className:t,onClick:i,ref:h},e):r.createElement("div",{className:t,onClick:i,style:{backgroundImage:`url(${a})`}},e)},I=({url:e,className:t})=>{var{cdnPrefix:i}=l(h),n={url:`${i}${e}`,width:200,height:200};return r.createElement("div",{className:t||"_2iaDjzPN"},r.createElement(y,{sources:[n],width:"100%",height:"100%"}))};return[()=>{e({LazyBackgroundImage:E,LazyImage:S,ResponsiveDefaultImage:I,ResponsiveImage:y,getDynamicSource:v,getSource:w})},[e=>(r=e.default,i=e.useRef,n=e.useState,a=e.useEffect,l=e.useContext),e=>c=e.default,e=>o=e.useOnVisible,e=>(s=e.Device,h=e.Environment),e=>u=e.useImagePreloader,e=>d=e.featureIsEnabled]]},["cDcdfi","jSLlaY","BLrxBS","2R4xv2","AoLEtg","-i3PJS"]]);