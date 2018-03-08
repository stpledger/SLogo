if (self.CavalryLogger) { CavalryLogger.start_js(["66M6s"]); }

__d("ChatFlyoutPlaceholder.react",["React","XUISpinner.react"],(function a(b,c,d,e,f,g){"use strict";var h={padding:"30px",textAlign:"center"},i=function i(){return c("React").createElement("div",{style:h},c("React").createElement(c("XUISpinner.react"),{size:"large"}))};f.exports=i}),null);
__d("ContextualLayerAutoFlipHorizontal",["ContextualLayerAutoFlip"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("ContextualLayerAutoFlip"));i=h&&h.prototype;j.prototype.getValidPositions=function(k){"use strict";return[k.getPosition()]};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this._layer=i}h.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};h.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};h.prototype._attachScrollListener=function(){"use strict";if(this._listener)return;var i=this._layer.getContextScrollParent();this._listener=c("Event").listen(i,"scroll",this._layer.updatePosition.bind(this._layer))};h.prototype._removeScrollListener=function(){"use strict";this._listener&&this._listener.remove();this._listener=null};Object.assign(h.prototype,{_subscriptions:[]});f.exports=h}),null);
__d("MessengerContextualDialog.react",["cx","AccessibleLayer","ContextualLayerAutoFlipHorizontal","ContextualLayerUpdateOnScroll","LayerHideOnEscape","ReactAbstractContextualDialog","ReactLayer"],(function a(b,c,d,e,f,g,h){"use strict";var i=12,j=c("ReactLayer").createClass(c("ReactAbstractContextualDialog").createSpec({addedBehaviors:[c("ContextualLayerAutoFlipHorizontal"),c("ContextualLayerUpdateOnScroll"),c("LayerHideOnEscape"),c("AccessibleLayer")],displayName:"MessengerContextualDialog",shouldSetARIAProperties:false,theme:{wrapperClassName:"_1r_9",arrowDimensions:{offset:i,length:16}}}));f.exports=j}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;function l(o){var p=o.children;p&&(p.length===2||p.length===3)||i(0);p[0]!==null||i(0);return p}function m(o){return"img _8o"+(o==="small"?" _8r":"")+(o==="medium"?" _8s":"")+(o==="large"?" _8t":"")}j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;n.prototype.render=function(){"use strict";__p&&__p();var o=l(this.props),p=o[0],q=o[1],r=o[2],s=this.props,t=s.imageClassName,u=s.contentClassName,v=s.spacing,w=babelHelpers.objectWithoutProperties(s,["imageClassName","contentClassName","spacing"]),x=p.props,y=x.className,z=x.alt,A=x.tabIndex,B=x.title,C={className:c("joinClasses")(y,m(v),t)};if(p.type==="img"){if(z===undefined)C.alt=""}else if((p.type==="a"||p.type==="link")&&A===undefined&&B===undefined&&p.props["aria-label"]===undefined){C.tabIndex="-1";C["aria-hidden"]="true"}p=c("React").cloneElement(p,C);var D=c("joinClasses")(u,"_42ef"+(v==="small"?" _8u":"")),E=void 0;if(!r)E=c("React").createElement("div",{className:D},q);else E=c("React").createElement(c("LeftRight.react"),{className:D,direction:c("LeftRight.react").DIRECTION.right},q,r);return c("React").createElement(c("LeftRight.react"),babelHelpers["extends"]({},w,{direction:c("LeftRight.react").DIRECTION.left}),p,E)};function n(){"use strict";j.apply(this,arguments)}n.defaultProps={spacing:"small"};f.exports=n}),null);
__d("ReactComponentWithPureRenderMixin",["shallowCompare"],(function a(b,c,d,e,f,g){"use strict";var h={shouldComponentUpdate:function i(j,k){return c("shallowCompare")(this,j,k)}};f.exports=h}),18);