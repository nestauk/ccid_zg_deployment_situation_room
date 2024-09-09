"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5042],{79418:function(e,t,o){function n(e){if(null!=e)return parseInt(e)}function i(e){return!0===e||!1===e?e:"true"===e||"false"===e?"true"===e:"t"===e||"f"===e?"t"===e:(1===e||0===e)&&1===e}o.d(t,{LC:function(){return n},gx:function(){return i},zW:function(){return function e(t){if(t instanceof Array)return t.map(function(t){return"object"==typeof t&&(t=e(t)),t});{let o={};for(let n in t)if(t.hasOwnProperty(n)){let i=(n.charAt(0).toLowerCase()+n.slice(1)||n).toString(),s=t[n];(s instanceof Array||null!==s&&s.constructor===Object)&&(s=e(s)),o[i]=s}return o}}}})},11144:function(e,t,o){o.d(t,{Z:function(){return f},z:function(){return u}});var n=o(57437),i=o(2265),s=o(79418),r=o(94547),l=o(83593),a=o(5085),c=o(37570),d=o(23447);let u=(0,i.createContext)({});function f(e){let t=(0,i.useContext)(c.H),[o,f]=(0,i.useState)(t.session),[w,h]=(0,i.useState)(t.graphic),{api:p,start:x}=(0,i.useContext)(d.E),m=(0,i.useContext)(a.rZ),g=async()=>{console.debug("Refresh session...");try{m.role===r._b.Controller?f(await x(p.getDeliberationSessionAdmin(t.sid,m.user.access_token,"live-session-refresh"))):f(await x(p.getDeliberationSession(t.sid,"live-session-refresh")))}catch(e){console.error("Error fetching session data.",e)}},[S,v]=(0,i.useState)();(0,i.useEffect)(()=>(l.Z.on(l.M.WSS_Distribute_Message,v),l.Z.on(l.M.WSS_Update_ConnectionState,v),()=>{l.Z.off(l.M.WSS_Distribute_Message,v),l.Z.off(l.M.WSS_Update_ConnectionState,v)}),[]),(0,i.useEffect)(()=>{if(void 0!==S)switch(S.type){case l.M.WSS_Update_ConnectionState:b(S.data);break;case l.M.WSS_Distribute_Message:y(S.data)}},[S]);let b=e=>{console.debug("Connection state detected: ".concat(r.um[e])),e===r.um.Joined&&g()},y=e=>{if("send"===e.action&&"session-update"===e.type){var t;let n=(0,s.zW)(e.data.session);f({...n,joinCode:null!==(t=n.joinCode)&&void 0!==t?t:o.joinCode})}if("send"===e.action&&"answer-summary-update"===e.type){let t=e.data.questionId,n=(0,s.zW)(e.data.answers);f({...o,answers:[...o.answers.filter(e=>e.questionId!==t),...n]})}};return(0,n.jsx)(u.Provider,{value:{session:o,graphic:w},children:e.children})}},37471:function(e,t,o){o.d(t,{C:function(){return h},Z:function(){return f}});var n=o(57437),i=o(2265),s=o(70972),r=o(94547),l=o(83593),a=o(79044),c=o(5085);let d={debug:!1,connectionTimeout:3e3,maxReconnectionDelay:1e4,minReconnectionDelay:100,reconnectionDelayGrowFactor:1.3,maxRetries:1/0},u=(e,t,o)=>({deviceId:e.deviceId,sessionId:o,sessionToken:e.sessionToken,role:e.role,deviceName:void 0,participantName:t.participantName}),f=(0,i.createContext)({}),w=[r.um.Online,r.um.Connecting,r.um.Connected,r.um.Joining];function h(e){var t;let o=null!==(t=e.endpoint)&&void 0!==t?t:"wss://uw4rr0lqvg.execute-api.eu-west-2.amazonaws.com/prod";if(!o)throw"No endpoint found for Zeitgeist WSS";let h=(0,i.useContext)(c.rZ),p=(0,i.useContext)(a.K),x=(0,i.useRef)(null),[m,g]=(0,i.useState)(r.um.Offline),[S,v]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),[j,Z]=(0,i.useState)(),C=(0,i.useCallback)(e=>{try{return x.current.send(JSON.stringify(e)),!0}catch(e){return console.error(e),!1}},[x]),[I,E]=(0,i.useState)({state:m,isError:b,joinedOnce:S,sendMessage:C});(0,i.useEffect)(()=>{if(void 0===window||void 0===window.navigator)throw"Window undefined.";window.addEventListener("online",()=>{m===r.um.Offline&&g(r.um.Online)}),window.addEventListener("offline",()=>{g(r.um.Offline)}),g(window.navigator.onLine?r.um.Online:r.um.Offline)},[]),(0,i.useEffect)(()=>{Z(u(h,p,e.sid))},[h.deviceId,e.sid,h.sessionToken,h.role,p.participantName]),(0,i.useEffect)(()=>{E({state:m,isError:b,joinedOnce:S,sendMessage:C})},[x,m,b,S,C]),(0,i.useEffect)(()=>{switch(console.debug("WSS state change",r.um[m]),l.Z.emit({type:l.M.WSS_Update_ConnectionState,data:m}),m){case r.um.Offline:try{var e;null===(e=x.current)||void 0===e||e.close()}catch(e){console.warn(e)}break;case r.um.Online:R(),g(r.um.Connecting);break;case r.um.Connecting:_();break;case r.um.Connected:g(r.um.Joining);break;case r.um.Joining:D();break;case r.um.Joined:v(!0);break;case r.um.Error:_()}y(m===r.um.Error)},[m]);let _=()=>{setTimeout(()=>{[s.Z.CLOSING,s.Z.CLOSED].includes(x.current.readyState)&&(console.debug("Recreating socket..."),R())},1e3)},R=()=>{if(null!==x.current){try{x.current.close()}catch(e){console.warn(e)}x.current.onopen=null,x.current.onclose=null,x.current.onerror=null,x.current.onmessage=null,x.current=null}x.current=k()},k=()=>{let e=new s.Z(o,[],d);return e.onopen=e=>{console.debug("WSS open",e),g(r.um.Connected)},e.onclose=e=>{console.warn("WSS close",e),g(r.um.Disconnected)},e.onerror=e=>{console.error("WSS error",e),g(r.um.Error)},e.onmessage=async e=>{await N(e)},e},D=()=>{var e,t;console.debug("Joining session...");let o={action:"join",deviceId:j.deviceId,sessionId:j.sessionId,sessionToken:j.sessionToken,deviceName:null!==(e=j.deviceName)&&void 0!==e?e:null,participantName:null!==(t=j.participantName)&&void 0!==t?t:null,role:j.role};x.current.send(JSON.stringify(o))},N=e=>{if(null==e?void 0:e.data){let t=JSON.parse(e.data);t&&("send"===t.action&&"remote-log"===t.type&&A(t),"send"===t.action&&"join-confirmation"===t.type&&T(t),l.Z.emit({type:l.M.WSS_Distribute_Message,data:t}))}},A=e=>{switch(e.data.severity){case"debug":console.debug("Remote debug log",e.data.message);break;case"info":console.info("Remote info log",e.data.message);break;case"warn":console.warn("Remote warn log",e.data.message);break;case"error":console.error("Remote error log",e.data.message);break;default:console.log("Remote log",e.data.message)}},T=e=>{console.debug("Join confirmation"),g(r.um.Joined)};return(0,n.jsxs)(n.Fragment,{children:[b&&!S&&e.error,!b&&!S&&w.includes(m)&&e.loading,S&&(0,n.jsx)(f.Provider,{value:I,children:e.children})]})}},70883:function(e,t,o){o.d(t,{Z:function(){return c},l:function(){return a}});var n=o(57437),i=o(2265),s=o(83593),r=o(37471),l=o(5085);let a=(0,i.createContext)({});function c(e){let t=(0,i.useContext)(l.rZ),[o,c]=(0,i.useState)([]),[d,u]=(0,i.useState)(o.find(e=>e.deviceId===t.deviceId)),f=(0,i.useContext)(r.Z);(0,i.useEffect)(()=>{f.sendMessage({action:"request",type:"subscription-update",sessionId:e.sid})},[]);let[w,h]=(0,i.useState)();(0,i.useEffect)(()=>(s.Z.on(s.M.WSS_Distribute_Message,h),()=>{s.Z.off(s.M.WSS_Distribute_Message,h)}),[]),(0,i.useEffect)(()=>{void 0!==w&&w.type===s.M.WSS_Distribute_Message&&p(w.data)},[w]);let p=e=>{if("send"===e.action&&"subscription-update"===e.type){var t;c(null!==(t=e.data.subscriptions)&&void 0!==t?t:[])}};return(0,i.useEffect)(()=>{console.debug("FLICKER subscriptions changed")},[o]),(0,i.useEffect)(()=>{u(o.find(e=>e.deviceId===t.deviceId))},[o,t]),(0,n.jsx)(a.Provider,{value:{subscriptions:o,thisUser:d},children:e.children})}},5085:function(e,t,o){o.d(t,{ZP:function(){return f},rZ:function(){return u}});var n,i,s=o(57437),r=o(2265),l=o(67022),a=o(20920),c=o(94547),d=o(23447);(n=i||(i={}))[n.Init=0]="Init",n[n.Authenticating=1]="Authenticating",n[n.AuthError=2]="AuthError",n[n.AuthNotRequired=3]="AuthNotRequired",n[n.Authenticated=4]="Authenticated",n[n.ExchangingJoinCode=5]="ExchangingJoinCode",n[n.JoinCodeError=6]="JoinCodeError",n[n.JoinCodeAccepted=7]="JoinCodeAccepted",n[n.Ready=8]="Ready";let u=(0,r.createContext)({});function f(e){var t;let[o,n]=(0,r.useState)((null===(t=window)||void 0===t?void 0:t.localStorage.getItem("DeviceId"))||(0,a.Z)());(0,r.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",o)},[o]);let[f,w]=(0,r.useState)(0),[h,p]=(0,r.useState)(void 0),[x,m]=(0,r.useState)(e.role),[g,S]=(0,r.useState)(),[v,b]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1),[Z,C]=(0,r.useState)({deviceId:o,role:x,state:f,user:h,sessionToken:g,noUserWarning:y});(0,r.useEffect)(()=>{C({...Z,state:f})},[f]),(0,r.useEffect)(()=>{C({...Z,user:h})},[h]),(0,r.useEffect)(()=>{C({...Z,role:x})},[x]),(0,r.useEffect)(()=>{C({...Z,sessionToken:g})},[g]),(0,r.useEffect)(()=>{C({...Z,noUserWarning:y})},[y]);let I=(0,l.aC)(),{api:E,start:_}=(0,r.useContext)(d.E);return(0,r.useEffect)(()=>I.events.addAccessTokenExpiring(async()=>{console.debug("Access token renewal with auth.signinSilent()...");let e=await I.signinSilent();console.debug("User renewal: ".concat(e?"found":"not found")),p(e)}),[I.events,I.signinSilent]),(0,r.useEffect)(()=>{switch(console.debug("User state",i[f]),f){case 0:switch(x){case c._b.Controller:w(1);break;case c._b.Client:w(3),p(null);break;default:throw"Unsupported role: ".concat(c._b[x])}break;case 1:I.signinSilent().then(e=>{null!==e?(console.info("User found",e.profile.email),p(e),w(4)):(console.debug("Not authenticated"),p(void 0),w(2))}).catch(e=>{console.error(e),p(void 0),w(2)});break;case 2:case 6:break;case 4:case 3:w(5);break;case 5:let t={deviceId:o,role:x,joinCode:e.joinCode,sessionId:e.sid};_(E.exchangeJoinCodeForSessionToken(t)).then(e=>{S(e.sessionToken),w(7)}).catch(e=>{console.error(e),w(6)});break;case 7:w(8)}b(!![2,6].find(e=>e===f))},[f]),(0,r.useEffect)(()=>{j(null===h),null===h&&8===f&&console.error("No user found through Auth. The facilitator will not be able to manage the session.")},[h]),(0,s.jsxs)(s.Fragment,{children:[v&&e.error,8!==f&&!v&&e.loading,8===f&&!v&&(0,s.jsx)(u.Provider,{value:Z,children:e.children})]})}},37570:function(e,t,o){o.d(t,{H:function(){return h},Z:function(){return p}});var n,i,s=o(57437),r=o(2265),l=o(94547),a=o(20909),c=o(5085),d=o(23447);(n=i||(i={}))[n.Init=0]="Init",n[n.RetrievingSession=1]="RetrievingSession",n[n.RetrievingGraphic=2]="RetrievingGraphic",n[n.SessionError=3]="SessionError",n[n.Ready=4]="Ready";let u=[3],f=[0],w=[1,2],h=(0,r.createContext)({});function p(e){let{api:t,start:o}=(0,r.useContext)(d.E),n=(0,r.useContext)(c.rZ),[p,x]=(0,r.useState)(0),[m,g]=(0,r.useState)(),[S,v]=(0,r.useState)(),[b,y]=(0,r.useState)(!0),[j,Z]=(0,r.useState)(!1),[C,I]=(0,r.useState)(!1);(0,r.useEffect)(()=>{switch(console.debug("Static data state",i[p]),p){case 0:x(1);break;case 1:E().then(e=>{g(e),x(2)}).catch(e=>{console.error(e),x(3)});break;case 2:_().then(e=>{v(e),x(4)}).catch(e=>{console.error(e),x(3)})}Z(void 0!==w.find(e=>e===p)),I(void 0!==u.find(e=>e===p)),y(void 0!==f.find(e=>e===p))},[p]);let E=async()=>n.role===l._b.Controller?await o(t.getDeliberationSessionAdmin(e.sid,n.user.access_token,void 0)):await o(t.getDeliberationSession(e.sid,void 0)),_=async()=>{let e={workshopDirectory:(0,a.X)(m.sessionPresentationUris[0])};return await o(t.postPublicContentAccessRequest(m.id,e))};return(0,s.jsxs)(s.Fragment,{children:[b&&e.initialising,j&&e.loading,C&&e.error,4===p&&(0,s.jsx)(h.Provider,{value:{sid:m.id,session:m,graphic:S},children:e.children})]})}},83593:function(e,t,o){o.d(t,{M:function(){return i}});var n,i,s=o(37836),r=o.n(s);(n=i||(i={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",n.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",n.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",n.Content_Progress_Update="CONTENT_PROGRESS_UPDATE",n.Media_Playback_Update="MEDIA_PLAYBACK_UPDATE";let l=new(r()),a={on:(e,t)=>l.on(e,t),once:(e,t)=>l.once(e,t),off:(e,t)=>l.off(e,t),emit:e=>l.emit(e.type,e)};Object.freeze(a),t.Z=a},25042:function(e,t,o){o.d(t,{TU:function(){return b},ZP:function(){return C}});var n=o(57437),i=o(15785),s=o(40772),r=o(59676),l=o(81386),a=o(22960),c=o(31193),d=o(40468),u=o(60335),f=o(29921),w=o(2265),h=o(52983),p=o(70883),x=o(80511),m=o(33351),g=o(6722);let S=(e,t)=>{var o;return null===(o=Object.entries(t).find(t=>t[1].externalUserId===e))||void 0===o?void 0:o[1]};var v=(0,w.memo)(function(e){let{tiles:t,attendeeIdToTileId:o}=(0,g.akC)(),{tileId:i,isVideoEnabled:s}=(0,g.Onx)(),{thisUser:r}=(0,w.useContext)(p.l),{roster:l}=(0,g.dJs)(),[a,c]=(0,w.useState)();(0,w.useEffect)(()=>(console.debug("FLICKER mounting ZgVideoTile"),()=>{console.debug("FLICKER unmounting ZgVideoTile")}),[]),(0,w.useEffect)(()=>{let n=S(e.subscription.deviceId,l);if(n){var a;let l=e.subscription.deviceId===(null==r?void 0:r.deviceId);console.debug("FLICKER rerender new data for "+e.subscription.participantName),c({subscription:e.subscription,attendee:n,isLocal:l,hasVideo:l?s:!!n&&t.some(e=>e===o[n.chimeAttendeeId]),tileId:null!==(a=l?i:n?o[n.chimeAttendeeId]:void 0)&&void 0!==a?a:void 0})}},[e.subscription.subscriptionId,s,t,r,l]);let u=(0,w.memo)(function(t){let{render:o}=t,{muted:i}=(0,g.zDY)(o.attendee.chimeAttendeeId);return console.debug("FLICKER redraw tile for "+e.subscription.participantName,o),(0,n.jsxs)(m.Z,{className:"shadow",sx:{borderRadius:"0.5rem",overflow:"hidden",background:"gray",height:"100%",width:"100%",position:"relative"},children:[o.hasVideo&&!o.isLocal&&(0,n.jsx)(g.ZzX,{name:o.subscription.participantName,tileId:o.tileId}),o.hasVideo&&o.isLocal&&(0,n.jsx)(g.OuP,{nameplate:o.subscription.participantName}),!o.hasVideo&&(0,n.jsx)(m.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(x.Z,{variant:"body2",color:"white",children:o.subscription.participantName})}),i&&(0,n.jsx)(m.Z,{sx:{position:"absolute",left:"1rem",top:"1rem"},children:(0,n.jsx)("img",{src:"/icons/av/mic-disabled.svg",style:{width:"2rem",height:"2rem"}})}),!i&&(0,n.jsx)(m.Z,{sx:{position:"absolute",left:"1rem",top:"1rem"},children:(0,n.jsx)("img",{src:"/icons/av/mic-enabled.svg",style:{width:"2rem",height:"2rem"}})})]})},(e,t)=>{var o,n;return e.render.tileId===t.render.tileId&&e.render.isLocal===t.render.isLocal&&e.render.hasVideo===t.render.hasVideo&&e.render.subscription.participantName===t.render.subscription.participantName&&(null===(o=e.render.attendee)||void 0===o?void 0:o.chimeAttendeeId)===(null===(n=t.render.attendee)||void 0===n?void 0:n.chimeAttendeeId)});return(0,n.jsxs)(n.Fragment,{children:[a&&(0,n.jsx)(u,{render:a},"video-call-tile-".concat(a.tileId)),!a&&(0,n.jsx)(m.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(d.Z,{})})]})},(e,t)=>e.subscription.subscriptionId===t.subscription.subscriptionId);let b={w:960,h:700},y=[{col:3,row:1,span:{cols:1,rows:1}},{col:3,row:2,span:{cols:1,rows:1}},{col:3,row:3,span:{cols:1,rows:1}},{col:2,row:3,span:{cols:1,rows:1}},{col:1,row:3,span:{cols:1,rows:1}},{col:4,row:1,span:{cols:1,rows:1}},{col:4,row:2,span:{cols:1,rows:1}},{col:4,row:3,span:{cols:1,rows:1}},{col:4,row:4,span:{cols:1,rows:1}},{col:3,row:4,span:{cols:1,rows:1}},{col:2,row:4,span:{cols:1,rows:1}},{col:1,row:4,span:{cols:1,rows:1}},{col:5,row:1,span:{cols:1,rows:1}},{col:5,row:2,span:{cols:1,rows:1}},{col:5,row:3,span:{cols:1,rows:1}},{col:5,row:4,span:{cols:1,rows:1}}],j={0:{[i.S.default]:{cols:1,rows:1},[i.S.deliberation]:{cols:1,rows:1}},1:{[i.S.default]:{cols:3,rows:2},[i.S.deliberation]:{cols:3,rows:2}},2:{[i.S.default]:{cols:3,rows:2},[i.S.deliberation]:{cols:3,rows:2}},3:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},4:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},5:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:3,rows:3}},6:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},7:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},8:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:3}},9:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},10:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},11:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},12:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:4,rows:4}},13:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},14:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},15:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}},16:{[i.S.default]:{cols:6,rows:5},[i.S.deliberation]:{cols:5,rows:4}}},Z={0:{[i.S.default]:{col:1,row:1,span:{cols:1,rows:1}},[i.S.deliberation]:{col:1,row:1,span:{cols:1,rows:1}}},1:{[i.S.default]:{col:1,row:1,span:{cols:2,rows:2}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},2:{[i.S.default]:{col:1,row:1,span:{cols:2,rows:2}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},3:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:3}}},4:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},5:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},6:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},7:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},8:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},9:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},10:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},11:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},12:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},13:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},14:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},15:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}},16:{[i.S.default]:{col:1,row:1,span:{cols:5,rows:5}},[i.S.deliberation]:{col:1,row:1,span:{cols:2,rows:2}}}};function C(e){let{subscriptions:t}=(0,w.useContext)(h.Mx),o=(0,w.useRef)(null),[p,x]=(0,w.useState)([]),[m,g]=(0,w.useState)();(0,f.y)(o,x);let S=(0,w.useRef)(null),[C,I]=(0,w.useState)([]);(0,f.y)(S,I);let[E,_]=(0,w.useState)(),[R,k]=(0,w.useState)(),[D,N]=(0,w.useState)(),[A,T]=(0,w.useState)(!1),M=e.enableExpandButton&&t.length>0&&e.activity===i.S.deliberation;(0,w.useEffect)(()=>{p&&0!==p.length&&g({w:p[0].contentRect.width,h:p[0].contentRect.height})},[p]),(0,w.useEffect)(()=>{e.onResize()},[C]),(0,w.useEffect)(()=>{if(!m)return;let{rows:o,cols:n}=j[t.length][e.activity],i={w:b.w*n,h:b.h*o},s=m.w/i.w*i.h,r=m.h/i.h*i.w;s<=m.h?_({w:m.w,h:s}):_({w:r,h:m.h})},[null==m?void 0:m.w,null==m?void 0:m.h,t.length,e.activity]),(0,w.useEffect)(()=>{if(!E)return;let{rows:o,cols:n}=j[t.length][e.activity];k({w:E.w/n,h:E.h/o})},[null==E?void 0:E.w,null==E?void 0:E.h]),(0,w.useEffect)(()=>{if(!R)return;console.debug("FLICKER cell dimensions changed");let o=t.length,{rows:n,cols:i}=j[o][e.activity];N({cols:Array(i).fill("".concat(Math.round(R.w),"px")).join(" "),rows:Array(n).fill("".concat(Math.round(R.h),"px")).join(" "),cells:{cols:i,rows:n},litter:o,activity:e.activity})},[null==R?void 0:R.w,null==R?void 0:R.h]),(0,w.useEffect)(()=>{e.activity!==i.S.deliberation&&T(!1)},[e.activity]),(0,w.useEffect)(()=>{e.onResize()},[A]);let[W]=(0,s.u)({duration:200}),F=(0,a.Z)();return(0,w.useEffect)(()=>{console.debug("FLICKER grid template changed")},[D]),console.debug("FLICKER tile grid redraw"),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{ref:o,sx:{width:"100%",height:"100%"},children:[!(E&&R&&D)&&(0,n.jsx)(c.Z,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(d.Z,{})}),E&&R&&D&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{ref:W,sx:{display:"grid",width:E.w,height:E.h,gridTemplateColumns:D.cols,gridTemplateRows:D.rows,alignItems:"start",justifyItems:"start",m:"auto"},children:[(0,n.jsxs)(c.Z,{sx:{position:"relative",gridColumn:A?"".concat(Z[D.litter][D.activity].col," / span ").concat(Z[D.litter][D.activity].span.cols):void 0,gridRow:A?"".concat(Z[D.litter][D.activity].row," / span ").concat(Z[D.litter][D.activity].span.rows):void 0,width:A?.95*E.w:R.w*Z[D.litter][D.activity].span.cols,height:A?.95*E.h:R.h*Z[D.litter][D.activity].span.rows,left:A?.025*E.w:void 0,top:A?.025*E.h:void 0,p:.5,zIndex:A?10:void 0},children:[M&&(0,n.jsx)(c.Z,{sx:{position:"absolute",top:"1rem",right:"1rem",zIndex:10},children:(0,n.jsx)(u.Z,{"aria-label":"expand presentation button",onClick:()=>T(!A),sx:{border:"2px solid",borderColor:F.palette.promptPanelBackground.main,background:F.palette.slideSectionBackground.main},children:A?(0,n.jsx)(r.Z,{}):(0,n.jsx)(l.Z,{})})}),(0,n.jsx)(c.Z,{sx:{width:"100%",height:"100%",borderRadius:2,border:A?"solid 2px white":void 0},className:"shadow",children:e.presentation})]},"presentation-cell"),e.activity!=i.S.deliberation&&(0,n.jsxs)(n.Fragment,{children:[t.slice(0,Math.min(2,D.litter)).map((e,t)=>(0,n.jsx)(c.Z,{sx:{p:.5,gridColumn:j[D.litter][D.activity].cols,gridRow:t+1,width:1*R.w,height:1*R.h},children:(0,n.jsx)(v,{subscription:e})},"video-cell-".concat(e.deviceId))),j[D.litter][D.activity].rows>2&&(0,n.jsx)(c.Z,{sx:{gridColumn:j[D.litter][e.activity].cols,gridRow:"3 / span ".concat(j[D.litter][D.activity].rows-2),width:1*R.w,height:R.h*(j[D.litter][D.activity].rows-2),overflowY:"auto"},children:D.litter>=3&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:t.slice(2).map((e,t)=>(0,n.jsx)(c.Z,{sx:{p:.5,width:1*R.w,height:1*R.h},children:(0,n.jsx)(v,{subscription:e})},"video-cell-".concat(e.deviceId)))})})})]}),e.activity===i.S.deliberation&&(0,n.jsx)(n.Fragment,{children:D.litter>=1&&(0,n.jsx)(n.Fragment,{children:t.slice(0,Math.min(y.length,D.litter)).map((e,t)=>(0,n.jsx)(c.Z,{sx:{p:.5,gridColumn:"".concat(y[t].col," / span ").concat(y[t].span.cols),gridRow:"".concat(y[t].row," / span ").concat(y[t].span.rows),width:R.w*y[t].span.rows,height:R.h*y[t].span.cols},children:(0,n.jsx)(v,{subscription:e})},"video-cell-".concat(e.deviceId)))})})]})})]})})}},52983:function(e,t,o){o.d(t,{Mx:function(){return a},ZP:function(){return d}});var n=o(57437),i=o(94547),s=o(6722),r=o(2265),l=o(70883);let a=(0,r.createContext)({}),c=(e,t)=>{if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(e[o].subscriptionId!=e[o].subscriptionId)return!1;return!0};function d(e){let{roster:t}=(0,s.dJs)(),{subscriptions:o,thisUser:d}=(0,r.useContext)(l.l),[u,f]=(0,r.useState)({subscriptions:[]});return(0,r.useEffect)(()=>{var e=o.filter(e=>e.deviceId!==(null==d?void 0:d.deviceId)&&e.role===i._b.Controller).toSorted((e,t)=>e.deviceId.localeCompare(t.deviceId)),t=o.filter(e=>e.deviceId!==(null==d?void 0:d.deviceId)&&e.role===i._b.Client).toSorted((e,t)=>e.deviceId.localeCompare(t.deviceId)),n=[...e,...d?[d]:[],...t];c(n,u.subscriptions)||f({subscriptions:n})},[t,o]),(0,n.jsx)(a.Provider,{value:u,children:e.children})}},79044:function(e,t,o){o.d(t,{K:function(){return m},Z:function(){return g}});var n,i,s=o(57437),r=o(2265),l=o(11144),a=o(43312),c=o(34360),d=o(31193),u=o(80511),f=o(66858),w=o(49752);function h(e){let[t,o]=(0,r.useState)(""),[n,i]=(0,r.useState)(!1),l=n&&0===t.trim().length,a=!l&&t.trim().length>0,c=()=>{a&&e.submitName(t)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(u.Z,{variant:"h4",children:"How should we refer to you?"}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),c()},children:[(0,s.jsx)(f.Z,{sx:{mb:4,input:{background:"white"}},fullWidth:!0,style:{flexGrow:1},label:"Please enter your name...",variant:"outlined",value:t,autoComplete:"off",autoFocus:!0,helperText:"Your name is purely for use within the session. It will not be saved or stored.",onChange:e=>{o(e.target.value),i(!0)},error:l,color:"buttonStandard"}),(0,s.jsx)(w.Z,{inline:!1,alignment:"left",busy:!1,enabled:a,onSubmit:c,text:"Continue"})]})]})})}var p=o(43655),x=o(24314);(n=i||(i={}))[n.InputName=0]="InputName",n[n.Ready=1]="Ready";let m=(0,r.createContext)({});function g(e){let{session:t,graphic:o}=(0,r.useContext)(l.z),[n,i]=(0,r.useState)(0),[d,u]=(0,r.useState)(),f=(0,r.useMemo)(()=>(0,s.jsx)(c.Z,{url:o.posterUrl}),[o.posterUrl]),w=(0,r.useCallback)(e=>{u(e),i(1)},[u,i]);return(0,s.jsxs)(s.Fragment,{children:[1!==n&&(0,s.jsx)(p.Z,{heading:(0,s.jsx)(a.Z,{session:t,layout:"heading",welcome:!0}),main:(0,s.jsx)(s.Fragment,{children:0===n&&(0,s.jsx)(x.Z,{left:(0,s.jsx)(h,{submitName:w}),right:f})})}),1===n&&(0,s.jsx)(m.Provider,{value:{participantName:d},children:e.children})]})}},43312:function(e,t,o){o.d(t,{Z:function(){return l}});var n=o(57437),i=o(31193),s=o(80511),r=o(96537);function l(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.Z,{sx:{mb:2},children:[e.welcome&&(0,n.jsx)(s.Z,{variant:"body1",children:"WELCOME TO"}),(0,n.jsx)(s.Z,{variant:"h3",component:"h2",children:e.session.sessionName})]}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row"},gap:2,children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"column"===e.layout?"start":"center",gap:1},children:[(0,n.jsx)("img",{src:"/icons/session-date.svg"}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row",alignItems:"column"===e.layout?"flex-start":"center",gap:1},children:[(0,n.jsx)(s.Z,{variant:"body2",children:"DATE"}),(0,n.jsx)(s.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toDateString()})]})]}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"column"===e.layout?"start":"center",gap:1},children:[(0,n.jsx)("img",{src:"/icons/session-time.svg"}),(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"===e.layout?"column":"row",alignItems:"column"===e.layout?"flex-start":"center",gap:1},children:[(0,n.jsx)(s.Z,{variant:"body2",children:"TIME"}),(0,n.jsx)(s.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toLocaleTimeString()})]})]})]}),void 0!==e.onAdvance&&(0,n.jsx)(r.Z,{variant:"contained",color:"primary",onClick:e.onAdvance,sx:{alignSelf:"start"},children:"Next"})]})}},34360:function(e,t,o){o.d(t,{Z:function(){return l}});var n=o(57437),i=o(31193),s=o(48474),r=o(2265);function l(e){var t;let[o,l]=(0,s.q_)(()=>({opacity:0}));return(0,r.useEffect)(()=>{void 0!==e.url&&l.start({to:{opacity:1},config:{duration:2e3}})},[e.url]),(0,n.jsx)(i.Z,{justifySelf:"stretch",flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",sx:{borderRadius:2},children:(0,n.jsx)(s.q.img,{src:e.url,alt:null!==(t=e.alt)&&void 0!==t?t:"Session graphic",style:{minWidth:"100%",minHeight:"100%",flexShrink:0,...e.style,...o}})})}},43655:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(57437),i=o(31193),s=o(97340);function r(e){return(0,n.jsxs)(i.Z,{display:"flex",flexDirection:"column",flexGrow:1,children:[(0,n.jsx)(i.Z,{display:"flex",flexDirection:"column",sx:{p:2},children:e.heading}),(0,n.jsx)(i.Z,{display:"flex",flexDirection:"column",flexGrow:1,children:(0,n.jsx)(s.Z,{sx:{flexGrow:1,m:1},children:e.main})})]})}},24314:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(57437),i=o(58433),s=o(31193);function r(e){let{left:t,right:o}=e;return(0,n.jsxs)(i.ZP,{container:!0,flexGrow:1,rowGap:1,children:[(0,n.jsx)(i.ZP,{item:!0,xs:12,md:6,flexGrow:1,display:"flex",flexDirection:"column",children:(0,n.jsx)(s.Z,{display:"flex",flexDirection:"column",gap:1,sx:{overflowY:"auto",flexGrow:{xs:void 0,md:1}},children:t})}),(0,n.jsx)(i.ZP,{item:!0,xs:12,md:6,flexGrow:1,display:"flex",flexDirection:"column",children:(0,n.jsx)(s.Z,{display:"flex",flexDirection:"column",gap:1,sx:{pl:{xs:void 0,md:2},overflowY:"auto",flexGrow:{xs:void 0,md:1}},children:o})})]})}},15785:function(e,t,o){var n,i;o.d(t,{I:function(){return s},S:function(){return n}}),(i=n||(n={}))[i.default=0]="default",i[i.deliberation=1]="deliberation";let s={activity:0,recordingId:void 0,notes:"",qids:[],secs:void 0}},97340:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(57437),i=o(31193),s=o(80511);function r(e){return(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",background:"white",borderRadius:2,p:1,...e.sx},children:[(e.title||e.tools)&&(0,n.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",mb:1},children:[e.title&&(0,n.jsx)(s.Z,{variant:"h6",children:e.title}),e.tools]}),(0,n.jsx)(i.Z,{sx:{flexGrow:1,overflowY:"hidden"},children:(0,n.jsx)(i.Z,{sx:{width:"100%",height:"100%",overflowY:e.scrolling?"auto":"hidden"},children:e.children})})]})}},49752:function(e,t,o){o.d(t,{Z:function(){return l}});var n=o(57437),i=o(42555),s=o(80511),r=o(31193);function l(e){let t=()=>{var t,o;return(0,n.jsx)(i.Z,{variant:null!==(t=e.variant)&&void 0!==t?t:"contained",type:"submit",size:!0===e.large?"large":"medium",color:"buttonStandard",onClick:e.onSubmit,loading:e.busy,disabled:!e.enabled||e.busy,children:(0,n.jsx)(s.Z,{variant:"submitButton",children:null!==(o=e.text)&&void 0!==o?o:"Submit"})})},o="left"===e.alignment?"flex-start":"right"===e.alignment?"flex-end":"stretch";return(0,n.jsxs)(n.Fragment,{children:[e.inline&&(0,n.jsx)(t,{}),!e.inline&&(0,n.jsx)(r.Z,{sx:e.sx,display:"flex",flexDirection:"row",justifyContent:o,children:(0,n.jsx)(t,{})})]})}},20909:function(e,t,o){o.d(t,{X:function(){return n}});let n=e=>e.split("/").at(-2)}}]);