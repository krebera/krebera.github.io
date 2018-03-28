var menu1 = false;
var filterDropdown = false;
var rotated = false;

$(document).ready(function () {
    var mobile = $(window).width() < 600;
    $("#mobile-menu-1").css('display','flex');
    $("#mobile-menu-1").hide();
    $("#filtersTest").hide();
    if(mobile){
        $("#burger").click(()=> {
            if(menu1) {
                $("#burger").css({'transform':'rotate(0deg)'});
                $("#burger").css({'color': '#252422'});
                $("#hamburger").css({'backgroundColor': 'whitesmoke'});
                $("#hamburger").css({'transform':'rotate(0deg)'});
                $("#hamburger .nav-mobile-item").css({'transform':'rotate(0deg)'});
                rotated = false;
            } else {
                $("#burger").css({'transform':'rotate(90deg)'});
                $("#burger").css({'color': 'whitesmoke'});
                $("#hamburger").css({'backgroundColor': '#252422'});
            }
            filterDropdown = false;
            $("#filtersTest").slideUp("fast");
            $("#filters").css("color", "whitesmoke");
            $("#mobile-menu-1").slideToggle("fast");
            menu1 = !menu1;
            console.log("Burger");
        });
        $("#filters").click(() => {
            if(!filterDropdown) {
                if(!rotated) {
                    $("#hamburger").css({'transform':'rotate(90deg)'});
                    $("#hamburger .nav-mobile-item").css({'transform':'rotate(-90deg)'});
                    $("#hamburger .nav-mobile-item").css({'border-bottom':'none'});
                    $("#filtersTest").delay("slow").slideDown("fast");
                    rotated = true;
                } else {
                    $("#filtersTest").slideDown("fast");
                }
                $("#filters").css("color", "orange");
            }
            if(filterDropdown) {
                $("#filtersTest").slideUp("fast");
                $("#filters").css("color", "whitesmoke");
            }
            filterDropdown = !filterDropdown;
        });
    }
});