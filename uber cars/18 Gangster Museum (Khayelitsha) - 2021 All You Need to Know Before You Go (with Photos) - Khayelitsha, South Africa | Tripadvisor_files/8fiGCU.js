(this.$WP=this.$WP||[]).push(["8fiGCU",(e,r)=>{"use strict";var i,s,t,a,u={value:"",isRequired:!0,isValid:!1,isDirty:!1,isError:!1},d={value:"",isRequired:!1,isValid:!0,isDirty:!1,isError:!1},l=(e,r)=>{var a=i(()=>{var i=Object.entries(e).map(([e,{value:i,isRequired:s}])=>[e,{value:i,isValid:!s&&!i||r[e](i),isError:!1,isDirty:!1,isRequired:s}]);return Object.fromEntries(i)},[e,r]),u=s((e,{field:i,update:s})=>{var t=e[i],a=r[i],u=Object.assign({},t,{},s),d=!u.isRequired&&!u.value||a(u.value);return Object.assign({},e,{[i]:Object.assign({},u,{isValid:d,isError:u.isDirty&&!d})})},[r]),d=s((e,{field:r})=>{var i=e[r];return Object.assign({},e,{[r]:Object.assign({},i,{isError:!0})})},[]),l=s(e=>Object.keys(e).reduce((e,r)=>u(e,{type:"UPDATE",field:r,update:{isDirty:!0}}),e),[u]),c=s((e,r)=>{switch(r.type){case"UPDATE":return u(e,r);case"ERROR":return d(e,r);case"DIRTY_ALL":return l(e);default:return e}},[d,l,u]),[n,R]=t(c,a),v=s((e,r)=>{R({type:"UPDATE",field:e,update:r})},[R]),E=s(e=>{R({type:"ERROR",field:e})},[R]),f=s(()=>(R({type:"DIRTY_ALL"}),Object.values(n).reduce((e,r)=>r.isValid&&e,!0)),[n,R]);return i(()=>({state:n,update:v,validate:f,setHasError:E}),[n,v,E,f])};return[()=>{a={required:u,notRequired:d},e("default",l),e("defaults",a)},[e=>(i=e.useMemo,s=e.useCallback,t=e.useReducer)]]},["cDcdfi"]]);
