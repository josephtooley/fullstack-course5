(function () {
  'use strict';

  angular.module('admin')
  .controller('AdminSignUpController', AdminSignUpController);

  AdminSignUpController.$inject = [ 'MenuService', 'AdminInfoService' ];
  function AdminSignUpController(MenuService, AdminInfoService) {
    var asuCtrl = this;

    asuCtrl.submit = function (user) {
      asuCtrl.lookupFailed = false;
      MenuService.getMenuItem(user.favorite_dish_short_name)
      .then(function (response) {
        asuCtrl.saveAdmin(user);
      }, function (response) {
        asuCtrl.lookupFailed = true;
      });
    };

    asuCtrl.isSaved = function (user) {
      if (AdminInfoService.adminExists(user) === true) {
        return true;
      } else {
        return false;
      };
    };

    asuCtrl.getFavorite = function (short_name) {
      var promise = MenuService.getMenuItem(short_name);
      promise.then(function (response) {
        console.log(response.data);
      }, function (failure_response) {
        console.log(failure_response);
      });
    };
      
    asuCtrl.saveAdmin = function (user) {
      if (!asuCtrl.isSaved(user)) {
        AdminInfoService.saveAdmin(user);
        asuCtrl.saved = true;
      } else {
        console.log("Email is taken");
        asuCtrl.saved = false;
      };
    };

  }

})();
