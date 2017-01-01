(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  MenuSearchService.$inject = [ '$http', '$filter' ];
  function MenuSearchService($http, $filter) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        var menuItems = result.data.menu_items
        var foundItems = $filter('filter')(menuItems, { description: searchTerm } );
        return foundItems;
      });
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowDown',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = [ 'MenuSearchService' ];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;

    narrowDown.getMatchedMenuItems = function(searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        narrowDown.found = response;
      });
    };

    narrowDown.removeItem = function (itemIndex) {
      narrowDown.found.splice(itemIndex, 1);
    };
  }

})();
