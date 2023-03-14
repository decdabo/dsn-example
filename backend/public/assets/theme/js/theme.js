!function(e){"use strict";function a(a,t){a>t?e(".menu-area").addClass("nav-fixed"):e(".menu-area").removeClass("nav-fixed nav-white-bg"),a>e(".menu-area").outerHeight()&&e(".menu-area").addClass("nav-white-bg")}function t(){e(".parallax-bg").each((function(){e(this).parallax("50%",.3)}))}e(document).ready((function(){var n;e('[data-toggle="tooltip"]').tooltip(),(n=e(window).height())>600&&!e(".main-header").hasClass("no-window")&&e(".main-header, .header-content-fixed").height(n),t(),function(){if(e(".main-header").length>0){var t=e(".main-header").offset().top+e(".main-header").height();e(window).on("scroll",(function(){a(Math.round(e(window).scrollTop())+e(".menu-area").outerHeight(),t)}))}}(),e("#hireme-tab").click((function(){e('#myTab a[href="#tab1"]').tab("show")})),e("#contact-tab").click((function(){e('#myTab a[href="#tab0"]').tab("show")})),e(".map-area").click((function(){e(this).addClass("show")})),e(".back-to-top").click((function(){return e("html, body").stop().animate({scrollTop:0},1500,"easeInOutExpo",(function(){})),!1})),e(".link-inpage").click((function(a){var t=this.hash,n=e(t);return e("html, body").stop().animate({scrollTop:n.offset().top-(e(".menu-area").outerHeight()-1)},1500,"easeInOutExpo",(function(){})),!1})),e(".chart").easyPieChart({easing:"easeOutBounce",barColor:"#1e1e1e",trackColor:"#323232",scaleColor:"#fff",onStep:function(a,t,n){e(this.el).find(".percent").text(Math.round(n))}}),e(".list-work").magnificPopup({delegate:"a.galery-item",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e("#typed").typed({strings:["Wordpress","Apesta"],typeSpeed:100,startDelay:100,backSpeed:10,backDelay:1e3,loop:!0,loopCount:!1,showCursor:!0,cursorChar:".",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}),e(document).on("change",".btn-file :file",(function(){var a=e(this),t=a.get(0).files?a.get(0).files.length:1,n=a.val().replace(/\\/g,"/").replace(/.*\//,"");a.trigger("fileselect",[t,n])})),e(".btn-file :file").on("fileselect",(function(a,t,n){var i=e(this).parents(".input-group").find(":text"),o=t>1?t+" files selected":n;i.length?i.val(o):o&&console.log(o)})),e("#map-contact").gmap({center:"-6.600000, 106.800000",zoom:15,scrollwheel:!1,disableDefaultUI:!1,callback:function(){var a=this;a.addMarker({position:this.get("map").getCenter(),icon:"assets/theme/images/marker.png"}).click((function(){a.openInfoWindow({content:e(".map-contact-body").html()},this)}))}}),e("[data-holdwidth]").each((function(a,t){var n=e(t).data("holdwidth");e(t).css("width",n)})),e("[data-holdbg]").each((function(a,t){var n=e(t).data("holdbg");e(t).css("background-image","url("+n+")")})),e("#mycaptcha").simpleCaptcha({allowRefresh:!1,scriptPath:"assets/plugins/simpleCaptcha/simpleCaptcha.php"}),e("#mycaptcha").bind("ready.simpleCaptcha",(function(a){e("#captcha1,#captcha2").html(e("#mycaptcha-wrap").html()).find(".mycaptcha1").removeAttr("id"),e("#captcha1,#captcha2").find(".captchaImages img.captchaImage").click((function(){e("#captcha1,#captcha2").find(".captchaImages img.captchaImage").removeClass("simpleCaptchaSelected"),e(this).addClass("simpleCaptchaSelected"),e(".simpleCaptchaInput").val(e(this).data("hash"))}))})),e("#contactForm, #hireForm").length>0&&(e("#contactForm, #hireForm").validate(),e("#contactForm, #hireForm").submit((function(){var a=e(this);if(a.valid()){var t=e(this).serialize();e.ajax({type:"POST",data:t,url:"php/sending_mail.php",beforeSend:function(){a.find(".preload-submit").removeClass("hidden"),a.find(".message-submit").addClass("hidden")},success:function(e){e=jQuery.parseJSON(e),setTimeout((function(){a.find(".preload-submit").addClass("hidden"),null===e.error?(a.trigger("reset"),a.find(".message-submit").html(e.msg).removeClass("hidden")):a.find(".message-submit").html(e.error).removeClass("hidden")}),1e3)}})}return!1}))),function(){if(e("#upload-btn").length>0){var a=document.getElementById("upload-btn"),t=document.getElementById("pic-progress-wrap"),n=document.getElementById("picbox"),i=document.getElementById("errormsg");new ss.SimpleUpload({button:a,url:"php/upload.php",progressUrl:"assets/plugins/Simple-Ajax-Uploader/extras/uploadProgress.php",name:"fileatt",multiple:!1,maxUploads:2,maxSize:200,queue:!1,allowedExtensions:["pdf"],debug:!0,hoverClass:"btn-hover",focusClass:"active",disabledClass:"disabled",responseType:"json",onSubmit:function(e,a){var n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),l=this;n.className="prog",s.className="size",o.className="progress",r.className="bar",o.appendChild(r),n.appendChild(s),n.appendChild(o),t.appendChild(n),l.setProgressBar(r),l.setProgressContainer(n),l.setFileSizeBox(s),i.innerHTML=""},onSizeError:function(e,a){i.innerHTML="Max size 200K"},onExtError:function(e,a){i.innerHTML="File extension not permitted"},onError:function(e,a,t,n,o,r){i.innerHTML=n},onComplete:function(a,t){t||(i.innerHTML="Unable to upload file"),!0===t.success?(n.innerHTML='<i class="fa fa-file-pdf-o"></i> &nbsp;'+t.file,e("#file-att").val(t.file)):t.msg?i.innerHTML=t.msg:i.innerHTML="Unable to upload file"}})}}()})),Pace.on("hide",(function(){e(".wrapper").css("visibility","visible").animate({opacity:1},2e3,(function(){!function(){if(e(".main-header").length>0){var t=e(".main-header").offset().top+e(".main-header").height();a(Math.round(e(window).scrollTop())+e(".menu-area").outerHeight(),t)}}()})),window.location.hash&&e('.link-inpage[href="'+window.location.hash+'"]').first().trigger("click")})),e(window).resize((function(){t()}))}(jQuery);