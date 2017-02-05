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

    var itemsState = {
      name: 'items',
      url: '/categories/{shortName}',
      component: 'items',
      resolve: {
        items: [ 'MenuDataService', '$transition$', function (MenuDataService, $transition$) {
          console.log(MenuDataService.getItemsForCategory($transition$.params().shortName));
          return MenuDataService.getItemsForCategory($transition$.params().shortName);
        }]
      }
    };

    $stateProvider.state(homeState);
    $stateProvider.state(categoriesState);
    $stateProvider.state(itemsState);

  }

})();
