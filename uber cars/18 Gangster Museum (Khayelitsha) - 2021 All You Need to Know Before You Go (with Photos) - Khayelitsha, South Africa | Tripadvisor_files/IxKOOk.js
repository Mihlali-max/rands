(this.$WP=this.$WP||[]).push(["IxKOOk",(e,t)=>{"use strict";var n,a,m,c,s,o,i,l,r,d,E,u,p,O,N,_,h=({id:e,onClose:t})=>{var u=m({}),[{selected:p,disabled:O,form:N},_]=s({reason:"OWNER_RESPONSE",validator:o(10,250)}),h=i(p,N),[I,T]=l({contentType:"ManagementResponse",contentId:e,submission:h});return c(({close:e})=>n.createElement(r,{stage:I,onClose:e},n.createElement(d,{value:N.comment||"",onChange:e=>{_({type:"modifyBody",payload:{comment:e.currentTarget.value}})},label:n.createElement("div",{className:"_80eTkTLo"},n.createElement(a,{id:"explain_why_management_response_violates_guidelines",args:{link:"/help/management_response_guidelines"}})),minLength:10,maxLength:250,required:!0}),n.createElement(E,{onSubmit:T,disabled:O})),{onOpen:u,onClose:t})},I=({selected:e,form:t,dispatch:a})=>n.createElement(n.Fragment,null,n.createElement(u,{reason:"WRONG_LOCATION",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"INAPPROPRIATE",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"WRITTEN_BY_COMPETITOR",selected:e,comment:t.comment,dispatch:a,minLength:10,maxLength:500}),n.createElement(u,{reason:"MORE_THAN_1_YEAR_AGO",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"REVIEW_NOT_CONSISTENT_WITH_RATING",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"NOT_TRAVELERS_OWN",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"DUPLICATE_CONTENT",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"PROMOTIONAL",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"NOT_ORIGINAL_REVIEW",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"DISAGREE_WITH_INFO",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"CONTAINS_PRIVATE_INFO",selected:e,comment:t.comment,dispatch:a}),n.createElement(u,{reason:"OTHER",selected:e,comment:t.comment,dispatch:a})),T=({id:e,selected:t,form:m,dispatch:c})=>n.createElement(n.Fragment,null,n.createElement(u,{reason:"PROFANE_EXPLICIT_HATE_SPEECH",selected:t,comment:m.comment,dispatch:c}),n.createElement(u,{reason:"PROMOTES_ILLEGAL_ACTIVITY",selected:t,comment:m.comment,dispatch:c}),n.createElement(u,{reason:"BIASED",selected:t,comment:m.comment,dispatch:c,minLength:10}),n.createElement(u,{reason:"CLOSED",selected:t,comment:m.comment,dispatch:c,minLength:10}),n.createElement(u,{reason:"WRONG_LOCATION",selected:t,comment:m.comment,dispatch:c,minLength:10}),n.createElement(u,{reason:"DUPLICATE_CONTENT",selected:t,comment:m.comment,dispatch:c}),n.createElement(u,{reason:"NOT_PERSONAL_EXPERIENCE",selected:t,comment:m.comment,dispatch:c}),n.createElement(p,{reason:"FALSE_MISLEADING_INFO",selected:t,dispatch:c},n.createElement(a,{id:"social_report_level2_1",args:{sUrl:"/Owners-d"+e}}))),R=({isOwner:e,id:t,selected:a,form:m,dispatch:c})=>e?n.createElement(I,{selected:a,form:m,dispatch:c}):n.createElement(T,{id:t,selected:a,form:m,dispatch:c}),S=({id:e,locationId:t=null,onClose:a})=>{var o,d,u,p=m({pid:40474}),[{selected:h,disabled:I,form:T},S]=s(),v=i(h,T),[g,L]=l({contentType:"Review",contentId:e,submission:v}),[{fetching:k,data:A}]=O({query:_,variables:{locationId:t||0},pause:null===t}),C=(null==A||null==(o=A.locations)||null==(d=o[0])||null==(u=d.currentUserOwnerStatus)?void 0:u.isValid)||!1;return c(({close:t})=>n.createElement(r,{stage:g,onClose:t},k?n.createElement(N,{height:"100px"}):n.createElement(R,{isOwner:C,id:e,selected:h,form:T,dispatch:S}),n.createElement(E,{onSubmit:L,disabled:I})),{onOpen:p,onClose:a})};return[()=>{(_=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsPropertyOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUserOwnerStatus"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isValid"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":148}}')).__key=0x860b0a498988,_.loc.source={body:"860b0a498988"},e("default",S),e("useReportManagementResponseModal",h)},[e=>n=e,e=>a=e.UnsafeLocalize,e=>m=e.useSocialLoginGate,e=>c=e.useVDOMPortal,e=>(s=e.useReportForm,o=e.useLengthValidator,i=e.useFormToSubmission,l=e.useReportFlow,r=e.ReportModal,d=e.CommentBox,E=e.SubmitVoteButton,u=e.CommentOption,p=e.RedirectOption),e=>O=e.useQuery,e=>N=e.default]]},["cDcdfi","0DsHEV","JFHNGL","vq6MSq","L5WCNE","5X2em-","Xi-2HZ"]]);
