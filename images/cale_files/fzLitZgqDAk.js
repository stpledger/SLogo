if (self.CavalryLogger) { CavalryLogger.start_js(["FTPqa"]); }

__d("MessengerBubble.react",["cx","fbt","invariant","EmojiOnlyMessage.react","immutable","ImmutableObject","MercuryIDs","MercuryMessageBody.react","MessengerCodeBubble.react","MercuryMessageRenderLocations","MessengerActions","MessengerContactActions.bs","MessengerDecorator","MessengerSupportedEmojiUtils","React","SimpleXUIDialog","joinClasses","shouldNotRenderSegoe"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("MessengerContactActions.bs").actions,n=c("React").PropTypes;k=babelHelpers.inherits(o,c("React").PureComponent);l=k&&k.prototype;function o(){__p&&__p();var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=l.constructor).call.apply(p,[this].concat(s)),this.state={emojis:undefined},this.$MessengerBubble1=function(u,v,w){__p&&__p();switch(u){case m.MESSAGE:this.$MessengerBubble2(v,w);break;case m.PROFILE:var x=c("MercuryIDs").getParticipantIDFromUserID(v.id),y=this.props.participants&&this.props.participants.get(x);if(y&&y.href)window.open(y.href);else this.$MessengerBubble2(v,w);break;case m.FREE_CALL:e(["FBRTCCore","MNRTCCallabilityStore"],function(z,A){var B=v.id;B||j(0);if(z.isAvailableForWebrtcCalling(B)||A.isCallable(B))z.startOutgoingCall(B,"messenger_dot_com",false);else c("SimpleXUIDialog").show(i._("{firstname} can't be reached right now.",[i.param("firstname",v.contactName)]),i._("Can't Connect Call"))});break}}.bind(this),q}o.prototype.componentDidMount=function(){if(!this.props.emojis){var p=this.props.body||"",q=c("MessengerSupportedEmojiUtils").getEmojiOnlyContents(p);if(q&&q.length)this.setState({emojis:q})}};o.prototype.render=function(){__p&&__p();var p=false,q=null;if(this.state.emojis)q=c("React").createElement(c("EmojiOnlyMessage.react"),{contents:this.state.emojis});else{p=true;q=c("React").createElement(c("MercuryMessageBody.react"),{ref:this.props.bodyRef,body:this.props.body,className:"_3oh-"+(c("shouldNotRenderSegoe")(this.props.body||"")?" _2por":"")+" _58nk",threadCustomColor:this.props.threadCustomColor,isFromViewer:this.props.isFromViewer,ranges:this.props.ranges,metaRanges:this.props.metaRanges,plainText:this.props.plainText,threadID:this.props.threadID,customLike:this.props.customLike,onContactSelect:this.$MessengerBubble1,renderLocation:c("MercuryMessageRenderLocations").MESSENGER})}var r=[],s=[],t=this.props.message,u=!!this.props.isFromViewer;if(t&&!this.props.excludeAfterDecorators){c("MessengerDecorator").getInsideDecorators().concat(c("MessengerDecorator").getAfterDecorators()).forEach(function(x){if(x.check(t)){r.push(x.render(t,u,this.props));s.push(x.getAdditionalClassNames())}}.bind(this));c("MessengerDecorator").getBeforeDecorators().forEach(function(x){if(x.check(t))s.push(x.getAdditionalClassNames())})}var v=s.join(" "),w=null;if(this.props.body)if(this.props.containsCode)w=c("React").createElement(c("MessengerCodeBubble.react"),babelHelpers["extends"]({},this.props,{attachments:this.props.attachments,body:this.props.body,customColor:this.props.customColor,isFromViewer:this.props.isFromViewer,ranges:this.props.ranges||[],threadID:this.props.threadID||""}));else w=c("React").createElement("div",{className:"_aok"},q,this.props.attachments);return c("React").createElement("div",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(v,this.props.className,(!this.props.containsCode?"_hh7":"")+(!this.props.isFromViewer&&this.props.containsCode?" _65sp":"")+(this.props.isFromViewer&&this.props.containsCode?" _65sq":"")+(!this.props.containsCode?" _s1-":"")+(!this.props.containsCode&&!this.props.notBubblish?" _52mr":"")+(!this.props.containsCode&&this.props.isP2PAttachment?" _4z55":"")+(!this.props.containsCode&&!!this.state.emojis?" _2f5r":"")+(!this.props.containsCode&&!!this.state.emojis?" _581a":"")+(this.props.isFromViewer&&!this.state.emojis&&!this.props.containsCode?" _43by":"")+(!this.props.containsCode&&p?" _3oh-":""))}),w,!w?q:null,!w?this.props.attachments:null,r)};o.prototype.$MessengerBubble2=function(p,q){q&&q.preventDefault();var r=c("MercuryIDs").getThreadIDFromUserID(p.id);r&&c("MessengerActions").selectThread(r)};o.propTypes={attachments:n.instanceOf(c("immutable").List),body:n.string,customColor:n.string,customLike:n.object,excludeAfterDecorators:n.bool,isFromViewer:n.bool,message:n.instanceOf(c("ImmutableObject")),metaRanges:n.array,notBubblish:n.bool,onUnwrap:n.func,participants:n.object,plainText:n.bool,ranges:n.array,threadID:n.string,threadCustomColor:n.string};f.exports=o}),null);