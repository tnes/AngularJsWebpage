'use strict';

angular.module('myApp.controller/aboutPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/aboutPage', {
            templateUrl: 'views/aboutPage.html',
            controller: 'aboutPageCtrl'
        });
    }])

    .controller('aboutPageCtrl', ['$scope', 'appFactory', function($scope, appFactory) {
        $scope.employees = appFactory.getData();
    }]);