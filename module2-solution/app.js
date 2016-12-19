(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.itemsAvailable = ShoppingListCheckOffService.getItemsAvailable();
    toBuy.buyItem = function (itemIndex, itemName, quantity) {
      ShoppingListCheckOffService.buyItem(itemIndex, itemName, quantity);
    };
  }

  AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService' ];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsAvailable = [ { name: "pizza", quantity: "3" }, { name: "chicken", quantity: "5" }, { name: "apples", quantity: "12" } ];
    var itemsBought = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBought.push(item);
    };

    service.buyItem = function(itemIndex, itemName, quantity) {
      service.addItem(itemName, quantity);
      service.removeItem(itemIndex);
    };

    service.removeItem = function(itemIndex) {
      itemsAvailable.splice(itemIndex, 1);
    };

    service.getItemsAvailable = function () {
      return itemsAvailable;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  
  }

})();
