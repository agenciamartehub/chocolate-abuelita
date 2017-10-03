jQuery(document).ready(function($){

	// Slider
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<span class="ui-icon fa fa-chevron-left slick-arrow-left"></span>',
		nextArrow: '<span class="ui-icon fa fa-chevron-right slick-arrow-right"></span>',
		adaptiveHeight: true,
		fade: true,
		// asNavFor: '.da-slider-nav',
		//autoplay: true,
		responsive: [
			{
			  breakpoint: 415,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false,
				prevArrow: '<span class="fa fa-chevron-left"></span>',
				nextArrow: '<span class="fa fa-chevron-right"></span>',
			  }
			},
		]
	});



});
