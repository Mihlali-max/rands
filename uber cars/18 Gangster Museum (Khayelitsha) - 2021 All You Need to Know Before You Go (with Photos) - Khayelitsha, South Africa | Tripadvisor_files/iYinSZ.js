(this.$WP=this.$WP||[]).push(["iYinSZ",(e,t)=>{"use strict";var i,n,o,r,s,l,d,a,c,u,v,m,p,h={useElementRect:(e,t)=>{var[i,n]=r({width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0}),d=o(l(()=>{e.current&&n(h.getElementRect(e.current))},t,!0));return s(()=>{d&&d.current&&(e&&e.current&&new ResizeObserver(d.current).observe(e.current),d.current())},[d,e]),i},getElementRect:e=>{if(e){var{width:t,height:i,top:n,left:o,right:r,bottom:s}=e.getBoundingClientRect();return{width:t,height:i,top:n,left:o,right:r,bottom:s}}return{width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0}}},f=e=>{var{size:t,position:i="rail1",secondAdPosition:l="rail2",secondAdSize:a=t,offsetTop:c="20"}=e,v=function(e,t){if(null==t||0===t){var i=e.toLowerCase().split("|").map(e=>{var t=e.split("x")[1];return parseInt(t,10)});return 6*Math.max(...i)}return parseInt(t,10)}(e.size,e.minHeight),m=o(null),{height:p}=h.useElementRect(m,2e3),[f,E]=r(!0),[g,A]=r(!0);return s(()=>{void 0!==p&&(E(p>=300),A(p>=v))},[p,v]),n.createElement("div",{ref:m,className:"_3NwECE1w"},f&&n.createElement("div",{className:"_2P4jIDDv"},n.createElement("div",{style:{top:c+"px"},className:"_-Ogkofq"},n.createElement(d,{size:t,position:i}))),g&&n.createElement("div",{className:"_2P4jIDDv"},n.createElement("div",{style:{top:c+"px"},className:"_-Ogkofq"},"RailNova"===l?n.createElement(u,{position:"RailNova"}):n.createElement(d,{size:a,position:l}))))},E=["inline1","inline2","inline3","inline4","inline5","inline6"],g=({model:e,inlineAdCounter:t=0,topDivider:n=null,bottomDivider:o=null,offsetTop:r=20,firstAdSize:s="160x600",secondAdSize:l,firstAdPosition:d,secondAdPosition:v})=>{switch(e.adType){case"INLINE":return t<0||t>=E.length?null:i.createElement(c,{topDivider:n,bottomDivider:o,position:E[t]});case"INLINE_DTC":return i.createElement(u,{position:"InlineNova"});case"LEFT_HAND_RAIL":return i.createElement(f,{offsetTop:r,size:s,position:d,secondAdSize:l,secondAdPosition:v});case"FOOTER":return i.createElement(a,{topDivider:n,bottomDivider:o});default:return i.createElement(m,{message:"AppPresentation_AdPlaceholder unexpected adType:"+String(e.adType)})}};return[()=>{p=v(g),e("default",p)},[e=>(i=e,n=e.default,o=e.useRef,r=e.useState,s=e.useEffect),e=>l=e.default,e=>(d=e.RailAd,a=e.FooterAd,c=e.InlineAd),e=>u=e.default,e=>(v=e.fused,m=e.APSUnexpected)]]},["cDcdfi","gsKhh7","tV1cF7","mGqah_","PEYes_"]]);