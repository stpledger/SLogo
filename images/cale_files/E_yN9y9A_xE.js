if (self.CavalryLogger) { CavalryLogger.start_js(["RyF3K"]); }

__d("MercuryWorkTopGroupThreads",["EmitterSubscription","EventEmitter","ImmutableObject","KeyedCallbackManager","MercuryDispatcher","MercuryServerPayloadPreprocessor","MessengerServerPayloadTransformer.bs","MercurySingletonProvider","WorkTopGroupThreadsWebGraphQLQuery","WebGraphQL"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=new(c("EventEmitter"))();function i(k){__p&&__p();this.$MercuryWorkTopGroupThreads5=function(l){if(l&&l.viewer&&l.viewer.message_threads){var m=(l.viewer.message_threads.nodes||[]).map(function(o){return c("MessengerServerPayloadTransformer.bs").transformThread(this.$MercuryWorkTopGroupThreads1,o,false)}.bind(this));if(m.length>0){var n=c("MercuryServerPayloadPreprocessor").getForFBID(this.$MercuryWorkTopGroupThreads1);n.handleUpdate({work_top_named_threads:m})}}}.bind(this);this.$MercuryWorkTopGroupThreads1=k;this.$MercuryWorkTopGroupThreads2=c("MercuryDispatcher").getForFBID(this.$MercuryWorkTopGroupThreads1);this.$MercuryWorkTopGroupThreads3=new(c("KeyedCallbackManager"))();this.$MercuryWorkTopGroupThreads4()}i.getForFBID=function(k){return j.getForFBID(k)};i.get=function(){return j.get()};i.prototype.getTopThreads=function(){return this.$MercuryWorkTopGroupThreads3.getAllResources()};i.prototype.requestPull=function(){c("WebGraphQL").exec(new(c("WorkTopGroupThreadsWebGraphQLQuery"))({limit:20})).done(this.$MercuryWorkTopGroupThreads5)};i.prototype.$MercuryWorkTopGroupThreads4=function(){__p&&__p();this.$MercuryWorkTopGroupThreads2.subscribe("update-work-group-threads",function(k,l){var m=l.work_top_named_threads;if(!m||!m.length)return;this.$MercuryWorkTopGroupThreads3.reset();var n={};m.forEach(function(o){return n[o.thread_id]=new(c("ImmutableObject"))(o)});this.$MercuryWorkTopGroupThreads3.addResourcesAndExecute(n);h.emit("change")}.bind(this))};i.addListener=function(k,l){return h.addListener(k,l)};var j=new(c("MercurySingletonProvider"))(i);f.exports=i}),null);