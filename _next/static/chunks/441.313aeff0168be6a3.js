(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{50441:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(57437),i=r(22960),l=r(2265),u=r(59589);r(91683),r(71601);var o=r(30089),s=r(4766),d=r(94547),c=r(83593),a=r(15785);function v(e){let t=e.role===d._b.Controller,r=(0,l.useRef)(null),v=(0,l.useRef)(null),{slideIndex:f,setSlideIndex:h,slideData:g,setSlideData:b}=(0,l.useContext)(s.X);(0,l.useEffect)(()=>{!r.current&&v.current&&(console.debug("⬆️ Presentation mount..."),r.current=new u.Z(v.current,{embedded:e.embedded,controls:t,keyboard:t,touch:t,overview:!1,help:t,hideInactiveCursor:!t,showNotes:!1,plugins:[]}),console.debug("initialising reveal..."),r.current.initialize({controlsTutorial:!1,slideNumber:t?"c/t":void 0,progress:!1,controlsBackArrows:"faded",controlsLayout:"edges",scrollActivationWidth:void 0}).then(()=>{console.debug("Reveal: initialised"),r.current.on("slidechanged",e=>{h(r.current.getState().indexh)}),void 0!==f&&r.current.slide(f),p()}).catch(e=>console.error(e)))},[]),(0,l.useEffect)(()=>{var e,t,n;console.debug("Presentation props.slideIndex change",f),(null===(e=r.current)||void 0===e?void 0:e.isReady())&&(null===(t=r.current)||void 0===t?void 0:t.getState().indexh)!==f&&void 0!==f&&(null===(n=r.current)||void 0===n||n.slide(f)),p()},[f,r]);let p=()=>{if(null===r.current||void 0===b)return;let e=!!r.current.getCurrentSlide();b(m(r.current.getCurrentSlide(),e?r.current.getSlideNotes():null))},m=(e,t)=>{if(!e)return a.I;let r=(0,o.kh)(e.getAttribute("qids")),n=e.getAttribute("secs"),i=null!==n?parseFloat(n):void 0,l=e.getAttribute("activity"),u=null!==l?(0,o.pC)(l):a.S.default,s=e.getAttribute("recording");return{notes:null!=t?t:"",qids:null!=r?r:[],secs:i,activity:u,recordingId:null!=s?s:void 0}};(0,l.useEffect)(()=>()=>{r.current&&r.current.isReady()&&(console.debug("⬇️ Presentation unmount..."),r.current.destroy(),r.current=null)},[]);let[y,R]=(0,l.useState)();(0,l.useEffect)(()=>(c.Z.on(c.M.Request_SlideRefresh,R),()=>{c.Z.off(c.M.Request_SlideRefresh,R)}),[]),(0,l.useEffect)(()=>{void 0!==y&&y.type===c.M.Request_SlideRefresh&&S()},[y]);let S=(0,l.useCallback)(()=>{setTimeout(()=>{var e,t;null===(e=r.current)||void 0===e||e.syncSlide(r.current.getCurrentSlide()),null===(t=r.current)||void 0===t||t.layout()},100)},[]),C=(0,i.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{ref:v,className:"reveal",style:{width:"100%",height:"100%",borderRadius:"0.5rem",border:e.showBorder?"solid 2px":void 0,borderColor:e.showBorder?C.palette.primary.main:void 0},children:(0,n.jsx)("div",{className:"slides",children:e.slides})})})}},91683:function(){},71601:function(){}}]);