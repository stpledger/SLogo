if (self.CavalryLogger) { CavalryLogger.start_js(["51mNz"]); }

__d("UFIRange",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){var i=arguments.length<=0||arguments[0]===undefined?0:arguments[0],j=arguments.length<=1||arguments[1]===undefined?0:arguments[1];this.offset=i;this.length=j;this.requestedOffset=this.offset;this.requestedLength=this.length}h.prototype.getOffset=function(){return this.offset};h.prototype.getLength=function(){return this.length};h.prototype.getRequestedOffset=function(){return this.requestedOffset};h.prototype.getRequestedLength=function(){return this.requestedLength};h.prototype.updateRequestedRange=function(i,j){this.requestedOffset=i;this.requestedLength=j;return this};h.prototype.isLoadingNext=function(){var i=this.requestedOffset+this.requestedLength,j=this.offset+this.length;return i>j};h.prototype.isLoadingPrev=function(){return this.requestedOffset<this.offset};h.combine=function(i,j){if(!j)return i;var k=Math.min(i.getOffset(),j.getOffset()),l=Math.max(i.getLength(),j.getLength()),m=new h(k,l);if(j.getRequestedLength()>0){var n=Math.min(k,j.getRequestedOffset()),o=Math.max(k+l,j.getRequestedOffset()+j.getRequestedLength());m.updateRequestedRange(n,o-n)}return m};f.exports=h}),null);