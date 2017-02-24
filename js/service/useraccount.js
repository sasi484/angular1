var app = angular.module('loginApp');

app.factory('userAccountService', function($q) {
    
   var factory = {};
   var userinfo ={};
   factory.saveuser = function(user){

    var userinfo =  JSON.parse(localStorage.getItem('userinfo'));
     console.log(angular.copy(user));
      if(userinfo == null){
       userinfo = [];
     }
       userinfo.push(user);
        console.log(angular.copy(userinfo));
         localStorage.setItem('userinfo', JSON.stringify(userinfo));
   }
  
  factory.getUsers = function() {
   return JSON.parse(localStorage.getItem('userinfo'));
    }
  
  factory.isExistUser = function(user){
  	var deferred = $q.defer();
    var isValidUser = false;
    var userinfo =  JSON.parse(localStorage.getItem('userinfo'));  



    for (var i=0; i< userinfo.length; i++){
	 var userDetails = userinfo[i];		
      if ((user.userName == userDetails.userName) && (user.password == userDetails.password)){
        isValidUser = true;
          break;
        }
     }
    deferred.resolve(isValidUser);

   return deferred.promise;

     }
         
  return factory;
     });