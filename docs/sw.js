if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return a[e]||(n=new Promise((async n=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},n=(n,a)=>{Promise.all(n.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(n)};self.define=(n,i,s)=>{a[n]||(a[n]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return a;case"module":return c;default:return e(n)}}))).then((e=>{const n=s(...e);return a.default||(a.default=n),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/medication-calendar/_next/static/MnY_xgHpU095597W8gJ_h/_buildManifest.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/MnY_xgHpU095597W8gJ_h/_ssgManifest.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/1644ddea-f1d2e39f010d0bc25fb1.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/871-9890282a918f25b6dd32.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/bb02c0f2-4ea16c50f83ccd538604.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/main-316efbaced56b70cbe27.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/_app-8d60287e762f3c690a7b.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/doctorInfo-0f4c8c16863cd523f0aa.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/index-552d0aa1c3584837e8d7.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/treatmentCenterInfo-062229632830a9600dbb.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/pages/userInfo-8aafd241c62ac94ff416.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/_next/static/chunks/webpack-d353dc3300ce999b51fc.js",revision:"MnY_xgHpU095597W8gJ_h"},{url:"/medication-calendar/apple-touch-icon-180x180.png",revision:"af66718f05624f6867516a406e5c31ef"},{url:"/medication-calendar/browserconfig.xml",revision:"d622767d69cce6e4bd7aa978989c7bb9"},{url:"/medication-calendar/favicon-16x16.png",revision:"b5d79f9f41643f7f5aae80adbc338636"},{url:"/medication-calendar/favicon-32x32.png",revision:"1ec3b6027b69e67ef386e79945aaa1d2"},{url:"/medication-calendar/favicon.ico",revision:"efc98d4fbf8ef6d31fd841ae17186b90"},{url:"/medication-calendar/logo.svg",revision:"a3b44505dbaf8504f505e6a4253e7edc"},{url:"/medication-calendar/manifest.json",revision:"765ab7a95324197919d1ce11b6744006"},{url:"/medication-calendar/pwa-192x192.png",revision:"7d34d22e012a2fe6708aa4f9a69b9c98"},{url:"/medication-calendar/pwa-512x512.png",revision:"bffd3af2d86ef687e4a6facb60d67b84"},{url:"/medication-calendar/tile150x150.png",revision:"3746a9ea1d5517fe41662ad6a6af24e4"},{url:"/medication-calendar/tile310x150.png",revision:"65524cf1bc1556e72ec44beb0de6b8c8"},{url:"/medication-calendar/tile310x310.png",revision:"a3211be477cbffa643f26c2c7fcb7f8d"},{url:"/medication-calendar/tile70x70.png",revision:"5c5e5c4e979e31f64b64b0f330212500"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/medication-calendar",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
