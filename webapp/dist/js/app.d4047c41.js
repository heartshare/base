(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var r=o[a];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},i={app:0},s=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-627d183b":"f6b1f28a","chunk-a89a02dc":"f2b3acd7","chunk-ae5352de":"0b1eabcb"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={"chunk-627d183b":1,"chunk-a89a02dc":1,"chunk-ae5352de":1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-627d183b":"422047e0","chunk-a89a02dc":"56e39202","chunk-ae5352de":"26b03e89"}[t]+".css",i=c.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),o(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),a=o.n(n);a.a},"3d4d":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("b0c0"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=o("8c4f");n["default"].use(a["a"]),a["a"].prototype.goBack=function(t){this.isBack=!0,this.go(t)};var i=[{path:"/",name:"index",component:function(t){return o.e("chunk-ae5352de").then(function(){var e=[o("d504")];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/map",name:"map",component:function(t){return o.e("chunk-a89a02dc").then(function(){var e=[o("bb4b")];t.apply(null,e)}.bind(this)).catch(o.oe)}},{path:"/scan",name:"scan",component:function(t){return o.e("chunk-627d183b").then(function(){var e=[o("3296")];t.apply(null,e)}.bind(this)).catch(o.oe)}}],s=a["a"].prototype.push;a["a"].prototype.push=function(t){return s.call(this,t).catch((function(t){return t}))};var r=new a["a"]({base:"",routes:i}),c=r,u=o("bc3a"),l=o.n(u),d=o("d055"),p=o.n(d),f=o("8c89"),g=function(t){document.title=f["a"].title,t.prototype.$config=f["a"],t.prototype.$obj={scan:null,setTime:null,socket:null},t.prototype.$reg=function(t,e){var o=!1,n="",a={uname:/^[a-zA-Z][a-zA-Z0-9\_\@\-\*\&]{4,15}$/,tel:/^[1]\d{10}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,vcode:/^\d{4}$/,passwd:/^\w{6,16}$/};switch(t){case"uname":o=a.uname.test(e),n=o?"":"用户名英文开头5~16位！";break;case"tel":o=a.tel.test(e),n=o?"":"手机号码错误！";break;case"email":o=a.email.test(e),n=o?"":"邮箱帐号错误！";break;case"vcode":o=a.vcode.test(e),n=o?"":"验证码4位！";break;case"passwd":o=a.passwd.test(e),n=o?"":"密码为6~16位字符！";break}return!!o||n}},h=g,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("audio",{staticStyle:{display:"none"},attrs:{id:"msg"}}),t.update.show?o("div",{staticClass:"update_body",style:{backgroundColor:t.upDateColor.bg||t.$config.themeColor}},[o("div",{staticClass:"update_ct"},[o("div",{staticClass:"logo",style:{backgroundColor:t.upDateColor.logoBg}},[o("div")]),o("div",{staticClass:"loading",style:{backgroundImage:"linear-gradient(to right, "+t.upDateColor.loading+", "+t.upDateColor.loading+" "+t.update.loading+", "+t.upDateColor.loaded+" "+t.update.loading+", "+t.upDateColor.loaded+" 100%)"}}),o("div",{staticClass:"load_msg",domProps:{innerHTML:t._s(t.update.msg)}},[t._v("正在加载应用")]),o("div",{staticClass:"load_button"},[t.update.down?o("van-button",{style:{color:t.$config.themeColor},attrs:{round:"",size:"small"},on:{click:function(e){return t.updateDown()}}},[t._v("下载并安装")]):t._e()],1)]),o("div",{staticClass:"update_logo",style:{color:t.upDateColor.copy}},[o("h1",[t._v(t._s(t.$config.title))]),o("h2",[t._v(t._s(t.$config.copy))])])]):t._e(),o("transition",{attrs:{name:t.transitionName}},[o("keep-alive",{attrs:{max:t.keepAlive}},[o("router-view",{staticClass:"view"})],1)],1)],1)},y=[],v=(o("b680"),o("e25e"),o("9060")),b=(o("0d03"),{start:function(){var t=this,e=n["default"].prototype.$storage.getItem("token");e&&(n["default"].prototype.$obj.socket=new WebSocket(f["a"].socketServer+"?token="+e),n["default"].prototype.$obj.socket.onopen=function(){console.log("消息系统"),clearInterval(t.heartbeat),t.heartbeat=setInterval((function(){n["default"].prototype.$obj.socket&&n["default"].prototype.$obj.socket.send(JSON.stringify({type:""}))}),1e4),n["default"].prototype.$obj.socket.send(JSON.stringify({type:"newMsg"})),clearInterval(t.msgInterval),t.msgInterval=setInterval((function(){n["default"].prototype.$obj.socket.send(JSON.stringify({type:"newMsg"})),n["default"].prototype.$obj.socket.send(JSON.stringify({type:"getMsg"}))}),f["a"].msgNew)},n["default"].prototype.$obj.socket.onmessage=function(e){var o=JSON.parse(e.data);0==o.code&&"system"==o.type?(v["a"].notify(o.title,o.content,(function(e){o.id&&t.closeMsg(o.id),e.close()})),n["default"].prototype.$obj.socket.send(JSON.stringify({type:"newMsg"}))):0==o.code&&"newMsg"==o.type?n["default"].prototype.$storage.setItem("msgNew",o.num):0==o.code&&"getMsg"==o.type&&o.title&&v["a"].notify(o.title,o.content,(function(e){o.id&&t.closeMsg(o.id),e.close()}))},n["default"].prototype.$obj.socket.onclose=function(){console.log("消息关闭"),clearInterval(t.msgInterval),n["default"].prototype.$obj.socket=null,setTimeout((function(){n["default"].prototype.$obj.socket||t.start()}),1e4)})},closeMsg:function(t){n["default"].prototype.$ajax.post(n["default"].prototype.$config.apiUrl+"UserMain/msgNewState","token="+n["default"].prototype.$storage.getItem("token")+"&id="+t).then((function(t){n["default"].prototype.$obj.socket.send(JSON.stringify({type:"newMsg"}))}))},event:function(){var t=this;document.addEventListener("visibilitychange",(function(){if("hidden"==document.visibilityState){var e=(new Date).getTime();n["default"].prototype.$storage.setItem("HiddenTime",e)}else{var o=n["default"].prototype.$storage.getItem("HiddenTime"),a=(new Date).getTime();(a-o)/1e3>10?(n["default"].prototype.$obj.socket&&n["default"].prototype.$obj.socket.close(),setTimeout((function(){t.start()}),1e3)):console.log("保持链接")}}))}}),w=o("b650");n["default"].use(w["a"]);var k={watch:{$route:function(t,e){var o=this.$router.isBack;this.$router.isBack=!1,this.transitionName=o?"slide-right":"slide-left"}},data:function(){return{keepAlive:10,transitionName:"slide-left",update:{show:!1,os:"",down:!1,loading:"0%",msg:"检测更新",file:"",total:0},upDateColor:f["a"].upDateColor,msgNew:0,msgInterval:null}},mounted:function(){var t=this;setTimeout((function(){t.init()}),1e3),document.body.ontouchstart=function(){document.createElement("audio")};var e=this.$storage.getItem("token");e&&(b.event(),b.start(),clearInterval(this.msgInterval),this.msgInterval=setInterval((function(){t.msgNew=t.$storage.getItem("msgNew")}),1e3))},methods:{init:function(){var t=this;try{plus,plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground(f["a"].themeColor),f["a"].statusBar.height=v["a"].getStatusBarHeight()+"px";var e=0,o=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){o.canBack((function(o){o.canBack?(t.$router.goBack(-1),t.$obj.scan&&t.$obj.scan.close()):(e>0&&plus.runtime.quit(),t.$createToast({txt:"再按一次退出应用!"}).show(),e++,setTimeout((function(){e=0}),2e3))})),f["a"].update&&t.isUpdate()}))}catch(n){}},isUpdate:function(){var t=this;this.update.os=plus.os.name,this.$ajax.post(this.$config.apiUrl+"index/appUpdate","os="+this.update.os).then((function(e){var o=e.data;if(0!=o.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(function(e){if(o.version==e.version)return!1;t.update.show=!0,t.update.down=!0,t.update.msg="新版本: "+o.version+"&nbsp;&nbsp;大小: "+(o.size/1024/1024).toFixed(2)+"MB",t.update.file=t.$config.baseUrl+o.file,t.update.total=o.size}))}))},updateDown:function(){var t=this;if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(f["a"].upIosUrl),setTimeout((function(){plus.runtime.quit()}),5e3);else{var e=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},(function(e,o){200==o?plus.runtime.install(e.filename,{force:!0},(function(){plus.runtime.restart()}),(function(e){t.$createToast({txt:"安装失败"}).show()})):(t.update.down=!0,t.update.msg="下载失败")}));e.start(),e.addEventListener("statechanged",(function(e,o){var n=parseInt(e.downloadedSize/t.update.total*100);t.update.loading=n+"%",t.update.msg="正在下载："+t.update.loading,n>=100&&(t.update.msg="下载完成，安装并重启")}))}}}},C=k,$=(o("034f"),o("2877")),S=Object($["a"])(C,m,y,!1,null,null,null),x=S.exports;n["default"].config.productionTip=!1,n["default"].use(h),n["default"].prototype.$ajax=l.a,n["default"].prototype.$storage=window.localStorage,n["default"].prototype.$qrcode=p.a,new n["default"]({router:c,render:function(t){return t(x)}}).$mount("#app"),document.body.ontouchstart=function(){try{"iOS"!=plus.os.name&&document.createElement("audio")}catch(t){document.createElement("audio")}}},"5faa":function(t,e,o){"use strict";var n=o("3d4d"),a=o.n(n);a.a},"85ec":function(t,e,o){},"8c89":function(t,e,o){"use strict";var n="https://api.webmis.vip/";e["a"]={title:"WebMIS",version:"v1.0.0",baseUrl:n,apiUrl:n+"api/",themeColor:"#6FB737",copy:"Copyright © WebMIS.VIP 2019",statusBar:{height:"0px",color:"#333",bgColor:"#FFF"},update:!1,upDateColor:{bg:"",logoBg:"#FFF",loading:"#FFF",loaded:"#666",copy:"#333"},upIosUrl:"itms-apps://itunes.apple.com/cn/app/tao-bao-sui-shi-sui-xiang/id387682726?mt=8",amapKey:"d956f0c3e15489a1b5bf291e5d133c8a",socketServer:"wss://webmis.vip/wss",msgRead:1e3,msgNew:3e5,msgContent:"title",msgBrowser:!1}},9060:function(t,e,o){"use strict";o("b0c0"),o("acd8"),o("ac1f"),o("841c");var n=o("2b0e"),a=o("8c89"),i=o("8f9b"),s=o.n(i),r=o("bc3a"),c=o.n(r),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notify_body",style:{backgroundColor:t.bgColor,color:t.color}},[o("div",{staticClass:"notify_title flex"},[o("div",{staticClass:"logo"}),o("h2",{staticClass:"nowrap"},[t._v(t._s(t.title))]),o("div",{staticClass:"close"})]),t.content?o("div",{staticClass:"notify_content",domProps:{innerHTML:t._s(t.content)}}):t._e()])},l=[],d={name:"Notify",props:{title:{type:String,default:"消息"},content:{type:String,default:""},bgColor:{type:String,default:"#FFF"},color:{type:String,default:"#333"}},data:function(){return{}},mounted:function(){},methods:{}},p=d,f=(o("5faa"),o("2877")),g=Object(f["a"])(p,u,l,!1,null,"840c12a2",null),h=g.exports,m={install:function(t){var e=function(t){t.style.transition="all .3s ease",t.style.transform="translate(0, 0)",t.style.opacity="1"},o=function(t,e){t.style.transition="all .3s ease",t.style.transform="translate(0, -100%)",t.style.opacity="0",setTimeout((function(){e.removeChild(t)}),300)};t.prototype.$msgNotify=function(n){var a=t.extend(h),i=new a,s=document.createElement("div");i.$mount(s),i.title=n.title||"标题",i.content=n.content||"",i.color=n.color||"#333",i.bgColor=n.bgColor||"rgba(255,255,255,.9)",n.delay=n.delay||5e3,n.onClick=n.onClick||function(){};var r=document.getElementById("notifyBody");r||(r=document.createElement("div"),r.setAttribute("id","notifyBody"),r.setAttribute("style","position: fixed; z-index: 9999; width: 100%; max-width: 360px; top: 10px; left: 0; right: 0; margin: auto;")),document.body.appendChild(r),r.appendChild(i.$el),setTimeout((function(){e(i.$el)}),300),i.$el.stime=setTimeout((function(){o(i.$el,r)}),n.delay),i.$el.onclick=function(){n.onClick(this)},i.$el.close=function(){clearTimeout(i.$el.stime),o(i.$el,r)}}}},y=m;n["default"].use(y),s.a.initAMapApiLoader({key:a["a"].amapKey,plugin:["AMap.Geolocation","PlaceSearch"],v:"1.4.15"});e["a"]={isPlus:function(t){document.addEventListener("plusready",t,!1)},getStatusBarHeight:function(){var t=0,e=/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi.exec(navigator.userAgent);return e&&e.length>=3&&(t=parseFloat(e[2])),t},notify:function(t,e,o){a["a"].msgBrowser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(o){setTimeout((function(){new Notification(t,{body:e})}),a["a"].msgRead)})),setTimeout((function(){n["default"].prototype.$msgNotify({title:t,content:e,delay:6e3,onClick:o})}),a["a"].msgRead),0!=a["a"].msgRead&&c.a.post(a["a"].apiUrl+"index/baiduToken").then((function(o){var n=document.getElementById("msg"),i="title"==a["a"].msgContent?t:e;n.src="//tsn.baidu.com/text2audio?lan=zh&ctp=1&cuid=1&tex="+i+"&tok="+o.data.token,setTimeout((function(){try{if("iOS"==plus.os.name){var t=plus.ios.importClass("AVAudioSession"),e=t.sharedInstance();e.setCategoryerror("AVAudioSessionCategoryPlayback",null),e.setActiveerror("YES",null);var o=plus.ios.importClass("AVSpeechSynthesizer"),a=plus.ios.importClass("AVSpeechUtterance"),s=plus.ios.import("AVSpeechSynthesisVoice"),r=new o,c=s.voiceWithLanguage("zh-CN"),u=a.speechUtteranceWithString(i);u.setVoice(c),r.speakUtterance(u)}else n.play()}catch(l){n.play()}}),a["a"].msgRead)}))},pay:function(t,e,o,n,a){var i="";for(var s in o)i+=s+"="+o[s]+"&";try{"alipay"==t?i+="type=app":"wxpay"==t&&(i+="type=APP"),plus.payment.getChannels((function(o){var s=null;for(var r in o)o[r].id==t&&(s=o[r]);c.a.post(e,i).then((function(t){var e=t.data;0==e.code?plus.payment.request(s,e.data,n,a):console.log(e.msg)}))}),(function(t){console.log("支付通道: "+t.message)}))}catch(r){console.log("H5方式: "+t)}},geoLocation:function(t,e){try{plus.geolocation.getCurrentPosition((function(e){var o={};o.province=e.address.province,o.city=e.address.city,o.latitude=e.coords.latitude,o.longitude=e.coords.longitude,window.localStorage.setItem("GeoLocation",JSON.stringify(o)),t(o)}),e)}catch(o){setTimeout((function(){AMap.service(["AMap.Geolocation"],(function(){var o=new AMap.Geolocation({enableHighAccuracy:!1,timeout:5e3});o.getCityInfo((function(n,a){var i={};i.province=a.province,i.city=a.city,o.getCurrentPosition((function(o,n){n&&n.position?(i.latitude=n.position.lat,i.longitude=n.position.lng,window.localStorage.setItem("GeoLocation",JSON.stringify(i)),t(i)):e(o)}))}))}))}),500)}},getAddress:function(t,e,o){setTimeout((function(){AMap.service(["AMap.PlaceSearch"],(function(){var n=window.localStorage.getItem("GeoLocation");n=n?JSON.parse(n):{city:"昆明市"};var a=new AMap.PlaceSearch({city:n.city});a.search(t,(function(t,n){n&&n.poiList?e(n.poiList.pois):o(t)}))}))}),500)},camera:function(t,e){try{var o=plus.camera.getCamera();o.captureImage((function(e){plus.io.resolveLocalFileSystemURL(e,(function(o){t(e,o)}),(function(t){console.log("读取拍照失败")}))}),e)}catch(a){var n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("style","display: none"),document.body.appendChild(n),n.click(),n.onchange=function(){t(n.files[0])}}},photo:function(t,e,o){o=o||!0;try{plus.gallery.pick((function(e){var o=e.files,n=[],a=null;for(var i in o)plus.io.resolveLocalFileSystemURL(o[i],(function(e){e.file((function(e){n.push(e),clearTimeout(a),a=setTimeout((function(){t(n)}),300)}))}),(function(t){console.log("读取文件: "+t.message)}))}),e,{filter:"image",multiple:o})}catch(a){var n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("style","display: none"),o&&n.setAttribute("multiple","multiple"),document.body.appendChild(n),n.click(),n.onchange=function(){t(n.files)}}},readerCompress:function(t,e,o){var n=this;try{var a=new plus.io.FileReader;a.readAsDataURL(t),a.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),n.compressImage(this.result,e,o)}}catch(s){var i=new FileReader;i.readAsDataURL(t),i.onloadend=function(){e.ext||("image/jpeg"==t.type?e.ext="jpg":"image/png"==t.type?e.ext="png":"image/gif"==t.type&&(e.ext="gif")),n.compressImage(this.result,e,o)}}},compressImage:function(t,e,o){var n=e.width||0,a=e.height||0,i=e.cut||!0,s=e.quality||.8,r=e.ext||"jpg",c={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},u=1,l=1,d=0,p=0,f=1,g=u/l,h=document.createElement("canvas"),m=h.getContext("2d"),y=new Image;y.src=t,y.onload=function(){g=this.width/this.height,n>0&&0==a?(u=n<this.width?n:this.width,l=n<this.width?Math.round(n/g):Math.round(this.width/g),n=u,a=l):0==n&&a>0?(u=a<this.height?Math.round(a*g):Math.round(this.height*g),l=a<this.height?a:this.height,n=u,a=l):0==n&&0==a?(u=this.width,l=this.height,n=u,a=l):(f=n/a,g>f?n<this.width?(u=i?Math.round(a*g):n,l=i?a:Math.round(n/g)):(u=i?Math.round(this.height*g):this.width,l=i?this.height:Math.round(this.width/g)):a<this.height?(u=i?n:Math.round(a*g),l=i?Math.round(n/g):a):(u=i?this.width:Math.round(this.height*g),l=i?Math.round(this.width/g):this.height)),h.width=n,h.height=a,d=Math.round(n-u)/2,p=Math.round(a-l)/2,m.drawImage(this,d,p,u,l);var t=h.toDataURL(c[r],s);o(t)}},video:function(t,e){try{var o=plus.camera.getCamera();o.startVideoCapture((function(e){plus.io.resolveLocalFileSystemURL(e,(function(o){t(e,o)}),(function(t){console.log("读取录像失败")}))}),e)}catch(n){console.log("录像")}},audio:function(t,e,o){try{t.record({filename:"_doc/audio/"},(function(t){plus.io.resolveLocalFileSystemURL(t,(function(o){e(t,o)}),(function(t){console.log("读取音频失败")}))}),o)}catch(n){console.log("录音")}},uploader:function(t,e,o,n){try{for(var a=plus.uploader.createUpload(t,{method:"POST"},o),i=0;i<e.length;i++)"file"==e[i].type?a.addFile(e[i].val,{key:e[i].key}):"data"==e[i].type&&a.addData(e[i].key,e[i].val);a.addEventListener("statechanged",n,!1),a.start()}catch(s){console.log("上传文件")}},cacheClear:function(){try{plus.io.resolveLocalFileSystemURL("_doc/",(function(t){return t.removeRecursively()}),(function(t){console.log("清理缓存失败")}))}catch(t){console.log("清理缓存")}}}}});
//# sourceMappingURL=app.d4047c41.js.map