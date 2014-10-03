/**
 * myNavbar
 */

angular.module(PKG.name+'.directives').directive('myNavbar',
function myNavbarDirective ($dropdown, myTheme) {
  return {
    restrict: 'A',
    templateUrl: 'navbar/navbar.html',

    link: function (scope, element, attrs) {

      $dropdown(angular.element(element[0].querySelector('a.dropdown-toggle')), {
        template: 'navbar/dropdown.html',
        animation: 'am-flip-x',
        placement: 'bottom-right',
        scope: scope
      });

      scope.theme = myTheme;

      scope.navbarLinks = [
        { sref: 'foo',     label: 'Foo!' },
        { sref: 'bar',     label: 'Bar!' },
      ];

    }
  };
});
