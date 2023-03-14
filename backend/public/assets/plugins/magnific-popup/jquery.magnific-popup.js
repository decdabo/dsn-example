/*! For license information please see jquery.magnific-popup.js.LICENSE.txt */
!function(e){var t,i,n,o,a,r,s,l="Close",c="MarkupParse",p="Open",d="Change",u=".mfp",f="mfp-ready",m="mfp-prevent-close",g=function(){},h=!!window.jQuery,v=e(window),C=function(e,i){t.ev.on("mfp"+e+u,i)},y=function(t,i,n,o){var a=document.createElement("div");return a.className="mfp-"+t,n&&(a.innerHTML=n),o?i&&i.appendChild(a):(a=e(a),i&&a.appendTo(i)),a},w=function(i,n){t.ev.triggerHandler("mfp"+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},b=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},I=function(){e.magnificPopup.instance||((t=new g).init(),e.magnificPopup.instance=t)};g.prototype={constructor:g,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(i){var a;if(n||(n=e(document.body)),!1===i.isObj){t.items=i.items.toArray(),t.index=0;var s,l=i.items;for(a=0;a<l.length;a++)if((s=l[a]).parsed&&(s=s.el[0]),s===i.el[0]){t.index=a;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(!t.isOpen){t.types=[],r="",i.mainEl&&i.mainEl.length?t.ev=i.mainEl.eq(0):t.ev=o,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=y("bg").on("click.mfp",(function(){t.close()})),t.wrap=y("wrap").attr("tabindex",-1).on("click.mfp",(function(e){t._checkIfClose(e.target)&&t.close()})),t.container=y("container",t.wrap)),t.contentContainer=y("content"),t.st.preloader&&(t.preloader=y("preloader",t.container,t.st.tLoading));var d=e.magnificPopup.modules;for(a=0;a<d.length;a++){var u=d[a];u=u.charAt(0).toUpperCase()+u.slice(1),t["init"+u].call(t)}w("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(C(c,(function(e,t,i,n){i.close_replaceWith=b(n.type)})),r+=" mfp-close-btn-in"):t.wrap.append(b())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:v.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup.mfp",(function(e){27===e.keyCode&&t.close()})),v.on("resize.mfp",(function(){t.updateSize()})),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var m=t.wH=v.height(),g={};if(t.fixedContentPos&&t._hasScrollBar(m)){var h=t._getScrollbarSize();h&&(g.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var I=t.st.mainClass;return t.isIE7&&(I+=" mfp-ie7"),I&&t._addClassToMFP(I),t.updateItemHTML(),w("BuildControls"),e("html").css(g),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||n),t._lastFocusedEl=document.activeElement,setTimeout((function(){t.content?(t._addClassToMFP(f),t._setFocus()):t.bgOverlay.addClass(f),o.on("focusin.mfp",t._onFocusIn)}),16),t.isOpen=!0,t.updateSize(m),w(p),i}t.updateItemHTML()},close:function(){t.isOpen&&(w("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout((function(){t._close()}),t.st.removalDelay)):t._close())},_close:function(){w(l);var i="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var n={marginRight:""};t.isIE7?e("body, html").css("overflow",""):n.overflow="",e("html").css(n)}o.off("keyup.mfp focusin.mfp"),t.ev.off(u),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,w("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||v.height();t.fixedContentPos||t.wrap.css("height",t.wH),w("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(w("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var o=!!t.st[n]&&t.st[n].markup;w("FirstMarkupParse",o),t.currTemplate[n]=!o||e(o)}a&&a!==i.type&&t.container.removeClass("mfp-"+a+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,w(d,i),a=i.type,t.container.prepend(t.contentContainer),w("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(b()):t.content=e:t.content="",w("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n,o=t.items[i];if(o.tagName?o={el:e(o)}:(n=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){n=a[r];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=n||t.st.type||"inline",o.index=i,o.parsed=!0,t.items[i]=o,w("ElementParse",o),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var o="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(o).on(o,n)):(i.isObj=!1,i.delegate?e.off(o).on(o,i.delegate,n):(i.items=e,e.off(o).on(o,n)))},_openClick:function(i,n,o){if((void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick)||2!==i.which&&!i.ctrlKey&&!i.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(v.width()<a)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),o.el=e(i.mfpEl),o.delegate&&(o.items=n.find(o.delegate)),t.open(o)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var o={status:e,text:n};w("UpdateStatus",o),e=o.status,n=o.text,t.preloader.html(n),t.preloader.find("a").on("click",(function(e){e.stopImmediatePropagation()})),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass(m)){var n=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(n&&o)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(o&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||v.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return t._setFocus(),!1},_parseMarkup:function(t,i,n){var o;n.data&&(i=e.extend(n.data,i)),w(c,[t,i,n]),e.each(i,(function(e,i){if(void 0===i||!1===i)return!0;if((o=e.split("_")).length>1){var n=t.find(".mfp-"+o[0]);if(n.length>0){var a=o[1];"replaceWith"===a?n[0]!==i[0]&&n.replaceWith(i):"img"===a?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(o[1],i)}}else t.find(".mfp-"+e).html(i)}))},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:g.prototype,modules:[],open:function(t,i){return I(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){I();var n=e(this);if("string"==typeof i)if("open"===i){var o,a=h?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=n,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},n,a)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),h?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var x,k,T,E="inline",_=function(){T&&(k.after(T.addClass(x)).detach(),T=null)};e.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(E),C("Close.inline",(function(){_()}))},getInline:function(i,n){if(_(),i.src){var o=t.st.inline,a=e(i.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(k||(x=o.hiddenClass,k=y(x),x="mfp-"+x),T=a.after(k).detach().removeClass(x)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return i.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var S,P="ajax",z=function(){S&&n.removeClass(S)},O=function(){z(),t.req&&t.req.abort()};e.magnificPopup.registerModule(P,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(P),S=t.st.ajax.cursor,C("Close.ajax",O),C("BeforeChange.ajax",O)},getAjax:function(i){S&&n.addClass(S),t.updateStatus("loading");var o=e.extend({url:i.src,success:function(n,o,a){var r={data:n,xhr:a};w("ParseAjax",r),t.appendContent(e(r.data),P),i.finished=!0,z(),t._setFocus(),setTimeout((function(){t.wrap.addClass(f)}),16),t.updateStatus("ready"),w("AjaxContentAdded")},error:function(){z(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var M,B,F=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image;t.types.push("image"),C("Open.image",(function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)})),C("Close.image",(function(){e.cursor&&n.removeClass(e.cursor),v.off("resize.mfp")})),C("Resize.image",t.resizeImage),t.isLowIE&&C("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,M&&clearInterval(M),e.isCheckingImgSize=!1,w("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],o=function(a){M&&clearInterval(M),M=setInterval((function(){n.naturalWidth>0?t._onImageHasSize(e):(i>200&&clearInterval(M),3==++i?o(10):40===i?o(50):100===i&&o(500))}),a)};o(1)},getImage:function(i,n){var o=0,a=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,w("ImageLoadComplete")):++o<200?setTimeout(a,100):r())},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return t._parseMarkup(n,{title:F(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(M&&clearInterval(M),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}}),e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom;if(i.enabled&&t.supportsTransition){var n,o,a=i.duration,r=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+i.duration/1e3+"s "+i.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=n,t.css(o),t},s=function(){t.content.css("visibility","visible")};C("BuildControls.zoom",(function(){if(t._allowZoom()){if(clearTimeout(n),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void s();(o=r(e)).css(t._getOffset()),t.wrap.append(o),n=setTimeout((function(){o.css(t._getOffset(!0)),n=setTimeout((function(){s(),setTimeout((function(){o.remove(),e=o=null,w("ZoomAnimationEnded")}),16)}),a)}),16)}})),C("BeforeClose.zoom",(function(){if(t._allowZoom()){if(clearTimeout(n),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;o=r(e)}o.css(t._getOffset(!0)),t.wrap.append(o),t.content.css("visibility","hidden"),setTimeout((function(){o.css(t._getOffset())}),16)}})),C("Close.zoom",(function(){t._allowZoom()&&(s(),o&&o.remove(),e=null)}))}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var n,o=(n=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(n.css("padding-top"),10),r=parseInt(n.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:n.width(),height:(h?n.innerHeight():n[0].offsetHeight)-r-a};return void 0===B&&(B=void 0!==document.createElement("p").style.MozTransform),B?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var H="iframe",L=function(e){if(t.currTemplate.iframe){var i=t.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(H,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(H),C("BeforeChange",(function(e,t,i){t!==i&&(t===H?L():i===H&&L(!0))})),C("Close.iframe",(function(){L()}))},getIframe:function(i,n){var o=i.src,a=t.st.iframe;e.each(a.patterns,(function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1}));var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var A=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},j=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);if(t.direction=!0,!i||!i.enabled)return!1;r+=" mfp-gallery",C(p+n,(function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",(function(){if(t.items.length>1)return t.next(),!1})),o.on("keydown"+n,(function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()}))})),C("UpdateStatus"+n,(function(e,i){i.text&&(i.text=j(i.text,t.currItem.index,t.items.length))})),C(c+n,(function(e,n,o,a){var r=t.items.length;o.counter=r>1?j(i.tCounter,a.index,r):""})),C("BuildControls"+n,(function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,o=t.arrowLeft=e(n.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(m),r=t.arrowRight=e(n.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(m),s=a?"mfpFastClick":"click";o[s]((function(){t.prev()})),r[s]((function(){t.next()})),t.isIE7&&(y("b",o[0],!1,!0),y("a",o[0],!1,!0),y("b",r[0],!1,!0),y("a",r[0],!1,!0)),t.container.append(o.add(r))}})),C(d+n,(function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout((function(){t.preloadNearbyImages(),t._preloadTimeout=null}),16)})),C(l+n,(function(){o.off(n),t.wrap.off("click"+n),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=A(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=A(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),o=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?o:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=A(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),w("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",(function(){n.hasSize=!0})).on("error.mfploader",(function(){n.hasSize=!0,n.loadError=!0,w("LazyLoadError",n)})).attr("src",n.src)),n.preloaded=!0}}}});var N,W,R;e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,(function(e){return"@2x"+e}))},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(C("ImageHasSize.retina",(function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})})),C("ElementParse.retina",(function(t,n){n.src=e.replaceSrc(n,i)})))}}}}),N="ontouchstart"in window,W=function(){v.off("touchmove"+R+" touchend"+R)},R=".mfpFastClick",e.fn.mfpFastClick=function(t){return e(this).each((function(){var i,n,o,a,r,s,l,c=e(this);N&&c.on("touchstart"+R,(function(e){r=!1,l=1,s=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],o=s.clientX,a=s.clientY,v.on("touchmove"+R,(function(e){s=e.originalEvent?e.originalEvent.touches:e.touches,l=s.length,s=s[0],(Math.abs(s.clientX-o)>10||Math.abs(s.clientY-a)>10)&&(r=!0,W())})).on("touchend"+R,(function(e){W(),r||l>1||(i=!0,e.preventDefault(),clearTimeout(n),n=setTimeout((function(){i=!1}),1e3),t())}))})),c.on("click"+R,(function(){i||t()}))}))},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+R+" click"+R),N&&v.off("touchmove"+R+" touchend"+R)},I()}(window.jQuery||window.Zepto);