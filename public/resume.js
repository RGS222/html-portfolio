
$(".show-info").click(function(event) {
    //highlight the menu choice
    $(".show-info").css("font-weight", "normal");
    $(".show-info h2").css("font-weight", "normal");
    $(this).css("font-weight", "bold");
    $(this).find("h2").css("font-weight", "bold");

    //display the detail info corresponding to the menu button clicked
    $(".displayable").css("display", "none");
    var displayId = this.id + "-d";
    $(`#${displayId}`).css("display", "block");
});

//reset the carousel item to the first
$(".menu-item").click(function(event) {
    if ($(this).hasClass("exp")) {
        $("#carouselIndicators1").carousel(0);
        $("#carouselIndicators2").carousel(0);
    }
});

$("#resume-menu .btn").click(function(event) {
    //auto collapse other menu
    if ($(this).hasClass("exp")) {
        $("#resume-menu .sk").siblings(".collapse").collapse("hide");
    } else if ($(this).hasClass("sk")) {
        $("#resume-menu .exp").siblings(".collapse").collapse("hide");
    } else {
        $("#resume-menu .sk").siblings(".collapse").collapse("hide");
        $("#resume-menu .exp").siblings(".collapse").collapse("hide");
    }
    
    //select first item when menu expands
    $(this).siblings().find(".menu-item").first().trigger("click");
})

//show objective when resume page is first loaded
$(document).ready(function() {
    $("#objective").trigger("click");
});
