$(document).ready(function(){
	$(".control").click(function(){
		var value = $(this).parent().find("input").val();
		if ($(this).hasClass("minus")) {
			value--;
			$(this).parent().find("input").val(value);

		}
		if ($(this).hasClass("plus")) {
			value++;
			$(this).parent().find("input").val(value);
		}
	});
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		if (position > 200) {
			$("header .cart").addClass("active");

		}
		else {
			$("header .cart").removeClass("active");
		}
	});
});