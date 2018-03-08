if (self.CavalryLogger) { CavalryLogger.start_js(["auQuW"]); }

__d("MercuryMessageGroup",["MercuryActionType","MercuryAttachmentType","MercuryMessageInfo","MercuryShareAttachmentRenderLocations","MercuryThreadlistConstants","MessengerLightweightActionUtils","enumerate"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={calculateMessageGroups:function k(l,m){__p&&__p();var n=[],o=null,p={value:null},q=c("enumerate")(l),r=void 0;while(!(r=q.next()).done){var s=h.canAppendMessageToLastGroup(p.value,r.value,m);if(!s){o=[];n.push(o)}o.push(r.value);p=r}return n},canAppendMessageToLastGroup:function k(l,m,n){var o=c("MercuryThreadlistConstants").GROUPING_THRESHOLD;if(!l||i(l,n)||i(m,n)||l.author!=m.author||l.timestamp<m.timestamp-o||l.is_spoof_warning!==m.is_spoof_warning||l.page_admin_notes)return false;var p=c("MercuryMessageInfo").getPersona(l),q=c("MercuryMessageInfo").getPersona(m);if(!p&&!q)return true;return p===null||q===null?false:p.id===q.id}};function i(k,l){var m=k.has_attachment;if(m&&(l===c("MercuryShareAttachmentRenderLocations").MESSENGER||l===c("MercuryShareAttachmentRenderLocations").CHAT))m=j(k);return!!(c("MessengerLightweightActionUtils").isLWAMessage(k)||k.action_type==c("MercuryActionType").LOG_MESSAGE||m||k.html_body||k.body&&k.body.length>c("MercuryThreadlistConstants").MAX_CHARS_BEFORE_BREAK)}function j(k){var l=k.attachments[0];return!l||l.attach_type===c("MercuryAttachmentType").STICKER||l.attach_type===c("MercuryAttachmentType").ANIMATED_IMAGE}f.exports=h}),null);