angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Esma) {
  $scope.chats = Esma.getChats();
})

.controller('PlatesCtrl', function($scope, Esma) {
  $scope.plates = Esma.getPlates();
})

.controller('EsmaCtrl', function($scope, Esma) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.esma = Esma.getEsma();
  $scope.removeEsm = function(esm) {
    Esma.removeEsm(esm);
  };
})

.controller('EsmDetailCtrl', function($scope, $stateParams, Esma) {
  $scope.esm = Esma.getEsm($stateParams.esmId);
  console.log($scope.esm)
})

.controller('ChatsCtrl', function($scope, Esma) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Esma.getChats();
  $scope.removeChat = function(chat) {
    Esma.removeChat(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Esma) {
  $scope.chat = Esma.getChat($stateParams.chatId);
  console.log($scope.chat)
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
