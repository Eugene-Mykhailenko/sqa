

$(document).ready(function () {
    

    // load
    $(window).on('load', function () {
    });

    // scroll
    $(window).on("scroll", function () {
        // fix menu
        if ($(window).scrollTop() > 10) {
            $(".main__menu").addClass("-navbar_scroll");
        } else {
            $(".main__menu").removeClass("-navbar_scroll");
        }
        // fix menu end
        // fix vertical menu
        if ($(window).scrollTop() > 450) {
            $(".vertical__nav").addClass("-scroll_on");
        } else {
            $(".vertical__nav").removeClass("-scroll_on");
        }
    });
        
    if ($(window).scrollTop() > 10) {
        $(".main__menu").addClass("-navbar_scroll");
    } else {
        $(".main__menu").removeClass("-navbar_scroll");
    }

    //slider
    $('.testimonials__slider').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.traning__slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


    // resize
    $(window).on("resize", function () {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
    });

    // mobile menu END


    ////dropdown
    //$('.dropdown__menu').dropdown({
    //        inDuration: 300,
    //        outDuration: 225,
    //        constrain_width: true, // Does not change width of dropdown to that of the activator
    //        //hover: true, // Activate on hover
    //        gutter:0, // Spacing from edge
    //        belowOrigin: true, // Displays dropdown below the button
    //        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    //    }
    //);



    // anchor scrollTo
    $('.navbar-nav a[href*=#]').bind("click", function (e) {
        var anchor = $(this);

        $('.navbar-nav > li').removeClass('active');
        $(this).parent().addClass('-active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        
        e.preventDefault();
        return false;
    });

    $('.vertical__nav a[href*=#]').bind("click", function (e) {
        var anchor = $(this);

        $('.vertical__nav a').removeClass('-active');
        $(this).addClass('-active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);

        e.preventDefault();
        return false;
    });

    $("section, footer").waypoint(function (direction) {
        if (direction === "down") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
            $(".vertical__nav a[href*=#" + this.element.id + "]").addClass('-active').siblings().removeClass('-active');
        }
    }, {
        offset: "50%"
    });

    $("section, footer").waypoint(function (direction) {
        if (direction === "up") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
            $(".vertical__nav a[href*=#" + this.element.id + "]").addClass('-active').siblings().removeClass('-active');
        }
    }, {
        offset: "-1%"
    });
    // anchor scroll end






// materialize

    $('#textarea1').trigger('autoresize');

    $(document).ready(function() {
        $('select').material_select();
    });
    
// materialize END

});
