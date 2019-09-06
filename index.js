function scrollToAnchors(){
  $("a[href^=#].internal-link").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    $('html,body').animate({ scrollTop: $(dest).offset().top-100 }, 'slow');
  });
}

$(scrollToAnchors)
