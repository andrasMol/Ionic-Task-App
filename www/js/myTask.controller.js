angular.module('tasks.controllers')

.controller('MyTaskCtrl', function($scope, $stateParams, MyTasksService) {
  $scope.loading = true;

  if ($stateParams.taskId) {
    MyTasksService.getMyTask($stateParams.taskId).then(
      function success(task) {
        $scope.loading = false;
        $scope.myTask = task;
        $scope.myTask.style = "{width:'" + $scope.myTask.percent_compete + "%'}";
      },
      function failure(err) {
        console.log(err);
        $scope.loading = false;
        $scope.error = 'Sorry, something went wrong. Make sure you have the CORS chrome extension installed!';
      }
    )
  }
});
