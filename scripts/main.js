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
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// function addHammerListeners(projectName) {
//
//     // let project = document.querySelector('div.project.'+projectName);
//     let rightScrollerBtn = project.querySelector('div.imageButtonRight');
//     let leftScrollerBtn = project.querySelector('div.imageButtonLeft');
//
//     let rightScroll = new Hammer(rightScrollerBtn);
//     let leftScroll = new Hammer(leftScrollerBtn);
//
//     rightScroll.on('swipeleft', function(ev) {
//         nextImage(rightScrollerBtn);
//     });
//
//     leftScroll.on('swiperight', function(ev) {
//         prevImage(leftScrollerBtn);
//     });
//
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//
//     // // add hammer listeners
//     // let projectNames = ['highline', 'airbnb', 'cnt', 'bmw', 'mary', 'clf', 'marriott', 'mckinsey', 'onehundred', 'north'];
//     //
//     // projectNames.forEach(function(item, val) {
//     //     addHammerListeners(item);
//     // });
//
//     let rightButtons = document.querySelectorAll('div.imageButtonRight');
//     let leftButtons = document.querySelectorAll('div.imageButtonLeft');
//
//     for (var i = 0; i<rightButtons.length; i++) {
//
//         rightButtons[i].addEventListener('click', function() {
//             nextImage(this);
//         });
//
//         leftButtons[i].addEventListener('click', function() {
//             prevImage(this);
//         });
//     }
//
//     // initialize slideshow functionality
//     let projects = d3.selectAll('div.project');
//
//     projects.select('div.imageBox')
//         .select('img')
//         .attr('class', 'selected');
//
//     projects.select('div.imageBox')
//         .selectAll('img')
//         .each(
//             function(d, i) {
//
//                 d3.select(this.parentNode.parentNode)
//                   .select('div.dotBox')
//                   .append('div')
//                   .attr('class', function() {
//                       if (i === 0) {
//                           // initialize
//                           return 'dot first selected';
//                       } else {
//                           return 'dot';
//                       }
//                   })
//                   .attr('data-dotnum', i)
//                   .on('click', function() {
//                       return thisImage(this);
//                   });
//
//             }
//         );
//
//     // turn off click for left side initially
//     projects.select('div.imageButtonLeft')
//         .attr('class', 'imageButtonLeft normal-cursor');
//
//     d3.selectAll('div.project.pprotect').each(
//         function(d) {
//             let projectBody = d3.select(this).select('.projectBody').html();
//             d3.select(this).select('.projectBody').html(function() {
//                 return encryptHTML(projectBody);
//             })
//         }
//     )
//
// }, false);
