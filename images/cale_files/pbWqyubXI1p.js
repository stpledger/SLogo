if (self.CavalryLogger) { CavalryLogger.start_js(["8AXdm"]); }

__d("MessengerThreadlistNewMessageRow.react",["cx","fbt","ix","Image.react","LinkWithHiddenURLBar.react","MercuryIDs","MercuryParticipantListRenderer","MercuryParticipants","MercuryParticipantsImage.react","MessengerActions","MessengerComposerStore","MessengerProfileImageWrapperReact.bs","MessengerView","ReactComponentWithPureRenderMixin","PureStoreBasedStateMixin","React","ShimButton.react"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=c("MessengerProfileImageWrapperReact.bs").jsComponent,l=50,m=j("86935"),n=c("React").PropTypes,o=c("React").createClass({displayName:"MessengerThreadlistNewMessageRow",mixins:[c("ReactComponentWithPureRenderMixin"),c("PureStoreBasedStateMixin")(c("MercuryParticipants"),c("MessengerComposerStore"))],propTypes:{isActive:n.bool,onClose:n.func.isRequired},statics:{calculateState:function p(){return{participants:c("MessengerComposerStore").getState().recipients.map(function(q){return c("MercuryParticipants").getOrFetch(c("MercuryIDs").getParticipantIDFromUserID(q.getUniqueID()))}).filter(function(q){return!!q})}}},render:function p(){return c("React").createElement("li",{className:"_5l-3 _1ht1"+(this.props.isActive?" _1ht2":"")},c("React").createElement(c("LinkWithHiddenURLBar.react"),{onAllClicks:this._handleClickRow,className:"_1ht5 _2il3 _5l-3"},this._renderImage(),c("React").createElement("div",{className:"_1qt4 _5l-m"},c("React").createElement("div",{className:"_1qt5 _5l-3"},c("React").createElement("div",{className:"_1ht6"},this._renderTitle()),c("React").createElement(c("ShimButton.react"),{className:"_23ct",onClick:this.props.onClose})),c("React").createElement("div",{className:"_1qt5 _5l-3"},"\xa0"))))},_renderImage:function p(){var q=this.state.participants;if(!q.isEmpty())return c("React").createElement("div",{className:"_1qt3 _5l-3"},c("React").createElement(k,{isMessengerUser:q.size===1&&q.first().is_messenger_user,size:l,showBadge:false},c("React").createElement(c("MercuryParticipantsImage.react"),{participants:q.map(function(r){return r.id}).slice(0,3).toArray(),size:l})));return c("React").createElement("div",{className:"_1qt3 _5l-3"},c("React").createElement(c("Image.react"),{height:l,src:m,width:l}))},_renderTitle:function p(){if(this.state.participants.isEmpty())return i._("New message");return i._("New message to {List of message recipients}",[i.param("List of message recipients",new(c("MercuryParticipantListRenderer"))().renderParticipantList(this.state.participants.toArray()))])},_handleClickRow:function p(q){q.preventDefault();c("MessengerActions").changeDetailView(c("MessengerView").DETAIL.COMPOSE)}});f.exports=o}),null);