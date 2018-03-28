var menu1 = false;
var filterDropdown = false;
var featuredDropdown = false;
var moreDropdown = false;
var rotated = false;

$(document).ready(function () {
    var mobile = $(window).width() < 600;
    //Hiding shit
    $("#mobile-menu-1").css('display', 'flex');
    $("#mobile-menu-1").hide();
    $("#filtersTest").css('display', 'grid');
    $("#filtersTest").hide();
    $("#featuredDropdown").css('display', 'block');
    $("#featuredDropdown").hide();
    if (mobile) {

        //Burger Rotate
        $("#hamburger").click(() => {
            if (menu1) {
                $("#burger").css({
                    'transform': 'rotate(0deg)',
                    '-webkit-transform': 'rotate(0deg)',
                    '-moz-transform' : 'rotate(0deg)',
                    '-ms-transform' : 'rotate(0deg)',
                    '-o-transform' : 'rotate(0deg)'
                });
                $("#burger").css({
                    'color': '#252422'
                });
                $("#hamburger").css({
                    'backgroundColor': 'whitesmoke'
                });
                $("#hamburger").css({
                    'transform': 'rotate(0deg)',
                    '-webkit-transform': 'rotate(0deg)',
                    '-moz-transform' : 'rotate(0deg)',
                    '-ms-transform' : 'rotate(0deg)',
                    '-o-transform' : 'rotate(0deg)'
                });
                $("#hamburger .nav-mobile-item").css({
                    'transform': 'rotate(0deg)',
                    '-webkit-transform': 'rotate(0deg)',
                    '-moz-transform' : 'rotate(0deg)',
                    '-ms-transform' : 'rotate(0deg)',
                    '-o-transform' : 'rotate(0deg)'
                });
                rotated = false;
            } else {
                $("#burger").css({
                    'transform': 'rotate(90deg)',
                    '-webkit-transform': 'rotate(90deg)',
                    '-moz-transform' : 'rotate(90deg)',
                    '-ms-transform' : 'rotate(90deg)',
                    '-o-transform' : 'rotate(90deg)'
                });
                $("#burger").css({
                    'color': 'whitesmoke'
                });
                $("#hamburger").css({
                    'backgroundColor': '#252422'
                });
            }
            filterDropdown = false;
            $("#filtersTest").slideUp("fast");
            $("#filters").css("color", "whitesmoke");
            $("#mobile-menu-1").slideToggle("fast");
            $("#featuredDropdown").slideUp("fast");
            $("#featured").css("color", "whitesmoke");
            featuredDropdown = false;
            $("#moreDropdown").slideUp("fast");
            $("#more").css("color", "whitesmoke");
            moreDropdown = false;
            menu1 = !menu1;
            console.log("Burger");
        });

        //Filters Stuff
        $("#filters").click(() => {

            //Turn off featured
            if (featuredDropdown) {
                featuredDropdown = false;
                $("#featuredDropdown").slideUp("fast");
                $("#featured").css("color", "whitesmoke");
            }
            //Turn off more
            if (moreDropdown) {
                moreDropdown = false;
                $("#moreDropdown").slideUp("fast");
                $("#more").css("color", "whitesmoke");
            }
            if (!filterDropdown) {
                if (!rotated) {
                    $("#hamburger").css({
                        'transform': 'rotate(90deg)',
                        '-webkit-transform': 'rotate(90deg)',
                        '-moz-transform' : 'rotate(90deg)',
                        '-ms-transform' : 'rotate(90deg)',
                        '-o-transform' : 'rotate(90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'transform': 'rotate(-90deg)',
                        '-webkit-transform': 'rotate(-90deg)',
                        '-moz-transform' : 'rotate(-90deg)',
                        '-ms-transform' : 'rotate(-90deg)',
                        '-o-transform' : 'rotate(-90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'border-bottom': 'none'
                    });
                    $("#filtersTest").delay("slow").slideDown("fast");
                    rotated = true;
                } else {
                    $("#filtersTest").slideDown("fast");
                }
                $("#filters").css("color", "orange");
            }
            if (filterDropdown) {
                $("#filtersTest").slideUp("fast");
                $("#filters").css("color", "whitesmoke");
            }
            filterDropdown = !filterDropdown;
        });

        $("#featured").click(() => {
            //Turn off filters
            if (filterDropdown) {
                filterDropdown = false;
                $("#filtersTest").slideUp("fast");
                $("#filters").css("color", "whitesmoke");
            }
            //Turn off more
            if (moreDropdown) {
                moreDropdown = false;
                $("#moreDropdown").slideUp("fast");
                $("#more").css("color", "whitesmoke");
            }
            //Turn on shit
            if (!featuredDropdown) {
                if (!rotated) {
                    $("#hamburger").css({
                        'transform': 'rotate(90deg)',
                        '-webkit-transform': 'rotate(90deg)',
                        '-moz-transform' : 'rotate(90deg)',
                        '-ms-transform' : 'rotate(90deg)',
                        '-o-transform' : 'rotate(90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'transform': 'rotate(-90deg)',
                        '-webkit-transform': 'rotate(-90deg)',
                        '-moz-transform' : 'rotate(-90deg)',
                        '-ms-transform' : 'rotate(-90deg)',
                        '-o-transform' : 'rotate(-90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'border-bottom': 'none'
                    });
                    $("#featuredDropdown").delay("slow").slideDown("fast");
                    rotated = true;
                } else {
                    $("#featuredDropdown").slideDown("fast");
                }
                $("#featured").css("color", "orange");
            }
            if (featuredDropdown) {
                $("#featuredDropdown").slideUp("fast");
                $("#featured").css("color", "whitesmoke");
            }
            featuredDropdown = !featuredDropdown;
        });

        $("#more").click(() => {
            //Turn off filters
            if (filterDropdown) {
                filterDropdown = false;
                $("#filtersTest").slideUp("fast");
                $("#filters").css("color", "whitesmoke");
            }
            //Turn off featured
            if (featuredDropdown) {
                featuredDropdown = false;
                $("#featuredDropdown").slideUp("fast");
                $("#featured").css("color", "whitesmoke");
            }
            //Turn on shit
            if (!moreDropdown) {
                if (!rotated) {
                    $("#hamburger").css({
                        'transform': 'rotate(90deg)',
                        '-webkit-transform': 'rotate(90deg)',
                        '-moz-transform' : 'rotate(90deg)',
                        '-ms-transform' : 'rotate(90deg)',
                        '-o-transform' : 'rotate(90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'transform': 'rotate(90deg)',
                        '-webkit-transform': 'rotate(-90deg)',
                        '-moz-transform' : 'rotate(-90deg)',
                        '-ms-transform' : 'rotate(-90deg)',
                        '-o-transform' : 'rotate(-90deg)'
                    });
                    $("#hamburger .nav-mobile-item").css({
                        'border-bottom': 'none'
                    });
                    $("#moreDropdown").delay("slow").slideDown("fast");
                    rotated = true;
                } else {
                    $("#moreDropdown").slideDown("fast");
                }
                $("#more").css("color", "orange");
            }
            if (moreDropdown) {
                $("#moreDropdown").slideUp("fast");
                $("#more").css("color", "whitesmoke");
            }
            moreDropdown = !moreDropdown;
        });
    }
});