if (self.CavalryLogger) { CavalryLogger.start_js(["Zezgh"]); }

__d("RedditLinkRanges",["RedditLinkMatcher","UnicodeUtils"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h={REDDIT_PREFIX:"https://reddit.com",get:function i(j){__p&&__p();var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1],l=j.substr(k),m=c("RedditLinkMatcher").match(l);if(!m)return[];var n=m.lnk,o=m.idx,p=c("UnicodeUtils").strlen(l.substr(0,o));k+=p;var q="";switch(n[1].toLowerCase()){case"r":q=this.REDDIT_PREFIX+n;break;case"u":q=this.REDDIT_PREFIX+n;break;default:return[]}var r=n.length,s=[{offset:k,length:r,entity:{url:q}}];return s.concat(this.get(j,k+r))}};f.exports=h}),null);