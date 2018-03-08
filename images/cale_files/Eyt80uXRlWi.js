if (self.CavalryLogger) { CavalryLogger.start_js(["zC1y6"]); }

__d("ChatproxyPresence",["Arbiter","AvailableListConstants","AvailableListInitialData","BanzaiODS","ChannelConstants","LastActiveTimes","PresenceStatus","debounceAcrossTransitions","gkx","ClientChromeExperimentsData"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("ClientChromeExperimentsData").ClientChromeAvailableListInitialDataPreloader;function i(k){__p&&__p();var l=k.activeList,m=k.lastActiveTimes,n=k.playingNow,o=k.gameIDs;if(n&&c("gkx")("AT7yBpg1V7CzKVaTkCsDW_DkXA2fczgihYwI2HQX5LeBop45hQUdEiqH1VoxT7WnKBTDSj2fGjsqWwvOmixi9XTEC3KJkl26uGSBOQ2EPjno0g")){c("PresenceStatus").setPlayingCanvasGameFriends(n);if(o)c("PresenceStatus").setFriendToGameData(o)}if(l)c("PresenceStatus").setMultiActive(l,"available_list_active");if(m&&!Array.isArray(m))c("LastActiveTimes").update(m)}function j(k){"use strict";this.$ChatproxyPresence1=k;this.$ChatproxyPresence2=false;this.$ChatproxyPresence3=c("AvailableListInitialData").chatNotif;this.$ChatproxyPresence4=false;if(h)h.onLoaded(i);else i(c("AvailableListInitialData"))}j.prototype.subscribe=function(){"use strict";__p&&__p();c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("chatproxy-presence"),this.updatePresenceInfo.bind(this));c("Arbiter").subscribe(c("ChannelConstants").ON_INVALID_HISTORY,function(){this.$ChatproxyPresence2=true}.bind(this));c("Arbiter").subscribe(c("ChannelConstants").RTI_SESSION,function(k,l){if(l)this.$ChatproxyPresence4=l}.bind(this));c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("get_debug_presence"),function(k,l){__p&&__p();var m=c("PresenceStatus").getAllDebugInfo(),n=c("LastActiveTimes").getDebugData();for(var o in n){var p=m[o];if(p===undefined){p={};m[o]=p}p.l=Math.floor(n[o])}this.$ChatproxyPresence4.issueRequest("/debug_presence",{},m,function(){c("BanzaiODS").bumpEntityKey("ChatproxyPresence","debug_presence.sucess")})}.bind(this))};j.prototype.getRTISession=function(){"use strict";return this.$ChatproxyPresence4};j.prototype.updatePresenceInfo=function(k,l){"use strict";__p&&__p();if(this.$ChatproxyPresence2){this.$ChatproxyPresence2=false;c("PresenceStatus").resetPresenceData()}l=l.obj;var m=l.buddyList;c("PresenceStatus").setMultiChatproxy(m);var n=false;if(l.chatNotif!==undefined)n=this.$ChatproxyPresence3!==l.chatNotif;if(n)this.$ChatproxyPresence3=l.chatNotif;if(l.gamers)if(c("gkx")("AT4ZK4-HJfHD7oj43iGtVof3AGIE4_u3z6F0HOgDTJ4fOy3YfjtGPsjx32l5qWfj1k3ucgmRet0aKZYemlSZXFKbUm1LMDVAH-yVQcR_OagZzg")&&l.gamers[0]===-1){var o=[],p={};for(var q=1;q<l.gamers.length;q+=2){o.push(l.gamers[q]);p[l.gamers[q]]=l.gamers[q+1]}c("PresenceStatus").setPlayingCanvasGameFriends(o);c("PresenceStatus").setFriendToGameData(p)}else c("PresenceStatus").setPlayingCanvasGameFriends(l.gamers);if(n)this.$ChatproxyPresence1(c("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,this.$ChatproxyPresence3);c("debounceAcrossTransitions")(function(){this.$ChatproxyPresence1(c("AvailableListConstants").ON_AVAILABILITY_CHANGED)}.bind(this),0)()};j.prototype.getWebChatNotification=function(){"use strict";return this.$ChatproxyPresence3};f.exports=j}),null);
__d("TypingStates",[],(function a(b,c,d,e,f,g){var h=Object.freeze({INACTIVE:0,TYPING:1,QUITTING:2});f.exports=h}),null);
__d("AvailableList",["Arbiter","ArbiterMixin","AsyncRequest","AvailableListConstants","BanzaiODS","Bootloader","ChannelConstants","ChatConfig","ChatDispatcher","ChatproxyPresence","ChatReliabilityInstrumentation","ChatVisibility","CurrentUser","FBIDCheck","ErrorUtils","JSLogger","LastActiveTimes","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","Run","ServerTime","TypingStates","debounceAcrossTransitions","emptyFunction","requireWeak"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();c("BanzaiODS").setEntitySample("presence",1e-4);var h=babelHelpers["extends"]({},c("AvailableListConstants"),c("ArbiterMixin")),i=/\D/;h.subscribe([c("AvailableListConstants").ON_AVAILABILITY_CHANGED,c("AvailableListConstants").ON_UPDATE_ERROR],function(p,q){c("Arbiter").inform(p,q)});c("PresenceStatus").subscribe("change",c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED)},0));var j=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED})},0);function k(q,r,s,t,u){if(q===c("CurrentUser").getID())return;var v=c("PresenceStatus").set(q,r,s,t,u);if(v){var w=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED,q);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED,id:q})},0);w()}}function l(q){var r=q.payload.availability||{};for(var s in r)k(s&&s.toString(),r[s].a,true,"mercury_tabs",r[s].c)}function m(q){if(!q||q==="0"||i.test(q)){c("ChatReliabilityInstrumentation").logERROR("bad id for available list: "+q);return}new(c("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({target_id:q}).setHandler(l).setErrorHandler(c("emptyFunction")).setAllowCrossPageTransition(true).send()}function n(q,r){r.chat_config=c("ChatConfig").getDebugInfo();r.available_list_debug_info={count:c("PresenceStatus").getOnlineIDs().length}}var o=undefined;try{o=new(c("ChatproxyPresence"))(function(event){h.inform(event)});o.subscribe()}catch(p){c("ErrorUtils").reportError&&c("ErrorUtils").reportError(p,false);c("ChatReliabilityInstrumentation").logERROR(p.getMessage())}Object.assign(h,{getChatproxyPresenceObject:function q(){return o},get:function q(r){return c("PresenceStatus").get(r)},updateForID:function q(r){if(c("ChatConfig").get("presence_page_green_dot_sub")&&!c("FBIDCheck").isUser_deprecated(r))return;m(r);if(c("PresencePrivacy").getVisibility()==c("PresencePrivacy").ONLINE)c("Run").onAfterLoad(function(){return c("Bootloader").loadModules(["ChannelManager","ChannelTransport"],function(s,t){s.startChannelManager();t.sendAdditionalBuddyRequest(s.getCompleteConfig(),r)},"AvailableList")})},getWebChatNotification:function q(){return o&&o.getWebChatNotification()},isReady:function q(){return!!o},set:function q(r,s,t,u){k(r,s,true,t,u)}});c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,n);c("PresencePrivacy").subscribe(["privacy-changed","privacy-availability-changed","privacy-user-presence-response"],j);c("requireWeak")("ChannelConnection",function(q){return q.subscribe([q.CONNECTED,q.RECONNECTING,q.SHUTDOWN,q.MUTE_WARNING,q.UNMUTE_WARNING],j)});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("buddylist_overlay"),function(q,r){var s={},t=r.obj.overlay;for(var u in t){h.set(u,t[u].a,t[u].s||"channel",t[u].vc);if(t[u].la)s[u]=t[u].la}c("LastActiveTimes").update(s)});c("Arbiter").subscribe([c("ChannelConstants").getArbiterType("typ"),c("ChannelConstants").getArbiterType("ttyp")],function(q,r){__p&&__p();var s=r.obj;if(s.st===c("TypingStates").TYPING){var t=s.from;if(c("ChatVisibility").isOnline()){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check_typing");var u=c("PresenceStatus").get(t);if(u!=c("AvailableListConstants").ACTIVE){var v=c("LastActiveTimes").get(t)*1e3,w=c("ServerTime").get();if(!v)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence_typing");else if(w-v>5*60*1e3){var x="stale_presence_typing",y=w-v;if(y<10*60*1e3)x+="600";else if(y<60*60*1e3)x+="3600";c("BanzaiODS").bumpEntityKey("presence",x)}}}h.set(t&&t.toString(),c("AvailableListConstants").ACTIVE,"channel-typing")}});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("messaging"),function(q,r){__p&&__p();if(!c("ChatVisibility").isOnline())return;var s=r.obj;if(s.message&&s.message.timestamp&&s.message.sender_fbid){var t=c("ServerTime").get(),u=s.message.timestamp;if(t-u<2*60*1e3){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check");var v=s.message.sender_fbid,w=c("PresenceStatus").get(v);if(w==c("AvailableListConstants").ACTIVE)return;var x=c("LastActiveTimes").get(v)*1e3;if(!x)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence");else if(u-x>5*60*1e3){var y="stale_presence",z=u-x;if(z<10*60*1e3)y+="600";else if(z<60*60*1e3)y+="3600";c("BanzaiODS").bumpEntityKey("presence",y)}}}});f.exports=h}),null);
__d("ChatSidebarActionTypes",["keyMirror"],(function a(b,c,d,e,f,g){"use strict";f.exports=c("keyMirror")({INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarHideReason",[],(function a(b,c,d,e,f,g){var h=Object.freeze({VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2});f.exports=h}),null);
__d("ChatSidebarStore",["ChatDispatcher","ChatOptionsInitialData","ChatSidebarActionTypes","FluxStore","performanceAbsoluteNow"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("FluxStore"));i=h&&h.prototype;function j(){i.constructor.call(this,c("ChatDispatcher"));this.$ChatSidebarStore2={initialized:false,initTime:c("performanceAbsoluteNow")(),loaded:false,enabled:!!c("ChatOptionsInitialData").sidebar_mode,visible:null};this.$ChatSidebarStore1={}}j.prototype.__onDispatch=function(k){__p&&__p();var l=k.type;this.$ChatSidebarStore1=babelHelpers["extends"]({},this.$ChatSidebarStore2);switch(l){case c("ChatSidebarActionTypes").INIT:if(!this.$ChatSidebarStore1.initialized)this.$ChatSidebarStore2.initTime=c("performanceAbsoluteNow")();this.$ChatSidebarStore2.initialized=true;break;case c("ChatSidebarActionTypes").LOADED:this.$ChatSidebarStore2.loaded=true;break;case c("ChatSidebarActionTypes").SHOW:this.$ChatSidebarStore2.visible=k.sidebarType;break;case c("ChatSidebarActionTypes").SET_ENABLED:this.$ChatSidebarStore2.enabled=k.enabled;this.$ChatSidebarStore2.visible=k.sidebarType;break}for(var m in this.$ChatSidebarStore2)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore2,m))if(this.$ChatSidebarStore2[m]!==this.$ChatSidebarStore1[m]){this.__emitChange();break}};j.prototype.getPrevState=function(){return this.$ChatSidebarStore1};j.prototype.getState=function(){return this.$ChatSidebarStore2};j.prototype.isInitialized=function(){return this.$ChatSidebarStore2.initialized};j.prototype.isLoaded=function(){return this.$ChatSidebarStore2.loaded};j.prototype.isEnabled=function(){return this.$ChatSidebarStore2.enabled};j.prototype.getInitTime=function(){return this.$ChatSidebarStore2.initTime};j.prototype.getVisibleType=function(){return this.$ChatSidebarStore2.visible};f.exports=new j()}),null);
__d("ChatProfileStore",["ChatSidebarPreloadStore"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={},i={init:function j(){c("ChatSidebarPreloadStore").onLoaded(function(k){var l=k.profiles,m=k.nearby;return l.filter(function(n){return!m||m.indexOf(n.id)===-1}).forEach(function(n){var o=new Date(),p=n.birthdate&&o.getDate()===n.birthdate.day&&o.getMonth()+1===n.birthdate.month,q=n.profile_picture&&n.profile_picture.uri?n.profile_picture.uri:null;h[n.id]={id:n.id,is_birthday:p,thumbSrc:q,name:n.name,is_messenger_only:!!n.is_messenger_only}})})},get:function j(k){return h[k]}};f.exports=i}),null);
__d("OrderedFriendsList",["AvailableListConstants","ChatProfileStore","ChatSidebarPreloadStore","MercuryIDs","PresenceStatus","SearchableEntry","ShortProfiles","WorkModeConfig","createArrayFromMixed","isValidUniqueID"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i={},j=[],k={};function l(r){r=String(r);return c("MercuryIDs").isValid(r)?r:c("MercuryIDs").getParticipantIDFromUserID(r)}function m(r,s){var t=c("createArrayFromMixed")(r);s(t.filter(function(u){var v=c("ShortProfiles").getNow(u);return!v||p(v)||v.is_nonfriend_messenger_contact}))}function n(r){h=[];var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(c("PresenceStatus").get(u)==v){h[s]=u;i[u]=s++}})}function o(r){var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(v==c("AvailableListConstants").ACTIVE){j[s]=u;k[u]=s++}})}function p(r){return r.type==="friend"||c("WorkModeConfig").is_work_user&&r.type==="fb4c"}var q={contains:function r(s){return s in i},getList:function r(s){if(h&&h.length){m(h,s);return}c("ChatSidebarPreloadStore").onLoaded(function(t){var u=t.buddies;n(u);m(h,s)})},getSearchableEntries:function r(s,t,u){__p&&__p();q.getList(function(v){__p&&__p();c("ChatSidebarPreloadStore").onLoaded(function(w){var x=w.groups;c("ShortProfiles").getMulti(v.slice(0,s),function(y){var z=[];for(var A in y)z.push(q.normalizeProfileEntry(y[A],A));var B=t?x.map(q.normalizeThreadEntry):[];u(z.concat(B).filter(function(C){return!!C}).sort(function(C,D){return C.getOrder()-D.getOrder()}))})})})},normalizeProfileEntry:function r(s,t){var u=s.searchTokens||[],v=s.name,w=null;return new(c("SearchableEntry"))({uniqueID:s.id||t,keywordString:u.join(" "),order:q.getRank(s.id||t),photo:s.thumbSrc,title:v,subtitle:w,type:s.type,uri:s.uri,auxiliaryData:{isMessengerUser:s.is_messenger_user}})},normalizeThreadEntry:function r(s,t){__p&&__p();var u=s.mercury_thread,v=s.participants_to_render.map(function(B){return babelHelpers["extends"]({},B,{id:l(B.id)})});u.participants=u.participants.map(l);var w=s.text,x=null;if(!w)w=u.name;var y=v.map(function(B){return B.name}),z=y.join(", ");if(!w)w=z;else x=z;var A=s.uid;if(!w||!c("isValidUniqueID")(A))return null;return new(c("SearchableEntry"))({uniqueID:A,order:t,photo:u.image_src,title:w,subtitle:x,type:"thread",auxiliaryData:{participantsToRender:v,tooltipContent:y.join("\n"),thread:u}})},getRank:function r(s){if(s in i)return i[s];return h?h.length:0},getActiveList:function r(s){if(j.length>0){s(j);return}q.getList(function(t){return s(t)})},getActiveRank:function r(s){return s in k?k[s]:q.getRank(s)}};(function(){c("ChatSidebarPreloadStore").onLoaded(function(r){var s=r.buddies,t=r.shortProfiles;c("ShortProfiles").setMulti(t);o(s);n(s)});c("ChatProfileStore").init()})();f.exports=q}),null);
__d("SidebarType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("ChatSidebarVisibility",["ChatConfig","ChatSidebarHideReason","ChatSidebarStore","OrderedFriendsList","SidebarType","getViewportDimensions","gkx"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("ChatConfig").get("sidebar.min_friends"),i=c("ChatConfig").get("sidebar.minimum_width"),j={getViewport:function k(){return c("gkx")("AT4gz_bRY5sNyXC9w4Akayj0OxvthyCO40TL1o3mvHk46uC52cZoFYJtJRK1uwlf9JMyhc21L_1vGUfFxZI19a9hOgbL7cH2dTTH2gcs-MFRwA")?c("getViewportDimensions")():c("getViewportDimensions").withoutScrollbars()},shouldShowSidebar:function k(l,m){j.shouldShowSidebarIgnoreEnabled(l,function(n,o){var p=c("ChatSidebarStore").isEnabled();m(n&&p,p?o:o.concat([c("ChatSidebarHideReason").NOT_ENABLED]))})},shouldShowSidebarIgnoreEnabled:function k(l,m){__p&&__p();c("OrderedFriendsList").getActiveList(function(n){__p&&__p();var o=l||j.getViewport(),p=o.width>i,q=n.length<h,r=true,s=[];if(!p){r=false;s.push(c("ChatSidebarHideReason").VIEWPORT_INCAPABLE)}if(q){r=false;s.push(c("ChatSidebarHideReason").LOW_FRIEND_COUNT)}m(r,s)})},isSidebarVisible:function k(){return c("ChatSidebarStore").getVisibleType()===c("SidebarType").SIDEBAR},isBuddyListVisible:function k(){return c("ChatSidebarStore").getVisibleType()===c("SidebarType").BUDDYLIST}};f.exports=j}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarVisibility","SidebarType"],(function a(b,c,d,e,f,g){"use strict";var h={init:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").INIT})},loaded:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").LOADED})},disable:function i(){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SET_ENABLED,enabled:false,sidebarType:c("SidebarType").BUDDYLIST})},enable:function i(j){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SET_ENABLED,enabled:true,sidebarType:j})},show:function i(j){c("ChatDispatcher").dispatch({type:c("ChatSidebarActionTypes").SHOW,sidebarType:j})}};f.exports=h}),null);
__d("ChatOptions",["Arbiter","ChannelConstants","ChatSidebarActions","ChatSidebarVisibility","FBRTCCallBlockingStore","JSLogger","PresenceUtil","SidebarType","ChatOptionsInitialData"],(function a(b,c,d,e,f,g){__p&&__p();var h=c("JSLogger").create("chat_options"),i={};(function(){var k=c("ChatOptionsInitialData");for(var l in k){var m=k[l];if(l==="call_blocked_until")c("FBRTCCallBlockingStore").init(m);else i[l]=!!m}})();var j=Object.assign(new(c("Arbiter"))(),{getSetting:function k(l){return i[l]},setSetting:function k(l,m,n){__p&&__p();if(l==="sidebar_mode"){c("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null,function(o,p){if(m)c("ChatSidebarActions").enable(o?c("SidebarType").SIDEBAR:c("SidebarType").BUDDYLIST);else c("ChatSidebarActions").disable()});return}if(this.getSetting(l)==m)return;if(n){n="from_"+n;h.log(n,{name:l,new_value:m,old_value:this.getSetting(l)})}i[l]=!!m;c("Arbiter").inform("chat/option-changed",{name:l,value:m})}});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("setting"),function(k,l){var m=l.obj;if(m.window_id===c("PresenceUtil").getSessionID())return;j.setSetting(m.setting,!!m.value,"channel")});c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,function(k,l){l.chat_options=i});f.exports=j}),null);
__d("ChatQuietLinks",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function a(b,c,d,e,f,g){__p&&__p();var h={},i={silenceLinks:function m(n){j(n,this.removeEmptyHrefs.bind(this))},nukeLinks:function m(n){j(n,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function m(n){k(n,function(o){return!o||o==="#"})},removeAllHrefs:function m(n){k(n)}};function j(m,n){__p&&__p();var o=!!c("UserAgent_DEPRECATED").chrome(),p=!!c("UserAgent_DEPRECATED").chrome()||c("UserAgent_DEPRECATED").ie()>=9||c("UserAgent_DEPRECATED").firefox()>=4;if(h[c("getOrCreateDOMID")(m)])return;h[c("getOrCreateDOMID")(m)]=true;if(!p)return;if(!o){n&&n(m);return}c("Event").listen(m,"mouseover",function q(r){var s=c("Parent").byTag(r.getTarget(),"a");if(s){var t=s.getAttribute("href");if(l(t)){c("DataStore").set(s,"stashedHref",s.getAttribute("href"));s.removeAttribute("href")}}});c("Event").listen(m,"mouseout",function q(r){var s=c("Parent").byTag(r.getTarget(),"a"),t=s&&c("DataStore").remove(s,"stashedHref");if(l(t))s.setAttribute("href",t)});c("Event").listen(m,"mousedown",function(q){if(!q.isDefaultRequested())return true;var r=c("Parent").byTag(q.getTarget(),"a"),s=r&&c("DataStore").get(r,"stashedHref");if(l(s))r.setAttribute("href",s)})}function k(m,n){var o=c("DOM").scry(m,"a");if(n)o=o.filter(function(p){return n(p.getAttribute("href"))});o.forEach(function(p){p.removeAttribute("href");if(!p.tabIndex)p.setAttribute("tabindex",0)})}function l(m){return m&&m!=="#"}f.exports=i}),null);
__d("Dock",["csx","Event","shield","Arbiter","ArbiterMixin","BlueBar","ChatQuietLinks","CSS","DataStore","DOM","Parent","Scroll","Style","Toggler","Vector","emptyFunction"],(function a(b,c,d,e,f,g,h){__p&&__p();function i(){}Object.assign(i,c("ArbiterMixin"),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function j(k){__p&&__p();this.init=c("emptyFunction");this.rootEl=k;this.calculateViewportDimensions();c("ChatQuietLinks").removeEmptyHrefs(this.rootEl);c("Event").listen(k,"click",this._onClick.bind(this));c("Event").listen(window,"resize",this._onWindowResize.bind(this));c("Toggler").subscribe(["show","hide"],function(l,m){__p&&__p();var n=m.getActive();if(!c("DOM").contains(k,n))return;if(c("CSS").hasClass(n,"fbNub")){this.notifyNub(n,l);if(l==="show")this._resizeNubFlyout(n)}else{var o=c("Parent").byClass(n,"fbNubFlyout");if(o)c("CSS").conditionClass(o,"menuOpened",l==="show")}}.bind(this));this.inform("init",{},c("Arbiter").BEHAVIOR_PERSISTENT)},calculateViewportDimensions:function j(){return this.viewportDimensions=c("Vector").getViewportDimensions()},getFlyoutHeightOffset:function j(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+c("Vector").getElementDimensions(this.rootEl).y;var k=c("BlueBar").getBar();if(k){var l=c("Style").isFixed(k)?"viewport":"document";this.flyoutHeightOffset+=c("Vector").getElementPosition(k,l).y+c("Vector").getElementDimensions(k).y}return this.flyoutHeightOffset},toggle:function j(k){var l=this._findFlyout(k);if(!l)return;this.subscribe("init",function(){c("Toggler").toggle(k)})},show:function j(k){this.subscribe("init",function(){c("Toggler").show(k)})},showNub:function j(k){c("CSS").show(k)},hide:function j(k){this.subscribe("init",function(){var l=c("Toggler").getInstance(k);c("DOM").contains(k,l.getActive())&&l.hide()})},hideNub:function j(k){c("CSS").hide(k);this.hide(k)},setUseMaxHeight:function j(k,l){c("CSS").conditionClass(k,"maxHeight",l!==false);this._resizeNubFlyout(k)},_resizeNubFlyout:function j(k){__p&&__p();var l=this._findFlyout(k);if(!l||c("CSS").hasClass(k,"placeholder")||!(c("CSS").hasClass(k,"openToggler")||c("CSS").hasClass(k,"opened")))return;var m=c("DOM").find(l,"div.fbNubFlyoutOuter"),n=c("DOM").find(m,"div.fbNubFlyoutInner"),o=c("DOM").find(n,"div.fbNubFlyoutBody"),p=c("CSS").hasClass(k,"canBeCompactTab"),q=c("Scroll").getTop(o),r=o.offsetHeight;c("Style").set(o,"height","auto");var s=c("Vector").getElementDimensions(l),t=c("Vector").getElementDimensions(o),u=this.getMaxFlyoutHeight(k);c("Style").set(l,"max-height",u+"px");c("Style").set(m,"max-height",u+"px");s=c("Vector").getElementDimensions(l);var v=c("Vector").getElementDimensions(n),w=v.y-t.y,x=s.y-w,y=parseInt(o.style.height||o.clientHeight,10),z=x!==y;if(s.y>w&&z&&!p)c("Style").set(o,"height",x+"px");c("CSS").removeClass(l,"swapDirection");var A=c("Vector").getElementPosition(l).x;c("CSS").conditionClass(l,"swapDirection",function(){if(A<0)return true;if(!s||!this.viewportDimensions)return false;return A+s.x>this.viewportDimensions.x}.bind(this)());if(z&&q+r>=t.y)c("Scroll").setTop(o,o.scrollHeight);else c("Scroll").setTop(o,q);this.notifyNub(k,"resize")},getMaxFlyoutHeight:function j(k){var l=this._findFlyout(k),m=c("Vector").getElementPosition(l,"viewport"),n=c("Vector").getElementDimensions(l);if(!this.viewportDimensions||!m)return 0;var o=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-m.y-n.y);return Math.max(o,0)},resizeAllFlyouts:function j(){var k=this._getAllNubs(),l=k.length;while(l--)this._resizeNubFlyout(k[l])},_getAllNubs:function j(){var k=c("DOM").scry(this.rootEl,"div._50-v.openToggler:not(._s0f)");return k.concat(c("DOM").scry(this.rootEl,"div._50-v.opened:not(._s0f)"))},_onClick:function j(event){__p&&__p();var k=event.getTarget(),l=c("Parent").byClass(k,"fbNub");if(l){if(c("Parent").byClass(k,"fbNubFlyoutTitlebar")){var m=c("Parent").byTag(k,"a"),n=k.nodeName=="INPUT"&&k.getAttribute("type")=="submit";if(!m&&!n){this.hide(l);return false}}this.notifyNub(l,"click")}},_onWindowResize:function j(event){this.calculateViewportDimensions();this.resizeAllFlyouts()},_findFlyout:function j(k){return c("CSS").hasClass(k,"fbNubFlyout")?k:c("DOM").scry(k,"div.fbNubFlyout")[0]||null},registerNubController:function j(k,l){c("DataStore").set(k,"dock:nub:controller",l);l.subscribe("nub/button/content-changed",c("shield")(this.inform,this,"resize",k));l.subscribe("nub/flyout/content-changed",c("shield")(this._resizeNubFlyout,this,k))},unregisterNubController:function j(k){c("DataStore").remove(k,"dock:nub:controller")},notifyNub:function j(k,l,m){var n=c("DataStore").get(k,"dock:nub:controller");n&&n.inform(l,m)}});f.exports=b.Dock||i}),null);