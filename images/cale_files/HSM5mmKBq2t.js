if (self.CavalryLogger) { CavalryLogger.start_js(["3XARe"]); }

__d("MercuryTypeaheadDataSource",["CurrentUser","DataSource","MercuryParticipantTypes","MercuryTypeaheadConstants","OrderedFriendsList","ShortProfiles","WorkModeConfig"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=[],k={},l={},m={},n=[],o=false,p=false;h=babelHelpers.inherits(q,c("DataSource"));i=h&&h.prototype;function q(r){"use strict";r=r||{};r.kanaNormalization=true;i.constructor.call(this,r);this.showDefaultList=r.showDefaultList||false}q.prototype.dirty=function(){"use strict";this.$MercuryTypeaheadDataSource1=j;this.localCache=l;this.queryCache=k;this.queryIDs=m;this.defaultList=n;return this};q.prototype.bootstrap=function(){"use strict";__p&&__p();if(o||p)return false;p=true;c("ShortProfiles").fetchAll().then(function(){this.updateBootstrapData();p=false;o=true;if(this.showDefaultList)this.inform("show-default")}.bind(this),function(){}.bind(this));return true};q.prototype.updateBootstrapData=function(){"use strict";__p&&__p();var r=this.getCachedShortProfileIDs(),s=c("WorkModeConfig").is_work_user?c("MercuryParticipantTypes").FB4C:c("MercuryParticipantTypes").FRIEND,t=r.map(function(v){var w=c("ShortProfiles").getNow(v),x=v==c("CurrentUser").getID()?s:w.type,y=[w.additionalName,w.alternateName].concat(w.searchTokens||[]).join(" "),z=w.name,A=null;return{uid:v,index:c("OrderedFriendsList").getActiveRank(v),text:z,subtext:A,tokens:y,localized_text:w.name,additional_text:w.additionalName,photo:w.thumbSrc,render_type:x,type:c("MercuryTypeaheadConstants").USER_TYPE}});if(t.length)this.addEntries(t);if(!this.showDefaultList)return;var u=t.sort(function(v,w){return v.index-w.index}).slice(0,5);n=this.buildData(u.map(function(v){return v.uid}));this.defaultList=n};q.prototype.query=function(r,s,t,u){"use strict";var v=s||r.length===1;return i.query.call(this,r,v,t,u)};q.prototype.getQueryData=function(r,s){"use strict";return babelHelpers["extends"]({},i.getQueryData.call(this,r,s))};q.prototype.setEntry=function(r,s){"use strict";this.$MercuryTypeaheadDataSource1[r]=s};q.prototype.getEntry=function(r){"use strict";return this.$MercuryTypeaheadDataSource1[r]||null};q.prototype.getCachedShortProfileIDs=function(){"use strict";var r=c("ShortProfiles").getCachedProfileIDs(),s=r.filter(function(t){var u=c("ShortProfiles").getNow(t);return t==c("CurrentUser").getID()||u.type===c("MercuryParticipantTypes").FRIEND||u.type===c("MercuryParticipantTypes").FB4C});return s};q.prototype.isBootstrapped=function(){"use strict";return o};q.prototype.isBootstrapping=function(){"use strict";return p};q.prototype.processEntries=function(r,s){"use strict";r=r.map(function(t){if(t.index==null&&(t.render_type===c("MercuryParticipantTypes").FRIEND||t.render_type===c("MercuryParticipantTypes").FB4C))t.index=c("OrderedFriendsList").getActiveRank(t.uid);return t});return i.processEntries.call(this,r)};q.prototype.mergeUids=function(r,s,t,u){"use strict";var v=s.sort(function(w,x){return this.getEntry(w).index-this.getEntry(x).index}.bind(this));return i.mergeUids.call(this,r,v,t,u)};q.prototype.setShowDefaultList=function(r){"use strict";this.showDefaultList=r};f.exports=q}),null);