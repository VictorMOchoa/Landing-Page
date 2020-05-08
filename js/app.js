/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global letiables
 *
*/
let navbarList = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');

/**
 * End Global letiables
 * Start Helper Functions
 *
*/

let extractSection = (event) => {
  return event.target.innerHTML;
}

let transformSectionToId = (sectionName)  => {
  // Remove white space
  sectionName = sectionName.replace(/\s/g,'')
  return sectionName.charAt(0).toLowerCase() + sectionName.substring(1);
}

let isSectionInViewPort = () => {
  // For each section, use the offset properties to calculate where they are in
  // the page, then compare it with the pageYOffset
  for (let section of sections) {
    let currView = window.pageYOffset + 300;
    let sectionBottom = section.offsetTop;
    let sectionTop = section.offsetTop + section.offsetHeight;
    if (currView >= sectionBottom && currView <= sectionTop)
          return section;
  }
  return null;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let constructNavMenu = () => {
  for (let section of sections) {
    let sectionTitle = document.getElementById(`${section.id}-header`).innerHTML;
    let newListItem = document.createElement("li");

    // By default, set the first section as the active link
    if (section.id == "section1") {
      newListItem.classList.add("active_link");
    }
    newListItem.classList.add("menu__link");
    newListItem.id = `${section.id}-li`;
    newListItem.innerHTML = sectionTitle;
    navbarList.append(newListItem);
  }
};

let setActiveSection = () => {
  window.addEventListener('scroll', function (event) {
    var activeSection = isSectionInViewPort();
    if(activeSection != null) {
      let sectionToSetInactive = document.querySelector(".your-active-class");
        // Remove the old active section
        document.querySelector(".active_link").classList.remove("active_link");
        sectionToSetInactive.classList.remove("your-active-class");
        //Reflect the new active section
        activeSection.classList.add("your-active-class");
        document.getElementById(`${activeSection.id}-li`).classList.add("active_link");
    }
  });
};

// Scroll to anchor ID using scrollTO event
let scrollTo = () => {
  navbarList.addEventListener("click", function(event) {
    let sectionName = extractSection(event);
    let idToNavTo = transformSectionToId(sectionName);
    document.getElementById(`${idToNavTo}-header`).scrollIntoView();
  });
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
constructNavMenu();

// Scroll to section on link click
scrollTo();

// Set sections as active
setActiveSection();
