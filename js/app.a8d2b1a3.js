(function(t){function e(e){for(var r,u,a=e[0],s=e[1],l=e[2],m=0,p=[];m<a.length;m++)u=a[m],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue2-nav-slide/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0537":function(t,e,n){"use strict";n("9193")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SlideOut",{attrs:{startWidth:40,endWidth:250},scopedSlots:t._u([{key:"navbar",fn:function(){return[n("ul",[n("li",[t._v("List one")]),n("li",[t._v("List two")]),n("li",[t._v("List three")]),n("li",[t._v("List Four")]),n("li",[t._v("List Five")])])]},proxy:!0},{key:"button",fn:function(){return[n("button",[t._v("Click")])]},proxy:!0},{key:"mainContent",fn:function(){return[n("section",{staticStyle:{padding:"15px"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias, corporis error tempora aliquam vero velit amet cumque nobis iure tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias, corporis error tempora aliquam vero velit amet cumque nobis iure tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias, corporis error tempora aliquam vero velit amet cumque nobis iure tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias, corporis error tempora aliquam vero velit amet cumque nobis iure tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias, corporis error tempora aliquam vero velit amet cumque nobis iure tempore omnis. Laborum, praesentium. ")])]},proxy:!0}])})],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideOut"},[n("aside",{style:t.asideStyle},[t._t("navbar",(function(){return[t._m(0)]}))],2),n("section",{style:t.mainStyle,attrs:{id:"main"}},[n("a",{attrs:{href:"#"},on:{click:t.onToggle}},[t._t("button")],2),t._t("mainContent")],2)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("List one")]),n("li",[t._v("List two")]),n("li",[t._v("List three")]),n("li",[t._v("List Four")]),n("li",[t._v("List Five")])])}],s=(n("a9e3"),{name:"SlideOUt",props:{startWidth:{type:Number,default:40},endWidth:{type:Number,default:250}},data:function(){var t=this.startWidth,e=this.endWidth,n="touchstart",r="touchend",o="touchmove",i={width:"100%",transform:"translateX(".concat(t+"px",")")},u={colloups:!1},a=0;"ontouchstart"in document.documentElement&&(n="touchstart",o="touchend",r="touchmove"),document.querySelector("body").addEventListener(n,(function(e){a=e.touches[0].clientX-t}));var s=t;return document.querySelector("body").addEventListener(r,(function(n){document.getElementById("main").style.transition="none",n.touches[0].clientX>a?u.colloups=!0:u.colloups=!1,u.colloups?s<=e&&(s+=5,a=n.touches[0].clientX,i.transform="translateX(".concat(s+"px",")")):s>=t&&(s-=5,a=n.touches[0].clientX,i.transform="translateX(".concat(s+"px",")"))})),document.querySelector("body").addEventListener(o,(function(){document.getElementById("main").style.transition="all 0.3s linear",u.colloups?(i.transform="translateX(".concat(e+"px",")"),u.colloups=!0,s=e):(s=t,i.transform="translateX(".concat(t+"px",")"),u.colloups=!1),a=0})),{asideStyle:{width:e+"px"},mainStyle:i,slideToggle:!1,reactiveData:u}},methods:{onToggle:function(){this.reactiveData.colloups=!this.reactiveData.colloups,this.reactiveData.colloups?this.mainStyle.transform="translateX(".concat(this.endWidth+"px",")"):this.mainStyle.transform="translateX(".concat(this.startWidth+"px",")")}}}),l=s,c=(n("0537"),n("2877")),m=Object(c["a"])(l,u,a,!1,null,"2ed82d6c",null),p=m.exports,d={name:"app",components:{SlideOut:p}},f=d,v=(n("034f"),Object(c["a"])(f,o,i,!1,null,null,null)),h=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){},9193:function(t,e,n){}});
//# sourceMappingURL=app.a8d2b1a3.js.map