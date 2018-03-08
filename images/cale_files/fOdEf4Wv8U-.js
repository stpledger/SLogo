if (self.CavalryLogger) { CavalryLogger.start_js(["PUTEG"]); }

__d("MessengerDomIDs.bs",["uniqueID"],(function a(b,c,d,e,f,g){"use strict";var h={COMPOSER_INPUT_DESCRIPTION:c("uniqueID")(),CONVERSATION:c("uniqueID")(),MAIN_LABEL:c("uniqueID")(),MUTE_DIALOG_TITLE:c("uniqueID")(),THREAD_INFO_PANEL:c("uniqueID")(),THREAD_TITLE:c("uniqueID")()};g.ids=h}),null);
__d("MessengerRadioList.bs",["bs_js_boolean","ReasonReact.bs","bs_js_null_undefined","MessengerRadioList.react"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(l,m,n,o){return c("ReasonReact.bs").wrapJsForReason(c("MessengerRadioList.react"),{name:c("bs_js_null_undefined").from_opt(l),onValueChange:m,selectedValue:n},o)}var i=[h];function j(l,m,n,o,p,q,r){var s=l?l[0]:0;return c("ReasonReact.bs").wrapJsForReason(c("MessengerRadioList.react").Item,{disabled:c("bs_js_boolean").to_js_boolean(s),className:c("bs_js_null_undefined").from_opt(m),name:c("bs_js_null_undefined").from_opt(n),onSelect:c("bs_js_null_undefined").from_opt(o),selectedValue:c("bs_js_null_undefined").from_opt(p),value:q},r)}var k=[j];g.List=i;g.Item=k}),null);
__d("MessengerMuteDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MercuryConfig","MessengerDomIDs.bs","MessengerRadioList.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(s){if(typeof s==="number")return-1;else if(s.tag)return s[0]*3600;else return s[0]*60}var k=c("bs_block").__(0,[30]),l=c("bs_block").__(1,[1]),m=c("bs_block").__(1,[8]),n=c("bs_block").__(1,[24]),o=c("ReasonReact.bs").reducerComponent("MessengerMuteDialogReact");function p(s,t,u){__p&&__p();var v=function v(u,x){var y=j(x[1]);c("bs_curry")._1(s,y);return c("bs_curry")._1(t,false)},w=o.slice();w[9]=function(x){var y=+c("MercuryConfig").Mentions;return c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Dialog[0](0,t,0,0,[c("MessengerDomIDs.bs").ids.MUTE_DIALOG_TITLE],0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Header[0](0,0,i._("Mute Conversation"))),c("ReasonReact.bs").element(0,0,c("MessengerDialogBodyReact.bs").make(0,[y!==0?c("React").createElement("div",{className:"_3-96"},i._("You will continue to receive \u0040mention notifications while muted.")):null,c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").List[0](["messengerMuteOptions"],function(z){return c("bs_curry")._1(x[3],[z])},x[1],[c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").Item[0](0,0,0,0,0,k,[i._("For 30 minutes")])),c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").Item[0](0,0,0,0,0,l,[i._("For 1 hour")])),c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").Item[0](0,0,0,0,0,m,[i._("For 8 hours")])),c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").Item[0](0,0,0,0,0,n,[i._("For 24 hours")])),c("ReasonReact.bs").element(0,0,c("MessengerRadioList.bs").Item[0](0,0,0,0,0,0,[i._("Indefinitely")]))]))])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Footer[0](0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").CancelButton[0](0,[])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Button[0](0,[i._("Mute")],0,0,[c("bs_curry")._1(x[0],v)],[0],0,0,[]))]))]))};w[10]=function(){return k};w[12]=function(x,u){return c("bs_block").__(0,[x[0]])};return w}var q=c("ReasonReact.bs").wrapReasonForJs(o,function(s){return p(s.onMute,s.onToggle,[])}),r=0;g.convertMuteToSeconds=j;g.thirtyMinutes=k;g.oneHour=l;g.eightHours=m;g.twentyFourHours=n;g.always=r;g.component=o;g.make=p;g.jsComponent=q}),null);
__d("MessengerCompositeMuteSettingsDialogReact.bs",["cx","fbt","bs_block","bs_curry","React","ReasonReact.bs","MercuryConfig","MessengerDomIDs.bs","MessengerDialogs.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","MessengerMuteDialogReact.bs","MessengerCheckboxInputReact.bs"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(n){if(n)return 0;else return c("MessengerDialogs.bs").removeDialog(0)}var k=c("ReasonReact.bs").reducerComponent("MessengerCompositeMuteSettingsDialogReact");function l(n,o,p,q,r,s,t,u,v){__p&&__p();var w=function w(){c("MessengerDialogs.bs").removeDialog(0);return c("bs_curry")._1(u,false)},x=k.slice();x[9]=function(y){var z=y[1],A=z[0],B=+c("MercuryConfig").Reactions,C=A!==0||B===0?null:[c("React").createElement("div",{key:"reactionsheader",className:"_374c"},i._("Reactions")),c("React").createElement("div",{key:"reactionsbody",className:"_374d"},c("ReasonReact.bs").element(0,0,c("MessengerCheckboxInputReact.bs").make(1-z[2],function(){return c("bs_curry")._1(y[3],2)},[])),c("React").createElement("span",{className:"_1pr_"},i._("Receive notifications for reactions")))],D=q!==0?c("React").createElement("div",{className:"_374b"},c("React").createElement("div",{className:"_374c"},i._("Mentions")),c("React").createElement("div",{className:"_374d"},c("ReasonReact.bs").element(0,0,c("MessengerCheckboxInputReact.bs").make(1-z[1],function(){return c("bs_curry")._1(y[3],1)},[])),c("React").createElement("span",{className:"_1pr_"},i._("Receive notifications for mentions")))):null;return c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Dialog[0](0,u,0,0,[c("MessengerDomIDs.bs").ids.MUTE_DIALOG_TITLE],["default"],[544],[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Header[0](0,[c("MessengerDomIDs.bs").ids.MUTE_DIALOG_TITLE],[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Title[0](0,[i._("Conversation Notifications")])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Button[0](0,[i._("Done")],0,0,[w],[0],0,0,[]))])),c("ReasonReact.bs").element(0,0,c("MessengerDialogBodyReact.bs").make(0,[c("React").createElement("div",{className:"_374b"},c("React").createElement("div",{className:"_374c"},i._("Message Notifications")),c("React").createElement("div",{className:"_374d"},c("ReasonReact.bs").element(0,0,c("MessengerCheckboxInputReact.bs").make(1-z[0],function(){return c("bs_curry")._1(y[3],0)},[])),c("React").createElement("span",{className:"_1pr_"},i._("Receive notifications for new messages"))),C),D]))]))};x[10]=function(){return[n,o,p]};x[12]=function(y,z){__p&&__p();if(typeof y==="number")switch(y){case 0:if(z[0])return c("bs_block").__(3,[[0,z[1],z[2]],function(){return c("bs_curry")._1(t,0)}]);else return c("bs_block").__(2,[function(A){return c("MessengerDialogs.bs").showDialog(function(){return c("ReasonReact.bs").element(0,0,c("MessengerMuteDialogReact.bs").make(function(B){c("bs_curry")._1(t,B);return c("bs_curry")._1(A[3],[B])},j,[]))})}]);case 1:return c("bs_block").__(3,[[z[0],1-z[1],z[2]],function(A){return c("bs_curry")._1(r,A[1][1])}]);case 2:return c("bs_block").__(3,[[z[0],z[1],1-z[2]],function(A){return c("bs_curry")._1(s,A[1][2])}])}else{var n=y[0]!==0?1:0;return c("bs_block").__(0,[[n,z[1],z[2]]])}};return x}var m=c("ReasonReact.bs").wrapReasonForJs(k,function(n){return l(+n.isMuted,+n.mentionsMuted,+n.reactionsMuted,+n.showMentions,n.onMentionsMute,n.onReactionsMute,n.onMute,n.onToggle,[])});g.handleDialogToggle=j;g.component=k;g.make=l;g.jsComponent=m}),null);
__d("messengerCompositeMuteSettingsDialogReactComponent",["MessengerCompositeMuteSettingsDialogReact.bs"],(function a(b,c,d,e,f,g){"use strict";var h=c("MessengerCompositeMuteSettingsDialogReact.bs").jsComponent;f.exports=h}),null);
__d("messengerMuteDialogReactComponent",["MessengerMuteDialogReact.bs"],(function a(b,c,d,e,f,g){"use strict";var h=c("MessengerMuteDialogReact.bs").jsComponent;f.exports=h}),null);