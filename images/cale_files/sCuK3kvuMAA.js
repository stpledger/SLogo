if (self.CavalryLogger) { CavalryLogger.start_js(["uwEnL"]); }

__d("UFICommentReactionCount.react",["cx","ActorURI","ClientIDs","React","SutroPhase2GatingConfig","UFIReactionsBlingTokens.react","UFIReactionsProfileBrowserUtils","XUFIReactionsSocialSentenceTooltipController"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.comment,n={entidentifier:m.id,reactioncount:m.reactioncount,reactioncountmap:m.reactioncountmap,actorforpost:this.props.actorForPost,supportedreactions:this.props.supportedReactions},o="UFICommentLikeButton"+(this.props.comment.hasviewerliked?" UFICommentLikedButton":"")+(c("SutroPhase2GatingConfig").enabled_ui40?" UFISutroLikeCount":""),p="UFICommentReactionsBling _4ar- _ipn",q=c("ActorURI").create(c("XUFIReactionsSocialSentenceTooltipController").getURIBuilder().setString("ft_ent_identifier",m.id).setString("client_id",c("ClientIDs").getNewClientID()).setInt("user_count",m.reactioncount).getURI(),this.props.actorForPost),r=c("UFIReactionsProfileBrowserUtils").getDialogURI({actorID:this.props.actorForPost,feedbackTargetID:m.id}),s=c("UFIReactionsProfileBrowserUtils").getPageURI({actorID:this.props.actorForPost,feedbackTargetID:m.id}),t=this.props.contextArgs.loggedOutLinkConfig;if(t&&t.showLikeLink){r=t.likeAjaxifyURI;s="#"}return c("React").createElement("a",{ajaxify:r,"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-uri":q,"data-tooltip-offsety":"-3",href:s,rel:"dialog",role:"button"},c("React").createElement(c("UFIReactionsBlingTokens.react"),{className:p,feedback:n,contextArgs:this.props.contextArgs,max:3,noLinks:true,size:"16"},c("React").createElement("span",{className:o},m.reactioncountreduced)))};function l(){i.apply(this,arguments)}l.propTypes={actorForPost:k.string,comment:k.object.isRequired,contextArgs:k.object.isRequired,supportedReactions:k.array};f.exports=l}),null);