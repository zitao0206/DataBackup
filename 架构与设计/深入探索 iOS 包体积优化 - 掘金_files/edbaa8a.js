(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{2535:function(t,e,n){},2536:function(t,e,n){},2831:function(t,e,n){"use strict";n.r(e);n(144);var r=n(49),o=n(19),c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"popover-container"},[e("div",{staticClass:"label"},[this._v("下载稀土掘金 APP随时换福利")]),this._v(" "),e("img",{staticClass:"qr-img",attrs:{src:n(3749),alt:"QR"}}),this._v(" "),e("div",{staticClass:"arrow"})])}],l=n(9),f=n(3750),v=n.n(f),d=Object(l.d)({components:{MiniQR:v.a},setup:function(){return{active:Object(l.r)(!1)}}}),w=(n(3751),n(29)),O=Object(w.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mini-qr-container"},[e("MiniQR",{staticClass:"mini-qr-img"}),this._v(" "),this._m(0)],1)}),c,!1,null,"4504d8b9",null).exports,h=n(6),C=n(3752),y=n.n(C),j=n(3753),V=n.n(j),m=Object(h.b)({components:{AppDownloadQR:O,IconFeedback:y.a,IconTop:V.a},props:{hasExtensionBanner:{type:Boolean,default:function(){return!1}}},setup:function(){var t=Object(h.v)();return{newViewContainer:Object(h.a)((function(){var path=t.value.path;return["/pin","/user/center","/creator"].some((function(a){return path.startsWith(a)}))})),showQRDownload:Object(h.a)((function(){return"/user/center/welfare"===t.value.path}))}},data:function(){return{isToTopButtonVisible:!1,isMeiqiaButtonVisible:!1,removeEventListener:void 0}},mounted:function(){this.initEventListener(),Object(o.h)()||(this.isMeiqiaButtonVisible=!0)},beforeDestroy:function(){var t;null===(t=this.removeEventListener)||void 0===t||t.call(this)},methods:{initEventListener:function(){var t=this;this.removeEventListener=Object(r.m)(window,(function(){t.isToTopButtonVisible=window.pageYOffset>800}))},toTop:function(){window.scrollTo(0,0)},feedback:function(){window.open("/pin/club/6824710202692993037?sort=newest","_blank")}}}),H=(n(3754),Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suspension-panel",class:{new:t.newViewContainer,"with-qr":t.showQRDownload,"has-extension-banner":t.hasExtensionBanner}},[t.showQRDownload?n("AppDownloadQR",{staticClass:"app-download"}):t._e(),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isToTopButtonVisible,expression:"isToTopButtonVisible"}],staticClass:"btn to-top-btn",attrs:{title:"回到顶部"},on:{click:t.toTop}},[n("IconTop")],1),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isMeiqiaButtonVisible,expression:"isMeiqiaButtonVisible"}],staticClass:"btn meiqia-btn",attrs:{title:"建议反馈"},on:{click:t.feedback}},[n("IconFeedback")],1)],1)}),[],!1,null,"0b2d23d8",null));e.default=H.exports},3749:function(t,e,n){t.exports=n.p+"img/qr.f48d71d.png"},3750:function(t,e,n){n(16),n(14),n(11),n(7),n(13);var r=n(42),o=n(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,v=data.class,d=data.staticClass,style=data.style,w=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,C=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,d],style:[style,w],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},C),f.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.5 11.5H11.5V4.5H4.5V11.5ZM3.5 2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5ZM6.5 6.5H9.5V9.5H6.5V6.5ZM4.5 17V19.5H7V17H4.5ZM3.5 15H8C8.55228 15 9 15.4477 9 16V20.5C9 21.0523 8.55228 21.5 8 21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V16C2.5 15.4477 2.94772 15 3.5 15ZM17 4.5V7H19.5V4.5H17ZM16 2.5H20.5C21.0523 2.5 21.5 2.94772 21.5 3.5V8C21.5 8.55228 21.0523 9 20.5 9H16C15.4477 9 15 8.55228 15 8V3.5C15 2.94772 15.4477 2.5 16 2.5ZM17 17V19.5H19.5V17H17ZM16 15H20.5C21.0523 15 21.5 15.4477 21.5 16V20.5C21.5 21.0523 21.0523 21.5 20.5 21.5H16C15.4477 21.5 15 21.0523 15 20.5V16C15 15.4477 15.4477 15 16 15ZM11 15H13V17H11V15ZM11 18.5H13V21.5H11V18.5ZM15 11H17V13H15V11ZM18.5 11H21.5V13H18.5V11Z",fill:"#1E80FF"}})]))}}},3751:function(t,e,n){"use strict";n(2535)},3752:function(t,e,n){n(16),n(14),n(11),n(7),n(13);var r=n(42),o=n(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,v=data.class,d=data.staticClass,style=data.style,w=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,C=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["icon-feedback",v,d],style:[style,w],attrs:Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},C),f.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.8252 4.002C1.8252 2.80032 2.79935 1.82617 4.00102 1.82617H12.001C13.2027 1.82617 14.1768 2.80032 14.1768 4.002V9.71628C14.1768 10.918 13.2027 11.8921 12.001 11.8921H9.43308L6.92709 14.1281C6.4455 14.5578 5.68234 14.216 5.68234 13.5706V11.8921H4.00102C2.79934 11.8921 1.8252 10.918 1.8252 9.71628V4.002ZM11.2414 7.86753C11.3826 7.65526 11.3249 7.36878 11.1126 7.22764C10.9004 7.08651 10.6139 7.14417 10.4728 7.35643C9.94042 8.15705 9.03153 8.68309 7.99997 8.68309C6.96841 8.68309 6.05952 8.15705 5.52719 7.35643C5.38605 7.14417 5.09957 7.08651 4.88731 7.22764C4.67504 7.36878 4.61738 7.65526 4.75852 7.86753C5.45467 8.91452 6.64645 9.60617 7.99997 9.60617C9.35349 9.60617 10.5453 8.91452 11.2414 7.86753Z",fill:"#1E80FF"}})]))}}},3753:function(t,e,n){n(16),n(14),n(11),n(7),n(13);var r=n(42),o=n(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,v=data.class,d=data.staticClass,style=data.style,w=data.staticStyle,O=data.attrs,h=void 0===O?{}:O,C=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,d],style:[style,w],attrs:Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},C),f.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z",fill:"#8A919F"}})]))}}},3754:function(t,e,n){"use strict";n(2536)}}]);