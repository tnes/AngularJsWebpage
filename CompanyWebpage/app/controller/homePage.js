'use strict';

angular.module('myApp.controller/homePage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            templateUrl: 'views/homePage.html',
            controller: 'homePageCtrl'
        });
    }])

    .controller('homePageCtrl', ['$scope', 'appFactory', function($scope ,appFactory) {

        $scope.xmlData = '';

        appFactory.getXmlData().then(
            function(response){
                $scope.xmlData = response.documentElement.innerHTML;
            },
            function(error){
                console.log(error.data);
            });


        $('.carousel').carousel({
            interval: 5000,
            pause: "hover",
            wrap: true
        })
            .on('click', '.carousel-control', handle_nav);

        var handle_nav = function(e) {
            e.preventDefault();
            var nav = $(this);
            nav.parents('.carousel').carousel(nav.data('slide'));
        }

    }]);

