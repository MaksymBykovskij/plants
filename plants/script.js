$(document).ready(function() {
    $('.block__title').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $('.block__item').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function() {
  $('.arrow-closed').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});