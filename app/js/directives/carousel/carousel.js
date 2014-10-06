/**
 * myCarousel
 */

angular.module(PKG.name+'.directives').directive('myCarousel',
function myCarouselDirective ($interval) {
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

      var tick = $interval(function() {
        console.log('carousel tick');
        scope.nextSlide();
      }, 5000);

      function cancelInterval() {
        $interval.cancel(tick);
      }

      scope.$on('$destroy', cancelInterval);

      function setAnimationClass (d) {
        var am = 'am-slide-';
        allSlides
          .removeClass(am+'right '+am+'left')
          .addClass(am+d);
      }

      scope.slideIsVisible = function(n) {
        return n == currentSlide;
      }

      scope.nextSlide = function (event) {
        if(event) {
          cancelInterval();
        }
        setAnimationClass('right');
        boundaries(currentSlide++);
      }

      scope.prevSlide = function (event) {
        if(event) {
          cancelInterval();
        }
        setAnimationClass('left');
        boundaries(currentSlide--);
      }


    }
  };
});
