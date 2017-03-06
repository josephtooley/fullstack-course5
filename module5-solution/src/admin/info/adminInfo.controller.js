(function () {
  'use strict';

  angular.module('admin')
  .controller('AdminInfoController', AdminInfoController)

  AdminInfoController.$inject = [ 'admin', 'MenuService' ];
  function AdminInfoController (admin, MenuService) {
    var $ctrl = this;

    $ctrl.admin = admin;

    $ctrl.getFavoriteDishInfo = function () {
      if (admin) {
        MenuService.getMenuItem(admin.favorite_dish)
        .then(function (response) {
          $ctrl.dish_info = response.data;
          console.log($ctrl.dish_info);
        });
      };
    }();

  }

})();
