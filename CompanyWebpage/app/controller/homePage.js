'use strict';

angular.module('myApp.controller/homePage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {
            templateUrl: 'views/homePage.html',
            controller: 'homePageCtrl'
        });
    }])

    .controller('homePageCtrl', [function() {

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

