(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],u=0,h=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21b1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hero")},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hero.hero?n("div",{staticClass:"pt-24"},[n("div",{staticClass:"container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"},[n("div",{staticClass:"flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"},[e.hero.hero.subline?n("p",{staticClass:"uppercase tracking-loose w-full",domProps:{innerHTML:e._s(e.hero.hero.subline)}}):e._e(),n("h1",{staticClass:"my-4 text-5xl font-bold leading-tight",domProps:{innerHTML:e._s(e.hero.hero.headline)}}),n("p",{staticClass:"leading-normal text-2xl mb-8"},[n("VueShowdown",{attrs:{markdown:e.hero.hero.description,flavor:"github",options:{emoji:!0}}})],1),n("a",{staticClass:"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg",attrs:{href:e.hero.hero.button.target,target:"_blank"}},[e._v("\n        "+e._s(e.hero.hero.button.text)+"\n      ")])]),n("div",{staticClass:"w-full md:w-3/5 text-center p-6"},[n("img",{staticClass:"w-full z-50",attrs:{src:"https://picsum.photos/600/520"}}),e.hero.hero.sociallinklist?n("div",{staticClass:"px-6 pt-4 pb-2"},e._l(e.hero.hero.sociallinklist,(function(e,t){return n("span",{key:t},[n("a",{staticClass:"text-5xl p-5 transition duration-700 ease-in-out hover:bg-red-500 transform hover:-translate-y-1",attrs:{href:e.link,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab",e.icon]}})],1)])})),0):e._e()])])]):e._e()},i=[],l=(n("96cf"),n("3b8d")),c=n("bc3a"),d=n.n(c),u=n("866c"),h={name:"hero",components:{VueShowdown:u["VueShowdown"]},data:function(){return{hero:{},error:null}},mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://localhost:1337/startpage");case 3:t=e.sent,this.hero=t.data,console.log(this.hero),console.log(this.hero.hero.sociallinklist),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()},f=h,p=n("2877"),m=Object(p["a"])(f,a,i,!1,null,null,null),g=m.exports,v={name:"app",components:{hero:g}},b=v,w=(n("df3d"),Object(p["a"])(b,o,s,!1,null,null,null)),x=w.exports,y=n("ecee"),L=n("f2d1"),_=n("ad3d");y["c"].add(L["a"]),r["a"].component("font-awesome-icon",_["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app");var k=window.scrollY,j=document.getElementById("header"),O=document.getElementById("nav-content"),C=document.getElementById("navAction"),E=(document.getElementById("brandname"),document.querySelectorAll(".toggleColour"));document.addEventListener("scroll",(function(){if(k=window.scrollY,k>10){j.classList.add("bg-white"),C.classList.remove("bg-white"),C.classList.add("gradient"),C.classList.remove("text-gray-800"),C.classList.add("text-white");for(var e=0;e<E.length;e++)E[e].classList.add("text-gray-800"),E[e].classList.remove("text-white");j.classList.add("shadow"),O.classList.remove("bg-gray-100"),O.classList.add("bg-white")}else{j.classList.remove("bg-white"),C.classList.remove("gradient"),C.classList.add("bg-white"),C.classList.remove("text-white"),C.classList.add("text-gray-800");for(e=0;e<E.length;e++)E[e].classList.add("text-white"),E[e].classList.remove("text-gray-800");j.classList.remove("shadow"),O.classList.remove("bg-white"),O.classList.add("bg-gray-100")}}));var P=document.getElementById("nav-content"),S=document.getElementById("nav-toggle");function B(e){var t=e&&e.target||event&&event.srcElement;I(t,P)||(I(t,S)&&P.classList.contains("hidden")?P.classList.remove("hidden"):P.classList.add("hidden"))}function I(e,t){while(e.parentNode){if(e==t)return!0;e=e.parentNode}return!1}document.onclick=B},df3d:function(e,t,n){"use strict";var r=n("21b1"),o=n.n(r);o.a}});
//# sourceMappingURL=app.103df903.js.map