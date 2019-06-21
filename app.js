(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  var noOfItems = 0;
  $scope.countItems = function () {
    noOfItems = $scope.items.split(',');
    if($scope.items.length === 0){
      $scope.message = "Please enter data first";
    }else if(noOfItems.length <= 3){
      $scope.message = "Enjoy!";
    }else{
      $scope.message = "Too much!";
    }
  };
}

})();
