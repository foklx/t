(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{290:function(n){n.exports=JSON.parse('[{"file":"/audio/我幹你娘.mp3","name":"1","id":"0"},{"file":"/audio/機掰.mp3","name":"2","id":"1"}]')},291:function(n,t,o){var map={"./assets/audio/我幹你娘.mp3":292,"./assets/audio/機掰.mp3":293,"./assets/audio/賣靠北.mp3":294};function e(n){var t=c(n);return o(t)}function c(n){if(!o.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}e.keys=function(){return Object.keys(map)},e.resolve=c,n.exports=e,e.id=291},292:function(n,t,o){n.exports=o.p+"assets/audio/我幹你娘.mp3"},293:function(n,t,o){n.exports=o.p+"assets/audio/機掰.mp3"},294:function(n,t,o){n.exports=o.p+"assets/audio/賣靠北.mp3"},295:function(n,t,o){"use strict";o.r(t);o(22),o(37),o(154);var e,c=o(290),d=-1,r=!1,l={data:function(){return{audiolist:[],sounds:[]}},methods:{playsound:function(){var n=this;if(this.audiolist.length>=1){d=0,r=!0;var audio=new Audio(this.audiolist[d].file);audio.play(),audio.onended=function(){d++,r&&(d<n.audiolist.length&&r?(audio.src=n.audiolist[d].file,audio.play()):(d=-1,r=!1))}}},dbclick:function(n){clearTimeout(e),this.audiolist.push({file:this.sounds[n].file,name:this.sounds[n].name,id:this.sounds[n].id})},sclick:function(n){var t=this;clearTimeout(e),e=setTimeout((function(){!0?new Audio(t.sounds[n].file).play():!1}),500)},removebtn:function(n){r||this.audiolist.splice(n,1)},stopsound:function(){r=!1,d=-1},clear:function(){for(;this.audiolist.length;)this.audiolist.pop()}},created:function(){for(var data=c,n=0;n<data.length;n++){var audio=new Audio;audio.src=o(291)("./assets"+data[n].file),this.sounds.push({file:audio.src,name:data[n].name,id:data[n].id})}}},f=o(72),component=Object(f.a)(l,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("div",n._l(n.audiolist,(function(t,e){return o("button",{key:e,on:{click:function(t){return n.removebtn(e)}}},[n._v("\n      "+n._s(n.audiolist[e].name)+"\n    ")])})),0),n._v(" "),o("hr"),n._v(" "),o("div",[o("button",{on:{click:n.playsound}},[n._v("播放")]),n._v(" "),o("button",{on:{click:n.stopsound}},[n._v("停止")]),n._v(" "),o("button",{on:{click:n.clear}},[n._v("清空")])]),n._v(" "),o("hr"),n._v(" "),n._l(n.sounds,(function(t,e){return o("div",{key:e},[o("button",{on:{dblclick:function(t){return n.dbclick(e)},click:function(o){return n.sclick(t.id)}}},[n._v("\n      "+n._s(t.name)+"\n    ")])])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);