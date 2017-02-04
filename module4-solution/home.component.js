(function () {
  'use strict';

  angular.module('MenuApp')
  .component('home', {
    template: '<h2>Home!</h2>' +
    '<a ui-sref="categories">categories</a>'
  });

})();
