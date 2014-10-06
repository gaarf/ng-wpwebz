/**
 * myNavbar
 */

angular.module(PKG.name+'.directives').directive('myNavbar',
function myNavbarDirective ($dropdown, $rootScope, $state) {
  return {
    restrict: 'A',
    templateUrl: 'navbar/navbar.html',

    link: function (scope, element, attrs) {

      scope.navbarLinks = ['ecosystem','downloads','resources','company']
        .map(function (one){
          var s = $state.get('wp.'+one);
          return { sref: s.name, label: s.data.title };
        });

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

      scope.navbarCollapsed = false;

      scope.collapseUnlessToggle = function (e) {
        if(!angular.element(e.target).hasClass('dropdown-toggle')) {
          scope.navbarCollapsed = false;          
        }
      }


      scope.doLogin = function () {
        $rootScope.$broadcast('toggleLogin');
      }

    }
  };
});
