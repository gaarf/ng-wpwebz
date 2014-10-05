/**
 * WpPageCtrl
 */

angular.module(PKG.name+'.controllers').controller('WpPageCtrl', 
function ($scope, myWordpress) {

  window.myWordpress = myWordpress;

  console.log('WpPageCtrl');

});

