if(!self.define){let e,n={};const a=(a,i)=>(a=new URL(a+".js",i).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let t={};const r=e=>a(e,s),o={module:{uri:s},exports:t,require:r};n[s]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/medication-calendar/_next/static/chunks/1644ddea-c6115295b202304da76f.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/871-9890282a918f25b6dd32.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/bb02c0f2-a3f3ffb53a2e58eefb3a.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/main-00703346f37f77b0dad3.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/_app-106f1b079f30d60c3738.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/doctorInfo-0f4c8c16863cd523f0aa.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/index-552d0aa1c3584837e8d7.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/treatmentCenterInfo-062229632830a9600dbb.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/pages/userInfo-8aafd241c62ac94ff416.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/chunks/webpack-d353dc3300ce999b51fc.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/g1hci7SnC9zlJAgjREjEu/_buildManifest.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/_next/static/g1hci7SnC9zlJAgjREjEu/_ssgManifest.js",revision:"g1hci7SnC9zlJAgjREjEu"},{url:"/medication-calendar/apple-touch-icon-180x180.png",revision:"af66718f05624f6867516a406e5c31ef"},{url:"/medication-calendar/browserconfig.xml",revision:"d622767d69cce6e4bd7aa978989c7bb9"},{url:"/medication-calendar/favicon-16x16.png",revision:"b5d79f9f41643f7f5aae80adbc338636"},{url:"/medication-calendar/favicon-32x32.png",revision:"1ec3b6027b69e67ef386e79945aaa1d2"},{url:"/medication-calendar/favicon.ico",revision:"efc98d4fbf8ef6d31fd841ae17186b90"},{url:"/medication-calendar/logo.svg",revision:"a3b44505dbaf8504f505e6a4253e7edc"},{url:"/medication-calendar/manifest.json",revision:"765ab7a95324197919d1ce11b6744006"},{url:"/medication-calendar/pwa-192x192.png",revision:"7d34d22e012a2fe6708aa4f9a69b9c98"},{url:"/medication-calendar/pwa-512x512.png",revision:"bffd3af2d86ef687e4a6facb60d67b84"},{url:"/medication-calendar/tile150x150.png",revision:"3746a9ea1d5517fe41662ad6a6af24e4"},{url:"/medication-calendar/tile310x150.png",revision:"65524cf1bc1556e72ec44beb0de6b8c8"},{url:"/medication-calendar/tile310x310.png",revision:"a3211be477cbffa643f26c2c7fcb7f8d"},{url:"/medication-calendar/tile70x70.png",revision:"5c5e5c4e979e31f64b64b0f330212500"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/medication-calendar",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
