/*global $ */
$(document).ready(function ($) {
    'use strict';

    $("#loading").fadeOut(3000, function () {
        $(this).parent().hide();
        $('body').css({ "overflow": "auto" });
    });

    // SELECT PICKER
    $('select').niceSelect();

    /*=====  WOW  ========*/
    new WOW().init();


    /*=====  skitter  ========*/

    $('.skitter-large').skitter({
        progressbar: true,
        theme: "minimalist"
    });

    $(".skitter-large").each(function () {
        $('.label_skitter').addClass('slider-label-bg');
    });



    
    /**********  Change active class  */
    $(".category-button").click(function () {
        $(".category-button").removeClass('active-filter');
        $(this).addClass('active-filter');
    });




    /********** OVERLAY BTN CENTER  ******/
    $('.projest-box').each(function () {
        $('.procard-overlay').css("padding-top", ($('.projest-box').height() - $('.procard-overlay .btn').height()) / 2);
    });





    //SCROLL STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.page-nav').addClass("navbar-fixed-top");
        }
        else {
            $('.page-nav').removeClass("navbar-fixed-top");
        }
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {    // If page is scrolled more than 50px
            $('.scrol-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.scrol-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.scrol-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 1000);
    });





});



$(document).ready(function ($) {
    'use strict';

    // PHOTO GALLERY BIG SHOW PHOTO
    $('.photos-carousel').owlCarousel({
        items: 1,
        rtl: true,
        margin: 0,
        autoplay: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // PHOTO GALLERY SMALL SHOW PHOTO THUMBS 
    $('.photo-thumbs-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 6,
        rtl: true,
        autoplay: false,
        animate: true,
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    // PRODUCT PAGE SHOW BIG PHOTO
    $('.product-carousel').owlCarousel({
        items: 1,
        rtl: true,
        margin: 0,
        autoplay: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // PRODUCT PAGE SHOW SMALL PHOTO THUMBS
    $('.product-thumbs-carousel').owlCarousel({
        loop: true,
        margin: 0,
        // items: 6,
        rtl: true,
        autoplay: false,
        animate: true,
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        responsive: {
            0: {
                items: 3
            },
            400: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });



});

// COUNT INCREASE AND DECREASE 
$('.add-btn').on('click', function () {
    var $qty = $(this).closest('div').find('.prod-count-value');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
    }
});

$('.minuse-btn').on('click', function () {
    var $qty = $(this).closest('div').find('.prod-count-value');
    var currentVal = parseInt($qty.val());
    if (!isNaN(currentVal) && currentVal > 0) {
        $qty.val(currentVal - 1);
    }
});


/*=====  mixitup  ========*/
var mixer = mixitup('.products-box');

