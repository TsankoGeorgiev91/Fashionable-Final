$( document ).ready(function() {

	var $canvasBtn = $( '#canvas-btn' );
	var $closeBtn = $( '#close-btn' )
	var $canvasMenu = $( '#canvas-menu' );

	$canvasBtn.on( 'click', function() {
		$canvasMenu.addClass( 'open' );
	});

	$canvasBtn.on( 'click', function() {
		$canvasMenu.css({'display':'block'})
	});

	$closeBtn.on( 'click', function() {
		$canvasMenu.removeClass( 'open' );
	});

	$closeBtn.on( 'click', function() {
		$canvasMenu.css({'display':'none'})
	});

	var $frontSlider = $('.slider')

	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		dots: true,
	});
});