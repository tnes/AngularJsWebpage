'use strict';

// Declare app level module which depends on views, and components
angular.
  module('myApp', [
    'ngRoute',
    'myApp.controller/homePage',
    'myApp.controller/projectPage',
    'myApp.controller/contactPage',
    'myApp.controller/aboutPage',
    'myApp.appFactory',
    'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homePage'});
  }
  ]);
