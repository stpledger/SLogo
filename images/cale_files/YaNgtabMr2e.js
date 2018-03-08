if (self.CavalryLogger) { CavalryLogger.start_js(["2KEcm"]); }

__d("P2PBannerStore",["invariant","EventEmitter","P2PActionConstants","P2PAPI","P2PDispatcher"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=void 0,l={},m=false,n=false;i=babelHelpers.inherits(o,c("EventEmitter"));j=i&&i.prototype;function o(){j.constructor.call(this);k=c("P2PDispatcher").register(this.onEventDispatched.bind(this))}o.prototype.onEventDispatched=function(p){__p&&__p();var q=p.type,r=p.data;switch(q){case c("P2PActionConstants").BANNER_STATES_UPDATED:this.handleBannerStatesUpdated(r);this.emit("change");break;case c("P2PActionConstants").BANNER_DISMISSED:this.handleBannerDismissed(r);this.emit("change");break;case c("P2PActionConstants").BANNER_COMPLETED:this.handleBannerCompleted(r);this.emit("change");break}};o.prototype.handleBannerStatesUpdated=function(p){m=true;l=p};o.prototype.handleBannerDismissed=function(p){var q=this.getBannerState(p);q.hasBeenDismissed=true};o.prototype.shouldShowBanner=function(p){__p&&__p();var q=void 0;if(!n){c("P2PAPI").getBannerStates();n=true;return false}if(!m)return false;q=this.getBannerState(p);return q.eligible&&!q.hasBeenDismissed};o.prototype.handleBannerCompleted=function(p){var q=this.getBannerState(p);q.eligible=false};o.prototype.getBannerState=function(p){var q=l[p];q||h(0);return q};f.exports=new o()}),null);