/**
 * LoginCtrl
 */

angular.module(PKG.name+'.controllers').controller('LoginCtrl', 
function ($scope, $timeout, $alert, $rootScope, cfpLoadingBar, myFocusManager) {



  $scope.$on('toggleLogin', function (event) {
    $scope.loginVisible = !$scope.loginVisible;
    if($scope.loginVisible) {
      myFocusManager.focus('inputLoginEmail');
    }
  });

  $scope.doLoginSubmit = function (event) {
    $scope.loginVisible = false;
    cfpLoadingBar.start();

    $timeout(function() {
      cfpLoadingBar.complete();

      event.target.reset();

      $alert({
        title: 'Login error',
        content: 'invalid credentials!',
        type: 'danger',
        duration: 3
      });

    }, Math.ceil(Math.random() * 1000));
  };




  $scope.$on('$stateChangeSuccess', function (event, state) {
    $scope.loginVisible = false;
  });

});