if (self.CavalryLogger) { CavalryLogger.start_js(["iAStN"]); }

__d("MessengerPresenceStatusReact.bs",["fbt","React","ReasonReact.bs","bs_js_primitive"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("ReasonReact.bs").statelessComponent("MessengerPresenceStatusReact");function j(l,m,n,o,p){__p&&__p();var q=i.slice();q[9]=function(){__p&&__p();var r,s=0;if(m!==0&&o)r=h._("Active on {platform}",[h.param("platform",o[0])]);else s=1;if(s===1)r=n?h._("Active {time} ago",[h.param("time",n[0])]):null;var t={};if(l)t.className=l[0];return c("React").createElement("span",t,r)};return q}var k=c("ReasonReact.bs").wrapReasonForJs(i,function(l){return j(c("bs_js_primitive").null_undefined_to_opt(l.className),+l.isUserActive,c("bs_js_primitive").null_undefined_to_opt(l.lastActive),c("bs_js_primitive").null_undefined_to_opt(l.platform),[])});g.component=i;g.make=j;g.jsComponent=k}),null);