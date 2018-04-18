
var clicked = false;

$("#switch").click(function() {
  if (clicked == false) {
    $("#box").css("background-color","yellow");
    $("#switch").html("Off");
    clicked = true;
  }
  else {
    $("#box").css("background-color","grey");
    $("#switch").html("On");
    clicked = false;
  }
  
  });





