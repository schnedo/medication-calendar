if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,i,r)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}})).then(e=>{const s=r(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NMns9RHsZQgG7YUIyMMig/_buildManifest.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/NMns9RHsZQgG7YUIyMMig/_ssgManifest.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/commons.93a9e803d7c87a3cad26.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.f9c00e975825b465046f.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/framework.346745947b137d923aa8.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/main-45e87f873c22c6d286d4.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/pages/_app-56a73cb2da062b695d9d.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/pages/_error-d37e41e49d1d6b1ddb1a.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/pages/index-3a0fecc7fd56c8912f24.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"NMns9RHsZQgG7YUIyMMig"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"df0caee24a7e7614ef66944d5e5742c7"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
