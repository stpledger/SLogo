if (self.CavalryLogger) { CavalryLogger.start_js(["i\/EVq"]); }

__d("AbstractPopoverButton.react",["cx","React","URI","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){"use strict";__p&&__p();var m=this.props.config,n={},o=m.defaultMaxWidth;if(this.props.maxwidth!==undefined)o=this.props.maxwidth;if(o)n.style=babelHelpers["extends"]({},m.button.props.style,{maxWidth:o+"px"});if(this.props.image)n.image=c("React").createElement("span",{className:"_-xe _3-8_"},this.props.image);if(this.props.label){n.labelIsHidden=this.props.labelIsHidden;n.label=c("React").createElement("span",{className:"_55pe"},this.props.label)}if(this.props.haschevron)n.imageRight=c("React").createElement("span",{className:"_4o_3"},m.chevron);n.className=c("joinClasses")(m.button.props.className,"_2agf _4o_4");n.href=new(c("URI"))("#");n["aria-haspopup"]=true;n.role="button";return c("React").cloneElement(m.button,n)};function l(){"use strict";i.apply(this,arguments)}l.propTypes={config:k.object.isRequired,haschevron:k.bool,label:k.node,labelIsHidden:k.bool,maxwidth:k.number};l.defaultProps={haschevron:true};f.exports=l}),null);
__d("XUIRadioInput.react",["cx","invariant","React","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k;j=babelHelpers.inherits(l,c("React").Component);k=j&&j.prototype;l.prototype.render=function(){"use strict";!this.props.children||this.props.children.length===0||i(0);var m=c("joinClasses")(this.props.className,"_55sh"),n=babelHelpers["extends"]({},this.props,{className:null}),o=c("React").createElement("input",babelHelpers["extends"]({},n,{type:"radio"}),undefined);return c("React").createElement("label",{className:m,"data-testid":this.props.labelDataTestID},o,c("React").createElement("span",null))};function l(){"use strict";j.apply(this,arguments)}f.exports=l}),null);
__d("FBRTCScreenSharingLogger",["Log","MarauderLogger","formatDate","keyMirror"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="webrtc_screen_sharing",i=c("keyMirror")({screen_sharing_action:null,screen_sharing_error:null}),j=c("keyMirror")({PEER_ID:null,SESSION_ID:null,CONTEXT_TYPE:null,CONTENT:null}),k=c("keyMirror")({SCREEN_SHARING_TOGGLED:null,SCREEN_SHARING_CANCELLED:null,SCREEN_SHARING_ENABLED:null,SCREEN_SHARING_DISABLED:null,SCREEN_SHARING_EXT_DIALOG:null,SCREEN_SHARING_EXT_LINK:null,SCREEN_SHARING_DIALOG_SUCCESS:null,SCREEN_SHARING_DIALOG_CANCEL:null}),l=null;m.getInstance=function(){if(!l)l=new m();return l};m.prototype.logAction=function(n,o,p,q){var r={};r[i.screen_sharing_action]=p;r[j.PEER_ID]=n;r[j.SESSION_ID]=o;r[j.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1();r[j.CONTENT]=q;this.$FBRTCScreenSharingLogger2(i.screen_sharing_action,r);this.logToConsole(n,o,p)};m.prototype.logError=function(n,o,p){var q={};q[j.PEER_ID]=n;q[j.SESSION_ID]=o;q[j.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1();q[j.CONTENT]=p;this.$FBRTCScreenSharingLogger2(i.screen_sharing_error,q);this.logToConsole(n,o,p)};m.prototype.logToConsole=function(n,o,p){};m.prototype.$FBRTCScreenSharingLogger1=function(){return"p2p_video_call"};m.prototype.$FBRTCScreenSharingLogger2=function(n,o){c("MarauderLogger").log(n,h,o)};function m(){}m.Action=k;f.exports=m}),null);
__d("FBRTCStruct",[],(function a(b,c,d,e,f,g){__p&&__p();var h=function h(j,k,l){__p&&__p();var m=void 0,n=void 0;if(typeof j=="string"||j instanceof String){n=j;m=j}else for(var o in j)if(Object.prototype.hasOwnProperty.call(j,o))if(o==="index")l=j[o];else{n=o;m=j[o]}k[n]=l;k.strNames[l]=m};function i(j){"use strict";this.strNames=[];for(var k=0;k<j.length;k++)h(j[k],this,k)}f.exports=i}),null);
__d("FBRTCVersionDetection",["UserAgent","UserAgentData"],(function a(b,c,d,e,f,g){__p&&__p();var h={isChrome:function i(){return c("UserAgent").isBrowser("Chrome")},isFirefox:function i(){return c("UserAgent").isBrowser("Firefox")},isChromium:function i(){return!!navigator.webkitGetUserMedia},webrtcVersion:function i(){if(this.isFirefox()||this.isChrome())return c("UserAgentData").browserVersion;if(this.isChromium()){var j=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return j!=null?parseInt(j[2],10):999}return 0}};f.exports=h}),null);
__d("FBRTCScreenSharingUtils",["Promise","FBRTCScreenSharingLogger","FBRTCStruct","FBRTCVersionDetection","RTCConfig","FBRTCSupport"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=new(c("FBRTCStruct"))(["UNKNOWN","INSTALLED"]),i=h.UNKNOWN,j={RECIPIENT:"SC_CONTENT_SCRIPT",isScreenSharingSupported:function k(){return c("RTCConfig").ScreenSharingGK},isGroupCallScreenSharingSupported:function k(){return c("RTCConfig").ScreenSharingToGroupGK},isSupportedBrowser:function k(){return c("FBRTCVersionDetection").isChrome()&&c("FBRTCVersionDetection").webrtcVersion()>=34},canUserReceiveScreenSharing:function k(){return c("FBRTCSupport").isOSSupported()&&c("FBRTCVersionDetection").isChromium()&&c("FBRTCVersionDetection").webrtcVersion()>=34},canPeerReceiveScreenSharing:function k(l){return l.remoteSupport("screen_sharing")||c("RTCConfig").ScreenSharingToMobileGK&&!l.remoteSupport("www")&&!l.remoteSupport("mweb")},isExtensionInstalled:function k(){return i===h.INSTALLED},getExtensionStatus:function k(){return i},checkExtensionInstalled:function k(){__p&&__p();if(this.isExtensionInstalled())return c("Promise").resolve();var l=void 0,m=new(c("Promise"))(function(n){__p&&__p();l=function o(p){var q=p.origin,r=p.data;if(q!=window.location.origin||!r.type)return;if(r.type==="SC_EXT_INSTALLED"){window.removeEventListener("message",l);i=h.INSTALLED;n()}};window.addEventListener("message",l)});return c("Promise").race([m,this._pokeExtension()])["catch"](function(n){window.removeEventListener("message",l);return c("Promise").reject(n)})},_pokeExtension:function k(){__p&&__p();var l=arguments.length<=0||arguments[0]===undefined?13:arguments[0];return new(c("Promise"))(function(m,n){var o=setInterval(function(){setTimeout(function(){if(i===h.UNKNOWN)window.postMessage({recipient:j.RECIPIENT,type:"SC_IS_EXT_INSTALLED",text:"is extension installed"},"*")});if(l>0)l--;else{clearInterval(o);n("extension unavailable")}},200)})},logFailedAttempt:function k(l,m){c("FBRTCScreenSharingLogger").getInstance().logAction(l,m,c("FBRTCScreenSharingLogger").Action.SCREEN_SHARING_TOGGLED,"feature not available")}};f.exports=j}),null);
__d("RTCSignalingExperiments",["FBRTCScreenSharingUtils","FBRTCSupport","FBRTCVersionDetection","Set","UserAgent"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){this.$RTCSignalingExperiments2=new(c("Set"))();this.$RTCSignalingExperiments1=new(c("Set"))(h.getLocal());if(j)this.$RTCSignalingExperiments2=new(c("Set"))(j)}h.prototype.getLocal=function(){return Array.from(this.$RTCSignalingExperiments1)};h.prototype.setRemote=function(j){if(!j)return this;return new h(j)};h.prototype.getRemote=function(){return Array.from(this.$RTCSignalingExperiments2)};h.prototype.support=function(j){return this.localSupport(j)&&this.remoteSupport(j)};h.prototype.localSupport=function(j){return this.$RTCSignalingExperiments1.has(j)};h.prototype.remoteSupport=function(j){return this.$RTCSignalingExperiments2.has(j)};h.getLocal=function(){__p&&__p();var j=[];if(c("UserAgent").isBrowser("Chrome")||c("UserAgent").isBrowser("Opera")||c("UserAgent").isBrowser("Firefox >= 38"))j.push("sdp_update");if(i())j.push("multiple_streams_plan_b");if(c("FBRTCScreenSharingUtils").canUserReceiveScreenSharing())j.push("screen_sharing");if(c("FBRTCSupport").isOSSupported())j.push("www");else j.push("mweb");return j};function i(){return(c("UserAgent").isBrowser("Chrome")||c("UserAgent").isBrowser("Opera"))&&c("FBRTCVersionDetection").webrtcVersion()>=34}f.exports=h}),null);
__d("FBRTCConfig",["CurrentUser","RTCSignalingExperiments"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=false,j=0,k={},l={setConfig:function m(n,o,p,q,r){k=n;j=o;h=q;i=r},isVCEndpointCall:function m(){return h},canPeerUseV2:function m(){return i},getPeerID:function m(){return j},statsInterpreterConfig:function m(){return{rtt_weight:2,frr_weight:800,plr_weight:500,score_threshold:1e3,bad_score_count:3}},settingsEnabled:function m(){return k.enable_settings},shouldAutoDisableVideo:function m(){return false},unsupportedBrowserUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.unsupported_browser)return k.troubleshooting_urls.unsupported_browser;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_error)return k.troubleshooting_urls.user_media_error;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_permission_error)return k.troubleshooting_urls.user_media_permission_error;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},supportedSignalingExperiments:function m(){return c("RTCSignalingExperiments").getLocal()},isMessengerDotCom:function m(){return k.is_messenger_dot_com},useMessengerCallUI:function m(){return k.messenger_call_ui},shouldCreateDataChannel:function m(){return k.data_channel},disableURLManager:function m(){return k.disable_url_manager}};f.exports=l}),null);
__d("FBRTCConstants",["FBRTCStruct","keyMirror"],(function a(b,c,d,e,f,g){__p&&__p();var h=Object.freeze({OFFER:"offer",ANSWER:"answer",ICE_CANDIDATE:"ice_candidate",OK:"ok",PING:"ping",PING_ACK:"ping_ack",HANGUP:"hang_up",OTHER_DISMISS:"other_dismiss",MSG_ACK:"msg_ack",PRANSWER:"pranswer",ICERESTART_OFFER:"icerestart_offer",ICERESTART_ANSWER:"icerestart_answer",PCRESTART_OFFER:"pcrestart_offer",PCRESTART_ANSWER:"pcrestart_answer",SDP_UPDATE:"sdp_update",OFFER_ACK:"offer_ack",OFFER_NACK:"offer_nack",ANSWER_ACK:"answer_ack",SET_VIDEO:"set_video",VIDEO_REQUEST:"video_request",ACK:"ack",SWITCH_TO_MULTIWAY:"switch_to_multiway"}),i=Object.freeze({CHILD_WINDOW_READY:"rtc_child_window_ready",CHILD_WINDOW_START_CALL:"rtc_child_window_start_call",CHILD_WINDOW_MESSAGE:"rtc_child_window_message"}),j=Object.freeze({DIRECT_VIDEO:"direct_video",ESCALATED:"escalated",ESCALATION_DECLINED:"escalation_declined",VOIP:"voip"}),k=Object.freeze({LL_NONE:0,LL_BASIC:1,LL_DEBUG:2,LL_WARNING:3,LL_INFO:4,LL_VERBOSE:5}),l=Object.freeze({AUDIO_ONLY:"audio_only",AUDIO_VIDEO:"audio_video",SCREEN_CONTENT:"screen"}),m=Object.freeze({CUSTOM_VIDEO_STREAM_SIZE:"CUSTOM_VIDEO_STREAM_SIZE",CUSTOM_VIDEO:"CUSTOM_VIDEO",FHD_VIDEO:"FHD_VIDEO",HD_VIDEO:"HD_VIDEO",LQ_VIDEO:"LQ_VIDEO",NO_VIDEO:"NO_VIDEO",SD_VIDEO:"SD_VIDEO"}),n=Object.freeze({BALL_IS_LIFE:"BallIsLifeEffect",TRIANGLE_FRAME:"TriangleFrameEffect",SNOW_FALLING:"SnowFallingEffect"}),o=Object.freeze({FHD_HEIGHT:1080,HD_HEIGHT:720,LQ_HEIGHT:180,SD_HEIGHT:480,FHD_WIDTH:1920,HD_WIDTH:1280,LQ_WIDTH:320,SD_WIDTH:848,VLQ_FRAME_RATE:5,LQ_FRAME_RATE:15,FRAME_RATE:30}),p=new(c("FBRTCStruct"))([{IGNORE_CALL:"IgnoreCall"},{HANGUP_CALL:"HangupCall"},{IN_ANOTHER_CALL:"InAnotherCall"},{ACCEPT_AFTER_HANGUP:"CallEndAcceptAfterHangUp"},{NO_ANSWER_TIMEOUT:"NoAnswerTimeout"},{INCOMING_TIMEOUT:"IncomingTimeout"},{OTHER_INSTANCE_HANDLED:"OtherInstanceHandled"},{SIGNALING_MESSAGE_FAILED:"SignalingMessageFailed"},{CONNECTION_DROPPED:"ConnectionDropped"},{CLIENT_INTERRUPTED:"ClientInterrupted"},{WEBRTC_ERROR:"WebRTCError"},{CLIENT_ERROR:"ClientError"},{NO_PERMISSION:"NoPermission"},{OTHER_NOT_CAPABLE:"OtherNotCapable"},{NO_UI_ERROR:"NoUIShown"},{UNSUPPORTED_VERSION:"VersionUnsupported"},{CALLER_NOT_VISIBLE:"CallerNotVisible"},{CARRIER_BLOCKED:"CarrierBlocked"},{OTHER_CARRIER_BLOCKED:"OtherCarrierBlocked"}]),q=Object.freeze({REMOTE_PEER_HANGUP:"CollabRemotePeerHangup",REMOTE_PEER_REJECT:"CollabRemotePeerReject",CLOSED_BY_MCU:"CollabClosedByMcu",CLOSED_AS_STALE:"CollabClosedAsStale",CALL_INITIALIZATION_FAILED:"CollabCallInitializationFailed",SIP_CONNECTION_INITIALIZATION_FAILED:"CollabSipConnectionInitializationFailed",LOST_MCU_CONNECTION:"CollabLostMcuConnection",MCU_NO_AUDIO_STREAM:"CollabMcuNoAudioStream",MCU_INVALID_STREAM_CONFIGURATION:"CollabMcuInvalidStreamConfiguration",LOST_MCU_THRIFT_CONNECTION:"CollabLostMcuThriftConnection",LOST_SIP_ADAPTER_CONNECTION:"CollabLostSipAdapterConnection",UNKNOWN:"CollabUnknown"}),r=Object.freeze({TOGGLE_SELF_VIEW:5,SUBMIT_STAR_RATING:6,SUBMIT_FEEDBACK:7,START_CALL:9,OPEN_SCREEN_IN_NEW:10}),s=Object.freeze({ONE_HOUR:"1hour",UNTIL_EIGHT_AM:"8am",ALWAYS:"always"}),t=c("keyMirror")({AUDIO:null,VIDEO:null}),u=Object.freeze({CUSTOM:"custom",MULTIWAY:"multiway",P2P:"p2p"}),v=Object.freeze({NEW:"new",CHECKING:"checking",CONNECTED:"connected",COMPLETED:"completed",FAILED:"failed",DISCONNECTED:"disconnected",CLOSED:"closed"}),w=Object.freeze({DOMINANT_SPEAKER:"DOMINANT_SPEAKER",GRID:"GRID"}),x={CallBlockingConstants:s,CallEndReason:p,CallType:j,ChildWindowMessageType:i,CollabCallEndSubreason:q,GroupVideoViewLayout:w,IceConnectionState:v,IncomingCallDialogTypes:t,PayloadType:h,RTCConstraints:o,SignalingProtocol:u,StreamType:l,UIEventType:r,UploadLogLevel:k,VideoFilterEffect:n,VideoQuality:m,convertFromUploadLogLevel:function y(z){switch(z){case k.LL_DEBUG:return"d";case k.LL_BASIC:return"b";case k.LL_WARNING:return"w";case k.LL_INFO:return"i";case k.LL_VERBOSE:return"v";case k.LL_NONE:default:return null}},convertToUploadLogLevel:function y(z){switch(z){case"d":return k.LL_DEBUG;case"b":return k.LL_BASIC;case"w":return k.LL_WARNING;case"i":return k.LL_INFO;case"v":return k.LL_VERBOSE;default:return k.LL_NONE}},uploadLogLevelString:function y(z){switch(z){case k.LL_BASIC:return"basic";case k.LL_DEBUG:return"debug";case k.LL_WARNING:return"warning";case k.LL_INFO:return"info";case k.LL_VERBOSE:return"verbose";default:return""}},endCallReasonFromString:function y(z){return p.strNames.indexOf(z)},callEndReasonString:function y(z){if(z<0||z>p.strNames.length)return"Unknown";return p.strNames[z]},fullCallEndReasonString:function y(z,A){return this.callEndReasonString(z)+"_"+(A?"remote":"local")}};f.exports=x}),null);
__d("CollabCallTriggerType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MEETING_ROOM_PAGE_PROFILE:"meeting_room_page_profile",QUICK_DIAL:"quickdial"})}),null);
__d("FBRTCUtils",["AsyncRequest","CollabCallTriggerType","CurrentUser","FBIDCheck","FBRTCConfig","FBRTCConstants","RTCConfig","emptyFunction","randomInt"],(function a(b,c,d,e,f,g){__p&&__p();var h=6e3,i=window.URL||window.webkitURL,j="setSinkId"in window.HTMLMediaElement.prototype,k="srcObject"in window.HTMLMediaElement.prototype,l="mozSrcObject"in window.HTMLMediaElement.prototype,m={attachMediaStream:function n(o,p){__p&&__p();if(o==null)return;if(k){o.srcObject=p;if(p)o.play();return}if(l){o.mozSrcObject=p;if(p)o.play();return}if(o.src)i.revokeObjectURL(o.src);o.src=p?i.createObjectURL(p):""},reattachMediaStream:function n(o,p){__p&&__p();if(k){o.srcObject=p.srcObject;o.play();return}if(l){o.mozSrcObject=p.mozSrcObject;o.play();return}o.src=p.src},generateRandomInt:function n(){return c("randomInt")(0,4294967294)+1},aboutEqual:function n(o,p){return o-p<.01&&p-o<.01},getUploadLogLevel:function n(o){return Math.max(this.getLocalUploadLogLevel(),o)},getLocalUploadLogLevel:function n(){return c("CurrentUser").isEmployee()?c("FBRTCConstants").UploadLogLevel.LL_DEBUG:c("FBRTCConstants").UploadLogLevel.LL_NONE},sendServerRequest:function n(o){var p=arguments.length<=1||arguments[1]===undefined?c("emptyFunction"):arguments[1],q=arguments.length<=2||arguments[2]===undefined?c("emptyFunction"):arguments[2],r=arguments.length<=3||arguments[3]===undefined?false:arguments[3],s=arguments.length<=4||arguments[4]===undefined?h:arguments[4],t=arguments.length<=5||arguments[5]===undefined?{}:arguments[5],u=new(c("AsyncRequest"))().setURI(o).setData(t).setAllowCrossPageTransition(true).setHandler(p).setErrorHandler(q).setTimeoutHandler(s,function(){q()});if(r)u.setOption("asynchronous_DEPRECATED",false);u.send()},supportsSetSink:function n(){return j},isPeerVCEndpoint:function n(o){var p=c("FBRTCConfig").isVCEndpointCall();return p!==undefined?p:!!o&&!c("FBIDCheck").isUser_deprecated(o)&&c("RTCConfig").CollabVCEndpointsVideoCallGK},isCollabTrigger:function n(o){return o===c("CollabCallTriggerType").QUICK_DIAL||o===c("CollabCallTriggerType").MEETING_ROOM_PAGE_PROFILE}};f.exports=m}),null);
__d("FBRTCExperiment",["FBRTCExperimentsConfig","QE2Logger"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();h.gen=function(i){var j={params:{},auto_exposure:false,in_experiment:false},k=c("FBRTCExperimentsConfig")[i]||j,l=new h(i,k);return l};function h(i,j){this.$FBRTCExperiment1=i;this.$FBRTCExperiment2=j}h.prototype.$FBRTCExperiment3=function(){if(this.$FBRTCExperiment2.auto_exposure)this.logExposure()};h.prototype.logExposure=function(){if(this.$FBRTCExperiment2.in_experiment)c("QE2Logger").logExposureForUser(this.$FBRTCExperiment1)};h.prototype.getParam=function(i,j){if(this.$FBRTCExperiment2.params[i]!==undefined){this.$FBRTCExperiment3();return this.$FBRTCExperiment2.params[i].toString()}return j};h.prototype.getInt=function(i,j){if(this.$FBRTCExperiment2.params[i]!==undefined){this.$FBRTCExperiment3();return parseInt(this.$FBRTCExperiment2.params[i],10)}return j};h.prototype.getBool=function(i,j){var k=this.$FBRTCExperiment2.params;if(k[i]!==undefined){this.$FBRTCExperiment3();return k[i]==="1"||k[i]===1||k[i]==="true"||k[i]===true}return j};f.exports=h}),null);
__d("WorkplaceChatHelper",["FacebookAppIDs"],(function a(b,c,d,e,f,g){"use strict";var h={isWorkplaceChatDesktop:function i(){return window.workchat!==undefined&&(window.workchat.appId===undefined||window.workchat.appId===c("FacebookAppIDs").WORKPLACE_DESKTOP)},isMessengerDesktop:function i(){return window.workchat!==undefined&&window.workchat.appId===c("FacebookAppIDs").MESSENGER_DESKTOP},getScreenSharingSourceID:function i(){return window.workchat.getScreenSharingSourceID()},stopScreenSharing:function i(){return window.workchat.stopScreenSharing()}};f.exports=h}),null);
__d("AbstractCheckboxInput.react",["cx","invariant","React","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j,k,l=c("React").PropTypes;j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.prototype.render=function(){"use strict";!this.props.children||this.props.children.length===0||i(0);var n=c("joinClasses")(this.props.className,"_kv1"),o=c("React").createElement("input",babelHelpers["extends"]({},this.props,{"data-testid":undefined,className:null,ref:function(p){return this.$AbstractCheckboxInput1=p}.bind(this),type:"checkbox"}),undefined);return c("React").createElement("label",{className:n,"data-testid":this.props["data-testid"]},o,c("React").createElement("span",{className:"_66ul","data-hover":this.props.tooltip?"tooltip":null,"data-tooltip-content":this.props.tooltip}))};m.prototype.focusInput=function(){"use strict";this.$AbstractCheckboxInput1&&this.$AbstractCheckboxInput1.focus()};m.prototype.blurInput=function(){"use strict";this.$AbstractCheckboxInput1&&this.$AbstractCheckboxInput1.blur()};function m(){"use strict";j.apply(this,arguments)}m.propTypes={"data-testid":l.string,tooltip:l.oneOfType([l.node,l.string])};f.exports=m}),null);
__d("GamesQuicksilverContextKey",["InstantGameContextType"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this.$GamesQuicksilverContextKey1=i.id;this.$GamesQuicksilverContextKey2=i.size;this.$GamesQuicksilverContextKey3=i.sourceID;this.$GamesQuicksilverContextKey4=i.type}h.prototype.getID=function(){return this.$GamesQuicksilverContextKey1};h.prototype.getSize=function(){return this.$GamesQuicksilverContextKey2};h.prototype.getSourceID=function(){return this.$GamesQuicksilverContextKey3};h.prototype.getType=function(){return this.$GamesQuicksilverContextKey4};h.prototype.getTypeAPIValue=function(){switch(this.getType()){case c("InstantGameContextType").GROUP:return"group";case c("InstantGameContextType").STORY:return"post";case c("InstantGameContextType").THREAD:return"thread";case c("InstantGameContextType").SOLO:default:return"solo"}};h.prototype.getSDKContextInfo=function(){return{contextID:this.$GamesQuicksilverContextKey1,contextSize:this.$GamesQuicksilverContextKey2,contextType:this.getTypeAPIValue()}};h.prototype.isGroup=function(){return this.$GamesQuicksilverContextKey4===c("InstantGameContextType").GROUP};h.prototype.isStory=function(){return this.$GamesQuicksilverContextKey4===c("InstantGameContextType").STORY};h.prototype.isThread=function(){return this.$GamesQuicksilverContextKey4===c("InstantGameContextType").THREAD};h.prototype.isSoloPlay=function(){return this.$GamesQuicksilverContextKey4===c("InstantGameContextType").SOLO};f.exports=h}),null);
__d("isWebGLEnabled",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=null;function i(){try{var k=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&Boolean(k.getContext("webgl")||k.getContext("experimental-webgl"))}catch(l){return false}}function j(){if(h===null)h=i();return h}f.exports=j}),null);
__d("MessengerLightweightActionUtils",["MercuryAttachmentType"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(l){return!!(l&&l.attach_type===c("MercuryAttachmentType").SHARE&&l.share&&l.share.target&&l.share.target.lwa_type)}function i(l){var m=l.attachments;return!!(m&&m.length===1&&h(m[0]))}function j(l){return l.attachments[0].share.title}function k(l){return l[0].share.title}f.exports={isLWAMessage:i,isLWAAttachment:h,getCollapsedLWAText:j,getLWASnippetText:k}}),null);