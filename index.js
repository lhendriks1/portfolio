//---------------hamburger functionality-----------
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



//--------------portfolio image slide---------------

var slideIndex = 0;
var imageArray = [];
var NO_BUTTON = 0;
var PREV_BUTTON = -1;
var NEXT_BUTTON = 1;


// Push all items with class 'slides' into the array
function createArray(imageArray) {
$('.slides').each(function() {
      imageArray.push($(this));
    });
}

function styleDot(slideIndex) {
  if (slideIndex == 0) {
    $('.js-slider-0').addClass('active');
    }

    else if (slideIndex == 1) {
      $('.js-slider-1').addClass('active');
    }

      else {
      $('.js-slider-2').addClass('active');
      }
  }

//Hide all divs with class .slider, then only show the active index
function showCurrentSlide(slideIndex) {

//Re-initialize all sliders attributes to none & remove active class for all dots
$('.slides').hide();
$('.dot').removeClass('active');

//Show active index
imageArray[slideIndex].show();

//apply active sytle to dots
styleDot(slideIndex);
}




//Updates index based on button parameter, then updates image
function updateImage(button) {
  console.log('PresentImage called with button ' + button);

  //Update necessary elements of active index
  imageArray[slideIndex].show();

  // Calculate the index for active slider
  if(button != NO_BUTTON){
    if(button === PREV_BUTTON){
      slideIndex --;
      if(slideIndex <= 0 ){
        slideIndex = imageArray.length -1;
      }

    } else {
      slideIndex ++;
      if(slideIndex >= imageArray.length) {
        slideIndex = 0;
      }
    }
  }

  showCurrentSlide(slideIndex);
}

//listen for next/prev button clicks
function setupCallbacks() {

  $(".slideshow-container").on("click", ".js-next", NEXT_BUTTON => updateImage());

  $(".slideshow-container").on("click", ".js-prev", PREV_BUTTON => updateImage());

  $(".dots").on("click", ".js-slider-0", slideIndex => showCurrentSlide(0));


  $(".dots").on("click", ".js-slider-1", slideIndex => showCurrentSlide(1));

  $(".dots").on("click", ".js-slider-2", slideIndex => showCurrentSlide(2));

}


//call all functinos to handle imgae slider

function handleImageSlider() {
  createArray(imageArray);
  showCurrentSlide(slideIndex);
  updateImage(NO_BUTTON);
  setupCallbacks();
}

$(handleImageSlider);
