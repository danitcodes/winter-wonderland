$(document).ready(function() {
  event.stopPropagation();
  event.preventDefault();
  $("#snowButton").click(function() {
    $("#snowToggle").fadeToggle();
    $("#happyHolidays").fadeToggle();
    $("#snowButton").fadeOut();
  });
  $("#cloudsButton").click(function() {
    $("#cloudsToggle").fadeToggle();
    $("#thankYouMsg").fadeToggle();
    $("#cloudsButton").fadeOut();
  });
});