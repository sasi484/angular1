
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams, userAccountService, $state) {
  $scope.name = 'Hello';
  
 $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }
  $scope.submit=function(user)
  {
    userAccountService.isExistUser(user).then(function(resp){
    	if(resp){
    		$state.go('list');
    	}

    })
       
     }

 });