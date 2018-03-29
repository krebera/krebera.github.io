var faded = false;
var mobile = false;
var sliderOut = true;
var colorfaded = false;

$(document).ready(function () {
    // jQuery methods go here...
    mobile = $(window).width() < 600;
    $("body").css("background-color", "#fdfffc");
    

    $(".link-icon").hover(function () {
        $(this).addClass("animated pulse");
    }, function () {
        $(this).removeClass('animated pulse');
    });

    if(mobile) {
        $("#mobile-social-bar").css("display", "block");
        $("#mobile-social-bar").show();
        $(document).scrollTop(550);
    }

    scrollUpdate($(document).scrollTop());

    $("#c-1").css("background-color", "#252422"); //"#92a8d1");//"#5EBD3E");//"#450920");
    $("#c-2").css("background-color", "#eb5e28"); //"#f7786b");//"#F78200");//#da627d");
    $("#c-3").css("background-color", "#2541b2"); //"#f7cac9");//"#E23838");//"#ffa5ab");
    $("#c-4").css("background-color", "#fdfffc"); //"#ffffff");//"#973999");//"#ffc6dd");
    $("#c-1").css("width", "7000%");

    //Color Stuff
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        scrollUpdate(scrollPos, faded);
    });

    //Social bar stuff
    $("#slider").on('click', () => {
        if (sliderOut) {
            Velocity($("#social-bar"), {
                left: "-45px"
            }, {
                duration: 300,
                easing: [250, 15]
            });
            $("#slider").css({
                'transform': 'rotate(180deg)'
            });
        } else {
            Velocity($("#social-bar"), {
                left: "0px"
            }, {
                duration: 300,
                easing: [250, 15]
            });
            $("#slider").css({
                'transform': 'rotate(0deg)'
            });
        }
        sliderOut = !sliderOut;
    });
});

