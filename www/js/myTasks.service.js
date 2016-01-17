angular.module('tasks.services', [])

.service('MyTasksService', function($http, $q) {
  var allTasks = {};

  this.getMyTask = function(id) {
    // this will return a promise since we might not have the item in cache yet
    var deferred = $q.defer();
    if (allTasks[id]) {
      deferred.resolve(allTasks[id]);
    } else {
      this.getMyTasks().then(
        function success(response) {
          if (allTasks[id]) {
            deferred.resolve(allTasks[id]);
          } else {
            deferred.reject();
          }
        },
        function failure(err) {
          deferred.reject(err);
        }
      );
    }
    return deferred.promise;
  }

  this.getMyTasks = function() {
    return $http({
      method: 'GET',
      url: 'https://teamgantt.com/gantt/_andrew_/json.php'
    }).then(
      function success(response) {
        if (response.data.tasks) {
          for (var i = 0; i < response.data.tasks.length; i++) {
            allTasks[response.data.tasks[i].id] = response.data.tasks[i];
          }
        }
        // make sure we still return this line as this returns it as part of the promise chain
        return response;
      }
    );
  }
});
