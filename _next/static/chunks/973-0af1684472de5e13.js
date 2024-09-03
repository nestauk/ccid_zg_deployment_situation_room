"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{60658:function(e,t,i){i.d(t,{L:function(){return s},P:function(){return o}});var n=i(2057);let s=e=>{let t=async()=>{var t;let i={method:e.method,headers:{"Content-Type":null!==(t=e.contentType)&&void 0!==t?t:"application/json"}};void 0!==e.body&&(i.body=JSON.stringify(e.body)),void 0!==e.accessToken&&(i.headers.Authorization="Bearer ".concat(e.accessToken)),void 0!==e.sessionToken&&(i.headers["X-Deliberation-Session-Token"]=e.sessionToken);let n=await fetch("".concat(e.baseUri).concat(e.path),i);if(n.ok)return JSON.parse(await n.text());throw n.statusText};return new n.Z({title:e.title,description:e.description,action:t,retries:e.indefinite?"indefinite":3,delay_ms:2e3,max_delay_ms:6e3,group:e.group,indicator:e.indicator})},o=(e,t,i,s)=>{if(0===e.size)throw"Blob is empty";let o=async()=>{console.debug("Ready to upload ".concat(e.size," bytes..."));let i=await fetch(t,{method:"PUT",headers:{"Content-Type":"application/octet-stream"},body:e});if(!i.ok)throw i.statusText;return console.debug("Upload complete."),{size:e.size,target:t,method:"PUT",response:i}};return new n.Z({title:"Put: ".concat(t),description:"".concat(e.size," bytes"),action:o,retries:i?"indefinite":3,delay_ms:2e3,indicator:s})}},2057:function(e,t,i){i.d(t,{Z:function(){return r},l:function(){return s}});var n,s,o=i(20920);(n=s||(s={}))[n.Ready=0]="Ready",n[n.Running=1]="Running",n[n.Success=2]="Success",n[n.Waiting=3]="Waiting",n[n.Failed=4]="Failed",n[n.Cancelled=5]="Cancelled";class r{isFinished(){return 2===this.state||4===this.state||5===this.state}getNextDelay(){var e,t,i;return Math.min((null!==(e=this.initProps.delay_ms)&&void 0!==e?e:0)*this.attempts,null!==(i=null!==(t=this.initProps.max_delay_ms)&&void 0!==t?t:this.initProps.delay_ms)&&void 0!==i?i:0)}constructor(e){this.attempts=0,this.state=0,this.id=(0,o.Z)(),this.initProps=e,this.group=e.group}}},1973:function(e,t,i){i.d(t,{E:function(){return l},Z:function(){return u}});var n=i(57437),s=i(2265),o=i(2057),r=i(94547),a=i(38628),c=i(60658);class d{getServerTime(){return(0,c.L)({baseUri:this.baseUri,title:"getServerTime",method:"GET",path:"/utils/servertime",indefinite:!0,indicator:"checking server time"})}postDeliberationSessionAdmin(e,t){return(0,c.L)({baseUri:this.baseUri,title:"postDeliberationSessionAdmin",method:"POST",path:"/sessions/admin",body:t,accessToken:e,indefinite:!0,indicator:"creating session"})}putDeliberationSessionAdmin(e,t){return(0,c.L)({baseUri:this.baseUri,title:"putDeliberationSessionAdmin",method:"PUT",path:"/sessions/admin/".concat(t.id),body:t,accessToken:e,indefinite:!0,indicator:"updating session"})}postFacilitatorAction(e,t,i){let n=!(arguments.length>3)||void 0===arguments[3]||arguments[3];return console.debug("Action",i),(0,c.L)({baseUri:this.baseUri,title:"postFacilitatorAction",description:i.action,method:"POST",path:"/sessions/admin/actions/".concat(i.sessionId),body:i,group:"postFacilitatorAction.".concat(i.action),accessToken:e,sessionToken:t,indefinite:n,indicator:(0,a.Tj)(i)})}getDeliberationSessionAdmin(e,t,i){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationSessionAdmin",description:"with access token",method:"GET",path:"/sessions/admin/".concat(e),accessToken:t,group:i,indefinite:!0,indicator:"checking workshop state"})}listDeliberationSessions(e,t,i){return(0,c.L)({baseUri:this.baseUri,title:"listDeliberationSessions",description:r.yI[t],method:"GET",path:"/sessions/list/".concat(r.yI[t]),accessToken:e,group:i,indefinite:!0,indicator:"listing sessions"})}getDeliberationSession(e,t){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationSession",method:"GET",path:"/sessions/".concat(e),group:t,indefinite:!0,indicator:"checking workshop state"})}postMeetingJoinRequest(e,t,i,n,s){return(0,c.L)({baseUri:this.baseUri,title:"postMeetingJoinRequest",method:"POST",path:s?"/sessions/admin/".concat(e,"/attendee"):"/sessions/".concat(e,"/attendee"),body:{name:n,participantId:i},sessionToken:t,accessToken:s,indefinite:!0,indicator:"joining video call"})}exchangeJoinCodeForSessionToken(e){return(0,c.L)({baseUri:this.baseUri,title:"exchangeJoinCodeForSessionToken",method:"POST",path:"/sessions/".concat(e.sessionId,"/token"),body:e,indefinite:!0,indicator:"checking join code"})}postDeliberationAnswer(e,t,i){let n=t.questionId;return(0,c.L)({baseUri:this.baseUri,title:"postDeliberationAnswer",method:"POST",path:"/sessions/".concat(e,"/questions/").concat(n,"/answers"),body:t,sessionToken:i,indefinite:!0,indicator:"sending answer"})}getDeliberationAnswer(e,t,i,n,s){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswer",method:"GET",path:"/sessions/".concat(e,"/questions/").concat(t,"/answers?pid=").concat(i),sessionToken:n,group:s,indefinite:!0,indicator:void 0})}getDeliberationAnswersForQuestion(e,t,i,n){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswersForQuestion",method:"GET",path:"/sessions/".concat(e,"/questions/").concat(t,"/answers"),sessionToken:i,group:n,indefinite:!0,indicator:void 0})}getDeliberationAnswersForParticipant(e,t,i,n){return(0,c.L)({baseUri:this.baseUri,title:"getDeliberationAnswersForParticipant",method:"GET",path:"/sessions/".concat(e,"/participants/").concat(t,"/answers"),sessionToken:i,group:n,indefinite:!0,indicator:void 0})}postWorkshopContentAccessRequest(e,t,i){return(0,c.L)({baseUri:this.baseUri,title:"postWorkshopContentAccessRequest",description:"".concat(i.objectKeys.length," items"),method:"POST",path:"/sessions/".concat(e,"/content"),body:i,sessionToken:t,indefinite:!0,indicator:void 0})}postPublicContentAccessRequest(e,t){return(0,c.L)({baseUri:this.baseUri,title:"postPublicContentAccessRequest",description:"".concat(t.workshopDirectory),method:"POST",path:"/sessions/".concat(e,"/content/public"),body:t,indefinite:!0,indicator:void 0})}getReport(e,t,i){return(0,c.L)({baseUri:this.baseUri,title:"getReport",description:r.gY[i],method:"GET",path:"/sessions/admin/".concat(e,"/report/").concat(r.gY[i]),accessToken:t,indefinite:!0,indicator:"retrieving report"})}getMediaUploadUrl(e,t,i,n,s,o){return(0,c.L)({baseUri:this.baseUri,title:"getMediaUploadUrl",method:"POST",path:"/sessions/admin/".concat(e,"/upload"),body:{sessionId:e,section:n,filenamePart:s,filenameSuffix:o},accessToken:i,sessionToken:t,indefinite:!0,indicator:"preparing to upload"})}constructor(e){this.baseUri=e}}let l=(0,s.createContext)({});function u(e){let[t,i]=(0,s.useState)(new d("https://hf3n3vkh6g.execute-api.eu-west-2.amazonaws.com/prod")),[r,a]=(0,s.useState)([]),[c,u]=(0,s.useState)([]),[p,h]=(0,s.useState)([]),[g,m]=(0,s.useState)([]),[b,f]=(0,s.useState)([]),[w,y]=(0,s.useState)([]),[T,S]=(0,s.useState)([]),[U,k]=(0,s.useState)(0),v=(0,s.useCallback)(async e=>(console.debug("Adding task: ".concat(e.initProps.title)),a(t=>[...t,e]),k(new Date().getTime()),A(e)),[r,a,U,k]);(0,s.useEffect)(()=>{new Set(r.map(e=>e.group).filter(e=>r.filter(t=>t.group===e&&!t.isFinished()).length>1)).forEach(e=>{let t=r.filter(t=>t.group===e&&!t.isFinished()&&void 0!==t.started).toSorted((e,t)=>t.started.getTime()-e.started.getTime())[0],i=r.filter(i=>i.group===e&&i.id!==t.id);i.length>0&&(console.debug("".concat(i.length," tasks with group '").concat(e,"' for cancellation.")),i.forEach(e=>e.state=o.l.Cancelled),k(new Date().getTime()))})},[r]),(0,s.useEffect)(()=>{u([...r.filter(e=>e.state===o.l.Ready)]),h([...r.filter(e=>e.state===o.l.Running)]),m([...r.filter(e=>e.state===o.l.Waiting)]),f([...r.filter(e=>e.state===o.l.Success)]),y([...r.filter(e=>e.state===o.l.Failed)]),S([...r.filter(e=>e.state===o.l.Cancelled)])},[r,U]);let A=(0,s.useCallback)(async e=>{do try{e.state=o.l.Running,e.started=new Date,k(new Date().getTime()),e.attempts++,e.promise=e.initProps.action(),e.result=await e.promise,e.state=o.l.Success,k(new Date().getTime())}catch(t){e.error=t,e.attempts<=("indefinite"===e.initProps.retries?50:e.initProps.retries)?(e.state=o.l.Waiting,k(new Date().getTime()),console.warn("Task ".concat(e.initProps.title," will retry in ").concat(e.getNextDelay(),"ms"),t),await new Promise(t=>setTimeout(t,e.getNextDelay()))):(e.state=o.l.Failed,console.error("Task ".concat(e.initProps.title," failed"),t),k(new Date().getTime()))}while(e.state===o.l.Waiting);switch(e.state){case o.l.Success:return e.result;case o.l.Failed:throw e.error;default:throw"Task state: ".concat(o.l[e.state])}},[r,a,U,k]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Provider,{value:{api:t,start:v,tasks:r,readyTasks:c,runningTasks:p,waitingTasks:g,succeededTasks:b,failedTasks:w,cancelledTasks:T},children:e.children})})}},94547:function(e,t,i){var n,s,o,r,a,c,d,l,u,p,h,g,m,b,f,w,y,T;i.d(t,{EQ:function(){return s},SC:function(){return l},VS:function(){return r},_b:function(){return n},_y:function(){return o},gY:function(){return c},tB:function(){return u},um:function(){return a},yI:function(){return d}}),(p=n||(n={}))[p.Controller=0]="Controller",p[p.Client=1]="Client",(h=s||(s={}))[h.LiveWorkshop=0]="LiveWorkshop",h[h.AutomatedTests=1]="AutomatedTests",h[h.TestingWorkshop=2]="TestingWorkshop",h[h.DemoWorkshop=3]="DemoWorkshop",(g=o||(o={}))[g.Absent=0]="Absent",g[g.Ready=1]="Ready",g[g.Open=2]="Open",g[g.Closed=3]="Closed",(m=r||(r={}))[m.InPerson=0]="InPerson",m[m.Remote=1]="Remote",m[m.RemoteWithVideoCall=2]="RemoteWithVideoCall",(b=a||(a={}))[b.Offline=0]="Offline",b[b.Online=1]="Online",b[b.Connecting=2]="Connecting",b[b.Connected=3]="Connected",b[b.Joining=4]="Joining",b[b.Joined=5]="Joined",b[b.Disconnecting=6]="Disconnecting",b[b.Disconnected=7]="Disconnected",b[b.Error=8]="Error",(f=c||(c={}))[f.ContactAndConsent=0]="ContactAndConsent",f[f.EnjoymentAndSatisfaction=1]="EnjoymentAndSatisfaction",f[f.FullReport_v1=2]="FullReport_v1",f[f.FullReport_v2=3]="FullReport_v2",f[f.FullReport_v3=4]="FullReport_v3",(w=d||(d={}))[w.All=0]="All",w[w.Upcoming=1]="Upcoming",w[w.Past=2]="Past",w[w.Answered=3]="Answered",(y=l||(l={})).facilitators="facilitators",y.analysts="analysts",y.administrators="administrators",(T=u||(u={}))[T.NotStarted=0]="NotStarted",T[T.Playing=1]="Playing",T[T.Paused=2]="Paused",T[T.Ended=3]="Ended"},38628:function(e,t,i){i.d(t,{T2:function(){return o},Tj:function(){return n},v5:function(){return s}});let n=e=>{switch(e.action){case"close":return"closing workshop";case"fullscreen":return"adjusting workshop settings";case"init-meeting":return"renewing video call";case"open":return"opening workshop";case"refresh-all":return"refreshing";case"reset":return"opening waiting room";case"set-slide-position":return"updating position";case"set-video-sync":return"synchronising video";default:return e.action}},s=(e,t,i,n,s)=>e.postFacilitatorAction(t,i,{action:"fullscreen",sessionId:n,parameters:{full:s}}),o=(e,t,i,n,s)=>e.postFacilitatorAction(t,i,{action:s,sessionId:n})}}]);