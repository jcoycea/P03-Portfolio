/****

List Grid Code From:
- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_list_grid_view

****/

// Get the elements with class="grid-column"
var elements = document.getElementsByClassName("grid-column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

var title = document.getElementsByClassName("main-title");
document.getElementsByClassName("main-title").style.fontColor = "red";

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
