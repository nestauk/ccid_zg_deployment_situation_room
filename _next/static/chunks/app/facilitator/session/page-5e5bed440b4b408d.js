(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{59870:function(e,t,i){Promise.resolve().then(i.bind(i,6647))},6647:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ek}});var n,s,r=i(57437),a=i(94547),l=i(78364),o=i(2265),c=i(60182),d=i(31193),x=i(80511),u=i(96537),h=i(22960),f=i(56019),m=i(71733),j=i(79806),p=i(44228),g=i(42748),v=i(11656),w=i(47905),y=i(86917),Z=i(14595),b=i(60335),C=i(21395),S=i(24072),k=i(76396);function T(e){let t=t=>{t!==e.state&&e.onFacilitationStateChange(t)},i=t=>{t!==e.fullscreen&&e.onFullScreenChange(t)},n=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:(0,r.jsx)(w.Z,{inset:!0,children:(0,r.jsx)("b",{children:"Workshop facilitation"})})},"action-menu-video-heading"),[a._y.Ready,a._y.Open,a._y.Closed].map(i=>(0,r.jsxs)(v.Z,{disabled:e.stateBusy,onClick:()=>t(i),children:[e.state===i&&(0,r.jsx)(y.Z,{children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(w.Z,{inset:e.state!==i,children:a._y[i]})]},"action-menu-item-".concat(a._y[i])))]}),(0,r.jsx)(Z.Z,{}),(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(v.Z,{children:(0,r.jsx)(w.Z,{inset:!0,children:(0,r.jsx)("b",{children:"Screen mode"})})},"action-menu-screen-heading"),(0,r.jsxs)(v.Z,{disabled:e.fullscreenBusy,onClick:()=>i(!0),children:[e.fullscreen&&(0,r.jsx)(y.Z,{children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(w.Z,{inset:!e.fullscreen,children:"Full screen"})]},"action-menu-item-screen-fullscreen"),(0,r.jsxs)(v.Z,{disabled:e.fullscreenBusy,onClick:()=>i(!1),children:[!e.fullscreen&&(0,r.jsx)(y.Z,{children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(w.Z,{inset:e.fullscreen,children:"Windowed"})]},"action-menu-item-screen-windowed")]})]});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S.ZP,{variant:"popover",popupId:"facilitation-actions-popup",children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{"aria-label":"settings",...(0,k.vW)(e),children:(0,r.jsx)("img",{src:"/icons//settings.svg"})}),(0,r.jsx)(C.Z,{...(0,k.wK)(e),children:(0,r.jsx)(n,{})})]})})})}function _(e){let[t,i]=(0,o.useState)(""),n=(0,o.useRef)();(0,o.useEffect)(()=>{if(e.startTime)return n.current=setInterval(s,1e3),()=>{clearInterval(n.current)};n.current&&(clearInterval(n.current),n.current=void 0),i("")},[e.startTime,e.duration_mins]);let s=(0,o.useCallback)(()=>{if(e.startTime){let t=new Date().getTime()-e.startTime.getTime();e.duration_mins&&(t=Math.max(6e4*e.duration_mins-t,0));let n=Math.floor(t/36e5),s=Math.floor((t-=36e5*n)/6e4),r=Math.floor((t-=6e4*s)/1e3);t-=1e3*r,i("".concat(n.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0")))}else i("")},[e.startTime,e.duration_mins]);return(0,r.jsxs)(x.Z,{variant:"h5",children:[(0,r.jsx)("img",{src:"/icons/clock.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),t]})}let I=async(e,t,i,n,s)=>{await e.postFacilitatorAction(t,i,{action:"fullscreen",sessionId:n,parameters:{full:s}})},D=async(e,t,i,n,s)=>{await e.postFacilitatorAction(t,i,{action:s,sessionId:n})};var F=i(58253),E=i(5085),A=i(69065),N=i(66124),O=i(7630),P=i(58433),B=i(14874),R=i(70883),W=i(10105),H=i(37570);function q(){let e=(0,o.useContext)(H.H),t=(0,o.useContext)(R.l),i=(0,B.Z)(),n=e=>"Device: ".concat(e.deviceName),s=e=>e.role===a._b.Controller?"\uD83D\uDD79️":"",l=e=>e.participantName&&e.participantName.length>0?e.participantName:null,c=e=>{let{connected:t}=e;return(0,r.jsx)(d.Z,{sx:{p:1,borderRadius:4,height:42},style:{background:t?i.palette.connected.main:i.palette.disconnected.main},children:(0,r.jsx)("img",{style:{height:26,margin:0,padding:0},src:t?"/icons/device-connected.svg":"/icons/device-disconnected.svg"})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{variant:"h6",component:"h2",children:"Participants"}),(0,r.jsx)(P.ZP,{container:!0,spacing:2,sx:{mt:2},children:t.subscriptions.map(e=>(0,r.jsx)(P.ZP,{item:!0,xs:6,children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(c,{connected:e.enabled}),(0,r.jsxs)(d.Z,{sx:{ml:2},children:[(0,r.jsxs)(x.Z,{variant:"h6",children:[s(e),l(e)]}),(0,r.jsx)(x.Z,{variant:"body1",children:n(e)})]})]})},"connection-indicator-".concat(e.subscriptionId)))}),(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",sx:{flexGrow:1,alignSelf:"start",mt:4},onClick:()=>{var t;null===(t=navigator)||void 0===t||t.clipboard.writeText((0,W.v)(e.session))},children:"Copy participant link"})]})}function M(){let[e,t]=(0,o.useState)(!1),i=()=>{t(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{"aria-label":"settings",onClick:()=>{t(!0)},children:(0,r.jsx)("img",{src:"/icons/session-participants.svg"})}),(0,r.jsx)(A.Z,{fullWidth:!0,maxWidth:"md",open:e,onClose:i,children:(0,r.jsxs)(N.Z,{children:[(0,r.jsx)(d.Z,{style:{position:"absolute",top:0,right:0},children:(0,r.jsx)(b.Z,{"aria-label":"close",onClick:i,children:(0,r.jsx)(O.Z,{})})}),(0,r.jsx)(d.Z,{sx:{p:2},display:"flex",flexDirection:"column",alignItems:"center",children:(0,r.jsx)(q,{})})]})})]})}function G(e){let{}=e,t=(0,o.useContext)(F.A),i=(0,o.useContext)(H.H),n=(0,o.useContext)(c.d),s=(0,o.useContext)(E.rZ),l=(0,h.Z)(),[u,p]=(0,o.useState)(n.facilitationState===a._y.Open),[g,v]=(0,o.useState)(!1),[w,y]=(0,o.useState)(!1);(0,o.useEffect)(()=>{p(n.facilitationState===a._y.Open)},[n]);let Z=async e=>{try{y(!0),await I(t,s.user.access_token,s.sessionToken,i.session.id,e)}catch(e){console.error(e)}finally{y(!1)}},b=async e=>{try{switch(v(!0),e){case a._y.Ready:await D(t,s.user.access_token,s.sessionToken,i.session.id,"reset");break;case a._y.Open:await D(t,s.user.access_token,s.sessionToken,i.session.id,"open");break;case a._y.Closed:await D(t,s.user.access_token,s.sessionToken,i.session.id,"close");break;default:console.warn("Unexpected facilitation switch from menu.")}}catch(e){console.error(e)}finally{v(!1)}};return(0,r.jsx)(m.Z,{position:"static",elevation:0,children:(0,r.jsx)(j.Z,{sx:{bgcolor:l.palette.headerBarBackground.main,color:"black"},children:(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"},children:[(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,r.jsx)("img",{src:"/icons/home.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),(0,r.jsx)(f.Z,{color:"primary",badgeContent:a._y[n.facilitationState],anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,r.jsx)(x.Z,{variant:"h5",children:i.session.sessionName})})]}),u&&(0,r.jsx)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:(0,r.jsx)(_,{startTime:n.sessionStartedAt,duration_mins:i.session.sessionDurationMins})}),(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,r.jsx)(M,{}),(0,r.jsx)(T,{state:n.facilitationState,fullscreen:n.fullScreen,onFacilitationStateChange:b,onFullScreenChange:Z,stateBusy:g,fullscreenBusy:w})]})]})})})}var L=i(4766),V=i(93191);function K(e){let{notes:t}=e;return(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})}var U=i(79617),X=i(51847),z=i(33578),J=i(35231),Y=i(50467),$=i(2842),Q=i(9542),ee=i(13971);function et(e){let{colours:t,data:i}=e,n=e=>{let t={true:{l:!0,r:!1},false:{l:!1,r:!0}};return 0===e.true&&(t.false.l=!0),0===e.false&&(t.true.r=!0),t},[s,a]=(0,o.useState)(n(i));(0,o.useEffect)(()=>{a(n(i))},[i]);let l=e=>[e.l?16:0,e.r?16:0,e.r?16:0,e.l?16:0];return(0,r.jsx)(J.h,{width:"100%",height:40,children:(0,r.jsxs)(Y.v,{layout:"vertical",margin:{left:0,right:0},height:40,data:[{name:"completion",complete:i.true,incomplete:i.false}],children:[(0,r.jsx)($.K,{hide:!0,type:"number",max:i.true+i.false}),(0,r.jsx)(Q.B,{hide:!0,dataKey:"name",type:"category"}),(0,r.jsx)(ee.$,{dataKey:"complete",stackId:"completion",fill:t[0],radius:l(s.true)}),(0,r.jsx)(ee.$,{dataKey:"incomplete",stackId:"completion",fill:t[1],radius:l(s.false)})]})})}var ei=i(74382),en=i(37552);(n=s||(s={}))[n.NotAnswered=0]="NotAnswered",n[n.Answered=1]="Answered";let es=(e,t)=>{var i;let n=null!==(i=er(e.answers))&&void 0!==i?i:[],s=n.length,r=t.filter(e=>e.enabled&&e.role===a._b.Client),l=r.filter(e=>!n.find(t=>t.participantId===e.deviceId));return{allAnswers:n,relevantParticipants:r,answeredCount:s,participantsWithoutAnswers:l,maxAnswers:n.length+l.length}},er=e=>null==e?void 0:e.sort((e,t)=>new Date(e.created).getTime()-new Date(t.created).getTime()),ea=(e,t)=>{var i;return[...e.allAnswers.map((e,i)=>({description:el(e,t),answered:1})),...null!==(i=e.participantsWithoutAnswers.map(e=>({description:eo(e),answered:0})))&&void 0!==i?i:[]]},el=(e,t)=>eo(t.find(t=>t.deviceId===e.participantId)),eo=e=>{var t,i;return null!==(i=null!==(t=null==e?void 0:e.participantName)&&void 0!==t?t:null==e?void 0:e.deviceName)&&void 0!==i?i:"Unknown"};function ec(e){let t=(0,o.useContext)(ei.v1),i=(0,o.useContext)(R.l),n=()=>{var i;return{qid:e.qid,answers:null!==(i=t.allAnswers[e.qid])&&void 0!==i?i:[]}},[s,a]=(0,o.useState)(n()),[l,c]=(0,o.useState)(i.subscriptions),[u,h]=(0,o.useState)(es(s,l)),[f,m]=(0,o.useState)([]);(0,o.useEffect)(()=>{c(i.subscriptions)},[i]),(0,o.useEffect)(()=>{a(n())},[t]),(0,o.useEffect)(()=>{h(es(s,l))},[s,l]),(0,o.useEffect)(()=>{m(ea(u,l))},[u,l]);let j=e=>(0,r.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:2,background:"white",border:"1px solid #EFEFEF",p:2},children:[(0,r.jsx)(x.Z,{variant:"body1",sx:{borderRight:"1px solid black",overflowX:"scroll",textWrap:"nowrap",flexGrow:1,mr:.5,pr:.5},children:e.description}),1===e.answered&&(0,r.jsx)("img",{src:"/icons/checkbox-filled.svg"}),1!==e.answered&&(0,r.jsx)("img",{src:"/icons/checkbox.svg"})]}),p=(0,B.Z)();return(0,r.jsx)("div",{children:e.qid&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(U.Z,{sx:{background:"transparent"},elevation:0,children:[(0,r.jsx)(X.Z,{expandIcon:(0,r.jsx)(en.Z,{}),sx:{p:0},children:(0,r.jsx)(et,{colours:[p.palette.primary.main,"#ededff"],data:{true:u.answeredCount,false:u.participantsWithoutAnswers.length}})}),(0,r.jsxs)(z.Z,{sx:{p:0},children:[(0,r.jsxs)(x.Z,{variant:"body1",sx:{ml:1,mb:1},children:[(0,r.jsx)("img",{src:"/icons/busts.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),"".concat(u.answeredCount," of ").concat(u.maxAnswers," ")," ",1!==u.answeredCount?"have":"has"," voted"]}),(0,r.jsx)(P.ZP,{container:!0,spacing:2,children:f.map((t,i)=>(0,r.jsx)(P.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(j,{description:t.description,answered:t.answered})},"answer-indicator-grid-item-".concat(e.qid,"-").concat(i)))})]})]})})})}var ed=i(6722),ex=i(11707);function eu(e){let{orientation:t,showLabels:i}=e,{muted:n,toggleMute:s}=(0,ed.HI)(),{tileId:a,isVideoEnabled:l,hasReachedVideoLimit:o,toggleVideo:c}=(0,ed.Onx)(),d=(0,ed.fjl)();return n?(0,r.jsx)(ed.PjE,{muted:!0}):(0,r.jsx)(ed.PjE,{}),l?(0,r.jsx)(ed.V1s,{}):(0,r.jsx)(ed.V1s,{disabled:!0}),ed.LPZ,(0,r.jsx)(ex.f6,{theme:ed.Wbj,children:(0,r.jsxs)(ed.VSr,{showLabels:i,layout:"horizontal"===t?"undocked-horizontal":"undocked-vertical",style:{boxShadow:"none"},children:[(0,r.jsx)(ed._nn,{}),(0,r.jsx)(ed.V8F,{})]})})}var eh=i(31164),ef=i(68276),em=i(8963),ej=i(97340),ep=i(28801);let eg=e=>{void 0!==window&&void 0!==window.localStorage&&window.localStorage.setItem("SlideTimers",JSON.stringify(e))},ev=()=>{if(void 0===window||void 0===window.localStorage)return{};{let e=window.localStorage.getItem("SlideTimers");return null!==e?JSON.parse(e):{}}},ew=e=>{let t=e%60;return"".concat(Math.floor(e/60)," mins, ").concat(t<10?"0":"").concat(t," secs")};function ey(e){let t=(0,o.useContext)(L.X),i=(0,o.useContext)(c.d),[n,s]=(0,o.useState)(),[l,h]=(0,o.useState)(),f=(0,o.useRef)();(0,o.useEffect)(()=>{s(ev())},[]),(0,o.useEffect)(()=>{void 0!==n&&eg(n)},[n]),(0,o.useEffect)(()=>{if(t.data&&t.data.secs){if(n){if(void 0===n[t.data.index]){console.debug("timer not found");let e={running:i.facilitationState===a._y.Open,startTime:t.data.secs,currentTime:t.data.secs,index:t.data.index};s({...n,[t.data.index]:e}),h(e)}else(void 0===l||l.index!==t.data.index)&&h(n[t.data.index])}}else h(void 0)},[t.data,n]),(0,o.useEffect)(()=>{void 0!==l&&(void 0!==f.current&&clearTimeout(f.current),f.current=setTimeout(m,1e3))},[l]);let m=(0,o.useCallback)(()=>{if(void 0!==f.current&&(clearTimeout(f.current),f.current=void 0),void 0!==l&&l.running&&l.currentTime>0){let e={...l,currentTime:l.currentTime-1};h(e),s({...n,[t.data.index]:e}),f.current=setTimeout(m,1e3)}},[l]);(0,o.useEffect)(()=>{i.facilitationState===a._y.Open?void 0===l||l.running||j():void 0!==l&&l.running&&p()},[i.facilitationState]);let j=()=>{if(void 0!==l){let e={...l,running:!0};h(e),s({...n,[t.data.index]:e}),void 0!==f.current&&clearTimeout(f.current),f.current=setTimeout(m,1e3)}},p=()=>{if(void 0!==l){let e={...l,running:!1};h(e),s({...n,[t.data.index]:e})}},g=()=>{if(void 0!==l){let e={...l,running:!1,currentTime:l.startTime};h(e),s({...n,[t.data.index]:e})}},v=e=>{if(void 0!==l){let i={...l,currentTime:l.currentTime+e};h(i),s({...n,[t.data.index]:i})}},w=l&&!l.running&&l.currentTime>0,y=l&&l.running&&l.currentTime>0;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",children:[(0,r.jsx)("img",{src:"/icons/session-time.svg"}),void 0!==l&&(0,r.jsx)(x.Z,{variant:"h6",sx:{ml:1},children:ew(l.currentTime)})]}),(0,r.jsxs)(d.Z,{display:"flex",flexDirection:"row",justifyContent:"end",alignItems:"center",gap:1,children:[(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",disabled:!w,onClick:()=>{j()},children:"Start"}),(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",disabled:!y,onClick:()=>{p()},children:"Pause"}),(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{v(60)},children:"+1 min"}),(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{g()},children:"Reset"})]})]})})}function eZ(){var e,t,i;let n=(0,o.useContext)(F.A),s=(0,o.useContext)(E.rZ),l=(0,o.useContext)(H.H),h=(0,o.useContext)(c.d),f=(0,o.useContext)(L.X),m=(0,o.useContext)(V.N),j=(0,o.useContext)(R.l),p=(0,o.useContext)(ef.u),g=new em.ConsoleLogger("Zeitgeist meeting",em.LogLevel.OFF),[v,w]=(0,o.useState)(void 0),[y,Z]=(0,o.useState)(!1),b=async e=>{try{Z(!0),await D(n,s.user.access_token,s.sessionToken,l.sid,e)}catch(e){console.error(e)}finally{Z(!1)}};(0,o.useEffect)(()=>{h.facilitationState===a._y.Ready?w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsxs)(x.Z,{variant:"body1",sx:{ml:1},children:[j.subscriptions.filter(e=>e.deviceId!==s.deviceId).length," waiting"]})]}),(0,r.jsx)(u.Z,{variant:"contained",color:"primary",onClick:()=>b("open"),disabled:y,children:"Open workshop"})]})):h.facilitationState===a._y.Open?w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsxs)(x.Z,{variant:"body1",sx:{ml:1},children:[j.subscriptions.filter(e=>e.deviceId!==s.deviceId).length," participants"]})]}),(0,r.jsx)(u.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>b("close"),disabled:y,children:"Close workshop"})]})):h.facilitationState===a._y.Closed&&w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsx)(x.Z,{variant:"body1",sx:{ml:1},children:"closed"})]}),(0,r.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:()=>b("reset"),disabled:y,children:"Open waiting room"})]}))},[h.facilitationState,j,y]);let C=l.session.remoteConfiguration===a.VS.RemoteWithVideoCall;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:1,p:1,width:"100vw",height:"100vh",maxWidth:"100vw",maxHeight:"100vh",overflowX:"hidden",overflowY:"hidden"},children:[(0,r.jsx)(G,{}),(0,r.jsxs)(d.Z,{sx:{flexGrow:1,flexBasis:"100%",maxHeight:"100%",overflowY:"hidden",display:"flex",flexDirection:"row",gap:1},children:[(0,r.jsx)(d.Z,{sx:{width:"50%",height:"100%",maxHeight:"100%",display:"flex",flexDirection:"column"},children:(0,r.jsx)(ej.Z,{title:"Participant view",tools:v,sx:{flexGrow:1},children:m.presentation})}),(0,r.jsx)(d.Z,{sx:{width:"50%",display:"block",overflow:"hidden"},children:(0,r.jsxs)(d.Z,{sx:{maxHeight:"100%",height:"100%",width:"100%",maxWidth:"100%",display:"flex",flexDirection:"column",gap:1},children:[C&&(0,r.jsx)(ed.ikO,{logger:g,children:(0,r.jsx)(ed.BAg,{children:(0,r.jsx)(ed.lUb,{children:(0,r.jsxs)(ej.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row"},children:[(0,r.jsx)(eu,{orientation:"vertical",showLabels:!1}),(0,r.jsx)(eh.Z,{role:s.role,facilitationState:h.facilitationState,sid:l.sid,sessionToken:s.sessionToken,accessToken:s.user.access_token,participantId:s.deviceId,participantName:null===(e=j.thisUser)||void 0===e?void 0:e.participantName,initialCallPreferences:p.call,style:{flexGrow:1}})]})})})}),(null==f?void 0:null===(t=f.data.qids)||void 0===t?void 0:t.length)>0&&(0,r.jsx)(ej.Z,{title:"Votes",scrolling:!1,children:(0,r.jsx)(d.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:null===(i=f.data.qids)||void 0===i?void 0:i.map(e=>(0,r.jsx)(d.Z,{sx:{width:f.data.qids.length>1?"50%":"100%"},children:(0,r.jsx)(ec,{sid:l.sid,qid:e})},"slide-".concat(f.data.index,"-answer-monitor-").concat(e)))})}),(null==f?void 0:f.data.secs)!==void 0&&f.data.secs>0&&(0,r.jsx)(ej.Z,{scrolling:!1,children:(0,r.jsx)(ey,{data:f.data})}),(0,r.jsx)(ej.Z,{title:"Notes",scrolling:!0,sx:{flexGrow:C?void 0:1,minHeight:"25vh"},children:(0,r.jsx)(K,{notes:f.data.notes})})]})})]})]}),(0,r.jsx)(d.Z,{sx:{position:"fixed",left:4,bottom:4},children:(0,r.jsx)(ep.Z,{})})]})}var eb=i(82297);function eC(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(eb.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:a._b.Controller,children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(eZ,{})]})})}var eS=i(16463);function ek(){let e=(0,eS.useSearchParams)(),t=e.get("sid"),i=e.get("code"),n="true"===e.get("refresh");return null===t||null===i?(0,r.jsx)("p",{children:"Missing session id or join code"}):(0,r.jsx)(eC,{sid:t,joinCode:i,refresh:n})}},10105:function(e,t,i){"use strict";i.d(t,{k:function(){return s},v:function(){return n}});let n=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),s=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)}},function(e){e.O(0,[827,908,444,866,221,732,887,403,930,181,266,29,516,105,13,965,971,23,744],function(){return e(e.s=59870)}),_N_E=e.O()}]);