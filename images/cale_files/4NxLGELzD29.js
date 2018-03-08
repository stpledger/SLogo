if (self.CavalryLogger) { CavalryLogger.start_js(["J1Itn"]); }

__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],(function a(b,c,d,e,f,g){__p&&__p();var h=320,i=.5,j=.5,k=180,l=.05,m=3;function n(p,q){return Number(p.toFixed(q||m))}o.prototype.clone=function(){"use strict";return new o(this.$PhotoZoomCropDimensions2).setSize(this.$PhotoZoomCropDimensions3.x,this.$PhotoZoomCropDimensions3.y).setSmallestSize(this.$PhotoZoomCropDimensions4.x,this.$PhotoZoomCropDimensions4.y).setCenter(this.$PhotoZoomCropDimensions1.x,this.$PhotoZoomCropDimensions1.y).setZoom(this.$PhotoZoomCropDimensions5)};function o(p){"use strict";this.$PhotoZoomCropDimensions2=p;this.setSmallestSize(k,k).setCenter(i,i);this.setSize(h,h).setZoom(j)}o.prototype.getArea=function(){"use strict";var p=this.getPosition(),q=this.$PhotoZoomCropDimensions3.div(this.$PhotoZoomCropDimensions5);return{height:Math.round(q.y),width:Math.round(q.x),x:Math.round(Math.abs(p.left)/this.$PhotoZoomCropDimensions5),y:Math.round(Math.abs(p.top)/this.$PhotoZoomCropDimensions5)}};o.prototype.getPosition=function(){"use strict";var p=this.$PhotoZoomCropDimensions6();return{height:n(p.imageSize.y),left:n(this.$PhotoZoomCropDimensions3.x/2-p.center.x),top:n(this.$PhotoZoomCropDimensions3.y/2-p.center.y),width:n(p.imageSize.x)}};o.prototype.getRect=function(){"use strict";var p=this.$PhotoZoomCropDimensions6(),q=this.$PhotoZoomCropDimensions3.div(this.$PhotoZoomCropDimensions5);return{center:{x:p.center.x/p.imageSize.x,y:p.center.y/p.imageSize.y},size:{x:q.x,y:q.y}}};o.prototype.getSize=function(){"use strict";return this.$PhotoZoomCropDimensions3};o.prototype.getCenter=function(){"use strict";return this.$PhotoZoomCropDimensions1};o.prototype.getZoom=function(){"use strict";return this.$PhotoZoomCropDimensions5};o.prototype.getZoomRange=function(){"use strict";var p=Math.min(this.$PhotoZoomCropDimensions2.x,this.$PhotoZoomCropDimensions2.y);return{max:this.$PhotoZoomCropDimensions3.x/Math.min(this.$PhotoZoomCropDimensions4.x,p),min:Math.max(this.$PhotoZoomCropDimensions3.x/this.$PhotoZoomCropDimensions2.x,this.$PhotoZoomCropDimensions3.y/this.$PhotoZoomCropDimensions2.y)}};o.prototype.hasSpaceToDrag=function(){"use strict";var p=this.getZoomRange();return!(o.isSquare(this.$PhotoZoomCropDimensions2)&&p.min===p.max)};o.prototype.isCurrentlyDragable=function(){"use strict";var p=this.$PhotoZoomCropDimensions6().imageSize;return p.x!==this.$PhotoZoomCropDimensions3.x||p.y!==this.$PhotoZoomCropDimensions3.y};o.prototype.moveByPixels=function(p,q){"use strict";var r=this.$PhotoZoomCropDimensions6();return this.moveBy(p/r.imageSize.x,q/r.imageSize.y)};o.prototype.moveBy=function(p,q){"use strict";this.setCenter(this.$PhotoZoomCropDimensions1.x+p,this.$PhotoZoomCropDimensions1.y+q);var r=this.$PhotoZoomCropDimensions6();this.$PhotoZoomCropDimensions1=r.center.div(r.imageSize.x,r.imageSize.y);return this};o.prototype.setCenter=function(p,q){"use strict";this.$PhotoZoomCropDimensions1=new(c("BasicVector"))(c("clamp")(p,0,1),c("clamp")(q,0,1));return this};o.prototype.setSize=function(p,q){"use strict";this.$PhotoZoomCropDimensions3=new(c("BasicVector"))(p,q);return this};o.prototype.setRatio=function(p,q){"use strict";var r=this.$PhotoZoomCropDimensions3.x*this.$PhotoZoomCropDimensions3.y,s=Math.sqrt(r*p/q);return this.setSize(s,r/s)};o.prototype.setSmallestSize=function(p,q){"use strict";this.$PhotoZoomCropDimensions4=new(c("BasicVector"))(p,q);return this};o.prototype.setZoom=function(p){"use strict";var q=this.getZoomRange();this.$PhotoZoomCropDimensions5=c("clamp")(p,q.min,q.max);return this};o.prototype.cloneAndZoom=function(p){"use strict";var q=this.clone();q.setZoom(p);return q};o.prototype.cloneAndMove=function(p,q){"use strict";var r=this.clone();r.moveByPixels(p,q);return r};o.prototype.$PhotoZoomCropDimensions7=function(p,q){"use strict";var r=this.$PhotoZoomCropDimensions3.x/2,s=this.$PhotoZoomCropDimensions3.y/2;return new(c("BasicVector"))(c("clamp")(q.x,r,p.x-r),c("clamp")(q.y,s,p.y-s))};o.prototype.$PhotoZoomCropDimensions6=function(){"use strict";var p=this.$PhotoZoomCropDimensions2.mul(this.$PhotoZoomCropDimensions5);return{imageSize:p,center:this.$PhotoZoomCropDimensions7(p,this.$PhotoZoomCropDimensions1.mul(p.x,p.y))}};o.isSquare=function(p){"use strict";return Math.abs(p.x/p.y-1)<l};o.fromProfilePhotoData=function(p,q){"use strict";__p&&__p();var r=new(c("BasicVector"))(p.original.width,p.original.height),s=new o(r),t=void 0;if(q)t=q;else if(p.previousprofilepic)t=p.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}};else t=c("SpotlightProfilePicCropOptions").getOptionsAsRatio(p,r);if(t.center)s.setCenter(t.center.x,t.center.y);if(t.size&&t.size.x){var u=t.size.x*r.x;s.setZoom(s.getSize().x/u)}return s};f.exports=o}),null);