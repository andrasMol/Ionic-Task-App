angular.module('tasks', ['ionic', 'tasks.controllers', 'tasks.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.myTasks', {
    url: '/myTasks',
    views: {
      'menuContent': {
        templateUrl: 'templates/myTasks.html',
        controller: 'MyTasksCtrl'
      }
    }
  })

  .state('app.myTask', {
    url: '/myTasks/:taskId',
    views: {
      'menuContent': {
        templateUrl: 'templates/myTask.html',
        controller: 'MyTaskCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/myTasks');
});
