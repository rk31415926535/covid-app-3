if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const p={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return p;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./worker.js",["./workbox-f6f95a55"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icons/apple-icon-180.png",revision:"1d30ceddf7535b838ddb50490b31a796"},{url:"icons/apple-splash-1125-2436.jpg",revision:"4c0d1cb47603096c76c477aa7bf37a2c"},{url:"icons/apple-splash-1136-640.jpg",revision:"89cc954441a20e0963eb59179bb7cf90"},{url:"icons/apple-splash-1170-2532.jpg",revision:"e57f520ba1dcfc3a9411ede893f1da43"},{url:"icons/apple-splash-1242-2208.jpg",revision:"d606b0941fb9f2437fe151db9bc5f183"},{url:"icons/apple-splash-1242-2688.jpg",revision:"e66783cd69bef3b3fb61b33057b23be5"},{url:"icons/apple-splash-1284-2778.jpg",revision:"2bc626ebdedea1f068b5e1de75f2cac7"},{url:"icons/apple-splash-1334-750.jpg",revision:"805dcb614fa1e65d5ec1501be8dc0a7e"},{url:"icons/apple-splash-1536-2048.jpg",revision:"c51905917712daba9cb203b7fc2ac732"},{url:"icons/apple-splash-1620-2160.jpg",revision:"76348bb9fbabc958cea46cbadb71c6b2"},{url:"icons/apple-splash-1668-2224.jpg",revision:"634e696081ab37f9977c84de2ee1c135"},{url:"icons/apple-splash-1668-2388.jpg",revision:"7f6721f77d2b5cf0939f90b1acf14573"},{url:"icons/apple-splash-1792-828.jpg",revision:"a5da534d0674b4dbdd8aaed022cb1f6a"},{url:"icons/apple-splash-2048-1536.jpg",revision:"c41ee8df62268889cbac17a2cd010953"},{url:"icons/apple-splash-2048-2732.jpg",revision:"6592998802005c6ebb4ad44daab14bc3"},{url:"icons/apple-splash-2160-1620.jpg",revision:"1ae465c01e7f1c96c380b10845037d6f"},{url:"icons/apple-splash-2208-1242.jpg",revision:"69ca4e47a76d9d7e6e0be9d5763b36d8"},{url:"icons/apple-splash-2224-1668.jpg",revision:"48a2dc4b81e0dcf144919712339756dd"},{url:"icons/apple-splash-2388-1668.jpg",revision:"f379308d2093094e74c78d8ff91cd5f3"},{url:"icons/apple-splash-2436-1125.jpg",revision:"14c2d7e6c718a304df972733458d2cd2"},{url:"icons/apple-splash-2532-1170.jpg",revision:"92c8a4bec9cf78c305c74c5a04512fea"},{url:"icons/apple-splash-2688-1242.jpg",revision:"79a6a18aee92ff34205ef2ff192ffb87"},{url:"icons/apple-splash-2732-2048.jpg",revision:"a9fb58344c935c6bdf2e630072747f59"},{url:"icons/apple-splash-2778-1284.jpg",revision:"fcb3da50f5bf120acdfe4fbc561b00f4"},{url:"icons/apple-splash-640-1136.jpg",revision:"3f38711be3f7c5b8849b3b33772943f2"},{url:"icons/apple-splash-750-1334.jpg",revision:"e3cc39cd9f665f1bda14427ead4a5e8e"},{url:"icons/apple-splash-828-1792.jpg",revision:"17b94a334e5487112b5fe3d87bb86950"},{url:"icons/manifest-icon-192.png",revision:"b99f4d5c7ecae3136de5e475c0920da6"},{url:"icons/manifest-icon-512.png",revision:"3505624bfab4a3c59b85397992e0d9c9"},{url:"index.html",revision:"339d427ca5864288bcb40167b9ad4d4e"},{url:"logo.png",revision:"f9c71a139dee9947ac10b4643fec026b"},{url:"main.js",revision:"18b47a1acb197c7362b9005e5db2a334"},{url:"manifest.json",revision:"7dd89980cc986f75b70bdfb22e8286bf"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=worker.js.map
