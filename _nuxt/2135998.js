(window.webpackJsonp=window.webpackJsonp||[]).push([[32,12,17,18,19,20,22],{313:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("93bd2a6a",content,!0,{sourceMap:!1})},316:function(t,e,r){var content=r(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("514f41fc",content,!0,{sourceMap:!1})},317:function(t,e,r){var content=r(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("512239bd",content,!0,{sourceMap:!1})},321:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("aba88d08",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";r(313)},324:function(t,e,r){var o=r(36)(!1);o.push([t.i,".display_settings_modal[data-v-526e52fa]{width:400px}.display_settings_modal>.display_checkboxes[data-v-526e52fa]{-moz-column-count:2;column-count:2}.display_settings_modal>.display_checkboxes>div[data-v-526e52fa]{width:100%;display:inline-block;line-height:26px}.display_settings_modal>.display_checkboxes>div>label[data-v-526e52fa]{font-size:14px}.display_settings_modal>.display_pagination[data-v-526e52fa]{margin-top:1rem}",""]),t.exports=o},326:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(52),r(31),r(53);var o=r(19),n=(r(210),r(14),r(118)),l=r(70);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{ModalView:n.default},props:{indexFilters:{type:Array,required:!1}},computed:d(d({},Object(l.b)({projectFilters:"project_filters",projectPaginationObject:"get_project_pagination",indexPaginationObject:"index_pagination"})),{},{paginationObject:function(){return this.indexFilters?this.indexPaginationObject:this.projectPaginationObject},filters:function(){var t;return null!==(t=this.indexFilters)&&void 0!==t?t:this.projectFilters},currentLimit:function(){return this.paginationObject.limit}}),methods:d(d({},Object(l.c)({updateProjectFilters:"update_project_filters",updatePagination:"set_pagination"})),{},{toggleDisplayOfFilter:function(t){var e;this.indexFilters?this.$emit("updateDisplaySettings",t):this.updateProjectFilters({key:"is_displayed",filter:!(null!==(e=this.filters.find((function(e){return e.column===t})))&&void 0!==e&&e.is_displayed),filterKey:t})},toggleDisplaySettings:function(){this.isDisplaySettings=!this.isDisplaySettings},setLimit:function(t){var e=+t.target.value,r=(Math.max(Math.ceil(this.paginationObject.offset/e),1)-1)*e;this.updatePagination({limit:e,offset:r,type:this.indexFilters?"index":"project"})}})},m=(r(323),r(35)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal-view",[r("div",{staticClass:"modal display_settings_modal",on:{click:function(t){t.stopPropagation()}}},[r("p",{staticClass:"modal_title"},[r("font-awesome-icon",{attrs:{icon:"eye"}}),t._v("\n      Display settings\n    ")],1),t._v(" "),r("div",{staticClass:"display_checkboxes"},t._l(t.filters,(function(e,o){return r("div",{key:o},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.is_displayed},on:{click:function(r){return t.toggleDisplayOfFilter(e.column)}}}),t._v(" "),r("label",{attrs:{for:e.innerKey}},[t._v(" "+t._s(e.label)+" ")])])})),0),t._v(" "),r("div",{staticClass:"display_pagination"},[r("label",{attrs:{for:"pagination"}},[t._v("Items per page")]),t._v(" "),r("select",{attrs:{id:"pagination",name:"pagination"},on:{change:t.setLimit}},t._l([10,20,50,100],(function(e){return r("option",{key:"pagination-limit-"+e,domProps:{value:e,selected:e===t.currentLimit}},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])])])}),[],!1,null,"526e52fa",null);e.default=component.exports;installComponents(component,{ModalView:r(118).default})},327:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var o=r(12),n=r(19),l=(r(71),r(118)),c=r(70);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{ModalView:l.default},data:function(){return{data:{},isLoading:!1}},computed:f({},Object(c.b)({id:"gene_modal"})),watch:{id:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.id){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,e.next=5,t.$axios.$get("https://mygene.info/v3/gene/".concat(t.id)).then((function(data){t.data=data})).catch((function(e){t.setAlertModal({msg:"Failed to get data in Modal View Gene"})}));case 5:t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}},methods:f({},Object(c.c)({setGeneModal:"set_gene_modal",setAlertModal:"set_alert_modal"}))},v=(r(330),r(35)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.id?r("modal-view",{nativeOn:{click:function(e){return t.setGeneModal()}}},[r("div",{staticClass:"modal_wrapper",on:{click:function(t){t.stopPropagation()}}},[t.isLoading?r("p",{staticClass:"loading"},[t._v("Loading...")]):r("div",{staticClass:"gene_detail"},[r("a",{staticClass:"gene_name",attrs:{href:"https://www.ncbi.nlm.nih.gov/gene/?term="+t.data._id,target:"_blank"}},[t._v(t._s(""+t.data.symbol)),r("span",[t._v(t._s(" ("+t.data.name+", GeneID: "+t.data._id+")"))])]),t._v(" "),r("div",{staticClass:"detail_contents"},[r("p",{staticClass:"title"},[t._v("Alias")]),t._v(" "),t.data.alias&&"object"==typeof t.data.alias?r("p",{staticClass:"contents"},t._l(t.data.alias,(function(e,o){return r("span",{key:o},[r("span",[t._v(t._s(e))]),t._v(" "),o!==t.data.alias.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e()])})),0):r("p",{staticClass:"contents"},[r("span",[t._v(t._s(t.data.alias))])]),t._v(" "),r("p",{staticClass:"title"},[t._v("Type of gene")]),t._v(" "),r("p",{staticClass:"contents"},[t._v(t._s(t.data.type_of_gene))]),t._v(" "),r("p",{staticClass:"title"},[t._v("Summary")]),t._v(" "),r("p",{staticClass:"contents"},[t._v(t._s(t.data.summary))]),t._v(" "),r("p",{staticClass:"title"},[t._v("RefSeq")]),t._v(" "),t.data.refseq?r("p",{staticClass:"contents"},["object"==typeof t.data.refseq.rna?r("span",t._l(t.data.refseq.rna,(function(e,o){return r("span",{key:o},[r("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/gene/?term="+e,target:"_blank"}},[t._v(t._s(e))]),t._v(" "),o!==t.data.refseq.rna.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e()])})),0):r("span",[r("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/gene/?term="+t.data.refseq.rna,target:"_blank"}},[t._v(t._s(t.data.refseq.rna))])])]):t._e(),t._v(" "),r("p",{staticClass:"title"},[t._v("Ensembl")]),t._v(" "),t.data.ensembl?r("p",{staticClass:"contents"},t._l(t.data.ensembl.transcript,(function(e,o){return r("span",{key:o},[r("a",{attrs:{href:"http://asia.ensembl.org/Multi/Search/Results?q="+e+";site=enssembl",target:"_blank"}},[t._v(t._s(e))]),t._v(" "),o!==t.data.ensembl.transcript.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e()])})),0):t._e(),t._v(" "),r("p",{staticClass:"title"},[t._v("GO")]),t._v(" "),r("p",{staticClass:"sub_title"},[t._v("BP")]),t._v(" "),t.data.go?r("p",{staticClass:"contents"},t._l(t.data.go.BP,(function(e,o){return r("span",{key:o},[r("a",{attrs:{href:"http://amigo.geneontology.org/amigo/term/"+e.id,target:"_blank"}},[t._v(t._s(e.id+": "+e.term))]),t._v(" "),o!==t.data.go.BP.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e(),t._v(" "),r("br")])})),0):t._e(),t._v(" "),r("p",{staticClass:"sub_title"},[t._v("CC")]),t._v(" "),t.data.go?r("p",{staticClass:"contents"},t._l(t.data.go.CC,(function(e,o){return r("span",{key:o},[r("a",{attrs:{href:"http://amigo.geneontology.org/amigo/term/"+e.id,target:"_blank"}},[t._v(t._s(e.id+": "+e.term))]),t._v(" "),o!==t.data.go.CC.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e(),t._v(" "),r("br")])})),0):t._e(),t._v(" "),r("p",{staticClass:"sub_title"},[t._v("MF")]),t._v(" "),t.data.go?r("p",{staticClass:"contents"},t._l(t.data.go.MF,(function(e,o){return r("span",{key:o},[r("a",{attrs:{href:"http://amigo.geneontology.org/amigo/term/"+e.id,target:"_blank"}},[t._v(t._s(e.id+": "+e.term))]),t._v(" "),o!==t.data.go.MF.length-1?r("span",{staticClass:"comma"},[t._v(",")]):t._e(),t._v(" "),r("br")])})),0):t._e()])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ModalView:r(118).default})},328:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var o=r(19),n=r(118),l=r(70);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{ModalView:n.default},data:function(){return{itemIdsForComparisonStr:""}},computed:d(d({},Object(l.b)({activeDataset:"active_dataset",routeToProjectPage:"route_to_project_page",isOn:"compare_modal"})),{},{examples:function(){return this.activeDataset[this.$store.state.active_filter].item_comparison_example}}),methods:d(d({},Object(l.c)({toggleCompareModal:"set_compare_modal"})),{},{setExample:function(t){this.itemIdsForComparisonStr=t},comparisonSearch:function(){""!==this.itemIdsForComparisonStr&&(this.$nuxt.$loading.start(),location.href=this.routeToProjectPage(this.itemIdsForComparisonStr),this.toggleCompareModal())}})},m=(r(332),r(35)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isOn?r("modal-view",{nativeOn:{click:function(e){return t.toggleCompareModal.apply(null,arguments)}}},[r("div",{staticClass:"modal compare_modal",on:{click:function(t){t.stopPropagation()}}},[r("p",{staticClass:"modal_title"},[r("font-awesome-icon",{attrs:{icon:"search"}}),t._v("\n      Compare with comma separated ID list\n    ")],1),t._v(" "),t._l(t.examples,(function(e,o){return r("div",{key:o,staticClass:"sample"},[r("span",{staticClass:"ex"},[t._v("e.g. ")]),t._v(" "),r("span",{staticClass:"sample_value",on:{click:function(r){return t.setExample(e.route)}}},[t._v(t._s(e.label))])])})),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemIdsForComparisonStr,expression:"itemIdsForComparisonStr"}],attrs:{type:"text"},domProps:{value:t.itemIdsForComparisonStr},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.comparisonSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.itemIdsForComparisonStr=e.target.value)}}}),t._v(" "),r("button",{on:{click:t.comparisonSearch}},[r("font-awesome-icon",{attrs:{icon:"search"}}),t._v("\n        Search\n      ")],1)])],2)]):t._e()}),[],!1,null,"b370700e",null);e.default=component.exports;installComponents(component,{ModalView:r(118).default})},330:function(t,e,r){"use strict";r(316)},331:function(t,e,r){var o=r(36)(!1);o.push([t.i,".modal_wrapper{position:fixed;top:50%;left:50%;max-height:70vh;overflow:auto;transform:translate(-50%,-50%);background-color:#fff;z-index:10;padding:60px 0;width:60vw;max-width:800px;min-width:610px}.modal_wrapper>.gene_detail>.gene_name{font-size:22px;font-weight:700;border-left:7px solid #488ec4;padding:8px 60px;display:block}.modal_wrapper>.gene_detail>.detail_contents{margin:30px 67px 0}.modal_wrapper>.gene_detail>.detail_contents>.title{font-size:18px;font-weight:700;margin:20px 0 2px}.modal_wrapper>.gene_detail>.detail_contents>.sub_title{font-size:16px;font-weight:700;margin:10px 0 0}.modal_wrapper>.gene_detail>.detail_contents>.contents{font-size:14px;margin:0;line-height:20px}.modal_wrapper>.gene_detail>.detail_contents>.contents .comma{margin:0 2px 0 -2px}.modal_wrapper>.loading{text-align:center}",""]),t.exports=o},332:function(t,e,r){"use strict";r(317)},333:function(t,e,r){var o=r(36)(!1);o.push([t.i,".compare_modal[data-v-b370700e]{width:600px}.compare_modal>div[data-v-b370700e]{display:flex;align-items:center}.compare_modal>div.sample[data-v-b370700e]{margin-bottom:8px}.compare_modal>div.sample .example[data-v-b370700e]{font-size:12px;margin-left:.5rem;color:#7c7c7c;font-weight:100}.compare_modal>div.sample .sample_value[data-v-b370700e]{color:#488ec4;font-size:14px;font-weight:600;padding:.1rem .4rem}.compare_modal>div.sample .sample_value[data-v-b370700e]:hover{cursor:pointer;color:#fff;background:#488ec4;border-radius:100px;transition:.6s}.compare_modal>div.sample>.ex[data-v-b370700e]{margin-left:20px}.compare_modal>div>input[data-v-b370700e]{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative}.compare_modal>div>input[data-v-b370700e]::-moz-placeholder{color:#3e4652;opacity:.3}.compare_modal>div>input[data-v-b370700e]::placeholder{color:#3e4652;opacity:.3}.compare_modal>div>input[data-v-b370700e]:focus{outline:none}.compare_modal>div>button[data-v-b370700e]{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:6px 22px;border:none;border-radius:.2rem;display:flex;align-items:center;margin-left:10px}.compare_modal>div>button[data-v-b370700e]:focus{outline:none}.compare_modal>div>button[data-v-b370700e]:hover{cursor:pointer;background:#366c96;transition:.6s}.compare_modal>div>button>svg[data-v-b370700e]{font-size:14px;margin-right:4px}.compare_modal>div>button.disabled[data-v-b370700e]{background:#ccc;color:#fff;cursor:not-allowed}",""]),t.exports=o},361:function(t,e,r){"use strict";r(321)},362:function(t,e,r){var o=r(36)(!1);o.push([t.i,".comparison_btn[data-v-303387a8]{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:6px 22px;border:none;border-radius:.2rem;display:flex;align-items:center;margin-left:20px}.comparison_btn[data-v-303387a8]:focus{outline:none}.comparison_btn[data-v-303387a8]:hover{cursor:pointer;background:#366c96;transition:.6s}.comparison_btn>svg[data-v-303387a8]{font-size:14px;margin-right:4px}.comparison_btn.disabled[data-v-303387a8]{background:#ccc;color:#fff;cursor:not-allowed}",""]),t.exports=o},366:function(t,e,r){var content=r(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("16b45903",content,!0,{sourceMap:!1})},367:function(t,e,r){var content=r(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("08588c92",content,!0,{sourceMap:!1})},371:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var o=r(19),n=r(70);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({toggleCompareModal:"set_compare_modal"}))},d=c,f=(r(361),r(35)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"comparison_btn",on:{click:t.toggleCompareModal}},[r("font-awesome-icon",{attrs:{icon:"chart-bar"}}),t._v("\n  Comparison\n")],1)}),[],!1,null,"303387a8",null);e.default=component.exports},382:function(t,e,r){"use strict";r(366)},383:function(t,e,r){var o=r(36)(!1);o.push([t.i,".item_comparison[data-v-2686e1a3]{padding:0;margin:0;display:flex;font-size:16px}.item_comparison>.item_box[data-v-2686e1a3]{word-break:break-word;width:100px;padding:6px 0 0;font-weight:500;margin-right:10px;border-top:8px solid}.item_comparison>.item_box.active[data-v-2686e1a3]{width:200px;font-weight:700}.item_comparison>.item_box>svg[data-v-2686e1a3]{font-size:14px;color:#488ec4}.item_comparison>.item_box[data-v-2686e1a3]:hover{cursor:pointer}.item_comparison>.item_box.item_1[data-v-2686e1a3]{border-color:#488ec4}.item_comparison>.item_box.item_2[data-v-2686e1a3]{border-color:#ff8a17}.item_comparison>.item_box.item_3[data-v-2686e1a3]{border-color:#67c1c7}.item_comparison>.item_box.item_4[data-v-2686e1a3]{border-color:#f24b56}.item_comparison>.item_box.item_5[data-v-2686e1a3]{border-color:#3ba44a}.item_comparison>.item_box.item_6[data-v-2686e1a3]{border-color:#edc339}.item_comparison>.item_box.item_7[data-v-2686e1a3]{border-color:#b97cbf}.item_comparison>.item_box.item_8[data-v-2686e1a3]{border-color:#a3735e}.item_comparison>.item_box.item_9[data-v-2686e1a3]{border-color:#ff98a6}.item_comparison>.item_box.item_10[data-v-2686e1a3]{border-color:#a8a8a8}",""]),t.exports=o},384:function(t,e,r){"use strict";r(367)},385:function(t,e,r){var o=r(36)(!1);o.push([t.i,".filter_modal[data-v-74a9b342]{width:500px}.filter_modal.-flex[data-v-74a9b342]{overflow-y:visible;display:flex;flex-direction:column;overflow:visible;min-height:150px}.filter_modal.-flex[data-v-74a9b342]  .multiselect input[type=text]{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative}.filter_modal.-flex[data-v-74a9b342]  .multiselect input[type=text]::-moz-placeholder{color:#3e4652;opacity:.3}.filter_modal.-flex[data-v-74a9b342]  .multiselect input[type=text]::placeholder{color:#3e4652;opacity:.3}.filter_modal.-flex[data-v-74a9b342]  .multiselect input[type=text]:focus{outline:none}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__tag{background:#488ec4}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__tag>.multiselect__tag-icon{background:none}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__tag>.multiselect__tag-icon:after{color:#fff}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__option{background:none}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__option>.option{display:flex;align-items:center;grid-gap:10px;gap:10px}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__option>.option>input[type=checkbox]{cursor:pointer}.filter_modal.-flex[data-v-74a9b342]  .multiselect .multiselect__option--highlight{background:#488ec4}.filter_modal.-flex[data-v-74a9b342]  .multiselect [class^=multiselect__option]:after{content:none}.filter_modal.-flex>.select[data-v-74a9b342]{display:flex;grid-gap:10px;gap:10px}.filter_modal .reset-btn[data-v-74a9b342]{--fa-secondary-opacity:0.3;margin-top:10px;cursor:pointer!important}.filter_modal .reset-btn[data-v-74a9b342]:hover{--fa-secondary-opacity:1;--fa-primary-color:#fff;--fa-secondary-color:#488ec4}.filter_modal>.input_wrapper[data-v-74a9b342]{display:flex;align-items:center;position:relative}.filter_modal>.input_wrapper>input[type=text][data-v-74a9b342]{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative}.filter_modal>.input_wrapper>input[type=text][data-v-74a9b342]::-moz-placeholder{color:#3e4652;opacity:.3}.filter_modal>.input_wrapper>input[type=text][data-v-74a9b342]::placeholder{color:#3e4652;opacity:.3}.filter_modal>.input_wrapper>input[type=text][data-v-74a9b342]:focus{outline:none}.filter_modal>.input_wrapper>input[type=text]>.reset-btn[data-v-74a9b342]{position:absolute;right:1rem}.filter_modal>.input_wrapper>.vue-slider[data-v-74a9b342]{width:100%!important;margin-top:25px}.filter_modal>.input_wrapper>.vue-slider>.vue-slider-rail[data-v-74a9b342]{background-color:#f5f7f9}.filter_modal>.input_wrapper>.vue-slider>.vue-slider-rail>.vue-slider-process[data-v-74a9b342]{background-color:#488ec4}",""]),t.exports=o},395:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(38),r(14),r(52),r(31),r(53);var o=r(19),n=r(118),l=r(403),c=r.n(l),d=r(70);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{ModalView:n.default,MultiSelect:c.a},data:function(){return{searchValue:""}},computed:m(m({},Object(d.b)({filters:"project_filters",filterObj:"active_filter_modal"})),{},{isOn:function(){return null!==this.filterObj}}),watch:{searchValue:function(){this.isOn&&this.updateStore()},filterObj:function(){var t;this.searchValue=(null===(t=this.filterObj)||void 0===t?void 0:t.filterModal)||""}},created:function(){var t,e;this.searchValue=null!==(t=null===(e=this.filterObj)||void 0===e?void 0:e.filterModal)&&void 0!==t?t:""},methods:m(m({},Object(d.c)({updateProjectFilters:"update_project_filters",close:"set_filter_modal"})),{},{updateStore:function(){var filter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.searchValue;this.updateFilterModal("filterModal",filter)},resetSlider:function(){var t,e=null===(t=this.filterObj)||void 0===t?void 0:t.numberValue;e&&(this.searchValue=[e.min,e.max])},updateFilterModal:function(t,e){this.updateProjectFilters({key:t,filter:e})}})},_=v,h=(r(384),r(35)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isOn?r("modal-view",{nativeOn:{click:function(e){return t.close(null)}}},[r("div",{staticClass:"modal filter_modal",class:{"-flex":t.filterObj.options},on:{click:function(t){t.stopPropagation()}}},[r("p",{staticClass:"modal_title"},[r("font-awesome-icon",{attrs:{icon:"search"}}),t._v("\n      "+t._s(t.filterObj.label)+"\n      "),r("span",{class:{tag:t.filterObj.is_ontology}},[t._v(t._s(t.filterObj.note))])],1),t._v(" "),"LogMedian"===t.filterObj.column?[r("button",{on:{click:function(e){return t.resetSlider(t.filterObj.filter_modal)}}},[t._v("Reset")]),t._v(" "),r("div",{staticClass:"input_wrapper"},[r("vue-slider",t._b({ref:"slider",model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}},"vue-slider",t.filterObj.numberValue,!1))],1)]:t.filterObj.options?r("div",{staticClass:"select"},[r("multi-select",{attrs:{multiple:"","allow-empty":!1,"close-on-select":!1,placeholder:"Search",options:t.filterObj.options},scopedSlots:t._u([{key:"option",fn:function(e){return[r("div",{staticClass:"option"},[r("input",{attrs:{type:"checkbox"},domProps:{checked:t.searchValue.includes(e.option)}}),t._v(" "),r("span",{staticClass:"option__small"},[t._v(t._s(e.option))])])]}},{key:"selection",fn:function(e){var o=e.values;return[o.length&&o.length>3?r("span",{staticClass:"multiselect__single"},[t._v("\n            "+t._s(o.length===t.filterObj.options.length?"all":o.length)+"\n            options selected\n          ")]):t._e()]}}],null,!1,1132256571),model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),t._v(" "),r("font-awesome-icon",{staticClass:"reset-btn",attrs:{icon:["fad","circle-xmark"]},on:{click:function(e){t.searchValue=[].concat(t.filterObj.options)}}})],1):r("div",{staticClass:"input_wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:"filter by text"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.close(null)},input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:""!==t.filterObj.filterModal,expression:"filterObj.filterModal !== ''"}],staticClass:"reset-btn",attrs:{icon:["fad","circle-xmark"]},on:{click:function(e){t.searchValue=""}}})],1)],2)]):t._e()}),[],!1,null,"74a9b342",null);e.default=component.exports;installComponents(component,{ModalView:r(118).default})},405:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("736e9ccf",content,!0,{sourceMap:!1})},412:function(t,e,r){"use strict";r.r(e);r(27),r(209);var o={props:{items:{type:Array,default:function(){return[]}},activeId:{type:String,default:""},activeSort:{type:Object,default:function(){return{key:"",order:"down"}}},displayInfoButton:{type:Boolean,default:!1}},computed:{isMedianSort:function(){return"LogMedian"===this.activeSort.key},filterType:function(){return window.location.pathname.split("/")[1]}},methods:{select:function(t){this.$emit("select",{id:t,sortOrder:this.activeId===t&&this.isMedianSort&&"down"===this.activeSort.order?"up":"down"})}}},n=(r(382),r(35)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"item_comparison"},t._l(t.items,(function(e,o){return r("li",{key:o,staticClass:"item_box",class:["item_"+(o+1),{active:t.activeId===e.id&&t.isMedianSort}],on:{click:function(r){return t.select(e.id)}}},[t.displayInfoButton?r("font-awesome-icon",{staticClass:"info",attrs:{icon:"info-circle"},on:{click:function(r){return t.$emit("showModal",e.id)}}}):t._e(),t._v(" "),r("span",[t._v(t._s(e.info.Description||e.info.symbol))]),t._v(" "),t.activeId===e.id&&t.isMedianSort?r("font-awesome-icon",{attrs:{icon:"sort-amount-"+t.activeSort.order}}):t._e()],1)})),0)}),[],!1,null,"2686e1a3",null);e.default=component.exports},421:function(t,e,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("5d295e65",content,!0,{sourceMap:!1})},422:function(t,e,r){var o=r(36)(!1);o.push([t.i,".vue-slider-dot{position:absolute;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;transform:translate(100%,-50%)}.vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}.vue-slider{position:relative;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}",""]),t.exports=o},429:function(t,e,r){"use strict";r(405)},430:function(t,e,r){var o=r(36)(!1);o.push([t.i,".wrapper{display:flex;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;flex-direction:column;margin-bottom:50px}.wrapper>.error{display:flex;color:#ff4c5e;justify-content:center;align-items:center;height:100%;width:100%;font-size:20px;margin:40px}.wrapper>.error>.fa-exclamation-triangle{margin-right:6px}.wrapper .chart_wrapper{display:flex;position:-webkit-sticky;left:0;min-width:calc(100vw - 15px);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;position:sticky;background-color:#fff;top:0;z-index:1}.wrapper .chart_wrapper>.content{grid-gap:20px;gap:20px;padding:10px 15px 10px 60px;display:grid;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;grid-template-columns:1fr auto;grid-template-rows:auto auto;width:calc(100vw - 130px)}.wrapper .chart_wrapper>.content>.comparison_btn{margin-left:0;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;align-self:flex-end;justify-self:flex-end;place-self:flex-end}.wrapper .chart_wrapper>.content>.header_title{display:flex;align-items:flex-start;margin:0}.wrapper .chart_wrapper>.content>.header_title>.fa-info-circle{color:#488ec4;font-size:24px;margin-right:6px;margin-top:4px}.wrapper .chart_wrapper>.content>.header_title>.fa-info-circle:hover{cursor:pointer}.wrapper .chart_wrapper>.content>.header_title .metadata{font-size:20px;display:block;margin-top:-2px;font-weight:400}.wrapper .chart_wrapper>.content>.display_settings{color:#488ec4;text-decoration:underline;margin:5px 0;align-self:flex-end;justify-self:flex-end;place-self:flex-end}.wrapper .chart_wrapper>.content>.display_settings:hover{cursor:pointer}",""]),t.exports=o},436:function(t,e,r){"use strict";r.r(e);r(39),r(30),r(52),r(31),r(53);var o=r(19),n=r(18),l=r(92),c=r(12),d=(r(71),r(14),r(40),r(41),r(46),r(27),r(209),r(76),r(38),r(217),r(216),r(221),r(210),r(421),r(70)),f=r(412),m=r(327),v=r(328),_=r(326),h=r(395),y=r(433);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={column:"LogMedian",label:"MEDIAN [LOG2(TPM+1)]",is_displayed:!0,filterModal:""},j={column:"Description",label:"Description",is_displayed:!0,filterModal:""},k={components:{ItemComparison:f.default,ModalViewGene:m.default,ModalViewCompare:v.default,ModalViewDisplay:_.default,ModalViewFilter:h.default,ProjectResults:y.default},beforeRouteUpdate:function(t,e,r){this.$forceUpdate()},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,o,d,f,m,v,_,h,y,x,k,C,M,P,S,D,I,V,F,z;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,d=t.query,f=t.store,m=t.route,_=!1,h=m.params,y=h.project,x=h.organism,f.commit("set_specie",x),k=d.id,C=d.type,e.next=7,Promise.all(k.split(",").map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,r){var n,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.$get("api/".concat(C,"/").concat(e,"?dataset=").concat(y.toLowerCase()));case 2:return data=t.sent,null!==(n=data["".concat(C,"_info")])&&void 0!==n&&n.error&&(_=!0),0===r&&(v=data.refex_info),t.abrupt("return",{id:e,info:data["".concat(C,"_info")],medianData:null===(l=data.refex_info)||void 0===l?void 0:l.map((function(t){return t.LogMedian}))});case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 7:if(M=e.sent,!_){e.next=10;break}return e.abrupt("return",{isError:_});case 10:return P=f.getters.dataset_by_name(y),S=Object(l.a)("gene"===C?P.sample.filter:(null===(r=f.getters.filter_by_name("gene"))||void 0===r?void 0:r.filter)||[]),e.next=14,o.$get("api/cv");case 14:if(D=e.sent,y in D)for(I=function(){var t=Object(n.a)(F[V],2),e=t[0],r=t[1],o=S.findIndex((function(t){return t.column===e}));o>-1&&(S[o].options=r)},V=0,F=Object.entries(D[y]);V<F.length;V++)I();return(z=S.findIndex((function(t){return"geneid"===t.column})))&&(S[z]=w(w({},S[z]),{},{column:P.gene.key,label:P.gene.header})),"gene"===C?S=[j,O].concat(Object(l.a)(S)):S.splice(1,0,O),e.abrupt("return",{filterType:C,items:M,isError:_,geneIdKey:P.gene.key,filters:S,results:v,dataset:y,selectedId:M[0].id});case 20:case"end":return e.stop()}}),e)})))()},data:function(){return{resultsSort:{key:"",order:"down"},optionsStaticData:{},isDisplaySettingsOn:!1,heightChartWrapper:200}},computed:{resultsWithMedianData:function(){var t=this;return this.results.map((function(e,r){return w(w({},e),{},{combinedMedianData:t.medianDataBySymbol[r]})}))},sampleIdKey:function(){return"gene"===this.filterType?"sample_id":"id"},medianDataBySymbol:function(){var t=this;return this.results.map((function(t){return t.LogMedian})).reduce((function(e,r,o){var n=t.items.reduce((function(t,e){return t[e.id]=+e.medianData[o],t}),{});return e.push(n),e}),[])},mainItem:function(){return this.items[0]||{}},infoForMainItem:function(){var t;return null===(t=this.mainItem)||void 0===t?void 0:t.info},selectedItem:function(){var t=this;return this.items.find((function(e){return e.id===t.selectedId}))}},mounted:function(){this.isError||(this.$store.commit("set_project_filters",this.filters),this.$store.commit("set_project_results",this.resultsWithMedianData))},updated:function(){this.heightChartWrapper=this.$refs.chartWrapper.clientHeight},methods:w(w({},Object(d.c)({setGeneModal:"set_gene_modal"})),{},{toggleDisplaySettings:function(){this.isDisplaySettingsOn=!this.isDisplaySettingsOn},toggleDisplayOfFilter:function(t){this.filters=t},updateResultSort:function(t){"LogMedian"!==t.key&&(this.selectedId=this.mainItem[this.sampleIdKey]),this.resultsSort=t},updateSelectedItem:function(t){var e=this,r=t.id,o=t.sortOrder,n=void 0===o?"down":o;this.selectedId=r,this.$refs.results.switchSort("LogMedian",n),requestAnimationFrame((function(){return e.heightChartWrapper=e.$refs.chartWrapper.clientHeight}))}})},C=k,M=(r(429),r(35)),component=Object(M.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[t.isError?r("p",{staticClass:"error"},[r("font-awesome-icon",{attrs:{icon:"exclamation-triangle"}}),t._v("\n    An error has occured while fecthing the data. Please check wheter the URL\n    contains the correct information.\n  ")],1):r("div",{ref:"chartWrapper",staticClass:"chart_wrapper"},[r("div",{staticClass:"content"},[r("h1",{staticClass:"header_title"},["gene"===t.filterType?r("font-awesome-icon",{attrs:{icon:"info-circle"},on:{click:function(e){return t.setGeneModal(t.items[0].id)}}}):t._e(),t._v(" "),r("span",{staticClass:"title"},[t._v("\n          "+t._s(t.infoForMainItem.Description||t.infoForMainItem.name)+"\n          "),"gene"===t.filterType?r("span",{staticClass:"metadata"},[t._v(t._s("("+t.infoForMainItem.name+", Gene ID: "+t.infoForMainItem.id+")"))]):t._e()])],1),t._v(" "),r("ComparisonButton"),t._v(" "),r("item-comparison",{attrs:{items:t.items,"active-id":t.selectedId,"active-sort":t.resultsSort,"display-info-button":"gene"===t.filterType},on:{select:t.updateSelectedItem,showModal:t.setGeneModal}}),t._v(" "),r("a",{staticClass:"display_settings",on:{click:t.toggleDisplaySettings}},[r("font-awesome-icon",{attrs:{icon:"eye"}}),t._v("\n        Display settings\n      ")],1)],1)]),t._v(" "),t.isDisplaySettingsOn?r("ModalViewDisplay",{nativeOn:{click:function(e){return t.toggleDisplaySettings.apply(null,arguments)}}}):t._e(),t._v(" "),r("ModalViewFilter"),t._v(" "),r("ModalViewGene"),t._v(" "),r("ModalViewCompare"),t._v(" "),r("project-results",{ref:"results",attrs:{"height-chart-wrapper":t.heightChartWrapper,items:t.items,"gene-id-key":t.geneIdKey,dataset:t.dataset,"selected-item":t.selectedId},on:{updateSort:t.updateResultSort}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ComparisonButton:r(371).default,ModalViewDisplay:r(326).default,ModalViewFilter:r(395).default,ModalViewGene:r(327).default,ModalViewCompare:r(328).default})}}]);