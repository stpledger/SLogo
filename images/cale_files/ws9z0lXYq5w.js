if (self.CavalryLogger) { CavalryLogger.start_js(["i0+tI"]); }

__d("getURLRanges",["URI","URLScraper","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){__p&&__p();var j=arguments.length<=1||arguments[1]===undefined?0:arguments[1],k=i.substr(j),l=c("URLScraper").match(k);if(!l)return[];var m=l;if(!/^[a-z][a-z0-9\-+.]+:\/\//i.test(l))m="http://"+l;if(!c("URI").isValidURI(m))return[];var n=k.indexOf(l),o=c("UnicodeUtils").strlen(k.substr(0,n));j+=o;var p=l.length,q=[{offset:j,length:l.length,entity:{url:m}}];return q.concat(h(i,j+p))}f.exports=h}),null);