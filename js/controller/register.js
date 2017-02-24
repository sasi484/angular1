var app = angular.module('loginApp');

app.controller('registerCtrl', function($scope, $stateParams, userAccountService, $state) {

 $scope.saveuser = function(user) {

    userAccountService.saveuser(user);

    $state.go('login');
  }

 
 });