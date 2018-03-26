var core_app=function(d){function u(c){if(e[c])return e[c].exports;var f=e[c]={i:c,l:!1,exports:{}};return d[c].call(f.exports,f,f.exports,u),f.l=!0,f.exports}var e={};return u.m=d,u.c=e,u.d=function(d,e,c){u.o(d,e)||Object.defineProperty(d,e,{configurable:!1,enumerable:!0,get:c})},u.n=function(d){var e=d&&d.__esModule?function(){return d.default}:function(){return d};return u.d(e,"a",e),e},u.o=function(d,u){return Object.prototype.hasOwnProperty.call(d,u)},u.p="/js/",u(u.s=2)}([function(d,u){d.exports=lib_core_app},function(d,u,e){d.exports=e(0)(17)},function(d,u,e){"use strict";var c=e(3),f=e(7);(function(d){return d&&d.__esModule?d:{default:d}})(e(1)).default.onVanillaReady(function(){(0,c.parseDomForEmoji)(),(0,f.setupEmbeds)(),(0,f.setupSpoilers)()})},function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.isEmojiSupported=function(){return a},u.parseEmoji=function(d){return a?d:c.default.parse(d,t)},u.parseDomForEmoji=function(){var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;a||c.default.parse(d,t)};var c=function(d){return d&&d.__esModule?d:{default:d}}(e(4)),f=function(d){if(d&&d.__esModule)return d;var u={};if(null!=d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(u[e]=d[e]);return u.default=d,u}(e(6)),t={className:"fallBackEmoji",size:"72x72"},n="🦖",a=function(){var d=document.createElement("canvas");if(d.getContext&&d.getContext("2d")){var u=12*(window.devicePixelRatio||1),e=d.getContext("2d");return e.fillStyle="#f00",e.textBaseline="top",e.font="32px Arial",e.fillText(n,0,0),0!==e.getImageData(u,u,1,1).data[0]}return!1}();f.log("Emoji Supported: ",a)},function(d,u,e){(function(u){var e=u.location||{},c=function(){"use strict";function d(d,u){return document.createTextNode(u?d.replace(s,""):d)}function u(d){return d.replace(b,f)}function e(d,u){for(var c,f,t=d.childNodes,n=t.length;n--;)3===(f=(c=t[n]).nodeType)?u.push(c):1!==f||"ownerSVGElement"in c||p.test(c.nodeName.toLowerCase())||e(c,u);return u}function c(d){return a(d.indexOf(l)<0?d.replace(s,""):d)}function f(d){return o[d]}function t(){return null}function n(d,u){return String(d).replace(i,u)}function a(d,u){for(var e=[],c=0,f=0,t=0;t<d.length;)c=d.charCodeAt(t++),f?(e.push((65536+(f-55296<<10)+(c-56320)).toString(16)),f=0):55296<=c&&c<=56319?f=c:e.push(c.toString(16));return e.join(u||"-")}var r={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;return u<65536?h(u):(u-=65536,h(55296+(u>>10),56320+(1023&u)))},toCodePoint:a},onerror:function(){this.parentNode&&this.parentNode.replaceChild(d(this.alt,!1),this)},parse:function(f,a){return a&&"function"!=typeof a||(a={callback:a}),("string"==typeof f?function(d,e){return n(d,function(d){var f,t,n=d,a=c(d),r=e.callback(a,e);if(r){n="<img ".concat('class="',e.className,'" ','draggable="false" ','alt="',d,'"',' src="',r,'"'),f=e.attributes(d,a);for(t in f)f.hasOwnProperty(t)&&0!==t.indexOf("on")&&-1===n.indexOf(" "+t+"=")&&(n=n.concat(" ",t,'="',u(f[t]),'"'));n=n.concat("/>")}return n})}:function(u,f){for(var t,n,a,r,o,s,l,b,p,h,m,g,x,v=e(u,[]),y=v.length;y--;){for(a=!1,r=document.createDocumentFragment(),s=(o=v[y]).nodeValue,b=0;l=i.exec(s);){if((p=l.index)!==b&&r.appendChild(d(s.slice(b,p),!0)),m=l[0],g=c(m),b=p+m.length,x=f.callback(g,f)){(h=new Image).onerror=f.onerror,h.setAttribute("draggable","false"),t=f.attributes(m,g);for(n in t)t.hasOwnProperty(n)&&0!==n.indexOf("on")&&!h.hasAttribute(n)&&h.setAttribute(n,t[n]);h.className=f.className,h.alt=m,h.src=x,a=!0,r.appendChild(h)}h||r.appendChild(d(m,!1)),h=null}a&&(b<s.length&&r.appendChild(d(s.slice(b),!0)),o.parentNode.replaceChild(r,o))}return u})(f,{callback:a.callback||function(d,u){return"".concat(u.base,u.size,"/",d,u.ext)},attributes:"function"==typeof a.attributes?a.attributes:t,base:"string"==typeof a.base?a.base:r.base,ext:a.ext||r.ext,size:a.folder||function(d){return"number"==typeof d?d+"x"+d:d}(a.size||r.size),className:a.className||r.className,onerror:a.onerror||r.onerror})},replace:n,test:function(d){i.lastIndex=0;var u=i.test(d);return i.lastIndex=0,u}},o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},i=/\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d\udd75|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u270a\u270b])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud800\udc00|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u23e9-\u23ec\u23f0\u23f3\u2640\u2642\u2695\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2694\u2696\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g,s=/\uFE0F/g,l=String.fromCharCode(8205),b=/[&<>'"]/g,p=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,h=String.fromCharCode;return r}();e.protocol||(c.base=c.base.replace(/^http:/,"")),d.exports=c}).call(u,e(5))},function(d,u,e){d.exports=e(0)(21)},function(d,u,e){d.exports=e(0)(2)},function(d,u,e){"use strict";function c(d){return d&&d.__esModule?d:{default:d}}function f(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body).querySelectorAll(".embedLink-excerpt").forEach(function(d){var u=(0,r.getData)(d,"untruncatedText");u?d.innerHTML=u:(u=d.innerHTML,(0,r.setData)(d,"untruncatedText",u)),t(d)})}function t(d){var u=parseInt(getComputedStyle(d)["max-height"],10);u&&u>0&&(0,i.default)(d,u)}function n(){if(this instanceof HTMLElement){this.closest(".embedVideo-ratio").innerHTML='<iframe frameborder="0" allow="autoplay; encrypted-media" class="embedVideo-iframe" src="'+this.dataset.url+'" allowfullscreen></iframe>'}}function a(){if(this instanceof HTMLElement){this.closest(".spoiler").classList.toggle("isShowingSpoiler")}}Object.defineProperty(u,"__esModule",{value:!0}),u.truncateEmbeds=f,u.truncateTextBasedOnMaxHeight=t,u.setupEmbeds=function(){(0,r.delegateEvent)("click",".js-playVideo",n),f(),o.default.addResizeListener(function(){f()})},u.setupSpoilers=function(){(0,r.delegateEvent)("click",".js-toggleSpoiler",a)};var r=e(8),o=c(e(1)),i=c(e(9))},function(d,u,e){d.exports=e(0)(29)},function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(d,u){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!u)throw Error("maxHeight is required");var c="string"==typeof d?document.querySelectorAll(d):d;if(c){var f=e.character||"…",t=e.classname||"js-shave",n=e.spaces||!0,a='<span class="js-shave-char">'+f+"</span>";"length"in c||(c=[c]);for(var r=0;r<c.length;r+=1){var o=c[r],i=o.style,s=o.querySelector("."+t),l=void 0===o.textContent?"innerText":"textContent";s&&(o.removeChild(o.querySelector(".js-shave-char")),o[l]=o[l]);var b=o[l],p=n?b:b.split(" ");if(!(p.length<2)){var h=i.height;i.height="auto";var m=i.maxHeight;if(i.maxHeight="none",o.offsetHeight<=u)i.height=h,i.maxHeight=m;else{for(var g=p.length-1,x=0,v=void 0;x<g;)v=x+g+1>>1,o[l]=n?p.slice(0,v):p.slice(0,v).join(" "),o.insertAdjacentHTML("beforeend",a),o.offsetHeight>u?g=n?v-2:v-1:x=v;o[l]=n?p.slice(0,g):p.slice(0,g).join(" "),o.insertAdjacentHTML("beforeend",a);var y=n?p.slice(g):p.slice(g).join(" ");o.insertAdjacentHTML("beforeend",'<span class="'+t+'" style="display:none;">'+y+"</span>"),i.height=h,i.maxHeight=m}}}}}}]);
//# sourceMappingURL=core-app.js.map