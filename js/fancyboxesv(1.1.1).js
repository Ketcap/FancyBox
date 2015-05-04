/* global _this */ ;
(function ($, window, document, undefined) {

	var pluginName = 'Fancybox',
		defaults = {
			boxWidth: 50,
			/*Width Of The Boxes*/
			boxHeight: 50,
			/*Height Of The Boxes*/
			zIndex: 100,
			/* z-index of Boxes */
			anims: "",
			/*Animation Types 1 to 11 */
			colorCount: 13,
			/*Color Counter css => [color='1'] example Minimum 9 is optimal  */
			closeElement: "",
			/*If Want to close with click Need That element use ".class" or "#id" or $(this) for self ,Default None */
			closeType: "0",
			/* Random(0) / Rows(1) / Cols(2) / Both(3) Default 0*/
			delay: "300",
			/* delay between animations Recommended 300*/
			boxClass: "Fancy",
			/* Box Class for Picking Recommended Fancy NO CSS !!! But Can change the name*/
		};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;
		// jQuery has an extend method that merges the 
		// contents of two or more objects, storing the 
		// result in the first object. The first object 
		// is generally empty because we don't want to alter 
		// the default options for future instances of the plugin
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype.init = function () {
		var start = new Date().getTime();
		// Place initialization logic here
		// You already have access to the DOM element and
		// the options via the instance, e.g. this.element 
		// and this.options
		_this = $(this.element);
		var parentId = this.element.id;
		var params = this.options;

		var Rowcount = Math.round(_this.innerHeight() / this.options.boxHeight);
		var Colcount = Math.round(_this.innerWidth() / this.options.boxWidth);

		var Colors = [];
		for (var i = 1; i <= this.options.colorCount; i++) {
			Colors.push(i);
		}

		var x, y = 0;
		for (var i = 0; i < Rowcount; i++) {
			x = 0;
			for (var j = 0; j < Colcount; j++) {
				$("#" + parentId).append("<div id='" + i + "-" + j + "' class='" + this.options.boxClass + "'></div>");
				_this.children("#" + i + "-" + j).css({
					left: x + "px",
					top: y + "px",
					width: this.options.boxWidth + "px",
					height: this.options.boxHeight + "px",
					"z-index": this.options.zIndex,
				}).attr("color", Colorize(i, j));

				x += this.options.boxWidth;
			}
			y += this.options.boxHeight;
		}

		function Colorize(x, y) {
			var arrayColor = Colors.slice(0);
			var color;
			var x1 = x - 1;
			var y1 = y - 1;
			var y2 = y + 1;
			var bColor;
			if ($("#" + parentId).children("div#" + x1 + "-" + y1).length) {
				bColor = $("#" + parentId).children("div#" + x1 + "-" + y1).attr("color");
				arrayColor = jQuery.grep(arrayColor, function (value) {
					return value != bColor;
				});
			}
			if ($("#" + parentId).children("div#" + x1 + "-" + y).length) {
				bColor = $("#" + parentId).children("div#" + x1 + "-" + y).attr("color");
				arrayColor = jQuery.grep(arrayColor, function (value) {
					return value != bColor;
				});
			}
			if ($("#" + parentId).children("div#" + x1 + "-" + y2).length) {
				bColor = $("#" + parentId).children("div#" + x1 + "-" + y2).attr("color");
				arrayColor = jQuery.grep(arrayColor, function (value) {
					return value != bColor;
				});
			}
			if ($("#" + parentId).children("div#" + x + "-" + y1).length) {
				bColor = $("#" + parentId).children("div#" + x + "-" + y1).attr("color");
				arrayColor = jQuery.grep(arrayColor, function (value) {
					return value != bColor;
				});
			}
			color = arrayColor[Math.floor(arrayColor.length * Math.random())];
			return color;
		}

		$.fn.CloseUp = function (anims) {
			var w = $(this).width();
			var h = $(this).height();
			var a = anims[Math.floor(Math.random() * anims.length)]
			switch (a) {
			case 1:
				$(this)
					.animate({
						width: "0"
					}, "easeInOutBack", function () {
						$(this).remove();
					})
				break;
			case 2:
				$(this)
					.animate({
						height: "0"
					}, "easeInOutBack", function () {
						$(this).remove();
					})
				break;
			case 3:
				$(this)
					.animate({
						marginLeft: w,
						width: 0
					}, "easeInOutBack", function () {
						$(this).remove();
					})
				break;
			case 4:
				$(this)
					.animate({
						marginTop: h,
						height: 0
					}, "easeInOutBack", function () {
						$(this).remove();
					})
				break;
			case 5:
				$(this)
					.animate({
						width: 0,
						height: 0
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 6:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginLeft: w
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 7:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: h
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 8:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: h,
						marginLeft: w
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 9:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: h / 2,
						marginLeft: w / 2
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 10:
				$(this)
					.animate({
						opacity: "0"
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 11:
				$(this)
					.animate({
							opacity: "1"
						}, 0, "easeInOutBack",
						function () {
							$(this).remove();
						})

				break;
			}
		}

		var type = params.closeType;
		if (this.options.closeElement.length) {

			if (this.options.closeElement == "this") {

				$(this.element).bind("click", function (params) {
					Close(type);
					$(this).unbind("click");

				})
			} else {
				$(this.options.closeElement).bind("click", function (params) {

					Close(type);
					$(this).unbind("click");
				})
			}

		} else {
			Close(type);
		}

		function Close(type) {
			if (Rowcount < Colcount) {
				temp = Rowcount;
				Rowcount = Colcount;
				Colcount = Rowcount;
			}
			var que = $({});
			var c_column, c_row, delay;
			console.log(parseInt(type));
			switch (parseInt(type)) {
			case 0:
				for (c_column = 0; c_column < Colcount; c_column++) {

					delay = c_column * params.delay;
					for (c_row = 0; c_row < Rowcount; c_row++) {

						que.queue(function (next) {
							$("#" + parentId).children("div#" + c_column + "-" + c_row)
								.delay(delay)
								.CloseUp(params.anims);
							$("#" + parentId).children("div#" + c_row + "-" + c_column)
								.delay(delay)
								.CloseUp(params.anims);
							next();
						})

					}
				}
				break;

			case 1:
				for (c_column = 0; c_column <= Colcount; c_column++) {
					delay = c_column * params.delay;
					for (c_row = 0; c_row <= Rowcount; c_row++) {
						que.queue(function (next) {
							$("#" + parentId).children("div#" + c_row + "-" + c_column)
								.delay(delay)
								.CloseUp(params.anims);
							next();
						})

					}

				}
				break;
			case 2:
				for (c_column = 0; c_column <= Colcount; c_column++) {
					delay = c_column * params.delay;
					for (c_row = 0; c_row <= Rowcount; c_row++) {

						que.queue(function (next) {
							$("#" + parentId).children("div#" + c_column + "-" + c_row)
								.delay(delay)
								.CloseUp(params.anims);
							next();
						})

					}

				}
				break;
			case 3:
				console.log("random");
				var childCount = $("#" + parentId).children("." + params.boxClass).length;
				var arrayChild = $("#" + parentId).children("." + params.boxClass);
				var delay = 0;
				for (var I = 0; I < childCount; I++) {
					delay = I * params.delay;
					var randomChild = arrayChild[Math.floor(Math.random() * arrayChild.length)];
					que.queue(function (next) {
						$(randomChild)
							.delay(delay)
							.CloseUp(params.anims);
						next();
					})
					arrayChild = jQuery.grep(arrayChild, function (e) {
						return e != randomChild;
					})

				}
				break;

			}

		}

		console.log(new Date().getTime() - start + "ms create time for > " + _this);
	};

	// A really lightweight plugin wrapper around the constructor, 
	// preventing against multiple instantiations
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
					new Plugin(this, options));
			}
		});
	}

})(jQuery, window, document);