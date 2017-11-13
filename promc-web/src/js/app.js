/* SmtpJS.com */
function createEmail(t, e, o, n, d, r, c) {
  var a = Math.floor(1e6 * Math.random() + 1);
  var m = "http://smtpjs.com/smtp.aspx?";
  m += "From=" + t;
  m += "&to=" + e;
  m += "&Subject=" + encodeURIComponent(o);
  m += "&Body=" + encodeURIComponent(n);

  if (void 0 == d.token) {
    m += "&Host=" + d;
    m += "&Username=" + r;
    m += "&Password=" + c;
    m += "&Action=Send";
  } else {
		m += "&SecureToken=" + d.token;
		m += "&Action=SendFromStored";
	}

  m += "&cachebuster=" + a;
  return m;
};

// dodat na tag form novalidate
$("[id^='form-']").submit(function(event) {
  var form = $(this);
  var validationUnsuccessful = false;

  var name = $(this).find("[id$='-name']");
  if ($.trim(name.val()) === "") {
    validationUnsuccessful = true;
    name.parent().addClass("has-error");
  } else if ($.trim(name.val()) !== "") {
    name.parent().removeClass("has-error");
  }

  var email = $(this).find("[id$='-email']");
  if ($.trim(email.val()) === "" || email[0].validity.typeMismatch) {
    validationUnsuccessful = true;
    email.parent().addClass("has-error");
  } else if ($.trim(email.val()) !== "") {
    email.parent().removeClass("has-error");
  }

  var number = $(this).find("[id$='-number']");
  if ($.trim(number.val()) === "" || number[0].validity.patternMismatch) {
    validationUnsuccessful = true;
    number.parent().addClass("has-error");
  } else if ($.trim(number.val()) !== "") {
    number.parent().removeClass("has-error");
  }

  if (validationUnsuccessful) {
    showAlertDismissible(true, form.find(".alert.alert-danger.alert-dismissible"));
  } else {
    showAlertDismissible(false, form.find(".alert.alert-danger.alert-dismissible"));

    var loading = form.find('.loading');
    loading.removeClass("hidden");

    var formData = $(this).serializeArray();
    // console.log(formData);

    var dataString = "";
    $(formData).each(function(index, obj){
      dataString += obj.name + ": " + obj.value + "\n";
    });

    $.ajax({
      dataType: "jsonp",
      url: createEmail("info@promc.hr",
                       "info@promc.hr",
                       form.attr("name"),
                       dataString,
                       {token: "a4c57989-f03c-4300-9a78-3a3b408d17ca"}),
      jsonpCallback: function() {
        loading.addClass("hidden");
        form.addClass("hidden");
        form.next().removeClass("hidden");

        // send mail to customer
        $.ajax({
          dataType: "jsonp",
          url: createEmail("info@promc.hr",
                           formData[1].value,
                           form.attr("name"),
                           dataString,
                           {token: "a4c57989-f03c-4300-9a78-3a3b408d17ca"}),
          jsonpCallback: function() {
            return "OK";
          }
        });

        return "OK";
      }
    });
  }

  event.preventDefault();
});

$(".alert.alert-danger.alert-dismissible .close").on("click", function(e) {
  showAlertDismissible(false, $(e.currentTarget).parent());
});

function showAlertDismissible(show, errorTarget) {
  if (show) {
    errorTarget.removeClass("hidden");
  } else {
    errorTarget.addClass("hidden");
  }
}

$(".btn-send-another").on("click", function(e) {
  $(e.currentTarget).parent().parent().addClass("hidden"); // thank you message
  $(e.currentTarget).parent().parent().prev().removeClass("hidden"); // form
});




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


// --- [ ABOUT US COUNTER ]
var scene = new ScrollMagic.Scene({triggerElement: "#o-nama", duration: 200})
	.addTo(controller)
	.on("enter", function () {
		$('#progress-ormara').animateNumber({
			number: 1576,
			easing: 'easeInQuad'
		}, 2500);
		$('#progress-kutija').animateNumber({
			number: 22164,
			easing: 'easeInQuad'
		}, 2500);
		$('#progress-stolica').animateNumber({
			number: 4725,
			easing: 'easeInQuad'
		}, 2500);
		$('#progress-cvijeca').animateNumber({
			number: 1092,
			easing: 'easeInQuad'
		}, 2500);
	});


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



