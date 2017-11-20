'use strict';

angular.module('myApp.controller/contactPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contactPage', {
            templateUrl: 'views/contactPage.html',
            controller: 'ContactPageCtrl'
        });
    }])

    .controller('ContactPageCtrl', ['$scope', 'appFactory', function($scope, appFactory) {

        $scope.employees = appFactory.getData();
    }]);