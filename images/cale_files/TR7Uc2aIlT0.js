if (self.CavalryLogger) { CavalryLogger.start_js(["AnpVL"]); }

__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","DraftTreeAdapter","immutable","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey","gkx"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("gkx")("AT7I-kBaiZBk-5ySRgJaDBW6tSXkDwvlqxCLLVy7xjKFQh4OpQOjZpy_bJOblZZDQOjyMyX8JeUF5aALSjx2ACRN"),j=c("immutable").List,k=c("immutable").Map,l=c("immutable").OrderedMap,m=function m(v,w){var x=v.key,y=v.type,z=v.data,A=v.text,B=v.depth,C={text:A,depth:B||0,type:y||"unstyled",key:x||c("generateRandomKey")(),data:k(z),characterList:n(v,w)};return C},n=function n(v,w){var x=v.text,y=v.entityRanges,z=v.inlineStyleRanges,A=y||[],B=z||[];return c("createCharacterList")(c("decodeInlineStyleRanges")(x,B),c("decodeEntityRanges")(x,A.filter(function(C){return Object.prototype.hasOwnProperty.call(w,C.key)}).map(function(C){return babelHelpers["extends"]({},C,{key:w[C.key]})})))},o=function o(v){return babelHelpers["extends"]({},v,{key:v.key||c("generateRandomKey")()})},p=function p(v,w,x){var y=w.map(function(z){return babelHelpers["extends"]({},z,{parentRef:x})});return v.concat(y.reverse())},q=function q(v,w){__p&&__p();return v.map(o).reduce(function(x,y,z){__p&&__p();Array.isArray(y.children)||h(0);var A=y.children.map(o),B=new(c("ContentBlockNode"))(babelHelpers["extends"]({},m(y,w),{prevSibling:z===0?null:v[z-1].key,nextSibling:z===v.length-1?null:v[z+1].key,children:j(A.map(function(K){return K.key}))}));x=x.set(B.getKey(),B);var C=p([],A,B);while(C.length>0){var D=C.pop(),E=D.parentRef,F=E.getChildKeys(),G=F.indexOf(D.key),H=Array.isArray(D.children);if(!H){H||h(0);break}var I=D.children.map(o),J=new(c("ContentBlockNode"))(babelHelpers["extends"]({},m(D,w),{parent:E.getKey(),children:j(I.map(function(K){return K.key})),prevSibling:G===0?null:F.get(G-1),nextSibling:G===F.size-1?null:F.get(G+1)}));x=x.set(J.getKey(),J);C=p(C,I,J)}return x},l())},r=function r(v,w){return l(v.map(function(x){var y=new(c("ContentBlock"))(m(x,w));return[y.getKey(),y]}))},s=function s(v,w){var x=Array.isArray(v.blocks[0].children),y=i&&!x?c("DraftTreeAdapter").fromRawStateToRawTreeState(v).blocks:v.blocks;if(!i)return r(x?c("DraftTreeAdapter").fromRawTreeStateToRawState(v).blocks:y,w);return q(y,w)},t=function t(v){var w=v.entityMap,x={};Object.keys(w).forEach(function(y){var z=w[y],A=z.type,B=z.mutability,C=z.data;x[y]=c("DraftEntity").__create(A,B,C||{})});return x},u=function u(v){Array.isArray(v.blocks)||h(0);var w=t(v),x=s(v,w),y=x.isEmpty()?new(c("SelectionState"))():c("SelectionState").createEmpty(x.first().getKey());return new(c("ContentState"))({blockMap:x,entityMap:w,selectionBefore:y,selectionAfter:y})};f.exports=u}),null);