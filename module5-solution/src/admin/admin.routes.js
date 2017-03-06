(function () {
  'use strict';

  angular.module('admin')
  .config(routeConfig);

  routeConfig.$inject = [ '$stateProvider' ];
  function routeConfig ($stateProvider) {
    $stateProvider
    .state('admin', {
      abstract: true,
      templateUrl: 'src/admin/admin.html'
    })
    .state('admin.signup', {
      url: '/admin/signup',
      templateUrl: 'src/admin/signup/adminSignUp.html',
      controller: 'AdminSignUpController',
      controllerAs: 'asuCtrl'
    })
    .state('admin.info', {
      url: '/admin/info',
      templateUrl: 'src/admin/info/info.html',
      controller: 'AdminInfoController',
      controllerAs: 'adminInfo',
      resolve: {
        admin: [ 'AdminInfoService', function (AdminInfoService) {
          return AdminInfoService.getAdmins()[0];
        }]
      }
    });

  }

})();
