if (self.CavalryLogger) { CavalryLogger.start_js(["xQTdS"]); }

__d("MercurySyncThreadApprovalQueueTransformer",["MercuryActionType","MercuryIDs","MessengerApprovalQueueTypes"],(function a(b,c,d,e,f,g){"use strict";function h(i){if(i.inviterFbId)return{action_type:c("MercuryActionType").APPROVAL_QUEUE,action_id:null,thread_fbid:i.messageMetadata.threadKey.threadFbId,removed_group_id:i.action===c("MessengerApprovalQueueTypes").REMOVED?i.recipientFbId:null,added_group_id:i.action===c("MessengerApprovalQueueTypes").REQUESTED?{requester:{id:i.recipientFbId},inviter:{id:i.inviterFbId}}:null};var j=c("MercuryIDs").getParticipantIDFromUserID(i.recipientFbId);return{action_type:c("MercuryActionType").APPROVAL_QUEUE,action_id:null,thread_fbid:i.messageMetadata.threadKey.threadFbId,removed_id:i.action===c("MessengerApprovalQueueTypes").REMOVED?j:null,added_id:i.action===c("MessengerApprovalQueueTypes").REQUESTED?j:null}}f.exports={transform:h}}),null);