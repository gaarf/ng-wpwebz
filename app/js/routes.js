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


      .state('404', {
        templateUrl: '/partials/404.html'
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
        abstract: true,
        templateUrl: '/partials/wpage.html',
        controller: 'WpPageCtrl'
      })
        .state('wp.ecosystem', {
          url: '/ecosystem',
          data: {
            title: 'Ecosystem',
            heroTitle: 'Cask Ecosystem',
            subTitle: 'Because no single project is a complete solution'
          }
        })
        .state('wp.downloads', {
          url: '/downloads',
          data: {
            title: 'Downloads',
            subTitle: 'come and get\'em'
          }
        })
        .state('wp.resources', {
          url: '/resources',
          data: {
            title: 'Resources',
            subTitle: 'things and stuff for you'
          }
        })
        .state('wp.company', {
          url: '/company',
          data: {
            title: 'Company'
          }
        })
          .state('wp.company.contact', {
            url: '/contact'
          })

      ;


  })

  ;

