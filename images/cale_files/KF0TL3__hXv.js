if (self.CavalryLogger) { CavalryLogger.start_js(["HVjD6"]); }

__d("UFIReactionsBlingTokens.react",["cx","fbt","Bootloader","Event","React","ReactDOM","RTLKeys","UFIReactionIconImpl.react","UFIReactionsProfileBrowserUtils","UFIReactionTypes","joinClasses","sortReactionTypes"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=null;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;function m(){__p&&__p();var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={active:null,selectedIndex:-1,reactionTypes:this.getReactionTypes(this.props.feedback.reactioncountmap,this.props.max)},this.onFocusIn=function(event){if(!this.refs.tokens.contains(event.target)){this.setState({selectedIndex:-1});if(this.focusInListener){this.focusInListener.remove();this.focusInListener=null}}}.bind(this),this.onFocus=function(event){if(event.target===this.refs.tokens){this.setState({selectedIndex:0});if(!this.focusInListener)this.focusInListener=c("Event").listen(document.documentElement,"focusin",this.onFocusIn)}}.bind(this),this.onKeyDown=function(event){__p&&__p();switch(event.keyCode){case c("RTLKeys").RETURN:if(this.focusInListener){this.focusInListener.remove();this.focusInListener=null}break;case c("RTLKeys").TAB:this.setState({selectedIndex:0});break;case c("RTLKeys").getLeft():case c("RTLKeys").getRight():event.preventDefault();this.setState({selectedIndex:Math.max(0,Math.min(this.state.selectedIndex+(event.keyCode===c("RTLKeys").getLeft()?-1:1),this.state.reactionTypes.length-1))});break}}.bind(this),this.renderToken=function(s,t){var u=this.props.feedback,v=i._("{reduced_count} {reaction_type}",[i.param("reduced_count",u.reactioncountmap[s].reduced),i.param("reaction_type",c("UFIReactionTypes").reactions[s].display_name)]),w=c("React").createElement(c("UFIReactionIconImpl.react"),{size:this.props.size,className:"_4-op",reaction:s}),x=c("React").createElement("span",{className:"_3chu"},u.reactioncountmap[s].reduced),y={"aria-label":v,className:"_3emk"+(this.props.size==="13"?" _26lk":"")+(this.props.size==="16"?" _401_":""),key:"reactionType-"+s,ref:t};if(this.props.noLinks)return c("React").createElement("span",y,w,x);y=babelHelpers["extends"]({},y,c("UFIReactionsProfileBrowserUtils").getPrimerProps({actorID:u.actorforpost,feedbackTargetID:u.entidentifier,reactionKey:s}),{role:"button",tabIndex:this.state.selectedIndex===t?0:-1});if(l)return c("React").createElement(l,babelHelpers["extends"]({active:this.state.active===s,feedback:u,reaction:s},y),w,x);return c("React").createElement("a",babelHelpers["extends"]({onMouseEnter:this.onMouseEnter.bind(this,s)},y),w,x)}.bind(this),o}m.prototype.componentDidUpdate=function(){if(this.state.selectedIndex>-1){var n=c("ReactDOM").findDOMNode(this.refs[this.state.selectedIndex]);if(n)n.focus()}};m.prototype.componentWillReceiveProps=function(n){if(n.feedback.reactioncount!==this.props.feedback.reactioncount)this.setState({active:null});this.setState({reactionTypes:this.getReactionTypes(n.feedback.reactioncountmap,n.max)})};m.prototype.getReactionTypes=function(n,o){var p=c("sortReactionTypes")(n,false).filter(function(q){return c("UFIReactionTypes").reactions[q]&&n[q]["default"]});if(o)p=p.slice(0,o);return p};m.prototype.onMouseEnter=function(n){if(!l)c("Bootloader").loadModules(["UFIReactionsTooltipImpl.react"],function(o){l=o;this.forceUpdate()}.bind(this),"UFIReactionsBlingTokens.react");this.setState({active:n})};m.prototype.render=function(){var n=this.props.noLinks?{}:{onFocus:this.onFocus,onKeyDown:this.onKeyDown,role:"toolbar",tabIndex:this.state.selectedIndex>-1?-1:0};return c("React").createElement("div",{className:c("joinClasses")("_3t53",this.props.className)},c("React").createElement("span",babelHelpers["extends"]({"aria-label":i._("See who reacted to this"),className:"_3t54",ref:"tokens"},n),this.state.reactionTypes.map(this.renderToken,this)),this.props.children)};m.defaultProps={className:null,size:"16"};f.exports=m}),null);