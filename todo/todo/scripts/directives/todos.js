console.log("todos.js loaded");
angular.module("todoListApp")
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: 'true'
  }
});