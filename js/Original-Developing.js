/*!
  jQuery [FancyBox] plugin
  @name jquery.[FancyBox].js
  @author [Uğur Oruç] ([uoruc5@gmail.com] or [@uur_oruc - Twitter])
  @version 1.0
  @date 23/04/2015
  @category jQuery Plugin
  @copyright (c) 2015 [Uğur Oruç] (www.u-code.net)
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function ($) {

	$.fn.FancyBox = function (options) {

		var start = new Date().getTime();

		var _this = $(this);

		var defaults = {
			boxWidth: 50,
			/*Width Of The Boxes*/
			boxHeight: 50,
			/*Height Of The Boxes*/
			zIndex: 55,
			/* z-index of Boxes */
			anims: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			/*Animation Types 1 to 11 */
			colorCount: 13,
			/*Color Counter css => [color='1'] example Minimum 9 is optimal  */
			closeElement: "",
			/*If Want to close with click Need That element use ".class" or "#id" or $(this) for self ,Default None */
			closeType: "0",
			/* Both(0) / Rows(1) / Cols(2) / Random(3) Default 0*/
			delay: "300",
			/* delay between animations Recommended 300*/
			boxClass: "Fancy",
			/* Box Class for Picking Recommended Fancy NO CSS !!! But Can change the name*/

		};

		var settings = $.extend({}, defaults, options);

		rowCount = Math.round(_this.innerHeight() / settings.boxHeight);
		colCount = Math.round(_this.innerWidth() / settings.boxWidth);
		var Colors = [];
		for (var i = 1; i <= defaults.colorCount; i++) {
			Colors.push(i);
		}

		function getDiv(Row, Col) {
			return "<div id=" + Row + "-" + Col + " class=" + settings.boxClass + "></div>"
		};

		function getIdDiv(Row, Col) {
			return $("#" + Row + "-" + Col)
		};
		var x, y = 0;
		for (var i = 1; i <= rowCount; i++) {
			x = 0;
			for (var j = 1; j <= colCount; j++) {
				_this.append(getDiv(i, j));
				getIdDiv(i, j).css({
					"z-index": settings.zIndex,
					top: y + "px",
					left: x + "px",
					width: settings.boxWidth + "px",
					height: settings.boxHeight + "px"
				})
				putColor(i, j);
				x += settings.boxWidth;
			}
			y += settings.boxHeight;
		}

		function putColor(PosX, PosY) {
			my = $("#" + PosX + "-" + PosY);
			var MainColors = Colors.slice(0);
			var color;
			var X1 = PosX - 1;
			var Y1 = PosY - 1;
			var Y2 = PosY + 1;
			var beforeColor;
			if (getIdDiv(X1, Y1).length) {
				beforeColor = getIdDiv(X1, Y1).attr("color");
				MainColors = jQuery.grep(MainColors, function (value) {
					return value != beforeColor;
				});
			}
			if (getIdDiv(X1, PosY).length) {
				beforeColor = getIdDiv(X1, PosY).attr("color");
				MainColors = jQuery.grep(MainColors, function (value) {
					return value != beforeColor;
				});
			}
			if (getIdDiv(X1, Y2).length) {
				beforeColor = getIdDiv(X1, Y2).attr("color");
				MainColors = jQuery.grep(MainColors, function (value) {
					return value != beforeColor;
				});
			}
			if (getIdDiv(PosX, Y1).length) {
				beforeColor = getIdDiv(PosX, Y1).attr("color");
				MainColors = jQuery.grep(MainColors, function (value) {
					return value != beforeColor;
				});
			}
			color = MainColors[Math.floor(MainColors.length * Math.random())];
			my.attr("color", color);

		}
		$.fn.CloseUp = function () {

			var a = settings.anims[Math.floor(Math.random() * settings.anims.length)]
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
						marginLeft: settings.boxWidth,
						width: 0
					}, "easeInOutBack", function () {
						$(this).remove();
					})
				break;
			case 4:
				$(this)
					.animate({
						marginTop: settings.boxHeight,
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
						marginLeft: settings.boxWidth
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 7:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: settings.boxHeight
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 8:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: settings.boxHeight,
						marginLeft: settings.boxWidth
					}, "easeInOutBack", function () {
						$(this).remove();
					})

				break;
			case 9:
				$(this)
					.animate({
						width: 0,
						height: 0,
						marginTop: settings.boxHeight / 2,
						marginLeft: settings.boxWidth / 2
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


		function Close(type) {
			if (rowCount < colCount) {
				temp = rowCount;
				rowCount = colCount + 1;
				colCount = rowCount + 1;
			} else {
				rowCount++;
				colCount++;
			}
			var que = $({});
			var c_column, c_row, delay;
			switch (parseInt(type)) {
			case 0:
				for (c_column = 1; c_column < colCount; c_column++) {
					for (c_row = 1; c_row < rowCount; c_row++) {
						if (c_column == 1) {
							delay = 0
						}
						que.queue(function (next) {
							getIdDiv(c_column, c_row)
								.delay(delay)
								.CloseUp();
							getIdDiv(c_row, c_column)
								.delay(delay)
								.CloseUp();
							next();
						})

					}
					delay = c_column * settings.delay;
				}
				break;

			case 1:
				for (c_column = 1; c_column <= colCount; c_column++) {

					for (c_row = 1; c_row <= rowCount; c_row++) {
						if (c_column == 1) {
							delay = 0
						}
						que.queue(function (next) {
							getIdDiv(c_row, c_column)
								.delay(delay)
								.CloseUp();
							next();
						})

					}
					delay = c_column * settings.delay;
				}
				break;
			case 2:
				for (c_column = 1; c_column <= colCount; c_column++) {

					for (c_row = 1; c_row <= rowCount; c_row++) {
						if (c_column == 1) {
							delay = 0
						}
						que.queue(function (next) {
							getIdDiv(c_column, c_row)
								.delay(delay)
								.CloseUp();
							next();
						})

					}
					delay = c_column * settings.delay;
				}
				break;
			case 3:
				var childCount = _this.children("." + settings.boxClass).length;
				var arrayChild = _this.children("." + settings.boxClass);
				var delay = 0;
				for (var I = 0; I < childCount; I++) {
					delay = I * settings.delay;
					var randomChild = arrayChild[Math.floor(Math.random() * arrayChild.length)];
					que.queue(function (next) {
						$(randomChild)
							.delay(delay)
							.CloseUp();
						next();
					})
					arrayChild = jQuery.grep(arrayChild, function (e) {
						return e != randomChild;
					})

				}
				break;

			}

		}



		if (settings.closeElement.length) {

			if (settings.closeElement == "this") {

				_this.bind("click", function () {
					console.log("a");
					Close(settings.closeType);
					$(this).unbind("click");

				})
			} else {
				$(settings.closeElement).bind("click", function () {

					Close(settings.closeType);
					$(this).unbind("click");
				})
			}

		} else {
			Close(settings.closeType);
		}





		console.log(new Date().getTime() - start + "ms create time for > " + _this.selector);

	};


})(jQuery);