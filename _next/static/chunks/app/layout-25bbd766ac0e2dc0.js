(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{93524:function(t,e,o){Promise.resolve().then(o.bind(o,44829)),Promise.resolve().then(o.bind(o,10912)),Promise.resolve().then(o.bind(o,61481)),Promise.resolve().then(o.t.bind(o,53054,23)),Promise.resolve().then(o.bind(o,22908)),Promise.resolve().then(o.bind(o,15286))},44829:function(t,e,o){"use strict";o.d(e,{default:function(){return c}});var n=o(22988),i=o(2265),l=o(95885),r=o(2491),a=o(57437);let f=(t,e)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!t.vars&&{colorScheme:t.palette.mode}),m=t=>(0,n.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),s=function(t){var e;let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};o&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(e=>{var o;let[n,l]=e;i[t.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(o=l.palette)?void 0:o.mode}});let l=(0,n.Z)({html:f(t,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,n.Z)({margin:0},m(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},i),r=null==(e=t.components)||null==(e=e.MuiCssBaseline)?void 0:e.styleOverrides;return r&&(l=[l,r]),l};var c=function(t){let{children:e,enableColorScheme:o=!1}=(0,l.i)({props:t,name:"MuiCssBaseline"});return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(r.Z,{styles:t=>s(t,o)}),e]})}},10912:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=o(55592);function i(t){let{reason:e,children:o}=t;if("undefined"==typeof window)throw new n.BailoutToCSRError(e);return o}},61481:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PreloadCss",{enumerable:!0,get:function(){return l}});let n=o(57437),i=o(58512);function l(t){let{moduleIds:e}=t;if("undefined"!=typeof window)return null;let o=(0,i.getExpectedRequestStore)("next/dynamic css"),l=[];if(o.reactLoadableManifest&&e){let t=o.reactLoadableManifest;for(let o of e){if(!t[o])continue;let e=t[o].files.filter(t=>t.endsWith(".css"));l.push(...e)}}return 0===l.length?null:(0,n.jsx)(n.Fragment,{children:l.map(t=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:o.assetPrefix+"/_next/"+encodeURI(t),as:"style"},t))})}},22908:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return r}});var n=o(57437),i=o(98913),l=o(67022);function r(t){let{children:e}=t,o={authority:"https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_0TMvRxSui",client_id:"104vd8r3383n1mem7np3hjduoa",redirect_uri:"https://situation-room.app/facilitator/overview",postLogoutRedirectUri:"https://situation-room.app",automaticSilentRenew:!0,autoSignIn:!0,onSigninCallback:async t=>{console.debug("onSigninCallback")},userStore:new i.bA({store:window.localStorage})};return(0,n.jsx)(l.Ho,{...o,children:e})}},15286:function(t,e,o){"use strict";o.d(e,{default:function(){return B}});var n=o(57437),i=o(67036),l=o.n(i),r=o(74050);let{palette:a}=(0,r.Z)(),f=(0,r.Z)(),m=(0,r.Z)(f,{palette:{primary:{main:"#a6a6ffff"},secondary:{main:"#00b4baff"},pageBackground:a.augmentColor({color:{main:"#f5f9faff"}}),sectionBackground:a.augmentColor({color:{main:"#ffffff"}}),headerBarBackground:a.augmentColor({color:{main:"#ffffff"}}),buttonStandard:a.augmentColor({color:{main:"#000000"}}),buttonReverse:a.augmentColor({color:{main:"#ffffff"}}),buttonQuiet:a.augmentColor({color:{main:"#f0f0f0ff"}}),connected:a.augmentColor({color:{main:"#b1d9a5ff"}}),disconnected:a.augmentColor({color:{main:"#ff8b85ff"}}),slideSectionBackground:a.augmentColor({color:{main:"#ffffff"}}),optionButtonSelected:a.augmentColor({color:{main:"#7cd9de"}}),optionButtonSelectedBorder:a.augmentColor({color:{main:"#b2e9eb"}}),optionButtonUnselected:a.augmentColor({color:{main:"#e4f6f7"}}),summaryChartBackground:a.augmentColor({color:{main:"#f0f0f0"}}),promptPanelBackground:a.augmentColor({color:{main:"#f0f0f0"}}),progressBlipUnselected:a.augmentColor({color:{main:"#d9d9d9"}}),progressBlipSelected:a.augmentColor({color:{main:"#000000"}}),backgroundAgree:a.augmentColor({color:{main:"#cae3e0"}}),backgroundDisagree:a.augmentColor({color:{main:"#f0ccd1"}}),backgroundDivided:a.augmentColor({color:{main:"#f5e6c4"}}),updinkBackground:a.augmentColor({color:{main:"#f0f7ed"}}),updinkText:a.augmentColor({color:{main:"#2c2e33"}}),downdinkBackground:a.augmentColor({color:{main:"#ffe6e6"}}),downdinkText:a.augmentColor({color:{main:"#2a2e33"}}),recordingEnabled:a.augmentColor({color:{main:"#27ba02"}}),recordingDisabled:a.augmentColor({color:{main:"#ffffff"}}),recordingUploading:a.augmentColor({color:{main:"#ffcc85"}}),recordingFailed:a.augmentColor({color:{main:"#ff8b85"}}),pollingInProgress:a.augmentColor({color:{main:"#ffcc85"}}),pollingComplete:a.augmentColor({color:{main:"#b1d9a5"}}),pollingInProgressBackground:a.augmentColor({color:{main:"#ebebff"}}),taskReady:a.augmentColor({color:{main:"#b1d9a5ff"}}),taskRunning:a.augmentColor({color:{main:"#7cd9de"}}),taskWaiting:a.augmentColor({color:{main:"#ffcc85"}}),taskCancelled:a.augmentColor({color:{main:"#ffcc85"}}),taskFailed:a.augmentColor({color:{main:"#ff8b85ff"}}),taskSuccess:a.augmentColor({color:{main:"#b1d9a5ff"}})},typography:{body1:{fontFamily:l().style.fontFamily},body2:{fontFamily:l().style.fontFamily},h1:{fontFamily:l().style.fontFamily},h2:{fontFamily:l().style.fontFamily},h3:{fontFamily:l().style.fontFamily},h4:{fontFamily:l().style.fontFamily},h5:{fontFamily:l().style.fontFamily},h6:{fontFamily:l().style.fontFamily},button:{fontFamily:l().style.fontFamily},slideHeading:{fontFamily:l().style.fontFamily,fontSize:"3rem",fontWeight:"bold"},slideSubHeading:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slideSubHeadingWhite:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold",color:"#ffffff"},slideSectionHeading:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slidePrompt:{fontFamily:l().style.fontFamily,fontSize:"2rem"},slideBody:{fontFamily:l().style.fontFamily,fontSize:"1.75rem",fontWeight:"normal",li:{marginTop:"0.5rem"},"li:not(:last-child)":{marginBottom:"1.5rem"}},slideExplanationWhite:{fontFamily:l().style.fontFamily,fontSize:"2rem",color:"white"},selectTiny:{fontFamily:l().style.fontFamily,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:0,paddingBottom:0},selectLarge:{fontFamily:l().style.fontFamily,fontSize:"1.5rem"},submitButton:{fontFamily:l().style.fontFamily,fontSize:"1rem"},questionInstruction:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},questionPrompt:{fontFamily:l().style.fontFamily,fontSize:"2.25rem",alignSelf:"flex-start",fontWeight:"normal",textAlign:"start"},questionExplanation:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},multiBoxOption:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",color:"white"},sliderMark:{fontFamily:l().style.fontFamily,fontSize:"0.8rem"},upDownQuestion:{fontFamily:l().style.fontFamily,fontSize:"1.75rem"},upDownCategory:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryTitle:{fontFamily:l().style.fontFamily,fontSize:"1rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},topOptionsOptionRank:{fontFamily:l().style.fontFamily,fontSize:"1.6rem",fontWeight:"bold"},topOptionsOptionTitle:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},topOptionsOptionDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},topOptionsOptionPoints:{fontFamily:l().style.fontFamily,fontSize:"1rem"},rankedListItemTitle:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},rankedListItemDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},orderedListItemTitle:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},orderedListItemDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},sectionHeadingTitle:{fontFamily:l().style.fontFamily,fontSize:"1.3rem",fontWeight:"bold",textTransform:"uppercase"},sectionHeadingDescription:{fontFamily:l().style.fontFamily,fontSize:"1.25rem"},sectionHeadingTitleQuiet:{fontFamily:l().style.fontFamily,fontSize:"1.3rem",opacity:.5,fontWeight:"bold",textTransform:"uppercase"},summaryTitle:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},summaryPrompt:{fontFamily:l().style.fontFamily,fontSize:"1.5rem"},slideAccordionHeading:{fontFamily:l().style.fontFamily,fontSize:"1rem",fontWeight:"bold"},slideAccordionText:{fontFamily:l().style.fontFamily,fontSize:"1rem"},slideInfoText:{fontFamily:l().style.fontFamily,fontSize:"1rem"},yesNoUnsureButton:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"normal"},demographicGroupHeading:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},consentBody:{fontFamily:l().style.fontFamily,fontSize:"1.25rem"}},components:{MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none"}}},MuiCssBaseline:{styleOverrides:{html:{fontFamily:l().style.fontFamily,height:"100%"},body:{fontFamily:l().style.fontFamily,background:"#f5f9faff",height:"100%"}}},MuiSwitch:{styleOverrides:{root:{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"#40B8A8",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#7d7d7d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:f.palette.grey[100]},"&.Mui-disabled + .MuiSwitch-track":{opacity:.7}},"& .MuiSwitch-thumb":{boxShadow:"none",boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"#E9E9EA",opacity:1,transition:f.transitions.create(["background-color"],{duration:500})}}}}}});var s=o(22988),c=o(23950),u=o(2265);let d=u.createContext(null);function y(){return u.useContext(d)}var g="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(t){let{children:e,theme:o}=t,i=y(),l=u.useMemo(()=>{let t=null===i?o:"function"==typeof o?o(i):(0,s.Z)({},i,o);return null!=t&&(t[g]=null!==i),t},[o,i]);return(0,n.jsx)(d.Provider,{value:l,children:e})},h=o(22606),F=o(34828),b=o(55158),S=o(24866);let C={};function x(t,e,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return u.useMemo(()=>{let i=t&&e[t]||e;if("function"==typeof o){let l=o(i),r=t?(0,s.Z)({},e,{[t]:l}):l;return n?()=>r:r}return t?(0,s.Z)({},e,{[t]:o}):(0,s.Z)({},e,o)},[t,e,o,n])}var k=function(t){let{children:e,theme:o,themeId:i}=t,l=(0,F.Z)(C),r=y()||C,a=x(i,l,o),f=x(i,r,o,!0),m="rtl"===a.direction;return(0,n.jsx)(p,{theme:f,children:(0,n.jsx)(h.T.Provider,{value:a,children:(0,n.jsx)(b.Z,{value:m,children:(0,n.jsx)(S.Z,{value:null==a?void 0:a.components,children:e})})})})},v=o(52737);let z=["theme"];function w(t){let{theme:e}=t,o=(0,c.Z)(t,z),i=e[v.Z];return(0,n.jsx)(k,(0,s.Z)({},o,{themeId:i?v.Z:void 0,theme:i||e}))}function B(t){let{children:e}=t;return(0,n.jsx)(w,{theme:m,children:e})}},53054:function(){},67036:function(t){t.exports={style:{fontFamily:"'__averta_c9805f', '__averta_Fallback_c9805f'"},className:"__className_c9805f"}}},function(t){t.O(0,[1742,3732,4403,2971,7023,1744],function(){return t(t.s=93524)}),_N_E=t.O()}]);