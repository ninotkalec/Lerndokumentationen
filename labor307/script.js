$("#klein img[alt=ac").css("opacity", "0.4");
$("#klein img[alt=ac]").on("click", function() {
    $("#klein img").css("opacity", "1");
    $(this).css("opacity", "0.4");
    $("#gross img").removeAttr("src");
    $("#gross img").removeAttr("alt");
    $("#gross img").attr("src", "img/assassin's_creed.jpg");
    $("#gross img").attr("alt", "ac");
});
$("#klein img[alt=avatar]").on("click", function() {
    $("#klein img").css("opacity", "1");
    $(this).css("opacity", "0.4");
    $("#gross img").removeAttr("src");
    $("#gross img").removeAttr("alt");
    $("#gross img").attr("src", "img/avatar.jpg");
    $("#gross img").attr("alt", "avatar");
});
$("#klein img[alt=got]").on("click", function() {
    $("#klein img").css("opacity", "1");
    $(this).css("opacity", "0.4");
    $("#gross img").removeAttr("src");
    $("#gross img").removeAttr("alt");
    $("#gross img").attr("src", "img/game_of_thrones.jpg");
    $("#gross img").attr("alt", "got");
});