function scrollUpdate(scrollPos) {
    //Gathering Offsets
    var bucketListPos = 800;
    var fadeBoundary = 1800;
    //console.log(scrollPos);

    if(scrollPos <= 500 && mobile) {
        $("#hamburger").css("opacity", "0");
    } else if (scrollPos > 500 && mobile) {
        $("#hamburger").css("opacity", "1");
    }

    if(scrollPos <= 300 && mobile && !colorfaded) {
        $("#mobile-social-bar .m-social-bar-item").css("background-color", "#252422");
        $("#mobile-social-bar .m-social-bar-item").css("box-shadow", "none");
        $("#hackaday a").css("color", "slategrey");
        $("#steam a").css("color", "slategrey");
        $("#facebook a").css("color", "#3b5999");
        $("#linkedin a").css("color", "#0077b5");
        $("#twitter a").css("color", "#1da1f3");
        $("#github a").css("color", "#6f42c1");
        $("#instagram a").css("color", "#d62976");
        $("#soundcloud a").css("color", "#ff4d00");
        $("#snapchat a").css("color", "#fffc00");
        $("#email a").css("color", "slategrey");
        /// ------
        $("#facebook span").css("color", "#3b5999");
        $("#linkedin span").css("color", "#0077b5");
        $("#twitter span").css("color", "#1da1f3");
        $("#github span").css("color", "#6f42c1");
        $("#instagram span").css("color", "#d62976");
        $("#soundcloud span").css("color", "#ff4d00");
        $("#snapchat span").css("color", "#fffc00");
        $("#email span").css("color", "slategrey");
        $("#steam span").css("color", "slategrey");
        $("#hackaday img").css("opacity", "0.5");
        colorfaded = true;
    } else if(scrollPos > 300 && mobile && colorfaded){
        colorfaded = false;
        $("#mobile-social-bar .m-social-bar-item").css("background-color", "#252422");
        $("#mobile-social-bar .m-social-bar-item").css("box-shadow", "none");
        $("#hackaday a").css("color", "#252422");
        $("#steam a").css("color", "#252422");
        $("#facebook a").css("color", "#252422");
        $("#linkedin a").css("color", "#252422");
        $("#twitter a").css("color", "#252422");
        $("#github a").css("color", "#252422");
        $("#instagram a").css("color", "#252422");
        $("#soundcloud a").css("color", "#252422");
        $("#snapchat a").css("color", "#252422");
        $("#email a").css("color", "#252422");
        /// ------
        $("#facebook span").css("color", "#252422");
        $("#linkedin span").css("color", "#252422");
        $("#twitter span").css("color", "#252422");
        $("#github span").css("color", "#252422");
        $("#instagram span").css("color", "#252422");
        $("#soundcloud span").css("color", "#252422");
        $("#snapchat span").css("color", "#252422");
        $("#email span").css("color", "#252422");
        $("#steam span").css("color", "#252422");
        $("#hackaday img").css("opacity", "0.5");
    }

    if(mobile) { scrollPos = Math.max(scrollPos - 550, 0); }

    if (scrollPos > fadeBoundary && !faded) {
        console.log("Fading out");
        if (!mobile) $("#social-bar").fadeOut("fast");
        $("body").css("background-color", "#fdfffc");
        $("#rotated").fadeOut("fast");
        $("#blog-header").css("color", "#2541b2");
        faded = true;
    } else if (scrollPos < fadeBoundary && faded) {
        console.log("Fading In");
        if (!mobile) $("#social-bar").fadeIn("fast");
        //$("body").css("background-color", "slategrey");
        $("body").css("background-color", "#fdfffc");
        $("#rotated").fadeIn("fast");
        $("#blog-header").css("color", "#fdfffc");
        faded = false;
    }

    //c-1 should be full width at 50px from the top
    //50px transition area
    //so c-2 should be full width 100px ftom the top
    var c1Top = 0.0;
    var c1Bottom = 300.0;
    var c2Top = bucketListPos - 50; // 620.0;
    var c2Bottom = bucketListPos + 100; //900.0;
    var c3Top = 1200;
    var c3Bottom = 1300;
    var c4Top = 1500;
    //console.log(scrollPos);
    if (scrollPos < c1Bottom && scrollPos >= c1Top) {
        $("#c-1").css("width", "7000%");
        $("#c-2").css("width", "20%");
        $("#c-3").css("width", "20%");
        $("#c-4").css("width", "20%");
    } else if (scrollPos >= c1Bottom && scrollPos < c2Top) {
        var thisc1 = -(1.0 / (c2Top - c1Bottom)) * (scrollPos - c1Bottom) + 1.0;
        $("#c-1").css("width", (thisc1 * 7000) + "%");
        var thisc2 = (1.0 / (c2Top - c1Bottom)) * (scrollPos - c1Bottom);
        $("#c-2").css("width", (thisc2 * 7000) + "%");
        $("#c-3").css("width", "20%");
        $("#c-4").css("width", "20%");
    } else if (scrollPos >= c2Top && scrollPos < c2Bottom) {
        $("#c-1").css("width", "20%");
        $("#c-2").css("width", "7000%");
        $("#c-3").css("width", "20%");
        $("#c-4").css("width", "20%");
    } else if (scrollPos >= c2Bottom && scrollPos < c3Top) {
        var thisc2 = -(1.0 / (c3Top - c2Bottom)) * (scrollPos - c2Bottom) + 1.0;
        $("#c-2").css("width", (thisc2 * 7000) + "%");
        var thisc3 = (1.0 / (c3Top - c2Bottom)) * (scrollPos - c2Bottom);
        $("#c-3").css("width", (thisc3 * 7000) + "%");
        $("#c-1").css("width", "20%");
        $("#c-4").css("width", "20%");
    } else if (scrollPos >= c3Top && scrollPos < c3Bottom) {
        $("#c-1").css("width", "20%");
        $("#c-2").css("width", "20%");
        $("#c-3").css("width", "7000%");
        $("#c-4").css("width", "20%");
    } else if (scrollPos >= c3Bottom && scrollPos < c4Top) {
        var thisc3 = -(1.0 / (c4Top - c3Bottom)) * (scrollPos - c3Bottom) + 1.0;
        $("#c-3").css("width", (thisc3 * 7000) + "%");
        var thisc4 = (1.0 / (c4Top - c3Bottom)) * (scrollPos - c3Bottom);
        $("#c-4").css("width", (thisc4 * 7000) + "%");
        $("#c-1").css("width", "20%");
        $("#c-2").css("width", "20%");
    } else if (scrollPos >= c4Top) {
        $("#c-1").css("width", "20%");
        $("#c-2").css("width", "20%");
        $("#c-3").css("width", "20%");
        $("#c-4").css("width", "7000%");
    }
}