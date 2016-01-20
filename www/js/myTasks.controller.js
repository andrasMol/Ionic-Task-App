angular.module('tasks.controllers')

.controller('MyTasksCtrl', function($scope, MyTasksService) {
  $scope.projects = {};
  $scope.loading = true;
  $scope.error = '';

  // first thing we do is fetch all the tasks from the remote server
  MyTasksService.getMyTasks().then(
    function success(response) {
      $scope.loading = false;
      console.log(response);
      if (response.data.tasks && response.data.tasks.length > 0) {
        $scope.myTasks = response.data.tasks;
        computeExtraProperties();
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
    $scope.error = 'Something went wrong. Sorry! Make sure you have the CORS chrome extension installed!';
  }

  function computeExtraProperties() {
    for (var i = 0; i < $scope.myTasks.length; i++) {
      if (!$scope.projects[$scope.myTasks[i].project_name]) {
        $scope.projects[$scope.myTasks[i].project_name] = {};
        $scope.projects[$scope.myTasks[i].project_name].tasks = [];
      }
      $scope.projects[$scope.myTasks[i].project_name].tasks.push($scope.myTasks[i]);
      $scope.myTasks[i].style = "{width:'" + $scope.myTasks[i].percent_compete + "%'}";
    }
    console.log($scope.projects);
  }
})
