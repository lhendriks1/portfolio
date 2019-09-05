const projectsArr = {
  boatQuiz: {
    title: "Boating Safety Quiz",
    summary: "The Boating Safety Quiz app tests users' knowledge of boating safety rules and best practices. This quiz was inspired by my fiancee who is an avid boater. I made sure he passed this quiz before taking me out.",
    tech: "Technologies used: HTML, CSS, JavaScript, jQuery",
    link_live: "https://lhendriks1.github.io/boating-safety-quiz/",
    link_repo: "https://github.com/lhendriks1/boating-safety-quiz",
    images: [
      {src: "./resources/boat-quiz-img1.png", alt: "start quiz screen"},
      {src: "./resources/boat-quiz-img2.png", alt: "quiz question screen"},
      {src: "./resources/boat-quiz-img3.png", alt: "quiz results screen"}
    ]
  },

  whereToEat: {
    title: "Where to Eat Out",
    summary: "The app helps users plan eating out based on user input for location and cuisine. Results include a list of venues that users could visit after their initial destination.",
    tech: "Technologies used: HTML, CSS, JavaScript, jQuery, foursquare API",
    link_live: "https://lhendriks1.github.io/where-to-eat-out/",
    link_repo: "https://github.com/lhendriks1/where-to-eat-out",
    images: [
      {src: "./resources/where-to-eat-img1.png", alt: "search screen"},
      {src: "./resources/where-to-eat-img2.png", alt: "results screen"},
      {src: "./resources/where-to-eat-img3.png", alt: "next venues screen"}
    ]
  }
};


function addProjects() {
  console.log(projectsArr);
  console.log('add projects called');
  for (let project in projectsArr) {
    $('ul.portfolio').append(
      `<li class="project">
        <div class="left-column">
          <div class="slideshow-container">
            <div class="js-images ${project}">
            </div>
            <a class="prev js-prev"><span class="transparent">&#10094;</span></a>
            <a class="next js-next"><span class="transparent">&#10095;</span></a>
          </div>
          <div class="dots">
            <span class="dot js-slider-0"></span>
            <span class="dot js-slider-1"></span>
            <span class="dot js-slider-2"></span>
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
        console.log(projectsArr[project].images.length);
        console.log(projectsArr[project].images[i]);
        $(`.${project}`).append(
          `<div class="slides animate">
            <img src=${projectsArr[project].images[i].src} alt=${projectsArr[project].images[i].alt}>
          </div>`
        )
      }
  }
}

$(addProjects);
