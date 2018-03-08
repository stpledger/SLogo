if (self.CavalryLogger) { CavalryLogger.start_js(["DgIsr"]); }

__d("UFIPagerGenerator",["fbt","HideFeedbackCounts","NumberFormat","React","TrackingNodes","UFIConstants","UFIOrderingModeStore","UFIPager.react","UFIPagerLabel","UFIRange"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("UFIConstants").UFIPaging,j={isBottomPager:function k(l,m,n){return c("UFIOrderingModeStore").isInverted(m,n)&&!l},needsStartOfRangePager:function k(l){return l>0},renderPagers:function k(l){__p&&__p();var m,n,o,p=l.commentCount,q=l.contextArgs,r=l.currentLength,s=l.currentOffset,t=l.deletedCount,u=l.feedback,v=l.onPageCallback,w=l.orderingMode,x=l.range,y=l.targetID,z=p-t,A=r-t,B=y!==q.ftentidentifier,C=this.isBottomPager(B,w,y),D={topPager:null,bottomPager:null},E=false;if(q.isaskquestion)E=q.isaskquestion;var F=x.isLoadingPrev(),G=x.isLoadingNext(),H={count:0},I=u.commentsentenceinfo;if(I){H.commenters=I.explicit_commenter_names;H.othersCount=I.other_commenter_count}var J=s+r==p;if(p<q.pagesize&&J||A===0){var m=function(){__p&&__p();var M=Math.min(p,q.pagesize),N=function N(){return v(C?i.BOTTOM:i.TOP,new(c("UFIRange"))(p-M,M))},O=void 0;if(A===0)if(z==1)O=c("UFIPagerLabel").VIEW_ONE;else{H.count=z;O=c("UFIPagerLabel").VIEW_ALL}else if(z-A==1)O=c("UFIPagerLabel").VIEW_ONE_MORE;else{O=c("UFIPagerLabel").VIEW_MORE_EXPLICIT;H.count=z-A}var P=c("TrackingNodes").getTrackingInfo(c("TrackingNodes").types.VIEW_ALL_COMMENTS),Q=c("UFIPagerLabel").getLabel(O,B,Boolean(u.isqanda),Boolean(E),H),R=c("React").createElement(c("UFIPager.react"),{key:"allPager"+y,ref:C?"topLevelBottomPager":null,contextArgs:q,isUnseen:u.hasunseencollapsed,isLoading:C?G:F,isReply:B,pagerLabel:Q,onPagerClick:N,"data-ft":P});if(C)D.bottomPager=R;else D.topPager=R;return{v:D}}();if(typeof m==="object")return m.v}var K=c("UFIPagerLabel").getLabel(c("UFIPagerLabel").VIEW_MORE,B,Boolean(u.isqanda),Boolean(E),H),L=c("UFIPagerLabel").getLabel(c("UFIPagerLabel").VIEW_PREVIOUS,B,Boolean(u.isqanda),Boolean(E),H);if(this.needsStartOfRangePager(s))(function(){__p&&__p();var M=Math.max(s-q.pagesize,0),N=s+r-M,O="";if(!B||A>1){var P=c("NumberFormat").formatInteger(A),Q=c("NumberFormat").formatInteger(z);if(!c("HideFeedbackCounts").hideCommentCount)O=h._("{countshown} of {totalcount}",[h.param("countshown",P),h.param("totalcount",Q)])}var R=function R(){return v(C?i.BOTTOM:i.TOP,new(c("UFIRange"))(M,N))};if(C)D.bottomPager=c("React").createElement(c("UFIPager.react"),{key:"bottomPager"+y,ref:!B?"topLevelBottomPager":null,contextArgs:q,isLoading:F,isReply:B,pagerLabel:K,onPagerClick:R,countSentence:O});else D.topPager=c("React").createElement(c("UFIPager.react"),{key:"topPager"+y,contextArgs:q,isLoading:F,isReply:B,pagerLabel:L,onPagerClick:R,countSentence:O})})();if(s+r<p)(function(){var M=Math.min(r+q.pagesize,p-s),N=function N(){return v(C?i.TOP:i.BOTTOM,new(c("UFIRange"))(s,M))};if(C)D.topPager=c("React").createElement(c("UFIPager.react"),{key:"topPager"+y,contextArgs:q,isLoading:G,isReply:B,pagerLabel:L,onPagerClick:N});else D.bottomPager=c("React").createElement(c("UFIPager.react"),{key:"bottomPager",ref:!B?"topLevelBottomPager":null,contextArgs:q,isLoading:G,isReply:B,pagerLabel:K,onPagerClick:N})})();return D}};f.exports=j}),null);