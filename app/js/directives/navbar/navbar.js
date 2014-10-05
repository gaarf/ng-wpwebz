/**
 * myNavbar
 */

angular.module(PKG.name+'.directives').directive('myNavbar',
function myNavbarDirective ($dropdown) {
  return {
    restrict: 'A',
    templateUrl: 'navbar/navbar.html',

    link: function (scope, element, attrs) {

      scope.navbarLinks = [
        { sref: 'wp({page:"ecosystem"})', label: 'Ecosystem' },
        { sref: 'wp({page:"downloads"})', label: 'Downloads' },
        { sref: 'wp({page:"resources"})', label: 'Resources' },
        { sref: 'wp({page:"company"})', label: 'Company' }
      ];

      scope.dropdownLinks = [
        { sref: 'product.detail({name:"cdap"})', label: 'CDAP' },
        { sref: 'product.detail({name:"coopr"})', label: 'Coopr' },
        { sref: 'product.detail({name:"tigon"})', label: 'Tigon' }
      ];

      $dropdown(angular.element(element[0].querySelector('a.dropdown-toggle')), {
        template: 'navbar/dropdown.html',
        animation: 'am-flip-x',
        placement: 'bottom-left',
        scope: scope
      });

    }
  };
});
