/*! For license information please see main.b09895e2d230ef49ab5e.js.LICENSE.txt */
!function(){var e,t={1490:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";t=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function m(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),l=new C(n||[]);return i(o,"_invoke",{value:_(e,r,l)}),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=m;var p="suspendedStart",h="suspendedYield",g="executing",y="completed",v={};function b(){}function x(){}function E(){}var w={};f(w,c,(function(){return this}));var S=Object.getPrototypeOf,N=S&&S(S(T([])));N&&N!==a&&o.call(N,c)&&(w=N);var j=E.prototype=b.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,r){function n(a,i,l,c){var s=d(t[a],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):r.resolve(f).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(o,o):o()}})}function _(e,t,n){var a=p;return function(o,i){if(a===g)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var l=n.delegate;if(l){var c=L(l,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var s=d(e,t,n);if("normal"===s.type){if(a=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=y,n.method="throw",n.arg=s.arg)}}}function L(e,t){var n=t.method,a=e.iterator[n];if(a===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=E,i(j,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:x,configurable:!0}),x.displayName=f(E,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,f(e,u,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},k(O.prototype),f(O.prototype,s,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var i=new O(m(e,t,r,a),o);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(j),f(j,u,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return l.type="throw",l.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function n(){var e;return e=t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),n=function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function l(e){r(i,a,o,l,c,"next",e)}function c(e){r(i,a,o,l,c,"throw",e)}l(void 0)}))},n.apply(this,arguments)}!function(){n.apply(this,arguments)}()},781:function(e,t,r){"use strict";r(1490);var n=r(7378),a=r(7634),o=r(3615),i=r.n(o),l=r(5566),c=r.n(l);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){var t=e.skill,r=s((0,n.useState)(!1),2),a=(r[0],r[1]);return(0,n.useEffect)((function(){c().init({duration:2e3})}),[]),n.createElement("div",{"data-aos":"fade-up",className:"skill",onClick:function(){a((function(e){return!e}))}},n.createElement("div",{className:"skill__preview w-full flex flex-col"},n.createElement("img",{src:t.image,className:"skill-img w-16 lg:w-28",alt:"..."}),n.createElement("h1",{className:"skill__title text-lg lg:text-2xl"},t.title)),n.createElement("p",{className:"skill__description text-sm lg:text-xl text-[#dad394]"},t.description))}f.propTypes={skill:i().object.isRequired};var m=f;function d(e){return n.createElement("div",{className:"skills-outer mt-32"},n.createElement("div",{"data-aos":"fade-up",className:"dragon-container"},n.createElement("img",{className:"w-64 lg:w-1/3 my-24",src:"./assets/images/dragon3.png"})),n.createElement("hr",{"data-aos":"fade-up",className:"border-[#818181]"}),n.createElement("a",{name:"skills"}),n.createElement("h2",{"data-aos":"fade-up",className:"my-10 lg:my-20 text-3xl md:text-5xl lg:text-6xl"},"Скиллы"),n.createElement("div",{"data-aos":"fade-up",className:"skills grid"},e.skills.map((function(e){return n.createElement(m,{skill:e,key:e.id})}))))}d.propTypes={skills:i().arrayOf(i().object).isRequired};var p=d;function h(){return n.createElement("div",{"data-aos":"fade-up",className:"flex flex-col lg:items-center"},n.createElement("a",{name:"top"}),n.createElement("div",{className:"mt-56 lg:w-2/3"},n.createElement("p",{className:"text-4xl md:text-5xl lg:text-6xl"},"Раргхх!.."),n.createElement("p",{className:"my-3 text-4xl md:text-5xl lg:text-6xl"},"Я веб-дракончик"," ",n.createElement("span",{className:"author-name text-base md:text-lg lg:text-xl text-[#818181]"},"Германа Чернышёва"),".")),n.createElement("div",{className:"dragon-container"},n.createElement("img",{className:"dragon-container__picture w-32 lg:w-48 my-14 lg:my-28",src:"./assets/images/dragon.png"})))}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var a=E(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,r)}}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t,r){return(t=S(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,r,a,o=b(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(x(e=o.call.apply(o,[this].concat(r))),"state",{isOpen:!1}),w(x(e),"state2",{isClicked:!1}),e}return t=i,(r=[{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{"data-aos":"fade-up"},n.createElement("div",{onClick:function(){return e.setState({isOpen:!0,isClicked:!1})},className:"".concat(this.state.isClicked?"hide":"show"," modal-btn mx-auto my-14 lg:my-28")},"Получить бесплатный меч!")),this.state.isClicked&&n.createElement("div",{className:"flex lg:justify-center"},n.createElement("div",{className:"lg:w-2/3"},n.createElement("p",{"data-aos":"fade-up",className:"modal-text text-lg md:text-xl lg:text-2xl my-10"},"Сожалеем, что пришлось подвергнуть вас этому испытанию, но, сами понимаете, нельзя пускать в сокровищницу чужаков. Теперь, когда все надоедливые меченосцы отсеяны и веб-дракончику ничего не угрожает, вы получаете доступ к его услугам!"),n.createElement("p",{"data-aos":"fade-up",className:"modal-text text-[#818181] text-sm md:text-base lg:text-lg"},"Если вдруг вы хотите ещё раз удостовериться, что вы не принадлежите к охотникам на драконов, пройдите испытание повторно."))),this.state.isOpen&&n.createElement("div",{className:"modal"},n.createElement("div",{className:"modal-body w-full lg:w-1/2 mx-auto p-6 lg:p-8"},n.createElement("h1",{className:"text-lg mb-2 md:text-xl lg:text-3xl text-[#dad394]"},"Ловушка для вредоносных рыцарей"),n.createElement("p",{className:"modal-text text-sm md:text-base lg:text-lg lg:py-2"},"Если вы рыцарь:",n.createElement("br",null),"- Рооааарррггхх!... гггхх!.. ты попался!.. гхгхрх... рр... хммф."),n.createElement("p",{className:"modal-text text-sm md:text-base lg:text-lg py-2"},"Если вы не рыцарь, вам видна кнопка выхода!"),n.createElement("div",{onClick:function(){return e.setState({isOpen:!1,isClicked:!0})},className:"close-modal-btn border w-58 dad-shadow hover:border-[#dad394] mt-6 p-4"},"Покинуть западню")))))}}])&&y(t.prototype,r),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.Component);var j=function(){return n.createElement("nav",{"data-aos":"fade-down",className:"z-10 h-10 text-center fixed top-0 left-0 bottom-0 right-0"},n.createElement("ul",{className:"mt-6 text-sm md:text-lg lg:text-xl"},n.createElement("li",{className:"nav-item inline-block"},n.createElement("a",{href:"#skills"},"Скиллы")),n.createElement("li",{"data-aos":"fade-down",className:"nav-icon inline-block mx-6 lg:mx-12"},n.createElement("a",{href:"#top"},n.createElement("img",{src:"./assets/images/dragon-white.png",className:"z-10 nav-img w-14",alt:""}))),n.createElement("li",{className:"nav-item inline-block"},n.createElement("a",{href:"#projects"},"Сокровищница"))))};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e){e.className;var t=e.index,r=k((0,n.useState)([{id:1,title:"Кинокомпания 8 Студия",image:"./assets/images/8studio.jpg",link:"https://8studiofilm.ru",stack:"React JS, SCSS, Tailwind, Webpack"},{id:2,title:"Flappy Progger",image:"./assets/images/flappy-progger.jpg",link:"https://github.com/Mansur903/game.praktikum.yandex",stack:"React TS, Redux, Vite, Sass, Jest, PostgreSQL, Docker"},{id:3,title:"Web Dragon Messenger",image:"./assets/images/wdm.jpg",link:"https://github.com/grmnche/wdm",stack:"JS, TS, Handlebars, Vite, SCSS, Chai, Mocha, Express"},{id:4,title:"Кибервариус",image:"./assets/images/cybervarius.jpg",link:"https://cybervarius.ru",stack:"React JS, SCSS, Tailwind, Webpack, Redux/Redux Toolkit"}]),2),a=r[0];r[1];return n.createElement("div",{"data-aos":"fade-up",className:"project__outer"},n.createElement("a",{href:a[t].link},n.createElement("div",{className:"project"},n.createElement("img",{className:"project__picture",src:a[t].image,alt:"..."}),n.createElement("div",{className:"project__desc"},n.createElement("p",{className:"project__title"},a[t].title),n.createElement("p",{className:"project__stack gap-y-2 text-lg text-[#dad394] md:text-xl lg:text-2xl mt-2 lg:mt-4"},a[t].stack)))))}function L(){return n.createElement("div",{className:"treasury mt-32"},n.createElement("div",{"data-aos":"fade-up",className:"dragon-container"},n.createElement("img",{className:"w-56 w-56 lg:w-80 my-24",src:"./assets/images/dragon2.png"})),n.createElement("hr",{"data-aos":"fade-up",className:"border-[#818181]"}),n.createElement("a",{name:"projects"}),n.createElement("h2",{"data-aos":"fade-up",className:"my-10 lg:my-20 text-3xl md:text-5xl lg:text-6xl"},"Сокровищница"),n.createElement("div",{className:"projects grid"},n.createElement(_,{index:0}),n.createElement(_,{index:1}),n.createElement(_,{index:2}),n.createElement(_,{index:3})),n.createElement("div",{"data-aos":"fade-up",className:"treasury__contact"},n.createElement("h2",null,"Хочешь работать с веб-дракончиком?"),n.createElement("a",{href:"mailto:grmnche@yandex.ru"},"Написать")))}function P(){return n.createElement("footer",{className:"footer mt-40 mb-4 lg:mt-64 h-20 mx-auto w-full"},n.createElement("a",{href:"https://t.me/grmnche"},n.createElement("img",{src:"./assets/images/tg-clean.png",className:"icon mr-6 mb-4 inline-block"})),n.createElement("a",{href:"https://github.com/grmnche"},n.createElement("img",{src:"./assets/images/github-clean.png",className:"icon mb-4 inline-block"})),n.createElement("p",{className:"text-[#818181] text-sm mt-2 lg:text-base"},"© 2024 web-dragon"))}function A(){return n.createElement("img",{className:"w-24 lg:w-40",src:"./assets/images/dragon-dad.png"})}var C=r(9667);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I=function(e){var t=e.count,r=void 0===t?30:t,a=(0,n.useRef)([]),o=T((0,n.useState)(!1),2),i=o[0],l=o[1];return(0,n.useEffect)((function(){a.current=a.current.slice(0,r),a.current.forEach((function(e){var t=e.parentNode.getBoundingClientRect(),r=t.width,n=t.height,a=Math.random()*r,o=Math.random()*n;C.p8.set(e,{x:a,y:o});!function t(){C.p8.to(e,{x:"+="+(100*Math.random()-50),y:"+="+(100*Math.random()-50),duration:2*Math.random()+1,ease:"power1.inOut",onComplete:t})}()}))}),[r]),(0,n.useEffect)((function(){l(!0)})),n.createElement("div",{className:"fireflies-container"},Array.from({length:r},(function(e,t){return n.createElement("div",{ref:function(e){return a.current[t]=e},key:t,className:"firefly ".concat(i?"show":"hide")})})))},M=function(){var e=(0,n.useRef)(null);return(0,n.useEffect)((function(){var t=0,r=600,n=e.current,a=n.getContext("2d");a.scale(1,1);var o=document.createElement("canvas");o.width=r,o.height=r;var i=o.getContext("2d"),l=i.createImageData(r,r),c=function(){n.width=window.innerWidth*window.devicePixelRatio,n.height=window.innerHeight*window.devicePixelRatio};return window.addEventListener("resize",c),c(),function e(){var r,c;++t%10==0&&(!function(){for(var e=0;e<144e4;e+=4){var t=155*Math.random()+100;l.data[e]=t,l.data[e+1]=t,l.data[e+2]=t,l.data[e+3]=10}i.putImageData(l,0,0)}(),r=n.width,c=n.height,a.clearRect(0,0,r,c),a.fillStyle=a.createPattern(o,"repeat"),a.fillRect(0,0,r,c)),window.requestAnimationFrame(e)}(),function(){window.removeEventListener("resize",c)}}),[]),n.createElement("canvas",{ref:e,className:"grain"})};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(){var e=G((0,n.useState)(!1),2),t=e[0],r=e[1];(0,n.useEffect)((function(){r(!0),setTimeout((function(){r(!1)}),3500)}),[]);var a=G((0,n.useState)([{id:1,image:"./assets/images/icons/1.png",toggled:!1,title:"Пишу огнеупорный код",description:"React JS TS Redux Node.js Express Docker jQuery"},{id:2,image:"./assets/images/icons/2.png",toggled:!1,title:"Верстаю, как королевский дракон",description:"SCSS/Sass LESS Gulp Webpack Vite Handlebars Pug Tailwind Bootstrap HTML5/CSS3"},{id:3,image:"./assets/images/icons/3.png",toggled:!1,title:"Создаю пламенный дизайн",description:"UX/UI-дизайн"},{id:4,image:"./assets/images/icons/4.png",toggled:!1,title:"Командный дракончик",description:"Soft skills / Git"}]),2),o=a[0];a[1];var i={backgroundImage:'url("./assets/images/cave.png")'};return n.createElement("div",{className:"app",style:i},n.createElement(M,null),t?n.createElement("div",{className:"loader",style:i},n.createElement("div",{className:"loader-img"},n.createElement(A,null))):n.createElement("div",null,!t&&n.createElement(I,{count:9}),n.createElement("div",{className:"inner-page"},n.createElement("header",null,n.createElement(j,null)),n.createElement("main",null,n.createElement(h,{changeClass:function(){var e=document.querySelector(".origin");return e.onclick=function(){e==document.querySelector(".change")?e.classList.remove("change"):e.classList.add("change")},e}}),n.createElement(N,null),n.createElement(p,{skills:o}),n.createElement(L,null)),n.createElement(P,null))))};a.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(D,null)))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],l=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var u=c(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[363],(function(){return n(1202)}));var a=n.O(void 0,[363],(function(){return n(781)}));a=n.O(a)}();