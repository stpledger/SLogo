if (self.CavalryLogger) { CavalryLogger.start_js(["fPZYg"]); }

__d("MessengerRecentContainer.react",["MercuryAPIArgsSource","MercuryThreadlistContainer.react","MessengerComposerSteps","MessengerComposerStore","MessengerThreadlistReact.bs","PureStoreBasedStateMixin","React"],(function a(b,c,d,e,f,g){"use strict";var h=c("MessengerThreadlistReact.bs").jsComponent,i=c("React").PropTypes,j=c("React").createClass({displayName:"MessengerRecentContainer",mixins:[c("PureStoreBasedStateMixin")(c("MessengerComposerStore"))],propTypes:{activeThreadID:i.string,filter:i.string.isRequired,folder:i.string.isRequired,viewer:i.string.isRequired,onAggregationClick:i.func,onRenderBackArrow:i.func,resetAggregatedThreads:i.bool},statics:{calculateState:function k(){return{isComposing:c("MessengerComposerStore").getState().step!==c("MessengerComposerSteps").NULL}}},render:function k(){return c("React").createElement(c("MercuryThreadlistContainer.react"),{ChildClass:h,activeThreadID:this.props.activeThreadID,filter:this.props.filter,folder:this.props.folder,isComposing:this.state.isComposing,onAggregationClick:this.props.onAggregationClick,onRenderBackArrow:this.props.onRenderBackArrow,resetAggregatedThreads:this.props.resetAggregatedThreads,isNewMessageActive:this.props.isNewMessageActive,source:c("MercuryAPIArgsSource").WEBMESSENGER,viewer:this.props.viewer})}});f.exports=j}),null);