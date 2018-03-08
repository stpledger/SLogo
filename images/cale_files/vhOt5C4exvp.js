if (self.CavalryLogger) { CavalryLogger.start_js(["1T8ti"]); }

__d("MessengerSharedLinks.react",["cx","fbt","Link.react","MessengerSpinner.react","Image.react","Tooltip.react","React","RelayClassic_DEPRECATED","isLinkshimURI","URI"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").PureComponent);k=j&&j.prototype;m.prototype.render=function(){return c("React").createElement("div",{className:"_2wjt"},this.props.sharedLinks.map(function(n,o){return this.$MessengerSharedLinks1(n,o)}.bind(this)),this.$MessengerSharedLinks2())};m.prototype.$MessengerSharedLinks1=function(n,o){var p=n.media&&n.media.image&&n.media.image.uri?c("React").createElement(c("Image.react"),{className:"_2wjy",src:n.media.image.uri,style:{height:80,width:80}}):null;return c("React").createElement(c("Tooltip.react"),{key:o,tooltip:c("React").createElement("div",{className:"_2wjx"},p,c("React").createElement("div",{className:"_2wjz"},c("React").createElement("div",{className:"_2wj-"},n.title),c("React").createElement("div",{className:"_2wj_"},n.description?n.description.text:"")))},c("React").createElement(c("Link.react"),{className:"_3oh- _2wju",href:n.url,key:o,style:{color:this.props.customColor},target:"_blank"},this.$MessengerSharedLinks3(n.url)))};m.prototype.$MessengerSharedLinks3=function(n){if(n==null)return"";var o=new(c("URI"))(n);if(!c("isLinkshimURI")(o))return n;var p=o.getQueryData().u;if(!p)return n;return p};m.prototype.$MessengerSharedLinks2=function(){if(!this.props.canShowMore)return null;if(this.props.isFetchingMore)return c("React").createElement("div",{className:"_2n20",style:{flex:0}},c("React").createElement(c("MessengerSpinner.react"),null));return c("React").createElement(c("Link.react"),{className:"_3oh- _2wjv",style:{color:this.props.customColor},onClick:this.props.onClickShowMore},i._("Show More..."))};m.getShareLinkFragment=function(){return function(){return{children:[{fieldName:"title",kind:"Field",metadata:{},type:"String"},{children:[{fieldName:"text",kind:"Field",metadata:{},type:"String"}],fieldName:"description",kind:"Field",metadata:{canHaveSubselections:true},type:"TextWithEntities"},{fieldName:"url",kind:"Field",metadata:{},type:"Url"},{children:[{calls:[{kind:"Call",metadata:{type:"Int"},name:"width",value:{kind:"CallValue",callValue:80}},{kind:"Call",metadata:{type:"Int"},name:"height",value:{kind:"CallValue",callValue:80}}],children:[{fieldName:"uri",kind:"Field",metadata:{},type:"Url"}],fieldName:"image",kind:"Field",metadata:{canHaveSubselections:true},type:"Image"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:true,isRequisite:true},type:"String"},{children:[{fieldName:"id",kind:"Field",metadata:{isGenerated:true,isRequisite:true},type:"ID"},{fieldName:"__typename",kind:"Field",metadata:{isGenerated:true,isRequisite:true},type:"String"}],id:c("RelayClassic_DEPRECATED").QL.__id(),kind:"Fragment",metadata:{isAbstract:true},name:"IdFragment",type:"Node"}],fieldName:"media",kind:"Field",metadata:{canHaveSubselections:true,isAbstract:true},type:"Media"}],id:c("RelayClassic_DEPRECATED").QL.__id(),kind:"Fragment",metadata:{},name:"MessengerSharedLinks_reactRelayQL",type:"StoryAttachment"}}()};function m(){j.apply(this,arguments)}m.propTypes={customColor:l.string,isFetchingMore:l.bool.isRequired,sharedLinks:l.array.isRequired,threadFBID:l.string.isRequired,onClickShowMore:l.func.isRequired};f.exports=m}),null);