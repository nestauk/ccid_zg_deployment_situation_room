(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{83686:function(e,i,t){Promise.resolve().then(t.bind(t,48547))},48547:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return M}});var n=t(57437),s=t(53622),l=t(94547),o=t(78364),d=t(2265),r=t(60182),c=t(4766),a=t(93191),u=t(31193),x=t(58433),f=t(15785),h=t(96537),v=t(69065),j=t(66124),m=t(60335),p=t(80511),g=t(7630);function Z(){let[e,i]=(0,d.useState)(!1),t=()=>{i(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{i(!0)},children:"LEAVE CALL"}),(0,n.jsx)(v.Z,{fullWidth:!0,maxWidth:"sm",open:e,onClose:t,children:(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(u.Z,{style:{position:"absolute",top:0,right:0},children:(0,n.jsx)(m.Z,{"aria-label":"close",onClick:t,children:(0,n.jsx)(g.Z,{})})}),(0,n.jsxs)(u.Z,{sx:{p:2},display:"flex",flexDirection:"column",alignItems:"center",children:[(0,n.jsx)(p.Z,{variant:"h4",sx:{width:"75%"},style:{textAlign:"center"},children:"Are you sure you want to leave the call?"}),(0,n.jsx)(h.Z,{sx:{mt:4,width:"66%"},variant:"contained",color:"buttonStandard",onClick:()=>{i(!1)},children:"RETURN TO THE CALL"}),(0,n.jsx)(h.Z,{sx:{mt:2,width:"66%"},variant:"outlined",color:"buttonStandard",onClick:()=>{i(!1),window.location.reload()},children:"LEAVE THE CALL"})]})]})})]})}var w=t(6722),C=t(8963),b=t(31164),D=t(5085),S=t(70883),y=t(68276),I=t(64463);function E(e){let i=(0,w.HI)(),t=(0,w.Onx)(),s=(0,w.ULf)(),l=(0,w.m6Y)(),o=(0,w.fjl)(),[r,c]=(0,d.useState)(t.isVideoEnabled),[a,u]=(0,d.useState)(!i.muted),[x,f]=(0,d.useState)(void 0),[h,v]=(0,d.useState)(void 0),[j,m]=(0,d.useState)([]),[p,g]=(0,d.useState)([]),[Z,b]=(0,d.useState)(!1);(0,d.useEffect)(()=>{o.subscribeToMeetingStatus(e=>{if(e===w.ytK.Succeeded){var n,s;null===(n=o.audioVideo)||void 0===n||n.listVideoInputDevices().then(e=>{m(e),f(e.find(e=>e.deviceId===o.selectedVideoInputDevice))}),null===(s=o.audioVideo)||void 0===s||s.listAudioInputDevices().then(e=>{g(e),v(e.find(e=>e.deviceId===o.selectedAudioInputDevice))}),c(t.isVideoEnabled),u(!i.muted),o.subscribeToSelectedAudioInputDevice(D),o.subscribeToSelectedVideoInputDevice(S)}})},[]);let D=e=>{(0,w.Zws)(e).then(e=>{v(p.find(i=>i.deviceId===e))})},S=e=>{(0,w.Zws)(e).then(e=>{f(j.find(i=>i.deviceId===e))})};(0,d.useEffect)(()=>{c(t.isVideoEnabled)},[t.isVideoEnabled]),(0,d.useEffect)(()=>{u(!i.muted)},[i.muted]);let y=async(e,i)=>{try{var n;let l=null!==(n=null==i?void 0:i.deviceId)&&void 0!==n?n:await (0,w.Zws)(s.selectedDevice);if((0,C.isVideoTransformDevice)(s.selectedDevice)){if(b(!0),"chooseNewInnerDevice"in s.selectedDevice)l=selectedDevice.chooseNewInnerDevice(deviceId);else throw"Transform device cannot choose new inner device"}t.isVideoEnabled?await o.startVideoInputDevice(l):o.selectVideoInputDevice(l),e!==t.isVideoEnabled&&t.toggleVideo()}catch(e){console.error("Failed to select video input device")}finally{b(!1)}},E=async(e,t)=>{var n;let s=await (0,w.Zws)(l.selectedDevice),d=null!==(n=null==t?void 0:t.deviceId)&&void 0!==n?n:s;d!==s&&await o.startAudioInputDevice(d),i.muted===e&&i.toggleMute()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(I.Z,{direction:e.orientation,videoEnabled:r,audioEnabled:a,videoDevice:x,audioDevice:h,videoDevices:j,audioDevices:p,onVideoPreferenceChange:y,onAudioPreferenceChange:E,busy:Z})})}var V=t(75511),A=t(97340),L=t(28801),k=t(37570);let T={[f.S.default]:4,[f.S.deliberation]:8},N={[f.S.default]:0,[f.S.deliberation]:1};function P(){var e;let i=(0,d.useContext)(D.rZ),t=(0,d.useContext)(k.H),s=(0,d.useContext)(r.d),o=(0,d.useContext)(c.X),f=(0,d.useContext)(S.l),h=(0,d.useContext)(a.N),v=(0,d.useContext)(y.u),j=new C.ConsoleLogger("Zeitgeist meeting",C.LogLevel.OFF),m=t.session.remoteConfiguration===l.VS.RemoteWithVideoCall,p=m?T[o.data.activity]:0,g=m?12-p:12,I=N[o.data.activity],P=m&&0===I,F=m&&1===I;(0,d.useEffect)(()=>{V.Z.emit({type:V.z.Request_SlideRefresh})},[p]);let _=(0,d.useMemo)(()=>function(e){let{showMeeting:i,children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[!i&&t,i&&(0,n.jsx)(w.ikO,{logger:j,children:(0,n.jsx)(w.BAg,{children:(0,n.jsx)(w.lUb,{children:t})})})]})},[m]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(_,{showMeeting:m,children:[(0,n.jsx)(u.Z,{display:"flex",flexDirection:"column",justifyItems:"flex-start",sx:{width:"100vw",height:"100vh",p:2},children:(0,n.jsxs)(x.ZP,{container:!0,spacing:2,flexGrow:1,children:[m&&(0,n.jsxs)(x.ZP,{item:!0,xs:p,display:"flex",flexDirection:"column",children:[(0,n.jsx)(A.Z,{sx:{flexGrow:1},children:(0,n.jsx)(b.Z,{role:i.role,facilitationState:s.facilitationState,sid:t.sid,sessionToken:i.sessionToken,participantId:i.deviceId,participantName:null===(e=f.thisUser)||void 0===e?void 0:e.participantName,initialCallPreferences:v.call,sx:{width:"100%",height:"100%"}})}),P&&(0,n.jsx)(u.Z,{alignSelf:"center",sx:{mt:2},children:(0,n.jsx)(E,{orientation:"row"})})]}),(0,n.jsxs)(x.ZP,{item:!0,xs:g,display:"flex",flexDirection:"column",children:[m&&(0,n.jsx)(A.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:h.presentation}),!m&&h.presentation,F&&(0,n.jsx)(u.Z,{flexGrow:1,alignSelf:"stretch",display:"flex",flexDirection:"column",justifyContent:"flex-end",sx:{mt:2},children:(0,n.jsxs)(u.Z,{alignSelf:"stretch",display:"flex",flexDirection:"row",justifyContent:"space-between",children:[(0,n.jsx)(E,{orientation:"row"}),(0,n.jsx)(u.Z,{alignSelf:"stretch",alignContent:"center",children:(0,n.jsx)(Z,{})})]})})]})]})}),(0,n.jsx)(u.Z,{sx:{position:"fixed",left:4,bottom:4},children:(0,n.jsx)(L.Z,{})})]})})}var F=t(82297);function _(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(F.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:l._b.Client,children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(P,{})]})})}var O=t(16463);function M(){let e=(0,O.useSearchParams)(),i=e.get("sid"),t=e.get("code"),l="true"===e.get("refresh");return null===i||null===t?(0,n.jsx)("p",{children:"Missing session id or join code"}):(0,n.jsx)(s.Z,{searchParams:e,children:(0,n.jsx)(_,{sid:i,joinCode:t,refresh:l})})}}},function(e){e.O(0,[49,908,444,866,221,732,887,403,465,810,811,506,758,971,23,744],function(){return e(e.s=83686)}),_N_E=e.O()}]);