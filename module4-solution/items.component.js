(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.component.html',
    bindings: {
      items: '<'
    }
  });

})();
