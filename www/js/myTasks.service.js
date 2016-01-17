angular.module('tasks.services', [])

.service('MyTasksService', function($http) {

  this.getMyTasks = function() {
    return $http({
      method: 'GET',
      url: 'https://teamgantt.com/gantt/_andrew_/json.php'
    });
  }
});
