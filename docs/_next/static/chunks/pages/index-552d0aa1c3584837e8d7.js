(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8738:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Nn}});var i=t(4942),r=t(5861),o=t(7757),a=t.n(o),u=t(7294),c=t(1120),l=t(2467),s=t(8463),d=t(9912),f=t(9956),v=t(2318);function m(n){return"".concat("Ch.-B."," ").concat(n.number)}function h(n){return"".concat(n.amount," ").concat("ml")}var p=t(5893),x=(0,c.Z)((function(n){return{row:{display:"flex",justifyContent:"space-between"},content:{flex:"1"},trailer:{marginLeft:n.spacing(1)},container:{width:"100%",textAlign:"justify"}}}));function j(n){var e=n.medication,t=e.medicament,i=t.name,r=t.batchNumber,o=e.dose,a=n.onClick,u=x(),c=u.row,j=u.content,Z=u.trailer,b=u.container;return(0,p.jsx)(l.Z,{onClick:a,disableRipple:!a,className:b,children:(0,p.jsx)(s.Z,{className:b,children:(0,p.jsxs)(d.Z,{className:c,children:[(0,p.jsxs)(f.Z,{className:j,children:[(0,p.jsx)(v.Z,{children:i}),(0,p.jsx)(v.Z,{color:"textSecondary",children:m(r)})]}),(0,p.jsx)(v.Z,{className:Z,children:h(o)})]})})})}function Z(n){if(void 0===n)return"00";var e=n.toString();return 1===e.length?"0".concat(e):e}function b(n){return"".concat(Z(n.hours),":").concat(Z(n.minutes))}var g=t(9546),y=t(3323),C=(0,c.Z)((function(n){return{container:{width:"100%"},header:{marginRight:n.spacing(1)},trailer:{marginLeft:n.spacing(1),display:"flex",flexDirection:"column",justifyContent:"space-between"},row:{display:"flex"},medicationsList:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"space-between","&>*":{marginBottom:n.spacing(1),"&:last-child":{marginBottom:0}}}}}));function w(n){var e=n.medicationEntry,t=e.date,i=e.medications,r=e.comments,o=e.duration,a=e.bodyMass,u=n.onClick,c=C(),m=c.container,h=c.medicationsList,x=c.row,Z=c.header,w=c.trailer;return(0,p.jsx)(l.Z,{onClick:u,className:m,disableRipple:!u,children:(0,p.jsx)(s.Z,{className:m,children:(0,p.jsxs)(d.Z,{className:x,children:[(0,p.jsx)(v.Z,{className:Z,children:(0,g.Z)(t,"EEEEEE dd")}),(0,p.jsxs)(f.Z,{className:h,children:[i.map((function(n){return(0,p.jsx)(j,{medication:n},n.id)})),(0,p.jsx)(v.Z,{align:"left",children:r})]}),(0,p.jsxs)(f.Z,{className:w,children:[(0,p.jsx)(v.Z,{children:b(o)}),(0,p.jsx)(v.Z,{children:(0,y.hh)(a)})]})]})})})}var S=t(885),k=t(2982),N=t(5477),E=t(2822),O=t(6837),P=t(998),M=t(3703),B=function(n,e){var t,i=(0,M.Z)(e.date).valueOf();return n.set(i,[].concat((0,k.Z)(null!==(t=n.get(i))&&void 0!==t?t:[]),[e])),n};function D(n){var e=n.medicationEntries,t=n.onSelect,i=function(n){var e=n.reduce(B,new Map);return Array.from(e.entries()).sort((function(n,e){var t=(0,S.Z)(n,1)[0];return(0,S.Z)(e,1)[0]-t}))}(null!==e&&void 0!==e?e:[]);return null===e?(0,p.jsx)(N.Z,{}):(0,p.jsx)(E.Z,{children:i.map((function(n){var e=(0,S.Z)(n,2),i=e[0],r=e[1];return(0,p.jsxs)(u.Fragment,{children:[(0,p.jsx)(O.Z,{children:(0,g.Z)(i,"MMMM y")}),r.map((function(n){return(0,p.jsx)(P.Z,{children:(0,p.jsx)(w,{medicationEntry:n,onClick:function(e){var i=e.clientX,r=e.clientY;t({medicationEntry:n,pointerPosition:{clientX:i,clientY:r}})}})},n.id)}))]},i)}))})}var L=t(7009),A=t(2663),I=t(6083),R=t(9525),_=t(8286),T=t(6856),F=t(282),X=t(8793),Y=t(5639),G=t(4436),K=t(3700),V=t(2474),z=function(n){return(0,p.jsx)(Y.Z,{value:n,children:n},n)},W=(0,c.Z)((function(n){return{durationSelect:{display:"flex","&>*":{marginRight:n.spacing(1),"&:last-child":{marginRight:n.spacing(0)}}}}}));function q(n){var e,t=n.value,i=n.label,r=n.max,o=n.onChange,a="".concat(i,"-label");return(0,p.jsxs)(G.Z,{children:[(0,p.jsx)(K.Z,{id:a,children:i}),(0,p.jsx)(V.Z,{labelId:a,value:t.toString(),onChange:function(n){return o(parseInt(n.target.value))},children:(e=r,(0,k.Z)(Array(e).keys())).map(z)})]})}function H(n){var e=n.value,t=e.minutes,i=e.hours,r=n.onChange,o=W().durationSelect;return(0,p.jsxs)(f.Z,{className:o,children:[(0,p.jsx)(q,{label:"h",value:null!==i&&void 0!==i?i:0,max:23,onChange:function(n){r({minutes:t,hours:n})}}),(0,p.jsx)(q,{value:null!==t&&void 0!==t?t:0,label:"min",max:59,onChange:function(n){r({minutes:n,hours:i})}})]})}var J=t(7212),Q=t(7812),U=t(4593),$=t(3430),nn=t(6562),en=t(4586),tn=(0,c.Z)((function(n){return{formGroup:{"&>*":{marginTop:n.spacing(1),"&:first-child":{marginTop:"0"}}}}}));function rn(n,e){var t=!!n;return e(t),t}function on(n){var e,t,i,o,c=n.open,l=n.medication,s=n.onClose,d=n.onSubmit,f=n.onAbort,v=(0,u.useRef)(null!==(e=null===l||void 0===l?void 0:l.id)&&void 0!==e?e:(0,en.Z)()),m=(0,u.useState)(null!==(t=null===l||void 0===l?void 0:l.dose.amount.toString())&&void 0!==t?t:""),h=m[0],x=m[1],j=(0,u.useState)(!0),Z=j[0],b=j[1],g=(0,u.useState)(null!==(i=null===l||void 0===l?void 0:l.medicament.name)&&void 0!==i?i:""),y=g[0],C=g[1],w=(0,u.useState)(!0),S=w[0],k=w[1],N=(0,u.useState)(null!==(o=null===l||void 0===l?void 0:l.medicament.batchNumber.number.toString())&&void 0!==o?o:""),E=N[0],O=N[1],P=(0,u.useState)(!0),M=P[0],B=P[1];(0,u.useEffect)((function(){var n,e,t,i;c&&(v.current=null!==(n=null===l||void 0===l?void 0:l.id)&&void 0!==n?n:(0,en.Z)(),x(null!==(e=null===l||void 0===l?void 0:l.dose.amount.toString())&&void 0!==e?e:""),b(!0),C(null!==(t=null===l||void 0===l?void 0:l.medicament.name)&&void 0!==t?t:""),k(!0),O(null!==(i=null===l||void 0===l?void 0:l.medicament.batchNumber.number.toString())&&void 0!==i?i:""),B(!0))}),[c,l]);var D=d?(0,r.Z)(a().mark((function n(){var e,t,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=rn(h,b),t=rn(y,k),i=rn(E,B),!(e&&t&&i)){n.next=6;break}return n.next=6,d({id:v.current,medicament:{name:y,batchNumber:{number:parseInt(E)}},dose:{amount:parseInt(h)}});case 6:case"end":return n.stop()}}),n)}))):void 0,L=tn().formGroup;return(0,p.jsxs)(A.Z,{open:c,onClose:function(n,e){s&&s(n,e)},children:[(0,p.jsx)(I.Z,{children:"Neue Medikation"}),(0,p.jsx)(R.Z,{children:(0,p.jsxs)(nn.Z,{className:L,children:[(0,p.jsx)(_.Z,{id:"nameInput",label:"Name",value:y,onChange:function(n){var e=n.target.value;return C(e)},onBlur:function(n){return rn(n.target.value,k)},onFocus:function(){return k(!0)},error:!S,helperText:!S&&"Bitte Name eingeben",variant:"outlined"}),(0,p.jsx)(_.Z,{id:"batchNumberInput",label:"Chargenbezeichnung",type:"number",value:E,onChange:function(n){var e=n.target.value;return O(e)},onBlur:function(n){return rn(n.target.value,B)},onFocus:function(){return B(!0)},error:!M,helperText:!M&&"Bitte Chargenbezeichnung eingeben",variant:"outlined"}),(0,p.jsx)(_.Z,{id:"doseInput",label:"Dosis",type:"number",value:h,onChange:function(n){var e=n.target.value;return x(e)},onBlur:function(n){return rn(n.target.value,b)},onFocus:function(){return b(!0)},error:!Z,helperText:!Z&&"Bitte Dosis eingeben",variant:"outlined"})]})}),(0,p.jsxs)(T.Z,{children:[(0,p.jsx)(F.Z,{color:"primary",onClick:function(){f&&f()},children:"Abbrechen"}),(0,p.jsx)(F.Z,{color:"primary",onClick:D,children:"Speichern"})]})]})}var an=(0,c.Z)((function(){return{medicationsAddContainer:{display:"flex",justifyContent:"space-between"}}}));function un(n){var e=n.value,t=n.onChange,i=(0,u.useState)(null),o=i[0],c=i[1],l=function(){return c(null)},s=(0,u.useState)(!1),d=s[0],v=s[1],m=function(){return v(!0)},h=function(){v(!1),l()},x=function(){return h()},Z=function(){var n=(0,r.Z)(a().mark((function n(i){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(r=e.findIndex((function(n){return n.id===i.id})),o=-1===r?[].concat((0,k.Z)(e),[i]):[].concat((0,k.Z)(e.slice(0,r)),[i],(0,k.Z)(e.slice(r+1))),t(o)),h();case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=an().medicationsAddContainer;return(0,p.jsxs)(f.Z,{children:[(0,p.jsx)(J.Z,{children:"Eintr\xe4ge"}),e.map((function(n){return(0,p.jsx)(j,{medication:n,onClick:function(e){var t=e.clientX,i=e.clientY;return c({medication:n,pointerPosition:{clientX:t,clientY:i}})}},n.id)})),(0,p.jsxs)(f.Z,{className:b,children:[(0,p.jsx)("div",{}),(0,p.jsx)(Q.Z,{onClick:function(){l(),m()},children:(0,p.jsx)($.Z,{})})]}),(0,p.jsxs)(U.Z,{open:!!o,onClose:l,anchorReference:"anchorPosition",anchorPosition:o?{top:o.pointerPosition.clientY,left:o.pointerPosition.clientX}:void 0,children:[(0,p.jsx)(Y.Z,{onClick:function(){return m()},children:"Bearbeiten"}),(0,p.jsx)(Y.Z,{onClick:function(){t&&o&&t(e.filter((function(n){return n!=o.medication}))),l()},children:"L\xf6schen"})]}),(0,p.jsx)(on,{open:d,medication:null===o||void 0===o?void 0:o.medication,onClose:x,onAbort:x,onSubmit:Z})]})}var cn=(0,c.Z)((function(n){return{dialogContent:{display:"flex",flexDirection:"column","&>*":{marginBottom:n.spacing(2),"&:last-child":{marginBottom:n.spacing(0)}}}}})),ln=function(){return new Date},sn={minutes:0,hours:0},dn=[];function fn(n){var e,t,i,o,c,l,s,d=n.open,f=n.medicationEntry,v=n.onClose,m=n.onSubmit,h=n.onAbort,x=(0,y.aF)().user.bodyMass,j=(0,u.useRef)(null!==(e=null===f||void 0===f?void 0:f.id)&&void 0!==e?e:""),Z=(0,u.useState)(null!==(t=null===f||void 0===f?void 0:f.date)&&void 0!==t?t:ln()),b=Z[0],g=Z[1],C=(0,u.useState)(null!==(i=null===f||void 0===f?void 0:f.duration)&&void 0!==i?i:sn),w=C[0],S=C[1],k=(0,u.useState)(null!==(o=null!==(c=null===f||void 0===f?void 0:f.bodyMass.amount.toString())&&void 0!==c?c:null===x||void 0===x?void 0:x.amount.toString())&&void 0!==o?o:"60"),N=k[0],E=k[1],O=(0,u.useState)(null!==(l=null===f||void 0===f?void 0:f.comments)&&void 0!==l?l:""),P=O[0],M=O[1],B=(0,u.useState)(null!==(s=null===f||void 0===f?void 0:f.medications)&&void 0!==s?s:dn),D=B[0],L=B[1];(0,u.useEffect)((function(){var n,e,t,i,r,o,a;d&&(g(null!==(n=null===f||void 0===f?void 0:f.date)&&void 0!==n?n:ln()),S(null!==(e=null===f||void 0===f?void 0:f.duration)&&void 0!==e?e:sn),E(null!==(t=null!==(i=null===f||void 0===f?void 0:f.bodyMass.amount.toString())&&void 0!==i?i:null===x||void 0===x?void 0:x.amount.toString())&&void 0!==t?t:"60"),M(null!==(r=null===f||void 0===f?void 0:f.comments)&&void 0!==r?r:""),L(null!==(o=null===f||void 0===f?void 0:f.medications)&&void 0!==o?o:dn),j.current=null!==(a=null===f||void 0===f?void 0:f.id)&&void 0!==a?a:"")}),[x,f,d]);var Y=m?(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m({id:j.current,date:b,duration:w,bodyMass:{amount:parseInt(N)},comments:P,medications:D});case 2:case"end":return n.stop()}}),n)}))):void 0,G=cn().dialogContent;return(0,p.jsxs)(A.Z,{open:d,onClose:v,children:[(0,p.jsx)(I.Z,{children:f?"Eintrag bearbeiten":"Neuer Eintrag"}),(0,p.jsxs)(R.Z,{className:G,children:[(0,p.jsx)(_.Z,{id:"bodyMassInput",label:"K\xf6rpergewicht",type:"number",value:N,onChange:function(n){return E(n.target.value)}}),(0,p.jsx)(X.M,{id:"dateInput",label:"Datum",value:b,onChange:function(n){return g(null!==n&&void 0!==n?n:b)}}),(0,p.jsx)(H,{value:w,onChange:S}),(0,p.jsx)(_.Z,{id:"commentsInput",label:"Kommentare",multiline:!0,value:P,onChange:function(n){return M(n.target.value)}}),(0,p.jsx)(un,{value:D,onChange:L})]}),(0,p.jsxs)(T.Z,{children:[(0,p.jsx)(F.Z,{color:"primary",onClick:h,children:"Abbrechen"}),(0,p.jsx)(F.Z,{color:"primary",onClick:Y,children:"Speichern"})]})]})}var vn=t(3832),mn=t(3758),hn=t(1556),pn=t(6727),xn=t(7920);pn.vfs=xn.I.vfs;var jn={myLayout:{hLineWidth:function(n,e){return 0===n||n===e.table.body.length?0:n===e.table.headerRows?2:1},vLineWidth:function(n,e){var t;return 0===n||n===(null===(t=e.table.widths)||void 0===t?void 0:t.length)?0:1},paddingLeft:function(){return 8},paddingRight:function(){return 8}}},Zn=function(n){var e=n.medicament,t=e.name,i=e.batchNumber,r=n.dose;return"".concat(t," / ").concat(m(i),": ").concat(h(r))},bn=function(n){return n.map(Zn).join("\n")},gn=function(n){var e=n.date,t=n.medications,i=n.duration,r=n.bodyMass,o=n.comments;return[(0,g.Z)(e,"LLL d y"),bn(t),b(i),(0,y.hh)(r),o]};var yn=t(313);function Cn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function wn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Cn(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Cn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Sn=function(n,e,t){return n.filter((function(n){var i=n.date;return function(n,e,t){return(0,yn.Z)(t,e)&&(0,yn.Z)(n,t)}(e,t,i)})).sort((function(n,e){var t=n.date;return e.date.valueOf()-t.valueOf()}))},kn=(0,c.Z)((function(n){return{actionButton:{position:"fixed",bottom:n.spacing(2),right:n.spacing(2)},printForm:{"&>*":{marginTop:n.spacing(1),"&:first-child":{marginTop:0}}}}}));function Nn(n){var e=n.AppBar,t=(0,L.t)(),i=t.entries,o=t.deleteEntry,c=t.saveEntry,l=(0,u.useState)(null),s=l[0],d=l[1],f=(0,u.useState)(!1),v=f[0],m=f[1],h=function(){return m(!0)},x=function(){return d(null)},j=function(){m(!1),x()},Z=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c(e);case 2:j();case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s){n.next=4;break}return n.next=3,o(s.medicationEntry);case 3:x();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h();case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=(0,u.useState)(!1),C=y[0],w=y[1],S=(0,u.useState)({start:(0,M.Z)(new Date),end:new Date}),N=S[0],E=S[1],O=i?{icon:hn.Z,ariaLabel:"print",onClick:function(){w(!0)}}:void 0,P=kn(),B=P.actionButton,_=P.printForm;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e,{title:"Medikamenten Tagebuch",rightButton:O}),(0,p.jsxs)(A.Z,{open:C,onClose:function(){return w(!1)},children:[(0,p.jsx)(I.Z,{children:"Drucken"}),(0,p.jsxs)(R.Z,{children:[(0,p.jsx)(J.Z,{children:"Bitte w\xe4hlen Sie den Zeitraum aus."}),(0,p.jsxs)(nn.Z,{className:_,children:[(0,p.jsx)(X.M,{label:"Von",value:N.start,onChange:function(n){return n&&E((function(e){return wn(wn({},e),{},{start:n})}))},inputVariant:"outlined"}),(0,p.jsx)(X.M,{label:"Bis",value:N.end,onChange:function(n){return n&&E((function(e){return wn(wn({},e),{},{end:n})}))},inputVariant:"outlined"})]}),(0,p.jsxs)(T.Z,{children:[(0,p.jsx)(F.Z,{id:"printAbort",onClick:function(){return w(!1)},children:"Abbrechen"}),(0,p.jsx)(F.Z,{id:"printConfirm",onClick:function(){return i&&function(n){var e={content:{layout:"myLayout",table:{headerRows:1,widths:["auto","*","auto","auto","auto"],body:[["Datum","Medikation","Dauer","Gewicht","Kommentare"]].concat((0,k.Z)(n.map(gn)))}}};return pn.createPdf(e,jn)}(Sn(i,N.start,N.end)).open()},children:"Drucken"})]})]})]}),(0,p.jsxs)(vn.Z,{component:"main",children:[(0,p.jsx)(D,{medicationEntries:i,onSelect:function(n){return d(n)}}),(0,p.jsx)(fn,{open:v,medicationEntry:null===s||void 0===s?void 0:s.medicationEntry,onClose:j,onAbort:j,onSubmit:Z}),(0,p.jsxs)(U.Z,{open:!!s,keepMounted:!0,onClose:x,anchorReference:"anchorPosition",anchorPosition:s?{top:s.pointerPosition.clientY,left:s.pointerPosition.clientX}:void 0,children:[(0,p.jsx)(Y.Z,{onClick:g,children:"Bearbeiten"}),(0,p.jsx)(Y.Z,{onClick:b,children:"L\xf6schen"})]}),(0,p.jsx)(mn.Z,{color:"primary","aria-label":"addMedicationEntry",onClick:h,className:B,children:(0,p.jsx)($.Z,{})})]})]})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8738)}])}},function(n){n.O(0,[957,270,871,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);