"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5042],{59676:function(e,o,s){var t=s(23963);o.Z=void 0;var i=t(s(19118)),r=s(57437);o.Z=(0,i.default)((0,r.jsx)("path",{d:"M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6zM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2z"}),"ZoomInMap")},81386:function(e,o,s){var t=s(23963);o.Z=void 0;var i=t(s(19118)),r=s(57437);o.Z=(0,i.default)((0,r.jsx)("path",{d:"m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"}),"ZoomOutMap")},29921:function(e,o,s){s.d(o,{y:function(){return l}});var t=s(2265),i=s(38017);let r=()=>{};function l(e,o,s){let l=t.useRef(null);l.current=o,(0,i.Z)(()=>{if(!1===s||"undefined"==typeof ResizeObserver)return r;let o=e.current,t=new ResizeObserver(e=>{l.current(e)});return o&&t.observe(o),()=>{t.disconnect()}},[e,s])}},25042:function(e,o,s){s.d(o,{ZP:function(){return y}});var t=s(57437),i=s(15785),r=s(40772),l=s(59676),n=s(81386),c=s(22960),a=s(31193),d=s(40468),w=s(60335),u=s(29921),p=s(2265),h=s(52983),f=s(70883),v=s(80511),b=s(33351),S=s(6722);let m=(e,o)=>{var s;return null===(s=Object.entries(o).find(o=>o[1].externalUserId===e))||void 0===s?void 0:s[1]};var x=(0,p.memo)(function(e){let{tiles:o,attendeeIdToTileId:s}=(0,S.akC)(),{tileId:i,isVideoEnabled:r}=(0,S.Onx)(),{thisUser:l}=(0,p.useContext)(f.l),{roster:n}=(0,S.dJs)(),[c,a]=(0,p.useState)();(0,p.useEffect)(()=>(console.debug("FLICKER mounting ZgVideoTile"),()=>{console.debug("FLICKER unmounting ZgVideoTile")}),[]),(0,p.useEffect)(()=>{let t=m(e.subscription.deviceId,n);if(t){var c;let n=e.subscription.deviceId===(null==l?void 0:l.deviceId);console.debug("FLICKER rerender new data for "+e.subscription.participantName),a({subscription:e.subscription,attendee:t,isLocal:n,hasVideo:n?r:!!t&&o.some(e=>e===s[t.chimeAttendeeId]),tileId:null!==(c=n?i:t?s[t.chimeAttendeeId]:void 0)&&void 0!==c?c:void 0})}},[e.subscription.subscriptionId,r,o,l,n]);let w=(0,p.memo)(function(o){let{render:s}=o,{muted:i}=(0,S.zDY)(s.attendee.chimeAttendeeId);return console.debug("FLICKER redraw tile for "+e.subscription.participantName,s),(0,t.jsxs)(b.Z,{className:"shadow",sx:{borderRadius:"0.5rem",overflow:"hidden",background:"gray",height:"100%",width:"100%",position:"relative"},children:[s.hasVideo&&!s.isLocal&&(0,t.jsx)(S.ZzX,{name:s.subscription.participantName,tileId:s.tileId}),s.hasVideo&&s.isLocal&&(0,t.jsx)(S.OuP,{nameplate:s.subscription.participantName}),!s.hasVideo&&(0,t.jsx)(b.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(v.Z,{variant:"body2",color:"white",children:s.subscription.participantName})}),i&&(0,t.jsx)(b.Z,{sx:{position:"absolute",left:"1rem",top:"1rem"},children:(0,t.jsx)("img",{src:"/icons/av/mic-disabled.svg",style:{width:"2rem",height:"2rem"}})}),!i&&(0,t.jsx)(b.Z,{sx:{position:"absolute",left:"1rem",top:"1rem"},children:(0,t.jsx)("img",{src:"/icons/av/mic-enabled.svg",style:{width:"2rem",height:"2rem"}})})]})},(e,o)=>{var s,t;return e.render.tileId===o.render.tileId&&e.render.isLocal===o.render.isLocal&&e.render.hasVideo===o.render.hasVideo&&e.render.subscription.participantName===o.render.subscription.participantName&&(null===(s=e.render.attendee)||void 0===s?void 0:s.chimeAttendeeId)===(null===(t=o.render.attendee)||void 0===t?void 0:t.chimeAttendeeId)});return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)(w,{render:c},"video-call-tile-".concat(c.tileId)),!c&&(0,t.jsx)(b.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(d.Z,{})})]})},(e,o)=>e.subscription.subscriptionId===o.subscription.subscriptionId);let g=[{col:3,row:1,span:{cols:1,rows:1}},{col:3,row:2,span:{cols:1,rows:1}},{col:3,row:3,span:{cols:1,rows:1}},{col:2,row:3,span:{cols:1,rows:1}},{col:1,row:3,span:{cols:1,rows:1}},{col:4,row:1,span:{cols:1,rows:1}},{col:4,row:2,span:{cols:1,rows:1}},{col:4,row:3,span:{cols:1,rows:1}},{col:4,row:4,span:{cols:1,rows:1}},{col:3,row:4,span:{cols:1,rows:1}},{col:2,row:4,span:{cols:1,rows:1}},{col:1,row:4,span:{cols:1,rows:1}},{col:5,row:1,span:{cols:1,rows:1}},{col:5,row:2,span:{cols:1,rows:1}},{col:5,row:3,span:{cols:1,rows:1}},{col:5,row:4,span:{cols:1,rows:1}}],I={0:{[i.S.default]:{cols:1,rows:1},[i.S.deliberation]:{cols:1,rows:1}},1:{[i.S.default]:{cols:3,rows:2},[i.S.deliberation]:{cols:3,rows:2}},2:{[i.S.default]:{cols:3,rows:2},[i.S.deliberation]:{cols:3,rows:2}},3:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},4:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},5:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},6:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},7:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},8:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},9:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},10:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},11:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},12:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},13:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},14:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},15:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},16:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}}},j={0:{[i.S.default]:{col:1,row:1,span:{cols:1,rows:1}},[i.S.deliberation]:{col:1,row:1,span:{cols:1,rows:1}}},1:{[i.S.default]:{col:1,row:1,span:{cols:2,rows:2}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},2:{[i.S.default]:{col:1,row:1,span:{cols:2,rows:2}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},3:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:3}}},4:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},5:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},6:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},7:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},8:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},9:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},10:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},11:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},12:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},13:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},14:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},15:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},16:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}}};function y(e){let{subscriptions:o}=(0,p.useContext)(h.Mx),s=(0,p.useRef)(null),[f,v]=(0,p.useState)([]),[b,S]=(0,p.useState)();(0,u.y)(s,v);let m=(0,p.useRef)(null),[y,Z]=(0,p.useState)([]);(0,u.y)(m,Z);let[C,R]=(0,p.useState)(),[E,L]=(0,p.useState)(),[z,F]=(0,p.useState)(),[V,M]=(0,p.useState)(!1),N=e.enableExpandButton&&o.length>0&&e.activity===i.S.deliberation;(0,p.useEffect)(()=>{f&&0!==f.length&&S({w:f[0].contentRect.width,h:f[0].contentRect.height})},[f]),(0,p.useEffect)(()=>{e.onResize()},[y]),(0,p.useEffect)(()=>{if(!b)return;let{rows:s,cols:t}=I[o.length][e.activity],i={w:960*t,h:700*s},r=b.w/i.w*i.h,l=b.h/i.h*i.w;r<=b.h?R({w:b.w,h:r}):R({w:l,h:b.h})},[null==b?void 0:b.w,null==b?void 0:b.h,o.length,e.activity]),(0,p.useEffect)(()=>{if(!C)return;let{rows:s,cols:t}=I[o.length][e.activity];L({w:C.w/t,h:C.h/s})},[null==C?void 0:C.w,null==C?void 0:C.h]),(0,p.useEffect)(()=>{if(!E)return;console.debug("FLICKER cell dimensions changed");let s=o.length,{rows:t,cols:i}=I[s][e.activity];F({cols:Array(i).fill("".concat(Math.round(E.w),"px")).join(" "),rows:Array(t).fill("".concat(Math.round(E.h),"px")).join(" "),cells:{cols:i,rows:t},litter:s,activity:e.activity})},[null==E?void 0:E.w,null==E?void 0:E.h]),(0,p.useEffect)(()=>{e.activity!==i.S.deliberation&&M(!1)},[e.activity]),(0,p.useEffect)(()=>{e.onResize()},[V]);let[k]=(0,r.u)({duration:200}),A=(0,c.Z)();return(0,p.useEffect)(()=>{console.debug("FLICKER grid template changed")},[z]),console.debug("FLICKER tile grid redraw"),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Z,{ref:s,sx:{width:"100%",height:"100%"},children:[!(C&&E&&z)&&(0,t.jsx)(a.Z,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(d.Z,{})}),C&&E&&z&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Z,{ref:k,sx:{display:"grid",width:C.w,height:C.h,gridTemplateColumns:z.cols,gridTemplateRows:z.rows,alignItems:"start",justifyItems:"start",m:"auto"},children:[(0,t.jsxs)(a.Z,{sx:{position:"relative",gridColumn:V?"".concat(j[z.litter][z.activity].col," / span ").concat(j[z.litter][z.activity].span.cols):void 0,gridRow:V?"".concat(j[z.litter][z.activity].row," / span ").concat(j[z.litter][z.activity].span.rows):void 0,width:V?.95*C.w:E.w*j[z.litter][z.activity].span.cols,height:V?.95*C.h:E.h*j[z.litter][z.activity].span.rows,left:V?.025*C.w:void 0,top:V?.025*C.h:void 0,p:.5,zIndex:V?10:void 0},children:[N&&(0,t.jsx)(a.Z,{sx:{position:"absolute",top:"1rem",right:"1rem",zIndex:10},children:(0,t.jsx)(w.Z,{"aria-label":"expand presentation button",onClick:()=>M(!V),sx:{border:"2px solid",borderColor:A.palette.promptPanelBackground.main,background:A.palette.slideSectionBackground.main},children:V?(0,t.jsx)(l.Z,{}):(0,t.jsx)(n.Z,{})})}),(0,t.jsx)(a.Z,{sx:{width:"100%",height:"100%",borderRadius:2,border:V?"solid 2px white":void 0},className:"shadow",children:e.presentation})]},"presentation-cell"),e.activity!=i.S.deliberation&&(0,t.jsxs)(t.Fragment,{children:[o.slice(0,Math.min(2,z.litter)).map((e,o)=>(0,t.jsx)(a.Z,{sx:{p:.5,gridColumn:I[z.litter][z.activity].cols,gridRow:o+1,width:1*E.w,height:1*E.h},children:(0,t.jsx)(x,{subscription:e})},"video-cell-".concat(e.deviceId))),I[z.litter][z.activity].rows>2&&(0,t.jsx)(a.Z,{sx:{gridColumn:I[z.litter][e.activity].cols,gridRow:"3 / span ".concat(I[z.litter][z.activity].rows-2),width:1*E.w,height:E.h*(I[z.litter][z.activity].rows-2),overflowY:"auto"},children:z.litter>=3&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column"},children:o.slice(2).map((e,o)=>(0,t.jsx)(a.Z,{sx:{p:.5,width:1*E.w,height:1*E.h},children:(0,t.jsx)(x,{subscription:e})},"video-cell-".concat(e.deviceId)))})})})]}),e.activity===i.S.deliberation&&(0,t.jsx)(t.Fragment,{children:z.litter>=1&&(0,t.jsx)(t.Fragment,{children:o.slice(0,Math.min(g.length,z.litter)).map((e,o)=>(0,t.jsx)(a.Z,{sx:{p:.5,gridColumn:"".concat(g[o].col," / span ").concat(g[o].span.cols),gridRow:"".concat(g[o].row," / span ").concat(g[o].span.rows),width:E.w*g[o].span.rows,height:E.h*g[o].span.cols},children:(0,t.jsx)(x,{subscription:e})},"video-cell-".concat(e.deviceId)))})})]})})]})})}},52983:function(e,o,s){s.d(o,{Mx:function(){return c},ZP:function(){return d}});var t=s(57437),i=s(94547),r=s(6722),l=s(2265),n=s(70883);let c=(0,l.createContext)({}),a=(e,o)=>{if(e.length!==o.length)return!1;for(var s=0;s<e.length;s++)if(e[s].subscriptionId!=e[s].subscriptionId)return!1;return!0};function d(e){let{roster:o}=(0,r.dJs)(),{subscriptions:s,thisUser:d}=(0,l.useContext)(n.l),[w,u]=(0,l.useState)({subscriptions:[]});return(0,l.useEffect)(()=>{var e=s.filter(e=>e.deviceId!==(null==d?void 0:d.deviceId)&&e.role===i._b.Controller).toSorted((e,o)=>e.deviceId.localeCompare(o.deviceId)),o=s.filter(e=>e.deviceId!==(null==d?void 0:d.deviceId)&&e.role===i._b.Client).toSorted((e,o)=>e.deviceId.localeCompare(o.deviceId)),t=[...e,...d?[d]:[],...o];a(t,w.subscriptions)||u({subscriptions:t})},[o,s]),(0,t.jsx)(c.Provider,{value:w,children:e.children})}}}]);