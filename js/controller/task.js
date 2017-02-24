var app = angular.module('loginApp');

app.controller('taskCtrl', function($scope, $stateParams, TaskService, $state) {
   
    $scope.savetask = function(task) {
    	

     task.is_complete = false;
     TaskService.savetask(task);

       $state.go('list');
     }
   });
