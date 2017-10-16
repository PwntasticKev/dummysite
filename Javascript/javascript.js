$(document).ready(function() {
  $('.shirt-swap-rt').on('click', function() {
    $('.right-image').append($('.shirt-swap-rb'))

    console.log('working?')
  })
});
