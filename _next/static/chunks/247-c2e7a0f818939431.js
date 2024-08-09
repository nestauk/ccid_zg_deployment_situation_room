"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{69026:function(e,t,n){n.d(t,{N:function(){return s},Z:function(){return i}});var o=n(94547);let s=(e,t)=>{let{sid:n,pid:o,qid:s}=e;return{id:void 0,created:void 0,questionId:s,participantId:o,jsonValue:void 0,mimeType:void 0,pII:t}};class i{async getServerTime(){return console.debug("getServerTime"),new Promise(async(e,t)=>{let n=await fetch("".concat(this.baseUri,"/utils/servertime"),{method:"GET",headers:{"Content-Type":"application/json"}});n.ok?e(JSON.parse(await n.text())):t(n.statusText)})}async postDeliberationSessionAdmin(e,t){return console.debug("postDeliberationSessionAdmin"),new Promise(async(n,o)=>{let s={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/admin"),s);i.ok?n(JSON.parse(await i.text())):o(i.statusText)})}async putDeliberationSessionAdmin(e,t){return console.debug("putDeliberationSessionAdmin"),new Promise(async(n,o)=>{let s={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(t.id),s);i.ok?n(JSON.parse(await i.text())):o(i.statusText)})}async postFacilitatorAction(e,t,n){return console.debug("postFacilitatorAction",n.action),new Promise(async(o,s)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t,Authorization:"Bearer ".concat(e)},body:JSON.stringify(n)},a=await fetch("".concat(this.baseUri,"/sessions/admin/actions/").concat(n.sessionId),i);a.ok?o(JSON.parse(await a.text())):s(a.statusText)})}async getDeliberationSessionAdmin(e,t){return console.debug("getDeliberationSessionAdmin",e,t?"(with access token)":""),new Promise(async(n,o)=>{let s={method:"GET",headers:{"Content-Type":"application/json"}};t&&(s.headers.Authorization="Bearer ".concat(t));let i=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(e),s);i.ok?n(JSON.parse(await i.text())):o(i.statusText)})}async listDeliberationSessions(e,t){console.debug("listDeliberationSessions",o.yI[t]);let n=await fetch("".concat(this.baseUri,"/sessions/list/").concat(o.yI[t]),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(n.ok){let e=JSON.parse(await n.text());return console.debug("Retrieved ".concat(e.length," sessions")),e}throw n.statusText}async getDeliberationSession(e,t){return console.debug("getDeliberationSession",e,t?"(with access token)":""),new Promise(async(n,o)=>{let s={method:"GET",headers:{"Content-Type":"application/json"}};t&&(s.headers.Authorization="Bearer ".concat(t));let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e),s);i.ok?n(JSON.parse(await i.text())):o(i.statusText)})}async retrieveMeetingAttendeeData(e,t,n,o,s){console.debug("getDeliberationSessionMeeting");let i={name:o,participantId:n};return new Promise(async(n,o)=>{let a="".concat(this.baseUri,"/sessions/").concat(e,"/attendee"),r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(i)};s&&(r.headers.Authorization="Bearer ".concat(s),a="".concat(this.baseUri,"/sessions/admin/").concat(e,"/attendee"));let c=await fetch(a,r);c.ok?n(JSON.parse(await c.text())):o(c.statusText)})}async exchangeJoinCodeForSessionToken(e){return console.debug("exchangeJoinCodeForSessionToken"),new Promise(async(t,n)=>{let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},s=e.sessionId,i=await fetch("".concat(this.baseUri,"/sessions/").concat(s,"/token"),o);i.ok?t(JSON.parse(await i.text())):n(i.statusText)})}async postDeliberationAnswer(e,t,n){console.debug("postDeliberationAnswer",t);let o=t.questionId;return new Promise(async(s,i)=>{let a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(o,"/answers"),a);r.ok?s(JSON.parse(await r.text())):i(r.statusText)})}async getDeliberationAnswer(e,t,n,o){return console.debug("getDeliberationAnswer",e,t,n),new Promise(async(s,i)=>{let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers?pid=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":o}});if(a.ok){let o=JSON.parse(await a.text());o.length>1&&i("".concat(o.length," answers returned for sid: ").concat(e,", qid: ").concat(t,", pid: ").concat(n," - there should be 0 or 1")),s(0==o.length?null:o[0])}else i(a.statusText)})}async getDeliberationAnswersForQuestion(e,t,n){return console.debug("getDeliberationAnswersForQuestion",e,t),new Promise(async(o,s)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});i.ok?o(JSON.parse(await i.text())):s(i.statusText)})}async getDeliberationAnswersForParticipant(e,t,n){return console.debug("getDeliberationAnswersForParticipant",e,t),new Promise(async(o,s)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/participants/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});i.ok?o(JSON.parse(await i.text())):s(i.statusText)})}async getSessionContentAccessUrls(e,t,n){return console.debug("Retrieving ".concat(n.objectKeys.length," session content access URLs...")),new Promise(async(o,s)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(n)},a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content"),i);a.ok?o(JSON.parse(await a.text())):s(a.statusText)})}async getPublicContentAccessUrls(e,t){return console.debug("Retrieving public content access URLs for ".concat(t.workshopDirectory,"...")),new Promise(async(n,o)=>{let s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content/public"),s);i.ok?n(JSON.parse(await i.text())):o(i.statusText)})}async getReport(e,t,n){console.debug("getReport",e,o.gY[n]);let s="".concat(this.baseUri,"/sessions/admin/").concat(e,"/report/").concat(o.gY[n]),i=await fetch(s,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});if(i.ok)return JSON.parse(await i.text());throw i.statusText}async getMediaUploadUrl(e,t,n,o,s,i){console.debug("getMediaUploadUrl");let a="".concat(this.baseUri,"/sessions/admin/").concat(e,"/upload"),r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify({sessionId:e,section:o,filenamePart:s,filenameSuffix:i})};r.headers.Authorization="Bearer ".concat(n);let c=await fetch(a,r);if(c.ok)return JSON.parse(await c.text());throw c.statusText}async putBlob(e,t){if(console.debug("putBlob",t),0===e.size)throw"Blob is empty";console.debug("Ready to upload ".concat(e.size," bytes..."));let n=await fetch(t,{method:"PUT",headers:{"Content-Type":"application/octet-stream"},body:e});if(n.ok)return!0;throw n.statusText}constructor(e){this.baseUri=e}}},58253:function(e,t,n){n.d(t,{A:function(){return a},Z:function(){return r}});var o=n(57437),s=n(2265),i=n(69026);let a=(0,s.createContext)({});function r(e){let{baseUrl:t,children:n}=e,r=null!=t?t:"https://hf3n3vkh6g.execute-api.eu-west-2.amazonaws.com/prod";if(!r)throw"No base url found for Zeitgeist API";let[c,l]=(0,s.useState)(new i.Z(r));return(0,o.jsx)(a.Provider,{value:c,children:n})}},94547:function(e,t,n){var o,s,i,a,r,c,l,d,u,h,p,b,y,S,T,w;n.d(t,{EQ:function(){return s},SC:function(){return d},VS:function(){return a},_b:function(){return o},_y:function(){return i},gY:function(){return c},um:function(){return r},yI:function(){return l}}),(u=o||(o={}))[u.Controller=0]="Controller",u[u.Client=1]="Client",(h=s||(s={}))[h.LiveWorkshop=0]="LiveWorkshop",h[h.AutomatedTests=1]="AutomatedTests",h[h.TestingWorkshop=2]="TestingWorkshop",h[h.DemoWorkshop=3]="DemoWorkshop",(p=i||(i={}))[p.Absent=0]="Absent",p[p.Ready=1]="Ready",p[p.Open=2]="Open",p[p.Closed=3]="Closed",(b=a||(a={}))[b.InPerson=0]="InPerson",b[b.Remote=1]="Remote",b[b.RemoteWithVideoCall=2]="RemoteWithVideoCall",(y=r||(r={}))[y.Offline=0]="Offline",y[y.Online=1]="Online",y[y.Connecting=2]="Connecting",y[y.Connected=3]="Connected",y[y.Joining=4]="Joining",y[y.Joined=5]="Joined",y[y.Disconnecting=6]="Disconnecting",y[y.Disconnected=7]="Disconnected",y[y.Error=8]="Error",(S=c||(c={}))[S.ContactAndConsent=0]="ContactAndConsent",S[S.EnjoymentAndSatisfaction=1]="EnjoymentAndSatisfaction",(T=l||(l={}))[T.All=0]="All",T[T.Upcoming=1]="Upcoming",T[T.Past=2]="Past",T[T.Answered=3]="Answered",(w=d||(d={})).facilitators="facilitators",w.analysts="analysts",w.administrators="administrators"},75511:function(e,t,n){n.d(t,{z:function(){return s}});var o,s,i=n(37836),a=n.n(i);(o=s||(s={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",o.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",o.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",o.Content_Progress_Update="CONTENT_PROGRESS_UPDATE";let r=new(a()),c={on:(e,t)=>r.on(e,t),once:(e,t)=>r.once(e,t),off:(e,t)=>r.off(e,t),emit:e=>r.emit(e.type,e)};Object.freeze(c),t.Z=c}}]);