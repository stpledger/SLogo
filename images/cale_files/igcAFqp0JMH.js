if (self.CavalryLogger) { CavalryLogger.start_js(["q\/tEZ"]); }

__d("DocumentCompositeMentionsSource",["invariant","createCancelableFunction","emptyFunction","nullthrows"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(k,l){var m=k.getCharacterList().toSeq().slice(0,l).reverse().takeWhile(function(n){return n.getEntity()===null}).count();return k.getText().slice(l-m,l)}function j(k){k.length>0||h(0);this.$DocumentCompositeMentionsSource1=k;this.$DocumentCompositeMentionsSource2=false;this.$DocumentCompositeMentionsSource3=null}j.prototype.bootstrap=function(k){__p&&__p();if(this.$DocumentCompositeMentionsSource2)return;this.$DocumentCompositeMentionsSource2=true;k=k||c("emptyFunction");var l=this.$DocumentCompositeMentionsSource1.length;function m(){l--;if(!l)k&&k()}this.$DocumentCompositeMentionsSource1.forEach(function(n){n.bootstrap(m)})};j.prototype.search=function(k,l,m){var n=l.getAnchorKey(),o=k.getBlockForKey(n),p=c("createCancelableFunction")(m);this.$DocumentCompositeMentionsSource4(i(o,l.getAnchorOffset()),p);return{remove:function q(){p.cancel()}}};j.prototype.$DocumentCompositeMentionsSource4=function(k,l){__p&&__p();var m=this.$DocumentCompositeMentionsSource1.length,n,o;for(var p=0;p<m;p++){n=this.$DocumentCompositeMentionsSource1[p];o=n.findMatch(k);if(o===null)continue;else{var q=c("nullthrows")(o).matchingString;this.$DocumentCompositeMentionsSource3=q;n.search(q,function(r,s){if(this.$DocumentCompositeMentionsSource3===s)l(r,o.leadOffset)}.bind(this));return}}this.$DocumentCompositeMentionsSource3=null;l(null,null)};f.exports=j}),null);