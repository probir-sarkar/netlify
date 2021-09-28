$(document).ready(function () {
  $('[data-toggle="collapse"]').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).text("Less");
    } else {
      $(this).text("More");
    }
  });
});
