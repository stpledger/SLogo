if (self.CavalryLogger) { CavalryLogger.start_js(["\/apk3"]); }

__d("ChatTypingIndicator.react",["cx","fbt","ChatConfig","Image.react","MercuryConfig","MercuryParticipants","MercuryTypingAnimation.react","ReactComponentWithPureRenderMixin","React","QE2Logger"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=c("React").PropTypes,k=c("ChatConfig").get("chattab_rounded_profile",false),l=c("React").createClass({displayName:"ChatTypingIndicator",mixins:[c("ReactComponentWithPureRenderMixin")],propTypes:{isOnline:j.bool,userID:j.string,showName:j.bool},componentDidMount:function n(){c("QE2Logger").logExposureForUser("messenger_growth_tombstone")},render:function n(){var o=void 0;if(this.props.userID)o=c("MercuryParticipants").getNow(this.props.userID);if(!o)return null;var p=c("MercuryConfig").GDWC&&!!this.props.isOnline;return c("React").createElement("div",{className:"_4tdt"},m(o,p),this._renderBubble())},getBubble:function n(){return this.refs.bubble},_renderBubble:function n(){var o=this.props.showName;return c("React").createElement("div",{className:"_4tdv"},c("React").createElement("div",{className:"_5wd4 _1nc7 _2cnu"+(o?" _5ysy":"")},c("React").createElement("div",{className:"_5wd9 _n4o"},c("React").createElement("div",{className:"_5w1r _5wdf _3_om"},c("React").createElement(c("MercuryTypingAnimation.react"),{className:"_5x7x",ref:"bubble"})))))}});function m(n,o){var p=i._("{name}",[i.param("name",n.name)]);return c("React").createElement("div",{className:"_31o4"+(k?" _3njy":"")},c("React").createElement("a",{"aria-label":p,className:"_4tdw","data-hover":"tooltip","data-tooltip-content":p,"data-tooltip-position":"left",href:n.href||"#",ref:"link"},c("React").createElement(c("Image.react"),{src:n.image_src,ref:"image"})),o?c("React").createElement("div",{className:"_sce"}):null)}f.exports=l}),null);