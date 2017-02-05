(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = [ '$http' ];
  function MenuDataService($http) {
    var svc = this;
    
    svc.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function(response) {
        return response.data;
      }, function(response) {
        alert(response);
      });

    };

    svc.getItemsForCategory = function(categoryShortName) {
      var categoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      return $http({
        method: 'GET',
        url: categoryUrl
      }).then(function(response) {
        return response.data;
      }, function(response) {
        alert(response);
      });
    };

  }

})();
