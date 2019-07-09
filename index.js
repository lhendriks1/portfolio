//when the user clicks the hamburger button it toggles between showing and hiding the nav dropdown
function toggleNavEvent(){
  $('.nav-display').click(function(){
    $('.nav-content').toggle();
  });
}

$(toggleNavEvent);

//hides the nav dropdown if the user clicks outside of the dropdown
function hideNavOnWindowClick() {
  $('body').on('click', function(e) {
    if (!$(e.target).parent().hasClass('nav-display')) {
    $('.nav-content').css('display','none');
  };
});
}

$(hideNavOnWindowClick);

// $(window).click(function(e) {
//     alert(e.target.id); // gives the element's ID
//     alert(e.target.className); // gives the elements class(es)
// });
