(this.$WP=this.$WP||[]).push(["1Oxbni",(e,t)=>{"use strict";var r,a,n,l,i,c,o=(e,t)=>{var r=e.getBoundingClientRect(),a=t.getBoundingClientRect();r.left<a.left?t.scrollLeft+=r.left-a.left-c:r.right>a.right&&(t.scrollLeft+=r.right-a.right+c)},u=e=>{var{nextSibling:t}=e;return!!t&&(t.disabled?u(t):(t.focus(),!0))},s=e=>{var{previousSibling:t}=e;return!!t&&(t.disabled?s(t):(t.focus(),!0))},f=({children:e,value:t,onChange:a})=>{var n=r.useRef(null),l=r.useCallback(e=>{var{target:t,key:r}=e,a=!1;"ArrowLeft"===r?a=s(t):"ArrowRight"===r&&(a=u(t)),a&&e.preventDefault()},[]),i=r.useCallback(e=>{n.current&&o(e.target,n.current)},[]),c=r.useRef(),f=r.Children.map(e,e=>{if(!r.isValidElement(e))return e;var n=e.props.value===t;return r.cloneElement(e,{active:n,onChange:a,ref:n?t=>{c.current=t,"function"==typeof e.ref?e.ref(t):"object"==typeof e.ref&&e.ref&&(e.ref.current=t)}:e.ref})});return r.useEffect(()=>{var e=c.current,t=n.current;e&&t&&o(e,t)},[t]),r.createElement(r.Fragment,null,r.createElement("div",{className:"_4vK9GPBc",role:"tablist","data-automation":"tab-list",onKeyDown:l,onFocus:i,ref:n},f))};return[()=>{i=r.forwardRef(({active:e,disabled:t,id:i,ariaControls:c,onActive:o,onChange:u,value:s,tabCount:f,children:d,titleTypographyVariant:b="title-05",tabCountTypographyVariant:v="title-05"},g)=>{var h=a(),p=n("_16XziRXP",h,{_1B9wrJv9:t,"ZL5-t8QJ":e}),m=r.useCallback(()=>{u&&u(s),o&&o()},[s,u,o]);return r.createElement("button",{id:i,className:p,role:"tab",type:"button",disabled:t,"aria-selected":e,"aria-controls":c,tabIndex:e?void 0:-1,ref:g,onClick:m},r.createElement(l,{variant:b,elementType:"span",color:"inherit"},d),f&&r.createElement(l,{variant:v,elementType:"span",color:"inherit"},r.createElement("span",{className:"_1uUNCBYO"},f)))}),c=34,e({Tab:i,TabBar:f})},[e=>r=e,e=>a=e.useKeyboardFocusableClassName,e=>n=e.default,e=>l=e.default]]},["cDcdfi","W3_c4H","jSLlaY","VP50Wc"]]);