// --- [ Questionnaire ]
// $('.prefer-call:checkbox').change(function(){
//   // MOZE SE MAKNUT OVO
// 	if($(this).is(":checked")) {
// 		$('.form-section-contact .form-group-number').removeClass("hidden");
// 		$('.form-section-contact .form-group.col-sm-6').removeClass('col-sm-6').addClass('col-sm-4');
// 	} else {
// 		$('.form-section-contact .form-group-number').addClass("hidden");
// 		$('.form-section-contact .form-group.col-sm-4').removeClass('col-sm-4').addClass('col-sm-6');
// 	}
// });

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

// --- [ Menu close on chosen section ]
$(".scroll-to").click(function() {
	$('#navbar-main-collapse').collapse('hide')
	return $(".navbar-toggle").toggleClass("cross");
});


// --- [ Clients grid ]
// $(function(){
//     function random(n) {
//         return Math.floor(Math.random() * n);
//     }
//     var transition_time = 500;
//     var waiting_time = 3000;
//     var images = $('.client-logo-set').hide();
//     var n = images.length;
//     var current = random(n);
//     images.hide();
//     images.eq(current).show();

//     var interval_id = setInterval(function () {
//         images.eq(current).fadeOut(transition_time, function () {
//             current = random(n);
//             images.eq(current).fadeIn(transition_time);
//         });
//     }, 2 * transition_time + waiting_time);
// });



function setArrayOfNumbers() {
	arrayOfNumbers = [
		1, 2, 3, 4, 5, 6
	]
}

function setStartArrayOfImages() {

	arrayOfNumbers = [
		1, 2, 3, 4, 5, 6
	],
	arrayOfImages = [
		{
			url: 'https://www.zemljiste.mps.hr/',
			image: 'assets/images/clients/logo-apz.png',
			title: 'Agencija za poljoprivredno zemljište'
		}, 
		{
			url: 'http://www.argentum.hr/',
			image: 'assets/images/clients/logo-argentum.png',
			title: 'Argentum'
		}, 
		{
			url: 'https://atalian.hr/',
			image: 'assets/images/clients/logo-atalian.svg',
			title: 'Atalian Global Services Croatia'
		}, 
		{
			url: 'http://www.crosig.hr/hr/',
			image: 'assets/images/clients/logo-croatia-osiguranje.svg',
			title: 'Croatia Osiguranje'
		}, 
		{
			url: 'https://www.ericsson.hr/',
			image: 'assets/images/clients/logo-ericsson.svg',
			title: 'Ericsson Nikola Tesla'
		}, 
		{
			url: 'https://www.erstecardclub.hr/hr/',
			image: 'assets/images/clients/logo-erste-card-club.svg',
			title: 'ERSTE Card Club'
		}, 
		{
			url: 'http://www.generali.hr/',
			image: 'assets/images/clients/logo-generali-osiguranje.svg',
			title: 'Generali Osiguranje'
		}, 
		{
			url: 'https://www.addiko.hr/',
			image: 'assets/images/clients/logo-hypo-aab.svg',
			title: 'Hypo Alpe Adria Bank'
		}, 
		{
			url: 'http://www.the-eurogroup.com/',
			image: 'assets/images/clients/logo-international-movers.svg',
			title: 'Eurogroup International Movers'
		}, 
		{
			url: 'https://www.konzum.hr/',
			image: 'assets/images/clients/logo-konzum.svg',
			title: 'Konzum'
		}, 
		{
			url: 'https://www.lidl.hr/hr/',
			image: 'assets/images/clients/logo-lidl.svg',
			title: 'LIDL'
		}, 
		{
			url: 'http://www.lr.org/en/',
			image: 'assets/images/clients/logo-lloyds-register.png',
			title: 'Lloyd\'s Register'
		}, 
		{
			url: 'http://www.multiservis.hr/en/',
			image: 'assets/images/clients/logo-luxor-multiservis.png',
			title: 'Luxor multiservis'
		}, 
		{
			url: 'http://www.metus.hr/',
			image: 'assets/images/clients/logo-metus.png',
			title: 'Metus dizala'
		}, 
		{
			url: 'http://www.moderna-galerija.hr/',
			image: 'assets/images/clients/logo-moderna-galerija.png',
			title: 'Moderna galerija'
		}, 
		{
			url: 'http://www.omega-software.hr/',
			image: 'assets/images/clients/logo-omega-software.svg',
			title: 'Omega software'
		}, 
		{
			url: 'http://www.panasonic.com/hr/',
			image: 'assets/images/clients/logo-panasonic.svg',
			title: 'Panasonic Hrvatska'
		}, 
		{
			url: 'http://rexpo.hr/',
			image: 'assets/images/clients/logo-rexpo.svg',
			title: 'Rexpo'
		}, 
		{
			url: 'http://w5.siemens.com/web/hr/hr/corporate/portal/siemens_hrvatska/Pages/Default.aspx',
			image: 'assets/images/clients/logo-siemens-wind-power.gif',
			title: 'Siemens Wind Power'
		}, 
		{
			url: 'http://www.smart-net.hr/',
			image: 'assets/images/clients/logo-smart-net.png',
			title: 'Smart net'
		}, 
		{
			url: 'http://www.strabag.hr/',
			image: 'assets/images/clients/logo-strabag.svg',
			title: 'STRABAG'
		}, 
		{
			url: 'http://www.studio-moderna.com/',
			image: 'assets/images/clients/logo-studio-moderna.png',
			title: 'Studio moderna'
		}
	];
	
	setStartImagesAndStartCircle();

	// var clientLogosFolder = 'assets/images/clients/';

	// var randomMath = Math.floor(Math.random() * arrayOfImages.length);
	// var selectedImage = arrayOfImages[randomMath];
	// var imagePath = clientLogosFolder + selectedImage.image;
}

