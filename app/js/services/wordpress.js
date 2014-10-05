/**
 * myWordpress
 */

var module = angular.module(PKG.name+'.services');

var API_PREFIX = 'http://localhost:8081/127.0.0.1/wp-json/';

module.factory('myWordpress', function ($resource) {
  return {

    Post: $resource(API_PREFIX + 'posts/:id'),

    Page: $resource(API_PREFIX + 'pages/:id')

  };
});

module.config(function ($httpProvider) {
  $httpProvider.interceptors.push(function ($log) {
    return {
     'request': function(config) {
        if(config.url.indexOf(API_PREFIX) === 0) {

          angular.extend(config.headers, {
            'X-Requested-With': angular.version.codeName
          });

          $log.log('[myWordpress]', config.method, 
                config.url.substr(API_PREFIX.length));
        }
        return config;
      }

    };
  });
});
