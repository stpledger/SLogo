if (self.CavalryLogger) { CavalryLogger.start_js(["CimuW"]); }

__d("MercurySyncThreadApprovalModeTransformer",["MercuryActionType","MessengerApprovalModeTypes"],(function a(b,c,d,e,f,g){"use strict";function h(i){return{action_type:c("MercuryActionType").APPROVAL_MODE,action_id:null,thread_fbid:i.messageMetadata.threadKey.threadFbId,approval_mode:c("MessengerApprovalModeTypes")[i.mode]}}f.exports={transform:h}}),null);