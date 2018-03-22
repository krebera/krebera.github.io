$(document).ready(function () {
    // jQuery methods go here...
    console.log("ready!");

    $(".link-icon").hover(function (){
        $(this).addClass("animated pulse");
    }, function () {
            $(this).removeClass('animated pulse');
        });

    //Gathering Offsets
    var bucketListPos = $("#bucket-list").offset().top;
    var faded = false;
    var fadeBoundary = 1800;

    $("#c-1").css("background-color", "#252422");//"#92a8d1");//"#5EBD3E");//"#450920");
    $("#c-2").css("background-color", "#2c497f");//"#034f84");//"#FFB900");//#a53860");
    $("#c-3").css("background-color", "#eb5e28");//"#f7786b");//"#F78200");//#da627d");
    $("#c-4").css("background-color", "#2541b2");//"#f7cac9");//"#E23838");//"#ffa5ab");
    $("#c-5").css("background-color", "#fdfffc");//"#ffffff");//"#973999");//"#ffc6dd");
    $("#c-1").css("width", "7000%");

    //Color Stuff
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();

            if(scrollPos > fadeBoundary & !faded) {
            $("#social-bar").fadeOut("fast");
            $("body").css("background-color", "#fdfffc");
            $("#rotated").fadeOut("fast");
            faded = true;
    } else if(scrollPos < fadeBoundary & faded) {
            $("#social-bar").fadeIn("fast");
            $("body").css("background-color", "slategrey");
            $("#rotated").fadeIn("fast");
            faded = false;
    }

        //c-1 should be full width at 50px from the top
        //50px transition area
        //so c-2 should be full width 100px ftom the top
        var c1Top = 0.0;
        var c1Bottom = 50.0;
        var c2Top = 150.0;
        var c2Bottom = 300.0;
        var c3Top = bucketListPos;// 620.0;
        var c3Bottom = bucketListPos + 100;//900.0;
        var c4Top = 1000;
        var c4Bottom = 1300;
        var c5Top = 1500;
        //console.log(scrollPos);
         if(scrollPos < c1Bottom && scrollPos >= c1Top) {
             $("#c-1").css("width", "7000%");
             $("#c-2").css("width", "20%");
             $("#c-3").css("width", "20%");
             $("#c-4").css("width", "20%");
             $("#c-5").css("width", "20%");
         } else if(scrollPos >= c1Bottom && scrollPos < c2Top) {
             var thisc1 = -(1.0/(c2Top - c1Bottom))*(scrollPos - c1Bottom) + 1.0;
             $("#c-1").css("width", (thisc1 * 7000)+"%");
             var thisc2 = (1.0/(c2Top - c1Bottom))*(scrollPos - c1Bottom);
             $("#c-2").css("width", (thisc2 * 7000)+"%");
             $("#c-3").css("width", "20%");
             $("#c-4").css("width", "20%");
             $("#c-5").css("width", "20%");
        } else if(scrollPos >= c2Top && scrollPos < c2Bottom) {
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "7000%");
            $("#c-3").css("width", "20%");
            $("#c-4").css("width", "20%");
            $("#c-5").css("width", "20%");
         } else if(scrollPos >= c2Bottom && scrollPos < c3Top) {
            var thisc2 = -(1.0/(c3Top - c2Bottom))*(scrollPos - c2Bottom) + 1.0;
            $("#c-2").css("width", (thisc2 * 7000)+"%");
            var thisc3 = (1.0/(c3Top - c2Bottom))*(scrollPos - c2Bottom);
            $("#c-3").css("width", (thisc3 * 7000)+"%");
            $("#c-1").css("width", "20%");
            $("#c-4").css("width", "20%");
            $("#c-5").css("width", "20%");
        } else if(scrollPos >= c3Top && scrollPos < c3Bottom) {
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "20%");
            $("#c-3").css("width", "7000%");
            $("#c-4").css("width", "20%");
            $("#c-5").css("width", "20%");
        } else if(scrollPos >= c3Bottom && scrollPos < c4Top) {
            var thisc3 = -(1.0/(c4Top - c3Bottom))*(scrollPos - c3Bottom) + 1.0;
            $("#c-3").css("width", (thisc3 * 7000)+"%");
            var thisc4 = (1.0/(c4Top - c3Bottom))*(scrollPos - c3Bottom);
            $("#c-4").css("width", (thisc4 * 7000)+"%");
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "20%");
            $("#c-5").css("width", "20%");
        } else if(scrollPos >= c4Top && scrollPos < c4Bottom) {
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "20%");
            $("#c-3").css("width", "20%");
            $("#c-4").css("width", "7000%");
            $("#c-5").css("width", "20%");
        } else if(scrollPos >= c4Bottom && scrollPos < c5Top) {
            var thisc4 = -(1.0/(c5Top - c4Bottom))*(scrollPos - c4Bottom) + 1.0;
            $("#c-4").css("width", (thisc4 * 7000)+"%");
            var thisc5 = (1.0/(c5Top - c4Bottom))*(scrollPos - c4Bottom);
            $("#c-5").css("width", (thisc5 * 7000)+"%");
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "20%");
            $("#c-3").css("width", "20%");
        } else {
            $("#c-1").css("width", "20%");
            $("#c-2").css("width", "20%");
            $("#c-3").css("width", "20%");
            $("#c-4").css("width", "20%");
            $("#c-5").css("width", "7000%");
        }
    });
});