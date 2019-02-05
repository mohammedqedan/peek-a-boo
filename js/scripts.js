$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".click").click(function() {
    $("#text-small").fadeToggle(700);
    $("#text-large").fadeToggle(700);
  });
  $(".clickSeal").click(function() {
    $("#seal-slide-show").slideToggle(400);
    $("#seal-slide-hide").slideToggle(400);
});
});
