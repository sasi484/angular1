'use strict';

var loginApp = angular.module('loginApp',['ui.router','ngMessages']);
 loginApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider)
 {
  $urlRouterProvider.otherwise("/login")
  $stateProvider
  .state("login", { 
    url : "/login", 
    templateUrl : "views/login.html",
    controller : "loginCtrl",
 })

  .state("register",{
  url : "/register",
  templateUrl : "views/register.html",
  controller : "registerCtrl",
 })

 .state("list",{
  url : "/list",
  templateUrl : "views/list.html",
  controller : "listCtrl",
 })

.state("task",{
  url : "/task",
  templateUrl : "views/task.html",
  controller : "taskCtrl",
 })

.state("completed",{
  url : "/completed",
  templateUrl : "views/completed.html",
  controller : "listCtrl"
  
 })



}]);
