'use strict'

angular.module('todoListApp')
.service('dataService', function($http){
  this.getTodos = function(callback){
    $http.get('mock/data.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo){
    console.log("The " + todo.name + " todo has been deleted")
    // logic later to delete data
  };
  this.saveTodos = function(todo){
    console.log(todo.name + " was saved");
  };
});
