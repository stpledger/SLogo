if (self.CavalryLogger) { CavalryLogger.start_js(["fF8uJ"]); }

__d("encodeEntityRanges",["DraftStringKey","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("UnicodeUtils").strlen;function i(j,k){var l=[];j.findEntityRanges(function(m){return!!m.getEntity()},function(m,n){var o=j.getText(),p=j.getEntityAt(m);l.push({offset:h(o.slice(0,m)),length:h(o.slice(m,n)),key:Number(k[c("DraftStringKey").stringify(p)])})});return l}f.exports=i}),null);