(this.$WP=this.$WP||[]).push(["hDoeAJ",(e,t)=>{"use strict";var r,a,n,o,l,i,s=({itemRenderer:e,totalCount:t,currentIndex:n,onNav:o,numItemsInRow:l,numRows:i,height:s})=>{var c=Math.min(l,t);if(c<=0)return null;var u=1/c,m=Array.from(Array(i).keys()),d=Array.from(Array(c).keys()),w=c*i,h=Math.floor(n/w);return r.createElement("div",{className:"_1YB20x3i"},m.map(t=>{var c=(h*i+t)*l;return r.createElement("div",{className:"_29SZ8xlv",key:"row-"+t},d.map(t=>{var l=t+c;return e(l)?r.createElement("div",{className:a("QcAjTTPw",n===l?"_2MN-4NoF":null),style:{flexBasis:`calc(${100*u-.01}% - 2px)`,height:s},onClick:()=>o(l),key:"media-"+l,"data-test-target":"gallery_thumbnail_image"},e(l)):null}))}))},c=({itemRenderer:e,thumbnailRenderer:t,totalCount:a,currentIndex:l,onNav:i,onClick:c,arrowSize:u,alwaysShowArrows:m,hideIndicatorDots:d,wrap:w,showCta:h,overlay:C,numItemsInRow:v,numRows:p,setCarouselRef:y,stripHeight:I,nodeWrappers:R,onPhotoCountClick:E,onArrowClick:N,onPhotoSwipe:k})=>{var S;if("hidden"!==C&&a){var _="countOnly"===C;S=r.createElement(n,{icon:_?"photo":void 0,totalCount:a,textOverride:_?""+a:void 0,onClick:E})}return r.createElement("div",{className:"_3mT7Z-Gw",key:"parent-container"},r.createElement("div",{className:"_2pM5l1G9"},r.createElement("div",{className:"_3MvA_WE7",onClick:()=>{c&&c(l)},"data-test-target":"gallery_primary_image"},r.createElement(o,{itemRenderer:e,totalCount:a,currentIndex:l,onNav:i,arrowSize:u,alwaysShowArrows:m,hideIndicatorDots:d,photoCountNode:S,wrap:w,showCta:h,setRef:y,nodeWrappers:R,onArrowClick:N,onPhotoSwipe:k})),r.createElement("div",{className:"_2nWhMojM"},r.createElement(s,{itemRenderer:t||e,totalCount:a,currentIndex:l,onNav:i,numItemsInRow:v,numRows:p,height:I}))))},u=({thumbnail:e})=>{var[t,n]=r.useState(!1);return r.createElement("div",{className:"_3sxouotV",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1)},r.createElement("div",{className:a("_3KAjnMvN","_1P44iO8w",t?"_173d6Q9D":null)},e))},m=({title:e,count:t})=>{var a=i(),n=t?a.formatNumber("integer",t):null;return r.createElement("div",{className:"_1HCi4fR1"},r.createElement(l,{variant:"dark",size:"small"},e,n&&r.createElement("span",null," (",n,") ")))},d=({albums:e,onAlbumSelected:t})=>{if(!e)return null;var n=e.map(({albumId:e,title:a,count:n,thumbnail:o})=>e?r.createElement("div",{className:"eKQWFjb2",key:"thumbnail-"+e,onClick:()=>{t&&t(e)}},r.createElement("div",{className:"AjcEeh7i"},r.createElement(u,{thumbnail:o}),r.createElement(m,{title:a,count:n}))):null);return r.createElement("div",{className:a("_1oSV5rBK","_2ty1merx"),key:"albums-container"},n)},w={albumSelect:"ALBUM",carouselClicked:"CAROUSEL_CLICK",nav:"NAV",photoCountClick:"PHOTO_COUNT_CLICK",arrowClick:"ARROW_CLICK",photoSwipe:"PHOTO_SWIPE"},h=({itemRenderer:e,thumbnailRenderer:t,totalCount:n,initialIndex:o,arrowSize:l,alwaysShowArrows:i,hideIndicatorDots:s,wrap:u,showCta:m,overlay:h,numItemsInRow:C,numRows:v,albums:p,actionHandler:y,setCarouselRef:I,stripHeight:R,nodeWrappers:E,children:N})=>{var k,S={currentIndex:o||0},_=r.useCallback((e,t)=>{try{y&&y(t)}catch(e){}return t.type===w.nav?Object.assign({},e,{currentIndex:t.newIndex}):e},[y]),[A,b]=r.useReducer(_,S),{currentIndex:f}=A;return k=n>C*v?v:n<=C?0:Math.ceil(n/C),r.createElement("div",{className:a("_2jyEvadS","_2FZNeIBB")},r.createElement(c,{itemRenderer:e,thumbnailRenderer:t,totalCount:n,onNav:e=>{b({type:w.nav,newIndex:e})},onClick:e=>{b({type:w.carouselClicked,index:e})},currentIndex:f,arrowSize:l,alwaysShowArrows:i,hideIndicatorDots:s,wrap:u,showCta:m,overlay:h,numItemsInRow:C,numRows:k,setCarouselRef:I,stripHeight:R,nodeWrappers:E,onPhotoCountClick:()=>{b({type:w.photoCountClick})},onArrowClick:()=>{b({type:w.arrowClick,direction:null})},onPhotoSwipe:()=>{b({type:w.photoSwipe,swipeDirection:null})}}),p&&r.createElement(d,{albums:p,onAlbumSelected:e=>{b({type:w.albumSelect,albumId:e})}}),N)};return[()=>{h.defaultProps={arrowSize:"large",alwaysShowArrows:!1,hideIndicatorDots:!0,wrap:!0,showCta:!1,overlay:"visible",numItemsInRow:10,numRows:2},e({MediaWindow:h,mwActions:w})},[e=>r=e,e=>a=e.default,e=>n=e.default,e=>o=e.default,e=>l=e.CircularButton,e=>i=e.useIntlFormatter]]},["cDcdfi","jSLlaY","-3nei-","RycA3W","7yGKf-","0DsHEV"]]);