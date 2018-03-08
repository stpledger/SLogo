if (self.CavalryLogger) { CavalryLogger.start_js(["WL\/bR"]); }

__d("MessengerNotificationBanner.react",["cx","ix","AsyncRequest","CurrentUser","Image.react","MessengerButtonReact.bs","MessengerDesktopNotifications","MessengerDotComPromotionActionURL","MessengerSettingsActions","MessengerSignals.bs","React","XMessengerDotComNUXLoggingController","XQuickPromotionSimpleLoggingController","goURI"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("MessengerButtonReact.bs").jsComponent,m=c("React").PropTypes,n=i("86832"),o=i("86833");j=babelHelpers.inherits(p,c("React").Component);k=j&&j.prototype;function p(){__p&&__p();var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=k.constructor).call.apply(q,[this].concat(t)),this.state={bannerClosed:false},this.$MessengerNotificationBanner3=function(){return c("React").createElement(l,{className:"_2cim",label:this.props.primaryActionTitle,onClick:this.$MessengerNotificationBanner4,type:"primary"})}.bind(this),this.$MessengerNotificationBanner4=function(){this.$MessengerNotificationBanner5();if(this.props.promotionID){new(c("AsyncRequest"))().setURI(c("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",this.props.promotionID).setEnum("qp_action","primary").setStringToStringMap("qp_instance_log_data",this.props.instanceLogData).getURI()).send();if(this.props.primaryActionURI===c("MessengerDotComPromotionActionURL").turn_on_notification)c("MessengerSettingsActions").changeDesktopNotifs(true);else window.open(this.props.primaryActionURI)}else if(this.props.primaryActionURI)c("goURI")(this.props.primaryActionURI,true)}.bind(this),this.$MessengerNotificationBanner2=function(){this.$MessengerNotificationBanner5();if(this.props.promotionID)new(c("AsyncRequest"))().setURI(c("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",this.props.promotionID).setEnum("qp_action","dismiss").setStringToStringMap("qp_instance_log_data",this.props.instanceLogData).getURI()).send()}.bind(this),this.$MessengerNotificationBanner5=function(){this.setState({bannerClosed:true},function(){c("MessengerSignals.bs").resize()})}.bind(this),r}p.prototype.componentWillReceiveProps=function(q){if(!q.promotionID)this.setState({bannerClosed:false})};p.prototype.componentDidMount=function(){if(this.$MessengerNotificationBanner1()||!this.props.promotionID||c("CurrentUser").isWorkUser())return;new(c("AsyncRequest"))().setURI(c("XMessengerDotComNUXLoggingController").getURIBuilder().setInt("promotion_id",this.props.promotionID).setStringToStringMap("instance_log_data",this.props.instanceLogData).getURI()).send()};p.prototype.componentDidUpdate=function(){window.dispatchEvent(new Event("resize"))};p.prototype.render=function(){if(this.$MessengerNotificationBanner1())return null;return c("React").createElement("div",{className:"_2cij"},c("React").createElement(c("Image.react"),{className:"_2cik",onClick:this.$MessengerNotificationBanner2,src:n}),c("React").createElement(c("Image.react"),{className:"_2cil",src:o}),this.props.promotionContent," ",this.$MessengerNotificationBanner3())};p.prototype.$MessengerNotificationBanner1=function(){return this.state.bannerClosed};p.propTypes={promotionID:m.number,promotionContent:m.string,primaryActionTitle:m.string,primaryActionURI:m.string,instanceLogData:m.object};f.exports=p}),null);