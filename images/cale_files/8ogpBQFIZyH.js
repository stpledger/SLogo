if (self.CavalryLogger) { CavalryLogger.start_js(["3PNVy"]); }

__d("UFICreatorInfo.react",["cx","fbt","HelpLink.react","Image.react","React","URI"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){__p&&__p();var n=void 0,o=this.getCreatorLink();switch(this.props.labelType){case"commented":n=i._("Commented on by {creator}",[i.param("creator",o)]);break;case"edited_comment":n=i._("Edited by {creator}",[i.param("creator",o)]);break;case"sent_message":n=i._("Sent by {creator}",[i.param("creator",o)]);break;case"page_admin_note":n=i._("Noted by {creator}",[i.param("creator",o)]);break;default:return c("React").createElement("span",null)}return c("React").createElement("span",null,n,c("React").createElement(c("HelpLink.react"),{tooltip:this.getHelpText()}))};m.prototype.getCreatorLink=function(){switch(this.props.creatorType){case"application":case"gray_account":case"indirect_admin":return c("React").createElement("a",{className:"uiLinkSubtle","data-hover":"tooltip","data-tooltip-content":this.getTooltipText()},this.props.creatorName);case"business_admin":return c("React").createElement("a",{className:"uiLinkSubtle",href:this.props.profileURI},this.props.creatorName);case"direct_admin":return this.getProfileLinkWithHovercard();case"former_admin":return c("React").createElement("span",{className:"uiLinkSubtle"},c("React").createElement(c("Image.react"),{src:"/images/privacy/cant-see.png",width:9,height:9,className:"_3-8_"}),this.getProfileLinkWithHovercard());default:return c("React").createElement("span",{className:"uiLinkSubtle"},this.props.creatorName)}};m.prototype.getTooltipText=function(){switch(this.props.creatorType){case"application":return this.getApplicationText();case"gray_account":return this.getGrayAccountText();case"indirect_admin":return this.getIndirectAdminText()}return null};m.prototype.getProfileLinkWithHovercard=function(){if(!this.props.profileURI)return c("React").createElement("span",null,this.props.creatorName);var n=new(c("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.creatorID}).addQueryData({type:"page_admin",extragetparams:JSON.stringify({directed_target_id:this.props.pageID})});return c("React").createElement("a",{className:"uiLinkSubtle","data-hovercard":n,href:this.props.profileURI},this.props.creatorName)};m.prototype.getApplicationText=function(){switch(this.props.labelType){case"commented":return i._("This was commented on by someone using {application}.",[i.param("application",this.props.creatorName)]);case"edited_comment":return i._("This was edited by someone using {application}.",[i.param("application",this.props.creatorName)]);case"sent_message":return i._("This was sent by someone using {application}.",[i.param("application",this.props.creatorName)]);case"page_admin_note":return i._("This was noted by someone using {application}.",[i.param("application",this.props.creatorName)])}return null};m.prototype.getIndirectAdminText=function(){switch(this.props.labelType){case"commented":return i._("This was commented on by someone from {page}.",[i.param("page",this.props.creatorName)]);case"edited_comment":return i._("This was edited by someone from {page}.",[i.param("page",this.props.creatorName)]);case"sent_message":return i._("This was sent by someone from {page}.",[i.param("page",this.props.creatorName)]);case"page_admin_note":return i._("This was noted by someone from {page}.",[i.param("page",this.props.creatorName)])}return null};m.prototype.getGrayAccountText=function(){switch(this.props.labelType){case"commented":return i._("This was commented on by someone who doesn't have a personal Facebook account.");case"edited_comment":return i._("This was edited by someone who doesn't have a personal Facebook account.");case"sent_message":return i._("This was sent by someone who doesn't have a personal Facebook account.");case"page_admin_note":return i._("This was noted by someone who doesn't have a personal Facebook account.")}return null};m.prototype.getHelpText=function(){switch(this.props.labelType){case"commented":return i._("Only people who manage this Page can see who posted a comment");case"edited_comment":return i._("Only people who manage this Page can see who edited a comment");case"sent_message":return i._("Only people who manage this Page can see who sent a message");case"page_admin_note":return i._("Only people who manage this Page can see who created a note")}return null};function m(){j.apply(this,arguments)}m.propTypes={creatorID:l.string.isRequired,creatorType:l.string.isRequired,creatorName:l.string.isRequired,labelType:l.string.isRequired,pageID:l.string.isRequired,profileURI:l.string};f.exports=m}),null);