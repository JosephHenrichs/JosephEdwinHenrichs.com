

/* !!!!!!!!!!!!!!!!!!!! mail-chimp-script !!!!!!!!!!!!!!!!!!!!! */ 
jQuery(document).ready(function (event) {
	"use strict";

	jQuery('.ekit-mailChimpForm').on('submit', function (e) {
		e.preventDefault();
		let mailForm = jQuery(this).serialize(),
			listed = jQuery(this).attr('data-listed'),
			message = jQuery(this).attr('data-success-message'),
			messageBox = jQuery(this).children('.ekit-mail-message');

		jQuery.ajax({
			data: mailForm,
			type: 'get',
			url: ekit_site_url.siteurl + '/wp-json/elementskit/v1/widget/mailchimp/sendmail/?listed=' + listed,
			success: function (response) {
				messageBox.show();
				if (response.error.length > 0) {
					messageBox.removeClass('error').html('Found error : ' + response.error).addClass('error');
					return;
				}
				var obj = JSON.parse(response.success.body);
				if (obj.status == 'subscribed') {
					messageBox.removeClass('success').html(message).addClass('success');
					return;
				}
				messageBox.html(obj.title);
			}
		});
	});

});

/* !!!!!!!!!!!!!!!!!!!! select2 !!!!!!!!!!!!!!!!!!!!! */ 
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});

/* !!!!!!!!!!!!!!!!!!!! beautiful-taxonomy-filters !!!!!!!!!!!!!!!!!!!!! */ 
(function( $ ) {
	'use strict';

	/**
	 * Variables used by the AJAX call
	 */
	var xhr;
    var active = false;
    var timer;


	/**
	 * Old-timer function used by select2 to match by characters in their order of appearance (or whatever).
	 */
	function matchStart (term, text) {
		if (text.toUpperCase().indexOf(term.toUpperCase()) === 0) {
			return true;
		}
		return false;
	}


	/**
	 * Lets select2 all night long
	 */
	function create_select2_dropdown( select_el ){

		var args = {
			allowClear: btf_localization.allow_clear,
			syncCssClasses: true,
			minimumResultsForSearch: parseInt(btf_localization.min_search)
		};

		if( btf_localization.show_description == '1' ){
			args.templateResult = formatResult;
			args.templateSelection = formatSelection;
		}

		/**
		 * Support language
		 */
		if( btf_localization.language !== '' ) {
			args.language = btf_localization.language;
		}

		/**
		 * Support RTL
		 */
		if( btf_localization.rtl == '1' ) {
			args.dir = 'rtl';
		}

		var select2;
		if ( btf_localization.disable_fuzzy == '1' ) {
			$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
				args.matcher = oldMatcher(matchStart);
				if ( typeof select_el !== 'undefined' ) {
					select2 = select_el.select2(args);
				}else{
					select2 = $('.beautiful-taxonomy-filters-select').select2(args);
				}
			});
		} else {

			if ( typeof select_el !== 'undefined' ) {
				select2 = select_el.select2(args);
			}else{
				select2 = $('.beautiful-taxonomy-filters-select').select2(args);
			}

		}

	}


	/**
	 * Format the results of select2
	 *
	 */
	function formatResult (term) {
		if (!term.id ){ return term.text; }

		var new_term = term.text;
		if( term.text.indexOf(":.:") !== -1) {
			new_term = new_term.replace(':.:', ' <br><span class="term-description">');
			new_term = new_term.replace(':-:', '</span>');

		}

		var $term = $(
			'<span class="' + term.element.className + '">' + new_term + '</span>'
		);
		return $term;

	}


	/**
	 * Format the selection of select2
	 *
	 */
	function formatSelection (term) {


		if (!term.id || term.text.indexOf(":.:") === -1) { return term.text; }

		//run a regexp on the text to find :.:<any characters:-: and then replace it
		var new_term = term.text;
		var re = /(:\.:[\s\S]*?:-:)/;
		var reg_results = re.exec(new_term);
		new_term = new_term.replace(reg_results[0], '');
		var $term = $(
			'<span>' + new_term + '</span>'
		);
		return $term;
	}

	/**
	 * Run the AJAX update function to make terms conditional.
	 *
	 * @param el	jQuery object of the select that changed.
	 */
	function conditional_terms_ajax_new( el ){

		/**
		 * If there's already an active AJAX request kill it.
		 */
		if( active ) {
			xhr.abort();
		}

		/**
		 * Show loaders and disable selects if the response takes more than 1 second.
		 */
		if( timer ){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
        	form.find('.beautiful-taxonomy-filters-loader').addClass('active');
        	form.find('select.beautiful-taxonomy-filters-select').prop('disabled', true);
        	form.find('.beautiful-taxonomy-filters-button').prop('disabled', true);
        }, 800);


		/**
		 * Get general options
		 */
		var form = el.closest('#beautiful-taxonomy-filters-form'),
			nonce = el.data('nonce'),
			posttype = $('input[name="post_type"]').val(),
			selects = [],
			taxonomies = [];

		/**
		 * Get values from all selects
		 */
		var filtered_taxonomies = [];
		form.find('select.beautiful-taxonomy-filters-select').each(function(index){
			var sel = $(this),
				taxonomy = sel.data('taxonomy'),
				val = sel.val();

			if( val === '' ){
				val = 0;
			}

			selects.push({
				taxonomy: sel.data('taxonomy'),
				term: val,
			});

			taxonomies.push( sel.data('taxonomy') );

			if ( val) {
				filtered_taxonomies.push( sel.data('taxonomy') );
			}

		});

		/**
		 * Run our AJAX
		 */
		active = true;
		xhr = $.ajax({
			type: 'post',
			dataType: 'json',
			url: btf_localization.ajaxurl,
			data: {
				action: 'update_filters_callback',
				selects: selects,
				posttype: posttype,
				nonce: nonce,
				taxonomies: taxonomies
			},
			success: function( response ){

				/**
				 * Make sure all dropdowns are enabled and loaders are hidden
				 */
				if( timer ){
					clearTimeout(timer);
				}
				form.find('select.beautiful-taxonomy-filters-select').prop( 'disabled', false );
				form.find('.beautiful-taxonomy-filters-loader').removeClass('active');
				form.find('.beautiful-taxonomy-filters-button').prop('disabled', false);

				/**
				 * Lets get cracking on hiding options
				 */
				 if( Object.keys(response).length > 0 ){
 					$.each(response, function(taxonomy, terms) {
						var select_element = form.find('select.beautiful-taxonomy-filters-select[data-taxonomy="' + taxonomy + '"]');

						// Let's first check if we've only filtered one select. If so, we should not disabled any of that's dropdowns so it's easier to switch.
						if ( 1 === filtered_taxonomies.length && taxonomy === filtered_taxonomies[0] ) {
							return;
						}

						// First we disable all options.
						var options = select_element.find('option').prop('disabled', true);

						// Not for the default value.. that dude wants to live.
						select_element.find('option[value="0"], option[value=""]').prop('disabled', false);

						// Then we loop through all fetched terms and enable them.
						for ( var i = 0; i < terms.length; i++ ) {
							var term = terms[i];
							var text = terms[i].term_name;
							if ( btf_localization.show_count == 1 ) {
								text += ' (' + terms[i].term_count + ')';
							}
							var option = select_element.find('option[value="' + terms[i].term_id + '"]').prop('disabled', false).text( text );
						}

						// If select2 is being used we need to destroy the instance and run a new one.
						if( btf_localization.disable_select2 != '1' ){
							select_element.select2('destroy');
							create_select2_dropdown(select_element);
						}

					});
				}

			},
			error: function(){
				/**
				 * Make sure all dropdowns are enabled and loaders are hidden
				 */
				if( timer ){
					clearTimeout(timer);
				}
				form.find('select.beautiful-taxonomy-filters-select').prop( 'disabled', false );
				form.find('.beautiful-taxonomy-filters-loader').removeClass('active');
				form.find('.beautiful-taxonomy-filters-button').prop('disabled', false);

			},
			complete: function(){
				/**
				 * Regardless of success/error we are done. Set active to false.
				 */
				active = false;
			}
		});

	}


	/**
	 * Run the AJAX update function to make terms conditional.
	 *
	 * @param el	jQuery object of the select that changed.
	 */
	function conditional_terms_ajax( el ){

		/**
		 * If there's already an active AJAX request kill it.
		 */
		if( active ) {
			xhr.abort();
		}

		/**
		 * Show loaders and disable selects if the response takes more than 1 second.
		 */
		if( timer ){
			clearTimeout(timer);
		}
		timer = setTimeout(function(){
        	form.find('.beautiful-taxonomy-filters-loader').addClass('active');
        	form.find('select.beautiful-taxonomy-filters-select').prop('disabled', true);
        	form.find('.beautiful-taxonomy-filters-button').prop('disabled', true);
        }, 800);


		/**
		 * Get general options
		 */
		var form = el.closest('#beautiful-taxonomy-filters-form'),
			nonce = el.data('nonce'),
			posttype = $('input[name="post_type"]').val(),
			current_taxonomy = el.data('taxonomy'),
			selects = [];

		/**
		 * Get values from all selects
		 */
		form.find('select.beautiful-taxonomy-filters-select').each(function(index){
			var sel = $(this),
				taxonomy = sel.data('taxonomy'),
				val = sel.val();

			if( val === '' ){
				val = 0;
			}

			selects.push({
				taxonomy: sel.data('taxonomy'),
				term: val,
			});

		});

		/**
		 * Run our AJAX
		 */
		active = true;
		xhr = $.ajax({
			type: 'post',
			dataType: 'json',
			url: btf_localization.ajaxurl,
			data: {
				action: 'update_filters_callback',
				selects: selects,
				posttype: posttype,
				current_taxonomy: current_taxonomy,
				nonce: nonce,
			},
			success: function( response ){

				/**
				 * Make sure all dropdowns are enabled and loaders are hidden
				 */
				if( timer ){
					clearTimeout(timer);
				}
				form.find('select.beautiful-taxonomy-filters-select').prop( 'disabled', false );
				form.find('.beautiful-taxonomy-filters-loader').removeClass('active');
				form.find('.beautiful-taxonomy-filters-button').prop('disabled', false);

				/**
				 * Lets get cracking on hiding options
				 */
				if( Object.keys(response.taxonomies).length > 0 ){

					$.each(response.taxonomies, function(taxonomy, terms){
						var select_element = form.find('select.beautiful-taxonomy-filters-select[data-taxonomy="' + taxonomy + '"]');
						select_element.find('option').each(function(){
							var option = $(this),
								val = option.val(),
								option_text = option.text();

							/**
							 * empty or 0 is probably an "all" option and we should leave these alone!
							 * also.. leave britney alone!
							 */
							if( val === '' || val === 0 || val == '0' ){
								return true;

							}

							if( $.inArray( val, terms ) === -1 ){
								option.prop('disabled', true);

							} else {
								option.prop('disabled', false);

							}
						});

						/**
						 * If select2 is being used we need to destroy the instance and run a new one.
						 */
						if( btf_localization.disable_select2 != '1' ){
							var select_el = form.find('select.beautiful-taxonomy-filters-select[data-taxonomy="' + taxonomy + '"]');
							select_el.select2('destroy');
							create_select2_dropdown(select_el);
						}

						/**
						 * These do not work consistently.. select2 has some work to do.
						 * form.find('select.beautiful-taxonomy-filters-select[data-taxonomy="' + taxonomy + '"]').trigger('change.select2');
						 */

					});

				}
			},
			error: function(){
				/**
				 * Make sure all dropdowns are enabled and loaders are hidden
				 */
				if( timer ){
					clearTimeout(timer);
				}
				form.find('select.beautiful-taxonomy-filters-select').prop( 'disabled', false );
				form.find('.beautiful-taxonomy-filters-loader').removeClass('active');
				form.find('.beautiful-taxonomy-filters-button').prop('disabled', false);

			},
			complete: function(){
				/**
				 * Regardless of success/error we are done. Set active to false.
				 */
				active = false;
			}
		});

	}


	//Document is ready for some JS magic!
	$(document).ready(function(){

		/**
		 * Trigger select2
		 *
		 */
		if( btf_localization.disable_select2 != 1 ){
			create_select2_dropdown();
		}


		/**
		 * Update the terms of each taxonomy on the fly
		 * This allows us to only show relevant terms whenever a selection has been made.
		 *
		 */
		if( btf_localization.conditional_dropdowns == 1 ){

			/**
			 * Trigger on the first select with a value on page load.
			 * This will find all forms and look in each of them. By doing this we make sure all forms that should be updated will be.
			 */
			var forms = $('.beautiful-taxonomy-filters form, .beautiful-taxonomy-filters-widget form');
			for( var i = 0; i < forms.length; i++ ){
				var selects = $(forms[i]).find('.beautiful-taxonomy-filters-select');
				for( var j = 0; j < selects.length; j++ ){
					if( $(selects[j]).val() !== 0 ){
						conditional_terms_ajax_new( $(selects[j]) );
						break;

					}

				}

			}


			/**
			 * Trigger whenever select is changed
			 */
			$('.beautiful-taxonomy-filters, .beautiful-taxonomy-filters-widget').on('change', '.beautiful-taxonomy-filters-select', function(){
				var el = $(this);
				conditional_terms_ajax_new( el );

			});
		}

	});

})( jQuery );
;

