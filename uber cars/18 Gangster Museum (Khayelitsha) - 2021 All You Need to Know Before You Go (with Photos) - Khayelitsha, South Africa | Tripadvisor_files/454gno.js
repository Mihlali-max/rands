(this.$WP=this.$WP||[]).push(["454gno",(e,t)=>{"use strict";var a,n,o,s,l,r,i,c,d,u,p,m,_,g,h,E,v,b,f,w,y,O,x=e=>e+61+49,C=(e,t=!0)=>{var[a,n]=i(x(0)),[r,d]=i(0),{adhesionClosed:u,notifyAdhesion:p}=c(f),m=s(()=>{n(x(180))},[n]),_=s(()=>{t&&d(50)},[d,t]);return l(()=>{!u&&t||d(0)},[u,t]),b({size:"5x1",position:"sky",callback:m}),b({size:"320x50",position:"adhesion",callback:_}),l(()=>(p(e&&r>0),()=>{p(!1)}),[r,e,p]),o(()=>({top:a,bottom:r}),[a,r])},N=({bottom:e})=>{var{isRtl:t}=a.useContext(u).locale,{userAgentCategory:n}=a.useContext(p);return a.useMemo(()=>"MOBILE"===n,[n])?a.createElement("div",{className:w("_1IL26obE","_2XaoaeRT"),style:{bottom:(e||0)+"px"}},a.createElement("div",{className:"_3RWyYpeA"},a.createElement("h3",{className:"_3YFphSPu"},a.createElement("span",{className:"_3YM9Vp5w"},a.createElement(y,{name:"membership"})),a.createElement(O,{id:"onetap_message_unlock"})," "))):a.createElement("div",{className:w("_2XaoaeRT",{_3iWqdbqG:t})},a.createElement("div",{className:"_3RWyYpeA"},a.createElement("h3",{className:"_3YFphSPu"},a.createElement("span",{className:"_3YM9Vp5w"},a.createElement(y,{name:"membership"})),a.createElement(O,{id:"onetap_message_unlock"})," "),a.createElement("p",{className:"_1uZ9lbQj"},a.createElement(O,{id:"onetap_message_subhead_to_get_the_most"})," ")))},S=({shown:e,adjustForAdhesion:t,isContextualMessagingEnabled:a,onShow:o})=>{var{bottom:s}=C(e,t),[r,c]=i(!1),[d,u]=i(0);return l(()=>{if(!e)return()=>{};var t=document.getElementById("credential_picker_iframe");if(t){if(t.style.bottom=s+"px",t.style.zIndex="10105",!a)return()=>{};var n,o=new MutationObserver(e=>{var t,a,o=null==e||null==(t=e[0])?void 0:t.target;if(o instanceof HTMLElement){clearTimeout(n);var s=parseInt((null==o||null==(a=o.style)?void 0:a.height)||0,10),l=isNaN(s)?0:s-9;n=setTimeout(()=>{u(l),c(l>0)},400)}});return o.observe(t,{attributes:!0}),()=>{o.disconnect(),clearTimeout(n)}}return()=>{}},[s,e,a]),l(()=>{e&&o&&o()},[e,o]),e&&r?n.createElement(N,{bottom:d+s}):null},M=({shown:e,containerId:t,isContextualMessagingEnabled:a,onShow:o})=>{var{top:s}=C(e),[c,d]=i(!1),u=r(null);return l(()=>{if(e&&u&&u.current){var t=u.current.children[0];t&&(t.style.zIndex="10107",t.children&&0!==t.children.length&&(t.children[0].onload=()=>{d(a)}))}},[e,a]),l(()=>{e&&o&&o()},[e,o]),n.createElement("div",{className:w("_15SXV7IU",{_1nZT1p_i:!e}),style:{top:s}},c&&n.createElement(N,null),n.createElement("div",{id:t,className:"c-3V8oCL",ref:u}))},k=["CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults"],G=({trackWouldOpenExplicitPreferences:e,openExplicitPreferences:t,explicitPreferencesEnabled:n,servletName:c,enhancedGoogleOneTapGate:u,onDismiss:b,onShow:f,triggerNext:w})=>{var y=d(),O=(({servletName:e,enhancedGoogleOneTapGate:t})=>o(()=>{var a=m("post_signup_attr_promo_onetap")&&("Home"===e||m("onetap_onboarding"))||m("post_signup_attr_promo_explicit_preferences");return t?{pid:40670,flow:"GOOGLE_ONETAP",deferShowOverlay:!0}:a?{pid:40666,flow:"GOOGLE_ONETAP_EMAIL_PROMO",deferShowOverlay:!0}:{pid:40185,flow:"GOOGLE_ONETAP",deferShowOverlay:!0}},[e,t]))({servletName:c,enhancedGoogleOneTapGate:u}),x=a.useCallback(a=>{y(Object.assign({extraQueryParams:{google_id_token:a},onSuccess:a=>{a&&!0===a.hasCreatedMember&&(e&&e(),n&&t&&t())},onClose:()=>{m("reg_emailoptin")&&window.location.reload()}},O))},[y,O,e,n,t]),{shown:C}=(({onNotDisplayed:e,onUserSkipped:t,onCredentialReady:a,containerId:n,flow:c,pid:d})=>{var u=r(null),[p,m]=i(!1),b=_(),f=(()=>{var e=s(()=>v.remove("g_state"),[]);return l(()=>e,[e]),e})(),w=s((e,t)=>{b({module:"google_onetap",action:e,context:`${t}|${c}`,value:d})},[c,d,b]),y=s(e=>{e&&(w("credentials_success",e.select_by),a(e.credential),m(!1))},[a,w]),O=s((t,a)=>{w("display_event",a||"success"),h(t),m(t),t||e()},[e,w]),x=s(e=>{w("skipped_event",e),m(!1),"user_cancel"===e&&t()},[t,w]),C=s(e=>{w("dismiss_event",e),m(!1)},[w]),N=s(e=>{switch(f(),e.getMomentType()){case"display":O(e.isDisplayed(),e.getNotDisplayedReason());break;case"skipped":x(e.getSkippedReason());break;case"dismiss":C(e.getDismissedReason())}},[f,C,x,O]),S=s(e=>{null===u.current&&(u.current=e,w("requested","na"),e.initialize({client_id:"1070328450902.apps.googleusercontent.com",callback:y,cancel_on_tap_outside:!1,prompt_parent_id:n,auto_select:!E()}),e.prompt(N))},[y,N,n,w]);return l(()=>{w("script_requested","na"),g("https://accounts.google.com/gsi/client","MEMX").then(()=>{var e,t,a,n=()=>S(window.google.accounts.id);(null==(e=window.google)||null==(t=e.accounts)||null==(a=t.id)?void 0:a.initialize)?n():window.onGoogleLibraryLoad=n})},[S,w]),l(()=>()=>{u.current&&u.current.cancel()},[]),o(()=>({shown:p}),[p])})({onNotDisplayed:w,onUserSkipped:b,onCredentialReady:x,containerId:"tripGoogleOnetapContainer",pid:O.pid,flow:O.flow}),{userAgentCategory:N}=a.useContext(p);return a.useMemo(()=>"MOBILE"===N,[N])?a.createElement(S,{shown:C,onShow:f,adjustForAdhesion:!u,isContextualMessagingEnabled:m("google_onetap_contextual_message_mobile_lithium")&&!k.includes(c)}):a.createElement(M,{shown:C,onShow:f,containerId:"tripGoogleOnetapContainer",isContextualMessagingEnabled:m("google_onetap_contextual_message_desktop_lithium")&&!k.includes(c)})};return[()=>{e("default",G)},[e=>(a=e,n=e.default,o=e.useMemo,s=e.useCallback,l=e.useEffect,r=e.useRef,i=e.useState,c=e.useContext),e=>d=e.default,e=>(u=e.Environment,p=e.Device),e=>m=e.featureIsEnabled,e=>_=e.useGARecorder,e=>g=e.importScript,e=>(h=e.setOneTapEligibility,E=e.userSignedOut),e=>v=e.default,e=>b=e.default,e=>f=e.PromptsContext,e=>w=e.default,e=>y=e.default,e=>O=e.default]]},["cDcdfi","mv7yXI","2R4xv2","-i3PJS","fsml46","pLbCP4","MWFqPp","vmXh3M","w2XwHO","HDgDKt","jSLlaY","pyY-iJ","0DsHEV"]]);
