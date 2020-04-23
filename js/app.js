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
 * Define Global Variables
 *
*/
let navbarList = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function extractSection(event) {
  return event.target.innerHTML;
}

function transformSectionToId(sectionName) {
  // remove white space
  sectionName = sectionName.replace(/\s/g,'')
  return sectionName.charAt(0).toLowerCase() + sectionName.substring(1) + "-header";
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function constructNavMenu() {
  for (let section of sections) {
    var sectionTitle = document.getElementById(`${section.id}-header`).innerHTML;
    let newListItem = document.createElement("li");
    newListItem.classList.add("menu__link");
    newListItem.innerHTML = sectionTitle;
    navbarList.append(newListItem);
  }
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {

}

// Scroll to anchor ID using scrollTO event
function scrollTo() {
  navbarList.addEventListener("click", function(event) {
    var sectionName = extractSection(event);
    var idToNavTo = transformSectionToId(sectionName);
    document.getElementById(idToNavTo).scrollIntoView({ behavior: 'smooth', block: 'center'} );
  });
}

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
