/* eslint-disable */
$(function () {
    "use strict";

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });

    var scrollLink = $('.page-scroll');

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $('.project_active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.testimonial_active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    var wow = new WOW({
        boxClass: 'wow',
        // mobile: false,
    });

    wow.init();

    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // 当设备是触摸屏时，移除所有 hover 样式
        const hoverElements = document.querySelectorAll(':hover');
        hoverElements.forEach(el => {
            el.classList.remove('hover');
        });
    }

});
