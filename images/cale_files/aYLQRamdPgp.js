if (self.CavalryLogger) { CavalryLogger.start_js(["V0QX3"]); }

__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={};c("Arbiter").subscribe(c("BigPipe").Events.init,function(j,k){__p&&__p();if(k.lid&&k.lid!=="0")k.arbiter.subscribe("images_displayed",function(j,k){__p&&__p();var l=h[k.lid];if(!l)l=h[k.lid]=[];k.images.forEach(function(m){try{var n=new(c("URI"))(m);m=n.setFragment("").toString()}catch(o){return}if(i[m])return;i[m]=true;l.push({pagelet:k.pagelet,timeslice:k.timeslice,ts:k.ts,uri:m})})})});f.exports.getImageTimings=function(j){return h[j]||[]}}),null);
__d("BanzaiStream",["Promise","Banzai","BanzaiStreamPayloads"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=4294967296,i="banzai_stream_route",j=250*1e3,k={post:function l(m,n){__p&&__p();var o=JSON.stringify({stream_route:m,payload:n});if(o.length<j){c("Banzai").post(m,n);return}var p=Math.floor(Math.random()*h)+"_"+Date.now();c("BanzaiStreamPayloads").addPayload(p,{route:m,payload:n});var q=[],r=Math.ceil(o.length/j);for(var s=0;s<r;s++)q.push(o.substr(s*j,j));q.reduce(function(t,u,s){var v={id:p,index:s,count:r,chunk_data:u};return t.then(function(){return new(c("Promise"))(function(w,x){return c("Banzai").post(i,v,{callback:w})})})},c("Promise").resolve()).done(function(){c("BanzaiStreamPayloads").removePayload(p)})}};f.exports=k}),null);
__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("ReactSpeedHelper",["LogBuffer","ReactDOM"],(function a(b,c,d,e,f,g){var h={enableRenderMeasurements:function i(){if(!c("ReactDOM").enableRenderMeasurements)return;c("ReactDOM").enableRenderMeasurements()},getMetrics:function i(j,k){return c("LogBuffer").read("react_speed").filter(function(l){return(j==null||l.begin>=j)&&(k==null||l.end<=k)})}};f.exports=h}),null);
__d("sourceMetaToString",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i,j){__p&&__p();var k;if(i.name){k=i.name;if(i.module)k=i.module+"."+k}else if(i.module)k=i.module+".<anonymous>";if(j&&i.line){k=(k?k:"<anonymous>")+":"+i.line;if(i.column)k+=":"+i.column}return k}f.exports=h}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","Map","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","Set","URI","forEachObject","isEmpty","performance"],(function aa(ba,a,ca,da,b,ea){__p&&__p();var c=500,d=[],e={},f={},g={},h=[".mp4",".m4v",".mpd","m4a"],i=new(a("Set"))(["bootload","js_exec","start_bootload","tag_bootload"]);function j(s){__p&&__p();for(var t=h,u=Array.isArray(t),v=0,t=u?t:t[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var w;if(u){if(v>=t.length)break;w=t[v++]}else{v=t.next();if(v.done)break;w=v.value}var x=w;if(s.endsWith(x))return true}return false}function k(s){__p&&__p();var t=new(a("Map"))();a("ResourceTimingsStore").getMapFor(s).forEach(function(u){if(u.requestSent!=null){var v=t.get(u.uri);if(v!=null)v.push(u);else t.set(u.uri,[u])}});t.forEach(function(u){return u.sort(function(v,w){return v.requestSent-w.requestSent})});return t}function l(s,t,u,v){__p&&__p();var w=s.get(t);if(w==null){var x=t.indexOf("?");if(x!==-1){var y=t.substring(0,x);w=s.get(y)}}if(w!=null)for(var z=0;z<w.length;z++){var A=w[z],B=A.requestSent,C=A.responseReceived;if((u==null||B!=null&&B<=u)&&(v==null||C!=null&&C>=v))return w.splice(z,1)[0]}return null}function m(f,s,t,u,v,w,x){__p&&__p();if(!a("performance").timing||!a("performance").getEntriesByType)return null;var y={},z=a("performance").timing.navigationStart;if(t)y=a("ImageTimingHelper").getImageTimings(u).sort(function(Z,$){return Z.ts-$.ts}).reduce(function(Z,$){if(Z[$.uri])return Z;Z[$.uri]=$.pagelet;return Z},{});var A=Array.from(a("performance").getEntriesByType("resource")),B=A.filter(function(H){return H.duration>=0&&H.startTime!=null&&H.startTime+z>s&&(v==null||H.responseEnd==null||H.responseEnd+z<v)});B.sort(function(Z,$){return Z.startTime-$.startTime});var C=B.length,D=0,E=0,F=0,fa=0,ga=0,ha=k(a("ResourceTypes").XHR),ia=k(a("ResourceTypes").CSS),ja=k(a("ResourceTypes").JS);for(var G=0;G<B.length;G++){var H=B[G],I="",J="",K="",L=void 0,ka=H.initiatorType;switch(ka){case"css":case"link":case"script":var M=a("ResourceTimingsStore").parseMakeHasteURL(H.name);if(!M)continue;var la=M[0],N=M[1];if(N==="css"||N==="js"){var ma=N==="css"?ia:ja;L=l(ma,H.name,H.startTime+z,H.responseEnd+z);if(L!=null&&x){J=N;I=L.uid;break}else{J=N;var na=g[H.name]||F++;I=na+"_"+la}}else{var O=p(H.name);K=O[0];J=O[1];I=E+++"_"+K}break;case"img":I=E+++"_"+n(H.name);J="img";break;case"iframe":I=fa+++"_"+n(H.name)+o(H.name);J="iframe";break;case"xmlhttprequest":if(w){var oa=n(H.name),P=o(H.name);if(j(P)){I=ga+++"_"+oa+P;J="video";break}else{L=l(ha,H.name,H.startTime+z,H.responseEnd+z);if(L!=null){J=a("ResourceTypes").XHR;I=L.uid;break}}}default:continue}var Q={},R=Object.keys(a("ResourceTimingMetricsEnumJS"));for(var S=0;S<R.length;S++){var T=a("ResourceTimingMetricsEnumJS")[R[S]],U=H[T];if(U)Q[T]=U+a("performance").timing.navigationStart}if(L!=null){var V=L,W=V.requestSent,X=V.responseReceived;if(s!=null&&W!=null&&W<s||v!=null&&X!=null&&X>v)continue;Q.requestSent=W;Q.responseReceived=X}Q.type=J;Q.desc=I;if(L!=null&&(J===a("ResourceTypes").JS||J===a("ResourceTypes").CSS||J===a("ResourceTypes").XHR)){var Y=a("ResourceTimingsStore").getAnnotationsFor(J,L.uid);if(Y!=null)Q.annotations=Y}if(J=="img"&&Object.prototype.hasOwnProperty.call(y,H.name))Q.pagelet=y[H.name];Q.transferSize=H.transferSize;Q.encodedBodySize=H.encodedBodySize;if(f[H.name]==undefined)f[H.name]=[];D++;f[H.name].push(Q)}if(x)return{numValidEntries:C,numSuccessfulMetrics:D};return null}function n(s){var t=new(a("URI"))(s).getDomain();return t}function o(s){var t=new(a("URI"))(s).getPath();return t}function p(s){return[n(s),"img"]}function q(s){__p&&__p();var t=Object.keys(s).filter(function(v){return v.startsWith("start_bootload/")}).sort(function(v,w){return s[v]-s[w]}).map(function(v){return v.substring(v.indexOf("/")+1)});t.forEach(function(v){return i.forEach(function(w){var x=w+"/"+v;if(s[x]!=null)e[x]=s[x]})});d=d.concat(t);if(d.length>c){var u=d.splice(0,d.length-c);u.forEach(function(v){return i.forEach(function(w){if(e[w+"/"+v])delete e[w+"/"+v]})})}}var r={addPastBootloaderMetricsToResourceTimings:function s(){__p&&__p();var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],u=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],g=a("Bootloader").getURLToHashMap();a("forEachObject")(t,function(v,w){__p&&__p();var x=g[w];if(!x)return;var y=new(a("Map"))();y.set("bootloader_hash",x);i.forEach(function(z){var A=z+"/"+x,B=u[A]||e[A];if(B!=null)y.set(z,B)});if(y.size>0)v.forEach(function(z){if(z.requestSent||z.responseReceived)return;y.forEach(function(A,B){return z[B]=A})})})},mergeBootloaderMetricsAndResourceTimings:function s(){__p&&__p();var t=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],u=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],v=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(a("isEmpty")(g))g=a("Bootloader").getURLToHashMap();var w=new(a("Map"))();a("forEachObject")(g,function(y,z){w.set(y,z)});var x=[];a("forEachObject")(u,function(f,y){__p&&__p();var z=y.indexOf("/");if(z===-1)return;var A=y.substring(0,z);if(!i.has(A))return;x.push(y);var B=y.substring(z+1),C=w.get(B);if(!C){C=B;B=g[C];if(!B)return}if(C.startsWith("data:"))C="inlined resource: "+B;if(t[C]==null)t[C]=[{}];t[C].forEach(function(D){D.bootloader_hash=B;D[A]=f})});if(!v){q(u);x.forEach(function(y){return delete u[y]})}return t},getLastTTIAndE2EImageResponseEnds:function s(t,u,v){__p&&__p();var w={TTI:t,E2E:u};if(!a("performance").timing)return w;var x=v.filter(function(A){return A.ts<=t}).map(function(A){return A.uri}).reduce(function(A,z){A[z]=true;return A},{}),y=v.map(function(A){return A.uri}).reduce(function(A,z){A[z]=true;return A},{});for(var z in f)f[z].forEach(function(A){if(A.type==="img"){if(x[z])w.TTI=Math.max(w.TTI,A.responseEnd);if(y[z])w.E2E=Math.max(w.E2E,A.responseEnd)}});return w},getMetrics:function s(t,u,v,w,x,y){f={};if(a("isEmpty")(g))g=a("Bootloader").getURLToHashMap();var z=m(f,t,u,v,w,x,y);return{data:f,diagnostics:z}}};b.exports=r}),null);
__d("TimeSliceHelper",["LogBuffer","Map","ProfilingCounters","ProfilingCountersStore","ReactSpeedHelper","sourceMetaToString"],(function a(b,c,d,e,f,g){__p&&__p();var h=function h(o,p){return Math.round((o-p)*1e3)},i={counterFunction:function o(p){return c("ProfilingCountersStore").getNestedTotals(p)}};function j(o,p,q,r){__p&&__p();var s=p.counterFunction,t=void 0;if(q.guard){var u=c("sourceMetaToString")(q),v=q.guard.toString();t=u?v+" at "+u:v}else t=q.desc;var w=r!=null?s(r):null,x={begin:q.begin,end:q.end,name:t,id:q.id,counters:w,isEdgeContinuation:q.isEdgeContinuation};if(q.parentID&&q.parentID!==q.id)x.parentID=q.parentID;o.push(x)}function k(o,p,q){var r=p.counterFunction,s={begin:q.begin,end:q.end,name:"JS["+q.count+"]",counters:r(c("ProfilingCounters").wrapInSingleContext(q.contextsToBeMerged))};o.push(s)}function l(o,p){var q=p.indirectParentID,r=p.id,s=p.isEdgeContinuation;if(q!=null){var t=o.get(q),u=void 0;s=s;if(t!=null)u={indirectParentID:t.indirectParentID,isEdgeContinuation:s&&t.isEdgeContinuation};else u={indirectParentID:q,isEdgeContinuation:s};o.set(r,u)}}function m(o,p){__p&&__p();var q=p.indirectParentID,r=p.isEdgeContinuation,s=p.id;if(q!=null&&q!==s){var t=o.get(q);if(t!=null){q=t.indirectParentID;r=t.isEdgeContinuation&&r}return babelHelpers["extends"]({},p,{parentID:q,isEdgeContinuation:r})}return p}var n={formatMetricsForTransport:function o(p){__p&&__p();var q=[],r=[],s=[],t=new(c("Map"))(),u=new(c("Map"))(),v=0,w=function w(y,z,A){var B=void 0;if(z.has(y))B=z.get(y);else{B=A.length;z.set(y,B);A.push(y)}return B},x=[];if(p!=null)p.forEach(function(y){__p&&__p();var z=y.begin,A=y.end,B=y.name,C=y.id,D=y.counters,E=y.parentID,F=y.isEdgeContinuation,G=h(z,v),H=h(A,z);v=A;var I=w(B,t,q),J=[G,H,I],K=D||{},L=Object.keys(K).filter(function(P){return K[P]!==0}).sort(),M=void 0;if(L.length>0){var N=L.join(),O=w(N,u,s);M=L.map(function(B){return K[B]});M.unshift(O)}else M=[];if(C)J.push(C);if(E){J.push(E);J.push(F)}x.push(J);r.push(M)});return{version:"compact",items:x,names:q,counters:r,counterSchemas:s}},getMetrics:function o(p,q,r,s,t,u,v){var w=function w(x,y){var z=y.end-y.begin<r,A=x&&y.begin-x.end<s&&z;return{shouldMergeIntoCurrentMerge:A,shouldFlushCurrentThenNewMerge:z}};return this.getCustomMergeMetrics(p,q,w,t,u,v)},getCustomMergeMetrics:function o(p,q,r,s,t,u){__p&&__p();var v;if(u==null)u=i;else u=babelHelpers["extends"]({},i,u);var w=function w(K){var L=K.id;return L&&t[L]?t[L]:null},x=[],y=j.bind(undefined,x,u),z=k.bind(undefined,x,u),A=c("LogBuffer").read("time_slice_heartbeat");if(s.length>0)(function(){var K=Math.max.apply(null,s.map(function(L){return L.id}));A.forEach(function(L){return L.id+=K})})();var B=c("ReactSpeedHelper").getMetrics().map(function(K){return babelHelpers["extends"]({},K,{desc:"React["+K.name+"]"})}),C=s.concat(A,B),D=void 0,E=new(c("Map"))(),F=l.bind(undefined,E),G=m.bind(undefined,E),H=function H(){if(D)if(D.count>1)z(D);else y(G(D.first),w(D.first));D=null},I=C.sort(function(K,L){if(K.begin!==L.begin)return K.begin-L.begin;else if(K.end!==L.end)return K.end-L.end;else return 0}).filter(function(K){return(p==null||K.end>=p)&&(q==null||K.begin<=q)});if(I.length>0&&!I[0].representsExecution&&I[0].begin<p){var J=I[0];I[0]=babelHelpers["extends"]({},J,{begin:p})}I.forEach(function(K){__p&&__p();var L=r(D,K),M=L.shouldMergeIntoCurrentMerge,N=L.shouldFlushCurrentThenNewMerge,O=w(K);if(D&&M){D.end=K.end;D.count++;if(O)D.contextsToBeMerged.push(O);if(D.count===2)F(D.first);F(K)}else if(N){H();var P=[];if(O)P.push(O);D={begin:K.begin,end:K.end,count:1,first:K,contextsToBeMerged:P}}else if(!N){H();y(G(K),O)}});H();return x}};f.exports=n}),null);