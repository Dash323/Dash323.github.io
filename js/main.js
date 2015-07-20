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

var guardiansImages = ['img/guardians/agandaur.jpg','img/guardians/frodo.png','img/guardians/gandalf.jpg','img/guardians/gloin.jpg','img/guardians/legolas.jpg','img/guardians/ori.jpg','img/guardians/sauron.jpg','img/guardians/thrane.jpg','img/guardians/wulfrun.jpg'];

var loadoutsImages = ['img/loadouts/loadout1.jpg','img/loadouts/loadout2.png','img/loadouts/loadout3.jpg','img/loadouts/loadout4.jpg'];

var strategiesImages = ['img/guardians/agandaur.jpg','img/guardians/frodo.jpg','img/guardians/gandalf.jpg','img/guardians/gloin.jpg','img/guardians/legolas.jpg','img/guardians/ori.jpg','img/guardians/sauron.jpg','img/guardians/thrane.jpg','img/guardians/wulfrun.jpg'];

//Array with likes
var guardiansLikes = [0,0,0,0,0,0,0,0,0];

var loadoutsLikes = [0,0,0,0];

var strategiesLikes = [0,0,0,0,0,0,0,0,0];

//Current position (index)
var guardiansIndex = 0;

var loadoutsIndex = 0;

var strategiesIndex = 0;




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
  }, targetOffset);
});




//GUARDIANS

$('#gnext').on('click', function(){
	guardiansIndex = (guardiansIndex + 1);
	$('#gprevious').prop('disabled', false);
	$('#displayedgimage').prop('src', guardiansImages[guardiansIndex]);
	if(guardiansIndex === guardiansImages.length-1) {
		$('#gnext').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
})

$('#gprevious').on('click', function(){
	guardiansIndex = (guardiansIndex - 1);
	$('#gnext').prop('disabled', false);
	$('#displayedgimage').prop('src', guardiansImages[guardiansIndex]);
	if(guardiansIndex === 0) {
		$('#gprevious').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
});



//LOADOUTS

$('#lnext').on('click', function(){
	loadoutsIndex = (loadoutsIndex + 1);
	$('#lprevious').prop('disabled', false);
	$('#displayedlimage').prop('src', loadoutsImages[loadoutsIndex]);
	if(loadoutsIndex === loadoutsImages.length-1) {
		$('#lnext').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
})

$('#lprevious').on('click', function(){
	loadoutsIndex = (loadoutsIndex - 1);
	$('#lnext').prop('disabled', false);
	$('#displayedlimage').prop('src', loadoutsImages[loadoutsIndex]);
	if(loadoutsIndex === 0) {
		$('#lprevious').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
});



//STRATEGIES

$('#snext').on('click', function(){
	strategiesIndex = (strategiesIndex + 1);
	$('#lprevious').prop('disabled', false);
	$('#displayedsimage').prop('src', strategiesImages[strategiesIndex]);
	if(strategiesIndex === strategiesImages.length-1) {
		$('#snext').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
})

$('#sprevious').on('click', function(){
	strategiesIndex = (strategiesIndex - 1);
	$('#snext').prop('disabled', false);
	$('#displayedsimage').prop('src', strategiesImages[strategiesIndex]);
	if(strategiesIndex === 0) {
		$('#sprevious').prop('disabled', true);
	}
	// $('#votes').html('Likes: ' + likes[index])
});





