'use strict';

angular.module('myApp.homePage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homePage', {
    templateUrl: 'views/homePage/homePage.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);