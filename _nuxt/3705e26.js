(window.webpackJsonp=window.webpackJsonp||[]).push([[7,14,15,21,23,24,28],{312:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},314:function(t,e,r){var n=r(3),o=r(25),l=r(13),c=r(315),d=n("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t){return function(e){var r=l(o(e));return 1&t&&(r=d(r,h,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},315:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},319:function(t,e,r){"use strict";var n=r(10),o=r(5),l=r(3),c=r(120),d=r(17),f=r(11),h=r(211),m=r(48),v=r(90),_=r(212),y=r(4),x=r(89).f,w=r(42).f,O=r(15).f,j=r(312),k=r(314).trim,P="Number",S=o.Number,M=S.prototype,N=o.TypeError,I=l("".slice),C=l("".charCodeAt),A=function(t){var e=_(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,n,o,l,c,d,code,f=_(t,"number");if(v(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=C(f,0))||45===e){if(88===(r=C(f,2))||120===r)return NaN}else if(48===e){switch(C(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=I(f,2)).length,d=0;d<c;d++)if((code=C(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(P,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var D,L=function(t){var e=arguments.length<1?0:S(A(t)),r=this;return m(M,r)&&y((function(){j(r)}))?h(Object(e),r,L):e},z=n?x(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;z.length>T;T++)f(S,D=z[T])&&!f(L,D)&&O(L,D,w(S,D));L.prototype=M,M.constructor=L,d(o,P,L,{constructor:!0})}},320:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("4b9e9d3d",content,!0,{sourceMap:!1})},322:function(t,e,r){var n=r(2),o=r(213).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},329:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var n=r(19),o=(r(319),r(47),r(70));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{tableType:{type:String,default:"project"},pagesNumber:{type:Number,default:1}},computed:c(c({},Object(o.b)({projectPaginationObject:"get_project_pagination",indexPaginationObject:"index_pagination"})),{},{paginationObject:function(){return"index"===this.tableType?this.indexPaginationObject:this.projectPaginationObject},pagesList:function(){for(var t=[],i=1;i<=this.pagesNumber;i++)t.push(i);return t},currentPage:function(){return Math.floor(this.paginationObject.offset/this.paginationObject.limit)+1},pagesNumbersShown:function(){if(this.currentPage<=3)return this.pagesList.slice(0,5);if(this.currentPage>this.pagesNumber-2-1)return this.pagesList.slice(-5);var t=this.currentPage-2-1<1?1:this.currentPage-2-1,e=this.currentPage+2>this.pagesNumber?this.pagesNumber:this.currentPage+2;return this.pagesList.slice(t,e)},isHiddenPagesLeft:function(){return 1!==this.pagesNumbersShown[0]},isHiddenPagesRight:function(){return this.pagesNumbersShown[this.pagesNumbersShown.length-1]!==this.pagesNumber}}),methods:c(c({},Object(o.c)({updatePagination:"set_pagination"})),{},{setOffset:function(t){this.updatePagination(c(c({},this.paginationObject),{},{offset:t,type:this.tableType}))},handleChangePage:function(t){t<1||t>this.pagesNumber||this.setOffset((t-1)*this.paginationObject.limit)}})},f=(r(359),r(35)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pagesList.length>0?r("div",{staticClass:"pagination-wrapper"},[r("ul",[r("li",{class:{arrows:!0,disabled:1===t.currentPage},on:{click:function(e){return t.handleChangePage(1)}}},[r("font-awesome-icon",{staticClass:"angle-double-left",attrs:{icon:"angle-double-left"}})],1),t._v(" "),r("li",{class:{arrows:!0,disabled:1===t.currentPage},on:{click:function(e){return t.handleChangePage(t.currentPage-1)}}},[r("font-awesome-icon",{staticClass:"angle-left",attrs:{icon:"angle-left"}})],1),t._v(" "),t.isHiddenPagesLeft?r("li",{staticClass:"dots"},[r("span",[t._v("...")])]):t._e(),t._v(" "),t._l(t.pagesNumbersShown,(function(e,i){return r("li",{key:i,class:{"pagination-item":!0,active:e===t.currentPage},on:{click:function(r){return t.handleChangePage(e)}}},[r("span",[t._v(" "+t._s(e))])])})),t._v(" "),t.isHiddenPagesRight?r("li",{staticClass:"dots"},[r("span",[t._v("...")])]):t._e(),t._v(" "),r("li",{class:{arrows:!0,disabled:t.currentPage===t.pagesNumber},on:{click:function(e){return t.handleChangePage(t.currentPage+1)}}},[r("font-awesome-icon",{staticClass:"angle-right",attrs:{icon:"angle-right"}})],1),t._v(" "),r("li",{class:{arrows:!0,disabled:t.currentPage===t.pagesNumber},on:{click:function(e){return t.handleChangePage(t.pagesNumber)}}},[r("font-awesome-icon",{staticClass:"chevron-double-right",attrs:{icon:"angle-double-right"}})],1)],2)]):t._e()}),[],!1,null,"6264104a",null);e.default=component.exports},359:function(t,e,r){"use strict";r(320)},360:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.pagination-wrapper[data-v-6264104a],.pagination-wrapper>ul[data-v-6264104a]{display:flex;justify-content:center}.pagination-wrapper>ul[data-v-6264104a]{margin-top:2rem;flex-direction:row;align-items:baseline;list-style:none;position:relative}.pagination-wrapper>ul[data-v-6264104a]:after{display:block;content:"";width:calc(100% - 3rem);position:absolute;bottom:-.2rem;height:.04rem;background-color:#7c7c7c}.pagination-wrapper>ul li[data-v-6264104a]{-webkit-user-select:none;-moz-user-select:none;user-select:none;width:3.875rem}.pagination-wrapper>ul li>span[data-v-6264104a]{display:block;text-align:center}.pagination-wrapper>ul li.arrows[data-v-6264104a],.pagination-wrapper>ul li.pagination-item[data-v-6264104a]{cursor:pointer;position:relative}.pagination-wrapper>ul li.arrows.active[data-v-6264104a],.pagination-wrapper>ul li.pagination-item.active[data-v-6264104a]{font-weight:700}.pagination-wrapper>ul li.arrows.active[data-v-6264104a]:after,.pagination-wrapper>ul li.pagination-item.active[data-v-6264104a]:after{position:absolute;content:"";display:block;width:100%;height:.2rem;background-color:#488ec4}.pagination-wrapper>ul li.arrows[data-v-6264104a]:hover,.pagination-wrapper>ul li.pagination-item[data-v-6264104a]:hover{color:#488ec4;font-weight:700}.pagination-wrapper>ul li.arrows[data-v-6264104a]{width:1.5rem;color:#488ec4;text-align:center;font-size:1rem}.disabled[data-v-6264104a]{pointer-events:none;opacity:.5}',""]),t.exports=n},368:function(t,e,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("977d7552",content,!0,{sourceMap:!1})},369:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("24196e74",content,!0,{sourceMap:!1})},370:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("e2efa5fa",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";r(368)},387:function(t,e,r){var n=r(36)(!1);n.push([t.i,".inner[data-v-23144033]{display:grid;grid-gap:.5rem;gap:.5rem;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr}.inner.-column[data-v-23144033]{grid-template-columns:1fr}.inner>.details[data-v-23144033]{display:flex;grid-gap:.5rem;gap:.5rem;align-items:center}.inner>.details svg[data-v-23144033]:hover{cursor:pointer}.inner>.details svg[data-icon=sort][data-v-23144033]{color:#7c7c7c;opacity:.3}.inner>.details svg[data-icon=search][data-v-23144033]{font-size:12px;color:#488ec4}.inner>.details svg[data-icon=search].active[data-v-23144033]{color:#fad275}.inner .tag[data-v-23144033]{font-size:12px;color:#7c7c7c;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}",""]),t.exports=n},388:function(t,e,r){"use strict";r(369)},389:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.median_scale{width:260px}.median_scale>ul{display:flex;margin:12px 0 0;font-size:10px;font-weight:500;border-bottom:1px solid #3e4652;border-left:1px solid #3e4652;border-right:1px solid #3e4652;padding:0 0 5px;height:5px;box-sizing:border-box;position:relative}.median_scale>ul:after,.median_scale>ul:before{position:absolute}.median_scale>ul:before{content:"0";bottom:100%;left:-3px}.median_scale>ul:after{content:"18";bottom:100%;right:-6px}.median_scale>ul>li{width:1px;height:5px;background-color:#3e4652;position:absolute}.median_scale>ul>li>span{position:absolute;bottom:100%;left:50%;transform:translateX(-50%)}.median_scale>ul li:first-child{left:28.75px}.median_scale>ul li:nth-child(2){left:57.5px}.median_scale>ul li:nth-child(3){left:86.25px}.median_scale>ul li:nth-child(4){left:115px}.median_scale>ul li:nth-child(5){left:143.75px}.median_scale>ul li:nth-child(6){left:172.5px}.median_scale>ul li:nth-child(7){left:201.25px}.median_scale>ul li:nth-child(8){left:230px}',""]),t.exports=n},390:function(t,e,r){"use strict";var n=r(2),o=r(3),l=r(56),c=r(312),d=r(218),f=r(4),h=RangeError,m=String,v=Math.floor,_=o(d),y=o("".slice),x=o(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},O=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},j=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,r,n,o,d=c(this),f=l(t),data=[0,0,0,0,0,0],v="",x="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(v="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(O(data,0,r),n=f;n>=7;)O(data,1e7,0),n-=7;for(O(data,w(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),O(data,1,1),j(data,2),x=k(data)}else O(data,0,r),O(data,1<<-e,0),x=k(data)+_("0",f);return x=f>0?v+((o=x.length)<=f?"0."+_("0",f-o)+x:y(x,0,o-f)+"."+y(x,o-f)):v+x}})},391:function(t,e,r){"use strict";r(370)},392:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.bar_box[data-v-d9fae48e]{display:grid;align-items:center;border-left:1px solid #3e4652;position:relative}.bar_box>.bar[data-v-d9fae48e]{width:100%;height:2px;background-color:hsla(0,0%,43.9%,.4);position:relative}.bar_box>.bar[data-v-d9fae48e]:after{content:"";width:10px;height:10px;border-radius:50%;position:absolute;top:50%;right:-5px;transform:translateY(-50%);background-color:#488ec4}.bar_box>.tooltip[data-v-d9fae48e]{display:none;background-color:#fff;padding:3px 8px;border:1px solid #488ec4;border-radius:3px;box-shadow:0 1px 4px rgba(62,70,82,.22);position:absolute;top:0;z-index:2}.bar_box>.tooltip>span[data-v-d9fae48e]{display:block;white-space:nowrap}.bar_box>.tooltip>span.title[data-v-d9fae48e]{font-size:10px}.bar_box>.tooltip>span.value[data-v-d9fae48e]{font-weight:700;position:relative;padding-left:12px;line-height:20px;display:flex}.bar_box>.tooltip>span.value[data-v-d9fae48e]:after{content:"";width:10px;height:10px;border-radius:100px;position:absolute;left:0;top:50%;transform:translateY(-50%)}.bar_box>.tooltip span.align_right[data-v-d9fae48e]{text-align:right;width:100%;margin-left:10px}.bar_box:hover>.tooltip[data-v-d9fae48e]{display:block;z-index:100}.bar_box .single_item.item_1[data-v-d9fae48e]:after{background-color:#488ec4!important}.bar_box .single_item.item_2[data-v-d9fae48e]:after{background-color:#ff8a17!important}.bar_box .single_item.item_3[data-v-d9fae48e]:after{background-color:#67c1c7!important}.bar_box .single_item.item_4[data-v-d9fae48e]:after{background-color:#f24b56!important}.bar_box .single_item.item_5[data-v-d9fae48e]:after{background-color:#3ba44a!important}.bar_box .single_item.item_6[data-v-d9fae48e]:after{background-color:#edc339!important}.bar_box .single_item.item_7[data-v-d9fae48e]:after{background-color:#b97cbf!important}.bar_box .single_item.item_8[data-v-d9fae48e]:after{background-color:#a3735e!important}.bar_box .single_item.item_9[data-v-d9fae48e]:after{background-color:#ff98a6!important}.bar_box .single_item.item_10[data-v-d9fae48e]:after{background-color:#a8a8a8!important}',""]),t.exports=n},404:function(t,e,r){var content=r(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("747f9fd8",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r.r(e);var n=r(19),o=(r(14),r(72),r(73),r(39),r(30),r(38),r(52),r(31),r(53),r(70));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:{id:{type:String,required:!0},label:{type:String,default:""},note:{type:String,required:!1},is_ontology:{type:Boolean,default:!1},is_displayed:{type:Boolean,default:!0},filterModal:{type:[String,Array],default:""},options:{type:[Array],required:!1},numberValue:{type:Object,required:!1},currentSort:{type:Object,required:!0}},computed:{height:function(){return this.heightChartWrapper+"px"},isActiveSearch:function(){var t=this;return this.numberValue?this.filterModal[0]!==this.numberValue.min||this.filterModal[1]!==this.numberValue.max:this.options?this.options.some((function(e){return!t.filterModal.includes(e)})):""!==this.filterModal}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({switchSort:function(){this.$emit("switchSort",this.id)}},Object(o.c)({setFilterModal:"set_filter_modal"}))},d=c,f=(r(386),r(35)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner",class:{"-column":t.note}},[r("span",{staticClass:"label"},[t._v(" "+t._s(t.label)+" ")]),t._v(" "),r("div",{staticClass:"details"},[t.note?r("span",{staticClass:"tag"},[t._v(t._s(t.note))]):t._e(),t._v(" "),r("font-awesome-icon",{attrs:{icon:t.currentSort.key===t.id?"sort-"+t.currentSort.order:"sort"},on:{click:t.switchSort}}),t._v(" "),r("font-awesome-icon",{class:{active:t.isActiveSearch},attrs:{icon:"search"},on:{click:function(e){return t.setFilterModal(t.id)}}})],1),t._v(" "),t._t("default")],2)}),[],!1,null,"23144033",null);e.default=component.exports},414:function(t,e,r){"use strict";r.r(e);var n={props:{intervals:{type:Array,default:function(){return[2,4,6,8,10,12,14,16]}}}},o=(r(388),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"median_scale"},[r("ul",t._l(t.intervals,(function(e){return r("li",{key:e},[r("span",[t._v(t._s(e))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var n=r(92),o=(r(322),r(390),{props:{medianInfo:{type:Object,default:function(){}},items:{type:Array,default:function(){return[]}}},computed:{numberOfItems:function(){return this.items.length},maxWidth:function(){return 230*Math.max.apply(Math,Object(n.a)(Object.values(this.medianInfo)))/16},height:function(){return 15*this.numberOfItems}},methods:{tooltipNumberDisplay:function(t){return t>=0?null==t?void 0:t.toFixed(2):"NA"}}}),l=(r(391),r(35)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar_box",style:"height: "+t.height+"px"},[t._l(t.items,(function(e,n){return r("div",{key:n,staticClass:"bar single_item value",class:"item_"+(n+1),style:"width: "+230*t.medianInfo[e.id]/16+"px;"})})),t._v(" "),r("div",{staticClass:"tooltip",style:"left: "+(t.maxWidth+30)+"px"},[r("span",{staticClass:"title"},[t._v("Expression(log2(TPM+1))")]),t._v(" "),t._l(t.items,(function(e,n){return r("span",{key:n,staticClass:"value single_item align_right",class:"item_"+(n+1)},[t.numberOfItems>1?r("span",{staticClass:"symbol"},[t._v(t._s((e.info.symbol||e.info.sample_id)+"  "))]):t._e(),t._v("\n      "+t._s(t.tooltipNumberDisplay(t.medianInfo[e.id]))+"\n    ")])}))],2)],2)}),[],!1,null,"d9fae48e",null);e.default=component.exports},423:function(t,e,r){"use strict";var n=r(2),o=r(3),l=r(45),c=r(26),d=r(32),f=r(222),h=r(13),m=r(4),v=r(219),_=r(153),y=r(424),x=r(425),w=r(93),O=r(426),j=[],k=o(j.sort),P=o(j.push),S=m((function(){j.sort(void 0)})),M=m((function(){j.sort(null)})),N=_("sort"),I=!m((function(){if(w)return w<70;if(!(y&&y>3)){if(x)return!0;if(O)return O<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)j.push({k:t+r,v:e})}for(j.sort((function(a,b){return b.v-a.v})),r=0;r<j.length;r++)t=j[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:S||!M||!N||!I},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(I)return void 0===t?k(e):k(e,t);var r,n,o=[],m=d(e);for(n=0;n<m;n++)n in e&&P(o,e[n]);for(v(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:h(e)>h(r)?1:-1}}(t)),r=o.length,n=0;n<r;)e[n]=o[n++];for(;n<m;)f(e,n++);return e}})},424:function(t,e,r){var n=r(74).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},425:function(t,e,r){var n=r(74);t.exports=/MSIE|Trident/.test(n)},426:function(t,e,r){var n=r(74).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},427:function(t,e,r){"use strict";r(404)},428:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.table-wrapper[data-v-486baa52]{margin:0 45px}.table-wrapper table[data-v-486baa52]{white-space:nowrap;width:100%;border-collapse:collapse}.table-wrapper table .checkbox[data-v-486baa52]{text-align:center}.table-wrapper table .checkbox>input[type=checkbox][data-v-486baa52]{cursor:pointer;z-index:1;position:relative;width:15px;height:15px}.table-wrapper table>thead[data-v-486baa52]{font-size:14px}.table-wrapper table>thead>tr[data-v-486baa52]:hover{background-color:rgba(255,255,0,.1)}.table-wrapper table>thead>tr>th[data-v-486baa52]{position:-webkit-sticky;position:sticky;top:0;text-align:left;padding:8px 0 6px 10px;background-color:#fff;z-index:1}.table-wrapper table>thead>tr>th .small[data-v-486baa52]{font-weight:400;font-size:12px}.table-wrapper table>thead>tr>th[data-v-486baa52]:after,.table-wrapper table>thead>tr>th[data-v-486baa52]:before{content:"";width:100%;position:absolute;background-color:#3e4652;left:0}.table-wrapper table>thead>tr>th[data-v-486baa52]:before{height:3px;top:0}.table-wrapper table>thead>tr>th[data-v-486baa52]:after{height:1px;bottom:0}.table-wrapper table>thead>tr>th.checkbox[data-v-486baa52]{text-align:center;min-width:25px}.table-wrapper table>tbody[data-v-486baa52]{border-bottom:3px solid #3e4652}.table-wrapper table>tbody>tr>td[data-v-486baa52]{font-size:14px;line-height:18px;padding:12px 0 12px 10px;position:relative}.table-wrapper table>tbody>tr>td.annotation[data-v-486baa52]{color:#488ec4}.table-wrapper table>tbody>tr>td.annotation>svg[data-v-486baa52]:hover{cursor:pointer;color:#366c96}.table-wrapper table>tbody>tr>td.gene_expression_patterns[data-v-486baa52]{min-width:200px;max-width:30vw}.table-wrapper table>tbody>tr>td.gene_expression_patterns img[data-v-486baa52]{width:100%}.table-wrapper table>tbody>tr[data-v-486baa52]:nth-of-type(2n){background-color:#f5f7f9}.table-wrapper table>tbody>tr[data-v-486baa52]:hover{background-color:rgba(255,255,0,.1)}',""]),t.exports=n},433:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(52),r(31),r(53),r(44),r(57),r(40),r(58),r(59),r(41);var n=r(92),o=r(19),l=r(18),c=(r(46),r(27),r(209),r(77),r(319),r(38),r(14),r(72),r(73),r(322),r(210),r(423),r(47),r(413)),d=r(70),f=r(329);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{TableHeader:c.default,ResultsPagination:f.default},props:{selectedItem:{type:String,default:""},geneIdKey:{type:String,default:"geneid"},dataset:{type:String,default:""},items:{type:Array,default:function(){return[]}},heightChartWrapper:{type:Number,default:200}},data:function(){return{sort:{key:"LogMedian",order:"down"}}},computed:_(_({},Object(d.b)({results:"get_project_results",paginationObject:"get_project_pagination",filters:"project_filters",geneSummarySource:"gene_summary_source"})),{},{filteredData:function(){var t,e=this;return null===(t=Object(n.a)(this.results).filter((function(t){var r,n=!1,o=h(e.filters);try{var c=function(){var filter=r.value,e=filter.column;if(!filter.is_displayed)return"continue";if(filter.options)filter.filterModal.includes(t[e])||(n=!0);else if("number"==typeof filter.filterModal||Array.isArray(filter.filterModal)){void 0===("Age"===e?t[e].replace("-",",").split(",").map((function(t){return parseInt(t)||"out of filter bounds"})):"LogMedian"===e?Object.values(t.combinedMedianData):[t[e]]).find((function(t){return function(t,e){var r=Object(l.a)(e,2),n=r[0],o=r[1];return"number"!=typeof t||(t-n)*(t-o)<=0}(t,filter.filterModal)}))&&(n=!0)}else if(""!==filter.filterModal&&!n){var o=t[e].includes(filter.filterModal);n=""!==filter.filterModal&&!o}};for(o.s();!(r=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return!n})))||void 0===t?void 0:t.sort((function(a,b){var t,r="LogMedian"===e.sort.key?a.combinedMedianData[e.selectedItem]:a[e.sort.key],n="LogMedian"===e.sort.key?b.combinedMedianData[e.selectedItem]:b[e.sort.key];switch(null===(t=e.sort)||void 0===t?void 0:t.order){case"up":return r<n?-1:r>n?1:0;case"down":return r>n?-1:r<n?1:0}}))},pageItems:function(){return this.filteredData.slice(this.paginationObject.offset,this.paginationObject.offset+this.paginationObject.limit)},pagesNumber:function(){return Math.ceil(this.filteredData.length/this.paginationObject.limit)}}),mounted:function(){this.$emit("updateSort",this.sort)},methods:_(_({},Object(d.c)({setGeneModal:"set_gene_modal",updatePagination:"set_project_pagination"})),{},{sortUpOrDown:function(a,b){var t;switch(null===(t=this.sort)||void 0===t?void 0:t.order){case"up":return a<b?-1:a>b?1:0;case"down":return a>b?-1:a<b?1:0}},switchSort:function(t,e){this.sort.key===t?this.sort.order="up"===this.sort.order?"down":"up":(this.sort.key=t,this.sort.order="up"),e&&(this.sort.order=e),this.$emit("updateSort",this.sort)}})},x=(r(427),r(35)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"table-wrapper"},[r("table",[r("thead",[r("tr",t._l(t.filters,(function(filter,e){return r("th",{directives:[{name:"show",rawName:"v-show",value:filter.is_displayed,expression:"filter.is_displayed"}],key:"filterIndex-"+e,style:{top:t.heightChartWrapper+"px"}},[r("table-header",t._b({class:filter.column,attrs:{id:filter.column,"current-sort":t.sort},on:{switchSort:t.switchSort}},"table-header",filter,!1),["LogMedian"===filter.column?r("median-scale"):t._e()],1)],1)})),0)]),t._v(" "),r("tbody",t._l(t.pageItems,(function(e,n){return r("tr",{key:n},[t._l(t.filters,(function(filter,n){return[filter.is_displayed?r("td",{key:"result-"+n,class:filter.column.replaceAll(" ","_")},["LogMedian"===filter.column?r("MedianBar",{attrs:{items:t.items,"median-info":e.combinedMedianData}}):"annotation"===filter.column?r("font-awesome-icon",{attrs:{icon:"info-circle"},on:{click:function(r){return r.stopPropagation(),t.setGeneModal(e[t.geneIdKey])}}}):"gene expression patterns"===filter.column?r("img",{attrs:{src:t.geneSummarySource(e[t.geneIdKey]),alt:e[t.geneIdKey]}}):"alias"===filter.column&&Array.isArray(JSON.parse(e[filter.column]))?t._l(JSON.parse(e[filter.column]),(function(n,o){return r("span",{key:o},[r("span",[t._v(t._s(n))]),t._v(" "),o<JSON.parse(e[filter.column]).length-1?r("span",{staticClass:"comma"},[t._v(",\n                ")]):t._e()])})):[t._v("\n              "+t._s(e[filter.column])+"\n            ")]],2):t._e()]}))],2)})),0)]),t._v(" "),r("ResultsPagination",{attrs:{"pages-number":t.pagesNumber}})],1)}),[],!1,null,"486baa52",null);e.default=component.exports;installComponents(component,{MedianScale:r(414).default,MedianBar:r(415).default,ResultsPagination:r(329).default})}}]);