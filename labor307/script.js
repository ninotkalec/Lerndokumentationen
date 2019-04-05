$("#klein img:first-child").css("opacity", "0.4");
$(document).ready(function() {
    $("#klein img[alt=ac]").on("click", function() {
        $("#klein img").css("opacity", "1");
        $(this).css("opacity", "0.4");
        $("#gross img").fadeOut(700);
        setTimeout(function(){
        $("#gross img").removeAttr("src")
        .removeAttr("alt")
        .attr("src", "img/assassin's_creed.jpg")
        .attr("alt", "ac")
        .fadeIn(700);
}, 700);
    });
    $("#klein img[alt=avatar]").on("click", function() {
        $("#klein img").css("opacity", "1");
        $(this).css("opacity", "0.4");
        $("#gross img").fadeOut(700);
        setTimeout(function(){
        $("#gross img").removeAttr("src")
        .removeAttr("alt")
        .attr("src", "img/avatar.jpg")
        .attr("alt", "avatar")
        .fadeIn(700);
}, 700);
    });
    $("#klein img[alt=got]").on("click", function() {
        $("#klein img").css("opacity", "1");
        $(this).css("opacity", "0.4");
        $("#gross img").fadeOut(700);
        setTimeout(function(){
        $("#gross img").removeAttr("src")
        .removeAttr("alt")
        .attr("src", "img/game_of_thrones.jpg")
        .attr("alt", "got")
        .fadeIn(700);
}, 700);
    });
});