angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Esma) {
  $scope.esma = Esma.all();
})

.controller('EsmaCtrl', function($scope, Esma) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.esma = Esma.all();
  $scope.remove = function(esm) {
    Esma.remove(esm);
  };
})

.controller('EsmDetailCtrl', function($scope, $stateParams, Esma) {
  $scope.esm = Esma.get($stateParams.esmId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
