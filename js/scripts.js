(function ($) {
    'use strict';


    /*-------------------------------------------------------------------------------
       Detect mobile device 
     -------------------------------------------------------------------------------*/

    var navbar = $('.js-navbar:not(.navbar-fixed)');


    $(window).on('load', function () {

        $('.loader').fadeOut(1000);
    });

    /*-------------------------------------------------------------------------------
      Owl Carousel
    -------------------------------------------------------------------------------*/


    if ($('.owl-carousel').length > 0) {

        $(".review-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 1,

                },
                1280: {
                    items: 1
                }
            },
            responsiveRefreshRate: 0,
            nav: true,
            navText: [],
            animateIn: 'fadeIn',
            dots: false
        });

        $(".project-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 1,

                },
                1280: {
                    items: 1
                }
            },
            autoHeight: true,
            nav: true,
            navText: [],
            loop: true,
            responsiveRefreshRate: 0,
            smartSpeed: 500,
            dots: false
        });

    }




    /*-------------------------------------------------------------------------------
      Full screen sections 
    -------------------------------------------------------------------------------*/



    if ($('.pagepiling').length > 0) {

        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
            afterLoad: function (anchorLink, index) {
                if ($('.pp-section.active').scrollTop() > 0) {
                    $('.navbar').removeClass('navbar-white');
                }
                else {
                    $('.navbar').addClass('navbar-white');
                }

            }
        });



        /*-------------------------------------------------------------------------------
           Scroll into sections 
        /-------------------------------------------------------------------------------*/



        $('.pp-scrollable').on('scroll', function () {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
                $('.navbar-2').removeClass('navbar-white');
            }
            else {
                $('.navbar-2').addClass('navbar-white');
            }
        });



        /*-------------------------------------------------------------------------------
           Scroller navigation
        /-------------------------------------------------------------------------------*/



        $('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');

        $('.pp-nav-up').on('click', function () {
            $.fn.pagepiling.moveSectionUp();
        });

        $('.pp-nav-down').on('click', function () {
            $.fn.pagepiling.moveSectionDown();
        });
    }



    /*-------------------------------------------------------------------------------
      Change bacgkround on project section
    -------------------------------------------------------------------------------*/



    $('.project-box').on('mouseover', function () {
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });



    /*-------------------------------------------------------------------------------
      Ajax Forms
    -------------------------------------------------------------------------------*/

    document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("pizzaOrder");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
};
})(jQuery);
