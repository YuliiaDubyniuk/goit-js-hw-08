function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,f=setTimeout(T,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function T(){var e=v();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function w(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(){const e={email:h.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e)||{})}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value.trim()||""===j.value.trim())return alert("Please, fill out all the fields!");console.log(formData),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));const{email:h,message:j}=y.elements,T=function(){try{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):{}}catch(e){console.log(e.message)}}();T&&(h.value=T.email||"",j.value=T.message||"");
//# sourceMappingURL=03-feedback.4ad8585c.js.map
