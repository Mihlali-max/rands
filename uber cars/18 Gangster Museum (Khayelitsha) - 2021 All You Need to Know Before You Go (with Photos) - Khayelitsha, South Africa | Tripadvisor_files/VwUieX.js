(this.$WP=this.$WP||[]).push(["VwUieX",(e,t)=>{"use strict";var o,n,r,a,s,i,l,c,p,u,d,m,h,f,v,g,C,P,k,y,M,I,b=(e,t=[],o={loading:!1})=>{var r=n.useRef(e);n.useEffect(()=>{r.current=e},[e]);var a=n.useRef(!1);n.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]);var[s,i]=n.useState(o);return[s,n.useCallback((...e)=>{i({loading:!0}),r.current(...e).then(e=>(a.current&&i({value:e,loading:!1}),e),e=>(a.current&&i({error:e,loading:!1}),e))},t)]},x=({forceMapProvider:e,mapInterfaceProps:t,containerRef:o,geoId:r,servlet:a,onMapInterfaceLoaded:c})=>{var p=n.useContext(i),u=n.useContext(l),d=n.useRef(c),m=n.useRef(o),h=n.useRef(Object.assign({},t,{isRtl:p.locale.isRtl,locale:p.locale.language,userAgentCategory:u.userAgentCategory}));d.current=c,m.current=o,h.current=Object.assign({},t,{isRtl:p.locale.isRtl,locale:p.locale.language,userAgentCategory:u.userAgentCategory});var f=((e,t,o)=>{var r,a,l,c,[p,u]=n.useState(null),[{value:d},m]=b(n.useCallback(e=>(e=>{if("mock"===e.forceMapProvider){var t={mapProvider:"mock",mapConfig:{lang:"en",channel:"ta.maps.mock"}};return new Promise(e=>e({json:()=>new Promise(e=>e(t))}))}return fetch("/data/1.0/maps/provider?"+(e=>{var t={};return Object.keys(e).forEach(o=>{null!=e[o]&&(t[o]=e[o])}),new URLSearchParams(t)})({servletName:e.servletName,locale:e.locale,geoId:e.geoId,forceMapProvider:e.forceMapProvider}).toString(),{credentials:"same-origin"})})(e).then(e=>e.json()),[])),[{value:h},f]=b(n.useCallback(e=>{var t=v[e];return t?t():Promise.reject(Error("Unknown map provider "+e))},[]),[]),[{loading:g,value:C},P]=(r=n.useRef(0),a=n.useRef(s()),l=n.useCallback((e,t,o)=>{var n=new t;if(n.isLibraryLoaded())return new Promise(e=>e({loaded:!0,wasPreviouslyLoaded:!0}));var s=++r.current;return new Promise(t=>{n.loadLibrary(o,()=>{if(a.current({module:"map_view",action:"load",context:e}),s!==r.current)throw new Error("Stale map provider request");t({loaded:!0,wasPreviouslyLoaded:!1})})})},[]),(c=b(l))[0].loading?[c[0],()=>{}]:c),k=((e,t,o)=>{var r=n.useContext(i).locale.language;return n.useRef({servletName:o,locale:r,geoId:t,forceMapProvider:e}).current})(e,t,o),y=C&&C.loaded,M=d&&d.mapProvider,I=d&&d.mapConfig,x=h&&h.MapFactory;n.useLayoutEffect(()=>{m(k)},[k,m]),n.useLayoutEffect(()=>{M&&f(M)},[M,f]);var E=g||y;return n.useLayoutEffect(()=>{!E&&M&&I&&x&&P(M,x,Object.assign({lang:k.locale,channel:"ta.maps"},I))},[E,k,x,I,M,P]),n.useLayoutEffect(()=>{y&&M&&h&&!p&&u({MapInterfaceClass:h.MapInterface,mapProviderName:M})},[M,h,p,y]),p})(e,r,a),g=f?f.MapInterfaceClass:null,C=f?f.mapProviderName:null;return n.useLayoutEffect(()=>{if(g&&C){var e=new g(m.current,h.current);d.current(e,C)}},[g,C]),null},E=e=>{var t=s();return n.createElement(d,Object.assign({gaRecorder:t},e))},O=e=>n.createElement(P,null,({map:t})=>n.createElement(m,Object.assign({},e,{map:t}))),R=(e,t,o=!1)=>{var{map:r}=n.useContext(g),a=n.useRef(t);n.useEffect(()=>{a.current=t},[t]);var s=n.useCallback(()=>{a.current()},[]);n.useEffect(()=>r?(o?r.once(e,s):r.on(e,s),()=>{r.off(e,s)}):()=>{},[r,e,s,o])},L=({zIndexOffset:e,position:t,children:o,onClick:r,onMouseEnter:a,onMouseLeave:i,disableTracking:l,trackingContext:u,className:d,draggable:m,onDrag:h})=>{var{map:f}=n.useContext(g),[v,C]=n.useState(null),[P,k]=n.useState(!1),M=s();n.useEffect(()=>{if(!f)return()=>{};var e=f.createMarkerContainer();return C(e),e.getContainer()?k(!0):e.setMarkerReadyCallback(()=>{k(!0)}),()=>{f.removeMarkerContainer(e)}},[f]),n.useEffect(()=>{v&&v.setZIndexOffset(e)},[v,e]),n.useEffect(()=>{v&&!t.equals(v.getPosition())&&v.setPosition(t)},[v,t]),n.useEffect(()=>{v&&v.setDraggable(m)},[v,m]),n.useEffect(()=>{v&&v.setDragCallback(h)},[v,h]);var I=n.useCallback(e=>{e.stopPropagation(),l||M({module:"pin",action:"pin_click",context:u||""}),r&&r()},[l,u,r,M]),b=n.useCallback(()=>{l||M({module:"pin",action:"pin_hover",context:u||""}),a&&a()},[l,u,a,M]),[x,E]=((e,t=0)=>{var o=n.useRef(null),r=n.useRef(e),a=n.useCallback(()=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{r.current()},t)},[t]),s=n.useCallback(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]);return n.useEffect(()=>{r.current=e},[e]),[a,s]})(b,300),O=n.useCallback(()=>{E(),i&&i()},[i,E]),R=v&&v.getContainer();if(P&&R){var L=n.createElement("div",{className:p(d,{ipRu2ZXn:!!r}),onClick:I,onTouchEnd:I,onMouseEnter:x,onMouseLeave:O},o);return n.createElement(y,{value:{position:t}},c.createPortal(L,R))}return null},S=e=>n.createElement(L,{position:e.position,zIndexOffset:e.zIndexOffset,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.onClick,trackingContext:e.trackingContext,draggable:e.draggable,onDrag:e.onDrag},n.createElement(u,{style:{cursor:"pointer",width:e.width+"px",height:e.height+"px",position:"absolute",left:`-${e.anchor.x}px`,top:`-${e.anchor.y}px`,opacity:e.alpha,transition:e.animated?"width 0.3s, height 0.3s, left 0.3s, top 0.3s":null},src:e.src}),e.children),w={markerCalloutContainer:"_1Ww3ZOQw",topleft:"p6h-fNU_",top:"_3gkGhcV7",topright:"_2VCJJ2du",left:"_20yznTxd",right:"_3B9aMwFS",bottomleft:"_3ecYLYq5",bottom:"_2nmuQ8oG",bottomright:"_1KI1G-MU",noInteraction:"AgXu8aaS"},z=()=>{},_=e=>{if(!e.visible)return null;var t=t=>n.createElement(P,null,({map:o})=>o&&n.createElement(h,{direction:e.direction,offset:e.offset,position:t,autoPan:e.autoPan,map:o,zIndexOffset:e.zIndexOffset,disableInteraction:e.disableInteraction},e.children));return e.position?t(e.position):n.createElement(M,null,e=>t(e.position))},Z=e=>n.createElement(P,null,({map:t})=>n.createElement(f,Object.assign({},e,{map:t})));return[()=>{v={"ta-maps-google":()=>t("1lTcUI"),"ta-maps-autonavi":()=>t("q9bHm9"),mock:()=>t("RSaHg-")},g=n.createContext({map:null,mapProvider:""}),C=g.Provider,P=g.Consumer,e("MapComponentTrackingWrapper",d=class extends n.PureComponent{constructor(...e){super(...e),this.state={mapInterface:null,mapProvider:null},this.onMapInterfaceLoaded=(e,t)=>{if(null===this.state.mapInterface){e.once("renderComplete",()=>{this.props.onLoad&&this.componentMounted&&e&&this.props.onLoad({map:e})}),e.on("click",e=>{this.props.onClick&&this.props.onClick(e)}),e.on("centerChange",e=>{this.props.onCenterChange&&this.componentMounted&&this.props.onCenterChange(e)}),e.on("panStart",e=>{this.props.gaRecorder({module:"map_move",action:"pan",context:e.zoom.toString(10)}),this.props.onPanStart&&this.props.onPanStart(e)}),e.on("renderComplete",e=>{this.props.onRenderComplete&&this.props.onRenderComplete(e)});var o=this.props.initialZoom;e.on("zoomChange",e=>{this.props.gaRecorder({module:"map_move",action:e.zoom>o?"zoom_in":"zoom_out",context:e.zoom.toString(10)}),o=e.zoom,this.props.onZoomChange&&this.props.onZoomChange(e)}),this.props.initialBounds&&e.setBounds(this.props.initialBounds),this.setState({mapInterface:e,mapProvider:t})}},this.setContainerRef=e=>{this.containerRef||(this.containerRef=e,this.forceUpdate())},this.handleResize=()=>{this.state.mapInterface&&this.state.mapInterface.resize()},this.componentMounted=!1,this.containerRef=null}componentDidMount(){this.componentMounted=!0,this.props.gaRecorder({module:"map_view",action:"open",context:this.containerRef?""+this.containerRef.offsetWidth:"0"})}componentWillUnmount(){this.componentMounted=!1;var e=this.state.mapInterface;e&&e.unmount(),this.props.gaRecorder({module:"map_view",action:"close"})}render(){var{mapInterface:e,mapProvider:t}=this.state,{children:o}=this.props;return n.createElement("div",{className:"_1yEL-TIe",style:{touchAction:this.props.disableGestures?"auto":"none"}},n.createElement(a,{callback:this.handleResize}),this.containerRef&&n.createElement(r,{node:{current:this.containerRef}},(e,t)=>(!this.props.lazy||t)&&!!this.containerRef&&n.createElement(x,{mapInterfaceProps:{zoom:this.props.initialZoom,center:this.props.initialCenter,minZoom:this.props.minZoom,maxZoom:this.props.maxZoom,onLoad:this.props.onLoad,scrollWheelZoom:this.props.scrollWheelZoom,disableGestures:this.props.disableGestures,styles:this.props.styles},containerRef:this.containerRef,onMapInterfaceLoaded:this.onMapInterfaceLoaded,forceMapProvider:this.props.forceMapProvider,servlet:this.props.servlet,geoId:this.props.geoId})),n.createElement("div",{className:"map_container _3gxaoFgc",ref:this.setContainerRef}),n.createElement(C,{value:{map:e,mapProvider:t||""}},o))}}),d.defaultProps={initialCenter:new o(0,0),initialZoom:13,initialBounds:null,minZoom:2,maxZoom:19,scrollWheelZoom:!0,disableGestures:!1,lazy:!0,children:[],onLoad:null,onClick:null,onPanStart:null,onCenterChange:null,onZoomChange:null,onRenderComplete:null},m=class extends n.PureComponent{constructor(...e){super(...e),this.state={circleOverlay:null}}componentDidMount(){this.handleProps(this.props)}componentDidUpdate(){this.handleProps(this.props)}componentWillUnmount(){var{map:e}=this.props,{circleOverlay:t}=this.state;e&&t&&(e.removeCircleOverlay(t),this.setState({circleOverlay:null}))}handleProps(e){var{circleOverlay:t}=this.state,{map:o}=e;o&&(t||(t=o.addCircleOverlay(this.props),this.setState({circleOverlay:t})),t.setPosition(e.position),t.setRadius(e.radius),t.setFillColor(e.fillColor),t.setStrokeColor(e.strokeColor),t.setStrokeWidth(e.strokeWidth),t.setOpacity(e.opacity))}render(){return null}},k=n.createContext({position:null}),y=k.Provider,M=k.Consumer,L.defaultProps={zIndexOffset:0,children:null,onClick:void 0,onMouseEnter:void 0,onMouseLeave:void 0,disableTracking:!1,trackingContext:void 0,className:void 0,draggable:!1},S.defaultProps={zIndexOffset:0,draggable:!1,animated:!1,children:null,onMouseEnter:null,onMouseLeave:null,onClick:null,alpha:1,trackingContext:null},I=n.memo(S),h=class extends n.PureComponent{constructor(...e){super(...e),this.hasAutoPanned=!1,this.checkAutoPan=e=>{if(e&&this.props.autoPan&&!this.hasAutoPanned){this.hasAutoPanned=!0;var t=e.offsetWidth,o=e.offsetHeight;this.props.map.panIntoView(this.props.position,((e,t,o)=>{var n={left:t/2,right:t/2,top:o/2,bottom:o/2};return e.includes("left")&&(n.left=t,n.right=0),e.includes("right")&&(n.left=0,n.right=t),e.includes("top")&&(n.top=o,n.bottom=0),e.includes("bottom")&&(n.top=0,n.bottom=o),n})(this.props.direction,t,o))}}}render(){var{direction:e,position:t,zIndexOffset:o,offset:r,children:a,disableInteraction:s}=this.props,i=w[e];return n.createElement(L,{position:t,zIndexOffset:o,disableTracking:!0},n.createElement("div",{ref:this.checkAutoPan,className:`${w.markerCalloutContainer} ${s?w.noInteraction:""} ${i}`,style:{marginTop:r.y,marginLeft:r.x},onClick:z,onMouseEnter:z,onMouseLeave:z},a))}},_.defaultProps={position:null,autoPan:!0,visible:!0,offset:{x:0,y:0},zIndexOffset:99999999,disableInteraction:!1},f=class extends n.PureComponent{constructor(...e){super(...e),this.state={polygonOverlay:null}}componentDidMount(){this.handleProps(this.props)}componentDidUpdate(){this.handleProps(this.props)}componentWillUnmount(){var{map:e}=this.props,{polygonOverlay:t}=this.state;e&&t&&(e.removePolygonOverlay(t),this.setState({polygonOverlay:null}))}handleProps(e){var{polygonOverlay:t}=this.state,{map:o}=e;o&&(t||(t=o.addPolygonOverlay(this.props),this.setState({polygonOverlay:t})),t.setPolygon(e.coords),t.setFillColor(e.fillColor),t.setStrokeColor(e.strokeColor),t.setStrokeWidth(e.strokeWidth),t.setOpacity(e.opacity),t.setStrokeOpacity(e.strokeOpacity),t.setOnMouseOverInteraction(e.onMouseOver),t.setOnMouseOutInteraction(e.onMouseOut),t.setOnClickInteraction(e.onClick))}render(){return null}},e({CircleOverlay:O,IconMarker:I,MapComponent:E,MapContext:g,MapContextConsumer:P,MapContextProvider:C,MapProviderAutonavi:"ta-maps-autonavi",MapProviderCitymaps:"ta-maps-citymaps",MapProviderGoogle:"ta-maps-google",Marker:L,PolygonOverlay:Z,Popup:_,useMapEvent:R})},[t=>{o=t.LatLng,e({LatLng:t.LatLng,LatLngBounds:t.LatLngBounds,Util:t.Util})},t=>e("MapInterface",t.MapInterface),e=>n=e,e=>r=e.HasBeenVisible,e=>a=e.default,e=>s=e.useGARecorder,e=>(i=e.Environment,l=e.Device),e=>c=e.default,e=>p=e.default,e=>u=e.CdnImage,t=>e("MockMapInterface",t.MapInterface)]]},["A8AD3f","kI6OFW","cDcdfi","BLrxBS","w4JHTr","fsml46","2R4xv2","faye7n","jSLlaY","4kVXmt","RSaHg-"]]);
