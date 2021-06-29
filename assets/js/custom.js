/* Global jQuery */

/* Contents
// ------------------------------------------------>
     1. wow animation
     2. Menu Mobile
     3. Cart
     4. Search
     5. Owl Slider
     6. Light Box
     7. Fixed Header
*/

(function ($) {
	"use strict";





	/* ------------------  2. Menu Mobile ------------------ */
	var $menu_show = $('.mobile-toggle'),
		$menu = $('header #menu-main'),
		$list = $("ul.nav-menu li a"),
		$menu_list = $('header li.has-dropdown'),
		$menu_ul = $('ul.sub-menu'),
		$cart_model = $('.cart-model'),
		$cart_link = $('#cart-link'),
		$search_bar = $('#search_bar'),
		$search_close = $('.close-search'),
		$search_bot = $('#search-header'),
		$fixed_header = $('#fixed-header'),
		$fixed_header_dark = $('#fixed-header-dark'),
		$sticky_content = $('.sticky-content'),
		$sticky_sidebar = $('.sticky-sidebar');

	$menu_show.on("click", function (e) {
		$menu.slideToggle();
	});
	$list.on("click", function (e) {
		var submenu = this.parentNode.getElementsByTagName("ul").item(0);
		if (submenu != null) {
			event.preventDefault();
			$(submenu).slideToggle();
		}
	});



	/* ------------------  3. Cart ------------------ */
	$cart_link.on("click", function (e) {
		$cart_model.slideToggle("fast");
	});

	$(window).on("click", function (e) {
		$cart_model.hide("fast");
	});
	$cart_link.on("click", function (e) {
		event.stopPropagation();
	});





	/* ------------------  4. Search ------------------ */
	$search_bot.on("click", function (e) {
		$search_bar.slideToggle("fast");
	});
	$search_close.on("click", function (e) {
		$search_bar.hide("fast");
	});




	/* ------------------  5.Owl Slider ------------------ */
	var owl2 = $(".slider-1");
	var owl3 = $('.travelers-say-3');
	var owl = $(".testimonial-carousel");
	owl.owlCarousel({
		items: 3, //10 items above 1000px browser width
		itemsDesktop: [1000, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		slideSpeed: 1000,
		autoPlay: true,
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	});
	owl2.owlCarousel({
		items: 1, //10 items above 1000px browser width
		itemsDesktop: [1000, 1], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 1], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		slideSpeed: 1000,
		autoPlay: true,
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	});
	owl3.owlCarousel({
		dotsContainer: '#carousel-custom-dots',
		items: 3, //10 items above 1000px browser width
		itemsDesktop: [1000, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	});




	/* ------------------  6. Light Box ------------------ */
	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});




	/* ------------------  7. Fixed Header ------------------ */
	$(window).on("scroll", function () {
		if ($(window).scrollTop() >= 50) {
			$fixed_header.addClass('fixed-header');
			$fixed_header_dark.addClass('fixed-header-dark');
		} else {
			$fixed_header.removeClass('fixed-header');
			$fixed_header_dark.removeClass('fixed-header-dark');
		}
	});

	$('a[href="#search"]').on("click", function (event) {
		event.preventDefault();
		$("#search").addClass("open");
		$('#search > form > input[type="search"]').focus();
	});

	$("#search, #search button.close").on("click keyup", function (event) {
		if (
			event.target == this ||
			event.target.className == "close" ||
			event.keyCode == 27
		) {
			$(this).removeClass("open");
		}
	});

	$("form").submit(function (event) {
		event.preventDefault();

		return false;
	});
	$("#form-submit-btn-one").click(function (e) {
		e.preventDefault();
		var nameValid = false;
		var addressValid = false;
		var goodsDescriptionValid = false;
		var emailValid = false;
		var quantityValid = false;
		var portValid = false;


		var name = $("#fullname-field-one").val();
		var address = $("#address-field-one").val();
		var goodsDescription = $("#goods-description-field-one").val();
		var email = $("#email-field-one").val();
		var quantity = $("#quantity-field-one").val();
		var port = $("#port-field-one").val();
		console.log(`${name}  ${address}  ${goodsDescription}  ${email}  ${quantity}  ${port}`);
		if (name.trim().length > 0) {
			nameValid = true;
			$("#fullname-field-one").removeClass("is-invalid");
		} else {
			$("#fullname-field-one").addClass("is-invalid");
		}

		if (address.trim().length > 0) {
			addressValid = true;
			$("#address-field-one").removeClass("is-invalid");
		} else {
			$("#address-field-one").addClass("is-invalid");
		}

		if (goodsDescription.trim().length > 0) {
			goodsDescriptionValid = true;
			$("#goods-description-field-one").removeClass("is-invalid");
		} else {
			$("#goods-description-field-one").addClass("is-invalid");
		}

		if (email.trim().length > 0 && email.includes("@")) {
			emailValid = true;
			$("#email-field-one").removeClass("is-invalid");
		} else {
			$("#email-field-one").addClass("is-invalid");
		}


		if (quantity.trim().length > 0) {
			quantityValid = true;
			$("#quantity-field-one").removeClass("is-invalid");
		} else {
			$("#quantity-field-one").addClass("is-invalid");
		}

		if (port.trim().length > 0) {
			portValid = true;
			$("#port-field-one").removeClass("is-invalid");
		} else {
			$("#port-field-one").addClass("is-invalid");
		}

		if (nameValid && addressValid && goodsDescriptionValid && emailValid && quantityValid && portValid) {
			$("#form-submit-btn-one").text("Sending...");
			var data = {
				email,
				name,
				address,
				goodsDescription,
				quantity,
				port
			}
			$.post("http://josephcobbinah.com:3010", data, function (data) {

				$("#form-submit-btn-one").text("SEND MESSAGE");
				$("#fullname-field-one").val("");
				$("#address-field-one").val("");
				$("#goods-description-field-one").val("");
				$("#email-field-one").val("");
				$("#quantity-field-one").val("");
				$("#port-field-one").val("");
				alert("Email sent successfully");
			}).fail(function () {
				alert("Sorry, was unable to send email");
				$("#form-submit-btn-one").text("SEND MESSAGE");
			});


		}
	});


	$("#form-submit-btn-two").click(function (e) {
		e.preventDefault();
		var nameValid = false;
		var addressValid = false;
		var goodsDescriptionValid = false;
		var emailValid = false;
		var quantityValid = false;
		var portValid = false;


		var name = $("#fullname-field-two").val();
		var address = $("#address-field-two").val();
		var goodsDescription = $("#goods-description-field-two").val();
		var email = $("#email-field-two").val();
		var quantity = $("#quantity-field-two").val();
		var port = $("#port-field-two").val();
		console.log(`${name}  ${address}  ${goodsDescription}  ${email}  ${quantity}  ${port}`);
		if (name.trim().length > 0) {
			nameValid = true;
			$("#fullname-field-two").removeClass("is-invalid");
		} else {
			$("#fullname-field-two").addClass("is-invalid");
		}

		if (address.trim().length > 0) {
			addressValid = true;
			$("#address-field-two").removeClass("is-invalid");
		} else {
			$("#address-field-two").addClass("is-invalid");
		}

		if (goodsDescription.trim().length > 0) {
			goodsDescriptionValid = true;
			$("#goods-description-field-two").removeClass("is-invalid");
		} else {
			$("#goods-description-field-two").addClass("is-invalid");
		}

		if (email.trim().length > 0 && email.includes("@")) {
			emailValid = true;
			$("#email-field-two").removeClass("is-invalid");
		} else {
			$("#email-field-two").addClass("is-invalid");
		}


		if (quantity.trim().length > 0) {
			quantityValid = true;
			$("#quantity-field-two").removeClass("is-invalid");
		} else {
			$("#quantity-field-two").addClass("is-invalid");
		}

		if (port.trim().length > 0) {
			portValid = true;
			$("#port-field-two").removeClass("is-invalid");
		} else {
			$("#port-field-two").addClass("is-invalid");
		}

		if (nameValid && addressValid && goodsDescriptionValid && emailValid && quantityValid && portValid) {
			$("#form-submit-btn-two").text("Sending...");
			var data = {
				email,
				name,
				address,
				goodsDescription,
				quantity,
				port
			}
			$.post("http://josephcobbinah.com:3010", data, function (data) {

				$("#form-submit-btn-two").text("SEND MESSAGE");
				$("#fullname-field-two").val("");
				$("#address-field-two").val("");
				$("#goods-description-field-two").val("");
				$("#email-field-two").val("");
				$("#quantity-field-two").val("");
				$("#port-field-two").val("");
				alert("Email sent successfully");
			}).fail(function () {
				alert("Sorry, was unable to send email");
				$("#form-submit-btn-two").text("SEND MESSAGE");
			});


		}
	});



}(jQuery));
