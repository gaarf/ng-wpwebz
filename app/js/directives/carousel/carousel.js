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
          slideCount = element.find('section').length;

      function boundaries() {
        if(currentSlide > slideCount) {
          currentSlide = 1;
        }
        else if(currentSlide <= 0) {
          currentSlide = slideCount;
        }
      }

      scope.slideIsVisible = function(n) {
        return n == currentSlide;
      }

      scope.nextSlide = function() {
        boundaries(currentSlide++);
      }

      scope.prevSlide = function() {
        boundaries(currentSlide--);
      }


    }
  };
});
