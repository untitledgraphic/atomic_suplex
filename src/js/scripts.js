/*! (c) 2025 Craig Cooper
/* Name: POinting Tool
 * Author: Craig Cooper
 * Author URI: http://craigomatic.co.uk
 * Description: A tool to help make scrum poker decisions
 * Version: 0.0.1
 */

// @ts-check

let scrollpos = window.scrollY;
const header = /** @type {HTMLElement} */ (document.querySelector(".skull"))
const header_height = 40;

function add_class_on_scroll() {
	return header.classList.add("scrolling");
}

const remove_class_on_scroll = () => header.classList.remove("scrolling");

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;
	scrollpos >= header_height ? add_class_on_scroll() : remove_class_on_scroll();
	console.log(scrollpos);
});