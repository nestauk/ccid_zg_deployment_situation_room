(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5044],{59870:function(e,t,n){Promise.resolve().then(n.bind(n,46500))},46500:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ez}});var i,o,r,s,a=n(57437),l=n(53622),c=n(94547),d=n(78364),u=n(11144),x=n(4766),p=n(93191),h=n(43670),f=n(17882),g=n(6722),m=n(2265);n(84075);var j=e=>{var t;let{tiles:n}=(0,g.akC)(),{tileId:i}=(0,g.tt7)(),{tileId:o}=(0,g.EJc)(),{isVideoEnabled:r}=(0,g.Onx)(),s="featured"===e.layout&&!!i||!!o,l=n.length+(o?1:0),c=l>1&&r?l+1:l;return(0,a.jsxs)(g.P2B,{size:c,layout:s?"featured":null,style:{borderRadius:"0.5rem",padding:"0.5rem",gap:"0.5rem",...e.gridStyle},children:[(0,a.jsx)(g.Fxf,{css:"grid-area: ft;"}),"featured"===e.layout?(0,a.jsx)(g.mXs,{}):(0,a.jsx)(g.P$F,{}),(0,a.jsx)(g.OuP,{nameplate:null!==(t=e.participantName)&&void 0!==t?t:"Me",css:c>1?"\n  height: 100%;\n  width: 100%;\n":"\n  display: flex;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  width: 20vw;\n  max-height: 30vh;\n  height: auto;\n\n  video {\n    position: static;\n  }\n"}),0===l&&e.noRemoteVideoView]})},v=n(68276),b=n(97340),w=n(31193),y=n(56019),Z=n(80511);let C=e=>"".concat(Math.floor(e/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"),":00"),S=e=>{let t=Math.floor(e/36e5),n=Math.floor((e-=36e5*t)/6e4),i=Math.floor((e-=6e4*n)/1e3);return e-=1e3*i,"".concat(t.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))};function k(){let{session:e}=(0,m.useContext)(u.z),[t,n]=(0,m.useState)({}),[i,o]=(0,m.useState)(""),r=(0,m.useRef)();(0,m.useEffect)(()=>{n({startTime:function(e){if(e)return new Date(e)}(e.sessionStartedAt),duration_mins:e.sessionDurationMins})},[e]),(0,m.useEffect)(()=>(t.startTime?(r.current&&clearInterval(r.current),r.current=setInterval(s,1e3),s()):o(t.duration_mins?C(t.duration_mins):"Unknown"),()=>{r.current&&clearInterval(r.current)}),[t]);let s=(0,m.useCallback)(()=>{if(t.startTime){let e=new Date().getTime()-t.startTime.getTime();t.duration_mins&&(e=Math.max(6e4*t.duration_mins-e,0)),o(S(e))}else o(t.duration_mins?C(t.duration_mins):"Unknown")},[t]);return(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/clock.svg",style:{height:"1.25rem",width:"auto"}}),(0,a.jsx)(Z.Z,{variant:"body1",children:i})]})}var I=n(60658),E=n(65301);(i=r||(r={}))[i.Ready=0]="Ready",i[i.InitError=1]="InitError",i[i.Recording=2]="Recording",i[i.Saving=3]="Saving",i[i.UploadSuccess=4]="UploadSuccess",i[i.UploadError=5]="UploadError";var _=n(5085),F=n(23447),R=n(15785),D=n(83040),P=n(96537),A=n(18502),O=n(24072),U=n(76396);function N(e){let t=(0,m.useId)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(O.ZP,{variant:"popover",popupId:t,children:t=>{var n,i,o;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P.Z,{startIcon:!1!==e.startIcon?e.startIcon:void 0,endIcon:null!==(n=e.endIcon)&&void 0!==n?n:(0,a.jsx)(D.Z,{color:"action"}),variant:"text",color:"buttonStandard","aria-label":e.ariaLabel,sx:e.sx,...(0,U.LI)(t),children:e.text}),(0,a.jsx)(A.ZP,{...(0,U.ZW)(t),anchorOrigin:null!==(i=e.anchorOrigin)&&void 0!==i?i:{vertical:"bottom",horizontal:"center"},transformOrigin:null!==(o=e.transformOrigin)&&void 0!==o?o:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(w.Z,{sx:{p:2},children:e.children})})]})}})})}var T=n(63375),q=n(22960);let z=(e,t)=>{var n;return"".concat(null!==(n=t.recordingId)&&void 0!==n?n:"slide-"+"".concat(null!=e?e:0).padStart(3,"0"))};function M(){let{api:e,start:t}=(0,m.useContext)(F.E),{session:n}=(0,m.useContext)(u.z),i=(0,m.useContext)(_.rZ),{slideIndex:o,slideData:r}=(0,m.useContext)(x.X),[s,l]=(0,m.useState)(!1),[d,p]=(0,m.useState)(!1);(0,m.useEffect)(()=>{l(n.facilitationState===c._y.Open&&n.remoteConfiguration===c.VS.InPerson&&r.activity===R.S.deliberation),p(n.facilitationState===c._y.Open&&n.remoteConfiguration===c.VS.InPerson&&(r.activity===R.S.deliberation||void 0!==r.recordingId))},[r.activity,n.facilitationState,n.remoteConfiguration]);let[h,f]=(0,m.useState)(z(o,r)),[g,j]=(0,m.useState)(!1),[v,b]=(0,m.useState)(!1),[y,C]=(0,m.useState)(!1),{record:S,stop:k,isRecording:A,recordingTime:O,audioBlob:U,filenamePart:M,filenameSuffix:V,clearRecording:W}=function(){let[e,t]=(0,m.useState)(0),[n,i]=(0,m.useState)(void 0),[o,r]=(0,m.useState)(),{startRecording:s,stopRecording:a,togglePauseResume:l,recordingBlob:c,isRecording:d,isPaused:u,recordingTime:x,mediaRecorder:p}=(0,E.I)({noiseSuppression:!0,autoGainControl:!0},e=>{t(1)},{mimeType:"audio/webm"}),h=e=>"audio-recording-".concat(e);return(0,m.useEffect)(()=>{t(d?2:0)},[d]),(0,m.useEffect)(()=>{void 0!==c&&i(c)},[c]),{record:e=>{r(h(e)),s()},stop:()=>{a()},state:e,audioBlob:n,recordingTime:x,isRecording:d,filenamePart:o,filenameSuffix:"webm",clearRecording:()=>{i(void 0),r(void 0)}}}();(0,m.useEffect)(()=>{A&&(console.debug("Stopping recording due to slide change."),k()),f(z(o,r))},[o]),(0,m.useEffect)(()=>{j(A),A&&C(!1)},[A]),(0,m.useEffect)(()=>{A||void 0===U||void 0===M||G()},[U]);let G=()=>{if(void 0===U||void 0===M){console.debug("Audio blob or filename part empty. Skipping upload.");return}if(0===U.size){console.debug("Audio recording is empty. Skipping upload.");return}console.debug("Initiating upload for recording: <guid>-".concat(M,"-<guid>.").concat(V)),C(!1),b(!0),K(U,M,V).then(()=>{console.debug("Upload complete"),C(!1),W()}).catch(e=>{console.error("Upload failed",e),C(!0)}).finally(()=>{b(!1)})},K=async(o,r,s)=>{console.debug("Retrieving recording upload info...");let a=await t(e.getMediaUploadUrl(n.id,i.sessionToken,i.user.access_token,"deliberation",r,s));console.debug("Uploading recording...",a),await t((0,I.P)(o,a.uploadUrl,!0,"uploading recording")),console.debug("Upload recording complete.")},L=()=>{if(void 0===U||0===U.size){console.debug("Audio blob empty. Skipping download.");return}let e="recording-".concat(null!=M?M:"unknown",".").concat(V);console.debug("Downloading audio recording..."),function(e,t){let n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t;try{document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}catch(e){console.error("Error downloading blob",e)}finally{document.body.removeChild(i)}}(U,e)},B=(0,q.Z)(),H=g||v||y;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N,{startIcon:H&&(0,a.jsx)(T.Z,{htmlColor:g?B.palette.recordingEnabled.main:v?B.palette.recordingUploading.main:y?B.palette.recordingFailed.main:B.palette.recordingDisabled.main}),endIcon:(0,a.jsx)(D.Z,{color:"action"}),sx:{opacity:s?1:.3},text:"Recording: ".concat(g?"Active":v?"Uploading...":y?"Upload error":"Inactive"),ariaLabel:"Recording information",children:(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[!A&&(0,a.jsx)(P.Z,{variant:s?"contained":"outlined",color:s?"primary":"buttonStandard",onClick:()=>S(h),children:"Start Recording"}),A&&(0,a.jsx)(P.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>k(),children:"Stop Recording"}),r.recordingId&&(0,a.jsxs)(Z.Z,{variant:"body2",children:["Recording id: ",h,(0,a.jsx)("br",{})]}),A&&(0,a.jsxs)(Z.Z,{variant:"body2",sx:{fontSize:"0.5rem"},children:["Recording: ",O]}),y&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)(T.Z,{htmlColor:B.palette.recordingFailed.main}),(0,a.jsx)(Z.Z,{variant:"body1",children:"Recording upload failed"})]}),(0,a.jsx)(Z.Z,{variant:"body2",children:"The recording could not be uploaded."}),U&&M&&V&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(P.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>G(),children:"Retry upload"}),(0,a.jsx)(P.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>L(),children:"Download audio"})]})]})]})})})}var V=n(70883),W=n(44228),G=n(9646),K=n(10105),L=n(79393);function B(e){var t;let n=e.message instanceof Error?e.message.message:e.message;return(0,a.jsx)(L.Z,{open:e.show,autoHideDuration:null!==(t=e.autoHideDuration)&&void 0!==t?t:3e3,onClose:()=>e.setShow(!1),message:(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[e.icon,n]})})}function H(e){let[t,n]=(0,m.useState)(!1),i=()=>{var t;null===(t=navigator)||void 0===t||t.clipboard.writeText((0,K.v)(e.session)),n(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G.Z,{sx:{alignSelf:"flex-end"},variant:"outlined",onClick:()=>{i()},btnText:"Copy participant link",btnKey:"copy-participant-link"}),(0,a.jsx)(B,{show:t,setShow:n,message:"Copied participant link to clipboard.",icon:(0,a.jsx)(W.Z,{})})]})}var X=n(40395),Y=n(60335),J=n(21395),$=n(42748),Q=n(11656),ee=n(47905),et=n(86917),en=n(58433),ei=n(14874);function eo(){let{session:e}=(0,m.useContext)(u.z),{subscriptions:t,thisUser:n}=(0,m.useContext)(V.l),{api:i,start:o}=(0,m.useContext)(F.E),{user:r,sessionToken:s}=(0,m.useContext)(_.rZ),{roster:l}=(0,g.dJs)(),[d,x]=(0,m.useState)([]),[p,h]=(0,m.useState)(!1),f=(0,ei.Z)(),j=async()=>{try{h(!0);let t={action:"mute",sessionId:e.id,parameters:{pids:["*"]}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}finally{h(!1)}},v=async(t,n)=>{try{h(!0);let t={action:"mute",sessionId:e.id,parameters:{pids:[n.deviceId]}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}catch(e){console.warn(e)}finally{h(!1)}},b=async(t,n)=>{try{h(!0);let t={action:"kick",sessionId:e.id,parameters:{pid:n.deviceId}};o(i.postFacilitatorAction(r.access_token,s,t,!1))}catch(e){console.warn(e)}finally{h(!1)}},y=t=>{var n,i,o;let{subscription:r}=t,s=l?null===(n=Object.entries(l).find(e=>{let[t,n]=e;return n.externalUserId===r.deviceId}))||void 0===n?void 0:n[1]:void 0,c=E(r),d=null!==(o=null===(i=e.deviceIdBanList)||void 0===i?void 0:i.includes(r.deviceId))&&void 0!==o&&o;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:1,alignItems:"center",opacity:d?.5:1},children:[(0,a.jsx)(I,{connected:!d&&r.enabled}),(0,a.jsxs)(Z.Z,{variant:"h6",component:"span",sx:{flexGrow:1},children:[c,d?" (banned)":void 0]}),s&&!d&&(0,a.jsx)(C,{attendee:s,subscription:r})]})})},C=e=>{let{attendee:t,subscription:i}=e;return(0,a.jsx)(a.Fragment,{children:i.subscriptionId!==(null==n?void 0:n.subscriptionId)&&(0,a.jsx)(S,{attendee:t,subscription:i})})},S=e=>{let{attendee:t,subscription:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(O.ZP,{variant:"popover",popupId:"attendee-controls-menu-items-".concat(n.subscriptionId),children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y.Z,{"aria-label":"settings",...(0,U.vW)(e),children:(0,a.jsx)("img",{src:"/icons/triple-dots-vertical.svg"})}),(0,a.jsx)(J.Z,{...(0,U.wK)(e),children:(0,a.jsx)(k,{attendee:t,subscription:n,requestClose:e.close})})]})})})},k=e=>{let{attendee:t,subscription:n,requestClose:i}=e,[o,r]=(0,m.useState)(!1),s=(0,g.ZzJ)(t.chimeAttendeeId).muted;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)($.Z,{children:[(0,a.jsx)(Q.Z,{children:(0,a.jsx)(ee.Z,{children:(0,a.jsx)("b",{children:n.participantName})})},"attendee-control-menu-header-".concat(n.subscriptionId)),(0,a.jsxs)(Q.Z,{disabled:p||s,onClick:s?void 0:()=>{i(),v(t,n)},children:[(0,a.jsx)(et.Z,{children:s?(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}):(0,a.jsx)("img",{src:"/icons/controls/mute-participant.svg"})}),(0,a.jsx)(ee.Z,{inset:!1,children:s?"Participant muted":"Mute participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-mute")),(0,a.jsxs)(Q.Z,{disabled:p,onClick:()=>{r(!0)},children:[(0,a.jsx)(et.Z,{children:(0,a.jsx)("img",{src:"/icons/controls/remove-participant.svg"})}),(0,a.jsx)(ee.Z,{inset:!1,children:"Remove participant"})]},"attendee-control-menu-item-".concat(n.subscriptionId,"-kick"))]}),(0,a.jsx)(X.Z,{prompt:"Remove the participant from the call?",options:[{key:"kick",text:"Remove participant",filled:!0},{key:"cancel",text:"Cancel",filled:!1}],onSelect:e=>{"kick"===e&&b(t,n)},open:o,setOpen:r,onClose:i})]})},I=e=>{let{connected:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(w.Z,{sx:{p:1,borderRadius:4,height:42,background:t?f.palette.connected.main:f.palette.disconnected.main},children:(0,a.jsx)("img",{style:{height:26,margin:0,padding:0},src:t?"/icons/device-connected.svg":"/icons/device-disconnected.svg"})})})},E=e=>{let t=e.subscriptionId===(null==n?void 0:n.subscriptionId)?"(You) ":"",i=e.participantName&&e.participantName.length>0?e.participantName:"Unknown";return"".concat(t).concat(i)};return(0,m.useEffect)(()=>{x(t.toSorted((e,t)=>e.role===t.role?0:e.role===c._b.Controller?-1:t.role===c._b.Controller?1:e.participantName.localeCompare(t.participantName)))},[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",gap:4},children:[(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",gap:1,justifyContent:"flex-end"},children:[e.remoteConfiguration===c.VS.RemoteWithVideoCall&&(0,a.jsx)(G.Z,{variant:"outlined",startIcon:(0,a.jsx)("img",{src:"/icons/controls/participant-muted.svg"}),btnKey:"mute-all",btnText:"Mute all",sx:{alignSelf:"flex-end"},busy:p,onClick:e=>{j()}}),(0,a.jsx)(H,{session:e})]}),(0,a.jsx)(en.ZP,{container:!0,spacing:2,children:d.map(e=>(0,a.jsx)(en.ZP,{item:!0,xs:6,children:(0,a.jsx)(y,{subscription:e})},"participant-subscription-indicator-".concat(e.subscriptionId)))})]})})}function er(){let{subscriptions:e,thisUser:t}=(0,m.useContext)(V.l);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(N,{startIcon:(0,a.jsx)("img",{src:"/icons/session-participants.svg",style:{height:"1.45rem",width:"auto"}}),text:"".concat(e.filter(e=>e.deviceId!==(null==t?void 0:t.deviceId)).length," participants"),children:(0,a.jsx)(w.Z,{sx:{width:"55vw"},children:(0,a.jsx)(eo,{})})})})}var es=n(8260),ea=n(35231),el=n(50467),ec=n(2842),ed=n(9542),eu=n(13971);function ex(e){let{colours:t,data:n}=e,i=e=>{let t={true:{l:!0,r:!1},false:{l:!1,r:!0}};return 0===e.true&&(t.false.l=!0),0===e.false&&(t.true.r=!0),t},[o,r]=(0,m.useState)(i(n));(0,m.useEffect)(()=>{r(i(n))},[n]);let s=e=>[e.l?16:0,e.r?16:0,e.r?16:0,e.l?16:0];return(0,a.jsx)(ea.h,{width:"100%",height:40,children:(0,a.jsxs)(el.v,{layout:"vertical",margin:{left:0,right:0},height:40,data:[{name:"completion",complete:n.true,incomplete:n.false}],children:[(0,a.jsx)(ec.K,{hide:!0,type:"number",max:n.true+n.false}),(0,a.jsx)(ed.B,{hide:!0,dataKey:"name",type:"category"}),(0,a.jsx)(eu.$,{dataKey:"complete",stackId:"completion",fill:t[0],radius:s(o.true)}),(0,a.jsx)(eu.$,{dataKey:"incomplete",stackId:"completion",fill:t[1],radius:s(o.false)})]})})}var ep=n(37570),eh=n(37552),ef=n(79617),eg=n(51847),em=n(33578);(o=s||(s={}))[o.NotAnswered=0]="NotAnswered",o[o.Answered=1]="Answered";let ej=(e,t,n)=>{var i,o;let r=null!==(o=ev(null!==(i=n?null==e?void 0:e.filter(e=>e.questionId===n):e)&&void 0!==i?i:[]))&&void 0!==o?o:[],s=r.length,a=t.filter(e=>e.enabled&&e.role===c._b.Client),l=a.filter(e=>!r.find(t=>t.participantId===e.deviceId)),d=r.length+l.length;return{allAnswers:r,relevantParticipants:a,answeredCount:s,participantsWithoutAnswers:l,maxAnswers:d,complete:s===d}},ev=e=>null==e?void 0:e.sort((e,t)=>new Date(e.created).getTime()-new Date(t.created).getTime()),eb=(e,t)=>{var n;return[...e.allAnswers.map((e,n)=>({description:ew(e,t),answered:1})),...null!==(n=e.participantsWithoutAnswers.map(e=>({description:ey(e),answered:0})))&&void 0!==n?n:[]]},ew=(e,t)=>ey(t.find(t=>t.deviceId===e.participantId)),ey=e=>{var t,n;return null!==(n=null!==(t=null==e?void 0:e.participantName)&&void 0!==t?t:null==e?void 0:e.deviceName)&&void 0!==n?n:"Unknown"};function eZ(e){let{sid:t}=(0,m.useContext)(ep.H),{answers:n}=(0,es.ZP)(e.qid),i=(0,m.useContext)(V.l),[o,r]=(0,m.useState)(i.subscriptions),[s,l]=(0,m.useState)(ej(n,o,e.qid)),[c,d]=(0,m.useState)([]);(0,m.useEffect)(()=>{r(i.subscriptions)},[i]),(0,m.useEffect)(()=>{l(ej(n,o))},[n,o]),(0,m.useEffect)(()=>{d(eb(s,o))},[s,o]);let u=e=>(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:2,background:"white",border:"1px solid #EFEFEF",p:2},children:[(0,a.jsx)(Z.Z,{variant:"body1",sx:{borderRight:"1px solid black",overflowX:"scroll",textWrap:"nowrap",flexGrow:1,mr:.5,pr:.5},children:e.description}),1===e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox-filled.svg"}),1!==e.answered&&(0,a.jsx)("img",{src:"/icons/checkbox.svg"})]}),x=(0,ei.Z)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:[e.qid&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)("img",{src:"/icons/busts.svg",style:{height:"1.5rem",width:"auto"}}),(0,a.jsxs)(Z.Z,{variant:"body1",children:[e.label&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("b",{children:[e.label,":"]})," "]}),"".concat(s.answeredCount," of ").concat(s.maxAnswers," ")," ",1!==s.answeredCount?"have":"has"," voted"]})]}),(0,a.jsxs)(ef.Z,{elevation:0,disableGutters:!0,sx:{"&:before":{display:"none"}},children:[(0,a.jsxs)(eg.Z,{expandIcon:(0,a.jsx)(eh.Z,{}),sx:{p:0},children:[s.answeredCount+s.participantsWithoutAnswers.length>0&&(0,a.jsx)(ex,{colours:[x.palette.primary.main,"#ededff"],data:{true:s.answeredCount,false:s.participantsWithoutAnswers.length}}),s.answeredCount+s.participantsWithoutAnswers.length===0&&(0,a.jsx)(ex,{colours:[x.palette.primary.main,"#ededff"],data:{true:0,false:100}})]}),(0,a.jsx)(em.Z,{sx:{p:0},children:(0,a.jsx)(en.ZP,{container:!0,spacing:1,sx:{mb:2},children:c.map((t,n)=>(0,a.jsx)(en.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,a.jsx)(u,{description:t.description,answered:t.answered})},"answer-indicator-grid-item-".concat(e.qid,"-").concat(n)))})})]})]}),!e.qid&&(0,a.jsx)(Z.Z,{variant:"body1",children:"Not a polling slide"})]})})}function eC(){let{slideData:e}=(0,m.useContext)(x.X),{subscriptions:t}=(0,m.useContext)(V.l),{allAnswers:n}=(0,es.ZP)(),[i,o]=(0,m.useState)(!1),[r,s]=(0,m.useState)({}),[l,c]=(0,m.useState)(!1),[d,u]=(0,m.useState)();(0,m.useEffect)(()=>{o(e.qids.length>0)},[e]),(0,m.useEffect)(()=>{s(Object.fromEntries(e.qids.map(e=>[e,ej(n[e],t,e)])))},[n,e,t]),(0,m.useEffect)(()=>{c(Object.values(r).every(e=>e.complete))},[r]);let p=(0,q.Z)();return(0,m.useEffect)(()=>{let e=l?p.palette.pollingComplete.main:p.palette.pollingInProgress.main;u(i?{icon:(0,a.jsx)(T.Z,{htmlColor:e}),text:l?"Polling complete":"Polling in progress"}:void 0)},[l,i]),(0,a.jsx)(a.Fragment,{children:i&&d&&(0,a.jsx)(N,{startIcon:d.icon,text:d.text,sx:{backgroundColor:p.palette.pollingInProgressBackground.main},children:(0,a.jsx)(w.Z,{sx:{width:"55vw",display:"flex",flexDirection:"column",gap:1},children:e.qids.map((t,n)=>{let i=e.qids.length>1?0===n?"First question":n===e.qids.length-1?"Last question":void 0:void 0;return(0,a.jsx)(eZ,{qid:t,label:i},"facilitator-polling-monitor-".concat(t,"-").concat(n))})})})})}function eS(){let{sessionToken:e,user:t}=(0,m.useContext)(_.rZ),{session:n}=(0,m.useContext)(u.z),{api:i,start:o}=(0,m.useContext)(F.E),[r,s]=(0,m.useState)(!1),[l,d]=(0,m.useState)(!1),[x,p]=(0,m.useState)({key:"",text:"Please wait...",variant:"outlined"});(0,m.useEffect)(()=>{switch(n.facilitationState){case c._y.Ready:p({key:"open-session",text:"Open workshop",variant:"contained"});break;case c._y.Open:p({key:"close-session",text:"Close workshop",variant:"outlined"});break;case c._y.Closed:p({key:"open-waiting",text:"Open waiting room",variant:"contained"})}},[n]);let h=async r=>{try{s(!0);var a={action:r===c._y.Open?"open":r===c._y.Ready?"reset":"close",sessionId:n.id};await o(i.postFacilitatorAction(t.access_token,e,a))}catch(e){console.error(e)}finally{s(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(G.Z,{busy:r,variant:x.variant,btnKey:x.key,btnText:x.text,onClick:e=>{switch(e){case"open-waiting":h(c._y.Ready);break;case"open-session":h(c._y.Open);break;case"close-session":d(!0);break;default:console.warn("Unexpected facilitation switch from menu.")}}}),(0,a.jsx)(X.Z,{open:l,setOpen:d,prompt:"Are you sure you want to close the workshop?",onSelect:e=>{"close"===e&&h(c._y.Closed)},options:[{key:"close",text:"Close",filled:!0},{key:"cancel",text:"Cancel",filled:!1}]})]})}function ek(){let{session:e}=(0,m.useContext)(u.z);return(0,a.jsxs)(w.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:"white",p:1,borderRadius:2},children:[(0,a.jsx)(t=>{let{showBadge:n}=t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w.Z,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",children:[(0,a.jsx)("img",{src:"/icons/home.svg",style:{height:"2rem",width:"auto",verticalAlign:"middle",marginRight:12,paddingBottom:4}}),n&&(0,a.jsx)(y.Z,{color:"primary",badgeContent:c._y[e.facilitationState],anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})}),!n&&(0,a.jsx)(Z.Z,{variant:"h5",component:"h1",children:e.sessionName})]})})},{showBadge:!1}),(0,a.jsxs)(w.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",gap:4},children:[(0,a.jsx)(eC,{}),(0,a.jsx)(M,{}),(0,a.jsx)(er,{}),(0,a.jsx)(k,{}),(0,a.jsx)(eS,{})]})]})}function eI(e){let{notes:t}=e;return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})}var eE=n(7630),e_=n(69065),eF=n(80824),eR=n(66124);function eD(e){let{session:t}=(0,m.useContext)(u.z),[n,i]=(0,m.useState)(!1),[o,r]=(0,m.useState)(!1),[s,l]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{r(t.facilitationState===c._y.Open)},[t.facilitationState]),(0,m.useEffect)(()=>{l(t.remoteConfiguration===c.VS.InPerson)},[t.remoteConfiguration]),(0,m.useEffect)(()=>{i(o&&s)},[o,s]),(0,a.jsxs)(e_.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:()=>i(!1),children:[(0,a.jsxs)(eF.Z,{children:["The workshop is now open",(0,a.jsx)(w.Z,{style:{position:"absolute",top:0,right:0},children:(0,a.jsx)(Y.Z,{"aria-label":"close",onClick:()=>i(!1),children:(0,a.jsx)(eE.Z,{})})})]}),(0,a.jsx)(eR.Z,{children:(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,a.jsxs)("ul",{children:[o&&(0,a.jsx)("li",{children:"Participants will now be able to enter the session"}),s&&(0,a.jsxs)("li",{children:["A test of the audio recording capability is available, but relevant sections will ",(0,a.jsx)("u",{children:"not"})," be automatically recorded"]})]}),(0,a.jsx)(P.Z,{variant:"contained",sx:{alignSelf:"center",textTransform:"uppercase"},onClick:()=>i(!1),children:"Continue"})]})})]})}let eP=e=>e.remoteConfiguration===c.VS.RemoteWithVideoCall?"left":"right",eA=e=>e.remoteConfiguration===c.VS.RemoteWithVideoCall,eO=e=>e.remoteConfiguration!==c.VS.RemoteWithVideoCall;function eU(){let{presentation:e,previews:t}=(0,m.useContext)(p.N),{slideData:n}=(0,m.useContext)(x.X),{session:i}=(0,m.useContext)(u.z),o=(0,m.useContext)(v.u),[r,s]=(0,m.useState)(eO(i)),[l,c]=(0,m.useState)(eA(i)),[d,g]=(0,m.useState)(eP(i));return(0,m.useEffect)(()=>{s(eO(i)),c(eA(i)),g(eP(i))},[i]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(w.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1,p:1,overflow:"hidden"},children:[(0,a.jsx)(w.Z,{children:(0,a.jsx)(ek,{})}),(0,a.jsxs)(w.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",gap:1,overflowY:"hidden"},children:[(0,a.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",width:"50vw",gap:1,flexShrink:0},children:[(0,a.jsx)(b.Z,{sx:{flexGrow:1,overflow:"hidden",minHeight:"50vh"},children:e}),r&&(0,a.jsx)(b.Z,{children:t}),"left"===d&&(0,a.jsx)(w.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(b.Z,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eI,{notes:n.notes})})})]}),(0,a.jsxs)(w.Z,{sx:{flexGrow:1,width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:1},children:[l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.Z,{sx:{flexGrow:1},children:(0,a.jsx)(h.Z,{initialCallPreferences:o.call,sx:{width:"100%",height:"100%"},children:(0,a.jsx)(j,{})})}),(0,a.jsx)(f.Z,{orientation:"row"})]}),"right"===d&&(0,a.jsx)(w.Z,{sx:{flexGrow:1,display:"block",overflowY:"hidden"},children:(0,a.jsx)(b.Z,{scrolling:!0,sx:{height:"100%"},children:(0,a.jsx)(eI,{notes:n.notes})})})]})]})]}),(0,a.jsx)(eD,{})]})}var eN=n(98641);function eT(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(eN.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:c._b.Controller,children:[(0,a.jsx)(d.Z,{}),(0,a.jsx)(eU,{})]})})}var eq=n(16463);function ez(){let e=(0,eq.useSearchParams)(),t=e.get("sid"),n=e.get("code"),i="true"===e.get("refresh");return null===t||null===n?(0,a.jsx)("p",{children:"Missing session id or join code"}):(0,a.jsx)(l.Z,{searchParams:e,children:(0,a.jsx)(eT,{sid:t,joinCode:n,refresh:i})})}},10105:function(e,t,n){"use strict";n.d(t,{k:function(){return o},v:function(){return i}});let i=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),o=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)},84075:function(){}},function(e){e.O(0,[9827,2908,6444,6221,1866,3732,3887,4403,7357,7483,7480,8768,5221,4275,9026,4286,3447,5452,6413,2971,7023,1744],function(){return e(e.s=59870)}),_N_E=e.O()}]);