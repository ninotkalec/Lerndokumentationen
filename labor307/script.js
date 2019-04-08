$(document).ready(function() {
    $("#unten img[alt=ac]").on("click", function() {
  // Wenn man im unteren Div auf das Bild mit dem Wert des Alt- Attributs ac klickt, wird die folgende Funktion ausgeführt:
        $("#unten img").css("opacity", "1");
  //Zuerst werden allen Bildern im unteren Div die Opacity normalgesetzt 
        $(this).css("opacity", "0.2");
  //Das Bild, das angeklickt wurde, wird eine Opacity hinzugefügt
        $("#oben img").fadeOut(250);
  //Das Bild im oberen Div hat ein FadeOut
        setTimeout(function(){
  //Damit Das Bild nicht geändert wird, sobald man auf ein Bild klickt, sondern erst wenn das erste Bild "weg-gefadet" ist, benutzt man eine setTimeout-Funktion
        $("#oben img").removeAttr("src")
        .removeAttr("alt")
  //Sobald das Bild weg ist, werden das src- und alt-Attribut des Bildes im oberen Div entfernt
        .attr("src", "https://www.quneplay.de/wp-content/uploads/2015/04/540654.jpg")
        .attr("alt", "ac")
  //Im gleichen Moment werden dem Bild im oberen Div das src- und alt-Attribut des angeklickten Bild hinzugefügt
        .fadeIn(250);
  //Danach "fadet" das Bild ins obere Div hinein
}, 250);
  //Das "300" gehört noch zur setTimeout-Funktion. Es besagt, wie lange es warten soll, bevor es die Funktionen ausführt, also genau so lang, wie der fadeOut des oberen Bildes.
    });
  //Das wiederholt man für alle anderen Bilder des unteren Divs:
    $("#unten img[alt=avatar]").on("click", function() {
        $("#unten img").css("opacity", "1");
        $(this).css("opacity", "0.2");
        $("#oben img").fadeOut(250);
        setTimeout(function(){
        $("#oben img").removeAttr("src")
        .removeAttr("alt")
        .attr("src", "https://resi.ze-robot.com/dl/li/live-action-legend-of-aang-concept-art-by-john-staub-3840%C3%972160.jpg")
        .attr("alt", "avatar")
        .fadeIn(250);
}, 250);
    });
    $("#unten img[alt=got]").on("click", function() {
        $("#unten img").css("opacity", "1");
        $(this).css("opacity", "0.2");
        $("#oben img").fadeOut(250);
        setTimeout(function(){
        $("#oben img").removeAttr("src")
        .removeAttr("alt")
        .attr("src", "https://images8.alphacoders.com/995/thumb-1920-995241.png")
        .attr("alt", "got")
        .fadeIn(250);
}, 250);
    });
});