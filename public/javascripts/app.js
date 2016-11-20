var app = angular.module('clockApp', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/404error'
    });
});
