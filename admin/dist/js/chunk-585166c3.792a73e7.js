(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585166c3"],{"0f40":function(t,a,e){},"58fd":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.actions.length?e("el-row",{staticClass:"action"},[e("el-button-group",t._l(t.actions,(function(a){return e("el-button",{key:a.name,attrs:{icon:a.ico},on:{click:function(e){return t.openAction(a.action)}}},[t._v(t._s(a.name))])})),1)],1):t._e()},s=[],o=e("7c2f"),r={name:"ImageView",props:{url:{type:String,default:""}},data:function(){return{actions:[]}},mounted:function(){if(!this.url)return o["a"].toast("验证菜单不能为空!");this.getAction(this.url)},methods:{getAction:function(t){var a=this;o["a"].post("Usermain/getMenusAction",{token:o["a"].storage.getItem("token"),url:t},(function(t){var e=t.data;0==e.code&&(a.actions=e.menuAction)}))},openAction:function(t){this.$emit("action",t)}}},l=r,d=e("2877"),n=Object(d["a"])(l,i,s,!1,null,null,null);a["a"]=n.exports},a6e8:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{staticClass:"tree_search"},[e("el-input",{attrs:{placeholder:"搜索菜单名称"},model:{value:t.getSelect,callback:function(a){t.getSelect=a},expression:"getSelect"}})],1),e("Action",{attrs:{url:"SysMenus"},on:{action:t.openAction}}),e("el-row",{staticClass:"body"},[e("div",{staticClass:"body_tree"},[e("div",{staticClass:"flex tree_node_title"},[e("div",[t._v("菜单名称")]),e("div",{staticClass:"flex"},[e("dd",{staticStyle:{width:"120px"}},[t._v("控制器")]),e("dd",{staticStyle:{width:"160px"}},[t._v("图标")]),e("dd",{staticStyle:{width:"30px"}},[t._v("权限")]),e("dd",{staticStyle:{width:"30px"}},[t._v("排序")]),e("dd",{staticStyle:{width:"60px"}},[t._v("操作")]),e("dd",{staticStyle:{width:"90px"}},[t._v("更新日期")])])]),e("el-tree",{ref:"tree",attrs:{data:t.listData.list,"show-checkbox":"","node-key":"id","filter-node-method":t.subSea},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.node,s=a.data;return e("span",{staticClass:"tree_node"},[e("span",[t._v(t._s(i.label))]),e("div",{staticClass:"flex tree_node_width"},[e("dd",{staticStyle:{width:"120px"}},[t._v(t._s(s.url))]),e("dd",{staticStyle:{width:"160px"}},[t._v(t._s(s.ico))]),e("dd",{staticStyle:{width:"30px"}},[t._v(t._s(s.perm))]),e("dd",{staticStyle:{width:"30px"}},[t._v(t._s(s.sort))]),e("dd",{staticStyle:{width:"60px"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.showEdit(s)}}},[t._v("编辑")])],1),e("dd",{staticStyle:{width:"90px"}},[t._v(t._s(s.utime?s.utime.substr(0,10):"空"))])])])}}])})],1)]),e("el-dialog",{attrs:{title:"添加",visible:t.addData.show,center:"",width:"680px","close-on-click-modal":!1},on:{"update:visible":function(a){return t.$set(t.addData,"show",a)}}},[e("el-form",{attrs:{model:t.addData.form,"label-width":t.LabelWidth}},[e("el-form-item",{attrs:{label:"归属"}},[e("el-cascader",{staticStyle:{width:"100%","max-width":"360px"},attrs:{options:t.fidClass,"change-on-select":"",filterable:"",clearable:"","expand-trigger":"hover",placeholder:"默认顶级菜单"},model:{value:t.addData.form.fid,callback:function(a){t.$set(t.addData.form,"fid",a)},expression:"addData.form.fid"}})],1),e("el-form-item",{attrs:{label:"标题"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"菜单名称"},model:{value:t.addData.form.title,callback:function(a){t.$set(t.addData.form,"title",a)},expression:"addData.form.title"}})],1),e("el-form-item",{attrs:{label:"链接"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"链接地址"},model:{value:t.addData.form.url,callback:function(a){t.$set(t.addData.form,"url",a)},expression:"addData.form.url"}})],1),e("el-form-item",{attrs:{label:"图标样式"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"图标样式"},model:{value:t.addData.form.ico,callback:function(a){t.$set(t.addData.form,"ico",a)},expression:"addData.form.ico"}})],1),e("el-form-item",{attrs:{label:"权限值"}},[e("el-checkbox-group",{model:{value:t.addData.form.permArr,callback:function(a){t.$set(t.addData.form,"permArr",a)},expression:"addData.form.permArr"}},t._l(t.aMenus,(function(t){return e("el-checkbox",{key:t.name,attrs:{label:t.name}})})),1)],1),e("el-form-item",{attrs:{label:"排序"}},[e("el-input",{staticStyle:{"max-width":"240px"},attrs:{placeholder:"从高到底"},model:{value:t.addData.form.sort,callback:function(a){t.$set(t.addData.form,"sort",a)},expression:"addData.form.sort"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.subAdd()}}},[t._v("添 加")])],1)],1),e("el-dialog",{attrs:{title:"编辑",visible:t.editData.show,center:"",width:"680px","close-on-click-modal":!1},on:{"update:visible":function(a){return t.$set(t.editData,"show",a)}}},[e("el-form",{attrs:{model:t.editData.form,"label-width":t.LabelWidth}},[e("el-form-item",{attrs:{label:"归属"}},[e("el-cascader",{attrs:{options:t.fidClass,"change-on-select":"",filterable:"",clearable:"","expand-trigger":"hover",placeholder:"默认顶级菜单"},model:{value:t.editData.form.fid,callback:function(a){t.$set(t.editData.form,"fid",a)},expression:"editData.form.fid"}})],1),e("el-form-item",{attrs:{label:"标题"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"菜单名称"},model:{value:t.editData.form.title,callback:function(a){t.$set(t.editData.form,"title",a)},expression:"editData.form.title"}})],1),e("el-form-item",{attrs:{label:"链接"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"链接地址"},model:{value:t.editData.form.url,callback:function(a){t.$set(t.editData.form,"url",a)},expression:"editData.form.url"}})],1),e("el-form-item",{attrs:{label:"图标样式"}},[e("el-input",{staticStyle:{"max-width":"360px"},attrs:{placeholder:"图标样式"},model:{value:t.editData.form.ico,callback:function(a){t.$set(t.editData.form,"ico",a)},expression:"editData.form.ico"}})],1),e("el-form-item",{attrs:{label:"权限值"}},[e("el-checkbox-group",{model:{value:t.editData.form.permArr,callback:function(a){t.$set(t.editData.form,"permArr",a)},expression:"editData.form.permArr"}},t._l(t.aMenus,(function(t){return e("el-checkbox",{key:t.name,attrs:{label:t.name}})})),1)],1),e("el-form-item",{attrs:{label:"排序"}},[e("el-input",{staticStyle:{"max-width":"240px"},attrs:{placeholder:"从高到底"},model:{value:t.editData.form.sort,callback:function(a){t.$set(t.editData.form,"sort",a)},expression:"editData.form.sort"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.subEdit()}}},[t._v("保 存")])],1)],1),e("el-dialog",{attrs:{title:"删除",visible:t.delData.show,center:"",width:"320px"},on:{"update:visible":function(a){return t.$set(t.delData,"show",a)}}},[e("div",[t._v("是否删除已选择数据？")]),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.subDel()}}},[t._v("彻底删除")])],1)])],1)},s=[],o=(e("7f7f"),e("7c2f")),r=e("58fd"),l={components:{Action:r["a"]},watch:{getSelect:function(t){this.$refs.tree.filter(t)}},data:function(){return{LabelWidth:"80px",selectData:[],listData:{list:[]},getSelect:"",seaData:{show:!1,form:{fid:"",title:"",url:""}},addData:{show:!1,form:{fid:[],title:"",url:"",ico:"",perm:"",permArr:[],sort:0}},editData:{show:!1,form:{fid:[],title:"",url:"",ico:"",perm:"",permArr:[],sort:0}},delData:{show:!1,id:""},aMenus:[],permAll:[],fidClass:[]}},mounted:function(){this.loadData(),this.allAction()},methods:{getEdit:function(t){for(var a in this.editData.show=!0,t)this.editData.form[a]=this.selectData[a]||""},openAction:function(t){if("list"==t)this.loadData();else if("add"==t)this.addData.show=!0;else if("del"==t){var a=this.$refs.tree.getCheckedKeys();a.length>0?(this.delData.show=!0,this.delData.id=a):o["a"].toast("请选择数据!")}},loadData:function(){var t=this,a=o["a"].loading();o["a"].post("Sysmenus/list",{token:o["a"].storage.getItem("token")},(function(e){a.clear();var i=e.data;0!=i.code?o["a"].toast(i.msg,"error"):t.listData.list=i.list})),this.setClass()},subSea:function(t,a){return!t||-1!==a.label.indexOf(t)},subAdd:function(){var t=this,a=this.addData.form.fid;a=a.length>0?a.slice(-1)[0]:"",this.addData.form.fid=a;var e=this.addData.form.permArr,i=0;for(var s in e)i+=parseInt(this.permAll[e[s]]);this.addData.form.perm=i,this.addData.show=!1;var r=o["a"].loading();o["a"].post("Sysmenus/add",{token:o["a"].storage.getItem("token"),data:JSON.stringify(this.addData.form)},(function(a){var e=a.data;0!==e.code?(r.clear(),o["a"].toast(e.msg,"error")):(o["a"].toast(e.msg,"success"),t.loadData())}))},showEdit:function(t){this.editData.show=!0,this.selectData=t,this.getEdit({id:"",fid:[],title:"",url:"",ico:"",perm:"",sort:""}),this.editData.form.fid=[t.fid+""];var a=[];for(var e in this.permAll)this.editData.form.perm&parseInt(this.permAll[e])&&a.push(e);this.editData.form.permArr=a},subEdit:function(){var t=this,a=this.editData.form.fid;a=a.length>0?a.slice(-1)[0]:"",this.editData.form.fid=a;var e=this.editData.form.permArr,i=0;for(var s in e)i+=parseInt(this.permAll[e[s]]);this.editData.form.perm=i,this.editData.show=!1;var r=o["a"].loading();o["a"].post("Sysmenus/edit",{token:o["a"].storage.getItem("token"),id:this.editData.form.id,data:JSON.stringify(this.editData.form)},(function(a){var e=a.data;0!==e.code?(r.clear(),o["a"].toast(e.msg,"error")):(o["a"].toast(e.msg,"success"),t.loadData())}))},subDel:function(){var t=this;this.delData.show=!1;var a=o["a"].loading();o["a"].post("Sysmenus/del",{token:o["a"].storage.getItem("token"),data:JSON.stringify(this.delData.id)},(function(e){var i=e.data;0!==i.code?(a.clear(),o["a"].toast(i.msg,"error")):(o["a"].toast(i.msg,"success"),t.loadData())}))},allAction:function(){var t=this;o["a"].post("Usermain/getActionAll",{token:o["a"].storage.getItem("token")},(function(a){var e=a.data;if(0!==e.code)o["a"].toast(e.msg,"error");else for(var i in t.aMenus=e.aMenus,e.aMenus)t.permAll[e.aMenus[i].name]=e.aMenus[i].perm}))},setClass:function(){var t=this;this.getClass("fid",(function(a){t.fidClass=a.data.list}))},getClass:function(t,a){o["a"].post("Sysmenus/getClass/"+t,{token:o["a"].storage.getItem("token")},a)}}},d=l,n=(e("d43a"),e("2877")),c=Object(n["a"])(d,i,s,!1,null,"3fe97ffb",null);a["default"]=c.exports},d43a:function(t,a,e){"use strict";var i=e("0f40"),s=e.n(i);s.a}}]);