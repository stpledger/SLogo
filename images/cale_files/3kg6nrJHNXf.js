if (self.CavalryLogger) { CavalryLogger.start_js(["qYPsP"]); }

__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","UFIPaging","WebCommentViewOption","distinctArrayBy"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k;function l(n,o,p){var q=o.availableComments,r=o.repliesMap,s=void 0;if(p)s=r[n]||[];else s=q||[];s=c("distinctArrayBy")(s,function(t){return t.id});return s.length}j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.shouldRender=function(n,o,p,q){__p&&__p();if(!n)return false;var r=n.availableComments,s=n.commentCounts,t=n.deletedCounts,u=n.hasPagedToplevel,v=n.orderingMode,w=n.ranges,x=n.repliesExpandedMap,y=n.repliesMap;if(!r||!s||!t||!v||!w||!x||!y)return false;var z=Math.max((s[o]||0)-(t[o]||0),0),A=w[o];if(!A||!z||v!==c("WebCommentViewOption").FILTERED||q&&!x[o]||!q&&!u)return false;var B=l(o,n,q),C=A.isLoadingPrev(),D=A.isLoadingNext(),E=A.getOffset(),F=A.getLength(),G=c("UFIPagerGenerator").isBottomPager(q,v,o),H=Math.min(F,z);if(p===c("UFIPaging").ALL)return!C&&!D&&E===0&&F>=z&&B<H;else if(!G&&p===c("UFIPaging").TOP||G&&p===c("UFIPaging").BOTTOM)return!C&&E===0&&B<H;else if(!G&&p===c("UFIPaging").BOTTOM||G&&p===c("UFIPaging").TOP)return!D&&E+F>=z&&B<H;return false};m.prototype.$UFICommentFilterFallbackWarning1=function(){var n=this.props,o=n.asReplyWarning,p=n.ufiProps,q=p||{},r=q.feedback,s=q.orderingMode,t=r&&r.orderingmodes||[],u=t.find(function(w){return w&&w.value===s}),v=u&&u.name;if(o)if(v)return i._("{ordering mode name} is selected, so some replies may have been filtered out.",[i.param("ordering mode name",v)]);else return i._("Some replies may have been filtered out by the selected ordering mode.");else if(v)return i._("{ordering mode name} is selected, so some comments may have been filtered out.",[i.param("ordering mode name",v)]);else return i._("Some comments may have been filtered out by the selected ordering mode.")};m.prototype.render=function(){var n=this.props,o=n.ufiProps,p=n.targetID,q=n.pagingDirection,r=n.asReplyWarning;if(!this.constructor.shouldRender(o,p,q,r))return null;return c("React").createElement("div",{className:"_2ah8 _4oep UFIRow"},c("React").createElement("div",{className:"_2ah9"},this.$UFICommentFilterFallbackWarning1()))};function m(){j.apply(this,arguments)}f.exports=m}),null);