"use strict";var precacheConfig=[["/index.html","a2af06114498e955a800dedebb153804"],["/static/css/main.4fa9e461.css","27ad7a75be9f6d6b7270fc45fd4d9014"],["/static/js/main.72a4f8cf.js","3c55deca39db51f52095f069f32001a8"],["/static/media/2018-01-20-week-1.8e1b4c59.md","8e1b4c5959711f74bb1f9ded68880b23"],["/static/media/2018-02-02-week-3.0a3220d0.md","0a3220d079cf8ffb1c0961fe68e57bbe"],["/static/media/2018-02-09-week-4.7905643e.md","7905643ed464cb0c7e5e52f180ddba90"],["/static/media/2018-02-17-week-5.2fd90eec.md","2fd90eec2a47c329e68242f4a1c70fc3"],["/static/media/2018-02-24-week-6.326cef62.md","326cef621532e9f81b963dbfdab2379f"],["/static/media/2018-03-03-week-7.9bbfaa9b.md","9bbfaa9b8bf5f7f4e075897f2da96891"],["/static/media/2018-03-10-week-8.d8977155.md","d89771553a57011e443e20ed0a739b30"],["/static/media/2018-03-24-week-9.c9c48902.md","c9c48902b364ae3f4a0deee6c97a8422"],["/static/media/2018-03-31-week-10.e55560ec.md","e55560ec5b438b1073ecb8ca6eadaaf1"],["/static/media/2018-04-06-week-11.d6876aae.md","d6876aae368e503960bc2452dce88a6f"],["/static/media/2018-04-14-week-12.7f0a3cdd.md","7f0a3cddf85b0f178890298f50bcd3e2"],["/static/media/2018-05-04-final-post.b5db5877.md","b5db5877d014923f57781a9d6868b9da"],["/static/media/2018-05-13-summer-1.79963829.md","7996382940f5e18ed027266fbc5d259b"],["/static/media/2018-1-26-week-2.d12f521c.md","d12f521c8dc7a1b3089912f3447b4651"],["/static/media/GmailLogo.a9e17713.png","a9e177133f0b8b7dd316c414ae717b63"],["/static/media/M382D.58a705dd.pdf","58a705dd7a33f704f201bbacf6c13c7b"],["/static/media/QuantumComputing.4718ec65.pdf","4718ec65f4a1b5e905dd4f5e25118e50"],["/static/media/Resume.a425a9fd.pdf","a425a9fd90c2ccf66e07e22897f848f8"],["/static/media/gdc.0fda5ad2.jpg","0fda5ad2c44d6e84efcbb62ca4c4e2cc"],["/static/media/me.78f9b1b4.jpg","78f9b1b4144129f8a5e417595927f524"],["/static/media/rlm.dea8990e.jpg","dea8990e2e4fe4df757779b7553df0da"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});