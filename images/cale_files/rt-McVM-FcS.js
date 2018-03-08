if (self.CavalryLogger) { CavalryLogger.start_js(["9LPnF"]); }

__d("MessengerConversationContainer.react",["Bootloader","immutable","ImmutableObject","MercuryBlockedParticipants.bs","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","MercuryThreadActions","MessagingTagConstants","MessengerActions","MessengerBlockedGroupThreadWarningDialogReact.bs","MessengerConfig","MessengerConversation.react","MessengerDialogs.bs","MessengerHotLikePreviewEvents","MessengerIgnoredGroupThreadWarningDialogReact.bs","MessengerLeaveGroupAction","MessengerState.bs","MessengerParticipants.bs","React","SubscriptionsHandler","MessengerServerErrorDialogReact.bs","gkx"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("MercuryBlockedParticipants.bs").get(),k=c("MercuryThreadActions").get(),l=c("MessengerServerErrorDialogReact.bs").jsComponent,m=c("React").PropTypes,n=c("MessengerBlockedGroupThreadWarningDialogReact.bs").jsComponent,o=c("MessengerIgnoredGroupThreadWarningDialogReact.bs").jsComponent;h=babelHelpers.inherits(p,c("React").PureComponent);i=h&&h.prototype;function p(){__p&&__p();var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=i.constructor).call.apply(q,[this].concat(t)),this.state={isLoaded:false,isLoading:true,messages:c("immutable").List()},this.$MessengerConversationContainer2=undefined,this.$MessengerConversationContainer3=false,this.$MessengerConversationContainer4=undefined,this.$MessengerConversationContainer5=undefined,this.$MessengerConversationContainer6=undefined,this.$MessengerConversationContainer7=false,this.$MessengerConversationContainer15=function(){var v=this.props.thread;if(v==null)return;c("MessengerBlockedGroupThreadWarningDialogReact.bs").setWantsToSee(v.thread_id,true)}.bind(this),this.$MessengerConversationContainer18=function(){var v=this.props.thread;if(v==null)return;c("MessengerIgnoredGroupThreadWarningDialogReact.bs").setWantsToSee(v.thread_id,true)}.bind(this),this.$MessengerConversationContainer16=function(v){var w=this.props.thread;if(w==null)return;c("MessengerLeaveGroupAction").leaveGroup(w,this.props.viewer);this.$MessengerConversationContainer20(v)}.bind(this),this.$MessengerConversationContainer19=function(v){var w=this.props.thread;if(w==null)return;var x=w.thread_id;k.changeFolder(x,c("MessagingTagConstants").other);c("Bootloader").loadModules(["IgnoreMessagesTypedLogger","IgnoreMessagesLoggingEvent","IgnoreMessagesPlatforms"],function(y,z,A){new y().setEvent(z.IGNORE_CONFIRMED).setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(x)).setPlatform(A.MESSENGERDOTCOM).log()},"MessengerConversationContainer.react");this.$MessengerConversationContainer20(v)}.bind(this),this.$MessengerConversationContainer17=function(v){this.$MessengerConversationContainer20(v)}.bind(this),this.$MessengerConversationContainer13=function(){if(this.state.isLoading||this.state.isLoaded)return;this.setState({isLoading:true});if(!this.$MessengerConversationContainer1.fetchMoreMessages())this.setState({isLoading:false,isLoaded:true})}.bind(this),r}p.prototype.componentWillUnmount=function(){this.$MessengerConversationContainer2&&this.$MessengerConversationContainer2.release();clearTimeout(this.$MessengerConversationContainer6)};p.prototype.componentDidMount=function(){this.$MessengerConversationContainer8(this.props.threadID);if(this.$MessengerConversationContainer9())this.$MessengerConversationContainer10();else if(this.$MessengerConversationContainer11())this.$MessengerConversationContainer12()};p.prototype.componentDidUpdate=function(q){var r=this.props.threadID!==q.threadID;if(r)if(this.$MessengerConversationContainer9())this.$MessengerConversationContainer10(q.threadID);else if(this.$MessengerConversationContainer11())this.$MessengerConversationContainer12(q.threadID)};p.prototype.componentWillReceiveProps=function(q){if(this.props.threadID!==q.threadID){this.setState({isLoading:true,messages:c("immutable").List()});this.$MessengerConversationContainer8(q.threadID)}};p.prototype.render=function(){var q=this.state.messages,r=q.some(function(s){return s.log_message_type===c("MercuryLogMessageType").SERVER_ERROR});if(c("MessengerConfig").ErrorDialog&&r&&!this.$MessengerConversationContainer7)c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(l,{onMount:function(){return this.$MessengerConversationContainer7=true}.bind(this)})}.bind(this));return c("React").createElement(c("MessengerConversation.react"),{className:this.props.className,contact:this.props.contact,deliveryReceipts:this.props.deliveryReceipts,fetchMessages:this.$MessengerConversationContainer13,isCanonical:c("MercuryIDs").isCanonical(this.props.threadID),isLoading:this.state.isLoading,isLoaded:this.state.isLoaded,messages:this.state.messages,onRead:this.props.onMarkRead,onVoiceClipCreate:this.props.onVoiceClipCreate,participants:this.props.participants,ref:"conversation",thread:this.props.thread,threadID:this.props.threadID,viewer:this.props.viewer})};p.prototype.handleResize=function(){this.refs.conversation.handleResize()};p.prototype.isScrolledToBottom=function(){return!!(this.refs.conversation&&this.refs.conversation.isScrolledToBottom())};p.prototype.$MessengerConversationContainer9=function(){__p&&__p();var q=this.props.thread;if(q==null)return false;var r=q.thread_id;if(!this.$MessengerConversationContainer14())return false;if(!j.isPresentInGroupThread(q))return false;var s=c("MessengerBlockedGroupThreadWarningDialogReact.bs").getWantsToSee(r);if(s)return false;return true};p.prototype.$MessengerConversationContainer11=function(){__p&&__p();var q=this.props.thread;if(q==null)return false;var r=q.thread_id;if(!this.$MessengerConversationContainer14())return false;if(q.folder!=="inbox")return false;if(!c("MessengerParticipants.bs").areParticipantsInGroupThread(c("MessengerState.bs").fbid(this.props.messengerState),c("MessengerState.bs").ignoredIds(this.props.messengerState),q))return false;var s=c("MessengerIgnoredGroupThreadWarningDialogReact.bs").getWantsToSee(r);if(s)return false;return c("gkx")("AT4mycXtTvfXJMAqrd_BSmI0_EEB-8pOs_AaNI2VArui1ThGLeffrrAudIg_2uctK6Ji6Zom3olu5BpcCU5_nD4U")};p.prototype.$MessengerConversationContainer14=function(){var q=this.props.thread;if(q==null)return false;if(c("MercuryIDs").isCanonical(this.props.threadID))return false;if(!q.is_subscribed)return false;return true};p.prototype.$MessengerConversationContainer10=function(q){c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(n,{onSee:this.$MessengerConversationContainer15,onLeave:this.$MessengerConversationContainer16,onCancel:this.$MessengerConversationContainer17,prevThreadID:q})}.bind(this))};p.prototype.$MessengerConversationContainer12=function(q){c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(o,{onSee:this.$MessengerConversationContainer18,onIgnore:this.$MessengerConversationContainer19,onCancel:this.$MessengerConversationContainer17,prevThreadID:q,threadID:c("MercuryIDs").getThreadFBIDFromThreadID(this.props.threadID)})}.bind(this))};p.prototype.$MessengerConversationContainer20=function(q){if(q==null)c("MessengerActions").selectThread(null);c("MessengerActions").selectThread(q)};p.prototype.$MessengerConversationContainer8=function(q){__p&&__p();if(!q)return;this.setState({isLoaded:false});this.$MessengerConversationContainer1&&this.$MessengerConversationContainer1.destroy();this.$MessengerConversationContainer7=false;this.$MessengerConversationContainer1=new(c("MercuryMessageStore"))(q,c("MessengerConfig").MessageLoadCount);clearTimeout(this.$MessengerConversationContainer6);this.$MessengerConversationContainer6=setTimeout(function(){if(this.props.thread&&this.props.thread.message_count<1)this.setState({isLoaded:true,isLoading:false})}.bind(this),6e3);this.$MessengerConversationContainer2&&this.$MessengerConversationContainer2.release();this.$MessengerConversationContainer2=new(c("SubscriptionsHandler"))();this.$MessengerConversationContainer2.addSubscriptions(this.$MessengerConversationContainer1.subscribe(function(r){this.setState({messages:this.$MessengerConversationContainer21(c("immutable").List(r.messages)),isLoading:false})}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").START,function(r){this.$MessengerConversationContainer3=true;this.$MessengerConversationContainer4=r;this.setState({messages:this.$MessengerConversationContainer21(this.state.messages)});clearInterval(this.$MessengerConversationContainer5);this.$MessengerConversationContainer5=setInterval(this.refs.conversation.scrollToBottom,50)}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").FINISH_ANIMATION,function(q){clearInterval(this.$MessengerConversationContainer5)}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION,function(q){clearInterval(this.$MessengerConversationContainer5)}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").STOP,function(){this.$MessengerConversationContainer3=false;this.$MessengerConversationContainer4=null}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").STOP_EMOJI,function(){this.$MessengerConversationContainer3=false;this.$MessengerConversationContainer4=null}.bind(this)),c("MessengerHotLikePreviewEvents").addListener(c("MessengerHotLikePreviewEvents").REMOVE,function(){clearInterval(this.$MessengerConversationContainer5);this.$MessengerConversationContainer3=false;this.setState({messages:this.$MessengerConversationContainer21(this.state.messages)})}.bind(this)))};p.prototype.$MessengerConversationContainer21=function(q){if(this.$MessengerConversationContainer3)q=q.set(q.size,this.$MessengerConversationContainer4);else{q=q.filterNot(function(r){return r.is_like_preview});this.$MessengerConversationContainer4=null}return q};p.propTypes={contact:m.instanceOf(c("ImmutableObject")),deliveryReceipts:m.object,messengerState:m.any,onMarkRead:m.func.isRequired,onVoiceClipCreate:m.func,participants:m.instanceOf(c("immutable").Map),thread:m.object,threadID:m.string.isRequired,viewer:m.string.isRequired};f.exports=p}),null);