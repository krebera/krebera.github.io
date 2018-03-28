var menu1 = false;

$(document).ready(function () {
    var mobile = $(window).width() < 600;
    if(mobile){
        console.log("YAY");
        $("#mobile-menu-1").css("display", "flex");
        $("#mobile-menu-1").hide();
    }
    
    $("#hamburger").click(()=> {
        if(!menu1){
            $("#mobile-menu-1").removeClass("animated fadeOut");
            $("#mobile-menu-1").addClass("animated fadeIn");
            $("#mobile-menu-1").show();
        } else {
            $("#mobile-menu-1").removeClass("animated fadeIn");
            $("#mobile-menu-1").addClass("animated fadeOut");
        }
        $("#mobile-menu-1").css("animation-duration","0.5s");
        menu1 = !menu1;
        console.log("ff");
    });
});