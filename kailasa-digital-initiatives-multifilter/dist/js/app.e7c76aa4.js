(function(t){function e(e){for(var r,l,c=e[0],o=e[1],s=e[2],u=0,d=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(r=!1)}r&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},i={app:0},n=[];function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},5229:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function i(t,e,a,i,n,l){var c=Object(r["i"])("social-grid");return Object(r["e"])(),Object(r["c"])(c)}a("b0c0");var n=Object(r["m"])("data-v-a31ef30a");Object(r["g"])("data-v-a31ef30a");var l={class:"filters"},c=Object(r["d"])("div",{class:"filters__heading"},"Filter by Category:",-1),o={class:"filters__btnGroup"},s={class:"filters"},f=Object(r["d"])("div",{class:"filters__heading"},"Filter by Platform:",-1),u={class:"filters__btnGroup"},d={class:"filters__checkbox"},b=Object(r["d"])("label",{for:"allPlatforms"},"All",-1),g={class:"socialGrid"};Object(r["f"])();var p=n((function(t,e,a,i,n,p){var h=Object(r["i"])("social-item");return Object(r["e"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",l,[c,Object(r["d"])("div",o,[Object(r["d"])("button",{class:["filters__btn",{active:n.allCategories}],onClick:e[1]||(e[1]=function(){return p.toggleAllCategories&&p.toggleAllCategories.apply(p,arguments)})}," All ",2),(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(n.categories,(function(t,e){return Object(r["e"])(),Object(r["c"])("button",{key:e,class:["filters__btn",{active:t.active}],onClick:function(e){return p.toggleCategory(t)}},Object(r["j"])(t.name),11,["onClick"])})),128))])]),Object(r["d"])("div",s,[f,Object(r["d"])("div",u,[Object(r["d"])("div",d,[Object(r["l"])(Object(r["d"])("input",{type:"checkbox",id:"allPlatforms","onUpdate:modelValue":e[2]||(e[2]=function(t){return n.allPlatforms=t}),onChange:e[3]||(e[3]=function(){return p.toggleAllPlatforms&&p.toggleAllPlatforms.apply(p,arguments)})},null,544),[[r["k"],n.allPlatforms]]),b]),(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(n.platforms,(function(t,e){return Object(r["e"])(),Object(r["c"])("div",{class:"filters__checkbox",key:e},[Object(r["l"])(Object(r["d"])("input",{type:"checkbox",id:t.name,"onUpdate:modelValue":function(e){return t.active=e},onChange:function(e){return p.togglePlatform(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[r["k"],t.active]]),Object(r["d"])("label",{for:t.name},Object(r["j"])(t.name),9,["for"])])})),128))])]),Object(r["d"])("div",g,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(p.filteredLinks,(function(t){return Object(r["e"])(),Object(r["c"])(h,{key:t.id,title:t.title,url:t.url,platform:t.platform},null,8,["title","url","platform"])})),128))])],64)})),h=(a("4de4"),a("4160"),a("caad"),a("d3b7"),a("6062"),a("2532"),a("3ca3"),a("159b"),a("ddb0"),Object(r["m"])("data-v-57972244"));Object(r["g"])("data-v-57972244");var v={class:"socialCard"},m={class:"socialCard__title"};Object(r["f"])();var j=h((function(t,e,a,i,n,l){return Object(r["e"])(),Object(r["c"])("div",v,[Object(r["d"])("h4",m,Object(r["j"])(a.title),1),Object(r["d"])("a",{class:"socialCard__link",href:a.url,target:"_blank"},"Visit",8,["href"])])})),O={name:"SocialItem",props:{title:String,url:String,platform:String}};a("56ee");O.render=j,O.__scopeId="data-v-57972244";var y=O,C=a("bc3a"),P=a.n(C),_="1gepSNvYaahoGMIqf103cl15z3Z-NL3nKW8b9wqGmCGk",k={name:"SocialGrid",components:{SocialItem:y},data:function(){return{socialLinks:[],categories:[],platforms:[],allCategories:!0,allPlatforms:!0,activeCategories:[],activePlatforms:[]}},computed:{filteredLinks:function(){var t=this;return this.activeCategories.length>0||this.activePlatforms.length>0?this.allCategories?this.socialLinks.filter((function(e){return t.activePlatforms.includes(e.platform)})):this.allPlatforms?this.socialLinks.filter((function(e){return t.activeCategories.includes(e.category)})):this.socialLinks.filter((function(e){return t.activeCategories.includes(e.category)&&t.activePlatforms.includes(e.platform)})):this.socialLinks}},methods:{parseData:function(t){var e=this,a=new Set,r=new Set;t.forEach((function(t){var i={id:t.id.$t,platform:t.gsx$platform.$t,title:t.gsx$title.$t,url:t.gsx$url.$t,category:t.gsx$category.$t};a.add(t.gsx$category.$t),r.add(t.gsx$platform.$t),e.socialLinks.push(i)})),a.forEach((function(t){return e.categories.push({name:t,active:!1})})),r.forEach((function(t){return e.platforms.push({name:t,active:!1})}))},toggleCategory:function(t){t.active=!t.active,t.active?(this.allCategories=!1,this.activeCategories.push(t.name)):(this.activeCategories=this.activeCategories.filter((function(e){return e!==t.name})),0===this.activeCategories.length&&(this.allCategories=!0))},togglePlatform:function(t){t.active?(this.allPlatforms=!1,this.activePlatforms.push(t.name)):(this.activePlatforms=this.activePlatforms.filter((function(e){return e!==t.name})),0===this.activePlatforms.length&&(this.allPlatforms=!0))},toggleAllCategories:function(){this.allCategories=!this.allCategories,this.allCategories&&(this.categories.forEach((function(t){return t.active=!1})),this.activeCategories=[])},toggleAllPlatforms:function(){this.allPlatforms&&(this.platforms.forEach((function(t){return t.active=!1})),this.activePlatforms=[])}},created:function(){var t=this;P.a.get("https://spreadsheets.google.com/feeds/list/".concat(_,"/1/public/values?alt=json")).then((function(e){return t.parseData(e.data.feed.entry)}))}};a("a789");k.render=p,k.__scopeId="data-v-a31ef30a";var x=k,S={name:"App",components:{SocialGrid:x}};a("ed2b");S.render=i;var w=S;Object(r["b"])(w).mount("#app")},"56ee":function(t,e,a){"use strict";a("b66a")},a789:function(t,e,a){"use strict";a("5229")},ab7f:function(t,e,a){},b66a:function(t,e,a){},ed2b:function(t,e,a){"use strict";a("ab7f")}});
//# sourceMappingURL=app.e7c76aa4.js.map