/* !!!!!!!!!!!!!!!!!!!! dpt-bricklayer !!!!!!!!!!!!!!!!!!!!! */ 
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.brickLayer=e():t.brickLayer=e()}(window,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var n=i(1).default;t.exports=n},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.closest(),this.objectAssign()}var e,i,o;return e=t,(i=[{key:"closest",value:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null})}},{key:"objectAssign",value:function(){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])}return i},writable:!0,configurable:!0})}}])&&n(e.prototype,i),o&&n(e,o),t}();function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i;return this.error=!1,e!==Object(e)?(console.error("Bricklayer options has not been provided correctly."),void(this.error=!0)):void 0===e.container?(console.error("Bricklayer grid container has not been provided."),void(this.error=!0)):(new o,this.options=Object.assign({dynamicContent:!1,waitForImages:!0,gutter:10,itemSelector:"",directChildren:!1,useTransform:!0,callBefore:!1,callAfter:!1,runBefore:"once",runAfter:"once"},e),this.container=this.options.container,this.container="string"==typeof this.container?document.querySelector(this.container):this.container,void(this.container&&(i=this.getItems()).length?(this.items=i,this.observer=!1,this.timeout=null,this.containerWidth=0,this.columnWidth=0,this.columns=[],this.resize=this.onResize.bind(this),this.beforeCall=!0,this.afterCall=!0):this.error=!0))}var e,i,n;return e=t,(i=[{key:"getItems",value:function(){var t=[];return!this.options.directChildren&&this.options.itemSelector?t=Array.prototype.slice.call(this.container.querySelectorAll(this.options.itemSelector)):(t=(t=Array.prototype.slice.call(this.container.children)).filter(function(t){return 1===t.nodeType}),this.options.itemSelector&&(t=t.filter(item.matches(this.options.itemSelector)))),t}},{key:"init",value:function(){this.error||(this.options.waitForImages?this.afterImagesLoaded(this.items,this.setup.bind(this)):this.setup(),window.addEventListener("resize",this.resize),this.options.dynamicContent&&this.observeChanges())}},{key:"setup",value:function(){this.beforeCall&&"function"==typeof this.options.callBefore&&this.options.callBefore(),this.buildSetupData(),this.containerWidth&&this.addDynamicStyling(this.items),this.afterCall&&"function"==typeof this.options.callAfter&&this.options.callAfter(),this.beforeCall="once"!==this.options.runBefore,this.afterCall="once"!==this.options.runAfter}},{key:"addItems",value:function(t){var e=this,i=[];"always"===this.options.runBefore&&"function"==typeof this.options.callBefore&&this.options.callBefore(),i=(i=t.map(function(t){return e.getItemData(t)})).filter(function(t){return!(t.isHidden||0===t.width)}),this.items=this.items.concat(i),this.addDynamicStyling(i),"always"===this.options.runAfter&&"function"==typeof this.options.callAfter&&this.options.callAfter()}},{key:"buildSetupData",value:function(){var t,e,i=this,n=getComputedStyle(this.container),o=n.paddingLeft,r=n.paddingRight,s=1;t=this.container.clientWidth,this.containerWidth=t?t-(this.getStyleSize(o)+this.getStyleSize(r)):0,this.items=this.items.map(function(t){return i.getItemData(t)}),this.items=this.items.filter(function(t){return!(t.isHidden||0===t.width)});var a=this.items.reduce(function(t,e){return Math.min(t,e.width)},this.items[0].width);this.columnWidth=a+this.options.gutter,0!==this.columnWidth&&(s=(this.containerWidth+this.options.gutter)/this.columnWidth,e=Math.abs(this.columnWidth-this.containerWidth/Math.round(s)),s=(s=Math[e&&e<=1?"round":"floor"](s))||1),this.columns=Array.apply(null,Array(s)).map(Number.prototype.valueOf,0)}},{key:"getStyleSize",value:function(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)?e:0}},{key:"getItemData",value:function(t){return t.nodeType?{elem:t,isHidden:this.isHidden(t),width:t.offsetWidth,height:t.offsetHeight}:(t.isHidden=this.isHidden(t.elem),t.width=t.elem.offsetWidth,t.height=t.elem.offsetHeight,t)}},{key:"isHidden",value:function(t){return"none"===getComputedStyle(t).display}},{key:"addDynamicStyling",value:function(t){var e=this;this.container.style.position="relative",t.forEach(function(t){e.positionItem(t)})}},{key:"positionItem",value:function(t){var e=t.elem,i=this.columnWidth?t.width%this.columnWidth:1,n=i&&i<=1?"round":"ceil",o=this.columnWidth?Math[n](t.width/this.columnWidth):1;o=Math.min(this.columns.length,o);var r=this.getColPosition(o),s=r.height,a=r.index,l=0===s?0:this.options.gutter,c=s+l+"px",h=a*this.columnWidth+"px";e.style.position="absolute",this.options.useTransform?(e.style.transform="translate("+h+", "+c+")",e.style.transition="transform 0.2s ease"):(e.style.top=c,e.style.left=h);for(var u=s+t.height+l,f=a+o,d=a;d<f;d++)this.columns[d]=u;this.container.style.height=Math.max.apply(null,this.columns)+"px"}},{key:"getColPosition",value:function(t){var e,i=this,n=this.columns.length+1-t;if(1===t)return{height:e=this.columns.reduce(function(t,e){return Math.min(t,e)},this.columns[0]),index:this.columns.indexOf(e)};var o=Array.apply(null,Array(n)).map(function(e,n){var o=i.columns.slice(n,n+t);return o.reduce(function(t,e){return Math.max(t,e)},o[0])});return{height:e=o.reduce(function(t,e){return Math.min(t,e)},o[0]),index:o.indexOf(e)}}},{key:"observeChanges",value:function(){window&&window.MutationObserver&&(!1===this.observer&&(this.observer=new MutationObserver(this.muCallback.bind(this))),this.observer.observe(this.container,{childList:!0,subtree:!0}))}},{key:"muCallback",value:function(t){var e=this,i=[],n=[];t.forEach(function(t){i="childList"===t.type?i.concat(Array.prototype.slice.call(t.addedNodes)):i,n="childList"===t.type?n.concat(Array.prototype.slice.call(t.removedNodes)):n}),this.options.itemSelector&&(i=i.filter(function(t){return 1===t.nodeType&&t.matches(e.options.itemSelector)}),n=n.filter(function(t){return 1===t.nodeType&&t.matches(e.options.itemSelector)})),!this.options.directChildren&&this.options.itemSelector||(i=i.filter(function(t){return 1===t.nodeType&&e.container===t.parentNode}),n=n.filter(function(t){return 1===t.nodeType&&e.container===t.parentNode})),n.length?i.length?(this.items=this.getItems(),this.options.waitForImages?this.afterImagesLoaded(this.items,this.setup.bind(this)):this.setup()):(this.items=this.items.filter(function(t){return!n.includes(t.elem)}),this.setup()):i.length&&(this.options.waitForImages?this.afterImagesLoaded(i,this.addItems.bind(this,i)):this.addItems(i))}},{key:"onResize",value:function(){var t=this;this.timeout||(this.timeout=setTimeout(function(){var e,i=getComputedStyle(t.container),n=i.paddingLeft,o=i.paddingRight;(e=(e=t.container.clientWidth)?e-(t.getStyleSize(n)+t.getStyleSize(o)):0)!==t.containerWidth&&t.setup(),t.timeout=null},400))}},{key:"destroy",value:function(){var t=this;!1!==this.observer&&(this.observer.disconnect(),this.observer=!1),window.removeEventListener("resize",this.resize),this.container.style.position="",this.container.style.height="",this.items.forEach(function(e){var i=e.elem;i.style.position="",t.options.useTransform?(i.style.transform="",i.style.transition=""):(i.style.top="",i.style.left="")}),this.items=[]}},{key:"afterImagesLoaded",value:function(t,e){var i,n=t.length?Array.prototype.slice.call(t):[t],o=0,r=[];n.forEach(function(t){r=r.concat(Array.prototype.slice.call(t.getElementsByTagName("IMG")))}),(i=r.length)||e(),r.forEach(function(t){t.complete&&t.naturalWidth&&0!==t.naturalWidth?++o===i&&e():(t.addEventListener("load",function(){++o===i&&e()}),t.addEventListener("error",function(){o++,t.classList.add("errorLoading"),o===i&&e()}))})}}])&&r(e.prototype,i),n&&r(e,n),t}();e.default=s}])});

/* !!!!!!!!!!!!!!!!!!!! dpt-flickity !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * Flickity PACKAGED v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var d=Array.prototype.slice,i=t.console,u=void 0===i?function(){}:function(t){i.error(t)};function n(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){if("string"!=typeof t)return n=t,this.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))}),this;var e,o,r,a,l,n,i=d.call(arguments,1);return r=i,l="$()."+h+'("'+(o=t)+'")',(e=this).each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else u(l+" is not a valid method")}else u(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:e},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=n)}return o(e||t.jQuery),n}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++)t[y[e]]=0;return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){t.target=s?n*this.cellAlign:(t.target=Math.max(t.target,o),Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e,i=document.createElementNS(s,"path"),n="string"!=typeof(e=this.parent.options.arrowShape)?"M "+e.x0+",50 L "+e.x1+","+(e.y1+50)+" L "+e.x2+","+(e.y2+50)+" L "+e.x3+",50  L "+e.x2+","+(50-e.y2)+" L "+e.x1+","+(50-e.y1)+" Z":e;return i.setAttribute("d",n),i.setAttribute("class","arrow"),this.isLeft||i.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(i),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s,o,r=(s=i,o=document.createDocumentFragment(),s.forEach(function(t){o.appendChild(t.element)}),o),a=e==n;if(a)this.slider.appendChild(r);else{var l=this.cells[e].element;this.slider.insertBefore(r,l)}if(0===e)this.cells=i.concat(this.cells);else if(a)this.cells=this.cells.concat(i);else{var h=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(h)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){if(this.navCompanion){var e,i,n,s=this.navCompanion.selectedCells[0],o=this.navCompanion.cells.indexOf(s),r=o+this.navCompanion.selectedCells.length-1,a=Math.floor((e=o,i=r,n=this.navCompanion.cellAlign,(i-e)*n+e));if(this.selectCell(a,!1,t),this.removeNavSelectedElements(),!(a>=this.cells.length)){var l=this.cells.slice(o,r+1);this.navSelectedElements=l.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var o=e.jQuery,r=e.console;function a(t,e){for(var i in e)t[i]=e[i];return t}var l=Array.prototype.slice;function h(t,e,i){if(!(this instanceof h))return new h(t,e,i);var n,s=t;("string"==typeof t&&(s=document.querySelectorAll(t)),s)?(this.elements=(n=s,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?l.call(n):[n]),this.options=a({},this.options),"function"==typeof e?i=e:a(this.options,e),i&&this.on("always",i),this.getImages(),o&&(this.jqDeferred=new o.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(s||t))}(h.prototype=Object.create(t.prototype)).options={},h.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},h.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var c={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return h.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},h.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},h.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},h.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},h.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,t,e)},h.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},h.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((o=t).fn.imagesLoaded=function(t,e){return new h(this,t,e).jqDeferred.promise(o(this))})},h.makeJQueryPlugin(),h}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

/* !!!!!!!!!!!!!!!!!!!! dpt-scripts !!!!!!!!!!!!!!!!!!!!! */ 
!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.timeOut=null,this.mobile=450,this.tablet=640,this.tabrot=768,this.resize=this.onResize.bind(this),this.elems=e&&Array.isArray(e)?e:Array.prototype.slice.call(document.querySelectorAll(".dpt-wrapper")),this.masonGrid=!1,this.flicKity=!1,this.init()}var e,i,r;return e=t,(i=[{key:"init",value:function(){this.getElementWidth(),this.applyLayout(this.elems),window.addEventListener("resize",this.resize)}},{key:"getElementWidth",value:function(){var t=this;this.elems.forEach(function(e){var i=getComputedStyle(e),n=i.paddingLeft,r=i.paddingRight,a=e.clientWidth-(t.getStyleSize(n)+t.getStyleSize(r));e.classList.remove("wide-wrap","tab-wrap","mob-wrap"),a>t.tabrot?e.classList.add("wide-wrap"):a>t.tablet?e.classList.add("tab-wrap"):a>t.mobile&&e.classList.add("mob-wrap")})}},{key:"applyLayout",value:function(){var t=this;this.elems.forEach(function(e){if(e.classList.contains("dpt-mason-wrap"))t.masonGrid=new brickLayer({container:e,gutter:0,waitForImages:!0,useTransform:!1,callAfter:t.addLoadedClass.bind(t,e)}),t.masonGrid.init();else if(e.classList.contains("dpt-slider")){var i=parseInt(e.getAttribute("data-autotime")),n={cellAlign:"left",contain:!0,wrapAround:!0,prevNextButtons:!0,imagesLoaded:!0,cellSelector:".dpt-entry"};i&&(n.autoPlay=i),t.flicKity=new Flickity(e,n)}})}},{key:"destroy",value:function(){this.flicKity?this.flicKity.destroy():this.masonGrid&&this.masonGrid.destroy(),window.removeEventListener("resize",this.resize)}},{key:"onResize",value:function(){var t=this;this.timeout||(this.timeout=setTimeout(function(){t.getElementWidth(),t.timeout=null},200))}},{key:"getStyleSize",value:function(t){var e=parseFloat(t);return-1!=t.indexOf("%")||isNaN(e)?0:e}},{key:"addLoadedClass",value:function(t){t.classList.add("dpt-loaded")}}])&&n(e.prototype,i),r&&n(e,r),t}();e.a=r},function(t,e,i){"use strict";i.r(e),new(i(0).a)}]);

