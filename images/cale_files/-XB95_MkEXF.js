if (self.CavalryLogger) { CavalryLogger.start_js(["\/AOl8"]); }

__d("NotificationTracking",["invariant"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i={},j={getEncodedTrackingData:function k(l,m){return this._getTrackingInfo(l,m).encoded},getTrackingString:function k(l,m){return this._getTrackingInfo(l,m).raw},_getTrackingInfo:function k(l,m){var n=""+l.alert_id,o=i[n];if(o&&o.row===m)return o;var p=this._getEncodedTrackingDataWithRow(l,m);i[n]={row:m,encoded:p,raw:JSON.stringify(p)};return i[n]},_getTrackingAsObject:function k(l){var m=null,n=null;if(l.tracking)try{m=JSON.parse(l.tracking)}catch(o){n=o}if(m===null||n!==null||typeof m!=="object")h(0);return m},_getEncodedTrackingDataWithRow:function k(l,m){var n=this._getTrackingAsObject(l);if(m!="undefined"&&typeof m==="number")return babelHelpers["extends"]({},n,{row:m});return n}};f.exports=j}),null);