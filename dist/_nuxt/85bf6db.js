(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6,7,8,9,11,12],{273:function(t,e,l){t.exports=l.p+"img/48308.c5f132a.png"},275:function(t,e,l){"use strict";l.r(e);var n={name:"Vinput",props:["label","type"]},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mt-4"},[e("label",[t._v("\n    "+t._s(t.label)+"\n    "),e("input",{staticClass:"w-full h-8 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300",attrs:{type:t.type}})])])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-36 lg:h-96 bg-white/10 rounded-lg"},[e("div",{staticClass:"flex lg:block items-center justify-center h-full p-4"},[e("div",{staticClass:"h-[200px] mr-4 rounded-full md:h-48 md:w-full lg:mb-4 lg:rounded-xl"},[e("img",{staticClass:"object-contain h-full w-full mx-auto rounded-full lg:rounded-none",attrs:{src:l(273),alt:""}})]),t._v(" "),e("div",{},[e("h2",{staticClass:"text-base lg:text-xl text-white font-bold mb-2"},[t._v("Project Heading")]),t._v(" "),e("p",{staticClass:"text-sm lg:text-medium text-slate-200"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet est voluptas ipsum.")])])])])}],o={name:"ProjectCard"},c=l(15),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports},277:function(t,e,l){"use strict";l.r(e);l(31);var n={data:function(){return{email:null,name:null,message:null}},methods:{showMessage:function(){alert("Message send")}}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"text-white",attrs:{action:""}},[e("Vinput",{attrs:{label:"Email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e("Vinput",{attrs:{label:"Name",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e("Vinput",{attrs:{label:"Message",type:"text"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),e("button",{staticClass:"py-2 px-10 mt-4 text-white",staticStyle:{"background-color":"#1f1f1f"},on:{click:t.showMessage}},[t._v("Send")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Vinput:l(275).default})},278:function(t,e,l){var content=l(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(82).default)("e91a7816",content,!0,{sourceMap:!1})},280:function(t,e,l){"use strict";l.r(e);var n={components:{ProjectCard:l(276).default}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-8 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-4"},[e("ProjectCard"),t._v(" "),e("ProjectCard"),t._v(" "),e("ProjectCard")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectCard:l(276).default})},281:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{img:["ichi","ni","san","yon","go","roku","nana","hachi","kyu"],images:null}},props:["images"],setup:function(t){console.log(t.images)}},o=l(15),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5 h-full"},[e("h2",{staticClass:"text-2xl text-white font-bold"},[t._v("Gallery Tab")]),t._v(" "),e("div",{staticClass:"grid lg:grid-cols-4 gap-2 gap-y-2"},t._l(t.images,(function(i){return e("div",{staticClass:"relative h-48 bg-slate-500 text-center overflow-hidden"},[e("img",{staticClass:"object-cover h-full w-full hover:scale-125 duration-500",attrs:{src:i.download_url,alt:""}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,l){"use strict";l.r(e);var n=l(15),component=Object(n.a)({},(function(){return(0,this._self._c)("div",[this._v("\n  Archive component\n")])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,l){t.exports=l.p+"img/istockphoto-1125710604-1024x1024-removebg-preview.97e1978.png"},286:function(t,e,l){t.exports=l.p+"img/doodle items.7dcbf38.png"},287:function(t,e,l){t.exports=l.p+"img/Group 62.e6b64a2.png"},288:function(t,e,l){t.exports=l.p+"img/Group 2372.6dbb77f.png"},289:function(t,e,l){"use strict";l(278)},290:function(t,e,l){var n=l(81)((function(i){return i[1]}));n.push([t.i,".tab-button{background-color:#393e46;border-radius:20px;color:#fff;margin-top:20px;padding:6px 10px}.btn-sky,.tab-button.active,.tab-button:hover{background-color:#00adb5}.btn-sky:hover{background-color:#0098a0}",""]),n.locals={},t.exports=n},291:function(t,e,l){"use strict";l.r(e);l(31);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container h-full w-full mx-auto pt-12 snap-center",attrs:{id:"home"}},[e("div",{staticClass:"flex flex-wrap w-full"},[e("div",{staticClass:"w-full lg:w-1/2 flex justify-center items-center"},[e("div",{staticClass:"pt-12 lg:pt-0"},[e("h1",{staticClass:"text-4xl md:text-6xl font-extrabold",staticStyle:{color:"#00ADB5"}},[t._v("PROFESIONAL")]),t._v(" "),e("h1",{staticClass:"text-4xl md:text-6xl font-black text-white"},[t._v("LAZY PERSON")]),t._v(" "),e("button",{staticClass:"py-2 px-6 rounded-full text-white font-bold mt-8 btn-sky"},[t._v("About Me")])])]),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2"},[e("img",{staticClass:"mx-auto",attrs:{src:l(285),alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto pt-12 lg:pt-48 snap-center",attrs:{id:"about"}},[e("div",{staticClass:"flex flex-wrap w-full"},[e("div",{staticClass:"w-full lg:w-1/2 flex justify-center items-center"},[e("div",{staticClass:"w-[80%] p-2"},[e("h1",{staticClass:"text-4xl md:text-6xl font-extrabold text-white"},[t._v("About "),e("span",{staticStyle:{color:"#00ADB5"}},[t._v("me")])]),t._v(" "),e("p",{staticClass:"text-base text-white pt-5"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto distinctio provident dolores officia at vel ullam in! Quia, molestiae. Obcaecati dolorem iste autem voluptatibus doloremque tempore ab minima dolorum.")])])]),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2"},[e("div",{staticClass:"relative"},[e("img",{attrs:{src:l(286),alt:""}}),t._v(" "),e("img",{staticClass:"w-[60%] absolute -bottom-5 lg:-bottom-10 left-1/2 -translate-x-1/2",attrs:{src:l(287),alt:""}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full lg:w-1/2 text-center lg:text-left"},[e("h1",{staticClass:"text-4xl md:text-6xl font-black text-white"},[t._v("Got a Project in")]),t._v(" "),e("h1",{staticClass:"text-4xl md:text-6xl font-extrabold",staticStyle:{color:"#00ADB5"}},[t._v("mind?")]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("img",{staticClass:"w-[40%]",attrs:{src:l(288),alt:""}})])])}],o=(l(19),l(280)),c=l(281),r=l(284),d={layout:"portfolio",components:{TabHome:o.default,TabGallery:c.default,TabArchive:r.default},data:function(){return{currentTab:{name:"Project",component:o.default},tabs:[{name:"Project",component:o.default},{name:"Gallery",component:c.default},{name:"Archive",component:r.default}],images:null}},methods:{getImg:function(){var t=this;fetch("https://picsum.photos/v2/list?limit=20").then((function(t){return t.json()})).then((function(e){t.images=e}))}}},f=(l(289),l(15)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"snap-y"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"container mx-auto mt-24 min-h-[800px] h-full p-12 lg:mt-48 lg:pt-48 snap-center",attrs:{id:"random"}},[e("div",{staticClass:"flex items-center h-full"},[e("div",{staticClass:"w-full"},[e("h1",{staticClass:"text-6xl font-extrabold text-white"},[t._v("My "),e("span",{staticStyle:{color:"#00ADB5"}},[t._v(t._s(t.currentTab.name))])]),t._v(" "),e("div",{staticClass:"grid gap-x-4 grid-cols-3 md:grid-cols-8 lg:grid-cols-12"},t._l(t.tabs,(function(l){return e("button",{key:l,class:["tab-button",{active:t.currentTab.component==l.component}],on:{click:[function(e){t.currentTab={name:l.name,component:l.component}},t.getImg]}},[t._v("\n              "+t._s(l.name)+"\n            ")])})),0),t._v(" "),e(t.currentTab.component,{tag:"component",attrs:{images:t.images}})],1)])]),t._v(" "),e("div",{staticClass:"container mx-auto p-12 lg:pt-36 snap-center",attrs:{id:"contact"}},[e("div",{staticClass:"flex flex-wrap"},[t._m(2),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2 flex items-center justify-center"},[e("div",[e("h2",{staticClass:"text-4xl text-white font-bold block mt-12 lg:hidden lg:mt-0"},[t._v("Contact Me")]),t._v(" "),e("Vform")],1)])])])])}),n,!1,null,null,null);e.default=component.exports;installComponents(component,{Vform:l(277).default})}}]);