if (self.CavalryLogger) { CavalryLogger.start_js(["lumAF"]); }

__d("MessengerInfoPanelManageMessagesReact.bs",["cx","fbt","React","Utils.bs","MercuryIDs","ReasonReact.bs","ShimButtonReact.bs","MercuryParticipants","MNCommerceDialogStateActions","MNCommercePromotionManageBlockDialogBootloader.react"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact.bs").statelessComponent("MessengerInfoPanelManageMessagesReact");function k(m){var n=c("MercuryIDs").getParticipantIDFromFromThreadID(m.thread_id);if(n==null)return 0;else{var o=c("MercuryParticipants").getNow(n);if(o==null)return 0;else return c("Utils.bs").isTruthy(o.is_business_enabled)}}function l(m,n,o){__p&&__p();var p=function p(r){r.preventDefault();r.stopPropagation();c("MNCommerceDialogStateActions").showDialog(c("MNCommercePromotionManageBlockDialogBootloader.react"),{pageID:m.other_user_fbid});return 0},q=j.slice();q[9]=function(){if(k(m))return c("React").createElement("div",{className:"_3szn _3szo"},c("React").createElement("div",{className:"_3szp"}),c("ReasonReact.bs").element(0,0,c("ShimButtonReact.bs").make(["_3szq"],[1],[p],[i._("Manage Messages")])));else return null};return q}g.component=j;g.isBusinessEnabled=k;g.make=l}),null);