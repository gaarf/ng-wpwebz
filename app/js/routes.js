angular.module(PKG.name)
  .config(function ($stateProvider, $urlRouterProvider) {

    /**
     * Redirects and Otherwise
     */
    $urlRouterProvider
      // .when('/signin', '/login')
      .otherwise(function($injector, $location){
        $injector.get('$state').go($location.path() ? '404' : 'home');
      });


    /**
     * State Configurations
     */
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: '/partials/home.html',
        controller: 'HomeCtrl'
      })

      .state('404', {
        templateUrl: '/partials/404.html'
      })

      ;


  })

  ;

