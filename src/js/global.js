// MENU
const button = document.querySelector(".menu h3");
const menu = document.querySelector("section.menu");

$(button).click(function() {
  $(menu).toggleClass("show-menu");
  return false;
});
