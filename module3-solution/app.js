(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = [ '$http', '$filter' ];
  function MenuSearchService($http, $filter) {
    var service = this;

    service.getMatchedMenuItems = function () {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        var menuItems = result.data.menu_items
        var foundItems = $filter('filter')(menuItems, { description: "carrots" } );
        return foundItems;
      });
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html'
    };

    return ddo;
  }

  NarrowItDownController.$inject = [ 'MenuSearchService' ];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;
    var promise = MenuSearchService.getMatchedMenuItems();

    promise.then(function (response) {
      narrowDown.found = response;
    });
  }

})();
