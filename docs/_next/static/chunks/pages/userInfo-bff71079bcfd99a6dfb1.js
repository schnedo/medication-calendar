_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{Hb3A:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userInfo",function(){return a("PcHk")}])},PcHk:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return z}));var i=a("nKUr"),n=a("o0o1"),o=a.n(n),r=a("HaE+"),c=a("q1tI"),s=a("R/WZ"),l=a("hlFM"),d=a("wx14"),p=a("Ff2n"),u=(a("17x9"),a("iuhU")),b=a("H2TA"),m=a("NqtD"),x=a("kKAo"),h=c.forwardRef((function(t,e){var a=t.classes,i=t.className,n=t.color,o=void 0===n?"primary":n,r=t.position,s=void 0===r?"fixed":r,l=Object(p.a)(t,["classes","className","color","position"]);return c.createElement(x.a,Object(d.a)({square:!0,component:"header",elevation:4,className:Object(u.a)(a.root,a["position".concat(Object(m.a)(s))],a["color".concat(Object(m.a)(o))],i,"fixed"===s&&"mui-fixed"),ref:e},l))})),f=Object(b.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(h),j=a("lO0E"),g=a("PsDL"),O=a("ofer"),v=a("rePB"),k=c.forwardRef((function(t,e){var a=t.classes,i=t.className,n=t.component,o=void 0===n?"div":n,r=t.disableGutters,s=void 0!==r&&r,l=t.fixed,b=void 0!==l&&l,x=t.maxWidth,h=void 0===x?"lg":x,f=Object(p.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return c.createElement(o,Object(d.a)({className:Object(u.a)(a.root,i,b&&a.fixed,s&&a.disableGutters,!1!==h&&a["maxWidth".concat(Object(m.a)(String(h)))]),ref:e},f))})),y=Object(b.a)((function(t){return{root:Object(v.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:i}),e}),{}),maxWidthXs:Object(v.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(v.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(v.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(v.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(v.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(k),w=a("5AJ6"),W=Object(w.a)(c.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu"),N=Object(w.a)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),E=a("TIQQ"),_=Object(s.a)((function(t){return{menuButton:{marginRight:t.spacing(2)},title:{flex:"1"}}}));function z(){var t=Object(c.useState)(!0),e=t[0],a=t[1],n=Object(E.d)(),s=n.user,d=n.saveUser,p=function(){var t=Object(r.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:a(!0);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=_(),b=u.menuButton,m=u.title;return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(f,{position:"sticky",children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(g.a,{className:b,edge:"start",color:"inherit",children:Object(i.jsx)(W,{})}),Object(i.jsx)(O.a,{className:m,variant:"h6",children:"Benutzer Informationen"}),e?Object(i.jsx)(g.a,{edge:"end",color:"inherit",onClick:function(){return a(!1)},children:Object(i.jsx)(N,{})}):Object(i.jsx)(i.Fragment,{})]})}),Object(i.jsx)(y,{component:"main",children:Object(i.jsx)(E.a,{user:s,readOnly:e,onAbort:function(){return a(!0)},onSubmit:p})})]})}}},[["Hb3A",1,2,0,3]]]);