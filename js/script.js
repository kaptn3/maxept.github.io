$(document).ready(function(){
	$(".dropdown-btn").click(function(){
		$(".dropdown-btn").removeClass("active");

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
	$(".cross-icon").click(function(){
		if ($(this).parent().hasClass("disable")) {
			$(this).parent().removeClass("disable");
		}
		else {
			$(this).parent().addClass("disable");
		}
		
	});

	var positionWindow = $(window).scrollTop();
	if (positionWindow > 205) {
		$(".cart").addClass("posAbs");
	}
	else {
		$(".cart").removeClass("posAbs");
	}
	$(window).scroll(function(){
		positionWindow = $(window).scrollTop();
		if (positionWindow > 205) {
			$(".cart").addClass("posAbs");
		}
		else {
			$(".cart").removeClass("posAbs");
		}
	});
	/*$(".slider").bxSlider({
		minSlides: 1,
		maxSlides: 5,
		slideWidth: 250,
		moveSlides: 1,
		slideMargin: 40,
		pager: false,
		touchEnabled: false
	});*/
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
	  	loop: true,
	    margin: 15,
	    nav: true,
	    navText: ['', ''],
	  	responsive:{
	        0: {
	            items: 1
	        },
	        600: {
	            items: 3
	        },
	        1000: {
	            items: 5
	        }
	    }
	  });
	});
	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".dropdown"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".dropdown .dropdown-btn").removeClass("active"); // скрываем его
		}
	});
});