/* !!!!!!!!!!!!!!!!!!!! caos_frontend_script !!!!!!!!!!!!!!!!!!!!! */ 
/* * * * * * * * * * * * * * * * * * * *
 *  ██████╗ █████╗  ██████╗ ███████╗
 * ██╔════╝██╔══██╗██╔═══██╗██╔════╝
 * ██║     ███████║██║   ██║███████╗
 * ██║     ██╔══██║██║   ██║╚════██║
 * ╚██████╗██║  ██║╚██████╔╝███████║
 *  ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
 *
 * @author   : Daan van den Bergh
 * @url      : https://daan.dev/wordpress-plugins/caos/
 * @copyright: (c) 2020 Daan van den Bergh
 * @license  : GPL2v2 or later
 * * * * * * * * * * * * * * * * * * * */
/**
 * Track outbound links with Google Universal Analytics
 *
 * This code is only compatible with analytics.js.
 *
 * Thanks to Ralph Slooten: https://www.axllent.org/docs/view/track-outbound-links-with-analytics-js/
 *
 * @param event
 * @private
 */
function _caosLt(event)
{
    /* If GA is blocked or not loaded, or not main|middle|touch click then don't track */
    if (!ga.hasOwnProperty('loaded') || ga.loaded !== true || (event.which !== 1 && event.which !== 2)) {
        return;
    }

    var eventLink = event.srcElement || event.target;

    /* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */
    while(eventLink && (typeof eventLink.tagName == 'undefined' || eventLink.tagName.toLowerCase() !== 'a' || !eventLink.href)) {
        eventLink = eventLink.parentNode;
    }

    /* if a link with valid href has been clicked */
    if (eventLink && eventLink.href) {

        var link = eventLink.href;

        /* Only if it is an external link */
        if (link.indexOf(location.host) === -1 && !link.match(/^javascript\:/i)) {

            /* Is actual target set and not _(self|parent|top)? */
            var target = (eventLink.target && !eventLink.target.match(/^_(self|parent|top)$/i)) ? eventLink.target : false;

            /* Assume a target if Ctrl|shift|meta-click */
            if (event.ctrlKey || event.shiftKey || event.metaKey || event.which === 2) {
                target = '_blank';
            }

            var hbrun = false; // tracker has not yet run

            /* HitCallback to open link in same window after tracker */
            var hitBack = function () {
                /* run once only */
                if (hbrun) return;
                hbrun = true;
                window.location.href = link;
            };

            if (target) { /* If target opens a new window then just track */
                ga('send', 'event', 'outbound-link', link, document.location.pathname + document.location.search);
            } else { /* Prevent standard click, track then open */
                event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                /* send event with callback */
                ga('send', 'event', 'outbound-link', link, document.location.pathname + document.location.search, {
                    'transport': 'beacon',
                    'hitCallback': hitBack
                });

                /* Run hitCallback again if GA takes longer than 1 second */
                setTimeout(hitBack, 1000);
            }
        }
    }
}

var _window = window;

/* Use "click" if touchscreen device, else "mousedown" */
var _caosLtEvent = ('ontouchstart' in _window) ? 'click' : 'mousedown';

/* Attach the event to all clicks in the document after page has loaded */
_window.addEventListener ? _window.addEventListener('load', function () {document.body.addEventListener(_caosLtEvent, _caosLt, !1);}, !1) : _window.attachEvent && _window.attachEvent('onload', function () {
    document.body.attachEvent('on' + _caosLtEvent, _caosLt);
});
;

