(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4032],{83686:function(e,t,n){Promise.resolve().then(n.bind(n,94817))},94817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(57437),s=n(53622),o=n(94547),a=n(78364),l=n(28356),r=n(4766),c=n(93191),d=n(37570),u=n(83593),h=n(24423),x=n(43670),p=n(95958),f=n(17882),j=n(78135),b=n(33351),g=n(43061),v=n(2265),C=n(96537),y=n(40395);function E(){let[e,t]=(0,v.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>t(!0),sx:{py:1},children:"LEAVE CALL"}),(0,i.jsx)(y.Z,{open:e,setOpen:t,onSelect:e=>{"leave"===e&&window.location.reload()},prompt:"Are you sure you want to leave the call?",options:[{key:"return",text:"RETURN TO THE CALL",filled:!0},{key:"leave",text:"LEAVE THE CALL",filled:!1}]})]})}function Z(){let{session:e}=(0,v.useContext)(d.H),{slideData:t}=(0,v.useContext)(r.X),n=(0,v.useContext)(c.N),s=(0,v.useContext)(j.ui),[a,l]=(0,v.useState)(!1),[C,y]=(0,v.useState)({activity:t.activity,enableExpandButton:!0,onResize:()=>{Z()},presentation:n.presentation,availableSpace:void 0});(0,v.useEffect)(()=>{l(e.remoteConfiguration===o.VS.RemoteWithVideoCall)},[e]),(0,v.useEffect)(()=>{y({...C,activity:t.activity,enableExpandButton:!0,onResize:()=>{Z()},presentation:n.presentation})},[t.activity]);let Z=()=>{u.Z.emit({type:u.M.Request_SlideRefresh})},[w,m]=(0,g.xE)();return(0,v.useEffect)(()=>{m&&m.width&&m.height&&(y({...C,availableSpace:{w:m.width,h:m.height}}),console.debug("available space: ".concat(m.width," x ").concat(m.height)))},[m]),(0,i.jsxs)(i.Fragment,{children:[a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b.Z,{sx:{width:"100%",height:"100%",position:"absolute",left:0,top:0,right:0,bottom:0,display:"flex",flexDirection:"column",p:1,gap:1},children:[(0,i.jsx)(b.Z,{ref:w,sx:{display:"block",flexGrow:1,m:0,p:0}}),(0,i.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"end",gap:2,px:1},children:[(0,i.jsx)(f.Z,{orientation:"row"}),(0,i.jsx)(b.Z,{sx:{alignSelf:"center"},children:(0,i.jsx)(E,{})})]})]}),(0,i.jsx)(b.Z,{sx:{position:"absolute",left:0,top:0,right:0,display:"block",p:1},children:(0,i.jsx)(x.Z,{initialCallPreferences:s.call,sx:{width:"100%",height:"100%"},children:(0,i.jsx)(p.ZP,{role:o._b.Client,children:(0,i.jsx)(h.ZP,{activity:C.activity,enableExpandButton:C.enableExpandButton,onResize:C.onResize,presentation:C.presentation,availableSpace:C.availableSpace})})})})]}),!a&&(0,i.jsx)(b.Z,{sx:{width:"100%",height:"100%",p:1,position:"relative"},children:n.presentation})]})}function w(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{sid:e.sid,joinCode:e.joinCode,refresh:e.refresh,role:o._b.Client,children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(Z,{})]})})}var m=n(16463);function S(){let e=(0,m.useSearchParams)(),t=e.get("sid"),n=e.get("code"),o="true"===e.get("refresh");return null===t||null===n?(0,i.jsx)("p",{children:"Missing session id or join code"}):(0,i.jsx)(s.Z,{searchParams:e,children:(0,i.jsx)(w,{sid:t,joinCode:n,refresh:o})})}}},function(e){e.O(0,[2908,6444,6221,1866,3732,7761,4403,7357,5591,4206,9419,3367,9194,3447,816,9686,4423,2971,7023,1744],function(){return e(e.s=83686)}),_N_E=e.O()}]);