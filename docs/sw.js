if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return a[e]||(n=new Promise((async n=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},n=(n,a)=>{Promise.all(n.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(n)};self.define=(n,i,s)=>{a[n]||(a[n]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return a;case"module":return r;default:return e(n)}}))).then((e=>{const n=s(...e);return a.default||(a.default=n),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/medication-calendar/_next/static/4JnB94q6lggPX83lX6-xF/_buildManifest.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/4JnB94q6lggPX83lX6-xF/_ssgManifest.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/0b7b4783bd2e2f8580987a076f31bae10d240768.5bf92a0c14ac2d91fda1.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/1644ddea.ef926f22016687af1535.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.a92b17b923946f7a3f0b.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/bb02c0f2.1037bfd16de577b86827.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/commons.8db08336ff8d8dc83cd7.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.040bb40bc6fe759fde07.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/framework.6fdea702266e14d1c3de.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/main-9eb9df22509da137514f.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/_app-eb34a4de7f3a3ddc3c0f.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/_error-e038998af043bdeabe1e.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/doctorInfo-fe2be943960e339f1478.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/index-417f10c1e23e20a325fc.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/treatmentCenterInfo-a77845ffd50385eb74e0.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/pages/userInfo-d718c1e4d8bd0670f0b7.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/polyfills-283031c735651d1762e0.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"4JnB94q6lggPX83lX6-xF"},{url:"/medication-calendar/apple-touch-icon-180x180.png",revision:"af66718f05624f6867516a406e5c31ef"},{url:"/medication-calendar/browserconfig.xml",revision:"d622767d69cce6e4bd7aa978989c7bb9"},{url:"/medication-calendar/favicon-16x16.png",revision:"b5d79f9f41643f7f5aae80adbc338636"},{url:"/medication-calendar/favicon-32x32.png",revision:"1ec3b6027b69e67ef386e79945aaa1d2"},{url:"/medication-calendar/favicon.ico",revision:"efc98d4fbf8ef6d31fd841ae17186b90"},{url:"/medication-calendar/logo.svg",revision:"a3b44505dbaf8504f505e6a4253e7edc"},{url:"/medication-calendar/manifest.json",revision:"765ab7a95324197919d1ce11b6744006"},{url:"/medication-calendar/pwa-192x192.png",revision:"7d34d22e012a2fe6708aa4f9a69b9c98"},{url:"/medication-calendar/pwa-512x512.png",revision:"bffd3af2d86ef687e4a6facb60d67b84"},{url:"/medication-calendar/tile150x150.png",revision:"3746a9ea1d5517fe41662ad6a6af24e4"},{url:"/medication-calendar/tile310x150.png",revision:"65524cf1bc1556e72ec44beb0de6b8c8"},{url:"/medication-calendar/tile310x310.png",revision:"a3211be477cbffa643f26c2c7fcb7f8d"},{url:"/medication-calendar/tile70x70.png",revision:"5c5e5c4e979e31f64b64b0f330212500"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/medication-calendar",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:a,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
