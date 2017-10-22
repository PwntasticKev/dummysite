$(document).ready(function() {
  $('.shirt-swap-rt').on('click', function() {
    $('.right-image').removeClass($("right-image").addClass("shirt-swap-rt"))
    // $('.shirt-swap-rt').addClass('right-image')

    console.log('working?')
  })

  var countDownDate = new Date("Oct 18, 2018 14:57:25").getTime();

  var x = setInterval(function() {

    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo").innerHTML =  "0" + hours + ":"
    + minutes + ":" + seconds + "s";


    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

});
