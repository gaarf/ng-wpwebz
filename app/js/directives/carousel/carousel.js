/**
 * myCarousel
 */

angular.module(PKG.name+'.directives').directive('myCarousel',
function myCarouselDirective () {
  return {
    restrict: 'AC',

    link: function (scope, element, attrs) {
      element.addClass('my-carousel');

      var currentSlide = 1,
          allSlides = element.find('section'),
          slideCount = allSlides.length;

      function boundaries() {
        if(currentSlide > slideCount) {
          currentSlide = 1;
        }
        else if(currentSlide <= 0) {
          currentSlide = slideCount;
        }
      }

      function setAnimationClass (d) {
        var am = 'am-slide-';
        allSlides.removeClass(am+'right '+am+'left');
        allSlides.addClass(am+d);
      }

      scope.slideIsVisible = function(n) {
        return n == currentSlide;
      }

      scope.nextSlide = function() {
        setAnimationClass('right');
        boundaries(currentSlide++);
      }

      scope.prevSlide = function() {
        setAnimationClass('left');
        boundaries(currentSlide--);
      }


    }
  };
});
