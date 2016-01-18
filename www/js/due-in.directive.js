angular.module('tasks.controllers')

.directive('dueIn', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/due-in.html',
    scope: {
      myTask: '='
    }
  };
});
