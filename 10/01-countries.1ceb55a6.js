var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var o=e[t];delete e[t];var i={id:t,exports:{}};return n[t]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){e[t]=n},t.parcelRequired7c6=o);var i=o("iQIUW");o("iQIUW");var r={},a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,d=s||p||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function h(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var e=u.test(t);return e||l.test(t)?f(t.slice(2),e?2:8):c.test(t)?NaN:+t}r=function(t,n,e){var o,i,r,a,c,u,l=0,f=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=o,r=i;return o=i=void 0,l=n,a=t.apply(r,e)}function m(t){return l=t,c=setTimeout(j,n),f?d(t):a}function x(t){var e=t-u;return void 0===u||e>=n||e<0||s&&t-l>=r}function j(){var t=y();if(x(t))return w(t);c=setTimeout(j,function(t){var e=n-(t-u);return s?g(e,r-(t-l)):e}(t))}function w(t){return c=void 0,p&&o?d(t):(o=i=void 0,a)}function E(){var t=y(),e=x(t);if(o=arguments,i=this,u=t,e){if(void 0===c)return m(u);if(s)return c=setTimeout(j,n),d(u)}return void 0===c&&(c=setTimeout(j,n)),a}return n=b(n)||0,h(e)&&(f=!!e.leading,r=(s="maxWait"in e)?v(b(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=i=c=void 0},E.flush=function(){return void 0===c?a:w(y())},E};const x={inputEl:document.getElementById("search-box"),containerEl:document.querySelector(".country-list")};function j(t){t.length>10?i.Notify.info("Too many matches found. Please enter a more specific name."):t.length>=2&&t.length<=10?function(t){const n=t.map((({flags:t,name:n})=>`<li class="country-item">\n\t\t\t\t<img src="${t.svg}" width="50px">\n\t\t\t\t<p class="country-text">${n.common}</p>\n\t\t\t\t</li>`)).join("");x.containerEl.insertAdjacentHTML("beforeend",n)}(t):1===t.length&&function(t){const n=t.map((({flags:t,name:n,capital:e,population:o,languages:i})=>`<li>\n\t\t\t\t<img src="${t.svg}" width="200px">\n\t\t\t\t<p class="country-text">${n.common}</p>\n\t\t\t\t<p class="country-text">Capital: ${e}</p>\n\t\t\t\t<p class="country-text">Population: ${o}</p>\n\t\t\t\t<p class="country-text">Languages: ${Object.values(i).join(", ")}.</p>\n\t\t\t\t</li>`)).join("");x.containerEl.insertAdjacentHTML("beforeend",n)}(t)}x.inputEl.addEventListener("input",r((function(t){x.inputEl.innerHTML="",x.containerEl.innerHTML="";const n=t.target.value.trim();""!=n&&(e=n,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).catch((t=>console.log("error",t)))).then(j).catch((t=>i.Notify.failure("Oops, there is no country with that name")));var e}),300));
//# sourceMappingURL=01-countries.1ceb55a6.js.map
