if (self.CavalryLogger) { CavalryLogger.start_js(["3hWWo"]); }

__d("MNCommercePostbackRefSendManager",["AsyncRequest","MessengerActions","MessengerMDotMeReferralStore","XMNCommercePostbackRefSendController"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();h.prototype.sendMDotMeRef=function(i,j){var k=this.getMdotMeRef();if(this.shouldSendRef(j,i)){var l=c("XMNCommercePostbackRefSendController").getURIBuilder().setString("page_id",i).setString("ref",k).getURI();new(c("AsyncRequest"))().setURI(l).setMethod("POST").send();c("MessengerActions").changeMDotMeReferral()}};h.prototype.shouldSendRef=function(i,j){if(!j||!i)return false;return this.hasMDotMeRef(j)};h.prototype.hasMDotMeRef=function(i){var j=c("MessengerMDotMeReferralStore").getState();return!!(j.refCode&&i&&j.refThreadID&&j.refThreadID===i)};h.prototype.getMdotMeRef=function(){var i=c("MessengerMDotMeReferralStore").getState();return i.refCode};function h(){}f.exports=new h()}),null);