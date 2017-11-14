'use strict';

angular.module('myApp.projectPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projectPage', {
            templateUrl: 'views/projectPage/projectPage.html',
            controller: 'projectPageCtrl'
        });
    }])

    .controller('projectPageCtrl', [function() {

    }]);