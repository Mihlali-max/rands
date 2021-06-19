(this.$WP=this.$WP||[]).push(["S07X1M/57pCYe",(e,a)=>{"use strict";var t,l,o,i,r,n,d,s,c,u,p,m,v,_,g,h,f,b,k,C,E,U,w,F,y,T,S,N,x;function P(e,a){if(null==e)return{};var t,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(o[t]=e[t]);return o}var I=(e,a)=>{var[t,o]=l.useState(!1),i=u();return p("dragover",e=>{var a=e;null!=a.dataTransfer&&[...a.dataTransfer.items].some(e=>"file"===e.kind)&&(a.dataTransfer.dropEffect="copy",a.preventDefault(),o(!0))}),p("dragleave",e=>{t&&(e.preventDefault(),o(!1))}),p("drop",l=>{if(t){var r=l;r.preventDefault(),o(!1);var n=[];null!=r.dataTransfer&&(n=(r.dataTransfer.items?[...r.dataTransfer.items].map(e=>e.getAsFile()):[...r.dataTransfer.files]).filter(Boolean)),n.length>0&&(null!==a&&i({PhotoUploadFlow:{photoUploadWeb:{action:"fileSelectedDragDrop",description:a.length.toString()}}}),e(n))}}),{dragging:t}},M=(e,a,t)=>{var{localize:o}=r(),i=l.useCallback(e=>"video"===t?`${e.name}: ${o.string("post_video_file_type_error")}`:`${e.name}: ${o.string("post_photo_unsupported_file")}`,[o,t]),n=l.useCallback(e=>"video"===t?`${e.name}: ${o.string("post_video_size_error")}`:`${e.name}: ${o.string("file_size_too_big_photo_oops_message",{0:o.string("mobile_offline_megabyte_ffffec6c",{0:a/1024/1024})})}`,[o,a,t]);return l.useCallback(l=>{if(l.size>a)return Promise.reject(new Error(n(l)));var o=m(l.name);return o&&e.includes(o)?"video"===t?Promise.resolve():new Promise((e,a)=>{var t=new Image;t.onload=()=>{URL.revokeObjectURL(t.src),e()},t.onerror=()=>a(new Error(i(l))),t.src=URL.createObjectURL(l)}):Promise.reject(new Error(i(l)))},[e,a,i,n,t])},O=(e,a,t,l)=>{e({PhotoUploadFlow:{photoUploadWeb:{action:"uploadFailStatus",description:a.statusText}}}),e({PhotoUploadFlow:{photoUploadWeb:{action:"uploadFailStatusCode",description:a.status}}}),e({PhotoUploadFlow:{photoUploadWeb:{action:"uploadFailResponse",description:a.response.toString()}}}),e({PhotoUploadFlow:{photoUploadWeb:{action:"uploadFail",description:`${t+1} of ${l}`}}})},z=()=>{var e=u(),[a,t]=l.useState(),o=l.useRef(!1);l.useEffect(()=>(o.current=!0,()=>{o.current=!1}),[]);var[,i]=g(F),[,r]=g(y),n=l.useCallback(e=>{if(o.current)return e;throw new Error("upload aborted")},[]),d=l.useCallback(({mediaType:a,file:l,description:o,locationId:d,isForCuration:s},c,u)=>{var p={description:o,mediaType:"video"===a?"VIDEO":"PHOTO",mimeType:l.type,fileName:l.name,fileSize:l.size,locationIds:null!=d&&d>0?[d]:[],isForCuration:s};return("video"===a?i({request:p}):(e=>new Promise((a,t)=>{var l=new Image;l.onload=()=>{URL.revokeObjectURL(l.src),a({width:l.width,height:l.height})},l.onerror=t,l.src=URL.createObjectURL(e)}))(l).then(({width:e,height:a})=>i({request:Object.assign({},p,{width:e,height:a})}))).then(n).then(({data:o,error:i})=>{var r,n,d;if(i||"OK"!==(null==o||null==(r=o.initiateMediaUpload)?void 0:r.status)||null==(null==o||null==(n=o.initiateMediaUpload)?void 0:n.mediaId)||null==(null==o||null==(d=o.initiateMediaUpload)?void 0:d.uploadUrl))throw new Error("Upload failed");var{mediaId:s,uploadUrl:p}=o.initiateMediaUpload;return((e,a,l,o,i,r,n,d)=>new Promise((d,s)=>{var u=new XMLHttpRequest;u.open("PUT",l,!0),u.onload=()=>{200===u.status?(n||o({PhotoUploadFlow:{photoUploadWeb:{action:"uploadSuccess",description:`${i+1} of ${r}`}}}),d(a)):(n||O(o,u,i,r),s(new Error(`Upload of file ${e.name} failed.`)))},u.onerror=()=>{n||O(o,u,i,r),s(new Error(`Upload of file ${e.name} failed.`))},u.onabort=()=>s(new Error(`Upload of file ${e.name} aborted.`)),u.upload.onprogress=e=>{return a=e.loaded,t(e=>{var t=null==e?[]:[...e];return t[c]=a,t});var a},u.send(e)}))(l,s,p,e,c,u.length,"video"===a)}).then(n).then(e=>r({request:{mediaId:e}}).then(()=>({mediaId:e}))).finally(()=>{t(null)})},[i,r,n,e]);return[{progress:a},l.useCallback(e=>Promise.all(e.map(d)),[d])]},R=({mediaType:e,withMetadata:a,isForCuration:t,allowedFileTypes:o,maxFileSize:i,maxAllowedFiles:n,locationId:d})=>{var s=u(),{localize:c}=r(),p=M(o,i,e),[m,v]=l.useState({media:[],error:null}),_=l.useCallback(e=>{v(a=>Object.assign({},a,{error:e}))},[]),[g,h]=l.useState(!1),f="video"===e,b=f?S.maxAllowedFiles:T.maxAllowedFiles,k=l.useCallback(a=>{p(a).then(()=>{v(l=>l.media.some(e=>{return t=e.file,l=a,t.name===l.name&&t.size===l.size;var t,l})?l:l.media.length>=n?n!==b?l:{error:f?c.string("video_upload_max_number",{nVideos:n}):c.string("post_photo_tips_guidelines"),media:l.media}:{error:l.error,media:[...l.media,{mediaType:e,file:a,description:"",locationId:d,isForCuration:t}]})}).catch(e=>{f||s({PhotoUploadFlow:{photoUploadWeb:{action:"invalidFile",description:e.message}}}),_(e.message)})},[p,n,t,d,c,_,e,b,f,s]),C=l.useCallback(e=>{_(null),e.preventDefault(),[...e.target.files].forEach(k),f||s({PhotoUploadFlow:{photoUploadWeb:{action:"fileSelectedFilePicker",description:m.media.length.toString()}}}),e.currentTarget.value=""},[k,_,s,f,m.media.length]),E=l.useCallback((e,a)=>{v(t=>{var l=[...t.media];return l[e]=a,{error:null,media:l}})},[]),U=l.useCallback(e=>{v(a=>{var t=[...a.media];return t.splice(e,1),{error:null,media:t}})},[]),{dragging:w}=I(e=>{_(null),e.forEach(k)},f?null:m.media),F=!g&&m.media.length>0&&(!a||!f&&t||m.media.every(e=>e.description&&null!=e.locationId&&e.locationId>0)),[{progress:y},N]=z(),x=l.useCallback(()=>F?(f||s({PhotoUploadFlow:{photoUploadWeb:{action:"submitClicked"}}}),h(!0),_(null),N(m.media).then(e=>(f||s({PhotoUploadFlow:{photoUploadWeb:{action:"uploadedAll"}}}),h(!1),e)).catch(()=>{f||s({PhotoUploadFlow:{photoUploadWeb:{action:"uploadedErrorExists"}}});var e=f?c.string("video_upload_fail"):c.string("post_photo_upload_failed");_(e),h(!1)})):Promise.reject(),[N,F,m.media,_,c,f,s]);return{media:m.media,error:m.error,uploading:g,progress:y,canAddMore:m.media.length<n,canSubmit:F,dragging:w,onFileSelected:C,onMediaChanged:E,onMediaDeleted:U,onSubmit:x}},D=e=>{var{children:a}=e,t=P(e,["children"]),[o]=l.useContext(d),r=l.useRef(),n=Object.assign({},T,{},t),[c,u]=l.useState([]),[{progress:p},m]=z(),v=M(n.allowedFileTypes,n.maxFileSize),_=l.useRef([]),g=l.useCallback(e=>{_.current.splice(0,0,e)},[]),h=l.useCallback(e=>{var a=_.current.findIndex(a=>e===a);_.current.splice(a,1)},[]),f=l.useCallback(e=>{Promise.all(e.map(e=>v(e))).then(()=>{var a=e.map(e=>({mediaType:"photo",file:e,locationId:null,description:"",isForCuration:n.isForCuration}));return u(a),m(a)}).then(e=>{_.current.find(a=>!1!==a(e))}).catch(e=>{o({node:l.createElement(s,null,e.message||l.createElement(i,{id:"post_photo_upload_failed"}))})}).finally(()=>{u([])})},[v,m,o,n.isForCuration]),{dragging:b}=I(f,c),k=l.useCallback(()=>{var e=r.current;if(null==e)throw new Error("useCustomPhotoUploadFlow: must render the supplied element");e.click()},[]),C=l.useMemo(()=>({photos:c,open:k,dragging:b,progress:p,addPhotosUploadedCallback:g,removePhotosUploadedCallback:h}),[c,k,b,p,g,h]);return l.createElement(N.Provider,{value:C},a,l.createElement("input",{ref:r,type:"file",multiple:n.maxAllowedFiles>1,accept:n.allowedFileTypes.join(","),style:{display:"none"},onChange:e=>{e.preventDefault(),f([...e.currentTarget.files].filter(Boolean)),e.currentTarget.value=""},"aria-hidden":!0,tabIndex:-1}))},j=e=>{var a=l.useContext(N),{addPhotosUploadedCallback:t,removePhotosUploadedCallback:o}=a,i=P(a,["addPhotosUploadedCallback","removePhotosUploadedCallback"]),r=l.useRef(e);return r.current=e,l.useEffect(()=>{if(null==r.current)return()=>{};var e=(...e)=>!!r.current&&r.current(...e);return t(e),()=>{o(e)}},[t,o]),i},L=({media:e,index:a,mediaCount:t,withMetadata:o=!0,isForCuration:n=!1,hasPresetLocation:d=!1,progress:s,onChange:c,onDelete:u})=>{var{localize:p}=r(),[m,v]=l.useState(!1),[_,g]=l.useState(!1),U=l.useMemo(()=>URL.createObjectURL(e.file),[e.file]);l.useEffect(()=>()=>URL.revokeObjectURL(U),[U]);var[w,F]=l.useState(null),y=l.useCallback(()=>u&&u(a),[u,a]),T=l.useCallback(t=>{v(!1),c(a,Object.assign({},e,{description:t.currentTarget.value}))},[a,e,c]),S=l.useCallback(t=>{F(t),g(!0),c(a,Object.assign({},e,{locationId:null==t?void 0:t.locationId}))},[a,e,c]),N=l.useCallback(()=>{F(null),g(!1),c(a,Object.assign({},e,{locationId:null}))},[a,e,c]),x=m&&!e.description?l.createElement(i,{id:"uploader_error_required_field"}):null,P=_&&(null==e.locationId||e.locationId<=0)?l.createElement(i,{id:"uploader_error_required_field"}):null,I=null!=s,M="video"===e.mediaType?l.createElement(i,{id:"post_video_video_count_text",args:{nCurrentVideoCount:a+1,nTotalVideoCount:t}}):l.createElement(i,{id:"post_photo_video_count_text",args:{nCurrentphotoCount:a+1,nTotalphotoCount:t}});return l.createElement("div",{className:h("_39UqzOOZ",{_3PUsR4eP:o})},l.createElement("div",{className:"_2v2Q3LYg"},t>1&&l.createElement(b,{variant:"title-05",marginBottom:"spacing-02"},M),l.createElement("div",{className:"_2wMVOzNu"},"photo"===e.mediaType&&l.createElement("img",{className:"_3Yvk44aX",src:U,alt:""}),"video"===e.mediaType&&l.createElement("video",{controls:!0,controlsList:"nodownload nofullscreen",className:"_3Yvk44aX",alt:""},l.createElement("track",{default:!0,kind:"captions"}),l.createElement("source",{src:U,type:"video/mp4"})),!I&&l.createElement("div",{className:"_3M_m3A_c"},l.createElement(k,{size:"small",variant:"dark",iconName:"times","aria-label":p.string("mobile_delete"),onClick:y})),null!=s&&l.createElement("div",{className:"_3hB_7Bek"},l.createElement(C,{numSteps:e.file.size,currentStep:s})))),o&&l.createElement("div",{className:"_1bjeam2F"},l.createElement(E,{id:"media-upload-description-"+a,variant:"five-line",label:l.createElement(b,{variant:"title-05"},l.createElement(i,{id:"post_photo_add_description_v2_part_1"})),placeholder:"video"===e.mediaType?p.string("post_video_add_description_v2_part_2"):p.string("post_photo_add_description_v2_part_2"),maxLength:500,characterCountType:x?void 0:"max",required:!0,value:e.description,state:I?"disabled":x?"error":"enabled",errorText:x,onChange:T,onBlur:()=>v(!0),marginBottom:"spacing-03"}),!n&&!d&&l.createElement("div",{className:"_-1IAzMRV"},null==w?l.createElement(f,{selectedResultDisplayValue:null==w?void 0:w.searchText,size:"small",errorText:P,placeholder:p.string("photo_uploader_add_a_location_tag"),onTextInputChanged:()=>g(!1),onBlur:()=>g(!0),onSelect:S}):l.createElement(k,{size:"small",variant:"dark",iconName:"times",textPosition:"lead","aria-label":`${w.searchText}. ${p.string("remove_location_cf6")}`,disabled:I,onClick:N},w.title))))},V=(e,a,t=(e=>e))=>{var o=e.match(a);return null!=o?l.createElement(l.Fragment,null,e.substr(0,o.index),t(o[1]||o[0]),e.substr(o.index+o[0].length)):e},A=({plural:e})=>e?t.createElement(i,{id:"post_photo_upload_photos_button"}):t.createElement(i,{id:"confirmed_booker_upload_photo"}),q=e=>{var{variant:a="large",dragging:t,disabled:o,allowedFileTypes:n=[],onFileSelected:d,mediaType:s,multiple:c=!1}=e,u=P(e,["variant","dragging","disabled","allowedFileTypes","onFileSelected","mediaType","multiple"]),p=U(),{localize:m}=r();return l.createElement("label",{className:h("DWeK--Ai",w(u),{fPIs6KMA:"small"===a,_2wg8awbj:"large"===a,_2_BV1R4s:!o&&t,_2tF9Kdrx:o,l9JU6k7k:p})},l.createElement("input",{type:"file",multiple:c,accept:n.join(","),disabled:o,className:"_1Zxkup0W",onChange:d,tabIndex:o?"-1":"0"}),"small"===a&&l.createElement(b,{variant:"supporting-01"},l.createElement("span",{className:"_19y44MUH"},V("video"===s?m.string("post_video_upload_another_video"):m.string("post_photo_upload_another_video"),/<\/> <span class="{sColorClass1}">(.*)<\/span>/,e=>l.createElement("span",{className:"_963sB4hL"},e))),l.createElement("span",{className:h("_1uCkVrUf","_963sB4hL")},"video"===s?l.createElement(i,{id:"add_more_videos_mw_uploader"}):l.createElement(i,{id:"add_more_photos_mw_uploader"}))),"large"===a&&l.createElement("div",null,l.createElement(b,{variant:"button-01",marginY:"spacing-03"},l.createElement("div",{className:"cfmlxRwZ",htmlFor:"media-uploader-file"},"video"===s?l.createElement(i,{id:"add_more_videos_mw_uploader"}):l.createElement(A,{plural:c}))),l.createElement("div",{className:"_19y44MUH","aria-hidden":!0},l.createElement(b,{variant:"supporting-01",marginY:"spacing-03"},l.createElement(i,{id:"post_photo_or_just_text"})),l.createElement(b,{variant:"title-05",marginY:"spacing-03"},l.createElement(i,{id:"post_photo_drag_and_drop_from_desktop"})))))},W=(e=Object.freeze({}))=>{var a=u(),{login:t}=c(),[r]=l.useContext(d),n=l.useRef(()=>{}),{open:p}=o(({close:a})=>l.createElement(x,Object.assign({},e,{onUploadCanceled:()=>{a(),n.current([])},onUploadSuccess:(...t)=>{a(),r({node:l.createElement(s,null,"video"===e.mediaType?l.createElement(i,{id:"success_repost_video"}):l.createElement(i,{id:"success_repost_photo"}))}),n.current(...t)}})),{},[e,r]);return l.useCallback(()=>t({flow:"CORE_COMBINED"}).then(()=>(p(),"video"!==e.mediaType&&a({PhotoUploadFlow:{photoUploadWeb:{action:"opened"}}}),new Promise(e=>{n.current=e}))),[t,p,a,e.mediaType])};return e("_",P),[()=>{(F=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitializeMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InitiateMediaUploadRequestInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initiateMediaUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mediaId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":165}}')).__key=0xc803ecdf4604,F.loc.source={body:"c803ecdf4604"},(y=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinalizeMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompleteMediaUploadForClientRequestInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeMediaUploadForClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}],"loc":{"start":0,"end":138}}')).__key=0x61dd9d92ebbe,y.loc.source={body:"61dd9d92ebbe"},T={mediaType:"photo",withMetadata:!0,isForCuration:!1,allowedFileTypes:[".jpg",".jpeg",".gif",".png"],maxFileSize:_,maxAllowedFiles:10,locationId:-1},S={mediaType:"video",withMetadata:!0,isForCuration:!1,allowedFileTypes:[".mp4",".m4v",".mov"],maxFileSize:v,maxAllowedFiles:5,locationId:-1},N=l.createContext({photos:[],open:()=>{},dragging:!1,progress:null,addPhotosUploadedCallback:()=>{},removePhotosUploadedCallback:()=>{}}),x=n.onUsage(()=>a("S07X1M/v-c-G4"),"default"),e({C:D,D:q,M:L,_:P,a:T,b:W,c:j,d:S,r:V,u:R})},[e=>(t=e,l=e.default),e=>o=e.useVDOMPortal,e=>(i=e.default,r=e.useLocalize),e=>n=e.component,e=>(d=e.Toast,s=e.ToastItem),e=>c=e.default,e=>u=e.useInteractionLogger,e=>p=e.useWindow,e=>(m=e.fileExtension,v=e.maxVideoUploadSizeInBytes,_=e.maxImageUploadSizeInBytes),e=>g=e.useMutation,e=>h=e.default,e=>f=e.LocationSelector,e=>b=e.default,e=>k=e.CircularButton,e=>C=e.default,e=>E=e.TextArea,e=>U=e.useKeyboardNavigationMode,e=>w=e.margin]]},["cDcdfi","vq6MSq","0DsHEV","pLbCP4","Q7TAd7","VANuRt","fsml46","Dg5_-9","V_I8wA","5X2em-","jSLlaY","dAea-m","VP50Wc","7yGKf-","Ly5eaD","7bbexq","W3_c4H","iekllc"]]);