angular.module(PKG.name)
  .config(function ($stateProvider, $urlRouterProvider) {

    /**
     * Redirects and Otherwise
     */
    $urlRouterProvider

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


      .state('product', {
        url: '/products',
        templateUrl: '/partials/products.html',
        controller: 'ProductsCtrl'
      })
        .state('product.detail', {
          url: '/:name',
        })


      .state('wp', {
        url: '/:page',
        templateUrl: '/partials/wpage.html',
        controller: 'WpPageCtrl'
      })


      .state('404', {
        templateUrl: '/partials/404.html'
      })

      ;


  })

  ;

