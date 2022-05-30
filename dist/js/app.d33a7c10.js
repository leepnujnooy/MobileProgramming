(()=>{var t={6076:()=>{},4386:(t,e,o)=>{"use strict";o(6992),o(8674),o(9601),o(7727);var n=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},i=[],r=o(6076),s=o.n(r);const l=s();var d=o(1001),c=(0,d.Z)(l,a,i,!1,null,null,null);const u=c.exports;var m=o(5205);(0,m.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=o(858);n.Z.use(v.Z);const p=new v.Z({});var f=o(8345),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"#6A76AB",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",transition:"scale-transition",width:"40"}})],1),o("v-spacer"),o("v-btn",{attrs:{text:""}},[o("span",[t._v("More")]),o("v-icon",[t._v("mdi-menu")])],1)],1),o("v-main",[o("v-form",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"6",sm:"3"}},[o("v-text-field",{attrs:{label:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),o("v-col",{attrs:{cols:"6",sm:"3"}},[o("v-text-field",{attrs:{label:"Password",hint:"At least 6 characters",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),o("v-btn",{attrs:{outlined:""},on:{click:t.addUser}},[t._v(" Signup ")]),o("v-btn",{attrs:{outlined:""},on:{click:t.login}},[t._v(" Login ")]),o("h1",[t._v(t._s(t.msg))])],1)],1)},g=[],T=(o(8309),o(7218));const b={data:function(){return{msg:"hi",auth:(0,T.v0)(),email:"",password:""}},methods:{addUser:function(){var t=this;(0,T.Xb)(this.auth,this.email,this.password).then((function(e){t.msg="loggined as "+e.user.email}))["catch"]((function(e){t.msg=e}))},login:function(){var t=this;(0,T.e5)(this.auth,this.email,this.password).then((function(e){console.log(e.user),t.name=e.user.email,t.$router.push({path:"todo"})}))["catch"]((function(e){t.msg=e}))}},beforeCreate:function(){var t=this;(0,T.Aj)((0,T.v0)(),(function(e){e?(console.log(e.email),t.$router.push({path:"todo"})):console.log("not logged in")}))}},k=b;var y=o(3453),_=o.n(y),w=o(7524),C=o(426),x=o(680),Z=o(2102),I=o(9846),O=o(6232),V=o(6428),j=o(7047),A=o(7877),M=o(2877),S=o(9762),$=o(896),E=(0,d.Z)(k,h,g,!1,null,null,null);const B=E.exports;_()(E,{VApp:w.Z,VAppBar:C.Z,VBtn:x.Z,VCol:Z.Z,VContainer:I.Z,VForm:O.Z,VIcon:V.Z,VImg:j.Z,VMain:A.Z,VRow:M.Z,VSpacer:S.Z,VTextField:$.Z});var L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"#6A76AB",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"",transition:"scale-transition",width:"40"}})],1),o("v-spacer"),o("v-btn",{attrs:{text:""}},[o("span"),o("v-icon",{attrs:{color:"white"}},[t._v("mdi-dots-vertical")])],1)],1),o("v-main",[o("TodoHeader"),o("TodoInput",{on:{addTodo:t.addTodo}}),o("TodoList",{attrs:{propsdata:t.todoItems},on:{removeTodo:t.removeTodo,editTodo:t.editTodo,detailTodo:t.detailTodo,toggleComplete:t.toggleComplete}})],1),o("v-footer",{attrs:{color:"#6A76AB",dark:""}},[o("TodoFooter",{on:{removeAll:t.clearAll}})],1)],1)},P=[],F=(o(561),o(8862),o(4916),o(5306),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])])],1)}),N=[];const J={methods:{clearTodo:function(){this.$emit("removeAll")}}},R=J;var q=(0,d.Z)(R,F,N,!1,null,"b0fbd574",null);const z=q.exports;_()(q,{VContainer:I.Z,VRow:M.Z});var D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("h1",[t._v("TODO it!")])])],1)},H=[];const K={},U=K;var X=(0,d.Z)(U,D,H,!1,null,"e6b53ae8",null);const G=X.exports;_()(X,{VContainer:I.Z,VRow:M.Z});var Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("transition-group",{staticClass:"pl-0",attrs:{name:"list",tag:"ul"}},t._l(t.propsdata,(function(e,n){return o("v-card",{key:e,staticClass:"mb-2 "},[o("v-card-actions",[o("v-list-item",[o("v-list-item-avatar",[o("input",{attrs:{type:"checkbox"},domProps:{checked:1==e.completed},on:{change:function(o){return t.toggleComplete(e)}}})]),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e)}}),o("v-list-item-subtitle")],1),o("v-list-item-action",{on:{click:function(o){return t.editTodo(e,n)}}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("fa-solid fa-wrench")])],1)],1),o("v-list-item-action",{on:{click:function(o){return t.detailTodo(e,n)}}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("fa-solid fa-info")])],1)],1),o("v-list-item-action",{on:{click:function(o){return t.removeTodo(e,n)}}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)],1)})),1),t.editModal?o("modal",{on:{close:function(e){t.editModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("수정")]),o("span",{attrs:{slot:"footer"},slot:"footer"},[t._v(" 수정할 내용을 입력하세요."),o("input",{directives:[{name:"model",rawName:"v-model",value:t.editTodoObj.text,expression:"editTodoObj.text"}],attrs:{type:"text",onfocus:"this.select()"},domProps:{value:t.editTodoObj.text},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editTodoAction()},input:function(e){e.target.composing||t.$set(t.editTodoObj,"text",e.target.value)}}}),o("button",{attrs:{type:"button"},on:{click:function(e){return t.editTodoAction()}}},[t._v("수정")]),o("i",{staticClass:"close-modal-btn fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editModal=!1}}})])]):t._e(),t.detailModal?o("modal",{on:{close:function(e){t.detailModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("상세한 정보")]),o("span",{attrs:{slot:"footer"},slot:"footer"},[t._v(" 할 일의 상세한 정보를 기입하세요."),o("input",{directives:[{name:"model",rawName:"v-model",value:t.detailTodoObj.value,expression:"detailTodoObj.value"}],attrs:{type:"text",onfocus:"this.select()"},domProps:{value:t.detailTodoObj.value},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.detailTodoAction(t.detailTodoObj.value)},input:function(e){e.target.composing||t.$set(t.detailTodoObj,"value",e.target.value)}}}),o("button",{attrs:{type:"button"},on:{click:function(e){return t.detailTodoAction()}}},[t._v("수정")]),o("i",{staticClass:"close-modal-btn fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.detailModal=!1}}})])]):t._e()],1)},W=[],Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),o("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])},tt=[];const et={data:function(){return{}},components:{}},ot=et;var nt=(0,d.Z)(ot,Y,tt,!1,null,null,null);const at=nt.exports,it={props:["propsdata"],data:function(){return{editModal:!1,detailModal:!1,currentTodo:{},editTodoObj:{key:"",index:"",text:""},detailTodoObj:{key:"",value:"",index:""}}},methods:{removeTodo:function(t,e){this.$emit("removeTodo",t,e)},editTodo:function(t,e){console.log(t,e),this.editTodoObj.index=e,this.currentTodo=this.propsdata[e],this.editTodoObj.text=this.currentTodo,this.editTodoObj.key=t,this.editModal=!this.editModal},editTodoAction:function(){var t=this.editTodoObj;this.$emit("editTodo",t.key,t.index,t.text),this.editModal=!1},detailTodo:function(t,e){this.detailTodoObj.index=e,this.detailTodoObj.value=t,this.currentTodo=this.propsdata[e],this.detailTodoObj.key=this.currentTodo,console.log(this.detailTodoObj.value,this.detailTodoObj.key),this.detailModal=!this.detailModal},detailTodoAction:function(){var t=this.detailTodoObj;this.$emit("detailTodo",t.value,t.index,t.key),this.detailModal=!1},toggleComplete:function(t){this.$emit("toggleComplete",t)}},components:{Modal:at}},rt=it;var st=o(3237),lt=o(7118),dt=o(7620),ct=o(3099),ut=o(5457),mt=o(266),vt=(0,d.Z)(rt,Q,W,!1,null,"2b1b44c1",null);const pt=vt.exports;_()(vt,{VBtn:x.Z,VCard:st.Z,VCardActions:lt.h7,VContainer:I.Z,VIcon:V.Z,VListItem:dt.Z,VListItemAction:ct.Z,VListItemAvatar:ut.Z,VListItemContent:mt.km,VListItemSubtitle:mt.oZ,VListItemTitle:mt.V9});var ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Type what you have to do"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"addBtn fas fa-plus",attrs:{"aria-hidden":"true"}})]),t.showModal?o("modal",{on:{close:function(e){t.showModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고")]),o("span",{attrs:{slot:"footer"},on:{click:function(e){t.showModal=!1}},slot:"footer"},[t._v("할 일을 입력하세요. "),o("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"}})])]):t._e()],1)},ht=[],gt=(o(3210),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("close")}}},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header")],2),o("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),Tt=[],bt={},kt=(0,d.Z)(bt,gt,Tt,!1,null,null,null);const yt=kt.exports,_t={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){if(""!==this.newTodoItem){var t=this.newTodoItem&&this.newTodoItem.trim();this.$emit("addTodo",t),this.clearInput()}else this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:yt}},wt=_t;var Ct=(0,d.Z)(wt,ft,ht,!1,null,"0e1048d2",null);const xt=Ct.exports,Zt={name:"App",components:{TodoList:pt,TodoFooter:z,TodoHeader:G,TodoInput:xt},data:function(){return{todoItems:[],name:"",auth:(0,T.v0)()}},methods:{clearAll:function(){localStorage.clear(),this.todoItems=[]},addTodo:function(t){localStorage.setItem(t,t),this.todoItems.push(t)},removeTodo:function(t,e){localStorage.removeItem(t),this.todoItems.splice(e,1)},editTodo:function(t,e,o){console.log(t,e,o),this.todoItems.splice(e,1,o),localStorage.setItem(o,o),localStorage.removeItem(t,t)},detailTodo:function(t,e,o){console.log(t,e,o),this.todoItems.splice(e,1,o),localStorage.setItem(o,t)},toggleComplete:function(t){t.completed=!t.completed,localStorage.setItem(t.item,JSON.stringify(t))}},created:function(){var t=this;if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)this.todoItems.push(localStorage.key(e));(0,T.Aj)(this.auth,(function(e){e?t.name=e.email:t.$router.replace({path:"/"})}))}},It=Zt;var Ot=o(899),Vt=(0,d.Z)(It,L,P,!1,null,null,null);const jt=Vt.exports;_()(Vt,{VApp:w.Z,VAppBar:C.Z,VBtn:x.Z,VFooter:Ot.Z,VIcon:V.Z,VImg:j.Z,VMain:A.Z,VSpacer:S.Z}),n.Z.use(f.Z);var At=new f.Z({mode:"history",routes:[{path:"/",component:B},{path:"/todo",component:jt},{path:"*",component:B}]});const Mt=At;var St=o(5503);n.Z.config.productionTip=!1;var $t={apiKey:"AIzaSyBaE-iC480JMPv_r94kqp-rJxJhr0IMak8",authDomain:"mobprac.firebaseapp.com",projectId:"mobprac",storageBucket:"mobprac.appspot.com",messagingSenderId:"592940296101",appId:"1:592940296101:web:da6b90c3ddcc498e6e6a4c"};(0,St.ZF)($t),new n.Z({vuetify:p,router:Mt,render:function(t){return t(u)}}).$mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,(()=>{var t=[];o.O=(e,n,a,i)=>{if(!n){var r=1/0;for(c=0;c<t.length;c++){for(var[n,a,i]=t[c],s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((t=>o.O[t](n[l])))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,a,i]}})(),(()=>{o.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return o.d(e,{a:e}),e}})(),(()=>{o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{o.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,[r,s,l]=n,d=0;if(r.some((e=>0!==t[e]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var c=l(o)}for(e&&e(n);d<r.length;d++)i=r[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunktodo_mobile"]=self["webpackChunktodo_mobile"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var n=o.O(void 0,[998],(()=>o(4386)));n=o.O(n)})();
//# sourceMappingURL=app.d33a7c10.js.map