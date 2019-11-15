var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides1 = document.getElementsByClassName("slideshow1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides1[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides(n) {
  var i;
  var slides2 = document.getElementsByClassName("slideshow2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides2[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides(n) {
  var i;
  var slides3 = document.getElementsByClassName("slideshow3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides3.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides3[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
