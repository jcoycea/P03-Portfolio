// var carouselContainers = document.querySelectorAll('.carousel-container');
//
// for ( var i=0; i < carouselContainers.length; i++ ) {
//   var container = carouselContainers[i];
//   initCarouselContainer( container );
// }
//
// function initCarouselContainer( container ) {
//   var carousel = container.querySelector('.carousel');
//   var flkty = new Flickity( carousel );
//   var carouselStatus = container.querySelector('.carousel-status');
//
//   function updateStatus() {
//     var slideNumber = flkty.selectedIndex + 1;
//     carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
//   }
//   updateStatus();
//
//   flkty.on( 'select', updateStatus );
//
// }
