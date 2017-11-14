'use strict';

angular.module('myApp.aboutPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/aboutPage', {
            templateUrl: 'views/aboutPage/aboutPage.html',
            controller: 'aboutPageCtrl'
        });
    }])

    .controller('aboutPageCtrl', [function() {

    }]);