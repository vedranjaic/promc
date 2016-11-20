// --- [ SCROLL TO TOP ]
// init controller
var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
// build scene
var scene = new ScrollMagic.Scene({
	triggerElement: "a#top", 
	duration: 200, 
	triggerHook: "onLeave"
})
.setTween(tween)
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
	TweenMax.to(window, 0.5, {
		scrollTo: {
			y: newpos
		}
	});
});

// bind scroll to anchor links
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



// --- [ SCROLLSPY ]
// Set duration to screen height
var durationValueCache;
function getDuration () {
	return durationValueCache;
}
function updateDuration (e) {
	durationValueCache = window.innerHeight;
}
$(window).on("resize", updateDuration); // update the duration when the window size changes
$(window).triggerHandler("resize"); // set to initial value
scene.duration(getDuration); // supply duration method

// build scenes
new ScrollMagic.Scene({triggerElement: "#uvod", duration: getDuration})
	.setClassToggle("#scroll-to-top", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#selidbe", duration: getDuration})
	.setClassToggle("#nav-selidbe", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#klijenti", duration: getDuration})
	.setClassToggle("#nav-klijenti", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#o-nama", duration: getDuration})
	.setClassToggle("#nav-o-nama", "active") // add class toggle
	.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#kontakt", duration: getDuration})
	.setClassToggle("#nav-kontakt", "active") // add class toggle
	.addTo(controller);



// --- [ Intro page splits ]
$('.no-touch #page-slide-office, .split-office').hover(
	function(){ $('.split-office').css('width', '30vw') },
	function(){ $('.split-office').css('width', '28vw') }
);
$('.no-touch #page-slide-home, .split-home').hover(
	function(){ $('.split-home').css('width', '55vw') },
	function(){ $('.split-home').css('width', '53vw') }
);
$('.no-touch #page-slide-international, .split-international').hover(
	function(){ $('.split-international').css('width', '80vw') },
	function(){ $('.split-international').css('width', '78vw') }
);
$('.no-touch #page-slide-archive, .split-archive').hover(
	function(){ $('.split-archive').css('width', '105vw') },
	function(){ $('.split-archive').css('width', '103vw') }
);


// --- [ Intro links ]
// Toggle page text with carousel indicators
$('a#page-slide-office, a#selidbe-ureda').click(function() {
	$('#selidbe-ureda').tab('show');
	$('.page-heading').removeClass('shown');
	$('.page-heading-office').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-office').addClass('shown');
	$('.carousel').carousel(0);
});
$('a#page-slide-home, a#selidbe-stana').click(function() {
	$('#selidbe-stana').tab('show');
	$('.page-heading').removeClass('shown');
	$('.page-heading-home').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-home').addClass('shown');
	$('.carousel').carousel(1);
});
$('a#page-slide-international, a#selidbe-medjunarodno').click(function() {
	$('#selidbe-medjunarodno').tab('show');
	$('.page-heading').removeClass('shown');
	$('.page-heading-international').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-international').addClass('shown');
	$('.carousel').carousel(2);
});
$('a#page-slide-archive, a#selidbe-skladistenje').click(function() {
	$('#selidbe-skladistenje').tab('show');
	$('.page-heading').removeClass('shown');
	$('.page-heading-archive').addClass('shown');
	$('.page-text div').removeClass('shown');
	$('.page-text-archive').addClass('shown');
	$('.carousel').carousel(3);
});

// --- [ Carousel slides ]
$('.carousel-slides').carousel({
	interval: false
});


// --- [ Clients ]
$('#carousel-clients-1').carousel({interval: 13000});
$('#carousel-clients-2').carousel({interval: 7000});
$('#carousel-clients-3').carousel({interval: 11000});
$('#carousel-clients-4').carousel({interval: 3000});
$('#carousel-clients-5').carousel({interval: 9000});
$('#carousel-clients-6').carousel({interval: 5000});


// --- [ Questionnaire ]
$('.prefer-call:checkbox').change(function(){
	if($(this).is(":checked")) {
		$('.form-section-contact .form-group-number').removeClass("hidden");
		$('.form-section-contact .form-group.col-sm-6').removeClass('col-sm-6').addClass('col-sm-4');
	} else {
		$('.form-section-contact .form-group-number').addClass("hidden");
		$('.form-section-contact .form-group.col-sm-4').removeClass('col-sm-4').addClass('col-sm-6');
	}
});

// --- [ Toggle more info ]
$(".form-section-toggle, .page-text-collapse").on("click", function() {
	var el = $(this);
	if (el.text() == el.data("text")) {
		el.text(el.data("text-original"));
	} else {
		el.data("text-original", el.text());
		el.text(el.data("text"));
	}
});


// --- [ Menu icon ]
(function() {
	$(".navbar-toggle").click(function() {
		return $(".navbar-toggle").toggleClass("cross");
	});
}).call(this);