/* !!!!!!!!!!!!!!!!!!!! collapseomatic-js !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * Collapse-O-Matic JavaSctipt v1.6.19
 * http://plugins.twinpictures.de/plugins/collapse-o-matic/
 *
 * Copyright 2019, Twinpictures
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, blend, trade,
 * bake, hack, scramble, difiburlate, digest and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function collapse_init() {
	//force collapse
	jQuery('.force_content_collapse').each(function(index) {
		jQuery(this).css('display', 'none');
	});

	//inital collapse
	jQuery('.collapseomatic:not(.colomat-close)').each(function(index) {
		var thisid = jQuery(this).attr('id');
		jQuery('#target-'+thisid).css('display', 'none');
	});

	//inital swaptitle for pre-expanded elements
	jQuery('.collapseomatic.colomat-close').each(function(index) {
		var thisid = jQuery(this).attr('id');
		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid );
		}
		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});
	});
}

function swapTitle(origObj, swapObj){
	if(jQuery(origObj).prop("tagName") == 'IMG'){
		var origsrc = jQuery(origObj).prop('src');
		var swapsrc = jQuery(swapObj).prop('src');

		jQuery(origObj).prop('src',swapsrc);
		jQuery(swapObj).prop('src',origsrc);
	}
	else{
		var orightml = jQuery(origObj).html();
		var swaphtml = jQuery(swapObj).html();

		jQuery(origObj).html(swaphtml);
		jQuery(swapObj).html(orightml);

		//is cufon involved? if so, do that thing
		if(swaphtml.indexOf("<cufon") != -1){
			var trigelem = jQuery(this).get(0).tagName;
			Cufon.replace(trigelem);
		}
	}
}

function toggleState (obj, id, maptastic, trig_id) {
	//toggletarget class
	//jQuery('[id^=target][id$='+id+']').toggleClass('colomat-targ-visable');

	if (maptastic && jQuery('[id^=target][id$='+id+']').hasClass('maptastic') ) {
		jQuery('[id^=target][id$='+id+']').removeClass('maptastic');
	}

	//reset effect and duration to default
	com_effect = colomatslideEffect;
	com_duration = colomatduration;

	//effect override
	if( obj.attr('data-animation_effect') ){
		com_effect = obj.attr('data-animation_effect');
	}

	//duration override
	if( obj.attr('data-duration') ){
		com_duration = obj.attr('data-duration');
	}

	//if durration is a number, make it a number
	if( isFinite(com_duration) ){
		com_duration = parseFloat(com_duration);
	}

	//slideToggle
	if(com_effect == 'slideToggle'){
		//jQuery('[id^=target][id$='+id+']').slideToggle(com_duration, function() {
		jQuery('#target-'+id).slideToggle(com_duration, function() {
			// Animation complete.
			if( jQuery(this).hasClass('colomat-inline') && jQuery(this).is(':visible') ){
				jQuery(this).css('display', 'inline');
			}

			//deal with any findme links
			if(trig_id && jQuery('#'+trig_id).is('.find-me.colomat-close')){
				//offset_top = jQuery('#find-'+trig_id).attr('name');
				offset_top = jQuery('#'+trig_id).attr('data-findme');

				if(!offset_top || offset_top == 'auto'){
					target_offset = jQuery('#'+trig_id).offset();
					offset_top = target_offset.top;
				}
				jQuery('html, body').animate({scrollTop:offset_top}, 500);
			}
		});
	}
	//slideFade
	else if(com_effect == 'slideFade'){
		jQuery('#target-'+id).animate({
			height: "toggle",
			opacity: "toggle"
		}, com_duration, function (){
			//Animation complete
			if( jQuery(this).hasClass('colomat-inline') && jQuery(this).is(':visible') ){
				jQuery(this).css('display', 'inline');
			}

			//deal with any findme links
			if(trig_id && jQuery('#'+trig_id).is('.find-me.colomat-close')){
				//offset_top = jQuery('#find-'+trig_id).attr('name');
				offset_top = jQuery('#'+trig_id).attr('data-findme');

				if(!offset_top || offset_top == 'auto'){
					target_offset = jQuery('#'+trig_id).offset();
					offset_top = target_offset.top;
				}
				jQuery('html, body').animate({scrollTop:offset_top}, 500);
			}
		});
	}

	//deal with google maps builder resize
	if(jQuery('#'+id).hasClass('colomat-close')){
		jQuery('.google-maps-builder').each(function(index) {
			map = jQuery(".google-maps-builder")[index];
			google.maps.event.trigger(map, 'resize');
		});
	}

	//callback
	if ( typeof colomat_callback != 'undefined' ) {
		colomat_callback();
	}
}

function closeOtherGroups(rel){
	jQuery('.collapseomatic[rel!="' + rel +'"]').each(function(index) {
		//add close class if open
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}
		if(jQuery(this).hasClass('colomat-close') && jQuery(this).attr('rel') !== undefined){
			jQuery(this).removeClass('colomat-close');
			var id = jQuery(this).attr('id');
			//remove parent highlight class
			jQuery('#parent-'+id).removeClass('colomat-parent-highlight');

			//check if the title needs to be swapped out
			if(jQuery("#swap-"+id).length > 0){
				swapTitle(this, "#swap-"+id);
			}

			//check if the excerpt needs to be swapped out
			if(jQuery("#swapexcerpt-"+id).length > 0){
				swapTitle("#exerpt-"+id, "#swapexcerpt-"+id);
			}

			//external triggers
			jQuery('[id^=extra][id$='+id+']').each( function( index ){
				if(jQuery(this).data('swaptitle')){
					old_swap_title = jQuery(this).data('swaptitle');
					old_title = jQuery(this).html();
					jQuery(this).html(old_swap_title);
					jQuery(this).data('swaptitle', old_title);
				}
			});

			toggleState (jQuery(this), id, false, false);

			//check if there are nested children that need to be collapsed
			var ancestors = jQuery('.collapseomatic', '#target-'+id);
			ancestors.each(function(index) {
				jQuery(this).removeClass('colomat-close');
				var thisid = jQuery(this).attr('id');
				jQuery('#target-'+thisid).css('display', 'none');
			})
		}
	});
}

function closeOtherMembers(rel, id){
	jQuery('.collapseomatic[rel="' + rel +'"]').each(function(index) {
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		//add close class if open
		if(jQuery(this).attr('id') != id && jQuery(this).hasClass('colomat-close') && jQuery(this).attr('rel') !== undefined){
			//collapse the element
			jQuery(this).removeClass('colomat-close');
			var thisid = jQuery(this).attr('id');
			//remove parent highlight class
			jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');

			//check if the title needs to be swapped out
			if(jQuery("#swap-"+thisid).length > 0){
				swapTitle(this, "#swap-"+thisid);
			}

			//check if the excerpt needs to be swapped out
			if(jQuery("#swapexcerpt-"+thisid).length > 0){
				swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
			}

			//external triggers
			jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
				if(jQuery(this).data('swaptitle')){
					old_swap_title = jQuery(this).data('swaptitle');
					old_title = jQuery(this).html();
					jQuery(this).html(old_swap_title);
					jQuery(this).data('swaptitle', old_title);
				}
			});

			//check for snap-shut
			if(!jQuery(this).hasClass('colomat-close') && jQuery(this).hasClass('snap-shut')){
				jQuery('#target-'+thisid).hide();
			}
			else{
				toggleState (jQuery(this), thisid, false, false);
			}

			//check if there are nested children that need to be collapsed
			var ancestors = jQuery('.collapseomatic', '#target-'+id);
			ancestors.each(function(index) {
				if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
					return;
				}
				//deal with extra tirggers
				var pre_id = id.split('-');
				if (pre_id[0].indexOf('extra') != '-1') {
					//console.log('this is an extra trigger');
					pre = pre_id.splice(0, 1);
					id = pre_id.join('-');

					//deal with any scroll to links from the Extra Collapse Trigger
					if(jQuery(this).hasClass('scroll-to-trigger')){
						var target_offset = jQuery('#'+id).offset();
						offset_top = target_offset.top;
					}

					//deal with any scroll to links from the Title Trigger
					if(jQuery('#'+id).hasClass('scroll-to-trigger')){
						offset_top = jQuery('#scrollonclose-'+id).attr('name');
						if (offset_top == 'auto') {
							var target_offset = jQuery('#'+id).offset();
							offset_top = target_offset.top;
						}
					}

					//toggle master trigger arrow
					jQuery('#'+id).toggleClass('colomat-close');

					//toggle any other extra trigger arrows
					jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
				}

				if(jQuery(this).attr('id').indexOf('bot-') == '-1'){
					jQuery(this).removeClass('colomat-close');
					var thisid = jQuery(this).attr('id');
					//check if the title needs to be swapped out
					if(jQuery("#swap-"+thisid).length > 0){
						swapTitle(this, "#swap-"+thisid);
					}
					//check if the excerpt needs to be swapped out
					if(jQuery("#swapexcerpt-"+thisid).length > 0){
						swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
					}
					//external triggers
					jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
						if(jQuery(this).data('swaptitle')){
							old_swap_title = jQuery(this).data('swaptitle');
							old_title = jQuery(this).html();
							jQuery(this).html(old_swap_title);
							jQuery(this).data('swaptitle', old_title);
						}
					});
					jQuery('#target-'+thisid).css('display', 'none');
				}
			})
		}
	});
}

function colomat_expandall(loop_items){
	if (!loop_items){
		loop_items = jQuery('.collapseomatic:not(.colomat-close)');
	}
	loop_items.each(function(index) {
		jQuery(this).addClass('colomat-close');
		var thisid = jQuery(this).attr('id');
		jQuery('#parent-'+thisid).addClass('colomat-parent-highlight');

		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid);
		}

		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}

		//external triggers
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		toggleState(jQuery(this), thisid, true, false);
	});
}

function colomat_collapseall(loop_items){
	if (!loop_items){
		loop_items = jQuery('.collapseomatic.colomat-close');
	}

	loop_items.each(function(index) {
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		jQuery(this).removeClass('colomat-close');
		var thisid = jQuery(this).attr('id');
		jQuery('#parent-'+thisid).removeClass('colomat-parent-highlight');

		if(jQuery("#swap-"+thisid).length > 0){
			swapTitle(this, "#swap-"+thisid);
		}

		if(jQuery("#swapexcerpt-"+thisid).length > 0){
			swapTitle("#excerpt-"+thisid, "#swapexcerpt-"+thisid);
		}

		//external triggers
		jQuery('[id^=extra][id$='+thisid+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		toggleState(jQuery(this), thisid, false, false);

	});
}


jQuery(document).ready(function() {
	//console.log(colomatduration, colomatslideEffect, colomatpauseInit);
	com_binding = 'click';
	if (typeof colomattouchstart !== 'undefined' && colomattouchstart) {
		com_binding = 'click touchstart';
	}

	if (typeof colomatpauseInit !== 'undefined' && colomatpauseInit) {
		init_pause = setTimeout(collapse_init, colomatpauseInit);
	}
	else{
		collapse_init();
	}

	//jetpack infinite scroll catch-all
	jQuery( document.body ).on( 'post-load', function () {
		collapse_init();
	} );

	//Display the collapse wrapper... use to reverse the show-all on no JavaScript degredation.
	jQuery('.content_collapse_wrapper').each(function(index) {
		jQuery(this).css('display', 'inline');
	});

	//hover
	jQuery(document).on({
		mouseenter: function(){
			//stuff to do on mouseover
			jQuery(this).addClass('colomat-hover');
		},
		mouseleave: function(){
			//stuff to do on mouseleave
			jQuery(this).removeClass('colomat-hover');
		},
		focusin: function(){
			//stuff to do on keyboard focus
			jQuery(this).addClass('colomat-hover');
		},
		focusout: function(){
			//stuff to do on losing keyboard focus
			jQuery(this).removeClass('colomat-hover');
		}
	}, '.collapseomatic'); //pass the element as an argument to .on

	//tabindex enter
	jQuery(document).on('keypress','.collapseomatic', function(event) {
		if (event.which == 13) {
			event.currentTarget.click();
		};
	});

	//the main collapse/expand function
	jQuery(document.body).on(com_binding, '.collapseomatic', function(event) {
		var offset_top;

		//alert('phones ringin dude');
		if(jQuery(this).hasClass('colomat-expand-only') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		//highlander must be one
		if(jQuery(this).attr('rel') && jQuery(this).attr('rel').indexOf('-highlander') != '-1' && jQuery(this).hasClass('must-be-one') && jQuery(this).hasClass('colomat-close')){
			return;
		}

		var id = jQuery(this).attr('id');

		//deal with any scroll to links
		if(jQuery(this).hasClass('colomat-close') && jQuery(this).hasClass('scroll-to-trigger')){
			offset_top = jQuery('#scrollonclose-'+id).attr('name');
			if (offset_top == 'auto') {
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}
		}

		var id_arr = id.split('-');

		//deal with extra tirggers
		if (id_arr[0].indexOf('extra') != '-1') {
			//console.log('this is an extra trigger');
			pre = id_arr.splice(0, 1);
			id = id_arr.join('-');

			//deal with any scroll to links from the Extra Collapse Trigger
			if(jQuery(this).hasClass('scroll-to-trigger')){
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}

			//deal with any scroll to links from the Title Trigger
			if(jQuery('#'+id).hasClass('scroll-to-trigger')){
				offset_top = jQuery('#scrollonclose-'+id).attr('name');
				if (offset_top == 'auto') {
					var target_offset = jQuery('#'+id).offset();
					offset_top = target_offset.top;
				}
			}

			//toggle master trigger arrow
			jQuery('#'+id).toggleClass('colomat-close');

			//toggle any other extra trigger arrows
			jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
		}

		else if(id.indexOf('bot-') != '-1'){
			id = id.substr(4);
			jQuery('#'+id).toggleClass('colomat-close');

			//deal with any scroll to links from the Internal Collapse Trigger
			if(jQuery(this).hasClass('scroll-to-trigger')){
				var target_offset = jQuery('#'+id).offset();
				offset_top = target_offset.top;
			}

			//deal with any scroll to links from the Title Trigger
			if(jQuery('#'+id).hasClass('scroll-to-trigger')){
				offset_top = jQuery('#scrollonclose-'+id).attr('name');
				if (offset_top == 'auto') {
					var target_offset = jQuery('#'+id).offset();
					offset_top = target_offset.top;
				}
			}
		}
		else{
			jQuery(this).toggleClass('colomat-close');
			//toggle any extra triggers
			jQuery('[id^=extra][id$='+id+']').toggleClass('colomat-close');
		}

		//check if the title needs to be swapped out
		if(jQuery("#swap-"+id).length > 0){
			swapTitle(jQuery('#'+id), "#swap-"+id);
		}

		//check if the excerpt needs to be swapped out
		if(jQuery("#swapexcerpt-"+id).length > 0){
			swapTitle("#excerpt-"+id, "#swapexcerpt-"+id);
		}

		//external triggers
		jQuery('[id^=extra][id$='+id+']').each( function( index ){
			if(jQuery(this).data('swaptitle')){
				old_swap_title = jQuery(this).data('swaptitle');
				old_title = jQuery(this).html();
				jQuery(this).html(old_swap_title);
				jQuery(this).data('swaptitle', old_title);
			}
		});

		//add visited class
		jQuery(this).addClass('colomat-visited');

		//toggle parent highlight class
		var parentID = 'parent-'+id;
		jQuery('#' + parentID).toggleClass('colomat-parent-highlight');

		//check for snap-shut
		if(!jQuery(this).hasClass('colomat-close') && jQuery(this).hasClass('snap-shut')){
			jQuery('#target-'+id).hide();
		}
		else{
			toggleState (jQuery(this), id, true, id);
		}

		//deal with grouped items if needed
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel');
			if(rel.indexOf('-highlander') != '-1'){
				closeOtherMembers(rel, id);
			}
			else{
				closeOtherGroups(rel);
			}
		}

		if(offset_top){
			jQuery('html, body').animate({scrollTop:offset_top}, 500);
		}
	});


	jQuery(document).on(com_binding, '.expandall', function(event) {
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel');
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)[rel="' + rel +'"]');
		}
		else if(jQuery(this).attr('data-togglegroup') !== undefined){
			var toggroup = jQuery(this).attr('data-togglegroup');
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)[data-togglegroup="' + toggroup +'"]');
		}
		else{
			var loop_items = jQuery('.collapseomatic:not(.colomat-close)');
		}

		colomat_expandall(loop_items);
	});

	jQuery(document).on(com_binding, '.collapseall', function(event) {
		if(jQuery(this).attr('rel') !== undefined){
			var rel = jQuery(this).attr('rel');
			var loop_items = jQuery('.collapseomatic.colomat-close[rel="' + rel +'"]');
		}
		else if(jQuery(this).attr('data-togglegroup') !== undefined){
			var toggroup = jQuery(this).attr('data-togglegroup');
			var loop_items = jQuery('.collapseomatic.colomat-close[data-togglegroup="' + toggroup +'"]');
		}
		else {
			var loop_items = jQuery('.collapseomatic.colomat-close');
		}

		colomat_collapseall(loop_items);
	});

	//handle new page loads with anchor
	var fullurl = document.location.toString();
	if (fullurl.match('#(?!\!)')) {
		hashmaster(fullurl);
	}

	//handle no-link triggers within the same page
	jQuery(document).on('click', 'a.colomat-nolink', function(event) {
		event.preventDefault();
	});

	//manual hashtag changes in url
	jQuery(window).on('hashchange', function (e) {
		fullurl = document.location.toString();
		if (fullurl.match('#(?!\!)')) {
			hashmaster(fullurl);
		}
	});

	//master url hash funciton
	function hashmaster(fullurl){
		// the URL contains an anchor but not a hash-bang
		if (fullurl.match('#(?!\!)')) {
			// click the navigation item corresponding to the anchor
			var anchor_arr = fullurl.split(/#(?!\!)/);

			if(anchor_arr.length > 1){
				junk = anchor_arr.splice(0, 1);
				anchor = anchor_arr.join('#');
			}
			else{
				anchor = anchor_arr[0];
			}

			if( jQuery('#' + anchor).length ){
				//expand any nested parents
				jQuery('#' + anchor).parents('.collapseomatic_content').each(function(index) {
					parent_arr = jQuery(this).attr('id').split('-');
					junk = parent_arr.splice(0, 1);
					parent = parent_arr.join('-');
					if(!jQuery('#' + parent).hasClass('colomat-close')){
						jQuery('#' + parent).click();
					}
				})
				//now expand the target anchor
				if(!jQuery('#' + anchor).hasClass('colomat-close')){
					jQuery('#' + anchor).click();
				}
			}

			if(typeof colomatoffset !== 'undefined'){
				var anchor_offset = jQuery('#' + anchor).offset();
				colomatoffset = colomatoffset + anchor_offset.top;
				jQuery('html, body').animate({scrollTop:colomatoffset}, 50);
			}

		}
	}
});
;

/* !!!!!!!!!!!!!!!!!!!! jquery-effects-core !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(s){var u,l,c,d,t,p,h,g,i,e,b,a,o,f,m,y,n,r,v,x,C="ui-effects-",w=s;function _(t,e,n){var r=g[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:t<0?0:r.max<t?r.max:t)}function k(i){var s=p(),f=s._rgba=[];return i=i.toLowerCase(),b(t,function(t,e){var n,r=e.re.exec(i),o=r&&e.parse(r),a=e.space||"rgba";if(o)return n=s[a](o),s[h[a].cache]=n[h[a].cache],f=s._rgba=n._rgba,!1}),f.length?("0,0,0,0"===f.join()&&u.extend(f,c.transparent),s):c[i]}function M(t,e,n){return 6*(n=(n+1)%1)<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function S(t){var e,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)"string"==typeof r[e=r[n]]&&(o[s.camelCase(e)]=r[e]);else for(e in r)"string"==typeof r[e]&&(o[e]=r[e]);return o}function j(t,e,n,r){return s.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),s.isFunction(e)&&(r=e,n=null,e={}),"number"!=typeof e&&!s.fx.speeds[e]||(r=n,n=e,e={}),s.isFunction(n)&&(r=n,n=null),e&&s.extend(t,e),n=n||e.duration,t.duration=s.fx.off?0:"number"==typeof n?n:n in s.fx.speeds?s.fx.speeds[n]:s.fx.speeds._default,t.complete=r||e.complete,t}function I(t){return!(t&&"number"!=typeof t&&!s.fx.speeds[t])||("string"==typeof t&&!s.effects.effect[t]||(!!s.isFunction(t)||"object"==typeof t&&!t.effect))}return s.effects={effect:{}},
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
d=/^([\-+])=\s*(\d+\.?\d*)/,t=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],p=(u=w).Color=function(t,e,n,r){return new u.Color.fn.parse(t,e,n,r)},h={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},g={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=p.support={},e=u("<p>")[0],b=u.each,e.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=-1<e.style.backgroundColor.indexOf("rgba"),b(h,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),p.fn=u.extend(p.prototype,{parse:function(o,t,e,n){if(o===l)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=u(o).css(t),t=l);var a=this,r=u.type(o),i=this._rgba=[];return t!==l&&(o=[o,t,e,n],r="array"),"string"===r?this.parse(k(o)||c._default):"array"===r?(b(h.rgba.props,function(t,e){i[e.idx]=_(o[e.idx],e)}),this):"object"===r?(b(h,o instanceof p?function(t,e){o[e.cache]&&(a[e.cache]=o[e.cache].slice())}:function(t,n){var r=n.cache;b(n.props,function(t,e){if(!a[r]&&n.to){if("alpha"===t||null==o[t])return;a[r]=n.to(a._rgba)}a[r][e.idx]=_(o[t],e,!0)}),a[r]&&u.inArray(null,a[r].slice(0,3))<0&&(a[r][3]=1,n.from&&(a._rgba=n.from(a[r])))}),this):void 0},is:function(t){var o=p(t),a=!0,i=this;return b(h,function(t,e){var n,r=o[e.cache];return r&&(n=i[e.cache]||e.to&&e.to(i._rgba)||[],b(e.props,function(t,e){if(null!=r[e.idx])return a=r[e.idx]===n[e.idx]})),a}),a},_space:function(){var n=[],r=this;return b(h,function(t,e){r[e.cache]&&n.push(t)}),n.pop()},transition:function(t,i){var s=p(t),e=s._space(),n=h[e],r=0===this.alpha()?p("transparent"):this,f=r[n.cache]||n.to(r._rgba),c=f.slice();return s=s[n.cache],b(n.props,function(t,e){var n=e.idx,r=f[n],o=s[n],a=g[e.type]||{};null!==o&&(null===r?c[n]=o:(a.mod&&(o-r>a.mod/2?r+=a.mod:r-o>a.mod/2&&(r-=a.mod)),c[n]=_((o-r)*i+r,e)))}),this[e](c)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),n=e.pop(),r=p(t)._rgba;return p(u.map(e,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var t="rgba(",e=u.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=u.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),n=e.pop();return t&&e.push(~~(255*n)),"#"+u.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),p.fn.parse.prototype=p.fn,h.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,r=t[0]/255,o=t[1]/255,a=t[2]/255,i=t[3],s=Math.max(r,o,a),f=Math.min(r,o,a),c=s-f,u=s+f,l=.5*u;return e=f===s?0:r===s?60*(o-a)/c+360:o===s?60*(a-r)/c+120:60*(r-o)/c+240,n=0==c?0:l<=.5?c/u:c/(2-u),[Math.round(e)%360,n,l,null==i?1:i]},h.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],o=t[3],a=r<=.5?r*(1+n):r+n-r*n,i=2*r-a;return[Math.round(255*M(i,a,e+1/3)),Math.round(255*M(i,a,e)),Math.round(255*M(i,a,e-1/3)),o]},b(h,function(f,t){var n=t.props,i=t.cache,s=t.to,c=t.from;p.fn[f]=function(t){if(s&&!this[i]&&(this[i]=s(this._rgba)),t===l)return this[i].slice();var e,r=u.type(t),o="array"===r||"object"===r?t:arguments,a=this[i].slice();return b(n,function(t,e){var n=o["object"===r?t:e.idx];null==n&&(n=a[e.idx]),a[e.idx]=_(n,e)}),c?((e=p(c(a)))[i]=a,e):p(a)},b(n,function(i,s){p.fn[i]||(p.fn[i]=function(t){var e,n=u.type(t),r="alpha"===i?this._hsla?"hsla":"rgba":f,o=this[r](),a=o[s.idx];return"undefined"===n?a:("function"===n&&(t=t.call(this,a),n=u.type(t)),null==t&&s.empty?this:("string"===n&&(e=d.exec(t))&&(t=a+parseFloat(e[2])*("+"===e[1]?1:-1)),o[s.idx]=t,this[r](o)))})})}),p.hook=function(t){var e=t.split(" ");b(e,function(t,a){u.cssHooks[a]={set:function(t,e){var n,r,o="";if("transparent"!==e&&("string"!==u.type(e)||(n=k(e)))){if(e=p(n||e),!i.rgba&&1!==e._rgba[3]){for(r="backgroundColor"===a?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=u.css(r,"backgroundColor"),r=r.parentNode}catch(t){}e=e.blend(o&&"transparent"!==o?o:"_default")}e=e.toRgbaString()}try{t.style[a]=e}catch(t){}}},u.fx.step[a]=function(t){t.colorInit||(t.start=p(t.elem,a),t.end=p(t.end),t.colorInit=!0),u.cssHooks[a].set(t.elem,t.start.transition(t.end,t.pos))}})},p.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),u.cssHooks.borderColor={expand:function(n){var r={};return b(["Top","Right","Bottom","Left"],function(t,e){r["border"+e+"Color"]=n}),r}},c=u.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},m=["add","remove","toggle"],y={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},s.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){s.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(w.style(t.elem,e,t.end),t.setAttr=!0)}}),s.fn.addBack||(s.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),s.effects.animateClass=function(o,t,e,n){var a=s.speed(t,e,n);return this.queue(function(){var t,n=s(this),e=n.attr("class")||"",r=a.children?n.find("*").addBack():n;r=r.map(function(){return{el:s(this),start:S(this)}}),(t=function(){s.each(m,function(t,e){o[e]&&n[e+"Class"](o[e])})})(),r=r.map(function(){return this.end=S(this.el[0]),this.diff=function(t,e){var n,r,o={};for(n in e)r=e[n],t[n]!==r&&(y[n]||!s.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}(this.start,this.end),this}),n.attr("class",e),r=r.map(function(){var t=this,e=s.Deferred(),n=s.extend({},a,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),s.when.apply(s,r.get()).done(function(){t(),s.each(arguments,function(){var e=this.el;s.each(this.diff,function(t){e.css(t,"")})}),a.complete.call(n[0])})})},s.fn.extend({addClass:(f=s.fn.addClass,function(t,e,n,r){return e?s.effects.animateClass.call(this,{add:t},e,n,r):f.apply(this,arguments)}),removeClass:(o=s.fn.removeClass,function(t,e,n,r){return 1<arguments.length?s.effects.animateClass.call(this,{remove:t},e,n,r):o.apply(this,arguments)}),toggleClass:(a=s.fn.toggleClass,function(t,e,n,r,o){return"boolean"==typeof e||void 0===e?n?s.effects.animateClass.call(this,e?{add:t}:{remove:t},n,r,o):a.apply(this,arguments):s.effects.animateClass.call(this,{toggle:t},e,n,r)}),switchClass:function(t,e,n,r,o){return s.effects.animateClass.call(this,{add:e,remove:t},n,r,o)}}),s.extend(s.effects,{version:"1.11.4",save:function(t,e){for(var n=0;n<e.length;n++)null!==e[n]&&t.data(C+e[n],t[0].style[e[n]])},restore:function(t,e){var n,r;for(r=0;r<e.length;r++)null!==e[r]&&(void 0===(n=t.data(C+e[r]))&&(n=""),t.css(e[r],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var r={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=s("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!s.contains(n[0],o)||s(o).focus(),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(s.extend(r,{position:n.css("position"),zIndex:n.css("z-index")}),s.each(["top","left","bottom","right"],function(t,e){r[e]=n.css(e),isNaN(parseInt(r[e],10))&&(r[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(r).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!s.contains(t[0],e)||s(e).focus()),t},setTransition:function(r,t,o,a){return a=a||{},s.each(t,function(t,e){var n=r.cssUnit(e);0<n[0]&&(a[e]=n[0]*o+n[1])}),a}}),s.fn.extend({effect:function(){var a=j.apply(this,arguments),t=a.mode,e=a.queue,i=s.effects.effect[a.effect];if(s.fx.off||!i)return t?this[t](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)});function n(t){var e=s(this),n=a.complete,r=a.mode;function o(){s.isFunction(n)&&n.call(e[0]),s.isFunction(t)&&t()}(e.is(":hidden")?"hide"===r:"show"===r)?(e[r](),o()):i.call(e[0],a,o)}return!1===e?this.each(n):this.queue(e||"fx",n)},show:(v=s.fn.show,function(t){if(I(t))return v.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(r=s.fn.hide,function(t){if(I(t))return r.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(n=s.fn.toggle,function(t){if(I(t)||"boolean"==typeof t)return n.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var n=this.css(t),r=[];return s.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(r=[parseFloat(n),e])}),r}}),x={},s.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){x[t]=function(t){return Math.pow(t,e+2)}}),s.extend(x,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),s.each(x,function(t,e){s.easing["easeIn"+t]=e,s.easing["easeOut"+t]=function(t){return 1-e(1-t)},s.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}}),s.effects});

/* !!!!!!!!!!!!!!!!!!!! jquery-effects-slide !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * jQuery UI Effects Slide 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(a){return a.effects.effect.slide=function(e,t){var f,i=a(this),o=["position","top","bottom","left","right","width","height"],n=a.effects.setMode(i,e.mode||"show"),s="show"===n,r=e.direction||"left",c="up"===r||"down"===r?"top":"left",d="up"===r||"left"===r,u={};a.effects.save(i,o),i.show(),f=e.distance||i["top"==c?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(i).css({overflow:"hidden"}),s&&i.css(c,d?isNaN(f)?"-"+f:-f:f),u[c]=(s?d?"+=":"-=":d?"-=":"+=")+f,i.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===n&&i.hide(),a.effects.restore(i,o),a.effects.removeWrapper(i),t()}})}});

/* !!!!!!!!!!!!!!!!!!!! jquery-effects-highlight !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * jQuery UI Effects Highlight 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(i){return i.effects.effect.highlight=function(e,o){var n=i(this),f=["backgroundImage","backgroundColor","opacity"],c=i.effects.setMode(n,e.mode||"show"),t={backgroundColor:n.css("backgroundColor")};"hide"===c&&(t.opacity=0),i.effects.save(n,f),n.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(t,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===c&&n.hide(),i.effects.restore(n,f),o()}})}});

/* !!!!!!!!!!!!!!!!!!!! jquery-effects-fold !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * jQuery UI Effects Fold 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(v){return v.effects.effect.fold=function(e,t){var i,h,f=v(this),n=["position","top","bottom","left","right","height","width"],o=v.effects.setMode(f,e.mode||"hide"),s="show"===o,d="hide"===o,r=e.size||15,c=/([0-9]+)%/.exec(r),a=!!e.horizFirst,g=s!=a,w=g?["width","height"]:["height","width"],u=e.duration/2,p={},m={};v.effects.save(f,n),f.show(),i=v.effects.createWrapper(f).css({overflow:"hidden"}),h=g?[i.width(),i.height()]:[i.height(),i.width()],c&&(r=parseInt(c[1],10)/100*h[d?0:1]),s&&i.css(a?{height:0,width:r}:{height:r,width:0}),p[w[0]]=s?h[0]:r,m[w[1]]=s?h[1]:0,i.animate(p,u,e.easing).animate(m,u,e.easing,function(){d&&f.hide(),v.effects.restore(f,n),v.effects.removeWrapper(f),t()})}});

/* !!!!!!!!!!!!!!!!!!!! jquery-effects-blind !!!!!!!!!!!!!!!!!!!!! */ 
/*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(m){return m.effects.effect.blind=function(e,t){var s,i,o,f=m(this),n=["position","top","bottom","left","right","height","width"],c=m.effects.setMode(f,e.mode||"hide"),r=e.direction||"up",a=/up|down|vertical/.test(r),p=a?"height":"width",d=a?"top":"left",u=/up|left|vertical|horizontal/.test(r),h={},l="show"===c;f.parent().is(".ui-effects-wrapper")?m.effects.save(f.parent(),n):m.effects.save(f,n),f.show(),i=(s=m.effects.createWrapper(f).css({overflow:"hidden"}))[p](),o=parseFloat(s.css(d))||0,h[p]=l?i:0,u||(f.css(a?"bottom":"right",0).css(a?"top":"left","auto").css({position:"absolute"}),h[d]=l?o:i+o),l&&(s.css(p,0),u||s.css(d,o+i)),s.animate(h,{duration:e.duration,easing:e.easing,queue:!1,complete:function(){"hide"===c&&f.hide(),m.effects.restore(f,n),m.effects.removeWrapper(f),t()}})}});

/* !!!!!!!!!!!!!!!!!!!! bg-show-hide-script !!!!!!!!!!!!!!!!!!!!! */ 
if ('undefined' === typeof BG_SHCE_USE_EFFECTS) {
	BG_SHCE_USE_EFFECTS = '0';
} 
if ('undefined' === typeof BG_SHCE_TOGGLE_SPEED) {
	BG_SHCE_TOGGLE_SPEED = '0';
} 
if ('undefined' === typeof BG_SHCE_TOGGLE_OPTIONS) {
	BG_SHCE_TOGGLE_OPTIONS = 'swing';
}
if ('undefined' === typeof BG_SHCE_TOGGLE_EFFECT) {
	BG_SHCE_TOGGLE_EFFECT = '';
}


