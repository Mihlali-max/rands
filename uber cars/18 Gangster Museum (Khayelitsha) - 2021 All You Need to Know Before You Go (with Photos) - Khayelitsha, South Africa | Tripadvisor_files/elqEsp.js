(this.$WP=this.$WP||[]).push(["elqEsp",(e,l)=>{"use strict";var t,n,i,a,u,r,o,d,s,c,m,h,v,g,w,I,f,b,S=({locationId:e,albumId:l,client:u,dataStrategy:S,configuration:y,numItemsInRow:E,numRows:R,getSSISContainerDimensions:C,getAlbumPaneDimensions:P,showAlbumPane:p,showCta:A,overlay:M,hideIndicatorDots:O,actionHandler:W,onHeroClick:H,onThumbnailClick:T,Wrapper:D,noContent:L,children:k})=>{var _,B,N,x,F,G,Y,$,z,K,Q,X,q,J=n.useRef(null),{viewportCategory:U}=n.useContext(a),V=r(),Z=u||V,j=S||"a",ee=l||o.ALL_PHOTOS_ALBUM,le=n.useMemo(()=>({locationId:e,albumId:ee,client:Z,dataStrategy:j,filter:b,offset:0,limit:20}),[e,ee,Z,j]),[te,ne]=s({query:c,variables:le,pause:!0}),ie={locationId:e,configuration:y,client:Z,filter:b,photos360Enabled:!0},[ae]=i({query:m,variables:ie}),{fetching:ue,data:re,error:oe}=ae,de=v(Z,j,e);n.useEffect(()=>{ue||oe||!re||((e,l)=>{var t,n="",i=null==e||null==(t=e.mediaAlbum)?void 0:t.album;if(i)if(200!==e.mediaAlbum.status)n=w;else if(0===i.totalMediaCount)n=g;else{var a;n=(null==(a=i.mediaList)?void 0:a[0])?f:I}else n=g;l(n)})(re,de)},[ue,oe,re,de]);var se=(null==re||null==(_=re.mediaWindow)||null==(B=_.windowPanes)||null==(N=B[0])||null==(x=N.albums)||null==(F=x[0])?void 0:F.totalMediaCount)||0,ce=null==re||null==(G=re.mediaWindow)||null==(Y=G.windowPanes)||null==($=Y[0])||null==(z=$.albums)||null==(K=z[0])?void 0:K.mediaList;if(!ue&&0===se&&L)return L;var me=null==re||null==(Q=re.mediaWindow)||null==(X=Q.windowPanes)||null==(q=X[1])?void 0:q.albums,he=p&&me&&me.map(e=>{var l,t,i,a,u;return{albumId:null==e?void 0:e.albumId,title:null==e?void 0:e.name,count:null==e?void 0:e.totalMediaCount,thumbnail:(t=null==e||null==(l=e.mediaList)?void 0:l[0],i=P(U),a=null==t?void 0:t.photoSizes,u=a&&h(i.clientWidth,i.clientHeight,a,{getImageBasedOnClientInfo:!0,allowedStretch:0}),u?n.createElement(n.Fragment,null,n.createElement("div",{className:"_39RSYxGX",style:{backgroundImage:`url(${u.url})`}})):n.createElement("div",null))}}),ve=e=>{var l,t,n;if(ue)return null;if(ce&&ce[e])return ce[e];var i,a,u=(i=e,a=Math.floor(i/20),(null==te?void 0:te[a])?null==te?void 0:te[a]:(ne({offset:20*a+1,limit:20}),{fetching:!0,data:null}));return(null==u?void 0:u.fetching)?null:null==u||null==(l=u.data)||null==(t=l.mediaAlbumPage)||null==(n=t.mediaList)?void 0:n[e%20]},ge=n.createElement(t,{key:e,itemRenderer:e=>{var l=ve(e);return l?(e=>{var l=C(U),t=J.current?{w:J.current.clientWidth,h:J.current.clientHeight}:{w:l.clientWidth,h:l.clientHeight},i=e.photoSizes,a=i&&h(t.w,t.h,i,{getImageBasedOnClientInfo:!0,allowedStretch:0});return a?n.createElement(n.Fragment,null,n.createElement("div",{className:"_39RSYxGX",style:{backgroundImage:`url(${a.url})`},onClick:()=>{H&&e.mediaId&&e.type&&H({id:e.mediaId,type:d(e.type)})}})):n.createElement("div",null)})(l):null},thumbnailRenderer:e=>{var l=ve(e);return l?(e=>{var l=e.photoSizes,t=l&&h(60,50,l,{getImageBasedOnClientInfo:!0,allowedStretch:0});return t?n.createElement(n.Fragment,null,n.createElement("div",{className:"_39RSYxGX",style:{backgroundImage:`url(${t.url})`},onClick:()=>{T&&T(e.mediaId)}})):n.createElement("div",null)})(l):null},totalCount:se,alwaysShowArrows:!0,hideIndicatorDots:O,wrap:!1,showCta:A,overlay:M,numItemsInRow:E,numRows:Number(R),setCarouselRef:e=>{J.current=e},albums:he||void 0,actionHandler:W},k);return D?n.createElement(D,null,ge):ge},y=e=>{switch(e){case"MOBILE":return{clientWidth:415,clientHeight:200};case"TABLET":case"DESKTOP":default:return{clientWidth:620,clientHeight:380}}},E=e=>{switch(e){case"MOBILE":return{clientWidth:0,clientHeight:0};case"TABLET":return{clientWidth:360,clientHeight:130};case"DESKTOP":default:return{clientWidth:180,clientHeight:260}}};return[()=>{b=u(),S.defaultProps={configuration:"mm",numItemsInRow:10,numRows:2,getSSISContainerDimensions:y,getAlbumPaneDimensions:E,overlay:"visible",hideIndicatorDots:!0},e("default",S)},[l=>{t=l.MediaWindow,e("mwActions",l.mwActions)},e=>n=e,e=>i=e.useQuery,e=>a=e.Device,e=>(u=e.getMediaFilterToRetrieveAllPhotos,r=e.useClientName,o=e.AlbumTypes,d=e.validateMediaType),e=>(s=e.usePaginatedQuery,c=e.windowPageQuery,m=e.windowQuery),e=>h=e.getSource,e=>(v=e.useMediaTracking,g=e.NO_PHOTO,w=e.ERROR_MSG,I=e.PRIMARY_MISSING,f=e.PRIMARY_OK)]]},["hDoeAJ","cDcdfi","5X2em-","2R4xv2","wc54S1","n4rOEs","KwOV1Z","zdk9wF"]]);
