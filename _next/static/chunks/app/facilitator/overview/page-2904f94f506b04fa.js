(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{7251:function(e,i,s){Promise.resolve().then(s.bind(s,66977))},66977:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return eb}});var t,n,o,l,r=s(57437),a=s(31193),d=s(96537),c=s(88620),u=s(2265),h=s(67022),p=s(94547),x=s(20920);let f=e=>{var i;return(null==e?void 0:null===(i=e.profile)||void 0===i?void 0:i.hasOwnProperty("cognito:groups"))?e.profile["cognito:groups"]:[]},m=e=>e.includes(p.SC[p.SC.administrators]),g=e=>e.includes(p.SC[p.SC.analysts])||m(e),v=e=>e.includes("facilitators")||m(e)||!0,w=(0,u.createContext)({});function j(e){var i;let[s,t]=(0,u.useState)((null===(i=window)||void 0===i?void 0:i.localStorage.getItem("DeviceId"))||(0,x.Z)());(0,u.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",s)},[s]);let[n,o]=(0,u.useState)(!1),[l,a]=(0,u.useState)(null),[p,m]=(0,u.useState)(e.role),g=(0,h.aC)(),v=async()=>{await g.removeUser(),a(null)};(0,u.useEffect)(()=>g.events.addAccessTokenExpiring(async()=>{console.debug("Access token renewal with auth.signinSilent()...");let e=await g.signinSilent();console.debug("User renewal: ".concat(e?"found":"not found")),a(e)}),[g.events,g.signinSilent]);let[j,y]=(0,u.useState)({user:l,role:p,deviceId:s,groups:[],onSignOut:v});(0,u.useEffect)(()=>{y({...j,role:p})},[p]),(0,u.useEffect)(()=>{y({...j,deviceId:s})},[s]),(0,u.useEffect)(()=>{y({...j,user:l,groups:f(l)})},[l]);let S=async()=>{try{o(!0);let e=await g.signinSilent();null===e?await g.signinRedirect():a(e)}finally{o(!1)}};return(0,u.useEffect)(()=>{!g.isLoading&&g.user&&a(g.user)},[g.isLoading]),(0,r.jsxs)(r.Fragment,{children:[(n||g.isLoading)&&(0,r.jsx)(c.Z,{isError:!1,isBusy:!0,title:"Checking authentication...",message:"Please wait while we confirm permission to access the facilitator overview.",showProgress:!1}),!g.isLoading&&!n&&(0,r.jsxs)(r.Fragment,{children:[null===l&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{isError:!1,isBusy:!1,title:"Please sign in",message:"Please sign in to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(d.Z,{variant:"contained",onClick:()=>S(),disabled:n,children:"Sign in"})})}),(null==l?void 0:l.expired)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{isError:!0,isBusy:!1,title:"Authentication expired",message:"Please sign in again to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(d.Z,{variant:"contained",onClick:()=>S(),disabled:n,children:"Sign in"})})}),null!==j.user&&!j.user.expired&&(0,r.jsx)(w.Provider,{value:j,children:e.children})]})]})}var y=s(32184),S=s(57300),b=s(80511),Z=s(27270);function k(){let e=(0,u.useContext)(w);return(0,r.jsx)(r.Fragment,{children:e.user.profile.email})}function C(e){let[i,s]=(0,u.useState)(0),t=(0,u.useContext)(w),[n,l]=(0,u.useState)([]);return(0,u.useEffect)(()=>{let e=[];v(t.groups)&&e.push(0),g(t.groups)&&e.push(1),l(e)},[t.groups]),(0,u.useEffect)(()=>{console.log("Selection",o[i]),e.onSetSelection(i)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{children:n.map(e=>(0,r.jsx)(S.Z,{onClick:()=>s(e),selected:i==e,children:(0,r.jsxs)(b.Z,{variant:"h5",children:[(0,r.jsx)("img",{src:"/icons/workshops.svg",style:{height:26,verticalAlign:"middle",marginRight:12}}),o[e]]})},"facilitator-overview-menu-item-".concat(o[e])))}),e.showUsername&&(0,r.jsx)(a.Z,{sx:{position:"absolute",left:"1em",bottom:"1em",zIndex:100},children:(0,r.jsxs)(Z.Z,{severity:"success",action:e.showSignOut?(0,r.jsx)(d.Z,{color:"inherit",size:"small",onClick:t.onSignOut,children:"Sign out"}):void 0,children:["Signed in as: ",(0,r.jsx)(k,{})]})})]})}(t=o||(o={}))[t.Workshops=0]="Workshops",t[t.Reports=1]="Reports";var D=s(20909),E=s(79393),T=s(99128),R=s(45133),A=s(63742),W=s(16463),P=s(10105),_=s(7547),I=s(19783);let F=(e,i)=>new Date(new Date(e).getTime()+6e4*i),N=e=>{window.open((0,P.k)(e),"_blank","noreferrer")};function U(e){var i,s,t;let[n,o]=(0,u.useState)();return(0,u.useEffect)(()=>{I.toDataURL((0,P.v)(e.session)).then(e=>{o(e)}).catch(e=>{o(void 0),console.error(e)})},[e.session]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"flex-start",sx:{mb:2,py:1},children:[n&&(0,r.jsx)(a.Z,{sx:{mr:2},children:(0,r.jsx)("img",{src:n,style:{width:150,height:150}})}),(0,r.jsxs)(a.Z,{display:"flex",flexGrow:1,flexDirection:"column",sx:{mr:4},children:[(0,r.jsx)(b.Z,{variant:"h4",children:e.session.sessionName}),(0,r.jsx)(b.Z,{variant:"body1",sx:{mt:1},children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e.session.sessionDescription}})})]}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1,children:(0,r.jsx)(d.Z,{fullWidth:!0,variant:"outlined",color:"buttonStandard",onClick:()=>e.onEditSession(e.session),children:"Edit"})})]}),(0,r.jsxs)(y.Z,{children:[(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"TYPE"}),(0,r.jsxs)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:[p.VS[e.session.remoteConfiguration]," ",p.EQ[e.session.audience]]})]})]})}),e.session.location&&(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-location.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"LOCATION"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(i=e.session.location)&&void 0!==i?i:"(not specified)"})]})]})}),(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-date.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"DATE"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toISOString().substring(0,10)})]})]})}),(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-time.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"TIME"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:"".concat(new Date(e.session.sessionStartTime).toLocaleTimeString()," - ").concat(F(e.session.sessionStartTime,e.session.sessionDurationMins).toLocaleTimeString())})]})]})}),(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"PARTICIPANTS"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(s=e.session.anticipatedParticipants)&&void 0!==s?s:"(not specified)"})]})]})}),(0,r.jsx)(_.ZP,{children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"FACILITATOR"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(t=e.session.facilitatorEmail)&&void 0!==t?t:"(not specified)"})]})]})}),(0,r.jsx)(S.Z,{onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,P.v)(e.session))},children:(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"JOIN CODE"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:e.session.joinCode})]})]})})]}),(0,r.jsxs)(a.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"stretch",gap:2,pt:1,borderTop:"solid 1px black"},children:[(0,r.jsx)(d.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>N(e.session),children:"Enter workshop"}),(0,r.jsx)(d.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,P.v)(e.session))},children:"Copy participant link"})]})]})}var q=s(69065),O=s(66124),L=s(60335),z=s(18502),Q=s(80824),G=s(28549),M=s(56065),Y=s(19004),B=s(11656),V=s(66858),H=s(98784),J=s(7630),X=s(54952),K=s(39986),$=s(5069),ee=s(62737),ei=s.n(ee),es=s(47109),et=s(24072),en=s(76396);let eo=[{title:"Zeitgeist demo",description:"A Zeitgeist demonstration workshop.",duration_mins:15,audience:p.EQ.DemoWorkshop,slug:"zg-demo",uris:["/workshops/zg-demo/presentation.xml"]},{title:"Zeitgeist gallery",description:"A Zeitgeist gallery workshop (for testing).",duration_mins:15,audience:p.EQ.TestingWorkshop,slug:"zg-gallery",uris:["/workshops/zg-welcome/presentation.xml","/workshops/zg-gallery/presentation.xml"]},{title:"Situation Room: Water Scarcity",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:p.EQ.LiveWorkshop,slug:"sr-water-scarcity",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-b-water-scarcity/0-start.xml","/workshops/sr-b-water-scarcity/1-reuse.xml","/workshops/sr-b-water-scarcity/2-reduce.xml","/workshops/sr-b-water-scarcity/3-restrict.xml","/workshops/sr-b-water-scarcity/4-end.xml","/workshops/sr-z-outro/presentation.xml"]},{title:"Situation Room: Coastal Erosion and Flooding",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:p.EQ.LiveWorkshop,slug:"sr-coastal-erosion",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-c-coastal-erosion/0-start.xml","/workshops/sr-c-coastal-erosion/1-pfr.xml","/workshops/sr-c-coastal-erosion/2-engineered.xml","/workshops/sr-c-coastal-erosion/3-nature.xml","/workshops/sr-c-coastal-erosion/4-rollback.xml","/workshops/sr-c-coastal-erosion/5-end.xml","/workshops/sr-z-outro/presentation.xml"]},{title:"Situation Room: Inland Flooding",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:p.EQ.LiveWorkshop,slug:"sr-inland-flooding",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-d-inland-flooding/0-start.xml","/workshops/sr-d-inland-flooding/1-pfr.xml","/workshops/sr-d-inland-flooding/2-suds.xml","/workshops/sr-d-inland-flooding/3-engineered.xml","/workshops/sr-d-inland-flooding/4-nature.xml","/workshops/sr-d-inland-flooding/5-end.xml","/workshops/sr-z-outro/presentation.xml"]}];Object.values(p.VS).filter(e=>!isNaN(Number(e))).map(e=>Number(e));let el=[{value:p.EQ.LiveWorkshop,title:"Live workshop",description:"A live session with real participants."},{value:p.EQ.DemoWorkshop,title:"Demo workshop",description:"A demonstration workshop."},{value:p.EQ.TestingWorkshop,title:"Test workshop",description:"A test workshop, to review content or test new features."}],er=e=>{let i=parseInt(e);return isNaN(i)?void 0:i};function ea(e){let i=(0,u.useContext)(w),s=()=>{var e;return null!==(e=i.user.profile.email)&&void 0!==e?e:"Unknown facilitator"},[t,n]=(0,u.useState)(),[o,l]=(0,u.useState)(),[c,h]=(0,u.useState)(!1),[x,f]=(0,u.useState)(),[m,g]=(0,u.useState)(),[v,j]=(0,u.useState)(),[y,S]=(0,u.useState)(),[b,Z]=(0,u.useState)(),[k,C]=(0,u.useState)(),[D,E]=(0,u.useState)(),[T,R]=(0,u.useState)(),[A,W]=(0,u.useState)(),[P,_]=(0,u.useState)(),[I,F]=(0,u.useState)(),[N,U]=(0,u.useState)(),[ee,ea]=(0,u.useState)(),[ed,ec]=(0,u.useState)(),[eu,eh]=(0,u.useState)(),[ep,ex]=(0,u.useState)();(0,u.useEffect)(()=>{var i,s;n(null!==(s=null===(i=e.prefill)||void 0===i?void 0:i.sessionSlug)&&void 0!==s?s:"")},[e.open,e.prefill]),(0,u.useEffect)(()=>{l(eo.find(e=>e.slug===t))},[t,e.prefill]),(0,u.useEffect)(()=>{var i,t,n,l,r,a,d,c,u,x,m,v,w,y,b,k,C;console.debug("selected template",o),f(null!==(y=null===(i=e.prefill)||void 0===i?void 0:i.sessionName)&&void 0!==y?y:null==o?void 0:o.title),g(void 0),j(null!==(b=null===(t=e.prefill)||void 0===t?void 0:t.sessionDescription)&&void 0!==b?b:null==o?void 0:o.description),S(void 0),ea((null===(n=e.prefill)||void 0===n?void 0:n.sessionDurationMins)!==void 0?null===(l=e.prefill)||void 0===l?void 0:l.sessionDurationMins:null==o?void 0:o.duration_mins),ec(void 0),Z((null===(r=e.prefill)||void 0===r?void 0:r.audience)!==void 0?null===(a=e.prefill)||void 0===a?void 0:a.audience:null==o?void 0:o.audience),E((null===(d=e.prefill)||void 0===d?void 0:d.remoteConfiguration)!==void 0?e.prefill.remoteConfiguration:void 0!==o?p.VS.InPerson:void 0),R(void 0),W((null!==(k=null===(c=e.prefill)||void 0===c?void 0:c.facilitatorEmail)&&void 0!==k?k:void 0!==o)?s():void 0),_(void 0),F((null===(u=e.prefill)||void 0===u?void 0:u.sessionStartTime)!==void 0?ei()(null===(x=e.prefill)||void 0===x?void 0:x.sessionStartTime):void 0!==o?ei()():void 0),U(void 0),eh((null!==(C=null===(m=e.prefill)||void 0===m?void 0:m.location)&&void 0!==C?C:void 0!==o)?"":void 0),ex((null===(v=e.prefill)||void 0===v?void 0:v.anticipatedParticipants)!==void 0?null===(w=e.prefill)||void 0===w?void 0:w.anticipatedParticipants:void 0!==o?12:void 0),h(void 0!==o)},[o,e.prefill]);let ef=()=>{let e=!0;return void 0===x||x.trim().length<1?(g("Title is required"),e=!1):g(void 0),void 0===v||v.trim().length<1?(S("Description is required"),e=!1):S(void 0),void 0===I?(U("Start date is required"),e=!1):U(void 0),void 0===ee||ee<1?(ec("Duration is required"),e=!1):ec(void 0),void 0===D?(R("Remote configuration is required"),e=!1):R(void 0),void 0===b?(C("Audience is required"),e=!1):C(void 0),void 0===A||A.trim().length<1?(_("Facilitator is required"),e=!1):_(void 0),e},em=()=>{e.busy||e.onCloseRequest()},eg=e=>(0,r.jsx)(et.ZP,{variant:"popover",popupId:e.id,children:i=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L.Z,{sx:{alignSelf:"start"},"aria-label":e.description,...(0,en.LI)(i),children:(0,r.jsx)(es.Z,{})}),(0,r.jsx)(z.ZP,{...(0,en.ZW)(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,r.jsx)(a.Z,{sx:{p:1},children:e.children})})]})});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(q.Z,{fullWidth:!0,maxWidth:"sm",open:e.open,onClose:em,children:[(0,r.jsxs)(Q.Z,{children:[void 0!==e.prefill?"Edit":"Create new"," session",(0,r.jsx)(a.Z,{style:{position:"absolute",top:0,right:0},children:(0,r.jsx)(L.Z,{"aria-label":"close",onClick:em,children:(0,r.jsx)(J.Z,{})})})]}),(0,r.jsx)(O.Z,{children:(0,r.jsxs)(a.Z,{sx:{p:1},display:"flex",flexDirection:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(M.Z,{id:"new-session-template-label",children:"Workshop"}),(0,r.jsx)(Y.Z,{labelId:"new-session-template-label",value:null!=t?t:"",label:"Workshop",required:!0,disabled:e.busy,onChange:e=>n(e.target.value),children:eo.map(e=>(0,r.jsx)(B.Z,{value:e.slug,children:e.title},"session-template-option-".concat(e.slug)))})]})}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(M.Z,{id:"new-session-audience-label",children:"Audience"}),(0,r.jsx)(Y.Z,{labelId:"new-session-audience-label",value:null!=b?b:"",label:"Audience",required:!0,disabled:!c||e.busy,onChange:e=>Z(e.target.value),children:el.map(e=>(0,r.jsx)(B.Z,{value:e.value,children:e.title},"session-audience-option-".concat(e.value)))})]}),(0,r.jsxs)(eg,{id:"session-audience-info-popup",description:"Workshop audience info",children:[(0,r.jsx)("p",{children:"Choose between:"}),(0,r.jsx)("ul",{children:el.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:e.title}),": ",e.description]},"session-audience-info-".concat(e.value)))})]})]}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,label:"Session title",value:null!=x?x:"",required:!0,onChange:e=>f(e.target.value),disabled:!c||e.busy,error:!!m,helperText:m})}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,label:"Session description",value:null!=v?v:"",required:!0,onChange:e=>j(e.target.value),disabled:!c||e.busy,error:!!y,helperText:y})}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(X._,{dateAdapter:$.y,children:(0,r.jsx)(K.x,{label:"Session start",value:void 0!==I?I:null,onChange:e=>F(null!=e?e:void 0),disabled:!c||e.busy,slotProps:{textField:{fullWidth:!0,required:!0,error:!!N,helperText:N}}})})}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,inputProps:{type:"number"},label:"Duration (mins)",value:null!=ee?ee:"",required:!0,onChange:e=>ea(er(e.target.value)),disabled:!c||e.busy,error:!!ed,helperText:ed})}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(M.Z,{id:"new-session-remote-config-label",children:"Remote configuration"}),(0,r.jsxs)(Y.Z,{labelId:"new-session-remote-config-label",value:null!=D?D:"",label:"Remote configuration",required:!0,onChange:e=>E(e.target.value),disabled:!c||e.busy,error:!!T,children:[(0,r.jsx)(B.Z,{value:p.VS.InPerson,children:"In person"}),(0,r.jsx)(B.Z,{value:p.VS.Remote,children:"Remote"}),(0,r.jsx)(B.Z,{value:p.VS.RemoteWithVideoCall,children:"Remote (with video call)"})]})]}),(0,r.jsx)(eg,{id:"remote-config-info-popup",description:"Remote configuration info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"In person: Audio plays from facilitator only"}),(0,r.jsx)("li",{children:"Remote: Audio plays from all devices"}),(0,r.jsx)("li",{children:"Remote with video call: Audio plays from all devices, embedded video call"})]})})]}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,label:"Facilitator",value:null!=A?A:"",onChange:e=>W(e.target.value),required:!0,disabled:!c||e.busy,error:!!P,helperText:P})}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,label:"Location",value:null!=eu?eu:"",onChange:e=>eh(e.target.value),disabled:!c||e.busy})}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(V.Z,{fullWidth:!0,label:"Anticipated participants",inputProps:{type:"number"},value:null!=ep?ep:"",onChange:e=>ex(er(e.target.value)),disabled:!c||e.busy})})]})}),(0,r.jsxs)(H.Z,{children:[(0,r.jsx)(d.Z,{variant:"outlined",onClick:em,disabled:e.busy,children:"Cancel"}),(0,r.jsx)(d.Z,{variant:"outlined",onClick:()=>{e.onClearRequest(),n(void 0)},disabled:e.busy,children:"Clear"}),(0,r.jsx)(d.Z,{variant:"contained",onClick:()=>{if(ef()){var i,s,t,n,l,r,a;let d={...e.prefill,id:null===(i=e.prefill)||void 0===i?void 0:i.id,sessionName:x,sessionDescription:v,sessionSlug:o.slug,sessionStartTime:I.set("second",0).toDate(),sessionDurationMins:ee,remoteConfiguration:D,facilitatorEmail:A,location:eu,anticipatedParticipants:ep,sessionGraphicAltText:null===(s=e.prefill)||void 0===s?void 0:s.sessionGraphicAltText,sessionPresentationUris:o.uris,answers:null!==(a=null===(t=e.prefill)||void 0===t?void 0:t.answers)&&void 0!==a?a:[],audience:b,facilitationState:(null===(n=e.prefill)||void 0===n?void 0:n.facilitationState)!==void 0?e.prefill.facilitationState:p._y.Ready,fullScreen:(null===(l=e.prefill)||void 0===l?void 0:l.fullScreen)===void 0||e.prefill.fullScreen,liveExperienceState:(null===(r=e.prefill)||void 0===r?void 0:r.liveExperienceState)!==void 0?e.prefill.liveExperienceState:{slideX:0,slideY:0,videoSync:[],sequence:0}};e.onSubmitRequest(d)}},disabled:e.busy,children:"Submit"})]})]})})}function ed(e){let i="".concat(100*e.menuWidth,"%"),s="".concat((1-e.menuWidth)*100,"%");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",overflow:"hidden",height:"100vh",gap:2,px:1,...e.sx},children:[(0,r.jsx)(a.Z,{sx:{width:i,height:"100%",display:"block",overflowY:"auto"},children:e.menu}),(0,r.jsx)(a.Z,{sx:{width:s,height:"100%",display:"block",overflowY:"auto"},children:e.main})]})})}var ec=s(1973);let eu=e=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"][e];function eh(){let{api:e,start:i}=(0,u.useContext)(ec.E),s=(0,u.useContext)(w),[t,n]=(0,u.useState)(!1),[o,l]=(0,u.useState)([]),[c,h]=(0,u.useState)({}),[x,f]=(0,u.useState)({}),[m,g]=(0,u.useState)(),[v,j]=(0,u.useState)(!1),[Z,k]=(0,u.useState)(!1),[C,P]=(0,u.useState)(""),[_,I]=(0,u.useState)(),[F,N]=(0,u.useState)(!1),q=(0,W.useSearchParams)(),[O,L]=(0,u.useState)(0);(0,u.useEffect)(()=>{let e=q.get("flags"),i=0;e&&(e.includes("m")&&(i|=2),e.includes("a")&&(i|=1),L(i))},[q]);let z=()=>{o.forEach(s=>{let t=(0,D.X)(s.sessionPresentationUris[0]);if(!c.hasOwnProperty(t)){let n={workshopDirectory:t};i(e.postPublicContentAccessRequest(s.id,n)).then(e=>{h(i=>{let s={...i};return s[n.workshopDirectory]={thumb:e.thumbnailUrl,poster:e.posterUrl},s})})}})},Q=e=>{var i;let s=(0,D.X)(e.sessionPresentationUris[0]),t=c.hasOwnProperty(s)?c[s]:void 0;return null!==(i=null==t?void 0:t.thumb)&&void 0!==i?i:null==t?void 0:t.poster},G=e=>{let i={};return e.forEach(e=>{let s=new Date(e.sessionStartTime).toLocaleDateString("en-GB",{month:"long",year:"numeric"});i[s]||(i[s]=[]),i[s].push(e)}),console.debug("sessions grouped by month",i),i},M=async()=>{try{console.debug("Fetching sessions..."),l([]),n(!0);let t=await i(e.listDeliberationSessions(s.user.access_token,p.yI.Upcoming,"overview-list-sessions"));console.debug("Sessions",t);let o=t.filter(e=>e.audience!==p.EQ.AutomatedTests||1&O&&e.audience===p.EQ.AutomatedTests).toSorted((e,i)=>new Date(e.sessionStartTime).getTime()-new Date(i.sessionStartTime).getTime());l(o)}catch(e){console.error(e)}finally{n(!1)}};(0,u.useEffect)(()=>{g(void 0),z(),f(G(o))},[o]),(0,u.useEffect)(()=>{M()},[]);let Y=async t=>{console.debug("New session submitted",t);try{if(N(!0),!(void 0===t.id?await i(e.postDeliberationSessionAdmin(s.user.access_token,t)):await i(e.putDeliberationSessionAdmin(s.user.access_token,t))).id)throw"Session creation failed.";j(!1),P("Session submitted successfully."),k(!0),M()}catch(e){console.error(e),P("Session submission failed. Please contact support."),k(!0)}finally{N(!1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ea,{open:v,busy:F,onCloseRequest:()=>{j(!1)},onClearRequest:()=>{I(void 0)},onSubmitRequest:Y,prefill:_}),(0,r.jsx)(E.Z,{open:Z,autoHideDuration:6e3,onClose:()=>k(!1),message:C}),(0,r.jsx)(ed,{menuWidth:.5,menu:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Upcoming workshops"}),(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsx)(d.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{I(void 0),j(!0)},disabled:t,children:"Add"}),(0,r.jsx)(d.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{M()},disabled:t,children:"Refresh"})]})]}),t&&(0,r.jsx)(T.Z,{}),(0,r.jsx)(y.Z,{subheader:(0,r.jsx)("li",{}),children:!!x&&Object.keys(x).map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(R.Z,{sx:{background:"transparent",borderBottom:"solid 1px grey",backdropFilter:"blur(5px)",p:1,my:2},children:(0,r.jsx)(b.Z,{variant:"h6",children:e})}),x[e].map((e,i)=>(0,r.jsx)(S.Z,{alignItems:"center",onClick:()=>g(e),selected:(null==m?void 0:m.id)===e.id,children:(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",gap:1,width:"100%"},children:[(0,r.jsxs)(a.Z,{sx:{alignSelf:"center",alignItems:"center",borderRight:"solid 2px lightGray",display:"flex",flexDirection:"column",gap:0,px:1},children:[(0,r.jsx)(b.Z,{variant:"body2",children:eu(new Date(e.sessionStartTime).getDay())}),(0,r.jsx)(b.Z,{variant:"h4",children:new Date(e.sessionStartTime).getDate()})]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:1,flexGrow:1},children:[(0,r.jsx)(b.Z,{variant:"body1",children:e.sessionName}),(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:.5,rowGap:.5},children:[(0,r.jsx)(A.Z,{component:"span",size:"small",label:p._y[e.facilitationState],color:"primary"}),(0,r.jsx)(A.Z,{component:"span",size:"small",label:p.VS[e.remoteConfiguration],color:"primary"}),(0,r.jsx)(A.Z,{component:"span",size:"small",label:p.EQ[e.audience],color:e.audience===p.EQ.LiveWorkshop?"error":void 0}),(0,r.jsx)(A.Z,{component:"span",size:"small",label:new Date(e.sessionStartTime).toLocaleTimeString()})]}),(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:.5,rowGap:.5},children:[e.facilitatorEmail&&(0,r.jsx)(A.Z,{component:"span",size:"small",label:e.facilitatorEmail,color:"secondary"}),e.location&&(0,r.jsx)(A.Z,{component:"span",size:"small",label:e.location,color:"secondary"})]})]})]}),Q(e)&&(0,r.jsx)("img",{style:{maxWidth:100,height:"auto",alignSelf:"start",justifySelf:"end"},src:Q(e),alt:e.sessionGraphicAltText})]})},"session-button-".concat(i)))]})},"overview-month-".concat(e)))})]}),main:m&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(U,{session:m,onEditSession:e=>{I(e),j(!0)},onDeleteSession:e=>{}})})})]})}(n=l||(l={}))[n.ShowAutomatedTesting=1]="ShowAutomatedTesting",n[n.ShowManualTesting=2]="ShowManualTesting";var ep=s(99665);function ex(e){let i=(0,u.useContext)(w),{api:s,start:t}=(0,u.useContext)(ec.E),[n,o]=(0,u.useState)([]),[l,c]=(0,u.useState)([]),[h,x]=(0,u.useState)(!1);(0,u.useEffect)(()=>{f()},[]);let f=()=>{x(!0),o([]),e.onSelection(void 0),t(s.listDeliberationSessions(i.user.access_token,p.yI.Answered,void 0)).then(e=>o(e)).catch(e=>{console.error(e)}).finally(()=>{x(!1)})};(0,u.useEffect)(()=>{c(n.filter(e=>e.audience!==p.EQ.AutomatedTests).sort((e,i)=>new Date(e.sessionStartTime).getTime()-new Date(i.sessionStartTime).getTime()).reverse().map(e=>({id:e.id,workshop:e.sessionName,start:new Date(e.sessionStartTime).toLocaleDateString()+" "+new Date(e.sessionStartTime).toLocaleTimeString(),audience:p.EQ[e.audience],location:e.location,participants:new Set(e.answers.map(e=>e.participantId)).size,questions:new Set(e.answers.map(e=>e.questionId)).size})))},[n]);let m=i=>{let s=n.find(e=>e.id===i);e.onSelection(s)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{sx:{py:1,minHeight:"100%",display:"flex",flexDirection:"column",gap:1},children:[(0,r.jsxs)(a.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Available reports"}),(0,r.jsx)(a.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(d.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{f()},disabled:h,children:"Refresh"})})]}),h&&(0,r.jsx)(T.Z,{}),(0,r.jsx)(ep._,{sx:{flexGrow:1},rows:l,columns:[{editable:!1,field:"start",headerName:"Start",width:175},{editable:!1,field:"workshop",headerName:"Workshop",width:250},{editable:!1,field:"audience",headerName:"Audience",width:150},{editable:!1,field:"location",headerName:"Location",width:150},{editable:!1,field:"participants",headerName:"Participants",width:75},{editable:!1,field:"questions",headerName:"Questions",width:75}],hideFooter:!0,onRowClick:(e,i,s)=>m(e.row.id)})]})})}let ef=e=>{if(null==e||""===e)return;let i=p.gY[e];if(void 0===i)throw console.error("Unknown report type: ".concat(e)),"Unknown report type: ".concat(e);return i},em=e=>{let i="report-".concat(e.sessionId,"-").concat(e.reportType,".json"),s="data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(e))),t=document.createElement("a");t.href=s,t.download=i,t.click()},eg=e=>{let i=Array.from(new Set(e.map(e=>Object.keys(e)).flat()));return[i,...e.map(e=>i.map(i=>e[i]))]},ev=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return e.map(e=>e.map(e=>e&&isNaN(e)?'"'.concat(e.replace(/"/g,'""'),'"'):e).join(i)).join("\n")},ew=e=>{let i=ev(eg(e.report)),s="report-".concat(e.sessionId,"-").concat(e.reportType,".csv"),t=document.createElement("a");t.href="data:text/csv;charset=utf-8,".concat(i),t.download=s,t.click()};function ej(e){let{api:i,start:s}=(0,u.useContext)(ec.E),t=(0,u.useContext)(w),[n,o]=(0,u.useState)(!1),[l,c]=(0,u.useState)(""),[h,x]=(0,u.useState)(),[f,m]=(0,u.useState)(),[g,v]=(0,u.useState)("");(0,u.useEffect)(()=>{console.debug("AnalystSessionPreview",e.session),console.debug("Groups",t.user.profile["cognito:groups"])},[e.session]),(0,u.useEffect)(()=>{c(""),x(void 0),m(void 0)},[e.session]),(0,u.useEffect)(()=>{v(""),m(void 0),void 0!==h&&(o(!0),j(h).then(e=>{m(e)}).catch(e=>{console.error(e),v("Unable to retrieve report: ".concat(JSON.stringify(e)))}).finally(()=>{o(!1)}))},[h]);let j=async n=>await s(i.getReport(e.session.id,t.user.access_token,n));return(0,u.useEffect)(()=>{f?v(JSON.stringify(f,null,2)):v("")},[f]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",gap:1,minHeight:"100%",py:1},children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Session report"}),(0,r.jsx)(b.Z,{variant:"h5",children:e.session.sessionName}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Audience: ",p.EQ[e.session.audience]]}),(0,r.jsxs)("li",{children:["Location: ",e.session.location]}),(0,r.jsxs)("li",{children:["Facilitator: ",e.session.facilitatorEmail]}),(0,r.jsxs)("li",{children:["Start: ",new Date(e.session.sessionStartTime).toLocaleDateString()+" "+new Date(e.session.sessionStartTime).toLocaleTimeString()]}),(0,r.jsxs)("li",{children:["Unique participants: ",new Set(e.session.answers.map(e=>e.participantId)).size]}),(0,r.jsxs)("li",{children:["Questions answered: ",new Set(e.session.answers.map(e=>e.questionId)).size," (non PII)"]})]}),(0,r.jsxs)(G.Z,{fullWidth:!0,children:[(0,r.jsx)(M.Z,{id:"report-select-label",children:"Report"}),(0,r.jsxs)(Y.Z,{labelId:"report-select-label",id:"report-select",value:l,label:"Report",onChange:(e,i)=>{c(e.target.value),x(ef(e.target.value))},children:[(0,r.jsx)(B.Z,{value:p.gY[p.gY.ContactAndConsent],children:"Contact and consent"}),(0,r.jsx)(B.Z,{value:p.gY[p.gY.EnjoymentAndSatisfaction],children:"Enjoyment and satisfaction"}),(0,r.jsx)(B.Z,{value:p.gY[p.gY.FullReport_v1],children:"Full report (v1)"}),(0,r.jsx)(B.Z,{value:p.gY[p.gY.FullReport_v2],children:"Full report (v2)"}),(0,r.jsx)(B.Z,{value:p.gY[p.gY.FullReport_v3],children:"Full report (v3)"})]})]}),n&&(0,r.jsx)(T.Z,{}),f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{sx:{background:"white",border:"solid 1px grey",borderRadius:1,p:1,overflowX:"auto",flexGrow:1},children:(0,r.jsx)("pre",{children:g})}),(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:1,rowGap:1},children:[(0,r.jsx)(d.Z,{variant:"contained",onClick:()=>ew(f),children:"Download CSV"}),(0,r.jsx)(d.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>em(f),children:"Download JSON"})]})]})]})})}function ey(){let[e,i]=(0,u.useState)(),[s,t]=(0,u.useState)(void 0);return(0,u.useEffect)(()=>{i(s&&(0,r.jsx)(ej,{session:s}))},[s]),(0,r.jsx)(ed,{menuWidth:.5,menu:(0,r.jsx)(ex,{onSelection:t}),main:e})}var eS=s(53771);function eb(){(0,u.useContext)(w);let[e,i]=(0,u.useState)(o.Workshops),[s,t]=(0,u.useState)((0,r.jsx)(eh,{}));return(0,u.useEffect)(()=>{void 0!==document&&(document.title="Facilitator overview")},[]),(0,u.useEffect)(()=>{switch(e){case o.Workshops:t((0,r.jsx)(eh,{}));break;case o.Reports:t((0,r.jsx)(ey,{}));break;default:throw"".concat(o[e]," not implemented.")}},[e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(ec.Z,{children:[(0,r.jsx)(j,{role:p._b.Controller,children:(0,r.jsx)(ed,{sx:{background:"linear-gradient(270deg, rgba(0, 0, 255, 0.25) 0%, rgba(0, 0, 255, 0.00) 50%, rgba(0, 0, 255, 0.00) 100%)"},menu:(0,r.jsx)(C,{onSetSelection:i,showUsername:!0,showSignOut:!0}),menuWidth:.2,main:s})}),(0,r.jsx)(a.Z,{sx:{position:"fixed",right:"1em",bottom:"1em"},children:(0,r.jsx)(eS.Z,{})})]})})}},83593:function(e,i,s){"use strict";s.d(i,{M:function(){return n}});var t,n,o=s(37836),l=s.n(o);(t=n||(n={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",t.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",t.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",t.Content_Progress_Update="CONTENT_PROGRESS_UPDATE",t.Media_Playback_Update="MEDIA_PLAYBACK_UPDATE";let r=new(l()),a={on:(e,i)=>r.on(e,i),once:(e,i)=>r.once(e,i),off:(e,i)=>r.off(e,i),emit:e=>r.emit(e.type,e)};Object.freeze(a),i.Z=a},88620:function(e,i,s){"use strict";s.d(i,{Z:function(){return u}});var t=s(57437),n=s(83593),o=s(22960),l=s(31193),r=s(34990),a=s(80511),d=s(99128),c=s(2265);function u(e){var i;let[s,u]=(0,c.useState)(),[h,p]=(0,c.useState)({overall:{completed:0,total:100},bars:{}});(0,c.useEffect)(()=>(n.Z.on(n.M.Content_Progress_Update,u),()=>{n.Z.off(n.M.Content_Progress_Update,u)}),[]),(0,c.useEffect)(()=>{void 0!==s&&s.type===n.M.Content_Progress_Update&&p(s.data)},[s]);let x=(0,o.Z)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{sx:{alignSelf:"center",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%",width:"60%",maxWidth:"480px"},children:(0,t.jsxs)(r.Z,{elevation:1,sx:{p:2,flexGrow:1,textAlign:"start"},children:[(0,t.jsx)(a.Z,{component:"h2",variant:"h5",sx:{mb:2},style:{textAlign:"center"},children:e.title}),(0,t.jsx)(a.Z,{variant:"body1",children:(0,t.jsx)("span",{style:{color:e.isError?x.palette.error.main:"inherit"},children:null!==(i=e.message)&&void 0!==i?i:"Unknown error."})}),e.children&&(0,t.jsx)(l.Z,{sx:{my:1},children:e.children}),e.isBusy&&!e.showProgress&&(0,t.jsx)(d.Z,{sx:{mt:2}}),e.isBusy&&e.showProgress&&(0,t.jsx)(d.Z,{sx:{mt:2},value:h.overall.total>0?100*h.overall.completed/h.overall.total:void 0,variant:h.overall.total>0?"determinate":"indeterminate"}),e.isBusy&&e.showProgress&&Object.keys(h.bars).map((e,i)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Z,{color:"secondary",sx:{mt:1},value:h.bars[e].total>0?100*h.bars[e].completed/h.bars[e].total:0,variant:"determinate"},"loading-progress-bar-".concat(i,"-").concat(e))}))]})})})}},53771:function(e,i,s){"use strict";s.d(i,{Z:function(){return c}});var t=s(57437),n=s(22960),o=s(31193),l=s(40468),r=s(2057),a=s(2265),d=s(1973);function c(e){let{runningTasks:i,waitingTasks:s,failedTasks:c}=(0,a.useContext)(d.E),u=(0,n.Z)(),h={[r.l.Waiting]:u.palette.taskWaiting.main,[r.l.Ready]:u.palette.taskReady.main,[r.l.Running]:u.palette.taskRunning.main,[r.l.Success]:u.palette.taskSuccess.main,[r.l.Failed]:u.palette.taskFailed.main,[r.l.Cancelled]:u.palette.taskCancelled.main},p=e=>{let{task:i}=e,s=i.initProps.indicator,n=!1;switch(i.state){case r.l.Waiting:s+=" (retry)",n=!0;break;case r.l.Ready:case r.l.Running:s+="...",n=!0}return(0,t.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center",borderRadius:1,backgroundColor:"white",border:1,borderColor:h[i.state],borderBottom:4,borderBottomColor:h[i.state],opacity:.75,py:1,px:2},children:[n&&(0,t.jsx)(l.Z,{size:"1rem"}),s]})};return(0,a.useEffect)(()=>{console.debug("Running tasks: ".concat(i.length))},[i]),(0,t.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e.showRunning&&i.filter(e=>void 0!==e.initProps.indicator).map(e=>(0,t.jsx)(p,{task:e},"task-vis-".concat(e.id,"-").concat(r.l[e.state]))),s.filter(e=>void 0!==e.initProps.indicator).map(e=>(0,t.jsx)(p,{task:e},"task-vis-".concat(e.id,"-").concat(r.l[e.state])))]})}},10105:function(e,i,s){"use strict";s.d(i,{k:function(){return n},v:function(){return t}});let t=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),n=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)},20909:function(e,i,s){"use strict";s.d(i,{X:function(){return t}});let t=e=>e.split("/").at(-2)}},function(e){e.O(0,[732,887,403,328,602,810,375,665,26,30,973,971,23,744],function(){return e(e.s=7251)}),_N_E=e.O()}]);