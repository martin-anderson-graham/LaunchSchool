let key;

$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    key = $('input[type="text"]').get(0).value;
  });

  $(document).off('keypress').on('keypress', function (event) {
    if(event.key === key) {
      $('a').trigger('click');
    }
  });

  $('a').on("click", function(event) {
    event.preventDefault();
    let $accordion = $('#accordion');
    $accordion.slideToggle();
  });
});