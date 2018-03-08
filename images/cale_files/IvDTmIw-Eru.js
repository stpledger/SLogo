if (self.CavalryLogger) { CavalryLogger.start_js(["Ffu8T"]); }

__d("MessengerThreadlistRowContainer.react",["fbt","IgnoreMessagesTypedLogger","ImmutableObject","MercuryConfig","MercuryIDs","MercuryLogMessageType","MercuryMessageActions","MercuryMessageObject","MercuryMessages","MercuryParticipants","MercuryRoger.bs","MercuryThreadActions","MercuryThreadInfo","MercuryThreadlistRowContainer.react","MercuryTriodeSourceUtil","MessagingSourceEnum","MessengerActions","MessengerDialogs.bs","MessengerConfirmLeaveGroupDialogReact.bs","MessengerConfirmBlockThreadDialogReact.bs","MessengerBlockDialogReact.bs","MessageRequestUtils","MessengerAdminGroupUtils","MessengerMessageRequestsTypedLogger","MessengerThreadlistRow.react","MessagingTag","MNPlatformTagsDataManager","ReactComponentWithPureRenderMixin","React","ReactDOM","StoreAndPropBasedStateMixin","CurrentUser"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("MercuryRoger.bs").get(),j=c("MessengerConfirmLeaveGroupDialogReact.bs").jsComponent,k=c("MessengerConfirmBlockThreadDialogReact.bs").jsComponent,l=c("MessengerBlockDialogReact.bs").jsComponent,m=c("React").PropTypes,n=c("React").createClass({displayName:"MessengerThreadlistRowContainer",mixins:[c("ReactComponentWithPureRenderMixin"),c("StoreAndPropBasedStateMixin")(c("MercuryMessages"),i)],propTypes:{isActive:m.bool.isRequired,isTabbable:m.bool,folder:m.string,onOverrideSelect:m.func,showAggregation:m.bool,showActions:m.bool,thread:m.instanceOf(c("ImmutableObject")).isRequired,viewer:m.string.isRequired},statics:{calculateState:function o(p){var q=c("MercuryMessages").getForFBID(p.viewer),r=p.thread.thread_id,s=q.getThreadMessagesRangeNow(r,0,1)[0];return{lastMessage:s||null,readReceipts:i.getSeenTimestamps(r)}}},componentDidUpdate:function o(p){if(this.props.isActive&&!p.isActive)this.props.onScrollIntoView(c("ReactDOM").findDOMNode(this))},render:function o(){return c("React").createElement(c("MercuryThreadlistRowContainer.react"),babelHelpers["extends"]({},this.props,{ChildClass:c("MessengerThreadlistRow.react"),isMuted:c("MercuryThreadInfo").isMuted(this.props.thread),lastMessage:this.state.lastMessage,onArchive:this._handleArchive,onArchiveSetting:this._handleArchiveFromSetting,onDelete:this._handleDelete,onLeaveGroup:this._handleLeaveGroup,onMarkRead:this._handleMarkRead,onMarkSpam:this._handleMarkSpam,onMarkUnread:this._handleMarkUnread,onMute:this._handleMute,onSelect:this._handleSelect,onUnmute:this._handleUnmute,onIgnore:this._handleIgnore,onBlock:this._handleBlockFromSettingOrDecline,onUnblock:this._handleUnblock,readReceipts:this.state.readReceipts,showActions:this.props.showActions,showLeaveGroup:this.props.thread.is_subscribed&&!this.props.thread.is_canonical}))},_handleArchiveFromSetting:function o(){var p=this.props.isActive;this._getThreadActions().archive(this.props.thread.thread_id);p&&c("MessengerActions").selectThread(null)},_handleArchive:function o(){if(c("MercuryConfig").WMBF)this._handleBlockFromSettingOrDecline();else{var p=this.props.isActive;this._getThreadActions().archive(this.props.thread.thread_id);p&&c("MessengerActions").selectThread(null)}},_handleDelete:function o(){var p=this.props.isActive;this._getThreadActions()["delete"](this.props.thread.thread_id);p&&c("MessengerActions").selectThread(null)},_handleMarkRead:function o(){this._getThreadActions().markRead(this.props.thread.thread_id)},_handleMarkSpam:function o(){var p=this.props.isActive;this._getThreadActions().markSpam(this.props.thread.thread_id);p&&c("MessengerActions").selectThread(null)},_handleMarkUnread:function o(){this._getThreadActions().markUnread(this.props.thread.thread_id)},_handleMute:function o(p){this._getThreadActions().updateMuteSetting(this.props.thread.thread_id,p)},_handleSelect:function o(){__p&&__p();var p=c("CurrentUser").getID(),q=c("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.thread.thread_id,p);if(this.props.onOverrideSelect){this.props.onOverrideSelect(this.props.thread);return}c("MessengerActions").selectThread(this.props.thread.thread_id);var r=c("MercuryIDs").getUserIDFromThreadID(this.props.thread.thread_id),s=void 0;switch(this.props.folder){case"inbox":s="inbox";break;case"pending":s="pending";break;case"other":s="other";break}if(this.props.thread.folder!==c("MessagingTag").INBOX)new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(r).setSurface(s).setFolderType(this.props.thread.folder).setThreadKey(q).log();c("MNPlatformTagsDataManager").updateThreadTabAfterSelectThread(c("MessagingSourceEnum").MESSENGER_WEB_SEARCH,r)},_handleUnmute:function o(){this._getThreadActions().unmute(this.props.thread.thread_id)},_handleLeaveGroup:function o(){var p,q=this;if(this.props.viewer)(function(){var r=c("MessengerAdminGroupUtils").isViewerAdmin(q.props.thread.admin_ids,q.props.viewer);c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(j,{onLeave:this._onLeaveGroupConfirm,isViewerAdmin:r,thread:this.props.thread})}.bind(q))})()},_handleIgnore:function o(){var p=this.props.isActive;this._getThreadActions().changeFolder(this.props.thread.thread_id,"other");p&&c("MessengerActions").selectThread(null);new(c("IgnoreMessagesTypedLogger"))().setEvent("ignore_confirmed").setThreadID(this.props.thread.thread_fbid).setPlatform("messengerdotcom").log()},_handleBlockFromSettingOrDecline:function o(){__p&&__p();var p,q=this,r=this.props.thread.thread_id;if(c("MercuryConfig").WMBF){var p=function(){var s=c("MercuryIDs").isGroupChat(r);if(s){q._handleIgnore();return{v:void 0}}var t=c("MercuryParticipants").getNow(c("MercuryIDs").getParticipantIDFromUserID(q.props.thread.other_user_fbid)),u=t&&t.short_name||h._("sender");c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(l,{onBlock:function(){this._handleConfirmBlock(u)}.bind(this),contact:t,onToggle:this._handleBlockDialogToggle})}.bind(q))}();if(typeof p==="object")return p.v}else this._getThreadActions().blockOnMessengerDotCom(r)},_handleBlockDialogToggle:function o(){c("MessengerDialogs.bs").removeDialog()},_handleConfirmBlock:function o(p){var q=this.props.thread.thread_id;if(q)this._getThreadActions().blockIgnoreOnMessengerDotCom(this.props.isActive,q,function(){this._handleAfterBlock(p)}.bind(this))},_handleAfterBlock:function o(p){var q=this.props.thread;c("MessengerDialogs.bs").showDialog(function(){return c("React").createElement(k,{participantName:p})});var r=c("MercuryIDs").getThreadKeyfromThreadIDUserID(q.thread_id,c("CurrentUser").getID()),s=!!q&&c("MessageRequestUtils").isFiltered(q);new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(c("MercuryIDs").getThreadFBIDFromThreadID(q.thread_id)).setSurface("thread").setFolderType(s?c("MessagingTag").OTHER:c("MessagingTag").PENDING).setThreadKey(r).setEntryPoint(null).log()},_handleUnblock:function o(){this._getThreadActions().unblockOnMessengerDotCom(this.props.thread.thread_id)},_onLeaveGroupConfirm:function o(){if(!c("MercuryThreadInfo").isEmptyLocalThread(this.props.thread)){var p=this._getMessageObject().constructLogMessageObject(c("MercuryTriodeSourceUtil").getMercuryTriodeSource(),this.props.thread.thread_id,c("MercuryLogMessageType").UNSUBSCRIBE,{removed_participants:[c("MercuryIDs").getParticipantIDFromUserID(this.props.viewer)]});this._getMessageActions().send(p)}},_getThreadActions:function o(){return c("MercuryThreadActions").getForFBID(this.props.viewer)},_getMessageActions:function o(){return c("MercuryMessageActions").getForFBID(this.props.viewer)},_getMessageObject:function o(){return c("MercuryMessageObject").getForFBID(this.props.viewer)}});f.exports=n}),null);