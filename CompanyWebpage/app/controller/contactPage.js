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

        $scope.submitEmployee = function() {
            if($scope.name && $scope.jobTitle && $scope.phonenumber && $scope.email && $scope.information) {
                $scope.employee = [{
                    "name": $scope.name,
                    "jobTitle": $scope.jobTitle,
                    "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                    "information": $scope.information,
                    "email": $scope.email,
                    "phonenumber": $scope.phonenumber
                }];
                $scope.employees = $scope.employees.concat($scope.employee);
                $scope.name = '';
                $scope.jobTitle = '';
                $scope.information = '';
                $scope.email = '';
                $scope.phonenumber = '';

            }
        }
    }]);