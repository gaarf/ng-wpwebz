/**
 * myFocus
 *
 * add the my-focus attribute to elements that you will want to trigger focus/select on
 *  then in the controller, use myFocusManager to trigger the DOM event
 *
 * in template:
 * <input type="text" my-focus="aNameForTheField" />
 *
 * in controller, inject myFocusManager, then:
 * myFocusManager.focus('aNameForTheField');
 */

angular.module(PKG.name+'.directives').directive('myFocus',
function myFocusDirective ($timeout, myFocusManager) {
  return {

    restrict: 'A',

    link: function (scope, element, attrs) {

      attrs.$observe('myFocus', function (newVal) {
        // console.log('[myFocus] watching', newVal);

        var cleanup = myFocusManager.is.$watch(newVal, function (o) {
          if(o) {
            $timeout(function() {
              if(o.focus) {
                element[0].focus();
              }
              else if(o.select) {
                element[0].select();
              }
            });
          }
        });

        scope.$on('$destroy', function() {
          // console.log('[myFocus] cleanup', newVal);
          cleanup();
        });
      });

    }
  };
});

