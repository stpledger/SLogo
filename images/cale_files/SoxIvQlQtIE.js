if (self.CavalryLogger) { CavalryLogger.start_js(["5QVjG"]); }

__d("MessengerInfoPanelEmoji.react",["ix","cx","fbt","Bootloader","CurrentUser","EmojiLikeConstants","Image.react","ImmutableObject","Keys","MercuryShareAttachmentRenderLocations","MessengerDialogs.bs","MessengerHotLikeOutlineSVG.react","MessengerSupportedEmojiUtils","React","asset"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m=c("React").PropTypes;k=babelHelpers.inherits(n,c("React").PureComponent);l=k&&k.prototype;function n(){__p&&__p();var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.$MessengerInfoPanelEmoji2=function(event){event.preventDefault();this.$MessengerInfoPanelEmoji5()}.bind(this),this.$MessengerInfoPanelEmoji3=function(event){if(event.keyCode===c("Keys").RETURN){event.preventDefault();this.$MessengerInfoPanelEmoji5()}}.bind(this),this.$MessengerInfoPanelEmoji6=function(){if(this.$MessengerInfoPanelEmoji1)this.$MessengerInfoPanelEmoji1.focus()}.bind(this),this.$MessengerInfoPanelEmoji4=function(t){this.$MessengerInfoPanelEmoji1=t}.bind(this),p}n.prototype.render=function(){if(!this.props.thread.customization_enabled)return null;var o=this.props.thread.custom_like_icon&&this.props.thread.custom_like_icon.emoji?c("MessengerSupportedEmojiUtils").getNewEmojiData(this.props.thread.custom_like_icon.emoji,c("EmojiLikeConstants").size.SMALL):null,p=o&&o.url?c("React").createElement(c("Image.react"),{src:o.url,className:"_12cp"}):c("CurrentUser").isWorkUser()?c("React").createElement(c("Image.react"),{src:h("470537")}):c("React").createElement(c("MessengerHotLikeOutlineSVG.react"),{className:"_12cq",color:this.props.thread.custom_color?this.props.thread.custom_color:"",height:"60%",location:c("MercuryShareAttachmentRenderLocations").MESSENGER});return c("React").createElement("div",{className:"_3szn _3szo",onClick:this.$MessengerInfoPanelEmoji2,onKeyDown:this.$MessengerInfoPanelEmoji3,ref:this.$MessengerInfoPanelEmoji4,role:"button",tabIndex:"0"},c("React").createElement("div",{className:"_3szp"},p),c("React").createElement("div",{className:"_3szq"},j._("Change Emoji")))};n.prototype.$MessengerInfoPanelEmoji5=function(){c("Bootloader").loadModules(["MessengerChangeEmojiDialogReact.bs"],function(o){var p=o.jsComponent;c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(p,{currentEmoji:this.props.thread.custom_like_icon?this.props.thread.custom_like_icon.emoji:String.fromCodePoint.apply(String,c("EmojiLikeConstants").FB_THUMBS_UP_EMOJI),onClose:this.$MessengerInfoPanelEmoji6,onSave:this.props.onChange})}.bind(this))}.bind(this),"MessengerInfoPanelEmoji.react")};n.propTypes={thread:m.instanceOf(c("ImmutableObject")).isRequired,viewer:m.string.isRequired,onChange:m.func.isRequired};f.exports=n}),null);