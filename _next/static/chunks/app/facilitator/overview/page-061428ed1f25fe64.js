(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{7251:function(e,i,s){Promise.resolve().then(s.bind(s,26983))},26983:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return ec}});var t,n,l,o,r=s(57437),a=s(76548),d=s(88620),c=s(2265),u=s(67022),h=s(20920);let x=(0,c.createContext)({});function p(e){var i;let[s,t]=(0,c.useState)((null===(i=window)||void 0===i?void 0:i.localStorage.getItem("DeviceId"))||(0,h.Z)());(0,c.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",s)},[s]);let[n,l]=(0,c.useState)(!1),[o,p]=(0,c.useState)(null),[f,v]=(0,c.useState)(e.role),g=(0,u.aC)(),m=async()=>{await g.signoutSilent(),p(null)},[j,y]=(0,c.useState)({user:o,role:f,deviceId:s,onSignOut:m});(0,c.useEffect)(()=>{y({...j,role:f})},[f]),(0,c.useEffect)(()=>{y({...j,deviceId:s})},[s]),(0,c.useEffect)(()=>{y({...j,user:o})},[o]);let b=async()=>{try{l(!0);let e=await g.signinSilent();null===e?await g.signinRedirect():p(e)}finally{l(!1)}};return(0,c.useEffect)(()=>{!g.isLoading&&g.user&&p(g.user)},[g.isLoading]),(0,r.jsxs)(r.Fragment,{children:[(n||g.isLoading)&&(0,r.jsx)(d.Z,{isError:!1,isBusy:!0,title:"Checking authentication...",message:"Please wait while we confirm permission to access the facilitator overview.",showProgress:!1}),!g.isLoading&&!n&&(0,r.jsxs)(r.Fragment,{children:[null===o&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{isError:!1,isBusy:!1,title:"Please sign in",message:"Please sign in to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>b(),disabled:n,children:"Sign in"})})}),(null==o?void 0:o.expired)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{isError:!0,isBusy:!1,title:"Authentication expired",message:"Please sign in again to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>b(),disabled:n,children:"Sign in"})})}),null!==j.user&&!j.user.expired&&(0,r.jsx)(x.Provider,{value:j,children:e.children})]})]})}var f=s(94547),v=s(58433);function g(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(v.ZP,{container:!0,sx:{...e.sx,height:"100vh",p:1},children:[(0,r.jsx)(v.ZP,{item:!0,xs:2,sx:{overflowY:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:e.menu}),(0,r.jsx)(v.ZP,{item:!0,xs:10,sx:{overflowY:"scroll"},children:e.children})]})})}var m=s(32184),j=s(57300),y=s(80511),b=s(27270);function Z(){let e=(0,c.useContext)(x);return(0,r.jsx)(r.Fragment,{children:e.user.profile.email})}function w(e){let[i,s]=(0,c.useState)(0),t=(0,c.useContext)(x);return(0,c.useEffect)(()=>{console.log("Selection",l[i]),s(i)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{children:void 0!==e.options.find(e=>0==e)&&(0,r.jsx)(j.Z,{onClick:()=>s(0),selected:0==i,children:(0,r.jsxs)(y.Z,{variant:"h5",children:[(0,r.jsx)("img",{src:"/icons/workshops.svg",style:{height:26,verticalAlign:"middle",marginRight:12}}),"Workshops"]})})}),e.showUsername&&(0,r.jsxs)(b.Z,{severity:"success",action:e.showSignOut?(0,r.jsx)(a.Z,{color:"inherit",size:"small",onClick:t.onSignOut,children:"Sign out"}):void 0,children:["Signed in as: ",(0,r.jsx)(Z,{})]})]})}(t=l||(l={}))[t.Workshops=0]="Workshops";var S=s(58253),D=s(20909),C=s(79393),k=s(31193),T=s(99128),P=s(45133),E=s(47905),A=s(63742),W=s(16463),R=s(10105),I=s(7547),F=s(19783);let q=(e,i)=>new Date(new Date(e).getTime()+6e4*i),_=e=>{window.open((0,R.k)(e),"_blank","noreferrer")};function N(e){var i,s,t;let[n,l]=(0,c.useState)();return(0,c.useEffect)(()=>{F.toDataURL((0,R.v)(e.session)).then(e=>{l(e)}).catch(e=>{l(void 0),console.error(e)})},[e.session]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",alignItems:"flex-start",sx:{mb:2},children:[n&&(0,r.jsx)(k.Z,{sx:{mr:2},children:(0,r.jsx)("img",{src:n,style:{width:150,height:150}})}),(0,r.jsxs)(k.Z,{display:"flex",flexGrow:1,flexDirection:"column",sx:{mr:4},children:[(0,r.jsx)(y.Z,{variant:"h4",children:e.session.sessionName}),(0,r.jsx)(y.Z,{variant:"body1",sx:{mt:1},children:e.session.sessionDescription})]}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1,children:(0,r.jsx)(a.Z,{fullWidth:!0,variant:"outlined",color:"buttonStandard",onClick:()=>e.onEditSession(e.session),children:"Edit"})})]}),(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"TYPE"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:f.VS[e.session.remoteConfiguration]})]})]})}),e.session.location&&(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-location.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"LOCATION"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(i=e.session.location)&&void 0!==i?i:"(not specified)"})]})]})}),(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-date.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"DATE"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toISOString().substring(0,10)})]})]})}),(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-time.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"TIME"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:"".concat(new Date(e.session.sessionStartTime).toLocaleTimeString()," - ").concat(q(e.session.sessionStartTime,e.session.sessionDurationMins).toLocaleTimeString())})]})]})}),(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"PARTICIPANTS"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(s=e.session.anticipatedParticipants)&&void 0!==s?s:"(not specified)"})]})]})}),(0,r.jsx)(I.ZP,{children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"FACILITATOR"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(t=e.session.facilitatorEmail)&&void 0!==t?t:"(not specified)"})]})]})}),(0,r.jsx)(j.Z,{onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,R.v)(e.session))},children:(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(y.Z,{variant:"body2",children:"JOIN CODE"}),(0,r.jsx)(y.Z,{variant:"body1",style:{fontWeight:"bold"},children:e.session.joinCode})]})]})})]}),(0,r.jsxs)(k.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"stretch",gap:2,pt:1,borderTop:"solid 1px black"},children:[(0,r.jsx)(a.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>_(e.session),children:"Enter workshop"}),(0,r.jsx)(a.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,R.v)(e.session))},children:"Copy participant link"})]})]})}var O=s(69065),L=s(66124),z=s(60335),U=s(18502),M=s(80824),G=s(28549),V=s(56065),B=s(19004),Q=s(11656),Y=s(66858),H=s(98784),X=s(7630),J=s(54952),K=s(39986),$=s(5069),ee=s(62737),ei=s.n(ee),es=s(47109),et=s(24072),en=s(76396);let el=[{title:"Zeitgeist demo",description:"A Zeitgeist demonstration workshop.",duration_mins:15,slug:"zg-demo",uris:["/workshops/zg-demo/presentation.xml"]},{title:"Zeitgeist gallery",description:"A Zeitgeist gallery workshop (for testing).",duration_mins:15,slug:"zg-gallery",uris:["/workshops/zg-welcome/presentation.xml","/workshops/zg-gallery/presentation.xml"]},{title:"Situation Room: Water Scarcity",description:"The Situation Room, covering the Water Scarcity topic.",duration_mins:110,slug:"sr-water-scarcity",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-b-water-scarcity/0-start.xml","/workshops/sr-b-water-scarcity/1-reuse.xml","/workshops/sr-b-water-scarcity/2-reduce.xml","/workshops/sr-b-water-scarcity/3-restrict.xml","/workshops/sr-b-water-scarcity/4-end.xml","/workshops/sr-z-outro/presentation.xml"]}];Object.values(f.VS).filter(e=>!isNaN(Number(e))).map(e=>Number(e));let eo=e=>{let i=parseInt(e);return isNaN(i)?void 0:i};function er(e){let i=(0,c.useContext)(x),s=()=>{var e;return null!==(e=i.user.profile.email)&&void 0!==e?e:"Unknown facilitator"},[t,n]=(0,c.useState)(),[l,o]=(0,c.useState)(),[d,u]=(0,c.useState)(!1),[h,p]=(0,c.useState)(),[v,g]=(0,c.useState)(),[m,j]=(0,c.useState)(),[y,b]=(0,c.useState)(),[Z,w]=(0,c.useState)(),[S,D]=(0,c.useState)(),[C,T]=(0,c.useState)(),[P,E]=(0,c.useState)(),[A,W]=(0,c.useState)(),[R,I]=(0,c.useState)(),[F,q]=(0,c.useState)(),[_,N]=(0,c.useState)(),[ee,er]=(0,c.useState)(),[ea,ed]=(0,c.useState)();(0,c.useEffect)(()=>{var i,s;n(null!==(s=null===(i=e.prefill)||void 0===i?void 0:i.sessionSlug)&&void 0!==s?s:"")},[e.open,e.prefill]),(0,c.useEffect)(()=>{o(el.find(e=>e.slug===t))},[t,e.prefill]),(0,c.useEffect)(()=>{var i,t,n,o,r,a,d,c,h,x,v,m,y,Z,S;console.debug("selected template",l),p(null!==(m=null===(i=e.prefill)||void 0===i?void 0:i.sessionName)&&void 0!==m?m:null==l?void 0:l.title),g(void 0),j(null!==(y=null===(t=e.prefill)||void 0===t?void 0:t.sessionDescription)&&void 0!==y?y:null==l?void 0:l.description),b(void 0),q((null===(n=e.prefill)||void 0===n?void 0:n.sessionDurationMins)!==void 0?null===(o=e.prefill)||void 0===o?void 0:o.sessionDurationMins:null==l?void 0:l.duration_mins),N(void 0),w((null===(r=e.prefill)||void 0===r?void 0:r.remoteConfiguration)!==void 0?e.prefill.remoteConfiguration:void 0!==l?f.VS.InPerson:void 0),D(void 0),T((null!==(Z=null===(a=e.prefill)||void 0===a?void 0:a.facilitatorEmail)&&void 0!==Z?Z:void 0!==l)?s():void 0),E(void 0),W((null===(d=e.prefill)||void 0===d?void 0:d.sessionStartTime)!==void 0?ei()(null===(c=e.prefill)||void 0===c?void 0:c.sessionStartTime):void 0!==l?ei()():void 0),I(void 0),er((null!==(S=null===(h=e.prefill)||void 0===h?void 0:h.location)&&void 0!==S?S:void 0!==l)?"":void 0),ed((null===(x=e.prefill)||void 0===x?void 0:x.anticipatedParticipants)!==void 0?null===(v=e.prefill)||void 0===v?void 0:v.anticipatedParticipants:void 0!==l?12:void 0),u(void 0!==l)},[l,e.prefill]);let ec=()=>{let e=!0;return void 0===h||h.trim().length<1?(g("Title is required"),e=!1):g(void 0),void 0===m||m.trim().length<1?(b("Description is required"),e=!1):b(void 0),void 0===A?(I("Start date is required"),e=!1):I(void 0),void 0===F||F<1?(N("Duration is required"),e=!1):N(void 0),void 0===Z?(D("Remote configuration is required"),e=!1):D(void 0),void 0===C||C.trim().length<1?(E("Facilitator is required"),e=!1):E(void 0),e},eu=()=>{e.busy||e.onCloseRequest()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(O.Z,{fullWidth:!0,maxWidth:"sm",open:e.open,onClose:eu,children:[(0,r.jsxs)(M.Z,{children:[void 0!==e.prefill?"Edit":"Create new"," session",(0,r.jsx)(k.Z,{style:{position:"absolute",top:0,right:0},children:(0,r.jsx)(z.Z,{"aria-label":"close",onClick:eu,children:(0,r.jsx)(X.Z,{})})})]}),(0,r.jsx)(L.Z,{children:(0,r.jsxs)(k.Z,{sx:{p:1},display:"flex",flexDirection:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"new-session-template-label",children:"Workshop"}),(0,r.jsx)(B.Z,{labelId:"new-session-template-label",value:null!=t?t:"",label:"Workshop",required:!0,disabled:e.busy,onChange:e=>n(e.target.value),children:el.map(e=>(0,r.jsx)(Q.Z,{value:e.slug,children:e.title},"session-template-option-".concat(e.slug)))})]})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,label:"Session title",value:null!=h?h:"",required:!0,onChange:e=>p(e.target.value),disabled:!d||e.busy,error:!!v,helperText:v})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,label:"Session description",value:null!=m?m:"",required:!0,onChange:e=>j(e.target.value),disabled:!d||e.busy,error:!!y,helperText:y})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(J._,{dateAdapter:$.y,children:(0,r.jsx)(K.x,{label:"Session start",value:void 0!==A?A:null,onChange:e=>W(null!=e?e:void 0),disabled:!d||e.busy,slotProps:{textField:{fullWidth:!0,required:!0,error:!!R,helperText:R}}})})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,inputProps:{type:"number"},label:"Duration (mins)",value:null!=F?F:"",required:!0,onChange:e=>q(eo(e.target.value)),disabled:!d||e.busy,error:!!_,helperText:_})}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"new-session-remote-config-label",children:"Remote configuration"}),(0,r.jsxs)(B.Z,{labelId:"new-session-remote-config-label",value:null!=Z?Z:"",label:"Remote configuration",required:!0,onChange:e=>w(e.target.value),disabled:!d||e.busy,error:!!S,children:[(0,r.jsx)(Q.Z,{value:f.VS.InPerson,children:"In person"}),(0,r.jsx)(Q.Z,{value:f.VS.Remote,children:"Remote"}),(0,r.jsx)(Q.Z,{value:f.VS.RemoteWithVideoCall,children:"Remote (with video call)"})]})]}),(0,r.jsx)(e=>(0,r.jsx)(et.ZP,{variant:"popover",popupId:e.id,children:i=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{sx:{alignSelf:"start"},"aria-label":e.description,...(0,en.LI)(i),children:(0,r.jsx)(es.Z,{})}),(0,r.jsx)(U.ZP,{...(0,en.ZW)(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,r.jsx)(k.Z,{sx:{p:1},children:e.children})})]})}),{id:"remote-config-info-popup",description:"Remote configuration info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"In person: Audio plays from facilitator only"}),(0,r.jsx)("li",{children:"Remote: Audio plays from all devices"}),(0,r.jsx)("li",{children:"Remote with video call: Audio plays from all devices, embedded video call"})]})})]}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,label:"Facilitator",value:null!=C?C:"",onChange:e=>T(e.target.value),required:!0,disabled:!d||e.busy,error:!!P,helperText:P})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,label:"Location",value:null!=ee?ee:"",onChange:e=>er(e.target.value),disabled:!d||e.busy})}),(0,r.jsx)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(Y.Z,{fullWidth:!0,label:"Anticipated participants",inputProps:{type:"number"},value:null!=ea?ea:"",onChange:e=>ed(eo(e.target.value)),disabled:!d||e.busy})})]})}),(0,r.jsxs)(H.Z,{children:[(0,r.jsx)(a.Z,{variant:"outlined",onClick:eu,disabled:e.busy,children:"Cancel"}),(0,r.jsx)(a.Z,{variant:"outlined",onClick:()=>{e.onClearRequest(),n(void 0)},disabled:e.busy,children:"Clear"}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>{if(ec()){var i,s,t,n,o,r,a;let d={...e.prefill,id:null===(i=e.prefill)||void 0===i?void 0:i.id,sessionName:h,sessionDescription:m,sessionSlug:l.slug,sessionStartTime:A.set("second",0).toDate(),sessionDurationMins:F,remoteConfiguration:Z,facilitatorEmail:C,location:ee,anticipatedParticipants:ea,sessionGraphicAltText:null===(s=e.prefill)||void 0===s?void 0:s.sessionGraphicAltText,sessionPresentationUris:l.uris,answers:null!==(a=null===(t=e.prefill)||void 0===t?void 0:t.answers)&&void 0!==a?a:[],audience:(null===(n=e.prefill)||void 0===n?void 0:n.audience)!==void 0?e.prefill.audience:f.EQ.Public,facilitationState:(null===(o=e.prefill)||void 0===o?void 0:o.facilitationState)!==void 0?e.prefill.facilitationState:f._y.Ready,fullScreen:(null===(r=e.prefill)||void 0===r?void 0:r.fullScreen)===void 0||e.prefill.fullScreen};e.onSubmitRequest(d)}},disabled:e.busy,children:"Submit"})]})]})})}let ea=e=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"][e];function ed(){let e=(0,c.useContext)(S.A),i=(0,c.useContext)(x),[s,t]=(0,c.useState)(!1),[n,l]=(0,c.useState)([]),[o,d]=(0,c.useState)({}),[u,h]=(0,c.useState)({}),[p,g]=(0,c.useState)(),[b,Z]=(0,c.useState)(!1),[w,R]=(0,c.useState)(!1),[I,F]=(0,c.useState)(""),[q,_]=(0,c.useState)(),[O,L]=(0,c.useState)(!1),z=(0,W.useSearchParams)(),[U,M]=(0,c.useState)(0);(0,c.useEffect)(()=>{let e=z.get("flags"),i=0;e&&(e.includes("m")&&(i|=2),e.includes("a")&&(i|=1),M(i))},[z]);let G=()=>{n.forEach(i=>{let s=(0,D.X)(i.sessionPresentationUris[0]);if(!o.hasOwnProperty(s)){let t={workshopDirectory:s};e.getPublicContentAccessUrls(i.id,t).then(e=>{d(i=>{let s={...i};return s[t.workshopDirectory]={thumb:e.thumbnailUrl,poster:e.posterUrl},s})})}})},V=e=>{var i;let s=(0,D.X)(e.sessionPresentationUris[0]),t=o.hasOwnProperty(s)?o[s]:void 0;return null!==(i=null==t?void 0:t.thumb)&&void 0!==i?i:null==t?void 0:t.poster},B=e=>{let i={};return e.forEach(e=>{let s=new Date(e.sessionStartTime).toLocaleDateString("en-GB",{month:"long",year:"numeric"});i[s]||(i[s]=[]),i[s].push(e)}),console.debug("sessions grouped by month",i),i},Q=async()=>{try{console.debug("Fetching sessions..."),l([]),t(!0);let s=await e.listDeliberationSessions(i.user.access_token);console.debug("Sessions",s);let n=s.filter(e=>e.audience===f.EQ.Public||1&U&&e.audience===f.EQ.AutomatedTests||2&U&&e.audience===f.EQ.ManualTesting).toSorted((e,i)=>new Date(e.sessionStartTime).getTime()-new Date(i.sessionStartTime).getTime());l(n)}catch(e){console.error(e)}finally{t(!1)}};(0,c.useEffect)(()=>{g(void 0),G(),h(B(n))},[n]),(0,c.useEffect)(()=>{Q()},[]);let Y=async s=>{console.debug("New session submitted",s);try{if(L(!0),!(void 0===s.id?await e.postDeliberationSessionAdmin(i.user.access_token,s):await e.putDeliberationSessionAdmin(i.user.access_token,s)).id)throw"Session creation failed.";Z(!1),F("Session submitted successfully."),R(!0),Q()}catch(e){console.error(e),F("Session submission failed. Please contact support."),R(!0)}finally{L(!1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(er,{open:b,busy:O,onCloseRequest:()=>{Z(!1)},onClearRequest:()=>{_(void 0)},onSubmitRequest:Y,prefill:q}),(0,r.jsx)(C.Z,{open:w,autoHideDuration:6e3,onClose:()=>R(!1),message:I}),(0,r.jsxs)(v.ZP,{container:!0,children:[(0,r.jsxs)(v.ZP,{item:!0,xs:6,sx:{px:2},children:[(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(y.Z,{variant:"h4",children:"Workshops"}),(0,r.jsxs)(k.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{_(void 0),Z(!0)},disabled:s,children:"Add"}),(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{Q()},disabled:s,children:"Refresh"})]})]}),s&&(0,r.jsx)(T.Z,{}),(0,r.jsx)(m.Z,{subheader:(0,r.jsx)("li",{}),children:!!u&&Object.keys(u).map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(P.Z,{style:{background:"transparent"},sx:{mt:2},children:(0,r.jsx)(y.Z,{variant:"h6",children:e})}),u[e].map((e,i)=>(0,r.jsxs)(j.Z,{alignItems:"center",onClick:()=>g(e),selected:(null==p?void 0:p.id)===e.id,children:[(0,r.jsxs)(k.Z,{sx:{px:1,m:1,textAlign:"center",borderRight:"solid 2px lightGray"},children:[(0,r.jsx)(y.Z,{variant:"body2",children:ea(new Date(e.sessionStartTime).getDay())}),(0,r.jsx)(y.Z,{variant:"h4",children:new Date(e.sessionStartTime).getDate()})]}),(0,r.jsx)(E.Z,{primary:e.sessionName,secondary:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.Z,{component:"span",size:"small",sx:{mr:.5},label:f._y[e.facilitationState],color:"primary"}),(0,r.jsx)(A.Z,{component:"span",size:"small",label:new Date(e.sessionStartTime).toLocaleTimeString()})]})}),V(e)&&(0,r.jsx)("img",{style:{maxWidth:100,maxHeight:100},src:V(e),alt:e.sessionGraphicAltText})]},"session-button-".concat(i)))]})},"overview-month-".concat(e)))})]}),(0,r.jsx)(v.ZP,{item:!0,xs:6,sx:{px:2},children:p&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{session:p,onEditSession:e=>{_(e),Z(!0)},onDeleteSession:e=>{}})})})]})]})}function ec(){let[e,i]=(0,c.useState)(l.Workshops),[s,t]=(0,c.useState)((0,r.jsx)(ed,{}));return(0,c.useEffect)(()=>{void 0!==document&&(document.title="Facilitator overview")},[]),(0,c.useEffect)(()=>{if(e===l.Workshops)t((0,r.jsx)(ed,{}));else throw"".concat(l[e]," not implemented.")},[e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(S.Z,{children:(0,r.jsx)(p,{role:f._b.Controller,children:(0,r.jsx)(g,{sx:{background:"linear-gradient(270deg, rgba(0, 0, 255, 0.25) 0%, rgba(0, 0, 255, 0.00) 50%, rgba(0, 0, 255, 0.00) 100%)"},menu:(0,r.jsx)(w,{options:[l.Workshops],onSetSelection:i,showUsername:!0,showSignOut:!1}),children:s})})})})}(n=o||(o={}))[n.ShowAutomatedTesting=1]="ShowAutomatedTesting",n[n.ShowManualTesting=2]="ShowManualTesting"},10105:function(e,i,s){"use strict";s.d(i,{k:function(){return n},v:function(){return t}});let t=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),n=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)}},function(e){e.O(0,[292,887,403,314,181,280,842,13,971,23,744],function(){return e(e.s=7251)}),_N_E=e.O()}]);