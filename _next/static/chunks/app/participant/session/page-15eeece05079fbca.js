(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{83686:function(e,t,i){Promise.resolve().then(i.bind(i,69407))},69407:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var n,o,a=i(57437),d=i(53622),l=i(94547),r=i(78364),s=i(98641),c=i(11144),u=i(70883),v=i(4766),f=i(93191),h=i(5085),x=i(24423),g=i(6722),b=i(2265),p=i(22960),m=i(31193),I=i(80511);let C=(0,b.createContext)({});function y(e){let{tiles:t,attendeeIdToTileId:i,tileIdToAttendeeId:n}=(0,g.akC)(),{isVideoEnabled:o,tileId:d}=(0,g.Onx)(),{roster:r}=(0,g.dJs)(),s=(0,g.qtg)(),[c,v]=(0,b.useState)({data:[]}),{subscriptions:f,thisUser:h}=(0,b.useContext)(u.l),x=(0,p.Z)(),y=e=>(0,a.jsx)(m.Z,{sx:{borderRadius:"0.5rem",overflow:"hidden",background:"gray",borderStyle:e.role===l._b.Controller?"solid":void 0,borderWidth:e.role===l._b.Controller?2:void 0,borderColor:e.role===l._b.Controller?x.palette.primary.main:void 0,height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(m.Z,{children:(0,a.jsx)(I.Z,{variant:"body2",color:"white",children:e.name})})}),j=e=>(0,a.jsx)(m.Z,{sx:{borderRadius:"0.5rem",overflow:"hidden",borderStyle:e.role===l._b.Controller?"solid":void 0,borderWidth:e.role===l._b.Controller?2:void 0,borderColor:e.role===l._b.Controller?x.palette.primary.main:void 0,height:"100%",width:"100%"},children:(0,a.jsx)(g.ZzX,{name:e.name,tileId:e.tileId})});return(0,b.useEffect)(()=>{let e=h?[{tileId:null!=d?d:void 0,attendeeId:d?n[d]:void 0,pid:h.deviceId,role:l._b.Client,name:h.participantName,activityIndex:1e3+(null!=d?d:0),tile:o&&d?(0,a.jsx)(j,{attendeeId:n[d],tileId:d,role:l._b.Client,name:h.participantName},"zg-local-video-".concat(n[d])):(0,a.jsx)(y,{role:l._b.Client,name:h.participantName},"zg-local-video-blank-".concat(h.deviceId))}]:[],i=t.map((e,t)=>{var i,o,d,c,u,v,h,x;return{tileId:e,attendeeId:n[e],pid:null===(i=r[n[e]])||void 0===i?void 0:i.externalUserId,role:null===(o=f.find(t=>{var i;return t.deviceId===(null===(i=r[n[e]])||void 0===i?void 0:i.externalUserId)}))||void 0===o?void 0:o.role,name:null===(d=r[n[e]])||void 0===d?void 0:d.name,activityIndex:(null===(c=f.find(t=>{var i;return t.deviceId===(null===(i=r[n[e]])||void 0===i?void 0:i.externalUserId)}))||void 0===c?void 0:c.role)===l._b.Client?2e3+s.indexOf(n[e]):0+e,tile:(0,a.jsx)(j,{attendeeId:n[e],tileId:e,role:null!==(h=null===(u=f.find(t=>{var i;return t.deviceId===(null===(i=r[n[e]])||void 0===i?void 0:i.externalUserId)}))||void 0===u?void 0:u.role)&&void 0!==h?h:l._b.Client,name:null!==(x=null===(v=r[n[e]])||void 0===v?void 0:v.name)&&void 0!==x?x:"Unknown"},"zg-remote-video-".concat(n[e]))}}),c=f.filter(e=>!i.some(t=>t.pid===e.deviceId)&&e.deviceId!==(null==h?void 0:h.deviceId)).map((e,t)=>({tileId:void 0,attendeeId:void 0,pid:e.deviceId,role:e.role,name:e.participantName,activityIndex:e.role===l._b.Client?3e3+t:0+t,tile:(0,a.jsx)(y,{role:e.role,name:e.participantName},"zg-remote-video-blank-".concat(e.deviceId))}));v({data:[...e,...i,...c].toSorted((e,t)=>e.activityIndex-t.activityIndex)})},[t,d,r,f,o,h]),(0,b.useEffect)(()=>{},[c]),(0,a.jsx)(C.Provider,{value:c,children:e.children})}var j=i(68276),S=i(53771),D=i(28801),k=i(33351),w=i(8963),E=i(96537),Z=i(40395);function M(){let[e,t]=(0,b.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>t(!0),sx:{py:1},children:"LEAVE CALL"}),(0,a.jsx)(Z.Z,{open:e,setOpen:t,onSelect:e=>{"leave"===e&&window.location.reload()},prompt:"Are you sure you want to leave the call?",options:[{key:"return",text:"RETURN TO THE CALL",filled:!0},{key:"leave",text:"LEAVE THE CALL",filled:!1}]})]})}var _=i(11707),U=i(40468),A=i(1973),V=i(83593);(n=o||(o={}))[n.Init=0]="Init",n[n.FetchingAttendeeData=1]="FetchingAttendeeData",n[n.AttendeeDataRetrieved=2]="AttendeeDataRetrieved",n[n.AttendeeDataError=3]="AttendeeDataError",n[n.MeetingConnecting=4]="MeetingConnecting",n[n.MeetingConnected=5]="MeetingConnected",n[n.MeetingStarting=6]="MeetingStarting",n[n.MeetingStarted=7]="MeetingStarted",n[n.MeetingLeft=8]="MeetingLeft",n[n.MeetingUnavailable=9]="MeetingUnavailable",n[n.ChimeError=10]="ChimeError",n[n.ConnectedOnAnotherDevice=11]="ConnectedOnAnotherDevice";let T={unexpected:!1,anotherDevice:!1,unavailable:!1,left:!1},P={deviceLabels:g.C$T.AudioAndVideo};function L(e){let[t,i]=(0,b.useState)(0),[n,d]=(0,b.useState)(),[r,s]=(0,b.useState)(),[c,v]=(0,b.useState)(),[f,h]=(0,b.useState)(T),x=(0,g.fjl)();(0,g.tt7)();let{tileId:p,isVideoEnabled:I,hasReachedVideoLimit:C,toggleVideo:y}=(0,g.Onx)(),{muted:j,toggleMute:S}=(0,g.HI)();(0,g.ULf)();let{api:D,start:k}=(0,b.useContext)(A.E),{subscriptions:Z,thisUser:M}=(0,b.useContext)(u.l),[L,N]=(0,b.useState)({}),[F,K]=(0,b.useState)(!1),[O,R]=(0,b.useState)(),[z,W]=(0,b.useState)();(0,b.useEffect)(()=>(V.Z.on(V.M.WSS_Distribute_Message,W),V.Z.on(V.M.Media_Playback_Update,W),()=>{V.Z.off(V.M.WSS_Distribute_Message,W),V.Z.off(V.M.Media_Playback_Update,W)}),[W]),(0,b.useEffect)(()=>{if(void 0!==z)switch(z.type){case V.M.WSS_Distribute_Message:J(z.data);break;case V.M.Media_Playback_Update:H(z.data)}},[z]);let H=e=>{N({...L,[e.videoId]:{update:e}})};(0,b.useEffect)(()=>{K(Object.entries(L).some(e=>e[1].update.isPlaying))},[L]),(0,b.useEffect)(()=>{F&&(R(j),j||S()),F||void 0===O||j===O||S()},[F]);let J=e=>{"mute-update"===e.type&&q(e.data.pids)},q=e=>{!j&&(e.some(e=>e===(null==M?void 0:M.deviceId))||e.some(e=>"*"===e))&&S()};(0,b.useEffect)(()=>{var t,i;(null===(t=e.initialCallPreferences)||void 0===t?void 0:t.videoDevice)!==void 0&&x.startVideoInputDevice(e.initialCallPreferences.videoDevice.deviceId),(null===(i=e.initialCallPreferences)||void 0===i?void 0:i.audioDevice)!==void 0&&x.startAudioInputDevice(e.initialCallPreferences.audioDevice.deviceId)},[]);let G=(0,b.useMemo)(()=>async(e,t)=>{void 0===t&&console.warn("Undefined pid passed from chime.");var i,n=Z.find(e=>e.deviceId===t);return void 0===n&&console.warn("No subscription found for pid: ".concat(t),Z),{name:null!==(i=null==n?void 0:n.participantName)&&void 0!==i?i:"Unknown"}},[Z]);(0,b.useEffect)(()=>{x.getAttendee=G,x.updateDeviceLists()},[Z]),(0,b.useEffect)(()=>(x.subscribeToMeetingStatus(Y),()=>{console.log("Unmounting ZeitgeistMeeting..."),x.getAttendee=void 0,x.leave(),x.unsubscribeFromMeetingStatus(Y)}),[]);let Y=e=>{console.debug("Meeting status: ".concat(g.ytK[e])),v(e)},X=e.role===l._b.Controller||e.facilitationState===l._y.Open;(0,b.useEffect)(()=>{X&&0!==t&&1!==t&&i(1),X||(console.debug("Disconnecting..."),s(null))},[e.facilitationState]),(0,b.useEffect)(()=>{switch(console.debug("ZgMeeting view state: ".concat(o[t])),t){case 0:X&&i(1);break;case 1:h(T),B().then(e=>{(null==e?void 0:e.chimeMeetingId)!==(null==n?void 0:n.chimeMeetingId)&&d(e),e?i(2):i(3)}).catch(e=>{console.error(e)});break;case 2:h(T),i(4);break;case 3:case 10:h({...T,unexpected:!0});break;case 4:h(T);let a=$();(null==r?void 0:r.meetingId)!==a.meetingId||c!==g.ytK.Succeeded?s(a):i(5);break;case 5:h(T),i(6);break;case 6:h(T),Q();break;case 7:h(T);break;case 9:e.role===l._b.Controller?(h(T),i(1)):h({...T,unavailable:!0});break;case 8:h({...T,left:!0});break;case 11:h({...T,anotherDevice:!0})}},[t,e.facilitationState]);let B=async()=>{var t;return await k(D.postMeetingJoinRequest(e.sid,e.sessionToken,e.participantId,null!==(t=e.participantName)&&void 0!==t?t:"unknown",e.accessToken))},$=()=>new w.MeetingSessionConfiguration({MeetingId:n.chimeMeetingId,MediaPlacement:{AudioHostUrl:n.audioHostUrl,SignalingUrl:n.signalingUrl,TurnControlUrl:n.turnControlUrl,AudioFallbackUrl:n.audioFallbackUrl,EventIngestionUrl:n.eventIngestionUrl,ScreenDataUrl:n.screenDataUrl,ScreenViewingUrl:n.screenViewingUrl}},{ExternalUserId:n.chimeAttendeeExternalId,AttendeeId:n.chimeAttendeeId,JoinToken:n.chimeJoinToken});(0,b.useEffect)(()=>{null!=r?x.join(r,P).then(()=>{i(5)}):x.leave()},[r]),(0,b.useEffect)(()=>{switch(c){case g.ytK.Loading:break;case g.ytK.Succeeded:i(7);break;case g.ytK.Reconnecting:i(4);break;case g.ytK.Left:i(8);break;case g.ytK.Failed:i(10);break;case g.ytK.Ended:i(9);break;case g.ytK.TerminalFailure:i(10);break;case g.ytK.JoinedFromAnotherDevice:i(11)}},[c]);let Q=async()=>{console.debug("Starting the meeting from state: ".concat(void 0!==c?g.ytK[c]:"undefined"));try{await x.start(),i(7)}catch(e){console.error(e),i(10)}};return(0,b.useEffect)(()=>{c!==g.ytK.Succeeded||(e.initialCallPreferences?(e.initialCallPreferences.videoEnabled!==I&&y(),e.initialCallPreferences.audioEnabled===j&&S()):I||y())},[c]),e.role,l._b.Controller,e.role,l._b.Client,(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",...e.sx},children:[f.unexpected&&(0,a.jsx)("p",{children:"An unexpected error prevented us from connecting you to the video call. Please refresh the page."}),f.anotherDevice&&(0,a.jsx)("p",{children:"You are already connected in another tab. Please close any other browser tabs connected to this workshop."}),f.unavailable&&(0,a.jsx)("p",{children:"The video call is not available at this time. Please try again later."}),f.left&&(0,a.jsx)("p",{children:"You have left the video call."}),11===t&&(0,a.jsx)(E.Z,{variant:"outlined",onClick:()=>i(1),children:"Try again"}),3===t&&(0,a.jsx)(E.Z,{variant:"outlined",onClick:()=>i(1),children:"Try again"}),9===t&&(0,a.jsx)(E.Z,{variant:"outlined",onClick:()=>i(1),children:"Try again"}),8===t&&(0,a.jsx)(E.Z,{variant:"outlined",onClick:()=>i(1),children:"Rejoin"}),10===t&&(0,a.jsx)(E.Z,{variant:"outlined",onClick:()=>i(4),children:"Try again"}),0>[7,8,9,10,11].indexOf(t)&&(0,a.jsx)(m.Z,{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",children:(0,a.jsx)(U.Z,{})}),c===g.ytK.Succeeded&&(0,a.jsx)(_.f6,{theme:g.Wbj,children:(0,a.jsx)(m.Z,{sx:{width:"100%",height:"100%",flexGrow:1,display:"flex",flexDirection:"row"},children:e.children})})]})})}var N=i(64463);function F(e){let t=(0,g.HI)(),i=(0,g.Onx)(),n=(0,g.ULf)(),o=(0,g.m6Y)(),d=(0,g.fjl)(),[l,r]=(0,b.useState)(i.isVideoEnabled),[s,c]=(0,b.useState)(!t.muted),[u,v]=(0,b.useState)(void 0),[f,h]=(0,b.useState)(void 0),[x,p]=(0,b.useState)([]),[m,I]=(0,b.useState)([]),[C,y]=(0,b.useState)(!1);(0,b.useEffect)(()=>{d.subscribeToMeetingStatus(e=>{if(e===g.ytK.Succeeded){var n,o;null===(n=d.audioVideo)||void 0===n||n.listVideoInputDevices().then(e=>{p(e),v(e.find(e=>e.deviceId===d.selectedVideoInputDevice))}),null===(o=d.audioVideo)||void 0===o||o.listAudioInputDevices().then(e=>{I(e),h(e.find(e=>e.deviceId===d.selectedAudioInputDevice))}),r(i.isVideoEnabled),c(!t.muted),d.subscribeToSelectedAudioInputDevice(j),d.subscribeToSelectedVideoInputDevice(S)}})},[]);let j=e=>{(0,g.Zws)(e).then(e=>{h(m.find(t=>t.deviceId===e))})},S=e=>{(0,g.Zws)(e).then(e=>{v(x.find(t=>t.deviceId===e))})};(0,b.useEffect)(()=>{r(i.isVideoEnabled)},[i.isVideoEnabled]),(0,b.useEffect)(()=>{c(!t.muted)},[t.muted]);let D=async(e,t)=>{try{var o;let a=null!==(o=null==t?void 0:t.deviceId)&&void 0!==o?o:await (0,g.Zws)(n.selectedDevice);if((0,w.isVideoTransformDevice)(n.selectedDevice)){if(y(!0),"chooseNewInnerDevice"in n.selectedDevice)a=selectedDevice.chooseNewInnerDevice(deviceId);else throw"Transform device cannot choose new inner device"}i.isVideoEnabled?await d.startVideoInputDevice(a):d.selectVideoInputDevice(a),e!==i.isVideoEnabled&&i.toggleVideo()}catch(e){console.error("Failed to select video input device")}finally{y(!1)}},k=async(e,i)=>{var n;let a=await (0,g.Zws)(o.selectedDevice),l=null!==(n=null==i?void 0:i.deviceId)&&void 0!==n?n:a;l!==a&&await d.startAudioInputDevice(l),t.muted===e&&t.toggleMute()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N.Z,{direction:e.orientation,videoEnabled:l,audioEnabled:s,videoDevice:u,audioDevice:f,videoDevices:x,audioDevices:m,onVideoPreferenceChange:D,onAudioPreferenceChange:k,busy:C})})}function K(){var e;let t=(0,b.useContext)(h.rZ),{session:i}=(0,b.useContext)(c.z),n=(0,b.useContext)(v.X),o=(0,b.useContext)(u.l),d=(0,b.useContext)(f.N),r=(0,b.useContext)(j.u);new w.ConsoleLogger("Zeitgeist meeting",w.LogLevel.OFF);let[s,g]=(0,b.useState)(!1);(0,b.useEffect)(()=>{g(i.remoteConfiguration===l.VS.RemoteWithVideoCall)},[i]);let p=()=>{V.Z.emit({type:V.M.Request_SlideRefresh})};return(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsxs)(k.Z,{sx:{width:"100%",height:"100%",p:1,display:"flex",flexDirection:"column"},children:[(0,a.jsx)(k.Z,{sx:{display:"block",flexGrow:1,m:0,p:0,overflow:"hidden"},children:(0,a.jsx)(L,{role:t.role,facilitationState:i.facilitationState,sid:i.id,sessionToken:t.sessionToken,participantId:t.deviceId,participantName:null===(e=o.thisUser)||void 0===e?void 0:e.participantName,initialCallPreferences:r.call,sx:{width:"100%",height:"100%"},children:(0,a.jsx)(y,{children:(0,a.jsx)(C.Consumer,{children:e=>(0,a.jsx)(x.Z,{presentation:{activity:n.data.activity,enableExpandButton:!0,onResize:()=>{p()}},tiles:{presentation:d.presentation,video:e.data.map(e=>e.tile)}})})})})}),(0,a.jsxs)(k.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"end",gap:2},children:[(0,a.jsx)(F,{orientation:"row"}),(0,a.jsx)(k.Z,{sx:{alignSelf:"center"},children:(0,a.jsx)(M,{})})]})]}),!s&&(0,a.jsx)(k.Z,{sx:{width:"100%",height:"100%",p:1},children:d.presentation}),(0,a.jsx)(k.Z,{sx:{position:"fixed",left:4,bottom:4},children:(0,a.jsx)(D.Z,{})}),(0,a.jsx)(k.Z,{sx:{position:"fixed",right:4,bottom:4},children:(0,a.jsx)(S.Z,{})})]})}function O(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:l._b.Client,children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(K,{})]})})}var R=i(16463);function z(){let e=(0,R.useSearchParams)(),t=e.get("sid"),i=e.get("code"),n="true"===e.get("refresh");return null===t||null===i?(0,a.jsx)("p",{children:"Missing session id or join code"}):(0,a.jsx)(d.Z,{searchParams:e,children:(0,a.jsx)(O,{sid:t,joinCode:i,refresh:n})})}}},function(e){e.O(0,[908,444,866,221,732,887,403,328,602,810,553,69,973,463,423,971,23,744],function(){return e(e.s=83686)}),_N_E=e.O()}]);