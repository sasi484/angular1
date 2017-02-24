var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.newtask = function(){
   $state.go('task');
 }
$scope.taskList= TaskService.taskDetails();
console.log($scope.taskList);

 $scope.updatetask = function(task){
	var taskIndex = $scope.taskList.indexOf(task);
	$scope.taskList[taskIndex].is_complete = true;
	TaskService.updatetask($scope.taskList);

        }

  
 $scope.deletetask = function(task){
	var taskIndex = $scope.taskList.indexOf(task);
 TaskService.deletetask(taskIndex);
 $scope.taskList = TaskService.taskDetails();
          };    


 $scope.Completedlist = function(){
 
  $state.go('completed'); 
        }


 $scope.todolist = function(){
 
  $state.go('list'); 
        }

  } );