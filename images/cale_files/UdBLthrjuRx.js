if (self.CavalryLogger) { CavalryLogger.start_js(["qz+dc"]); }

__d("MessengerRTCVoiceCallButtonReact.bs",["ix","cx","fbt","React","asset","ImageReact.bs","CurrentUser","ReasonReact.bs"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k={height:"32px",width:"32px"};function l(q,r){return{clipRule:"evenodd",fill:"none",fillRule:"evenodd",stroke:q,strokeMiterlimit:"10",strokeWidth:"2"}}var m=l("#888888",0),n=c("ReasonReact.bs").statelessComponent("MessengerRTCVoiceCallButtonReact");function o(q,r,s,t){var u=n.slice();u[9]=function(){var v=s!==0?j._("Start a group call"):j._("Start a voice call"),w=r!==0?l(q,0):m,x=+c("CurrentUser").isWorkUser();if(x!==0)return c("React").createElement("div",{className:"_2phz"},c("ReasonReact.bs").element(0,0,c("ImageReact.bs").make(0,0,[h("470545")],0,[v],0,0,[])));else return c("React").createElement("div",{style:k,title:v},c("React").createElement("svg",{style:w,viewBox:"0 0 64 64"},c("React").createElement("title",undefined,v),c("React").createElement("path",{d:"M48.3,50.5c-7.7,6.5-24.2-10-24.5-10.3C23.5,39.9,7,23.4,13.5,15.7c4.8-5.7,6.3-3.4,7-2.7\nc0.6,0.5,5.7,7.8,6,9.2c0.3,1.4-2.4,4.6-2.2,5.9c0.2,1.2,3.6,5,5.1,6.5c1.5,1.5,5.3,4.9,6.5,5.1c1.2,0.2,4.4-2.5,5.9-2.2\nc1.4,0.3,8.7,5.4,9.2,6C51.6,44.2,54,45.7,48.3,50.5z"})))};return u}var p=c("ReasonReact.bs").wrapReasonForJs(n,function(q){return o(q.customColor,+q.isAvailable,+q.isGroupChat,[])});g.svgWrapperStyle=k;g.svgStyle=l;g.unavailable=m;g.component=n;g.make=o;g.jsComponent=p}),null);