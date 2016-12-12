(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = [ '$scope', '$filter' ];
  function LunchCheckController($scope, $filter) {
    $scope.sayMessage = function () {
      var input = $scope.menuTextBox;
      if(input == null || input == "") {
        $scope.message = "Please enter data first"
      } else {
        var arrayLength = input.split(',').length;
        switch(true) {
          case (arrayLength <= 3):
            $scope.message = "Enjoy!";
            break;
          case (arrayLength > 3):
            $scope.message = "Too much!";
            break;
        }
      }
    }
  }
})();
