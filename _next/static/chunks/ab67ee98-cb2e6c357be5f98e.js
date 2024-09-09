"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6444],{6722:function(e,t,r){r.d(t,{C$T:function(){return $},EJc:function(){return ii},Fxf:function(){return iW},HI:function(){return iZ},Onx:function(){return iy},OuP:function(){return iq},P$F:function(){return iJ},P2B:function(){return rq},ULf:function(){return iB},Wbj:function(){return oc},Zws:function(){return iN},ZzJ:function(){return i0},ZzX:function(){return iY},akC:function(){return ic},dJs:function(){return iE},fjl:function(){return iC},ikO:function(){return tF},lUb:function(){return iA},m6Y:function(){return iL},mXs:function(){return iQ},tt7:function(){return im},ytK:function(){return w},zDY:function(){return iX}});var i,o,n,a,s,f,l,d,c,u,p,m,h,g,b,v,y,w,x,$,k,E,S=r(2265),O=r(11707),D=r(18025),A=r(54887),C=r(8963),z=r(22073);function _(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r}function T(e,t,r,i){return new(r||(r=Promise))(function(o,n){function a(e){try{f(i.next(e))}catch(e){n(e)}}function s(e){try{f(i.throw(e))}catch(e){n(e)}}function f(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}f((i=i.apply(e,t||[])).next())})}"function"==typeof SuppressedError&&SuppressedError;let I=({css:e})=>e?`@media { ${e} };`:"",j=e=>(0,D.Dh)(e);O.ZP.span`
  ${e=>{if("object"==typeof e.value){let t=e.value,r=t.props&&t.props.width||"1rem";return`width: ${r};`}return null}}
  display: inline-block;
  padding: ${e=>"object"==typeof e.value?"0":"0.1rem 0.4rem 0.125rem"};
  border-radius: 0.5rem;
  line-height: ${e=>"object"==typeof e.value?"1":"1.43"};
  color: ${e=>e.theme.colors.greys.white};
  font-size: 0.65rem;
  background-color: ${e=>"alert"===e.status?e.theme.colors.error.primary:e.theme.colors.greys.grey60};

  ${j};
  ${I}
`;let L=(0,O.iv)`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`,V=(0,O.iv)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,M=(0,O.iv)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,P=e=>/^#[0-9A-F]{6}$/i.test(e),R=(e,t=1)=>{var r;if(!P(e))return"";let[i,o,n]=null===(r=e.match(/\w\w/g))||void 0===r?void 0:r.map(e=>parseInt(e,16));return`rgba(${i}, ${o}, ${n}, ${t||1})`},B=O.ZP.button`
  border-radius: ${e=>e.theme.radii.default};
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: ${e=>e.theme.iconButtonSizes[e.iconSize||"sm"]};
    height: ${e=>e.theme.iconButtonSizes[e.iconSize||"sm"]};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${e=>"primary"===e.variant&&F}
  ${e=>"secondary"===e.variant&&N}
  ${e=>"icon"===e.variant&&H}

  ${j}
  ${I}
