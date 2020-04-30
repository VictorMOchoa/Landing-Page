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

for (let section of sections) {
  var sectionTitle = document.getElementById(`${section.id}-header`).innerHTML;
  let newListItem = document.createElement("li");
  newListItem.innerHTML = sectionTitle;
  navbarList.append(newListItem);
}




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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
