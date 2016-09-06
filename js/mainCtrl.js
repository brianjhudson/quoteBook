angular.module('quoteBookApp').controller('MainCtrl', function($scope, mainService) {
  $scope.quotes = mainService.getData();
  $scope.addData = function(quote) {
    mainService.addData(quote);
    $scope.quote = {};
  }
  $scope.removeData = mainService.removeData;
});
