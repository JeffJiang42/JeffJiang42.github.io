"use strict";var precacheConfig=[["/index.html","74c9884c9becc058ec68df075ac3cc72"],["/static/css/main.4fa9e461.css","27ad7a75be9f6d6b7270fc45fd4d9014"],["/static/js/main.c48e7300.js","31171f7edce06d39c62a9a36165becb2"],["/static/media/2018-01-20-week-1.8e1b4c59.md","8e1b4c5959711f74bb1f9ded68880b23"],["/static/media/2018-02-02-week-3.0a3220d0.md","0a3220d079cf8ffb1c0961fe68e57bbe"],["/static/media/2018-02-09-week-4.7905643e.md","7905643ed464cb0c7e5e52f180ddba90"],["/static/media/2018-02-17-week-5.2fd90eec.md","2fd90eec2a47c329e68242f4a1c70fc3"],["/static/media/2018-02-24-week-6.326cef62.md","326cef621532e9f81b963dbfdab2379f"],["/static/media/2018-03-03-week-7.9bbfaa9b.md","9bbfaa9b8bf5f7f4e075897f2da96891"],["/static/media/2018-03-10-week-8.d8977155.md","d89771553a57011e443e20ed0a739b30"],["/static/media/2018-03-24-week-9.c9c48902.md","c9c48902b364ae3f4a0deee6c97a8422"],["/static/media/2018-03-31-week-10.e55560ec.md","e55560ec5b438b1073ecb8ca6eadaaf1"],["/static/media/2018-04-06-week-11.d6876aae.md","d6876aae368e503960bc2452dce88a6f"],["/static/media/2018-04-14-week-12.7f0a3cdd.md","7f0a3cddf85b0f178890298f50bcd3e2"],["/static/media/2018-05-04-final-post.b5db5877.md","b5db5877d014923f57781a9d6868b9da"],["/static/media/2018-05-13-summer-1.79963829.md","7996382940f5e18ed027266fbc5d259b"],["/static/media/2018-05-19-summer-2.1ba031cb.md","1ba031cb1dd06522442523d71f015e89"],["/static/media/2018-05-26-summer-3.2b1d6c8b.md","2b1d6c8bb6e745b91e27ab27814da42f"],["/static/media/2018-06-03-summer-4.df734915.md","df7349154d5162b793c103a8e35fb61f"],["/static/media/2018-06-11-summer-5.eb9b59cd.md","eb9b59cd1326cb1dc86788cceaa3d96c"],["/static/media/2018-06-17-summer-6.16639614.md","16639614eb7f09af0b1914f039aa671b"],["/static/media/2018-07-05-summer-7.04eb5f94.md","04eb5f94e74d8c605743487a46fde70d"],["/static/media/2018-09-05-fall-1.e6a7234b.md","e6a7234b7b03890c766b7f3ee25245d4"],["/static/media/2018-1-26-week-2.d12f521c.md","d12f521c8dc7a1b3089912f3447b4651"],["/static/media/2018-11-01-fall-2.185d4e28.md","185d4e2893032351b73176cb29060fc0"],["/static/media/2018-11-11-fall-3.ea92faa5.md","ea92faa56822c0336dd316093a6cf6e2"],["/static/media/2018-11-25-fall-4.eba48e73.md","eba48e73818e53fd4f311923d075fb02"],["/static/media/2018-11-26-fall-5.31b0501f.md","31b0501ff5c92cab4a436f1a0b4e7934"],["/static/media/2018-12-9-fall-6.a9fe2752.md","a9fe275238fccd3d1e9d1dd234ccc2ae"],["/static/media/GmailLogo.a9e17713.png","a9e177133f0b8b7dd316c414ae717b63"],["/static/media/M382D.58a705dd.pdf","58a705dd7a33f704f201bbacf6c13c7b"],["/static/media/QuantumComputing.4718ec65.pdf","4718ec65f4a1b5e905dd4f5e25118e50"],["/static/media/cv.5ad499ab.pdf","5ad499abfc90c6debf48202238f68ef6"],["/static/media/gdc.0fda5ad2.jpg","0fda5ad2c44d6e84efcbb62ca4c4e2cc"],["/static/media/me.78f9b1b4.jpg","78f9b1b4144129f8a5e417595927f524"],["/static/media/rlm.dea8990e.jpg","dea8990e2e4fe4df757779b7553df0da"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});