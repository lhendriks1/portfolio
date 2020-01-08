// var slideIndex = 0;
const NO_BUTTON = 0;
const PREV_BUTTON = -1;
const NEXT_BUTTON = 1;


const projectsArr = {
  askify: {
    id: "askify",
    current_index: 0,
    title: "Askify",
    summary: "Askify is full stack question answer engine featuring a JWT authentication system that uses bcrypt to salt and hash passwords. The Askify server follows REST API design principles and adheres to code best practicies including SOC, encapsulation, and DRY. The server was built using TDD methodology.",
    tech: "Technologies used: React, Node, Express, Postgres, SQL, JWT, Supertest, Mocha, Chai, Jest, Enzyme, Zeit, Heroku, Git",
    link_live: "https://askify.now.sh/",
    link_repo: "https://github.com/lhendriks1/askify-app",
    images: [
      {
        src: "./resources/askify_img1.png",
        alt: "questions list screenshot"
      },
      {
        src: "./resources/askify_img2.png",
        alt: "question screenshot"
      },
      {
        src: "./resources/askify_img3.png",
        alt: "new question form screenshot"
      }
    ]
  },

  boatQuiz: {
    id: "boatQuiz",
    current_index: 0,
    title: "Boating Safety Quiz",
    summary: "The Boating Safety Quiz app tests users' knowledge of boating safety rules and best practices. This quiz was inspired by my fiancee who is an avid boater. I made sure he passed this quiz before taking me out.",
    tech: "Technologies used: HTML, CSS, JavaScript, jQuery, Git",
    link_live: "https://lhendriks1.github.io/boating-safety-quiz/",
    link_repo: "https://github.com/lhendriks1/boating-safety-quiz",
    images: [
      {
        src: "./resources/boat-quiz-img1.png",
        alt: "start quiz screenshot"
      },
      {
        src: "./resources/boat-quiz-img2.png",
        alt: "quiz question screenshot"
      },
      {
        src: "./resources/boat-quiz-img3.png",
        alt: "quiz results screenshot"
      }
    ]
  },

  whereToEat: {
    id: "whereToEat",
    current_index: 0,
    title: "Eat Out App",
    summary: "The Eat Out app helps users plan eating out based on user input for location and cuisine. Results include a list of venues that users can visit after their initial destination.",
    tech: "Technologies used: HTML, CSS, JavaScript, jQuery, Foursquare API, Git",
    link_live: "https://lhendriks1.github.io/where-to-eat-out/",
    link_repo: "https://github.com/lhendriks1/where-to-eat-out",
    images: [
      {
        src: "./resources/where-to-eat-img1.png",
        alt: "search screenshot"
      },
      {
        src: "./resources/where-to-eat-img2.png",
        alt: "results screenshot"
      },
      {
        src: "./resources/where-to-eat-img3.png",
        alt: "next venues screenshot"
      }
    ]
  },
};

function addProjects() {
  for (let project in projectsArr) {
    $('ul.portfolio').append(
      `<li class="project">
        <div class="left-column">
          <div class="slideshow-container">
            <div class="js-images ${project}">
            </div>
            <a class="prev js-prev ${projectsArr[project].id}"><span class="transparent">&#10094;</span></a>
            <a class="next js-next ${projectsArr[project].id}"><span class="transparent">&#10095;</span></a>
          </div>
          <div class="dots">
            <span class="dot js-slider-0 ${projectsArr[project].id}"></span>
            <span class="dot js-slider-1 ${projectsArr[project].id}"></span>
            <span class="dot js-slider-2 ${projectsArr[project].id}"></span>
          </div>
        </div>
        <div class="right-column">
          <ul class="app-metadata js-metadata">
            <li><span class="bolder">${projectsArr[project].title} -</span> ${projectsArr[project].summary}
            </li>
            <li>${projectsArr[project].tech}
            </li>
            <li class="portfolio-links">
              <a class="btn" href=${projectsArr[project].link_live} target="_blank">Live App &#8594;</a>
              <a class="btn" href=${projectsArr[project].link_repo} target="_blank">Code Repo &#8594;</a>
            </li>
          </ul>
        </div>
      </li>`);

    for (let i = 0; i < projectsArr[project].images.length; i++) {
      $(`.js-images.${project}`).append(
        `<div class="slides ${projectsArr[project].id} ${i} animate">
            <img src=${projectsArr[project].images[i].src} alt=${projectsArr[project].images[i].alt}>
          </div>`
      )
    }
  }
}

function styleDot(project) {
  if (project.current_index == 0) {
    $(`.js-slider-0.${project.id}`).addClass('active');
  } else if (project.current_index == 1) {
    $(`.js-slider-1.${project.id}`).addClass('active');
  } else {
    $(`.js-slider-2.${project.id}`).addClass('active');
  }
}

function hideArrowButtons(project) {
  if (project.current_index === 0) {
    $(`.js-prev.${project.id}`).hide()
  } else {
    $(`.js-prev.${project.id}`).show()
  };

  if (project.current_index == project.images.length - 1) {
    $(`.js-next.${project.id}`).hide()
  } else {
    $(`.js-next.${project.id}`).show()
  };
}

function showCurrentSlide(project) {

  //Re-initialize all sliders attributes to none & remove active class for all dots
  $(`.slides.${project.id}`).hide();
  $(`.dot.${project.id}`).removeClass('active');

  //Show active index
  $(`.slides.${project.id}.${project.current_index}`).show();
  //apply active sytle to dots
  styleDot(project);
  hideArrowButtons(project);
}

function updateImage(projectId, button) {
  let project = projectsArr[projectId];

  // Calculate the index for active slider
  if (button != NO_BUTTON) {
    if (button === PREV_BUTTON) {
      project.current_index--;
      if (project.current_index < 0) {
        project.current_index = project.images.length - 1;
      }

    } else {
      project.current_index++;
      if (project.current_index >= project.images.length) {
        project.current_index = 0;
      }
    }
  }

  showCurrentSlide(project);

}

// listen for next/prev button clicks
function setupCallbacks() {

  $(".slideshow-container").on("click", ".js-next", function(e) {
    let projectId = (String(e.currentTarget.className).split(" "))[2];
    updateImage(projectId, NEXT_BUTTON);
  });

  $(".slideshow-container").on("click", ".js-prev", function(e) {
    let projectId = (String(e.currentTarget.className).split(" "))[2];
    updateImage(projectId, PREV_BUTTON);
  });

  $(".dots").on("click", ".js-slider-0", function(e) {
    let projectId = (String(e.currentTarget.className).split(" "))[2];
    let project = projectsArr[projectId];
    project.current_index = 0;

    showCurrentSlide(project);
  });

  $(".dots").on("click", ".js-slider-1", function(e) {
    let projectId = (String(e.currentTarget.className).split(" "))[2];
    let project = projectsArr[projectId];
    project.current_index = 1;
    showCurrentSlide(project);
  });

  $(".dots").on("click", ".js-slider-2", function(e) {
    let projectId = (String(e.currentTarget.className).split(" "))[2];
    let project = projectsArr[projectId];
    project.current_index = 2;

    showCurrentSlide(project);
  });

}

function handleImageSlider() {
  addProjects();

  for (var project in projectsArr) {
    let sliderArr = projectsArr[project];
    showCurrentSlide(sliderArr);
  }

  setupCallbacks();
}

$(handleImageSlider);
