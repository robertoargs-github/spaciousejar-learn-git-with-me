if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),m={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>m[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-7ddd9b1d0b112c96.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/207-c14885f75e2d37eb.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/569-190d44ff50c69cbb.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/599-1c9e40d67a7c11a6.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/646-38f50d58dfaf7791.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/659-e85e2284a3bf327c.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/698-d4aef5995204df29.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/73-86a00799f80b3bc4.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/736-47299cc0a4f5b0e6.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/753-79510c2cf0ed0fa6.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/835-58bff25f145101dc.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/972-24ba070e7a4afced.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/997-35ef0d5c971f20b7.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/_not-found/page-decd03acdb803b0d.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-ad3a7973f91c5c41.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/blog/layout-2e2f61b98eb06fce.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/blog/page-dd409d81139325d2.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-5f0c560957d07aba.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/docs/layout-b28500593091c7cf.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/error-4a720b00054eddb7.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/layout-3914f85a97debf03.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/not-found-e5fc7dfa0e5ea167.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/app/page-8b588d2157377479.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/fd9d1056-31cd4e5e32ed9a2a.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/main-429f2f9e9069a4cb.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/main-app-84fbb984436a84a8.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-42975bd3508c2c2a.js",revision:"npzoYrmmXw4zSGcLAzlmF"},{url:"/_next/static/css/82a79a2270db0c4c.css",revision:"82a79a2270db0c4c"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/_next/static/npzoYrmmXw4zSGcLAzlmF/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/npzoYrmmXw4zSGcLAzlmF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/docs.png",revision:"9820956bb668e2b7784ba545fb33102a"},{url:"/docsw.png",revision:"32ed12467029e3abe1953d7caf0dfa44"},{url:"/favicon-48x48.png",revision:"449f9c9a8a02e88a48bd70eedacd7508"},{url:"/favicon.svg",revision:"162bc19e2e6d54ee8063f89745412f83"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/og.png",revision:"d7a7f37ff8a8606e2875e6c13e597558"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"2400582de736bff158753d90da169185"},{url:"/web-app-manifest-512x512.png",revision:"f7e574f41f07994ea5b03f45d0e18b96"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
