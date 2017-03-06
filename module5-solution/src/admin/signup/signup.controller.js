(function () {
  'use strict';

  angular.module('admin')
  .controller('AdminSignUpController', AdminSignUpController);

  AdminSignUpController.$inject = [ '$http', 'MenuService', 'MyInfoService' ];
  function AdminSignUpController ($http, MenuService, MyInfoService) {
    var asuCtrl = this;

    asuCtrl.submit = function () {
      asuCtrl.getFavorite(asuCtrl.user.favorite_dish);
      //MyInfoService.submitAdmin(asuCtrl.user.first_name, asuCtrl.user.last_name, asuCtrl.user.email, asuCtrl.user.phone, asuCtrl.user.favorite_dish);
    };

    asuCtrl.getFavorite = function (favorite_dish) {
      MenuService.getMenuItem(favorite_dish).then(function (data) {
        console.log(data);
        return data;
      });
    };
  };

})();
