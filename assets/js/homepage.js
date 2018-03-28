var faded = false;
var mobile = false;
var sliderOut = true;
$(document).ready(function () {
    // jQuery methods go here...
    mobile = $(window).width() < 600;
    console.log("ready!");
    //$("body").css("background-color", "slategrey");
    $("body").css("background-color", "#fdfffc");
    scrollUpdate($(document).scrollTop());

    $(".link-icon").hover(function () {
        $(this).addClass("animated pulse");
    }, function () {
        $(this).removeClass('animated pulse');
    });

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
    $("#slider").click(() => {
        if(sliderOut) {
            Velocity($("#social-bar"), {left: "-55px"}, {duration: 300, easing: [250, 15]});
            $("#slider").css({'transform':'rotate(180deg)'});
        } else {
            Velocity($("#social-bar"), {left: "0px"}, {duration: 300, easing: [250, 15]});
            $("#slider").css({'transform':'rotate(0deg)'});
        }
        sliderOut = !sliderOut;
    });
});

function scrollUpdate(scrollPos) {
    //Gathering Offsets
    var bucketListPos = 800;
    var fadeBoundary = 1800;
    //console.log(scrollPos);
    if (scrollPos > fadeBoundary & !faded) {
        console.log("Fading out");
        if(!mobile) $("#social-bar").fadeOut("fast");
        $("body").css("background-color", "#fdfffc");
        $("#rotated").fadeOut("fast");
        $("#blog-header").css("color", "#2541b2");
        faded = true;
    } 
    else if (scrollPos < fadeBoundary & faded) {
        console.log("Fading In");
        if(!mobile) $("#social-bar").fadeIn("fast");
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