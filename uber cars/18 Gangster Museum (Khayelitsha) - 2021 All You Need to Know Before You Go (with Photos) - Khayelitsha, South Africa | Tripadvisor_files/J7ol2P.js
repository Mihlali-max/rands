(this.$WP=this.$WP||[]).push(["J7ol2P",(e,a)=>{"use strict";var n,i,t,r,l,o,s,d,u,m,c,v,k,p,_,h,g,f,N,E,b,C,y,A,H,V,S,z,T=()=>{var{viewportCategory:e}=t(m),{localize:a}=g(),n=function(e){var{locale:a}=t(c);return r(()=>{var n=S.get(a.code);return n?`/img2/langs/${n}/${e}`:"/img2/"+e},[a,e])}("MOBILE"===e?"popups/housemw/vr.jpg":"popups/house/vr.jpg");return i.createElement("a",{href:"/Rentals"},i.createElement("img",{src:n,alt:a.string("home_rentals_vacation")}))},O=()=>{var{localize:e}=g(),[,{uid:a}]=t(v),n=C(),r=y(),[s]=l(b()),u=E(()=>{n({optimusAd:{pageviewUid:a,funnelKey:s,position:"HORIZON_FALLBACK"}})}),m=o(()=>{r({OptimusAdInteraction:{optimusAdClick:{pageviewUid:a,funnelKey:s,position:"HORIZON_FALLBACK"}}})},[r,a,s]),c="/DiscoverPlus?ik="+s;return i.createElement("div",{ref:u,className:"_2bVMxI72"},i.createElement("div",{className:"ATPmtVtV"},i.createElement("div",{className:"QAKGp-pF"},i.createElement("div",{className:"_2Uw3CZQU"},e.string("plus_home_takeover_horizon_header")),i.createElement("div",{className:d("_2TxMfmHi","i4sk4jWp")},i.createElement(N,{variant:"plus-logo-full-all-white",height:58}),i.createElement(f,{variant:"on-dark-outline",href:c,onClick:m},e.string("plus_home_takeover_learn_more"))),i.createElement("div",{className:d("_2TxMfmHi","_1iRGB-H-")},i.createElement(N,{variant:"plus-logo-full-all-white",height:22}),i.createElement(f,{variant:"on-dark-outline",size:"small",href:c,onClick:m},e.string("plus_home_takeover_learn_more"))))))},I=e=>{var a=e.code;return[{url:`/img2/langs/${a}/horizon/Sky_banner_300x175.jpg`,width:300,height:175},{url:`/img2/langs/${a}/horizon/Sky_banner_768x350.jpg`,width:768,height:350},{url:`/img2/langs/${a}/horizon/Sky_banner_1024x350.jpg`,width:1024,height:350},{url:`/img2/langs/${a}/horizon/Sky_banner_1280x350.jpg`,width:1280,height:350}]},w=()=>{var{localize:e}=g(),{locale:a}=t(c);return i.createElement("a",{href:"https://www.youtube.com/watch?v=bppH2sVd5OM?utm_source=tripadvisor&utm_medium=home&utm_campaign=fallbackhorizon",target:"_blank"},i.createElement(A,{source:I(a),height:"100%",width:"100%",alt:e.string("horizon_watch_the_film")}))},x=({takeoverVariant:e})=>{switch(e){case"Optimus":return i.createElement(O,null);case"Vacations":return i.createElement(w,null);default:return console.error("Missing horizon ad takeover fallback for variant: "+e),null}},B=(e,a)=>e?"DWqsJ0MN":a?"An3ADvD3":"_3hQc_oBM",L=({footer:e=!1})=>{var[a,n]=l(!1),{viewportCategory:r}=t(m),o="MOBILE"===r?"5x1|320x50":"5x1|728x90",c=e?"footer":"horizon",v=p(c),k=_(),{ref:g,id:f,isRendered:N,isEmpty:E}=h(o,c,k,!!e),b=function(e){var[a,n]=l(!1);return s(()=>{if(!u.get("ads.horizonLoaded")){var a=setTimeout(()=>{n(!0),u.set("ads.horizonLoaded",!0)},e);return()=>clearTimeout(a)}n(!0)},[e]),a}(e?0:2e3);return s(()=>{var e=setTimeout(()=>{n(!0)},5e3);return()=>clearTimeout(e)}),i.createElement("div",{className:d("ad",B(v,e))},(N||a)&&E&&!e&&(e=>e?i.createElement(x,{takeoverVariant:e}):i.createElement(T,null))(v),b&&i.createElement("div",{ref:g,id:f,className:d("_2NoPV5rh",{SPPOXG2Y:E})}))},R=["Home","Tourism","ForumHome"],D=["RentalCars","RentalCarsGeo","Articles","ArticlesHome"],j=()=>{var[e]=t(v),{page:a}=e,{userId:i}=t(k),r=function(){var e,a,[{params:i},{uid:t}]=n.useContext(v),r=i.geoId?i.geoId:1,{locale:l}=n.useContext(c),{id:o,userAgentCategory:s}=n.useContext(m),d="MOBILE"===s?"MOBILE_WEB":"DESKTOP",u={uniqueId:o,puid:t},[k]=V({query:z,variables:{geo:r,localeCode:l.code,platform:d,tracking:u}});return!!(null==k||null==(e=k.data)||null==(a=e.sponsoredHome)?void 0:a.destination)}(),l=H("horizonAd"),o=!i,s=!!p("horizon");return!!D.includes(a)||(R.includes(a)||l)&&(o||r||s)};return[()=>{S=new Map([["ar-EG-u-nu-latn","ar_EG"],["ar-US-u-nu-latn","ar"],["da-DK","da"],["de-AT","de_AT"],["de-CH","de_CH"],["de-DE","de"],["el-GR","el"],["en-AU","en_AU"],["en-CA","en_CA"],["en-HK","en_HK"],["en-IE","en_IE"],["en-IN","en_IN"],["en-MY","en_MY"],["en-NZ","en_NZ"],["en-PH","en_PH"],["en-SG","en_SG"],["en-GB","en_UK"],["en-ZA","en_ZA"],["es-AR","es_AR"],["es-CL","es_CL"],["es-CO","es_CO"],["es-MX","es_MX"],["es-PE","es_PE"],["es-VE","es_VE"],["es-ES","es"],["fr-BE","fr_BE"],["fr-CA","fr_CA"],["fr-CH","fr_CH"],["fr-FR","fr"],["it-CH","it_CH"],["it-IT","it"],["ja-JP","ja"],["ko-KR","ko"],["nl-BE","nl_BE"],["nl-NL","nl"],["nb-NO","no"],["pt-PT","pt_PT"],["pt-BR","pt"],["ru-RU","ru"],["sv-SE","sv"],["th-u-ca-gregory","th"],["tr-TR","tr"],["vi-VN","vi"],["zh-Hant-HK","zh_HK"],["zh-Hant-TW","zh_TW"],["zh-Hans-CN","zh_CN"],["zh-Hans-US","zh"]]),(z=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SponsoredGeoQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geo"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"localeCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PlatformEnumInput"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SponsorshipTrackingInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sponsoredHome"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sponsorshipRequest"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"geo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geo"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"localeCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"localeCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tracking"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracking"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ListValue","values":[]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":359}}')).__key=0xce4b51be8a66,z.loc.source={body:"ce4b51be8a66"},e("default",L),e("useHorizonAd",j)},[e=>(n=e,i=e.default,t=e.useContext,r=e.useMemo,l=e.useState,o=e.useCallback,s=e.useEffect),e=>d=e.default,e=>u=e.default,e=>(m=e.Device,c=e.Environment,v=e.Route,k=e.Visitor),e=>p=e.useTakeoverVariant,e=>(_=e.useRefreshKey,h=e.useAd),e=>g=e.useLocalize,e=>f=e.default,e=>N=e.default,e=>E=e.useOnVisible,e=>b=e.uuid,e=>C=e.useImpressionLogger,e=>y=e.useInteractionLogger,e=>A=e.default,e=>H=e.default,e=>V=e.useQuery]]},["cDcdfi","jSLlaY","jaCyxS","2R4xv2","q0TyIl","tV1cF7","0DsHEV","7yGKf-","TkeYrn","BLrxBS","O-HcBE","30t50h","fsml46","BgJkqv","DY6uxn","5X2em-"]]);