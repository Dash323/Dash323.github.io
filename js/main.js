// Smooth Scrolling to different sections of the page.
	// When "Services We Offer" button is clicked...
		// smooth scroll to sevices we offer section

	 // When "Accepted Insurance and Payment" button is clicked...
		// smooth scroll to sevices we offer section

	// When "Meet The Staff" button is clicked...
		// smooth scroll to the sevices we offer section

	
// Hamburger menu for small screens
	// When hamburger menu is clicked...
		// increase spacing between hamburger lines
		// toggle a class to nav bar that transitions from the nav having a height of 0 to a height of ~300px

// Carousel of pictures and likes of the pictures
	// When next button is clicked...
		// if on second to last picture...
			// disable next button
		// un-disable previous button
		// display next picture
		// increase index number by 1

	// When previous button is clicked...
		// if on second picture...
			// disable previous button
		// un-disable next button
		// display previous picture
		// decrease index number by 1

	// When like button is clicked...
		// increase the number of likes for that picture

	// When dislike button is clicked...
		// decrease the number of likes for that picture

// Side-menu toggle-slides from off the screen on the left side
	// When hovering over the side menu icon
		// Slide side menu onto screen from left side.

$('#vertlines').on('click', function(){
	$('aside').toggleClass('open');
	// $('header nav div span').animate({borderWidth: "3px 5px"});
});

$(window).on('scroll', function(){
	var scrolled = $(this).scrollTop();
		$('#banner').css('top',(-(scrolled*-.4625))+'px');
		console.log(scrolled);
	});





// Smooth scroll this mother!

// Do it when someone clicks a nav link
// $('nav a').on('click', function(e) {
//   // prevent the standard link operation on click
//   e.preventDefault();
//   // use the href of the link to identify what
//   // section to scroll to
//   var thisTarget = $(this).attr('href');
//   // get that section's top offset
//   var targetOffset = $(thisTarget).offset().top;
//   // use jQuery.animate() to animate the body's
//   // scrollTop to the targetOffest
//   $('body').animate({
//     scrollTop: targetOffset
//   }, 600);
// });






