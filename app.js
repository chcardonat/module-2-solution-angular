(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var buy = this;
    buy.items = ShoppingListCheckOffService.GetItemsToBuy();
    buy.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.GetBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      { name: "gallinas", quantity: 5 },
      { name: "yucas", quantity: 3 },
      { name: "papas criollas", quantity: 6},
      { name: "libras de goulash", quantity: 8 },
      { name: "cervezas", quantity: 30 }
    ];
    var boughtItems = [];

    service.GetItemsToBuy = function() {
      return toBuyItems;
    };

    service.GetBoughtItems = function() {
      return boughtItems;
    };

    service.buyItem = function(itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  };

})();
