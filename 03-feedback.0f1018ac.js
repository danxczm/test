var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=i}function T(){var e=d();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return g?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,y&&r?b(e):(r=o=void 0,a)}function w(){var e=d(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),textArea:document.querySelector('[name="message"]'),mailArea:document.querySelector('[name="email"]')};y.form.addEventListener("input",t((function(e){b[e.target.name]=e.target.value;const t=JSON.stringify(b);localStorage.setItem("feedback-form-state",t)}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(b),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),b.email="",b.message=""}));const b={email:"",message:""};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(y.mailArea.value=t.email,y.textArea.value=t.message,b.email=t.email,b.message=t.message)}();
//# sourceMappingURL=03-feedback.0f1018ac.js.map
