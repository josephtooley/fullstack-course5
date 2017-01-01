(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = [ '$http' ];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function () {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
      return response;
    };
  }

  NarrowItDownController.$inject = [ 'MenuSearchService' ];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;

    var promise = MenuSearchService.getMatchedMenuItems();

    promise.then(function (response) {
      narrowDown.found = response.data;
    })
    .catch(function (error) {
      console.log("Something went wrong");
    });
  }

})();
