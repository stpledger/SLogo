if (self.CavalryLogger) { CavalryLogger.start_js(["vRFw6"]); }

__d("MercurySyncThreadJoinableModeTransformer",["MercuryActionType","MessengerJoinableModeType"],(function a(b,c,d,e,f,g){"use strict";function h(i){return{action_type:c("MercuryActionType").JOINABLE_MODE,action_id:null,thread_fbid:i.messageMetadata.threadKey.threadFbId,joinable_mode:{mode:c("MessengerJoinableModeType")[i.mode],link:i.link}}}f.exports={transform:h}}),null);