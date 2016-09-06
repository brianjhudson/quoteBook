angular.module('quoteBookApp').controller('MainCtrl', function($scope, mainService) {
  $scope.quotes = mainService.getData();
  $scope.addData = mainService.addData;
  $scope.removeData = mainService.removeData;
});