`,F=(0,O.iv)`
  background-color: ${e=>e.selected?e.theme.buttons.primary.selected.bgd:e.theme.buttons.primary.static.bgd};
  color: ${e=>e.selected?e.theme.buttons.primary.selected.text:e.theme.buttons.primary.static.text};
  border: ${e=>e.selected?e.theme.buttons.primary.selected.border:e.theme.buttons.primary.static.border};
  box-shadow: ${e=>e.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${e=>e.theme.buttons.primary.focus.bgd};
    border: ${e=>e.theme.buttons.primary.focus.border};
    color: ${e=>e.theme.buttons.primary.focus.text};
    box-shadow: ${e=>e.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${e=>e.theme.buttons.primary.hover.bgd};
    border: ${e=>e.theme.buttons.primary.hover.border};
    color: ${e=>e.theme.buttons.primary.hover.text};
    box-shadow: ${e=>e.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${e=>e.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${e=>e.theme.buttons.primary.active.bgd};
    border: ${e=>e.theme.buttons.primary.active.border};
    color: ${e=>e.theme.buttons.primary.active.text};
    box-shadow: ${e=>e.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${e=>e.theme.buttons.primary.disabled.bgd};
    border: ${e=>e.theme.buttons.primary.disabled.border};
    color: ${e=>e.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`,N=(0,O.iv)`
  background-color: ${e=>e.selected?e.theme.buttons.secondary.selected.bgd:e.theme.buttons.secondary.static.bgd};
  color: ${e=>e.selected?e.theme.buttons.secondary.selected.text:e.theme.buttons.secondary.static.text};
  border: ${e=>e.selected?e.theme.buttons.secondary.selected.border:e.theme.buttons.secondary.static.border};
  box-shadow: ${e=>e.theme.buttons.secondary.shadow};

  &:focus {
    background-color: ${e=>e.theme.buttons.secondary.focus.bgd};
    border: ${e=>e.theme.buttons.secondary.focus.border};
    color: ${e=>e.theme.buttons.secondary.focus.text};
    box-shadow: ${e=>e.theme.buttons.secondary.focus.shadow};
  }

  &:hover {
    background-color: ${e=>e.theme.buttons.secondary.hover.bgd};
    border: ${e=>e.theme.buttons.secondary.hover.border};
    color: ${e=>e.theme.buttons.secondary.hover.text};
    box-shadow: ${e=>e.theme.buttons.secondary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${e=>e.theme.buttons.secondary.focus.shadow};
  }

  &:active {
    background-color: ${e=>e.theme.buttons.secondary.active.bgd};
    border: ${e=>e.theme.buttons.secondary.active.border};
    color: ${e=>e.theme.buttons.secondary.active.text};
    box-shadow: ${e=>e.theme.buttons.secondary.focus.shadow};
  }

  &:disabled {
    background-color: ${e=>e.theme.buttons.secondary.disabled.bgd};
    border: ${e=>e.theme.buttons.secondary.disabled.border};
    color: ${e=>e.theme.buttons.secondary.disabled.text};
    cursor: not-allowed;
  }
`,Z={sm:(0,O.iv)`
    top: -15%;
    left: 76%;
  `,md:(0,O.iv)`
    top: 4%;
    left: 76%;
  `,lg:(0,O.iv)`
    top: 10%;
    left: 76%;
  `},H=(0,O.iv)`
  background-color: ${e=>e.selected?e.theme.buttons.icon.selected.bgd:e.theme.buttons.icon.static.bgd};
  color: ${e=>e.selected?e.theme.buttons.icon.selected.text:e.theme.buttons.icon.static.text};
  border: ${e=>e.selected?e.theme.buttons.icon.selected.border:e.theme.buttons.icon.static.border};
  border-radius: ${e=>e.theme.radii.circle};
  padding: 0.1875rem;
  position: relative;

  > .ch-label {
    ${L};
  }

  > .ch-icon {
    width: ${e=>e.theme.iconButtonSizes[e.iconSize||"sm"]};
    height: ${e=>e.theme.iconButtonSizes[e.iconSize||"sm"]};
    margin: 0;
  }

  &:focus {
    background-color: ${({theme:e,selected:t})=>t?e.buttons.icon.selected.bgd:e.buttons.icon.static.bgd};
    border: ${e=>e.theme.buttons.icon.focus.border};
    color: ${e=>e.theme.buttons.icon.focus.text};
    color: ${({theme:e,selected:t})=>t?e.buttons.icon.selected.text:e.buttons.icon.static.text};
    box-shadow: ${e=>e.theme.buttons.icon.focus.shadow};
  }

  &:hover {
    background-color: ${e=>e.theme.buttons.icon.hover.bgd};
    border: ${e=>e.theme.buttons.icon.hover.border};
    color: ${e=>e.theme.buttons.icon.hover.text};
  }

  &:active {
    background-color: ${e=>e.theme.buttons.icon.active.bgd};
    border: ${e=>e.theme.buttons.icon.active.border};
    color: ${e=>e.theme.buttons.icon.active.text};
  }

  &:disabled {
    background-color: ${e=>e.theme.buttons.icon.disabled.bgd};
    border: ${e=>e.theme.buttons.icon.disabled.border};
    color: ${e=>e.theme.buttons.icon.disabled.text};
    cursor: not-allowed;
  }

  + * {
    position: absolute;
    font-size: 0.55rem;
    z-index: 1;
    ${({iconSize:e})=>e?Z[e]:Z.sm}
  }
`,W=O.ZP.span`
  display: inline-block;
  position: relative;
`,U=(0,S.forwardRef)((e,t)=>S.createElement(B,Object.assign({},e,{className:e.className||"",as:e.tag,ref:t,"aria-label":e.label,"data-testid":"button",disabled:e.disabled}),e.icon&&S.createElement("span",{className:"ch-icon","data-testid":"button-icon"},e.icon),S.createElement("span",{className:"ch-label","data-testid":"button-label"},e.label)));(0,S.forwardRef)((e,t)=>S.createElement(U,Object.assign({variant:"primary"},e)));let G=(0,S.forwardRef)((e,t)=>S.createElement(U,Object.assign({variant:"secondary"},e))),q=(0,S.forwardRef)((e,t)=>S.createElement(W,null,S.createElement(U,Object.assign({ref:t,variant:"icon"},e)),e.badge)),Y=e=>{var{className:t,children:r,viewBox:i="0 0 24 24",xmlns:o="http://www.w3.org/2000/svg",width:n,height:a,title:s}=e,f=_(e,["className","children","viewBox","xmlns","width","height","title"]);return S.createElement("svg",Object.assign({xmlns:o,className:`Svg ${t||""}`,height:a,style:{width:n,height:a},viewBox:i,width:n},f),s&&S.createElement("title",null,s),S.createElement("g",{fillRule:"evenodd",fill:"currentColor"},r))},J={up:"0",right:"90",down:"180",left:"270"};(0,O.ZP)(Y)`
  transform: ${({direction:e})=>`rotate(${J[e||"up"]}deg)`};
`;let Q={up:"0",right:"90",down:"180",left:"270"};(0,O.ZP)(Y)`
  transform: ${({direction:e})=>`rotate(${Q[e||"up"]}deg)`};
`;let X={default:(0,O.iv)`
  .ch-caution-background {
    fill: transparent;
  }
`,"fill-warning":(0,O.iv)`
  .ch-caution-background {
    fill: ${e=>e.theme.colors.warning.primary};
  }

  .ch-caution-exclamation {
    fill: ${e=>e.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${e=>e.theme.colors.warning.primary};
  }
`,"fill-error":(0,O.iv)`
  .ch-caution-background {
    fill: ${e=>e.theme.colors.error.primary};
  }

  .ch-caution-exclamation {
    fill: ${e=>e.theme.colors.greys.white};
  }

  .ch-caution-border {
    fill: ${e=>e.theme.colors.error.primary};
  }
`},K=O.ZP.g`
  ${e=>X[e.variant||"default"]};
`,ee=e=>S.createElement(Y,Object.assign({},e),S.createElement(K,{fill:"currentColor",variant:e.variant},S.createElement("path",{className:"ch-caution-background",d:"M18.728 15.186l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841"}),S.createElement("path",{className:"ch-caution-exclamation",d:"M12.572 14.609v1.219h-1.166v-1.219h1.166zm.023-5.388v1.83l-.288 2.727h-.597l-.305-2.727V9.22h1.19z"}),S.createElement("path",{className:"ch-caution-border",d:"M17.894 16.539c-.161.288-.463.46-.81.46H6.915c-.343 0-.645-.172-.806-.46-.15-.266-.143-.568.017-.829l5.085-8.281c.33-.536 1.25-.538 1.58 0l5.086 8.281c.16.261.167.563.018.829m.834-1.353l-5.085-8.281C13.293 6.338 12.68 6 12 6c-.68 0-1.294.338-1.642.905l-5.085 8.281c-.351.571-.365 1.258-.04 1.841.336.6.98.972 1.68.972h10.17c.704 0 1.348-.372 1.683-.972.326-.583.312-1.27-.04-1.841"})));ee.displayName="Caution";let et=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7zm3.493 4.873c.211-.179.526-.15.705.061.177.211.15.527-.061.705l-4.476 3.764-.003.002v.001c-.029.024-.061.035-.091.051-.02.011-.039.027-.061.035-.054.019-.11.028-.166.028-.072 0-.143-.015-.209-.045-.016-.007-.027-.023-.042-.032-.047-.028-.095-.056-.132-.1l-.001-.002-.003-.004-1.84-2.246c-.175-.213-.143-.529.07-.703.213-.177.529-.145.704.07l1.518 1.853z"}));et.displayName="CheckRound";let er=e=>S.createElement(Y,Object.assign({},e,{title:"Clear"}),S.createElement("path",{d:"M12 5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zM9.172 9.17c-.196.196-.196.513 0 .708L11.293 12l-2.12 2.12c-.197.197-.197.513 0 .708.096.098.224.147.352.147.128 0 .256-.05.354-.147L12 12.707l2.121 2.12c.098.099.226.148.353.148.128 0 .256-.05.354-.147.195-.195.195-.511 0-.707L12.708 12l2.12-2.122c.195-.195.195-.512 0-.707-.195-.195-.512-.195-.707 0l-2.12 2.12-2.122-2.12c-.196-.195-.512-.195-.707 0z"}));er.displayName="Clear";let ei=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 2.559c.276 0 .5.223.5.5V11.5h3c.276 0 .5.224.5.5s-.224.5-.5.5H12c-.276 0-.5-.224-.5-.5V8.059c0-.277.224-.5.5-.5z"}));ei.displayName="Clock";let eo=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 1c-3.86 0-7 3.14-7 7 0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7 0-3.86-3.141-7-7-7zm-3 6c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm6 0c.553 0 1 .448 1 1s-.447 1-1 1c-.553 0-1-.448-1-1s.447-1 1-1zm-3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"}));eo.displayName="Dots",O.ZP.circle`
  fill: ${e=>e.theme.colors.primary.main};
`;let en=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm.016 6.476c.276 0 .5.224.5.5v2.498c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-2.498c0-.276.224-.5.5-.5zM12 8.709c.414 0 .75.335.75.75 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.415.336-.75.75-.75z"}));en.displayName="Information";let ea=(0,O.ZP)(e=>{var t=_(e,["poorConnection","muted"]);return S.createElement(Y,Object.assign({},t))})`
  ${e=>e.poorConnection?`color: ${e.theme.colors.error.light}`:""}
`,es=e=>{var{muted:t=!1,poorConnection:r=!1,mutedTitle:i="Muted microphone",unmutedTitle:o="Microphone"}=e,n=_(e,["muted","poorConnection","mutedTitle","unmutedTitle"]);return S.createElement(ea,Object.assign({},n,{muted:t,poorConnection:r,title:t?i:o,"data-testid":r?"poor-connection-mic":"good-connection-mic"}),S.createElement("path",{d:t?r?"M4.146 4.146c.196-.195.513-.195.708 0L9.168 8.46h.018l.813.815v.018l5.854 5.854c.002-.005.005-.008.008-.01l.724.724-.008.01 3.276 3.275c.195.195.195.512 0 .707-.098.098-.226.147-.354.147-.127 0-.255-.049-.352-.146l-3.281-3.281C14.82 17.459 13.475 18 11.998 18c-3.308 0-6-2.691-6-6 0-.277.224-.5.5-.5.278 0 .5.223.5.5 0 2.757 2.244 5 5 5 1.2 0 2.29-.436 3.147-1.146l-1.439-1.438c-.14.105-.287.207-.445.285l-.447-.895c.062-.03.116-.073.174-.11l-2.99-2.989v.941H9v-1.063h.88L4.147 4.853c-.196-.194-.196-.511 0-.707zM14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 1.106-.307 2.14-.83 3.031l-.748-.748c.357-.687.578-1.456.578-2.283 0-.276.224-.5.5-.5zm-6.293 2.317c.25.121.517.183.793.183l.016 1.001-.098-.008c-.359-.012-.76-.089-1.147-.275zm-1.085-1.278c.093.282.234.536.42.757l-.766.644c-.267-.319-.47-.685-.603-1.089zM15 11.618v.155c0 .325-.051.643-.139.95l-.867-.868c.001-.027.006-.055.006-.082v-.155h1zm0-2.126v1.062h-1V9.492h1zm0-2.125v1.062h-1V7.367h1zM9.155 6.201l.955.297c-.073.235-.11.48-.11.73v.17h-.463l-.512-.512c.024-.232.061-.463.13-.685zm5.079-1.128c.268.321.469.689.599 1.093l-.951.307c-.091-.283-.231-.537-.415-.759zm-3.514-.765l.453.891c-.246.126-.474.312-.656.535l-.776-.63c.274-.338.603-.604.979-.796zM12 4c.434 0 .853.098 1.245.29l-.44.897C12.553 5.064 12.282 5 12 5l-.031-1z":"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM4.146 4.146c.196-.195.512-.195.708 0l15 15c.195.196.195.512 0 .708-.098.097-.226.146-.354.146-.128 0-.256-.049-.354-.146l-3.282-3.283C14.819 17.458 13.475 18 12 18c-3.309 0-6-2.691-6-6 0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5 1.199 0 2.288-.437 3.146-1.146l-1.452-1.453c-.483.366-1.058.599-1.694.599-1.654 0-3-1.448-3-3.228V9.707L4.146 4.854c-.195-.196-.195-.512 0-.708zM17.5 11.5c.276 0 .5.224.5.5 0 1.112-.31 2.152-.84 3.046l-.747-.746c.362-.693.587-1.467.587-2.3 0-.276.224-.5.5-.5zm-7.5-.793v1.065c0 1.229.897 2.228 2 2.228.362 0 .7-.111.992-.301L10 10.707zm2-6.708c1.654 0 3 1.45 3 3.228v4.546c0 .337-.062.655-.151.962l-.859-.858.01-.104V7.228C14 5.998 13.103 5 12 5s-2 .998-2 2.228v.658l-.971-.97C9.178 5.284 10.445 3.998 12 3.998z":r?"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zm-6.293 2.318c.25.12.517.183.793.183l.013.958v-.46l.085.492H12.014c-.486-.002-.876-.096-1.242-.274l.435-.9zm2.268-.543l.77.637c-.275.335-.606.6-.983.79l-.447-.896c.25-.125.473-.303.66-.53zm-3.353-.736c.093.283.235.537.42.757l-.765.645c-.268-.32-.472-.687-.604-1.09l.949-.312zM15 11.619v.155c0 .359-.053.71-.16 1.043l-.953-.305c.075-.233.113-.482.113-.738v-.155h1zm-5-1.033v1.063H9v-1.063h1zm5-1.093v1.063h-1V9.492h1zm-5-1.03v1.062H9V8.46h1zm5-1.095V8.43h-1V7.367h1zM9.156 6.2l.955.3c-.074.232-.111.478-.111.728v.17H9v-.17c0-.351.053-.696.156-1.027zm5.08-1.127c.267.32.468.688.598 1.093l-.951.306c-.091-.282-.23-.537-.415-.759l.768-.64zm-3.516-.766l.453.891c-.246.126-.473.311-.656.535l-.775-.63c.273-.337.602-.603.978-.795zM12 4c.433 0 .852.098 1.245.29l-.44.899C12.55 5.064 12.28 5 12 5l-.031-1h.03z":"M14.5 19c.276 0 .5.224.5.5s-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm3-7.5c.276 0 .5.224.5.5 0 3.309-2.691 6-6 6s-6-2.691-6-6c0-.276.224-.5.5-.5s.5.224.5.5c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.276.224-.5.5-.5zM12 4c1.654 0 3 1.448 3 3.227v4.546C15 13.552 13.654 15 12 15s-3-1.448-3-3.227V7.227C9 5.447 10.346 4 12 4zm0 1c-1.103 0-2 .999-2 2.227v4.546C10 13 10.897 14 12 14s2-1 2-2.227V7.227C14 5.999 13.103 5 12 5z"}))};es.displayName="Microphone";let ef=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M11 16c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m7.852 2.145l-3.294-3.253C16.455 13.843 17 12.485 17 11c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.464 0 2.807-.528 3.849-1.403l3.299 3.258c.098.097.225.145.352.145.129 0 .258-.05.355-.148.195-.197.193-.514-.003-.707"}));ef.displayName="Search";let el=e=>S.createElement(Y,Object.assign({},e),S.createElement("path",{d:"M8.824 9.88c-.21.18-.526.154-.705-.056-.159-.187-.156-.457-.006-.64l.063-.065 3.523-3c.165-.14.397-.156.577-.05l.074.052 3.477 3c.209.18.232.497.052.706-.16.185-.428.224-.632.104l-.074-.052-3.151-2.72-3.198 2.722zM15.176 14.12c.21-.18.526-.154.705.056.159.187.157.457.006.64l-.063.065-3.523 3c-.165.14-.397.156-.577.05l-.074-.052-3.477-3c-.209-.18-.232-.497-.052-.706.16-.185.428-.224.632-.104l.074.052 3.151 2.72 3.198-2.722z"}));el.displayName="UpAndDownCaret";let ed=O.ZP.input`
  ${L};

  &[aria-invalid='true'] + .ch-checkbox {
    border: ${e=>e.theme.inputs.error.border};
    box-shadow: ${e=>e.theme.inputs.error.shadow};
  }
`;O.ZP.div`
  background-color: ${e=>e.theme.inputs.bgd};
  border: ${e=>e.theme.inputs.border};
  border-radius: ${e=>e.theme.radii.default};
  box-shadow: ${e=>e.theme.inputs.shadow};
  color: ${e=>e.theme.inputs.fontColor};
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  transition: box-shadow 0.05s ease-in;

  > svg {
    left: -0.03125rem;
    position: absolute;
    transform: scale(1.5);
  }

  ${ed}:checked ~ & {
    background-color: ${e=>e.theme.inputs.checked.bgd};
    border: ${e=>e.theme.inputs.checked.border};
    box-shadow: ${e=>e.theme.inputs.checked.shadow};
    color: ${e=>e.theme.inputs.checked.fontColor};
  }

  ${ed}:focus ~ & {
    border: ${e=>e.theme.inputs.focus.border};
    box-shadow: ${e=>e.theme.inputs.focus.shadow};
  }
`,(0,S.createContext)({showLabels:!1,layout:"top"});let ec={"undocked-vertical":"flex-direction: column;","undocked-horizontal":"flex-direction: row;",top:"flex-direction: row; width: 100%; top: 0; position: fixed;",bottom:"flex-direction: row; width: 100%; bottom: 0; position: fixed;",right:"flex-direction: column; height: 100%; right: 0; position: fixed;",left:"flex-direction: column; height: 100%; left: 0; position: fixed;"},eu={popOver:"grid-template-columns: 2.5rem minmax(0.5rem, auto);","popOver&vertical":"grid-template-columns: 1.5rem 1.5rem 1.5rem"},ep=e=>"right"===e||"left"===e||"undocked-vertical"===e,em=e=>"undocked-vertical"===e||"undocked-horizontal"===e,eh={},eg=e=>(0,O.iv)`
    ${({theme:e})=>e.mediaQueries.max.sm} {
      ${eh}
      ${e=>ep(e.layout)?ec.left:ec.bottom};
      box-shadow: ${e=>e.theme.controlBar.shadow};
      border: none;
      height: ${e=>ep(e.layout)&&"100%"};
      width: ${e=>!ep(e.layout)&&"100%"};
    }

    ${({theme:e})=>e.mediaQueries.max.xs} {
      justify-content: ${e=>ep(e.layout)?"center":"space-around"};
      ${eh}
      ${e=>ep(e.layout)?ec.left:ec.bottom};
      box-shadow: ${({theme:e})=>e.controlBar.shadow};
      border: none;
    }
  `;O.ZP.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme:e,layout:t})=>em(t)?e.radii.default:"0"};
  background-color: ${e=>e.theme.controlBar.bgd};
  opacity: ${e=>e.theme.controlBar.opacity};
  border: ${({theme:e,layout:t})=>em(t)?"none":e.controlBar.border};
  box-shadow: ${({theme:e,layout:t})=>em(t)?e.controlBar.shadow:"none"};
  ${({layout:e})=>ec[`${e}`]};

  ${e=>e.responsive&&eg()}

  width: ${({layout:e})=>ep(e)&&"5rem"};
  height: ${({layout:e})=>!ep(e)&&"5rem"};

  ${j}
  ${I}
`,O.ZP.div`
  margin: ${({layout:e})=>ep(e)?"0.625rem 0":"0 0.625rem"};
  display: grid;
  grid-template-rows: ${({showLabels:e})=>e?"1.5rem 1rem":"1.5rem"};
  justify-items: center;
  align-items: center;
  ${({popOver:e,layout:t,children:r})=>`
    ${!ep(t)&&(e||r)&&eu.popOver||""}
    ${ep(t)&&(e||r)&&eu["popOver&vertical"]||""}
  `};

  > :first-child {
    grid-column-start: ${({layout:e,popOver:t,children:r})=>ep(e)&&(t||r)?"2":"1"};
  }

  .ch-control-bar-item-iconButton {
    .ch-icon {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
  }

  .ch-control-bar-item-caret {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    .ch-icon {
      width: 100%;
      height: 100%;
    }

    // setting this transform on the shape so we
    // don't overwrite the rotate transform on the Caret
    .Svg g {
      transform: scale(1.333);
      transform-origin: 50% 50%;
    }
  }

  .ch-control-bar-popover {
    background-color: inherit;
    grid-column-start: ${({layout:e,popOver:t,children:r})=>ep(e)&&(t||r)?"2":"1"};
    color: ${({theme:e})=>e.controlBar.text};

    .isOpen.ch-control-bar-item-caret {
      color: ${e=>e.theme.colors.primary.main};
    }
  }

  .ch-control-bar-item-label {
    color: ${({theme:e})=>e.controlBar.text};
    grid-row-start: 2;
    font-size: ${e=>e.theme.fontSizes.footnote.fontSize}; /* TODO: get updated font size from design */
    padding-top: 0.25rem;
    justify-self: center;
    grid-column: ${({layout:e,popOver:t,children:r})=>ep(e)&&(t||r)?"2":"1"};
  }

  ${({theme:e})=>e.mediaQueries.max.sm} {
    justify-content: space-around;
    button ~ span {
      display: none;
    }
  }

  ${({theme:e})=>e.mediaQueries.max.xs} {
    margin: ${({layout:e})=>ep(e)?"0.75rem 0":"0"};
    button ~ span {
      display: none;
    }
  }
`;var eb="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function ev(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(e,null==t?r.path:t)}},r.exports),r.exports}var ey=ev(function(e){!/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/function(){var t={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var n=arguments[o];n&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var n in e)t.call(e,n)&&e[n]&&(o=i(o,n));return o}(n)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}),ew=S.createContext(),ex=S.createContext();function e$(e){var t=e.children,r=S.useState(null),i=r[0],o=r[1],n=S.useRef(!1);S.useEffect(function(){return function(){n.current=!0}},[]);var a=S.useCallback(function(e){n.current||o(e)},[]);return S.createElement(ew.Provider,{value:i},S.createElement(ex.Provider,{value:a},t))}var ek=function(e){return Array.isArray(e)?e[0]:e},eE=function(e){if("function"==typeof e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return e.apply(void 0,r)}},eS=function(e,t){if("function"==typeof e)return eE(e,t);null!=e&&(e.current=t)},eO=function(e){return e.reduce(function(e,t){var r=t[0],i=t[1];return e[r]=i,e},{})},eD="undefined"!=typeof window&&window.document&&window.document.createElement?S.useLayoutEffect:S.useEffect,eA="bottom",eC="right",ez="left",e_="auto",eT=["top",eA,eC,ez],eI="start",ej="viewport",eL="popper",eV=eT.reduce(function(e,t){return e.concat([t+"-"+eI,t+"-end"])},[]),eM=[].concat(eT,[e_]).reduce(function(e,t){return e.concat([t,t+"-"+eI,t+"-end"])},[]),eP=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function eR(e){return e?(e.nodeName||"").toLowerCase():null}function eB(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function eF(e){var t=eB(e).Element;return e instanceof t||e instanceof Element}function eN(e){var t=eB(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function eZ(e){if("undefined"==typeof ShadowRoot)return!1;var t=eB(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function eH(e){return e.split("-")[0]}var eW=Math.max,eU=Math.min,eG=Math.round;function eq(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function eY(){return!/^((?!chrome|android).)*safari/i.test(eq())}function eJ(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var i=e.getBoundingClientRect(),o=1,n=1;t&&eN(e)&&(o=e.offsetWidth>0&&eG(i.width)/e.offsetWidth||1,n=e.offsetHeight>0&&eG(i.height)/e.offsetHeight||1);var a=(eF(e)?eB(e):window).visualViewport,s=!eY()&&r,f=(i.left+(s&&a?a.offsetLeft:0))/o,l=(i.top+(s&&a?a.offsetTop:0))/n,d=i.width/o,c=i.height/n;return{width:d,height:c,top:l,right:f+d,bottom:l+c,left:f,x:f,y:l}}function eQ(e){var t=eJ(e),r=e.offsetWidth,i=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-i)&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function eX(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&eZ(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function eK(e){return eB(e).getComputedStyle(e)}function e0(e){return((eF(e)?e.ownerDocument:e.document)||window.document).documentElement}function e1(e){return"html"===eR(e)?e:e.assignedSlot||e.parentNode||(eZ(e)?e.host:null)||e0(e)}function e5(e){return eN(e)&&"fixed"!==eK(e).position?e.offsetParent:null}function e2(e){for(var t=eB(e),r=e5(e);r&&["table","td","th"].indexOf(eR(r))>=0&&"static"===eK(r).position;)r=e5(r);return r&&("html"===eR(r)||"body"===eR(r)&&"static"===eK(r).position)?t:r||function(e){var t=/firefox/i.test(eq());if(/Trident/i.test(eq())&&eN(e)&&"fixed"===eK(e).position)return null;var r=e1(e);for(eZ(r)&&(r=r.host);eN(r)&&0>["html","body"].indexOf(eR(r));){var i=eK(r);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return r;r=r.parentNode}return null}(e)||t}function e3(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function e4(e,t,r){return eW(e,eU(t,r))}function e7(){return{top:0,right:0,bottom:0,left:0}}function e6(e){return Object.assign({},e7(),e)}function e8(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function e9(e){return e.split("-")[1]}var te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tt(e){var t,r,i,o,n,a,s,f=e.popper,l=e.popperRect,d=e.placement,c=e.variation,u=e.offsets,p=e.position,m=e.gpuAcceleration,h=e.adaptive,g=e.roundOffsets,b=e.isFixed,v=u.x,y=void 0===v?0:v,w=u.y,x=void 0===w?0:w,$="function"==typeof g?g({x:y,y:x}):{x:y,y:x};y=$.x,x=$.y;var k=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),S=ez,O="top",D=window;if(h){var A=e2(f),C="clientHeight",z="clientWidth";A===eB(f)&&"static"!==eK(A=e0(f)).position&&"absolute"===p&&(C="scrollHeight",z="scrollWidth"),("top"===d||(d===ez||d===eC)&&"end"===c)&&(O=eA,x-=(b&&A===D&&D.visualViewport?D.visualViewport.height:A[C])-l.height,x*=m?1:-1),(d===ez||("top"===d||d===eA)&&"end"===c)&&(S=eC,y-=(b&&A===D&&D.visualViewport?D.visualViewport.width:A[z])-l.width,y*=m?1:-1)}var _=Object.assign({position:p},h&&te),T=!0===g?(t={x:y,y:x},r=eB(f),i=t.x,o=t.y,{x:eG(i*(n=r.devicePixelRatio||1))/n||0,y:eG(o*n)/n||0}):{x:y,y:x};return(y=T.x,x=T.y,m)?Object.assign({},_,((s={})[O]=E?"0":"",s[S]=k?"0":"",s.transform=1>=(D.devicePixelRatio||1)?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",s)):Object.assign({},_,((a={})[O]=E?x+"px":"",a[S]=k?y+"px":"",a.transform="",a))}var tr={passive:!0},ti={left:"right",right:"left",bottom:"top",top:"bottom"};function to(e){return e.replace(/left|right|bottom|top/g,function(e){return ti[e]})}var tn={start:"end",end:"start"};function ta(e){return e.replace(/start|end/g,function(e){return tn[e]})}function ts(e){var t=eB(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tf(e){return eJ(e0(e)).left+ts(e).scrollLeft}function tl(e){var t=eK(e),r=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+i)}function td(e,t){void 0===t&&(t=[]);var r,i=function e(t){return["html","body","#document"].indexOf(eR(t))>=0?t.ownerDocument.body:eN(t)&&tl(t)?t:e(e1(t))}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),n=eB(i),a=o?[n].concat(n.visualViewport||[],tl(i)?i:[]):i,s=t.concat(a);return o?s:s.concat(td(e1(a)))}function tc(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function tu(e,t,r){var i,o,n,a,s,f,l,d,c,u;return t===ej?tc(function(e,t){var r=eB(e),i=e0(e),o=r.visualViewport,n=i.clientWidth,a=i.clientHeight,s=0,f=0;if(o){n=o.width,a=o.height;var l=eY();(l||!l&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:n,height:a,x:s+tf(e),y:f}}(e,r)):eF(t)?((i=eJ(t,!1,"fixed"===r)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):tc((o=e0(e),a=e0(o),s=ts(o),f=null==(n=o.ownerDocument)?void 0:n.body,l=eW(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),d=eW(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),c=-s.scrollLeft+tf(o),u=-s.scrollTop,"rtl"===eK(f||a).direction&&(c+=eW(a.clientWidth,f?f.clientWidth:0)-l),{width:l,height:d,x:c,y:u}))}function tp(e){var t,r=e.reference,i=e.element,o=e.placement,n=o?eH(o):null,a=o?e9(o):null,s=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2;switch(n){case"top":t={x:s,y:r.y-i.height};break;case eA:t={x:s,y:r.y+r.height};break;case eC:t={x:r.x+r.width,y:f};break;case ez:t={x:r.x-i.width,y:f};break;default:t={x:r.x,y:r.y}}var l=n?e3(n):null;if(null!=l){var d="y"===l?"height":"width";switch(a){case eI:t[l]=t[l]-(r[d]/2-i[d]/2);break;case"end":t[l]=t[l]+(r[d]/2-i[d]/2)}}return t}function tm(e,t){void 0===t&&(t={});var r,i,o,n,a,s,f,l,d=t,c=d.placement,u=void 0===c?e.placement:c,p=d.strategy,m=void 0===p?e.strategy:p,h=d.boundary,g=d.rootBoundary,b=d.elementContext,v=void 0===b?eL:b,y=d.altBoundary,w=d.padding,x=void 0===w?0:w,$=e6("number"!=typeof x?x:e8(x,eT)),k=e.rects.popper,E=e.elements[void 0!==y&&y?v===eL?"reference":eL:v],S=(r=eF(E)?E:E.contextElement||e0(e.elements.popper),i=void 0===h?"clippingParents":h,o=void 0===g?ej:g,f=(s=[].concat("clippingParents"===i?(n=td(e1(r)),eF(a=["absolute","fixed"].indexOf(eK(r).position)>=0&&eN(r)?e2(r):r)?n.filter(function(e){return eF(e)&&eX(e,a)&&"body"!==eR(e)}):[]):[].concat(i),[o]))[0],(l=s.reduce(function(e,t){var i=tu(r,t,m);return e.top=eW(i.top,e.top),e.right=eU(i.right,e.right),e.bottom=eU(i.bottom,e.bottom),e.left=eW(i.left,e.left),e},tu(r,f,m))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),O=eJ(e.elements.reference),D=tp({reference:O,element:k,strategy:"absolute",placement:u}),A=tc(Object.assign({},k,D)),C=v===eL?A:O,z={top:S.top-C.top+$.top,bottom:C.bottom-S.bottom+$.bottom,left:S.left-C.left+$.left,right:C.right-S.right+$.right},_=e.modifiersData.offset;if(v===eL&&_){var T=_[u];Object.keys(z).forEach(function(e){var t=[eC,eA].indexOf(e)>=0?1:-1,r=["top",eA].indexOf(e)>=0?"y":"x";z[e]+=T[r]*t})}return z}function th(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tg(e){return["top",eC,eA,ez].some(function(t){return e[t]>=0})}var tb={placement:"bottom",modifiers:[],strategy:"absolute"};function tv(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ty=(n=void 0===(o=(i={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,i=e.options,o=i.scroll,n=void 0===o||o,a=i.resize,s=void 0===a||a,f=eB(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return n&&l.forEach(function(e){e.addEventListener("scroll",r.update,tr)}),s&&f.addEventListener("resize",r.update,tr),function(){n&&l.forEach(function(e){e.removeEventListener("scroll",r.update,tr)}),s&&f.removeEventListener("resize",r.update,tr)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=tp({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,i=r.gpuAcceleration,o=r.adaptive,n=r.roundOffsets,a=void 0===n||n,s={placement:eH(t.placement),variation:e9(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===i||i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,tt(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,tt(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];eN(o)&&eR(o)&&(Object.assign(o.style,r),Object.keys(i).forEach(function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],o=t.attributes[e]||{},n=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});eN(i)&&eR(i)&&(Object.assign(i.style,n),Object.keys(o).forEach(function(e){i.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,o=r.offset,n=void 0===o?[0,0]:o,a=eM.reduce(function(e,r){var i,o,a,s,f,l;return e[r]=(i=t.rects,a=[ez,"top"].indexOf(o=eH(r))>=0?-1:1,f=(s="function"==typeof n?n(Object.assign({},i,{placement:r})):n)[0],l=s[1],f=f||0,l=(l||0)*a,[ez,eC].indexOf(o)>=0?{x:l,y:f}:{x:f,y:l}),e},{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=r.mainAxis,n=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,l=r.padding,d=r.boundary,c=r.rootBoundary,u=r.altBoundary,p=r.flipVariations,m=void 0===p||p,h=r.allowedAutoPlacements,g=t.options.placement,b=eH(g)===g,v=f||(b||!m?[to(g)]:function(e){if(eH(e)===e_)return[];var t=to(e);return[ta(e),t,ta(t)]}(g)),y=[g].concat(v).reduce(function(e,r){var i,o,n,a,s,f,u,p,g,b,v,y;return e.concat(eH(r)===e_?(o=(i={placement:r,boundary:d,rootBoundary:c,padding:l,flipVariations:m,allowedAutoPlacements:h}).placement,n=i.boundary,a=i.rootBoundary,s=i.padding,f=i.flipVariations,p=void 0===(u=i.allowedAutoPlacements)?eM:u,0===(v=(b=(g=e9(o))?f?eV:eV.filter(function(e){return e9(e)===g}):eT).filter(function(e){return p.indexOf(e)>=0})).length&&(v=b),Object.keys(y=v.reduce(function(e,r){return e[r]=tm(t,{placement:r,boundary:n,rootBoundary:a,padding:s})[eH(r)],e},{})).sort(function(e,t){return y[e]-y[t]})):r)},[]),w=t.rects.reference,x=t.rects.popper,$=new Map,k=!0,E=y[0],S=0;S<y.length;S++){var O=y[S],D=eH(O),A=e9(O)===eI,C=["top",eA].indexOf(D)>=0,z=C?"width":"height",_=tm(t,{placement:O,boundary:d,rootBoundary:c,altBoundary:u,padding:l}),T=C?A?eC:ez:A?eA:"top";w[z]>x[z]&&(T=to(T));var I=to(T),j=[];if(n&&j.push(_[D]<=0),s&&j.push(_[T]<=0,_[I]<=0),j.every(function(e){return e})){E=O,k=!1;break}$.set(O,j)}if(k)for(var L=m?3:1,V=function(e){var t=y.find(function(t){var r=$.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},M=L;M>0&&"break"!==V(M);M--);t.placement!==E&&(t.modifiersData[i]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,i=e.name,o=r.mainAxis,n=r.altAxis,a=r.boundary,s=r.rootBoundary,f=r.altBoundary,l=r.padding,d=r.tether,c=void 0===d||d,u=r.tetherOffset,p=void 0===u?0:u,m=tm(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:f}),h=eH(t.placement),g=e9(t.placement),b=!g,v=e3(h),y="x"===v?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,$=t.rects.popper,k="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,E="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(w){if(void 0===o||o){var D,A="y"===v?"top":ez,C="y"===v?eA:eC,z="y"===v?"height":"width",_=w[v],T=_+m[A],I=_-m[C],j=c?-$[z]/2:0,L=g===eI?x[z]:$[z],V=g===eI?-$[z]:-x[z],M=t.elements.arrow,P=c&&M?eQ(M):{width:0,height:0},R=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:e7(),B=R[A],F=R[C],N=e4(0,x[z],P[z]),Z=b?x[z]/2-j-N-B-E.mainAxis:L-N-B-E.mainAxis,H=b?-x[z]/2+j+N+F+E.mainAxis:V+N+F+E.mainAxis,W=t.elements.arrow&&e2(t.elements.arrow),U=W?"y"===v?W.clientTop||0:W.clientLeft||0:0,G=null!=(D=null==S?void 0:S[v])?D:0,q=e4(c?eU(T,_+Z-G-U):T,_,c?eW(I,_+H-G):I);w[v]=q,O[v]=q-_}if(void 0!==n&&n){var Y,J,Q="x"===v?"top":ez,X="x"===v?eA:eC,K=w[y],ee="y"===y?"height":"width",et=K+m[Q],er=K-m[X],ei=-1!==["top",ez].indexOf(h),eo=null!=(J=null==S?void 0:S[y])?J:0,en=ei?et:K-x[ee]-$[ee]-eo+E.altAxis,ea=ei?K+x[ee]+$[ee]-eo-E.altAxis:er,es=c&&ei?(Y=e4(en,K,ea))>ea?ea:Y:e4(c?en:et,K,c?ea:er);w[y]=es,O[y]=es-K}t.modifiersData[i]=O}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,i=e.state,o=e.name,n=e.options,a=i.elements.arrow,s=i.modifiersData.popperOffsets,f=eH(i.placement),l=e3(f),d=[ez,eC].indexOf(f)>=0?"height":"width";if(a&&s){var c=e6("number"!=typeof(t="function"==typeof(t=n.padding)?t(Object.assign({},i.rects,{placement:i.placement})):t)?t:e8(t,eT)),u=eQ(a),p="y"===l?"top":ez,m="y"===l?eA:eC,h=i.rects.reference[d]+i.rects.reference[l]-s[l]-i.rects.popper[d],g=s[l]-i.rects.reference[l],b=e2(a),v=b?"y"===l?b.clientHeight||0:b.clientWidth||0:0,y=c[p],w=v-u[d]-c[m],x=v/2-u[d]/2+(h/2-g/2),$=e4(y,x,w);i.modifiersData[o]=((r={})[l]=$,r.centerOffset=$-x,r)}},effect:function(e){var t=e.state,r=e.options.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&eX(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,i=t.rects.reference,o=t.rects.popper,n=t.modifiersData.preventOverflow,a=tm(t,{elementContext:"reference"}),s=tm(t,{altBoundary:!0}),f=th(a,i),l=th(s,o,n),d=tg(f),c=tg(l);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":c})}}]}).defaultModifiers)?[]:o,s=void 0===(a=i.defaultOptions)?tb:a,function(e,t,r){void 0===r&&(r=s);var i,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},tb,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],l=!1,d={state:a,setOptions:function(r){var i,o,l,u,p,m="function"==typeof r?r(a.options):r;c(),a.options=Object.assign({},s,a.options,m),a.scrollParents={reference:eF(e)?td(e):e.contextElement?td(e.contextElement):[],popper:td(t)};var h=(o=Object.keys(i=[].concat(n,a.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return i[e]}),l=new Map,u=new Set,p=[],o.forEach(function(e){l.set(e.name,e)}),o.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var r=l.get(t);r&&e(r)}}),p.push(t)}(e)}),eP.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=h.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,i=e.effect;if("function"==typeof i){var o=i({state:a,name:t,instance:d,options:void 0===r?{}:r});f.push(o||function(){})}}),d.update()},forceUpdate:function(){if(!l){var e,t,r,i,o,n,s,f,c,u,p,m,h=a.elements,g=h.reference,b=h.popper;if(tv(g,b)){a.rects={reference:(t=e2(b),r="fixed"===a.options.strategy,i=eN(t),f=eN(t)&&(n=eG((o=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=eG(o.height)/t.offsetHeight||1,1!==n||1!==s),c=e0(t),u=eJ(g,f,r),p={scrollLeft:0,scrollTop:0},m={x:0,y:0},(i||!i&&!r)&&(("body"!==eR(t)||tl(c))&&(p=(e=t)!==eB(e)&&eN(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:ts(e)),eN(t)?(m=eJ(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):c&&(m.x=tf(c))),{x:u.left+p.scrollLeft-m.x,y:u.top+p.scrollTop-m.y,width:u.width,height:u.height}),popper:eQ(b)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var v=0;v<a.orderedModifiers.length;v++){if(!0===a.reset){a.reset=!1,v=-1;continue}var y=a.orderedModifiers[v],w=y.fn,x=y.options,$=void 0===x?{}:x,k=y.name;"function"==typeof w&&(a=w({state:a,options:$,name:k,instance:d})||a)}}}},update:(i=function(){return new Promise(function(e){d.forceUpdate(),e(a)})},function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})})),o}),destroy:function(){c(),l=!0}};if(!tv(e,t))return d;function c(){f.forEach(function(e){return e()}),f=[]}return d.setOptions(r).then(function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)}),d}),tw="undefined"!=typeof Element,tx="function"==typeof Map,t$="function"==typeof Set,tk="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView,tE=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var i,o,n,a;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((i=t.length)!=r.length)return!1;for(o=i;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(tx&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(a=t.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;for(a=t.entries();!(o=a.next()).done;)if(!e(o.value[1],r.get(o.value[0])))return!1;return!0}if(t$&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(a=t.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(tk&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((i=t.length)!=r.length)return!1;for(o=i;0!=o--;)if(t[o]!==r[o])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof r.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof r.toString)return t.toString()===r.toString();if((i=(n=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=i;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,n[o]))return!1;if(tw&&t instanceof Element)return!1;for(o=i;0!=o--;)if(("_owner"!==n[o]&&"__v"!==n[o]&&"__o"!==n[o]||!t.$$typeof)&&!e(t[n[o]],r[n[o]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}},tS=[],tO=function(e,t,r){void 0===r&&(r={});var i=S.useRef(null),o={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||tS},n=S.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=n[0],s=n[1],f=S.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);A.flushSync(function(){s({styles:eO(r.map(function(e){return[e,t.styles[e]||{}]})),attributes:eO(r.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),l=S.useMemo(function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[f,{name:"applyStyles",enabled:!1}])};return tE(i.current,e)?i.current||e:(i.current=e,e)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,f]),d=S.useRef();return eD(function(){d.current&&d.current.setOptions(l)},[l]),eD(function(){if(null!=e&&null!=t){var i=(r.createPopper||ty)(e,t,l);return d.current=i,function(){i.destroy(),d.current=null}}},[e,t,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},tD=function(){},tA=function(){return Promise.resolve(null)},tC=[];function tz(e){var t=e.placement,r=void 0===t?"bottom":t,i=e.strategy,o=void 0===i?"absolute":i,n=e.modifiers,a=void 0===n?tC:n,s=e.referenceElement,f=e.onFirstUpdate,l=e.innerRef,d=e.children,c=S.useContext(ew),u=S.useState(null),p=u[0],m=u[1],h=S.useState(null),g=h[0],b=h[1];S.useEffect(function(){eS(l,p)},[l,p]);var v=tO(s||c,p,S.useMemo(function(){return{placement:r,strategy:o,onFirstUpdate:f,modifiers:[].concat(a,[{name:"arrow",enabled:null!=g,options:{element:g}}])}},[r,o,f,a,g])),y=v.state,w=v.styles,x=v.forceUpdate,$=v.update,k=S.useMemo(function(){return{ref:m,style:w.popper,placement:y?y.placement:r,hasPopperEscaped:y&&y.modifiersData.hide?y.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:y&&y.modifiersData.hide?y.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:b},forceUpdate:x||tD,update:$||tA}},[m,b,r,y,w,$,x]);return ek(d)(k)}var t_=function(){};function tT(e){var t=e.children,r=e.innerRef,i=S.useContext(ex),o=S.useCallback(function(e){eS(r,e),eE(i,e)},[r,i]);return S.useEffect(function(){return function(){return eS(r,null)}},[]),S.useEffect(function(){t_(!!i,"`Reference` should not be used outside of a `Manager` component.")},[i]),ek(t)({ref:o})}let tI={ESCAPE:27,ARROW_UP:38,ARROW_DOWN:40},tj=O.ZP.ul`
  width: fit-content;
  max-width: 22rem;
  background-color: ${e=>e.theme.popOver.menuBgd};
  border: ${e=>e.theme.popOver.menuBorder};
  margin: 0;
  border-radius: 0.25rem;
  backdrop-filter: blur(1rem);
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: ${e=>e.theme.popOver.shadow};
  z-index: ${e=>e.theme.zIndex.popOver};
  display: table;
  overflow: inherit;
`,tL=O.ZP.button`
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`,tV=O.ZP.li`
  height: 2rem;
  position: relative;

  button,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: ${e=>e.theme.popOver.itemBgd};
    color: ${e=>e.theme.popOver.itemText};
    line-height: ${e=>e.theme.fontSizes.text.lineHeight};
    font-size: ${e=>e.theme.fontSizes.text.fontSize};
    padding: 0 2.5rem;
    text-decoration: none;
    outline: 0;

    &:hover,
    &:focus {
      background-color: ${e=>e.theme.popOver.active.itemBgd};
      color: ${e=>e.theme.popOver.active.itemText};
      outline: 0;
    }

    &:disabled {
      color: ${e=>e.theme.popOver.disabled};
    }
  }

  a {
    width: unset;
  }

  .ch-content > * {
    ${V};
  }

  .ch-check {
    position: absolute;
    left: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.33rem;
  }

  &:hover .ch-check g,
  &:focus .ch-check g {
    fill: ${e=>e.theme.popOver.active.itemText};
  }
`;(0,O.ZP)(tV)`
  > span {
    width: 100%;
    height: 100%;
    display: block;
    height: 2rem;
  }

  > button {
    position: relative;
  }

  .ch-caret {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    right: 0;
    color: inherit;
    fill: inherit;
  }
`,O.ZP.header`
  border-bottom: 0.0625rem solid ${e=>e.theme.popOver.separator};
  margin-bottom: 0.75rem;
  max-width: 22rem;

  img {
    width: 100%;
    display: inline-block;
    margin-top: -0.5rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  img + .ch-title {
    margin-top: 0.75rem;
  }

  .ch-title {
    ${V};
    padding: 0 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${e=>e.theme.popOver.titleText};
    font-size: 1.18125rem;
    line-height: ${e=>e.theme.fontSizes.text.lineHeight};
  }

  .ch-subtitle {
    ${V};
    padding: 0 2.5rem;
    color: #616672;
    font-size: ${e=>e.theme.fontSizes.text.fontSize};
    line-height: ${e=>e.theme.fontSizes.text.lineHeight};
    line-height: 1.43;
    margin: 0 0 1rem;
  }
`,O.ZP.li`
  margin: 0;
  border-width: 0.0625rem 0 0 0;
  border-style: solid;
  border-color: ${e=>e.theme.popOver.separator};
  margin-bottom: 0.75rem;
  opacity: 0.8;
`;let tM=e=>e.querySelectorAll("button, [href]"),tP=e=>{var{renderButton:t,renderButtonWrapper:r,onPopOverClick:i,children:o,isSubMenu:n=!1,placement:a="bottom-start",a11yLabel:s,className:f,closeOnClick:l=!0}=e,d=_(e,["renderButton","renderButtonWrapper","onPopOverClick","children","isSubMenu","placement","a11yLabel","className","closeOnClick"]);let c=(0,S.createRef)(),[u,p]=(0,S.useState)(!1);(0,S.useEffect)(()=>{if(u&&c.current){let e=tM(c.current);e&&e[0].focus()}},[u]);let m=e=>{let t=c.current;if(!n&&t){let r=tM(t),i=document.activeElement;for(let t=0;t<r.length;t++)if(r[t]===i){if("down"===e&&t!==r.length-1)return r[t+1].focus();if("up"===e&&t>0)return r[t-1].focus();break}}},h=e=>{if(l)return!e.target.closest("[data-menu='submenu']")&&p(!1)},g=()=>{p(!u),i&&i(u)};return!function(e,t){let r=t=>!!e.current&&!e.current.contains(t.target),i=e=>{r(e)&&t&&t(e)};(0,S.useEffect)(()=>(document.addEventListener("mousedown",i),document.addEventListener("touchstart",i),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}))}(c,()=>p(!1)),!function(e,t){let r=()=>!!e.current&&!e.current.contains(document.activeElement),i=e=>{if(9===e.keyCode&&r())return t(e)};(0,S.useEffect)(()=>(document.addEventListener("keyup",i),()=>{document.removeEventListener("keyup",i)}))}(c,()=>p(!1)),S.createElement("span",{ref:c,onKeyDown:e=>{switch(e.keyCode){case tI.ESCAPE:return p(!1);case tI.ARROW_UP:return m("up");case tI.ARROW_DOWN:return m("down")}},"data-testid":"popover"},S.createElement(e$,null,S.createElement(tT,null,({ref:e})=>{let i={ref:e,className:ey(f,"ch-popover-toggle"),onClick:g,"data-menu":n?"submenu":null,"aria-label":s,"aria-haspopup":!0,"aria-expanded":u,"data-testid":"popover-toggle"};if(t)return S.createElement(tL,Object.assign({},i),t(u));if(r){let{ref:e}=i,t=_(i,["ref"]);return S.createElement("span",{ref:e},r(u,t))}return null}),u&&S.createElement(tz,Object.assign({placement:a,modifiers:[{name:"offset",options:{offset:[-8,0]}}]},d),({ref:e,style:t,placement:r})=>S.createElement(tj,{"data-placement":r,onClick:e=>h(e),ref:e,style:t,"data-testid":"menu",className:"ch-popover-menu"},o))))},tR=new C.ConsoleLogger("ChimeSDKReactComponent",C.LogLevel.INFO),tB=S.createContext(tR),tF=({logger:e,children:t})=>S.createElement(tB.Provider,{value:e},t),tN=()=>(0,S.useContext)(tB),tZ=(0,O.iv)`
  top: calc(
    ${e=>{var t,r;return null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.top)&&void 0!==r?r:0}}px -
      ${1.75}rem
  );
  left: ${e=>{var t,r,i,o;return((null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.left)&&void 0!==r?r:0)+(null!==(o=null===(i=e.bounds)||void 0===i?void 0:i.right)&&void 0!==o?o:0))/2}}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(180deg);
    top: 100%;
    left: calc(50% - ${.5}rem);
  }
`,tH=(0,O.iv)`
  top: calc(
    ${e=>{var t,r;return null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.bottom)&&void 0!==r?r:0}}px +
      ${1.75}rem
  );
  left: ${e=>{var t,r,i,o;return((null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.left)&&void 0!==r?r:0)+(null!==(o=null===(i=e.bounds)||void 0===i?void 0:i.right)&&void 0!==o?o:0))/2}}px;
  transform: translateX(-50%) translateY(-50%);

  &::before {
    transform: rotateZ(0deg);
    top: -${.5}rem;
    left: calc(50% - ${.5}rem);
  }
`,tW=(0,O.iv)`
  top: ${e=>{var t,r,i,o;return((null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.top)&&void 0!==r?r:0)+(null!==(o=null===(i=e.bounds)||void 0===i?void 0:i.bottom)&&void 0!==o?o:0))/2}}px;
  left: calc(
    ${e=>{var t,r;return null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.left)&&void 0!==r?r:0}}px - ${.75}rem
  );
  transform: translateY(-50%) translateX(-100%);

  &::before {
    transform: rotateZ(90deg);
    top: calc(50% - ${.25}rem);
    left: calc(100% - ${.25}rem);
  }
`,tU=(0,O.iv)`
  top: ${e=>{var t,r,i,o;return((null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.top)&&void 0!==r?r:0)+(null!==(o=null===(i=e.bounds)||void 0===i?void 0:i.bottom)&&void 0!==o?o:0))/2}}px;
  left: calc(
    ${e=>{var t,r;return null!==(r=null===(t=e.bounds)||void 0===t?void 0:t.right)&&void 0!==r?r:0}}px + ${.75}rem
  );
  transform: translateY(-50%);

  &::before {
    transform: rotateZ(270deg);
    top: calc(50% - ${.25}rem);
    left: -${.75}rem;
  }
`,tG=O.ZP.span`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  position: fixed;
  z-index: 9999;
  color: white;
  white-space: nowrap;
  pointer-events: none;
  line-height: normal;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${.5}rem;
  font-size: ${1}rem;
  font-weight: 300;
  padding: ${.5}rem ${.75}rem;
  white-space: nowrap;
  animation: fadeIn 0.3s;

  &::before {
    border-bottom: ${.5}rem solid rgba(0, 0, 0, 0.8);
    border-left: ${.5}rem solid transparent;
    border-right: ${.5}rem solid transparent;
    content: '';
    height: 0;
    transform: translateX(-100%) translateY(-50%);
    width: 0;
    z-index: 1;
    position: absolute;
  }

  ${e=>"top"===e.position&&tZ}
  ${e=>"bottom"===e.position&&tH}
  ${e=>"left"===e.position&&tW}
  ${e=>"right"===e.position&&tU}
`,tq={show:!1,bounds:null},tY=(e,t)=>r=>{var i;let o=tN(),[{show:n,bounds:a},s]=(0,S.useState)(tq),[f,l]=(0,S.useState)(null),d=null!==(i=r.tooltipPosition)&&void 0!==i?i:"top",c=(0,S.useCallback)(e=>{e.preventDefault(),e.stopPropagation();let t=e.target;for(;!t.getAttribute("data-tooltip");)t=t.parentElement;s({show:!0,bounds:t.getBoundingClientRect()})},[]),u=(0,S.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),s(tq)},[]);return(0,S.useEffect)(()=>(document.addEventListener("scroll",u,!0),()=>document.removeEventListener("scroll",u,!0)),[]),(0,S.useEffect)(()=>{let e=document.getElementById(t||"Tooltip__container");if(!e){o.warn("Attempted to use 'WithTooltip' but could not find container element.Pass a valid element ID or add 'Tooltip__container' ID to existing element");return}l(e)},[t]),S.createElement(S.Fragment,null,n&&a&&f&&A.createPortal(S.createElement(tG,{position:d,bounds:a},r.tooltipContent||r.label),f),S.createElement(e,Object.assign({},r,{"data-tooltip":!0,"data-tooltip-position":d,onClick:e=>{var t;n&&u(e),null===(t=null==r?void 0:r.onClick)||void 0===t||t.call(r,e)},onFocus:e=>{var t;n||c(e),null===(t=null==r?void 0:r.onFocus)||void 0===t||t.call(r,e)},onBlur:e=>{var t;n&&u(e),null===(t=null==r?void 0:r.onBlur)||void 0===t||t.call(r,e)},onMouseEnter:e=>{var t;n||c(e),null===(t=null==r?void 0:r.onMouseEnter)||void 0===t||t.call(r,e)},onMouseLeave:e=>{var t;n&&u(e),null===(t=null==r?void 0:r.onMouseLeave)||void 0===t||t.call(r,e)}})))},tJ=(0,O.iv)`
  display: flex;
  width: 100%;
  height: 100%;
`,tQ=(0,O.iv)`
  ${tJ};
  align-items: center;
  justify-content: center;
`,tX={"fill-space":tJ,"fill-space-centered":tQ,"equal-columns":(0,O.iv)`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`,stack:(0,O.iv)`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`},tK=O.ZP.div`
  align-items: ${e=>e.alignItems};
  display: ${e=>e.container?"flex":"block"};
  flex: ${e=>e.flex||""};
  flex-basis: ${e=>e.flexBasis};
  flex-direction: ${e=>e.flexDirection};
  flex-grow: ${e=>e.flexGrow||""};
  flex-shrink: ${e=>e.flexShrink};
  flex-wrap: ${e=>e.flexWrap};
  justify-content: ${e=>e.justifyContent};

  // layout variants
  ${e=>!!e.layout&&tX[e.layout]}

  ${j}
  ${I}
`;function t0(){let[e]=(0,S.useState)(()=>(0,z.Z)());return e}let t1=O.ZP.label`
  color: ${e=>e.theme.inputs.fontColor};
  font-size: ${e=>e.theme.fontSizes.label.fontSize};
  line-height: ${e=>e.theme.fontSizes.label.lineHeight};

  ${j}
  ${I}
`,t5=(0,S.forwardRef)((e,t)=>{let{className:r,tag:i}=e,o=_(e,["className","tag"]);return S.createElement(t1,Object.assign({as:i,"data-testid":"label",className:r||""},o),e.children)}),t2=(0,O.iv)`
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input,
    select {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    grid-template-rows: auto;
    gap: 0px 0.5rem;

    .ch-checkbox {
      grid-column: 1;
      grid-row: 1;
    }

    .ch-checkbox-label {
      line-height: 1.3;
      grid-column: 2;
    }

    .ch-help-text {
      grid-row: 2;
      grid-column: 1/3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
      padding-left: 0.125rem;
      display: grid;
      grid-template-columns: 1.5rem 1fr;
      grid-template-rows: auto;

      align-items: center;
    }

    .ch-radio-label {
      margin-left: 1rem;
      position: relative;
      bottom: -0.5px;
    }
  }
`,t3=(0,O.iv)`
  @media (max-width: 599px) {
    ${t2};
  }

  @media (min-width: 600px) {
    &.ch-form-field-input,
    &.ch-form-field-select,
    &.ch-form-field-textarea,
    &.ch-form-field-checkbox {
      display: grid;
      grid-template-columns: 30% 1fr;
      grid-template-rows: auto;
      gap: 0px 0.5rem;
      align-items: center;

      input {
        width: 100%;
      }

      .ch-help-text {
        grid-column: 2;
      }
    }

    &.ch-form-field-radiogroup {
      flex-wrap: wrap;

      fieldset {
        width: 100%;
      }

      .ch-radio-wrapper {
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-template-rows: auto;
        gap: 0px 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .ch-radio {
        grid-column: 2;
        grid-row: 1;
        margin-top: -4px;
      }

      .ch-radio-label {
        grid-column: 1;
        padding-right: 1rem;
        margin-left: 0;
      }

      .ch-help-text {
        width: 100%;
      }
    }
  }
`,t4={stack:t2,horizontal:t3,"input-only":(0,O.iv)`
  &.ch-form-field-input,
  &.ch-form-field-select,
  &.ch-form-field-textarea {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
    }
  }

  &.ch-form-field-checkbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .ch-checkbox {
      order: 1;
    }

    .ch-checkbox-label {
      order: 2;
      padding-left: 1rem;
    }

    .ch-help-text {
      width: 100%;
      order: 3;
    }
  }

  &.ch-form-field-radiogroup {
    flex-direction: column;

    .ch-radio-wrapper {
      display: block;
      margin-bottom: 0.5rem;
    }

    .ch-radio-label {
      margin-left: 1rem;
    }
  }
`},t7=O.ZP.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  fieldset {
    margin: 0;
    border: none;
    padding: 0;
  }

  .ch-help-text {
    font-size: ${e=>e.theme.fontSizes.small.fontSize};
    margin-top: 0.5rem;
    color: ${e=>e.error?e.theme.inputs.error.fontColor:e.theme.inputs.fontColor};
  }

  legend {
    font-size: ${e=>e.theme.fontSizes.text.fontSize};
    color: ${e=>e.theme.inputs.fontColor};
    margin-bottom: 0.5rem;
  }

  ${e=>!!e.layout&&t4[e.layout]}

  ${j}
  ${I}
`;(0,S.forwardRef)((e,t)=>{var r;let{field:i,label:o,layout:n="stack",errorText:a,fieldProps:s,infoText:f,error:l,onChange:d,value:c,checked:u,options:p,className:m}=e,h=_(e,["field","label","layout","errorText","fieldProps","infoText","error","onChange","value","checked","options","className"]),g=(null===(r=i.displayName)||void 0===r?void 0:r.toLowerCase())||"",b=t0(),v=t0(),y=l&&a||f;return S.createElement(t7,Object.assign({layout:n,error:l,className:`ch-form-field-${g} ${m||""}`,"data-testid":"form-field"},h),"input-only"===n&&"checkbox"!==g?null:"radiogroup"!==g&&S.createElement(t5,{htmlFor:b,className:`ch-${g}-label`},o),"radiogroup"===g?S.createElement("fieldset",{"aria-describedby":y&&v,"aria-invalid":l},o&&S.createElement("legend",null,o),S.createElement(i,Object.assign({options:p,ref:t,id:b,onChange:d,value:c},s))):S.createElement(i,Object.assign({options:p,"aria-label":"input-only"===n&&o||null,"aria-describedby":y&&v,"aria-invalid":l,ref:t,id:b,onChange:d,value:c,checked:u},s)),y&&S.createElement("span",{className:"ch-help-text",id:v},y))});let t6=O.ZP.h1`
  display: block;
  margin: 0;

  font-size: ${e=>e.theme.fontSizes[`h${e.level}`].mobile.fontSize};
  font-weight: ${e=>e.theme.fontSizes[`h${e.level}`].mobile.fontWeight};
  line-height: ${e=>e.theme.fontSizes[`h${e.level}`].mobile.lineHeight};

  ${({theme:e})=>e.mediaQueries.min.md} {
    font-size: ${e=>e.theme.fontSizes[`h${e.level}`].fontSize};
    font-weight: ${e=>e.theme.fontSizes[`h${e.level}`].fontWeight};
    line-height: ${e=>e.theme.fontSizes[`h${e.level}`].lineHeight};
  }

  ${j}
  ${I}
`;(0,S.forwardRef)((e,t)=>{let{tag:r,children:i,className:o,level:n}=e,a=_(e,["tag","children","className","level"]);return S.createElement(t6,Object.assign({as:r||`h${n}`,className:o||"",level:n,ref:t,"data-testid":"heading"},a),i)});let t8=e=>{let{sizing:t,leadingIcon:r}=e;return"sm"===t?`0.125rem 1.75rem 0.125rem ${r?"1.3125rem":"0.5rem"}`:`0.34375rem 1.75rem 0.34375rem ${r?"1.3125rem":"0.5rem"}`},t9=O.ZP.span`
  position: relative;

  > .ch-icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
  }

  > input {
    padding: ${e=>t8(e)};
  }
`,re=O.ZP.input`
  align-items: center;
  display: flex;
  letter-spacing: -0.005625rem;
  transition: box-shadow 0.05s ease-in;
  background-color: ${e=>e.theme.inputs.bgd};
  border: ${e=>e.theme.inputs.border};
  border-radius: ${e=>e.theme.inputs.borderRadius};
  box-shadow: ${e=>e.theme.inputs.shadow};
  color: ${e=>e.theme.inputs.fontColor};
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  line-height: ${e=>e.theme.fontSizes.text.lineHeight};

  &::placeholder {
    color: ${e=>e.theme.inputs.placeholder};
  }

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${e=>e.theme.inputs.focus.border};
    box-shadow: ${e=>e.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${e=>e.theme.inputs.error.border};
    box-shadow: ${e=>e.theme.inputs.error.shadow};
  }

  // Hides native clear button
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  ${j}
  ${I}
`,rt=O.ZP.button`
  position: absolute;
  top: 50%;
  right: 0.125rem;
  transform: translateY(-44%);
  border: none;
  background: none;
  cursor: pointer;
  display: ${e=>e.active?"block":"none"};

  path {
    fill: ${e=>e.theme.inputs.clearBg};
  }

  &:active,
  &:focus {
    outline: none;
  }
`,rr=(0,S.forwardRef)((e,t)=>{let{leadingIcon:r,children:i,sizing:o}=e,n=_(e,["leadingIcon","children","sizing"]);return S.createElement(t9,Object.assign({ref:t,sizing:o,leadingIcon:r},n,{"data-testid":"input-wrapper"}),r&&S.createElement("span",{className:"ch-icon"},r),i)}),ri=(0,S.forwardRef)((e,t)=>{let{type:r,value:i,sizing:o,onClear:n,onChange:a,className:s,leadingIcon:f,showClear:l=!0}=e,d=_(e,["type","value","sizing","onClear","onChange","className","leadingIcon","showClear"]),[c,u]=(0,S.useState)(!1),p=(0,S.useRef)(!1),m=(0,S.useRef)(null),h=t||m,g=(0,S.useRef)(null),b=e["aria-label"]?`clear ${e["aria-label"]}`:"clear";return(0,S.useEffect)(()=>{let e=!1,t=t=>{if(p.current){if(t.target!==g.current&&t.target!==h.current){p.current=!1,u(!1);return}e&&(e=!1)}},r=()=>{p.current&&(e=!0,setTimeout(()=>{e&&(p.current=!1,u(!1)),e=!1},10))};return document.addEventListener("focusin",t),document.addEventListener("focusout",r),()=>{document.removeEventListener("focusin",t),document.removeEventListener("focusout",r)}},[]),S.createElement(rr,{leadingIcon:f,sizing:o,className:`ch-input-wrapper ${s||""}`},S.createElement(re,Object.assign({},d,{value:i,type:r||"text",ref:h,className:"ch-input",onChange:a,"data-testid":"input",onFocus:()=>{p.current=!0,u(!0)}})),l&&S.createElement(rt,{type:"button",active:!!(n||c&&i.length),tabIndex:-1,"aria-label":b,onClick:()=>{var e;if(n){n();return}let t=h.current,r=null===(e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value"))||void 0===e?void 0:e.set;r&&t&&(r.call(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}))),t.focus()},ref:g},S.createElement(er,{width:"1.25rem"})))});ri.displayName="Input",(0,S.forwardRef)((e,t)=>{let r=Object.assign(Object.assign({},e),{sizing:"sm",type:"search",leadingIcon:S.createElement(ef,{"data-testid":"search-icon"})});return S.createElement(ri,Object.assign({},r,{ref:t}))}),(0,S.createContext)({onClose(){},labelID:"",dismissible:!0});let ro=(0,O.F4)`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,rn=(0,O.F4)`
  0% {
    opacity: 0;
    transform: translateY(4rem) scale(0.4);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;O.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.modal.wrapperBgd};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${e=>e.theme.zIndex.modal};
  overflow-x: hidden;
  animation: ${ro} 0.25s ease 0s forwards;
  will-change: opacity;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${e=>e.theme.radii.default};
    color: ${e=>e.theme.modal.text};
    background-color: ${e=>e.theme.modal.bgd};
    width: ${e=>e.theme.modalSizes[e.size||"md"].width};
    box-shadow: ${e=>e.theme.modal.shadow};
    max-width: ${e=>"fullscreen"===e.size?e.theme.modalSizes[e.size].width:"90vw"};
    height: ${e=>"fullscreen"===e.size?e.theme.modalSizes[e.size].height:"auto"};
    max-height: ${e=>e.theme.modalSizes[e.size||"md"].height};
    will-change: transform, opacity;
    animation: ${rn} 0.15s ease 0s forwards;

    @media only screen and (max-height: 25rem) {
      position: absolute;
      top: 2rem;
      height: auto;
      max-height: none;
    }
  }

  ${j}
  ${I}
`,O.ZP.header`
  padding: 1rem 1.5rem;

  .ch-close-button {
    position: absolute;
    right: 1.55rem;
    top: 1rem;
  }

  .ch-title {
    padding-right: 2rem;
    margin: 0;
    font-size: ${e=>e.theme.modal.titleSize};
    font-weight: ${e=>e.theme.modal.titleWeight};
  }

  ${j}
  ${I}
`,O.ZP.div`
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  line-height: ${e=>e.theme.fontSizes.text.lineHeight};
  padding: 0 1.5rem;
  flex-grow: 1;
  overflow-y: auto;

  ${j}
  ${I}
`,O.ZP.footer`
  padding: 1.5rem;
  border-top: 1px solid ${e=>e.theme.modal.border};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  div:first-child {
    display: flex;
    flex-direction: row-reverse;
  }

  button + button {
    margin: 0 0.5rem 0 0.5rem;
  }

  @media (max-width: 35rem) {
    flex-direction: column;

    button {
      width: 100%;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
    }

    button + button,
    div + div {
      margin: 0.5rem 0 0;
    }
  }

  ${j}
  ${I}
`;let ra=O.ZP.div`
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: ${({theme:e})=>`0.03125rem solid ${e.navbar.headerBorder}`};
  padding: 1rem;

  .ch-title {
    flex: 1;
  }

  .ch-btn-close {
    margin-left: auto;
    margin-right: 1rem;
  }

  ${({theme:e})=>e.mediaQueries.min.md} {
    display: none;
  }
`,rs=O.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  min-height: 3rem;
  flex-direction: column;
  padding: 0 0.25rem;

  .ch-navigation-bar-item-label {
    text-align: center;
    display: ${({showLabel:e})=>e?"block":"none"};
    font-size: ${({theme:e})=>e.fontSizes.footnote.fontSize};
    width: 100%;
    padding: 0 0.25rem;
    margin-bottom: 1.5rem;
  }
`;(0,O.ZP)(e=>{var{children:t,className:r,tag:i,alignItems:o="stretch",container:n=!1,flexBasis:a="auto",flexDirection:s="row",flexShrink:f=1,flexWrap:l="nowrap",justifyContent:d="flex-start"}=e,c=_(e,["children","className","tag","alignItems","container","flexBasis","flexDirection","flexShrink","flexWrap","justifyContent"]);return S.createElement(tK,Object.assign({alignItems:o,container:n,flexBasis:a,flexDirection:s,flexShrink:f,flexWrap:l,justifyContent:d,as:i,"data-testid":"flex",className:r||""},c),t)})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  color: ${e=>e.theme.navbar.text};
  background-color: ${({theme:e})=>e.navbar.bgd};
  width: 4.25rem;
  padding-top: 1rem;

  ${({theme:e,responsive:t})=>e.mediaQueries.max.md} {
    width: ${e=>e.responsive?"20rem":"4.25rem;"};
    padding-top: ${e=>e.responsive?"0":"1rem"};

    ${ra} {
      display: ${e=>e.responsive?"flex":"none"};
    }

    ${rs} {
      ${e=>e.responsive&&` 
        width: auto;
        flex-direction: row;

        .ch-navigation-bar-item-label {
          font-size: 1rem;
          text-align: left;
          margin-left: 1.5rem;
          margin-bottom: 0;
          display: block;
        }`};
    }
  }

  ${I}
  ${j}
`;let rf=(0,O.ZP)(q)``,rl=(0,O.ZP)(G)``;O.ZP.div`
  align-items: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e,severity:t})=>e.notification[t].text};
  background-color: ${({theme:e,severity:t})=>e.colors[t].primary};
  padding: 0.75rem;
  box-shadow: ${({theme:e})=>e.notification.shadow};
  border-radius: 0.25rem;
  margin: 0.75rem;
  max-width: 45rem;
  pointer-events: auto;

  .ch-severity-icon {
    width: 1.5rem;
    flex-shrink: 0;
  }

  .ch-message {
    display: flex;
    flex-flow: column wrap;
    font-size: ${e=>e.theme.fontSizes.text.fontSize};
    line-height: ${e=>e.theme.fontSizes.text.lineHeight};
    letter-spacing: -0.005625rem;
    margin: 0.5rem 0.75rem;

    &:empty {
      margin: 0;
    }
  }

  ${rl} {
    margin-right: 1.6rem;
    border-color: ${({theme:e,severity:t})=>e.notification[t].text};
  }

  ${rf},
  ${rl} {
    background-color: ${({theme:e,severity:t})=>e.colors[t].primary};
    color: ${({theme:e,severity:t})=>e.notification[t].closeButton.text}};
  }

  ${rf}:hover, ${rf}:focus, ${rl}:hover, ${rl}:focus {
    background-color: ${({theme:e,severity:t})=>e.notification[t].closeButton.hover.bgd};
    color: ${({theme:e,severity:t})=>e.notification[t].closeButton.hover.text};
  }

  ${rf}:active, ${rl}:active {
    background-color: ${({theme:e,severity:t})=>e.notification[t].closeButton.active.bgd};
    color: ${({theme:e,severity:t})=>e.notification[t].closeButton.active.text};
  }

  ${j}
  ${I}
`,(f=b||(b={})).ERROR="error",f.SUCCESS="success",f.INFO="info",f.WARNING="warning",S.createElement(et,null),S.createElement(ei,null),S.createElement(ee,null),S.createElement(en,null),(l=v||(v={})).ERROR="error",l.SUCCESS="success",l.INFO="info",l.WARNING="warning",(d=y||(y={}))[d.ADD=0]="ADD",d[d.REMOVE=1]="REMOVE",d[d.REMOVE_ALL=2]="REMOVE_ALL",S.createContext({notifications:[]}),S.createContext(()=>{}),O.ZP.div`
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${e=>e.theme.zIndex.notificationGroup};
  pointer-events: none;
`;let rd=O.ZP.input`
  ${L};

  &[aria-invalid='true'] + .ch-radio {
    border: ${e=>e.theme.inputs.error.border};
    box-shadow: ${e=>e.theme.inputs.error.shadow};
  }
`,rc=(O.ZP.span`
  > label {
    margin-left: 0.5rem;
  }
`,O.ZP.div`
  background-color: ${e=>e.theme.inputs.bgd};
  border: ${e=>e.theme.inputs.border};
  border-radius: ${e=>e.theme.radii.circle};
  box-shadow: ${e=>e.theme.inputs.shadow};
  margin-bottom: -0.1875rem;
  transition: box-shadow 0.05s ease-in;

  ${rd}:checked ~ & {
    background-color: ${e=>e.theme.inputs.checked.bgd};
    border: ${e=>e.theme.inputs.checked.border};
    box-shadow: ${e=>e.theme.inputs.checked.shadow};
  }

  ${rd}:focus ~ & {
    border: ${e=>e.theme.inputs.focus.border};
    box-shadow: ${e=>e.theme.inputs.focus.shadow};
  }
`);(0,O.ZP)(rc)`
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;

  &:after {
    background-color: ${e=>e.checked?e.theme.inputs.checked.fontColor:e.theme.inputs.bgd};
    border-radius: ${e=>e.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${M};
  }
`,(0,O.ZP)(rc)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-color: ${e=>e.theme.colors.greys.white};
  box-shadow: none;
  margin: 0.1rem;

  ${rd}:checked ~ & {
    svg {
      stroke: ${e=>e.theme.colors.greys.white};
    }
  }
`;let ru=O.ZP.div`
  position: relative;

  .ch-select-icon {
    pointer-events: none;
  }

  ${j}
  ${I}
`,rp=O.ZP.select`
  background-color: ${e=>e.theme.inputs.bgd};
  border: ${e=>e.theme.inputs.border};
  border-radius: ${e=>e.theme.inputs.borderRadius};
  box-shadow: ${e=>e.theme.inputs.shadow};
  color: ${e=>e.theme.inputs.fontColor};
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  line-height: ${e=>e.theme.fontSizes.text.lineHeight};
  height: 2rem;
  letter-spacing: -0.005625rem;
  width: 100%;
  padding: 0.375rem 1.5rem 0.375rem 0.5rem;
  transition: box-shadow 0.05s ease-in;
  display: inline-block;
  appearance: none;

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${e=>e.theme.inputs.focus.border};
    box-shadow: ${e=>e.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${e=>e.theme.inputs.error.border};
    box-shadow: ${e=>e.theme.inputs.error.shadow};
  }

  ${j}
  ${I}
`,rm=e=>e.map(({value:e,label:t})=>S.createElement("option",{key:e,value:e},t)),rh={position:"absolute",top:"50%",transform:"translateY(-50%)",right:"0.2rem",width:"1.5rem",height:"1.5rem"};(0,S.forwardRef)((e,t)=>S.createElement(ru,null,S.createElement(rp,Object.assign({className:"ch-select","data-testid":"select",ref:t},e),rm(e.options)),S.createElement(el,{style:rh,className:"ch-select-icon","data-testid":"select-icon"}))).displayName="Select";let rg=O.ZP.textarea`
  background-color: ${e=>e.theme.inputs.bgd};
  border: ${e=>e.theme.inputs.border};
  border-radius: ${e=>e.theme.inputs.borderRadius};
  box-shadow: ${e=>e.theme.inputs.shadow};
  color: ${e=>e.theme.inputs.fontColor};
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  padding: 0.5rem;
  position: relative;
  min-height: 4rem;
  transition: box-shadow 0.05s ease-in;
  width: 100%;

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${e=>e.theme.inputs.focus.border};
    box-shadow: ${e=>e.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${e=>e.theme.inputs.error.border};
    box-shadow: ${e=>e.theme.inputs.error.shadow};
  }
`;S.forwardRef((e,t)=>{var{label:r}=e,i=_(e,["label"]);return S.createElement(rg,Object.assign({"aria-label":r,className:"ch-textarea","data-testid":"textarea",ref:t},i))}).displayName="Textarea";var rb=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var r=-1;return e.some(function(e,i){return e[0]===t&&(r=i,!0)}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},t.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,i=this.__entries__;r<i.length;r++){var o=i[r];e.call(t,o[1],o[0])}},t}()}(),rv="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ry=void 0!==r.g&&r.g.Math===Math?r.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),rw="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ry):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},rx=["top","right","bottom","left","width","height","size","weight"],r$="undefined"!=typeof MutationObserver,rk=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,i=!1,o=0;function n(){r&&(r=!1,e()),i&&s()}function a(){rw(n)}function s(){var e=Date.now();if(r){if(e-o<2)return;i=!0}else r=!0,i=!1,setTimeout(a,20);o=e}return s}(this.refresh.bind(this),0)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){rv&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),r$?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){rv&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,r=void 0===t?"":t;rx.some(function(e){return!!~r.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),rE=function(e,t){for(var r=0,i=Object.keys(t);r<i.length;r++){var o=i[r];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},rS=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||ry},rO=rz(0,0,0,0);function rD(e){return parseFloat(e)||0}function rA(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(t,r){return t+rD(e["border-"+r+"-width"])},0)}var rC="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof rS(e).SVGGraphicsElement}:function(e){return e instanceof rS(e).SVGElement&&"function"==typeof e.getBBox};function rz(e,t,r,i){return{x:e,y:t,width:r,height:i}}var r_=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=rz(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){if(!rv)return rO;if(rC(e)){var t;return rz(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return rO;var i=rS(e).getComputedStyle(e),o=function(e){for(var t={},r=0,i=["top","right","bottom","left"];r<i.length;r++){var o=i[r],n=e["padding-"+o];t[o]=rD(n)}return t}(i),n=o.left+o.right,a=o.top+o.bottom,s=rD(i.width),f=rD(i.height);if("border-box"===i.boxSizing&&(Math.round(s+n)!==t&&(s-=rA(i,"left","right")+n),Math.round(f+a)!==r&&(f-=rA(i,"top","bottom")+a)),e!==rS(e).document.documentElement){var l=Math.round(s+n)-t,d=Math.round(f+a)-r;1!==Math.abs(l)&&(s-=l),1!==Math.abs(d)&&(f-=d)}return rz(o.left,o.top,s,f)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),rT=function(e,t){var r,i,o,n,a,s=(r=t.x,i=t.y,o=t.width,n=t.height,rE(a=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:r,y:i,width:o,height:n,top:i,right:r+o,bottom:n+i,left:r}),a);rE(this,{target:e,contentRect:s})},rI=function(){function e(e,t,r){if(this.activeObservations_=[],this.observations_=new rb,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof rS(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new r_(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof rS(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new rT(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),rj="undefined"!=typeof WeakMap?new WeakMap:new rb,rL=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var r=new rI(t,rk.getInstance(),this);rj.set(this,r)};["observe","unobserve","disconnect"].forEach(function(e){rL.prototype[e]=function(){var t;return(t=rj.get(this))[e].apply(t,arguments)}});var rV=void 0!==ry.ResizeObserver?ry.ResizeObserver:rL,rM=(c=ev(function(e,t){!function(e){function t(e,t,r,i){var o,n=!1,a=0;function s(){o&&clearTimeout(o)}function f(){for(var f=arguments.length,l=Array(f),d=0;d<f;d++)l[d]=arguments[d];var c=this,u=Date.now()-a;function p(){a=Date.now(),r.apply(c,l)}n||(i&&!o&&p(),s(),void 0===i&&u>e?p():!0!==t&&(o=setTimeout(i?function(){o=void 0}:p,void 0===i?e-u:e)))}return"boolean"!=typeof t&&(i=r,r=t,t=void 0),f.cancel=function(){s(),n=!0},f}e.debounce=function(e,r,i){return void 0===i?t(e,r,!1):t(e,i,!1!==r)},e.throttle=t,Object.defineProperty(e,"__esModule",{value:!0})}(t)}))&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c;function rP(e,t){let r=t/e;return r>1.6?"r16by9":r>1.4?"r3by2":r>1.25?"r4by3":r>.9?"r1by1":r>.7?"r2by3":r>.4?"r1by2":"slim"}let rR=e=>{let[t,r]=(0,S.useState)(null);return(0,S.useLayoutEffect)(()=>{if(!e.current)return;let{height:t,width:i}=e.current.getBoundingClientRect();r(rP(t,i))},[]),(0,S.useEffect)(()=>{if(!e.current)return;let t=new rV(rM.debounce(50,e=>{let{height:t,width:i}=e[0].contentRect;r(rP(t,i))}));return t.observe(e.current),()=>t.disconnect()},[]),t},rB=["slim","r1by2","r2by3","r1by1","r4by3","r3by2","r16by9"],rF={1:"grid-template: 1fr / 1fr;","1.slim":"grid-template: repeat(2, 1fr) / 1fr;","1.r2by3":"grid-template: 1fr / 1fr;","1.featured":'grid-template: "ft" 1fr / 1fr;',2:"grid-template: 1fr / repeat(2,1fr);","2.slim":"grid-template: repeat(3,1fr) / 1fr;","2.r1by2":"grid-template: repeat(2,1fr) / 1fr;","2.r2by3":"grid-template: repeat(2,1fr) / 1fr;","2.r4by3":"grid-template: repeat(2,1fr) / repeat(2,1fr);","2.r16by9":"grid-template: 1fr / repeat(2,1fr);","2.featured":`grid-template: repeat(3,1fr) / repeat(2,1fr);
  grid-template-areas: 'ft ft' 'ft ft';`,"2.r16by9.featured":`grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';`,3:"grid-template: repeat(3,1fr) / 1fr;","3.r2by3":"grid-template: repeat(3,1fr) / repeat(1,1fr);","3.r1by1":"grid-template: repeat(2,1fr) / repeat(2,1fr);","3.featured":`grid-template: repeat(3,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';
  `,"3.r16by9.featured":`grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,4:"grid-template: repeat(2,1fr) / repeat(2,1fr);","4.slim":"grid-template: repeat(4,1fr) / 1fr;","4.r2by3":"grid-template: repeat(2,1fr) / repeat(2,1fr);","4.featured":`grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,"4.r16by9.featured":"grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';",5:"grid-template: repeat(2,1fr) / repeat(3,1fr);","5.slim":"grid-template: repeat(5,1fr) / 1fr;","5.r1by2":"grid-template: repeat(3,1fr) / repeat(2,1fr);","5.r2by3":"grid-template: repeat(3,1fr) / repeat(2,1fr);","5.r3by2":"grid-template: repeat(2,1fr) / repeat(3,1fr);","5.r16by9":"grid-template: repeat(2,1fr) / repeat(3,1fr);","5.featured":`grid-template: repeat(4,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';`,"5.r1by1.featured":`grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,6:"grid-template: repeat(3,1fr) / repeat(3,1fr);","6.slim":"grid-template: repeat(4,1fr) / repeat(2,1fr);","6.r1by2":"grid-template: repeat(3,1fr) / repeat(2,1fr);","6.r1by1":"grid-template: repeat(3,1fr) / repeat(2,1fr);","6.r2by3":"grid-template: repeat(3,1fr) / repeat(2,1fr);","6.r3by2":"grid-template: repeat(2,1fr) / repeat(3,1fr);","6.r16by9":"grid-template: repeat(2,1fr) / repeat(3,1fr);","6.featured":`grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,"6.r1by1.featured":`grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,7:"grid-template: repeat(3,1fr) / repeat(3,1fr);","7.slim":"grid-template: repeat(4,1fr) / repeat(2,1fr);","7.r4by3":"grid-template: repeat(3,1fr) / repeat(3,1fr);","7.r16by9":"grid-template: repeat(2,1fr) / repeat(4,1fr);","7.featured":`grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,"7.r1by1.featured":`grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft v';`,8:"grid-template: repeat(3,1fr) / repeat(3,1fr);","8.slim":"grid-template: repeat(4,1fr) / repeat(2,1fr);","8.r4by3":"grid-template: repeat(3,1fr) / repeat(3,1fr);","8.r16by9":"grid-template: repeat(2,1fr) / repeat(4,1fr);","8.featured":`grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,"8.r1by1.featured":`grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';`,"8.r16by9.featured":"grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';",9:"grid-template: repeat(3,1fr) / repeat(3,1fr);","9.slim":"grid-template: repeat(5,1fr) / repeat(2,1fr);","9.r1by1":"grid-template: repeat(3,1fr) / repeat(3,1fr);","9.r16by9":"grid-template: repeat(3,1fr) / repeat(4,1fr);","9.featured":`grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,"9.r1by1.featured":`grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,10:"grid-template: repeat(4,1fr) / repeat(3,1fr);","10.slim":"grid-template: repeat(5,1fr) / repeat(2,1fr);","10.r1by1":"grid-template: repeat(4,1fr) / repeat(3,1fr);","10.r3by2":"grid-template: repeat(3,1fr) / repeat(4,1fr);","10.featured":`grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,"10.r1by1.featured":`grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,11:"grid-template: repeat(4,1fr) / repeat(3,1fr);","11.slim":"grid-template: repeat(6,1fr) / repeat(2,1fr);","11.r1by1":"grid-template: repeat(4,1fr) / repeat(3,1fr);","11.r3by2":"grid-template: repeat(3,1fr) / repeat(4,1fr);","11.r16by9":"grid-template: repeat(3,1fr) / repeat(4,1fr);","11.featured":`grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas: 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft';`,"11.r1by1.featured":`grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,12:"grid-template: repeat(4,1fr) / repeat(3,1fr);","12.slim":"grid-template: repeat(6,1fr) / repeat(2,1fr);","12.r2by3":"grid-template: repeat(4,1fr) / repeat(3,1fr);","12.r3by2":"grid-template: repeat(3,1fr) / repeat(4,1fr);","12.featured":`grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,"12.r1by1.featured":`grid-template-areas:
    'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
    'ft ft ft ft ft v' 'ft ft ft ft ft x';`,13:"grid-template: repeat(4,1fr) / repeat(4,1fr);","13.slim":"grid-template: repeat(7,1fr) / repeat(2,1fr);","13.r2by3":"grid-template: repeat(5,1fr) / repeat(3,1fr);","13.r1by1":"grid-template: repeat(4,1fr) / repeat(4,1fr);","13.r3by2":"grid-template: repeat(4,1fr) / repeat(4,1fr);","13.r16by9":"grid-template: repeat(3,1fr) / repeat(5,1fr);","13.featured":`grid-template: repeat(7,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,"13.r1by1.featured":`grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,14:"grid-template: repeat(4,1fr) / repeat(4,1fr);","14.slim":"grid-template: repeat(7,1fr) / repeat(2,1fr);","14.r2by3":"grid-template: repeat(5,1fr) / repeat(3,1fr);","14.r3by2":"grid-template: repeat(4,1fr) / repeat(4,1fr);","14.r16by9":"grid-template: repeat(3,1fr) / repeat(5,1fr);","14.featured":`grid-template: repeat(7,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft';`,"14.r1by1.featured":`grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,15:"grid-template: repeat(5,1fr) / repeat(3,1fr);","15.slim":"grid-template: repeat(8,1fr) / repeat(2,1fr);","15.r1by2":"grid-template: repeat(5,1fr) / repeat(3,1fr);","15.r3by2":"grid-template: repeat(4,1fr) / repeat(4,1fr);","15.r16by9":"grid-template: repeat(3,1fr) / repeat(5,1fr);","15.featured":`grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,"15.r1by1.featured":`grid-template-areas:
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,16:"grid-template: repeat(4,1fr) / repeat(4,1fr);","16.slim":"grid-template: repeat(8,1fr) / repeat(2,1fr);","16.r1by2":"grid-template: repeat(6,1fr) / repeat(3,1fr);","16.r1by1":"grid-template: repeat(4,1fr) / repeat(4,1fr);","16.featured":`grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,"16.r1by1.featured":`grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,17:"grid-template: repeat(5,1fr) / repeat(4,1fr);","17.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","17.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","17.r1by1":"grid-template: repeat(4,1fr) / repeat(5,1fr);","17.featured":`grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,"17.r1by1.featured":`grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,18:"grid-template: repeat(5,1fr) / repeat(4,1fr);","18.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","18.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","18.r1by1":"grid-template: repeat(4,1fr) / repeat(5,1fr);","18.featured":`grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,"18.r1by1.featured":`grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,19:"grid-template: repeat(5,1fr) / repeat(4,1fr);","19.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","19.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","19.r1by1":"grid-template: repeat(4,1fr) / repeat(5,1fr);","19.featured":`grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,"19.r1by1.featured":`grid-template: repeat(9,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,20:"grid-template: repeat(5,1fr) / repeat(4,1fr);","20.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","20.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","20.r1by1":"grid-template: repeat(4,1fr) / repeat(5,1fr);","20.featured":`grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,"20.r1by1.featured":`grid-template: repeat(10,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,21:"grid-template: repeat(5,1fr) / repeat(5,1fr);","21.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","21.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","21.r1by1":"grid-template: repeat(5,1fr) / repeat(5,1fr);","21.featured":`grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,"21.r1by1.featured":`grid-template: repeat(8,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,22:"grid-template: repeat(5,1fr) / repeat(5,1fr);","22.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","22.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","22.r1by1":"grid-template: repeat(5,1fr) / repeat(5,1fr);","22.featured":`grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,"22.r1by1.featured":`grid-template: repeat(9,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,23:"grid-template: repeat(5,1fr) / repeat(5,1fr);","23.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","23.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","23.r1by1":"grid-template: repeat(5,1fr) / repeat(5,1fr);","23.featured":`grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,"23.r1by1.featured":`grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,24:"grid-template: repeat(5,1fr) / repeat(5,1fr);","24.slim":"grid-template: repeat(8,1fr) / repeat(3,1fr);","24.r1by2":"grid-template: repeat(6,1fr) / repeat(4,1fr);","24.r1by1":"grid-template: repeat(5,1fr) / repeat(5,1fr);","24.featured":`grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,"24.r1by1.featured":`grid-template: repeat(9,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,25:"grid-template: repeat(5,1fr) / repeat(5,1fr);","25.slim":"grid-template: repeat(9,1fr) / repeat(3,1fr);","25.r1by2":"grid-template: repeat(7,1fr) / repeat(4,1fr);","25.r1by1":"grid-template: repeat(5,1fr) / repeat(5,1fr);","25.featured":`grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,"25.r1by1.featured":`grid-template: repeat(10,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,26:"grid-template: repeat(6,1fr) / repeat(5,1fr);","26.slim":"grid-template: repeat(9,1fr) / repeat(3,1fr);","26.r1by2":"grid-template: repeat(7,1fr) / repeat(4,1fr);","26.r1by1":"grid-template: repeat(6,1fr) / repeat(5,1fr);","26.featured":`grid-template: repeat(11,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,"26.r1by1.featured":`grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`},rN={"2.featured":`
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: calc(100% / 3);
      grid-auto-rows: calc(100% / 3);
    }
  `,"3.r16by9":`
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,"3.featured":`
    @media (max-width: 600px) {
      grid-template-areas: 'ft' 'ft';
      grid-template-columns: 1fr;
      grid-template-rows: 25%;
      grid-auto-rows: 25%;
    }
  `,"4.r16by9":`
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,"5.r16by9":`grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,"6.r16by9":`grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,"7.r16by9":`
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 25%;
      grid-auto-columns: 25%;
      grid-auto-flow: column;
    }
  `},rZ=`
  @media (max-width: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 25%;
    grid-auto-rows: 25%;
  }
`,rH=`
  @media (max-height: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: 25%;
    grid-auto-columns: 25%;
    grid-auto-flow: column;
  }
`,rW=O.ZP.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${e=>e.theme.videoGrid.bgd};

  ${({size:e,featured:t})=>rF[`${e}${t?".featured":""}`]||""}
  ${({size:e,featured:t,ratio:r})=>{if(!r)return;let i="",o=rB.indexOf(r);for(let r=0;r<=o;r++){let o=rB[r];i+=rF[`${e}.${o}${t?".featured":""}`]||""}let n=rN[`${e}.${r}${t?".featured":""}`]||rN[`${e}${t?".featured":""}`];return n?i+=n:"r16by9"===r&&(e>7||t)?i+=rH:(e>7||t)&&(i+=rZ),i}};
`,rU={usingGrid:!0},rG=(0,S.createContext)(null),rq=e=>{var{size:t,children:r,layout:i="standard"}=e,o=_(e,["size","children","layout"]);let n=(0,S.createRef)(),a=rR(n),s="number"==typeof t?t:S.Children.count(r);return S.createElement(rG.Provider,{value:rU},S.createElement(rW,Object.assign({ref:n},o,{size:s,ratio:a,featured:"featured"===i,"data-testid":"video-grid"}),r))},rY=()=>(0,S.useContext)(rG),rJ=O.ZP.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${e=>e.theme.colors.greys.grey100};

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: ${e=>e.objectFit||"cover"}};
  }

  .ch-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    background-color: papayawhip; /* TODO: figure out what this is supposed to be */
    margin-right: 0.5rem;
    flex: 0 0 1.5rem;
  }

  .ch-nameplate {
    backdrop-filter: blur(20px);
    background-color: rgba(46, 47, 52, 0.85);
    border-radius: 0.25rem;
    bottom: 0.5rem;
    color: ${e=>e.theme.colors.greys.white};
    left: 0.5rem;
    max-width: calc(100% - 2rem);
    padding: 0.5rem;
    position: absolute;

    div {
      ${V};
      display: flex;
      align-items: center;
    }

    .ch-text {
      font-size: ${e=>e.theme.fontSizes.text.fontSize};
      ${V};
      margin: 0;
    }
  }

  ${j}
  ${I}
`,rQ=(0,S.forwardRef)((e,t)=>{let{tag:r,className:i,nameplate:o}=e,n=_(e,["tag","className","nameplate"]);return S.createElement(rJ,Object.assign({as:r,className:i||"","data-testid":"video-tile"},n),S.createElement("video",{ref:t,className:"ch-video"}),o&&S.createElement("header",{className:"ch-nameplate"},S.createElement("p",{className:"ch-text"},o)))});O.ZP.div`
  display: grid;
  width: 100%;
  height: 100%;

  ${D.eC}
  ${j}
  ${I}

  ${({responsive:e,theme:t})=>e?`
    ${t.mediaQueries.max.md} {
      grid-template-columns: 1fr 1fr;
    }

    ${t.mediaQueries.max.sm} {
      grid-template-columns: 1fr;
    }
  `:""}

  ${e=>e.css||""}
`,O.ZP.div`
  ${j}
  ${D.eC}

  ${e=>e.css||""}
`,O.ZP.aside`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
  background-color: ${e=>e.theme.roster.bgd};
  box-shadow: 1rem 1rem 3.75rem 0 rgba(0, 0, 0, 0.1);
  border-left: 0.0625rem solid ${e=>e.theme.roster.containerBorder};
  border-right: 0.0625rem solid ${e=>e.theme.roster.containerBorder};

  ${({theme:e})=>e.mediaQueries.min.md} {
    width: ${e=>e.theme.roster.maxWidth};
  }

  ${j}
  ${I}
`,O.ZP.span`
  display: inline-block;
  margin: 0 0.625rem 0 0;
  font-weight: 600;
  font-size: 0.675rem;
  color: ${e=>e.theme.roster.secondaryText};
`,O.ZP.div`
  margin: 0 0.5rem;

  & + & {
    margin-top: 1rem;
  }

  ${j}
  ${I}
`,O.ZP.div`
  background-color: ${e=>e.theme.roster.fgd};
  border-radius: ${e=>e.theme.radii.default};

  ${j}
  ${I}
`,O.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.0625rem solid ${e=>e.theme.roster.headerBorder};

  .ch-title {
    font-size: 0.875rem;
    color: ${e=>e.theme.roster.primaryText};
    ${e=>e.isSearching?"opacity: 0;":""}
    ${V};
  }

  .ch-badge {
    margin-left: 0.5rem;
    ${e=>e.isSearching?"opacity: 0;":""}
  }

  .ch-buttons {
    margin-left: auto;
    display: flex;

    > * {
      margin-left: 0.5rem;
    }

    ${e=>e.isSearching?"opacity: 0;":""}
  }

  .ch-search-wrapper {
    position: absolute !important;
    bottom: 0.75rem;
    left: 0.5rem;
    right: 0.5rem;

    .ch-search-input {
      flex: 1;

      input {
        width: 100%;
      }
    }

    .ch-search-close {
      margin-left: 0.5rem;
    }
  }

  .ch-navigation-icon {
    margin-right: 0.5rem;
    margin-left: -0.5rem;

    ${({theme:e})=>e.mediaQueries.min.md} {
      display: none;
    }
  }

  ${j}
  ${I}
`,O.ZP.div`
  flex-grow: 1;
  min-width: 0;
  line-height: 1.5;

  .ch-name {
    ${V};
    font-size: 0.875rem;
    color: ${e=>e.theme.roster.primaryText};
  }

  .ch-subtitle {
    ${V};
    font-size: 0.65rem;
    color: ${e=>e.theme.roster.secondaryText};
  }
`,O.ZP.div`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;

  .ch-mic {
    flex-shrink: 0;
    width: 1.5rem;
    line-height: 0;

    ${({micPosition:e})=>"leading"===e?`
        order: -1;
        margin-right: .75rem;
      `:""}
  }

  .ch-menu {
    color: ${e=>e.theme.buttons.icon.hover.bgd};

    &:hover,
    &:focus {
      color: ${e=>e.theme.buttons.icon.hover.text};
    }
  }

  svg {
    width: 1.5rem;
    flex-shrink: 0;
  }

  > * {
    margin-right: 0.5rem;
  }

  > :last-child {
    margin-right: 0;
  }

  ${j}
  ${I}
`,O.ZP.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.65rem;
  color: ${({theme:e})=>e.roster.secondaryText};

  > svg {
    margin-right: 0.25rem;
    color: ${({theme:e})=>e.roster.secondaryText};
  }
`,(0,S.createContext)(null),O.ZP.div`
  z-index: ${e=>e.isActive?e.theme.zIndex.controlBar:"-10"};
  visibility: ${e=>e.isActive?"visible":"hidden"};

  &.ch-active {
    animation: ${ro} 0.25s ease 0s forwards;
  }
`,O.ZP.ul`
  display: flex;
  flex-direction: column;
  width: 20rem;

  ${I}
  ${j}
`,O.ZP.li`
  position: relative;

  ${I};
  ${j};

  & .ch-channel-button {
    width: 100%;
    height: 100%;
    padding: 11px 0;
    background-color: ${e=>e.theme.channelList.bgd};
    border: none;
    border-radius: unset;
    justify-content: left;
    padding-left: 1rem;
    color: ${e=>e.theme.channelList.fontColor};
    border: ${e=>e.theme.channelList.border};
    font-family: ${e=>e.theme.fonts.body};

    &:hover {
      background-color: ${e=>e.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${e=>e.theme.channelList.active.bgd};
      color: ${e=>e.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${e=>e.theme.channelList.focus.border};
    }
  }

  & .ch-label {
    padding-left: 1.5rem;
  }

  & .ch-unread-badge {
    display: ${e=>e.unread?"inline":"none"};
    position: absolute;
    z-index: 2;
    top: 12px;
    left: 5px;
    background-color: ${e=>e.theme.colors.primary.light};
  }

  &.ch-unread .ch-channel-button {
    font-weight: bold;
  }

  &.ch-selected .ch-channel-button {
    background-color: ${e=>e.theme.colors.primary.light};
    color: ${e=>e.theme.channelList.selected.fontColor};

    &:focus {
      border: ${e=>e.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle {
    position: absolute;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${e=>e.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${e=>e.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${e=>e.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${e=>e.theme.colors.primary.light};
      }
    }
  }

  & .ch-detailed-channel {
    display: grid;
    grid-template-rows: 17px 1fr max-content;
    grid-gap: 16px;
    padding: 10px 20px;
    background-color: ${e=>e.theme.channelList.bgd};
    color: ${e=>e.theme.channelList.fontColor};
    border-bottom: 0.5px solid #d3d3d3;
    font-family: ${e=>e.theme.fonts.body};

    &:hover {
      background-color: ${e=>e.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${e=>e.theme.channelList.active.bgd};
      color: ${e=>e.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${e=>e.theme.channelList.focus.border};
    }
  }

  & .ch-detailed-channel-name {
    font-weight: bold;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 85%;
  }

  & .ch-detailed-channel-message {
    grid-row: span 2;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 90%;
  }

  & .ch-detailed-channel-message-time {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    font-size: 8px;
    max-width: 15%;
    text-align: right;
  }

  & .ch-unread-badge-detailed {
    display: ${e=>e.unread?"inline":"none"};
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 5px;
    background-color: ${e=>e.theme.colors.primary.light};
  }

  &.ch-selected .ch-detailed-channel {
    background-color: ${e=>e.theme.colors.primary.light};
    color: ${e=>e.theme.channelList.selected.fontColor};

    &:focus {
      border: ${e=>e.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle-detailed {
    position: absolute;
    top: 1.75rem;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${e=>e.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${e=>e.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${e=>e.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${e=>e.theme.colors.primary.light};
      }
    }
  }
`;let rX=O.ZP.div`
  display: flex;
  flex-direction: row;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;
  background-color: ${e=>e.theme.chatBubble.container.bgd};
  width: 100%;

  .ch-timestamp {
    padding-right: ${e=>e.actions?"1rem":"2.5rem"};
  }

  ${j}
  ${I}
`;O.ZP.div`
  background-color: ${e=>e.theme.chatBubble[e.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${e=>e.theme.chatBubble[e.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: ${e=>e.editable?"100%":"fit-content"};
  max-width: 70.6%;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: ${e=>e.editable?"4rem":"unset"};
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;

  & .ch-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    align-items: baseline;
  }

  & .ch-sender-name {
    font-weight: bold;
    padding-right: 0.5rem;
  }

  & .ch-header-timestamp {
    font-size: 0.65rem;
  }

  & svg {
    position: absolute;
    height: 19px;
    width: 11px;
    margin-top: -14px;
    margin-left: -25px;

    & .ch-chat-bubble-tail {
      fill: ${e=>e.theme.chatBubble[e.variant].bgd};
    }
  }

  .ch-input {
    width: 100%;
  }

  .ch-edit-buttons {
    position: absolute;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    width: 10rem;
    justify-content: space-between;
  }

  ${j};
  ${I};
`;let rK=O.ZP.div`
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${e=>e.theme.chatBubble.container.fontColor};
  align-items: center;

  & .ch-message-actions {
    border: 1px solid transparent;
    border-radius: 50%;
  }

  & button:hover .ch-message-actions {
    background-color: ${e=>e.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${e=>e.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-message-actions {
    border: 1px solid ${e=>e.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-message-actions g {
    fill: ${e=>e.theme.chatBubble.container.fontColor};
  }

  & .ch-message-actions.isOpen {
    background-color: ${e=>e.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${e=>e.theme.buttons.icon.active.text};
    }
  }
`;S.forwardRef((e,t)=>{let{timestamp:r,actions:i,tooltipContainerId:o,a11yLabel:n="Open channel options"}=e,a=_(e,["timestamp","actions","tooltipContainerId","a11yLabel"]),s=(0,S.useMemo)(()=>tY(q,o),[o]),f=a["data-tooltip"]?s:q,l=a["data-tooltip-position"]?{tooltipPosition:a["data-tooltip-position"]}:{};return S.createElement(rX,Object.assign({"data-testid":"chat-bubble-container",ref:t,actions:i},a),e.children,S.createElement(rK,null,r&&S.createElement("span",{className:"ch-timestamp","data-testid":"message-time"},r),i&&S.createElement(tP,{a11yLabel:n,placement:"bottom-end",renderButtonWrapper:(e,t)=>S.createElement(f,Object.assign({},l,{icon:S.createElement(eo,{width:"1.5rem",height:"1.5rem"}),selected:e},t,{label:n})),children:i})))});let r0=(0,O.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;function r1(e,t,r,i){var o=null==i||"number"==typeof i||"boolean"==typeof i?i:r(i),n=t.get(o);return void 0===n&&(n=e.call(this,i),t.set(o,n)),n}function r5(e,t,r){var i=Array.prototype.slice.call(arguments,3),o=r(i),n=t.get(o);return void 0===n&&(n=e.apply(this,i),t.set(o,n)),n}function r2(){return JSON.stringify(arguments)}function r3(){this.cache=Object.create(null)}O.ZP.ul`
  background-color: ${e=>e.theme.chatBubble.container.bgd};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  /* disable scrolling while fetching */
  &.ch-not-scrollable {
    overflow-y: hidden;
  }

  ${j}
  ${I}

  .ch-spinner {
    margin: 0 auto;
  }

  .ch-spinner svg {
    width: 2rem;
    height: 2rem;
    animation: ${r0} 2s linear infinite;
    display: block;
  }
`,O.ZP.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  & .ch-attachment-icon {
    height: 2rem;
    width: 2rem;
    margin: auto;
    background-color: ${e=>e.theme.messageAttachment.icon.bgd};
    border-radius: 25px;

    & .ch-document-icon {
      margin: auto 0;
      color: ${e=>e.theme.messageAttachment.icon.color};
    }
  }
  & .ch-attachment-name {
    margin-left: 1rem;

    & a:link,
    a:visited,
    a:hover,
    a:active {
      color: ${e=>e.theme.messageAttachment.name.fontColor};
      text-decoration: none;
    }
  }
  & .ch-attachment-size {
    font-size: ${e=>e.theme.messageAttachment.size.fontSize};
    color: ${e=>e.theme.messageAttachment.size.fontColor};
    display: block;
    padding-top: 3px;
  }
`,O.ZP.div`
  color: ${e=>e.theme.messageAttachment.content.fontColor};
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${e=>e.theme.messageAttachment.content.bgd};
  letter-spacing: ${e=>e.theme.messageAttachment.content.letterSpacing};
  font-size: ${e=>e.theme.fontSizes.text.fontSize};
  line-height: ${e=>e.theme.fontSizes.text.lineHeight};

  & img {
    ${e=>e.imgStyles};
  }

  ${j}
  ${I}
`,r3.prototype.has=function(e){return e in this.cache},r3.prototype.get=function(e){return this.cache[e]},r3.prototype.set=function(e,t){this.cache[e]=t};var r4={create:function(){return new r3}},r7=function(e,t){var r=t&&t.cache?t.cache:r4,i=t&&t.serializer?t.serializer:r2;return(t&&t.strategy?t.strategy:function(e,t){var r,i,o=1===e.length?r1:r5;return r=t.cache.create(),i=t.serializer,o.bind(this,e,r,i)})(e,{cache:r,serializer:i})};r7.strategies={variadic:function(e,t){var r,i;return r=t.cache.create(),i=t.serializer,r5.bind(this,e,r,i)},monadic:function(e,t){var r,i;return r=t.cache.create(),i=t.serializer,r1.bind(this,e,r,i)}};let r6={weekday:"long",year:"numeric",month:"long",day:"numeric"};r7((e,t,r,i,o)=>{let n=r||r6,a=new Date(e).toLocaleDateString(t,n),s=new Date;return(s.setDate(s.getDate()-1),a===s.toLocaleDateString(t,n))?o||"Yesterday":a===new Date().toLocaleDateString(t,n)?i||"Today":a}),(u=w||(w={}))[u.Loading=0]="Loading",u[u.Succeeded=1]="Succeeded",u[u.Failed=2]="Failed",u[u.Ended=3]="Ended",u[u.JoinedFromAnotherDevice=4]="JoinedFromAnotherDevice",u[u.Left=5]="Left",u[u.TerminalFailure=6]="TerminalFailure",u[u.Reconnecting=7]="Reconnecting",(p=x||(x={})).UNTRIGGERED="UNTRIGGERED",p.IN_PROGRESS="IN_PROGRESS",p.GRANTED="GRANTED",p.DENIED="DENIED",(m=$||($={}))[m.None=1]="None",m[m.Audio=2]="Audio",m[m.Video=3]="Video",m[m.AudioAndVideo=4]="AudioAndVideo",(h=k||(k={}))[h.STARTING=0]="STARTING",h[h.DID_STOP=1]="DID_STOP",h[h.UPDATE=2]="UPDATE",h[h.TOGGLE_PAUSE=3]="TOGGLE_PAUSE",h[h.REMOVE=4]="REMOVE",h[h.DENIED=5]="DENIED",h[h.RESET=6]="RESET";let r8={tileId:null,paused:!1,isLocalUserSharing:!1,isLocalShareLoading:!1,sharingAttendeeId:null};function r9(e,{type:t,payload:r}){switch(t){case k.STARTING:return Object.assign(Object.assign({},e),{isLocalShareLoading:!0});case k.UPDATE:{let{isLocalUser:t,tileState:i}=r,{tileId:o}=e;if(o===i.tileId||o&&o>i.tileId)return e;return{paused:!1,tileId:i.tileId,isLocalShareLoading:!1,isLocalUserSharing:t,sharingAttendeeId:i.boundAttendeeId}}case k.REMOVE:{let{tileId:t}=e;if(t!==r)return e;return r8}case k.DID_STOP:{let{isLocalUserSharing:t}=e;if(t)return r8;return Object.assign(Object.assign({},e),{isLocalShareLoading:!1,isLocalUserSharing:!1,paused:!1})}case k.TOGGLE_PAUSE:if(!e.isLocalUserSharing)return e;return Object.assign(Object.assign({},e),{paused:!e.paused});case k.DENIED:if(!e.isLocalShareLoading)return e;return Object.assign(Object.assign({},e),{isLocalShareLoading:!1});case k.RESET:return r8;default:throw Error("Incorrect type in VideoProvider")}}let ie=(0,S.createContext)(null),it=(0,S.createContext)(null),ir=({children:e})=>{let t=iT(),[r,i]=(0,S.useReducer)(r9,r8),{paused:o,isLocalUserSharing:n,isLocalShareLoading:a}=r,s=(0,S.useRef)(null);(0,S.useEffect)(()=>{if(!t)return;let e={videoTileDidUpdate:e=>{if(!e.boundAttendeeId||!e.isContent||!e.tileId)return;let{boundAttendeeId:r}=e,o=new C.DefaultModality(r).base()===t.audioVideoController.realtimeController.state.localAttendeeId;!o&&s.current&&s.current<e.tileId&&(t.stopContentShare(),s.current=null),o&&(s.current=e.tileId),i({type:k.UPDATE,payload:{tileState:e,isLocalUser:o}})},videoTileWasRemoved:e=>{e===s.current&&(s.current=null),i({type:k.REMOVE,payload:e})}},r={contentShareDidStop:()=>{i({type:k.DID_STOP})}};return t.addObserver(e),t.addContentShareObserver(r),()=>{t.removeObserver(e),t.removeContentShareObserver(r),i({type:k.RESET})}},[t]),(0,S.useEffect)(()=>{if(!t)return;let e=e=>{"NotAllowedError"===e.reason.name&&i({type:k.DENIED})};return window.addEventListener("unhandledrejection",e),()=>window.removeEventListener("unhandledrejection",e)},[a]);let f=(0,S.useCallback)(e=>T(void 0,void 0,void 0,function*(){t&&(n||a?t.stopContentShare():(e&&"string"==typeof e?yield t.startContentShareFromScreenCapture(e):e&&e instanceof MediaStream?yield t.startContentShare(e):yield t.startContentShareFromScreenCapture(),i({type:k.STARTING})))}),[t,n,a]),l=(0,S.useCallback)(()=>{t&&n&&(o?t.unpauseContentShare():t.pauseContentShare(),i({type:k.TOGGLE_PAUSE}))},[t,o,n]),d=(0,S.useMemo)(()=>({paused:o,isLocalUserSharing:n,isLocalShareLoading:a,toggleContentShare:f,togglePauseContentShare:l}),[o,f,l,n,a]);return S.createElement(ie.Provider,{value:r},S.createElement(it.Provider,{value:d},e))},ii=()=>{let e=(0,S.useContext)(ie);if(!e)throw Error("useContentShareState must be used within a ContentShareProvider");return e};(g=E||(E={}))[g.UPDATE=0]="UPDATE",g[g.REMOVE=1]="REMOVE",g[g.RESET=2]="RESET";let io={tiles:[],tileIdToAttendeeId:{},attendeeIdToTileId:{},size:0},ia=(e,t)=>{let r=Object.assign({},e);return delete r[t],r};function is(e,{type:t,payload:r}){let{tiles:i,tileIdToAttendeeId:o,attendeeIdToTileId:n,size:a}=e;switch(t){case E.UPDATE:{let{tileId:t,attendeeId:s=""}=r,f=t.toString();if(o[f])return e;return{tiles:[...i,t],tileIdToAttendeeId:Object.assign(Object.assign({},o),{[f]:s}),attendeeIdToTileId:Object.assign(Object.assign({},n),{[s]:t}),size:a+1}}case E.REMOVE:{let{tileId:t}=r,s=o[t],f=t.toString();if(!s)return e;return{tiles:i.filter(e=>t!==e),tileIdToAttendeeId:ia(o,f),attendeeIdToTileId:ia(n,s),size:a-1}}case E.RESET:return io;default:throw Error("Incorrect type in VideoProvider")}}let il=(0,S.createContext)(null),id=({children:e})=>{let t=iT(),[r,i]=(0,S.useReducer)(is,io);return(0,S.useEffect)(()=>{if(!t)return;let e={videoTileDidUpdate:e=>{if((null==e?void 0:e.boundAttendeeId)&&(null==e?void 0:e.tileId)&&!e.isContent&&!e.localTile){let{tileId:t,boundAttendeeId:r}=e;i({type:E.UPDATE,payload:{tileId:t,attendeeId:r}})}},videoTileWasRemoved:e=>{i({type:E.REMOVE,payload:{tileId:e}})}};return t.addObserver(e),()=>t.removeObserver(e)},[t]),(0,S.useEffect)(()=>{if(t)return()=>i({type:E.RESET})},[t]),S.createElement(il.Provider,{value:r},e)},ic=()=>{let e=(0,S.useContext)(il);if(!e)throw Error("useRemoteVideoTileState must be used within a RemoteVideoTileProvider");return e},iu=(0,S.createContext)(null),ip=({children:e})=>{let t=iC(),{attendeeIdToTileId:r}=ic(),i=(0,S.useRef)(null),[o,n]=(0,S.useState)(null),a=(0,S.useRef)(null),s=(0,S.useRef)(null);(0,S.useEffect)(()=>{let e=e=>{let t=e[0];if(t===s.current)return;if(s.current=t,a.current&&clearTimeout(a.current),!t){i.current=null,n(null);return}let o=r[t];if(!o){i.current&&(a.current=window.setTimeout(()=>{i.current=null,n(null)},1500));return}o!==i.current&&(i.current?a.current=window.setTimeout(()=>{i.current=o,n(o)},1500):(i.current=o,n(o)))};return t.subscribeToActiveSpeaker(e),()=>t.unsubscribeFromActiveSpeaker(e)},[r]);let f=(0,S.useMemo)(()=>({tileId:o}),[o]);return S.createElement(iu.Provider,{value:f},e)};function im(){let e=(0,S.useContext)(iu);if(!e)throw Error("useFeaturedTileState must be used within an FeaturedVideoTileProvider");return e}let ih=(0,S.createContext)(null),ig=({children:e})=>{let t=tN(),r=iT(),[i,o]=(0,S.useState)(!0),n=(0,S.useRef)(null);(0,S.useEffect)(()=>{if(r){if(n.current){let e;e=n.current,T(void 0,void 0,void 0,function*(){try{yield r.bindAudioElement(e)}catch(e){t.error(`Failed to bind audio element. ${e}`)}})}return()=>{r.unbindAudioElement(),o(!0)}}},[r]);let a=(0,S.useCallback)(()=>{if(n.current){if(o(!i),i)null==r||r.unbindAudioElement();else{let e;e=n.current,T(void 0,void 0,void 0,function*(){try{yield null==r?void 0:r.bindAudioElement(e)}catch(e){t.error(`Failed to bind audio element. ${e}`)}})}}},[n,r,i]),s=(0,S.useMemo)(()=>({isAudioOn:i,toggleAudio:a}),[i,a]);return S.createElement(ih.Provider,{value:s},e,S.createElement("audio",{ref:n,style:{display:"none"}}))},ib=(0,S.createContext)(null),iv=({children:e})=>{let t=tN(),r=iC(),i=iT(),{devices:o,selectedDevice:n}=iB(),[a,s]=(0,S.useState)(!1),[f,l]=(0,S.useState)(!1),[d,c]=(0,S.useState)(null);(0,S.useEffect)(()=>{if(!i)return;i.hasStartedLocalVideoTile()&&s(!0);let e={videoAvailabilityDidChange:e=>{e.canStartLocalVideo?l(!1):l(!0),t.info(`video availability changed: canStartLocalVideo ${e.canStartLocalVideo}`)}};return i.addObserver(e),()=>{s(!1),i.removeObserver(e)}},[i]),(0,S.useEffect)(()=>{f&&t.warn("Reach the number of maximum active videos")},[f]),(0,S.useEffect)(()=>{(null==i?void 0:i.hasStartedLocalVideoTile())||s(!1)},[o]);let u=(0,S.useCallback)(()=>T(void 0,void 0,void 0,function*(){try{a||!n?(n||t.warn("There is no input video device chosen!"),yield null==i?void 0:i.stopVideoInput(),s(!1)):f?t.error("Video limit is reached and can not turn on more videos!"):(yield r.startVideoInputDevice(n),null==i||i.startLocalVideoTile(),s(!0))}catch(e){t.error("Failed to toggle video")}}),[i,a,f,n]);(0,S.useEffect)(()=>{if(!i)return;let e={videoTileDidUpdate:e=>{e.localTile&&e.tileId&&d!==e.tileId&&c(e.tileId)}};return i.addObserver(e),()=>i.removeObserver(e)},[i,d]);let p=(0,S.useMemo)(()=>({tileId:d,isVideoEnabled:a,setIsVideoEnabled:s,hasReachedVideoLimit:f,setHasReachedVideoLimit:l,toggleVideo:u}),[d,a,s,f,l,u]);return S.createElement(ib.Provider,{value:p},e)},iy=()=>{let e=(0,S.useContext)(ib);if(!e)throw Error("useLocalVideo must be used within LocalVideoProvider");return e},iw=(0,S.createContext)(void 0),ix=({children:e})=>{let[t,r]=(0,S.useState)(),i=iC();return(0,S.useEffect)(()=>{function e(e,t){r({name:e,attributes:t})}return i.subscribeToEventDidReceive(e),()=>{i.unsubscribeFromEventDidReceive(e)}},[]),S.createElement(iw.Provider,{value:t},e)},i$=S.createContext(null),ik=({children:e})=>{let t=iC(),r=iT(),i=(0,S.useRef)({}),[o,n]=(0,S.useState)({});(0,S.useEffect)(()=>{if(!r)return;let e=(e,r,o)=>T(void 0,void 0,void 0,function*(){if(!r){delete i.current[e],n(t=>(t[e],Object.assign({},_(t,["symbol"==typeof e?e:e+""]))));return}let a=new C.DefaultModality(e).base();if(a!==e||i.current[e])return;let s={chimeAttendeeId:e};if(o&&(s.externalUserId=o),i.current[a]=s,n(e=>Object.assign(Object.assign({},e),{[a]:s})),t.getAttendee){let e=yield t.getAttendee(a,o);if(!i.current[a])return;s=Object.assign(Object.assign({},s),e),n(e=>Object.assign(Object.assign({},e),{[a]:s}))}});return r.realtimeSubscribeToAttendeeIdPresence(e),()=>{n({}),i.current={},r.realtimeUnsubscribeToAttendeeIdPresence(e)}},[r]);let a=(0,S.useMemo)(()=>({roster:o}),[o]);return S.createElement(i$.Provider,{value:a},e)};function iE(){let e=(0,S.useContext)(i$);if(!e)throw Error("userRosterState must be used within RosterProvider");return e}function iS(){return Promise.resolve(new MediaStream)}class iO{getDeviceLabels(){return this.deviceLabels}constructor(e){this.meetingSession=null,this.meetingStatus=w.Loading,this.meetingStatusObservers=[],this.audioVideo=null,this.audioVideoObservers={},this.meetingId=null,this.selectedAudioOutputDeviceObservers=[],this.selectedAudioInputDeviceObservers=[],this.selectedVideoInputDeviceObservers=[],this.audioInputDevices=null,this.audioOutputDevices=null,this.videoInputDevices=null,this.deviceLabelTriggerStatus=x.UNTRIGGERED,this.deviceLabelTriggerStatusObservers=[],this.deviceLabelTriggerObservers=[],this.activeSpeakerListener=null,this.activeSpeakerCallbacks=[],this.activeSpeakers=[],this.audioVideoCallbacks=[],this.devicesUpdatedCallbacks=[],this.meetingEventObserverSet=new Set,this.audioVideoDidStart=()=>{console.log("[MeetingManager audioVideoDidStart] Meeting started successfully"),this.meetingStatus=w.Succeeded,this.publishMeetingStatus()},this.audioVideoDidStartConnecting=e=>{this.meetingStatus!==w.Reconnecting&&e&&(this.meetingStatus=w.Reconnecting,this.publishMeetingStatus())},this.audioVideoDidStop=e=>{var t;let r=e.statusCode();switch(r){case C.MeetingSessionStatusCode.MeetingEnded:console.log(`[MeetingManager audioVideoDidStop] Meeting ended for all: ${r}`),this.meetingStatus=w.Ended;break;case C.MeetingSessionStatusCode.Left:console.log(`[MeetingManager audioVideoDidStop] Left the meeting: ${r}`),this.meetingStatus=w.Left;break;case C.MeetingSessionStatusCode.AudioJoinedFromAnotherDevice:console.log(`[MeetingManager audioVideoDidStop] Meeting joined from another device: ${r}`),this.meetingStatus=w.JoinedFromAnotherDevice;break;default:e.isFailure()&&!e.isTerminal()?(console.log(`[MeetingManager audioVideoDidStop] Non-Terminal failure occurred: ${r}`),this.meetingStatus=w.Failed):e.isTerminal()?(console.log(`[MeetingManager audioVideoDidStop] Terminal failure occurred: ${r}`),this.meetingStatus=w.TerminalFailure):console.log(`[MeetingManager audioVideoDidStop] session stopped with code ${r}`)}this.publishMeetingStatus(),null===(t=this.audioVideo)||void 0===t||t.removeObserver(this.audioVideoObservers),this.leave()},this.startAudioInputDevice=e=>T(this,void 0,void 0,function*(){var t;try{yield null===(t=this.audioVideo)||void 0===t?void 0:t.startAudioInput(e),this.selectedAudioInputDevice=e,this.publishSelectedAudioInputDevice()}catch(t){let e=Error("MeetingManager failed to select audio input device.");throw t instanceof Error&&(e.name=t.name,e.message+=" "+t.message),console.error(e),e}}),this.startAudioOutputDevice=e=>T(this,void 0,void 0,function*(){var t;try{yield null===(t=this.audioVideo)||void 0===t?void 0:t.chooseAudioOutput(e),this.selectedAudioOutputDevice=e,this.publishSelectedAudioOutputDevice()}catch(e){throw console.error("MeetingManager failed to select audio output device",e),Error("MeetingManager failed to select audio output device")}}),this.startVideoInputDevice=e=>T(this,void 0,void 0,function*(){var t;try{yield null===(t=this.audioVideo)||void 0===t?void 0:t.startVideoInput(e),this.selectedVideoInputDevice=e,this.publishSelectedVideoInputDevice()}catch(t){let e=Error("MeetingManager failed to select video input device.");throw t instanceof Error&&(e.name=t.name,e.message+=" "+t.message),console.error(e),e}}),this.stopVideoInputDevice=()=>T(this,void 0,void 0,function*(){var e;try{yield null===(e=this.audioVideo)||void 0===e?void 0:e.stopVideoInput(),this.selectedVideoInputDevice=void 0,this.publishSelectedVideoInputDevice()}catch(e){throw console.error("MeetingManager failed to unselect video input device",e),Error("MeetingManager failed to unselect video input device")}}),this.selectVideoInputDevice=e=>{this.selectedVideoInputDevice=e,this.publishSelectedVideoInputDevice()},this.invokeDeviceProvider=e=>{this.setupDeviceLabelTrigger(e),this.publishDeviceLabelTrigger()},this.subscribeToAudioVideo=e=>{this.audioVideoCallbacks.push(e)},this.unsubscribeFromAudioVideo=e=>{this.audioVideoCallbacks=this.audioVideoCallbacks.filter(t=>t!==e)},this.publishAudioVideo=()=>{this.audioVideoCallbacks.forEach(e=>{e(this.audioVideo)})},this.subscribeToActiveSpeaker=e=>{this.activeSpeakerCallbacks.push(e),e(this.activeSpeakers)},this.unsubscribeFromActiveSpeaker=e=>{this.activeSpeakerCallbacks=this.activeSpeakerCallbacks.filter(t=>t!==e)},this.publishActiveSpeaker=()=>{this.activeSpeakerCallbacks.forEach(e=>{e(this.activeSpeakers)})},this.subscribeToSelectedVideoInputDevice=e=>{this.selectedVideoInputDeviceObservers.push(e)},this.unsubscribeFromSelectedVideoInputDevice=e=>{this.selectedVideoInputDeviceObservers=this.selectedVideoInputDeviceObservers.filter(t=>t!==e)},this.publishSelectedVideoInputDevice=()=>{for(let e of this.selectedVideoInputDeviceObservers)e(this.selectedVideoInputDevice)},this.subscribeToSelectedAudioInputDevice=e=>{this.selectedAudioInputDeviceObservers.push(e)},this.unsubscribeFromSelectedAudioInputDevice=e=>{this.selectedAudioInputDeviceObservers=this.selectedAudioInputDeviceObservers.filter(t=>t!==e)},this.publishSelectedAudioInputDevice=()=>{for(let e of this.selectedAudioInputDeviceObservers)e(this.selectedAudioInputDevice)},this.subscribeToSelectedAudioOutputDevice=e=>{this.selectedAudioOutputDeviceObservers.push(e)},this.unsubscribeFromSelectedAudioOutputDevice=e=>{this.selectedAudioOutputDeviceObservers=this.selectedAudioOutputDeviceObservers.filter(t=>t!==e)},this.publishSelectedAudioOutputDevice=()=>{for(let e of this.selectedAudioOutputDeviceObservers)e(this.selectedAudioOutputDevice)},this.subscribeToMeetingStatus=e=>{this.meetingStatusObservers.push(e),e(this.meetingStatus)},this.unsubscribeFromMeetingStatus=e=>{this.meetingStatusObservers=this.meetingStatusObservers.filter(t=>t!==e)},this.publishMeetingStatus=()=>{this.meetingStatusObservers.forEach(e=>{e(this.meetingStatus)})},this.subscribeToDeviceLabelTrigger=e=>{this.deviceLabelTriggerObservers.push(e)},this.unsubscribeFromDeviceLabelTrigger=e=>{this.deviceLabelTriggerObservers=this.deviceLabelTriggerObservers.filter(t=>t!==e)},this.publishDeviceLabelTrigger=()=>{for(let e of this.deviceLabelTriggerObservers)e()},this.subscribeToDeviceLabelTriggerStatus=e=>{this.deviceLabelTriggerStatusObservers.push(e)},this.unsubscribeFromDeviceLabelTriggerStatus=e=>{this.deviceLabelTriggerStatusObservers=this.deviceLabelTriggerStatusObservers.filter(t=>t!==e)},this.publishDeviceLabelTriggerStatus=()=>{for(let e of this.deviceLabelTriggerStatusObservers)e(this.deviceLabelTriggerStatus)},this.subscribeToEventDidReceive=e=>{this.meetingEventObserverSet.add(e)},this.unsubscribeFromEventDidReceive=e=>{this.meetingEventObserverSet.delete(e)},this.publishEventDidReceiveUpdate=(e,t)=>{this.meetingEventObserverSet.forEach(r=>r(e,t))},this.logger=e,this.eventDidReceiveRef={eventDidReceive:(e,t)=>{this.publishEventDidReceiveUpdate(e,t)}}}initializeMeetingManager(){this.meetingSession=null,this.audioVideo=null,this.meetingSessionConfiguration=void 0,this.meetingId=null,this.selectedAudioOutputDevice=null,this.selectedAudioInputDevice=void 0,this.selectedVideoInputDevice=void 0,this.audioInputDevices=[],this.audioOutputDevices=[],this.videoInputDevices=[],this.activeSpeakers=[],this.activeSpeakerListener=null,this.audioVideoObservers={}}join(e,t){return T(this,void 0,void 0,function*(){let{deviceLabels:r,eventController:i,enableWebAudio:o,activeSpeakerPolicy:n,skipDeviceSelection:a}=this.parseJoinParams(t);this.meetingSessionConfiguration=e,this.meetingId=this.meetingSessionConfiguration.meetingId;let s=new C.DefaultDeviceController(this.logger,{enableWebAudio:o});this.meetingSession=new C.DefaultMeetingSession(e,this.logger,s,i),this.audioVideo=this.meetingSession.audioVideo,i?i.addObserver(this.eventDidReceiveRef):this.meetingSession.eventController.addObserver(this.eventDidReceiveRef),this.setupAudioVideoObservers(),this.setupDeviceLabelTrigger(r),a||(this.logger.info("[MeetingManager.join] listing and selecting devices"),yield this.listAndSelectDevices(r)),this.publishAudioVideo(),this.setupActiveSpeakerDetection(n),this.meetingStatus=w.Loading,this.publishMeetingStatus()})}parseJoinParams(e){let t=(null==e?void 0:e.deviceLabels)||$.AudioAndVideo,r=null==e?void 0:e.eventController;return{deviceLabels:t,eventController:r,enableWebAudio:(null==e?void 0:e.enableWebAudio)||!1,activeSpeakerPolicy:(null==e?void 0:e.activeSpeakerPolicy)||new C.DefaultActiveSpeakerPolicy,skipDeviceSelection:(null==e?void 0:e.skipDeviceSelection)||!1}}start(){var e;return T(this,void 0,void 0,function*(){null===(e=this.audioVideo)||void 0===e||e.start()})}leave(){var e,t;return T(this,void 0,void 0,function*(){if(this.audioVideo){this.audioVideo.stopContentShare(),this.audioVideo.stopLocalVideoTile(),this.audioVideo.unbindAudioElement();try{yield null===(e=this.meetingSession)||void 0===e?void 0:e.deviceController.chooseAudioOutput(null),yield null===(t=this.meetingSession)||void 0===t?void 0:t.deviceController.destroy()}catch(e){console.log("MeetingManager failed to clean up media resources on leave")}this.activeSpeakerListener&&this.audioVideo.unsubscribeFromActiveSpeakerDetector(this.activeSpeakerListener),this.audioVideo.stop()}this.initializeMeetingManager(),this.publishAudioVideo(),this.publishActiveSpeaker()})}setupAudioVideoObservers(){this.audioVideo&&(this.audioVideoObservers={audioVideoDidStart:this.audioVideoDidStart,audioVideoDidStartConnecting:this.audioVideoDidStartConnecting,audioVideoDidStop:this.audioVideoDidStop},this.audioVideo.addObserver(this.audioVideoObservers))}updateDeviceLists(){var e,t,r;return T(this,void 0,void 0,function*(){this.audioInputDevices=(yield null===(e=this.audioVideo)||void 0===e?void 0:e.listAudioInputDevices())||[],this.videoInputDevices=(yield null===(t=this.audioVideo)||void 0===t?void 0:t.listVideoInputDevices())||[],this.audioOutputDevices=(yield null===(r=this.audioVideo)||void 0===r?void 0:r.listAudioOutputDevices())||[]})}setupDeviceLabelTrigger(e=$.AudioAndVideo){var t;let r;if(this.deviceLabels=e,"function"==typeof e)r=e;else if(e===$.None)r=iS;else{let t={};switch(e){case $.Audio:t.audio=!0;break;case $.Video:t.video=!0;break;case $.AudioAndVideo:t.audio=!0,t.video=!0}r=()=>T(this,void 0,void 0,function*(){this.deviceLabelTriggerStatus=x.IN_PROGRESS,this.publishDeviceLabelTriggerStatus();try{let e=(yield navigator.mediaDevices.enumerateDevices()).some(e=>"videoinput"===e.kind),r=yield navigator.mediaDevices.getUserMedia({audio:t.audio,video:t.video&&e});return this.deviceLabelTriggerStatus=x.GRANTED,this.publishDeviceLabelTriggerStatus(),r}catch(e){throw console.error("MeetingManager failed to get device permissions"),this.deviceLabelTriggerStatus=x.DENIED,this.publishDeviceLabelTriggerStatus(),e}})}null===(t=this.audioVideo)||void 0===t||t.setDeviceLabelTrigger(r)}setupActiveSpeakerDetection(e){var t;this.publishActiveSpeaker(),this.activeSpeakerListener=e=>{this.activeSpeakers=e,this.activeSpeakerCallbacks.forEach(t=>t(e))},null===(t=this.audioVideo)||void 0===t||t.subscribeToActiveSpeakerDetector(e||new C.DefaultActiveSpeakerPolicy,this.activeSpeakerListener)}listAndSelectDevices(e=$.AudioAndVideo){var t,r;return T(this,void 0,void 0,function*(){if(yield this.updateDeviceLists(),"function"==typeof e)return;let i=!1,o=!1;switch(e){case $.None:break;case $.Audio:i=!0;break;case $.Video:o=!0;break;case $.AudioAndVideo:i=!0,o=!0}if(i&&!this.selectedAudioInputDevice&&this.audioInputDevices&&this.audioInputDevices.length){this.selectedAudioInputDevice=this.audioInputDevices[0].deviceId;try{yield null===(t=this.audioVideo)||void 0===t?void 0:t.startAudioInput(this.audioInputDevices[0].deviceId)}catch(e){console.error("MeetingManager failed to select audio input device on join",e)}this.publishSelectedAudioInputDevice()}if(i&&!this.selectedAudioOutputDevice&&this.audioOutputDevices&&this.audioOutputDevices.length){if(this.selectedAudioOutputDevice=this.audioOutputDevices[0].deviceId,new C.DefaultBrowserBehavior().supportsSetSinkId())try{yield null===(r=this.audioVideo)||void 0===r?void 0:r.chooseAudioOutput(this.audioOutputDevices[0].deviceId)}catch(e){console.error("MeetingManager failed to select audio output device on join",e)}this.publishSelectedAudioOutputDevice()}o&&!this.selectedVideoInputDevice&&this.videoInputDevices&&this.videoInputDevices.length&&(this.selectedVideoInputDevice=this.videoInputDevices[0].deviceId,this.publishSelectedVideoInputDevice())})}}let iD=(0,S.createContext)(null),iA=({onDeviceReplacement:e,meetingManager:t,children:r})=>{let i=tN(),[o]=(0,S.useState)(()=>t||new iO(i));return S.createElement(iD.Provider,{value:o},S.createElement(ix,null,S.createElement(i_,null,S.createElement(iF,{onDeviceReplacement:e},S.createElement(ik,null,S.createElement(id,null,S.createElement(iv,null,S.createElement(ig,null,S.createElement(ir,null,S.createElement(ip,null,r))))))))))},iC=()=>{let e=(0,S.useContext)(iD);if(!e)throw Error("useMeetingManager must be used within MeetingProvider");return e},iz=(0,S.createContext)(null),i_=({children:e})=>{let t=iC(),[r,i]=(0,S.useState)(null);return(0,S.useEffect)(()=>{function e(e){i(e)}return t.subscribeToAudioVideo(e),()=>t.unsubscribeFromAudioVideo(e)},[]),S.createElement(iz.Provider,{value:r},e)},iT=()=>(0,S.useContext)(iz),iI=(0,S.createContext)(null),ij=({children:e,onDeviceReplacement:t})=>{let r=tN(),i=iC(),o=iT(),[n,a]=(0,S.useState)([]),[s,f]=(0,S.useState)(i.selectedAudioInputDevice),l=(0,S.useRef)(s);l.current=s;let d=e=>T(void 0,void 0,void 0,function*(){return t?t(e,i.selectedAudioInputDevice):e});(0,S.useEffect)(()=>(i.subscribeToSelectedAudioInputDevice(f),()=>{i.unsubscribeFromSelectedAudioInputDevice(f)}),[]),(0,S.useEffect)(()=>{let e=!0,t={audioInputsChanged:e=>T(void 0,void 0,void 0,function*(){if(r.info("AudioInputProvider - audio inputs updated"),i.getDeviceLabels()!==$.Audio&&i.getDeviceLabels()!==$.AudioAndVideo){r.info("Device labels do not allow audio, skipping audio input selection on audioInputsChanged");return}let t=e.some(e=>e.deviceId===l.current),o="default";l.current&&!t&&e.length?(r.info("Previously selected audio input lost. Selecting a default device."),o=e[0].deviceId):"default"===l.current&&r.info('Audio devices updated and "default" device is selected. Reselecting input.');let n=yield d(o);try{yield i.startAudioInputDevice(n)}catch(e){r.error(`Failed to select audio input device on audioInputsChanged: ${e}`)}a(e)})};function n(){return T(this,void 0,void 0,function*(){if(!o)return;let r=yield o.listAudioInputDevices();e&&(a(r),o.addDeviceChangeObserver(t))})}let s=()=>{n()};return i.subscribeToDeviceLabelTrigger(s),n(),()=>{e=!1,null==o||o.removeDeviceChangeObserver(t),i.unsubscribeFromDeviceLabelTrigger(s)}},[o,t]);let c=(0,S.useMemo)(()=>({devices:n,selectedDevice:s}),[n,s]);return S.createElement(iI.Provider,{value:c},e)},iL=()=>{let e=(0,S.useContext)(iI);if(!e)throw Error("useAudioInputs must be used within AudioInputProvider");return e},iV=(0,S.createContext)(null),iM=({children:e})=>{let t=tN(),r=iT(),[i,o]=(0,S.useState)([]),n=iC(),[a,s]=(0,S.useState)(n.selectedAudioOutputDevice);(0,S.useEffect)(()=>(n.subscribeToSelectedAudioOutputDevice(s),()=>{n.unsubscribeFromSelectedAudioOutputDevice(s)}),[]),(0,S.useEffect)(()=>{let e=!0,i={audioOutputsChanged:e=>{t.info("AudioOutputProvider - audio outputs updated"),o(e)}};function a(){return T(this,void 0,void 0,function*(){if(!r)return;let t=yield r.listAudioOutputDevices();e&&(o(t),r.addDeviceChangeObserver(i))})}let s=()=>{a()};return n.subscribeToDeviceLabelTrigger(s),a(),()=>{e=!1,null==r||r.removeDeviceChangeObserver(i),n.unsubscribeFromDeviceLabelTrigger(s)}},[r]);let f=(0,S.useMemo)(()=>({devices:i,selectedDevice:a}),[i,a]);return S.createElement(iV.Provider,{value:f},e)},iP=(0,S.createContext)(null),iR=({children:e})=>{let t=tN(),r=iT(),[i,o]=(0,S.useState)([]),n=iC(),[a,s]=(0,S.useState)(n.selectedVideoInputDevice);(0,S.useEffect)(()=>(n.subscribeToSelectedVideoInputDevice(s),()=>{n.unsubscribeFromSelectedVideoInputDevice(s)}),[]),(0,S.useEffect)(()=>{let e=!0,i={videoInputsChanged:e=>{t.info("VideoInputProvider - video inputs updated"),o(e)}};function a(){return T(this,void 0,void 0,function*(){if(!r)return;let t=yield r.listVideoInputDevices();e&&(o(t),r.addDeviceChangeObserver(i))})}let s=()=>{a()};return n.subscribeToDeviceLabelTrigger(s),a(),()=>{e=!1,null==r||r.removeDeviceChangeObserver(i),n.unsubscribeFromDeviceLabelTrigger(s)}},[r]);let f=(0,S.useMemo)(()=>({devices:i,selectedDevice:a}),[i,a]);return S.createElement(iP.Provider,{value:f},e)},iB=()=>{let e=(0,S.useContext)(iP);if(!e)throw Error("useVideoInputs must be used within VideoInputProvider");return e},iF=({children:e,onDeviceReplacement:t})=>S.createElement(ij,{onDeviceReplacement:t},S.createElement(iM,null,S.createElement(iR,null,e))),iN=e=>T(void 0,void 0,void 0,function*(){let t;return e?(t=(0,C.isAudioTransformDevice)(e)||(0,C.isVideoTransformDevice)(e)?yield e.intrinsicDevice():e,C.DefaultDeviceController.getIntrinsicDeviceId(t)):""});function iZ(){let e=iT(),[t,r]=(0,S.useState)(()=>(null==e?void 0:e.realtimeIsLocalAudioMuted())||!1);(0,S.useEffect)(()=>{let t=e=>{r(e)};return null==e||e.realtimeSubscribeToMuteAndUnmuteLocalAudio(t),r((null==e?void 0:e.realtimeIsLocalAudioMuted())||!1),()=>{null==e||e.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(t)}},[e]);let i=(0,S.useCallback)(()=>{t?null==e||e.realtimeUnmuteLocalAudio():null==e||e.realtimeMuteLocalAudio()},[t,e]);return{muted:t,toggleMute:i}}(0,S.createContext)(void 0),ev(function(e,t){var r,i,o,n="__lodash_hash_undefined__",a="[object Arguments]",s="[object Array]",f="[object Boolean]",l="[object Date]",d="[object Error]",c="[object Function]",u="[object Map]",p="[object Number]",m="[object Object]",h="[object Promise]",g="[object RegExp]",b="[object Set]",v="[object String]",y="[object WeakMap]",w="[object ArrayBuffer]",x="[object DataView]",$=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,E={};E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E[a]=E[s]=E[w]=E[f]=E[x]=E[l]=E[d]=E[c]=E[u]=E[p]=E[m]=E[g]=E[b]=E[v]=E[y]=!1;var S="object"==typeof eb&&eb&&eb.Object===Object&&eb,O="object"==typeof self&&self&&self.Object===Object&&self,D=S||O||Function("return this")(),A=t&&!t.nodeType&&t,C=A&&e&&!e.nodeType&&e,z=C&&C.exports===A,_=z&&S.process,T=function(){try{return _&&_.binding&&_.binding("util")}catch(e){}}(),I=T&&T.isTypedArray;function j(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}function L(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var V=Array.prototype,M=Function.prototype,P=Object.prototype,R=D["__core-js_shared__"],B=M.toString,F=P.hasOwnProperty,N=(r=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Z=P.toString,H=RegExp("^"+B.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=z?D.Buffer:void 0,U=D.Symbol,G=D.Uint8Array,q=P.propertyIsEnumerable,Y=V.splice,J=U?U.toStringTag:void 0,Q=Object.getOwnPropertySymbols,X=W?W.isBuffer:void 0,K=(i=Object.keys,o=Object,function(e){return i(o(e))}),ee=eS(D,"DataView"),et=eS(D,"Map"),er=eS(D,"Promise"),ei=eS(D,"Set"),eo=eS(D,"WeakMap"),en=eS(Object,"create"),ea=eA(ee),es=eA(et),ef=eA(er),el=eA(ei),ed=eA(eo),ec=U?U.prototype:void 0,eu=ec?ec.valueOf:void 0;function ep(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function em(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function eh(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function eg(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new eh;++t<r;)this.add(e[t])}function ev(e){var t=this.__data__=new em(e);this.size=t.size}function ey(e,t){for(var r=e.length;r--;)if(eC(e[r][0],t))return r;return -1}function ew(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":J&&J in Object(e)?function(e){var t=F.call(e,J),r=e[J];try{e[J]=void 0;var i=!0}catch(e){}var o=Z.call(e);return i&&(t?e[J]=r:delete e[J]),o}(e):Z.call(e)}function ex(e){return eV(e)&&ew(e)==a}function e$(e,t,r,i,o,n){var a=1&r,s=e.length,f=t.length;if(s!=f&&!(a&&f>s))return!1;var l=n.get(e);if(l&&n.get(t))return l==t;var d=-1,c=!0,u=2&r?new eg:void 0;for(n.set(e,t),n.set(t,e);++d<s;){var p=e[d],m=t[d];if(i)var h=a?i(m,p,d,t,e,n):i(p,m,d,e,t,n);if(void 0!==h){if(h)continue;c=!1;break}if(u){if(!function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}(t,function(e,t){if(!u.has(t)&&(p===e||o(p,e,r,i,n)))return u.push(t)})){c=!1;break}}else if(!(p===m||o(p,m,r,i,n))){c=!1;break}}return n.delete(e),n.delete(t),c}function ek(e){var t;return t=function(e){return null!=e&&ej(e.length)&&!eI(e)?function(e,t){var r,i=e_(e),o=!i&&ez(e),n=!i&&!o&&eT(e),a=!i&&!o&&!n&&eM(e),s=i||o||n||a,f=s?function(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}(e.length,String):[],l=f.length;for(var d in e)F.call(e,d)&&!(s&&("length"==d||n&&("offset"==d||"parent"==d)||a&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||(r=null==(r=l)?9007199254740991:r)&&("number"==typeof d||k.test(d))&&d>-1&&d%1==0&&d<r))&&f.push(d);return f}(e):function(e){if(t=e&&e.constructor,e!==("function"==typeof t&&t.prototype||P))return K(e);var t,r=[];for(var i in Object(e))F.call(e,i)&&"constructor"!=i&&r.push(i);return r}(e)}(e),e_(e)?t:function(e,t){for(var r=-1,i=t.length,o=e.length;++r<i;)e[o+r]=t[r];return e}(t,eO(e))}function eE(e,t){var r,i=e.__data__;return("string"==(r=typeof t)||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t)?i["string"==typeof t?"string":"hash"]:i.map}function eS(e,t){var r=null==e?void 0:e[t];return!(!eL(r)||N&&N in r)&&(eI(r)?H:$).test(eA(r))?r:void 0}ep.prototype.clear=function(){this.__data__=en?en(null):{},this.size=0},ep.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ep.prototype.get=function(e){var t=this.__data__;if(en){var r=t[e];return r===n?void 0:r}return F.call(t,e)?t[e]:void 0},ep.prototype.has=function(e){var t=this.__data__;return en?void 0!==t[e]:F.call(t,e)},ep.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=en&&void 0===t?n:t,this},em.prototype.clear=function(){this.__data__=[],this.size=0},em.prototype.delete=function(e){var t=this.__data__,r=ey(t,e);return!(r<0)&&(r==t.length-1?t.pop():Y.call(t,r,1),--this.size,!0)},em.prototype.get=function(e){var t=this.__data__,r=ey(t,e);return r<0?void 0:t[r][1]},em.prototype.has=function(e){return ey(this.__data__,e)>-1},em.prototype.set=function(e,t){var r=this.__data__,i=ey(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this},eh.prototype.clear=function(){this.size=0,this.__data__={hash:new ep,map:new(et||em),string:new ep}},eh.prototype.delete=function(e){var t=eE(this,e).delete(e);return this.size-=t?1:0,t},eh.prototype.get=function(e){return eE(this,e).get(e)},eh.prototype.has=function(e){return eE(this,e).has(e)},eh.prototype.set=function(e,t){var r=eE(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this},eg.prototype.add=eg.prototype.push=function(e){return this.__data__.set(e,n),this},eg.prototype.has=function(e){return this.__data__.has(e)},ev.prototype.clear=function(){this.__data__=new em,this.size=0},ev.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},ev.prototype.get=function(e){return this.__data__.get(e)},ev.prototype.has=function(e){return this.__data__.has(e)},ev.prototype.set=function(e,t){var r=this.__data__;if(r instanceof em){var i=r.__data__;if(!et||i.length<199)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new eh(i)}return r.set(e,t),this.size=r.size,this};var eO=Q?function(e){return null==e?[]:function(e,t){for(var r=-1,i=null==e?0:e.length,o=0,n=[];++r<i;){var a=e[r];t(a,r,e)&&(n[o++]=a)}return n}(Q(e=Object(e)),function(t){return q.call(e,t)})}:function(){return[]},eD=ew;function eA(e){if(null!=e){try{return B.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function eC(e,t){return e===t||e!=e&&t!=t}(ee&&eD(new ee(new ArrayBuffer(1)))!=x||et&&eD(new et)!=u||er&&eD(er.resolve())!=h||ei&&eD(new ei)!=b||eo&&eD(new eo)!=y)&&(eD=function(e){var t=ew(e),r=t==m?e.constructor:void 0,i=r?eA(r):"";if(i)switch(i){case ea:return x;case es:return u;case ef:return h;case el:return b;case ed:return y}return t});var ez=ex(function(){return arguments}())?ex:function(e){return eV(e)&&F.call(e,"callee")&&!q.call(e,"callee")},e_=Array.isArray,eT=X||function(){return!1};function eI(e){if(!eL(e))return!1;var t=ew(e);return t==c||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ej(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function eL(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function eV(e){return null!=e&&"object"==typeof e}var eM=I?function(e){return I(e)}:function(e){return eV(e)&&ej(e.length)&&!!E[ew(e)]};e.exports=function(e,t){return function e(t,r,i,o,n){return t===r||(null!=t&&null!=r&&(eV(t)||eV(r))?function(e,t,r,i,o,n){var c=e_(e),h=e_(t),y=c?s:eD(e),$=h?s:eD(t);y=y==a?m:y,$=$==a?m:$;var k=y==m,E=$==m,S=y==$;if(S&&eT(e)){if(!eT(t))return!1;c=!0,k=!1}if(S&&!k)return n||(n=new ev),c||eM(e)?e$(e,t,r,i,o,n):function(e,t,r,i,o,n,a){switch(r){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case w:if(e.byteLength!=t.byteLength||!n(new G(e),new G(t)))break;return!0;case f:case l:case p:return eC(+e,+t);case d:return e.name==t.name&&e.message==t.message;case g:case v:return e==t+"";case u:var s=j;case b:var c=1&i;if(s||(s=L),e.size!=t.size&&!c)break;var m=a.get(e);if(m)return m==t;i|=2,a.set(e,t);var h=e$(s(e),s(t),i,o,n,a);return a.delete(e),h;case"[object Symbol]":if(eu)return eu.call(e)==eu.call(t)}return!1}(e,t,y,r,i,o,n);if(!(1&r)){var O=k&&F.call(e,"__wrapped__"),D=E&&F.call(t,"__wrapped__");if(O||D){var A=O?e.value():e,C=D?t.value():t;return n||(n=new ev),o(A,C,r,i,n)}}return!!S&&(n||(n=new ev),function(e,t,r,i,o,n){var a=1&r,s=ek(e),f=s.length;if(f!=ek(t).length&&!a)return!1;for(var l=f;l--;){var d=s[l];if(!(a?d in t:F.call(t,d)))return!1}var c=n.get(e);if(c&&n.get(t))return c==t;var u=!0;n.set(e,t),n.set(t,e);for(var p=a;++l<f;){var m=e[d=s[l]],h=t[d];if(i)var g=a?i(h,m,d,t,e,n):i(m,h,d,e,t,n);if(!(void 0===g?m===h||o(m,h,r,i,n):g)){u=!1;break}p||(p="constructor"==d)}if(u&&!p){var b=e.constructor,v=t.constructor;b!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v)&&(u=!1)}return n.delete(e),n.delete(t),u}(e,t,r,i,o,n))}(t,r,i,o,e,n):t!=t&&r!=r)}(e,t)}}),(0,S.createContext)(null);let iH=(0,O.ZP)(rQ)`
  background-color: ${({theme:e})=>e.colors.greys.grey80};
`,iW=e=>{var{className:t}=e,r=_(e,["className"]);let i=iT(),{tileId:o}=ii(),n=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(i&&n.current&&o)return i.bindVideoElement(o,n.current),()=>{i.getVideoTile(o)&&i.unbindVideoElement(o)}},[i,o]),o?S.createElement(iH,Object.assign({objectFit:"contain",className:t||""},r,{ref:n})):null};function iU(e){(0,S.useEffect)(()=>{var t;function r(){if(!e.current)return;let t=e.current.videoHeight,r=e.current.videoWidth;e.current.style.objectFit=t>r?"contain":"cover"}return null===(t=e.current)||void 0===t||t.addEventListener("loadedmetadata",r),()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.removeEventListener("loadedmetadata",r)}},[e])}let iG=(0,O.ZP)(rQ)`
  ${e=>e.active?"":"display: none"};
`,iq=e=>{var{nameplate:t}=e,r=_(e,["nameplate"]);let{tileId:i,isVideoEnabled:o}=iy(),n=iT(),a=(0,S.useRef)(null);return iU(a),(0,S.useEffect)(()=>{if(n&&i&&a.current&&o)return n.bindVideoElement(i,a.current),()=>{n.getVideoTile(i)&&n.unbindVideoElement(i)}},[n,i,o]),S.createElement(iG,Object.assign({active:o,nameplate:t,ref:a},r))};(0,O.ZP)(rQ)`
  height: auto;
  background: unset;

  video {
    position: static;
  }
`;let iY=e=>{var{name:t,className:r,tileId:i}=e,o=_(e,["name","className","tileId"]);let n=iT(),a=(0,S.useRef)(null);return iU(a),(0,S.useEffect)(()=>{if(n&&a.current)return n.bindVideoElement(i,a.current),()=>{n.getVideoTile(i)&&n.unbindVideoElement(i)}},[n,i]),S.createElement(rQ,Object.assign({},o,{ref:a,nameplate:t,className:`ch-remote-video--${i} ${r||""}`}))},iJ=e=>{let{roster:t}=iE(),{tiles:r,tileIdToAttendeeId:i}=ic();return S.createElement(S.Fragment,null,r.map(r=>{let{name:o}=t[i[r]]||{};return S.createElement(iY,Object.assign({},e,{key:r,tileId:r,name:o}))}))};(0,S.memo)(iJ);let iQ=e=>{let t=rY(),{roster:r}=iE(),{tileId:i}=im(),{tileId:o}=ii(),{tiles:n,tileIdToAttendeeId:a}=ic();return S.createElement(S.Fragment,null,n.map(n=>{let s=!o&&i===n,f=`${s?"ch-featured-tile":""} ${e.className||""}`,{name:l}=r[a[n]]||{};return S.createElement(iY,Object.assign({tileId:n,name:l},e,{className:f,key:n,css:t&&s?"grid-area: ft;":""}))}))};function iX(e){let t=iT(),[r,i]=(0,S.useState)(!1),[o,n]=(0,S.useState)(1);return(0,S.useEffect)(()=>{if(!t)return;let r=(e,t,r,o)=>{null!==r&&i(r),null!==o&&n(o)};return t.realtimeSubscribeToVolumeIndicator(e,r),()=>t.realtimeUnsubscribeFromVolumeIndicator(e,r)},[t,e]),{muted:r,signalStrength:o}}(0,S.memo)(iQ);let iK=O.ZP.div`
  position: relative;
  height: inherit;
  line-height: 0;

  .ch-mic-icon {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .ch-bg-volume-wrapper {
    position: absolute;
    bottom: 41%;
    left: 40%;
    height: 38%;
    width: 21%;
    border-radius: 20%;
    overflow: hidden;
  }

  .ch-bg-volume-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: bottom;
    will-change: transform;
    background-color: ${e=>e.signalStrength&&e.signalStrength<=.5?e.theme.colors.error.light:e.theme.colors.primary.light};
  }

  ${j}
  ${I}
`;function i0(e){let t=iT(),r=iX(e),[i,o]=(0,S.useState)(()=>{var r,i,o;if(!t)return null;let n=e===(null===(o=null===(i=null===(r=t.audioVideoController)||void 0===r?void 0:r.realtimeController)||void 0===i?void 0:i.state)||void 0===o?void 0:o.localAttendeeId),a=t.getAllVideoTiles().find(t=>{let r=t.state();return!r.isContent&&(!n||!!r.active)&&r.boundAttendeeId===e});return a?a.state().tileId:null}),[n,a]=(0,S.useState)(()=>{if(!t)return null;let r=t.getAllVideoTiles().find(t=>{let r=t.state();return!!r.boundAttendeeId&&!!r.isContent&&new C.DefaultModality(r.boundAttendeeId).base()===e});return r?r.state().tileId:null});(0,S.useEffect)(()=>{if(!t)return;let r={videoTileDidUpdate:t=>{if(t.boundAttendeeId===e){if(t.localTile&&i&&!t.boundVideoStream){o(null);return}i||!t.tileId||t.isContent||o(t.tileId)}},videoTileWasRemoved:e=>{e===i&&o(null)}};return t.addObserver(r),()=>t.removeObserver(r)},[t,i,e]),(0,S.useEffect)(()=>{if(!t)return;let r={videoTileDidUpdate:t=>{t.isContent&&t.boundAttendeeId&&!n&&new C.DefaultModality(t.boundAttendeeId).base()===e&&a(t.tileId)},videoTileWasRemoved:e=>{e===n&&a(null)}};return t.addObserver(r),()=>t.removeObserver(r)},[t,n,e]);let s="number"==typeof i&&i>-1;return Object.assign(Object.assign({},r),{videoEnabled:s,sharingContent:"number"==typeof n&&n>-1})}(0,S.forwardRef)((e,t)=>{var{muted:r=!1,signalStrength:i,className:o}=e,n=_(e,["muted","signalStrength","className"]);let a=o?`${o} ch-mic-volume-indicator`:"ch-mic-volume-indicator";return S.createElement(iK,Object.assign({className:a,signalStrength:i,muted:r},n),S.createElement(es,{muted:r,className:"ch-mic-icon",poorConnection:void 0!==i&&i<=.5}),S.createElement("div",{className:"ch-bg-volume-wrapper"},S.createElement("div",{ref:t,className:"ch-bg-volume-fill","data-testid":"volume-fill"})))}),(0,S.createContext)(void 0);let i1=["20rem","35.5rem","48rem","64rem","90rem"];i1.xs=i1[0],i1.sm=i1[1],i1.md=i1[2],i1.lg=i1[3],i1.xl=i1[4];let i5={min:{xs:`@media screen and (min-width: ${i1.xs})`,sm:`@media screen and (min-width: ${i1.sm})`,md:`@media screen and (min-width: ${i1.md})`,lg:`@media screen and (min-width: ${i1.lg})`,xl:`@media screen and (min-width: ${i1.xl})`},max:{xs:`@media screen and (max-width: ${i1.xs})`,sm:`@media screen and (max-width: ${i1.sm})`,md:`@media screen and (max-width: ${i1.md})`,lg:`@media screen and (max-width: ${i1.lg})`,xl:`@media screen and (max-width: ${i1.xl})`}},i2={breakpoints:i1,mediaQueries:i5,fonts:{body:"'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",monospace:"Menlo, monospace"},fontSizes:{baseFontSize:"16px",fontWeight:"normal",h1:{fontSize:"5.3rem",fontWeight:"normal",lineHeight:"5.625rem",mobile:{fontSize:"3.8125rem",fontWeight:"normal",lineHeight:"5.625rem"}},h2:{fontSize:"3.925rem",fontWeight:"normal",lineHeight:"3.75rem",mobile:{fontSize:"3.05rem",fontWeight:"normal",lineHeight:"4.5rem"}},h3:{fontSize:"2.44125rem",fontWeight:"normal",lineHeight:"3.75rem",mobile:{fontSize:"2.90625rem",fontWeight:"normal",lineHeight:"3rem"}},h4:{fontSize:"1.953125rem",fontWeight:"normal",lineHeight:"3.75rem",mobile:{fontSize:"2.15rem",fontWeight:"normal",lineHeight:"3rem"}},h5:{fontSize:"1.5625rem",fontWeight:"normal",lineHeight:"3rem",mobile:{fontSize:"1.59375rem",fontWeight:"normal",lineHeight:"1.875rem"}},h6:{fontSize:"1.25rem",fontWeight:"normal",lineHeight:"1.875rem",mobile:{fontSize:"1.18125rem",fontWeight:"normal",lineHeight:"1.5rem"}},text:{fontSize:"0.875rem",lineHeight:"1.43"},label:{fontSize:"0.875rem",lineHeight:"1.43"},small:{fontSize:"0.75rem",lineHeight:"1.43"},footnote:{fontSize:"0.65rem",lineHeight:"1rem"}},radii:{default:"0.25rem",circle:"50%"},zIndex:{navigation:10,controlBar:15,modal:20,popOver:30,notificationGroup:40},modalSizes:{md:{width:"35rem",height:"94vh"},lg:{width:"50rem",height:"94vh"},fullscreen:{width:"98vw",height:"96vh"}},iconButtonSizes:{sm:"1.5rem",md:"2.5rem",lg:"4rem"}},i3={primary:{lightest:"#88b2ff",lighter:"#5d96ff",light:"#327aff",main:"#075fff",dark:"#004ddb",darker:"#0042bb",darkest:"#002f85"},secondary:{light:"#ff8e74",main:"#ff7654",dark:"#e86c4d"},error:{lightest:"#FCF7F6",lighter:"#F5DDD5",light:"#FF927C",primary:"#C52000",dark:"#9E3319",darker:"#89301A",darkest:"#791800"},success:{lightest:"#EBF1EA",lighter:"#CEE0C8",light:"#50CD49",primary:"#067000",dark:"#305D1D",darker:"#2C511D",darkest:"#184206"},info:{lightest:"#DADFE7",lighter:"#C4CCD9",light:"#418AFD",primary:"#2555A0",dark:"#264A82",darker:"#243F6B",darkest:"#123366"},warning:{lightest:"#FAF8EA",lighter:"#F7E79E",light:"#F9DC60",primary:"#F9CC09",dark:"#665A2A",darker:"#584E26",darkest:"#534201"},greys:{black:"#000000",grey100:"#1b1c20",grey90:"#2e2f34",grey80:"#3f4149",grey70:"#50545e",grey60:"#616672",grey50:"#7d818b",grey40:"#989da5",grey30:"#d4d5d8",grey20:"#e4e9f2",grey10:"#f0f1f2",white:"#ffffff"}},i4={bgd:i3.greys.white,text:i3.greys.grey80,fontSize:i2.fontSizes.baseFontSize},i7={none:"none",small:`0 0.09375rem 0.0625rem 0 ${R(i3.greys.grey100,.15)}`,medium:`0 0.5rem 0.85rem 0 ${R(i3.greys.black,.15)}`,large:`0 0.75rem 1.875rem 0 ${R(i3.greys.black,.15)}`},i6={primary:{shadow:i7.none,static:{bgd:i3.primary.light,border:`0.03125rem solid ${i3.primary.darker}`,text:i3.greys.white,shadow:"none"},hover:{bgd:i3.primary.dark,border:`0.03125rem solid ${i3.primary.darkest}`,text:i3.greys.white,shadow:"none"},focus:{bgd:i3.primary.dark,border:`0.03125rem solid ${i3.primary.darker}`,text:i3.greys.white,shadow:`0 0 0 0.25rem ${i3.primary.lightest}`},active:{bgd:i3.primary.darker,border:`0.03125rem solid ${i3.greys.black}`,text:i3.greys.white,shadow:`0 0 0 0.25rem ${i3.primary.lightest}`},selected:{bgd:i3.primary.light,border:`0.03125rem solid ${i3.primary.dark}`,text:i3.greys.white,shadow:"none"},disabled:{bgd:i3.greys.white,border:`0.03125rem solid ${i3.greys.grey10}`,text:i3.greys.grey40,shadow:"none"}},secondary:{shadow:i7.none,static:{bgd:i3.greys.white,border:`0.03125rem solid ${i3.greys.grey30}`,text:i3.greys.grey80,shadow:"none"},hover:{bgd:i3.greys.grey10,border:`0.03125rem solid ${i3.greys.grey30}`,text:i3.greys.grey80,shadow:"none"},focus:{bgd:i3.greys.grey10,border:`0.03125rem solid ${i3.primary.dark}`,text:i3.greys.grey80,shadow:`0 0 0 0.25rem ${i3.primary.light}`},active:{bgd:i3.greys.grey20,border:`0.03125rem solid ${i3.greys.grey40}`,text:i3.greys.grey80,shadow:`0 0 0 0.25rem ${i3.primary.dark}`},selected:{bgd:i3.greys.grey10,border:`0.03125rem solid ${i3.greys.grey30}`,text:i3.greys.grey80,shadow:`0 0 0 0.25rem ${i3.primary.dark}`},disabled:{bgd:i3.greys.white,border:`0.03125rem solid ${i3.greys.grey10}`,text:i3.greys.grey40,shadow:"none"}},icon:{shadow:i7.none,static:{bgd:"transparent",border:"0.03125rem  solid transparent",text:i3.greys.grey80,shadow:"none"},hover:{bgd:i3.primary.dark,border:"0.03125rem  solid transparent",text:i3.greys.white,shadow:"none"},focus:{bgd:"transparent",border:`0.03125rem  solid ${i3.primary.darker}`,text:i3.greys.grey80,shadow:`0 0 0 0.25rem ${i3.primary.lightest}`},active:{bgd:i3.primary.darker,border:`0.03125rem  solid ${i3.primary.darker}`,text:i3.greys.white,shadow:`0 0 0 0.25rem ${i3.primary.lightest}`},selected:{bgd:i3.primary.light,border:`0.03125rem  solid ${i3.primary.darker}`,text:i3.greys.white,shadow:"none"},disabled:{bgd:"transparent",border:"none",text:i3.greys.grey40,shadow:"none"}}},i8={bgd:i3.greys.white,border:`0.03125rem solid ${i3.greys.grey30}`,borderRadius:i2.radii.default,fontColor:i3.greys.grey80,placeholder:i3.greys.grey40,shadow:`0 0.0625rem 0.0625rem 0 ${R(i3.greys.black,.1)}`,clearBg:i3.greys.grey50,focus:{bgd:i3.greys.white,border:`solid 0.03125rem ${i3.primary.lighter}`,shadow:`0 0 0 0.125rem ${i3.primary.lightest}`},error:{border:`0.03125rem solid ${i3.error.dark}`,fontColor:i3.error.primary,shadow:`0 0 0 0.125rem ${i3.error.light}`},checked:{bgd:i3.primary.main,border:`solid 0.03125rem ${i3.primary.main}`,fontColor:i3.greys.white,shadow:`0 0.03125rem 0.03125rem 0 ${R(i3.primary.dark,.7)}`}},i9={bgd:i3.greys.white,text:i3.greys.grey80,wrapperBgd:R(i3.greys.grey50,.9),titleSize:i2.fontSizes.h5.fontSize,titleWeight:"normal",shadow:i7.large,border:i3.greys.grey30},oe={menuBgd:`${R(i3.greys.grey10,.85)}`,menuBorder:`0.5px solid ${i3.greys.grey20}`,shadow:i7.large,itemBgd:"transparent",itemText:i3.greys.grey70,titleText:i3.greys.grey60,active:{itemBgd:i3.primary.dark,itemText:i3.greys.white},disabled:i3.greys.grey40,separator:`${R(i3.greys.grey40,.3)}`},ot={shadow:i7.large,error:{text:i3.error.lightest,closeButton:{text:i3.error.lighter,hover:{bgd:i3.error.lighter,text:i3.error.dark},active:{bgd:i3.error.lightest,text:i3.error.darker}}},success:{text:i3.success.lightest,closeButton:{text:i3.success.lighter,hover:{bgd:i3.success.lighter,text:i3.success.dark},active:{bgd:i3.success.lightest,text:i3.success.darker}}},info:{text:i3.info.lightest,closeButton:{text:i3.info.lighter,hover:{bgd:i3.info.lighter,text:i3.info.dark},active:{bgd:i3.info.lightest,text:i3.info.darker}}},warning:{text:i3.warning.darker,closeButton:{text:i3.warning.dark,hover:{bgd:i3.warning.dark,text:i3.greys.white},active:{bgd:i3.warning.darker,text:i3.greys.white}}}},or={fontColor:i3.primary.main,fontColorHover:i3.primary.dark,fontColorActive:i3.primary.darker,fontColorVisited:i3.primary.darkest},oi={text:i3.greys.grey70,shadow:i7.large,bgd:i3.greys.white,border:`0.03125rem solid ${i3.greys.grey20}`,opacity:1,selected:{text:i6.primary.selected.text,bgd:i6.primary.selected.bgd}},oo={title:i3.greys.grey100,primaryText:i3.greys.grey80,secondaryText:i3.greys.grey50,headerBorder:i3.greys.grey40,containerBorder:i3.greys.grey30,bgd:i3.greys.grey10,fgd:i3.greys.white,shadow:i7.large,maxWidth:"18.5rem"},on={text:i3.greys.grey80,bgd:i3.greys.grey10,headerBorder:i3.greys.grey40,wrapperBgd:R(i3.greys.grey50,.9)},oa={bgd:i3.greys.white},os={incoming:{bgd:i3.greys.white,fontColor:i3.greys.grey60,linkColor:i3.primary.main,linkColorHover:i3.primary.dark,linkColorActive:i3.primary.darker,linkColorVisited:i3.primary.darkest},outgoing:{bgd:i3.primary.main,fontColor:i3.greys.grey10,linkColor:i3.greys.white,linkColorHover:i3.greys.grey10,linkColorActive:i3.greys.grey20,linkColorVisited:i3.greys.grey30},container:{fontColor:i3.greys.grey70,bgd:i3.greys.grey10}},of={size:{fontColor:i3.greys.grey40,bgd:i3.greys.white,letterSpacing:"-0.07px",lineHight:"16px",fontSize:"10.4px"},icon:{bgd:i3.greys.grey10,color:i3.greys.grey80},name:{fontColor:i3.greys.grey80},content:{letterSpacing:"-0.09px",bgd:i3.greys.white,fontColor:i3.greys.grey80}},ol={bgd:i3.greys.white,fontColor:i3.greys.grey70,border:"1px solid transparent",active:{bgd:i3.primary.dark,fontColor:i3.greys.white},hover:{bgd:i3.greys.grey10},focus:{border:`1px solid ${i3.primary.dark}`,selectedBorder:`1px solid ${i3.greys.grey10}`},selected:{bgd:i3.primary.light,fontColor:i3.greys.white},iconButton:{activeBgd:i3.greys.white}},od={bgd:i3.greys.grey60,fontColor:i3.greys.white},oc=Object.assign({name:"Light Theme",buttons:i6,colors:i3,globalStyle:i4,links:or,shadows:i7,inputs:i8,modal:i9,popOver:oe,notification:ot,controlBar:oi,roster:oo,navbar:on,videoGrid:oa,chatBubble:os,channelList:ol,chatDateHeader:od,messageAttachment:of},i2),ou={primary:{lightest:"#9DEFFB",lighter:"#8AEBFA",light:"#62E5F9",main:"#4FE2F8",dark:"#29DCF8",darker:"#22B6CB",darkest:"#1FA1B5"},secondary:{light:"#FF8B70",main:"#FF9B83",dark:"#FFB4A1"},error:{lightest:"#FBC1C0",lighter:"#FDA8A6",light:"#FD9B99",primary:"#FF8B8A",dark:"#583A39",darker:"#452F2E",darkest:"#302020"},success:{lightest:"#F4FBF1",lighter:"#D2F1C5",light:"#BAF39E",primary:"#A3E881",dark:"#4F6444",darker:"#46573D",darkest:"#324129"},info:{lightest:"#F0F5FD",lighter:"#D8E6FB",light:"#C4DBFF",primary:"#BAD4FF",dark:"#555B69",darker:"#494F59",darkest:"#343C48"},warning:{lightest:"#FDFDF7",lighter:"#3F4149",light:"#FFEB96",primary:"#FBDF64",dark:"#6D653C",darker:"#5E5736",darkest:"#47422D"},greys:{black:"#000000",grey100:"#1b1c20",grey90:"#2e2f34",grey80:"#3f4149",grey70:"#50545e",grey60:"#616672",grey50:"#7d818b",grey40:"#989da5",grey30:"#d4d5d8",grey20:"#e4e9f2",grey10:"#f0f1f2",white:"#ffffff"}},op={bgd:ou.greys.grey80,text:ou.greys.white,fontSize:i2.fontSizes.baseFontSize},om={none:"none",small:"",medium:"",large:`0 0.75rem 1.875rem 0 ${R(ou.greys.black,.15)}`},oh={primary:{shadow:om.none,static:{bgd:ou.primary.main,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},hover:{bgd:ou.primary.dark,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},focus:{bgd:ou.primary.dark,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:`0 0 0 0.25rem ${ou.primary.darkest}`},active:{bgd:ou.primary.darker,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},selected:{bgd:ou.primary.light,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},disabled:{bgd:ou.greys.grey80,border:`0.03125rem solid ${R(ou.greys.black,.4)}`,text:ou.greys.grey40,shadow:"none"}},secondary:{shadow:om.none,static:{bgd:ou.greys.grey50,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.white,shadow:"none"},hover:{bgd:ou.greys.grey60,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.white,shadow:"none"},focus:{bgd:ou.greys.grey60,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.white,shadow:`0 0 0 0.25rem ${ou.primary.lighter}`},active:{bgd:ou.greys.grey70,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.white,shadow:"none"},selected:{bgd:ou.greys.grey60,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.white,shadow:"none"},disabled:{bgd:ou.greys.grey80,border:`0.03125rem solid ${R(ou.greys.black,.6)}`,text:ou.greys.grey40,shadow:"none"}},icon:{shadow:om.none,static:{bgd:"transparent",border:"0.03125rem solid transparent",text:ou.greys.grey20,shadow:"none"},hover:{bgd:ou.primary.dark,border:`0.03125rem  solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},focus:{bgd:"transparent",border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:`0 0 0 0.25rem ${ou.primary.darker}`},active:{bgd:ou.primary.darker,border:`0.03125rem solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},selected:{bgd:ou.primary.light,border:`0 solid ${ou.greys.black}`,text:ou.greys.grey80,shadow:"none"},disabled:{bgd:"transparent",border:"none",text:ou.greys.grey40,shadow:"none"}}},og={bgd:ou.greys.grey80,border:`0.03125rem solid ${ou.greys.black}`,borderRadius:i2.radii.default,fontColor:ou.greys.white,placeholder:ou.greys.grey50,shadow:`0 0.0625rem 0.0625rem 0 ${R(ou.greys.black,.1)}`,clearBg:ou.greys.white,focus:{bgd:ou.greys.white,border:`solid 0.03125rem ${ou.primary.main}`,shadow:`0 0 0 0.125rem ${ou.primary.lighter}`},error:{border:`0.03125rem solid ${ou.error.primary}`,fontColor:ou.error.primary,shadow:`0 0 0 0.125rem ${ou.error.light}`},checked:{bgd:ou.primary.main,border:`solid 0.03125rem ${ou.primary.dark}`,fontColor:ou.greys.grey80,shadow:`inset 0 0.03125rem 0 0 ${R(ou.greys.white,.1)}`}},ob={bgd:ou.greys.grey80,text:ou.greys.white,wrapperBgd:R(ou.greys.grey60,.9),titleSize:i2.fontSizes.h5.fontSize,titleWeight:"normal",shadow:`0 1rem 2rem 0 rgba(0, 0, 0, ${R(ou.greys.black,.15)})`,border:ou.greys.black},ov={menuBgd:`${R(ou.greys.grey90,.85)}`,menuBorder:ou.greys.grey100,shadow:om.large,itemBgd:"transparent",itemText:ou.greys.white,titleText:ou.greys.white,active:{itemBgd:ou.primary.dark,itemText:ou.greys.grey80},disabled:ou.greys.grey40,separator:ou.greys.grey100},oy={shadow:om.large,error:{text:ou.error.darker,closeButton:{text:ou.error.dark,hover:{bgd:ou.error.dark,text:ou.greys.white},active:{bgd:ou.error.darker,text:ou.greys.white}}},success:{text:ou.success.darker,closeButton:{text:ou.success.dark,hover:{bgd:ou.success.dark,text:ou.greys.white},active:{bgd:ou.success.darker,text:ou.greys.white}}},info:{text:ou.info.darker,closeButton:{text:ou.info.dark,hover:{bgd:ou.info.dark,text:ou.greys.white},active:{bgd:ou.info.darker,text:ou.greys.white}}},warning:{text:ou.warning.darker,closeButton:{text:ou.warning.dark,hover:{bgd:ou.warning.dark,text:ou.greys.white},active:{bgd:ou.warning.darker,text:ou.greys.white}}}},ow={fontColor:ou.primary.main,fontColorHover:ou.primary.dark,fontColorActive:ou.primary.darker,fontColorVisited:ou.primary.darkest},ox={text:ou.greys.grey20,shadow:om.large,bgd:ou.greys.grey100,border:"none",opacity:1,selected:{text:oh.primary.selected.text,bgd:oh.primary.selected.bgd}},o$={title:ou.greys.white,primaryText:ou.greys.white,secondaryText:ou.greys.grey20,headerBorder:ou.greys.black,containerBorder:ou.greys.black,bgd:ou.greys.grey100,fgd:ou.greys.grey60,shadow:om.large,maxWidth:"18.5rem"},ok={text:ou.greys.white,bgd:ou.greys.grey100,headerBorder:ou.greys.black,wrapperBgd:R(ou.greys.grey60,.9)},oE={bgd:ou.greys.grey90},oS={incoming:{bgd:ou.greys.grey80,fontColor:ou.greys.grey30,linkColor:ou.primary.main,linkColorHover:ou.primary.dark,linkColorActive:ou.primary.darker,linkColorVisited:ou.primary.darkest},outgoing:{bgd:ou.primary.dark,fontColor:ou.greys.grey70,linkColor:ou.greys.grey80,linkColorHover:ou.greys.grey70,linkColorActive:ou.greys.grey60,linkColorVisited:ou.greys.grey50},container:{fontColor:ou.greys.grey30,bgd:ou.greys.black}},oO={size:{fontColor:ou.greys.grey30,bgd:ou.greys.grey10,letterSpacing:"-0.07px",lineHight:"16px",fontSize:"10.4px"},icon:{bgd:ou.greys.grey40,color:ou.greys.grey10},name:{fontColor:ou.greys.white},content:{letterSpacing:"-0.09px",bgd:ou.greys.grey60,fontColor:ou.greys.white}},oD={bgd:ou.greys.grey80,fontColor:ou.greys.grey10,border:"1px solid transparent",active:{bgd:ou.primary.dark,fontColor:ou.greys.grey70},hover:{bgd:ou.greys.grey70},focus:{border:`1px solid ${ou.primary.dark}`,selectedBorder:`1px solid ${ou.greys.grey70}`},selected:{bgd:ou.primary.light,fontColor:ou.greys.grey70},iconButton:{activeBgd:ou.greys.grey80}},oA={bgd:ou.greys.grey10,fontColor:ou.greys.grey80};Object.assign({name:"Dark Theme",buttons:oh,colors:ou,globalStyle:op,links:ow,shadows:om,inputs:og,modal:ob,popOver:ov,notification:oy,controlBar:ox,roster:o$,navbar:ok,videoGrid:oE,chatBubble:oS,channelList:oD,chatDateHeader:oA,messageAttachment:oO},i2);let oC=(0,O.iv)`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;(0,O.vJ)`
  ${oC};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${e=>e.theme.fontSizes.baseFontSize};
    font-family: ${e=>e.theme.fonts.body};;
    background-color: ${e=>e.theme.globalStyle.bgd};
    color: ${e=>e.theme.globalStyle.text};
    min-height: 100%;
  }
`}}]);