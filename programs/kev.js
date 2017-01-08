  /* Processing Bounce */  
function load() {
  $(".wait0").effect("bounce", {times: 0}, 0);
  $("#wait1").effect("bounce", {times: 5}, 3000);
  $("#wait2").effect("bounce", {times: 5}, 3250);
  $("#wait3").effect("bounce", {times: 5}, 3500, load);
}
  /* Processing Bounce */
  
  /* Login to Load to Main */
$(".matcher").click(function() {
  $(".row").fadeOut(750);
  load();
  $("#loader").delay(500).animate({opacity: 1}, 750);
  $("#loader").delay(250).fadeOut(2000);
  $("#h3").delay(2750).fadeIn(750);
});
  /* Login to Load to Main */