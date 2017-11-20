'use strict';

// Declare app level module which depends on views, and components
angular.
  module('myApp', [
    'ngRoute',
    'myApp.homePage',
    'myApp.projectPage',
    'myApp.contactPage',
    'myApp.aboutPage',
    'myApp.appFactory',
    'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homePage'});
  }
  ]);
