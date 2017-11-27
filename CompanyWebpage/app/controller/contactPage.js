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
        $scope.messages = appFactory.getMessages();
        $scope.zeroMessages = true;

        $scope.submitMessage = function() {
            if($scope.name && $scope.email && $scope.information) {
                if($scope.zeroMessages === true) {
                    $scope.zeroMessages = false;
                }
                $scope.message = [{
                    "name": $scope.name,
                    "pictureUrl": "http://wiseheartdesign.com/images/articles/default-avatar.png",
                    "information": $scope.information,
                    "email": $scope.email
                }];
                $scope.messages = $scope.messages.concat($scope.message);
                $scope.name = '';
                $scope.information = '';
                $scope.email = '';

            }
        }
    }]);
