// --- [ Scroll to top ]
// init controller
var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
				.setTween(tween)
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

//  bind scroll to anchor links
$(document).on("click", ".scroll-to[href^='#']", function (e) {
	var id = $(this).attr("href");
	if ($(id).length > 0) {
		e.preventDefault();
		// trigger scroll
		controller.scrollTo(id);
		// if supported by the browser we can even update the URL.
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});


// --- [ Carousel ]
$('.carousel').carousel({
	interval: false
});

// Toggle page text with carousel indicators
$('a#selidbe-ureda').click(function() {
	$('.page-heading').removeClass('shown');
	$('.page-heading-office').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-office').addClass('shown');
	$('.carousel').carousel(0);
});
$('a#selidbe-stana').click(function() {
	$('.page-heading').removeClass('shown');
	$('.page-heading-home').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-home').addClass('shown');
	$('.carousel').carousel(1);
});
$('a#selidbe-medjunarodno').click(function() {
	$('.page-heading').removeClass('shown');
	$('.page-heading-international').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-international').addClass('shown');
	$('.carousel').carousel(2);
});
$('a#selidbe-skladistenje').click(function() {
	$('.page-heading').removeClass('shown');
	$('.page-heading-archive').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-archive').addClass('shown');
	$('.carousel').carousel(3);
});




// --- [ Menu icon ]
(function() {
	$(".navbar-toggle").click(function() {
		return $(".navbar-toggle").toggleClass("cross");
	});
}).call(this);