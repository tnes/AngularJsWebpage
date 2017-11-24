'use strict';

angular.module('myApp.controller/projectPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projectPage', {
            templateUrl: 'views/projectPage.html',
            controller: 'projectPageCtrl'
        });
    }])

    .controller('projectPageCtrl', [ '$scope', 'appFactory', function($scope, appFactory) {
        $scope.projects = appFactory.getProjects();
    }]);