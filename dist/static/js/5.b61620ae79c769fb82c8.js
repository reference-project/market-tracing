webpackJsonp([5],{G63v:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("woOf"),a=r.n(o),n=r("Z5VV"),l=r("MJLE"),i=r.n(l),s={data:function(){return{qrcode:null}},methods:{init:function(){var e=document.getElementsByClassName("codeImg")[0];console.log(e),e.innerHTML="",self.qrcode=new i.a(e,{text:"code",width:200,height:200,colorDark:"#000000",colorLight:"#ffffff"})}},mounted:function(){this.init()}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"codeImg"})},staticRenderFns:[]};var u=r("VU/8")(s,c,!1,function(e){r("ONPk")},"data-v-077494b1",null).exports,d=r("YaEn"),p=r("1yIk"),f=r("zL8q"),m={data:function(){return{qrcode:null,tableData:null,searchKey:null,searchValue:null,totalRecords:null,formLabelWidth:"120px",form:null,dialogFormVisible:!1,dialogVisible:!1,column:[{prop:"id",label:"供应商本地id"},{prop:"supplierId",label:"上级系统指定ID"},{prop:"supplierName",label:"供货商名称"},{prop:"createDate",label:"创建时间"},{prop:"phoneNum",label:"供货商电话号码"},{prop:"supplierCode",label:"供货商短码"},{prop:"isDelete",label:"状态"}]}},components:{qrcode:u,stable:p.a},methods:{init:function(e){var t=this;Object(n.c)(e).then(function(e){console.log(e),t.tableData=e.result.data,t.totalRecords=e.totalRecords,t.currentPage=e.currentPage})},handleClick:function(e){console.log(e)},pageChange:function(e){var t={currentPage:e,index:10*(e-1)};this.init(t)},updateData:function(e){this.dialogFormVisible=!0,this.form=e,console.log(this.form)},updateDataConfirm:function(){var e=this,t={token:this.$store.getters.token};delete(t=a()(t,this.form)).supplierCode,delete t.createDate,delete t.isDelete,Object(n.d)(t).then(function(t){console.log(t),e.dialogFormVisible=!1,e.init({currentPage:e.currentPage})})},deletInfo:function(e){var t=this,r={token:this.$store.getters.token,id:e};Object(n.b)(r).then(function(e){console.log(e),t.init({currentPage:t.currentPage})})},clock:function(e){var t=this,r={token:this.$store.getters.token,id:e};console.log(r),Object(n.e)(r).then(function(e){t.init({currentPage:t.currentPage})})},open:function(){this.$alert("<div><qrcode></qrcode></div>","授权码",{dangerouslyUseHTMLString:!0,center:!0})},search:function(){if(null!==this.searchprop)if(null!==this.searchKey){var e={currentPage:1,index:0,key:this.searchValue,value:this.searchKey};this.init(e)}else Object(f.Message)({message:"请输入搜索关键词",type:"warning",duration:2e3});else Object(f.Message)({message:"请选择搜索类型",type:"warning",duration:2e3})},qrCode:function(){var e=document.getElementsByClassName("codeImg")[0];e.innerHTML="",self.qrcode=new i.a(e,{text:"code",width:200,height:200,colorDark:"#000000",colorLight:"#ffffff"})},addProvider:function(){d.a.push({path:"addProvider"})}},created:function(){this.init()}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[e.dialogFormVisible?r("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"供应商名称","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.form.supplierName,callback:function(t){e.$set(e.form,"supplierName",t)},expression:"form.supplierName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"供应商电话","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.form.phoneNum,callback:function(t){e.$set(e.form,"phoneNum",t)},expression:"form.phoneNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"供应商编号","label-width":e.formLabelWidth}},[r("el-input",{model:{value:e.form.supplierId,callback:function(t){e.$set(e.form,"supplierId",t)},expression:"form.supplierId"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.updateDataConfirm}},[e._v("确 定")])],1)],1):e._e(),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.addProvider}},[e._v("添加供应商")]),e._v(" "),r("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},e._l(e.column,function(e){return r("el-option",{key:e.prop,attrs:{label:e.label,value:e.prop}})})),e._v(" "),r("el-input",{staticClass:"searchInput",model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),r("el-dialog",{attrs:{title:"授权码",visible:e.dialogVisible,center:"",width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("qrcode"),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),r("stable",{attrs:{column:e.column,tableData:e.tableData}},[r("el-table-column",{attrs:{slot:"operation",align:"center",width:"220",label:"操作",fixed:"right"},slot:"operation",scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){e.updateData(t.row)}}},[e._v("编辑")]),e._v(" "),0===t.row.isDelete?r("el-button",{attrs:{type:"mini"},on:{click:function(r){e.clock(t.row.id)}}},[e._v("锁定")]):r("el-button",{attrs:{type:"mini"},on:{click:function(r){e.clock(t.row.id)}}},[e._v("解锁")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){e.deletInfo(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-pagination",{staticClass:"page",attrs:{background:"",layout:"prev, pager, next",total:e.totalRecords},on:{"current-change":e.pageChange}})],1)},staticRenderFns:[]};var b=r("VU/8")(m,h,!1,function(e){r("GPbA")},"data-v-573d6740",null);t.default=b.exports},GPbA:function(e,t,r){var o=r("qrnG");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("38505738",o,!0)},ONPk:function(e,t,r){var o=r("gkhD");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("13b8bc0f",o,!0)},Z5VV:function(e,t,r){"use strict";t.a=function(e){return Object(o.a)({url:"/POST/MarketSupplierUser/addMarketSupplierUser",method:"post",params:e})},t.c=function(e){return Object(o.a)({url:"/POST/MarketSupplierUser/findMarketSupplierUserByPage",method:"post",params:e})},t.d=function(e){return Object(o.a)({url:"/POST/MarketSupplierUser/updateMarketSupplierUser",method:"post",params:e})},t.b=function(e){return Object(o.a)({url:"/POST/MarketSupplierUser/deleteMarketSupplierUserById",method:"post",params:e})},t.e=function(e){return Object(o.a)({url:"/POST/MarketSupplierUser/updateMarketSupplierUserStatus",method:"post",params:e})};var o=r("vLgD")},gkhD:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.codeImg[data-v-077494b1]{\n\tmargin: auto;\n\twidth: 200px;\n\theight: 200px;\n}\n",""])},qrnG:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.table[data-v-573d6740],\r\n.top[data-v-573d6740]{\r\n\twidth: 95%;\r\n\tmargin: 20px auto;\n}\r\n",""])}});