function bgExpandCollapsedContent() {
	var bgCollapseExpandItems = document.querySelectorAll('input[bg_collapse_expand]');
	
	for ( i=0; i<bgCollapseExpandItems.length; i++) {
		
		var showHideButton = document.getElementById('bg-showmore-action-'+bgCollapseExpandItems[i].value);	
		var hiddenContent = document.getElementById('bg-showmore-hidden-'+bgCollapseExpandItems[i].value);
		
		if (showHideButton && hiddenContent) {
			if (window.addEventListener) {
				showHideButton.addEventListener('click', function(event) {bgExpandCollapsedContentAction(event, this);} );
			}
			else {
				window.attachEvent("onclick", function(event) {bgExpandCollapsedContentAction(event, this);} );
			}					
		}
		
		if (jQuery( showHideButton ).parent().prop("tagName") === 'LI' && 
			jQuery( showHideButton ).parent().parent().prop("tagName") === 'UL') {
			jQuery( showHideButton ).parent().parent().css('margin-bottom',0);
		}
		
	}

}

/* FE */
function bgExpandCollapsedContentAction(event, thisObj) {
	event.preventDefault();
	
	var bgUniqId = thisObj.id.replace('bg-showmore-action-', '');
		
	var showHideButton = document.getElementById('bg-showmore-action-'+bgUniqId);	
	var hiddenContent = document.getElementById('bg-showmore-hidden-'+bgUniqId);
	
	var showLessText = document.getElementById('bg-show-less-text-'+bgUniqId).value;
	var showMoreText = document.getElementById('bg-show-more-text-'+bgUniqId).value;
	
	var text = jQuery(showHideButton).text();
	if (BG_SHCE_USE_EFFECTS === '1') {
		jQuery( hiddenContent ).toggle(BG_SHCE_TOGGLE_EFFECT, BG_SHCE_TOGGLE_OPTIONS, parseInt(BG_SHCE_TOGGLE_SPEED)+1);
	}
	else {
		jQuery( hiddenContent ).toggle(parseInt(BG_SHCE_TOGGLE_SPEED));
	}
	
	if (showLessText === '') {
		jQuery( showHideButton ).toggle();
		
		if (jQuery( showHideButton ).parent().prop("tagName") === 'LI') {
			jQuery( showHideButton ).parent().toggle();
		}
	}
	else {
		 jQuery(showHideButton).text(
			 text == showMoreText ? showLessText : showMoreText
		 );
		  jQuery(showHideButton).toggleClass("bg-close");
	}
	
	if ('undefined' !== typeof gmspAllMaps) {
		gmspResizeMaps('recenterHidden');
	}
}

