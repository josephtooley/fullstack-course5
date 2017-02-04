(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
      name: 'home',
      url: '/home',
      component: 'home'
    };

    var categoriesState = {
      name: 'categories',
      url: '/categories',
      component: 'categories',
      resolve: {
        categories: [ 'MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    };

    $stateProvider.state(homeState);
    $stateProvider.state(categoriesState);

  }

})();
