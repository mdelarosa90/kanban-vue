(function(t){function e(e){for(var r,i,s=e[0],c=e[1],d=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a4d348f"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var d=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,a[1](d)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/kanban-vue/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02ce":function(t,e,a){},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0ab0":function(t,e,a){"use strict";var r=a("c432"),n=a.n(r);n.a},"2fe3":function(t,e,a){"use strict";var r=a("02ce"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"rgba(1, 5, 19, 0.911)",dark:""}},[a("router-link",{staticClass:"mr-2",attrs:{text:"",icon:"",color:"white",to:{name:"Home"}}},[a("v-icon",[t._v("mdi-home")])],1),t.edit?t._e():a("v-toolbar-title",{on:{click:function(e){e.preventDefault(),t.edit=!0}}},[t._v(t._s(t.name))]),t.edit?a("v-text-field",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeName(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}):t._e(),a("v-spacer"),a("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(e){return e.preventDefault(),t.openNewList(e)}}},[a("span",{staticClass:"mr-1"},[t._v("Nueva Lista")]),a("v-icon",[t._v("mdi-plus")])],1),a("v-btn",{staticClass:"pa-2",attrs:{target:"_blank",text:""},on:{click:function(e){return e.preventDefault(),t.openModal(e)}}},[a("span",{staticClass:"mr-1"},[t._v("Nueva Tarea")]),a("v-icon",[t._v("mdi-plus")])],1)],1),a("v-main",{staticClass:"red"},[a("router-view")],1)],1)},o=[],i=a("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"board-main-content",attrs:{fluid:""}},[a("div",{staticClass:"board-canvas"},[a("draggable",{attrs:{list:t.boards,"ghost-class":"ghost-card","empty-insert-threshold":100,animation:200,group:"dashboard",forceFallback:!0,sort:!0},on:{start:function(e){t.drag=!0}}},t._l(t.boards,(function(e){return a("div",{key:e.id,staticClass:"mt-5 board-list"},[a("Board",{attrs:{data:e}},[a("draggable",{attrs:{list:e.tareas,"ghost-class":"ghost-card","empty-insert-threshold":100,animation:200,group:"board",sort:!0,forceFallback:!0,handle:t.v-t.card},on:{start:function(e){t.drag=!0}}},[t._l(e.tareas,(function(r,n){return a("v-card",{key:n,staticClass:"mt-2",attrs:{id:r.id},on:{dblclick:function(a){return t.editarTarea(r,e.id)}}},[a("v-card-title",{staticClass:"flex-column align-start pointer"},[a("span",{staticClass:"text-sm-h5 text-md-subtitle-2"},[t._v("id: "+t._s(r.id))]),a("span",{staticClass:"title font-weight-light text-sm-h5 text-md-h6",style:{color:e.headerColor}},[t._v(t._s(r.title))])]),a("v-card-subtitle",[t._v(t._s(r.description))])],1)})),a("v-flex",{staticClass:"d-flex align-content-end"},[a("v-divider"),a("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:e.headerColor},on:{click:function(a){return t.editList(e)}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1)],2)],1)],1)})),0)],1),a("Task",{attrs:{task:t.editMode?t.itemSelected:t.defaultItem,board:t.boardSelected}}),a("List",{attrs:{list:t.editNewList?t.defaultBoard:t.emptyBoard}})],1)},c=[],d=a("2f62"),l=a("310e"),u=a.n(l),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[a("v-card",[a("v-card-title",{staticClass:"teal darken-3",attrs:{dark:""}},[a("v-icon",{attrs:{left:"",color:"white"}},[t._v("mdi-label")]),a("span",{staticClass:"headline white--text"},[t._v("Edición de Tareas")])],1),a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Titulo",counter:30,rules:t.nameRules,required:""},model:{value:t.taskCopy.title,callback:function(e){t.$set(t.taskCopy,"title",e)},expression:"taskCopy.title"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Descripcion",rules:t.descriptionRules,required:""},model:{value:t.taskCopy.description,callback:function(e){t.$set(t.taskCopy,"description",e)},expression:"taskCopy.description"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeModal}},[t._v("Cancelar")]),t.editMode?t.editMode?a("v-btn",{attrs:{color:"warning darken-3",text:"",disabled:!t.valid},on:{click:function(e){return t.editTask(t.taskCopy)}}},[t._v("Actualizar")]):t._e():a("v-btn",{attrs:{disabled:!t.valid,color:"teal darken-3",text:""},on:{click:function(e){t.añadirTarea()}}},[t._v("Guardar")])],1)],1)],1)],1)],1)},p=[],b={name:"Task",props:{task:{type:Object,default:function(){return{title:"",description:"",id:"",boardId:""}}}},computed:Object(i["a"])(Object(i["a"])({},Object(d["d"])(["open","editMode"])),{},{taskCopy:function(){return Object(i["a"])({},this.task)}}),methods:Object(i["a"])(Object(i["a"])({},Object(d["c"])(["addTask","closeModal","editTask"])),{},{"añadirTarea":function(){this.$store.commit("addTask",this.taskCopy)}}),data:function(){return{valid:!0,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=30||"Name must be less than 30 characters"}],descriptionRules:[function(t){return!!t||"Description is required"}]}}},v=b,m=a("2877"),h=Object(m["a"])(v,f,p,!1,null,null,null),x=h.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board pointer",attrs:{id:t.data.id}},[a("v-card-title",{style:{backgroundColor:t.data.headerColor}},[a("span",{staticClass:"white--text text-truncate",staticStyle:{"max-width":"80%"}},[t._v(t._s(t.data.name))])]),t._t("default")],2)},y=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.openBoard,callback:function(e){t.openBoard=e},expression:"openBoard"}},[a("v-card",{attrs:{elevation:12}},[a("v-card-title",{staticClass:"teal darken-3",attrs:{dark:""}},[a("v-icon",{attrs:{left:"",color:"white"}},[t._v("mdi-view-list")]),a("span",{staticClass:"headline white--text"},[t._v("Edición de Listas")])],1),a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",{staticClass:"pa-0"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Titulo",counter:30,rules:t.nameRules,required:""},model:{value:t.list.name,callback:function(e){t.$set(t.list,"name",e)},expression:"list.name"}})],1),a("v-col",{staticClass:"d-flex justify-center"},[a("v-color-picker",{attrs:{rules:t.colorRules,required:""},model:{value:t.list.headerColor,callback:function(e){t.$set(t.list,"headerColor",e)},expression:"list.headerColor"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeEditList}},[t._v("Cancelar")]),t.editNewList?t.editNewList?a("v-btn",{attrs:{color:"warning darken-3",text:""},on:{click:function(e){return t.updateList(t.list)}}},[t._v("Actualizar")]):t._e():a("v-btn",{attrs:{disabled:!t.valid,color:"teal darken-3",text:""},on:{click:function(e){return t.addList(t.list)}}},[t._v("Guardar")])],1)],1)],1)],1)],1)},j=[],C={props:{list:{type:Object,default:function(){return{id:"",name:"",headerColor:"",tareas:[]}}}},data:function(){return{valid:!0,nameRules:[function(t){return!!t||"Title is required"},function(t){return t&&t.length<=30||"Title must be less than 30 characters"}],colorRules:[function(t){return!!t||"Color is required"}]}},computed:Object(i["a"])(Object(i["a"])({},Object(d["d"])(["openBoard","editNewList"])),{},{listCopy:function(){return Object(i["a"])({},this.list)}}),methods:Object(i["a"])({},Object(d["c"])(["addList","closeEditList","updateList"]))},O=C,_=Object(m["a"])(O,g,j,!1,null,null,null),w=_.exports,L={name:"board",components:{List:w},props:{data:{type:Object,default:{id:"",headerColor:"",name:"",tareas:[]}}},data:function(){return{defaultBoard:{id:"",name:"",headerColor:"",tareas:[]},items:[{title:"Editar"}]}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])(["boards","editNewList","openBoard"])),Object(d["b"])(["listEdit"])),{},{emptyBoard:function(){return{name:"",headerColor:"",id:"",tareas:[]}}}),methods:{drop:function(t){var e=t.dataTransfer.getData("card_id"),a=document.getElementById(e);a.style.display="block",t.target.appendChild(a)},editarLista:function(t){this.$store.state.editNewList=!0,this.defaultBoard=Object(i["a"])({},t),this.$store.state.openBoard=!0}}},T=L,B=(a("0ab0"),Object(m["a"])(T,k,y,!1,null,null,null)),M=B.exports,E={name:"Dashboard",components:{Task:x,Board:M,draggable:u.a,List:w},data:function(){return{itemSelected:{title:"",description:"",id:""},defaultItem:{title:"",description:"",id:"",boardId:""},defaultBoard:{name:"",headerColor:"",tareas:[]},boardSelected:"",title:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(d["d"])(["boards","editMode","editNewList"])),Object(d["b"])(["allTasks"])),{},{emptyBoard:function(){return{name:"",headerColor:"",id:"",tareas:[]}}}),methods:{editarTarea:function(t,e){this.$store.state.open=!0,this.itemSelected=Object(i["a"])(Object(i["a"])({},t),{},{boardId:e}),this.boardSelected=e,this.$store.state.editMode=!0},editList:function(t){this.defaultBoard=Object(i["a"])({},t),this.$store.state.editNewList=!0,this.$store.state.openBoard=!0},dragStart:function(t){var e=t.target;t.dataTransfer.setData("card_id",e.id),setTimeout((function(){e.style.display="none"}),0)}}},N=E,$=(a("2fe3"),Object(m["a"])(N,s,c,!1,null,null,null)),D=$.exports,S={name:"App",components:{Dashboard:D,Task:x},data:function(){return{name:"Kanban",edit:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(d["c"])(["openModal","openNewList"])),{},{changeName:function(){this.edit=!1}}),watch:{$route:{handler:function(t,e){document.title=t.meta.title||"Vue-project"},immediate:!0}}},P=S,F=(a("034f"),Object(m["a"])(P,n,o,!1,null,null,null)),I=F.exports,q=(a("d3b7"),a("8c4f")),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Dashboard")],1)},A=[],H={name:"Home",components:{Dashboard:D}},z=H,G=Object(m["a"])(z,R,A,!1,null,null,null),J=G.exports;r["default"].use(q["a"]);var K=[{path:"/",name:"Home",component:J,meta:{title:"Kanban-board"}},{path:"/about",name:"About",meta:{title:"About-new"},component:function(){return a.e("about").then(a.bind(null,"f820"))}}],V=new q["a"]({mode:"history",base:"/kanban-vue/",routes:K}),Q=V,U=(a("99af"),a("7db0"),a("c740"),a("ac1f"),a("25f0"),a("5319"),a("2909"));function W(){var t=(new Date).getTime(),e="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?a:3&a|8).toString(16)}));return e}r["default"].use(d["a"]);var X=new d["a"].Store({state:{editMode:!1,editNewList:!1,open:!1,openBoard:!1,boards:[{id:W(),name:"Backlog",headerColor:"#1C0DF7ED",tareas:[{id:W(),title:"Prueba",description:"Esto es una prueba"},{id:W(),title:"Prueba Dos",description:"Esto es una segunda prueba"}]}]},mutations:{closeModal:function(t){return t.editMode=!1,t.open=!1},openModal:function(t){return t.editMode=!1,t.open=!0},addTask:function(t,e){var a=Object(i["a"])(Object(i["a"])({},e),{},{id:W()});return t.open=!1,t.editMode=!1,t.boards[0].tareas=[].concat(Object(U["a"])(t.boards[0].tareas),[a])},editTask:function(t,e){t.open=!1,t.editMode=!1;var a=t.boards.find((function(t){return t.id==e.boardId}));delete e.boardId;var n=a.tareas.findIndex((function(t){return t.id==e.id}));r["default"].set(a.tareas,n,e)},addList:function(t,e){var a=Object(i["a"])(Object(i["a"])({},e),{},{id:W(),tareas:[]});return t.openBoard=!1,t.boards=[].concat(Object(U["a"])(t.boards),[a])},openNewList:function(t){return t.editNewList=!1,t.openBoard=!0},closeEditList:function(t){return t.editNewList=!1,t.openBoard=!1},updateList:function(t,e){t.openBoard=!1,t.editNewList=!1;var a=t.boards.findIndex((function(t){return t.id===e.id}));r["default"].set(t.boards,a,e)}},actions:{},modules:{},getters:{allTasks:function(t){return t.boards},listEdit:function(t){return t.editNewList}}}),Y=a("ce5b"),Z=a.n(Y);a("bf40");r["default"].use(Z.a);var tt=new Z.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");r["default"].config.productionTip=!1,new r["default"]({router:Q,store:X,vuetify:tt,render:function(t){return t(I)}}).$mount("#app")},"85ec":function(t,e,a){},c432:function(t,e,a){}});
//# sourceMappingURL=app.1886e91e.js.map