angular.module('quoteBookApp').controller('mainCtrl', function($scope, mainService) {
  $scope.isCtrlWorking = 'working'
  $scope.isSvcWorking = mainService.working;
});
