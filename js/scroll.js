// scrolling navigation

$(document).ready(function() {

	var scrollLink = $('.scroll');

	// smooth scrolling

	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 700 );
	})

	// Active link

	$(window).scroll(function(){
		var scrollBarLocation = $(this).scrollTop();

		scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top -20;

			if( sectionOffset <= scrollBarLocation ) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		})
	})
})



