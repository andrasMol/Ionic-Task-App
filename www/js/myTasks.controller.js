angular.module('tasks.controllers')

.controller('MyTasksCtrl', function($scope, MyTasksService) {

  $scope.loading = true;
  $scope.error = '';

  // first thing we do is fetch all the tasks from the remote server
  MyTasksService.getMyTasks().then(
    function success(response) {
      $scope.loading = false;
      console.log(response);
      if (response.data.tasks && response.data.tasks.length > 0) {
        $scope.myTasks = response.data.tasks;
      } else {
        $scope.showError();
      }
    },
    function failure(error) {
      $scope.loading = false;
      console.log(error);
      $scope.showError();
    }
  );

  $scope.showError = function() {
    $scope.error = 'Something went wrong. Sorry!';
  }

})
