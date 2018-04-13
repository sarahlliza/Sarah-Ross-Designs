// JavaScript Document
// When the user scrolls the page, execute stickyNavFunction 
window.onscroll = function() { stickyNavFunction(); };

// Get the navbar
var navbar = document.getElementById("nav-main");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}