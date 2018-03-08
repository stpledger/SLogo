if (self.CavalryLogger) { CavalryLogger.start_js(["p3e7y"]); }

__d("MercuryCanonicalGroupThreadManager",["Bootloader","KeyedCallbackManager","MercuryIDs","MercuryPayloadSource","MercuryServerPayloadPreprocessor","MercurySingletonProvider","MercuryThreads","MessengerServerPayloadTransformer.bs","MercuryServerDispatcher","SubscriptionsHandler"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){this.$MercuryCanonicalGroupThreadManager1=j;this.$MercuryCanonicalGroupThreadManager2=new(c("KeyedCallbackManager"))();this.$MercuryCanonicalGroupThreadManager3=c("MercuryServerPayloadPreprocessor").getForFBID(this.$MercuryCanonicalGroupThreadManager1);this.$MercuryCanonicalGroupThreadManager6=c("MercuryThreads").getForFBID(this.$MercuryCanonicalGroupThreadManager1);this.$MercuryCanonicalGroupThreadManager4={};this.$MercuryCanonicalGroupThreadManager8();this.$MercuryCanonicalGroupThreadManager9();this.$MercuryCanonicalGroupThreadManager7={}}h.getForFBID=function(j){return i.getForFBID(j)};h.get=function(){return i.get()};h.prototype.getCanonicalGroupThreadIDForParticipants=function(j,k){j=this.$MercuryCanonicalGroupThreadManager10(j);var l=this.$MercuryCanonicalGroupThreadManager11(j),m=this.$MercuryCanonicalGroupThreadManager2.executeOrEnqueue(l,k);this.$MercuryCanonicalGroupThreadManager12(j);return m};h.prototype.unsubscribe=function(j){if(j)this.$MercuryCanonicalGroupThreadManager2.unsubscribe(j)};h.prototype.$MercuryCanonicalGroupThreadManager11=function(j){return j.sort().join(",")};h.prototype.$MercuryCanonicalGroupThreadManager13=function(j,k){var l=c("MercuryIDs").getThreadIDFromThreadFBID(k);this.$MercuryCanonicalGroupThreadManager2.setResource(j,l);this.$MercuryCanonicalGroupThreadManager4[l]=j};h.prototype.$MercuryCanonicalGroupThreadManager12=function(j){var k=this.$MercuryCanonicalGroupThreadManager11(j),l={canonical_group_key:k,participants:j};c("MercuryServerDispatcher").trySend("/ajax/mercury/search_canonical_groups.php",l,null,this.$MercuryCanonicalGroupThreadManager1)};h.prototype.$MercuryCanonicalGroupThreadManager8=function(){c("MercuryServerDispatcher").registerEndpoints({"/ajax/mercury/search_canonical_groups.php":{request_user_id:this.$MercuryCanonicalGroupThreadManager1,mode:c("MercuryServerDispatcher").IMMEDIATE,handler:function(j){this.handleUpdate(j)}.bind(this)}})};h.prototype.$MercuryCanonicalGroupThreadManager10=function(j){if(j.indexOf(this.$MercuryCanonicalGroupThreadManager1)===-1)j.push(this.$MercuryCanonicalGroupThreadManager1);return j};h.prototype.handleUpdate=function(j){if(j.graphql_payload){var k=c("MessengerServerPayloadTransformer.bs").transformThread(j.viewer,j.graphql_payload,j.for_page);this.$MercuryCanonicalGroupThreadManager3.handleUpdate({threads:[k],payload_source:c("MercuryPayloadSource").SERVER_SEARCH})}var l=j.canonical_group;if(l)for(var m in l)this.$MercuryCanonicalGroupThreadManager13(m,l[m])};h.prototype.getNow=function(j){var k=this.$MercuryCanonicalGroupThreadManager11(this.$MercuryCanonicalGroupThreadManager10(j));return this.$MercuryCanonicalGroupThreadManager2.getResource(k)};h.prototype.$MercuryCanonicalGroupThreadManager9=function(){c("Bootloader").loadModules(["MercuryThreadInformer"],function(j){var k=j.getForFBID(this.$MercuryCanonicalGroupThreadManager1),l=new(c("SubscriptionsHandler"))();l.addSubscriptions(k.subscribe("threads-deleted",function(m,n){for(var o in n)if(this.$MercuryCanonicalGroupThreadManager4[o]){this.$MercuryCanonicalGroupThreadManager2.setResource(this.$MercuryCanonicalGroupThreadManager4[o],undefined);delete this.$MercuryCanonicalGroupThreadManager4[o]}}.bind(this)));this.$MercuryCanonicalGroupThreadManager5=l}.bind(this),"MercuryCanonicalGroupThreadManager")};var i=new(c("MercurySingletonProvider"))(h);f.exports=h}),null);