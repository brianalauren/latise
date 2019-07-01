$(document).on("scroll", function() {
  // console.log("hi");
  var pixelsFromTop = $(document).scrollTop();

  if (pixelsFromTop < 600) {
    $("body").css("background-color", "#fff");
  } else if (pixelsFromTop < 1400) {
    $("body").css("background-color", "#e3e8d4");
  } else if (pixelsFromTop < 2400) {
    $("body").css("background-color", "#e2849c50");
  } else if (pixelsFromTop < 3600) {
    $("body").css("background-color", "#d4edbe");
  } else if (pixelsFromTop < 4600) {
    $("body").css("background-color", "#2eaef350");
  } else {
    $("body").css("background-color", "#ecff20");
  }
});
