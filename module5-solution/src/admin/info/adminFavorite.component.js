(function () {
  'use strict';

  angular.module('admin')
  .component('favoriteDish', {
    templateUrl: 'src/admin/info/favoriteDish.html',
    controller: FavoriteDishController,
    bindings: {
      favorite_dish: '<'
    }
  });

  FavoriteDishController.$inject = [ 'MenuService', 'adminObj' ];
  function FavoriteDishController(MenuService, adminObj) {
    var $ctrl = this;

    $ctrl.getFavoriteDish = function () {
      MenuService.getMenuItem(admin.favorite_dish)
      .then(function (response) {
        console.log("here");
        $ctrl.favorite_dish = response.data;
      })
    };

  };

})();
