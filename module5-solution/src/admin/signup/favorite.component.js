(function () {
  'use strict';

  angular.module('admin')
  .component('favoriteDish', {
    templateUrl: 'favorite.component.html',
    controller: FavoriteController,
    bindings: {
      item: '<'
    }
  });

  function FavoriteController () {
  };

})();
