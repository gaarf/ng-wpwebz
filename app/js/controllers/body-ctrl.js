/**
 * BodyCtrl
 * attached to the <body> tag, mostly responsible for 
 *  setting the className based events from $state and myTheme
 */

angular.module(PKG.name+'.controllers').controller('BodyCtrl', 
function ($scope, $timeout, myTheme, MYTHEME_EVENT) {

  var activeThemeClass = myTheme.getClassName();


  $scope.$on(MYTHEME_EVENT.changed, function (event, newClassName) {
    if(!event.defaultPrevented) {
      $scope.bodyClass = $scope.bodyClass.replace(activeThemeClass, newClassName);
      activeThemeClass = newClassName;
    }
  });



  $scope.$on('$stateChangeSuccess', function (event, state) {
    var classes = [];
    if(state.data && state.data.bodyClass) {
      classes = [state.data.bodyClass];
    }
    else {
      var parts = state.name.split('.'),
          count = parts.length + 1;
      while (1<count--) {
        classes.push('state-' + parts.slice(0,count).join('-'));
      }
    }

    classes.push(activeThemeClass);

    $scope.bodyClass = classes.join(' ');

    $scope.heroicTpl = false;

    if(state.name === 'home') {
      $scope.heroicTpl = '/partials/hero/carousel.html';
    }
    else {
      if(state.name.indexOf('wp.') === 0) {
        $scope.heroicTpl = '/partials/hero/title.html';
      }
    }


  });



  console.timeEnd(PKG.name);
});