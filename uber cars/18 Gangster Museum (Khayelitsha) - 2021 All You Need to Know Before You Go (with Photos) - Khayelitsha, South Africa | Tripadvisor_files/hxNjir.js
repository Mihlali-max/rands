(this.$WP=this.$WP||[]).push(["hxNjir",(e,a)=>{"use strict";var t,n,l,i,s,c,r,m,d,o,u,_,E,g,v,k,N,p,h,f,T,b,S,A,C,L=({data:e,error:a})=>{var t,n=null==e||null==(t=e.TranslatedManagementNote)?void 0:t[0];return null!=(null==n?void 0:n.translatedResponse)&&!("IN_PROGRESS"===(null==n?void 0:n.status))||!!a},y=({locationId:e,targetLanguage:a})=>{var n,[{data:l}]=h({query:A,variables:{locationIds:[e],targetLanguage:a},isResultComplete:L,pollIntervals:C}),i=null==l||null==(n=l.TranslatedManagementNote)?void 0:n[0],s=null==i?void 0:i.status,c=null==i?void 0:i.translatedResponse;return"COMPLETE"===s&&c&&c.text?t.createElement("div",{className:"_3C6Vslzk"},t.createElement("div",{className:"_2tdCR20G"},c.text),t.createElement("div",{className:"_1fuBRY1A"},t.createElement(f,{src:"/img2/google/powered_by_google_translate.png",alt:"Google"}))):t.createElement(p,null)},R=({locationId:e,targetLanguage:a,track:t})=>{var[l,i]=n.useState(!1),c=n.useCallback(()=>{i(!0),t()},[t]),r=n.useCallback(()=>{i(!1)},[i]);return n.createElement(n.Fragment,null,l&&n.createElement(v,{fullscreen:"never",modalBaseCustomClass:"_1N28nP5Q",onClose:r},n.createElement(N,{variant:"body-01"},n.createElement(y,{locationId:e,targetLanguage:a}))),n.createElement("div",{className:"_1CmsU2Bs"},n.createElement(k,{onClick:c},n.createElement(s,{id:"google_translation"})),n.createElement(g,{rightOf:!0,message:n.createElement(s,{id:"machine_translated_google_disclaimer"})},e=>n.createElement("span",{ref:e,className:"_34ohDHWt"},n.createElement(d,{name:"info"})))))},D=(e,a)=>n.createElement("div",{className:"_2QQBFkgP",onClick:a},n.createElement("span",{className:"_2QPyBAbQ"},e?n.createElement(s,{id:"common_Read_more"}):n.createElement(s,{id:"common_Readless"})),n.createElement(d,{name:e?"single-chevron-down":"single-chevron-up"})),I=({sanitationTags:e,managementResponse:a,locationName:t,locationId:g,geoId:v,numVisibleTags:k,updatedDate:N,locationType:p,linkifiedManagementNote:h})=>{var[f,A]=l(!1),C=m(),L=c(),{body:y,emergencyEmail:I,emergencyPhone:B,sourceLanguage:P}=a,{locale:V}=n.useContext(T),{viewportCategory:O}=n.useContext(b),w=i((e,a)=>{C({module:"announce_section",action:e,context:a})},[C]),U=f?e:e.slice(0,k),x=e.length>0,G=i(()=>{f||w("click","checklist"),A(e=>!e)},[w,f]),Q=((e,a)=>{var t=(e=>{if(!e)return null;var a=e.split("-");if(3===a.length){var t=parseInt(a[0],10),n=parseInt(a[1],10),l=parseInt(a[2],10);if(t&&n&&l)return new Date(t,n-1,l)}return null})(a);return t?e.formatDate("date_short_v2",t):null})(L,N),H=y&&P&&V.language!==P,q=n.createElement(r,{id:"ts_module_tooltip"});return n.createElement(E,{onVisible:()=>w("in_view","")},a=>n.createElement("div",{ref:a,className:u("_2oPcIw1r",{_16XWDY6r:"RESTAURANTS"===p})},n.createElement("div",{className:"_3DVpbQ1t"},n.createElement(o,{src:"/img2/icons/illustration-handwash_2x.png",className:"_1_zmoVbU"}),n.createElement("div",{className:"UFMWHg_r"},n.createElement(r,{id:"sanitation_checklist_covid19_travel_safe_v2"}),n.createElement("div",{className:"_2Hm7AzLU"},n.createElement(S,{triggeringElement:n.createElement(d,{name:"info",size:14}),content:q,variant:"RESTAURANTS"===p&&"DESKTOP"===O?"top-caret":"bottom-caret"})))),n.createElement("div",{className:"_3W5bNZAL"},n.createElement("div",{className:"_1R1TqoXf"},x&&n.createElement(E,{onVisible:()=>w("in_view","checklist")},a=>n.createElement("div",{ref:a,className:"_1Lx6f28C"},n.createElement("div",{className:"_3aqnjXWT"},(e=>{switch(e){case"ATTRACTION-PRODUCTS":return n.createElement(s,{id:"sanitation_checklist_list_header_experiences"});case"RESTAURANTS":return n.createElement(s,{id:"sanitation_checklist_list_header_restaurants"});case"HOTELS":return n.createElement(s,{id:"sanitation_checklist_list_header_hotels"});default:return null}})(p)),n.createElement("ul",{className:"_3D0XBsEg"},U.map(e=>n.createElement("li",{key:e.tagId,className:"GYBSqr0l"},n.createElement("span",{className:"_1AOUUeGM"},e.localizedName)))),e.length>k&&D(!f,G),n.createElement("div",{className:u("_38Y6dyZ6","lGyKkXUv")},Q&&n.createElement(s,{id:"sanitation_checklist_updated",args:{updatedDate:Q}})," ",n.createElement(s,{id:"sanitation_checklist_disclaimer_text"})))),n.createElement("div",{className:u("BgbBzL3k",{_2BY36QLB:!x})},y&&n.createElement(E,{onVisible:()=>w("in_view","announcement")},e=>n.createElement("div",{ref:e,className:"_18ybyknO"},t&&n.createElement("div",{className:"_3aqnjXWT"},n.createElement(s,{id:"sanitation_checklist_note_header",args:{locationName:t}})," "),h||((e,a)=>e?n.createElement(_,{clickCallback:e=>("CTA"===e&&a("click","announce"),"CTA"===e||"CTA_COLLAPSE"===e),collapsible:!0,cta:D(!0,()=>{}),ctaCollapse:D(!1,()=>{}),numLinesToShow:3,ctaNewline:!0,customCssClass:"_3cZbEG8a"},e):null)(y,w),H&&n.createElement(R,{locationId:g,targetLanguage:V.language,track:()=>w("translation_click",p)}))),n.createElement("div",{className:u("_3LDBzScz",{"Y0f7DA-S":!y})},((e,a,t,l)=>e||a?n.createElement("div",{className:"BgbBzL3k"},n.createElement("div",{className:"_3aqnjXWT"},n.createElement(s,{id:"sanitation_checklist_more_questions"})),e&&n.createElement("div",{className:"_3n1cs_iH"},n.createElement("span",{className:"QAiAK1pa"},n.createElement(d,{name:"phone"})),n.createElement("a",{className:"_1748LPGe",href:"tel:"+e,onClick:()=>t("click","phone")},e)),a&&n.createElement("div",{className:"_3n1cs_iH"},n.createElement("span",{className:"QAiAK1pa"},n.createElement(d,{name:"email"})),n.createElement("a",{className:u("_1748LPGe","_3Yn9cDiG"),href:"mailto:"+a,onClick:()=>t("click","email")},(e=>{switch(e){case"ATTRACTION-PRODUCTS":return n.createElement(s,{id:"sanitation_checklist_email_operator"});case"RESTAURANTS":return n.createElement(s,{id:"sanitation_checklist_email_restaurant"});case"HOTELS":return n.createElement(s,{id:"Dashboard_HSBookingTools_ClickTypeEmail"});default:return null}})(l)))):null)(B,I,w,p),((e,a,t)=>e>0&&a>0?n.createElement("div",{className:"BgbBzL3k"},n.createElement("div",{className:"_3aqnjXWT"},n.createElement(s,{id:"sanitation_checklist_community"})),n.createElement("div",{className:"_3n1cs_iH"},n.createElement("span",{className:"QAiAK1pa"},n.createElement(d,{name:"forums"})),n.createElement("a",{className:"_1748LPGe",href:`/FAQ-g${a}-d${e}`,onClick:()=>t("click","Q&A")},n.createElement(s,{id:"sanitation_checklist_ask_a_question"}))),n.createElement("div",{className:"_3n1cs_iH"},n.createElement("span",{className:"QAiAK1pa"},n.createElement(d,{name:"pencil-paper"})),n.createElement("a",{className:"_1748LPGe",href:`/UserReview-g${a}-d${e}`,onClick:()=>t("click","WaR")},n.createElement(s,{id:"sanitation_checklist_write_a_review"})))):null)(g,v,w)))),n.createElement("div",{className:u("_38Y6dyZ6","UtoRUqkq",{TV1Y3Qom:x})},Q&&n.createElement(s,{id:"sanitation_checklist_updated",args:{updatedDate:Q}})," ",x&&n.createElement(s,{id:"sanitation_checklist_disclaimer_text"})))))};return[()=>{(A=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTranslatedManagementNoteQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetLanguage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"TranslatedManagementNote"},"name":{"kind":"Name","value":"OnDemandMachineTranslation_translateCovid19Response"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetLanguage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetLanguage"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translatedResponse"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"targetLanguage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":346}}')).__key=0xb2f8ca243438,A.loc.source={body:"b2f8ca243438"},C=new Array(9).fill(1e3),e("default",I)},[e=>(t=e,n=e.default,l=e.useState,i=e.useCallback),e=>(s=e.default,c=e.useIntlFormatter,r=e.UnsafeLocalize),e=>m=e.useGARecorder,e=>d=e.default,e=>o=e.CdnImage,e=>u=e.default,e=>_=e.ReadMore,e=>E=e.HasBeenVisible,e=>g=e.default,e=>v=e.default,e=>k=e.BorderlessButton,e=>N=e.default,e=>p=e.LoadingSpinner,e=>h=e.usePollingQuery,e=>f=e.LazyImage,e=>(T=e.Environment,b=e.Device),e=>S=e.default]]},["cDcdfi","0DsHEV","fsml46","pyY-iJ","4kVXmt","jSLlaY","miRpRf","BLrxBS","x9N_Dh","O8LbtK","7yGKf-","VP50Wc","V08PS7","OnmvvE","KwOV1Z","2R4xv2","4J6GHD"]]);
