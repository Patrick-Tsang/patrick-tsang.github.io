(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,v=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"0796":function(t,e,a){t.exports=a.p+"img/bizpal-logo.fd1194c7.png"},"24da":function(t,e,a){"use strict";var i=a("7fe3"),n=a.n(i);n.a},"370f":function(t,e,a){"use strict";var i=a("5dd2"),n=a.n(i);n.a},"387e":function(t,e,a){t.exports=a.p+"img/dronedog.81a5b3dc.png"},"51ab":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"nav"}},[t.$vuetify.breakpoint.smAndDown?i("div",[i("v-app-bar",{attrs:{"inverted-scroll":"",color:"white",app:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),i("v-toolbar-title",[t._v("Patrick Tsang")])],1),i("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:a("ee06")}})],1),i("v-list-item-title",[t._v("Patrick Tsang")])],1),i("v-divider"),i("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){return t.navScroll(e.tag)}}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1):t._e(),t.$vuetify.breakpoint.mdAndUp?i("v-card",[i("v-navigation-drawer",{attrs:{"mini-variant":t.mini,permanent:"",app:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[i("v-img",{attrs:{src:a("ee06")}})],1),i("v-list-item-title",[t._v("Patrick Tsang")]),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[i("v-icon",[t._v("mdi-chevron-left")])],1)],1),i("v-divider"),i("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return i("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){return t.$vuetify.goTo(e.tag)}}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1):t._e()],1)},r=[],c={name:"Navigation",data:function(){return{drawer:!1,title:"Patrick Tsang ",items:[{title:"Home",icon:"mdi-home-city",tag:"#home"},{title:"Projects",icon:"mdi-folder-account",tag:"#projects"},{title:"About Me",icon:"mdi-account",tag:"#about"},{title:"Contact",icon:"mdi-email",tag:"#contact"}],mini:!0}},methods:{navScroll:function(t){this.$vuetify.goTo(t),this.drawer=!1}}},l=c,d=a("2877"),u=Object(d["a"])(l,s,r,!1,null,"64ab63c2",null),v=u.exports,m={name:"App",components:{Navigation:v}},p=m,f=(a("034f"),Object(d["a"])(p,n,o,!1,null,null,null)),h=f.exports,g=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("welcome",{attrs:{id:"home"}}),a("projects",{attrs:{id:"projects"}}),a("about-me",{attrs:{id:"about"}}),a("contact",{attrs:{id:"contact"}})],1)},w=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{transition:"slide-x-transition","no-gutters":""}},[a("v-col",[a("v-row",{staticStyle:{height:"100vh"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"col-10 col-md-6 col-sm-8"},[a("div",{staticClass:"display-4 font-weight-thin",attrs:{"data-aos":"fade-right"}},[t._v(" Hi! ")]),a("div",{staticClass:"headline font-weight-light",attrs:{"data-aos":"fade-right"}},[t._v(" My name is Patrick Tsang. I'm a Software Engineer, currently located in Toronto, Ontario. Welcome to my personal website! ")])])],1)],1),a("v-col",{staticClass:"background-image hidden-sm-and-down",attrs:{"data-aos":"fade-left"}})],1)},_=[],k={name:"Welcome"},C=k,j=(a("24da"),Object(d["a"])(C,y,_,!1,null,"066bc105",null)),x=j.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"full-background",attrs:{transition:"slide-x-transition","no-gutters":""}},[a("v-col",{staticClass:"background-image hidden-sm-and-down",attrs:{"data-aos":"fade-right"}}),a("v-col",{staticClass:"text-content"},[a("v-row",{class:{height_styling:t.$vuetify.breakpoint.mdAndUp},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"col-10 col-md-8 col-sm-9",attrs:{"data-aos":"fade-left"}},[a("div",{staticClass:"display-3 font-weight-thin"},[t._v("About Me")]),a("div",{staticClass:"headline font-weight-light"},[a("p",[t._v(" I'm a big fan of software development, particularly web development and open data. ")]),a("p",[t._v(" I'm passionate about projects that help people achieve their goals, no matter what they may be. ")])]),a("v-card",{attrs:{shaped:""}},[a("v-card-title",{staticClass:"headline"},[t._v("My Languages")]),a("v-card-subtitle",t._l(t.languages,(function(e){return a("div",{key:e.name},[a("br"),t._v(" "+t._s(e.name)+" "),a("v-progress-linear",{attrs:{value:e.val,color:"deep-purple accent-4"}})],1)})),0)],1)],1)],1)],1)],1)},O=[],S={name:"AboutMe",data:function(){return{languages:[{name:"Javascript",val:90},{name:"Python",val:80},{name:"SQL",val:75},{name:"HTML/CSS",val:65}]}}},T=S,I=(a("5df8"),Object(d["a"])(T,P,O,!1,null,"714e7c3f",null)),M=I.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticStyle:{"background-color":"#7880B5"},attrs:{transition:"slide-x-transition","no-gutters":""}},[a("v-col",{staticClass:"col-md-6 col-sm-12",attrs:{"data-aos":"fade-right"}},[a("v-row",{staticStyle:{"min-height":"100vh"},attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"col-10 col-md-8 col-sm-9"},[a("div",{staticClass:"display-3 font-weight-thin"},[t._v(" Let's get in touch! ")]),a("div",{staticClass:"headline font-weight-light"},[a("p",[t._v(" I'm always looking to make connections with others, virtually and in-person. ")]),a("p",[t._v(" Feel free to use the contact form to talk to me! You can also get in touch with me through social media. ")]),a("p",[t._v(" If you'd prefer to email me, here it is: "),a("v-btn",{staticClass:"ma-2",staticStyle:{"background-color":"white"},attrs:{dark:"",outlined:"",color:"blue",ripple:"",href:"mailto:patricksmtsang@gmail.com"}},[t._v(" patricksmtsang@gmail.com"),a("v-icon",[t._v("mdi-email")])],1)],1),a("v-row",t._l(t.socials,(function(e){return a("v-col",{key:e.link},[a("v-btn",{attrs:{href:e.link}},[a("v-icon",[t._v(t._s(e.icon))])],1)],1)})),1)],1)])],1)],1),a("v-col",{staticClass:"col-md-6 col-12",staticStyle:{"background-color":"#C0A9B0"}},[a("v-row",{staticStyle:{"min-height":"100vh"},attrs:{align:"center",justify:"center","data-aos":"fade-left"}},[a("v-col",{staticClass:"col-10 col-md-8 col-sm-9"},[0==t.submitted?a("v-form",{attrs:{method:"POST"}},[a("div",{staticClass:"display-3 font-weight-thin"},[t._v("Contact Me")]),a("v-text-field",{attrs:{color:"blue",clearable:"",outlined:"",label:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{color:"blue",clearable:"",outlined:"",label:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{color:"blue",clearable:"",outlined:"",label:"message",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{on:{click:t.formSubmit}},[t._v("Submit")])],1):a("div",[a("div",{staticClass:"display-3 font-weight-thin"},[t._v(" Thanks for reaching out! ")]),a("div",{staticClass:"headline font-weight-light"},[a("p",[t._v(" I will reply to you as soon as I can. ")])])])],1)],1)],1)],1)},$=[],F=(a("a15b"),a("d81d"),a("b0c0"),a("b64b"),a("94ed")),H={data:function(){return{submitted:!1,name:null,email:null,message:null,action:"https://script.google.com/macros/s/AKfycbz0RmrPqqFgAVAe6tabLRwpOGZRMADJmoOTgTLSW-Ccz27UlRQ/exec",socials:[{icon:F["a"],link:"https://facebook.com/patricksmt"},{icon:F["c"],link:"https://instagram.com/patricksmt"},{icon:F["b"],link:"https://github.com/patrick-tsang"},{icon:F["d"],link:"https://www.linkedin.com/in/patrick-tsang/"}]}},methods:{formSubmit:function(){var t=new XMLHttpRequest;t.open("POST",this.action),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var e={name:this.name,email:this.email,message:this.message},a=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");t.send(a),this.submitted=!0}}},L=H,W=(a("370f"),Object(d["a"])(L,A,$,!1,null,"4b40c76b",null)),q=W.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"projects"},[i("v-container",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"col-10",attrs:{"data-aos":"fade-right"}},[i("div",{staticClass:"display-3 font-weight-thin"},[t._v(" Projects ")]),i("div",{staticClass:"headline font-weight-light"},[i("p",[t._v(" Here are some things that I've had the pleasure of working on! ")])])])],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"10",md:"6"}},[i("v-card",{attrs:{"data-aos":"fade-right"}},[i("v-img",{attrs:{"aspect-ratio":"1.7",src:a("0796"),contain:""}}),i("v-card-title",[i("span",{staticClass:"headline font-weight-light"},[t._v(" BizPaL ")])]),i("v-card-text",{staticClass:"body-1"},[i("p",[t._v(" BizPaL is a government service for finding permits and licenses for businesses. ")]),i("p",[t._v(" I contributed to the development and migration of the service to a Vue.js frontend, as well as an overhaul of the backend. ")]),i("a",{attrs:{target:"_blank",href:"https://services.bizpal-perle.ca"}},[t._v("Check it out here!")])])],1)],1),i("v-col",{attrs:{cols:"10",md:"6"}},[i("v-card",{attrs:{"data-aos":"fade-left"}},[i("v-img",{attrs:{"aspect-ratio":"1.7",src:a("ad15"),contain:""}}),i("v-card-title",[i("span",{staticClass:"headline font-weight-light"},[t._v(" Business Structures ")])]),i("v-card-text",{staticClass:"body-1"},[i("p",[t._v(" While I worked on BizPal, I had the opportunity to a prototype a widget for our partners in the BC government. ")]),i("p",[t._v(" This repo works as a proof of concept for the project. It was meant to show the features requested by our partners, allowing them to plug and play data. ")]),i("a",{attrs:{target:"_blank",href:"https://github.com/Patrick-Tsang/structures"}},[t._v("Here's a link to the repo! ")])])],1)],1),i("v-col",{attrs:{cols:"10",md:"6"}},[i("v-card",{attrs:{"data-aos":"fade-right"}},[i("v-img",{attrs:{"aspect-ratio":"1.7",src:a("387e"),contain:""}}),i("v-card-title",[i("span",{staticClass:"headline font-weight-light"},[t._v(" Drone Dog ")])]),i("v-card-text",{staticClass:"body-1"},[i("p",[t._v(" This was my Capstone project, a way to cap off my undergrad at McMaster University. ")]),i("p",[t._v(" We designed a rover that would retrieve an object, navigating around obstacles using path-finding algorithms. I'm proud of what my team was able to accomplish, given difficulties introduced by the novel coronavirus outbreak. ")]),i("a",{attrs:{target:"_blank",href:"https://github.com/LesleyWheat/Capstone-DogDrone/"}},[t._v("Here's a link to the project!")])])],1)],1),i("v-col",{attrs:{cols:"10",md:"6"}},[i("v-card",{attrs:{"data-aos":"fade-left"}},[i("v-img",{attrs:{"aspect-ratio":"1.7",src:a("c6b1")}}),i("v-card-title",[i("span",{staticClass:"headline font-weight-light"},[t._v(" Personal Website ")])]),i("v-card-text",{staticClass:"body-1"},[i("p",[t._v(" Oh look, you're already here! ")]),i("p",[t._v(" This is a way of showing people a little bit about myself. Who I am, what I do, and what I'm passionate about. ")]),i("a",{attrs:{target:"_blank",href:"https://github.com/Patrick-Tsang/patrick-tsang.github.io/tree/dev"}},[t._v("Here's a link to the repo!")])])],1)],1)],1)],1)],1)],1)],1)},E=[],R={name:"projects"},z=R,D=(a("de6e"),Object(d["a"])(z,B,E,!1,null,"0d306eca",null)),U=D.exports,J={name:"home",components:{Welcome:x,AboutMe:M,Contact:q,Projects:U}},V=J,N=Object(d["a"])(V,b,w,!1,null,null,null),Q=N.exports;i["default"].use(g["a"]);var G=[{path:"/",name:"Home",component:Q}],K=new g["a"]({mode:"history",base:"/",routes:G}),X=K,Y=a("2f62");i["default"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=a("ce5b"),et=a.n(tt);a("bf40");i["default"].use(et.a);var at=new et.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),it=(a("d1e78"),a("f5af")),nt=a.n(it);a("e829");nt.a.init({duration:500,once:!0,disable:"mobile"}),i["default"].config.productionTip=!1,new i["default"]({router:X,store:Z,vuetify:at,render:function(t){return t(h)}}).$mount("#app")},"5dd2":function(t,e,a){},"5df8":function(t,e,a){"use strict";var i=a("51ab"),n=a.n(i);n.a},"7def":function(t,e,a){},"7fe3":function(t,e,a){},"85ec":function(t,e,a){},ad15:function(t,e,a){t.exports=a.p+"img/bc.2c852cb2.jpg"},c6b1:function(t,e,a){t.exports=a.p+"img/personal.258586c7.jpg"},de6e:function(t,e,a){"use strict";var i=a("7def"),n=a.n(i);n.a},ee06:function(t,e,a){t.exports=a.p+"img/mini.f242d845.jpeg"}});
//# sourceMappingURL=app.88b6a664.js.map