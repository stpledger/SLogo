if (self.CavalryLogger) { CavalryLogger.start_js(["8t8Ss"]); }

__d("AbstractVideoPlayerApi",["invariant","EventEmitter","VideoPlayerApiEvents"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("EventEmitter"));j=i&&i.prototype;function k(){"use strict";j.constructor.call(this)}k.prototype.addListener=function(){"use strict";for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];return j.addListener.apply(this,m)};k.prototype.emit=function(){"use strict";for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];return j.emit.apply(this,m)};k.prototype.setRelativeSphericalOrientation=function(l,m){"use strict"};k.isImplementationUnavailable=function(){"use strict";return true};f.exports=k}),null);
__d("VideoConfig",[],(function a(b,c,d,e,f,g){function h(i){Object.assign(this,i)}f.exports=h}),null);
__d("Promise",["invariant","TimeSlice","setImmediateAcrossTransitions","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(){}var j=null,k={};function l(D){try{return D.then}catch(E){j=E;return k}}function m(D,E){try{return D(E)}catch(F){j=F;return k}}function n(D,E,F){try{D(E,F)}catch(G){j=G;return k}}function o(D){__p&&__p();if(typeof this!=="object")throw new TypeError("Promises must be constructed via new");if(typeof D!=="function")throw new TypeError("not a function");this._state=0;this._value=null;this._deferreds=[];if(D===i)return;v(D,this)}o._noop=i;o.prototype.then=function(D,E){if(this.constructor!==o)return p(this,D,E);var F=new o(i);q(this,new u(D,E,F));return F};function p(D,E,F){return new D.constructor(function(r,s){var G=new o(i);G.then(r,s);q(D,new u(E,F,G))})}function q(D,E){__p&&__p();while(D._state===3)D=D._value;if(D._state===0){D._deferreds.push(E);return}c("setImmediateAcrossTransitions")(function F(){__p&&__p();var G=D._state===1?E.onFulfilled:E.onRejected;if(G===null){E.continuation(function(){});if(D._state===1)r(E.promise,D._value);else s(E.promise,D._value);return}var H=m(E.continuation.bind(null,G),D._value);if(H===k)s(E.promise,j);else r(E.promise,H)})}function r(D,E){__p&&__p();if(E===D)return s(D,new TypeError("A promise cannot be resolved with itself."));if(E&&(typeof E==="object"||typeof E==="function")){var F=l(E);if(F===k)return s(D,j);if(F===D.then&&E instanceof o){D._state=3;D._value=E;t(D);return}else if(typeof F==="function"){v(F.bind(E),D);return}}D._state=1;D._value=E;t(D)}function s(D,E){D._state=2;D._value=E;t(D)}function t(D){for(var E=0;E<D._deferreds.length;E++)q(D,D._deferreds[E]);D._deferreds=null}function u(D,E,F){this.onFulfilled=typeof D==="function"?D:null;this.onRejected=typeof E==="function"?E:null;this.continuation=c("TimeSlice").getGuardedContinuation("Promise Handler");this.promise=F}function v(D,E){__p&&__p();var F=false,G=n(D,function(H){if(F)return;F=true;r(E,H)},function(H){if(F)return;F=true;s(E,H)});if(!F&&G===k){F=true;s(E,j)}}o.prototype.done=function(D,E){var F=new Error("Promise.done"),G=arguments.length?this.then.apply(this,arguments):this;G.then(null,function(H){c("setTimeoutAcrossTransitions")(function(){if(H instanceof Error)throw H;else{F.message=""+H;throw F}},0)})};var w=C(true),x=C(false),y=C(null),z=C(undefined),A=C(0),B=C("");function C(D){var E=new o(o._noop);E._state=1;E._value=D;return E}o.resolve=function(D){__p&&__p();if(D instanceof o)return D;if(D===null)return y;if(D===undefined)return z;if(D===true)return w;if(D===false)return x;if(D===0)return A;if(D==="")return B;if(typeof D==="object"||typeof D==="function")try{var E=D.then;if(typeof E==="function")return new o(E.bind(D))}catch(F){return new o(function(r,s){s(F)})}return C(D)};o.all=function(D){__p&&__p();if(!Array.isArray(D))D=[new o(function(){throw new TypeError("Promise.all must be passed an iterable.")})];var E=Array.prototype.slice.call(D);return new o(function(r,s){__p&&__p();if(E.length===0)return r([]);var F=E.length;function G(H,I){__p&&__p();if(I&&(typeof I==="object"||typeof I==="function"))if(I instanceof o&&I.then===o.prototype.then){while(I._state===3)I=I._value;if(I._state===1)return G(H,I._value);if(I._state===2)s(I._value);I.then(function(I){G(H,I)},s);return}else{var J=I.then;if(typeof J==="function"){var K=new o(J.bind(I));K.then(function(I){G(H,I)},s);return}}E[H]=I;if(--F===0)r(E)}for(var H=0;H<E.length;H++)G(H,E[H])})};o.reject=function(D){return new o(function(r,s){s(D)})};o.race=function(D){return new o(function(r,s){D.forEach(function(E){o.resolve(E).then(r,s)})})};o.prototype["catch"]=function(D){return this.then(null,D)};f.exports=o}),null);
__d("Deferred",["Promise"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();c("Promise").resolve();function h(i){i=i||c("Promise");this.$Deferred1=false;this.$Deferred2=new i(function(j,k){this.$Deferred3=j;this.$Deferred4=k}.bind(this))}h.prototype.getPromise=function(){return this.$Deferred2};h.prototype.resolve=function(i){this.$Deferred1=true;this.$Deferred3(i)};h.prototype.reject=function(i){this.$Deferred1=true;this.$Deferred4(i)};h.prototype["catch"]=function(i){return c("Promise").prototype["catch"].apply(this.$Deferred2,arguments)};h.prototype.then=function(i,j){return c("Promise").prototype.then.apply(this.$Deferred2,arguments)};h.prototype.done=function(i,j){var k=arguments.length?this.$Deferred2.then.apply(this.$Deferred2,arguments):this.$Deferred2;k.then(undefined,function(l){setTimeout(function(){throw l},0)})};h.prototype.isSettled=function(){return this.$Deferred1};f.exports=h}),null);
__d("MaybeNativePromise",["Promise"],(function a(b,c,d,e,f,g){"use strict";var h=b.Promise||c("Promise");c("Promise").resolve();f.exports=h}),null);
__d("VideoAkamaiRequestHelper",["URI"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(k){return k.toLowerCase().indexOf("akamai")!==-1}function i(k){var l=k.startByte,m=k.endByte;if(l!=undefined&&!(l===0&&m==undefined)){var n="bytes="+l+"-"+(m==undefined?"":m);return{Range:n}}return null}function j(k){var l=new(c("URI"))(k),m=l.getQueryData(),n=m.startByte,o=m.endByte;return i({baseUrl:k,startByte:n,endByte:o})}f.exports={isAkamai:h,getRequestHeaders:i,getRequestHeadersFromUrl:j}}),null);
__d("VideoPlayerShakaParsedContextualConfig",["EventEmitter","FBLogger","VideoPlayerShakaContextualConfig"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("EventEmitter"));i=h&&h.prototype;function j(){"use strict";i.constructor.call(this);this.$VideoPlayerShakaParsedContextualConfig1=null;this.$VideoPlayerShakaParsedContextualConfig2={};this.parseConfig()}j.prototype.getGlobalConfig=function(){"use strict";return this.$VideoPlayerShakaParsedContextualConfig2};j.prototype.getStaticConfig=function(){"use strict";return c("VideoPlayerShakaContextualConfig").staticConfig};j.prototype.getRawContextualConfig=function(){"use strict";return this.$VideoPlayerShakaParsedContextualConfig1};j.prototype.parseConfig=function(){"use strict";this.$VideoPlayerShakaParsedContextualConfig3();this.$VideoPlayerShakaParsedContextualConfig4();this.emit("configChange")};j.prototype.$VideoPlayerShakaParsedContextualConfig3=function(){"use strict";if(!c("VideoPlayerShakaContextualConfig").rawContextualConfig)return;try{this.$VideoPlayerShakaParsedContextualConfig1=JSON.parse(c("VideoPlayerShakaContextualConfig").rawContextualConfig)}catch(k){c("FBLogger")("VideoPlayerShakaParsedContextualConfig").warn("Failed to parse raw config")}};j.prototype.$VideoPlayerShakaParsedContextualConfig4=function(){"use strict";this.$VideoPlayerShakaParsedContextualConfig2=Object.assign({},c("VideoPlayerShakaContextualConfig").staticConfig);if(this.$VideoPlayerShakaParsedContextualConfig1)this.$VideoPlayerShakaParsedContextualConfig1.defaults.forEach(function(k){return this.$VideoPlayerShakaParsedContextualConfig2[k.name]=k.value}.bind(this))};f.exports=new j()}),null);
__d("VideoPlayerShakaGlobalConfig",["VideoPlayerShakaParsedContextualConfig","VideoPlayerShakaExperiments"],(function a(b,c,d,e,f,g){__p&&__p();var h={getBool:function i(j,k){var l=c("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();if(l&&l[j]!==undefined)return l[j]==="true"||l[j]===true;return typeof c("VideoPlayerShakaExperiments")[j]==="boolean"?c("VideoPlayerShakaExperiments")[j]:k},getNumber:function i(j,k){var l=c("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();if(l&&l[j]!==undefined)return Number(l[j]);return typeof c("VideoPlayerShakaExperiments")[j]==="number"?c("VideoPlayerShakaExperiments")[j]:k},getString:function i(j,k){var l=c("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();if(l&&l[j]!==undefined)return String(l[j]);return typeof c("VideoPlayerShakaExperiments")[j]==="string"?c("VideoPlayerShakaExperiments")[j]:k}};f.exports=h}),null);
__d("VideoPlayerShakaError",["VideoPlayerShakaGlobalConfig"],(function a(b,c,d,e,f,g){"use strict";var h={translateError:function i(j,k,l){var m=c("VideoPlayerShakaGlobalConfig").getBool("fix_shaka_xhr_error_status",true)?j.errorRawTransportStatus:j.errorCode,n={name:j.errorType,message:j.errorMsg,type:l,url:k,status:m};return n},createTimeoutError:function i(j){var k={name:"timeout",message:"timeout",type:"net",url:j,status:0};return k}};f.exports=h}),null);
__d("regeneratorRuntime",["Promise"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=Object.prototype.hasOwnProperty,i=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator")||"@@iterator",j=f.exports;function k(E,F,G,H){var I=Object.create((F||r).prototype),J=new B(H||[]);I._invoke=y(E,G,J);return I}j.wrap=k;function l(E,F,G){try{return{type:"normal",arg:E.call(F,G)}}catch(H){return{type:"throw",arg:H}}}var m="suspendedStart",n="suspendedYield",o="executing",p="completed",q={};function r(){}function s(){}function t(){}var u=t.prototype=r.prototype;s.prototype=u.constructor=t;t.constructor=s;s.displayName="GeneratorFunction";function v(E){["next","throw","return"].forEach(function(F){E[F]=function(G){return this._invoke(F,G)}})}j.isGeneratorFunction=function(E){var F=typeof E==="function"&&E.constructor;return F?F===s||(F.displayName||F.name)==="GeneratorFunction":false};j.mark=function(E){if(Object.setPrototypeOf)Object.setPrototypeOf(E,t);else Object.assign(E,t);E.prototype=Object.create(u);return E};j.awrap=function(E){return new w(E)};function w(E){this.arg=E}function x(E){__p&&__p();function F(L,M){var N=E[L](M),O=N.value;return O instanceof w?c("Promise").resolve(O.arg).then(G,H):c("Promise").resolve(O).then(function(P){N.value=P;return N})}if(typeof process==="object"&&process.domain)F=process.domain.bind(F);var G=F.bind(E,"next"),H=F.bind(E,"throw"),I=F.bind(E,"return"),J;function K(L,M){var N=J?J.then(function(){return F(L,M)}):new(c("Promise"))(function(O){O(F(L,M))});J=N["catch"](function(O){});return N}this._invoke=K}v(x.prototype);j.async=function(E,F,G,H){var I=new x(k(E,F,G,H));return j.isGeneratorFunction(F)?I:I.next().then(function(J){return J.done?J.value:I.next()})};function y(E,F,G){__p&&__p();var H=m;return function I(J,K){__p&&__p();if(H===o)throw new Error("Generator is already running");if(H===p){if(J==="throw")throw K;return D()}while(true){var L=G.delegate;if(L){if(J==="return"||J==="throw"&&L.iterator[J]===undefined){G.delegate=null;var M=L.iterator["return"];if(M){var N=l(M,L.iterator,K);if(N.type==="throw"){J="throw";K=N.arg;continue}}if(J==="return")continue}var N=l(L.iterator[J],L.iterator,K);if(N.type==="throw"){G.delegate=null;J="throw";K=N.arg;continue}J="next";K=undefined;var O=N.arg;if(O.done){G[L.resultName]=O.value;G.next=L.nextLoc}else{H=n;return O}G.delegate=null}if(J==="next")if(H===n)G.sent=K;else G.sent=undefined;else if(J==="throw"){if(H===m){H=p;throw K}if(G.dispatchException(K)){J="next";K=undefined}}else if(J==="return")G.abrupt("return",K);H=o;var N=l(E,F,G);if(N.type==="normal"){H=G.done?p:n;var O={value:N.arg,done:G.done};if(N.arg===q){if(G.delegate&&J==="next")K=undefined}else return O}else if(N.type==="throw"){H=p;J="throw";K=N.arg}}}}v(u);u[i]=function(){return this};u.toString=function(){return"[object Generator]"};function z(E){var F={tryLoc:E[0]};if(1 in E)F.catchLoc=E[1];if(2 in E){F.finallyLoc=E[2];F.afterLoc=E[3]}this.tryEntries.push(F)}function A(E){var F=E.completion||{};F.type="normal";delete F.arg;E.completion=F}function B(E){this.tryEntries=[{tryLoc:"root"}];E.forEach(z,this);this.reset(true)}j.keys=function(E){__p&&__p();var F=[];for(var G in E)F.push(G);F.reverse();return function H(){__p&&__p();while(F.length){var G=F.pop();if(G in E){H.value=G;H.done=false;return H}}H.done=true;return H}};function C(E){__p&&__p();if(E){var F=E[i];if(F)return F.call(E);if(typeof E.next==="function")return E;if(!isNaN(E.length)){var G=-1,H=function H(){while(++G<E.length)if(h.call(E,G)){H.value=E[G];H.done=false;return H}H.value=undefined;H.done=true;return H};return H.next=H}}return{next:D}}j.values=C;function D(){return{value:undefined,done:true}}B.prototype={constructor:B,reset:function E(F){__p&&__p();this.prev=0;this.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(A);if(!F)for(var G in this)if(G.charAt(0)==="t"&&h.call(this,G)&&!isNaN(+G.slice(1)))this[G]=undefined},stop:function E(){this.done=true;var F=this.tryEntries[0],G=F.completion;if(G.type==="throw")throw G.arg;return this.rval},dispatchException:function E(F){__p&&__p();if(this.done)throw F;var G=this;function H(N,O){K.type="throw";K.arg=F;G.next=N;return!!O}for(var I=this.tryEntries.length-1;I>=0;--I){var J=this.tryEntries[I],K=J.completion;if(J.tryLoc==="root")return H("end");if(J.tryLoc<=this.prev){var L=h.call(J,"catchLoc"),M=h.call(J,"finallyLoc");if(L&&M){if(this.prev<J.catchLoc)return H(J.catchLoc,true);else if(this.prev<J.finallyLoc)return H(J.finallyLoc)}else if(L){if(this.prev<J.catchLoc)return H(J.catchLoc,true)}else if(M){if(this.prev<J.finallyLoc)return H(J.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function E(F,G){__p&&__p();for(var H=this.tryEntries.length-1;H>=0;--H){var I=this.tryEntries[H];if(I.tryLoc<=this.prev&&h.call(I,"finallyLoc")&&this.prev<I.finallyLoc){var J=I;break}}if(J&&(F==="break"||F==="continue")&&J.tryLoc<=G&&G<=J.finallyLoc)J=null;var K=J?J.completion:{};K.type=F;K.arg=G;if(J)this.next=J.finallyLoc;else this.complete(K);return q},complete:function E(F,G){__p&&__p();if(F.type==="throw")throw F.arg;if(F.type==="break"||F.type==="continue")this.next=F.arg;else if(F.type==="return"){this.rval=F.arg;this.next="end"}else if(F.type==="normal"&&G)this.next=G},finish:function E(F){for(var G=this.tryEntries.length-1;G>=0;--G){var H=this.tryEntries[G];if(H.finallyLoc===F){this.complete(H.completion,H.afterLoc);A(H);return q}}},"catch":function E(F){__p&&__p();for(var G=this.tryEntries.length-1;G>=0;--G){var H=this.tryEntries[G];if(H.tryLoc===F){var I=H.completion;if(I.type==="throw"){var J=I.arg;A(H)}return J}}throw new Error("illegal catch attempt")},delegateYield:function E(F,G,H){this.delegate={iterator:C(F),resultName:G,nextLoc:H};return q}}}),null);
__d("VideoDashPrefetchCache",["regeneratorRuntime","Deferred","Map","MaybeNativePromise","Run","URI","VideoAkamaiRequestHelper","VideoPlayerShakaError","VideoPlayerPrefetchExperiments","XHRRequest","getCrossOriginTransport","requireWeak"],(function a(b,c,d,e,f,g){__p&&__p();var h=null;c("requireWeak")("VideoPlayerShakaBandwidthEstimator",function(t){return h=t});var i=null;c("requireWeak")("VideoStreamingTaskQueueProvider",function(t){return i=t});function j(t){var u="aborted",v={status:0},w=new Error("Prefetch request aborted.");return Object.assign(w,{type:u,url:t,xhr:v})}function k(t){var u,v=t.getURI(),w=v.toString();if(c("VideoAkamaiRequestHelper").isAkamai(w))(function(){var x=c("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(w),y=v.removeQueryData(["bytestart","byteend"]);t.setURI(y);if(x)Object.keys(x).forEach(function(z){t.setRequestHeader(z,x[z])})})();return t}var l=null,m=new(c("Map"))();function n(t){var u=new(c("URI"))(t),v=u.getDomain();return v.endsWith("fbcdn.net")&&!v.startsWith("interncache")&&!v.endsWith("ak.fbcdn.net")}function o(t){var u=arguments.length<=1||arguments[1]===undefined?false:arguments[1];return u&&n(t)?c("getCrossOriginTransport").withCredentials:c("getCrossOriginTransport")}function p(t){return n(t.url)}function q(t,u,v){return{response:t.slice(u.start+0,u.end+1),responseTime:v}}function r(t){__p&&__p();var u=new(c("URI"))(t);if(u.getDomain()){u=u.removeQueryData(["oh"]);u=u.removeQueryData("__gda__");for(var v=Object.keys(u.getQueryData()),w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var y;if(w){if(x>=v.length)break;y=v[x++]}else{x=v.next();if(x.done)break;y=x.value}var z=y;if(z.startsWith("_nc"))u=u.removeQueryData(z)}return u.toString()}return t}function s(){"use strict";this.$VideoDashPrefetchCache1=new(c("Map"))();this.$VideoDashPrefetchCache2=[];this.$VideoDashPrefetchCache3=[];this.$VideoDashPrefetchCache4=0;this.$VideoDashPrefetchCache5=c("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum;this.$VideoDashPrefetchCache6=c("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest}s.prototype.$VideoDashPrefetchCache8=function(t){__p&&__p();var u=arguments.length<=1||arguments[1]===undefined?false:arguments[1];"use strict";var v=t,w=new(c("XHRRequest"))(v).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(o(v,u));k(w);var x=new(c("MaybeNativePromise"))(function(y,z){__p&&__p();w.setErrorHandler(function(A){this.$VideoDashPrefetchCache9(w);z(c("VideoPlayerShakaError").translateError(A,v,"preload"))}.bind(this));w.setResponseHandler(function(A){w.response=A;this.$VideoDashPrefetchCache9(w);y(w)}.bind(this));w.setAbortHandler(function(){if(c("VideoPlayerPrefetchExperiments").fixPrefetchCacheAbort){this.$VideoDashPrefetchCache9(w);var A=j(t);z(A)}else z(x,new Error("Request promise aborted"))}.bind(this))}.bind(this));this.$VideoDashPrefetchCache10(t,x);this.$VideoDashPrefetchCache2.push(w);if(this.$VideoDashPrefetchCache7)this.$VideoDashPrefetchCache7.push(w);else w.send();return x};s.prototype.genPrefetchMpdNow=function t(u){__p&&__p();return c("regeneratorRuntime").async(function v(w){__p&&__p();while(1)switch(w.prev=w.next){case 0:"use strict";if(!this.has(u)){w.next=3;break}return w.abrupt("return",null);case 3:return w.abrupt("return",this.$VideoDashPrefetchCache8(u));case 4:case"end":return w.stop()}},null,this)};s.prototype.$VideoDashPrefetchCache11=function(t){var u=arguments.length<=1||arguments[1]===undefined?false:arguments[1];"use strict";var v=[];for(var w=0;w<t.length;w++){var x=s.createQueryStringURL(t[w]);if(!this.has(x))v.push(this.$VideoDashPrefetchCache8(x,u))}return v};s.prototype.$VideoDashPrefetchCache12=function(t){"use strict";__p&&__p();var u=s.getConsolidatedURL(t);if(u==null)return this.$VideoDashPrefetchCache11(t);var v=new(c("XHRRequest"))(u).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(o(u));k(v);var w=Date.now(),x=[];for(var y=0;y<t.length;y++){var z=s.createQueryStringURL(t[y]),A=new(c("Deferred"))();if(!this.has(z))this.$VideoDashPrefetchCache10(z,A.getPromise());x.push(A)}v.setErrorHandler(function(B){this.$VideoDashPrefetchCache9(v);for(var y=0;y<x.length;y++)x[y].reject(c("VideoPlayerShakaError").translateError(B,u,"preload"))}.bind(this));v.setResponseHandler(function(B){var C=Date.now()-w;for(var y=0;y<t.length;y++){var D=x[y],E=t[y];D.resolve(q(B,E,C))}this.$VideoDashPrefetchCache9(v)}.bind(this));v.setAbortHandler(function(){for(var y=0;y<t.length;y++){var B=x[y];B.reject(new Error("Request aborted."))}});this.$VideoDashPrefetchCache2.push(v);v.send();return x.map(function(B){return B.getPromise()})};s.prototype.$VideoDashPrefetchCache13=function(t){__p&&__p();var u,v=this;"use strict";var w=t.useCredentials;this.$VideoDashPrefetchCache4++;var x=this.$VideoDashPrefetchCache6&&!w;if(c("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch)this.$VideoDashPrefetchCache7=[];var y=x?this.$VideoDashPrefetchCache12(t.video):this.$VideoDashPrefetchCache11(t.video,w),z=x?this.$VideoDashPrefetchCache12(t.audio):this.$VideoDashPrefetchCache11(t.audio,w),A=this.$VideoDashPrefetchCache11(t.manifest,w),B=y.concat(z,A);if(this.$VideoDashPrefetchCache7)(function(){__p&&__p();var C=v.$VideoDashPrefetchCache7||[];v.$VideoDashPrefetchCache7=null;var D=""+t.videoID,E={name:"prefetch task, "+D,run:function F(){if(D)m["delete"](D);C.forEach(function(G){return G.send()});return c("MaybeNativePromise").all(B).then(function(){})["catch"](function(){})},cancel:function F(){}};if(i){if(c("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed&&D)m.set(D,E);i.getQueue("video").enqueue(E,c("VideoPlayerPrefetchExperiments").prefetchPriority);v.$VideoDashPrefetchCache14()}else{E.run();c("MaybeNativePromise").all(B).then(function(){return this.$VideoDashPrefetchCache14()}.bind(v))["catch"](function(){return this.$VideoDashPrefetchCache14()}.bind(v))}})();else c("MaybeNativePromise").all(B).then(function(){return this.$VideoDashPrefetchCache14()}.bind(this))["catch"](function(){return this.$VideoDashPrefetchCache14()}.bind(this))};s.prototype.$VideoDashPrefetchCache10=function(t,u){"use strict";__p&&__p();t=r(t);if(this.$VideoDashPrefetchCache1.values().next().done)c("Run").onLeave(function(){for(var v=0;v<this.$VideoDashPrefetchCache2.length;v++)this.$VideoDashPrefetchCache2[v].abort();this.$VideoDashPrefetchCache2=[];this.$VideoDashPrefetchCache3=[];this.$VideoDashPrefetchCache4=0;this.$VideoDashPrefetchCache1.clear()}.bind(this));this.$VideoDashPrefetchCache1.set(t,u)};s.prototype.$VideoDashPrefetchCache9=function(t){"use strict";var u=this.$VideoDashPrefetchCache2.indexOf(t);if(u>-1)this.$VideoDashPrefetchCache2.splice(u,1)};s.prototype.$VideoDashPrefetchCache14=function(){"use strict";this.$VideoDashPrefetchCache4--;var t=this.$VideoDashPrefetchCache3.shift();if(t)this.$VideoDashPrefetchCache13(t)};s.prototype.has=function(t){"use strict";t=r(t);return this.$VideoDashPrefetchCache1.has(t)};s.prototype.getAndDelete=function(t){"use strict";t=r(t);var u=this.$VideoDashPrefetchCache1.get(t);this.$VideoDashPrefetchCache1["delete"](t);return u};s.prototype.$VideoDashPrefetchCache15=function(t){"use strict";t=r(t);var u=this.$VideoDashPrefetchCache1.get(t);return u};s.prototype.queueRequestBatch=function(t){"use strict";if(this.$VideoDashPrefetchCache5===0||this.$VideoDashPrefetchCache4<this.$VideoDashPrefetchCache5)this.$VideoDashPrefetchCache13(t);else this.$VideoDashPrefetchCache3.push(t)};s.getInstance=function(){"use strict";if(l===null)l=new s();return l};s.createQueryStringURL=function(t){"use strict";var u=t.url,v=t.start,w=t.end;if(v!==null&&v!==undefined&&w!==null&&w!==undefined)u=new(c("URI"))(u).addQueryData({bytestart:v,byteend:w});return u.toString()};s.getConsolidatedURL=function(t){"use strict";__p&&__p();var u="",v=Infinity,w=0;for(var x=0;x<t.length;x++){var y=t[x],z=y.url,A=y.start,B=y.end;if(z==null||A==null||B==null)return null;if(u==="")u=z;else if(u!==z)return null;v=Math.min(v,A);w=Math.max(w,B)}return s.createQueryStringURL({url:u,start:v,end:w})};s.loadVideo=function(t,u){"use strict";__p&&__p();u=!!u;if(h&&h.isAutoplayBandwidthRestrained())return;if(c("VideoPlayerPrefetchExperiments").disablePrefetchCache)return;var v=s.getInstance();if(!t.manifest)t.manifest=[];v.queueRequestBatch({manifest:t.manifest.filter(p),video:t.video.filter(p),audio:t.audio.filter(p),videoID:t.videoID,useCredentials:u})};s.getCacheValue=function(t){"use strict";return s.getInstance().getAndDelete(t)};s.hasCacheValue=function(t){"use strict";return s.getInstance().has(t)};s.getPrefetchTaskByID=function(t){"use strict";var u=m.get(t)||null;return u};f.exports=s}),null);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={},i="_spinner",j={getClicked:function k(l){return c("DataStore").get(l,"clicked",false)},register:function k(l,m){__p&&__p();var n=l.id;h[n]=c("Event").listen(l,"click",function(){if(m){c("CSS").hide(l);c("CSS").show(m)}c("DataStore").set(l,"clicked",true)});if(m)h[n+i]=c("Event").listen(m,"click",function(){if(m)c("CSS").hide(m);c("CSS").show(l);c("DataStore").set(l,"clicked",false)})},unregister:function k(l){var m=l.id;if(Object.prototype.hasOwnProperty.call(h,m))h[m].remove();var n=m+i;if(Object.prototype.hasOwnProperty.call(h,n))h[n].remove()}};f.exports=j}),null);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(function a(b,c,d,e,f,g){var h={storeRenderTime:function i(j){var k=c("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers?c("performanceAbsoluteNow")():Date.now();c("DataStore").set(j,"videos_rendering_instrumentation",k);return k},retrieveRenderTime:function i(j){var k=c("DataStore").get(j,"videos_rendering_instrumentation",NaN);if(Number.isNaN(k))k=h.storeRenderTime(j);return k}};f.exports=h}),null);
__d("killswitch",["KSConfig"],(function a(b,c,d,e,f,g){"use strict";function h(i){return c("KSConfig").killed.has(i)}h.override=function(i,j){if(j)c("KSConfig").killed.add(i);else c("KSConfig").killed["delete"](i)};f.exports=h}),null);
__d("ClientServiceWorkerMessage",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new self.MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2])};f.exports=h}),null);