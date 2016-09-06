angular.module('quoteBookApp').controller('MainCtrl', function($scope, mainService) {
  $scope.isCtrlWorking = 'working'
  $scope.isSvcWorking = mainService.working;
});
