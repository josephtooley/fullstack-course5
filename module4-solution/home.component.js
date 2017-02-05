(function () {
  'use strict';

  angular.module('MenuApp')
  .component('home', {
    template: '<h2>Welcome to our Restaurant</h2>' +
    '<a ui-sref="categories">categories</a>'
  });

})();
