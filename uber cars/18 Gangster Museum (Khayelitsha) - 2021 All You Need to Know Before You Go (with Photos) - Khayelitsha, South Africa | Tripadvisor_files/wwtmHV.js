(this.$WP=this.$WP||[]).push(["wwtmHV",(e,t)=>{"use strict";var a,r,i,l,o=({type:e="location",id:t,tripId:o,allowPopStatModal:c,size:n,variant:s,position:d="card-corner",onClick:p=(()=>{}),onSaveComplete:m=(()=>{}),onUnsaveComplete:u=(()=>{})})=>{var{localize:v}=r(),_=a.useMemo(()=>({type:e,id:t}),[e,t]),C=a.useCallback(e=>e?m():u(),[m,u]);return a.createElement(l,{saveObject:_,tripId:o,allowPopStatModal:c,onComplete:C},(e,t,r)=>{var l=a.createElement(i,{size:n,variant:s,iconName:{name:"heart",selected:t},"aria-label":t?v.string("trip_detail_remove_from_trip"):v.string("trips_save_to_a_trip"),disabled:r,onClick:()=>{p(),e()}});return"card-corner"===d?a.createElement("div",{className:"c01cc3ik"},l):"map-corner"===d?a.createElement("div",{className:"_3Y_L0OHR"},l):l})};return[()=>{e("default",o)},[e=>a=e.default,e=>r=e.useLocalize,e=>i=e.CircularButton,e=>l=e.QueriedTripFlowSelector]]},["cDcdfi","0DsHEV","7yGKf-","HZtvHO"]]);
