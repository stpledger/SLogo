if (self.CavalryLogger) { CavalryLogger.start_js(["dna0S"]); }

__d("MessengerBotMenuButton.react",["BootloadOnRender.react","ChatFlyoutPlaceholder.react","JSResource","LazyComponent.react","AutoFocusableLink.react","MessengerBotMenuDataFetcher","MessengerBotsWebTypedLogger","MessengerContextualDialog.react","MessengerEnvironment","MNBotsLoggerEvents","React","XUIContextualDialog.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes,k=302,l=280;h=babelHelpers.inherits(m,c("React").Component);i=h&&h.prototype;function m(){__p&&__p();var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.$MessengerBotMenuButton1=false,this.state={flyoutOpen:!!this.props.clicked,isLoading:false,menuItems:null},this.$MessengerBotMenuButton3=function(){this.setState({flyoutOpen:false})}.bind(this),this.$MessengerBotMenuButton7=function(){if(this.state.flyoutOpen)this.$MessengerBotMenuButton3()}.bind(this),this.$MessengerBotMenuButton5=function(){this.$MessengerBotMenuButton1=this.state.flyoutOpen}.bind(this),this.$MessengerBotMenuButton4=function(event){event.stopPropagation();if(this.state.flyoutOpen||this.$MessengerBotMenuButton1)return;if(this.state.menuItems===null){this.setState({isLoading:true});this.$MessengerBotMenuButton2()}this.setState({flyoutOpen:!this.state.flyoutOpen})}.bind(this),o}m.prototype.componentWillMount=function(){if(this.state.flyoutOpen&&this.state.menuItems===null){this.setState({isLoading:true});this.$MessengerBotMenuButton2()}};m.prototype.componentDidMount=function(){new(c("MessengerBotsWebTypedLogger"))().setEvent(c("MNBotsLoggerEvents").BOT_COMPOSER_MENU_ICON_DISPLAYED).setPageID(this.props.pageID).log()};m.prototype.componentWillUnmount=function(){if(this.state.flyoutOpen)this.$MessengerBotMenuButton3()};m.prototype.render=function(){return c("React").createElement("span",null,c("React").createElement(c("AutoFocusableLink.react"),{autoFocus:this.props.autoFocus,className:this.props.className,href:"#",onClick:this.$MessengerBotMenuButton4,onMouseDown:this.$MessengerBotMenuButton5,role:"button",ref:"link"}),this.$MessengerBotMenuButton6())};m.prototype.$MessengerBotMenuButton6=function(){if(!this.state.flyoutOpen)return null;var n=c("MessengerEnvironment").messengerui,o=n?k:l,p=n?c("MessengerContextualDialog.react"):c("XUIContextualDialog.react");return c("React").createElement(p,babelHelpers["extends"]({alignment:this.props.flyoutAlignment,width:o,position:"above",contextRef:function(){return this.refs.link}.bind(this),onBeforeHide:this.$MessengerBotMenuButton7,onBlur:this.$MessengerBotMenuButton3,shown:this.state.flyoutOpen},this.props,{key:"contextualDialog"}),c("React").createElement(c("BootloadOnRender.react"),{component:c("React").createElement(c("LazyComponent.react"),{onEscKeyDown:this.$MessengerBotMenuButton3,shown:this.state.flyoutOpen,isLoading:this.state.isLoading,menuItems:this.state.menuItems,pageID:this.props.pageID,threadID:this.props.threadID,onClick:this.$MessengerBotMenuButton3}),loader:c("JSResource")("MessengerBotMenuDialog.react").__setRef("MessengerBotMenuButton.react"),placeholder:c("React").createElement(c("ChatFlyoutPlaceholder.react"),null)}))};m.prototype.$MessengerBotMenuButton2=function(){c("MessengerBotMenuDataFetcher").getMenuItems(this.props.pageID,function(n){this.setState({menuItems:n,isLoading:false})}.bind(this),function(){this.setState({menuItems:[],isLoading:false})}.bind(this))};m.propTypes={autoFocus:j.bool,className:j.string,clicked:j.bool,flyoutAlignment:j.string.isRequired,threadID:j.string.isRequired,pageID:j.string.isRequired};f.exports=m}),null);