webpackJsonp([14],{U99e:function(e,t,r){"use strict";t.c=function(e){return Object(o.a)({url:"/POST/MarketAcceptor/findMarketAcceptorByPage",method:"post",params:e})},t.a=function(e){return Object(o.a)({url:"/POST/MarketAcceptor/addMarketAcceptor",method:"post",params:e})},t.b=function(e){return Object(o.a)({url:"/POST/MarketAcceptor/deleteMarketAcceptorById",method:"post",params:e})},t.d=function(e){return Object(o.a)({url:"/POST/MarketAcceptor/updateMarketAcceptorStatus",method:"post",params:e})};var o=r("vLgD")},mtZQ:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.input[data-v-59e085e8]{\r\n\twidth: 180px;\n}\r\n",""])},ocng:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("zL8q"),a=r("U99e"),n={data:function(){return{form:{marketId:"",storageId:"",acceptorOpenId:"",marketAcceptorName:"",phoneNum:"",lv:"",fOpenId:"",fLv:"",keeperOpenId:""}}},methods:{onSubmit:function(){var e=this;Object(a.a)(this.form).then(function(t){var r=t;console.log(t),0===r.errorCode&&(Object(o.Message)({message:r.msg,type:"success",duration:5e3}),e.$router.go(-1))})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"250px"}},[r("el-form-item",{attrs:{label:"超市id"}},[r("el-input",{staticClass:"input",model:{value:e.form.marketId,callback:function(t){e.$set(e.form,"marketId",t)},expression:"form.marketId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属仓库id"}},[r("el-input",{staticClass:"input",model:{value:e.form.storageId,callback:function(t){e.$set(e.form,"storageId",t)},expression:"form.storageId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货员openID"}},[r("el-input",{staticClass:"input",model:{value:e.form.acceptorOpenId,callback:function(t){e.$set(e.form,"acceptorOpenId",t)},expression:"form.acceptorOpenId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货员姓名"}},[r("el-input",{staticClass:"input",model:{value:e.form.marketAcceptorName,callback:function(t){e.$set(e.form,"marketAcceptorName",t)},expression:"form.marketAcceptorName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货员电话号码"}},[r("el-input",{staticClass:"input",model:{value:e.form.phoneNum,callback:function(t){e.$set(e.form,"phoneNum",t)},expression:"form.phoneNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货员等级"}},[r("el-input",{staticClass:"input",model:{value:e.form.lv,callback:function(t){e.$set(e.form,"lv",t)},expression:"form.lv"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推荐者openID"}},[r("el-input",{staticClass:"input",model:{value:e.form.fOpenId,callback:function(t){e.$set(e.form,"fOpenId",t)},expression:"form.fOpenId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推荐者等级"}},[r("el-input",{staticClass:"input",model:{value:e.form.fLv,callback:function(t){e.$set(e.form,"fLv",t)},expression:"form.fLv"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"由管理员授权的第一级售货员需绑定"}},[r("el-input",{staticClass:"input",model:{value:e.form.keeperOpenId,callback:function(t){e.$set(e.form,"keeperOpenId",t)},expression:"form.keeperOpenId"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),r("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(n,l,!1,function(e){r("r+ep")},"data-v-59e085e8",null);t.default=s.exports},"r+ep":function(e,t,r){var o=r("mtZQ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("0d565a6e",o,!0)}});