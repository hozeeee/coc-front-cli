(function(e){function t(t){for(var a,s,i=t[0],o=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={index:0},r={index:0},c=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-4b086452":"6c999d87","chunk-a43fb0bc":"eb02fd0c"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-4b086452":1,"chunk-a43fb0bc":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-4b086452":"1d055596","chunk-a43fb0bc":"72c8d4ce"}[e]+".css",r=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],d.parentNode.removeChild(d),n(c)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fd5":function(e,t,n){var a={"./af":"8206","./af.js":"8206","./ar":"cdac","./ar-dz":"7f26","./ar-dz.js":"7f26","./ar-kw":"8e88","./ar-kw.js":"8e88","./ar-ly":"cd65","./ar-ly.js":"cd65","./ar-ma":"e8d6","./ar-ma.js":"e8d6","./ar-sa":"a284","./ar-sa.js":"a284","./ar-tn":"64f7","./ar-tn.js":"64f7","./ar.js":"cdac","./az":"b139","./az.js":"b139","./be":"98e2","./be.js":"98e2","./bg":"a1a5","./bg.js":"a1a5","./bm":"4d0d","./bm.js":"4d0d","./bn":"e8ae","./bn.js":"e8ae","./bo":"bcf2","./bo.js":"bcf2","./br":"69f1","./br.js":"69f1","./bs":"24d1","./bs.js":"24d1","./ca":"3507","./ca.js":"3507","./cs":"d15f","./cs.js":"d15f","./cv":"7bfe","./cv.js":"7bfe","./cy":"1d35","./cy.js":"1d35","./da":"a019","./da.js":"a019","./de":"0cfa","./de-at":"edea","./de-at.js":"edea","./de-ch":"9aae","./de-ch.js":"9aae","./de.js":"0cfa","./dv":"1722","./dv.js":"1722","./el":"5390","./el.js":"5390","./en-au":"dad9","./en-au.js":"dad9","./en-ca":"6f13","./en-ca.js":"6f13","./en-gb":"6267","./en-gb.js":"6267","./en-ie":"80b1","./en-ie.js":"80b1","./en-il":"ad38","./en-il.js":"ad38","./en-in":"eb60","./en-in.js":"eb60","./en-nz":"39db","./en-nz.js":"39db","./en-sg":"c30d","./en-sg.js":"c30d","./eo":"1a30","./eo.js":"1a30","./es":"48a3","./es-do":"f306","./es-do.js":"f306","./es-us":"60bf","./es-us.js":"60bf","./es.js":"48a3","./et":"f891","./et.js":"f891","./eu":"a403","./eu.js":"a403","./fa":"ce14","./fa.js":"ce14","./fi":"fc14","./fi.js":"fc14","./fil":"f46e","./fil.js":"f46e","./fo":"2bf2","./fo.js":"2bf2","./fr":"c1e8","./fr-ca":"50a2","./fr-ca.js":"50a2","./fr-ch":"b087","./fr-ch.js":"b087","./fr.js":"c1e8","./fy":"4665","./fy.js":"4665","./ga":"b396","./ga.js":"b396","./gd":"056c","./gd.js":"056c","./gl":"efde","./gl.js":"efde","./gom-deva":"12ea","./gom-deva.js":"12ea","./gom-latn":"8e2c","./gom-latn.js":"8e2c","./gu":"533d","./gu.js":"533d","./he":"7520","./he.js":"7520","./hi":"d2f3","./hi.js":"d2f3","./hr":"7e79","./hr.js":"7e79","./hu":"148f","./hu.js":"148f","./hy-am":"6711","./hy-am.js":"6711","./id":"2b10","./id.js":"2b10","./is":"1feb","./is.js":"1feb","./it":"1b21","./it-ch":"8d2c","./it-ch.js":"8d2c","./it.js":"1b21","./ja":"926e","./ja.js":"926e","./jv":"5a78","./jv.js":"5a78","./ka":"5975","./ka.js":"5975","./kk":"cc93","./kk.js":"cc93","./km":"66e1","./km.js":"66e1","./kn":"5421","./kn.js":"5421","./ko":"1297","./ko.js":"1297","./ku":"16f8","./ku.js":"16f8","./ky":"3df9","./ky.js":"3df9","./lb":"c124","./lb.js":"c124","./lo":"20a5","./lo.js":"20a5","./lt":"c14a","./lt.js":"c14a","./lv":"c553","./lv.js":"c553","./me":"ae25","./me.js":"ae25","./mi":"6f56","./mi.js":"6f56","./mk":"c8fc","./mk.js":"c8fc","./ml":"752d","./ml.js":"752d","./mn":"f09e","./mn.js":"f09e","./mr":"0a56","./mr.js":"0a56","./ms":"55b6","./ms-my":"a9e9","./ms-my.js":"a9e9","./ms.js":"55b6","./mt":"624b","./mt.js":"624b","./my":"e256","./my.js":"e256","./nb":"e1d5","./nb.js":"e1d5","./ne":"761a","./ne.js":"761a","./nl":"a0f2","./nl-be":"5cb2","./nl-be.js":"5cb2","./nl.js":"a0f2","./nn":"4fda","./nn.js":"4fda","./oc-lnc":"ec3d","./oc-lnc.js":"ec3d","./pa-in":"2f2f","./pa-in.js":"2f2f","./pl":"317f","./pl.js":"317f","./pt":"5553","./pt-br":"a9ab","./pt-br.js":"a9ab","./pt.js":"5553","./ro":"db12","./ro.js":"db12","./ru":"7aa4","./ru.js":"7aa4","./sd":"e87b","./sd.js":"e87b","./se":"a296","./se.js":"a296","./si":"51ec","./si.js":"51ec","./sk":"608b","./sk.js":"608b","./sl":"b367","./sl.js":"b367","./sq":"f68f","./sq.js":"f68f","./sr":"0991","./sr-cyrl":"c577","./sr-cyrl.js":"c577","./sr.js":"0991","./ss":"cf76","./ss.js":"cf76","./sv":"0153","./sv.js":"0153","./sw":"cb6f","./sw.js":"cb6f","./ta":"8bfa","./ta.js":"8bfa","./te":"668b","./te.js":"668b","./tet":"eae7","./tet.js":"eae7","./tg":"70b1","./tg.js":"70b1","./th":"7180","./th.js":"7180","./tk":"4912","./tk.js":"4912","./tl-ph":"f8bb","./tl-ph.js":"f8bb","./tlh":"b026","./tlh.js":"b026","./tr":"371d","./tr.js":"371d","./tzl":"c744","./tzl.js":"c744","./tzm":"787a","./tzm-latn":"71e0","./tzm-latn.js":"71e0","./tzm.js":"787a","./ug-cn":"6b5c","./ug-cn.js":"6b5c","./uk":"8c0c","./uk.js":"8c0c","./ur":"519e","./ur.js":"519e","./uz":"7982","./uz-latn":"3137","./uz-latn.js":"3137","./uz.js":"7982","./vi":"ae22","./vi.js":"ae22","./x-pseudo":"1129","./x-pseudo.js":"1129","./yo":"b4bf","./yo.js":"b4bf","./zh-cn":"fdc4","./zh-cn.js":"fdc4","./zh-hk":"747d","./zh-hk.js":"747d","./zh-mo":"fe39","./zh-mo.js":"fe39","./zh-tw":"d3e0","./zh-tw.js":"d3e0"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="0fd5"},"10fb":function(e,t,n){e.exports=n.p+"img/logo.ec34be02.gif"},"25e1":function(e,t,n){"use strict";var a=n("35b5"),s=n.n(a);s.a},"35b5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("49e7");var a=n("cfb0"),s=(n("ba5c"),n("1240")),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"_center"},[n("div",{staticClass:"_view_left"},[n("Aside")],1),n("div",{staticClass:"_view_content"},[n("router-view")],1),n("div",{staticClass:"_view_right"})]),n("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("img",{staticClass:"logo",attrs:{src:n("10fb")}}),a("span",{staticClass:"title"},[e._v("我是头部...")])])}],u=(n("25e1"),n("2877")),f={},d=Object(u["a"])(f,o,l,!1,null,"3667c329",null),m=d.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer_container"},[a("img",{staticStyle:{height:"100%"},attrs:{src:n("cc67"),id:"swimming_fish_img"}})])}],b=(n("a9e3"),n("c35a"),{mounted:function(){var e=document.getElementById("swimming_fish_img"),t=Math.round(Number.parseFloat(window.getComputedStyle(e).width)),n=Number.parseFloat(window.getComputedStyle(e.parentElement).width);e.style.position="absolute",e.style.top=0,e.style.left="".concat(-t,"px"),e.style.transition="left 0.1s",console.log(e),setInterval((function(){var a=Number.parseFloat(e.style.left);if(a>n)return e.style.left="".concat(-t,"px"),void(e.style.visibility="hidden");e.style.visibility="visible",e.style.left=a+2+"px"}),100)}}),j=b,v=(n("f5c9"),Object(u["a"])(j,p,h,!1,null,"fd63e2e0",null)),y=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside_container",class:e.showMenu?"":"hide_menu"},[n("div",{ref:"prefectScrollbarContainer",staticClass:"menu_content"},[n("myMenu",{attrs:{menuData:e.menuData}})],1),n("div",{staticClass:"slide_left_btn_container"},[n("div",{staticClass:"slide_left_btn",on:{click:function(t){e.showMenu=!e.showMenu}}},[n("a-icon",{staticClass:"icon",attrs:{type:"double-left"}})],1)])])},x=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-menu",{staticClass:"a_menu",attrs:{mode:"inline",selectedKeys:e.selectedKeys,inlineIndent:12},on:{"update:selectedKeys":function(t){e.selectedKeys=t},"update:selected-keys":function(t){e.selectedKeys=t},click:e.handleClick}},[e._l(e.menuData,(function(t){return[Array.isArray(t.children)&&0!==t.children.length?n("SubMenu",{key:t.id,attrs:{"menu-info":t}}):n("a-menu-item",{key:t.id,attrs:{value:t}},[n("a-icon",{attrs:{type:"pie-chart"}}),n("span",[e._v(e._s(t.title))])],1)]}))],2)},k=[],_=n("5530"),O={template:'\n    <a-sub-menu :key="menuInfo.id" v-bind="$props" v-on="$listeners">\n      <span slot="title">\n        <a-icon type="mail" /><span>{{ menuInfo.title }}</span>\n      </span>\n      <template v-for="item in menuInfo.children">\n        <a-menu-item v-if="!Array.isArray(item.children) || item.children.length===0" :key="item.id" :value="item">\n          <a-icon type="pie-chart" />\n          <span>{{ item.title }}</span>\n        </a-menu-item>\n        <SubMenu v-else :key="item.id" :menu-info="item" />\n      </template>\n    </a-sub-menu>\n  ',name:"SubMenu",isSubMenu:!0,props:Object(_["a"])(Object(_["a"])({},s["a"].SubMenu.props),{},{menuInfo:{type:Object,default:function(){return{}}}})},S={props:{menuData:{type:Array,default:function(){return[]}}},data:function(){return{selectedKeys:[]}},methods:{handleClick:function(e){var t=e.item;console.log("item.path",t.value),this.$router.push(t.value.path)}},watch:{$route:function(){console.log("$route----",this.$route,this),this.selectedKeys=[this.$route.meta.id]}},created:function(){this.$router.on},components:{SubMenu:O}},C=S,z=(n("e54c"),Object(u["a"])(C,w,k,!1,null,"cf150728",null)),E=z.exports,$=(n("b0c0"),n("b85c")),M=n("53ca"),A=n("a18c"),V={name:"name",path:"path",component:"component"};function P(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children";if(Array.isArray(t)&&0!==t.length){"object"!==Object(M["a"])(n)&&(n={}),n=Object.assign(n,V);var s,c=[],i=Object($["a"])(t);try{for(i.s();!(s=i.n()).done;){var o=s.value;if(Array.isArray(o[a])&&o[a].length>0)P(o["children"],n);else{var l=o[n.component];if(!l)continue;c.push({path:n.path?o[n.path]:"/"+o[n.name],name:o[n.name],meta:JSON.parse(JSON.stringify(o)),component:r["a"].component("route-".concat(o[n.component]))})}}}catch(u){i.e(u)}finally{i.f()}A["a"].addRoutes(c),(e=A["a"].options.routes).push.apply(e,c)}}var N=P,D=[{id:100,title:"首页",name:"home",path:"/",component:"home",children:[]},{id:200,title:"分组一",component:"",children:[{id:210,title:"页面-1",name:"example1",path:"/example1",component:"exampleView",children:[]}]},{id:300,title:"分组二",component:"",children:[{id:310,title:"页面-2",name:"example2",path:"/example2",component:"exampleView",children:[]},{id:320,title:"子分组",component:"home",children:[{id:321,title:"页面-3",name:"example3",path:"/example3",component:"exampleView",children:[]},{id:322,title:"页面-4",name:"example4",path:"/example4",component:"exampleView",children:[]},{id:323,title:"页面-5",name:"example5",path:"/example5",component:"exampleView",children:[]}]}]},{id:400,title:"分组三",component:"",children:[{id:410,title:"页面-6",name:"example6",path:"/example6",component:"exampleView",children:[]},{id:420,title:"页面-7",name:"example7",path:"/example7",component:"exampleView",children:[]},{id:430,title:"页面-8",name:"example8",path:"/example8",component:"exampleView",children:[]},{id:440,title:"页面-9",name:"example9",path:"/example9",component:"exampleView",children:[]},{id:450,title:"页面-10",name:"example10",path:"/example10",component:"exampleView",children:[]},{id:460,title:"页面-11",name:"example11",path:"/example11",component:"exampleView",children:[]},{id:470,title:"页面-12",name:"example12",path:"/example12",component:"exampleView",children:[]},{id:480,title:"页面-13",name:"example13",path:"/example13",component:"exampleView",children:[]},{id:490,title:"页面-14",name:"example14",path:"/example14",component:"exampleView",children:[]}]}],T={data:function(){return{menuData:D,showMenu:!0,pScrollbar:null}},mounted:function(){var e=this.$refs.prefectScrollbarContainer;this.pScrollbar=new this.$PerfectScrollbar(e),this.pScrollbar.update()},created:function(){N(this.menuData)},beforeDestroy:function(){this.ps&&"function"===typeof this.pScrollbar.destroy&&this.pScrollbar.destroy(),this.pScrollbar=null},components:{myMenu:E}},F=T,I=(n("8255"),Object(u["a"])(F,g,x,!1,null,"14bfaf13",null)),K=I.exports,L={name:"App",components:{Header:m,Footer:y,Aside:K}},q=L,U=(n("5e94"),Object(u["a"])(q,c,i,!1,null,"5898cf6c",null)),B=U.exports,J=n("b7f5"),H=(n("7da8"),n("bc3a")),R=n.n(H);n("f8ab"),n("aede");r["a"].config.productionTip=!1,r["a"].use(s["a"]),r["a"].use(a["a"]),r["a"].prototype.$axios=R.a,r["a"].prototype.$PerfectScrollbar=J["a"],new r["a"]({router:A["a"],render:function(e){return e(B)}}).$mount("#app")},"5e94":function(e,t,n){"use strict";var a=n("9474"),s=n.n(a);s.a},8255:function(e,t,n){"use strict";var a=n("d1d5"),s=n.n(a);s.a},9474:function(e,t,n){},"9dac":function(e,t,n){var a={"./exampleView":["4c6a","chunk-4b086452"],"./exampleView.vue":["4c6a","chunk-4b086452"],"./home":["6511","chunk-a43fb0bc"],"./home.vue":["6511","chunk-a43fb0bc"]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id="9dac",e.exports=s},a18c:function(e,t,n){"use strict";for(var a=n("a026"),s=n("8c4f"),r=(n("d3b7"),["home","exampleView"]),c=function(){var e=o[i];a["a"].component("route-".concat(e),(function(t){n("9dac")("./".concat(e)).then((function(e){t(e)})).catch((function(){}))}))},i=0,o=r;i<o.length;i++)c();a["a"].use(s["a"]);var l=new s["a"]({mode:"history",routes:[]});t["a"]=l},aede:function(e,t,n){},c963:function(e,t,n){},cc67:function(e,t,n){e.exports=n.p+"img/fish.c7eda498.gif"},d1d5:function(e,t,n){},e54c:function(e,t,n){"use strict";var a=n("e9fb"),s=n.n(a);s.a},e9fb:function(e,t,n){},f5c9:function(e,t,n){"use strict";var a=n("c963"),s=n.n(a);s.a},f8ab:function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),s=n.n(a);s.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}))}});
//# sourceMappingURL=index.3c440cb0.js.map