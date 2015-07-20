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

var images = ['img/guardians/agandaur.jpg','img/guardians/frodo.jpg','img/guardians/gandalf.jpg','img/guardians/gloin.jpg','img/guardians/legolas.jpg','img/guardians/ori.jpg','img/guardians/sauron.jpg','img/guardians/thrane.jpg','img/guardians/wulfrun.jpg'];

//Array with likes
var likes = [0,0,0,0,0,0,0,0,0];

//Current position (index)
var index = 0;




//Sidebar lines
$('#vertlines').on('click', function(){
	$('aside').toggleClass('open');
});

//Banner Paralax
$(window).on('scroll', function(){
	var scrolled = $(this).scrollTop();
		$('#banner').css('top',(-(scrolled*-.4625))+'px');
		console.log(scrolled);
	});

//Smooth scroll
$('nav ul li a').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('body').animate({
    scrollTop: targetOffset - 32
  }, 1000);
});




// $('#next').on('click', function(){
// 	index = (index + 1);
// 	$('#prev').prop('disabled', false);
// 	$('#guardiansimg').prop('src', images[index]);
// 	if(index === images.length-1) {
// 		$('#next').prop('disabled', true);
// 	}
// 	$('#votes').html('Likes: ' + likes[index])
// })





