$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
      $('.showMenu').fadeIn();
    } else {
      $('.showMenu').fadeOut();
    }
  });


  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.hideMenu').fadeOut();
    } else {
      $('.hideMenu').fadeIn();
    }
  });