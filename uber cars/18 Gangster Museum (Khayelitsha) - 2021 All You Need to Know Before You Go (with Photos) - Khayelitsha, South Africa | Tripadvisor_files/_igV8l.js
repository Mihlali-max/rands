(this.$WP=this.$WP||[]).push(["_igV8l",(e,t)=>{"use strict";var r,a,l,n,i,m,c,o,s,d,E,u,f,v,p,y,k,_,x=({primaryOffer:e})=>{var{viewportCategory:t}=a.useContext(E),r="MOBILE"===t?"_self":"_blank",{trackClick:i}=l({clientContext:"hotelViewDeal"}),m=a.useCallback(()=>(i(),!1),[i]);return a.createElement("div",null,e&&a.createElement(a.Fragment,null,a.createElement("div",{className:"_1_T2_Om-"},a.createElement("div",{className:"_2XAwg5P6"},a.createElement("div",{className:"_3AIWaoPG"},e.strikeThroughPrice&&a.createElement("div",{className:"_2yK211oZ"},a.createElement(o,{variant:"body-01",elementType:"span",color:"inherit"},a.createElement(u,{model:e.strikeThroughPrice}))),e.displayPrice&&a.createElement(o,{variant:"title-04",elementType:"span"},a.createElement(u,{model:e.displayPrice}))),e.providerName&&a.createElement(n,{href:e.commerceUrl,theme:"inline",trackingDetails:{clientContext:"primaryOfferLink"}},a.createElement(o,{variant:"supporting-01"},e.providerName,a.createElement(c,{name:"external-link-no-box"})))),a.createElement("div",null,a.createElement(s,{target:r,onClick:m,href:e.commerceUrl||"",variant:"commerce"},a.createElement(d,{id:"view_deal"})))),e.details&&e.details.filter(Boolean).map((e,t)=>a.createElement("div",{className:"_6hRU_bYG",key:t},a.createElement(o,{variant:"supporting-01"},a.createElement(u,{model:e}))))))},g=({model:e})=>a.createElement("div",null,a.createElement("div",null,e.displayPrice&&a.createElement("span",{className:"_2gDFvMVI"},a.createElement(u,{model:e.displayPrice}))),a.createElement(n,{href:e.commerceUrl,theme:"inline",trackingDetails:{clientContext:"additionalOfferLink"}},e.providerName&&a.createElement(o,{variant:"supporting-02"},e.providerName,a.createElement(c,{name:"external-link-no-box"})))),N=({text:e,url:t,priceText:a})=>r.createElement(n,{href:t},r.createElement(o,{variant:"title-05"},r.createElement("div",{className:"_1JVDiAW9"},r.createElement("div",null,e,r.createElement(c,{name:"external-link-no-box"})),r.createElement("div",null,a||r.createElement(c,{name:"prohibited"}))))),C=({tertiaryOffers:e})=>a.createElement("div",{className:"_1DAbxKpp"},null==e?void 0:e.filter(Boolean).filter(e=>e.commerceUrl&&e.providerName).map(e=>a.createElement("div",{className:"l5pozNoi",key:e.providerName},a.createElement(N,{text:e.providerName||"",url:e.commerceUrl||"",priceText:e.displayPrice&&a.createElement(u,{model:e.displayPrice})})))),h=({secondaryOffers:e,tertiaryOffers:t,tertiaryLinkText:r})=>{var{viewportCategory:l}=a.useContext(E);if(e){var n="MOBILE"!==l?e.filter(Boolean).map((e,t)=>a.createElement("div",{className:"_2VqoHGT5",key:t},a.createElement(g,{model:e}))):null;return a.createElement("div",null,n,t&&t.length>0&&a.createElement(f,{triggeringElement:a.createElement(o,{variant:"title-05"},r),variant:"top-caret",content:a.createElement(C,{tertiaryOffers:t})}))}return null},L=({model:e})=>{var{allOffers:t}=e,a=null==t?void 0:t[0],l=t&&t.length>1&&t.slice(1,4);return r.createElement("div",{className:"_2e_7-dKt"},a&&r.createElement(x,{primaryOffer:a}),l&&r.createElement(h,{secondaryOffers:l,tertiaryOffers:t,tertiaryLinkText:"FIX THIS LABEL"}))},O=({children:e})=>r.createElement("div",{className:"_3UMNpRgD"},e),P=e=>{var{text:t,url:a,trackingContext:n}=v(e),{trackClick:i}=l({clientContext:n}),{viewportCategory:m}=r.useContext(E),c="MOBILE"===m?"_self":"_blank",o=r.useCallback(()=>(i(),!1),[i]);return t&&a?r.createElement(s,{size:"small",variant:"tertiary-commerce",target:c,href:a,onClick:o},r.createElement(u,{model:t})):null},T=({model:e})=>{var{discountText:t}=e;return r.createElement(r.Fragment,null,t&&r.createElement(y,{variant:"accent"},r.createElement(u,{model:t})))},D=({model:e})=>{switch(e.__typename){case"AppPresentation_RestaurantTimeSlotDiscountPromotion":return r.createElement(T,{model:e});default:return r.createElement(m,{typename:e.__typename})}},b=({model:e})=>{var{link:t,promotion:a,status:l}=e,n="UNAVAILABLE"===l;if(t){var{text:i,url:m}=v({internalOrExternalLink:t});if(i&&m)return r.createElement("span",{className:p("_2a9aeSLs","_2rUU-R_g")},r.createElement(s,{size:"small",variant:"tertiary-commerce",disabled:n,href:m},i&&r.createElement(u,{model:i})),a&&r.createElement("div",{className:"_1w3SyxwL"},r.createElement(D,{model:a})))}return null},B=({model:e})=>{var{timeslots:t,offersV2:a}=e;return r.createElement(O,null,t&&t.filter(Boolean).map(e=>r.createElement(b,{model:e})),a&&a.filter(Boolean).map(e=>r.createElement(P,{externalLink:e})))};return[()=>{k=i(L),_=i(B),e({HotelCommerceInfo:k,ListCommerceLayout:O,ListCommerceOffer:P,RestaurantCommerceInfo:_,RestaurantCommerceTimeslot:b})},[e=>(r=e,a=e.default),e=>(l=e.useTracking,n=e.FusionTrackedLink,i=e.FusionComponent,m=e.APSUnsupportedType),e=>c=e.default,e=>o=e.default,e=>s=e.default,e=>d=e.default,e=>E=e.Device,e=>u=e.default,e=>f=e.default,e=>v=e.deriveLinkInfo,e=>p=e.default,e=>y=e.default]]},["cDcdfi","PEYes_","pyY-iJ","VP50Wc","7yGKf-","0DsHEV","2R4xv2","XNYdwH","4J6GHD","1O47Wa","jSLlaY","DCBGY9"]]);
