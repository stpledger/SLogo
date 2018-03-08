if (self.CavalryLogger) { CavalryLogger.start_js(["txlNg"]); }

__d("MercurySyncClientPayloadTransformer",["DateConsts","LiveLocationStopReason","MercuryActionType","MercuryIDs","MessageLiveLocationClientSyncProtocolStopReason","PageCommItemStatus","keyMirror"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("keyMirror")(c("LiveLocationStopReason")),i=8;function j(r){__p&&__p();var s=r.payload;s=JSON.parse(String.fromCharCode.apply(null,s));var t=s&&s.deltas,u=t[0];if(u.deltaMessageReaction)return m(u.deltaMessageReaction);else if(u.liveLocationData)return o(u.liveLocationData);else if(u.deltaUpdateGroupEventRSVPStatus){var v=u.deltaUpdateGroupEventRSVPStatus;return n(v)}else if(u.deltaPageThreadFollowUpData)return q(u.deltaPageThreadFollowUpData);else if(u.deltaChangeViewerStatus)return k(u.deltaChangeViewerStatus);else if(u.deltaMontageDirectExpire)return l(u.deltaMontageDirectExpire);else return p(u)}function k(r){var s=r.actorFbid,t=r.canViewerReply,u=r.reason,v=r.threadKey,w=c("MercuryIDs").getParticipantIDFromUserID(v.otherUserFbId);return{action_type:c("MercuryActionType").BLOCK_STATUS_CHANGED,actorFbid:s,canViewerReply:t,reason:u,message_blocked_ids:[w],other_user_fbid:v.otherUserFbId.toString()}}function l(r){var s=r.threadKey.threadFbId||r.threadKey.otherUserFbId;return{action_type:c("MercuryActionType").MONTAGE_DIRECT_EXPIRE,messageId:r.messageId,timestamp:r.timestamp,thread_fbid:s.toString(),keep_expiry_timestamp:r.keepExpiryTimestamp}}function m(r){var s=r.messageId,t=r.offlineThreadingId,u=r.reaction,v=r.senderId,w=r.userId,x=r.threadKey.threadFbId||r.threadKey.otherUserFbId;return{action_type:c("MercuryActionType").REACTION_UPDATE,messageId:s,offlineThreadingId:t,reaction:u,senderId:v,thread_fbid:x.toString(),userId:w}}function n(r){var s=r.threadKey&&r.threadKey.threadFbId;if(!s)return null;var t=r.actorFbId,u=r.rsvpStatus;if(!t)return null;return{action_type:c("MercuryActionType").EVENT_RSVP_CHANGED,thread_fbid:s.toString(),actor_fbid:t.toString(),rsvp_status:u}}function o(r){__p&&__p();var s=r.threadKey;if(!s)return null;var t=s.threadFbId||s.otherUserFbId;if(!t)return null;if(!r.messageLiveLocations||r.messageLiveLocations.length!==1)return null;var u=r.messageLiveLocations[0],v=u.expirationTime,w=u.stopReason!=null||Date.now()/c("DateConsts").MS_PER_SEC>v,x=function x(B){return B/Math.pow(10,i)},y=u.coordinate?{latitude:x(u.coordinate.latitude),longitude:x(u.coordinate.longitude)}:null,z=null;if(u.destination)z={latitude:x(u.destination.latitude),longitude:x(u.destination.longitude),label:u.destination.label};var A=null;switch(u.stopReason){case c("MessageLiveLocationClientSyncProtocolStopReason").EXPIRED:A=h.EXPIRED;break;case c("MessageLiveLocationClientSyncProtocolStopReason").CANCELED:A=h.CANCELED;break;case c("MessageLiveLocationClientSyncProtocolStopReason").ARRIVED:A=h.ARRIVED;break}return{action_type:c("MercuryActionType").LIVE_LOCATION_UPDATE,thread_fbid:t.toString(),messageId:u.messageId,liveLocation:{live_location_id:u.id.toString(),is_expired:w,expiration_time:v,sender:{id:u.senderId.toString()},coordinate:y,location_title:u.locationTitle,sender_destination:z,stop_reason:A}}}function p(r){var s=r&&r.deltaPaymentPinProtectionStatusData,t=s&&s.threadKey&&s.threadKey.otherUserFbId,u=s&&s.isPinProtected;if(!t)return null;var v=t.toString();return{action_type:c("MercuryActionType").IS_PIN_PROTECTED,thread_fbid:v,is_pin_protected:u}}function q(r){var s=r.threadKey.otherUserFbId;return{action_type:c("MercuryActionType").UPDATE_COMM_STATUS,comm_status:r.isFollowUp?c("PageCommItemStatus").FOLLOW_UP:c("PageCommItemStatus").TODO,thread_fbid:s.toString()}}f.exports={transform:j}}),null);