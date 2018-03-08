if (self.CavalryLogger) { CavalryLogger.start_js(["G5jTF"]); }

__d("MessengerFormattingUtils",["cx","Newline.react","React","ReactFragment","UnicodeUtils","gkx"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(u){return{offset:u[1].length,length:c("UnicodeUtils").strlen(u[2])+2,innerOffset:1,innerText:u[2]}}var j={pattern:/([\s_~\'\"(]|^)\*(\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s_~\'\"(]|^)\*(?:\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/,formatter:function u(v){return c("React").createElement("b",null,v)},getRangeInMatch:i,recursivelyFormat:true},k={pattern:/([\s*~\'\"(]|^)_(\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*~\'\"(]|^)_(?:\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/,formatter:function u(v){return c("React").createElement("i",null,v)},getRangeInMatch:i,recursivelyFormat:true},l={pattern:/([\s*_\'\"(]|^)~(\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_\'\"(]|^)~(?:\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/,formatter:function u(v){return c("React").createElement("s",null,v)},getRangeInMatch:i,recursivelyFormat:true},m={pattern:/([\s*_~\'\"(]|^)`(\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_~\'\"(]|^)`(?:\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/,formatter:function u(v){return c("React").createElement("code",null,v)},getRangeInMatch:i,recursivelyFormat:false},n=function n(u){var v={blockquote1:c("React").createElement("blockquote",{className:"_pye"},c("React").createElement("div",{className:"_pyf"}),u),blockquote2:c("React").createElement(c("Newline.react"),null)};return c("ReactFragment").create(v)},o={pattern:/(^>>> ?)((.|(\r\n)|\r|\n)*?\S(.|(\r\n)|\r|\n)*?)^<<<\s*?((\r\n)|\r|\n|$)/gm,nonCapturingPattern:/(^>>> ?)((.|(\r\n)|\r|\n)*?\S(.|(\r\n)|\r|\n)*?)^<<<\s*((\r\n)|\r|\n|$)/m,formatter:n,getRangeInMatch:function u(v){return{offset:0,length:c("UnicodeUtils").strlen(v[0]),innerOffset:c("UnicodeUtils").strlen(v[1]),innerText:v[2]}},recursivelyFormat:true},p={pattern:/((^> )(.*\S.*)((\r\n)|\r|\n)?)(^> ?(.*)((\r\n)|\r|\n)?)*/gm,nonCapturingPattern:/(^> (.*\S.*)((\r\n)|\r|\n)?)(^> ?(.*)((\r\n)|\r|\n)?)*/m,formatter:n,getRangeInMatch:function u(v){var w=v[0],x=c("UnicodeUtils").strlen(w),y=c("UnicodeUtils").strlen(v[2]);return{offset:0,length:x,innerOffset:y,innerText:w.substring(y,x)}},recursivelyFormat:true,getAdditionalInnerRanges:function u(v){return t(v.innerText,[q]).map(function(w){return babelHelpers["extends"]({},w,{offset:w.offset+v.innerOffset,innerOffset:w.innerOffset+v.innerOffset})})}},q={pattern:/(^> ?)(.*?$)/gm,nonCapturingPattern:/^> ?(.*?$)/m,formatter:function u(v){return v},getRangeInMatch:function u(v){return{offset:0,length:c("UnicodeUtils").strlen(v[0]),innerOffset:c("UnicodeUtils").strlen(v[1]),innerText:v[2]}},recursivelyFormat:true},r=[j,k,l,m];if(c("gkx")("AT6IFGvJKEskVV3MpDhLcaRYk55exGzbLc4uf2H4PkUSB_m2BNrrV8nK4TTyE-IEyhbw2ed0C_HlWoHBx_yhMSmL")){r.push(o);r.push(p)}function s(u){var v=arguments.length<=1||arguments[1]===undefined?r:arguments[1];for(var w=0;w<v.length;w++){var x=v[w].nonCapturingPattern;if(x.test(u))return true}return false}function t(u){__p&&__p();var v=arguments.length<=1||arguments[1]===undefined?r:arguments[1],w=[];for(var x=0;x<v.length;x++){var y=v[x];y.pattern.lastIndex=0;var z=void 0;while((z=y.pattern.exec(u))!=null){var A=y.getRangeInMatch(z),B=u.substr(0,z.index+A.offset),C=c("UnicodeUtils").strlen(B),D={offset:C,length:A.length,innerText:A.innerText,innerOffset:C+A.innerOffset,formatter:y.formatter,recursivelyFormat:y.recursivelyFormat},E=y.getAdditionalInnerRanges?y.getAdditionalInnerRanges(D):[];w.push(D);w=w.concat(E)}}return w}f.exports={defaultFormatConfigs:r,hasMatch:s,getRanges:t,formatConfigs:{bold:j,italic:k,strikethrough:l,code:m,blockquote:o,multipleInlineBlockquote:p,singleInlineBlockquote:q}}}),null);