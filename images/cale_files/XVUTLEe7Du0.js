if (self.CavalryLogger) { CavalryLogger.start_js(["L4fm6"]); }

__d("MercuryTypingReceiver",["Arbiter","ChannelConstants","FBIDCheck","MercuryActionType","MercuryIDs","MercuryPayloadSource","MercuryDispatcher","MercurySingletonMixin","MercuryThreadIDMap","MercuryViewer","TypingStates","isEmpty","mixInEventEmitter","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("MercuryThreadIDMap").get(),i=3e4;function j(k){"use strict";__p&&__p();this.$MercuryTypingReceiver1=null;this.$MercuryTypingReceiver2={};this.$MercuryTypingReceiver3=c("MercuryDispatcher").getForFBID(k);this.$MercuryTypingReceiver3.subscribe("update-typing-state",function(m,n){__p&&__p();var o=n.payload_source;if(o!=c("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE)return;var p=n.actions;if(!p||!p.length)return;var q=c("MercuryActionType").USER_GENERATED_MESSAGE;p.forEach(function(r){if(r.action_type==q&&r.author!=c("MercuryViewer").getID())this.$MercuryTypingReceiver4(r.thread_id,r.author)}.bind(this))}.bind(this));var l=[c("ChannelConstants").getArbiterType("typ"),c("ChannelConstants").getArbiterType("ttyp")];if(!c("FBIDCheck").isUser_deprecated(k))l.push(c("ChannelConstants").getArbiterType("page_typing"));c("Arbiter").subscribe(l,function(m,n){__p&&__p();var o=n.obj,p=this.$MercuryTypingReceiver5(o);if(p){var q=c("MercuryIDs").getParticipantIDFromUserID(o.from.toString());if(o.st==c("TypingStates").TYPING){this.$MercuryTypingReceiver2[p]=this.$MercuryTypingReceiver2[p]||{};var r=this.$MercuryTypingReceiver2[p][q];this.$MercuryTypingReceiver2[p][q]=Date.now();if(!this.$MercuryTypingReceiver1)this.$MercuryTypingReceiver1=c("setTimeoutAcrossTransitions")(function(){this.$MercuryTypingReceiver6()}.bind(this),3e3);!r&&this.$MercuryTypingReceiver7(p)}else if(o.st==c("TypingStates").INACTIVE)this.$MercuryTypingReceiver4(p,q)}}.bind(this))}j.prototype.$MercuryTypingReceiver8=function(k){"use strict";var l=this.$MercuryTypingReceiver2[k]||{},m=Object.keys(l);m.sort(function(n,o){return l[n]-l[o]});return m};j.prototype.$MercuryTypingReceiver6=function(){"use strict";__p&&__p();this.$MercuryTypingReceiver1=null;var k=Date.now(),l={},m=false;for(var n in this.$MercuryTypingReceiver2){var o=false;for(var p in this.$MercuryTypingReceiver2[n]||{})if(this.$MercuryTypingReceiver2[n][p]<k-i){delete this.$MercuryTypingReceiver2[n][p];o=true}else m=true;if(o)l[n]=this.$MercuryTypingReceiver8(n)}if(!c("isEmpty")(l))this.$MercuryTypingReceiver9(l);if(m)this.$MercuryTypingReceiver1=c("setTimeoutAcrossTransitions")(function(){this.$MercuryTypingReceiver6()}.bind(this),3e3)};j.prototype.$MercuryTypingReceiver4=function(k,l){"use strict";if(k in this.$MercuryTypingReceiver2)if(l in this.$MercuryTypingReceiver2[k]){delete this.$MercuryTypingReceiver2[k][l];this.$MercuryTypingReceiver7(k)}};j.prototype.$MercuryTypingReceiver9=function(k){"use strict";this.releaseHeldEventType("state-changed");this.emitAndHold("state-changed",k)};j.prototype.$MercuryTypingReceiver7=function(k){"use strict";var l={};l[k]=this.$MercuryTypingReceiver8(k);this.$MercuryTypingReceiver9(l)};j.prototype.$MercuryTypingReceiver5=function(k){"use strict";if(k.thread_fbid)return h.getClientIDFromServerIDNow(k.thread_fbid.toString());if(k.type==="typ"||k.type==="page_typing")return c("MercuryIDs").getThreadIDFromUserID(k.from.toString());return null};c("mixInEventEmitter")(j,{"state-changed":true});Object.assign(j,c("MercurySingletonMixin"));f.exports=j}),null);