/**
 * WpPageCtrl
 */

angular.module(PKG.name+'.controllers').controller('WpPageCtrl', 
function ($scope, $state, myWordpress) {

  $scope.$on('$stateChangeSuccess', function (e, s) {

    var page = myWordpress.Page.get({
      id: s.data.wpPageId || s.name.split('.')[1]
    });

    page.$promise
      .then(
        function () {
          console.log(page);
          $scope.theContent = page.content;          
        },
        function () {
          $state.go('404');
        }
      );
    
  });

});

