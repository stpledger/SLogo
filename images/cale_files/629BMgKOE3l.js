if (self.CavalryLogger) { CavalryLogger.start_js(["tWNFS"]); }

__d("MessengerInfoPanelCustomColorReact.bs",["cx","fbt","Keys.bs","bs_curry","React","ReasonReact.bs","MessengerDialogs.bs","MessengerCustomColorUtils.bs","MessengerChangeColorDialogReact.bs","MessengerChangeColorIconSVGReact.bs"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=c("ReasonReact.bs").reducerComponent("MessengerInfoPanelCustomColorReact");function k(n,o){var p=o[1][0][0];if(p)return p[0].focus();else return 0}function l(n,o){o[1][0][0]=n==null?0:[n];return 0}function m(n,o,p){__p&&__p();var q=function q(u){return c("MessengerDialogs.bs").showDialog(function(){return c("ReasonReact.bs").element(0,0,c("MessengerChangeColorDialogReact.bs").make(c("MessengerCustomColorUtils.bs").customColorOrBlue(n),[o],[c("bs_curry")._1(u,k)],[]))})},r=function r(u,v){u.preventDefault();return q(v[0])},s=function s(u,v){if(u.keyCode===c("Keys.bs").$$return){u.preventDefault();return q(v[0])}else return 0},t=j.slice();t[9]=function(u){if(n.customization_enabled){var v=c("MessengerCustomColorUtils.bs").customColorOrBlue(n);return c("React").createElement("div",{ref:c("bs_curry")._1(u[0],l),className:"_3szn _3szo",tabIndex:0,onKeyDown:c("bs_curry")._1(u[0],s),onClick:c("bs_curry")._1(u[0],r)},c("React").createElement("div",{className:"_3szp"},c("MessengerChangeColorIconSVGReact.bs").make("_17vc",v)),c("React").createElement("div",{className:"_3szq"},i._("Change Color")))}else return null};t[10]=function(){return[[0]]};t[12]=function(p,u){return 0};return t}g.component=j;g.handleDialogClose=k;g.setTheRef=l;g.make=m}),null);