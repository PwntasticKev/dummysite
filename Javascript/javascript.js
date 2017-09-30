$(document).ready(function() {
$('ul li').hover(function() {
  $(this).css({"color": "red"});
});
$('ul li').mouseleave(function() {
  $(this).css({"color": "black"})
});



});
