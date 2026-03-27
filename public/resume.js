
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