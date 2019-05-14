$(document).ready(function(){
	console.log(123);
	$(".dropdown-btn").click(function(){
		console.log(123);
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		}
		else {
			$(this).addClass("active");
		}
	});
	$(".dropdown-item").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find(".dropdown-btn").html($(this).html());
	});
	$(".filter-button").click(function(){
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		}
		else {
			$(this).addClass("active");
		}
	});
});