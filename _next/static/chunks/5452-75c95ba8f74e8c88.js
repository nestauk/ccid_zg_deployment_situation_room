"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5452],{79418:function(e,n,t){function i(e){if(null!=e)return parseInt(e)}function o(e){return!0===e||!1===e?e:"true"===e||"false"===e?"true"===e:"t"===e||"f"===e?"t"===e:(1===e||0===e)&&1===e}t.d(n,{LC:function(){return i},gx:function(){return o},zW:function(){return function e(n){if(n instanceof Array)return n.map(function(n){return"object"==typeof n&&(n=e(n)),n});{let t={};for(let i in n)if(n.hasOwnProperty(i)){let o=(i.charAt(0).toLowerCase()+i.slice(1)||i).toString(),r=n[i];(r instanceof Array||null!==r&&r.constructor===Object)&&(r=e(r)),t[o]=r}return t}}}})},11144:function(e,n,t){t.d(n,{Z:function(){return f},z:function(){return d}});var i=t(57437),o=t(2265),r=t(79418),s=t(94547),a=t(83593),l=t(5085),c=t(37570),u=t(23447);let d=(0,o.createContext)({});function f(e){let n=(0,o.useContext)(c.H),[t,f]=(0,o.useState)(n.session),[x,m]=(0,o.useState)(n.graphic),{api:h,start:g}=(0,o.useContext)(u.E),v=(0,o.useContext)(l.rZ),S=async()=>{console.debug("Refresh session...");try{v.role===s._b.Controller?f(await g(h.getDeliberationSessionAdmin(n.sid,v.user.access_token,"live-session-refresh"))):f(await g(h.getDeliberationSession(n.sid,"live-session-refresh")))}catch(e){console.error("Error fetching session data.",e)}},[p,b]=(0,o.useState)();(0,o.useEffect)(()=>(a.Z.on(a.M.WSS_Distribute_Message,b),a.Z.on(a.M.WSS_Update_ConnectionState,b),()=>{a.Z.off(a.M.WSS_Distribute_Message,b),a.Z.off(a.M.WSS_Update_ConnectionState,b)}),[]),(0,o.useEffect)(()=>{if(void 0!==p)switch(p.type){case a.M.WSS_Update_ConnectionState:w(p.data);break;case a.M.WSS_Distribute_Message:y(p.data)}},[p]);let w=e=>{console.debug("Connection state detected: ".concat(s.um[e])),e===s.um.Joined&&S()},y=e=>{if("send"===e.action&&"session-update"===e.type){var n;let i=(0,r.zW)(e.data.session);f({...i,joinCode:null!==(n=i.joinCode)&&void 0!==n?n:t.joinCode})}if("send"===e.action&&"answer-summary-update"===e.type){let n=e.data.questionId,i=(0,r.zW)(e.data.answers);f({...t,answers:[...t.answers.filter(e=>e.questionId!==n),...i]})}};return(0,i.jsx)(d.Provider,{value:{session:t,graphic:x},children:e.children})}},37471:function(e,n,t){t.d(n,{C:function(){return m},Z:function(){return f}});var i=t(57437),o=t(2265),r=t(70972),s=t(94547),a=t(83593),l=t(79044),c=t(5085);let u={debug:!1,connectionTimeout:3e3,maxReconnectionDelay:1e4,minReconnectionDelay:100,reconnectionDelayGrowFactor:1.3,maxRetries:1/0},d=(e,n,t)=>({deviceId:e.deviceId,sessionId:t,sessionToken:e.sessionToken,role:e.role,deviceName:void 0,participantName:n.participantName}),f=(0,o.createContext)({}),x=[s.um.Online,s.um.Connecting,s.um.Connected,s.um.Joining];function m(e){var n;let t=null!==(n=e.endpoint)&&void 0!==n?n:"wss://uw4rr0lqvg.execute-api.eu-west-2.amazonaws.com/prod";if(!t)throw"No endpoint found for Zeitgeist WSS";let m=(0,o.useContext)(c.rZ),h=(0,o.useContext)(l.K),g=(0,o.useRef)(null),[v,S]=(0,o.useState)(s.um.Offline),[p,b]=(0,o.useState)(!1),[w,y]=(0,o.useState)(!1),[j,C]=(0,o.useState)(),Z=(0,o.useCallback)(e=>{try{return g.current.send(JSON.stringify(e)),!0}catch(e){return console.error(e),!1}},[g]),[E,_]=(0,o.useState)({state:v,isError:w,joinedOnce:p,sendMessage:Z});(0,o.useEffect)(()=>{if(void 0===window||void 0===window.navigator)throw"Window undefined.";window.addEventListener("online",()=>{v===s.um.Offline&&S(s.um.Online)}),window.addEventListener("offline",()=>{S(s.um.Offline)}),S(window.navigator.onLine?s.um.Online:s.um.Offline)},[]),(0,o.useEffect)(()=>{C(d(m,h,e.sid))},[m.deviceId,e.sid,m.sessionToken,m.role,h.participantName]),(0,o.useEffect)(()=>{_({state:v,isError:w,joinedOnce:p,sendMessage:Z})},[g,v,w,p,Z]),(0,o.useEffect)(()=>{switch(console.debug("WSS state change",s.um[v]),a.Z.emit({type:a.M.WSS_Update_ConnectionState,data:v}),v){case s.um.Offline:try{var e;null===(e=g.current)||void 0===e||e.close()}catch(e){console.warn(e)}break;case s.um.Online:k(),S(s.um.Connecting);break;case s.um.Connecting:D();break;case s.um.Connected:S(s.um.Joining);break;case s.um.Joining:R();break;case s.um.Joined:b(!0);break;case s.um.Error:D()}y(v===s.um.Error)},[v]);let D=()=>{setTimeout(()=>{[r.Z.CLOSING,r.Z.CLOSED].includes(g.current.readyState)&&(console.debug("Recreating socket..."),k())},1e3)},k=()=>{if(null!==g.current){try{g.current.close()}catch(e){console.warn(e)}g.current.onopen=null,g.current.onclose=null,g.current.onerror=null,g.current.onmessage=null,g.current=null}g.current=I()},I=()=>{let e=new r.Z(t,[],u);return e.onopen=e=>{console.debug("WSS open",e),S(s.um.Connected)},e.onclose=e=>{console.warn("WSS close",e),S(s.um.Disconnected)},e.onerror=e=>{console.error("WSS error",e),S(s.um.Error)},e.onmessage=async e=>{await N(e)},e},R=()=>{var e,n;console.debug("Joining session...");let t={action:"join",deviceId:j.deviceId,sessionId:j.sessionId,sessionToken:j.sessionToken,deviceName:null!==(e=j.deviceName)&&void 0!==e?e:null,participantName:null!==(n=j.participantName)&&void 0!==n?n:null,role:j.role};g.current.send(JSON.stringify(t))},N=e=>{if(null==e?void 0:e.data){let n=JSON.parse(e.data);n&&("send"===n.action&&"remote-log"===n.type&&A(n),"send"===n.action&&"join-confirmation"===n.type&&T(n),a.Z.emit({type:a.M.WSS_Distribute_Message,data:n}))}},A=e=>{switch(e.data.severity){case"debug":console.debug("Remote debug log",e.data.message);break;case"info":console.info("Remote info log",e.data.message);break;case"warn":console.warn("Remote warn log",e.data.message);break;case"error":console.error("Remote error log",e.data.message);break;default:console.log("Remote log",e.data.message)}},T=e=>{console.debug("Join confirmation"),S(s.um.Joined)};return(0,i.jsxs)(i.Fragment,{children:[w&&!p&&e.error,!w&&!p&&x.includes(v)&&e.loading,p&&(0,i.jsx)(f.Provider,{value:E,children:e.children})]})}},70883:function(e,n,t){t.d(n,{Z:function(){return c},l:function(){return l}});var i=t(57437),o=t(2265),r=t(83593),s=t(37471),a=t(5085);let l=(0,o.createContext)({});function c(e){let n=(0,o.useContext)(a.rZ),[t,c]=(0,o.useState)([]),[u,d]=(0,o.useState)(t.find(e=>e.deviceId===n.deviceId)),f=(0,o.useContext)(s.Z);(0,o.useEffect)(()=>{f.sendMessage({action:"request",type:"subscription-update",sessionId:e.sid})},[]);let[x,m]=(0,o.useState)();(0,o.useEffect)(()=>(r.Z.on(r.M.WSS_Distribute_Message,m),()=>{r.Z.off(r.M.WSS_Distribute_Message,m)}),[]),(0,o.useEffect)(()=>{void 0!==x&&x.type===r.M.WSS_Distribute_Message&&h(x.data)},[x]);let h=e=>{if("send"===e.action&&"subscription-update"===e.type){var n;c(null!==(n=e.data.subscriptions)&&void 0!==n?n:[])}};return(0,o.useEffect)(()=>{console.debug("FLICKER subscriptions changed")},[t]),(0,o.useEffect)(()=>{d(t.find(e=>e.deviceId===n.deviceId))},[t,n]),(0,i.jsx)(l.Provider,{value:{subscriptions:t,thisUser:u},children:e.children})}},5085:function(e,n,t){t.d(n,{ZP:function(){return f},rZ:function(){return d}});var i,o,r=t(57437),s=t(2265),a=t(67022),l=t(20920),c=t(94547),u=t(23447);(i=o||(o={}))[i.Init=0]="Init",i[i.Authenticating=1]="Authenticating",i[i.AuthError=2]="AuthError",i[i.AuthNotRequired=3]="AuthNotRequired",i[i.Authenticated=4]="Authenticated",i[i.ExchangingJoinCode=5]="ExchangingJoinCode",i[i.JoinCodeError=6]="JoinCodeError",i[i.JoinCodeAccepted=7]="JoinCodeAccepted",i[i.Ready=8]="Ready";let d=(0,s.createContext)({});function f(e){var n;let[t,i]=(0,s.useState)((null===(n=window)||void 0===n?void 0:n.localStorage.getItem("DeviceId"))||(0,l.Z)());(0,s.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",t)},[t]);let[f,x]=(0,s.useState)(0),[m,h]=(0,s.useState)(void 0),[g,v]=(0,s.useState)(e.role),[S,p]=(0,s.useState)(),[b,w]=(0,s.useState)(!1),[y,j]=(0,s.useState)(!1),[C,Z]=(0,s.useState)({deviceId:t,role:g,state:f,user:m,sessionToken:S,noUserWarning:y});(0,s.useEffect)(()=>{Z({...C,state:f})},[f]),(0,s.useEffect)(()=>{Z({...C,user:m})},[m]),(0,s.useEffect)(()=>{Z({...C,role:g})},[g]),(0,s.useEffect)(()=>{Z({...C,sessionToken:S})},[S]),(0,s.useEffect)(()=>{Z({...C,noUserWarning:y})},[y]);let E=(0,a.aC)(),{api:_,start:D}=(0,s.useContext)(u.E);return(0,s.useEffect)(()=>E.events.addAccessTokenExpiring(async()=>{console.debug("Access token renewal with auth.signinSilent()...");let e=await E.signinSilent();console.debug("User renewal: ".concat(e?"found":"not found")),h(e)}),[E.events,E.signinSilent]),(0,s.useEffect)(()=>{switch(console.debug("User state",o[f]),f){case 0:switch(g){case c._b.Controller:x(1);break;case c._b.Client:x(3),h(null);break;default:throw"Unsupported role: ".concat(c._b[g])}break;case 1:E.signinSilent().then(e=>{null!==e?(console.info("User found",e.profile.email),h(e),x(4)):(console.debug("Not authenticated"),h(void 0),x(2))}).catch(e=>{console.error(e),h(void 0),x(2)});break;case 2:case 6:break;case 4:case 3:x(5);break;case 5:let n={deviceId:t,role:g,joinCode:e.joinCode,sessionId:e.sid};D(_.exchangeJoinCodeForSessionToken(n)).then(e=>{p(e.sessionToken),x(7)}).catch(e=>{console.error(e),x(6)});break;case 7:x(8)}w(!![2,6].find(e=>e===f))},[f]),(0,s.useEffect)(()=>{j(null===m),null===m&&8===f&&console.error("No user found through Auth. The facilitator will not be able to manage the session.")},[m]),(0,r.jsxs)(r.Fragment,{children:[b&&e.error,8!==f&&!b&&e.loading,8===f&&!b&&(0,r.jsx)(d.Provider,{value:C,children:e.children})]})}},37570:function(e,n,t){t.d(n,{H:function(){return m},Z:function(){return h}});var i,o,r=t(57437),s=t(2265),a=t(94547),l=t(20909),c=t(5085),u=t(23447);(i=o||(o={}))[i.Init=0]="Init",i[i.RetrievingSession=1]="RetrievingSession",i[i.RetrievingGraphic=2]="RetrievingGraphic",i[i.SessionError=3]="SessionError",i[i.Ready=4]="Ready";let d=[3],f=[0],x=[1,2],m=(0,s.createContext)({});function h(e){let{api:n,start:t}=(0,s.useContext)(u.E),i=(0,s.useContext)(c.rZ),[h,g]=(0,s.useState)(0),[v,S]=(0,s.useState)(),[p,b]=(0,s.useState)(),[w,y]=(0,s.useState)(!0),[j,C]=(0,s.useState)(!1),[Z,E]=(0,s.useState)(!1);(0,s.useEffect)(()=>{switch(console.debug("Static data state",o[h]),h){case 0:g(1);break;case 1:_().then(e=>{S(e),g(2)}).catch(e=>{console.error(e),g(3)});break;case 2:D().then(e=>{b(e),g(4)}).catch(e=>{console.error(e),g(3)})}C(void 0!==x.find(e=>e===h)),E(void 0!==d.find(e=>e===h)),y(void 0!==f.find(e=>e===h))},[h]);let _=async()=>i.role===a._b.Controller?await t(n.getDeliberationSessionAdmin(e.sid,i.user.access_token,void 0)):await t(n.getDeliberationSession(e.sid,void 0)),D=async()=>{let e={workshopDirectory:(0,l.X)(v.sessionPresentationUris[0])};return await t(n.postPublicContentAccessRequest(v.id,e))};return(0,r.jsxs)(r.Fragment,{children:[w&&e.initialising,j&&e.loading,Z&&e.error,4===h&&(0,r.jsx)(m.Provider,{value:{sid:v.id,session:v,graphic:p},children:e.children})]})}},83593:function(e,n,t){t.d(n,{M:function(){return o}});var i,o,r=t(37836),s=t.n(r);(i=o||(o={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",i.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",i.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",i.Content_Progress_Update="CONTENT_PROGRESS_UPDATE",i.Media_Playback_Update="MEDIA_PLAYBACK_UPDATE";let a=new(s()),l={on:(e,n)=>a.on(e,n),once:(e,n)=>a.once(e,n),off:(e,n)=>a.off(e,n),emit:e=>a.emit(e.type,e)};Object.freeze(l),n.Z=l},79044:function(e,n,t){t.d(n,{K:function(){return v},Z:function(){return S}});var i,o,r=t(57437),s=t(2265),a=t(11144),l=t(43312),c=t(34360),u=t(31193),d=t(80511),f=t(66858),x=t(49752);function m(e){let[n,t]=(0,s.useState)(""),[i,o]=(0,s.useState)(!1),a=i&&0===n.trim().length,l=!a&&n.trim().length>0,c=()=>{l&&e.submitName(n)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(d.Z,{variant:"h4",children:"How should we refer to you?"}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),c()},children:[(0,r.jsx)(f.Z,{sx:{mb:4,input:{background:"white"}},fullWidth:!0,style:{flexGrow:1},label:"Please enter your name...",variant:"outlined",value:n,autoComplete:"off",autoFocus:!0,helperText:"Your name is purely for use within the session. It will not be saved or stored.",onChange:e=>{t(e.target.value),o(!0)},error:a,color:"buttonStandard"}),(0,r.jsx)(x.Z,{inline:!1,alignment:"left",busy:!1,enabled:l,onSubmit:c,text:"Continue"})]})]})})}var h=t(43655),g=t(24314);(i=o||(o={}))[i.InputName=0]="InputName",i[i.Ready=1]="Ready";let v=(0,s.createContext)({});function S(e){let{session:n,graphic:t}=(0,s.useContext)(a.z),[i,o]=(0,s.useState)(0),[u,d]=(0,s.useState)(),f=(0,s.useMemo)(()=>(0,r.jsx)(c.Z,{url:t.posterUrl}),[t.posterUrl]),x=(0,s.useCallback)(e=>{d(e),o(1)},[d,o]);return(0,r.jsxs)(r.Fragment,{children:[1!==i&&(0,r.jsx)(h.Z,{heading:(0,r.jsx)(l.Z,{session:n,layout:"heading",welcome:!0}),main:(0,r.jsx)(r.Fragment,{children:0===i&&(0,r.jsx)(g.Z,{left:(0,r.jsx)(m,{submitName:x}),right:f})})}),1===i&&(0,r.jsx)(v.Provider,{value:{participantName:u},children:e.children})]})}},43312:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(57437),o=t(31193),r=t(80511),s=t(96537);function a(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{sx:{mb:2},children:[e.welcome&&(0,i.jsx)(r.Z,{variant:"body1",children:"WELCOME TO"}),(0,i.jsx)(r.Z,{variant:"h3",component:"h2",children:e.session.sessionName})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row"},gap:2,children:[(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"column"===e.layout?"start":"center",gap:1},children:[(0,i.jsx)("img",{src:"/icons/session-date.svg"}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row",alignItems:"column"===e.layout?"flex-start":"center",gap:1},children:[(0,i.jsx)(r.Z,{variant:"body2",children:"DATE"}),(0,i.jsx)(r.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toDateString()})]})]}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"column"===e.layout?"start":"center",gap:1},children:[(0,i.jsx)("img",{src:"/icons/session-time.svg"}),(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row",alignItems:"column"===e.layout?"flex-start":"center",gap:1},children:[(0,i.jsx)(r.Z,{variant:"body2",children:"TIME"}),(0,i.jsx)(r.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toLocaleTimeString()})]})]})]}),void 0!==e.onAdvance&&(0,i.jsx)(s.Z,{variant:"contained",color:"primary",onClick:e.onAdvance,sx:{alignSelf:"start"},children:"Next"})]})}},34360:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(57437),o=t(31193),r=t(48474),s=t(2265);function a(e){var n;let[t,a]=(0,r.q_)(()=>({opacity:0}));return(0,s.useEffect)(()=>{void 0!==e.url&&a.start({to:{opacity:1},config:{duration:2e3}})},[e.url]),(0,i.jsx)(o.Z,{justifySelf:"stretch",flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",sx:{borderRadius:2},children:(0,i.jsx)(r.q.img,{src:e.url,alt:null!==(n=e.alt)&&void 0!==n?n:"Session graphic",style:{minWidth:"100%",minHeight:"100%",flexShrink:0,...e.style,...t}})})}},43655:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(57437),o=t(31193),r=t(97340);function s(e){return(0,i.jsxs)(o.Z,{display:"flex",flexDirection:"column",flexGrow:1,children:[(0,i.jsx)(o.Z,{display:"flex",flexDirection:"column",sx:{p:2},children:e.heading}),(0,i.jsx)(o.Z,{display:"flex",flexDirection:"column",flexGrow:1,children:(0,i.jsx)(r.Z,{sx:{flexGrow:1,m:1},children:e.main})})]})}},24314:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(57437),o=t(58433),r=t(31193);function s(e){let{left:n,right:t}=e;return(0,i.jsxs)(o.ZP,{container:!0,flexGrow:1,rowGap:1,children:[(0,i.jsx)(o.ZP,{item:!0,xs:12,md:6,flexGrow:1,display:"flex",flexDirection:"column",children:(0,i.jsx)(r.Z,{display:"flex",flexDirection:"column",gap:1,sx:{overflowY:"auto",flexGrow:{xs:void 0,md:1}},children:n})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,md:6,flexGrow:1,display:"flex",flexDirection:"column",children:(0,i.jsx)(r.Z,{display:"flex",flexDirection:"column",gap:1,sx:{pl:{xs:void 0,md:2},overflowY:"auto",flexGrow:{xs:void 0,md:1}},children:t})})]})}},15785:function(e,n,t){var i,o;t.d(n,{I:function(){return r},S:function(){return i}}),(o=i||(i={}))[o.default=0]="default",o[o.deliberation=1]="deliberation";let r={activity:0,recordingId:void 0,notes:"",qids:[],secs:void 0}},97340:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(57437),o=t(31193),r=t(80511);function s(e){return(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",background:"white",borderRadius:2,p:1,...e.sx},children:[(e.title||e.tools)&&(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:1},children:[e.title&&(0,i.jsx)(r.Z,{variant:"h6",children:e.title}),e.tools]}),(0,i.jsx)(o.Z,{sx:{flexGrow:1,overflowY:"hidden"},children:(0,i.jsx)(o.Z,{sx:{width:"100%",height:"100%",overflowY:e.scrolling?"auto":"hidden"},children:e.children})})]})}},49752:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(57437),o=t(42555),r=t(80511),s=t(31193);function a(e){let n=()=>{var n,t;return(0,i.jsx)(o.Z,{variant:null!==(n=e.variant)&&void 0!==n?n:"contained",type:"submit",size:!0===e.large?"large":"medium",color:"buttonStandard",onClick:e.onSubmit,loading:e.busy,disabled:!e.enabled||e.busy,children:(0,i.jsx)(r.Z,{variant:"submitButton",children:null!==(t=e.text)&&void 0!==t?t:"Submit"})})},t="left"===e.alignment?"flex-start":"right"===e.alignment?"flex-end":"stretch";return(0,i.jsxs)(i.Fragment,{children:[e.inline&&(0,i.jsx)(n,{}),!e.inline&&(0,i.jsx)(s.Z,{sx:e.sx,display:"flex",flexDirection:"row",justifyContent:t,children:(0,i.jsx)(n,{})})]})}},20909:function(e,n,t){t.d(n,{X:function(){return i}});let i=e=>e.split("/").at(-2)}}]);