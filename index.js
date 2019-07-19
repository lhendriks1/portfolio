// //START-----HAMBURGER NAV DROPDOWN-------
//
// //On page load check if hamburger nav button is visible,
// //If it is then isten for clicks to dropdown the menu
// function toggleNavEvent() {
//   if ($('button.nav-toggle').is(':visible')) {
//     $('.nav-display').click(function() {
//       $('.nav-content').toggle();
//       });
//     };
//   }
//
// $(toggleNavEvent)
//
//
// //Listen for window resize, then check if nav hamburger is there. If it is:
// $(window).on('resize', function() {
//   if ($(window).width()<420) {
//     toggleNavEvent(); // listen for clicks to drop-down the hamburger menu
//   };
// });
//
// //On page load check if the hambuger button is visible
// //If it is, then listen for clicks outside of the dropdown & close the dropdown when they happen
// function hideNavOnWindowClick() {
//   if ($('button.nav-toggle').is(':visible')) {
//     $('body').on('click', function(e) {
//       if (!$(e.target).parent().hasClass('nav-display')) {
//         $('.nav-content').css('display','none');
//       };
//     });
//   }
// }
//
// $(hideNavOnWindowClick);

//END HAMBURGER FUNCTIONS-----------------------------------------------------




//START-----PORTFOLIO IMAGE SLIDE---------------

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

  function hideArrowButtons() {
    if (slideIndex === 0) {
    $('.js-prev').hide()
    }
      else {
      $('.js-prev').show()
      };

    if (slideIndex == imageArray.length-1) {
    $('.js-next').hide()
    }
      else {
        $('.js-next').show()
    };
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
hideArrowButtons(slideIndex);
}


//Updates index based on button parameter, then updates image
function updateImage(button) {
  console.log('PresentImage called with button ' + button);

  //Update necessary elements of active index
  imageArray[slideIndex].show();

  // Calculate the index for active slider
  if(button != NO_BUTTON){
    if (button === PREV_BUTTON) {
      slideIndex --;
      if(slideIndex < 0 ){
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

  $(".slideshow-container").on("click", ".js-next", function(){
    updateImage(NEXT_BUTTON);
  });

  $(".slideshow-container").on("click", ".js-prev", function() {
    updateImage(PREV_BUTTON);
  });

  $(".dots").on("click", ".js-slider-0", function() {
    slideIndex = 0;
    showCurrentSlide(slideIndex);
  });

  $(".dots").on("click", ".js-slider-1", function() {
    slideIndex = 1;
    showCurrentSlide(slideIndex);
  });

  $(".dots").on("click", ".js-slider-2", function() {
    slideIndex = 2;
    showCurrentSlide(slideIndex);
  });

}


//call all functions to handle imgae slider

function handleImageSlider() {
  createArray(imageArray);
  showCurrentSlide(slideIndex);
  updateImage(NO_BUTTON);
  setupCallbacks();
}

$(handleImageSlider);

//END ----IMAGE SLIDER FUNCTIONS---------------------------------------------------


//START------ SCROLL TO ANCHORS

function scrollToAnchors(){
  $("a[href^=#].internal-link").click(function(e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    console.log(dest);
    $('html,body').animate({ scrollTop: $(dest).offset().top-100 }, 'slow');
  });
}

$(scrollToAnchors)
