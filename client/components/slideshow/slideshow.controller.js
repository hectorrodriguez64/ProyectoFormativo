'use strict';

(function() {

  class SlideshowController {

  constructor() {

  }

    $onInit() {

          //function to animate slider for page landing
function doAnimations(elems){
  //Cache the animationend event in a variable
  var animEndEv ='webkitAnimationEnd animationend';

  elems.each(function(){
    var $this = $(this),
    $animationType =$this.data('animation');
  $this.addClass($animationType).one(animEndEv,function(){
    $this.removeClass($animationType);
  });
});
}
//variables on page load
var $myCarousel = $('#sgedi-touch-slider'),
$firstAnimatingElems =$myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

//Initialize carousel
$myCarousel.carousel();

//animated captions in first slide on page load
doAnimations($firstAnimatingElems);

//Pause carousel
//$myCarousel.carousel('Pause');

//others slides to be animated on carousel slide event
$myCarousel.on('slide.bs.carousel',function(e){
  var $animatingElems = $(e.relatedTarget).find("[data-animation ^='animated']");
  doAnimations($animatingElems);
});
    
    }
    }

  angular.module('startUpApp')
    .component('slideshow', {
      templateUrl: 'components/slideshow/slideshow.html',
      controller: SlideshowController,
      controllerAs: 'vm'
    });
})();
