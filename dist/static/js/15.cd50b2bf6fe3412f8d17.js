webpackJsonp([15],{Mhet:function(e,t,r){"use strict";t.a=function(e){return Object(a.a)({url:"/POST/user/addTracingSysUser",method:"post",params:e})},t.b=function(e){return Object(a.a)({url:"/POST/user/findTracingSysUserByPage",method:"post",params:e})},t.d=function(e){return Object(a.a)({url:"/POST/user/managerDeleteTracingSysUserById",method:"post",params:e})},t.c=function(e){return Object(a.a)({url:"/POST/user/managerChangeTracingSysUserRightById",method:"post",params:e})};var a=r("vLgD")},RcSs:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.input[data-v-2333fa69]{\r\n\twidth: 180px;\n}\r\n",""])},"W/Sr":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("zL8q"),s=r("Mhet"),n={data:function(){return{form:{userName:"",passwd:"",innerNum:"",userPhone:"",userType:null,roleName:null},options:[{label:"系统管理员",value:1},{label:"超市收货员",value:2},{label:"仓库管理员",value:3}]}},methods:{onSubmit:function(){Object(s.a)(this.form).then(function(e){var t=e;console.log(e),0===t.errorCode&&Object(a.Message)({message:t.msg,type:"success",duration:5e3})})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{staticClass:"input",model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{staticClass:"input",model:{value:e.form.passwd,callback:function(t){e.$set(e.form,"passwd",t)},expression:"form.passwd"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"员工编号"}},[r("el-input",{staticClass:"input",model:{value:e.form.innerNum,callback:function(t){e.$set(e.form,"innerNum",t)},expression:"form.innerNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"电话"}},[r("el-input",{staticClass:"input",model:{value:e.form.userPhone,callback:function(t){e.$set(e.form,"userPhone",t)},expression:"form.userPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"账号类型"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),r("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(n,o,!1,function(e){r("jh/u")},"data-v-2333fa69",null);t.default=l.exports},"jh/u":function(e,t,r){var a=r("RcSs");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("7ad7fe2e",a,!0)}});