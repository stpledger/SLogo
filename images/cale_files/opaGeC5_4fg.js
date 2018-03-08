if (self.CavalryLogger) { CavalryLogger.start_js(["g2zxt"]); }

__d("MessengerAddIconSVG.react",["React"],(function a(b,c,d,e,f,g){"use strict";var h=c("React").PropTypes,i=function i(j){return c("React").createElement("div",{className:j.className},c("React").createElement("svg",{viewBox:"-8 -8 48 48"},c("React").createElement("title",null,"add to group"),c("React").createElement("path",{d:"M16,0 V32 M0,16 H32",fillRule:"evenodd",clipRule:"evenodd",fill:"none",stroke:j.customColor,strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"})))};i.propTypes={className:h.string,customColor:h.string.isRequired};f.exports=i}),null);
__d("AbstractTextInputReact.bs",["ReasonReact.bs","bs_js_null_undefined","AbstractTextInput.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l,m,n,o,p){return c("ReasonReact.bs").wrapJsForReason(c("AbstractTextInput.react"),{className:c("bs_js_null_undefined").from_opt(i),maxLength:j,onChange:k,onFocus:l,onKeyDown:m,placeholder:n,value:c("bs_js_null_undefined").from_opt(o)},p)}g.make=h}),null);
__d("MessengerAbstractTextInputWithFocusReact.bs",["bs_curry","ReasonReact.bs","bs_js_primitive","AbstractTextInputReact.bs"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("ReasonReact.bs").reducerComponent("MessengerAbstractTextInputWithFocusReact");function i(n,o){o[1][0][0]=n==null?0:[n];return 0}function j(n){var o=n[0][0];if(o)return o[0].focusInput();else return 0}function k(n){var o=n[0][0];if(o)return o[0].blurInput();else return 0}function l(n,o,p,q,r,s,t,u,v){__p&&__p();var w=function w(A){if(o)return j(A);else return k(A)},x=function x(A){w(A[1]);return 0},y=function y(A){return w(A[1][1])},z=h.slice();z[4]=x;z[5]=y;z[9]=function(A){return c("ReasonReact.bs").element(0,[c("bs_curry")._1(A[0],i)],c("AbstractTextInputReact.bs").make(n,p,q,r,s,t,u,[]))};z[10]=function(){return[[0]]};z[12]=function(v,A){return 0};return z}var m=c("ReasonReact.bs").wrapReasonForJs(h,function(n){return l(c("bs_js_primitive").null_undefined_to_opt(n.className),+n.focused,n.maxLength,n.onChange,n.onFocus,n.onKeyDown,n.placeholder,c("bs_js_primitive").null_undefined_to_opt(n.value),[])});g.component=h;g.setInputRef=i;g.focus=j;g.blur=k;g.make=l;g.jsComponent=m}),null);
__d("Keys.bs",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=8,i=9,j=13,k=18,l=27,m=32,n=33,o=34,p=35,q=36,r=37,s=38,t=39,u=40,v=46,w=188,x=190,y=65,z=90,A=48,B=96,C=105;g.backspace=h;g.tab=i;g.$$return=j;g.alt=k;g.esc=l;g.space=m;g.page_up=n;g.page_down=o;g.end_=p;g.home=q;g.left=r;g.up=s;g.right=t;g.down=u;g.$$delete=v;g.comma=w;g.period=x;g.a=y;g.z=z;g.zero=A;g.numpad_0=B;g.numpad_9=C}),null);
__d("MessengerGroupPollingCheckboxReact.bs",["cx","cssVar","Keys.bs","bs_curry","React","bs_js_boolean","ReasonReact.bs"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact.bs").statelessComponent("MessengerGroupPollingCheckboxReact");function k(m,n,o,p){__p&&__p();var q=function q(){return c("bs_curry")._1(o,1-m)},r=function r(u){if(u.keyCode===c("Keys.bs").space){u.preventDefault();return c("bs_curry")._1(o,1-m)}else return 0},s=m!==0?n:"rgba(0, 0, 0, 0.10)",t=j.slice();t[9]=function(){return c("React").cloneElement(c("React").createElement("div",{className:"_2m5p"+(c("bs_js_boolean").to_js_boolean(m)?" _2m5q":""),role:"checkbox",tabIndex:0,onKeyDown:r,onClick:q},c("React").createElement("span",{className:"_2m5r",style:{backgroundColor:n,borderColor:s}})),{"aria-checked":m!==0?"true":"false"})};return t}var l=c("ReasonReact.bs").wrapReasonForJs(j,function(m){return k(+m.checked,m.customColor,m.onToggle,[])});g.component=j;g.make=k;g.jsComponent=l}),null);
__d("XMessengerGroupPollingCreatePollController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/messaging/group_polling/create_poll/",{})}),null);
__d("MessengerGroupPollingCreatePollFlyout.react",["cx","fbt","AsyncRequest","Keys","Link.react","MessengerAbstractTextInputWithFocusReact.bs","MessengerAddIconSVG.react","MessengerGroupPollingCheckboxReact.bs","MessengerSpinner.react","React","ScrollableArea.react","XMessengerGroupPollingCreatePollController","XUICloseButton.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("MessengerAbstractTextInputWithFocusReact.bs").jsComponent,m=c("MessengerGroupPollingCheckboxReact.bs").jsComponent,n=c("React").PropTypes,o=30,p=75,q=200,r=140,s=140;j=babelHelpers.inherits(t,c("React").Component);k=j&&j.prototype;function t(){__p&&__p();var u,v;for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return v=(u=k.constructor).call.apply(u,[this].concat(x)),this.state={focusIndicator:{isQuestionFocused:true,optionFocusIndex:0},questionText:null,options:[{optionText:null,isSelected:false}],errorTitle:null,errorMessage:null,isLoading:false},this.$MessengerGroupPollingCreatePollFlyout6=function(){var z={optionText:null,isSelected:false},A=this.state.options.concat(z);this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:A.length-1},options:A})}.bind(this),this.$MessengerGroupPollingCreatePollFlyout7=function(z){this.setState({focusIndicator:{isQuestionFocused:true,optionFocusIndex:0},questionText:z.target.value,errorTitle:null,errorMessage:null})}.bind(this),this.$MessengerGroupPollingCreatePollFlyout9=function(z){if(z.keyCode===c("Keys").RETURN){z.preventDefault();this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:0}})}}.bind(this),this.$MessengerGroupPollingCreatePollFlyout11=function(z){z.preventDefault();if(z.keyCode===c("Keys").RETURN)this.$MessengerGroupPollingCreatePollFlyout10()}.bind(this),this.$MessengerGroupPollingCreatePollFlyout10=function(){__p&&__p();if(this.state.isLoading)return;this.setState({isLoading:true});var z=this.state.options.filter(function(B){return B.optionText}),A=c("XMessengerGroupPollingCreatePollController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(A).setData({question_text:this.state.questionText,target_id:this.props.threadFBID,option_text_array:z.map(function(B){return B.optionText}),option_is_selected_array:z.map(function(B){return B.isSelected?1:0})}).setMethod("POST").setAllowCrossPageTransition(true).setHandler(function(B){var C=B.payload;if(C.status==="failure"&&C.showUser===true)this.setState({errorTitle:C.errorTitle,errorMessage:C.errorMessage,isLoading:false});else this.props.onSubmitHandler()}.bind(this)).send()}.bind(this),v}t.prototype.render=function(){var u=this.state.options.map(function(B,C){return c("React").createElement("div",{className:"_9fu",key:C},c("React").createElement(m,{checked:B.isSelected,customColor:this.props.customColor,onToggle:function(){return this.$MessengerGroupPollingCreatePollFlyout1(C)}.bind(this)}),c("React").createElement(l,{className:"_9fv",focused:!this.state.focusIndicator.isQuestionFocused&&this.state.focusIndicator.optionFocusIndex===C,maxLength:r,onChange:function(D){return this.$MessengerGroupPollingCreatePollFlyout2(D,C)}.bind(this),onFocus:function(D){return this.$MessengerGroupPollingCreatePollFlyout3(C)}.bind(this),onKeyDown:function(D){return this.$MessengerGroupPollingCreatePollFlyout4(D,C)}.bind(this),placeholder:i._("Add an option").toString(),value:B.optionText}),c("React").createElement(c("XUICloseButton.react"),{className:"_4y_1",onClick:function(){return this.$MessengerGroupPollingCreatePollFlyout5(C)}.bind(this),size:"small",tooltip:i._("Remove")}))}.bind(this)),v=c("React").createElement(c("Link.react"),{onClick:this.$MessengerGroupPollingCreatePollFlyout6,role:"button",tabIndex:"0"},c("React").createElement(c("MessengerAddIconSVG.react"),{className:"_5n1-",customColor:this.props.customColor})),w=c("React").createElement("div",{className:"_5jmn"},this.state.errorTitle),x=c("React").createElement("div",{className:"_5jmo"},this.state.errorMessage),y=this.state.options.length+1,z=o*y,A=Math.min(Math.max(z,p),q);return c("React").createElement("div",{className:"_5jmp"},c("React").createElement("div",{className:"_5jn1"},i._("Poll")),w,x,c("React").createElement(l,{className:"_9fw",focused:this.state.focusIndicator.isQuestionFocused,maxLength:s,onChange:this.$MessengerGroupPollingCreatePollFlyout7,onFocus:function(B){return this.$MessengerGroupPollingCreatePollFlyout8()}.bind(this),onKeyDown:this.$MessengerGroupPollingCreatePollFlyout9,placeholder:i._("Ask a question").toString(),value:this.state.questionText}),c("React").createElement(c("ScrollableArea.react"),{className:"_5nkw",height:A},c("React").createElement("div",{className:"_5jn3"},u,v)),c("React").createElement("div",{className:"_5jn4"+(this.state.isLoading?" _2zwp":""),onClick:this.$MessengerGroupPollingCreatePollFlyout10,onKeyUp:this.$MessengerGroupPollingCreatePollFlyout11,role:"button",style:{backgroundColor:this.props.customColor},tabIndex:"0"},this.state.isLoading?c("React").createElement(c("MessengerSpinner.react"),null):i._("Create Poll")))};t.prototype.$MessengerGroupPollingCreatePollFlyout1=function(u){var v=this.state.options.map(function(w,x){if(x===u)return babelHelpers["extends"]({},w,{isSelected:!w.isSelected});return w});this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:null},options:v})};t.prototype.$MessengerGroupPollingCreatePollFlyout5=function(u){var v=this.state.options.filter(function(y,z){return z!==u}),w=v.length===0,x=null;if(this.state.focusIndicator.optionFocusIndex!==null&&this.state.focusIndicator.optionFocusIndex!==undefined&&v.length!==0)x=this.state.focusIndicator.optionFocusIndex<u?this.state.focusIndicator.optionFocusIndex:this.state.focusIndicator.optionFocusIndex-1;this.setState({focusIndicator:{isQuestionFocused:w,optionFocusIndex:x},options:v})};t.prototype.$MessengerGroupPollingCreatePollFlyout2=function(u,v){var w=this.state.options.map(function(x,y){if(y===v)return babelHelpers["extends"]({},x,{optionText:u.target.value});return x});this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:v},options:w,errorTitle:null,errorMessage:null})};t.prototype.$MessengerGroupPollingCreatePollFlyout4=function(u,v){if(u.keyCode===c("Keys").RETURN){u.preventDefault();var w=v+1;if(w===this.state.options.length)this.$MessengerGroupPollingCreatePollFlyout6();else this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:w}})}};t.prototype.$MessengerGroupPollingCreatePollFlyout8=function(){this.setState({focusIndicator:{isQuestionFocused:true,optionFocusIndex:0}})};t.prototype.$MessengerGroupPollingCreatePollFlyout3=function(u){this.setState({focusIndicator:{isQuestionFocused:false,optionFocusIndex:u}})};t.propTypes={customColor:n.string.isRequired,threadFBID:n.string.isRequired,onSubmitHandler:n.func.isRequired};f.exports=t}),null);
__d("XMessengerGroupPollingUpdateVoteController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/messaging/group_polling/update_vote/",{})}),null);
__d("MessengerGroupPollingFlyout.react",["cx","fbt","AsyncRequest","Keys","Link.react","MessengerAbstractTextInputWithFocusReact.bs","MessengerAddIconSVG.react","MessengerEnvironment","MessengerGroupPollingCheckboxReact.bs","MessengerGroupPollingUtils","MessengerSpinner.react","React","ScrollableArea.react","XMessengerGroupPollingUpdateVoteController"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("MessengerAbstractTextInputWithFocusReact.bs").jsComponent,m=c("MessengerGroupPollingCheckboxReact.bs").jsComponent,n=c("React").PropTypes,o=16,p=24,q=28,r=36,s=50,t=200,u=140;j=babelHelpers.inherits(v,c("React").Component);k=j&&j.prototype;function v(w){__p&&__p();k.constructor.call(this,w);this.$MessengerGroupPollingFlyout3=function(){var y=this.state.newOptions.concat(null);this.setState({focusIndex:y.length-1,newOptions:y})}.bind(this);this.$MessengerGroupPollingFlyout8=function(y){y.preventDefault();if(y.keyCode===c("Keys").RETURN)this.$MessengerGroupPollingFlyout7()}.bind(this);this.$MessengerGroupPollingFlyout7=function(){__p&&__p();if(this.state.isLoading)return;this.setState({isLoading:true});var y=this.state.newOptions.filter(function(A){return A}),z=c("XMessengerGroupPollingUpdateVoteController").getURIBuilder().getURI();new(c("AsyncRequest"))().setURI(z).setData({question_id:this.props.questionID,selected_options:this.state.selectedOptions,new_options:y}).setMethod("POST").setAllowCrossPageTransition(true).setHandler(function(A){var B=A.payload;if(B.status==="failure"&&B.showUser===true)this.setState({errorTitle:B.errorTitle,errorMessage:B.errorMessage,isLoading:false});else this.props.onSubmitHandler()}.bind(this)).send()}.bind(this);var x=this.$MessengerGroupPollingFlyout1(w.options);this.state={focusIndex:0,selectedOptions:x,errorTitle:null,errorMessage:null,newOptions:[null],isLoading:false}}v.prototype.componentWillReceiveProps=function(w){if(this.props.options==null){var x=this.$MessengerGroupPollingFlyout1(w.options);this.setState({selectedOptions:x})}};v.prototype.render=function(){__p&&__p();var w=c("MessengerEnvironment").messengerui;if(!this.props.options)return c("React").createElement("div",{className:"_8bt"+(!w?" _5il4":"")},c("React").createElement(c("MessengerSpinner.react"),{color:"grey"}));var x=w?p:o,y=c("React").createElement("div",{className:"_3lpw"},c("React").createElement("div",{className:"_3lpx"},this.state.errorTitle),c("React").createElement("div",{className:"_3lpy"},this.state.errorMessage)),z=this.props.options&&this.props.options.map(function(F){return c("React").createElement("div",{className:"_1mqz"+(!w?" _5k8c":""),key:F.id},c("React").createElement(m,{checked:this.state.selectedOptions&&this.state.selectedOptions.indexOf(F.id)!==-1||false,customColor:this.props.customColor,onToggle:function(){return this.$MessengerGroupPollingFlyout2(F.id)}.bind(this)}),c("React").createElement("div",{className:"_2f83"+(!w?" _vhn":"")},c("React").createElement("div",{className:"_1mq-"+(!w?" _2a5a":"")},c("MessengerGroupPollingUtils").renderEmojiText(F.text)),c("MessengerGroupPollingUtils").renderVoterFacepiles("_4ic7"+(!w?" _8kg":""),x,F.voters.count,F.voters.edges.map(function(G){return G.node.id}),F.viewer_has_voted)))}.bind(this)),A=this.state.newOptions.map(function(F,G){return c("React").createElement("div",{className:"_1mqz"+(!w?" _5k8c":""),key:G},c("React").createElement(c("Link.react"),{onClick:this.$MessengerGroupPollingFlyout3,role:"button",tabIndex:"0"},c("React").createElement(c("MessengerAddIconSVG.react"),{className:"_8i7",customColor:this.props.customColor})),c("React").createElement(l,{className:"_8i5",focused:G===this.state.focusIndex,maxLength:u,onChange:function(H){return this.$MessengerGroupPollingFlyout4(H,G)}.bind(this),onFocus:function(H){return this.$MessengerGroupPollingFlyout5(G)}.bind(this),onKeyDown:function(H){return this.$MessengerGroupPollingFlyout6(H,G)}.bind(this),placeholder:i._("Add an option").toString(),value:F}))}.bind(this)),B=this.props.options&&this.props.options.length||0,C=B+this.state.newOptions.length,D=w?r*C:q*C,E=Math.min(Math.max(D,s),t);return c("React").createElement("div",{className:"_1mq_"+(!w?" _1mr-":"")},c("React").createElement("div",{className:"_1mr_"},c("MessengerGroupPollingUtils").renderEmojiText(this.props.questionText)),y,c("React").createElement(c("ScrollableArea.react"),{height:E},c("React").createElement("div",{className:"_1ms0"},z,A)),c("React").createElement("div",{className:"_1ms1"+(this.state.isLoading?" _m1v":""),onClick:this.$MessengerGroupPollingFlyout7,onKeyUp:this.$MessengerGroupPollingFlyout8,role:"button",style:{backgroundColor:this.props.customColor},tabIndex:"0"},this.state.isLoading?c("React").createElement(c("MessengerSpinner.react"),null):i._("Submit")))};v.prototype.$MessengerGroupPollingFlyout1=function(w){var x=w&&w.filter(function(y){return y.viewer_has_voted===true}).map(function(y){return y.id});return x};v.prototype.$MessengerGroupPollingFlyout2=function(w){var x=this.state.selectedOptions;if(!x)return;var y=x.indexOf(w)===-1?x.concat(w):x.filter(function(z){return z!==w});this.setState({focusIndex:null,selectedOptions:y})};v.prototype.$MessengerGroupPollingFlyout4=function(w,x){var y=this.state.newOptions.map(function(z,A){return A===x?w.target.value:z});this.setState({focusIndex:x,newOptions:y,errorTitle:null,errorMessage:null})};v.prototype.$MessengerGroupPollingFlyout6=function(w,x){if(w.keyCode===c("Keys").RETURN){w.preventDefault();var y=x+1;if(y===this.state.newOptions.length)this.$MessengerGroupPollingFlyout3();else this.setState({focusIndex:y})}};v.prototype.$MessengerGroupPollingFlyout5=function(w){this.setState({focusIndex:w})};v.propTypes={customColor:n.string.isRequired,questionID:n.string.isRequired,questionText:n.string.isRequired,options:n.arrayOf(n.object),onSubmitHandler:n.func.isRequired};f.exports=v}),null);