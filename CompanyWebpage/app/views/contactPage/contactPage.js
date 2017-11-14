'use strict';

angular.module('myApp.contactPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contactPage', {
            templateUrl: 'views/contactPage/contactPage.html',
            controller: 'ContactPageCtrl'
        });
    }])

    .controller('ContactPageCtrl', [function() {

    }]);