if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise((async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},a=(a,c)=>{Promise.all(a.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(a)};self.define=(a,i,n)=>{c[a]||(c[a]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}}))).then((e=>{const a=n(...e);return c.default||(c.default=a),c}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/medication-calendar/_next/static/_zlrRuGe2coFzimH3PfZc/_buildManifest.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/_zlrRuGe2coFzimH3PfZc/_ssgManifest.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/0b7b4783bd2e2f8580987a076f31bae10d240768.76147764813be52c853a.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/1644ddea.ef926f22016687af1535.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.67c5d7ac8316adece037.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/bb02c0f2.1037bfd16de577b86827.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/commons.8db08336ff8d8dc83cd7.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.cb236ec94b8c060375f9.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/framework.7f6df70ab53e9192537c.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/main-3f71cce0b08da1054110.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/_app-8c395a70171a478d0841.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/_error-5118cd425c3b324594e9.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/doctorInfo-fe2be943960e339f1478.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/index-e2c91e9da27b052ff0a3.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/treatmentCenterInfo-a77845ffd50385eb74e0.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/pages/userInfo-d718c1e4d8bd0670f0b7.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/polyfills-283031c735651d1762e0.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"_zlrRuGe2coFzimH3PfZc"},{url:"/medication-calendar/apple-touch-icon-180x180.png",revision:"af66718f05624f6867516a406e5c31ef"},{url:"/medication-calendar/browserconfig.xml",revision:"d622767d69cce6e4bd7aa978989c7bb9"},{url:"/medication-calendar/favicon-16x16.png",revision:"b5d79f9f41643f7f5aae80adbc338636"},{url:"/medication-calendar/favicon-32x32.png",revision:"1ec3b6027b69e67ef386e79945aaa1d2"},{url:"/medication-calendar/favicon.ico",revision:"efc98d4fbf8ef6d31fd841ae17186b90"},{url:"/medication-calendar/logo.svg",revision:"a3b44505dbaf8504f505e6a4253e7edc"},{url:"/medication-calendar/manifest.json",revision:"765ab7a95324197919d1ce11b6744006"},{url:"/medication-calendar/pwa-192x192.png",revision:"7d34d22e012a2fe6708aa4f9a69b9c98"},{url:"/medication-calendar/pwa-512x512.png",revision:"bffd3af2d86ef687e4a6facb60d67b84"},{url:"/medication-calendar/tile150x150.png",revision:"3746a9ea1d5517fe41662ad6a6af24e4"},{url:"/medication-calendar/tile310x150.png",revision:"65524cf1bc1556e72ec44beb0de6b8c8"},{url:"/medication-calendar/tile310x310.png",revision:"a3211be477cbffa643f26c2c7fcb7f8d"},{url:"/medication-calendar/tile70x70.png",revision:"5c5e5c4e979e31f64b64b0f330212500"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/medication-calendar",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
