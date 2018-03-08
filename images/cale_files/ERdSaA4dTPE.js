if (self.CavalryLogger) { CavalryLogger.start_js(["J5mnh"]); }

__d("convertFromDraftStateToRaw",["invariant","ContentBlock","ContentBlockNode","DraftStringKey","encodeEntityRanges","encodeInlineStyleRanges"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=function i(n,o){return{key:n.getKey(),text:n.getText(),type:n.getType(),depth:n.getDepth(),inlineStyleRanges:c("encodeInlineStyleRanges")(n),entityRanges:c("encodeEntityRanges")(n,o),data:n.getData().toObject()}},j=function j(n,o,p,q){__p&&__p();if(n instanceof c("ContentBlock")){p.push(i(n,o));return}n instanceof c("ContentBlockNode")||h(0);var r=n.getParentKey(),s=q[n.getKey()]=babelHelpers["extends"]({},i(n,o),{children:[]});if(r){q[r].children.push(s);return}p.push(s)},k=function k(n,o){__p&&__p();var p=o.entityMap,q=[],r={},s={},t=0;n.getBlockMap().forEach(function(u){u.findEntityRanges(function(v){return v.getEntity()!==null},function(v){var w=u.getEntityAt(v),x=c("DraftStringKey").stringify(w);if(s[x])return;s[x]=w;p[x]=""+t;t++});j(u,p,q,r)});return{blocks:q,entityMap:p}},l=function l(n,o){var p=o.blocks,q=o.entityMap,r={};Object.keys(q).forEach(function(s,t){var u=n.getEntity(c("DraftStringKey").unstringify(s));r[t]={type:u.getType(),mutability:u.getMutability(),data:u.getData()}});return{blocks:p,entityMap:r}},m=function m(n){var o={entityMap:{},blocks:[]};o=k(n,o);o=l(n,o);return o};f.exports=m}),null);