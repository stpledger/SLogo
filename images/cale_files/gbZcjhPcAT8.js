if (self.CavalryLogger) { CavalryLogger.start_js(["slqiw"]); }

__d("MessengerThreadlistMessageRequestsRow.react",["cx","fbt","ix","Image.react","ImmutableObject","LinkWithHiddenURLBar.react","MercuryConfig","MercuryIDs","MercuryParticipants","MessagingTag","MessengerActions","MNAdsLogMessageUtils","React","Keys","intlList","MessengerMessageRequestsTypedLogger","CurrentUser","gkx","shallowEqual"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=50,n=j("86936"),o=c("React").PropTypes;k=babelHelpers.inherits(p,c("React").Component);l=k&&k.prototype;function p(){__p&&__p();var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.$MessengerThreadlistMessageRequestsRow4=function(v){if(this.props.aggregatedThreads.length>0){var w=this.props.aggregatedThreads,x=w.map(function(y){return y.thread_id});c("MessengerActions").selectAggregation(x);this.props.onAggregationClick&&this.props.onAggregationClick(v,w)}else{v.preventDefault();c("MessengerActions").changeFolder(c("MessagingTag").PENDING)}}.bind(this),r}p.prototype.shouldComponentUpdate=function(q){return!c("shallowEqual")(this.props,q)};p.prototype.componentDidUpdate=function(q){if(this.props.isFocused)this.$MessengerThreadlistMessageRequestsRow1&&this.$MessengerThreadlistMessageRequestsRow1.focus&&this.$MessengerThreadlistMessageRequestsRow1.focus()};p.prototype.render=function(){var q=this.props.newMessageRequestThreads.length||this.props.aggregatedThreads.length;if(q===0)return null;var r=this.$MessengerThreadlistMessageRequestsRow2()==0?"_1htf _r0_":"_1htf _5nxb";return c("React").createElement("li",{className:"_5l-3 _1ht1 _2il3 _2kt",ref:function(s){this.$MessengerThreadlistMessageRequestsRow1=s}.bind(this),onKeyPress:this.$MessengerThreadlistMessageRequestsRow3,role:"row",tabIndex:-1},c("React").createElement(c("LinkWithHiddenURLBar.react"),{tabIndex:-1,onAllClicks:this.$MessengerThreadlistMessageRequestsRow4,className:"_1ht5 _5l-3"},c("React").createElement("div",{className:"_5l-3 _1qt3 _5nxe"},c("React").createElement(c("Image.react"),{alt:"",height:m,src:n,width:m}),this.$MessengerThreadlistMessageRequestsRow5()),c("React").createElement("div",{className:"_1qt4 _5l-m"},c("React").createElement("div",{className:"_1qt5 _5l-3"},c("React").createElement("div",{className:"_1ht6 _5nxa"},this.$MessengerThreadlistMessageRequestsRow6())),c("React").createElement("div",{className:"_1qt5 _5l-3"},c("React").createElement("div",{className:r},this.$MessengerThreadlistMessageRequestsRow7())))))};p.prototype.$MessengerThreadlistMessageRequestsRow2=function(){var q=this.props.newMessageRequestThreads.length>0?this.props.newMessageRequestThreads:this.props.aggregatedThreads;if(!c("MercuryConfig").MCMA)return q.length;var r=0;q.forEach(function(s){return s.unread_count!==0?r++:r});return r};p.prototype.$MessengerThreadlistMessageRequestsRow6=function(){var q=this.props.newMessageRequestThreads.length>0?this.props.newMessageRequestThreads:this.props.aggregatedThreads;return c("MercuryConfig").RTCR?i._({"*":"Connection Requests","_1":"Connection Request"},[i.plural(q.length)]):i._({"*":"New Message Requests","_1":"New Message Request"},[i.plural(q.length)])};p.prototype.$MessengerThreadlistMessageRequestsRow5=function(){var q=this.$MessengerThreadlistMessageRequestsRow2();return q==0?null:c("React").createElement("span",{className:"_5nxf"},i._({"*":"{count}"},[i.param("count",q,[0])]))};p.prototype.componentDidMount=function(){var q,r=this;if(this.props.aggregatedThreads&&this.props.aggregatedThreads.length>0)(function(){var s=c("CurrentUser").getID(),t=r.props.aggregatedThreads.map(function(u){return c("MercuryIDs").getThreadKeyfromThreadIDUserID(u.thread_id,s)});new(c("MessengerMessageRequestsTypedLogger"))().setAction("aggregation_unit_impression").setThreadKeyList(t.filter(function(u){return u}).join(", ")).setEntryPoint("inbox_aggregation").setSurface("inbox").setFolderType("pending").log()})()};p.prototype.$MessengerThreadlistMessageRequestsRow8=function(){__p&&__p();var q=this.props.newMessageRequestThreads.length>0?this.props.newMessageRequestThreads:this.props.aggregatedThreads,r=i._({"*":"From people you may know","_1":"From someone you may know"},[i.plural(q.length)]),s=c("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),t=[];for(var u=0,v=0;v<3&&u<q.length;u++){var w=q[u].participants.find(function(y){return y!==s});if(w){var x=c("MercuryParticipants").getOrFetch(w);if(x){v++;t.push(x.name.split(" ")[0])}}}if(!t||t.length==0)return r;if(q.length>0)c("MNAdsLogMessageUtils").logAdsThreadListImpression(q[0]);return q.length-t.length==0?i._("From {name}",[i.param("name",c("intlList")(t,c("intlList").CONJUNCTIONS.NONE))]):i._({"*":"From {name} and {count} more"},[i.param("name",c("intlList")(t,c("intlList").CONJUNCTIONS.NONE)),i.param("count",q.length-t.length,[0])])};p.prototype.$MessengerThreadlistMessageRequestsRow7=function(){__p&&__p();if(c("MercuryConfig").MCMA)return this.$MessengerThreadlistMessageRequestsRow8();var q=this.props.newMessageRequestThreads.length>0?this.props.newMessageRequestThreads:this.props.aggregatedThreads,r=i._({"someone":"From someone you may know","people":"From people you may know"},[i["enum"](q.length===1?"someone":"people",{someone:"someone",people:"people"})]),s=c("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),t=q[0].participants.find(function(v){return v!==s});if(!t)return r;var u=c("MercuryParticipants").getOrFetch(t);if(!u||!u.name)return r;if(q.length>0)c("MNAdsLogMessageUtils").logAdsThreadListImpression(q[0]);return q.length===1?i._("From {name}",[i.param("name",u.name)]):i._({"*":"From {name} and {count} more"},[i.param("name",u.name),i.param("count",q.length-1,[0])])};p.prototype.$MessengerThreadlistMessageRequestsRow9=function(q){q.preventDefault();var r=this.props.newMessageRequestThreads.length>0?this.props.newMessageRequestThreads:this.props.aggregatedThreads;this.props.onFocus(r[0].thread_id)};p.prototype.$MessengerThreadlistMessageRequestsRow3=function(q){q.preventDefault();var r=q.charCode;if(r===c("Keys").RETURN)c("MessengerActions").changeFolder(c("MessagingTag").PENDING)};p.propTypes={onAggregationClick:o.func,isFocused:o.bool,newMessageRequestThreads:o.arrayOf(o.instanceOf(c("ImmutableObject"))).isRequired,aggregatedThreads:o.arrayOf(o.instanceOf(c("ImmutableObject"))),viewer:o.string.isRequired};f.exports=p}),null);