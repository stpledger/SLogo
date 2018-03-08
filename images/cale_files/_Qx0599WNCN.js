if (self.CavalryLogger) { CavalryLogger.start_js(["xd9xc"]); }

__d("FBOverlayBase.react",["React"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("React").Component);i=h&&h.prototype;j.prototype.render=function(){"use strict";return c("React").Children.only(this.props.children)};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("FBOverlayElement.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes,l={horizontal:{left:"_32rg",right:"_32rh",fit:c("joinClasses")("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:c("joinClasses")("_32ri","_32rj")}};i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;m.prototype.render=function(){"use strict";var n=c("React").Children.only(this.props.children),o=c("joinClasses")(n.props.className,"_32rk",l.horizontal[this.props.horizontal],l.vertical[this.props.vertical]);return c("React").cloneElement(n,{className:o})};function m(){"use strict";i.apply(this,arguments)}m.propTypes={horizontal:k.oneOf(["left","right","fit"]),vertical:k.oneOf(["top","bottom","fit"])};m.defaultProps={horizontal:"fit",vertical:"fit"};f.exports=m}),null);
__d("FBOverlayContainer.react",["cx","invariant","FBOverlayBase.react","FBOverlayElement.react","React","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;l.prototype.render=function(){"use strict";return c("React").createElement("div",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,"_23n-")}),this.props.children)};function l(){"use strict";j.apply(this,arguments)}l.propTypes={children:function m(n,o){__p&&__p();var m=n[o],p=0;c("React").Children.forEach(m,function(q){if(q===null||q===undefined)return;switch(q.type){case c("FBOverlayBase.react"):p++;break;case c("FBOverlayElement.react"):break;default:i(0)}});p===1||i(0)}};f.exports=l}),null);
__d("MessengerPhotoishXMA.react",["BootloadedComponent.react","JSResource","React","requireWeak"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=void 0;c("requireWeak")("MessengerPhotosGroup.react",function(l){j=l});h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;function k(l){i.constructor.call(this,l)}k.prototype.shouldComponentUpdate=function(l,m){return this.props!==l};k.prototype.render=function(){if(!j)return c("React").createElement(c("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:c("React").createElement("div",null),bootloadLoader:c("JSResource")("MessengerPhotosGroup.react").__setRef("MessengerPhotoishXMA.react"),isXMA:true},this.props));return c("React").createElement(j,babelHelpers["extends"]({isXMA:true},this.props))};f.exports=k}),null);
__d("MercuryShareSizeImageByWidthMixin",["Image.react","MercuryAttachment","MercuryShareAttachmentRenderLocations","MercuryShareImage.react","React"],(function a(b,c,d,e,f,g){var h={_getImageSize:function i(j){var k=this.props.attachment&&this.props.attachment.media,l=j&&k&&k.animated_image?k&&k.animated_image_size:k&&k.image_size;return this.props.maxWidth?c("MercuryAttachment").resizeContain({height:this.props.maxWidth,width:this.props.maxWidth},l):l},_renderImage:function i(j){var k=this.props.attachment&&this.props.attachment.media,l=this._getImageSize(j),m=j&&k&&k.animated_image?k.animated_image:k&&k.image;if(this.props.location==c("MercuryShareAttachmentRenderLocations").CHAT)return c("React").createElement(c("MercuryShareImage.react"),{height:l&&l.height,source:m,width:l&&l.width});else return c("React").createElement(c("Image.react"),{height:l&&l.height,src:m,width:l&&l.width})}};f.exports=h}),null);
__d("MercuryImageShareAttachment.react",["Link.react","MercuryAttachmentType","MercuryFallbackShareAttachment.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareSizeImageByWidthMixin","MessengerPhotoishXMA.react","React"],(function a(b,c,d,e,f,g){"use strict";var h=c("React").PropTypes,i=c("React").createClass({displayName:"MercuryImageShareAttachment",mixins:[c("MercuryShareSizeImageByWidthMixin")],propTypes:{attachment:c("MercuryShareAttachmentReactShape"),location:h.oneOf(c("MercuryShareAttachmentRenderLocations").getValues()),maxWidth:h.number},render:function j(){if(this.props.location===c("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW)return c("React").createElement(c("MercuryFallbackShareAttachment.react"),this.props);else if(this.props.location===c("MercuryShareAttachmentRenderLocations").MESSENGER)return c("React").createElement(c("MessengerPhotoishXMA.react"),{attachType:c("MercuryAttachmentType").PHOTO,attachments:[this.props.attachment]});var k=this.props.attachment&&this.props.attachment.uri;return c("React").createElement(c("Link.react"),{href:k,target:"_blank"},this._renderImage())}});f.exports=i}),null);
__d("MercuryVideoShareXMATextBlock.react",["cx","React","ShimButton.react","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l=4;i=babelHelpers.inherits(m,c("React").Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.$MercuryVideoShareXMATextBlock1=function(){this.props.url&&window.open(this.props.url)}.bind(this),o}m.prototype.render=function(){if(!this.props)return c("React").createElement("div",{className:"__6j"});var n=this.props.width?{maxWidth:this.props.width-l}:{},o={textDecoration:"none"};return c("React").createElement("div",{className:c("joinClasses")(this.props.className,"__6j _43kk"),style:n},c("React").createElement(c("ShimButton.react"),{form:"link",onClick:this.$MercuryVideoShareXMATextBlock1,style:o},this.renderTitle(),this.renderDescription(),this.renderSource()))};m.prototype.renderTitle=function(){if(!this.props.title)return null;return c("React").createElement("div",{className:"__6k"+(!this.props.uri&&!this.props.description?" _2xsq":"")},this.props.title)};m.prototype.renderDescription=function(){if(!this.props.description)return null;return c("React").createElement("div",{className:"__6l"},this.props.description)};m.prototype.renderSource=function(){if(!this.props.source)return null;return c("React").createElement("div",{className:"__6m"},this.props.source)};m.propTypes={className:k.string,description:k.string,source:k.string,title:k.string,url:k.string,width:k.number};f.exports=m}),null);
__d("MercuryVideoShareXMA.react",["cx","MessengerVideoPlayer.react","MercuryVideoShareXMATextBlock.react","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l=181,m=200;i=babelHelpers.inherits(n,c("React").PureComponent);j=i&&i.prototype;n.prototype.render=function(){var o=this.$MercuryVideoShareXMA1(this.props.attachment),p=this.$MercuryVideoShareXMA2(o);return c("React").createElement("div",{className:"_3duc"},p,this.$MercuryVideoShareXMA3(o&&o.original_dimensions))};n.prototype.$MercuryVideoShareXMA2=function(o){return o?c("React").createElement(c("MessengerVideoPlayer.react"),{attachment:this.props.attachment,videoData:o,isInThread:true,isVisible:this.props.isVisible,className:c("joinClasses")(this.props.className,"_n4o _3_om _1wno")}):null};n.prototype.$MercuryVideoShareXMA1=function(o){if(!o.media||!o.media.image_size||!o.target||!o.target.video_id)return null;var p=o.media.image_size;return{legacy_attachment_id:o.target.video_id,original_dimensions:this.$MercuryVideoShareXMA4(p),start_muted:true,no_fullscreen:true,hide_controls_on_finish:true,url:o.media.image,is_share:true}};n.prototype.$MercuryVideoShareXMA4=function(o){if(o.width<=l&&o.height<=m)return{x:o.width,y:o.height};var p=Math.min(l/o.width,m/o.height),q=Math.ceil(o.width*p),r=Math.ceil(o.height*p);return{x:q,y:r}};n.prototype.$MercuryVideoShareXMA3=function(o){var p=this.props.attachment;return c("React").createElement(c("MercuryVideoShareXMATextBlock.react"),{description:p.description,source:p.source,title:p.video_title,url:p.uri,width:o&&o.x})};function n(){i.apply(this,arguments)}n.propTypes={attachment:k.object.isRequired,isVisible:k.bool,onClick:k.func};f.exports=n}),null);
__d("MercuryVideoShareAttachment.react",["cx","ix","CenteredContainer.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Image.react","Link.react","MercuryAttachmentType","MercuryFallbackShareAttachment.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareSizeImageByWidthMixin","MercuryVideoShareXMA.react","MessengerPhotoishXMA.react","React"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("React").PropTypes,k=c("React").createClass({displayName:"MercuryVideoShareAttachment",mixins:[c("MercuryShareSizeImageByWidthMixin")],propTypes:{attachment:c("MercuryShareAttachmentReactShape"),location:j.oneOf(c("MercuryShareAttachmentRenderLocations").getValues()),maxWidth:j.number},render:function l(){if(this.props.location===c("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW)return c("React").createElement(c("MercuryFallbackShareAttachment.react"),this.props);else if(this.props.location===c("MercuryShareAttachmentRenderLocations").MESSENGER)return c("React").createElement(c("MessengerPhotoishXMA.react"),{attachType:c("MercuryAttachmentType").VIDEO,attachments:[this.props.attachment],isVisible:!!this.props.isVisible,onSelect:this.props.onSelect});else if(this.props.location===c("MercuryShareAttachmentRenderLocations").CHAT)return c("React").createElement(c("MercuryVideoShareXMA.react"),this.props);var m=this.props.attachment&&this.props.attachment.uri;return c("React").createElement(c("Link.react"),{rel:"theater",href:m},c("React").createElement(c("FBOverlayContainer.react"),{className:"clearfix",style:this._getImageSize()},c("React").createElement(c("FBOverlayBase.react"),null,this._renderImage()),c("React").createElement(c("FBOverlayElement.react"),null,c("React").createElement(c("CenteredContainer.react"),{vertical:true},c("React").createElement(c("Image.react"),{src:i("27983")})))))}});f.exports=k}),null);