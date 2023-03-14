/*! For license information please see jquery.ui.map.js.LICENSE.txt */
!function(t){t.a=function(e,n){var i=e.split(".")[0];e=e.split(".")[1],t[i]=t[i]||{},t[i][e]=function(t,e){arguments.length&&this._setup(t,e)},t[i][e].prototype=t.extend({namespace:i,pluginName:e},n),t.fn[e]=function(n){var s="string"==typeof n,r=Array.prototype.slice.call(arguments,1),a=this;return s&&"_"===n.substring(0,1)||this.each((function(){var o=t.data(this,e);o||(o=t.data(this,e,new t[i][e](n,this))),s&&(a=o[n].apply(o,r))})),a}},t.a("ui.gmap",{options:{mapTypeId:"roadmap",zoom:5},option:function(t,e){return e?(this.options[t]=e,this.get("map").set(t,e),this):this.options[t]},_setup:function(t,e){this.el=e,t=t||{},jQuery.extend(this.options,t,{center:this._latLng(t.center)}),this._create(),this._init&&this._init()},_create:function(){var e=this;this.instance={map:new google.maps.Map(e.el,e.options),markers:[],overlays:[],services:[]},google.maps.event.addListenerOnce(e.instance.map,"bounds_changed",(function(){t(e.el).trigger("init",e.instance.map)})),e._call(e.options.callback,e.instance.map)},addBounds:function(t){var e=this.get("bounds",new google.maps.LatLngBounds);return e.extend(this._latLng(t)),this.get("map").fitBounds(e),this},inViewport:function(t){var e=this.get("map").getBounds();return!!e&&e.contains(t.getPosition())},addControl:function(t,e){return this.get("map").controls[e].push(this._unwrap(t)),this},addMarker:function(e,n){e.map=this.get("map"),e.position=this._latLng(e.position);var i=new(e.marker||google.maps.Marker)(e),s=this.get("markers");return i.id?s[i.id]=i:s.push(i),i.bounds&&this.addBounds(i.getPosition()),this._call(n,e.map,i),t(i)},clear:function(t){return this._c(this.get(t)),this.set(t,[]),this},_c:function(t){for(var e in t)t.hasOwnProperty(e)&&(t[e]instanceof google.maps.MVCObject?(google.maps.event.clearInstanceListeners(t[e]),t[e].setMap&&t[e].setMap(null)):t[e]instanceof Array&&this._c(t[e]),t[e]=null)},find:function(e,n,i){var s=this.get(e);for(var r in n.value=t.isArray(n.value)?n.value:[n.value],s)if(s.hasOwnProperty(r)){var a=!1;for(var o in n.value)if(t.inArray(n.value[o],s[r][n.property])>-1)a=!0;else if(n.operator&&"AND"===n.operator){a=!1;break}i(s[r],a)}return this},get:function(t,e){var n=this.instance;if(!n[t]){if(t.indexOf(">")>-1){for(var i=t.replace(/ /g,"").split(">"),s=0;s<i.length;s++){if(!n[i[s]]){if(!e)return null;n[i[s]]=s+1<i.length?[]:e}n=n[i[s]]}return n}e&&!n[t]&&this.set(t,e)}return n[t]},openInfoWindow:function(t,e,n){var i=this.get("iw",t.infoWindow||new google.maps.InfoWindow);return i.setOptions(t),i.open(this.get("map"),this._unwrap(e)),this._call(n,i),this},closeInfoWindow:function(){return null!=this.get("iw")&&this.get("iw").close(),this},set:function(t,e){return this.instance[t]=e,this},refresh:function(){var e=this.get("map"),n=e.getCenter();return t(e).triggerEvent("resize"),e.setCenter(n),this},destroy:function(){this.clear("markers").clear("services").clear("overlays")._c(this.instance),jQuery.removeData(this.el,this.name)},_call:function(e){e&&t.isFunction(e)&&e.apply(this,Array.prototype.slice.call(arguments,1))},_latLng:function(t){return t?t instanceof google.maps.LatLng?t:(t=t.replace(/ /g,"").split(","),new google.maps.LatLng(t[0],t[1])):new google.maps.LatLng(0,0)},_unwrap:function(e){return e?e instanceof jQuery?e[0]:e instanceof Object?e:t("#"+e)[0]:null}}),jQuery.fn.extend({triggerEvent:function(t){return google.maps.event.trigger(this[0],t),this},addEventListener:function(t,e,n){return google.maps&&this[0]instanceof google.maps.MVCObject?google.maps.event.addListener(this[0],t,e):n?this.bind(t,e,n):this.bind(t,e),this}}),jQuery.each("click rightclick dblclick mouseover mouseout drag dragend".split(" "),(function(t,e){jQuery.fn[e]=function(t,n){return this.addEventListener(e,t,n)}}))}(jQuery);