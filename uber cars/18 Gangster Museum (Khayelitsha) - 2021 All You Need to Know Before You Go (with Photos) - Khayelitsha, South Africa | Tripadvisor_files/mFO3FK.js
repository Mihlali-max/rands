(this.$WP=this.$WP||[]).push(["mFO3FK",(e,i)=>{"use strict";var a,n,t,l,d,r,s=({locationId:e})=>{var i,s,[u]=n({query:r,variables:{locationId:e}}),{travelersChoice:c,coeAward:o}=u.data||{},m=null==c?void 0:c[0],v=!!(null==o||null==(i=o[0])||null==(s=i.locations)?void 0:s[0]),k=null,{viewportCategory:N}=a.useContext(t),g="TABLET"===N?"top-caret":"left-caret";if(null==m?void 0:m.year){var{year:y}=m,f=function(e,i){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],i.indexOf(a)>=0||(t[a]=e[a]);return t}(m,["year"]);k=a.createElement(l,Object.assign({year:y},f))}else v&&(k=a.createElement(d,{tooltipVariant:g}));return a.createElement("div",{className:"t0W6sKYn"},k)};return[()=>{(r=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AwardBadge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"travelersChoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locationIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"regionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"campaignType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ranking"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"coeAward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"requests"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"locations"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}]}}]}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":238}}')).__key=79732676120860,r.loc.source={body:"488435d6511c"},e("default",s)},[e=>a=e,e=>n=e.useQuery,e=>t=e.Device,e=>l=e.TravelersChoice,e=>d=e.CertificateOfExcellence]]},["cDcdfi","5X2em-","2R4xv2","VswJjR","rATZ_h"]]);