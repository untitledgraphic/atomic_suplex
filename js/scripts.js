/*! (c) 2025 Craig Cooper
/* Name: POinting Tool
 * Author: Craig Cooper
 * Author URI: http://craigomatic.co.uk
 * Description: A tool to help make scrum poker decisions
 * Version: 0.0.1
 */
let scrollpos=window.scrollY;const header=document.querySelector(".skull"),header_height=40;function add_class_on_scroll(){return header.classList.add("scrolling")}const remove_class_on_scroll=()=>header.classList.remove("scrolling");window.addEventListener("scroll",function(){scrollpos=window.scrollY,scrollpos>=40?add_class_on_scroll():remove_class_on_scroll(),console.log(scrollpos)});
//# sourceMappingURL=scripts.js.map
