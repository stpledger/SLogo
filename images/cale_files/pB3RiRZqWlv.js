if (self.CavalryLogger) { CavalryLogger.start_js(["PBbHr"]); }

__d("P2PPendingRecipientVerificationJewelBanner.react",["fbt","P2PJewelBanner.react","P2PTransferParam","P2PVerificationFlowHelper","React"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.handleClick=function(){c("P2PVerificationFlowHelper").startVerificationFlow(this.props.transfer[c("P2PTransferParam").TRANSFER_ID],false)}.bind(this),n}l.prototype.render=function(){return c("React").createElement(c("P2PJewelBanner.react"),{bodyText:h._("To accept the money {sender_name} sent you, please confirm your information.",[h.param("sender_name",this.props.transfer.sender.name)]),primaryActionConfig:{onClick:this.handleClick,text:h._("Confirm Info")},titleText:h._("Please Confirm Your Info")})};l.propTypes={transfer:k.object.isRequired};f.exports=l}),null);