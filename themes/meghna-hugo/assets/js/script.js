jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	// Preloader js
	$(window).on('load', function () {
		$('#preloader').fadeOut(300);
	});

	/* ========================================================================= */
	/*	Navigation/Header
	/* ========================================================================= */

	// Change nav/header background color on scroll
	$(window).on("scroll", function() {
	    if($(window).scrollTop() > 250) {
	        $("#navigation").addClass("on-scroll");
	    } else {
	        //remove the background property so it comes transparent again (defined in your css)
	       $("#navigation").removeClass("on-scroll");
	    }
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500

	});

	$("#features").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500
	});

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var filterizd = $('.filtr-container').filterizr({});
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the carousel
	$("#testimonials").slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2500
	});
	/* ========================================================================= */
	/*	Home Carousel
	/* =========================================================================  */

	//Init the carousel
	$("#home").slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect.
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut.

		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			var error = true;
			$('#message').css("border-color", "#D8000C");
		} else {
			$('#message').css("border-color", "#666");
		}

		//now when the validation is done we check if the error variable is false (no errors)
		if (error == false) {
			//disable the submit button to avoid spamming
			//and change the button text to Sending...
			$('#contact-submit').attr({
				'disabled': 'false',
				'value': 'Sending...'
			});

			/* using the jquery's post(ajax) function and a lifesaver
			function serialize() which gets all the data from the form
			we submit it to send_email.php */
			$.post("sendmail.php", $("#contact-form").serialize(), function (result) {
				//and after the ajax request ends we check the text returned
				if (result == 'sent') {
					//if the mail is sent remove the submit paragraph
					$('#cf-submit').remove();
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} else {
					//show the mail failed div
					$('#mail-fail').fadeIn(500);
					//re enable the submit button by removing attribute disabled and change the text back to Send The Message
					$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
				}
			});
		}
	});

});
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});

//https://github.com/matthieua/WOW/issues/196#issuecomment-348734401
var scrolled = false;
$(window).on('scroll', function () {
	if (!scrolled) {
		scrolled = true;
		wow.init();
	}
})


/* ========================================================================= */
/*	Staticman comments reply
/* ========================================================================= */
function changeValue(elementName, newValue) {
	document.getElementsByName(elementName)[0].value = newValue;
};

/* ========================================================================= */
/*	Honeypot
/* ========================================================================= */
$(document).ready(function () {
	$('form').submit(function () {
		if ($('input[type="text"]#e-mail').val().length > 0) {
			$('form').attr('action', '/');
			return false;
		}
	});
});

/* ========================================================================= */
/*	Three
/* ========================================================================= */

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}
