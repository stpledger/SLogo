if (self.CavalryLogger) { CavalryLogger.start_js(["dlhV1"]); }

__d("WorkplaceChatUpsellBanner.react",["ix","cx","fbt","Promise","Bootloader","Event","Image.react","Link.react","React","UserAgent","WorkNuxID","XUIButton.react","BasicFBNux","XWorkplaceDesktopDownloadController","fbglyph"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k,l,m="https://play.google.com/store/apps/details?id=com.facebook.workchat",n="https://itunes.apple.com/app/work-chat/id958124798";k=babelHelpers.inherits(o,c("React").PureComponent);l=k&&k.prototype;function o(){l.constructor.call(this);this.state={xOutAppUpsell:false}}o.prototype.componentDidMount=function(){this.$WorkplaceChatUpsellBanner2()};o.prototype.render=function(){return c("React").createElement("div",{className:"_3ej0"+(this.state.xOutAppUpsell?" _3ej2":"")},j._("Get the app and chat anywhere, anytime"),this.$WorkplaceChatUpsellBanner3(),this.$WorkplaceChatUpsellBanner4())};o.prototype.$WorkplaceChatUpsellBanner3=function(){var p=null;if(c("UserAgent").isPlatform("Mac OS X"))p=c("XWorkplaceDesktopDownloadController").getURIBuilder().setString("file","mac").setString("ref","chat_upsell").getURI();else if(c("UserAgent").isPlatform("Windows"))p=c("XWorkplaceDesktopDownloadController").getURIBuilder().setString("file","win").setString("ref","chat_upsell").getURI();return c("React").createElement("div",{className:"_3-9a"},p?this.$WorkplaceChatUpsellBanner5(p.toString(),j._("Desktop App")):null,this.$WorkplaceChatUpsellBanner5(n,j._("iOS")),this.$WorkplaceChatUpsellBanner5(m,j._("Android")))};o.prototype.$WorkplaceChatUpsellBanner5=function(p,q){return c("React").createElement(c("XUIButton.react"),{target:"_blank",className:"_3ej4",label:q,href:p,onClick:function(){return this.$WorkplaceChatUpsellBanner6(q)}.bind(this)})};o.prototype.$WorkplaceChatUpsellBanner4=function(){return c("React").createElement(c("Link.react"),{onClick:function(){return this.$WorkplaceChatUpsellBanner7()}.bind(this)},c("React").createElement(c("Image.react"),{className:"_3-8w _3-90 _3ej3",alt:"X",src:h("114703")}))};o.prototype.$WorkplaceChatUpsellBanner7=function(){this.$WorkplaceChatUpsellBanner8();this.setState({xOutAppUpsell:true});setTimeout(function(){return c("Event").fire(window,"resize")},300)};o.prototype.$WorkplaceChatUpsellBanner6=function(p){this.$WorkplaceChatUpsellBanner9().done(function(q){var r=q.logger,s=q.actions;r.clear();r.setAction(s.CHAT_APP_UPSELL_BANNER_BUTTON_CLICKED).addToExtraData("button",p.toString()).log()})};o.prototype.$WorkplaceChatUpsellBanner8=function(){this.$WorkplaceChatUpsellBanner9().done(function(p){var q=p.logger,r=p.actions;q.clear();q.setAction(r.CHAT_APP_UPSELL_BANNER_DISMISSED).log()})};o.prototype.$WorkplaceChatUpsellBanner2=function(){c("BasicFBNux").onView(c("WorkNuxID").WORK_CHAT_DOWNLOAD_UPSELL_BANNER);this.$WorkplaceChatUpsellBanner9().done(function(p){var q=p.logger,r=p.actions;q.clear();q.setAction(r.CHAT_APP_UPSELL_BANNER_SHOWN).log()})};o.prototype.$WorkplaceChatUpsellBanner9=function(){if(!this.$WorkplaceChatUpsellBanner1)this.$WorkplaceChatUpsellBanner1=new(c("Promise"))(function(p,q){c("Bootloader").loadModules(["WorkOnboardingTypedLogger","WorkOnboardingLogAction"],function(r,s){var t=new r();p({logger:t,actions:s})},"WorkplaceChatUpsellBanner.react")});return this.$WorkplaceChatUpsellBanner1};f.exports=o}),null);