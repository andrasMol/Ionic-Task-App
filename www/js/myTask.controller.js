angular.module('tasks.controllers')

.controller('MyTaskCtrl', function($scope, $stateParams, MyTasksService) {

  if ($stateParams.taskId) {
    MyTasksService.getMyTask($stateParams.taskId).then(
      function success(task) {
        $scope.myTask = task;
      },
      function failure(err) {
        console.log(err);
        $scope.error = 'Sorry, something went wrong';
      }
    )
  }
});
