(function(t){function e(e){for(var s,l,i=e[0],c=e[1],o=e[2],d=0,f=[];d<i.length;d++)l=i[d],n[l]&&f.push(n[l][0]),n[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vue-datatable/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02a9":function(t,e,a){"use strict";var s=a("0832"),n=a.n(s);n.a},"0832":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56b5":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s,n,r=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#5e717d"}},[t._m(0),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mt-4 mb-4"},[a("data-table",{attrs:{url:t.url,columns:t.columns,"per-page":t.perPage,pagination:t.pagination}})],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Logo")]),a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link 1")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link 2")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link 3")])])])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tableData.length,expression:"tableData.length"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.tableData,"length",e.target.multiple?a:a[0])}}},t._l(t.perPage,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n            ")])}),0)]),a("div",{staticClass:"col-md-3 offset-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.search,expression:"tableData.search"}],staticClass:"form-control",attrs:{name:"name",placeholder:"Search Table"},domProps:{value:t.tableData.search},on:{input:function(e){e.target.composing||t.$set(t.tableData,"search",e.target.value)}}})])])},o=[],u={methods:{getData:function(){this.$emit("getData")}},props:{tableData:{type:Object,default:function(){return{}},required:!0},perPage:{type:Array,default:function(){return[]},required:!0}}},d=u,f=a("2877"),b=Object(f["a"])(d,c,o,!1,null,null,null),p=b.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.filtersSlot?t._t("filters",null,{url:t.url,perPage:t.perPage,tableData:t.tableData}):a("data-table-filters",{attrs:{"per-page":t.perPage,tableData:t.tableData},on:{getData:t.getData}}),a("vue-table",{attrs:{sortKey:t.sortKey,columns:t.columns,sortOrders:t.sortOrders,"table-classes":t.classes.table,"table-header-classes":t.classes["t-head"],"table-row-classes":t.classes["t-head-tr"],"table-container-classes":t.classes["table-container"]},on:{sort:t.sortBy}},[a("tbody",{class:t.classes["t-body"]},t._l(t.data.data,function(e){return a("tr",{key:e.id,class:t.classes["t-body-tr"]},t._l(t.columns,function(s){return a("td",{key:s.name,class:t.classes.td},[a("data-table-cell",{attrs:{value:e,name:s.name,classes:s.classes,"click-event":s.click,comp:s.component}})],1)}),0)}),0)]),t.paginationSlot?t._t("pagination",null,{links:t.data.links,meta:t.data.meta}):a("laravel-pagination",{attrs:{data:t.data,align:t.pagination.align,limit:t.pagination.limit,size:t.pagination.size},on:{"pagination-change-page":t.getData}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("Previous")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next")])])],2)},h=[],j=(a("c5f6"),a("7cdf"),a("20d6"),a("7f7f"),a("ac6a"),a("bc3a")),v=a.n(j),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.tableContainerClasses},[a("table",{class:t.tableClasses},[a("thead",{class:t.tableHeaderClasses},[a("tr",{class:t.tableRowClasses},t._l(t.columns,function(e){return a("th",{key:e.name,class:t.headerClasses(e),style:"width: "+e.width+"%",attrs:{scope:"col"},on:{click:function(a){e.filterable&&t.$emit("sort",e.name)}}},[e.filterable?a("i",{staticClass:"fa fa-sort",attrs:{"aria-hidden":"true"}}):t._e(),t._v("\n                    "+t._s(e.label)+"\n                ")])}),0)]),t._t("default")],2)])},y=[],k={props:{columns:{type:Array,default:function(){return[]},required:!0},sortKey:{type:String,default:""},sortOrders:{type:Object,default:function(){return{}}},tableClasses:{type:Object,default:function(){return{}}},tableHeaderClasses:{type:Object,default:function(){return{"p-3":!0,"text-left":!0}}},tableRowClasses:{type:Object,default:function(){return{}}},tableContainerClasses:{type:Object,default:function(){return{}}}},methods:{headerClasses:function(t){var e=this.tableHeaderClasses;return e["table-header-sorting"]=t.filterable,e}},computed:{}},_=k,w=(a("7602"),Object(f["a"])(_,g,y,!1,null,"77e973dd",null)),C=w.exports,D={props:{comp:{},name:{type:String,default:""},value:{type:Object,default:function(){return{}}},clickEvent:{type:Function},classes:{type:Object,default:function(){return{}}}},data:function(){return{}},render:function(t){return this.comp?t(this.comp,{props:{name:this.name,data:this.value,click:this.clickEvent},attrs:{classes:this.classes}}):t("span",{},this.value[this.name])}},O=D,x=Object(f["a"])(O,s,n,!1,null,null,null),P=x.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.tableData.length,expression:"tableData.length"}],staticClass:"form-control",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.tableData,"length",e.target.multiple?a:a[0])},t.getData]}},t._l(t.perPage,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n            ")])}),0)]),a("div",{staticClass:"col-md-3 offset-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tableData.search,expression:"tableData.search"}],staticClass:"form-control",attrs:{name:"name",placeholder:"Search Table"},domProps:{value:t.tableData.search},on:{input:[function(e){e.target.composing||t.$set(t.tableData,"search",e.target.value)},t.getData]}})])])},$=[],S={methods:{getData:function(){this.$emit("getData")}},props:{tableData:{type:Object,default:function(){return{}},required:!0},perPage:{type:Array,default:function(){return[]},required:!0}}},E=S,q=Object(f["a"])(E,z,$,!1,null,null,null),N=q.exports,M={created:function(){this.getData()},mounted:function(){var t=this;this.columns.forEach(function(e){t.sortOrders[e.name]=-1})},watch:{url:{handler:function(t){this.getData(t)}},tableData:{handler:function(){this.getData()},deep:!0}},components:{"vue-table":C,"data-table-cell":P,"data-table-filters":N},data:function(){return{data:{},sortKey:"id",sortOrders:{},draw:0,tableData:{length:this.perPage[0],search:"",column:0,dir:"asc"}}},props:{url:{type:String,default:"/",required:!0},columns:{type:Array,default:function(){return[]},required:!0},perPage:{type:Array,default:function(){return["10","25","50"]}},classes:{type:Object,default:function(){return{"table-container":{"table-responsive":!0},table:{table:!0,"table-striped":!0,"table-dark":!0},"t-head":{},"t-body":{},td:{},th:{}}}},pagination:{type:Object,default:function(){return{align:"right"}}}},methods:{getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.url;e=this.checkUrlForPagination(e),this.incrementDraw(),v.a.get(e,this.getRequestPayload).then(function(e){var a=e.data;t.checkTableDraw(a.payload.draw)&&(t.data=a)}).catch(function(t){alert(t)})},sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t],this.tableData.column=this.getIndex(this.columns,"name",t),this.tableData.dir=1===this.sortOrders[t]?"desc":"asc",this.getData()},getIndex:function(t,e,a){return t.findIndex(function(t){return t[e]==a})},incrementDraw:function(){this.draw++},checkTableDraw:function(t){return this.draw==t},checkUrlForPagination:function(t){return Number.isInteger(t)?(t=this.url+"?page="+t,t):t}},computed:{getRequestPayload:function(){var t=this.tableData;return t.draw=this.draw,{params:t}},paginationSlot:function(){return this.$scopedSlots.pagination},filtersSlot:function(){return this.$scopedSlots.filters}}},T=M,A=Object(f["a"])(T,m,h,!1,null,null,null),U=A.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"row"},[a("div",{staticClass:"col-md-6 text-left"},[a("span",[t._v("\n             Showing \n                "+t._s(t.meta.from)+"\n             to \n                "+t._s(t.meta.to)+"\n             of \n                "+t._s(t.meta.total)+"\n             Entries \n        ")])]),a("div",{staticClass:"col-md-6 text-right"},[t.links.prev?a("button",{class:t.buttonClasses,on:{click:function(e){return t.$emit("prev",t.links.prev)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}),t._v("\n             Prev\n        ")]):a("button",{class:t.buttonClasses,attrs:{disabled:!0},on:{click:function(e){return t.$emit("prev",t.links.prev)}}},[a("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}),t._v("\n             Prev\n        ")]),t.links.next?a("button",{class:t.buttonClasses,on:{click:function(e){return t.$emit("next",t.links.next)}}},[t._v("\n            Next \n            "),a("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})]):a("button",{class:t.buttonClasses,attrs:{disabled:!0}},[t._v("\n            Next \n            "),a("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])])])},F=[],I={props:{meta:{type:Object,default:function(){return{}},required:!0},links:{type:Object,default:function(){return{}},required:!0},buttonClasses:{type:String,default:"btn btn-primary mr-4"}}},K=I,R=Object(f["a"])(K,L,F,!1,null,null,null),Y=R.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.classes,attrs:{title:"Update"},on:{click:function(e){return t.click(t.data)}}},[t._m(0),t._v("\n     \n    "+t._s(t.name)+"\n")])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])}],G={props:{data:{},name:{},click:{},classes:{}}},J=G,V=Object(f["a"])(J,B,H,!1,null,null,null),Q=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"mailto:"+t.data.email}},[t._v(t._s(t.data[t.name]))])},X=[],Z={props:{data:{},name:{},click:{},classes:{}}},tt=Z,et=(a("79f4"),Object(f["a"])(tt,W,X,!1,null,"7169d668",null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" "+t._s(t._f("formatDate")(t.data[t.name]))+" ")])},nt=[],rt={props:{data:{},name:{},click:{},classes:{}}},lt=rt,it=(a("02a9"),Object(f["a"])(lt,st,nt,!1,null,"0eef3261",null)),ct=it.exports,ot={name:"app",data:function(){return{url:"https://www.jamesdordoy.co.uk/api/fake-users",perPage:["10","25","50"],columns:[{label:"ID",name:"id",filterable:!0,width:10},{label:"Name",name:"name",filterable:!0,width:20},{label:"Email",name:"email",filterable:!0,component:at,width:20},{label:"Created On",name:"created_at",filterable:!0,component:ct,width:20},{label:"Last Updated",name:"updated_at",filterable:!0,component:ct,width:20},{label:"",name:"View",filterable:!1,click:this.alertMe,component:Q,classes:{btn:!0,"btn-primary":!0,"btn-sm":!0},width:10}],pagination:{limit:1,align:"right",size:"small"}}},methods:{updateUrl:function(t){this.url=t},alertMe:function(){alert("hey")}},components:{DataTableButtonCell:Q,DataTableAnchorCell:at,DataTable:U,Pagination:Y,Filters:p}},ut=ot,dt=Object(f["a"])(ut,l,i,!1,null,null,null),ft=dt.exports,bt=a("c1df"),pt=a.n(bt),mt=(a("4989"),a("ab8b"),{install:function(t){t.component("data-table",U),t.component("laravel-pagination",a("7211"))}});r["a"].use(mt),r["a"].config.productionTip=!1,r["a"].filter("formatDate",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Do MMMM YYYY";return t?pt()(String(t)).format(e):"N/A"}),new r["a"]({render:function(t){return t(ft)}}).$mount("#app")},7602:function(t,e,a){"use strict";var s=a("56b5"),n=a.n(s);n.a},"79f4":function(t,e,a){"use strict";var s=a("b681"),n=a.n(s);n.a},b681:function(t,e,a){}});
//# sourceMappingURL=app.858b4600.js.map