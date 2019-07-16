//START-----HAMBURGER NAV DROPDOWN-------
//When the user clicks the hamburger button it toggles between showing and hiding the nav dropdown
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

  showCurrentSlide(slideIndex);
  hideArrowButtons(slideIndex);

}

//listen for next/prev button clicks
function setupCallbacks() {

  $(".slideshow-container").on("click", ".js-next", function(){
    updateImage(NEXT_BUTTON);
  });

  $(".slideshow-container").on("click", ".js-prev", function() {
    updateImage(PREV_BUTTON);
  });

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

//END ----IMAGE SLIDER FUNCTIONS---------------------------------------------------





//START -----CONTACT FORM FUNCTIONS
// show & hide the contact form

function handleContactForm() {

  $('.js-contact-show').on('click', function() {
    $('#contact-form').slideDown();
  });

  $('button.close').on('click', function(){
    $('#contact-form').slideUp();
  })
}

$(handleContactForm)

//submit the contact FORM
$("#submit").click(function() {

var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();

$("#returnmessage").empty(); // To empty previous error/success message.

// Checking for blank fields.
  if (name == '' || email == '' || contact == '') {
    alert("Whoops, some info is missing -- please fill out all of the fields");
  } else {

// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
  name1: name,
  email1: email,
  message1: message,
  }, function(data) {
    $("#returnmessage").append(data); // Append returned message to message paragraph.
    if (data == "Your Query has been received, We will contact you soon.") {
      $("#form")[0].reset(); // To reset form fields on success.
    }
  });
  }
});


//END ------CONTACT FORM FUNCTIONS--------------------------------------------------------





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