/* BE */
function bgSelectedEffect() {
	var effectOpts = jQuery('#bg_shce_effect > option');
	if (effectOpts.length > 0) {
		var i = 0;
		while ( i < effectOpts.length ) {
			if (effectOpts[i].value === BG_SHCE_TOGGLE_EFFECT) {
				effectOpts[i].selected = true;
			}
			i++;
		}
	}
	
	if (BG_SHCE_USE_EFFECTS === '1') {
		jQuery('.bg-effects').show();
	} 
}

jQuery(document).ready(function() {
	bgExpandCollapsedContent();
	bgSelectedEffect();
});

/* !!!!!!!!!!!!!!!!!!!! neve-script !!!!!!!!!!!!!!!!!!!!! */ 
!function(){"use strict";var e,t=()=>window.innerWidth<=960,n=function(e,t){for(var n=0;n<e.length;n++)t(e[n])},r=e=>{var t=e.split("#");return t.length>1?t[0]:e},o=(e,t,n)=>{for(var r=e instanceof NodeList?e:[e],o=0;o<r.length;o++)r[o]&&r[o].addEventListener(t,n)},i=(e,t)=>{l(e,t,"toggle")},a=(e,t)=>{l(e,t,"add")},d=(e,t)=>{l(e,t,"remove")},l=(e,t,n)=>{for(var r=t.split(" "),o=e instanceof NodeList?e:[e],i=0;i<o.length;i++)o[i]&&o[i].classList[n].apply(o[i].classList,r)},s=null,u=null,c=2,v=()=>!("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)&&(null!==(u=document.querySelector(".nv-index-posts .posts-wrapper"))&&void imagesLoaded(u,()=>{s=new Masonry(u,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})})),p=()=>"enabled"===NeveProperties.infiniteScroll&&(null!==document.querySelector(".nv-index-posts .posts-wrapper")&&void function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=new IntersectionObserver(e=>{e[0].intersectionRatio<=n||t()});r.observe(e)}(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{m()}),!1;m()})),m=()=>{var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",c>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),document.querySelector(".nv-loader").style.display="none",!1;var t,r,o,i,a=document.querySelector(".nv-index-posts .posts-wrapper"),d=g(NeveProperties.infiniteScrollEndpoint+c);c++,t=d,r=e=>{if("enabled"!==NeveProperties.masonry)a.innerHTML+=JSON.parse(e);else{var t=document.createElement("div");t.innerHTML=JSON.parse(e),n(t.children,e=>{u.append(e),s.appended(e)})}},o=NeveProperties.infiniteScrollQuery,(i=new XMLHttpRequest).onload=()=>{4===i.readyState&&200===i.status&&r(i.response)},i.onerror=e=>{console.error(e)},i.open("POST",t,!0),i.setRequestHeader("Content-Type","application/json; charset=UTF-8"),i.send(o)},g=e=>void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),y=()=>{var t,o;e=window.location.href,f(),function(){var t=document.querySelectorAll(".nv-nav-wrap a");if(0===t.length)return!1;n(t,t=>{t.addEventListener("click",t=>{var n=t.target.getAttribute("href");if(null===n)return!1;r(n)===r(e)&&window.HFG.toggleMenuSidebar(!1)})})}(),t=document.querySelectorAll(".caret-wrap"),n(t,e=>{e.addEventListener("click",t=>{t.preventDefault();var n=e.parentNode.parentNode.querySelector(".sub-menu");i(e,"dropdown-open"),i(n,"dropdown-open")})}),h(),w(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&(o=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),n(o,e=>{var t=e.parentNode;t.addEventListener("mouseenter",()=>{a(e,"dropdown-open")}),t.addEventListener("mouseleave",()=>{d(e,"dropdown-open")})})),window.HFG.initSearch=function(){h()}},f=()=>{if(t())return!1;var e=document.querySelectorAll(".sub-menu .sub-menu");if(0===e.length)return!1;var r=window.innerWidth;n(e,e=>{var t=e.getBoundingClientRect(),n=t.left;/webkit.*mobile/i.test(navigator.userAgent)&&(t-=window.scrollX),n+t.width>=r&&(e.style.right="100%",e.style.left="auto")})};function h(){var e=document.querySelectorAll(".nv-nav-search"),r=document.querySelectorAll(".menu-item-nav-search"),o=document.querySelectorAll(".close-responsive-search");n(r,e=>{e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),i(e,"active"),e.querySelector(".search-field").focus(),t()||function(e,t){var n=document.querySelector(".nav-clickaway-overlay");if(null!==n)return!1;n=document.createElement("div"),a(n,"nav-clickaway-overlay");var r=document.querySelector("header.header");r.parentNode.insertBefore(n,r),n.addEventListener("click",()=>{d(e,t),n.parentNode.removeChild(n)})}(e,"active")})}),n(e,e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),n(o,e=>{e.addEventListener("click",e=>{e.preventDefault(),n(r,e=>{d(e,"active")});var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t)})})}function w(){var e=document.querySelectorAll(".header--row .nv-nav-cart");0!==e.length&&n(e,e=>{e.getBoundingClientRect().left<0&&(e.style.left=0)})}window.addEventListener("resize",w);var S,b=function(){this.options={menuToggleDuration:300},this.init()};function q(){window.HFG=new b,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;v(),p()})(),y()}function L(){f()}b.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=".menu-mobile-toggle";!1===e&&(t+=", #header-menu-sidebar .close-panel, .close-sidebar-panel");var r=document.querySelectorAll(t),i=function(e){e.preventDefault(),this.toggleMenuSidebar()};n(r,function(e){e.removeEventListener("click",i.bind(this))}.bind(this)),o(r,"click",i.bind(this));var a=document.querySelector(".header-menu-sidebar-overlay");o(a,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},b.prototype.toggleMenuSidebar=function(e){var t=document.querySelectorAll(".menu-mobile-toggle");d(document.body,"hiding-header-menu-sidebar"),document.body.classList.contains("is-menu-sidebar")||!1===e?(a(document.body,"hiding-header-menu-sidebar"),d(document.body,"is-menu-sidebar"),d(t,"is-active"),setTimeout(function(){d(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)):(a(document.body,"is-menu-sidebar"),a(t,"is-active"))},window.addEventListener("load",()=>{q()}),window.addEventListener("resize",()=>{clearTimeout(S),S=setTimeout(L,500)})}();
;

/* !!!!!!!!!!!!!!!!!!!! elementskit-framework-js-frontend !!!!!!!!!!!!!!!!!!!!! */ 
jQuery(document).ready(function ($) {
    "use strict";
}); // end ready function;

/* !!!!!!!!!!!!!!!!!!!! ekit-nav-menu !!!!!!!!!!!!!!!!!!!!! */ 
jQuery(document).ready(function ($) {
	"use strict";

	function togglerAppend(el) {
		let icon_container = $(el).parents('.ekit-wid-con'),
			icon = icon_container.data('hamburger-icon'),
			hamburger_type = icon_container.data('hamburger-icon-type');
		$(el).each(function () {
			var menu_container = $(this);
			if(menu_container.attr('ekit-dom-added') == 'yes'){
				return;
			}
			
			let parents = menu_container.parents('.elementor-widget-ekit-nav-menu');
			if (parents.length === 0) {
				menu_container.parents('.ekit-wid-con').addClass('ekit_menu_responsive_tablet')
			}

			let iconmarkup = [];
			if (icon === '' || icon === undefined) {
				iconmarkup += '<span class="elementskit-menu-hamburger-icon"></span><span class="elementskit-menu-hamburger-icon"></span><span class="elementskit-menu-hamburger-icon"></span>';
			} else {
				if (hamburger_type === 'url') {
					iconmarkup += '<img src="'+icon+'" alt="hamburger icon" />'
				} else {
					iconmarkup += '<div class="ekit-menu-icon '+icon+'"></div>'
				}
			}
			menu_container
				.before(
					'<button class="elementskit-menu-hamburger elementskit-menu-toggler">'+iconmarkup+'</button>'
				)
				.after('<div class="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler"></div>')
				.attr('ekit-dom-added', 'yes');
		})
	}

	togglerAppend($('.elementskit-menu-container'));

	function elementskit_event_manager(_event, _selector, _fn) {
		$(document).on(_event, _selector, _fn);
	}

	elementskit_event_manager('click', '.elementskit-dropdown-has > a', function (e) {
		if(e.target.className === 'elementskit-submenu-indicator') {
			e.preventDefault();
			
			var winW = jQuery(window).width();
			
			var menu = $(this).parents('.elementskit-navbar-nav');
			var li = $(this).parent();
			var dropdown = li.find('>.elementskit-dropdown, >.elementskit-megamenu-panel');

			dropdown.find('.elementskit-dropdown-open').removeClass('elementskit-dropdown-open');

			if (dropdown.hasClass('elementskit-dropdown-open')) {
				dropdown.removeClass('elementskit-dropdown-open');
			} else {
				dropdown.addClass('elementskit-dropdown-open');
			}
		}

	});

	elementskit_event_manager('click', '.elementskit-menu-toggler', function (e) {
		e.preventDefault();
		var parent_conatiner = $(this).parents('.elementskit-menu-container').parent();
		if (parent_conatiner.length < 1) {
			parent_conatiner = $(this).parent();
		}
		var off_canvas_class = parent_conatiner.find('.elementskit-menu-offcanvas-elements');

		if (off_canvas_class.hasClass('active')) {
			off_canvas_class.removeClass('active');
		} else {
			off_canvas_class.addClass('active');
		}

	});

	
	// hash menu click to hide menu sidebar
	elementskit_event_manager('click', '.elementskit-navbar-nav li a', function(e){
		if($(this).attr('href') && e.target.className !== 'elementskit-submenu-indicator'){
			var self = $(this),
				el = self.get(0),
				href =  el.href,
				hasHash = href.indexOf('#'),
				enable = self.parents('.elementskit-menu-container').hasClass('ekit-nav-menu-one-page-yes');
				

				if(hasHash !== -1 && (href.length > 1) && enable && (el.pathname == window.location.pathname)){
					e.preventDefault();
					self.parents('.ekit-wid-con').find('.elementskit-menu-close').trigger('click');
				}
		}
	});


}); // end ready function;

/* !!!!!!!!!!!!!!!!!!!! ekit-slim-ui !!!!!!!!!!!!!!!!!!!!! */ 
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e.bootstrap={},e.jQuery,e.Popper)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(e){var t=!1;function n(t){var n=this,i=!1;return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(t){return t="function"==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return e(document).find(n).length>0?n:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=n[i],s=t[i],o=s&&r.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(a).test(o))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+a+'".')}var l}};return t=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},e.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(e.event.special[r.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r}(t),o=function(e){var t="collapse",n="bs.collapse",r=e.fn[t],o={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},d={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},u="show",h="collapse",f="collapsing",c="collapsed",g="width",p="height",_={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-ekit-toggle="collapse"]'},m=function(){function r(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-ekit-toggle="collapse"][href="#'+t.id+'"],[data-ekit-toggle="collapse"][data-target="#'+t.id+'"]'));for(var r=e(_.DATA_TOGGLE),i=0;i<r.length;i++){var a=r[i],o=s.getSelectorFromElement(a);null!==o&&e(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(a))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var m=r.prototype;return m.toggle=function(){e(this._element).hasClass(u)?this.hide():this.show()},m.show=function(){var t,i,a=this;if(!this._isTransitioning&&!e(this._element).hasClass(u)&&(this._parent&&0===(t=e.makeArray(e(this._parent).find(_.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(i=e(t).not(this._selector).data(n))&&i._isTransitioning))){var o=e.Event(d.SHOW);if(e(this._element).trigger(o),!o.isDefaultPrevented()){t&&(r._jQueryInterface.call(e(t).not(this._selector),"hide"),i||e(t).data(n,null));var l=this._getDimension();e(this._element).removeClass(h).addClass(f),this._element.style[l]=0,this._triggerArray.length>0&&e(this._triggerArray).removeClass(c).attr("aria-expanded",!0),this.setTransitioning(!0);var g=function(){e(a._element).removeClass(f).addClass(h).addClass(u),a._element.style[l]="",a.setTransitioning(!1),e(a._element).trigger(d.SHOWN)};if(s.supportsTransitionEnd()){var p="scroll"+(l[0].toUpperCase()+l.slice(1));e(this._element).one(s.TRANSITION_END,g).emulateTransitionEnd(600),this._element.style[l]=this._element[p]+"px"}else g()}}},m.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(u)){var n=e.Event(d.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var r=this._getDimension();if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",s.reflow(this._element),e(this._element).addClass(f).removeClass(h).removeClass(u),this._triggerArray.length>0)for(var i=0;i<this._triggerArray.length;i++){var a=this._triggerArray[i],o=s.getSelectorFromElement(a);if(null!==o)e(o).hasClass(u)||e(a).addClass(c).attr("aria-expanded",!1)}this.setTransitioning(!0);var l=function(){t.setTransitioning(!1),e(t._element).removeClass(f).addClass(h).trigger(d.HIDDEN)};this._element.style[r]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,l).emulateTransitionEnd(600):l()}}},m.setTransitioning=function(e){this._isTransitioning=e},m.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},m._getConfig=function(e){return(e=a({},o,e)).toggle=Boolean(e.toggle),s.typeCheckConfig(t,e,l),e},m._getDimension=function(){return e(this._element).hasClass(g)?g:p},m._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var i='[data-ekit-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(r._getTargetFromElement(n),[n])}),n},m._addAriaAndCollapsedClass=function(t,n){if(t){var r=e(t).hasClass(u);n.length>0&&e(n).toggleClass(c,!r).attr("aria-expanded",r)}},r._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},r._jQueryInterface=function(t){return this.each(function(){var i=e(this),s=i.data(n),l=a({},o,i.data(),"object"==typeof t&&t);if(!s&&l.toggle&&/show|hide/.test(t)&&(l.toggle=!1),s||(s=new r(this,l),i.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new TypeError('No method named "'+t+'"');s[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return o}}]),r}();return e(document).on(d.CLICK_DATA_API,_.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var r=e(this),i=s.getSelectorFromElement(this);e(i).each(function(){var t=e(this),i=t.data(n)?"toggle":r.data();m._jQueryInterface.call(t,i)})}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=r,m._jQueryInterface},m}(t),l=function(e){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},r="dropdown-menu",a="active",o="disabled",l="fade",d="show",u=".dropdown",h=".nav, .list-group",f=".active",c="> li > .active",g='[data-ekit-toggle="tab"], [data-ekit-toggle="pill"], [data-ekit-toggle="list"]',p=".dropdown-toggle",_="> .dropdown-menu .active",m=function(){function t(e){this._element=e}var g=t.prototype;return g.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(a)||e(this._element).hasClass(o))){var r,i,l=e(this._element).closest(h)[0],d=s.getSelectorFromElement(this._element);if(l){var u="UL"===l.nodeName?c:f;i=(i=e.makeArray(e(l).find(u)))[i.length-1]}var g=e.Event(n.HIDE,{relatedTarget:this._element}),p=e.Event(n.SHOW,{relatedTarget:i});if(i&&e(i).trigger(g),e(this._element).trigger(p),!p.isDefaultPrevented()&&!g.isDefaultPrevented()){d&&(r=e(d)[0]),this._activate(this._element,l);var _=function(){var r=e.Event(n.HIDDEN,{relatedTarget:t._element}),a=e.Event(n.SHOWN,{relatedTarget:i});e(i).trigger(r),e(t._element).trigger(a)};r?this._activate(r,r.parentNode,_):_()}}},g.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},g._activate=function(t,n,r){var i=this,a=("UL"===n.nodeName?e(n).find(c):e(n).children(f))[0],o=r&&s.supportsTransitionEnd()&&a&&e(a).hasClass(l),d=function(){return i._transitionComplete(t,a,r)};a&&o?e(a).one(s.TRANSITION_END,d).emulateTransitionEnd(150):d()},g._transitionComplete=function(t,n,i){if(n){e(n).removeClass(d+" "+a);var o=e(n.parentNode).find(_)[0];o&&e(o).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(a),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),s.reflow(t),e(t).addClass(d),t.parentNode&&e(t.parentNode).hasClass(r)){var l=e(t).closest(u)[0];l&&e(l).find(p).addClass(a),t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var r=e(this),i=r.data("bs.tab");if(i||(i=new t(this),r.data("bs.tab",i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}();return e(document).on(n.CLICK_DATA_API,g,function(t){t.preventDefault(),m._jQueryInterface.call(e(this),"show")}),e.fn.tab=m._jQueryInterface,e.fn.tab.Constructor=m,e.fn.tab.noConflict=function(){return e.fn.tab=t,m._jQueryInterface},m}(t);!function(e){if(void 0===e)throw new TypeError("Ekit Prefixed Bootstrap's JavaScript requires jQuery. jQuery must be included before Ekit Prefixed Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Ekit Prefixed UI's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(t),e.Util=s,e.Collapse=o,e.Tab=l,Object.defineProperty(e,"__esModule",{value:!0})});

/* !!!!!!!!!!!!!!!!!!!! megamenu !!!!!!!!!!!!!!!!!!!!! */ 
/*jslint browser: true, white: true, this: true, long: true */
/*global console,jQuery,megamenu,window,navigator*/

/*! Max Mega Menu jQuery Plugin */
(function ( $ ) {
    "use strict";

    $.maxmegamenu = function(menu, options) {
        var plugin = this;
        var $menu = $(menu);
        var $toggle_bar = $menu.siblings(".mega-menu-toggle");
        var html_body_class_timeout;

        var defaults = {
            event: $menu.attr("data-event"),
            effect: $menu.attr("data-effect"),
            effect_speed: parseInt($menu.attr("data-effect-speed")),
            effect_mobile: $menu.attr("data-effect-mobile"),
            effect_speed_mobile: parseInt($menu.attr("data-effect-speed-mobile")),
            panel_width: $menu.attr("data-panel-width"),
            panel_inner_width: $menu.attr("data-panel-inner-width"),
            mobile_force_width: $menu.attr("data-mobile-force-width"),
            mobile_overlay: $menu.attr("data-mobile-overlay"),
            second_click: $menu.attr("data-second-click"),
            vertical_behaviour: $menu.attr("data-vertical-behaviour"),
            document_click: $menu.attr("data-document-click"),
            breakpoint: $menu.attr("data-breakpoint"),
            unbind_events: $menu.attr("data-unbind"),
            hover_intent_timeout: $menu.attr("data-hover-intent-timeout"),
            hover_intent_interval: $menu.attr("data-hover-intent-interval")
        };

        plugin.settings = {};

        var items_with_submenus = $("li.mega-menu-megamenu.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout.mega-menu-item-has-children," +
                                    "li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout li.mega-menu-item-has-children", menu);



        plugin.addAnimatingClass = function(element) {
            if (plugin.settings.effect === "disabled") {
                return;
            }

            $(".mega-animating").removeClass("mega-animating");

            var timeout = plugin.settings.effect_speed + parseInt(megamenu.timeout, 10);

            element.addClass("mega-animating");

            setTimeout(function() {
               element.removeClass("mega-animating");
            }, timeout );
        };

        plugin.hideAllPanels = function() {
            $(".mega-toggle-on > a.mega-menu-link", $menu).each(function() {
                plugin.hidePanel($(this), false);
            });
        };

        plugin.hideSiblingPanels = function(anchor, immediate) {
            anchor.parent().parent().find(".mega-toggle-on").children("a.mega-menu-link").each(function() { // all open children of open siblings
                plugin.hidePanel($(this), immediate);
            });
        };

        plugin.isDesktopView = function() {
            return Math.max(window.outerWidth, $(window).width()) > plugin.settings.breakpoint; // account for scrollbars
        };

        plugin.isMobileView = function() {
            return !plugin.isDesktopView();
        };

        plugin.showPanel = function(anchor) {
            anchor.parent().triggerHandler("before_open_panel");

            anchor.attr("aria-expanded", "true");

            $(".mega-animating").removeClass("mega-animating");

            if (plugin.isMobileView() && anchor.parent().hasClass("mega-hide-sub-menu-on-mobile")) {
                return;
            }

            if (plugin.isDesktopView() && ( $menu.hasClass("mega-menu-horizontal") || $menu.hasClass("mega-menu-vertical") ) && !anchor.parent().hasClass("mega-collapse-children")) {
                plugin.hideSiblingPanels(anchor, true);
            }

            if ((plugin.isMobileView() && $menu.hasClass("mega-keyboard-navigation")) || plugin.settings.vertical_behaviour === "accordion") {
                plugin.hideSiblingPanels(anchor, false);
            }

            plugin.calculateDynamicSubmenuWidths(anchor);

            // apply jQuery transition (only if the effect is set to "slide", other transitions are CSS based)
            if ( anchor.parent().hasClass("mega-collapse-children") || plugin.settings.effect === "slide" || 
                ( plugin.isMobileView() && ( plugin.settings.effect_mobile === "slide" || plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right" ) )
               ) {
                var speed = plugin.isMobileView() ? plugin.settings.effect_speed_mobile : plugin.settings.effect_speed;

                anchor.siblings(".mega-sub-menu").css("display", "none").animate({"height":"show", "paddingTop":"show", "paddingBottom":"show", "minHeight":"show"}, speed, function() {
                    $(this).css("display", "");
                });
            }

            anchor.parent().addClass("mega-toggle-on").triggerHandler("open_panel");
        };
        
        plugin.hidePanel = function(anchor, immediate) {
            anchor.parent().triggerHandler("before_close_panel");

            anchor.attr("aria-expanded", "false");

            if ( anchor.parent().hasClass("mega-collapse-children") || ( ! immediate && plugin.settings.effect === "slide" ) || 
                ( plugin.isMobileView() && ( plugin.settings.effect_mobile === "slide" || plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right" ) )
               ) {
                var speed = plugin.isMobileView() ? plugin.settings.effect_speed_mobile : plugin.settings.effect_speed;

                anchor.siblings(".mega-sub-menu").animate({"height":"hide", "paddingTop":"hide", "paddingBottom":"hide", "minHeight":"hide"}, speed, function() {
                    anchor.siblings(".mega-sub-menu").css("display", "");
                    anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");
                });

                return;
            }

            if (immediate) {
                anchor.siblings(".mega-sub-menu").css("display", "none").delay(plugin.settings.effect_speed).queue(function(){
                    $(this).css("display", "").dequeue();
                });
            }

            // pause video widget videos
            anchor.siblings(".mega-sub-menu").find(".widget_media_video video").each(function() {
                this.player.pause();
            });

            anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");
            plugin.addAnimatingClass(anchor.parent());
        };

        plugin.calculateDynamicSubmenuWidths = function(anchor) {
            // apply dynamic width and sub menu position (only to top level mega menus)
            if (anchor.parent().hasClass("mega-menu-megamenu") && anchor.parent().parent().hasClass("max-mega-menu") && plugin.settings.panel_width && $(plugin.settings.panel_width).length > 0) {
                if (plugin.isDesktopView()) {
                    var submenu_offset = $menu.offset();
                    var target_offset = $(plugin.settings.panel_width).offset();

                    anchor.siblings(".mega-sub-menu").css({
                        width: $(plugin.settings.panel_width).outerWidth(),
                        left: (target_offset.left - submenu_offset.left) + "px"
                    });
                } else {
                    anchor.siblings(".mega-sub-menu").css({
                        width: "",
                        left: ""
                    });
                }
            }

            // apply inner width to sub menu by adding padding to the left and right of the mega menu
            if (anchor.parent().hasClass("mega-menu-megamenu") && anchor.parent().parent().hasClass("max-mega-menu") && plugin.settings.panel_inner_width && $(plugin.settings.panel_inner_width).length > 0) {
                var target_width = 0;

                if ($(plugin.settings.panel_inner_width).length) {
                    // jQuery selector
                    target_width = parseInt($(plugin.settings.panel_inner_width).width(), 10);
                } else {
                    // we"re using a pixel width
                    target_width = parseInt(plugin.settings.panel_inner_width, 10);
                }

                var submenu_width = parseInt(anchor.siblings(".mega-sub-menu").innerWidth(), 10);

                if (plugin.isDesktopView() && target_width > 0 && target_width < submenu_width) {
                    anchor.siblings(".mega-sub-menu").css({
                        "paddingLeft": (submenu_width - target_width) / 2 + "px",
                        "paddingRight": (submenu_width - target_width) / 2 + "px"
                    });
                } else {
                    anchor.siblings(".mega-sub-menu").css({
                        "paddingLeft": "",
                        "paddingRight": ""
                    });
                }
            }
        };

        var bindClickEvents = function() {
            var dragging = false;

            $(document).on({
                "touchmove": function(e) { dragging = true; },
                "touchstart": function(e) { dragging = false; }
            });

            $(document).on("click touchend", function(e) { // hide menu when clicked away from
                if (!dragging && plugin.settings.document_click === "collapse" && ! $(e.target).closest(".max-mega-menu li").length && ! $(e.target).closest(".mega-menu-toggle").length ) {
                    plugin.hideAllPanels();
                    plugin.hideMobileMenu();
                }
                dragging = false;
            });

            var collapse_children_parents = $("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link");
            var clickable_parents = $("> a.mega-menu-link", items_with_submenus).add(collapse_children_parents);

            clickable_parents.on("touchend.megamenu", function(e) {
                plugin.unbindHoverEvents();
                plugin.unbindHoverIntentEvents();
            });

            clickable_parents.on("click.megamenu", function(e) {
                if (plugin.isDesktopView() && $(this).parent().hasClass("mega-toggle-on") && $(this).parent().parent().parent().hasClass("mega-menu-tabbed") ) {
                    if (plugin.settings.second_click === "go") {
                        return;
                    } else {
                        e.preventDefault();
                        return;
                    }
                }
                if (dragging) {
                    return;
                }
                if (plugin.isMobileView() && $(this).parent().hasClass("mega-hide-sub-menu-on-mobile")) {
                    return; // allow all clicks on parent items when sub menu is hidden on mobile
                }
                if ((plugin.settings.second_click === "go" || $(this).parent().hasClass("mega-click-click-go")) && $(this).attr("href") !== undefined) { // check for second click
                    if (!$(this).parent().hasClass("mega-toggle-on")) {
                        e.preventDefault();
                        plugin.showPanel($(this));
                    }
                } else {
                    e.preventDefault();

                    if ($(this).parent().hasClass("mega-toggle-on")) {
                        plugin.hidePanel($(this), false);
                    } else {
                        plugin.showPanel($(this));
                    }
                }
            });
        };

        var bindHoverEvents = function() {
            items_with_submenus.on({
                "mouseenter.megamenu" : function() {
                    plugin.unbindClickEvents();
                    if (! $(this).hasClass("mega-toggle-on")) {
                        plugin.showPanel($(this).children("a.mega-menu-link"));
                    }
                },
                "mouseleave.megamenu" : function() {
                    if ($(this).hasClass("mega-toggle-on") && ! $(this).hasClass("mega-disable-collapse") && ! $(this).parent().parent().hasClass("mega-menu-tabbed")) {
                        plugin.hidePanel($(this).children("a.mega-menu-link"), false);
                    }
                }
            });
        };

        var bindHoverIntentEvents = function() {
            items_with_submenus.hoverIntent({
                over: function () {
                    plugin.unbindClickEvents();
                    if (! $(this).hasClass("mega-toggle-on")) {
                        plugin.showPanel($(this).children("a.mega-menu-link"));
                    }
                },
                out: function () {
                    if ($(this).hasClass("mega-toggle-on") && ! $(this).hasClass("mega-disable-collapse") && ! $(this).parent().parent().hasClass("mega-menu-tabbed")) {
                        plugin.hidePanel($(this).children("a.mega-menu-link"), false);
                    }
                },
                timeout: plugin.settings.hover_intent_timeout,
                interval: plugin.settings.hover_intent_interval
            });
        };

        var bindKeyboardEvents = function() {
            var tab_key = 9;
            var escape_key = 27;
            var enter_key = 13;
            var left_arrow_key = 37;
            var right_arrow_key = 39;
            var space_key = 32;

            $menu.parent().on("keyup.megamenu", function(e) {
                var keyCode = e.keyCode || e.which;

                if (keyCode === tab_key) {
                    $menu.parent().addClass("mega-keyboard-navigation");
                }
            });

            $menu.parent().on("keydown.megamenu", function(e) {
                var keyCode = e.keyCode || e.which;
                var active_link = $(e.target);

                if ( keyCode === space_key && active_link.is(".mega-menu-link") && $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    e.preventDefault();

                    // pressing space on a parent item will always toggle the sub menu
                    if ( active_link.parent().is(items_with_submenus) ) {
                        if ( active_link.parent().hasClass("mega-toggle-on") && ! active_link.parent().parent().parent().hasClass("mega-menu-tabbed") ) {
                            plugin.hidePanel(active_link);
                        } else {
                            plugin.showPanel(active_link);
                        }
                    }
                }
            });

            $menu.parent().on("keyup.megamenu", function(e) {
                var keyCode = e.keyCode || e.which;
                var active_link = $(e.target);
                
                if ( keyCode === tab_key && $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    if ( active_link.parent().is(items_with_submenus) && active_link.is("[href]") !== false ) {
                        plugin.showPanel(active_link);
                    } else {
                        if ( ! active_link.parent().parent().parent().hasClass("mega-menu-tabbed") ) {
                            plugin.hideSiblingPanels(active_link);
                        }
                    }
                }

                if ( keyCode === escape_key && $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    var submenu_open = $("> .mega-toggle-on", $menu).length !== 0;

                    $("> .mega-toggle-on > a.mega-menu-link", $menu).focus();

                    plugin.hideAllPanels();

                    if ( plugin.isMobileView() && ! submenu_open ) {
                        plugin.hideMobileMenu();
                        $(".mega-menu-toggle-block, button.mega-toggle-animated", $toggle_bar).first().focus();
                    }
                }

                if ( keyCode === enter_key && $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    if ( active_link.hasClass("mega-menu-toggle-block") ) {
                        if ( $toggle_bar.hasClass("mega-menu-open") ) {
                            plugin.hideMobileMenu();
                        } else {
                            plugin.showMobileMenu();
                        }
                    }

                    // pressing enter on a parent item without a link will toggle the sub menu
                    if ( active_link.parent().is(items_with_submenus) && active_link.is("[href]") === false ) {
                        if ( active_link.parent().hasClass("mega-toggle-on") && ! active_link.parent().parent().parent().hasClass("mega-menu-tabbed") ) {
                            plugin.hidePanel(active_link);
                        } else {
                            plugin.showPanel(active_link);
                        }
                    }
                }

                if ( keyCode === right_arrow_key && plugin.isDesktopView() && $menu.parent().hasClass("mega-keyboard-navigation") && $menu.hasClass("mega-menu-horizontal") ) {
                    var next_top_level_item = $("> .mega-toggle-on", $menu).nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first();

                    if (next_top_level_item.length === 0) {
                        next_top_level_item = $(":focus", $menu).parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first();
                    }

                    next_top_level_item.focus();

                    if ( next_top_level_item.parent().is(items_with_submenus) && next_top_level_item.is("[href]") !== false ) {
                        plugin.showPanel(next_top_level_item);
                    } else {
                        plugin.hideSiblingPanels(next_top_level_item);
                    }
                }

                if ( keyCode === left_arrow_key && plugin.isDesktopView() && $menu.parent().hasClass("mega-keyboard-navigation") && $menu.hasClass("mega-menu-horizontal") ) {
                    var prev_top_level_item = $("> .mega-toggle-on", $menu).prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last();

                    if (prev_top_level_item.length === 0) {
                        prev_top_level_item = $(":focus", $menu).parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last();
                    }

                    prev_top_level_item.focus();

                    if ( prev_top_level_item.parent().is(items_with_submenus) && prev_top_level_item.is("[href]") !== false  ) {
                        plugin.showPanel(prev_top_level_item);
                    } else {
                        plugin.hideSiblingPanels(prev_top_level_item);
                    }
                }

            });

            $menu.parent().on("focusout.megamenu", function(e) {
                if ( $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    setTimeout(function() {
                        var menu_has_focus = $menu.parent().find(":focus").length > 0;
                        if (! menu_has_focus) {
                            $menu.parent().removeClass("mega-keyboard-navigation");
                            plugin.hideAllPanels();
                            plugin.hideMobileMenu();
                        }
                    }, 10);
                }
            });
        };

        plugin.unbindAllEvents = function() {
            $("ul.mega-sub-menu, li.mega-menu-item, li.mega-menu-row, li.mega-menu-column, a.mega-menu-link, span.mega-indicator", menu).off().unbind();
        };

        plugin.unbindClickEvents = function() {
            $("> a.mega-menu-link", items_with_submenus).off("click.megamenu touchend.megamenu");

            if ( plugin.isMobileView() ) {
                var collapse_children_parents = $("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link"); // these are always activated on click
                collapse_children_parents.off("click.megamenu touchend.megamenu");
            }
        };

        plugin.unbindHoverEvents = function() {
            items_with_submenus.unbind("mouseenter.megamenu mouseleave.megamenu");
        };

        plugin.unbindHoverIntentEvents = function() {
            items_with_submenus.unbind("mouseenter mouseleave").removeProp("hoverIntent_t").removeProp("hoverIntent_s"); // hoverintent does not allow namespaced events
        };

        plugin.unbindKeyboardEvents = function() {
            $menu.parent().off("keyup.megamenu keydown.megamenu focusout.megamenu");
        };

        plugin.unbindMegaMenuEvents = function() {
            if (plugin.settings.event === "hover_intent") {
                plugin.unbindHoverIntentEvents();
            }

            if (plugin.settings.event === "hover") {
                plugin.unbindHoverEvents();
            }

            plugin.unbindClickEvents();
            plugin.unbindKeyboardEvents();
        };


        plugin.bindMegaMenuEvents = function() {
            if (plugin.isDesktopView() && plugin.settings.event === "hover_intent") {
                bindHoverIntentEvents();
            }

            if (plugin.isDesktopView() && plugin.settings.event === "hover") {
                bindHoverEvents();
            }

            bindClickEvents(); // always bind click events for touch screen devices
            bindKeyboardEvents();
        };

        plugin.monitorView = function() {
            if (plugin.isDesktopView()) {
                $menu.data("view", "desktop");
            } else {
                $menu.data("view", "mobile");
                plugin.switchToMobile();
            }

            plugin.checkWidth();

            $(window).resize(function() {
                plugin.checkWidth();
            });
        };

        plugin.checkWidth = function() {
            if ( plugin.isMobileView() && $menu.data("view") === "desktop" ) {
                $menu.data("view", "mobile");
                plugin.switchToMobile();
            }

            if ( plugin.isDesktopView() && $menu.data("view") === "mobile" ) {
                $menu.data("view", "desktop");
                plugin.switchToDesktop();
            }

            plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link", $menu));
        };

        plugin.reverseRightAlignedItems = function() {
            if ( ! $("body").hasClass("rtl") ) {
                $menu.append($menu.children("li.mega-item-align-right").get().reverse());
            }
        };

        plugin.addClearClassesToMobileItems = function() {
            $(".mega-menu-row", $menu).each(function() {
                $("> .mega-sub-menu > .mega-menu-column:not(.mega-hide-on-mobile)", $(this)).filter(":even").addClass("mega-menu-clear"); // :even is 0 based
            });
        };

        plugin.switchToMobile = function() {
            plugin.unbindMegaMenuEvents();
            plugin.bindMegaMenuEvents();
            plugin.reverseRightAlignedItems();
            plugin.addClearClassesToMobileItems();
            plugin.hideAllPanels();
        };

        plugin.switchToDesktop = function() {
            plugin.unbindMegaMenuEvents();
            plugin.bindMegaMenuEvents();
            plugin.reverseRightAlignedItems();
            plugin.hideAllPanels();

            $menu.css({
                width: "",
                left: "",
                display: ""
            });

            $toggle_bar.removeClass("mega-menu-open");
        };

        plugin.initToggleBar = function() {
            // mobile menu
            $toggle_bar.on("click", function(e) {
                if ( $(e.target).is(".mega-menu-toggle, .mega-menu-toggle-block, .mega-menu-toggle-animated-block, .mega-menu-toggle-animated-block *, .mega-toggle-blocks-left, .mega-toggle-blocks-center, .mega-toggle-blocks-right, .mega-toggle-label, .mega-toggle-label span") ) {
                    if ($(this).hasClass("mega-menu-open")) {
                        plugin.hideMobileMenu();
                    } else {
                        plugin.showMobileMenu();
                    }
                }
            });
        };

        plugin.hideMobileMenu = function() {
            if ( ! $toggle_bar.is(":visible")) {
                return;
            }

            html_body_class_timeout = setTimeout(function() {
                $("body").removeClass($menu.attr("id") + "-mobile-open");
                $("html").removeClass($menu.attr("id") + "-off-canvas-open");
            }, plugin.settings.effect_speed_mobile);

            $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "false");

            if (plugin.settings.effect_mobile === "slide") {
                $menu.animate({"height":"hide"}, plugin.settings.effect_speed_mobile, function() {
                    $menu.css({
                        width: "",
                        left: "",
                        display: ""
                    });
                });
            }

            $toggle_bar.removeClass("mega-menu-open");
        };

        plugin.showMobileMenu = function() {
            if ( ! $toggle_bar.is(":visible")) {
                return;
            }

            clearTimeout(html_body_class_timeout);

            $("body").addClass($menu.attr("id") + "-mobile-open");

            if ( plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right" ) {
                $("html").addClass($menu.attr("id") + "-off-canvas-open");
            }

            $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "true");

            plugin.toggleBarForceWidth();

            if (plugin.settings.effect_mobile === "slide") {
                $menu.animate({"height":"show"}, plugin.settings.effect_speed_mobile);
            }

            $toggle_bar.addClass("mega-menu-open");
        };

        plugin.toggleBarForceWidth = function() {

            if ($(plugin.settings.mobile_force_width).length && ( plugin.settings.effect_mobile == 'slide' || plugin.settings.effect_mobile == 'disabled' ) ) {
                var submenu_offset = $toggle_bar.offset();
                var target_offset = $(plugin.settings.mobile_force_width).offset();

                $menu.css({
                    width: $(plugin.settings.mobile_force_width).outerWidth(),
                    left: (target_offset.left - submenu_offset.left) + "px"
                });
            }
        };

        plugin.init = function() {
            $menu.triggerHandler("before_mega_menu_init");
            plugin.settings = $.extend({}, defaults, options);
            $menu.removeClass("mega-no-js");

            plugin.initToggleBar();
            
            if (plugin.settings.unbind_events === "true") {
                plugin.unbindAllEvents();
            }

            $("span.mega-indicator", $menu).on("click.megamenu", function(e) {
                e.preventDefault();
                e.stopPropagation();

                if ( $(this).parent().parent().hasClass("mega-toggle-on") ) {
                    if ( ! $(this).parent().parent().parent().parent().hasClass("mega-menu-tabbed") || plugin.isMobileView() ) {
                        plugin.hidePanel($(this).parent(), false);
                    }
                } else {
                    plugin.showPanel($(this).parent(), false);
                }
            });

            $(window).on("load", function() {
                plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link", $menu));
            });

            plugin.bindMegaMenuEvents();
            plugin.monitorView();
            $menu.triggerHandler("after_mega_menu_init");
        };

        plugin.init();
    };

    $.fn.maxmegamenu = function(options) {
        return this.each(function() {
            if (undefined === $(this).data("maxmegamenu")) {
                var plugin = new $.maxmegamenu(this, options);
                $(this).data("maxmegamenu", plugin);
            }
        });
    };

    $(function() {
        $(".max-mega-menu").maxmegamenu();
    });
}( jQuery ));