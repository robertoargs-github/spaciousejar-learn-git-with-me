if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>a(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-7ddd9b1d0b112c96.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/207-2a73a6eec8ebee83.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/296-7a45e2da4d23d870.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/569-190d44ff50c69cbb.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/599-ada37aec256dcb54.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/643-f844333fdba8fcc8.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/646-38f50d58dfaf7791.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/698-d4aef5995204df29.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/73-7ff1e184ebed1dea.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/736-47299cc0a4f5b0e6.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/753-79510c2cf0ed0fa6.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/972-24ba070e7a4afced.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/997-cfa9903be3cf60aa.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/_not-found/page-decd03acdb803b0d.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-ad3a7973f91c5c41.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/blog/layout-2e2f61b98eb06fce.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/blog/page-dd409d81139325d2.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-0fb6babbd1190924.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/docs/layout-36a80428f66901db.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/error-3ccf57f8fe87b60d.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/layout-96e04b97c67b4283.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/not-found-e5fc7dfa0e5ea167.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/app/page-3609c1835e225146.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/fd9d1056-e91c955ab5bf966f.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/main-595fd26a31c1566a.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/main-app-84fbb984436a84a8.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-42975bd3508c2c2a.js",revision:"uVcowyV5jhLFVD2aSpb31"},{url:"/_next/static/css/82a79a2270db0c4c.css",revision:"82a79a2270db0c4c"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/_next/static/uVcowyV5jhLFVD2aSpb31/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/uVcowyV5jhLFVD2aSpb31/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/docs.png",revision:"9820956bb668e2b7784ba545fb33102a"},{url:"/docsw.png",revision:"32ed12467029e3abe1953d7caf0dfa44"},{url:"/favicon-48x48.png",revision:"449f9c9a8a02e88a48bd70eedacd7508"},{url:"/favicon.svg",revision:"162bc19e2e6d54ee8063f89745412f83"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/og.png",revision:"d7a7f37ff8a8606e2875e6c13e597558"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"2400582de736bff158753d90da169185"},{url:"/web-app-manifest-512x512.png",revision:"f7e574f41f07994ea5b03f45d0e18b96"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
