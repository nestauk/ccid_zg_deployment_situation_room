(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{63780:function(e,s,t){Promise.resolve().then(t.bind(t,89596))},68935:function(e,s,t){"use strict";t.d(s,{Z:function(){return f}});var i=t(23950),n=t(22988),o=t(2265),a=t(44839),r=t(70587),d=t(76990),l=t(97434),c=t(48762),u=t(47794),h=t(13143),m=t(57437);let g=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),x=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,s)=>{let{ownerState:t}=e;return[s.root,s[`maxWidth${(0,l.Z)(String(t.maxWidth))}`],t.fixed&&s.fixed,t.disableGutters&&s.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:p}),S=(e,s)=>{let{classes:t,fixed:i,disableGutters:n,maxWidth:o}=e,a={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,i&&"fixed",n&&"disableGutters"]};return(0,d.Z)(a,e=>(0,r.ZP)(s,e),t)};function f(e={}){let{createStyledComponent:s=x,useThemeProps:t=v,componentName:r="MuiContainer"}=e,d=s(({theme:e,ownerState:s})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:s})=>s.fixed&&Object.keys(e.breakpoints.values).reduce((s,t)=>{let i=e.breakpoints.values[t];return 0!==i&&(s[e.breakpoints.up(t)]={maxWidth:`${i}${e.breakpoints.unit}`}),s},{}),({theme:e,ownerState:s})=>(0,n.Z)({},"xs"===s.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},s.maxWidth&&"xs"!==s.maxWidth&&{[e.breakpoints.up(s.maxWidth)]:{maxWidth:`${e.breakpoints.values[s.maxWidth]}${e.breakpoints.unit}`}}));return o.forwardRef(function(e,s){let o=t(e),{className:l,component:c="div",disableGutters:u=!1,fixed:h=!1,maxWidth:p="lg"}=o,x=(0,i.Z)(o,g),v=(0,n.Z)({},o,{component:c,disableGutters:u,fixed:h,maxWidth:p}),f=S(v,r);return(0,m.jsx)(d,(0,n.Z)({as:c,ownerState:v,className:(0,a.Z)(f.root,l),ref:s},x))})}},89596:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var i=t(57437),n=t(23447),o=t(94547),a=t(80511),r=t(96537),d=t(44908),l=t(65786);let c=(0,t(68935).Z)();var u=t(44921),h=t(16463),m=t(2265),g=t(67022);(0,t(20920).Z)();let p={id:void 0,created:void 0,sessionName:"test session",sessionDescription:"a test session",sessionSlug:"test",creatorSub:void 0,joinCode:void 0,sessionPresentationUris:["/workshops/dev-testing/presentation.xml"],sessionStartTime:new Date,sessionDurationMins:20,remoteConfiguration:o.VS.InPerson,chimeMeetingDataId:void 0,chimeMeetingData:void 0,answers:[],audience:o.EQ.LiveWorkshop,facilitationState:o._y.Ready,fullScreen:!0,sessionStartedAt:void 0,facilitatorEmail:"lewis.westbury@nesta.org.uk",location:void 0,documentation:void 0,anticipatedParticipants:12,liveExperienceState:{slideX:0,slideY:0,videoSync:[],sequence:0,originator:"00000000-0000-0000-0000-000000000000"}},x=[{name:"Zeitgeist demo",description:"A Zeitgeist demonstration workshop.",slug:"zg-demo",alt:"Illustrative graphic",uris:["/workshops/zg-demo/presentation.xml"],remote:o.VS.Remote},{name:"Zeitgeist gallery",description:"A multi-module gallery workshop, illustrating the various input and visualisation components that the Zeitgeist platform offers.",slug:"zg-gallery",alt:"Illustrative graphic",uris:["/workshops/zg-welcome/presentation.xml","/workshops/zg-gallery/presentation.xml"],remote:o.VS.Remote},{name:"Options 2040 demo",description:"A demonstration session, illustrating The Strategy Room content, combined with Options 2040 branding.",slug:"options-demo",alt:"Illustrative graphic",uris:["/workshops/options-transport/presentation.xml"],remote:o.VS.Remote},{name:"DSIT demo",description:"An illustrative demo session, combining pre-existing content and DSIT branding.",slug:"dsit-demo",alt:"Illustrative graphic",uris:["/workshops/dsit-demo/presentation.xml"],remote:o.VS.Remote}],v=()=>S(x[0].name,x[0].description,x[0].uris,x[0].slug,x[0].alt,x[0].remote),S=(e,s,t,i,n,o)=>{let a=structuredClone(p);return a.sessionName=e,a.sessionDescription=s,a.remoteConfiguration=o,a.sessionPresentationUris=t,a.sessionSlug=i,a.sessionGraphic=void 0,a.sessionGraphicAltText=n,a};function f(){let[e,s]=(0,m.useState)([]),[t,f]=(0,m.useState)([]),[b,k]=(0,m.useState)(),[Z,j]=(0,m.useState)({sessionId:""}),[w,C]=(0,m.useState)(JSON.stringify(v(),null,2)),[y,N]=(0,m.useState)(!0),[A,I]=(0,m.useState)(!0),[R,D]=(0,m.useState)(!1),G=(0,m.useRef)(null);(0,h.useRouter)();let W=(0,g.aC)(),{api:_,start:E}=(0,m.useContext)(n.E);(0,m.useEffect)(()=>{void 0!==document&&(document.title="Zg Admin: Inspector")},[]);let O=()=>{G.current.disabled=!0,E(_.listDeliberationSessions(W.user.access_token,o.yI.All,void 0)).then(e=>{console.log("sessions",e),s(e)}).catch(e=>{console.error("error",e)}).finally(()=>{G.current.disabled=!1})},J=e=>{var s;E(_.getDeliberationSessionAdmin(e,null===(s=W.user)||void 0===s?void 0:s.access_token,void 0)).then(e=>{console.log("session",e),k(e),j({...Z,sessionId:e.id})}).catch(e=>{console.error("error",e)})};(0,m.useEffect)(()=>{C(JSON.stringify(b,null,2))},[b]);let T=e=>{E(_.postDeliberationSessionAdmin(W.user.access_token,e)).then(e=>{console.log("session",e),k(e),j({...Z,sessionId:e.id}),O()}).catch(e=>{console.error("error",e)})},z=e=>{E(_.putDeliberationSessionAdmin(W.user.access_token,e)).then(e=>{console.log("session",e),k(e),j({...Z,sessionId:e.id}),O()}).catch(e=>{console.error("error",e)})},M=(e,s)=>{k(p),j({...Z,sessionId:e}),J(e)},P=e=>{if(!e)return v();let s={...p};return s.id=void 0,s.answers=[],s.sessionName=e.sessionName+" (copy)",s.sessionDescription=e.sessionDescription,s.sessionGraphic=e.sessionGraphic,s.sessionSlug=e.sessionSlug,s.sessionPresentationUris=e.sessionPresentationUris,s.facilitationState=o._y.Ready,s.sessionStartedAt=void 0,s.sessionStartTime=new Date,s};return(0,m.useEffect)(()=>{f(e.filter(e=>e.audience!==o.EQ.AutomatedTests||!!R&&e.audience===o.EQ.AutomatedTests))},[e,y,A,R]),(0,i.jsxs)(c,{maxWidth:!1,children:[(0,i.jsx)(a.Z,{variant:"h1",children:"Zeitgeist admin"}),!!W.isAuthenticated&&(0,i.jsxs)(a.Z,{variant:"body2",children:["Signed in as: ",W.user.profile.email]}),(0,i.jsx)(a.Z,{variant:"body1",children:"A rough and ready admin backend."}),(0,i.jsxs)("p",{children:[!W.isAuthenticated&&(0,i.jsx)(r.Z,{variant:"contained",onClick:()=>{W.signinRedirect()},children:"Sign in"}),!!W.isAuthenticated&&(0,i.jsx)(r.Z,{variant:"outlined",onClick:()=>{W.signoutRedirect()},children:"Sign out"})]}),(0,i.jsxs)(a.Z,{variant:"h2",children:[e.length," Deliberation sessions"]}),(0,i.jsxs)("div",{children:[!!W.isAuthenticated&&(0,i.jsx)(r.Z,{variant:"contained",ref:G,onClick:()=>{O()},children:"Fetch"}),!W.isAuthenticated&&(0,i.jsx)("p",{children:"Sign in to fetch all sessions"})]}),(0,i.jsx)(d.Z,{control:(0,i.jsx)(l.Z,{checked:y,onChange:e=>{N(e.target.checked)}}),label:"Show public sessions"}),(0,i.jsx)(d.Z,{control:(0,i.jsx)(l.Z,{checked:A,onChange:e=>{I(e.target.checked)}}),label:"Show testing sessions"}),(0,i.jsx)(d.Z,{control:(0,i.jsx)(l.Z,{checked:R,onChange:e=>{D(e.target.checked)}}),label:"Show sessions for automatic testing"}),e.length>0&&(0,i.jsx)(u._,{autoHeight:!0,rows:t,columns:[{field:"id",headerName:"Id",width:300},{field:"sessionStartTime",headerName:"Starts",width:250,valueGetter:(e,s)=>new Date(e).toLocaleString()},{field:"sessionName",headerName:"Name",width:350},{field:"facilitationState",headerName:"State",width:100,valueGetter:(e,s)=>o._y[e]},{field:"joinCode",headerName:"Join code",width:100},{field:"remoteConfiguration",headerName:"Remote",width:150,valueGetter:(e,s)=>o.VS[e]}],onRowClick:e=>{M(e.row.id,e.row.joinCode)},initialState:{pagination:{paginationModel:{page:0,pageSize:25}}},pageSizeOptions:[25,50,75,100,150,200]}),(0,i.jsx)(a.Z,{variant:"h2",children:"Inspector"}),(0,i.jsx)(a.Z,{variant:"h3",children:"Get session"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("input",{name:"sessionId",type:"text",value:Z.sessionId,onChange:e=>{j({...Z,[e.target.name]:e.target.value})}}),(0,i.jsx)(r.Z,{variant:"contained",onClick:()=>{J(Z.sessionId)},children:"Get session"}),(0,i.jsx)("br",{})]}),(0,i.jsx)(a.Z,{variant:"h3",children:"Create session"}),(0,i.jsx)("p",{children:x.map((e,s)=>(0,i.jsxs)(r.Z,{variant:"outlined",onClick:()=>{k(S(e.name,e.description,e.uris,e.slug,e.alt,e.remote))},children:["New ",e.name]},"btn-new-".concat(e.name)))}),(0,i.jsxs)("div",{children:[(0,i.jsx)("textarea",{value:w,rows:24,cols:100,onChange:e=>{C(e.target.value)}}),W.isAuthenticated&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)(r.Z,{variant:"outlined",onClick:()=>{k(P(b))},children:"Duplicate session"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Z,{variant:"contained",onClick:()=>{console.log("currentSessionJson",w),T(JSON.parse(w))},disabled:!(()=>{try{return!!JSON.parse(null!=w?w:"{}")}catch(e){return!1}})(),children:"Create session"}),(0,i.jsx)(r.Z,{variant:"contained",onClick:()=>{console.log("currentSessionJson",w),z(JSON.parse(w))},disabled:!(()=>{try{var e;return(null===(e=JSON.parse(null!=w?w:"{}"))||void 0===e?void 0:e.id)!==void 0}catch(e){return!1}})(),children:"Update session"})]})]})]})}}},function(e){e.O(0,[3732,7761,4403,7357,7483,5221,4921,3447,2971,7023,1744],function(){return e(e.s=63780)}),_N_E=e.O()}]);