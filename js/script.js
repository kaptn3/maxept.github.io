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
});