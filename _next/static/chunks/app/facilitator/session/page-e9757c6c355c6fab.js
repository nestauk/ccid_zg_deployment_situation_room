(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{59870:function(e,t,i){Promise.resolve().then(i.bind(i,6647))},6647:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return eS}});var n,s,r=i(57437),a=i(94547),l=i(2265),o=i(60182),c=i(31193),d=i(80511),x=i(96537),u=i(22960),h=i(56019),f=i(71733),m=i(79806),j=i(44228),p=i(42748),g=i(11656),v=i(47905),w=i(86917),y=i(14595),Z=i(60335),b=i(21395),C=i(24072),S=i(76396);function k(e){let t=t=>{t!==e.state&&e.onFacilitationStateChange(t)},i=t=>{t!==e.fullscreen&&e.onFullScreenChange(t)},n=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)(v.Z,{inset:!0,children:(0,r.jsx)("b",{children:"Workshop facilitation"})})},"action-menu-video-heading"),[a._y.Ready,a._y.Open,a._y.Closed].map(i=>(0,r.jsxs)(g.Z,{disabled:e.stateBusy,onClick:()=>t(i),children:[e.state===i&&(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(v.Z,{inset:e.state!==i,children:a._y[i]})]},"action-menu-item-".concat(a._y[i])))]}),(0,r.jsx)(y.Z,{}),(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)(v.Z,{inset:!0,children:(0,r.jsx)("b",{children:"Screen mode"})})},"action-menu-screen-heading"),(0,r.jsxs)(g.Z,{disabled:e.fullscreenBusy,onClick:()=>i(!0),children:[e.fullscreen&&(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(v.Z,{inset:!e.fullscreen,children:"Full screen"})]},"action-menu-item-screen-fullscreen"),(0,r.jsxs)(g.Z,{disabled:e.fullscreenBusy,onClick:()=>i(!1),children:[!e.fullscreen&&(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(v.Z,{inset:e.fullscreen,children:"Windowed"})]},"action-menu-item-screen-windowed")]})]});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(C.ZP,{variant:"popover",popupId:"facilitation-actions-popup",children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{"aria-label":"settings",...(0,S.vW)(e),children:(0,r.jsx)("img",{src:"/icons//settings.svg"})}),(0,r.jsx)(b.Z,{...(0,S.wK)(e),children:(0,r.jsx)(n,{})})]})})})}function T(e){let[t,i]=(0,l.useState)(""),n=(0,l.useRef)();(0,l.useEffect)(()=>{if(e.startTime)return n.current=setInterval(s,1e3),()=>{clearInterval(n.current)};n.current&&(clearInterval(n.current),n.current=void 0),i("")},[e.startTime,e.duration_mins]);let s=(0,l.useCallback)(()=>{if(e.startTime){let t=new Date().getTime()-e.startTime.getTime();e.duration_mins&&(t=Math.max(6e4*e.duration_mins-t,0));let n=Math.floor(t/36e5),s=Math.floor((t-=36e5*n)/6e4),r=Math.floor((t-=6e4*s)/1e3);t-=1e3*r,i("".concat(n.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0"),":").concat(r.toString().padStart(2,"0")))}else i("")},[e.startTime,e.duration_mins]);return(0,r.jsxs)(d.Z,{variant:"h5",children:[(0,r.jsx)("img",{src:"/icons/clock.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),t]})}let _=async(e,t,i,n,s)=>{await e.postFacilitatorAction(t,i,{action:"fullscreen",sessionId:n,parameters:{full:s}})},I=async(e,t,i,n,s)=>{await e.postFacilitatorAction(t,i,{action:s,sessionId:n})};var D=i(58253),F=i(5085),E=i(69065),A=i(66124),N=i(7630),O=i(58433),P=i(14874),B=i(70883),R=i(10105),W=i(37570);function H(){let e=(0,l.useContext)(W.H),t=(0,l.useContext)(B.l),i=(0,P.Z)(),n=e=>"Device: ".concat(e.deviceName),s=e=>e.role===a._b.Controller?"\uD83D\uDD79️":"",o=e=>e.participantName&&e.participantName.length>0?e.participantName:null,u=e=>{let{connected:t}=e;return(0,r.jsx)(c.Z,{sx:{p:1,borderRadius:4,height:42},style:{background:t?i.palette.connected.main:i.palette.disconnected.main},children:(0,r.jsx)("img",{style:{height:26,margin:0,padding:0},src:t?"/icons/device-connected.svg":"/icons/device-disconnected.svg"})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{variant:"h6",component:"h2",children:"Participants"}),(0,r.jsx)(O.ZP,{container:!0,spacing:2,sx:{mt:2},children:t.subscriptions.map(e=>(0,r.jsx)(O.ZP,{item:!0,xs:6,children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(u,{connected:e.enabled}),(0,r.jsxs)(c.Z,{sx:{ml:2},children:[(0,r.jsxs)(d.Z,{variant:"h6",children:[s(e),o(e)]}),(0,r.jsx)(d.Z,{variant:"body1",children:n(e)})]})]})},"connection-indicator-".concat(e.subscriptionId)))}),(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",sx:{flexGrow:1,alignSelf:"start",mt:4},onClick:()=>{var t;null===(t=navigator)||void 0===t||t.clipboard.writeText((0,R.v)(e.session))},children:"Copy participant link"})]})}function q(){let[e,t]=(0,l.useState)(!1),i=()=>{t(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{"aria-label":"settings",onClick:()=>{t(!0)},children:(0,r.jsx)("img",{src:"/icons/session-participants.svg"})}),(0,r.jsx)(E.Z,{fullWidth:!0,maxWidth:"md",open:e,onClose:i,children:(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(c.Z,{style:{position:"absolute",top:0,right:0},children:(0,r.jsx)(Z.Z,{"aria-label":"close",onClick:i,children:(0,r.jsx)(N.Z,{})})}),(0,r.jsx)(c.Z,{sx:{p:2},display:"flex",flexDirection:"column",alignItems:"center",children:(0,r.jsx)(H,{})})]})})]})}function M(e){let{}=e,t=(0,l.useContext)(D.A),i=(0,l.useContext)(W.H),n=(0,l.useContext)(o.d),s=(0,l.useContext)(F.rZ),x=(0,u.Z)(),[j,p]=(0,l.useState)(n.facilitationState===a._y.Open),[g,v]=(0,l.useState)(!1),[w,y]=(0,l.useState)(!1);(0,l.useEffect)(()=>{p(n.facilitationState===a._y.Open)},[n]);let Z=async e=>{try{y(!0),await _(t,s.user.access_token,s.sessionToken,i.session.id,e)}catch(e){console.error(e)}finally{y(!1)}},b=async e=>{try{switch(v(!0),e){case a._y.Ready:await I(t,s.user.access_token,s.sessionToken,i.session.id,"reset");break;case a._y.Open:await I(t,s.user.access_token,s.sessionToken,i.session.id,"open");break;case a._y.Closed:await I(t,s.user.access_token,s.sessionToken,i.session.id,"close");break;default:console.warn("Unexpected facilitation switch from menu.")}}catch(e){console.error(e)}finally{v(!1)}};return(0,r.jsx)(f.Z,{position:"static",elevation:0,children:(0,r.jsx)(m.Z,{sx:{bgcolor:x.palette.headerBarBackground.main,color:"black"},children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"},children:[(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,r.jsx)("img",{src:"/icons/home.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),(0,r.jsx)(h.Z,{color:"primary",badgeContent:a._y[n.facilitationState],anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,r.jsx)(d.Z,{variant:"h5",children:i.session.sessionName})})]}),j&&(0,r.jsx)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:(0,r.jsx)(T,{startTime:n.sessionStartedAt,duration_mins:i.session.sessionDurationMins})}),(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,r.jsx)(q,{}),(0,r.jsx)(k,{state:n.facilitationState,fullscreen:n.fullScreen,onFacilitationStateChange:b,onFullScreenChange:Z,stateBusy:g,fullscreenBusy:w})]})]})})})}var G=i(4766),L=i(93191);function V(e){let{notes:t}=e;return(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})}var K=i(79617),U=i(51847),X=i(33578),z=i(35231),J=i(50467),Y=i(2842),$=i(9542),Q=i(13971);function ee(e){let{colours:t,data:i}=e,n=e=>{let t={true:{l:!0,r:!1},false:{l:!1,r:!0}};return 0===e.true&&(t.false.l=!0),0===e.false&&(t.true.r=!0),t},[s,a]=(0,l.useState)(n(i));(0,l.useEffect)(()=>{a(n(i))},[i]);let o=e=>[e.l?16:0,e.r?16:0,e.r?16:0,e.l?16:0];return(0,r.jsx)(z.h,{width:"100%",height:40,children:(0,r.jsxs)(J.v,{layout:"vertical",margin:{left:0,right:0},height:40,data:[{name:"completion",complete:i.true,incomplete:i.false}],children:[(0,r.jsx)(Y.K,{hide:!0,type:"number",max:i.true+i.false}),(0,r.jsx)($.B,{hide:!0,dataKey:"name",type:"category"}),(0,r.jsx)(Q.$,{dataKey:"complete",stackId:"completion",fill:t[0],radius:o(s.true)}),(0,r.jsx)(Q.$,{dataKey:"incomplete",stackId:"completion",fill:t[1],radius:o(s.false)})]})})}var et=i(74382),ei=i(37552);(n=s||(s={}))[n.NotAnswered=0]="NotAnswered",n[n.Answered=1]="Answered";let en=(e,t)=>{var i;let n=null!==(i=es(e.answers))&&void 0!==i?i:[],s=n.length,r=t.filter(e=>e.enabled&&e.role===a._b.Client),l=r.filter(e=>!n.find(t=>t.participantId===e.deviceId));return{allAnswers:n,relevantParticipants:r,answeredCount:s,participantsWithoutAnswers:l,maxAnswers:n.length+l.length}},es=e=>null==e?void 0:e.sort((e,t)=>new Date(e.created).getTime()-new Date(t.created).getTime()),er=(e,t)=>{var i;return[...e.allAnswers.map((e,i)=>({description:ea(e,t),answered:1})),...null!==(i=e.participantsWithoutAnswers.map(e=>({description:el(e),answered:0})))&&void 0!==i?i:[]]},ea=(e,t)=>el(t.find(t=>t.deviceId===e.participantId)),el=e=>{var t,i;return null!==(i=null!==(t=null==e?void 0:e.participantName)&&void 0!==t?t:null==e?void 0:e.deviceName)&&void 0!==i?i:"Unknown"};function eo(e){let t=(0,l.useContext)(et.v1),i=(0,l.useContext)(B.l),n=()=>{var i;return{qid:e.qid,answers:null!==(i=t.allAnswers[e.qid])&&void 0!==i?i:[]}},[s,a]=(0,l.useState)(n()),[o,x]=(0,l.useState)(i.subscriptions),[u,h]=(0,l.useState)(en(s,o)),[f,m]=(0,l.useState)([]);(0,l.useEffect)(()=>{x(i.subscriptions)},[i]),(0,l.useEffect)(()=>{a(n())},[t]),(0,l.useEffect)(()=>{h(en(s,o))},[s,o]),(0,l.useEffect)(()=>{m(er(u,o))},[u,o]);let j=e=>(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:2,background:"white",border:"1px solid #EFEFEF",p:2},children:[(0,r.jsx)(d.Z,{variant:"body1",sx:{borderRight:"1px solid black",overflowX:"scroll",textWrap:"nowrap",flexGrow:1,mr:.5,pr:.5},children:e.description}),1===e.answered&&(0,r.jsx)("img",{src:"/icons/checkbox-filled.svg"}),1!==e.answered&&(0,r.jsx)("img",{src:"/icons/checkbox.svg"})]}),p=(0,P.Z)();return(0,r.jsx)("div",{children:e.qid&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(K.Z,{sx:{background:"transparent"},elevation:0,children:[(0,r.jsx)(U.Z,{expandIcon:(0,r.jsx)(ei.Z,{}),sx:{p:0},children:(0,r.jsx)(ee,{colours:[p.palette.primary.main,"#ededff"],data:{true:u.answeredCount,false:u.participantsWithoutAnswers.length}})}),(0,r.jsxs)(X.Z,{sx:{p:0},children:[(0,r.jsxs)(d.Z,{variant:"body1",sx:{ml:1,mb:1},children:[(0,r.jsx)("img",{src:"/icons/busts.svg",style:{height:26,verticalAlign:"middle",marginRight:12,paddingBottom:4}}),"".concat(u.answeredCount," of ").concat(u.maxAnswers," ")," ",1!==u.answeredCount?"have":"has"," voted"]}),(0,r.jsx)(O.ZP,{container:!0,spacing:2,children:f.map((t,i)=>(0,r.jsx)(O.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsx)(j,{description:t.description,answered:t.answered})},"answer-indicator-grid-item-".concat(e.qid,"-").concat(i)))})]})]})})})}var ec=i(6722),ed=i(11707);function ex(e){let{orientation:t,showLabels:i}=e,{muted:n,toggleMute:s}=(0,ec.HI)(),{tileId:a,isVideoEnabled:l,hasReachedVideoLimit:o,toggleVideo:c}=(0,ec.Onx)(),d=(0,ec.fjl)();return n?(0,r.jsx)(ec.PjE,{muted:!0}):(0,r.jsx)(ec.PjE,{}),l?(0,r.jsx)(ec.V1s,{}):(0,r.jsx)(ec.V1s,{disabled:!0}),ec.LPZ,(0,r.jsx)(ed.f6,{theme:ec.Wbj,children:(0,r.jsxs)(ec.VSr,{showLabels:i,layout:"horizontal"===t?"undocked-horizontal":"undocked-vertical",style:{boxShadow:"none"},children:[(0,r.jsx)(ec._nn,{}),(0,r.jsx)(ec.V8F,{})]})})}var eu=i(31164),eh=i(68276),ef=i(8963),em=i(97340),ej=i(28801);let ep=e=>{void 0!==window&&void 0!==window.localStorage&&window.localStorage.setItem("SlideTimers",JSON.stringify(e))},eg=()=>{if(void 0===window||void 0===window.localStorage)return{};{let e=window.localStorage.getItem("SlideTimers");return null!==e?JSON.parse(e):{}}},ev=e=>{let t=e%60;return"".concat(Math.floor(e/60)," mins, ").concat(t<10?"0":"").concat(t," secs")};function ew(e){let t=(0,l.useContext)(G.X),i=(0,l.useContext)(o.d),[n,s]=(0,l.useState)(),[u,h]=(0,l.useState)(),f=(0,l.useRef)();(0,l.useEffect)(()=>{s(eg())},[]),(0,l.useEffect)(()=>{void 0!==n&&ep(n)},[n]),(0,l.useEffect)(()=>{if(t.data&&t.data.secs){if(n){if(void 0===n[t.data.index]){console.debug("timer not found");let e={running:i.facilitationState===a._y.Open,startTime:t.data.secs,currentTime:t.data.secs,index:t.data.index};s({...n,[t.data.index]:e}),h(e)}else(void 0===u||u.index!==t.data.index)&&h(n[t.data.index])}}else h(void 0)},[t.data,n]),(0,l.useEffect)(()=>{void 0!==u&&(void 0!==f.current&&clearTimeout(f.current),f.current=setTimeout(m,1e3))},[u]);let m=(0,l.useCallback)(()=>{if(void 0!==f.current&&(clearTimeout(f.current),f.current=void 0),void 0!==u&&u.running&&u.currentTime>0){let e={...u,currentTime:u.currentTime-1};h(e),s({...n,[t.data.index]:e}),f.current=setTimeout(m,1e3)}},[u]);(0,l.useEffect)(()=>{i.facilitationState===a._y.Open?void 0===u||u.running||j():void 0!==u&&u.running&&p()},[i.facilitationState]);let j=()=>{if(void 0!==u){let e={...u,running:!0};h(e),s({...n,[t.data.index]:e}),void 0!==f.current&&clearTimeout(f.current),f.current=setTimeout(m,1e3)}},p=()=>{if(void 0!==u){let e={...u,running:!1};h(e),s({...n,[t.data.index]:e})}},g=()=>{if(void 0!==u){let e={...u,running:!1,currentTime:u.startTime};h(e),s({...n,[t.data.index]:e})}},v=e=>{if(void 0!==u){let i={...u,currentTime:u.currentTime+e};h(i),s({...n,[t.data.index]:i})}},w=u&&!u.running&&u.currentTime>0,y=u&&u.running&&u.currentTime>0;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",children:[(0,r.jsx)("img",{src:"/icons/session-time.svg"}),void 0!==u&&(0,r.jsx)(d.Z,{variant:"h6",sx:{ml:1},children:ev(u.currentTime)})]}),(0,r.jsxs)(c.Z,{display:"flex",flexDirection:"row",justifyContent:"end",alignItems:"center",gap:1,children:[(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",disabled:!w,onClick:()=>{j()},children:"Start"}),(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",disabled:!y,onClick:()=>{p()},children:"Pause"}),(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{v(60)},children:"+1 min"}),(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{g()},children:"Reset"})]})]})})}function ey(){var e,t,i;let n=(0,l.useContext)(D.A),s=(0,l.useContext)(F.rZ),u=(0,l.useContext)(W.H),h=(0,l.useContext)(o.d),f=(0,l.useContext)(G.X),m=(0,l.useContext)(L.N),j=(0,l.useContext)(B.l),p=(0,l.useContext)(eh.u),g=new ef.ConsoleLogger("Zeitgeist meeting",ef.LogLevel.OFF),[v,w]=(0,l.useState)(void 0),[y,Z]=(0,l.useState)(!1),b=async e=>{try{Z(!0),await I(n,s.user.access_token,s.sessionToken,u.sid,e)}catch(e){console.error(e)}finally{Z(!1)}};(0,l.useEffect)(()=>{h.facilitationState===a._y.Ready?w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsxs)(d.Z,{variant:"body1",sx:{ml:1},children:[j.subscriptions.filter(e=>e.deviceId!==s.deviceId).length," waiting"]})]}),(0,r.jsx)(x.Z,{variant:"contained",color:"primary",onClick:()=>b("open"),disabled:y,children:"Open workshop"})]})):h.facilitationState===a._y.Open?w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsxs)(d.Z,{variant:"body1",sx:{ml:1},children:[j.subscriptions.filter(e=>e.deviceId!==s.deviceId).length," participants"]})]}),(0,r.jsx)(x.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>b("close"),disabled:y,children:"Close workshop"})]})):h.facilitationState===a._y.Closed&&w((0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg"}),(0,r.jsx)(d.Z,{variant:"body1",sx:{ml:1},children:"closed"})]}),(0,r.jsx)(x.Z,{variant:"outlined",color:"primary",onClick:()=>b("reset"),disabled:y,children:"Open waiting room"})]}))},[h.facilitationState,j,y]);let C=u.session.remoteConfiguration===a.VS.RemoteWithVideoCall;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:1,p:1,width:"100vw",height:"100vh",maxWidth:"100vw",maxHeight:"100vh",overflowX:"hidden",overflowY:"hidden"},children:[(0,r.jsx)(M,{}),(0,r.jsxs)(c.Z,{sx:{flexGrow:1,flexBasis:"100%",maxHeight:"100%",overflowY:"hidden",display:"flex",flexDirection:"row",gap:1},children:[(0,r.jsx)(c.Z,{sx:{width:"50%",height:"100%",maxHeight:"100%",display:"flex",flexDirection:"column"},children:(0,r.jsx)(em.Z,{title:"Participant view",tools:v,sx:{flexGrow:1},children:m.presentation})}),(0,r.jsx)(c.Z,{sx:{width:"50%",display:"block",overflow:"hidden"},children:(0,r.jsxs)(c.Z,{sx:{maxHeight:"100%",height:"100%",width:"100%",maxWidth:"100%",display:"flex",flexDirection:"column",gap:1},children:[C&&(0,r.jsx)(ec.ikO,{logger:g,children:(0,r.jsx)(ec.BAg,{children:(0,r.jsx)(ec.lUb,{children:(0,r.jsxs)(em.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row"},children:[(0,r.jsx)(ex,{orientation:"vertical",showLabels:!1}),(0,r.jsx)(eu.Z,{role:s.role,facilitationState:h.facilitationState,sid:u.sid,sessionToken:s.sessionToken,accessToken:s.user.access_token,participantId:s.deviceId,participantName:null===(e=j.thisUser)||void 0===e?void 0:e.participantName,initialCallPreferences:p.call,style:{flexGrow:1}})]})})})}),(null==f?void 0:null===(t=f.data.qids)||void 0===t?void 0:t.length)>0&&(0,r.jsx)(em.Z,{title:"Votes",scrolling:!1,children:(0,r.jsx)(c.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:null===(i=f.data.qids)||void 0===i?void 0:i.map(e=>(0,r.jsx)(c.Z,{sx:{width:f.data.qids.length>1?"50%":"100%"},children:(0,r.jsx)(eo,{sid:u.sid,qid:e})},"slide-".concat(f.data.index,"-answer-monitor-").concat(e)))})}),(null==f?void 0:f.data.secs)!==void 0&&f.data.secs>0&&(0,r.jsx)(em.Z,{scrolling:!1,children:(0,r.jsx)(ew,{data:f.data})}),(0,r.jsx)(em.Z,{title:"Notes",scrolling:!0,sx:{flexGrow:C?void 0:1,minHeight:"25vh"},children:(0,r.jsx)(V,{notes:f.data.notes})})]})})]})]}),(0,r.jsx)(c.Z,{sx:{position:"fixed",left:4,bottom:4},children:(0,r.jsx)(ej.Z,{})})]})}var eZ=i(82297);function eb(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(eZ.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:a._b.Controller,children:(0,r.jsx)(ey,{})})})}var eC=i(16463);function eS(){let e=(0,eC.useSearchParams)(),t=e.get("sid"),i=e.get("code"),n="true"===e.get("refresh");return null===t||null===i?(0,r.jsx)("p",{children:"Missing session id or join code"}):(0,r.jsx)(eb,{sid:t,joinCode:i,refresh:n})}},10105:function(e,t,i){"use strict";i.d(t,{k:function(){return s},v:function(){return n}});let n=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),s=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)}},function(e){e.O(0,[827,908,444,866,221,732,887,403,42,181,453,291,516,105,13,108,971,23,744],function(){return e(e.s=59870)}),_N_E=e.O()}]);