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
let currentActiveSection = document.querySelector(".your-active-class").id;
/**
 * End Global letiables
 * Start Helper Functions
 *
*/

let extractSection = (event) => {
  return event.target.innerHTML;
}

let transformSectionToId = (sectionName)  => {
  // remove white space
  sectionName = sectionName.replace(/\s/g,'')
  return sectionName.charAt(0).toLowerCase() + sectionName.substring(1);
}

let reflectNewActiveSection = (idToNavTo) => {
  currentActiveSection = idToNavTo;
  document.querySelector('.active_link').classList.remove('active_link');
  document.getElementById(`${idToNavTo}-li`).classList.add('active_link');
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
    let sectionToSetInactive = document.querySelector(".your-active-class");
    if (sectionToSetInactive != null) {
      sectionToSetInactive.classList.remove("your-active-class");
      document.getElementById(currentActiveSection).classList.add("your-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event
let scrollTo = () => {
  navbarList.addEventListener("click", function(event) {
    let sectionName = extractSection(event);
    let idToNavTo = transformSectionToId(sectionName);
    document.getElementById(`${idToNavTo}-header`).scrollIntoView({ behavior: 'smooth', block: 'center'} );
    reflectNewActiveSection(idToNavTo);
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
