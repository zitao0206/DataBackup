(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{2831:function(t,e,n){},4773:function(t,e,n){"use strict";n(2831)},4954:function(t,e,n){"use strict";n.r(e);n(16),n(14),n(11),n(7),n(13);var r=n(0),o=n(6),c=n(131),l=n(89),d=n(3);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var O=Object(o.b)({components:{Modal:c.Modal,BButton:c.Button},setup:function(){var t=Object(o.x)();return{onAppeal:function(t){window.open(t,"_blank")},onClose:function(){t.dispatch(d.HIDE_RISK_MODAL)}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.mapGetters)({needRiskModal:d.NEED_RISK_MODAL}))}),v=(n(4773),n(27)),component=Object(v.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{staticClass:"risk-modal",attrs:{value:t.needRiskModal.need,width:"350px","footer-hide":"",closable:!1,"mask-closable":!1,"align-center":""}},[n("div",{staticClass:"risk-modal-inner"},[n("div",{staticClass:"risk-modal-title"},[t._v("温馨提示")]),t._v(" "),n("div",[t._v("当前操作失败，如有疑问，可点击申诉")]),t._v(" "),n("div",{staticClass:"risk-modal-footer"},[n("BButton",{staticClass:"cancel-button risk-button",attrs:{size:"large"},on:{click:function(){return t.onAppeal(t.needRiskModal.riskAppealUrl)}}},[n("span",[t._v("前往申诉")])]),t._v(" "),n("BButton",{staticClass:"risk-button",attrs:{size:"large",type:"primary"},on:{click:t.onClose}},[n("span",[t._v("我知道了")])])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);