function setStartImagesAndStartCircle() {
	for (i=0;i<6;i++) {
	    var randomIndexFromCurrentArray = Math.floor(Math.random() * arrayOfImages.length);
	    document.getElementById("link-".toString() + (i +1).toString()).href = arrayOfImages[randomIndexFromCurrentArray].url;
	    document.getElementById("logo-".toString() + (i +1).toString()).src = arrayOfImages[randomIndexFromCurrentArray].image;
	    document.getElementById("logo-".toString() + (i +1).toString()).alt = arrayOfImages[randomIndexFromCurrentArray].title;
	    document.getElementById("logo-".toString() + (i +1).toString()).title = arrayOfImages[randomIndexFromCurrentArray].title;
	    arrayOfImages.splice(randomIndexFromCurrentArray, 1);
	}
  setOneRandomImage();
}

function setOneRandomImage() {
    period = 2;
    if (arrayOfImages.length > 0) {
    	if (arrayOfNumbers.length > 0) {
		    var randomNumber = Math.floor(Math.random() * arrayOfNumbers.length);
		    // var randomIdFromOneToSix = Math.floor(Math.random() * 6) + 1;
		    var randomIndexFromCurrentArray = Math.floor(Math.random() * arrayOfImages.length);
		    document.getElementById("link-".toString() + (arrayOfNumbers[randomNumber]).toString()).href = arrayOfImages[randomIndexFromCurrentArray].url;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).src = arrayOfImages[randomIndexFromCurrentArray].image;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).alt = arrayOfImages[randomIndexFromCurrentArray].title;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).title = arrayOfImages[randomIndexFromCurrentArray].title;
		    arrayOfImages.splice(randomIndexFromCurrentArray, 1);
		    arrayOfNumbers.splice(randomNumber, 1);
		    setTimeout(setOneRandomImage, period*1000);

    	} else {
    		setArrayOfNumbers();
    		var randomNumber = Math.floor(Math.random() * arrayOfNumbers.length);
		    // var randomIdFromOneToSix = Math.floor(Math.random() * 6) + 1;
		    var randomIndexFromCurrentArray = Math.floor(Math.random() * arrayOfImages.length);
		    document.getElementById("link-".toString() + (arrayOfNumbers[randomNumber]).toString()).href = arrayOfImages[randomIndexFromCurrentArray].url;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).src = arrayOfImages[randomIndexFromCurrentArray].image;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).alt = arrayOfImages[randomIndexFromCurrentArray].title;
		    document.getElementById("logo-".toString() + (arrayOfNumbers[randomNumber]).toString()).title = arrayOfImages[randomIndexFromCurrentArray].title;
		    arrayOfImages.splice(randomIndexFromCurrentArray, 1);
		    arrayOfNumbers.splice(randomNumber, 1);
		    setTimeout(setOneRandomImage, period*1000);
    	}
    } else {
      setStartArrayOfImages();
    }
}

var arrayOfImages;
setStartArrayOfImages();









