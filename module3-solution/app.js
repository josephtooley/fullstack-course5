(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html'
    };

    return ddo;
  }

  MenuSearchService.$inject = [ '$http', '$filter' ];
  function MenuSearchService($http, $filter) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        var foundItems =($filter('filter')(response.data.menu_items, { description: searchTerm } ) );
        console.log(foundItems);
      });
      return response;
    };
  };

  NarrowItDownController.$inject = [ 'MenuSearchService' ];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;
    var promise = MenuSearchService.getMatchedMenuItems(narrowDown.SearchTermInput);

    promise.then(function (response) {
      narrowDown.found = response.data;
    })
    .catch(function (error) {
      console.log("Something went wrong.");
    });

  }

})();
