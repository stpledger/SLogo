if (self.CavalryLogger) { CavalryLogger.start_js(["uyJvw"]); }

__d("MessengerSimpleDialogReact.bs",["fbt","ReasonReact.bs","MessengerDialogs.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("ReasonReact.bs").statelessComponent("MessengerSimpleDialogReact");function j(m){if(m)return 0;else return c("MessengerDialogs.bs").removeDialog(0)}function k(m,n,o){var p=i.slice();p[9]=function(){return c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Dialog[0](0,j,0,0,0,0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Header[0](0,0,m)),c("ReasonReact.bs").element(0,0,c("MessengerDialogBodyReact.bs").make(0,[n])),c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Footer[0](0,0,[c("ReasonReact.bs").element(0,0,c("MessengerDialogReact.bs").Button[0]([0],[h._("OK")],0,0,0,[0],0,0,[]))]))]))};return p}var l=c("ReasonReact.bs").wrapReasonForJs(i,function(m){return k(m.title,m.body,[])});g.component=i;g.handleToggle=j;g.make=k;g.jsComponent=l}),null);