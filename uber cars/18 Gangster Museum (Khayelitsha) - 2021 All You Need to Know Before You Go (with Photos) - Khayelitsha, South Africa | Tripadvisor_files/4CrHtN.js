(this.$WP=this.$WP||[]).push(["4CrHtN",(e,n)=>{"use strict";var a,i,t,l,r,d,c,m,s,o,u,k,v,N,g,p,b,f,y,F,_,S,E,L,h,A,O,C,x,V,D,T,w,z,I=({link:e})=>{var n=k(e.isObfuscated?e.url:null),a=e.isObfuscated?n:e.url,t="cookie_consent"===e.trackAction,l=b({module:"Footer",action:"click",context:e&&e.trackAction||""}),r=e.preLocalizedAnchorText||e.localizedAnchorText;return i.createElement("span",{className:"_27sx3LDX"},t?i.createElement(N,{variant:"primary",onClick:()=>{l(),p()}},i.createElement(o,{id:"common_Cookie_consent_14f6"})):i.createElement(g,{variant:"primary",href:a,rel:"noopener",target:e.newWindow?"_blank":"_self",onClick:l,leftAlign:!0},r))},j=({legalLinks:e,showLeonardoMessage:n})=>{var a,r,d,c,{cdnPrefix:m}=i.useContext(l),[s,u]=i.useState(!1),[{data:k}]=t({query:A}),N=(null==k||null==(a=k.currentLocale)?void 0:a.languageName)||"",g=!1;if(C.has(null==k||null==(r=k.currentLocale)?void 0:r.ietfLocale))c=null;else if("en"===(null==k||null==(d=k.currentLocale)?void 0:d.ietfLocale))c="the United States",g=!0;else{var p,b;c=(null==k||null==(p=k.currentLocale)||null==(b=p.country)?void 0:b.name)||""}var f=[null!=c?i.createElement(o,{id:"footer_disclaimer_line1",args:{language:N,country:c}}):i.createElement(o,{id:"footer_disclaimer_line1_no_country",args:{language:N}}),i.createElement(i.Fragment,null,i.createElement(o,{id:"footer_disclaimer_line2"}),g&&i.createElement(i.Fragment,null," ",i.createElement(o,{id:"footer_disclaimer_line2_estimates"}))),i.createElement(o,{id:"footer_disclaimer_line3"})];return i.createElement(i.Fragment,null,i.createElement("div",{className:"_15sjLtZC"},i.createElement("img",{className:"_3f5P2JG2",src:m+"/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg",alt:""}),i.createElement("div",null,i.createElement("div",{className:"_3h9ac0Dl"},i.createElement(v,{variant:"supporting-02"},i.createElement(o,{id:"common_26ec",args:{0:O}})," ",i.createElement(o,{id:"common_Allrightsreserved"}))),i.createElement("div",{className:"_3U0bjnHA"},i.createElement(v,{variant:"title-05",elementType:"span"},(e||[]).map(e=>null!=e&&i.createElement(I,{link:e,key:e.url})))))),i.createElement(v,{variant:"supporting-02"},n&&i.createElement("p",{className:"FFZk5ouz"},i.createElement(o,{id:"photos_provided_by_2_1bed",args:{0:"VFM Leonardo"}})),s?f.map((e,n)=>i.createElement("p",{key:n,className:"FFZk5ouz"},e)):i.createElement(i.Fragment,null,i.createElement("p",{className:"FFZk5ouz"},f[0]," ",i.createElement("button",{className:"_oR-rBXi",onClick:()=>u(!0)},i.createElement(o,{id:"common_more_ffffe87d"}))))))},M=({link:e})=>{var n,a=f(),t=null==(n=e.preLocalizedLink)?void 0:n.match(/^(.*)<a.*href="([^"]*)".*>(.*)<\/a>(.*)$/);if(null==t)return null;var[,l,r,d,c]=t;return i.createElement("li",{className:"_2SQq2CTV"},l,i.createElement(y,{theme:"standalone",href:r,target:"_blank",rel:"noopener",onClick:()=>{a({module:"Footer",action:"click",context:e.trackAction||""})}},d),c)},q=({partnerLinks:e})=>i.createElement(v,{variant:"supporting-01"},i.createElement("ul",{className:"_1OhqYaUV"},(e||[]).filter(Boolean).map(e=>i.createElement(M,{key:e.preLocalizedLink,link:e})))),P=({link:e,setIsOpen:n,trackingModule:a})=>{var t=f(),l=k(e.isObfuscated?e.url:null),r=e.isObfuscated?l:e.url;return i.createElement("li",{className:"_2m4HC-i3"},i.createElement(y,{theme:"standalone",display:"block",href:r,target:e.newWindow?"_blank":void 0,rel:"noopener"+("cookie_consent"===e.trackAction?" nofollow":""),onClick:i=>{t({module:a||"Footer",action:"click",context:e.trackAction||""}),"/help"===r&&(n(!0),i.preventDefault())}},e.preLocalizedAnchorText||e.localizedAnchorText))},R=({links:e,trackingModule:n})=>{var[a,t]=i.useState(!1);return i.createElement(v,{variant:"supporting-01"},i.createElement("ul",null,(e||[]).filter(Boolean).map(e=>i.createElement(P,{link:e,setIsOpen:t,trackingModule:n,key:e.url}))),a&&i.createElement(x,{onClose:()=>t(!1)}))},H=e=>{switch(e){case"facebook":return"facebook";case"twitter":return"twitter";case"instagram":return"instagram";case"pinterest":return"pinterest";default:return"link"}},W=({socialLinks:e})=>{var n=f(),a=_();return i.createElement("div",{className:"_2DSNbvAC"},(e||[]).map(e=>{var t,l;return e&&null!=e.url&&i.createElement("a",{key:e.url,href:e.url,rel:"noopener",className:m("_23F9-Rgs",a),onClick:()=>{n({module:"Footer",action:"click",context:e&&e.trackAction||""})},title:null!=(t=e.preLocalizedAnchorText)?t:e.localizedAnchorText,"aria-label":null!=(l=e.preLocalizedAnchorText)?l:e.localizedAnchorText},i.createElement(S,{name:H(null==e?void 0:e.trackAction),size:24}))}))},B=e=>{var n;return"function"==typeof e.formatToParts?null==(n=e.formatToParts().find(({type:e})=>"currency"===e))?void 0:n.value:void 0},U=()=>{var{localize:e}=u(),n=f(),d=(()=>{var{preferences:{currency:e}}=a.useContext(r),[{data:n}]=t({query:V,variables:{currencyCode:e}}),i=(e=>{var{locale:{code:n}}=a.useContext(l);return a.useMemo(()=>{var a={symbol:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"symbol",currency:e}),name:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"symbol",currency:e}),code:new Intl.NumberFormat(n,{style:"currency",currencyDisplay:"code",currency:e})};return{symbol:B(a.symbol)||"",name:B(a.name)||"",code:B(a.code)||e}},[e,n])})(e);return n&&n.currency||i})(),{setCurrency:c}=i.useContext(r).update.preferences,[m,s]=i.useState(!1),[{data:o}]=t({query:D,pause:!m}),k=i.useMemo(()=>{var e=new Set;return[...(null==o?void 0:o.majorCurrencies)||[],...(null==o?void 0:o.minorCurrencies)||[]].map(n=>e.has(null==n?void 0:n.code)||null==(null==n?void 0:n.name)||null==n.code||null==n.symbol?null:(e.add(n.code),{value:n.code,displayName:`${n.symbol}  ${n.name}`,label:n.name})).filter(Boolean)},[o]),v=d.symbol===d.code?d.symbol:`${d.symbol} ${d.code}`;return i.createElement(E,{options:k,value:d.code,onChange:c,label:e.string("common_9bc"),selectedDisplayName:v,menuVariant:"leading-bottom-caret",onOpen:()=>{n({module:"CURRENCY_PICKER",action:"Open",context:d.code}),s(!0)},fullscreenMobile:!0,loading:!k})},J={},K=({currentPath:e})=>{var n,{localize:a}=u(),r=f(),{pointOfSaleName:d}=(null==(n=t({query:A})[0].data)?void 0:n.currentLocale)||{},c=i.useContext(l).locale.code,[m,s]=i.useState(!1),[{data:o}]=t({query:w,pause:!m}),k=i.useMemo(()=>[...(null==o?void 0:o.Americas)||[],...(null==o?void 0:o.Europe)||[],...(null==o?void 0:o.APAC)||[],...(null==o?void 0:o.AfricaAndMiddleEast)||[]].filter(Boolean).map(({locale:n,pointOfSaleName:a,hostname:i})=>null!=n&&null!=a&&null!=i?{displayName:a,href:`https://${i}${e}`,onClick:()=>r({module:"POS_PICKER",action:"SELECT",context:`${n}_FROM_${c}`})}:null).filter(Boolean),[o,e,c,r]);return i.createElement(E,{mode:"menu",options:k,label:a.string("footer_region"),selectedDisplayName:d||"",menuVariant:"trailing-bottom-caret",onOpen:()=>{r({module:"POS_PICKER",action:"Open",context:c}),s(!0)},fullscreenMobile:!0,loading:!k})},Q=({id:e,header:n,children:a})=>{var{viewportCategory:t}=i.useContext(d),l="DESKTOP"!==t,[r,c]=i.useState(!1),s=i.useCallback(()=>c(e=>!e),[]),o=i.useCallback(e=>{switch(e.key){case" ":case"Enter":c(e=>!e),e.preventDefault();break;case"ArrowDown":case"ArrowRight":c(!0),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":c(!1),e.preventDefault()}},[]);return i.createElement("div",{className:m("cpzsw9RX",{"wl4v-HO3":r})},i.createElement("div",Object.assign({className:"_1lCnJNHA",id:e+"_header"},l?{role:"button","aria-controls":e+"_contents","aria-expanded":r,onClick:s,onKeyDown:o,tabIndex:0}:{}),i.createElement("div",{className:"_3ZcrmL4g"},i.createElement(S,{name:r?"minus":"plus"})),i.createElement("div",{className:"_17BTGKct"},i.createElement(v,{variant:"body-01"},n))),i.createElement("section",{className:"_3z61QqF2",id:e+"_contents","aria-labelledby":e+"_header"},a))},$=["Home","NotFound"],Y=["Hotel_Review","ShowUserReview"],G=({footerLinks:e,currentPath:n})=>{var[{page:a}]=i.useContext(c),t=$.includes(a);return i.createElement("footer",{className:"wPY_WYJH"},i.createElement(s,null,i.createElement("div",{className:m("_2vbN5yWV",{_1LL4Fllz:t})},t&&i.createElement(i.Fragment,null,i.createElement("div",{className:"fMjWVK3L"},i.createElement(Q,{id:"footer_section_about_ta",header:i.createElement(o,{id:"footer_about_ta_v2"})},i.createElement(R,{links:e&&e.aboutUsLinks}))),i.createElement("div",{className:"_3lYpbc4Z"},i.createElement(Q,{id:"footer_section_explore",header:i.createElement(o,{id:"footer_explore_v2"})},i.createElement(R,{links:e&&e.exploreLinks}))),i.createElement("div",{className:"_1XjeJVqk"},i.createElement(Q,{id:"footer_section_do_business",header:i.createElement(o,{id:"footer_do_business_v2"})},i.createElement(R,{links:e&&e.businessLinks})),null!=(null==e?void 0:e.appLinks)&&e.appLinks.length>0&&i.createElement(Q,{id:"footer_section_get_app",header:i.createElement(o,{id:"footer_get_app_v2"})},i.createElement(R,{links:e&&e.appLinks}))),null!=(null==e?void 0:e.partnerLinks)&&(null==e?void 0:e.partnerLinks.length)>0&&i.createElement("div",{className:"_2hQxpPln"},i.createElement(Q,{id:"footer_section_ta_sites",header:i.createElement(o,{id:"footer_ta_sites_v2"})},i.createElement(q,{partnerLinks:e.partnerLinks})))),i.createElement("div",{className:"_25jLVHj8"},i.createElement(U,null),i.createElement(K,{currentPath:n})),t&&i.createElement("div",{className:"_2FnQU9b3"},i.createElement(W,{socialLinks:e&&e.socialLinks})),i.createElement("div",{className:"_1iSTSr0O"},i.createElement(j,{legalLinks:e&&e.legalLinks,showLeonardoMessage:Y.includes(a)})))))},Z=({geoId:e,pageName:n,currentPath:i})=>{var{viewportCategory:r,os:{family:c}}=a.useContext(d),{locale:m}=a.useContext(l),s=m.code,o="IOS"===c||"ANDROID"===c?c:"UNKNOWN",[{data:u}]=t({query:z,variables:{locale:s,pageName:n||"",geoId:e,isMobile:"MOBILE"===r,osFamily:o}}),k=i||"/",v=n||"";return a.createElement(G,{footerLinks:null==u?void 0:u.footerLinks,currentPath:k,pageName:v})},X=["ForumHome"],ee=()=>{var[{page:e}]=i.useContext(c),n=h(!0),a=!X.includes(e);return i.createElement(s,null,i.createElement("div",{className:"_3f0ubBYC"},(null==n?void 0:n.MASTHEAD_H1)&&i.createElement("h1",{"data-test-target":"masthead_h1"},i.createElement(v,{variant:"title-05",display:"inline"},n.MASTHEAD_H1)),a&&i.createElement(L,null)))};return[()=>{(A=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrentCountryQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentLocale"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pointOfSaleName"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"ietfLocale"},"name":{"kind":"Name","value":"htmlLanguage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languageName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":174}}')).__key=0x8e3ef2485f81,A.loc.source={body:"8e3ef2485f81"},O=(new Date).getFullYear(),C=new Set(["ar","zh-Hans"]),x=F.component.onUsage(()=>n("m7h4d5"),"default"),(V=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"currency"},"name":{"kind":"Name","value":"Currency_code"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":151}}')).__key=48056100005907,V.loc.source={body:"2bb4eec52813"},(D=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyListQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"minorCurrencies"},"name":{"kind":"Name","value":"Currency_all"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"EnumValue","value":"MINOR"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"},"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"majorCurrencies"},"name":{"kind":"Name","value":"Currency_all"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"category"},"value":{"kind":"EnumValue","value":"MAJOR"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Currency"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Currency"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency_Currency"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":271}}')).__key=0x8e375c975b92,D.loc.source={body:"8e375c975b92"},(T=JSON.parse('{"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Locale_LocaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Locale_LocaleSummary"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hostname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hreflang"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pointOfSaleName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pointOfSaleNameInCurrentLocale"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":148}}')).__key=0xd3b15f1ff372,T.loc.source={body:"d3b15f1ff372"},(w=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoSQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"Americas"},"name":{"kind":"Name","value":"Locale_getEnabledLocales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"regionIds"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"19"},{"kind":"IntValue","value":"13"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"serverName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverName"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Locale_LocaleSummary"},"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"Europe"},"name":{"kind":"Name","value":"Locale_getEnabledLocales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"regionIds"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"4"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"serverName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverName"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Locale_LocaleSummary"},"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"APAC"},"name":{"kind":"Name","value":"Locale_getEnabledLocales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"regionIds"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"2"},{"kind":"IntValue","value":"8"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"serverName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverName"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Locale_LocaleSummary"},"directives":[]}]}},{"kind":"Field","alias":{"kind":"Name","value":"AfricaAndMiddleEast"},"name":{"kind":"Name","value":"Locale_getEnabledLocales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"regionIds"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"6"},{"kind":"IntValue","value":"21"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"serverName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverName"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Locale_LocaleSummary"},"directives":[]}]}}]}}],"loc":{"start":0,"end":620}}')).__key=0x931ab79d54d6,w.loc.source={body:"931ab79d54d6"},w.definitions=w.definitions.concat(T.definitions.filter((function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!J[n]&&(J[n]=!0,!0)}))),(z=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterLinksQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isMobile"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"osFamily"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GlobalNav_GlobalNavFooterLinksRequestOsFamily"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footerLinks"},"name":{"kind":"Name","value":"GlobalNav_buildFooterLinks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isMobile"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isMobile"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"osFamily"},"value":{"kind":"Variable","name":{"kind":"Name","value":"osFamily"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"geoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"geoId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutUsLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"businessLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"restaurantLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"exploreLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isObfuscated"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"legalLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isObfuscated"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"appLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"aboutUsLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"newWindow"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedAnchorText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"partnerLinks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preLocalizedLink"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"localizedLink"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"trackAction"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":1478}}')).__key=0xc3ddb502286e,z.loc.source={body:"c3ddb502286e"},e("default",Z),e("OnPageAssets",ee)},[e=>(a=e,i=e.default),e=>t=e.useQuery,e=>(l=e.Environment,r=e.TravelInfo,d=e.Device,c=e.Route),e=>m=e.default,e=>s=e.default,e=>(o=e.default,u=e.useLocalize),e=>k=e.useObfuscatedUrl,e=>v=e.default,e=>(N=e.BorderlessButton,g=e.BorderlessButtonLink),e=>p=e.showConsentPreferences,e=>(b=e.useGARecordCallback,f=e.useGARecorder),e=>y=e.default,e=>F=e,e=>_=e.useKeyboardFocusableClassName,e=>S=e.default,e=>E=e.DropdownMenu,e=>L=e.BreadcrumbsInFooter,e=>h=e.default]]},["cDcdfi","5X2em-","2R4xv2","jSLlaY","OC9u-G","0DsHEV","oiya90","VP50Wc","7yGKf-","lMO0v3","fsml46","5KqyYa","pLbCP4","W3_c4H","pyY-iJ","MCrJhI","meOI_T","QZqymc"]]);
