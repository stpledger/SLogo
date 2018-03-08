if (self.CavalryLogger) { CavalryLogger.start_js(["GftxU"]); }

__d("MercurySyncDeltaHandler",["invariant","Arbiter","AsyncResponse","ChannelConstants","ChatReliabilityInstrumentation","CurrentUser","FBIDCheck","LogHistory","MercuryConfig","MessagingConfig","MercuryDelayedDispatcher","MercuryPayloadSource","MercurySyncChannelMonitor","MercurySyncConstants","MercurySyncDeltaHolder","MercurySyncDeltaTypes","MercurySyncDispatcher","MercurySyncForcedFetchHandler","MercurySyncHolesTypedLogger","MercuryServerPayloadPreprocessor","MercurySyncTopicType","MercurySingletonProvider","gkx"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("LogHistory").getInstance("mercury_sync_delta_handler"),j=c("MessagingConfig").syncFetchRetries||0;k.getForFBID=function(m){return l.getForFBID(m)};k.get=function(){return l.get()};function k(m){__p&&__p();this.$MercurySyncDeltaHandler1=m;this.$MercurySyncDeltaHandler2=c("MercurySyncDispatcher").getForFBID(this.$MercurySyncDeltaHandler1);this.$MercurySyncDeltaHandler3=c("MercurySyncForcedFetchHandler").getForFBID(this.$MercurySyncDeltaHandler1);this.__payloadPreprocessor=c("MercuryServerPayloadPreprocessor").getForFBID(this.$MercurySyncDeltaHandler1);this.__delayedDispatcher=c("MercuryDelayedDispatcher").getForFBID(this.$MercurySyncDeltaHandler1);this.$MercurySyncDeltaHandler4=c("MercurySyncDeltaHolder").getForFBID(this.$MercurySyncDeltaHandler1);this.$MercurySyncDeltaHandler5=false;this.$MercurySyncDeltaHandler11=c("MercurySyncChannelMonitor").getForFBID(this.$MercurySyncDeltaHandler1);this.$MercurySyncDeltaHandler6=[];this.$MercurySyncDeltaHandler13=0;i.debug("constructor",JSON.stringify({fbid:this.$MercurySyncDeltaHandler1}));c("Arbiter").subscribe("MercurySyncDeltaHandler/initSeqID",function(n,o){__p&&__p();i.debug("initSeqID",JSON.stringify(o));var p=o&&o.seqID,m=o&&o.fbid;if(!m)return;if(m!==this.$MercurySyncDeltaHandler1)return;if(p)this.$MercurySyncDeltaHandler4.updateLastSeqID(p);else this.$MercurySyncDeltaHandler4.updateLastSeqID(0);this.$MercurySyncDeltaHandler15();this.$MercurySyncDeltaHandler8=c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("deltaflow"),function(n,o){if(!this.$MercurySyncDeltaHandler14)this.$MercurySyncDeltaHandler15()}.bind(this))}.bind(this))}k.prototype.$MercurySyncDeltaHandler15=function(){__p&&__p();i.debug("setUpSubscriptionsToRealTimeUpdates",JSON.stringify({fbid:this.$MercurySyncDeltaHandler1}));this.$MercurySyncDeltaHandler7=c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("delta"),function(m,n){__p&&__p();var o=n&&n.obj&&n.obj.queue;if(o)if(o.toString()!==this.$MercurySyncDeltaHandler1)return;var p=n&&n.obj&&n.obj.delta,q=n&&n.obj&&n.obj.iseq;if(!p||!q)return;this.$MercurySyncDeltaHandler16(q,c("MercurySyncTopicType").DELTA);this.$MercurySyncDeltaHandler17(q,p);this.$MercurySyncDeltaHandler4.push(q,p);this.$MercurySyncDeltaHandler18()}.bind(this));this.$MercurySyncDeltaHandler12=c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("deltaflowreject"),function(m,n){var o=n&&n.obj&&n.obj.queue;if(o)if(o.toString()!==this.$MercurySyncDeltaHandler1)return;if(this.$MercurySyncDeltaHandler14)this.$MercurySyncDeltaHandler19()}.bind(this));this.$MercurySyncDeltaHandler9=c("Arbiter").subscribe(c("ChannelConstants").getArbiterType(c("ChannelConstants").FAKE_DFF),function(m,n){var o=n&&n.obj&&n.obj.queue;if(o&&o.toString()!==this.$MercurySyncDeltaHandler1)return;var p=n&&n.obj&&n.obj.delta;if(!p)return;this.$MercurySyncDeltaHandler6.push(p);this.$MercurySyncDeltaHandler18()}.bind(this));this.$MercurySyncDeltaHandler11.setupSubscriptions();this.$MercurySyncDeltaHandler14=true};k.prototype.$MercurySyncDeltaHandler18=function(){__p&&__p();if(this.$MercurySyncDeltaHandler5)return;if(this.$MercurySyncDeltaHandler6.length>0){var m=this.$MercurySyncDeltaHandler6.shift();this.$MercurySyncDeltaHandler20(this.$MercurySyncDeltaHandler4.getLastSeqID(),m);this.$MercurySyncDeltaHandler18()}var n=this.$MercurySyncDeltaHandler4.peek();if(!n)return;var o=n-this.$MercurySyncDeltaHandler4.getLastSeqID();if(o===1){var p=this.$MercurySyncDeltaHandler4.pop();if(!p)return;var q=p.seqID,r=p.delta;this.$MercurySyncDeltaHandler20(q,r);this.$MercurySyncDeltaHandler18()}else if(o>1)this.$MercurySyncDeltaHandler21();else{this.$MercurySyncDeltaHandler4.pop();this.$MercurySyncDeltaHandler18()}};k.prototype.$MercurySyncDeltaHandler20=function(m,n){__p&&__p();this.$MercurySyncDeltaHandler4.updateLastSeqID(m);if(n["class"]===c("MercurySyncDeltaTypes").ForcedFetch){i.debug("DFF",JSON.stringify(n));if(n.threadKey!==undefined&&n.messageId===undefined)this.$MercurySyncDeltaHandler22(m,n);else if(n.threadKey!==undefined&&n.messageId!==undefined)this.$MercurySyncDeltaHandler23(m,n);else{c("ChatReliabilityInstrumentation").logDFF_DELTA_INIT(JSON.stringify(n));this.$MercurySyncDeltaHandler24(m)}}else this.$MercurySyncDeltaHandler2.process(n)};k.prototype.$MercurySyncDeltaHandler21=function(){var m=JSON.stringify({$MercurySyncDeltaHandler25:this.$MercurySyncDeltaHandler4.getLastSeqID(),nextSeqID:this.$MercurySyncDeltaHandler4.peek()});i.warn("hole",m);var n=this.$MercurySyncDeltaHandler4.peek();!!n||h(0);var o=n-1;c("ChatReliabilityInstrumentation").logDFF_HOLE_INIT(m);this.$MercurySyncDeltaHandler24(o)};k.prototype.$MercurySyncDeltaHandler26=function(m,n,o,p){__p&&__p();!this.$MercurySyncDeltaHandler5||h(0);this.$MercurySyncDeltaHandler5=true;i.debug("_scheduleDataFetch:start",JSON.stringify({seqID:m}));n().done(function(q){i.debug("_scheduleDataFetch:success",JSON.stringify({seqID:m}));o(m,q);this.$MercurySyncDeltaHandler5=false;this.$MercurySyncDeltaHandler18()}.bind(this),function(q){i.error("_scheduleDataFetch:failure",JSON.stringify({seqID:m}));p(m,q);this.$MercurySyncDeltaHandler5=false;this.$MercurySyncDeltaHandler18()}.bind(this))};k.prototype.$MercurySyncDeltaHandler24=function(m){__p&&__p();if(!c("CurrentUser").isLoggedInNow())return;this.$MercurySyncDeltaHandler26(undefined,function(){return this.$MercurySyncDeltaHandler3.processGlobalDFFForGraphQL()}.bind(this),function(m,n){var o=n.getPayload();this.__payloadPreprocessor.handleUpdate(o);if(o.sequence_id){i.debug("_initiateGlobalDFF:success",JSON.stringify({seqID:o.sequence_id}));this.$MercurySyncDeltaHandler4.updateLastSeqID(o.sequence_id)}this.$MercurySyncDeltaHandler13=0;c("Arbiter").inform(c("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RECOVER)}.bind(this),function(n,o){__p&&__p();i.error("_initiateGlobalDFF:failure","");if(this.$MercurySyncDeltaHandler13>=j&&!c("gkx")("AT6272W7G37c2zZOpPDUPGXaehXUPvo7_ZqAqdSAoKzgP5DQ8Luz0w5hQkLZeaPa8UmuuAXTSUI8FctXnbHnbKTw")||o){if(this.$MercurySyncDeltaHandler14)this.$MercurySyncDeltaHandler19();if(c("gkx")("AT6T2zrYpHKRdiC2jWw79jSLuG2Ai8UAXBl4mf7UaSrzuZmkv1aboo5IByEaBzwrmKZ7i_TneQib5Fe9fVTNdQMv"))this.$MercurySyncDeltaHandler4.updateLastSeqID(m)}else{this.$MercurySyncDeltaHandler13++;c("Arbiter").inform(c("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RETRY);i.debug("_initiateGlobalDFF:retry","");this.$MercurySyncDeltaHandler5=false;this.$MercurySyncDeltaHandler24(m)}}.bind(this))};k.prototype.$MercurySyncDeltaHandler22=function(m,n){this.$MercurySyncDeltaHandler26(m,function(){return this.$MercurySyncDeltaHandler3.processThreadDFF(m,n.threadKey,n.isLazy)}.bind(this),function(m,o){this.__payloadPreprocessor.handleUpdate(o.getPayload());this.$MercurySyncDeltaHandler4.updateLastSeqID(m)}.bind(this),function(){i.error("_initiateThreadDFF:failure",JSON.stringify(n));var o=babelHelpers["extends"]({},n);delete o.threadKey;this.$MercurySyncDeltaHandler4.updateLastSeqID(m-1);this.$MercurySyncDeltaHandler4.push(m,o)}.bind(this))};k.prototype.$MercurySyncDeltaHandler23=function(m,n){__p&&__p();this.$MercurySyncDeltaHandler26(m,function(){return this.$MercurySyncDeltaHandler3.processMessageDFF(m,n.threadKey,n.messageId,n.isLazy)}.bind(this),function(m,o){var p=o.getPayload(),q=p.other_user_fbid?p.other_user_fbid:p.thread_fbid,r=[babelHelpers["extends"]({},p)],s=c("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE;this.__delayedDispatcher.handleUpdateWaitForThread({actions:r,payload_source:s},q);this.$MercurySyncDeltaHandler4.updateLastSeqID(m)}.bind(this),function(){i.error("_initiateMessageDFF:failure",JSON.stringify(n));var o=babelHelpers["extends"]({},n);delete o.messageId;this.$MercurySyncDeltaHandler4.updateLastSeqID(m-1);this.$MercurySyncDeltaHandler4.push(m,o)}.bind(this))};k.prototype.$MercurySyncDeltaHandler16=function(m,n){var o=m-this.$MercurySyncDeltaHandler4.getLastSeqID();if(o!==1&&o!==0){if(!c("MercuryConfig").WWWSyncHolesLogging)return;new(c("MercurySyncHolesTypedLogger"))().setSeqID(m).setDifference(o).setTopicType(n).log()}};k.prototype.$MercurySyncDeltaHandler17=function(m,n){switch(n["class"]){case c("MercurySyncDeltaTypes").NewMessage:i.debug("message_delta",JSON.stringify({seqID:m,threadKey:n.messageMetadata.threadKey,messageId:n.messageMetadata.messageId}));break;case c("MercurySyncDeltaTypes").ReadReceipt:i.debug("read_receipt_delta",JSON.stringify({seqID:m,threadKey:n.threadKey,actionTimestampMs:n.actionTimestampMs,watermarkTimestampMs:n.watermarkTimestampMs}));break;case c("MercurySyncDeltaTypes").DeliveryReceipt:i.debug("delivery_receipt_delta",JSON.stringify({seqID:m,deliveredWatermarkTimestampMs:n.deliveredWatermarkTimestampMs,messageIds:n.messageIds}));break}};k.prototype.$MercurySyncDeltaHandler19=function(){this.$MercurySyncDeltaHandler14=false;c("Arbiter").unsubscribe(this.$MercurySyncDeltaHandler7);c("Arbiter").unsubscribe(this.$MercurySyncDeltaHandler9);c("Arbiter").unsubscribe(this.$MercurySyncDeltaHandler12);this.$MercurySyncDeltaHandler11.killSubscriptions();c("Arbiter").inform(c("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE)};var l=new(c("MercurySingletonProvider"))(k);f.exports=k}),null);