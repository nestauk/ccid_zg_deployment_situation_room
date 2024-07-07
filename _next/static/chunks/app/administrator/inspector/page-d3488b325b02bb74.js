(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{78005:function(e,t,s){Promise.resolve().then(s.bind(s,29655))},29655:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var n=s(57437),i=s(2265),o=s(69026),a=s(80511),r=s(76548),c=s(44908),l=s(65786),d=s(20920),u=s(95107),h=s(16463),p=s(67022),m=s(94547),g=s(3146);(0,d.Z)();let S={id:void 0,created:void 0,sessionName:"test session",sessionDescription:"a test session",sessionSlug:"test",creatorSub:void 0,joinCode:void 0,sessionPresentationUris:["/workshops/dev-testing/presentation.xml"],sessionStartTime:new Date,sessionDurationMins:20,remoteConfiguration:m.VS.InPerson,chimeMeetingDataId:void 0,chimeMeetingData:void 0,answers:[],audience:m.EQ.Public,facilitationState:m._y.Ready,fullScreen:!0,sessionStartedAt:void 0,facilitatorEmail:"lewis.westbury@nesta.org.uk",location:void 0,documentation:void 0,anticipatedParticipants:12},b=[{name:"Zeitgeist demo",description:"A Zeitgeist demonstration workshop.",slug:"zg-demo",alt:"Illustrative graphic",uris:["/workshops/zg-demo/presentation.xml"],remote:m.VS.Remote},{name:"Zeitgeist gallery",description:"A multi-module gallery workshop, illustrating the various input and visualisation components that the Zeitgeist platform offers.",slug:"zg-gallery",alt:"Illustrative graphic",uris:["/workshops/zg-welcome/presentation.xml","/workshops/zg-gallery/presentation.xml"],remote:m.VS.Remote},{name:"Options 2040 demo",description:"A demonstration session, illustrating The Strategy Room content, combined with Options 2040 branding.",slug:"options-demo",alt:"Illustrative graphic",uris:["/workshops/options-transport/presentation.xml"],remote:m.VS.Remote},{name:"DSIT demo",description:"An illustrative demo session, combining pre-existing content and DSIT branding.",slug:"dsit-demo",alt:"Illustrative graphic",uris:["/workshops/dsit-demo/presentation.xml"],remote:m.VS.Remote}],w=()=>y(b[0].name,b[0].description,b[0].uris,b[0].slug,b[0].alt,b[0].remote),y=(e,t,s,n,i,o)=>{let a=structuredClone(S);return a.sessionName=e,a.sessionDescription=t,a.remoteConfiguration=o,a.sessionPresentationUris=s,a.sessionSlug=n,a.sessionGraphic=void 0,a.sessionGraphicAltText=i,a};function f(){let[e,t]=(0,i.useState)([]),[s,d]=(0,i.useState)([]),[f,x]=(0,i.useState)(),[T,v]=(0,i.useState)({sessionId:""}),[k,C]=(0,i.useState)(JSON.stringify(w(),null,2)),[j,D]=(0,i.useState)(!0),[A,O]=(0,i.useState)(!0),[N,P]=(0,i.useState)(!1),J=(0,i.useRef)(null);(0,h.useRouter)();let Z=(0,p.aC)(),I=new o.Z("https://bn6162p474.execute-api.eu-west-2.amazonaws.com/prod");(0,i.useEffect)(()=>{void 0!==document&&(document.title="Zg Admin: Inspector")},[]);let U=()=>{J.current.disabled=!0,I.listDeliberationSessions(Z.user.access_token).then(e=>{console.log("sessions",e),t(e)}).catch(e=>{console.error("error",e)}).finally(()=>{J.current.disabled=!1})},R=e=>{var t;I.getDeliberationSessionAdmin(e,null===(t=Z.user)||void 0===t?void 0:t.access_token).then(e=>{console.log("session",e),x(e),v({...T,sessionId:e.id})}).catch(e=>{console.error("error",e)})};(0,i.useEffect)(()=>{C(JSON.stringify(f,null,2))},[f]);let E=e=>{I.postDeliberationSessionAdmin(Z.user.access_token,e).then(e=>{console.log("session",e),x(e),v({...T,sessionId:e.id}),U()}).catch(e=>{console.error("error",e)})},G=e=>{I.putDeliberationSessionAdmin(Z.user.access_token,e).then(e=>{console.log("session",e),x(e),v({...T,sessionId:e.id}),U()}).catch(e=>{console.error("error",e)})},_=(e,t)=>{x(S),v({...T,sessionId:e}),R(e)},z=e=>{if(!e)return w();let t={...S};return t.id=void 0,t.answers=[],t.sessionName=e.sessionName+" (copy)",t.sessionDescription=e.sessionDescription,t.sessionGraphic=e.sessionGraphic,t.sessionSlug=e.sessionSlug,t.sessionPresentationUris=e.sessionPresentationUris,t.facilitationState=m._y.Ready,t.sessionStartedAt=void 0,t.sessionStartTime=new Date,t};return(0,i.useEffect)(()=>{d(e.filter(e=>!!j&&e.audience===m.EQ.Public||!!A&&e.audience===m.EQ.ManualTesting||!!N&&e.audience===m.EQ.AutomatedTests))},[e,j,A,N]),(0,n.jsxs)(g.Z,{maxWidth:!1,children:[(0,n.jsx)(a.Z,{variant:"h1",children:"Zeitgeist admin"}),!!Z.isAuthenticated&&(0,n.jsxs)(a.Z,{variant:"body2",children:["Signed in as: ",Z.user.profile.email]}),(0,n.jsx)(a.Z,{variant:"body1",children:"A rough and ready admin backend."}),(0,n.jsxs)("p",{children:[!Z.isAuthenticated&&(0,n.jsx)(r.Z,{variant:"contained",onClick:()=>{Z.signinRedirect()},children:"Sign in"}),!!Z.isAuthenticated&&(0,n.jsx)(r.Z,{variant:"outlined",onClick:()=>{Z.signoutRedirect()},children:"Sign out"})]}),(0,n.jsxs)(a.Z,{variant:"h2",children:[e.length," Deliberation sessions"]}),(0,n.jsxs)("div",{children:[!!Z.isAuthenticated&&(0,n.jsx)(r.Z,{variant:"contained",ref:J,onClick:()=>{U()},children:"Fetch"}),!Z.isAuthenticated&&(0,n.jsx)("p",{children:"Sign in to fetch all sessions"})]}),(0,n.jsx)(c.Z,{control:(0,n.jsx)(l.Z,{checked:j,onChange:e=>{D(e.target.checked)}}),label:"Show public sessions"}),(0,n.jsx)(c.Z,{control:(0,n.jsx)(l.Z,{checked:A,onChange:e=>{O(e.target.checked)}}),label:"Show testing sessions"}),(0,n.jsx)(c.Z,{control:(0,n.jsx)(l.Z,{checked:N,onChange:e=>{P(e.target.checked)}}),label:"Show sessions for automatic testing"}),e.length>0&&(0,n.jsx)(u._,{autoHeight:!0,rows:s,columns:[{field:"id",headerName:"Id",width:300},{field:"sessionStartTime",headerName:"Starts",width:250,valueGetter:(e,t)=>new Date(e).toLocaleString()},{field:"sessionName",headerName:"Name",width:350},{field:"facilitationState",headerName:"State",width:100,valueGetter:(e,t)=>m._y[e]},{field:"joinCode",headerName:"Join code",width:100},{field:"remoteConfiguration",headerName:"Remote",width:150,valueGetter:(e,t)=>m.VS[e]}],onRowClick:e=>{_(e.row.id,e.row.joinCode)},initialState:{pagination:{paginationModel:{page:0,pageSize:25}}},pageSizeOptions:[25,50,75,100,150,200]}),(0,n.jsx)(a.Z,{variant:"h2",children:"Inspector"}),(0,n.jsx)(a.Z,{variant:"h3",children:"Get session"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("input",{name:"sessionId",type:"text",value:T.sessionId,onChange:e=>{v({...T,[e.target.name]:e.target.value})}}),(0,n.jsx)(r.Z,{variant:"contained",onClick:()=>{R(T.sessionId)},children:"Get session"}),(0,n.jsx)("br",{})]}),(0,n.jsx)(a.Z,{variant:"h3",children:"Create session"}),(0,n.jsx)("p",{children:b.map((e,t)=>(0,n.jsxs)(r.Z,{variant:"outlined",onClick:()=>{x(y(e.name,e.description,e.uris,e.slug,e.alt,e.remote))},children:["New ",e.name]},"btn-new-".concat(e.name)))}),(0,n.jsxs)("div",{children:[(0,n.jsx)("textarea",{value:k,rows:24,cols:100,onChange:e=>{C(e.target.value)}}),Z.isAuthenticated&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)(r.Z,{variant:"outlined",onClick:()=>{x(z(f))},children:"Duplicate session"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.Z,{variant:"contained",onClick:()=>{console.log("currentSessionJson",k),E(JSON.parse(k))},disabled:!(()=>{try{return!!JSON.parse(null!=k?k:"{}")}catch(e){return!1}})(),children:"Create session"}),(0,n.jsx)(r.Z,{variant:"contained",onClick:()=>{console.log("currentSessionJson",k),G(JSON.parse(k))},disabled:!(()=>{try{var e;return(null===(e=JSON.parse(null!=k?k:"{}"))||void 0===e?void 0:e.id)!==void 0}catch(e){return!1}})(),children:"Update session"})]})]})]})}},69026:function(e,t,s){"use strict";s.d(t,{N:function(){return n},Z:function(){return i}});let n=(e,t)=>{let{sid:s,pid:n,qid:i}=e;return{id:void 0,created:void 0,questionId:i,participantId:n,jsonValue:void 0,mimeType:void 0,pII:t}};class i{async getServerTime(){return console.debug("getServerTime"),new Promise(async(e,t)=>{let s=await fetch("".concat(this.baseUri,"/utils/servertime"),{method:"GET",headers:{"Content-Type":"application/json"}});s.ok?e(JSON.parse(await s.text())):t(s.statusText)})}async postDeliberationSessionAdmin(e,t){return console.debug("postDeliberationSessionAdmin"),new Promise(async(s,n)=>{let i={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},o=await fetch("".concat(this.baseUri,"/sessions/admin"),i);o.ok?s(JSON.parse(await o.text())):n(o.statusText)})}async putDeliberationSessionAdmin(e,t){return console.debug("putDeliberationSessionAdmin"),new Promise(async(s,n)=>{let i={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},o=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(t.id),i);o.ok?s(JSON.parse(await o.text())):n(o.statusText)})}async postFacilitatorAction(e,t,s){return console.debug("postFacilitatorAction",s.action),new Promise(async(n,i)=>{let o={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t,Authorization:"Bearer ".concat(e)},body:JSON.stringify(s)},a=await fetch("".concat(this.baseUri,"/sessions/admin/actions/").concat(s.sessionId),o);a.ok?n(JSON.parse(await a.text())):i(a.statusText)})}async getDeliberationSessionAdmin(e,t){return console.debug("getDeliberationSessionAdmin",e,t?"(with access token)":""),new Promise(async(s,n)=>{let i={method:"GET",headers:{"Content-Type":"application/json"}};t&&(i.headers.Authorization="Bearer ".concat(t));let o=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(e),i);o.ok?s(JSON.parse(await o.text())):n(o.statusText)})}async listDeliberationSessions(e){return console.debug("listDeliberationSessions"),new Promise(async(t,s)=>{let n=await fetch("".concat(this.baseUri,"/sessions"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});n.ok?t(JSON.parse(await n.text())):s(n.statusText)})}async getDeliberationSession(e,t){return console.debug("getDeliberationSession",e,t?"(with access token)":""),new Promise(async(s,n)=>{let i={method:"GET",headers:{"Content-Type":"application/json"}};t&&(i.headers.Authorization="Bearer ".concat(t));let o=await fetch("".concat(this.baseUri,"/sessions/").concat(e),i);o.ok?s(JSON.parse(await o.text())):n(o.statusText)})}async retrieveMeetingAttendeeData(e,t,s,n,i){console.debug("getDeliberationSessionMeeting");let o={name:n,participantId:s};return new Promise(async(s,n)=>{let a="".concat(this.baseUri,"/sessions/").concat(e,"/attendee"),r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(o)};i&&(r.headers.Authorization="Bearer ".concat(i),a="".concat(this.baseUri,"/sessions/admin/").concat(e,"/attendee"));let c=await fetch(a,r);c.ok?s(JSON.parse(await c.text())):n(c.statusText)})}async exchangeJoinCodeForSessionToken(e){return console.debug("exchangeJoinCodeForSessionToken"),new Promise(async(t,s)=>{let n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},i=e.sessionId,o=await fetch("".concat(this.baseUri,"/sessions/").concat(i,"/token"),n);o.ok?t(JSON.parse(await o.text())):s(o.statusText)})}async postDeliberationAnswer(e,t,s){console.debug("postDeliberationAnswer",t);let n=t.questionId;return new Promise(async(i,o)=>{let a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(n,"/answers"),a);r.ok?i(JSON.parse(await r.text())):o(r.statusText)})}async getDeliberationAnswer(e,t,s,n){return console.debug("getDeliberationAnswer",e,t,s),new Promise(async(i,o)=>{let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers?pid=").concat(s),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});if(a.ok){let n=JSON.parse(await a.text());n.length>1&&o("".concat(n.length," answers returned for sid: ").concat(e,", qid: ").concat(t,", pid: ").concat(s," - there should be 0 or 1")),i(0==n.length?null:n[0])}else o(a.statusText)})}async getDeliberationAnswersForQuestion(e,t,s){return console.debug("getDeliberationAnswersForQuestion",e,t),new Promise(async(n,i)=>{let o=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s}});o.ok?n(JSON.parse(await o.text())):i(o.statusText)})}async getDeliberationAnswersForParticipant(e,t,s){return console.debug("getDeliberationAnswersForParticipant",e,t),new Promise(async(n,i)=>{let o=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/participants/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s}});o.ok?n(JSON.parse(await o.text())):i(o.statusText)})}async getSessionContentAccessUrls(e,t,s){return console.debug("Retrieving ".concat(s.objectKeys.length," session content access URLs...")),new Promise(async(n,i)=>{let o={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(s)},a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content"),o);a.ok?n(JSON.parse(await a.text())):i(a.statusText)})}async getPublicContentAccessUrls(e,t){return console.debug("Retrieving public content access URLs for ".concat(t.workshopDirectory,"...")),new Promise(async(s,n)=>{let i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},o=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content/public"),i);o.ok?s(JSON.parse(await o.text())):n(o.statusText)})}constructor(e){this.baseUri=e}}},94547:function(e,t,s){"use strict";var n,i,o,a,r,c,l,d,u,h;s.d(t,{EQ:function(){return i},VS:function(){return a},_b:function(){return n},_y:function(){return o},um:function(){return r}}),(c=n||(n={}))[c.Controller=0]="Controller",c[c.Client=1]="Client",(l=i||(i={}))[l.Public=0]="Public",l[l.AutomatedTests=1]="AutomatedTests",l[l.ManualTesting=2]="ManualTesting",(d=o||(o={}))[d.Absent=0]="Absent",d[d.Ready=1]="Ready",d[d.Open=2]="Open",d[d.Closed=3]="Closed",(u=a||(a={}))[u.InPerson=0]="InPerson",u[u.Remote=1]="Remote",u[u.RemoteWithVideoCall=2]="RemoteWithVideoCall",(h=r||(r={}))[h.Offline=0]="Offline",h[h.Online=1]="Online",h[h.Connecting=2]="Connecting",h[h.Connected=3]="Connected",h[h.Joining=4]="Joining",h[h.Joined=5]="Joined",h[h.Disconnecting=6]="Disconnecting",h[h.Disconnected=7]="Disconnected",h[h.Error=8]="Error"}},function(e){e.O(0,[292,887,403,314,453,280,516,545,971,23,744],function(){return e(e.s=78005)}),_N_E=e.O()}]);