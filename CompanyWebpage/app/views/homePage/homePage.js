'use strict';

angular.module('myApp.homePage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            templateUrl: 'views/homePage/homePage.html',
            controller: 'homePageCtrl'
        });
    }])

    .controller('homePageCtrl', [function() {

    }]);