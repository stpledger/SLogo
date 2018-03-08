if (self.CavalryLogger) { CavalryLogger.start_js(["U6dIM"]); }

__d("MercurySyncDispatcher",["MercuryDelayedDispatcher","MercuryGlobalActionType","MercuryPayloadSource","MercuryServerPayloadPreprocessor","MercurySyncThreadAdminsAddToGroupTransformer","MercurySyncThreadAdminsRemovedFromGroupTransformer","MercurySyncAdminTextMessageTransformer","MercurySyncClientPayloadTransformer","MercurySyncDeliveryReceiptTransformer","MercurySyncMarkFolderSeenTransformer","MercurySyncMarkReadTransformer","MercurySyncMarkUnreadTransformer","MercurySyncMessageDeleteTransformer","MercurySyncNewMessageTransformer","MercurySyncReadReceiptTransformer","MercurySyncPagesManagerEventTransformer","MercurySyncParticipantLeftGroupThreadTransformer","MercurySyncParticipantsAddedToGroupThreadTransformer","MercurySyncRTCEventLogTransformer","MercurySyncThreadDeleteTransformer","MercurySyncMarkFolderChangeTransformer","MercurySyncThreadMuteSettingsTransformer","MercurySyncThreadNameTransformer","MercurySyncThreadActionTransformer","MercurySyncReplaceMessageTransformer","MercurySyncThreadJoinableModeTransformer","MercurySyncThreadApprovalModeTransformer","MercurySyncThreadApprovalQueueTransformer","MercurySyncRtcCallDataTransformer","MercurySyncDeltaTypes","MercurySingletonProvider","MontageActions"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="FOLDER_MONTAGE";i.getForFBID=function(k){return j.getForFBID(k)};i.get=function(){return j.get()};function i(k){this.$MercurySyncDispatcher1=k;this.$MercurySyncDispatcher2=c("MercuryDelayedDispatcher").getForFBID(this.$MercurySyncDispatcher1);this.$MercurySyncDispatcher3=c("MercuryServerPayloadPreprocessor").getForFBID(this.$MercurySyncDispatcher1)}i.prototype.process=function(k){__p&&__p();var l=void 0,m=void 0;switch(k["class"]){case c("MercurySyncDeltaTypes").NewMessage:l=c("MercurySyncNewMessageTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ReplaceMessage:l=c("MercurySyncReplaceMessageTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").DeliveryReceipt:l=c("MercurySyncDeliveryReceiptTransformer").transform(k);this.$MercurySyncDispatcher3.handleUpdate(l);break;case c("MercurySyncDeltaTypes").MarkRead:l=c("MercurySyncMarkReadTransformer").transform(k);var n=[],o=[];l.forEach(function(p){if(p.action_type===c("MercuryGlobalActionType").MARK_ALL_READ)n.push(p);else o.push(p)});n.length&&this.$MercurySyncDispatcher5(n);o.length&&this.$MercurySyncDispatcher6(o);break;case c("MercurySyncDeltaTypes").MarkUnread:l=c("MercurySyncMarkUnreadTransformer").transform(k);this.$MercurySyncDispatcher6(l);break;case c("MercurySyncDeltaTypes").ParticipantLeftGroupThread:l=c("MercurySyncParticipantLeftGroupThreadTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ParticipantsAddedToGroupThread:l=c("MercurySyncParticipantsAddedToGroupThreadTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").RTCEventLog:l=c("MercurySyncRTCEventLogTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ThreadName:l=c("MercurySyncThreadNameTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ReadReceipt:l=c("MercurySyncReadReceiptTransformer").transform(k);this.$MercurySyncDispatcher3.handleUpdate(l);break;case c("MercurySyncDeltaTypes").AdminTextMessage:l=c("MercurySyncAdminTextMessageTransformer").transform(this.$MercurySyncDispatcher1,k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").MessageDelete:m=k.threadKey.threadFbId;if(m&&k.folder&&k.folder===h)c("MontageActions").requestUpdate(m);else{l=c("MercurySyncMessageDeleteTransformer").transform(k);this.$MercurySyncDispatcher4(l)}break;case c("MercurySyncDeltaTypes").ThreadAction:l=c("MercurySyncThreadActionTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ThreadDelete:l=c("MercurySyncThreadDeleteTransformer").transform(k);this.$MercurySyncDispatcher6(l);break;case c("MercurySyncDeltaTypes").AdminAddedToGroupThread:l=c("MercurySyncThreadAdminsAddToGroupTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").AdminRemovedFromGroupThread:l=c("MercurySyncThreadAdminsRemovedFromGroupTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ThreadMuteSettings:l=c("MercurySyncThreadMuteSettingsTransformer").transform(k);this.$MercurySyncDispatcher6([l]);break;case c("MercurySyncDeltaTypes").PagesManagerEvent:l=c("MercurySyncPagesManagerEventTransformer").transform(k);if(!l)return;this.$MercurySyncDispatcher6([l]);break;case c("MercurySyncDeltaTypes").JoinableMode:l=c("MercurySyncThreadJoinableModeTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ApprovalMode:l=c("MercurySyncThreadApprovalModeTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ApprovalQueue:l=c("MercurySyncThreadApprovalQueueTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").ClientPayload:l=c("MercurySyncClientPayloadTransformer").transform(k);if(!l)return;this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").GenieMessage:l=c("MercurySyncNewMessageTransformer").transform(this.$MercurySyncDispatcher1,k.deltaNewMessage);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").MontageMessage:m=k.newMessage.messageMetadata.actorFbId;if(m)c("MontageActions").requestUpdate(m);break;case c("MercurySyncDeltaTypes").RtcCallData:l=c("MercurySyncRtcCallDataTransformer").transform(k);this.$MercurySyncDispatcher4(l);break;case c("MercurySyncDeltaTypes").MarkFolderSeen:l=c("MercurySyncMarkFolderSeenTransformer").transform(k);this.$MercurySyncDispatcher5(l);break;case c("MercurySyncDeltaTypes").ThreadFolder:l=c("MercurySyncMarkFolderChangeTransformer").transform(k);this.$MercurySyncDispatcher6([l]);break;default:break}};i.prototype.$MercurySyncDispatcher4=function(k){var l=k.other_user_fbid||k.thread_fbid;this.$MercurySyncDispatcher2.handleUpdateWaitForThread({actions:[k],payload_source:c("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE},l)};i.prototype.$MercurySyncDispatcher5=function(k){this.$MercurySyncDispatcher3.handleUpdate({global_actions:k,payload_source:c("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE})};i.prototype.$MercurySyncDispatcher6=function(k){this.$MercurySyncDispatcher3.handleUpdate({actions:k,payload_source:c("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE})};var j=new(c("MercurySingletonProvider"))(i);f.exports=i}),null);