'use strict';

var app = angular.module('loginApp');

app.factory('TaskService', function() {

   var factory = {};
   var List = [];
//localStorage.setItem('List', JSON.stringify(List));
   factory.savetask = function(task){

    List =  JSON.parse(localStorage.getItem('List'));
	
    console.log(angular.copy(task));
    if(List == null){
     List = [];
    }
	task.id = Math.floor((Math.random() * 100000) + 1);
        List.push(task);
      console.log(angular.copy(List));
     localStorage.setItem('List', JSON.stringify(List));
   }
      factory.taskDetails = function(){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
       return List;
       }
    
    factory.gettask = function(index){
    var completedList =  JSON.parse(localStorage.getItem('completedList'));
    console.log(angular.copy(completedList));
     return completedList[index];
    }
      

    factory.updatetask = function(taskList){	
		console.log(taskList);
		localStorage.setItem('List', JSON.stringify(taskList));
     }


      factory.deletetask = function(index){
      var List =  JSON.parse(localStorage.getItem('List'));
      console.log(angular.copy(List));
      List.splice(index, 1);
      console.log(angular.copy(List));
      localStorage.setItem('List', JSON.stringify(List));
      return List;
    }
       return factory;
     });