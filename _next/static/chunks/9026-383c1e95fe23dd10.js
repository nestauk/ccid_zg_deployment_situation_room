"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{80824:function(e,n,t){var o=t(22988),r=t(23950),a=t(2265),i=t(44839),l=t(26259),s=t(80511),c=t(48024),u=t(95885),d=t(23849),p=t(1348),g=t(57437);let f=["className","id"],h=e=>{let{classes:n}=e;return(0,l.Z)({root:["root"]},d.a,n)},m=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),v=a.forwardRef(function(e,n){let t=(0,u.i)({props:e,name:"MuiDialogTitle"}),{className:l,id:s}=t,c=(0,r.Z)(t,f),d=h(t),{titleId:v=s}=a.useContext(p.Z);return(0,g.jsx)(m,(0,o.Z)({component:"h2",className:(0,i.Z)(d.root,l),ownerState:t,ref:n,variant:"h6",id:null!=s?s:v},c))});n.Z=v},79393:function(e,n,t){t.d(n,{Z:function(){return N}});var o=t(23950),r=t(22988),a=t(2265),i=t(51581),l=t(26259),s=t(82338),c=t(58599),u=t(39244),d=t(80317),p=t(48024),g=t(22960),f=t(95885),h=t(12272),m=t(37040),v=t(44839),Z=t(10317),x=t(34990),b=t(34535),k=t(87542);function w(e){return(0,k.ZP)("MuiSnackbarContent",e)}(0,b.Z)("MuiSnackbarContent",["root","message","action"]);var C=t(57437);let y=["action","className","message","role"],E=e=>{let{classes:n}=e;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},w,n)},O=(0,p.ZP)(x.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(e=>{let{theme:n}=e,t="light"===n.palette.mode?.8:.98,o=(0,Z._4)(n.palette.background.default,t);return(0,r.Z)({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),S=(0,p.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),M=(0,p.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),P=a.forwardRef(function(e,n){let t=(0,f.i)({props:e,name:"MuiSnackbarContent"}),{action:a,className:i,message:l,role:s="alert"}=t,c=(0,o.Z)(t,y),u=E(t);return(0,C.jsxs)(O,(0,r.Z)({role:s,square:!0,elevation:6,className:(0,v.Z)(u.root,i),ownerState:t,ref:n},c,{children:[(0,C.jsx)(S,{className:u.message,ownerState:t,children:l}),a?(0,C.jsx)(M,{className:u.action,ownerState:t,children:a}):null]}))});function R(e){return(0,k.ZP)("MuiSnackbar",e)}(0,b.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let L=["onEnter","onExited"],j=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],T=e=>{let{classes:n,anchorOrigin:t}=e,o={root:["root","anchorOrigin".concat((0,h.Z)(t.vertical)).concat((0,h.Z)(t.horizontal))]};return(0,l.Z)(o,R,n)},z=(0,p.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n["anchorOrigin".concat((0,h.Z)(t.anchorOrigin.vertical)).concat((0,h.Z)(t.anchorOrigin.horizontal))]]}})(e=>{let{theme:n,ownerState:t}=e;return(0,r.Z)({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:(0,r.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})})});var N=a.forwardRef(function(e,n){let t=(0,f.i)({props:e,name:"MuiSnackbar"}),l=(0,g.Z)(),p={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:h,anchorOrigin:{vertical:v,horizontal:Z}={vertical:"bottom",horizontal:"left"},autoHideDuration:x=null,children:b,className:k,ClickAwayListenerProps:w,ContentProps:y,disableWindowBlurListener:E=!1,message:O,open:S,TransitionComponent:M=m.Z,transitionDuration:R=p,TransitionProps:{onEnter:N,onExited:B}={}}=t,_=(0,o.Z)(t.TransitionProps,L),D=(0,o.Z)(t,j),I=(0,r.Z)({},t,{anchorOrigin:{vertical:v,horizontal:Z},autoHideDuration:x,disableWindowBlurListener:E,TransitionComponent:M,transitionDuration:R}),A=T(I),{getRootProps:F,onClickAway:W}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{autoHideDuration:n=null,disableWindowBlurListener:t=!1,onClose:o,open:i,resumeHideDuration:l}=e,s=(0,c.Z)();a.useEffect(()=>{if(i)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==o||o(e,"escapeKeyDown")}},[i,o]);let p=(0,u.Z)((e,n)=>{null==o||o(e,n)}),g=(0,u.Z)(e=>{o&&null!=e&&s.start(e,()=>{p(null,"timeout")})});a.useEffect(()=>(i&&g(n),s.clear),[i,n,g,s]);let f=s.clear,h=a.useCallback(()=>{null!=n&&g(null!=l?l:.5*n)},[n,l,g]),m=e=>n=>{let t=e.onBlur;null==t||t(n),h()},v=e=>n=>{let t=e.onFocus;null==t||t(n),f()},Z=e=>n=>{let t=e.onMouseEnter;null==t||t(n),f()},x=e=>n=>{let t=e.onMouseLeave;null==t||t(n),h()};return a.useEffect(()=>{if(!t&&i)return window.addEventListener("focus",h),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",f)}},[t,i,h,f]),{getRootProps:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.Z)({},(0,d._)(e),(0,d._)(n));return(0,r.Z)({role:"presentation"},n,t,{onBlur:m(t),onFocus:v(t),onMouseEnter:Z(t),onMouseLeave:x(t)})},onClickAway:e=>{null==o||o(e,"clickaway")}}}((0,r.Z)({},I)),[G,H]=a.useState(!0),q=(0,i.y)({elementType:z,getSlotProps:F,externalForwardedProps:D,ownerState:I,additionalProps:{ref:n},className:[A.root,k]});return!S&&G?null:(0,C.jsx)(s.d,(0,r.Z)({onClickAway:W},w,{children:(0,C.jsx)(z,(0,r.Z)({},q,{children:(0,C.jsx)(M,(0,r.Z)({appear:!0,in:S,timeout:R,direction:"top"===v?"down":"up",onEnter:(e,n)=>{H(!1),N&&N(e,n)},onExited:e=>{H(!0),B&&B(e)}},_,{children:b||(0,C.jsx)(P,(0,r.Z)({message:O,action:h},y))}))}))}))})}}]);