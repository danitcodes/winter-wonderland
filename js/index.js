$(document).ready(function() {
  event.preventDefault();
  $("#snowButton").click(function() {
    $("#snowToggle").fadeToggle();
  });
  $("#cloudsButton").click(function() {
    $("#cloudsToggle").fadeToggle();
  });
  $("#holidaysButton").click(function() {
    $("#happyHolidays").fadeToggle();
  });
  $("#thankYouButton").click(function() {
    $("#thankYouMsg").fadeToggle();
  });
});