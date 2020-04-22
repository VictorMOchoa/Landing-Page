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


// Scroll to anchor ID using scrollTO event
function scrollTo() {

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
